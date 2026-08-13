import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHENGDU_ZHENGXI_SUPPLIER_ID,
  CHENGDU_ZHENGXI_SUPPLIER_PROFILE,
  CHENGDU_ZHENGXI_SUPPLIER_SLUG,
} from "./chengdu-zhengxi-supplier-profile";

test("publishes one deduplicated mainland-China Zhengxi supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHENGDU_ZHENGXI_SUPPLIER_ID),
    CHENGDU_ZHENGXI_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHENGDU_ZHENGXI_SUPPLIER_SLUG),
    CHENGDU_ZHENGXI_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHENGDU_ZHENGXI_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("成都正西智能装备") ||
        identity.includes("chengdu zhengxi intelligent equipment") ||
        identity.includes("zhengxi.com")
      );
    }).map(({ profile }) => profile.id),
    [CHENGDU_ZHENGXI_SUPPLIER_ID],
  );
});

test("uses current official evidence without overstating credentials", () => {
  assert.equal(
    CHENGDU_ZHENGXI_SUPPLIER_PROFILE.website,
    "https://www.zhengxi.com/",
  );
  assert.equal(
    CHENGDU_ZHENGXI_SUPPLIER_PROFILE.logo,
    "/supplier-assets/chengdu-zhengxi-logo.png",
  );
  assert.equal(CHENGDU_ZHENGXI_SUPPLIER_PROFILE.established, 2009);
  assert.equal(CHENGDU_ZHENGXI_SUPPLIER_PROFILE.province, "四川");
  assert.equal(CHENGDU_ZHENGXI_SUPPLIER_PROFILE.exportReady, true);
  assert.deepEqual(CHENGDU_ZHENGXI_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(CHENGDU_ZHENGXI_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    CHENGDU_ZHENGXI_SUPPLIER_PROFILE.descriptionEn ?? "",
    /booth 8N08 for 2026/i,
  );
  assert.match(
    CHENGDU_ZHENGXI_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /not a substitute for a model-specific technical agreement/i,
  );
  assert.match(
    CHENGDU_ZHENGXI_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /none is recorded as verified here/i,
  );
});

test("keeps Zhengxi in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(CHENGDU_ZHENGXI_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(names[index - 1], "Chengdu Yulong Chemical Co., Ltd.");
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});
