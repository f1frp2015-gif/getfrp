import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DARBOND_TECHNOLOGY_SUPPLIER_ID,
  DARBOND_TECHNOLOGY_SUPPLIER_PROFILE,
  DARBOND_TECHNOLOGY_SUPPLIER_SLUG,
} from "./darbond-technology-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Darbond supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(DARBOND_TECHNOLOGY_SUPPLIER_ID),
    DARBOND_TECHNOLOGY_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(DARBOND_TECHNOLOGY_SUPPLIER_SLUG),
    DARBOND_TECHNOLOGY_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DARBOND_TECHNOLOGY_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("烟台德邦科技股份") ||
        identity.includes("darbond technology") ||
        identity.includes("darbond.com") ||
        identity.includes("688035")
      );
    }).map(({ profile }) => profile.id),
    [DARBOND_TECHNOLOGY_SUPPLIER_ID],
  );
});

test("uses Darbond's current legal identity, contact and evidence boundaries", () => {
  assert.equal(DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.category, "resin");
  assert.equal(DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.province, "山东");
  assert.equal(DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.established, 2003);
  assert.equal(DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.exportReady, true);
  assert.equal(
    DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.website,
    "https://www.darbond.com/en/",
  );
  assert.equal(
    DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.logo,
    "/supplier-assets/darbond-technology-logo.jpg",
  );
  assert.equal(DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.contactEmail, null);
  assert.equal(
    DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.contactPhone,
    "+86-535-3469993",
  );
  assert.deepEqual(DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.descriptionEn ?? "",
    /deduplicated to this one mainland listed company/i,
  );
  assert.match(
    DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /historical events/i,
  );
  assert.match(
    DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /does not publish a sales email/i,
  );
});

test("keeps Darbond in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(DARBOND_TECHNOLOGY_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(names[index - 1], "Danyang Yixun Machinery Co., Ltd.");
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});

test("builds an industrial-adhesive SEO brief in the page range", () => {
  const brief = buildSupplierSeoBrief(DARBOND_TECHNOLOGY_SUPPLIER_PROFILE);

  assert.match(brief.primaryKeyword, /Darbond/i);
  assert.match(brief.primaryKeyword, /adhesive/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.equal(brief.topicLabel, "Industrial Structural Adhesives");
  assert.equal(brief.applicationNotes.length, 3);
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
