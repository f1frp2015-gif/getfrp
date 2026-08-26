import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import {
  LIAONING_MEITUO_SUPPLIER_ID,
  LIAONING_MEITUO_SUPPLIER_PROFILE,
  LIAONING_MEITUO_SUPPLIER_SLUG,
} from "./liaoning-meituo-supplier-profile";
import {
  LIANYUNGANG_WEIDE_SUPPLIER_ID,
  LIANYUNGANG_WEIDE_SUPPLIER_PROFILE,
  LIANYUNGANG_WEIDE_SUPPLIER_SLUG,
} from "./lianyungang-weide-supplier-profile";
import {
  LECTRA_SHANGHAI_SUPPLIER_ID,
  LECTRA_SHANGHAI_SUPPLIER_PROFILE,
  LECTRA_SHANGHAI_SUPPLIER_SLUG,
} from "./lectra-shanghai-supplier-profile";
import {
  NIPPON_PAINT_CHINA_SUPPLIER_ID,
  NIPPON_PAINT_CHINA_SUPPLIER_PROFILE,
  NIPPON_PAINT_CHINA_SUPPLIER_SLUG,
} from "./nippon-paint-china-supplier-profile";
import {
  LIAONING_YUWEI_SUPPLIER_ID,
  LIAONING_YUWEI_SUPPLIER_PROFILE,
  LIAONING_YUWEI_SUPPLIER_SLUG,
} from "./liaoning-yuwei-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import { getSupplierSearchKeywords } from "./supplier-search-keywords";
import { buildSupplierSeoBrief } from "./supplier-seo-briefs";
import { isSupplierProfileIndexable } from "../supplier-indexability";

const batch = [
  { profile: LIAONING_MEITUO_SUPPLIER_PROFILE, id: LIAONING_MEITUO_SUPPLIER_ID, slug: LIAONING_MEITUO_SUPPLIER_SLUG, identity: /辽宁美托科技|liaoning meituo|symtcl\.com/i },
  { profile: LIANYUNGANG_WEIDE_SUPPLIER_PROFILE, id: LIANYUNGANG_WEIDE_SUPPLIER_ID, slug: LIANYUNGANG_WEIDE_SUPPLIER_SLUG, identity: /连云港唯德复合材料设备|lianyungang weide|wdfrp\.com/i },
  { profile: LECTRA_SHANGHAI_SUPPLIER_PROFILE, id: LECTRA_SHANGHAI_SUPPLIER_ID, slug: LECTRA_SHANGHAI_SUPPLIER_SLUG, identity: /力克系统（上海）|lectra systems \(shanghai\)|lectra\.cn/i },
  { profile: NIPPON_PAINT_CHINA_SUPPLIER_PROFILE, id: NIPPON_PAINT_CHINA_SUPPLIER_ID, slug: NIPPON_PAINT_CHINA_SUPPLIER_SLUG, identity: /立邦涂料（中国）|nippon paint \(china\)|nipponpaint\.com\.cn/i },
  { profile: LIAONING_YUWEI_SUPPLIER_PROFILE, id: LIAONING_YUWEI_SUPPLIER_ID, slug: LIAONING_YUWEI_SUPPLIER_SLUG, identity: /辽宁宇威科技|liaoning yuwei|lnxinyu\.com/i },
] as const;

test("publishes exactly five deduplicated profiles in the twelfth CCE batch", () => {
  assert.equal(batch.length, 5);
  assert.equal(CURATED_SUPPLIER_PROFILES.length, 173);
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

test("keeps batch twelve unclaimed, source-backed and indexable", () => {
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
    assert.ok(profile.ecatalogs?.some(({ url }) =>
      profile.website
        ? new URL(url).hostname.replace(/^www\./, "") === new URL(profile.website).hostname.replace(/^www\./, "")
        : false,
    ));
    if (profile.logo) {
      assert.ok(profile.logo.startsWith("/supplier-assets/"));
      assert.equal(existsSync(`public${profile.logo}`), true);
    }
    assert.equal(isSupplierProfileIndexable(profile), true);
    assert.deepEqual(profile.certifications, []);
    assert.deepEqual(profile.certificationsEn, []);
    assert.deepEqual(profile.standardsSupported, []);
  }
  assert.equal(LIAONING_MEITUO_SUPPLIER_PROFILE.logo, null);
  assert.match(LIAONING_MEITUO_SUPPLIER_PROFILE.descriptionEn ?? "", /Carbon fiber is the reinforcement/i);
});

test("preserves product, workpiece and legal-identity boundaries", () => {
  assert.match(LIANYUNGANG_WEIDE_SUPPLIER_PROFILE.descriptionEn ?? "", /sells the machinery[\s\S]*not presented as Weide-manufactured FRP or carbon-fiber products/i);
  assert.match(LECTRA_SHANGHAI_SUPPLIER_PROFILE.descriptionEn ?? "", /workpiece materials handled by the equipment[\s\S]*not reinforcement, prepreg, sheet or finished composite products/i);
  assert.match(NIPPON_PAINT_CHINA_SUPPLIER_PROFILE.descriptionEn ?? "", /substrates being coated[\s\S]*not reinforcement products supplied by Nippon Paint/i);
  assert.match(LIAONING_YUWEI_SUPPLIER_PROFILE.descriptionEn ?? "", /does not publish a legal name-change or succession document/i);
  assert.doesNotMatch(LIAONING_YUWEI_SUPPLIER_PROFILE.name, /鑫宇/);
  assert.equal(LECTRA_SHANGHAI_SUPPLIER_PROFILE.established, null);
  assert.equal(NIPPON_PAINT_CHINA_SUPPLIER_PROFILE.established, null);
});

test("does not inject broad carbon-material demand into coatings, cylinders or equipment", () => {
  for (const { profile } of batch) {
    assert.deepEqual(getSupplierSearchKeywords(profile).map(({ phrase }) => phrase), []);
  }
});

test("builds offer-specific SEO titles for batch twelve", () => {
  assert.match(buildSupplierSeoBrief(LIAONING_MEITUO_SUPPLIER_PROFILE).pageTitle, /Carbon-fiber overwrapped composite cylinders/i);
  assert.match(buildSupplierSeoBrief(LIANYUNGANG_WEIDE_SUPPLIER_PROFILE).pageTitle, /Continuous-filament-winding FRP pipe/i);
  assert.match(buildSupplierSeoBrief(LECTRA_SHANGHAI_SUPPLIER_PROFILE).pageTitle, /Vector TechTex/i);
  assert.match(buildSupplierSeoBrief(NIPPON_PAINT_CHINA_SUPPLIER_PROFILE).pageTitle, /Fiber Paint carbon-fiber composite coating/i);
  assert.match(buildSupplierSeoBrief(LIAONING_YUWEI_SUPPLIER_PROFILE).pageTitle, /Phenoxy resin/i);
});
