// Read-only HTTP audit. Run against a local production server or an accessible preview.
// Canonicals are deliberately checked against GetFRP production, not the preview host.
import assert from "node:assert/strict";
import { INSIGHT_PAGES, SOURCE_FROM_CHINA_PAGES } from "../src/lib/data/longform-pages";

const origin = new URL(process.argv.find((arg) => arg.startsWith("--origin="))?.split("=").slice(1).join("=") ?? "http://localhost:3000").origin;
const canonicalOrigin = "https://getfrp.com";
const failures: string[] = [];
const records: Record<string, unknown>[] = [];
const all = process.argv.includes("--all");
const timeout = 30_000;

async function request(path: string, redirect: RequestRedirect = "follow") {
  return fetch(`${origin}${path}`, { redirect, signal: AbortSignal.timeout(timeout), headers: { "User-Agent": "GetFRP-ReadOnly-SEO-Audit/1.0" } });
}

function attributes(tag: string) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*["']([^"']*)["']/g)].map((match) => [match[1].toLowerCase(), match[2]]));
}

async function inspect(path: string) {
  try {
    const response = await request(path, "manual");
    assert.equal(response.status, 200, `${path}: HTTP ${response.status}`);
    const html = await response.text();
    assert.ok(response.headers.get("content-type")?.includes("text/html"), `${path}: not HTML`);
    assert.ok(!/noindex/i.test(response.headers.get("x-robots-tag") ?? ""), `${path}: header noindex`);
    const tags = [...html.matchAll(/<(?:meta|link)\b[^>]*>/gi)].map((match) => attributes(match[0]));
    const canonicals = tags.filter((tag) => tag.rel === "canonical");
    assert.equal(canonicals.length, 1, `${path}: expected one canonical`);
    assert.equal(canonicals[0].href.replace(/\/$/, ""), `${canonicalOrigin}${path === "/" ? "" : path}`, `${path}: incorrect canonical`);
    const robots = tags.filter((tag) => /^(robots|googlebot)$/i.test(tag.name ?? ""));
    assert.ok(!robots.some((tag) => /noindex|nosnippet/i.test(tag.content ?? "")), `${path}: restricted indexing or snippets`);
    assert.equal((html.match(/<h1\b/gi) ?? []).length, 1, `${path}: expected one H1`);
    assert.ok(/<title[^>]*>[^<]+<\/title>/i.test(html), `${path}: missing title`);
    assert.ok(tags.some((tag) => tag.name === "description" && tag.content?.length), `${path}: missing description`);
    const schemas = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    for (const schema of schemas) JSON.parse(schema[1]);
    assert.ok(schemas.length > 0, `${path}: no structured data`);
    records.push({ path, status: response.status, canonical: canonicals[0].href, schemas: schemas.length });
  } catch (error) {
    failures.push(error instanceof Error ? error.message : String(error));
  }
}

async function main() {
  const robots = await request("/robots.txt");
  assert.equal(robots.status, 200, "robots unavailable");
  const robotText = await robots.text();
  assert.ok(robotText.includes(`${canonicalOrigin}/sitemap.xml`), "robots sitemap host mismatch");
  assert.ok(!/^Disallow:\s*\/\s*$/mi.test(robotText), "robots blocks the site");
  const sitemap = await request("/sitemap.xml");
  assert.equal(sitemap.status, 200, "sitemap unavailable");
  const indexXml = await sitemap.text();
  assert.ok(indexXml.includes("<sitemapindex"), "invalid sitemap index");
  const children = [...indexXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]));
  assert.equal(children.length, 7, "expected seven sitemap partitions");
  const urls = new Set<string>();
  for (const child of children) {
    assert.equal(child.origin, canonicalOrigin, "sitemap child host mismatch");
    const response = await request(child.pathname);
    assert.equal(response.status, 200, `sitemap child unavailable: ${child.pathname}`);
    const xml = await response.text();
    assert.ok(xml.includes("<urlset"), `invalid child XML: ${child.pathname}`);
    for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
      const url = new URL(match[1].replaceAll("&amp;", "&"));
      assert.equal(url.origin, canonicalOrigin, "noncanonical host in sitemap");
      assert.equal(url.search, "", "query URL in sitemap");
      assert.ok(!/^\/(?:en|dashboard|sign-in|sign-up|articles|papers|materials|news|platform)(?:\/|$)/.test(url.pathname), `excluded URL in sitemap: ${url.pathname}`);
      assert.ok(!urls.has(url.pathname), `duplicate sitemap URL: ${url.pathname}`);
      urls.add(url.pathname);
    }
  }
  const keyPages = ["/", "/products", "/suppliers", "/products/frp-grating", "/products/pultruded-profiles", "/products/frp-pipe", "/about", "/methodology", ...[...SOURCE_FROM_CHINA_PAGES, ...INSIGHT_PAGES].map((page) => `/${page.group}/${page.slug}`)];
  for (const path of keyPages) assert.ok(urls.has(path), `${path}: missing from sitemap`);
  const targets = all ? [...urls] : keyPages;
  for (let index = 0; index < targets.length; index += 4) await Promise.all(targets.slice(index, index + 4).map(inspect));
  for (const [from, to] of [["/products/frp-sheet", "/products/fiberglass-sheet"], ["/source-from-china/how-to-source-frp-grating", "/sourcing/frp-grating"], ["/source-from-china/how-to-source-frp-pipe", "/sourcing/frp-piping"]]) {
    const response = await request(from, "manual");
    if (![301, 308].includes(response.status) || new URL(response.headers.get("location") ?? "/", origin).pathname !== to) failures.push(`${from}: unexpected redirect`);
    if (urls.has(from)) failures.push(`${from}: retired URL in sitemap`);
  }
  const missing = await request("/seo-audit-nonexistent-page-20260912");
  if (missing.status !== 404) failures.push(`Missing page returns ${missing.status}, expected 404`);
  const removed = await request("/articles/seo-audit-removed");
  if (removed.status !== 410) failures.push(`Removed section returns ${removed.status}, expected 410`);
  for (const slug of ["frp-grating", "pultruded-profiles", "frp-pipe"]) {
    const response = await request(`/buyer-resources/${slug}-rfq.csv`);
    const csv = await response.text();
    if (response.status !== 200 || !csv.startsWith("Section,Requirement,")) failures.push(`${slug}: RFQ worksheet unavailable`);
  }
  const rfq = await request("/rfq");
  const rfqHtml = await rfq.text();
  if (rfq.status !== 200 || !/name="robots"[^>]*content="noindex/i.test(rfqHtml) || urls.has("/rfq")) failures.push("RFQ must remain accessible, noindex and outside the sitemap");
  const indexKey = await request("/indexnow-key");
  if (indexKey.status !== 200 || !/^[a-zA-Z0-9-]{8,128}$/.test((await indexKey.text()).trim())) failures.push("IndexNow verification key unavailable");
  console.log(JSON.stringify({ origin, sitemapUrls: urls.size, checkedPages: records.length, ...(process.argv.includes("--verbose") ? { records } : {}), failures }, null, 2));
  if (failures.length) process.exitCode = 1;
}

main().catch((error) => { console.error(error instanceof Error ? error.message : error); process.exitCode = 1; });
