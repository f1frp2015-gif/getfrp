import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHENGDU_LUCHEN_SUPPLIER_ID,
  CHENGDU_LUCHEN_SUPPLIER_PROFILE,
  CHENGDU_LUCHEN_SUPPLIER_SLUG,
} from "./chengdu-luchen-supplier-profile";

test("publishes one deduplicated mainland-China Lu Chen supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHENGDU_LUCHEN_SUPPLIER_ID),
    CHENGDU_LUCHEN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHENGDU_LUCHEN_SUPPLIER_SLUG),
    CHENGDU_LUCHEN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHENGDU_LUCHEN_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("成都鲁晨") ||
        identity.includes("chengdu lu chen") ||
        identity.includes("lu-chen-composite.cn")
      );
    }).map(({ profile }) => profile.id),
    [CHENGDU_LUCHEN_SUPPLIER_ID],
  );
});

test("records current official identity, certificate evidence and HTTP risk", () => {
  assert.equal(
    CHENGDU_LUCHEN_SUPPLIER_PROFILE.website,
    "http://www.lu-chen-composite.cn/",
  );
  assert.equal(
    CHENGDU_LUCHEN_SUPPLIER_PROFILE.logo,
    "/supplier-assets/chengdu-luchen-logo.png",
  );
  assert.equal(CHENGDU_LUCHEN_SUPPLIER_PROFILE.established, 2013);
  assert.equal(CHENGDU_LUCHEN_SUPPLIER_PROFILE.province, "四川");
  assert.equal(CHENGDU_LUCHEN_SUPPLIER_PROFILE.scaleTier, null);
  assert.equal(CHENGDU_LUCHEN_SUPPLIER_PROFILE.exportReady, true);
  assert.equal(CHENGDU_LUCHEN_SUPPLIER_PROFILE.certifications?.length, 4);
  assert.match(
    CHENGDU_LUCHEN_SUPPLIER_PROFILE.certificationsEn?.[0] ?? "",
    /CN052498.*2027-12-23/i,
  );
  assert.match(
    CHENGDU_LUCHEN_SUPPLIER_PROFILE.certificationsEn?.[1] ?? "",
    /CN052573.*2028-01-25/i,
  );
  assert.deepEqual(CHENGDU_LUCHEN_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    CHENGDU_LUCHEN_SUPPLIER_PROFILE.descriptionEn ?? "",
    /booth 6Y01/i,
  );
  assert.match(
    CHENGDU_LUCHEN_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /usable only over HTTP[\s\S]*HTTPS certificate was expired/i,
  );
});

test("keeps Lu Chen in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(CHENGDU_LUCHEN_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Chengdu Chang Yuan Shun Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});
