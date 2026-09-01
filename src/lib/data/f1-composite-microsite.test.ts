import assert from "node:assert/strict";
import { test } from "node:test";

import {
  F1_COMPOSITES_BRAND_NAME,
  F1_COMPOSITES_COMPANY_PROFILE,
  F1_COMPOSITES_COMPANY_SEO,
  F1_COMPOSITES_PRODUCT_FAMILIES,
  F1_COMPOSITES_PRODUCT_FAMILY_SLUGS,
} from "./f1-composite-microsite";
import type { F1CompositesEvidenceItem } from "./f1-composite-microsite";

const EXPECTED_PRODUCT_SLUGS = [
  "pultruded-frp-structural-profiles",
  "frp-grating-access-systems",
  "fiberglass-window-door-systems",
  "custom-pultruded-profiles",
] as const;
const EXPECTED_COMPANY_PATH = "/suppliers/f1-composite";
const EXPECTED_PRODUCT_PATHS = EXPECTED_PRODUCT_SLUGS.map(
  (slug) => `${EXPECTED_COMPANY_PATH}/${slug}`,
);

const TITLE_MIN = 30;
const TITLE_MAX = 60;
const DESCRIPTION_MIN = 120;
const DESCRIPTION_MAX = 165;

const metadataPages = [
  {
    path: F1_COMPOSITES_COMPANY_SEO.path,
    title: F1_COMPOSITES_COMPANY_SEO.title,
    description: F1_COMPOSITES_COMPANY_SEO.description,
  },
  ...F1_COMPOSITES_PRODUCT_FAMILIES.map((family) => ({
    path: family.path,
    title: family.metaTitle,
    description: family.metaDescription,
  })),
];

test("keeps the F1 Composites microsite at one company page and four fixed product-family paths", () => {
  assert.equal(F1_COMPOSITES_BRAND_NAME, "F1 Composites");
  assert.equal(F1_COMPOSITES_COMPANY_SEO.path, EXPECTED_COMPANY_PATH);
  assert.equal(F1_COMPOSITES_PRODUCT_FAMILIES.length, 4);
  assert.deepEqual(F1_COMPOSITES_PRODUCT_FAMILY_SLUGS, EXPECTED_PRODUCT_SLUGS);
  assert.deepEqual(
    F1_COMPOSITES_PRODUCT_FAMILIES.map((family) => family.path),
    EXPECTED_PRODUCT_PATHS,
  );
  assert.equal(
    new Set(metadataPages.map((page) => page.path)).size,
    metadataPages.length,
    "company and product-family paths must be unique",
  );
});

test("keeps all five F1 Composites metadata records branded and inside search length budgets", () => {
  assert.equal(metadataPages.length, 5);
  for (const page of metadataPages) {
    assert.ok(
      page.title.includes(F1_COMPOSITES_BRAND_NAME),
      `${page.path} title must use the exact F1 Composites brand`,
    );
    assert.ok(
      page.description.includes(F1_COMPOSITES_BRAND_NAME),
      `${page.path} description must use the exact F1 Composites brand`,
    );
    assert.ok(
      page.title.length >= TITLE_MIN && page.title.length <= TITLE_MAX,
      `${page.path} title length ${page.title.length} is outside ${TITLE_MIN}-${TITLE_MAX}`,
    );
    assert.ok(
      page.description.length >= DESCRIPTION_MIN &&
        page.description.length <= DESCRIPTION_MAX,
      `${page.path} description length ${page.description.length} is outside ${DESCRIPTION_MIN}-${DESCRIPTION_MAX}`,
    );
  }
});

test("uses only official HTTPS f1composite.com sources", () => {
  const sourceSets = [
    {
      path: F1_COMPOSITES_COMPANY_SEO.path,
      sources: F1_COMPOSITES_COMPANY_PROFILE.sources,
    },
    ...F1_COMPOSITES_PRODUCT_FAMILIES.map((family) => ({
      path: family.path,
      sources: family.sources,
    })),
  ];

  for (const page of sourceSets) {
    assert.ok(page.sources.length > 0, `${page.path} needs at least one official source`);
    for (const source of page.sources) {
      const url = new URL(source.href);
      assert.equal(url.protocol, "https:", `${source.href} must use HTTPS`);
      assert.equal(
        url.hostname.replace(/^www\./, ""),
        "f1composite.com",
        `${source.href} must use the official f1composite.com domain`,
      );
    }
  }
});

test("keeps PHI evidence at phB for cool-temperate conditions and excludes stale entity wording", () => {
  const evidence: F1CompositesEvidenceItem[] = [
    ...F1_COMPOSITES_COMPANY_PROFILE.evidence,
    ...F1_COMPOSITES_COMPANY_PROFILE.projects,
  ];
  for (const family of F1_COMPOSITES_PRODUCT_FAMILIES) {
    evidence.push(...family.evidenceBoundaries);
  }
  const phiEvidence = evidence.filter((item) =>
    /\bPHI\b|Component-ID/i.test(`${item.title} ${item.body}`),
  );

  assert.ok(phiEvidence.length > 0, "at least one PHI evidence record is required");
  for (const item of phiEvidence) {
    const claim = `${item.title} ${item.body}`;
    assert.match(claim, /\bphB\b/, `${item.title} must state phB`);
    assert.match(
      claim,
      /\bcool-temperate\b/i,
      `${item.title} must state cool-temperate`,
    );
    assert.doesNotMatch(claim, /\bphA\b|arctic/i);
  }

  const corpus = JSON.stringify({
    brand: F1_COMPOSITES_BRAND_NAME,
    company: F1_COMPOSITES_COMPANY_PROFILE,
    metadata: metadataPages,
    families: F1_COMPOSITES_PRODUCT_FAMILIES,
  });
  assert.doesNotMatch(corpus, /\bphA\b|arctic|\bYaoyi\b/i);
  assert.doesNotMatch(corpus, /\bF1 Composite(?!s)\b/);
});
