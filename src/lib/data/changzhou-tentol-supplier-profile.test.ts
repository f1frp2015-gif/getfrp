import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_TENTOL_SUPPLIER_ID,
  CHANGZHOU_TENTOL_SUPPLIER_PROFILE,
  CHANGZHOU_TENTOL_SUPPLIER_SLUG,
} from "./changzhou-tentol-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Tentol as a curated equipment supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_TENTOL_SUPPLIER_ID),
    CHANGZHOU_TENTOL_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_TENTOL_SUPPLIER_SLUG),
    CHANGZHOU_TENTOL_SUPPLIER_PROFILE,
  );
  assert.ok(
    getCuratedSupplierSlugs().includes(CHANGZHOU_TENTOL_SUPPLIER_SLUG),
  );
  assert.equal(CHANGZHOU_TENTOL_SUPPLIER_PROFILE.category, "equipment");
  assert.equal(
    CHANGZHOU_TENTOL_SUPPLIER_PROFILE.logo,
    "/supplier-assets/changzhou-tentol-logo.png",
  );
  assert.equal(
    CHANGZHOU_TENTOL_SUPPLIER_PROFILE.website,
    "http://www.cztengtuo.com/",
  );
  assert.deepEqual(CHANGZHOU_TENTOL_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(CHANGZHOU_TENTOL_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    CHANGZHOU_TENTOL_SUPPLIER_PROFILE.descriptionEn ?? "",
    /HTTPS endpoint presents an invalid certificate/i,
  );
  assert.match(
    CHANGZHOU_TENTOL_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /selection cues rather than acceptance guarantees/i,
  );
});

test("deduplicates Tentol and keeps Changzhou suppliers alphabetically ordered", () => {
  const officialDomain = new URL(
    CHANGZHOU_TENTOL_SUPPLIER_PROFILE.website ?? "",
  ).hostname.replace(/^www\./, "");
  const matchingProfiles = CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
    const profileDomain = profile.website
      ? new URL(profile.website).hostname.replace(/^www\./, "")
      : null;

    return (
      profile.name === CHANGZHOU_TENTOL_SUPPLIER_PROFILE.name ||
      profile.nameEn === CHANGZHOU_TENTOL_SUPPLIER_PROFILE.nameEn ||
      profileDomain === officialDomain
    );
  });
  const orderedNames = CURATED_SUPPLIER_PROFILES.map(
    ({ profile }) => profile.nameEn,
  );
  const tentolIndex = orderedNames.indexOf(
    CHANGZHOU_TENTOL_SUPPLIER_PROFILE.nameEn,
  );

  assert.deepEqual(
    matchingProfiles.map(({ profile }) => profile.id),
    [CHANGZHOU_TENTOL_SUPPLIER_ID],
  );
  assert.equal(orderedNames[tentolIndex - 1], "Changzhou Sinajet Science and Technology Co., Ltd.");
  assert.equal(orderedNames[tentolIndex + 1], "Changzhou Utek Composite Co., Ltd.");
});
