import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_ID,
  CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE,
  CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_SLUG,
} from "./chenhechen-intelligent-equipment-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";

test("publishes the exact mainland-China Chenhechen legal entity", () => {
  assert.equal(
    getCuratedSupplierProfile(CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_ID),
    CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_SLUG),
    CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE,
  );
  assert.ok(
    getCuratedSupplierSlugs().includes(
      CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_SLUG,
    ),
  );
  assert.equal(
    CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE.category,
    "equipment",
  );
  assert.equal(
    CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE.established,
    2021,
  );
  assert.equal(
    CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE.logo,
    "/supplier-assets/chenhechen-chencan-logo.png",
  );
  assert.deepEqual(
    CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE.certifications,
    [],
  );
  assert.deepEqual(
    CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE.standardsSupported,
    [],
  );
  assert.match(
    CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE.descriptionEn ?? "",
    /brand lineage/i,
  );
  assert.match(
    CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE.productsServicesSummaryEn ??
      "",
    /responsible legal entity/i,
  );
});

test("deduplicates Chenhechen and keeps curated suppliers ordered", () => {
  const officialDomain = new URL(
    CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE.website ?? "",
  ).hostname.replace(/^www\./, "");
  const matchingProfiles = CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
    const profileDomain = profile.website
      ? new URL(profile.website).hostname.replace(/^www\./, "")
      : null;

    return (
      profile.name === CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE.name ||
      profile.nameEn ===
        CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE.nameEn ||
      profileDomain === officialDomain
    );
  });
  const orderedNames = CURATED_SUPPLIER_PROFILES.map(
    ({ profile }) => profile.nameEn,
  );
  const chenhechenIndex = orderedNames.indexOf(
    CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE.nameEn,
  );

  assert.deepEqual(
    matchingProfiles.map(({ profile }) => profile.id),
    [CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_ID],
  );
  assert.equal(
    orderedNames[chenhechenIndex - 1],
    "Changzhou Xingao Insulation Materials Co., Ltd.",
  );
  assert.equal(
    orderedNames[chenhechenIndex + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});
