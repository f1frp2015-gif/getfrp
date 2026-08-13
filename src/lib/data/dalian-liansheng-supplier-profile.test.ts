import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DALIAN_LIANSHENG_SUPPLIER_ID,
  DALIAN_LIANSHENG_SUPPLIER_PROFILE,
  DALIAN_LIANSHENG_SUPPLIER_SLUG,
} from "./dalian-liansheng-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Dalian Liansheng supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(DALIAN_LIANSHENG_SUPPLIER_ID),
    DALIAN_LIANSHENG_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(DALIAN_LIANSHENG_SUPPLIER_SLUG),
    DALIAN_LIANSHENG_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DALIAN_LIANSHENG_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("大连连晟新材料集团") ||
        identity.includes("dalian liansheng new materials") ||
        identity.includes("liansheng group") ||
        identity.includes("dlliansheng.com")
      );
    }).map(({ profile }) => profile.id),
    [DALIAN_LIANSHENG_SUPPLIER_ID],
  );
});

test("separates group-produced grades from distributed partner products", () => {
  assert.equal(DALIAN_LIANSHENG_SUPPLIER_PROFILE.category, "resin");
  assert.equal(DALIAN_LIANSHENG_SUPPLIER_PROFILE.province, "辽宁");
  assert.equal(DALIAN_LIANSHENG_SUPPLIER_PROFILE.established, 2006);
  assert.equal(DALIAN_LIANSHENG_SUPPLIER_PROFILE.exportReady, false);
  assert.equal(
    DALIAN_LIANSHENG_SUPPLIER_PROFILE.website,
    "http://www.dlliansheng.com/",
  );
  assert.equal(
    DALIAN_LIANSHENG_SUPPLIER_PROFILE.logo,
    "/supplier-assets/dalian-liansheng-logo.png",
  );
  assert.equal(
    DALIAN_LIANSHENG_SUPPLIER_PROFILE.contactEmail,
    "liansheng116@dlliansheng.com",
  );
  assert.deepEqual(DALIAN_LIANSHENG_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(DALIAN_LIANSHENG_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    DALIAN_LIANSHENG_SUPPLIER_PROFILE.descriptionEn ?? "",
    /not automatically attributed to Liansheng manufacturing/i,
  );
  assert.match(
    DALIAN_LIANSHENG_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /not marked export-ready/i,
  );
  assert.match(
    DALIAN_LIANSHENG_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /HTTPS certificate was expired/i,
  );
});

test("keeps Dalian Liansheng in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(DALIAN_LIANSHENG_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Dalian Kuanda Special Vehicle Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});

test("builds a resin-focused SEO brief within the supplier-page range", () => {
  const brief = buildSupplierSeoBrief(DALIAN_LIANSHENG_SUPPLIER_PROFILE);

  assert.match(brief.primaryKeyword, /Dalian Liansheng/i);
  assert.match(brief.primaryKeyword, /epoxy|resin/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.equal(brief.applicationNotes.length, 3);
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
