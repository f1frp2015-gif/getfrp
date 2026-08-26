import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { test } from "node:test";
import {
  NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_ID,
  NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_PROFILE,
  NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_SLUG,
} from "./ningbo-haigela-lcp-fiber-supplier-profile";
import {
  NINGBO_JINGWEI_CNC_SUPPLIER_ID,
  NINGBO_JINGWEI_CNC_SUPPLIER_PROFILE,
  NINGBO_JINGWEI_CNC_SUPPLIER_SLUG,
} from "./ningbo-jingwei-cnc-supplier-profile";
import {
  NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_ID,
  NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_PROFILE,
  NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_SLUG,
} from "./ningbo-licheng-super-resin-supplier-profile";
import {
  NINGBO_MOTONG_COMPOSITE_MOLDING_SUPPLIER_ID,
  NINGBO_MOTONG_COMPOSITE_MOLDING_SUPPLIER_PROFILE,
  NINGBO_MOTONG_COMPOSITE_MOLDING_SUPPLIER_SLUG,
} from "./ningbo-motong-composite-molding-supplier-profile";
import {
  NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_ID,
  NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_PROFILE,
  NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_SLUG,
} from "./ningbo-refitech-carbon-fiber-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import { getSupplierSearchKeywords } from "./supplier-search-keywords";
import { buildSupplierSeoBrief } from "./supplier-seo-briefs";
import { isSupplierProfileIndexable } from "../supplier-indexability";

const batch = [
  { profile: NINGBO_JINGWEI_CNC_SUPPLIER_PROFILE, id: NINGBO_JINGWEI_CNC_SUPPLIER_ID, slug: NINGBO_JINGWEI_CNC_SUPPLIER_SLUG, identity: /宁波经纬数控|ningbo jingwei cnc|jingwei\.com\.cn/i },
  { profile: NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_PROFILE, id: NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_ID, slug: NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_SLUG, identity: /宁波海格拉新材料|ningbo haigela new material|yokolar\.com/i },
  { profile: NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_PROFILE, id: NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_ID, slug: NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_SLUG, identity: /宁波瑞菲科碳纤维|refitech ningbo carbon fiber|refitech\.cn/i },
  { profile: NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_PROFILE, id: NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_ID, slug: NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_SLUG, identity: /宁波丽成复合材料|ningbo licheng composite products|super-resin\.cn/i },
  { profile: NINGBO_MOTONG_COMPOSITE_MOLDING_SUPPLIER_PROFILE, id: NINGBO_MOTONG_COMPOSITE_MOLDING_SUPPLIER_ID, slug: NINGBO_MOTONG_COMPOSITE_MOLDING_SUPPLIER_SLUG, identity: /宁波摩通复合材料|ningbo motong composite materials|mot-cn\.com/i },
] as const;

function phrases(profile: (typeof batch)[number]["profile"]): string[] {
  return getSupplierSearchKeywords(profile).map(({ phrase }) => phrase);
}

test("publishes exactly five deduplicated profiles in the fifteenth CCE batch", () => {
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

test("keeps batch fifteen unclaimed, source-backed, logo-complete and indexable", () => {
  for (const { profile } of batch) {
    assert.equal(profile.profilePublished, true);
    assert.equal(profile.verified, false);
    assert.equal(profile.enterpriseId, null);
    assert.match(profile.website ?? "", /^https:\/\//);
    assert.ok((profile.productsEn?.length ?? 0) >= 10);
    assert.ok((profile.processListEn?.length ?? 0) >= 10);
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

test("preserves equipment, application, process-package and legal-entity boundaries", () => {
  assert.match(NINGBO_JINGWEI_CNC_SUPPLIER_PROFILE.descriptionEn ?? "", /equipment and process profile[\s\S]*not evidence that JWEI manufactures/i);
  assert.deepEqual(phrases(NINGBO_JINGWEI_CNC_SUPPLIER_PROFILE), []);
  assert.match(NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_PROFILE.descriptionEn ?? "", /possible applications[\s\S]*do not prove that Haigela manufactures/i);
  assert.match(NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_PROFILE.descriptionEn ?? "", /Group history[\s\S]*not automatically treated as verified Ningbo/i);
  assert.match(NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_PROFILE.descriptionEn ?? "", /maps only products shown[\s\S]*not expanded into unrelated finished products/i);
  assert.match(NINGBO_MOTONG_COMPOSITE_MOLDING_SUPPLIER_PROFILE.descriptionEn ?? "", /process-package target[\s\S]*presented here as Motong's standard raw-material or finished-cylinder catalog/i);
  assert.deepEqual(phrases(NINGBO_MOTONG_COMPOSITE_MOLDING_SUPPLIER_PROFILE), []);
});

test("assigns only offer-backed measured-demand phrases to batch fifteen", () => {
  assert.deepEqual(phrases(NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_PROFILE), []);

  const refitech = phrases(NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_PROFILE);
  for (const expected of ["carbon fiber tube", "carbon fiber plate", "carbon fiber products", "carbon fiber panels"]) {
    assert.ok(refitech.includes(expected), `missing Refitech phrase: ${expected}`);
  }
  assert.doesNotMatch(refitech.join(" "), /fishing rod|carbon fiber fabric|filament wound/i);

  const licheng = phrases(NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_PROFILE);
  for (const expected of ["carbon fiber tube", "carbon fiber plate", "carbon fiber products", "carbon fiber panels"]) {
    assert.ok(licheng.includes(expected), `missing Licheng phrase: ${expected}`);
  }
  assert.doesNotMatch(licheng.join(" "), /fishing rod|fiberglass|chopped carbon/i);
});

test("builds offer-specific SEO titles for batch fifteen", () => {
  assert.match(buildSupplierSeoBrief(NINGBO_JINGWEI_CNC_SUPPLIER_PROFILE).pageTitle, /digital cutting/i);
  assert.match(buildSupplierSeoBrief(NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_PROFILE).pageTitle, /LCP/i);
  assert.match(buildSupplierSeoBrief(NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_PROFILE).pageTitle, /Carbon-Fiber/i);
  assert.match(buildSupplierSeoBrief(NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_PROFILE).pageTitle, /Carbon-Fiber/i);
  assert.match(buildSupplierSeoBrief(NINGBO_MOTONG_COMPOSITE_MOLDING_SUPPLIER_PROFILE).pageTitle, /PPCM|continuous-fiber/i);
});
