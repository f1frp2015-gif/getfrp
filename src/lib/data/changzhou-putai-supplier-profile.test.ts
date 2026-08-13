import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_PUTAI_SUPPLIER_PROFILE,
  CHANGZHOU_PUTAI_SUPPLIER_SLUG,
} from "./changzhou-putai-supplier-profile";
import {
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Putai as a curated fiber supplier", () => {
  const profile = getCuratedSupplierProfile(CHANGZHOU_PUTAI_SUPPLIER_SLUG);

  assert.equal(profile, CHANGZHOU_PUTAI_SUPPLIER_PROFILE);
  assert.ok(
    getCuratedSupplierSlugs().includes(CHANGZHOU_PUTAI_SUPPLIER_SLUG),
  );
  assert.equal(profile?.locationEn, "Changzhou, Jiangsu, China");
  assert.equal(profile?.category, "fiber");
  assert.equal(profile?.logo, "/supplier-assets/changzhou-putai-logo.png");
  assert.equal(profile?.website, "https://www.cn-protech.com/");
  assert.match(profile?.descriptionEn ?? "", /20,000 tonnes/i);
  assert.match(
    profile?.productsServicesSummaryEn ?? "",
    /legal manufacturer and production site/i,
  );
});
