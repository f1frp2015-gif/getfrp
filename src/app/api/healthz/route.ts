import { NextResponse } from "next/server";

export const runtime = "nodejs";

/** GetFRP runtime diagnostics without exposing secret values. */
export async function GET(req: Request) {
  const host =
    req.headers.get("x-forwarded-host") ||
    req.headers.get("host") ||
    "(no host)";

  const envFlags: Record<string, boolean> = {
    GOOGLE_GENERATIVE_AI_API_KEY: Boolean(
      process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    ),
    OPENROUTER_API_KEY: Boolean(process.env.OPENROUTER_API_KEY),
    GEMINI_CHAT_MODEL: Boolean(process.env.GEMINI_CHAT_MODEL),
    OPENROUTER_CHAT_MODEL: Boolean(process.env.OPENROUTER_CHAT_MODEL),
    GOOGLE_AI_GATEWAY_URL: Boolean(process.env.GOOGLE_AI_GATEWAY_URL),
    TAVILY_API_KEY: Boolean(process.env.TAVILY_API_KEY),
    EMBEDDING_PROVIDER: Boolean(process.env.EMBEDDING_PROVIDER),
  };

  const ok = envFlags.GOOGLE_GENERATIVE_AI_API_KEY;
  return NextResponse.json(
    {
      ok,
      host,
      profile: "global",
      resolvedProvider: "google (GetFRP production)",
      expectedKey: "GOOGLE_GENERATIVE_AI_API_KEY",
      envFlags,
      envValues: {
        GEMINI_CHAT_MODEL: process.env.GEMINI_CHAT_MODEL,
        OPENROUTER_CHAT_MODEL: process.env.OPENROUTER_CHAT_MODEL,
        EMBEDDING_PROVIDER: process.env.EMBEDDING_PROVIDER,
      },
      commit:
        (process.env.VERCEL_GIT_COMMIT_SHA ?? "").slice(0, 7) || "(unset)",
      deployedAt:
        process.env.NEXT_PUBLIC_DEPLOYED_AT ??
        process.env.VERCEL_GIT_COMMIT_MESSAGE?.split("\n")[0] ??
        null,
    },
    { status: ok ? 200 : 503 },
  );
}
