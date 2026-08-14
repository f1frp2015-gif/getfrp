import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_ID,
  DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_PROFILE,
  DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_SLUG,
} from "./dezhou-junteng-material-technology-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Dezhou Junteng supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(
      DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_ID,
    ),
    DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(
      DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_SLUG,
    ),
    DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("德州骏腾材料科技股份有限公司") ||
        identity.includes("dezhou junteng material technology") ||
        identity.includes("juntengcarbonfiber.com") ||
        identity.includes("dzjunteng.com")
      );
    }).map(({ profile }) => profile.id),
    [DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_ID],
  );
});

test("uses the current official identity, logo and conservative evidence controls", () => {
  const profile = DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_PROFILE;

  assert.equal(profile.name, "德州骏腾材料科技股份有限公司");
  assert.equal(profile.category, "fiber");
  assert.equal(profile.province, "山东");
  assert.equal(profile.established, 2008);
  assert.equal(profile.exportReady, true);
  assert.equal(profile.website, "https://www.juntengcarbonfiber.com/");
  assert.equal(profile.logo, "/supplier-assets/dezhou-junteng-logo.webp");
  assert.equal(profile.contactEmail, "fanfan@juntengcarbonfiber.com");
  assert.equal(profile.contactPhone, "+86 534 260 9588");
  assert.deepEqual(profile.standardsSupported, []);
  assert.match(profile.descriptionEn ?? "", /deduplicates/i);
  assert.match(profile.descriptionEn ?? "", /1 million square metres/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /GR202337005133/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /expired on December 10, 2024/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /not listed here/i);
});

test("keeps Dezhou Junteng in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(
    DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_PROFILE.nameEn,
  );

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Dezhou Hongyu Compo-Tech Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});

test("builds a carbon-fiber reinforcement SEO brief in the page range", () => {
  const brief = buildSupplierSeoBrief(
    DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_PROFILE,
  );

  assert.match(brief.primaryKeyword, /Dezhou JunTeng/i);
  assert.match(brief.primaryKeyword, /carbon fiber/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.equal(brief.topicLabel, "Carbon Fiber Reinforcement Products");
  assert.equal(brief.applicationNotes.length, 3);
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
