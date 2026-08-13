import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DALIAN_YIBANG_SUPPLIER_ID,
  DALIAN_YIBANG_SUPPLIER_PROFILE,
  DALIAN_YIBANG_SUPPLIER_SLUG,
} from "./dalian-yibang-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Dalian Yibang supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(DALIAN_YIBANG_SUPPLIER_ID),
    DALIAN_YIBANG_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(DALIAN_YIBANG_SUPPLIER_SLUG),
    DALIAN_YIBANG_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DALIAN_YIBANG_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("大连义邦科技") ||
        identity.includes("dalian yibang technology") ||
        identity.includes("dalian yibang science and technology") ||
        identity.includes("dlybcl.com") ||
        identity.includes("dlybkj.cn")
      );
    }).map(({ profile }) => profile.id),
    [DALIAN_YIBANG_SUPPLIER_ID],
  );
});

test("publishes Yibang as a distributor with evidence boundaries", () => {
  assert.equal(DALIAN_YIBANG_SUPPLIER_PROFILE.category, "distributor");
  assert.equal(DALIAN_YIBANG_SUPPLIER_PROFILE.province, "辽宁");
  assert.equal(DALIAN_YIBANG_SUPPLIER_PROFILE.established, 2009);
  assert.equal(DALIAN_YIBANG_SUPPLIER_PROFILE.exportReady, false);
  assert.equal(
    DALIAN_YIBANG_SUPPLIER_PROFILE.website,
    "https://www.dlybcl.com/",
  );
  assert.equal(
    DALIAN_YIBANG_SUPPLIER_PROFILE.logo,
    "/supplier-assets/dalian-yibang-logo.png",
  );
  assert.equal(
    DALIAN_YIBANG_SUPPLIER_PROFILE.contactEmail,
    "marketing@orgchina.net",
  );
  assert.deepEqual(DALIAN_YIBANG_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(DALIAN_YIBANG_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    DALIAN_YIBANG_SUPPLIER_PROFILE.descriptionEn ?? "",
    /not attributed to Yibang manufacturing/i,
  );
  assert.match(
    DALIAN_YIBANG_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /no current certification is recorded/i,
  );
  assert.match(
    DALIAN_YIBANG_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /not export-ready/i,
  );
});

test("keeps Dalian Yibang in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(DALIAN_YIBANG_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Dalian Yatai Science and Technology New Material Incorporated Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});

test("builds a distribution-focused SEO brief in the page range", () => {
  const brief = buildSupplierSeoBrief(DALIAN_YIBANG_SUPPLIER_PROFILE);

  assert.match(brief.primaryKeyword, /Dalian Yibang/i);
  assert.match(brief.primaryKeyword, /lightning|metal mesh/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.deepEqual(
    brief.applicationNotes.map(({ title }) => title),
    [
      "Authorized and traceable material supply",
      "Aerospace and performance-critical material programs",
      "Application trials and controlled repeat supply",
    ],
  );
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
