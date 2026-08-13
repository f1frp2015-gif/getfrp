import assert from "node:assert/strict";
import { test } from "node:test";
import { ATCC_SUPPLIER_PROFILE, ATCC_SUPPLIER_SLUG } from "./atcc-supplier-profile";
import {
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes ATCC as a curated composite manufacturer", () => {
  const profile = getCuratedSupplierProfile(ATCC_SUPPLIER_SLUG);

  assert.equal(profile, ATCC_SUPPLIER_PROFILE);
  assert.ok(getCuratedSupplierSlugs().includes(ATCC_SUPPLIER_SLUG));
  assert.equal(profile?.locationEn, "Changzhou, Jiangsu, China");
  assert.equal(profile?.category, "manufacturer");
  assert.equal(profile?.logo, "/supplier-assets/atcc-logo.png");
  assert.equal(profile?.website, "https://www.atcc.net/");
  assert.match(profile?.descriptionEn ?? "", /October 20, 2025/i);
  assert.match(
    profile?.productsServicesSummaryEn ?? "",
    /actual manufacturing plant/i,
  );
});
