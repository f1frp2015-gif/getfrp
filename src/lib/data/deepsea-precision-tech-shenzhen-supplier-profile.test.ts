import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DEEPSEA_PRECISION_TECH_SHENZHEN_SUPPLIER_ID,
  DEEPSEA_PRECISION_TECH_SHENZHEN_SUPPLIER_PROFILE,
  DEEPSEA_PRECISION_TECH_SHENZHEN_SUPPLIER_SLUG,
} from "./deepsea-precision-tech-shenzhen-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China DeepSea supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(DEEPSEA_PRECISION_TECH_SHENZHEN_SUPPLIER_ID),
    DEEPSEA_PRECISION_TECH_SHENZHEN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(DEEPSEA_PRECISION_TECH_SHENZHEN_SUPPLIER_SLUG),
    DEEPSEA_PRECISION_TECH_SHENZHEN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DEEPSEA_PRECISION_TECH_SHENZHEN_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("深海精密科技（深圳）") ||
        identity.includes("deepsea precision tech") ||
        identity.includes("shenhaijingmi.com")
      );
    }).map(({ profile }) => profile.id),
    [DEEPSEA_PRECISION_TECH_SHENZHEN_SUPPLIER_ID],
  );
});

test("uses the current Shenzhen identity, official logo and evidence boundaries", () => {
  const profile = DEEPSEA_PRECISION_TECH_SHENZHEN_SUPPLIER_PROFILE;

  assert.equal(profile.category, "tooling");
  assert.equal(profile.province, "广东");
  assert.equal(profile.established, 2015);
  assert.equal(profile.exportReady, true);
  assert.equal(profile.website, "https://www.shenhaijingmi.com/");
  assert.equal(profile.logo, "/supplier-assets/deepsea-precision-logo.png");
  assert.equal(profile.contactEmail, "info@shenhaijingmi.com");
  assert.equal(profile.contactPhone, "+86 755 2324 3107");
  assert.deepEqual(profile.certifications, []);
  assert.deepEqual(profile.standardsSupported, []);
  assert.match(profile.descriptionEn ?? "", /not separate suppliers/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /not acceptance evidence/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /none is recorded as verified/i);
});

test("keeps DeepSea in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(
    DEEPSEA_PRECISION_TECH_SHENZHEN_SUPPLIER_PROFILE.nameEn,
  );

  assert.ok(index > 0);
  assert.equal(names[index - 1], "Maikos Composites Co., Ltd.");
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});

test("builds an industrial X-ray and CT inspection SEO brief in the page range", () => {
  const brief = buildSupplierSeoBrief(
    DEEPSEA_PRECISION_TECH_SHENZHEN_SUPPLIER_PROFILE,
  );

  assert.match(brief.primaryKeyword, /DeepSea/i);
  assert.match(brief.primaryKeyword, /X-ray|CT/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.equal(brief.topicLabel, "Industrial X-ray and CT Inspection Systems");
  assert.equal(brief.applicationNotes.length, 3);
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
