import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_ID,
  CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_PROFILE,
  CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_SLUG,
} from "./changzhou-newtech-aviation-supplier-profile";
import { CHANGZHOU_NEWTECH_SMART_SUPPLIER_ID } from "./changzhou-newtech-smart-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import { NEWTECH_GROUP_SUPPLIER_ID } from "./newtech-group-supplier-profile";

test("publishes Newtech Aviation as one mainland-China legal entity", () => {
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_ID),
    CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_SLUG),
    CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.equal(
    CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_PROFILE.category,
    "manufacturer",
  );
  assert.equal(
    CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_PROFILE.logo,
    "/supplier-assets/newtech-group-logo-light.png",
  );
  assert.equal(CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_PROFILE.established, 2017);
  assert.deepEqual(
    CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_PROFILE.standardsSupported,
    [],
  );
  assert.match(
    CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_PROFILE.productsServicesSummaryEn ??
      "",
    /Newtech Aviation, Newtech Smart or another group legal entity bears quotation, contract, design-IP, export, invoice, payment and warranty responsibility/i,
  );
});

test("keeps Newtech Aviation distinct from Newtech Group and Newtech Smart", () => {
  assert.notEqual(
    CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_ID,
    NEWTECH_GROUP_SUPPLIER_ID,
  );
  assert.notEqual(
    CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_ID,
    CHANGZHOU_NEWTECH_SMART_SUPPLIER_ID,
  );

  const matchingProfiles = CURATED_SUPPLIER_PROFILES.filter(
    ({ profile }) =>
      profile.name === CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_PROFILE.name ||
      profile.nameEn === CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_PROFILE.nameEn ||
      profile.website === CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_PROFILE.website,
  );
  const orderedIds = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.id);
  const aviationIndex = orderedIds.indexOf(
    CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_ID,
  );

  assert.deepEqual(
    matchingProfiles.map(({ profile }) => profile.id),
    [CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_ID],
  );
  assert.equal(
    orderedIds[aviationIndex - 1],
    "sup-changzhou-keren-machinery",
  );
  assert.equal(
    orderedIds[aviationIndex + 1],
    CHANGZHOU_NEWTECH_SMART_SUPPLIER_ID,
  );
});
