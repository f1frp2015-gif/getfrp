import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  CHENGDU_CHANGYUANSHUN_SUPPLIER_ID,
  CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE,
  CHENGDU_CHANGYUANSHUN_SUPPLIER_SLUG,
} from "./chengdu-changyuanshun-supplier-profile";

test("publishes one deduplicated mainland-China CYS supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(CHENGDU_CHANGYUANSHUN_SUPPLIER_ID),
    CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(CHENGDU_CHANGYUANSHUN_SUPPLIER_SLUG),
    CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === CHENGDU_CHANGYUANSHUN_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""} ${profile.descriptionEn ?? ""}`.toLowerCase();
      return (
        identity.includes("成都长远顺") ||
        identity.includes("chengdu chang yuan shun") ||
        identity.includes("169chem.net") ||
        identity.includes("cyscarbon.com") ||
        identity.includes("gosilicafiber.com")
      );
    }).map(({ profile }) => profile.id),
    [CHENGDU_CHANGYUANSHUN_SUPPLIER_ID],
  );
});

test("records current official sources without overstating credentials", () => {
  assert.equal(
    CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE.website,
    "https://169chem.net/",
  );
  assert.equal(
    CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE.logo,
    "/supplier-assets/chengdu-changyuanshun-logo.png",
  );
  assert.equal(CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE.established, 2002);
  assert.equal(CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE.province, "四川");
  assert.equal(CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE.exportReady, true);
  assert.equal(CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE.scaleTier, null);
  assert.deepEqual(CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(
    CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE.standardsSupported,
    [],
  );
  assert.match(
    CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE.descriptionEn ?? "",
    /booth 7S26/i,
  );
  assert.match(
    CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /inconsistent fiberglass-capacity figures/i,
  );
});

test("keeps the newly reviewed supplier in source-directory order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Chenhechen Intelligent Equipment (Jiangsu) Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shenzhen Hongfu Tongxin Technology Co., Ltd.",
  );
});
