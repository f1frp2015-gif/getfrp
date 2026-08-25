// getfrp.com (EN-side) SEO/GEO evaluator.
//
// Inspects messages/en.json metaTitle / metaDescription strings + a hardcoded
// landing-page keyword map. Reports length violations (Title 30-60,
// Description 120-160 per current Google guidance) and missing S/A-tier
// keywords on the pages that ought to carry them. Exits non-zero on any
// violation when run with --strict. The prebuild script runs this as a hard
// gate before every production build.
//
// Usage:
//   pnpm tsx scripts/seo-check.ts           # warn-only, exit 0
//   pnpm tsx scripts/seo-check.ts --strict  # exit 1 on violations

import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve, join, relative } from "node:path";
import { PRODUCT_SEARCH_INTENTS } from "../src/lib/data/product-search-intents";
import { SUPPLIER_CATEGORY_PAGES } from "../src/lib/data/supplier-category-pages";

type Severity = "error" | "warn";

interface Violation {
  page: string;
  field: string;
  severity: Severity;
  message: string;
  actual?: string;
}

const TITLE_MIN = 30;
const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 165;

// S-tier keywords are required on these EN landing pages. A page passes if
// at least one S-tier keyword appears in Title OR Description (case-insensitive).
const S_TIER_PAGES: Record<string, string[]> = {
  Site: ["frp from china", "frp supplier", "frp sourcing"],
  Suppliers: ["china frp supplier", "chinese frp", "frp supplier"],
  Pultrusion: ["china pultrusion", "pultruded frp", "pultrusion supplier"],
  HpRtm: ["hp-rtm", "china cfrp", "automotive cfrp"],
};

// Namespaces backing routes that are robots-disallowed (auth-gated, internal).
// Length budgets don't apply — Google never sees these.
const NOINDEX_NAMESPACES = new Set<string>(["Dashboard"]);

// Brand tokens — at least one expected somewhere in the meta for entity grounding.
const BRAND_TOKENS = ["getfrp", "f1 composite"];

function lc(s: string): string {
  return s.toLowerCase();
}

function checkLength(
  page: string,
  field: "metaTitle" | "metaDescription" | "tagline" | "description",
  value: string,
  min: number,
  max: number,
): Violation[] {
  const out: Violation[] = [];
  const len = value.length;
  if (len < min) {
    out.push({
      page,
      field,
      severity: "warn",
      message: `length ${len} < min ${min}`,
      actual: value,
    });
  } else if (len > max) {
    out.push({
      page,
      field,
      severity: "error",
      message: `length ${len} > max ${max}`,
      actual: value,
    });
  }
  return out;
}

function checkKeyword(
  page: string,
  haystack: string,
  needles: string[],
): Violation | null {
  const h = lc(haystack);
  const found = needles.some((n) => h.includes(lc(n)));
  if (found) return null;
  return {
    page,
    field: "keyword",
    severity: "error",
    message: `none of [${needles.join(" | ")}] present in meta`,
  };
}

// Structural guard. The en.json length/keyword checks above can't see whether a
// page actually emits a canonical — that lives in
// page.tsx via @/lib/seo.alternates(), not in en.json. A page that sets
// title/description but never calls alternates() inherits the layout default:
// NO canonical and the homepage's og:title. This is the exact
// regression that shipped on /formulas /trade /tech /matrix /ai /platform /rfq
// (+ ~15 more) and was fixed 2026-06-20. This check fails the strict build if it
// ever comes back.
const APP_DIR = "src/app/[locale]";

// Routes that legitimately ship no canonical: auth-gated (noindex) or
// pure redirects with no metadata.
const ALT_EXEMPT: RegExp[] = [
  /(^|\/)dashboard(\/|$)/,
  /(^|\/)sign-in(\/|$)/,
  /(^|\/)sign-up(\/|$)/,
  /(^|\/)pricing(\/|$)/, // permanentRedirect, no metadata
];

function walkPageFiles(dir: string): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkPageFiles(p));
    else if (entry.name === "page.tsx") out.push(p);
  }
  return out;
}

function checkAlternatesCoverage(): Violation[] {
  const out: Violation[] = [];
  const root = resolve(APP_DIR);
  let files: string[];
  try {
    files = walkPageFiles(root);
  } catch {
    // App dir not found (e.g. invoked outside repo root) — skip silently rather
    // than crash the build on an environment quirk.
    return out;
  }
  for (const file of files) {
    const rel = relative(root, file);
    if (ALT_EXEMPT.some((re) => re.test(rel))) continue;
    const src = readFileSync(file, "utf8");
    const setsMeta = /generateMetadata|export const metadata/.test(src);
    if (!setsMeta) continue;
    if (!/alternates\(/.test(src)) {
      const route = "/" + rel.replace(/\/?page\.tsx$/, "");
      out.push({
        page: route === "/" ? "/" : route.replace(/\/$/, ""),
        field: "alternates",
        severity: "error",
        message:
          "sets metadata but never calls alternates() — ships no canonical (inherits layout default)",
      });
    }
  }
  return out;
}

function checkStandaloneGetfrpSeo(): Violation[] {
  const out: Violation[] = [];
  const seoHelper = readFileSync(resolve("src/lib/seo.ts"), "utf8");
  const routingSource = readFileSync(resolve("src/i18n/routing.ts"), "utf8");
  const seoSources = [
    "src/lib/sites.ts",
    "src/lib/seo.ts",
    "src/lib/sitemap-data.ts",
    "scripts/build-llms-txt.ts",
  ]
    .map((file) => readFileSync(resolve(file), "utf8"))
    .join("\n");

  for (const [field, pattern] of [
    ["f1frp-domain", /f1frp\.com/i],
    ["zh-hreflang", /hreflang=["']zh|["']zh-CN["']\s*:/i],
    ["language-alternates", /languages\s*:/i],
    ["localized-sitemap-link", /<xhtml:link/i],
  ] as const) {
    if (pattern.test(seoSources)) {
      out.push({
        page: "standalone-site",
        field,
        severity: "error",
        message: "GetFRP SEO sources must not declare a Chinese or cross-domain alternate",
      });
    }
  }

  if (
    !routingSource.includes('locales: ["en"]') ||
    !seoHelper.includes("return { canonical: canonical(path) };")
  ) {
    out.push({
      page: "standalone-site",
      field: "english-only-canonical",
      severity: "error",
      message:
        "GetFRP must route only English and alternates() must return only its self-canonical",
    });
  }

  const supplierClient = readFileSync(
    resolve("src/app/[locale]/suppliers/suppliers-client.tsx"),
    "utf8",
  );
  const supplierSitemap = readFileSync(resolve("src/lib/sitemap-data.ts"), "utf8");
  if (supplierClient.includes("suppliers#") || !supplierClient.includes("supplier.slug")) {
    out.push({
      page: "/suppliers",
      field: "supplier-links",
      severity: "error",
      message: "supplier cards must link to independent slug URLs",
    });
  }
  if (
    !supplierSitemap.includes("supplierListings.slug") ||
    !supplierSitemap.includes("isSupplierProfileIndexable")
  ) {
    out.push({
      page: "/sitemaps/suppliers.xml",
      field: "supplier-coverage",
      severity: "error",
      message: "supplier sitemap must apply the shared evidence-based index quality gate",
    });
  }
  const supplierDirectoryRoute = readFileSync(
    resolve("src/app/[locale]/suppliers/directory/[page]/page.tsx"),
    "utf8",
  );
  if (
    !supplierSitemap.includes("supplierDirectoryPath(1)") ||
    !supplierDirectoryRoute.includes("page === 1") ||
    !supplierDirectoryRoute.includes("index: false, follow: true")
  ) {
    out.push({
      page: "/sitemaps/suppliers.xml",
      field: "directory-pages",
      severity: "error",
      message: "supplier sitemap must include only directory page 1; later pagination must be noindex,follow",
    });
  }

  const supplierHub = readFileSync(
    resolve("src/app/[locale]/suppliers/page.tsx"),
    "utf8",
  );
  const htmlSitemap = readFileSync(
    resolve("src/app/[locale]/sitemap/page.tsx"),
    "utf8",
  );
  if (
    !supplierHub.includes("supplierDirectoryPath") ||
    !htmlSitemap.includes("supplierDirectoryPath")
  ) {
    out.push({
      page: "/suppliers/directory/[page]",
      field: "entry-links",
      severity: "error",
      message: "supplier directory pages need crawlable links from both hubs",
    });
  }

  const homepage = readFileSync(resolve("src/app/[locale]/home-english.tsx"), "utf8");
  const homepageMetadata = readFileSync(resolve("src/app/[locale]/page.tsx"), "utf8");
  if (!homepage.includes("China FRP Sourcing Platform &amp; Marketplace")) {
    out.push({
      page: "/",
      field: "h1",
      severity: "error",
      message: "homepage H1 must target the FRP marketplace and sourcing intent",
    });
  }
  if (
    !`${homepageMetadata}\n${homepage}`.includes(
      "China FRP Marketplace & Sourcing Platform | GetFRP",
    )
  ) {
    out.push({
      page: "/",
      field: "title",
      severity: "error",
      message: "homepage title must target the marketplace and sourcing intent",
    });
  }

  return out;
}

function exactPhraseCount(text: string, phrase: string): number {
  const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return text.match(new RegExp(`(?<![a-z])${escaped}(?![a-z])`, "gi"))?.length ?? 0;
}

function checkCoreProductOnPageSeo(): Violation[] {
  const out: Violation[] = [];

  for (const page of SUPPLIER_CATEGORY_PAGES) {
    const route = `/products/${page.slug}`;
    const intent = PRODUCT_SEARCH_INTENTS[page.slug];
    if (
      !intent?.primaryKeyword ||
      !intent.openingParagraph ||
      !intent.selectionParagraph
    ) {
      out.push({
        page: route,
        field: "primary-keyword",
        severity: "error",
        message: "core product page must define a primary keyword, opening paragraph and selection paragraph",
      });
      continue;
    }

    for (const [field, value] of [
      ["title", intent.title],
      ["h1", intent.h1],
      ["opening-paragraph", intent.openingParagraph],
      ["selection-paragraph", intent.selectionParagraph],
    ] as const) {
      if (exactPhraseCount(value, intent.primaryKeyword) !== 1) {
        out.push({
          page: route,
          field,
          severity: "error",
          message: `must contain the exact primary keyword once: ${intent.primaryKeyword}`,
        });
      }
    }

    if (intent.primaryTerms[0]?.toLowerCase() !== intent.primaryKeyword.toLowerCase()) {
      out.push({
        page: route,
        field: "primary-terms",
        severity: "error",
        message: "primary keyword must be the first visible search-intent term",
      });
    }

    const renderedBody = [
      intent.openingParagraph,
      intent.audienceNote,
      ...intent.primaryTerms,
      intent.selectionParagraph,
      ...page.overview,
    ].join(" ");
    const bodyCount = exactPhraseCount(renderedBody, intent.primaryKeyword);
    if (bodyCount < 2 || bodyCount > 3) {
      out.push({
        page: route,
        field: "body-keyword-count",
        severity: "error",
        message: `exact primary keyword appears ${bodyCount} times; expected 2-3`,
      });
    }

    out.push(...checkLength(route, "metaTitle", intent.title, TITLE_MIN, TITLE_MAX));
  }

  return out;
}

function checkIndexCleanup(): Violation[] {
  const out: Violation[] = [];
  const goneRoutes = [
    "materials",
    "formulas",
    "patents",
    "articles",
    "papers",
  ] as const;
  const sitemapSource = readFileSync(resolve("src/lib/sitemap-data.ts"), "utf8");
  const termsSource = readFileSync(
    resolve("src/app/[locale]/terms/page.tsx"),
    "utf8",
  );

  if (
    !/robots:\s*\{[\s\S]*?index:\s*false[\s\S]*?googleBot:\s*\{\s*index:\s*false/.test(
      termsSource,
    )
  ) {
    out.push({
      page: "/terms",
      field: "robots",
      severity: "error",
      message: "Terms must remain noindex for both generic crawlers and Googlebot",
    });
  }

  const proxySource = readFileSync(resolve("src/proxy.ts"), "utf8");
  for (const route of goneRoutes) {
    const publicRoute = resolve(`src/app/[locale]/${route}`);
    const retainedRouteFiles = existsSync(publicRoute)
      ? readdirSync(publicRoute, { recursive: true }).some((entry) =>
          /(?:page|route|opengraph-image)\.(?:ts|tsx|js|jsx)$/.test(String(entry)),
        )
      : false;
    if (retainedRouteFiles) {
      out.push({
        page: `/${route}`,
        field: "public-route",
        severity: "error",
        message: "permanently removed content sections must not retain route files",
      });
    }
    if (sitemapSource.includes(`\"/${route}`)) {
      out.push({
        page: `/${route}`,
        field: "sitemap",
        severity: "error",
        message: "410 content sections must not appear in sitemap sources",
      });
    }
    if (!proxySource.includes(`\"/${route}\"`)) {
      out.push({
        page: `/${route}`,
        field: "410",
        severity: "error",
        message: "removed content sections must remain covered by the 410 tombstone",
      });
    }
  }

  return out;
}

function main() {
  const strict = process.argv.includes("--strict");
  const en = JSON.parse(
    readFileSync(resolve("messages/en.json"), "utf8"),
  ) as Record<string, Record<string, string>>;

  const violations: Violation[] = [];

  // Site-level: tagline + description (drive the layout default home Title/Desc).
  if (en.Site) {
    const t = en.Site.tagline ?? "";
    const d = en.Site.description ?? "";
    // Layout composes home title as `${name} — ${tagline}` — account for the
    // brand prefix length when validating the tagline budget.
    const composedTitle = `${en.Site.name ?? "getfrp"} — ${t}`;
    violations.push(
      ...checkLength("Site", "tagline", composedTitle, TITLE_MIN, TITLE_MAX),
    );
    violations.push(
      ...checkLength("Site", "description", d, DESC_MIN, DESC_MAX),
    );
    const sTier = S_TIER_PAGES.Site;
    const kw = checkKeyword("Site", `${t} ${d}`, sTier);
    if (kw) violations.push(kw);
    const brandHit = BRAND_TOKENS.some((b) =>
      lc(`${en.Site.name ?? ""} ${t} ${d}`).includes(b),
    );
    if (!brandHit) {
      violations.push({
        page: "Site",
        field: "brand",
        severity: "warn",
        message: `no brand token in Site meta`,
      });
    }
  }

  // Page-level metaTitle / metaDescription, scanning every namespace.
  for (const [ns, body] of Object.entries(en)) {
    if (ns === "Site") continue;
    if (NOINDEX_NAMESPACES.has(ns)) continue;
    if (typeof body !== "object" || body === null) continue;
    const mt = (body as Record<string, unknown>).metaTitle;
    const md = (body as Record<string, unknown>).metaDescription;
    if (typeof mt === "string") {
      violations.push(...checkLength(ns, "metaTitle", mt, TITLE_MIN, TITLE_MAX));
    }
    if (typeof md === "string") {
      violations.push(
        ...checkLength(ns, "metaDescription", md, DESC_MIN, DESC_MAX),
      );
    }
    const need = S_TIER_PAGES[ns];
    if (need && (typeof mt === "string" || typeof md === "string")) {
      const kw = checkKeyword(
        ns,
        `${typeof mt === "string" ? mt : ""} ${typeof md === "string" ? md : ""}`,
        need,
      );
      if (kw) violations.push(kw);
    }
  }

  // Structural canonical coverage across all page.tsx routes.
  violations.push(...checkAlternatesCoverage());
  violations.push(...checkStandaloneGetfrpSeo());
  violations.push(...checkCoreProductOnPageSeo());
  violations.push(...checkIndexCleanup());

  const errors = violations.filter((v) => v.severity === "error");
  const warns = violations.filter((v) => v.severity === "warn");

  for (const v of violations) {
    const tag = v.severity === "error" ? "✗" : "⚠";
    const head = `${tag} ${v.page}.${v.field}: ${v.message}`;
    if (v.actual) {
      console.log(`${head}\n    → ${v.actual.slice(0, 120)}${v.actual.length > 120 ? "…" : ""}`);
    } else {
      console.log(head);
    }
  }

  console.log(
    `\nSEO check: ${errors.length} error(s), ${warns.length} warning(s).`,
  );

  if (strict && errors.length > 0) {
    process.exit(1);
  }
}

main();
