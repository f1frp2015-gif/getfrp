import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHANGZHOU_RONGYU_ROLLER_SUPPLIER_ID,
  CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE,
  CHANGZHOU_RONGYU_ROLLER_SUPPLIER_SLUG,
} from "./changzhou-rongyu-roller-supplier-profile";

test("publishes one deduplicated mainland-China Rongyu Roller supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_RONGYU_ROLLER_SUPPLIER_ID),
    CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_RONGYU_ROLLER_SUPPLIER_SLUG),
    CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHANGZHOU_RONGYU_ROLLER_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("荣誉制辊") ||
        identity.includes("rongyu roller") ||
        identity.includes("rongyu rool") ||
        identity.includes("cz-ryzg.com")
      );
    }).map(({ profile }) => profile.id),
    [CHANGZHOU_RONGYU_ROLLER_SUPPLIER_ID],
  );
});

test("records official roll-manufacturing sourcing evidence conservatively", () => {
  assert.equal(
    CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE.website,
    "http://www.cz-ryzg.com/",
  );
  assert.equal(
    CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE.logo,
    "/supplier-assets/changzhou-rongyu-roller-logo.png",
  );
  assert.equal(CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE.category, "equipment");
  assert.equal(CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE.established, 1990);
  assert.equal(CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE.exportReady, false);
  assert.deepEqual(
    CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE.standardsSupported,
    [],
  );
  assert.match(
    CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE.certificationsEn?.[0] ?? "",
    /not treated as verified certification/i,
  );
  assert.match(
    CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /carbon-fiber and sensitive-web applications/i,
  );
  assert.match(
    CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /manufacturing, invoicing and dispatch locations/i,
  );
});
