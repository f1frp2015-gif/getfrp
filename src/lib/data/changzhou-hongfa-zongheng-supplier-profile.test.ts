import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_ID,
  CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_PROFILE,
  CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_SLUG,
} from "./changzhou-hongfa-zongheng-supplier-profile";

test("publishes one deduplicated PGTEX supplier identity", () => {
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_ID),
    CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_SLUG),
    CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("宏发纵横") ||
        identity.includes("pgtex") ||
        identity.includes("hongfa zongheng")
      );
    }).map(({ profile }) => profile.id),
    [CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_ID],
  );
});

test("uses the official website, logo and current legal-name form", () => {
  assert.equal(
    CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_PROFILE.name,
    "常州市宏发纵横新材料科技有限公司",
  );
  assert.equal(
    CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_PROFILE.website,
    "https://www.pgtex.cn/",
  );
  assert.equal(
    CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_PROFILE.logo,
    "/supplier-assets/changzhou-hongfa-zongheng-logo.png",
  );
  assert.match(
    CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_PROFILE.descriptionEn ?? "",
    /deduplicates those historical names/i,
  );
  assert.deepEqual(
    CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_PROFILE.standardsSupported,
    ["ISO 9001", "ISO 14001", "ISO 45001"],
  );
});
