import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_ID,
  CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE,
  CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_SLUG,
} from "./changzhou-tiansheng-composite-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes Changzhou Tiansheng Composite as a curated core supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_ID),
    CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_SLUG),
    CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE,
  );
  assert.ok(
    getCuratedSupplierSlugs().includes(
      CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_SLUG,
    ),
  );
  assert.equal(
    CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE.category,
    "manufacturer",
  );
  assert.equal(
    CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE.logo,
    "/supplier-assets/changzhou-tiansheng-logo.png",
  );
  assert.equal(
    CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE.website,
    "http://www.tschina.com/articleinfo/42",
  );
  assert.equal(
    CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE.established,
    null,
  );
  assert.match(
    CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE.descriptionEn ?? "",
    /parent-operated website, not a separate subsidiary domain/i,
  );
  assert.match(
    CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /apparent unit issue/i,
  );
});

test("deduplicates Tiansheng by exact entity and keeps Changzhou suppliers ordered", () => {
  const normalizedWebsite =
    CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE.website?.replace(/\/$/, "");
  const matchingProfiles = CURATED_SUPPLIER_PROFILES.filter(({ profile }) =>
    profile.name === CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE.name ||
    profile.nameEn === CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE.nameEn ||
    profile.website?.replace(/\/$/, "") === normalizedWebsite,
  );
  const orderedNames = CURATED_SUPPLIER_PROFILES.map(
    ({ profile }) => profile.nameEn,
  );
  const tianshengIndex = orderedNames.indexOf(
    CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE.nameEn,
  );

  assert.deepEqual(
    matchingProfiles.map(({ profile }) => profile.id),
    [CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_ID],
  );
  assert.equal(
    orderedNames[tianshengIndex - 1],
    "Changzhou Tianma Group Co., Ltd.",
  );
  assert.equal(
    orderedNames[tianshengIndex + 1],
    "Changzhou Tongchuang Composite Materials Co., Ltd.",
  );
});
