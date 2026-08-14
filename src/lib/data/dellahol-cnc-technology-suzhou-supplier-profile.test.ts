import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_ID,
  DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_PROFILE,
  DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_SLUG,
} from "./dellahol-cnc-technology-suzhou-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Dellahol supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_ID),
    DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_SLUG),
    DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("德拉赫数控科技（苏州）") ||
        identity.includes("dellahol cnc technology") ||
        identity.includes("dellahol.com")
      );
    }).map(({ profile }) => profile.id),
    [DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_ID],
  );
});

test("uses the current Changshu identity, official logo and conservative evidence", () => {
  const profile = DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_PROFILE;

  assert.equal(profile.category, "equipment");
  assert.equal(profile.province, "江苏");
  assert.equal(profile.established, 2020);
  assert.equal(profile.exportReady, false);
  assert.equal(profile.website, "https://www.dellahol.com/");
  assert.equal(profile.logo, "/supplier-assets/dellahol-logo.png");
  assert.equal(profile.contactEmail, "tljq002@163.com");
  assert.equal(profile.contactPhone, "+86 512 5286 5601");
  assert.deepEqual(profile.certifications, []);
  assert.deepEqual(profile.standardsSupported, []);
  assert.match(profile.descriptionEn ?? "", /deduplicates Dellahol/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /not evidence of verified/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /none is recorded as verified/i);
});

test("keeps Dellahol in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(
    DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_PROFILE.nameEn,
  );

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "DeepSea Precision Tech (Shenzhen) Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});

test("builds a CNC profile and five-axis machining SEO brief in the page range", () => {
  const brief = buildSupplierSeoBrief(
    DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_PROFILE,
  );

  assert.match(brief.primaryKeyword, /Dellahol/i);
  assert.match(brief.primaryKeyword, /CNC|machining/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.equal(brief.topicLabel, "CNC Profile and Five-Axis Machining Centers");
  assert.equal(brief.applicationNotes.length, 3);
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
