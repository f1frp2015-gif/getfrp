import assert from "node:assert/strict";
import { test } from "node:test";
import {
  CHANGCHUN_BOCHAO_SUPPLIER_ID,
  CHANGCHUN_BOCHAO_SUPPLIER_PROFILE,
  CHANGCHUN_BOCHAO_SUPPLIER_SLUG,
} from "./changchun-bochao-supplier-profile";
import {
  CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_ID,
  CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_PROFILE,
  CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_SLUG,
} from "./changchun-changguang-high-performance-supplier-profile";
import {
  CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_ID,
  CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_PROFILE,
  CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_SLUG,
} from "./changshu-dongyu-fiberglass-supplier-profile";
import {
  CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_ID,
  CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_PROFILE,
  CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_SLUG,
} from "./changshu-jiangnan-fiberglass-supplier-profile";
import {
  CHANGZHOU_HUAKE_POLYMERS_SUPPLIER_ID,
  CHANGZHOU_HUAKE_POLYMERS_SUPPLIER_PROFILE,
  CHANGZHOU_HUAKE_POLYMERS_SUPPLIER_SLUG,
} from "./changzhou-huake-polymers-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import { getSupplierSearchKeywords } from "./supplier-search-keywords";
import { isSupplierProfileIndexable } from "../supplier-indexability";

const batch = [
  {
    profile: CHANGCHUN_BOCHAO_SUPPLIER_PROFILE,
    id: CHANGCHUN_BOCHAO_SUPPLIER_ID,
    slug: CHANGCHUN_BOCHAO_SUPPLIER_SLUG,
    identity: /长春博超|changchun bochao|bochaoautoparts\.com/i,
  },
  {
    profile: CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_PROFILE,
    id: CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_ID,
    slug: CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_SLUG,
    identity: /长春长光高性能|changchun changguang advanced|cccgam\.net/i,
  },
  {
    profile: CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_PROFILE,
    id: CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_ID,
    slug: CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_SLUG,
    identity: /常熟江南玻璃纤维|changshu jiangnan fiberglass|jnglassfiber\.com/i,
  },
  {
    profile: CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_PROFILE,
    id: CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_ID,
    slug: CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_SLUG,
    identity: /常熟市东宇绝缘|changshu dongyu insulated|dongyufiberglass\.com/i,
  },
  {
    profile: CHANGZHOU_HUAKE_POLYMERS_SUPPLIER_PROFILE,
    id: CHANGZHOU_HUAKE_POLYMERS_SUPPLIER_ID,
    slug: CHANGZHOU_HUAKE_POLYMERS_SUPPLIER_SLUG,
    identity: /常州华科聚合物|changzhou huake polymers|xsresin\.com/i,
  },
] as const;

test("publishes exactly five deduplicated profiles in the third CCE batch", () => {
  assert.equal(batch.length, 5);
  assert.equal(CURATED_SUPPLIER_PROFILES.length, 168);

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

test("keeps all five profiles unclaimed, source-backed and indexable", () => {
  for (const { profile } of batch) {
    assert.equal(profile.profilePublished, true);
    assert.equal(profile.verified, false);
    assert.equal(profile.enterpriseId, null);
    assert.ok(profile.nameEn?.trim());
    assert.match(profile.website ?? "", /^https:\/\//);
    assert.ok((profile.productsEn?.length ?? 0) >= 6);
    assert.ok((profile.processListEn?.length ?? 0) >= 6);
    assert.ok((profile.descriptionEn?.length ?? 0) >= 500);
    assert.ok((profile.productsServicesSummaryEn?.length ?? 0) >= 1_100);
    assert.ok(profile.logo?.startsWith("/supplier-assets/"));
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
    assert.equal(isSupplierProfileIndexable(profile), true);
  }

  assert.equal(
    CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_PROFILE.exportReady,
    false,
  );
  for (const profile of [
    CHANGCHUN_BOCHAO_SUPPLIER_PROFILE,
    CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_PROFILE,
    CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_PROFILE,
    CHANGZHOU_HUAKE_POLYMERS_SUPPLIER_PROFILE,
  ]) {
    assert.equal(profile.exportReady, true);
  }
});

test("preserves legal-identity, certification and website-security boundaries", () => {
  assert.equal(CHANGCHUN_BOCHAO_SUPPLIER_PROFILE.established, 2006);
  assert.match(
    CHANGCHUN_BOCHAO_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /older page.*Golf Road/i,
  );

  assert.equal(
    CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_PROFILE.established,
    2025,
  );
  assert.match(
    CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_PROFILE.descriptionEn ?? "",
    /does not transfer every defense qualification/i,
  );
  assert.match(
    CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /spam text/i,
  );

  assert.equal(CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_PROFILE.established, null);
  assert.match(
    CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_PROFILE.descriptionEn ?? "",
    /1956.*1992/i,
  );

  assert.equal(CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_PROFILE.established, 1996);
  assert.match(
    CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /HTTP 429/i,
  );

  assert.equal(CHANGZHOU_HUAKE_POLYMERS_SUPPLIER_PROFILE.established, 2001);
  assert.match(
    CHANGZHOU_HUAKE_POLYMERS_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /hazardous-chemicals notice/i,
  );

  for (const { profile } of batch) {
    assert.deepEqual(profile.certifications, []);
    assert.deepEqual(profile.certificationsEn, []);
  }
});

test("injects only product-supported measured-demand keywords into batch three", () => {
  const bochao = getSupplierSearchKeywords(CHANGCHUN_BOCHAO_SUPPLIER_PROFILE).map(
    ({ phrase }) => phrase,
  );
  assert.deepEqual(bochao, []);

  const changguang = getSupplierSearchKeywords(
    CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(changguang.includes("carbon fiber tube"));
  assert.ok(changguang.includes("custom carbon fiber tubing"));
  assert.ok(changguang.includes("carbon fiber products"));
  assert.ok(!changguang.includes("carbon fiber plate"));

  const jiangnan = getSupplierSearchKeywords(
    CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(jiangnan.includes("fiberglass cloth"));
  assert.ok(jiangnan.includes("fiberglass roll"));
  assert.ok(jiangnan.includes("fiberglass cloth roll"));
  assert.ok(!jiangnan.includes("chopped strand mat"));

  const dongyu = getSupplierSearchKeywords(
    CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(dongyu.includes("chopped strand mat"));
  assert.ok(dongyu.includes("fiberglass chopped strand mat"));
  assert.ok(dongyu.includes("fiberglass mat"));
  assert.ok(dongyu.includes("fiberglass cloth"));
  assert.ok(dongyu.includes("carbon fiber fabric"));

  const huake = getSupplierSearchKeywords(
    CHANGZHOU_HUAKE_POLYMERS_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.deepEqual(huake, ["resin infusion", "vacuum infusion"]);
  assert.ok(!huake.includes("FRP pipe"));
  assert.ok(!huake.includes("sheet molding compound"));
});
