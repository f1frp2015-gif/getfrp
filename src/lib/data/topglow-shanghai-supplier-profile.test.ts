import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  TOPGLOW_SHANGHAI_SUPPLIER_ID,
  TOPGLOW_SHANGHAI_SUPPLIER_PROFILE,
  TOPGLOW_SHANGHAI_SUPPLIER_SLUG,
} from "./topglow-shanghai-supplier-profile";

test("publishes one deduplicated mainland-China Topglow supplier", () => {
  assert.equal(
    getCuratedSupplierProfile(TOPGLOW_SHANGHAI_SUPPLIER_ID),
    TOPGLOW_SHANGHAI_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierProfile(TOPGLOW_SHANGHAI_SUPPLIER_SLUG),
    TOPGLOW_SHANGHAI_SUPPLIER_PROFILE,
  );
  assert.equal(
    getCuratedSupplierSlugs().filter(
      (slug) => slug === TOPGLOW_SHANGHAI_SUPPLIER_SLUG,
    ).length,
    1,
  );
  assert.deepEqual(
    CURATED_SUPPLIER_PROFILES.filter(({ profile }) => {
      const identity = `${profile.name} ${profile.nameEn ?? ""} ${profile.website ?? ""}`.toLowerCase();
      return (
        identity.includes("崇献新材料") ||
        identity.includes("topglow advanced materials") ||
        identity.includes("topglow.cn")
      );
    }).map(({ profile }) => profile.id),
    [TOPGLOW_SHANGHAI_SUPPLIER_ID],
  );
});

test("uses the current official identity, site, contact and local logo", () => {
  assert.equal(TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.province, "上海");
  assert.equal(TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.established, 2017);
  assert.equal(TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.category, "fiber");
  assert.equal(TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.exportReady, true);
  assert.equal(
    TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.website,
    "https://www.topglow.cn/",
  );
  assert.equal(
    TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.logo,
    "/supplier-assets/topglow-shanghai-logo.png",
  );
  assert.equal(
    TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.contactEmail,
    "webmaster@topglow.com",
  );
  assert.deepEqual(TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.certifications, []);
  assert.deepEqual(TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.standardsSupported, []);
  assert.match(
    TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.descriptionEn ?? "",
    /mainland-China materials trading and application-support entity/i,
  );
  assert.match(
    TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.descriptionEn ?? "",
    /1990 date.*business lineage/i,
  );
  assert.match(
    TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /original manufacturer.*production site.*brand and grade/i,
  );
});

test("keeps Topglow in reviewed exhibitor source order", () => {
  const names = CURATED_SUPPLIER_PROFILES.map(({ profile }) => profile.nameEn);
  const index = names.indexOf(TOPGLOW_SHANGHAI_SUPPLIER_PROFILE.nameEn);

  assert.ok(index > 0);
  assert.equal(
    names[index - 1],
    "Chengzi Tainuo (Shandong) New Material Technology Co., Ltd.",
  );
  assert.equal(
    names[index + 1],
    "Shanghai TRONXT New Material Technology Co., Ltd.",
  );
});
