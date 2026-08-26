import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import {
  NANTONG_ENDURA_FRP_SUPPLIER_ID,
  NANTONG_ENDURA_FRP_SUPPLIER_PROFILE,
  NANTONG_ENDURA_FRP_SUPPLIER_SLUG,
} from "./nantong-endura-frp-supplier-profile";
import {
  LEISTER_SHANGHAI_SUPPLIER_ID,
  LEISTER_SHANGHAI_SUPPLIER_PROFILE,
  LEISTER_SHANGHAI_SUPPLIER_SLUG,
} from "./leister-shanghai-supplier-profile";
import {
  LEUCO_TAICANG_SUPPLIER_ID,
  LEUCO_TAICANG_SUPPLIER_PROFILE,
  LEUCO_TAICANG_SUPPLIER_SLUG,
} from "./leuco-taicang-supplier-profile";
import {
  LAP_LASER_SHANGHAI_SUPPLIER_ID,
  LAP_LASER_SHANGHAI_SUPPLIER_PROFILE,
  LAP_LASER_SHANGHAI_SUPPLIER_SLUG,
} from "./lap-laser-shanghai-supplier-profile";
import {
  LISHI_TESTING_SHANGHAI_SUPPLIER_ID,
  LISHI_TESTING_SHANGHAI_SUPPLIER_PROFILE,
  LISHI_TESTING_SHANGHAI_SUPPLIER_SLUG,
} from "./lishi-testing-shanghai-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import { getSupplierSearchKeywords } from "./supplier-search-keywords";
import { buildSupplierSeoBrief } from "./supplier-seo-briefs";
import { isSupplierProfileIndexable } from "../supplier-indexability";

const batch = [
  { profile: NANTONG_ENDURA_FRP_SUPPLIER_PROFILE, id: NANTONG_ENDURA_FRP_SUPPLIER_ID, slug: NANTONG_ENDURA_FRP_SUPPLIER_SLUG, identity: /南通力驰复合材料|nantong endura composites|enduragrid\.com/i },
  { profile: LEISTER_SHANGHAI_SUPPLIER_PROFILE, id: LEISTER_SHANGHAI_SUPPLIER_ID, slug: LEISTER_SHANGHAI_SUPPLIER_SLUG, identity: /莱丹塑料焊接技术（上海）|leister technologies \(shanghai\)|leisterchina\.com/i },
  { profile: LEUCO_TAICANG_SUPPLIER_PROFILE, id: LEUCO_TAICANG_SUPPLIER_ID, slug: LEUCO_TAICANG_SUPPLIER_SLUG, identity: /乐客精密工具（太仓）|leuco precision tooling \(taicang\)|leuco\.com/i },
  { profile: LAP_LASER_SHANGHAI_SUPPLIER_PROFILE, id: LAP_LASER_SHANGHAI_SUPPLIER_ID, slug: LAP_LASER_SHANGHAI_SUPPLIER_SLUG, identity: /镭尔谱激光应用技术（上海）|lap laser applications \(shanghai\)|lap-laser\.com\.cn/i },
  { profile: LISHI_TESTING_SHANGHAI_SUPPLIER_PROFILE, id: LISHI_TESTING_SHANGHAI_SUPPLIER_ID, slug: LISHI_TESTING_SHANGHAI_SUPPLIER_SLUG, identity: /力试（上海）科学仪器|lishi \(shanghai\) scientific instruments|lishi-test\.com/i },
] as const;

test("publishes exactly five deduplicated profiles in the eleventh CCE batch", () => {
  assert.equal(batch.length, 5);
  assert.equal(CURATED_SUPPLIER_PROFILES.length, 163);
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

test("keeps batch eleven unclaimed, source-backed and indexable with reviewed branding", () => {
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
  assert.equal(LISHI_TESTING_SHANGHAI_SUPPLIER_PROFILE.logo, null);
  assert.match(LISHI_TESTING_SHANGHAI_SUPPLIER_PROFILE.descriptionEn ?? "", /Composite material is one class of test specimen/i);
});

test("preserves manufacturing, workpiece and application boundaries", () => {
  assert.match(LEISTER_SHANGHAI_SUPPLIER_PROFILE.descriptionEn ?? "", /Leister-branded products are described as made in Switzerland[\s\S]*WELDY products are assembled and manufactured in Shanghai/i);
  assert.match(LEUCO_TAICANG_SUPPLIER_PROFILE.descriptionEn ?? "", /CFRP, GFRP and AFRP are workpiece materials[\s\S]*not composite products manufactured by LEUCO/i);
  assert.match(LAP_LASER_SHANGHAI_SUPPLIER_PROFILE.descriptionEn ?? "", /Projectors, cameras and software do not manufacture the prepreg, dry fiber, laminate or blade/i);
  assert.match(LISHI_TESTING_SHANGHAI_SUPPLIER_PROFILE.descriptionEn ?? "", /not a fiber, laminate or finished composite product made by Lishi/i);
  assert.equal(NANTONG_ENDURA_FRP_SUPPLIER_PROFILE.established, null);
  assert.equal(LEUCO_TAICANG_SUPPLIER_PROFILE.established, null);
});

test("injects only measured-demand terms supported by eleventh-batch products", () => {
  const phrases = (profile: (typeof batch)[number]["profile"]) =>
    getSupplierSearchKeywords(profile).map(({ phrase }) => phrase);
  assert.deepEqual(phrases(NANTONG_ENDURA_FRP_SUPPLIER_PROFILE), ["fiberglass panels", "fiberglass grating", "pultruded", "fiberglass reinforced pipe", "FRP grating", "FRP pipe", "fiberglass pipe", "pultruded fiberglass", "fiberglass pultruded grating", "FRP grating panels", "fiberglass pipe supplier", "molded FRP grating"]);
  assert.deepEqual(phrases(LEISTER_SHANGHAI_SUPPLIER_PROFILE), []);
  assert.deepEqual(phrases(LEUCO_TAICANG_SUPPLIER_PROFILE), []);
  assert.deepEqual(phrases(LAP_LASER_SHANGHAI_SUPPLIER_PROFILE), []);
  assert.deepEqual(phrases(LISHI_TESTING_SHANGHAI_SUPPLIER_PROFILE), []);
});

test("builds offer-specific SEO titles for batch eleven", () => {
  assert.match(buildSupplierSeoBrief(NANTONG_ENDURA_FRP_SUPPLIER_PROFILE).pageTitle, /FRP Grating/i);
  assert.match(buildSupplierSeoBrief(LEISTER_SHANGHAI_SUPPLIER_PROFILE).pageTitle, /Handheld hot-air tools/i);
  assert.match(buildSupplierSeoBrief(LEUCO_TAICANG_SUPPLIER_PROFILE).pageTitle, /Solid-carbide routers/i);
  assert.match(buildSupplierSeoBrief(LAP_LASER_SHANGHAI_SUPPLIER_PROFILE).pageTitle, /CAD-PRO Xpert laser projectors/i);
  assert.match(buildSupplierSeoBrief(LISHI_TESTING_SHANGHAI_SUPPLIER_PROFILE).pageTitle, /LE-series electronic universal testing systems/i);
});
