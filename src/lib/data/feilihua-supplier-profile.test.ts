import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  FEILIHUA_SUPPLIER_ID,
  FEILIHUA_SUPPLIER_PROFILE,
  FEILIHUA_SUPPLIER_SLUG,
} from "./feilihua-supplier-profile";
import { buildSupplierSeoBrief } from "./supplier-seo-briefs";

test("reuses Feilihua's seeded supplier identity and publishes one curated slug", () => {
  assert.equal(FEILIHUA_SUPPLIER_ID, "gf-hubei-fiberglass");
  assert.equal(
    getCuratedSupplierProfile(FEILIHUA_SUPPLIER_ID),
    FEILIHUA_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(FEILIHUA_SUPPLIER_SLUG),
    FEILIHUA_SUPPLIER_PROFILE,
  );
  assert.equal(
    CURATED_SUPPLIER_PROFILES.filter(
      ({ profile }) => profile.id === FEILIHUA_SUPPLIER_ID,
    ).length,
    1,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === FEILIHUA_SUPPLIER_SLUG,
    ).length,
    1,
  );
});

test("uses Feilihua's official website and locally stored official logo", () => {
  assert.equal(FEILIHUA_SUPPLIER_PROFILE.website, "https://www.feilihua.com/en/");
  assert.equal(
    FEILIHUA_SUPPLIER_PROFILE.logo,
    "/supplier-assets/feilihua-logo.png",
  );
  assert.match(
    FEILIHUA_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /three-dimensional quartz-fiber braided preforms/i,
  );
  assert.ok(FEILIHUA_SUPPLIER_PROFILE.profilePublished);
});

test("builds a quartz-fiber-focused supplier SEO brief", () => {
  const brief = buildSupplierSeoBrief(FEILIHUA_SUPPLIER_PROFILE);

  assert.match(brief.pageTitle, /Quartz-fiber yarns and fabrics/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
});
