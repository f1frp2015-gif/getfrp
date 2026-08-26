import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import {
  JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_ID,
  JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_PROFILE,
  JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_SLUG,
} from "./jiangsu-bocheng-ptfe-fabrics-supplier-profile";
import {
  KUNMING_FEIXIANG_FRP_SUPPLIER_ID,
  KUNMING_FEIXIANG_FRP_SUPPLIER_PROFILE,
  KUNMING_FEIXIANG_FRP_SUPPLIER_SLUG,
} from "./kunming-feixiang-frp-supplier-profile";
import {
  CARDOLITE_ZHUHAI_SUPPLIER_ID,
  CARDOLITE_ZHUHAI_SUPPLIER_PROFILE,
  CARDOLITE_ZHUHAI_SUPPLIER_SLUG,
} from "./cardolite-zhuhai-supplier-profile";
import {
  LANXI_JOEN_FIBERGLASS_SUPPLIER_ID,
  LANXI_JOEN_FIBERGLASS_SUPPLIER_PROFILE,
  LANXI_JOEN_FIBERGLASS_SUPPLIER_SLUG,
} from "./lanxi-joen-fiberglass-supplier-profile";
import {
  KEJIAN_POLYMER_SHANGHAI_SUPPLIER_ID,
  KEJIAN_POLYMER_SHANGHAI_SUPPLIER_PROFILE,
  KEJIAN_POLYMER_SHANGHAI_SUPPLIER_SLUG,
} from "./kejian-polymer-shanghai-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import { getSupplierSearchKeywords } from "./supplier-search-keywords";
import { buildSupplierSeoBrief } from "./supplier-seo-briefs";
import { isSupplierProfileIndexable } from "../supplier-indexability";

const batch = [
  { profile: JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_PROFILE, id: JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_ID, slug: JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_SLUG, identity: /江苏博诚新科技材料|jiangsu bocheng new tech|bcflon\.com/i },
  { profile: KUNMING_FEIXIANG_FRP_SUPPLIER_PROFILE, id: KUNMING_FEIXIANG_FRP_SUPPLIER_ID, slug: KUNMING_FEIXIANG_FRP_SUPPLIER_SLUG, identity: /昆明飞翔材料技术|kunming feixiang material|frpladder\.com/i },
  { profile: CARDOLITE_ZHUHAI_SUPPLIER_PROFILE, id: CARDOLITE_ZHUHAI_SUPPLIER_ID, slug: CARDOLITE_ZHUHAI_SUPPLIER_SLUG, identity: /卡德莱化工（珠海）|cardolite chemical \(zhuhai\)|cardolite\.com/i },
  { profile: LANXI_JOEN_FIBERGLASS_SUPPLIER_PROFILE, id: LANXI_JOEN_FIBERGLASS_SUPPLIER_ID, slug: LANXI_JOEN_FIBERGLASS_SUPPLIER_SLUG, identity: /兰溪庄原玻璃纤维|lanxi joen fiberglass|hzglass\.com/i },
  { profile: KEJIAN_POLYMER_SHANGHAI_SUPPLIER_PROFILE, id: KEJIAN_POLYMER_SHANGHAI_SUPPLIER_ID, slug: KEJIAN_POLYMER_SHANGHAI_SUPPLIER_SLUG, identity: /科建高分子材料（上海）|kejian polymer materials \(shanghai\)|kejian-china\.com/i },
] as const;

test("publishes exactly five deduplicated profiles in the tenth CCE batch", () => {
  assert.equal(batch.length, 5);
  assert.equal(CURATED_SUPPLIER_PROFILES.length, 153);
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

test("keeps batch ten unclaimed, source-backed, indexable and locally branded", () => {
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
    assert.ok(profile.logo?.startsWith("/supplier-assets/"));
    assert.equal(existsSync(`public${profile.logo}`), true);
    assert.equal(isSupplierProfileIndexable(profile), true);
    assert.deepEqual(profile.certifications, []);
    assert.deepEqual(profile.certificationsEn, []);
    assert.deepEqual(profile.standardsSupported, []);
  }
});

test("preserves legal-entity and product boundaries", () => {
  assert.match(KUNMING_FEIXIANG_FRP_SUPPLIER_PROFILE.descriptionEn ?? "", /telescopic insulating ladder[\s\S]*not a fishing rod/i);
  assert.doesNotMatch(KUNMING_FEIXIANG_FRP_SUPPLIER_PROFILE.productsEn?.join(" ") ?? "", /fishing rod/i);
  assert.match(CARDOLITE_ZHUHAI_SUPPLIER_PROFILE.descriptionEn ?? "", /resin-use contexts[\s\S]*do not mean[\s\S]*pultruded profiles/i);
  assert.equal(CARDOLITE_ZHUHAI_SUPPLIER_PROFILE.established, null);
  assert.match(LANXI_JOEN_FIBERGLASS_SUPPLIER_PROFILE.descriptionEn ?? "", /Nanjing coating company[\s\S]*Jiangxi affiliate/i);
  assert.equal(LANXI_JOEN_FIBERGLASS_SUPPLIER_PROFILE.established, null);
  assert.match(KEJIAN_POLYMER_SHANGHAI_SUPPLIER_PROFILE.descriptionEn ?? "", /does not relabel a generic release cloth as fiberglass cloth/i);
});

test("injects only measured-demand terms supported by tenth-batch products", () => {
  const phrases = (profile: (typeof batch)[number]["profile"]) =>
    getSupplierSearchKeywords(profile).map(({ phrase }) => phrase);
  assert.deepEqual(phrases(JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_PROFILE), ["fiberglass cloth", "fiberglass roll"]);
  assert.deepEqual(phrases(KUNMING_FEIXIANG_FRP_SUPPLIER_PROFILE), ["pultruded", "pultruded fiberglass"]);
  assert.deepEqual(phrases(CARDOLITE_ZHUHAI_SUPPLIER_PROFILE), []);
  assert.deepEqual(phrases(LANXI_JOEN_FIBERGLASS_SUPPLIER_PROFILE), ["fiberglass cloth"]);
  assert.deepEqual(phrases(KEJIAN_POLYMER_SHANGHAI_SUPPLIER_PROFILE), []);
  assert.ok(!phrases(KUNMING_FEIXIANG_FRP_SUPPLIER_PROFILE).some((phrase) => phrase.includes("fishing rod")));
});

test("builds offer-specific SEO titles for batch ten", () => {
  assert.match(buildSupplierSeoBrief(JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_PROFILE).pageTitle, /Fiberglass Fabrics/i);
  assert.match(buildSupplierSeoBrief(KUNMING_FEIXIANG_FRP_SUPPLIER_PROFILE).pageTitle, /Pultruded FRP Structural Profiles/i);
  assert.match(buildSupplierSeoBrief(CARDOLITE_ZHUHAI_SUPPLIER_PROFILE).pageTitle, /phenalkamine epoxy curing/i);
  assert.match(buildSupplierSeoBrief(LANXI_JOEN_FIBERGLASS_SUPPLIER_PROFILE).pageTitle, /Fiberglass Fabrics/i);
  assert.match(buildSupplierSeoBrief(KEJIAN_POLYMER_SHANGHAI_SUPPLIER_PROFILE).pageTitle, /high-temperature sealing tape/i);
});
