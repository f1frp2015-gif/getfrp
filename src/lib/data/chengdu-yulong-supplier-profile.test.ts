import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHENGDU_YULONG_SUPPLIER_ID,
  CHENGDU_YULONG_SUPPLIER_PROFILE,
  CHENGDU_YULONG_SUPPLIER_SLUG,
} from "./chengdu-yulong-supplier-profile";

test("publishes one deduplicated mainland-China Yulong supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHENGDU_YULONG_SUPPLIER_ID),
    CHENGDU_YULONG_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHENGDU_YULONG_SUPPLIER_SLUG),
    CHENGDU_YULONG_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHENGDU_YULONG_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("成都玉龙化工") ||
        identity.includes("chengdu yulong chemical") ||
        identity.includes("cdylhg.com")
      );
    }).map(({ profile }) => profile.id),
    [CHENGDU_YULONG_SUPPLIER_ID],
  );
});

test("uses current official sources without overstating certifications", () => {
  assert.equal(
    CHENGDU_YULONG_SUPPLIER_PROFILE.website,
    "https://www.cdylhg.com/",
  );
  assert.equal(
    CHENGDU_YULONG_SUPPLIER_PROFILE.logo,
    "/supplier-assets/chengdu-yulong-logo.png",
  );
  assert.equal(CHENGDU_YULONG_SUPPLIER_PROFILE.established, 1958);
  assert.equal(CHENGDU_YULONG_SUPPLIER_PROFILE.province, "四川");
  assert.equal(CHENGDU_YULONG_SUPPLIER_PROFILE.scaleTier, null);
  assert.equal(CHENGDU_YULONG_SUPPLIER_PROFILE.exportReady, true);
  assert.deepEqual(CHENGDU_YULONG_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(CHENGDU_YULONG_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    CHENGDU_YULONG_SUPPLIER_PROFILE.descriptionEn ?? "",
    /neither a product category nor booth number/i,
  );
  assert.match(
    CHENGDU_YULONG_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /not a current product certificate/i,
  );
  assert.match(
    CHENGDU_YULONG_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /controlled company Chengdu Longcheng Advanced Materials/i,
  );
});

test("keeps Yulong in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(CHENGDU_YULONG_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Chengdu Lu Chen New Materials Technology Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});
