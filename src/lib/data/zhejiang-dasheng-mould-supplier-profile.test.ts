import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  ZHEJIANG_DASHENG_MOULD_SUPPLIER_ID,
  ZHEJIANG_DASHENG_MOULD_SUPPLIER_PROFILE,
  ZHEJIANG_DASHENG_MOULD_SUPPLIER_SLUG,
} from "./zhejiang-dasheng-mould-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Zhejiang Dasheng supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(ZHEJIANG_DASHENG_MOULD_SUPPLIER_ID),
    ZHEJIANG_DASHENG_MOULD_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(ZHEJIANG_DASHENG_MOULD_SUPPLIER_SLUG),
    ZHEJIANG_DASHENG_MOULD_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === ZHEJIANG_DASHENG_MOULD_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("浙江大盛模塑") ||
        identity.includes("zhejiang dasheng mould plastics") ||
        identity.includes("dsmould.com")
      );
    }).map(({ profile }) => profile.id),
    [ZHEJIANG_DASHENG_MOULD_SUPPLIER_ID],
  );
});

test("uses current Dasheng identity, logo, contacts and certificate boundaries", () => {
  const profile = ZHEJIANG_DASHENG_MOULD_SUPPLIER_PROFILE;

  assert.equal(profile.category, "mold");
  assert.equal(profile.province, "浙江");
  assert.equal(profile.established, 2001);
  assert.equal(profile.exportReady, true);
  assert.equal(profile.website, "https://www.dsmould.com/");
  assert.equal(profile.logo, "/supplier-assets/zhejiang-dasheng-mould-logo.webp");
  assert.equal(profile.contactEmail, "info@dsmould.com");
  assert.equal(profile.contactPhone, "+86 576 8422 8552");
  assert.equal(profile.certifications?.length, 2);
  assert.match(profile.certificationsEn?.[0] ?? "", /04624Q14104R2M/);
  assert.match(profile.certificationsEn?.[1] ?? "", /04624S11007R0M/);
  assert.deepEqual(profile.standardsSupported, []);
  assert.match(profile.descriptionEn ?? "", /deduplicated to this one mainland entity/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /expired on 2026-01-05/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /does not combine them into one verified capacity/i);
});

test("keeps Dasheng in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(ZHEJIANG_DASHENG_MOULD_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(names[index - 1], "Darbond Technology Co., Ltd.");
  assert.equal(names[index + 1], "Shenzhen Hongfu Tongxin Technology Co., Ltd.");
});

test("builds a composite-compression-mold SEO brief in the page range", () => {
  const brief = buildSupplierSeoBrief(ZHEJIANG_DASHENG_MOULD_SUPPLIER_PROFILE);

  assert.match(brief.primaryKeyword, /Dasheng/i);
  assert.match(brief.primaryKeyword, /molds/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.equal(brief.topicLabel, "Composite Compression Molds");
  assert.equal(brief.applicationNotes.length, 3);
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
