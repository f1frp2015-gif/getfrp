import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_ID,
  DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_PROFILE,
  DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_SLUG,
} from "./dongguan-maikos-composites-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Maikos supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_ID),
    DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_SLUG),
    DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("东莞市麦科斯复合材料") ||
        identity.includes("maikos composites") ||
        identity.includes("deawa.cn") ||
        identity.includes("deawa.net")
      );
    }).map(({ profile }) => profile.id),
    [DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_ID],
  );
});

test("uses the current mainland legal identity, official logo and evidence boundaries", () => {
  const profile = DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_PROFILE;

  assert.equal(profile.category, "additive");
  assert.equal(profile.province, "广东");
  assert.equal(profile.established, 2001);
  assert.equal(profile.exportReady, true);
  assert.equal(profile.website, "http://www.deawa.cn/");
  assert.equal(profile.logo, "/supplier-assets/dongguan-maikos-deawa-logo.png");
  assert.equal(profile.contactEmail, "deawa@189.cn");
  assert.equal(profile.contactPhone, "+86 133 7772 9539");
  assert.deepEqual(profile.certifications, []);
  assert.deepEqual(profile.standardsSupported, []);
  assert.match(profile.descriptionEn ?? "", /deduplicates those brands and domains/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /does not extend these typical values/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /none is recorded as verified/i);
});

test("keeps Maikos in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(names[index - 1], "Zhejiang Dasheng Mould Plastics Co., Ltd.");
  assert.equal(names[index + 1], "DeepSea Precision Tech (Shenzhen) Co., Ltd.");
});

test("builds a composite mold-release SEO brief in the page range", () => {
  const brief = buildSupplierSeoBrief(DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_PROFILE);

  assert.match(brief.primaryKeyword, /Maikos/i);
  assert.match(brief.primaryKeyword, /release/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.equal(brief.topicLabel, "Composite Mold Release Agents");
  assert.equal(brief.applicationNotes.length, 3);
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
