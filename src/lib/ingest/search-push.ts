import { CURRENT_SITE_URL } from "@/lib/sites";
import { GETFRP_INDEXNOW_KEY } from "@/lib/indexnow-config";

// GetFRP search discovery is independent and English-only. IndexNow covers
// Bing, Yandex, Naver and Seznam; the Google hook remains fail-closed.
const SITE = new URL(CURRENT_SITE_URL).hostname;
const KEY_LOCATION = `${CURRENT_SITE_URL}/indexnow-key`;

type PushResult =
  | { engine: string; skipped: true; reason: string }
  | { engine: string; ok: true; detail: unknown };

async function pushIndexNow(urls: string[]): Promise<PushResult> {
  const key = process.env.INDEXNOW_KEY || GETFRP_INDEXNOW_KEY;
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
      signal: AbortSignal.timeout(10_000),
    });
    return res.ok
      ? { engine: "indexnow", ok: true, detail: { status: res.status } }
      : { engine: "indexnow", skipped: true, reason: `http ${res.status}` };
  } catch (e) {
    return { engine: "indexnow", skipped: true, reason: e instanceof Error ? e.message : String(e) };
  }
}

async function pushGoogleIndexing(urls: string[]): Promise<PushResult> {
  if (urls.length === 0) return { engine: "google", skipped: true, reason: "empty urls" };
  return { engine: "google", skipped: true, reason: "General product and supplier pages are not eligible for the Google Indexing API. Use the XML sitemap and Search Console URL inspection." };
}

export async function fanOutSearchPush(urls: string[]): Promise<{
  urlCount: number;
  results: PushResult[];
}> {
  // Never notify search engines about preview, private or retired sections.
  if (process.env.VERCEL_ENV === "preview") return { urlCount: 0, results: [{ engine: "indexnow", skipped: true, reason: "preview deployment" }] };
  urls = [...new Set(urls)].filter((value) => {
    try {
      const url = new URL(value);
      return url.origin === CURRENT_SITE_URL && !url.search &&
        !/^\/(?:api|dashboard|rfq|sign-in|sign-up|trade|articles|papers|materials|news|platform|community|formulas|hp-rtm)(?:\/|$)/.test(url.pathname);
    } catch { return false; }
  });
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
