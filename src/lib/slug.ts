// Human-readable slug generator for paper / patent / etc.
// Keeps CJK characters (safe in URLs, Next decodes), hyphenates ASCII,
// falls back to a short hash when input is empty.

import { createHash } from "node:crypto";

const MAX = 120;
const PAPER_CANONICAL_TITLE_MAX = 84;

function shortHash(s: string): string {
  return createHash("sha1").update(s).digest("hex").slice(0, 8);
}

export function makeSlug(
  input: string,
  fallbackSeed?: string,
  maxLength = MAX,
): string {
  let s = (input || "").toLowerCase();
  // Keep letters, digits, CJK; everything else becomes hyphen.
  s = s.replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-").replace(/^-+|-+$/g, "");
  // Collapse duplicate hyphens.
  s = s.replace(/-+/g, "-");
  if (!s) s = shortHash(fallbackSeed ?? input ?? Math.random().toString());
  if (s.length > maxLength) s = s.slice(0, maxLength).replace(/-+$/, "");
  return s;
}

export function paperSlug(title: string, id: string): string {
  return `${makeSlug(title, id)}-${shortHash(id).slice(0, 6)}`;
}

// Public GetFRP paper URLs use the English title and publication year. The
// legacy `paperSlug` above remains unchanged because it is the compatibility
// alias already stored in production and linked by search engines.
//
// Only true title+year collisions receive the short record ID. The lightweight
// route index in paper-urls.ts determines those collisions across the corpus.
export function paperCanonicalSlug(
  titleEn: string,
  year: number | null | undefined,
  id: string,
  includeShortId = false,
): string {
  const title = makeSlug(titleEn, id, PAPER_CANONICAL_TITLE_MAX);
  const dated = year ? `${title}-${year}` : title;
  if (!includeShortId) return dated;
  const recordId = makeSlug(id.replace(/^paper-/, ""), id, 6);
  return `${dated}-p-${recordId}`;
}

export function patentSlug(title: string, id: string): string {
  return `${makeSlug(title, id)}-${shortHash(id).slice(0, 6)}`;
}
