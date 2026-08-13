import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DANYANG_YIXUN_SUPPLIER_ID,
  DANYANG_YIXUN_SUPPLIER_PROFILE,
  DANYANG_YIXUN_SUPPLIER_SLUG,
} from "./danyang-yixun-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Danyang Yixun supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(DANYANG_YIXUN_SUPPLIER_ID),
    DANYANG_YIXUN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(DANYANG_YIXUN_SUPPLIER_SLUG),
    DANYANG_YIXUN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DANYANG_YIXUN_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("丹阳市益讯机械") ||
        identity.includes("danyang yixun machinery") ||
        identity.includes("yixun-machine.com")
      );
    }).map(({ profile }) => profile.id),
    [DANYANG_YIXUN_SUPPLIER_ID],
  );
});

test("uses Yixun's official identity, logo, contact and evidence boundaries", () => {
  assert.equal(DANYANG_YIXUN_SUPPLIER_PROFILE.category, "equipment");
  assert.equal(DANYANG_YIXUN_SUPPLIER_PROFILE.province, "江苏");
  assert.equal(DANYANG_YIXUN_SUPPLIER_PROFILE.established, 2016);
  assert.equal(DANYANG_YIXUN_SUPPLIER_PROFILE.exportReady, true);
  assert.equal(
    DANYANG_YIXUN_SUPPLIER_PROFILE.website,
    "https://www.yixun-machine.com/",
  );
  assert.equal(
    DANYANG_YIXUN_SUPPLIER_PROFILE.logo,
    "/supplier-assets/danyang-yixun-logo.png",
  );
  assert.equal(
    DANYANG_YIXUN_SUPPLIER_PROFILE.contactEmail,
    "yixun@yixun-machinery.com",
  );
  assert.deepEqual(DANYANG_YIXUN_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(DANYANG_YIXUN_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    DANYANG_YIXUN_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /speed is expressly product-dependent/i,
  );
  assert.match(
    DANYANG_YIXUN_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /records no company-level certification/i,
  );
});

test("keeps Danyang Yixun in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(DANYANG_YIXUN_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Dalian Yuxing Water Treatment Equipment Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});

test("builds a composite warp-knitting equipment SEO brief in the page range", () => {
  const brief = buildSupplierSeoBrief(DANYANG_YIXUN_SUPPLIER_PROFILE);

  assert.match(brief.primaryKeyword, /Danyang Yixun/i);
  assert.match(brief.primaryKeyword, /warp-knitting/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.equal(brief.topicLabel, "Composite Warp-Knitting Machines");
  assert.equal(brief.applicationNotes.length, 3);
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
