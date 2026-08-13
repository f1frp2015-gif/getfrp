import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHENGWU_HERUN_SUPPLIER_ID,
  CHENGWU_HERUN_SUPPLIER_PROFILE,
  CHENGWU_HERUN_SUPPLIER_SLUG,
} from "./chengwu-herun-supplier-profile";

test("publishes one deduplicated mainland-China Herun supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHENGWU_HERUN_SUPPLIER_ID),
    CHENGWU_HERUN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHENGWU_HERUN_SUPPLIER_SLUG),
    CHENGWU_HERUN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHENGWU_HERUN_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("成武和润新材料") ||
        identity.includes("chengwu herun new material") ||
        identity.includes("herun-tech.cn")
      );
    }).map(({ profile }) => profile.id),
    [CHENGWU_HERUN_SUPPLIER_ID],
  );
});

test("uses the active official site while preserving source-quality caveats", () => {
  assert.equal(
    CHENGWU_HERUN_SUPPLIER_PROFILE.website,
    "http://www.herun-tech.cn/",
  );
  assert.equal(
    CHENGWU_HERUN_SUPPLIER_PROFILE.logo,
    "/supplier-assets/chengwu-herun-logo.png",
  );
  assert.equal(CHENGWU_HERUN_SUPPLIER_PROFILE.established, 2021);
  assert.equal(CHENGWU_HERUN_SUPPLIER_PROFILE.province, "山东");
  assert.equal(CHENGWU_HERUN_SUPPLIER_PROFILE.exportReady, true);
  assert.equal(CHENGWU_HERUN_SUPPLIER_PROFILE.contactEmail, null);
  assert.deepEqual(CHENGWU_HERUN_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(CHENGWU_HERUN_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    CHENGWU_HERUN_SUPPLIER_PROFILE.descriptionEn ?? "",
    /booth 8S01 for 2026/i,
  );
  assert.match(
    CHENGWU_HERUN_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /HTTPS has certificate\/handshake failures/i,
  );
  assert.match(
    CHENGWU_HERUN_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /published email is malformed/i,
  );
});

test("keeps Herun in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(CHENGWU_HERUN_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Chengdu Zhengxi Intelligent Equipment Group Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});
