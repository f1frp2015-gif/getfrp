import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_ID,
  DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_PROFILE,
  DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_SLUG,
} from "./deqing-guotai-fireproof-material-factory-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Deqing Guotai supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(
      DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_ID,
    ),
    DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(
      DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_SLUG,
    ),
    DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) =>
        slug === DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("德清国泰耐火保温材料厂") ||
        identity.includes("deqing guotai fireproof material factory") ||
        identity.includes("guotaixf.com")
      );
    }).map(({ profile }) => profile.id),
    [DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_ID],
  );
});

test("uses the official Deqing identity, current logo and conservative evidence", () => {
  const profile = DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_PROFILE;

  assert.equal(profile.category, "fiber");
  assert.equal(profile.province, "浙江");
  assert.equal(profile.established, 1997);
  assert.equal(profile.exportReady, true);
  assert.equal(profile.website, "http://www.guotaixf.com/");
  assert.equal(profile.logo, "/supplier-assets/deqing-guotai-logo.png");
  assert.equal(profile.contactEmail, "gt@guotaixf.com");
  assert.equal(profile.contactPhone, "+86 572 8495 262");
  assert.deepEqual(profile.certifications, []);
  assert.deepEqual(profile.standardsSupported, []);
  assert.match(profile.descriptionEn ?? "", /deduplicates/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /not treat them automatically as structural reinforcement/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /expiry in 2015/i);
  assert.match(profile.productsServicesSummaryEn ?? "", /No current verified certification/i);
});

test("keeps Deqing Guotai in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(
    DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_PROFILE.nameEn,
  );

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Dellahol CNC Technology (Suzhou) Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Dezhou Hongyu Compo-Tech Co., Ltd.",
  );
});

test("builds a fireproof fiberglass and insulation textile SEO brief in the page range", () => {
  const brief = buildSupplierSeoBrief(
    DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_PROFILE,
  );

  assert.match(brief.primaryKeyword, /Deqing Guotai/i);
  assert.match(brief.primaryKeyword, /fireproof|insulation/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.equal(
    brief.topicLabel,
    "Fireproof Fiberglass and Insulation Textiles",
  );
  assert.equal(brief.applicationNotes.length, 3);
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
