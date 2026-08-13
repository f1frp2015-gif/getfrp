import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_AOLANTE_SUPPLIER_PROFILE,
  CHANGZHOU_AOLANTE_SUPPLIER_SLUG,
} from "./changzhou-aolante-supplier-profile";
import {
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Aolante as a deduplicated equipment supplier", () => {
  const profile = getCuratedSupplierProfile(CHANGZHOU_AOLANTE_SUPPLIER_SLUG);

  assert.equal(profile, CHANGZHOU_AOLANTE_SUPPLIER_PROFILE);
  assert.ok(
    getCuratedSupplierSlugs().includes(CHANGZHOU_AOLANTE_SUPPLIER_SLUG),
  );
  assert.equal(profile?.category, "equipment");
  assert.equal(profile?.established, 2018);
  assert.equal(
    profile?.logo,
    "/supplier-assets/changzhou-aolante-logo.png",
  );
  assert.equal(profile?.website, "https://www.czaolante.com/");
  assert.match(profile?.descriptionEn ?? "", /brand or business history/i);
  assert.match(profile?.productsServicesSummaryEn ?? "", /hazardous zone/i);
});
