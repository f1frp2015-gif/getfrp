import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CPIC_SUPPLIER_ID,
  CPIC_SUPPLIER_PROFILE,
  CPIC_SUPPLIER_SLUG,
} from "./cpic-supplier-profile";

test("reuses the existing CPIC supplier identity and publishes one curated slug", () => {
  assert.equal(CPIC_SUPPLIER_ID, "sup-cpic");
  assert.equal(
    getCuratedSupplierProfile(CPIC_SUPPLIER_ID),
    CPIC_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CPIC_SUPPLIER_SLUG),
    CPIC_SUPPLIER_PROFILE,
  );
  assert.equal(
    CURATED_SUPPLIER_PROFILES.filter(
      ({ profile }) => profile.id === CPIC_SUPPLIER_ID,
    ).length,
    1,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CPIC_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const names = `${profile.name} ${profile.nameEn ?? ""}`.toLowerCase();
      return (
        names.includes("重庆国际复合材料") ||
        names.includes("chongqing polycomp international") ||
        profile.website?.includes("cpicfiber.com")
      );
    }).map(({ profile }) => profile.id),
    [CPIC_SUPPLIER_ID],
  );
});

test("uses CPIC's official website and locally stored official logo", () => {
  assert.equal(CPIC_SUPPLIER_PROFILE.website, "https://www.cpicfiber.com/");
  assert.equal(CPIC_SUPPLIER_PROFILE.logo, "/supplier-assets/cpic-logo.png");
  assert.match(CPIC_SUPPLIER_PROFILE.descriptionEn ?? "", /established in 1991/i);
  assert.ok(CPIC_SUPPLIER_PROFILE.profilePublished);
});
