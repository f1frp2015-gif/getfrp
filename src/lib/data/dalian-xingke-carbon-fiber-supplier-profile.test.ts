import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_ID,
  DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE,
  DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_SLUG,
} from "./dalian-xingke-carbon-fiber-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Dalian Sinke supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_ID),
    DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_SLUG),
    DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("大连兴科碳纤维") ||
        identity.includes("dalian sinke carbon fiber") ||
        identity.includes("dalian xingke carbon fiber") ||
        identity.includes("chinasinke.net/group_cateid_78")
      );
    }).map(({ profile }) => profile.id),
    [DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_ID],
  );
});

test("publishes only current, scoped Dalian Xingke evidence", () => {
  assert.equal(DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.category, "fiber");
  assert.equal(DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.province, "辽宁");
  assert.equal(DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.established, 2001);
  assert.equal(DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.exportReady, false);
  assert.equal(
    DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.website,
    "https://www.chinasinke.net/group_cateid_78.html",
  );
  assert.equal(
    DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.logo,
    "/supplier-assets/dalian-xingke-carbon-fiber-logo.jpg",
  );
  assert.equal(DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.contactEmail, null);
  assert.deepEqual(DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(
    DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.standardsSupported,
    [],
  );
  assert.match(
    DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.descriptionEn ?? "",
    /320K exhibition limit differs from the 360K/i,
  );
  assert.match(
    DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /not marked export-ready/i,
  );
  assert.match(
    DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /chinasinke\.com.*content was unrelated/i,
  );
});

test("keeps Dalian Sinke in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Dalian Liansheng New Materials Group Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});

test("builds a carbon-fiber SEO brief within the supplier-page range", () => {
  const brief = buildSupplierSeoBrief(
    DALIAN_XINGKE_CARBON_FIBER_SUPPLIER_PROFILE,
  );

  assert.match(brief.primaryKeyword, /Dalian Sinke/i);
  assert.match(brief.primaryKeyword, /carbon[ -]fiber|reinforcement/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.equal(brief.applicationNotes.length, 3);
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
