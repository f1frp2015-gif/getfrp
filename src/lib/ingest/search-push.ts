import { CURRENT_SITE_URL } from "@/lib/sites";

// GetFRP search discovery is independent and English-only. IndexNow covers
// Bing, Yandex, Naver and Seznam; the Google hook remains fail-closed.
const SITE = new URL(CURRENT_SITE_URL).hostname;
const KEY_LOCATION = `${CURRENT_SITE_URL}/indexnow-key`;

type PushResult =
  | { engine: string; skipped: true; reason: string }
  | { engine: string; ok: true; detail: unknown };

async function pushIndexNow(urls: string[]): Promise<PushResult> {
  const key = process.env.INDEXNOW_KEY;
  if (!key) return { engine: "indexnow", skipped: true, reason: "INDEXNOW_KEY not set" };
  if (urls.length === 0) return { engine: "indexnow", skipped: true, reason: "empty urls" };
  try {
    // IndexNow is accepted by Bing, Yandex, Naver, Seznam — one hit fans out.
    const res = await fetch("https://api.indexnow.org/IndexNow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: SITE,
        key,
        keyLocation: KEY_LOCATION,
        urlList: urls,
      }),
    });
    return res.ok
      ? { engine: "indexnow", ok: true, detail: { status: res.status } }
      : { engine: "indexnow", skipped: true, reason: `http ${res.status}` };
  } catch (e) {
    return { engine: "indexnow", skipped: true, reason: e instanceof Error ? e.message : String(e) };
  }
}

async function pushGoogleIndexing(urls: string[]): Promise<PushResult> {
  // Google Indexing API requires a service-account JWT. Most sites don't qualify
  // (it's officially for JobPosting/BroadcastEvent), but for our needs it's
  // wired here with a no-op stub — fill GOOGLE_INDEXING_SA_JSON to enable.
  const sa = process.env.GOOGLE_INDEXING_SA_JSON;
  if (!sa) return { engine: "google", skipped: true, reason: "GOOGLE_INDEXING_SA_JSON not set" };
  if (urls.length === 0) return { engine: "google", skipped: true, reason: "empty urls" };
  // Stub — real implementation needs google-auth-library. Left as a hook.
  return { engine: "google", skipped: true, reason: "stub: implement with google-auth-library" };
}

export async function fanOutSearchPush(urls: string[]): Promise<{
  urlCount: number;
  results: PushResult[];
}> {
  if (!urls.length) return { urlCount: 0, results: [] };

  const [indexnow, google] = await Promise.all([
    pushIndexNow(urls),
    pushGoogleIndexing(urls),
  ]);
  return {
    urlCount: urls.length,
    results: [indexnow, google],
  };
}
