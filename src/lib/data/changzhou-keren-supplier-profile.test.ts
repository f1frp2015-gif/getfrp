import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHANGZHOU_KEREN_SUPPLIER_ID,
  CHANGZHOU_KEREN_SUPPLIER_PROFILE,
  CHANGZHOU_KEREN_SUPPLIER_SLUG,
} from "./changzhou-keren-supplier-profile";

test("publishes one deduplicated mainland-China Keren supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_KEREN_SUPPLIER_ID),
    CHANGZHOU_KEREN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_KEREN_SUPPLIER_SLUG),
    CHANGZHOU_KEREN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHANGZHOU_KEREN_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("科仁机械") ||
        identity.includes("keren machine") ||
        identity.includes("keren machinery") ||
        identity.includes("kerenjixie.com")
      );
    }).map(({ profile }) => profile.id),
    [CHANGZHOU_KEREN_SUPPLIER_ID],
  );
});

test("records official winding-machine sourcing evidence without overstating certification", () => {
  assert.equal(
    CHANGZHOU_KEREN_SUPPLIER_PROFILE.website,
    "https://www.kerenjixie.com/",
  );
  assert.equal(
    CHANGZHOU_KEREN_SUPPLIER_PROFILE.logo,
    "/supplier-assets/changzhou-keren-logo.png",
  );
  assert.equal(CHANGZHOU_KEREN_SUPPLIER_PROFILE.category, "equipment");
  assert.equal(CHANGZHOU_KEREN_SUPPLIER_PROFILE.established, 2008);
  assert.equal(CHANGZHOU_KEREN_SUPPLIER_PROFILE.exportReady, true);
  assert.deepEqual(
    CHANGZHOU_KEREN_SUPPLIER_PROFILE.standardsSupported,
    [],
  );
  assert.match(
    CHANGZHOU_KEREN_SUPPLIER_PROFILE.certificationsEn?.[0] ?? "",
    /not treated here as verified current certification/i,
  );
  assert.match(
    CHANGZHOU_KEREN_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /trial the actual fiber/i,
  );
  assert.match(
    CHANGZHOU_KEREN_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /actual manufacturing, invoicing and dispatch addresses/i,
  );
});
