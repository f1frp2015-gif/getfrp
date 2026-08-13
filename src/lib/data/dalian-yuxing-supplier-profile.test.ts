import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DALIAN_YUXING_SUPPLIER_ID,
  DALIAN_YUXING_SUPPLIER_PROFILE,
  DALIAN_YUXING_SUPPLIER_SLUG,
} from "./dalian-yuxing-supplier-profile";
import {
  buildSupplierSeoBrief,
  SUPPLIER_SEO_MAX_WORDS,
  SUPPLIER_SEO_MIN_WORDS,
} from "./supplier-seo-briefs";

test("publishes one deduplicated mainland-China Dalian Yuxing supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(DALIAN_YUXING_SUPPLIER_ID),
    DALIAN_YUXING_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(DALIAN_YUXING_SUPPLIER_SLUG),
    DALIAN_YUXING_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DALIAN_YUXING_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.descriptionEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("大连宇星净水设备") ||
        identity.includes("大连宇星净化净水设备") ||
        identity.includes("dalian yuxing water treatment") ||
        identity.includes("memshell.com.cn")
      );
    }).map(({ profile }) => profile.id),
    [DALIAN_YUXING_SUPPLIER_ID],
  );
});

test("uses Yuxing's official identity, contact, logo and evidence boundaries", () => {
  assert.equal(DALIAN_YUXING_SUPPLIER_PROFILE.category, "manufacturer");
  assert.equal(DALIAN_YUXING_SUPPLIER_PROFILE.province, "辽宁");
  assert.equal(DALIAN_YUXING_SUPPLIER_PROFILE.established, 1998);
  assert.equal(DALIAN_YUXING_SUPPLIER_PROFILE.exportReady, true);
  assert.equal(
    DALIAN_YUXING_SUPPLIER_PROFILE.website,
    "http://www.memshell.com.cn/",
  );
  assert.equal(
    DALIAN_YUXING_SUPPLIER_PROFILE.logo,
    "/supplier-assets/dalian-yuxing-logo.jpg",
  );
  assert.equal(
    DALIAN_YUXING_SUPPLIER_PROFILE.contactEmail,
    "office@memshell.com.cn",
  );
  assert.deepEqual(DALIAN_YUXING_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(DALIAN_YUXING_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    DALIAN_YUXING_SUPPLIER_PROFILE.descriptionEn ?? "",
    /deduplicated to this one Dalian mainland entity/i,
  );
  assert.match(
    DALIAN_YUXING_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /pictured validity has ended/i,
  );
  assert.match(
    DALIAN_YUXING_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /works only over unencrypted HTTP/i,
  );
});

test("keeps Dalian Yuxing in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(DALIAN_YUXING_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(names[index - 1], "Dalian Yibang Technology Co., Ltd.");
  assert.equal(
    names[index + 1],
    "Danyang Yixun Machinery Co., Ltd.",
  );
});

test("builds an FRP membrane-housing SEO brief in the page range", () => {
  const brief = buildSupplierSeoBrief(DALIAN_YUXING_SUPPLIER_PROFILE);

  assert.match(brief.primaryKeyword, /Dalian Yuxing/i);
  assert.match(brief.primaryKeyword, /membrane|pressure vessel/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
  assert.deepEqual(
    brief.applicationNotes.map(({ title }) => title),
    [
      "RO, ultrafiltration and desalination pressure-vessel systems",
      "Communication radomes and radio-transparent structures",
      "Composite utility and electrical infrastructure",
    ],
  );
  assert.equal(brief.evidenceNotes.length, 3);
  assert.equal(brief.rfqChecklist.length, 7);
  assert.ok(brief.estimatedPageWordCount >= SUPPLIER_SEO_MIN_WORDS);
  assert.ok(brief.estimatedPageWordCount <= SUPPLIER_SEO_MAX_WORDS);
});
