import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_SHENYING_SUPPLIER_PROFILE,
  CHANGZHOU_SHENYING_SUPPLIER_SLUG,
} from "./changzhou-shenying-supplier-profile";
import {
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import { ZHONGFU_SHENYING_SUPPLIER_PROFILE } from "./zhongfu-shenying-supplier-profile";

test("publishes Changzhou Shenying without merging it into Zhongfu Shenying", () => {
  const profile = getCuratedSupplierProfile(CHANGZHOU_SHENYING_SUPPLIER_SLUG);

  assert.equal(profile, CHANGZHOU_SHENYING_SUPPLIER_PROFILE);
  assert.ok(
    getCuratedSupplierSlugs().includes(CHANGZHOU_SHENYING_SUPPLIER_SLUG),
  );
  assert.notEqual(profile?.id, ZHONGFU_SHENYING_SUPPLIER_PROFILE.id);
  assert.equal(profile?.category, "manufacturer");
  assert.equal(profile?.logo, null);
  assert.equal(profile?.website, "http://lygcp.frpapp.com/");
  assert.match(profile?.descriptionEn ?? "", /not the same legal entity/i);
  assert.match(
    profile?.productsServicesSummaryEn ?? "",
    /materially conflict/i,
  );
});
