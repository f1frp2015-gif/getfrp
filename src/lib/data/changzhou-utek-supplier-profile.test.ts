import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_UTEK_SUPPLIER_PROFILE,
  CHANGZHOU_UTEK_SUPPLIER_SLUG,
} from "./changzhou-utek-supplier-profile";
import {
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Utek as a curated fiber supplier", () => {
  const profile = getCuratedSupplierProfile(CHANGZHOU_UTEK_SUPPLIER_SLUG);

  assert.equal(profile, CHANGZHOU_UTEK_SUPPLIER_PROFILE);
  assert.ok(getCuratedSupplierSlugs().includes(CHANGZHOU_UTEK_SUPPLIER_SLUG));
  assert.equal(profile?.locationEn, "Changzhou, Jiangsu, China");
  assert.equal(profile?.category, "fiber");
  assert.equal(profile?.logo, "/supplier-assets/changzhou-utek-logo.png");
  assert.equal(profile?.website, "https://www.utekcomposites.com/");
  assert.match(profile?.descriptionEn ?? "", /overall composite-material solution provider/i);
  assert.match(
    profile?.productsServicesSummaryEn ?? "",
    /manufactured by Utek or traded/i,
  );
});
