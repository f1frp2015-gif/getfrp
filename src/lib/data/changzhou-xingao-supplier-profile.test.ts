import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_XINGAO_SUPPLIER_ID,
  CHANGZHOU_XINGAO_SUPPLIER_PROFILE,
  CHANGZHOU_XINGAO_SUPPLIER_SLUG,
} from "./changzhou-xingao-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Xingao as a curated fiberglass supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_XINGAO_SUPPLIER_ID),
    CHANGZHOU_XINGAO_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_XINGAO_SUPPLIER_SLUG),
    CHANGZHOU_XINGAO_SUPPLIER_PROFILE,
  );
  assert.ok(
    getCuratedSupplierSlugs().includes(CHANGZHOU_XINGAO_SUPPLIER_SLUG),
  );
  assert.equal(CHANGZHOU_XINGAO_SUPPLIER_PROFILE.category, "fiber");
  assert.equal(
    CHANGZHOU_XINGAO_SUPPLIER_PROFILE.logo,
    "/supplier-assets/changzhou-xingao-logo.png",
  );
  assert.equal(
    CHANGZHOU_XINGAO_SUPPLIER_PROFILE.website,
    "https://www.czxingao.com/",
  );
  assert.deepEqual(CHANGZHOU_XINGAO_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(CHANGZHOU_XINGAO_SUPPLIER_PROFILE.standardsSupported, []);
  assert.equal(CHANGZHOU_XINGAO_SUPPLIER_PROFILE.scaleTier, null);
  assert.match(
    CHANGZHOU_XINGAO_SUPPLIER_PROFILE.descriptionEn ?? "",
    /inconsistent plant-area, equipment-count and daily-output figures/i,
  );
  assert.match(
    CHANGZHOU_XINGAO_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /should not rely on a style number alone/i,
  );
});

test("does not duplicate Xingao by legal name or official website domain", () => {
  const officialDomain = new URL(
    CHANGZHOU_XINGAO_SUPPLIER_PROFILE.website ?? "",
  ).hostname.replace(/^www\./, "");
  const matchingProfiles = CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
    const profileDomain = profile.website
      ? new URL(profile.website).hostname.replace(/^www\./, "")
      : null;

    return (
      profile.name === CHANGZHOU_XINGAO_SUPPLIER_PROFILE.name ||
      profile.nameEn === CHANGZHOU_XINGAO_SUPPLIER_PROFILE.nameEn ||
      profileDomain === officialDomain
    );
  });

  assert.deepEqual(
    matchingProfiles.map(({ profile }) => profile.id),
    [CHANGZHOU_XINGAO_SUPPLIER_ID],
  );
});
