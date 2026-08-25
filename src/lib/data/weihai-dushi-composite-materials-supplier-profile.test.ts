import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";
import { getSupplierSearchKeywords } from "./supplier-search-keywords";
import {
  WEIHAI_DUSHI_SUPPLIER_ID,
  WEIHAI_DUSHI_SUPPLIER_PROFILE,
  WEIHAI_DUSHI_SUPPLIER_SLUG,
} from "./weihai-dushi-composite-materials-supplier-profile";

test("publishes one deduplicated Weihai Dushi supplier profile", () => {
  assert.equal(
    getCuratedSupplierProfile(WEIHAI_DUSHI_SUPPLIER_ID),
    WEIHAI_DUSHI_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(WEIHAI_DUSHI_SUPPLIER_SLUG),
    WEIHAI_DUSHI_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === WEIHAI_DUSHI_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("威海杜氏复合材料有限公司") ||
        identity.includes("weihai dushi composite materials") ||
        identity.includes("whdushi.com")
      );
    }).map(({ profile }) => profile.id),
    [WEIHAI_DUSHI_SUPPLIER_ID],
  );
});

test("uses official identity, local logo and conservative source controls", () => {
  const profile = WEIHAI_DUSHI_SUPPLIER_PROFILE;

  assert.equal(profile.category, "fiber");
  assert.equal(profile.province, "山东");
  assert.equal(profile.established, 2021);
  assert.equal(profile.verified, false);
  assert.equal(profile.enterpriseId, null);
  assert.equal(profile.website, "https://whdushi.com/en");
  assert.equal(profile.logo, "/supplier-assets/weihai-dushi-logo.png");
  assert.equal(profile.contactEmail, "1807029979@qq.com");
  assert.equal(profile.contactPhone, "+86 156 3174 1888");
  assert.equal(profile.exportReady, true);
  assert.equal(profile.scaleTier, null);
  assert.deepEqual(profile.standardsSupported, []);
  assert.match(profile.descriptionEn ?? "", /August 9, 2021/i);
  assert.match(profile.descriptionEn ?? "", /older CCE Net Show description says 2010/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /internally inconsistent/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /1\.25 million m²\/year/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /standardsSupported remains empty/i);
});

test("maps only product-supported demand keywords to Weihai Dushi", () => {
  const keywords = getSupplierSearchKeywords(WEIHAI_DUSHI_SUPPLIER_PROFILE);
  const phrases = keywords.map(({ phrase }) => phrase);

  assert.ok(phrases.includes("fiberglass cloth"));
  assert.ok(phrases.includes("forged carbon fiber"));
  assert.ok(phrases.includes("carbon fiber fabric"));
  assert.ok(phrases.includes("carbon fiber products"));
  assert.ok(!phrases.includes("carbon fiber sheets"));
  assert.ok(!phrases.includes("carbon fiber tube"));
  assert.ok(!phrases.includes("carbon fiber fishing rod"));
  assert.equal(
    keywords.find(({ phrase }) => phrase === "forged carbon fiber")
      ?.monthlySearches,
    9_900,
  );
  assert.equal(
    keywords.find(({ phrase }) => phrase === "fiberglass cloth")
      ?.monthlySearches,
    3_600,
  );
  assert.equal(
    keywords.find(({ phrase }) => phrase === "carbon fiber fabric")
      ?.monthlySearches,
    1_600,
  );
});

test("builds a demand-backed prepreg and fabric SEO brief", () => {
  const brief = buildSupplierSeoBrief(WEIHAI_DUSHI_SUPPLIER_PROFILE);

  assert.match(brief.primaryKeyword, /Weihai Dushi/i);
  assert.equal(brief.topicLabel, "Carbon Fiber Prepreg and Reinforcement Fabrics");
  assert.equal(brief.searchKeywords[0], "forged carbon fiber");
  assert.ok(brief.searchKeywords.includes("fiberglass cloth"));
  assert.ok(brief.searchKeywords.includes("carbon fiber fabric"));
  assert.ok(brief.keywordContext?.includes("forged carbon fiber"));
  assert.ok(brief.metaDescription.includes("forged carbon fiber"));
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
