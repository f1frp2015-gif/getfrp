import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHANGZHOU_RUISHUN_SUPPLIER_ID,
  CHANGZHOU_RUISHUN_SUPPLIER_PROFILE,
  CHANGZHOU_RUISHUN_SUPPLIER_SLUG,
} from "./changzhou-ruishun-supplier-profile";

test("publishes one deduplicated mainland-China Ruishun supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_RUISHUN_SUPPLIER_ID),
    CHANGZHOU_RUISHUN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_RUISHUN_SUPPLIER_SLUG),
    CHANGZHOU_RUISHUN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHANGZHOU_RUISHUN_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("瑞顺新材料") ||
        identity.includes("ruishun new materials") ||
        identity.includes("ruishunmaterials.com")
      );
    }).map(({ profile }) => profile.id),
    [CHANGZHOU_RUISHUN_SUPPLIER_ID],
  );
});

test("records official fiberglass sourcing evidence without overstating certification", () => {
  assert.equal(
    CHANGZHOU_RUISHUN_SUPPLIER_PROFILE.website,
    "https://www.ruishunmaterials.com/",
  );
  assert.equal(
    CHANGZHOU_RUISHUN_SUPPLIER_PROFILE.logo,
    "/supplier-assets/changzhou-ruishun-logo.png",
  );
  assert.equal(CHANGZHOU_RUISHUN_SUPPLIER_PROFILE.category, "fiber");
  assert.equal(CHANGZHOU_RUISHUN_SUPPLIER_PROFILE.established, 2021);
  assert.equal(CHANGZHOU_RUISHUN_SUPPLIER_PROFILE.exportReady, true);
  assert.deepEqual(CHANGZHOU_RUISHUN_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    CHANGZHOU_RUISHUN_SUPPLIER_PROFILE.certificationsEn?.[0] ?? "",
    /rather than treating marketing text as certification/i,
  );
  assert.match(
    CHANGZHOU_RUISHUN_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /raw-material test must not be extrapolated/i,
  );
  assert.match(
    CHANGZHOU_RUISHUN_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /unpopulated counters/i,
  );
});
