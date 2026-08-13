import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_RUNFENGYUAN_SUPPLIER_PROFILE,
  CHANGZHOU_RUNFENGYUAN_SUPPLIER_SLUG,
} from "./changzhou-runfengyuan-supplier-profile";
import {
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Run Feng Yuan as a curated equipment supplier", () => {
  const profile = getCuratedSupplierProfile(
    CHANGZHOU_RUNFENGYUAN_SUPPLIER_SLUG,
  );

  assert.equal(profile, CHANGZHOU_RUNFENGYUAN_SUPPLIER_PROFILE);
  assert.ok(
    getCuratedSupplierSlugs().includes(CHANGZHOU_RUNFENGYUAN_SUPPLIER_SLUG),
  );
  assert.equal(profile?.category, "equipment");
  assert.equal(
    profile?.logo,
    "/supplier-assets/changzhou-runfengyuan-logo.png",
  );
  assert.equal(profile?.website, "https://www.run-yuan.com/");
  assert.match(profile?.descriptionEn ?? "", /founded in 2002/i);
  assert.match(profile?.productsServicesSummaryEn ?? "", /materially conflict/i);
});
