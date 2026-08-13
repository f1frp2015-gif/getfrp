import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DALIAN_HLB_SUPPLIER_ID,
  DALIAN_HLB_SUPPLIER_PROFILE,
  DALIAN_HLB_SUPPLIER_SLUG,
} from "./dalian-hlb-supplier-profile";

test("publishes one deduplicated mainland-China Dalian HLB supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(DALIAN_HLB_SUPPLIER_ID),
    DALIAN_HLB_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(DALIAN_HLB_SUPPLIER_SLUG),
    DALIAN_HLB_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === DALIAN_HLB_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("大连汇力宝") ||
        identity.includes("dalian hlb") ||
        identity.includes("dalian huilibao") ||
        identity.includes("hlbnonwoven.com")
      );
    }).map(({ profile }) => profile.id),
    [DALIAN_HLB_SUPPLIER_ID],
  );
});

test("uses the current official identity, contact and local logo", () => {
  assert.equal(DALIAN_HLB_SUPPLIER_PROFILE.category, "manufacturer");
  assert.equal(DALIAN_HLB_SUPPLIER_PROFILE.province, "辽宁");
  assert.equal(DALIAN_HLB_SUPPLIER_PROFILE.established, 2012);
  assert.equal(DALIAN_HLB_SUPPLIER_PROFILE.exportReady, true);
  assert.equal(
    DALIAN_HLB_SUPPLIER_PROFILE.website,
    "https://www.hlbnonwoven.com/",
  );
  assert.equal(
    DALIAN_HLB_SUPPLIER_PROFILE.logo,
    "/supplier-assets/dalian-hlb-logo.svg",
  );
  assert.equal(
    DALIAN_HLB_SUPPLIER_PROFILE.contactEmail,
    "sales@hlbnonwoven.com",
  );
  assert.deepEqual(DALIAN_HLB_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(DALIAN_HLB_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    DALIAN_HLB_SUPPLIER_PROFILE.descriptionEn ?? "",
    /exhibition-described scope/i,
  );
  assert.match(
    DALIAN_HLB_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /None is therefore recorded as a verified certification/i,
  );
});

test("keeps Dalian HLB in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(DALIAN_HLB_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Cixi Sunrise Sealing Material Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});
