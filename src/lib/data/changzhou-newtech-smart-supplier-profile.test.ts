import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHANGZHOU_NEWTECH_SMART_SUPPLIER_ID,
  CHANGZHOU_NEWTECH_SMART_SUPPLIER_PROFILE,
  CHANGZHOU_NEWTECH_SMART_SUPPLIER_SLUG,
} from "./changzhou-newtech-smart-supplier-profile";
import { NEWTECH_GROUP_SUPPLIER_ID } from "./newtech-group-supplier-profile";

test("publishes one mainland-China Newtech Smart legal entity", () => {
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_NEWTECH_SMART_SUPPLIER_ID),
    CHANGZHOU_NEWTECH_SMART_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_NEWTECH_SMART_SUPPLIER_SLUG),
    CHANGZHOU_NEWTECH_SMART_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHANGZHOU_NEWTECH_SMART_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) =>
      `${profile.name} ${profile.nameEn ?? ""}`
        .toLowerCase()
        .includes("newtech smart industry"),
    ).map(({ profile }) => profile.id),
    [CHANGZHOU_NEWTECH_SMART_SUPPLIER_ID],
  );
});

test("keeps Newtech Smart distinct from its parent group profile", () => {
  assert.notEqual(
    CHANGZHOU_NEWTECH_SMART_SUPPLIER_ID,
    NEWTECH_GROUP_SUPPLIER_ID,
  );
  assert.equal(CHANGZHOU_NEWTECH_SMART_SUPPLIER_PROFILE.category, "equipment");
  assert.equal(
    CHANGZHOU_NEWTECH_SMART_SUPPLIER_PROFILE.logo,
    "/supplier-assets/newtech-group-logo-light.png",
  );
  assert.equal(CHANGZHOU_NEWTECH_SMART_SUPPLIER_PROFILE.established, 2013);
  assert.deepEqual(
    CHANGZHOU_NEWTECH_SMART_SUPPLIER_PROFILE.standardsSupported,
    [],
  );
  assert.match(
    CHANGZHOU_NEWTECH_SMART_SUPPLIER_PROFILE.descriptionEn ?? "",
    /separately publishes a materials-led profile for Newtech Group/i,
  );
  assert.match(
    CHANGZHOU_NEWTECH_SMART_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /which legal entity bears quotation, contract, invoice, payment, export and warranty obligations/i,
  );
});
