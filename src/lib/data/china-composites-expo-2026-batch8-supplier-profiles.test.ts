import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import {
  HANGZHOU_JLS_FLAME_RETARDANTS_SUPPLIER_ID,
  HANGZHOU_JLS_FLAME_RETARDANTS_SUPPLIER_PROFILE,
  HANGZHOU_JLS_FLAME_RETARDANTS_SUPPLIER_SLUG,
} from "./hangzhou-jls-flame-retardants-supplier-profile";
import {
  HB_FULLER_CHINA_SUPPLIER_ID,
  HB_FULLER_CHINA_SUPPLIER_PROFILE,
  HB_FULLER_CHINA_SUPPLIER_SLUG,
} from "./hb-fuller-china-supplier-profile";
import {
  HEDRICH_XIAMEN_SUPPLIER_ID,
  HEDRICH_XIAMEN_SUPPLIER_PROFILE,
  HEDRICH_XIAMEN_SUPPLIER_SLUG,
} from "./hedrich-xiamen-supplier-profile";
import {
  HRC_COMPOSITES_SUPPLIER_ID,
  HRC_COMPOSITES_SUPPLIER_PROFILE,
  HRC_COMPOSITES_SUPPLIER_SLUG,
} from "./hrc-composites-supplier-profile";
import {
  JIANGSU_SHINO_POLYIMIDE_FIBER_SUPPLIER_ID,
  JIANGSU_SHINO_POLYIMIDE_FIBER_SUPPLIER_PROFILE,
  JIANGSU_SHINO_POLYIMIDE_FIBER_SUPPLIER_SLUG,
} from "./jiangsu-shino-polyimide-fiber-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import { getSupplierSearchKeywords } from "./supplier-search-keywords";
import { buildSupplierSeoBrief } from "./supplier-seo-briefs";
import { isSupplierProfileIndexable } from "../supplier-indexability";

const batch = [
  {
    profile: HANGZHOU_JLS_FLAME_RETARDANTS_SUPPLIER_PROFILE,
    id: HANGZHOU_JLS_FLAME_RETARDANTS_SUPPLIER_ID,
    slug: HANGZHOU_JLS_FLAME_RETARDANTS_SUPPLIER_SLUG,
    identity: /杭州捷尔思阻燃化工|hangzhou jls flame retardants|jlschemical\.com/i,
  },
  {
    profile: HB_FULLER_CHINA_SUPPLIER_PROFILE,
    id: HB_FULLER_CHINA_SUPPLIER_ID,
    slug: HB_FULLER_CHINA_SUPPLIER_SLUG,
    identity: /富乐（中国）粘合剂|h\.b\. fuller \(china\) adhesives|hbfuller\.com/i,
  },
  {
    profile: HEDRICH_XIAMEN_SUPPLIER_PROFILE,
    id: HEDRICH_XIAMEN_SUPPLIER_ID,
    slug: HEDRICH_XIAMEN_SUPPLIER_SLUG,
    identity: /赫德瑞意（厦门）|hedrich xiamen|hedrich\.com/i,
  },
  {
    profile: HRC_COMPOSITES_SUPPLIER_PROFILE,
    id: HRC_COMPOSITES_SUPPLIER_ID,
    slug: HRC_COMPOSITES_SUPPLIER_SLUG,
    identity: /亨睿碳纤维|hrc group|grouphrc\.com/i,
  },
  {
    profile: JIANGSU_SHINO_POLYIMIDE_FIBER_SUPPLIER_PROFILE,
    id: JIANGSU_SHINO_POLYIMIDE_FIBER_SUPPLIER_ID,
    slug: JIANGSU_SHINO_POLYIMIDE_FIBER_SUPPLIER_SLUG,
    identity: /江苏先诺新材料科技|jiangsu shino new material|jsshino\.com/i,
  },
] as const;

test("publishes exactly five deduplicated profiles in the eighth CCE batch", () => {
  assert.equal(batch.length, 5);
  assert.equal(CURATED_SUPPLIER_PROFILES.length, 143);

  for (const { profile, id, slug, identity } of batch) {
    assert.equal(getCuratedSupplierProfile(id), profile);
    assert.equal(getCuratedSupplierProfile(slug), profile);
    assert.equal(
      getCuratedSupplierSlugs().filter((candidate) => candidate === slug).length,
      1,
    );
    assert.deepEqual(
      CURATED_SUPPLIER_PROFILES.filter(({ profile: candidate }) =>
        identity.test(
          `${candidate.name} ${candidate.nameEn ?? ""} ${candidate.website ?? ""}`,
        ),
      ).map(({ profile: candidate }) => candidate.id),
      [id],
    );
  }
});

test("keeps batch eight unclaimed, source-backed and indexable", () => {
  for (const { profile } of batch) {
    assert.equal(profile.profilePublished, true);
    assert.equal(profile.verified, false);
    assert.equal(profile.enterpriseId, null);
    assert.ok(profile.nameEn?.trim());
    assert.match(profile.website ?? "", /^https:\/\//);
    assert.ok((profile.productsEn?.length ?? 0) >= 8);
    assert.ok((profile.processListEn?.length ?? 0) >= 8);
    assert.ok((profile.descriptionEn?.length ?? 0) >= 500);
    assert.ok((profile.productsServicesSummaryEn?.length ?? 0) >= 1_000);
    assert.ok(profile.ecatalogs?.some(({ url }) => url.includes("chinacompositesexpo.com")));
    assert.ok(
      profile.ecatalogs?.some(({ url }) =>
        profile.website
          ? new URL(url).hostname.replace(/^www\./, "") ===
            new URL(profile.website).hostname.replace(/^www\./, "")
          : false,
      ),
    );
    assert.ok(profile.logo?.startsWith("/supplier-assets/"));
    assert.equal(existsSync(`public${profile.logo}`), true);
    assert.equal(isSupplierProfileIndexable(profile), true);
    assert.deepEqual(profile.certifications, []);
    assert.deepEqual(profile.certificationsEn, []);
    assert.deepEqual(profile.standardsSupported, []);
  }
});

test("preserves group, legal-entity, equipment and material-identity boundaries", () => {
  assert.match(
    HB_FULLER_CHINA_SUPPLIER_PROFILE.descriptionEn ?? "",
    /does not infer[\s\S]*every global grade[\s\S]*Guangzhou operation/i,
  );
  assert.match(
    HB_FULLER_CHINA_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /US manufacturing locations[\s\S]*does not make a grade Guangzhou-made/i,
  );

  assert.equal(HEDRICH_XIAMEN_SUPPLIER_PROFILE.category, "equipment");
  assert.match(
    HEDRICH_XIAMEN_SUPPLIER_PROFILE.descriptionEn ?? "",
    /Group-developed technologies[\s\S]*Xiamen legal entity/i,
  );
  assert.deepEqual(getSupplierSearchKeywords(HEDRICH_XIAMEN_SUPPLIER_PROFILE), []);

  assert.match(
    HRC_COMPOSITES_SUPPLIER_PROFILE.descriptionEn ?? "",
    /exhibitor brand\/group[\s\S]*exact HRC legal entity/i,
  );
  assert.match(
    JIANGSU_SHINO_POLYIMIDE_FIBER_SUPPLIER_PROFILE.descriptionEn ?? "",
    /not aramid, carbon fiber or fiberglass/i,
  );
  assert.deepEqual(
    getSupplierSearchKeywords(JIANGSU_SHINO_POLYIMIDE_FIBER_SUPPLIER_PROFILE),
    [],
  );
});

test("injects only measured-demand terms supported by eighth-batch products", () => {
  assert.deepEqual(
    getSupplierSearchKeywords(HRC_COMPOSITES_SUPPLIER_PROFILE).map(({ phrase }) => phrase),
    [
      "carbon fiber sheets",
      "carbon fiber plate",
      "carbon fiber pickleball paddle",
      "carbon fiber fabric",
      "carbon fiber panels",
      "carbon fiber products",
    ],
  );

  for (const profile of [
    HANGZHOU_JLS_FLAME_RETARDANTS_SUPPLIER_PROFILE,
    HB_FULLER_CHINA_SUPPLIER_PROFILE,
  ]) {
    assert.deepEqual(getSupplierSearchKeywords(profile), []);
  }
});

test("builds product-specific SEO briefs without material drift", () => {
  const hrc = buildSupplierSeoBrief(HRC_COMPOSITES_SUPPLIER_PROFILE);
  assert.match(hrc.pageTitle, /carbon fiber sheets/i);
  assert.ok(hrc.searchKeywords.includes("carbon fiber pickleball paddle"));

  for (const profile of [
    HANGZHOU_JLS_FLAME_RETARDANTS_SUPPLIER_PROFILE,
    HB_FULLER_CHINA_SUPPLIER_PROFILE,
    HEDRICH_XIAMEN_SUPPLIER_PROFILE,
    JIANGSU_SHINO_POLYIMIDE_FIBER_SUPPLIER_PROFILE,
  ]) {
    const brief = buildSupplierSeoBrief(profile);
    assert.doesNotMatch(
      brief.pageTitle,
      /Carbon Fiber Sheets|Carbon Fiber Products|Fiberglass Sheets/i,
    );
  }
});
