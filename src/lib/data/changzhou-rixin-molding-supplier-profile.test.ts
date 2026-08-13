import assert from "node:assert/strict";
import { test } from "node:test";
import { CHANGZHOU_RIXIN_GROUP_SUPPLIER_PROFILE } from "./changzhou-rixin-group-supplier-profile";
import {
  CHANGZHOU_RIXIN_MOLDING_SUPPLIER_PROFILE,
  CHANGZHOU_RIXIN_MOLDING_SUPPLIER_SLUG,
} from "./changzhou-rixin-molding-supplier-profile";
import {
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Rixin Molding as a distinct curated manufacturer", () => {
  const profile = getCuratedSupplierProfile(
    CHANGZHOU_RIXIN_MOLDING_SUPPLIER_SLUG,
  );

  assert.equal(profile, CHANGZHOU_RIXIN_MOLDING_SUPPLIER_PROFILE);
  assert.ok(
    getCuratedSupplierSlugs().includes(CHANGZHOU_RIXIN_MOLDING_SUPPLIER_SLUG),
  );
  assert.notEqual(profile?.id, CHANGZHOU_RIXIN_GROUP_SUPPLIER_PROFILE.id);
  assert.notEqual(profile?.slug, CHANGZHOU_RIXIN_GROUP_SUPPLIER_PROFILE.slug);
  assert.equal(profile?.category, "manufacturer");
  assert.equal(
    profile?.logo,
    "/supplier-assets/changzhou-rixin-molding-logo.png",
  );
  assert.equal(profile?.website, "https://www.czrxms.com/");
  assert.match(profile?.descriptionEn ?? "", /founded in 2009/i);
  assert.match(profile?.productsServicesSummaryEn ?? "", /50,000 tonnes/i);
});
