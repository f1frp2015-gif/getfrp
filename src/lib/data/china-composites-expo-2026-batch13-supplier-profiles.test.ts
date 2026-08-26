import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import {
  NANJING_HAOLI_SUPPLIER_ID,
  NANJING_HAOLI_SUPPLIER_PROFILE,
  NANJING_HAOLI_SUPPLIER_SLUG,
} from "./nanjing-haoli-supplier-profile";
import {
  NANJING_HITECH_COMPOSITES_SUPPLIER_ID,
  NANJING_HITECH_COMPOSITES_SUPPLIER_PROFILE,
  NANJING_HITECH_COMPOSITES_SUPPLIER_SLUG,
} from "./nanjing-hitech-composites-supplier-profile";
import {
  NANJING_LIDESHENG_SUPPLIER_ID,
  NANJING_LIDESHENG_SUPPLIER_PROFILE,
  NANJING_LIDESHENG_SUPPLIER_SLUG,
} from "./nanjing-lidesheng-supplier-profile";
import {
  NANJING_MINGFENG_SUPPLIER_ID,
  NANJING_MINGFENG_SUPPLIER_PROFILE,
  NANJING_MINGFENG_SUPPLIER_SLUG,
} from "./nanjing-mingfeng-supplier-profile";
import {
  NANJING_TIANMING_SUPPLIER_ID,
  NANJING_TIANMING_SUPPLIER_PROFILE,
  NANJING_TIANMING_SUPPLIER_SLUG,
} from "./nanjing-tianming-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import { getSupplierSearchKeywords } from "./supplier-search-keywords";
import { buildSupplierSeoBrief } from "./supplier-seo-briefs";
import { isSupplierProfileIndexable } from "../supplier-indexability";

const batch = [
  { profile: NANJING_HITECH_COMPOSITES_SUPPLIER_PROFILE, id: NANJING_HITECH_COMPOSITES_SUPPLIER_ID, slug: NANJING_HITECH_COMPOSITES_SUPPLIER_SLUG, identity: /南京海拓复合材料|nanjing hitech composites|hitechfrp\.com/i },
  { profile: NANJING_HAOLI_SUPPLIER_PROFILE, id: NANJING_HAOLI_SUPPLIER_ID, slug: NANJING_HAOLI_SUPPLIER_SLUG, identity: /南京豪力液压设备|nanjing haoli hydraulic|njhaoli\.cn/i },
  { profile: NANJING_MINGFENG_SUPPLIER_PROFILE, id: NANJING_MINGFENG_SUPPLIER_ID, slug: NANJING_MINGFENG_SUPPLIER_SLUG, identity: /南京明峰复合材料|nanjing mingfeng composite|njmf\.com/i },
  { profile: NANJING_LIDESHENG_SUPPLIER_PROFILE, id: NANJING_LIDESHENG_SUPPLIER_ID, slug: NANJING_LIDESHENG_SUPPLIER_SLUG, identity: /南京利德盛机械|nanjing lidesheng machinery|ldsjx\.com/i },
  { profile: NANJING_TIANMING_SUPPLIER_PROFILE, id: NANJING_TIANMING_SUPPLIER_ID, slug: NANJING_TIANMING_SUPPLIER_SLUG, identity: /南京天明复合材料|nanjing tianming composite|tmfiber\.com/i },
] as const;

function phrases(profile: (typeof batch)[number]["profile"]): string[] {
  return getSupplierSearchKeywords(profile).map(({ phrase }) => phrase);
}

test("publishes exactly five deduplicated profiles in the thirteenth CCE batch", () => {
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

test("keeps batch thirteen unclaimed, source-backed, logo-complete and indexable", () => {
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

test("preserves product, workpiece, catalog and legal-evidence boundaries", () => {
  assert.match(NANJING_HAOLI_SUPPLIER_PROFILE.descriptionEn ?? "", /compatible workpieces[\s\S]*not evidence that Haoli supplies carbon fiber, fiberglass, pultruded profiles/i);
  assert.match(NANJING_LIDESHENG_SUPPLIER_PROFILE.descriptionEn ?? "", /materials or processes handled by customer equipment[\s\S]*not products manufactured by Lidesheng/i);
  assert.match(NANJING_MINGFENG_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "", /educational pages[\s\S]*do not expand the supplier's actual offer beyond the published product catalog/i);
  assert.match(NANJING_TIANMING_SUPPLIER_PROFILE.descriptionEn ?? "", /agent for some roving[\s\S]*confirm the legal manufacturer and plant/i);
  assert.match(NANJING_HITECH_COMPOSITES_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "", /leaves certification arrays empty until current documents are matched/i);
});

test("assigns only offer-backed search phrases to batch thirteen", () => {
  assert.deepEqual(phrases(NANJING_HAOLI_SUPPLIER_PROFILE), []);
  assert.deepEqual(phrases(NANJING_LIDESHENG_SUPPLIER_PROFILE), []);

  const hitech = phrases(NANJING_HITECH_COMPOSITES_SUPPLIER_PROFILE);
  for (const expected of ["carbon fiber plate", "carbon fiber tube", "carbon fiber fabric", "fiberglass cloth", "fiberglass grating", "fiberglass rebar", "pultruded"]) {
    assert.ok(hitech.includes(expected), `missing Hitech phrase: ${expected}`);
  }

  const mingfeng = phrases(NANJING_MINGFENG_SUPPLIER_PROFILE);
  for (const expected of ["fiberglass rod", "fiberglass tube", "fiberglass grating", "FRP grating", "pultruded"]) {
    assert.ok(mingfeng.includes(expected), `missing Mingfeng phrase: ${expected}`);
  }

  const tianming = phrases(NANJING_TIANMING_SUPPLIER_PROFILE);
  assert.ok(tianming.includes("chopped strand mat"));
  assert.ok(tianming.includes("fiberglass mat"));
  assert.doesNotMatch(tianming.join(" "), /carbon fiber|fishing rod|fiberglass grating/i);
});

test("builds offer-specific SEO titles for batch thirteen", () => {
  assert.match(buildSupplierSeoBrief(NANJING_HITECH_COMPOSITES_SUPPLIER_PROFILE).pageTitle, /Pultruded carbon-fiber plates/i);
  assert.match(buildSupplierSeoBrief(NANJING_HAOLI_SUPPLIER_PROFILE).pageTitle, /Pultrusion Machines/i);
  assert.match(buildSupplierSeoBrief(NANJING_MINGFENG_SUPPLIER_PROFILE).pageTitle, /Pultruded fiberglass \(GFRP\) round and rectangular/i);
  assert.match(buildSupplierSeoBrief(NANJING_LIDESHENG_SUPPLIER_PROFILE).pageTitle, /Water-circulation mold-temperature controllers/i);
  assert.match(buildSupplierSeoBrief(NANJING_TIANMING_SUPPLIER_PROFILE).pageTitle, /Fiberglass chopped-strand mat/i);
});
