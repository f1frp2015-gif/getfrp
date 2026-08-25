import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import {
  FANGXIN_RESIN_ANHUI_SUPPLIER_ID,
  FANGXIN_RESIN_ANHUI_SUPPLIER_PROFILE,
  FANGXIN_RESIN_ANHUI_SUPPLIER_SLUG,
} from "./fangxin-resin-anhui-supplier-profile";
import {
  GUANGDONG_HUEDUR_AUTOMATION_SUPPLIER_ID,
  GUANGDONG_HUEDUR_AUTOMATION_SUPPLIER_PROFILE,
  GUANGDONG_HUEDUR_AUTOMATION_SUPPLIER_SLUG,
} from "./guangdong-huedur-automation-supplier-profile";
import {
  GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_ID,
  GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_PROFILE,
  GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_SLUG,
} from "./guangdong-jinming-new-materials-supplier-profile";
import {
  GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_ID,
  GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_PROFILE,
  GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_SLUG,
} from "./guangdong-ruizhou-technology-supplier-profile";
import {
  HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_ID,
  HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_PROFILE,
  HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_SLUG,
} from "./hs-hyosung-carbon-materials-jiangsu-supplier-profile";
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
    profile: FANGXIN_RESIN_ANHUI_SUPPLIER_PROFILE,
    id: FANGXIN_RESIN_ANHUI_SUPPLIER_ID,
    slug: FANGXIN_RESIN_ANHUI_SUPPLIER_SLUG,
    identity: /方鑫树脂（安徽）|fangxin resin \(anhui\)|fangxinresin\.com/i,
  },
  {
    profile: HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_PROFILE,
    id: HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_ID,
    slug: HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_SLUG,
    identity: /高胜晓星碳材料|hyosung carbon materials \(jiangsu\)|hshyosungadvancedmaterials\.com/i,
  },
  {
    profile: GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_PROFILE,
    id: GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_ID,
    slug: GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_SLUG,
    identity: /广东锦明新材料|guangdong jinming new materials|jmfiber\.cn/i,
  },
  {
    profile: GUANGDONG_HUEDUR_AUTOMATION_SUPPLIER_PROFILE,
    id: GUANGDONG_HUEDUR_AUTOMATION_SUPPLIER_ID,
    slug: GUANGDONG_HUEDUR_AUTOMATION_SUPPLIER_SLUG,
    identity: /广东汇德自动化|guangdong huedur automation|huedur\.com/i,
  },
  {
    profile: GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_PROFILE,
    id: GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_ID,
    slug: GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_SLUG,
    identity: /广东瑞洲科技|guangdong ruizhou technology|ruizhou\.com\.cn/i,
  },
] as const;

test("publishes exactly five deduplicated profiles in the sixth CCE batch", () => {
  assert.equal(batch.length, 5);
  assert.equal(CURATED_SUPPLIER_PROFILES.length, 133);

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

test("keeps batch six unclaimed, source-backed and indexable", () => {
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
    assert.ok(
      profile.ecatalogs?.some(({ url }) =>
        url.includes("chinacompositesexpo.com"),
      ),
    );
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
  }
});

test("preserves entity, product and certificate boundaries", () => {
  assert.equal(FANGXIN_RESIN_ANHUI_SUPPLIER_PROFILE.established, null);
  assert.match(
    FANGXIN_RESIN_ANHUI_SUPPLIER_PROFILE.descriptionEn ?? "",
    /trial production[\s\S]*group's 1992 history[\s\S]*do not automatically establish/i,
  );
  assert.match(
    FANGXIN_RESIN_ANHUI_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /public contact belongs to the Nantong head office/i,
  );

  assert.equal(HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_PROFILE.established, 2022);
  assert.match(
    HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_PROFILE.descriptionEn ?? "",
    /does not transfer the Korean group's full history, total capacity, certifications or every grade/i,
  );

  assert.equal(GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_PROFILE.established, 2012);
  assert.match(
    GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_PROFILE.descriptionEn ?? "",
    /legacy label[\s\S]*no independent corporate-name-change filing/i,
  );
  assert.match(
    GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_PROFILE.descriptionEn ?? "",
    /No specific carbon-fiber fishing-rod product page was found/i,
  );

  assert.equal(GUANGDONG_HUEDUR_AUTOMATION_SUPPLIER_PROFILE.established, 2019);
  assert.match(
    GUANGDONG_HUEDUR_AUTOMATION_SUPPLIER_PROFILE.descriptionEn ?? "",
    /equipment supplier[\s\S]*does not assign material-product search phrases/i,
  );
  assert.equal(GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_PROFILE.established, 1995);
  assert.match(
    GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_PROFILE.descriptionEn ?? "",
    /supplies equipment[\s\S]*does not assign those material-supplier search phrases/i,
  );

  for (const { profile } of batch) {
    assert.deepEqual(profile.certifications, []);
    assert.deepEqual(profile.certificationsEn, []);
    assert.deepEqual(profile.standardsSupported, []);
  }
});

test("injects only measured-demand terms supported by sixth-batch products", () => {
  assert.deepEqual(getSupplierSearchKeywords(FANGXIN_RESIN_ANHUI_SUPPLIER_PROFILE), []);
  assert.deepEqual(
    getSupplierSearchKeywords(
      HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_PROFILE,
    ).map(({ phrase }) => phrase),
    ["carbon fiber filament", "carbon fiber products"],
  );
  assert.deepEqual(
    getSupplierSearchKeywords(
      GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_PROFILE,
    ).map(({ phrase }) => phrase),
    [
      "carbon fiber sheets",
      "carbon fiber tube",
      "carbon fiber plate",
      "custom carbon fiber tubing",
      "carbon fiber panels",
      "carbon fiber products",
    ],
  );
  assert.ok(
    !getSupplierSearchKeywords(
      GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_PROFILE,
    ).some(({ phrase }) => phrase === "carbon fiber fishing rod"),
  );
  assert.deepEqual(
    getSupplierSearchKeywords(GUANGDONG_HUEDUR_AUTOMATION_SUPPLIER_PROFILE),
    [],
  );
  assert.deepEqual(
    getSupplierSearchKeywords(GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_PROFILE),
    [],
  );
});

test("builds product-specific SEO briefs without equipment-page material drift", () => {
  const jinming = buildSupplierSeoBrief(
    GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_PROFILE,
  );
  assert.match(jinming.topicLabel, /carbon fiber tubes/i);
  assert.match(jinming.pageTitle, /Carbon fiber tubes/i);

  for (const profile of [
    GUANGDONG_HUEDUR_AUTOMATION_SUPPLIER_PROFILE,
    GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_PROFILE,
  ]) {
    const brief = buildSupplierSeoBrief(profile);
    assert.doesNotMatch(
      brief.pageTitle,
      /Carbon Fiber Sheets|Carbon Fiber Tube|Carbon Fiber Products/i,
    );
  }
});
