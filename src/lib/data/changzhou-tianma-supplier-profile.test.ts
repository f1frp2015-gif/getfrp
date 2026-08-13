import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_TIANMA_SUPPLIER_ID,
  CHANGZHOU_TIANMA_SUPPLIER_PROFILE,
  CHANGZHOU_TIANMA_SUPPLIER_SLUG,
} from "./changzhou-tianma-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Tianma as a curated materials supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_TIANMA_SUPPLIER_ID),
    CHANGZHOU_TIANMA_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_TIANMA_SUPPLIER_SLUG),
    CHANGZHOU_TIANMA_SUPPLIER_PROFILE,
  );
  assert.ok(
    getCuratedSupplierSlugs().includes(CHANGZHOU_TIANMA_SUPPLIER_SLUG),
  );
  assert.equal(CHANGZHOU_TIANMA_SUPPLIER_PROFILE.category, "fiber");
  assert.equal(
    CHANGZHOU_TIANMA_SUPPLIER_PROFILE.logo,
    "/supplier-assets/changzhou-tianma-logo.png",
  );
  assert.equal(
    CHANGZHOU_TIANMA_SUPPLIER_PROFILE.website,
    "https://www.tm253.com/",
  );
  assert.deepEqual(CHANGZHOU_TIANMA_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(CHANGZHOU_TIANMA_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    CHANGZHOU_TIANMA_SUPPLIER_PROFILE.descriptionEn ?? "",
    /organizational lineage, not the current legal entity's registration date/i,
  );
  assert.match(
    CHANGZHOU_TIANMA_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /should not be summed/i,
  );
});

test("deduplicates Tianma and keeps Changzhou suppliers alphabetically ordered", () => {
  const officialDomain = new URL(
    CHANGZHOU_TIANMA_SUPPLIER_PROFILE.website ?? "",
  ).hostname.replace(/^www\./, "");
  const matchingProfiles = CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
    const profileDomain = profile.website
      ? new URL(profile.website).hostname.replace(/^www\./, "")
      : null;

    return (
      profile.name === CHANGZHOU_TIANMA_SUPPLIER_PROFILE.name ||
      profile.nameEn === CHANGZHOU_TIANMA_SUPPLIER_PROFILE.nameEn ||
      profileDomain === officialDomain
    );
  });
  const orderedNames = CURATED_SUPPLIER_PROFILES.map(
    ({ profile }) => profile.nameEn,
  );
  const tianmaIndex = orderedNames.indexOf(
    CHANGZHOU_TIANMA_SUPPLIER_PROFILE.nameEn,
  );

  assert.deepEqual(
    matchingProfiles.map(({ profile }) => profile.id),
    [CHANGZHOU_TIANMA_SUPPLIER_ID],
  );
  assert.equal(
    orderedNames[tianmaIndex - 1],
    "Changzhou Tentol Machinery Equipment Co., Ltd.",
  );
  assert.equal(
    orderedNames[tianmaIndex + 1],
    "Changzhou Utek Composite Co., Ltd.",
  );
});
