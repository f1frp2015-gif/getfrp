import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHENGZI_TAINUO_SUPPLIER_ID,
  CHENGZI_TAINUO_SUPPLIER_PROFILE,
  CHENGZI_TAINUO_SUPPLIER_SLUG,
} from "./chengzi-tainuo-supplier-profile";

test("publishes one deduplicated mainland-China Chengzi Tainuo supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHENGZI_TAINUO_SUPPLIER_ID),
    CHENGZI_TAINUO_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHENGZI_TAINUO_SUPPLIER_SLUG),
    CHENGZI_TAINUO_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHENGZI_TAINUO_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("城资泰诺") ||
        identity.includes("chengzi tainuo") ||
        identity.includes("tynocfrt.com") ||
        identity.includes("cztnsd.com")
      );
    }).map(({ profile }) => profile.id),
    [CHENGZI_TAINUO_SUPPLIER_ID],
  );
});

test("uses official identity, contact and locally stored logo", () => {
  assert.equal(
    CHENGZI_TAINUO_SUPPLIER_PROFILE.website,
    "https://www.tynocfrt.com/",
  );
  assert.equal(
    CHENGZI_TAINUO_SUPPLIER_PROFILE.logo,
    "/supplier-assets/chengzi-tainuo-logo.png",
  );
  assert.equal(CHENGZI_TAINUO_SUPPLIER_PROFILE.province, "山东");
  assert.equal(CHENGZI_TAINUO_SUPPLIER_PROFILE.established, 2021);
  assert.equal(CHENGZI_TAINUO_SUPPLIER_PROFILE.exportReady, true);
  assert.equal(
    CHENGZI_TAINUO_SUPPLIER_PROFILE.contactEmail,
    "grace@cztnsd.com",
  );
  assert.deepEqual(CHENGZI_TAINUO_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(CHENGZI_TAINUO_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    CHENGZI_TAINUO_SUPPLIER_PROFILE.descriptionEn ?? "",
    /first-tier subsidiary with a 60% holding/i,
  );
  assert.match(
    CHENGZI_TAINUO_SUPPLIER_PROFILE.descriptionEn ?? "",
    /booth 7L15/i,
  );
  assert.match(
    CHENGZI_TAINUO_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /official site claims/i,
  );
});

test("keeps Chengzi Tainuo in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(CHENGZI_TAINUO_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Chengwu Herun New Material Technology Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Topglow Advanced Materials (Shanghai) Co., Ltd.",
  );
});
