import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { test } from "node:test";
import {
  NABALTEC_SHANGHAI_SUPPLIER_ID,
  NABALTEC_SHANGHAI_SUPPLIER_PROFILE,
  NABALTEC_SHANGHAI_SUPPLIER_SLUG,
} from "./nabaltec-shanghai-supplier-profile";
import {
  NABERTHERM_SHANGHAI_SUPPLIER_ID,
  NABERTHERM_SHANGHAI_SUPPLIER_PROFILE,
  NABERTHERM_SHANGHAI_SUPPLIER_SLUG,
} from "./nabertherm-shanghai-supplier-profile";
import {
  NANTONG_FUYUAN_SUPPLIER_ID,
  NANTONG_FUYUAN_SUPPLIER_PROFILE,
  NANTONG_FUYUAN_SUPPLIER_SLUG,
} from "./nantong-fuyuan-supplier-profile";
import {
  NANTONG_JIUSHENG_SUPPLIER_ID,
  NANTONG_JIUSHENG_SUPPLIER_PROFILE,
  NANTONG_JIUSHENG_SUPPLIER_SLUG,
} from "./nantong-jiusheng-supplier-profile";
import {
  NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_ID,
  NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_PROFILE,
  NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_SLUG,
} from "./nanya-electronic-kunshan-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import { getSupplierSearchKeywords } from "./supplier-search-keywords";
import { buildSupplierSeoBrief } from "./supplier-seo-briefs";
import { isSupplierProfileIndexable } from "../supplier-indexability";

const batch = [
  { profile: NABALTEC_SHANGHAI_SUPPLIER_PROFILE, id: NABALTEC_SHANGHAI_SUPPLIER_ID, slug: NABALTEC_SHANGHAI_SUPPLIER_SLUG, identity: /耐铝（上海）贸易|nabaltec \(shanghai\) trading|nabaltec\.de/i },
  { profile: NABERTHERM_SHANGHAI_SUPPLIER_PROFILE, id: NABERTHERM_SHANGHAI_SUPPLIER_ID, slug: NABERTHERM_SHANGHAI_SUPPLIER_SLUG, identity: /纳博热（上海）工业炉|nabertherm ltd\. \(shanghai\)|nabertherm\.com/i },
  { profile: NANTONG_FUYUAN_SUPPLIER_PROFILE, id: NANTONG_FUYUAN_SUPPLIER_ID, slug: NANTONG_FUYUAN_SUPPLIER_SLUG, identity: /南通复源新材料|nantong fuyuan carbon fiber recycling|rcffy\.com/i },
  { profile: NANTONG_JIUSHENG_SUPPLIER_PROFILE, id: NANTONG_JIUSHENG_SUPPLIER_ID, slug: NANTONG_JIUSHENG_SUPPLIER_SLUG, identity: /南通久盛新材料|nantong jiusheng new materials|powergrate\.com/i },
  { profile: NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_PROFILE, id: NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_ID, slug: NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_SLUG, identity: /南亚电子材料（昆山）|nan ya electronic materials \(kunshan\)|nypc\.com\.cn/i },
] as const;

function phrases(profile: (typeof batch)[number]["profile"]): string[] {
  return getSupplierSearchKeywords(profile).map(({ phrase }) => phrase);
}

test("publishes exactly five deduplicated profiles in the fourteenth CCE batch", () => {
  assert.equal(batch.length, 5);
  assert.equal(CURATED_SUPPLIER_PROFILES.length, 168);
  for (const { profile, id, slug, identity } of batch) {
    assert.equal(getCuratedSupplierProfile(id), profile);
    assert.equal(getCuratedSupplierProfile(slug), profile);
    assert.equal(getCuratedSupplierSlugs().filter((candidate) => candidate === slug).length, 1);
    assert.deepEqual(
      CURATED_SUPPLIER_PROFILES.filter(({ profile: candidate }) =>
        identity.test(`${candidate.name} ${candidate.nameEn ?? ""} ${candidate.website ?? ""}`),
      ).map(({ profile: candidate }) => candidate.id),
      [id],
    );
  }
});

test("keeps batch fourteen unclaimed, source-backed, logo-complete and indexable", () => {
  for (const { profile } of batch) {
    assert.equal(profile.profilePublished, true);
    assert.equal(profile.verified, false);
    assert.equal(profile.enterpriseId, null);
    assert.match(profile.website ?? "", /^https:\/\//);
    assert.ok((profile.productsEn?.length ?? 0) >= 8);
    assert.ok((profile.processListEn?.length ?? 0) >= 8);
    assert.ok((profile.descriptionEn?.length ?? 0) >= 500);
    assert.ok((profile.productsServicesSummaryEn?.length ?? 0) >= 1_000);
    assert.ok(profile.ecatalogs?.some(({ url }) => url.includes("chinacompositesexpo.com")));
    assert.ok(profile.logo?.startsWith("/supplier-assets/"));
    assert.equal(existsSync(`public${profile.logo}`), true);
    assert.ok(statSync(`public${profile.logo}`).size > 1_500);
    assert.equal(isSupplierProfileIndexable(profile), true);
    assert.deepEqual(profile.certifications, []);
    assert.deepEqual(profile.certificationsEn, []);
    assert.deepEqual(profile.standardsSupported, []);
  }
});

test("preserves trading, equipment, application and legal-entity boundaries", () => {
  assert.match(NABALTEC_SHANGHAI_SUPPLIER_PROFILE.descriptionEn ?? "", /Shanghai trading company[\s\S]*does not mean that the Shanghai company manufactures/i);
  assert.match(NABERTHERM_SHANGHAI_SUPPLIER_PROFILE.descriptionEn ?? "", /equipment profile[\s\S]*not evidence[\s\S]*composite-curing autoclaves/i);
  assert.doesNotMatch((NABERTHERM_SHANGHAI_SUPPLIER_PROFILE.productsEn ?? []).join(" "), /autoclave/i);
  assert.match(NANTONG_FUYUAN_SUPPLIER_PROFILE.descriptionEn ?? "", /Application examples[\s\S]*not evidence that FUY manufactures every downstream finished product/i);
  assert.match(NANTONG_JIUSHENG_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "", /historical standard edition or marketing statement is not a current certificate/i);
  assert.match(NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_PROFILE.descriptionEn ?? "", /Bisheng Fiberglass \(Kunshan\)[\s\S]*another legal entity/i);
});

test("assigns only offer-backed measured-demand phrases to batch fourteen", () => {
  assert.deepEqual(phrases(NABALTEC_SHANGHAI_SUPPLIER_PROFILE), []);
  assert.deepEqual(phrases(NABERTHERM_SHANGHAI_SUPPLIER_PROFILE), []);

  const fuyuan = phrases(NANTONG_FUYUAN_SUPPLIER_PROFILE);
  assert.ok(fuyuan.includes("carbon fiber products"));
  assert.ok(fuyuan.includes("chopped carbon fiber"));
  assert.doesNotMatch(fuyuan.join(" "), /fishing rod|carbon fiber fabric|carbon fiber plate/i);

  const jiusheng = phrases(NANTONG_JIUSHENG_SUPPLIER_PROFILE);
  for (const expected of ["fiberglass grating", "FRP grating", "pultruded", "pultruded fiberglass", "fiberglass pultruded grating", "FRP grating panels", "molded FRP grating"]) {
    assert.ok(jiusheng.includes(expected), `missing Jiusheng phrase: ${expected}`);
  }

  assert.deepEqual(phrases(NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_PROFILE), ["fiberglass cloth"]);
});

test("builds offer-specific SEO titles for batch fourteen", () => {
  assert.match(buildSupplierSeoBrief(NABALTEC_SHANGHAI_SUPPLIER_PROFILE).pageTitle, /APYRAL ground aluminum-hydroxide/i);
  assert.match(buildSupplierSeoBrief(NABERTHERM_SHANGHAI_SUPPLIER_PROFILE).pageTitle, /Air-circulation furnaces/i);
  assert.match(buildSupplierSeoBrief(NANTONG_FUYUAN_SUPPLIER_PROFILE).pageTitle, /chopped recycled carbon fiber/i);
  assert.match(buildSupplierSeoBrief(NANTONG_JIUSHENG_SUPPLIER_PROFILE).pageTitle, /FRP Grating/i);
  assert.match(buildSupplierSeoBrief(NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_PROFILE).pageTitle, /7628/i);
});
