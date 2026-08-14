import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_ID,
  DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_PROFILE,
  DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_SLUG,
} from "./dezhou-hongyu-compo-tech-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Dezhou Hongyu supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_ID),
    DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_SLUG),
    DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("德州泓宇复合材料科技有限公司") ||
        identity.includes("dezhou hongyu compo-tech") ||
        identity.includes("hyfhclkj.cn")
      );
    }).map(({ profile }) => profile.id),
    [DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_ID],
  );
});

test("uses the official Dezhou identity and conservative evidence controls", () => {
  const profile = DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_PROFILE;

  assert.equal(profile.category, "fiber");
  assert.equal(profile.province, "山东");
  assert.equal(profile.established, 2018);
  assert.equal(profile.exportReady, false);
  assert.equal(profile.website, "https://www.hyfhclkj.cn/");
  assert.equal(profile.logo, null);
  assert.equal(profile.contactEmail, "851765049@qq.com");
  assert.equal(profile.contactPhone, "+86 534 275 2023");
  assert.deepEqual(profile.standardsSupported, []);
  assert.match(profile.descriptionEn ?? "", /deduplicates/i);
  assert.match(profile.descriptionEn ?? "", /3 million square metres/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /cancelled in August 2023/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /GR202537005644/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /text fallback/i);
});

test("keeps Dezhou Hongyu in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(
    DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_PROFILE.nameEn,
  );

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Deqing Guotai Fireproof Material Factory",
  );
  assert.equal(
    names[index + 1],
    "Dezhou JunTeng Material Technology Co., Ltd.",
  );
});

test("builds a carbon-fiber prepreg SEO brief in the page range", () => {
  const brief = buildSupplierSeoBrief(
    DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_PROFILE,
  );

  assert.match(brief.primaryKeyword, /Dezhou Hongyu/i);
  assert.match(brief.primaryKeyword, /prepreg/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.equal(
    brief.topicLabel,
    "Carbon Fiber Prepreg and Reinforcement Fabrics",
  );
  assert.equal(brief.applicationNotes.length, 3);
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
