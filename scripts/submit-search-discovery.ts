// Dry-run by default. --submit notifies IndexNow only about public sitemap URLs.
import { fanOutSearchPush } from "../src/lib/ingest/search-push";
import { GETFRP_INDEXNOW_KEY } from "../src/lib/indexnow-config";

const origin = "https://getfrp.com";
async function get(path: string) {
  const response = await fetch(`${origin}${path}`, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`${path}: HTTP ${response.status}`);
  return response.text();
}

async function main() {
  const index = await get("/sitemap.xml");
  const urls = new Set<string>();
  for (const child of index.matchAll(/<loc>(.*?)<\/loc>/g)) {
    const location = new URL(child[1]);
    if (location.origin !== origin) throw new Error("Unexpected sitemap origin");
    const xml = await get(location.pathname);
    for (const entry of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
      const url = new URL(entry[1]);
      if (url.origin !== origin || url.search) throw new Error("Noncanonical sitemap entry");
      urls.add(url.href);
    }
  }
  if (!urls.size || urls.size > 10_000) throw new Error("Unexpected URL count; review before submission");
  const submit = process.argv.includes("--submit");
  if (!submit) { console.log(JSON.stringify({ mode: "dry-run", urlCount: urls.size, destination: "IndexNow", google: "Use Search Console; not submitted" })); return; }
  const key = (await get("/indexnow-key")).trim();
  if (key !== (process.env.INDEXNOW_KEY || GETFRP_INDEXNOW_KEY)) throw new Error("Production key differs from the submission key");
  const result = await fanOutSearchPush([...urls]);
  console.log(JSON.stringify(result, null, 2));
  if (!result.results.some((entry) => entry.engine === "indexnow" && "ok" in entry && entry.ok)) process.exitCode = 1;
}
main().catch((error) => { console.error(error instanceof Error ? error.message : error); process.exitCode = 1; });
