import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  EXEL_COMPOSITES_NANJING_SUPPLIER_ID,
  EXEL_COMPOSITES_NANJING_SUPPLIER_PROFILE,
  EXEL_COMPOSITES_NANJING_SUPPLIER_SLUG,
} from "./exel-composites-nanjing-supplier-profile";
import {
  SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_ID,
  SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_PROFILE,
  SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_SLUG,
} from "./sinopec-shanghai-petrochemical-supplier-profile";
import {
  WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_ID,
  WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_PROFILE,
  WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_SLUG,
} from "./weihai-guangwei-composites-supplier-profile";
import {
  YIXING_HUAHENG_SUPPLIER_ID,
  YIXING_HUAHENG_SUPPLIER_PROFILE,
  YIXING_HUAHENG_SUPPLIER_SLUG,
} from "./yixing-huaheng-supplier-profile";
import { getSupplierSearchKeywords } from "./supplier-search-keywords";
import { isSupplierProfileIndexable } from "../supplier-indexability";

const batch = [
  {
    profile: WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_PROFILE,
    id: WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_ID,
    slug: WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_SLUG,
    identity: /威海光威|weihai guangwei|gwcfc\.com/i,
  },
  {
    profile: YIXING_HUAHENG_SUPPLIER_PROFILE,
    id: YIXING_HUAHENG_SUPPLIER_ID,
    slug: YIXING_HUAHENG_SUPPLIER_SLUG,
    identity: /宜兴市华恒|yixing huaheng|huahengcf\.com/i,
  },
  {
    profile: SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_PROFILE,
    id: SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_ID,
    slug: SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_SLUG,
    identity: /上海石油化工|shanghai petrochemical|spc\.sinopec\.com/i,
  },
  {
    profile: EXEL_COMPOSITES_NANJING_SUPPLIER_PROFILE,
    id: EXEL_COMPOSITES_NANJING_SUPPLIER_ID,
    slug: EXEL_COMPOSITES_NANJING_SUPPLIER_SLUG,
    identity: /埃克赛复合材料|exel composites.*nanjing|exelcomposites\.com/i,
  },
] as const;

test("publishes one deduplicated profile for every reviewed CCE 2026 supplier", () => {
  for (const { profile, id, slug, identity } of batch) {
    assert.equal(getCuratedSupplierProfile(id), profile);
    assert.equal(getCuratedSupplierProfile(slug), profile);
    assert.equal(
      getCuratedSupplierSlugs().filter((candidate) => candidate === slug).length,
      1,
    );

    const matches = CURATED_SUPPLIER_PROFILES.filter(({ profile: candidate }) =>
      identity.test(
        `${candidate.name} ${candidate.nameEn ?? ""} ${candidate.website ?? ""}`,
      ),
    );
    assert.deepEqual(
      matches.map(({ profile: candidate }) => candidate.id),
      [id],
    );
  }
});

test("keeps the batch unclaimed, source-backed, locally branded and indexable", () => {
  for (const { profile } of batch) {
    assert.equal(profile.profilePublished, true);
    assert.equal(profile.verified, false);
    assert.equal(profile.enterpriseId, null);
    assert.equal(profile.exportReady, true);
    assert.ok(profile.nameEn?.trim());
    assert.ok(profile.website?.startsWith("https://"));
    assert.ok(profile.logo?.startsWith("/supplier-assets/"));
    assert.ok((profile.productsEn?.length ?? 0) >= 5);
    assert.ok((profile.processListEn?.length ?? 0) >= 5);
    assert.ok((profile.descriptionEn?.length ?? 0) >= 320);
    assert.ok((profile.productsServicesSummaryEn?.length ?? 0) >= 900);
    assert.ok(
      profile.ecatalogs?.some(({ url }) =>
        url.includes("chinacompositesexpo.com"),
      ),
    );
    assert.ok(
      profile.ecatalogs?.some(({ url }) =>
        profile.website ? url.includes(new URL(profile.website).hostname) : false,
      ),
    );
    assert.equal(isSupplierProfileIndexable(profile), true);
  }
});

test("preserves conservative evidence boundaries for each supplier", () => {
  assert.equal(WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_PROFILE.established, null);
  assert.deepEqual(
    WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_PROFILE.certifications,
    [],
  );
  assert.match(
    WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /TLS chain/i,
  );

  assert.equal(YIXING_HUAHENG_SUPPLIER_PROFILE.established, 2001);
  assert.match(
    YIXING_HUAHENG_SUPPLIER_PROFILE.productsEn?.join(" ") ?? "",
    /needle-punched preforms/i,
  );
  assert.match(
    YIXING_HUAHENG_SUPPLIER_PROFILE.productsEn?.join(" ") ?? "",
    /carbon-fiber sheets/i,
  );

  assert.equal(
    SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_PROFILE.established,
    1993,
  );
  assert.match(
    SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_PROFILE.productsEn?.join(" ") ?? "",
    /60K large-tow/i,
  );
  assert.deepEqual(
    SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_PROFILE.certifications,
    [],
  );

  assert.equal(EXEL_COMPOSITES_NANJING_SUPPLIER_PROFILE.established, null);
  assert.match(
    EXEL_COMPOSITES_NANJING_SUPPLIER_PROFILE.descriptionEn ?? "",
    /consolidated into one in 2022/i,
  );
  assert.doesNotMatch(
    EXEL_COMPOSITES_NANJING_SUPPLIER_PROFILE.processListEn?.join(" ") ?? "",
    /pull-winding|continuous lamination/i,
  );
});

test("maps only product-supported demand keywords into the new supplier pages", () => {
  const guangwei = getSupplierSearchKeywords(
    WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(guangwei.includes("carbon fiber products"));
  assert.ok(guangwei.includes("carbon fiber tube"));
  assert.ok(guangwei.includes("pultruded"));

  const huaheng = getSupplierSearchKeywords(
    YIXING_HUAHENG_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(huaheng.includes("carbon fiber fabric"));
  assert.ok(huaheng.includes("carbon fiber tube"));
  assert.ok(huaheng.includes("carbon fiber sheets"));
  assert.ok(huaheng.includes("carbon fiber tape"));

  const shanghaiPetrochemical = getSupplierSearchKeywords(
    SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(shanghaiPetrochemical.includes("carbon fiber products"));
  assert.ok(!shanghaiPetrochemical.includes("pultruded"));
  assert.ok(!shanghaiPetrochemical.includes("carbon fiber tube"));

  const exel = getSupplierSearchKeywords(
    EXEL_COMPOSITES_NANJING_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(exel.includes("pultruded"));
  assert.ok(exel.includes("fiberglass tube"));
  assert.ok(exel.includes("carbon fiber tube"));
});
