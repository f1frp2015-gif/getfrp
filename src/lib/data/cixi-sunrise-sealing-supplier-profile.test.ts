import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CIXI_SUNRISE_SEALING_SUPPLIER_ID,
  CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE,
  CIXI_SUNRISE_SEALING_SUPPLIER_SLUG,
} from "./cixi-sunrise-sealing-supplier-profile";

test("publishes one deduplicated mainland-China Cixi Sunrise supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CIXI_SUNRISE_SEALING_SUPPLIER_ID),
    CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CIXI_SUNRISE_SEALING_SUPPLIER_SLUG),
    CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CIXI_SUNRISE_SEALING_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("慈溪市晨升") ||
        identity.includes("cixi sunrise sealing") ||
        identity.includes("sunrise-sealing.com")
      );
    }).map(({ profile }) => profile.id),
    [CIXI_SUNRISE_SEALING_SUPPLIER_ID],
  );
});

test("uses the official identity, contact and locally stored logo", () => {
  assert.equal(CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE.category, "fiber");
  assert.equal(CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE.province, "浙江");
  assert.equal(CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE.established, 1992);
  assert.equal(CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE.exportReady, true);
  assert.equal(
    CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE.website,
    "https://www.sunrise-sealing.com/",
  );
  assert.equal(
    CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE.logo,
    "/supplier-assets/cixi-sunrise-sealing-logo.jpg",
  );
  assert.equal(
    CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE.contactEmail,
    "barbara@sunrise-sealing.com",
  );
  assert.deepEqual(CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE.descriptionEn ?? "",
    /booth 7L45/i,
  );
  assert.match(
    CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /not recorded as a verified certification/i,
  );
});

test("keeps Cixi Sunrise in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(CIXI_SUNRISE_SEALING_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Shanghai TRONXT New Material Technology Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Dalian HLB New Material Technology Co., Ltd.",
  );
});
