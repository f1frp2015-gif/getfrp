import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  SHANGHAI_TRONXT_SUPPLIER_ID,
  SHANGHAI_TRONXT_SUPPLIER_PROFILE,
  SHANGHAI_TRONXT_SUPPLIER_SLUG,
} from "./shanghai-tronxt-supplier-profile";

test("publishes one deduplicated mainland-China Shanghai TRONXT supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(SHANGHAI_TRONXT_SUPPLIER_ID),
    SHANGHAI_TRONXT_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(SHANGHAI_TRONXT_SUPPLIER_SLUG),
    SHANGHAI_TRONXT_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === SHANGHAI_TRONXT_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("上海创轲") ||
        identity.includes("shanghai tronxt") ||
        identity.includes("tronxt.com")
      );
    }).map(({ profile }) => profile.id),
    [SHANGHAI_TRONXT_SUPPLIER_ID],
  );
});

test("uses the official equipment identity, contact and local logo", () => {
  assert.equal(SHANGHAI_TRONXT_SUPPLIER_PROFILE.category, "equipment");
  assert.equal(SHANGHAI_TRONXT_SUPPLIER_PROFILE.province, "上海");
  assert.equal(SHANGHAI_TRONXT_SUPPLIER_PROFILE.established, 2017);
  assert.equal(SHANGHAI_TRONXT_SUPPLIER_PROFILE.exportReady, true);
  assert.equal(
    SHANGHAI_TRONXT_SUPPLIER_PROFILE.website,
    "https://www.tronxt.com/",
  );
  assert.equal(
    SHANGHAI_TRONXT_SUPPLIER_PROFILE.logo,
    "/supplier-assets/shanghai-tronxt-logo.png",
  );
  assert.equal(
    SHANGHAI_TRONXT_SUPPLIER_PROFILE.contactEmail,
    "info@tronxt.com",
  );
  assert.deepEqual(SHANGHAI_TRONXT_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(SHANGHAI_TRONXT_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    SHANGHAI_TRONXT_SUPPLIER_PROFILE.descriptionEn ?? "",
    /booth 6J12/i,
  );
  assert.match(
    SHANGHAI_TRONXT_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /FAT and SAT/i,
  );
});

test("keeps Shanghai TRONXT in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(SHANGHAI_TRONXT_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Topglow Advanced Materials (Shanghai) Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});
