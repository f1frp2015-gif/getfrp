import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_SAIRUI_SUPPLIER_PROFILE,
  CHANGZHOU_SAIRUI_SUPPLIER_SLUG,
} from "./changzhou-sairui-supplier-profile";
import {
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Sairui as a curated equipment supplier", () => {
  const profile = getCuratedSupplierProfile(CHANGZHOU_SAIRUI_SUPPLIER_SLUG);

  assert.equal(profile, CHANGZHOU_SAIRUI_SUPPLIER_PROFILE);
  assert.ok(
    getCuratedSupplierSlugs().includes(CHANGZHOU_SAIRUI_SUPPLIER_SLUG),
  );
  assert.equal(profile?.category, "equipment");
  assert.equal(profile?.logo, "/supplier-assets/changzhou-sairui-logo.png");
  assert.equal(profile?.website, "http://www.orit.cn/product/orit.aspx");
  assert.equal(profile?.contactPhone, "+86 10 8586 1032");
  assert.match(profile?.descriptionEn ?? "", /established in 2009/i);
  assert.match(
    profile?.productsServicesSummaryEn ?? "",
    /Beijing sales channel/i,
  );
});
