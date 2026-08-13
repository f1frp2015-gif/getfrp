import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_PANWANG_SUPPLIER_PROFILE,
  CHANGZHOU_PANWANG_SUPPLIER_SLUG,
} from "./changzhou-panwang-supplier-profile";
import {
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Panwang as a curated additive supplier", () => {
  const profile = getCuratedSupplierProfile(CHANGZHOU_PANWANG_SUPPLIER_SLUG);

  assert.equal(profile, CHANGZHOU_PANWANG_SUPPLIER_PROFILE);
  assert.ok(getCuratedSupplierSlugs().includes(CHANGZHOU_PANWANG_SUPPLIER_SLUG));
  assert.equal(profile?.locationEn, "Changzhou, Jiangsu, China");
  assert.equal(profile?.category, "additive");
  assert.equal(profile?.logo, "/supplier-assets/changzhou-panwang-logo.png");
  assert.match(profile?.descriptionEn ?? "", /3,000 tonnes/i);
  assert.match(
    profile?.productsServicesSummaryEn ?? "",
    /dangerous-goods class and UN number/i,
  );
});
