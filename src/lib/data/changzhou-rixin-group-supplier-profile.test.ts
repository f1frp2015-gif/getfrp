import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_RIXIN_GROUP_SUPPLIER_PROFILE,
  CHANGZHOU_RIXIN_GROUP_SUPPLIER_SLUG,
} from "./changzhou-rixin-group-supplier-profile";
import {
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Rixin Group as a curated resin supplier", () => {
  const profile = getCuratedSupplierProfile(
    CHANGZHOU_RIXIN_GROUP_SUPPLIER_SLUG,
  );

  assert.equal(profile, CHANGZHOU_RIXIN_GROUP_SUPPLIER_PROFILE);
  assert.ok(
    getCuratedSupplierSlugs().includes(CHANGZHOU_RIXIN_GROUP_SUPPLIER_SLUG),
  );
  assert.equal(profile?.locationEn, "Changzhou, Jiangsu, China");
  assert.equal(profile?.category, "resin");
  assert.equal(
    profile?.logo,
    "/supplier-assets/changzhou-rixin-group-logo.png",
  );
  assert.equal(profile?.website, "https://en.czrixin.com/");
  assert.match(profile?.descriptionEn ?? "", /Changzhou Rixin Resin Co\., Ltd\./);
  assert.match(profile?.productsServicesSummaryEn ?? "", /100,000 tonnes/i);
});
