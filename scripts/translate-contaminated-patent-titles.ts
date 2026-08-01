import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("DATABASE_URL is not set");

const sql = neon(databaseUrl);
const model = process.env.OLLAMA_TRANSLATION_MODEL ?? "qwen2.5:7b";
const ollamaUrl = process.env.OLLAMA_URL ?? "http://127.0.0.1:11434/api/generate";
const dryRun = process.argv.includes("--dry-run");
const limitArg = process.argv.find((argument) => argument.startsWith("--limit="));
const limit = limitArg ? Number(limitArg.split("=")[1]) : Number.POSITIVE_INFINITY;
// Small batches keep local-model JSON responses complete and easy to validate.
const batchSize = 4;
const hanPattern = "[\u3400-\u9fff]";
const hasHan = (value: string) => /[\u3400-\u9fff]/u.test(value);

type PatentRow = { id: string; title_en: string };
type Translation = { id: string; title: string };

const systemPrompt = `Translate patent titles into concise, professional English for composites-industry engineers and procurement teams.

Terminology requirements:
- Use pultrusion, filament winding, resin transfer molding, vacuum infusion, compression molding, FRP, GFRP, CFRP, glass fiber, carbon fiber, basalt fiber, aramid fiber, unsaturated polyester, vinyl ester, epoxy, polyurethane, phenolic resin, prepreg, gel coat, grating, rebar and wind-turbine blade where applicable.
- Use laminate layup for reinforcement-layer architecture, spar cap for a wind-turbine blade load-bearing cap, sucker rod for oil-well rods, telecommunication pole for communications poles, and clamp for a hoop-style mechanical clamp.
- Preserve patent codes, model numbers, acronyms, chemical formulas, HTML tags and numeric specifications.
- Transliterate company, brand, place and personal names in pinyin when no established English name is available.
- Do not add claims, novelty or technical detail that is absent from the source.
- Use title case only where natural for an English patent title.
- Return JSON only in this shape: {"translations":[{"id":"...","title":"..."}]}.
- Return every supplied id exactly once. The title must contain no Han characters.`;

async function translateBatch(rows: PatentRow[]): Promise<Translation[]> {
  const input = JSON.stringify(
    rows.map((row) => ({ id: row.id, title: row.title_en })),
  );

  let lastResponse = "";
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const correction =
      attempt > 1
        ? `\n\nCorrection required: the previous response was invalid, incomplete, or retained Han characters. Translate every character and return complete valid JSON. Previous response:\n${lastResponse}`
        : "";
    const prompt = `${systemPrompt}\n\nInput:\n${input}${correction}`;
    const response = await fetch(ollamaUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        prompt,
        stream: false,
        format: "json",
        options: { temperature: 0, num_ctx: 8192, num_predict: 2048 },
      }),
    });
    if (!response.ok) {
      throw new Error(`Ollama returned ${response.status}`);
    }
    const payload = (await response.json()) as { response?: string };
    lastResponse = payload.response ?? "";
    try {
      const parsed = JSON.parse(payload.response ?? "{}") as {
        translations?: Translation[];
      };
      const translations = parsed.translations ?? [];
      const byId = new Map(translations.map((item) => [item.id, item]));
      const ordered = rows
        .map((row) => byId.get(row.id))
        .filter(Boolean)
        .map((item) => ({
          ...item!,
          title: item!.title.replace(/<\/?b>/gi, "").replace(/\s+/g, " ").trim(),
        })) as Translation[];
      if (
        ordered.length === rows.length &&
        ordered.every((item) => item.title.trim() && !hasHan(item.title))
      ) {
        return ordered;
      }
    } catch {
      // Retry malformed or incomplete model output.
    }
    if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(
    `Translation validation failed for batch beginning ${rows[0]?.id}: ${lastResponse.slice(0, 500)}`,
  );
}

async function main() {
  const rows = (await sql.query(
    "select id, title_en from patents where title_en ~ $1 order by id",
    [hanPattern],
  )) as PatentRow[];
  const selected = rows.slice(0, Number.isFinite(limit) ? limit : rows.length);
  const translated: Translation[] = [];

  for (let index = 0; index < selected.length; index += batchSize) {
    const batch = selected.slice(index, index + batchSize);
    let batchTranslations: Translation[];
    try {
      batchTranslations = await translateBatch(batch);
    } catch (error) {
      if (batch.length === 1) throw error;
      batchTranslations = [];
      for (const row of batch) {
        batchTranslations.push(...(await translateBatch([row])));
      }
    }
    translated.push(...batchTranslations);
    if (!dryRun) {
      await sql.query(
        `update patents as patent
         set title_en = incoming.title
         from jsonb_to_recordset($1::jsonb) as incoming(id text, title text)
         where patent.id = incoming.id`,
        [JSON.stringify(batchTranslations)],
      );
    }
    console.log(`translated ${Math.min(index + batch.length, selected.length)}/${selected.length}`);
  }

  if (dryRun) console.log(JSON.stringify(translated, null, 2));

  console.log(
    JSON.stringify({ dryRun, model, matched: rows.length, translated: translated.length }),
  );
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
