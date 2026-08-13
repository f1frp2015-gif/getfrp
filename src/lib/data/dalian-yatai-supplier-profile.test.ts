import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DALIAN_YATAI_SUPPLIER_ID,
  DALIAN_YATAI_SUPPLIER_PROFILE,
  DALIAN_YATAI_SUPPLIER_SLUG,
} from "./dalian-yatai-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Dalian Yatai supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(DALIAN_YATAI_SUPPLIER_ID),
    DALIAN_YATAI_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(DALIAN_YATAI_SUPPLIER_SLUG),
    DALIAN_YATAI_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DALIAN_YATAI_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("大连亚泰科技新材料") ||
        identity.includes("dalian yatai science and technology new material") ||
        identity.includes("yataifr.com") ||
        identity.includes("neeq 832241")
      );
    }).map(({ profile }) => profile.id),
    [DALIAN_YATAI_SUPPLIER_ID],
  );
});

test("publishes current Dalian Yatai identity with qualification boundaries", () => {
  assert.equal(DALIAN_YATAI_SUPPLIER_PROFILE.category, "additive");
  assert.equal(DALIAN_YATAI_SUPPLIER_PROFILE.province, "辽宁");
  assert.equal(DALIAN_YATAI_SUPPLIER_PROFILE.established, 2003);
  assert.equal(DALIAN_YATAI_SUPPLIER_PROFILE.exportReady, true);
  assert.equal(DALIAN_YATAI_SUPPLIER_PROFILE.website, "http://www.yataifr.com/");
  assert.equal(
    DALIAN_YATAI_SUPPLIER_PROFILE.logo,
    "/supplier-assets/dalian-yatai-logo.jpg",
  );
  assert.equal(DALIAN_YATAI_SUPPLIER_PROFILE.contactEmail, "yataifr@163.com");
  assert.deepEqual(DALIAN_YATAI_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(DALIAN_YATAI_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    DALIAN_YATAI_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /standard reference appears erroneous/i,
  );
  assert.match(
    DALIAN_YATAI_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /None establishes a 2026 current certification/i,
  );
  assert.match(
    DALIAN_YATAI_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /self-signed certificate/i,
  );
});

test("keeps Dalian Yatai in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(DALIAN_YATAI_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(names[index - 1], "Dalian Sinke Carbon Fiber Co., Ltd.");
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});

test("builds a magnesium flame-retardant SEO brief in the page range", () => {
  const brief = buildSupplierSeoBrief(DALIAN_YATAI_SUPPLIER_PROFILE);

  assert.match(brief.primaryKeyword, /Dalian Yatai/i);
  assert.match(brief.primaryKeyword, /magnesium|flame retard/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.deepEqual(
    brief.applicationNotes.map(({ title }) => title),
    [
      "Flame-retardant composite and polymer formulations",
      "Functional fillers and surface-modified minerals",
      "Compounding and masterbatch programs",
    ],
  );
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
