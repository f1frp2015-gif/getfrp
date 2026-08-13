import assert from "node:assert/strict";
import { test } from "node:test";
import {
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  SHANGHAI_MOYAN_SUPPLIER_PROFILE,
  SHANGHAI_MOYAN_SUPPLIER_SLUG,
} from "./shanghai-moyan-supplier-profile";
import { buildSupplierSeoBrief } from "./supplier-seo-briefs";

test("publishes Shanghai Moyan as a curated composite-equipment supplier", () => {
  const profile = getCuratedSupplierProfile(SHANGHAI_MOYAN_SUPPLIER_SLUG);

  assert.equal(profile, SHANGHAI_MOYAN_SUPPLIER_PROFILE);
  assert.ok(getCuratedSupplierSlugs().includes(SHANGHAI_MOYAN_SUPPLIER_SLUG));
  assert.equal(profile?.locationEn, "Shanghai, China");
  assert.equal(profile?.category, "equipment");
  assert.equal(profile?.logo, "/supplier-assets/shanghai-moyan-logo.png");
  assert.match(profile?.descriptionEn ?? "", /established in 2013/i);
  assert.match(
    profile?.productsServicesSummaryEn ?? "",
    /20–220 drops per minute/i,
  );
  assert.equal(profile?.website, "https://www.shmyjd.net/");
});

test("builds a Moyan glass-fiber-equipment SEO brief", () => {
  const brief = buildSupplierSeoBrief(SHANGHAI_MOYAN_SUPPLIER_PROFILE);

  assert.match(brief.pageTitle, /Shanghai Moyan Instrument/i);
  assert.match(brief.pageTitle, /fiber winding coating systems/i);
  assert.ok(brief.pageTitle.length <= 100);
  assert.ok(brief.metaDescription.length <= 161);
});
