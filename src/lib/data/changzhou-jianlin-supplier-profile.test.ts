import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHANGZHOU_JIANLIN_SUPPLIER_ID,
  CHANGZHOU_JIANLIN_SUPPLIER_PROFILE,
  CHANGZHOU_JIANLIN_SUPPLIER_SLUG,
} from "./changzhou-jianlin-supplier-profile";

test("publishes one deduplicated Changzhou Jianlin supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_JIANLIN_SUPPLIER_ID),
    CHANGZHOU_JIANLIN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_JIANLIN_SUPPLIER_SLUG),
    CHANGZHOU_JIANLIN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHANGZHOU_JIANLIN_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("建林玻纤") ||
        identity.includes("jianlin glass fiber") ||
        identity.includes("czjianlin.com")
      );
    }).map(({ profile }) => profile.id),
    [CHANGZHOU_JIANLIN_SUPPLIER_ID],
  );
});

test("records the official HTTP website and time-bounded ISO evidence", () => {
  assert.equal(
    CHANGZHOU_JIANLIN_SUPPLIER_PROFILE.website,
    "http://www.czjianlin.com/",
  );
  assert.equal(
    CHANGZHOU_JIANLIN_SUPPLIER_PROFILE.logo,
    "/supplier-assets/changzhou-jianlin-logo.png",
  );
  assert.equal(CHANGZHOU_JIANLIN_SUPPLIER_PROFILE.established, 2014);
  assert.equal(CHANGZHOU_JIANLIN_SUPPLIER_PROFILE.exportReady, false);
  assert.deepEqual(
    CHANGZHOU_JIANLIN_SUPPLIER_PROFILE.standardsSupported,
    [],
  );
  assert.match(
    CHANGZHOU_JIANLIN_SUPPLIER_PROFILE.certificationsEn?.[0] ?? "",
    /dates had passed/i,
  );
  assert.match(
    CHANGZHOU_JIANLIN_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /HTTPS certificate has a domain-name mismatch/i,
  );
});
