import { generateText } from "ai";
import { z } from "zod";
import {
  withChatFallbackForRequest,
  isChatConfiguredForRequest,
} from "@/lib/ai/provider";

export const runtime = "nodejs";
export const maxDuration = 20;

const Body = z.object({
  question: z.string().min(1).max(2000),
  answer: z.string().min(1).max(8000),
  locale: z.enum(["zh", "en"]).optional(),
});

const FollowupsSchema = z.object({
  questions: z.array(z.string().min(8).max(180)).min(2).max(5),
});

/**
 * Given the just-streamed Q/A pair, return up to 3 follow-up questions.
 * Perplexity-style "Related" surface. Cheap second LLM call so the chat
 * route stays focused on the main answer's streaming throughput.
 *
 * We use plain text generateText + JSON parsing instead of Output.object()
 * because the project routes most chat traffic through OpenRouter as an
 * OpenAI-compatible endpoint — and OR's gemini relay does not reliably
 * honor structured-output response_format. Plain text parsing is robust
 * across every supported provider (OR, direct Google, DeepSeek).
 */
export async function POST(req: Request) {
  if (!isChatConfiguredForRequest(req)) {
    return Response.json({ questions: [] }, { status: 200 });
  }

  let body: z.infer<typeof Body>;
  try {
    body = Body.parse(await req.json());
  } catch {
    return Response.json({ error: "bad request" }, { status: 400 });
  }

  const system = `You generate 3 follow-up questions an overseas FRP composites engineer or procurement manager would naturally ask AFTER reading the answer below. The questions must:
- Be concrete and specific (mention a fiber, resin, standard code, country, certification, MOQ, etc).
- Push the conversation forward, not restate what was already answered.
- Stay under 18 words each.
- Be in plain English.
- Cover different angles: one technical deeper-dive, one supplier / sourcing follow-up, one compliance / standards angle.

Output ONLY a JSON object on a single line, no prose, no code fences:
{"questions":["...","...","..."]}`;

  const userBlock = `User asked:\n${body.question}\n\nAssistant answered:\n${body.answer}\n\nReturn the JSON now.`;

  try {
    // Within-side provider fallback: a primary-provider error retries the next
    // same-side provider (never crossing the GFW/brand boundary) before we
    // degrade to an empty follow-up list.
    const { result } = await withChatFallbackForRequest(req, (model) =>
      generateText({
        model,
        system,
        prompt: userBlock,
        temperature: 0.5,
        maxOutputTokens: 400,
      }),
    );
    const parsed = parseJsonObject(result.text);
    if (!parsed) return Response.json({ questions: [] });
    const validated = FollowupsSchema.safeParse(parsed);
    if (!validated.success) return Response.json({ questions: [] });
    return Response.json({
      questions: validated.data.questions.slice(0, 3),
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "unknown";
    console.warn("[followups] fallback to empty:", msg);
    return Response.json({ questions: [] });
  }
}

/**
 * Find and parse the first JSON object in a model's text response.
 * LLMs occasionally wrap JSON in code fences or add a leading sentence
 * despite instructions — strip those and try the first {...} block.
 */
function parseJsonObject(text: string): unknown {
  const trimmed = text.trim();
  // Strip ``` fences if present
  const unfenced = trimmed
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();
  // Try direct parse first
  try {
    return JSON.parse(unfenced);
  } catch {
    // ignore
  }
  // Otherwise extract the first top-level {...} substring
  const start = unfenced.indexOf("{");
  if (start === -1) return null;
  let depth = 0;
  for (let i = start; i < unfenced.length; i++) {
    const ch = unfenced[i];
    if (ch === "{") depth++;
    else if (ch === "}") {
      depth--;
      if (depth === 0) {
        const candidate = unfenced.slice(start, i + 1);
        try {
          return JSON.parse(candidate);
        } catch {
          return null;
        }
      }
    }
  }
  return null;
}
