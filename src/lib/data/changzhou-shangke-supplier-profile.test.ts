import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHANGZHOU_SHANGKE_SUPPLIER_ID,
  CHANGZHOU_SHANGKE_SUPPLIER_PROFILE,
  CHANGZHOU_SHANGKE_SUPPLIER_SLUG,
} from "./changzhou-shangke-supplier-profile";

test("publishes one deduplicated mainland-China Sunchem supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_SHANGKE_SUPPLIER_ID),
    CHANGZHOU_SHANGKE_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_SHANGKE_SUPPLIER_SLUG),
    CHANGZHOU_SHANGKE_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHANGZHOU_SHANGKE_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("尚科新材料") ||
        identity.includes("sunchem new material") ||
        identity.includes("sunchempi.com")
      );
    }).map(({ profile }) => profile.id),
    [CHANGZHOU_SHANGKE_SUPPLIER_ID],
  );
});

test("records official Sunchem sourcing evidence conservatively", () => {
  assert.equal(
    CHANGZHOU_SHANGKE_SUPPLIER_PROFILE.website,
    "http://www.sunchempi.com/",
  );
  assert.equal(
    CHANGZHOU_SHANGKE_SUPPLIER_PROFILE.logo,
    "/supplier-assets/changzhou-shangke-logo.png",
  );
  assert.equal(CHANGZHOU_SHANGKE_SUPPLIER_PROFILE.category, "resin");
  assert.equal(CHANGZHOU_SHANGKE_SUPPLIER_PROFILE.established, 2009);
  assert.equal(CHANGZHOU_SHANGKE_SUPPLIER_PROFILE.exportReady, true);
  assert.deepEqual(CHANGZHOU_SHANGKE_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    CHANGZHOU_SHANGKE_SUPPLIER_PROFILE.certificationsEn?.[0] ?? "",
    /does not state certificate numbers/i,
  );
  assert.match(
    CHANGZHOU_SHANGKE_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /must not be extrapolated/i,
  );
  assert.match(
    CHANGZHOU_SHANGKE_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /equipment photographs do not establish accredited laboratory capability/i,
  );
});
