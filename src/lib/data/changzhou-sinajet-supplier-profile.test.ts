import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_SINAJET_SUPPLIER_PROFILE,
  CHANGZHOU_SINAJET_SUPPLIER_SLUG,
} from "./changzhou-sinajet-supplier-profile";
import {
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Sinajet as a curated equipment supplier", () => {
  const profile = getCuratedSupplierProfile(CHANGZHOU_SINAJET_SUPPLIER_SLUG);

  assert.equal(profile, CHANGZHOU_SINAJET_SUPPLIER_PROFILE);
  assert.ok(
    getCuratedSupplierSlugs().includes(CHANGZHOU_SINAJET_SUPPLIER_SLUG),
  );
  assert.equal(profile?.locationEn, "Changzhou, Jiangsu, China");
  assert.equal(profile?.category, "equipment");
  assert.equal(
    profile?.logo,
    "/supplier-assets/changzhou-sinajet-logo.jpg",
  );
  assert.equal(profile?.website, "https://www.sinajet.net/");
  assert.match(profile?.descriptionEn ?? "", /specialized and innovative/i);
  assert.match(
    profile?.productsServicesSummaryEn ?? "",
    /FAT\/SAT acceptance criteria/i,
  );
});
