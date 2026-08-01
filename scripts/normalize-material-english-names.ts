import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) throw new Error("DATABASE_URL is not set");

const sql = neon(databaseUrl);
const dryRun = process.argv.includes("--dry-run");
const hanPattern = "[\u3400-\u9fff]";
const hasHan = (value: string) => /[\u3400-\u9fff]/u.test(value);

// Keep this dictionary explicit and reviewable. These terms are product-name
// fragments found in the English material-name column, not free-form prose.
const terminology = new Map<string, string>([
  ["\u98ce\u7535\u53f6\u7247\u704c\u6ce8\u73af\u6c27", "Wind-blade infusion epoxy"],
  ["\u6eb4\u5316\u73af\u6c27\u4e59\u70ef\u57fa\u916f", "Brominated epoxy vinyl ester"],
  ["\u915a\u919b\u6539\u6027\u4e59\u70ef\u57fa\u916f", "Phenolic-modified vinyl ester"],
  ["\u5f39\u6027\u4f53\u6539\u6027\u4e59\u70ef\u57fa\u916f", "Elastomer-modified vinyl ester"],
  ["\u5149\u56fa\u5316\u4e0d\u9971\u548c\u805a\u916f", "UV-curable unsaturated polyester"],
  ["\u90bb\u82ef\u578b\u4e0d\u9971\u548c\u805a\u916f", "Orthophthalic unsaturated polyester"],
  ["\u95f4\u82ef\u578b\u4e0d\u9971\u548c\u805a\u916f", "Isophthalic unsaturated polyester"],
  ["\u578b\u4e0d\u9971\u548c\u805a\u916f", "unsaturated polyester"],
  ["\u70ed\u5851\u73af\u6c27", "Thermoplastic epoxy"],
  ["\u6c34\u6027\u73af\u6c27", "Waterborne epoxy"],
  ["\u8102\u73af\u65cf\u73af\u6c27", "Cycloaliphatic epoxy"],
  ["\u915a\u919b\u73af\u6c27", "Novolac epoxy"],
  ["\u90bb\u82ef\u578b\u4e59\u70ef\u57fa\u916f", "Orthophthalic vinyl ester"],
  ["\u53cc\u9a6c\u6765\u9170\u4e9a\u80fa", "Bismaleimide"],
  ["\u6c30\u9178\u916f\u6811\u8102", "Cyanate ester resin"],
  ["\u6709\u673a\u7845\u6811\u8102", "Silicone resin"],
  ["\u805a\u6c28\u916f\u6811\u8102", "Polyurethane resin"],
  ["\u805a\u9170\u4e9a\u80fa", "Polyimide"],
  ["\u82ef\u5e76\u6076\u55ea", "Benzoxazine"],
  ["\u915a\u919b\u6811\u8102", "Phenolic resin"],
  ["\u4e13\u7528\u6811\u8102", "Specialty resin"],
  ["\u53cc\u915a", "Bisphenol"],
  ["\u73af\u6c27", "Epoxy"],
  ["\u53ef\u56de\u6536", "Recyclable"],
  ["\u8fde\u7eed\u4e1d\u675f", "Continuous filament tow"],
  ["\u5927\u4e1d\u675f", "Large tow"],
  ["\u5e73\u7eb9\u78b3\u5e03", "Plain-weave carbon fabric"],
  ["\u65b9\u683c\u5e03", "Woven roving"],
  ["\u65e0\u637b\u7c97\u7eb1", "Roving"],
  ["\u77ed\u5207\u6be1", "Chopped strand mat"],
  ["\u7f1d\u7f16\u5e03", "Stitched fabric"],
  ["\u8868\u9762\u6be1", "Surfacing mat"],
  ["\u7f20\u7ed5\u7c97\u7eb1", "Filament-winding roving"],
  ["\u5355\u5411\u5e03", "Unidirectional fabric"],
  ["\u5e73\u7eb9\u5e03", "Plain-weave fabric"],
  ["\u65e0\u7eac\u5e03", "Unidirectional fabric"],
  ["\u77ed\u7ea4", "Staple fiber"],
  ["\u957f\u4e1d", "Filament yarn"],
  ["\u5bf9\u4f4d", "Para"],
  ["\u95f4\u4f4d", "Meta"],
  ["\u8010\u8150\u8680\u80f6\u8863", "Corrosion-resistant gel coat"],
  ["\u963b\u71c3\u578b\u80f6\u8863", "Flame-retardant gel coat"],
  ["\u55b7\u6d82\u578b\u80f6\u8863", "Spray-grade gel coat"],
  ["\u901a\u7528\u578b\u80f6\u8863", "General-purpose gel coat"],
  ["\u8010\u5019\u578b", "Weather-resistant"],
  ["\u80f6\u8863", "Gel coat"],
  ["\u7c73\u9ec4", "Beige"],
  ["\u900f\u660e", "Clear"],
  ["\u7070", "Gray"],
  ["\u767d", "White"],
  ["\u9ed1", "Black"],
  ["\u62c9\u6324\u73bb\u7483\u94a2\u683c\u6805", "Pultruded FRP grating"],
  ["\u6a21\u5851\u73bb\u7483\u94a2\u683c\u6805", "Molded FRP grating"],
  ["\u73bb\u7483\u94a2\u51b7\u5374\u5854\u586b\u6599", "FRP cooling-tower fill"],
  ["\u73bb\u7483\u94a2\u7f20\u7ed5\u7ba1\u9053", "Filament-wound FRP pipe"],
  ["\u73bb\u7483\u94a2\u8131\u786b\u5854", "FRP flue-gas desulfurization tower"],
  ["\u73bb\u7483\u94a2\u50a8\u7f50", "FRP storage tank"],
  ["\u5b9e\u5fc3\u5706\u68d2", "Solid round rod"],
  ["\u77e9\u5f62\u677f", "Rectangular plate"],
  ["\u5de5\u5b57\u6881", "I-beam"],
  ["\u65b9\u7ba1", "Square tube"],
  ["\u5706\u7ba1", "Round tube"],
  ["\u69fd\u94a2", "Channel"],
  ["\u89d2\u94a2", "Angle"],
  ["\u534a\u6c38\u4e45\u8131\u6a21\u5242", "Semi-permanent mold release agent"],
  ["\u8fc7\u6c27\u5316\u7532\u4e59\u916e", "Methyl ethyl ketone peroxide"],
  ["\u8fc7\u6c27\u5316\u73af\u5df1\u916e", "Cyclohexanone peroxide"],
  ["\u8fc7\u6c27\u5316\u82ef\u7532\u9170", "Benzoyl peroxide"],
  ["\u4e8c\u7532\u57fa\u82ef\u80fa", "N,N-dimethylaniline"],
  ["\u73af\u70f7\u9178\u94b4", "Cobalt naphthenate"],
  ["\u8f9b\u9178\u94b4", "Cobalt octoate"],
  ["\u6c27\u5316\u9541\u7cca", "Magnesium oxide paste"],
  ["\u6c22\u6c27\u5316\u94dd", "Aluminum trihydrate"],
  ["\u7845\u7070\u77f3\u7c89\u672b", "Wollastonite powder"],
  ["\u78b3\u9178\u9499", "Calcium carbonate"],
  ["\u5df4\u897f\u68d5\u6988\u8721", "Carnauba wax"],
  ["\u94dd\u8702\u7a9d", "Aluminum honeycomb"],
  ["\u8702\u7a9d", "Honeycomb"],
  ["\u7845\u70f7", "Silane"],
  ["\u6eb6\u6db2", "solution"],
  ["\u8131\u6a21\u5242", "Mold release agent"],
  ["\u963b\u71c3", "Flame-retardant"],
  ["\u76ee", "mesh"],
]);

function translateMaterialName(source: string): string {
  let translated = source;
  for (const [term, english] of [...terminology].sort(
    ([left], [right]) => right.length - left.length,
  )) {
    translated = translated.replaceAll(term, english);
  }
  return translated
    .replace(/\s+/g, " ")
    .replace(/\s+([,/])/g, "$1")
    .trim();
}

type MaterialRow = { id: string; name_en: string };

async function main() {
  const rows = (await sql.query(
    "select id, name_en from materials where name_en ~ $1 order by id",
    [hanPattern],
  )) as MaterialRow[];

  const updates: Array<{ id: string; name_en: string }> = [];
  for (const row of rows) {
    const translated = translateMaterialName(row.name_en);
    if (hasHan(translated)) {
      throw new Error(`Unmapped terminology remains in material ${row.id}`);
    }
    if (translated !== row.name_en) {
      updates.push({ id: row.id, name_en: translated });
    }
  }

  if (!dryRun && updates.length > 0) {
    await sql.query(
      `update materials as material
       set name_en = incoming.name_en,
           updated_at = now()
       from jsonb_to_recordset($1::jsonb) as incoming(id text, name_en text)
       where material.id = incoming.id`,
      [JSON.stringify(updates)],
    );
  }

  const legacySeriesSuffix = `(\u7cfb\u5217)`;
  if (!dryRun) {
    await sql.query(
      "update standards set code = replace(code, $1, $2) where code like $3",
      [legacySeriesSuffix, "(series)", `%${legacySeriesSuffix}%`],
    );

    const legacyReferenceFragment = `\u501f\u9274`;
    await sql.query(
      "update papers set commentary_en = replace(commentary_en, $1, $2) where commentary_en like $3",
      [legacyReferenceFragment, "practical relevance", `%${legacyReferenceFragment}%`],
    );
  }

  console.log(
    JSON.stringify({
      dryRun,
      matched: rows.length,
      updated: updates.length,
      remaining: 0,
      standardsNormalized: dryRun ? "not applied" : "applied",
    }),
  );
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
