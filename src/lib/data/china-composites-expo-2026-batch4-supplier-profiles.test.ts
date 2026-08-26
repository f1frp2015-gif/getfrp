import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import {
  CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_ID,
  CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_PROFILE,
  CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_SLUG,
} from "./changzhou-tongchuang-composite-materials-supplier-profile";
import {
  CHANGZHOU_TOPWEAVING_SUPPLIER_ID,
  CHANGZHOU_TOPWEAVING_SUPPLIER_PROFILE,
  CHANGZHOU_TOPWEAVING_SUPPLIER_SLUG,
} from "./changzhou-topweaving-supplier-profile";
import {
  CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_ID,
  CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_PROFILE,
  CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_SLUG,
} from "./changzhou-yueteng-machinery-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  DEZHOU_HAILIDA_MOLDING_SUPPLIER_ID,
  DEZHOU_HAILIDA_MOLDING_SUPPLIER_PROFILE,
  DEZHOU_HAILIDA_MOLDING_SUPPLIER_SLUG,
} from "./dezhou-hailida-molding-supplier-profile";
import {
  DIAB_TECHNOLOGY_CHANGSHU_SUPPLIER_ID,
  DIAB_TECHNOLOGY_CHANGSHU_SUPPLIER_PROFILE,
  DIAB_TECHNOLOGY_CHANGSHU_SUPPLIER_SLUG,
} from "./diab-technology-changshu-supplier-profile";
import { getSupplierSearchKeywords } from "./supplier-search-keywords";
import { buildSupplierSeoBrief } from "./supplier-seo-briefs";
import { isSupplierProfileIndexable } from "../supplier-indexability";

const batch = [
  {
    profile: CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_PROFILE,
    id: CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_ID,
    slug: CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_SLUG,
    identity: /常州市同创复合材料|changzhou tongchuang composite|tc-smc\.com/i,
  },
  {
    profile: CHANGZHOU_TOPWEAVING_SUPPLIER_PROFILE,
    id: CHANGZHOU_TOPWEAVING_SUPPLIER_ID,
    slug: CHANGZHOU_TOPWEAVING_SUPPLIER_SLUG,
    identity: /常州同维佳业|changzhou topweaving|topweaving\.com\.cn/i,
  },
  {
    profile: CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_PROFILE,
    id: CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_ID,
    slug: CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_SLUG,
    identity: /常州市悦腾机械|changzhou yueteng machinery|czyueteng\.com/i,
  },
  {
    profile: DIAB_TECHNOLOGY_CHANGSHU_SUPPLIER_PROFILE,
    id: DIAB_TECHNOLOGY_CHANGSHU_SUPPLIER_ID,
    slug: DIAB_TECHNOLOGY_CHANGSHU_SUPPLIER_SLUG,
    identity: /戴铂科技.*常熟|diab technology.*changshu|diabgroup\.com/i,
  },
  {
    profile: DEZHOU_HAILIDA_MOLDING_SUPPLIER_PROFILE,
    id: DEZHOU_HAILIDA_MOLDING_SUPPLIER_ID,
    slug: DEZHOU_HAILIDA_MOLDING_SUPPLIER_SLUG,
    identity: /德州海力达模塑|dezhou hailida molding|hailidacn\.com/i,
  },
] as const;

test("publishes exactly five deduplicated profiles in the fourth CCE batch", () => {
  assert.equal(batch.length, 5);
  assert.equal(CURATED_SUPPLIER_PROFILES.length, 173);

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

test("keeps all five profiles unclaimed, source-backed, logo-local and indexable", () => {
  for (const { profile } of batch) {
    assert.equal(profile.profilePublished, true);
    assert.equal(profile.verified, false);
    assert.equal(profile.enterpriseId, null);
    assert.ok(profile.nameEn?.trim());
    assert.match(profile.website ?? "", /^https?:\/\//);
    assert.ok((profile.productsEn?.length ?? 0) >= 8);
    assert.ok((profile.processListEn?.length ?? 0) >= 8);
    assert.ok((profile.descriptionEn?.length ?? 0) >= 500);
    assert.ok((profile.productsServicesSummaryEn?.length ?? 0) >= 1_000);
    assert.ok(profile.logo?.startsWith("/supplier-assets/"));
    assert.equal(existsSync(`public${profile.logo}`), true);
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
});

test("preserves legal-entity, certification and website-security boundaries", () => {
  assert.equal(
    CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_PROFILE.established,
    1989,
  );
  assert.match(
    CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_PROFILE.productsServicesSummaryEn ??
      "",
    /HTTP.*HTTPS/i,
  );
  assert.equal(CHANGZHOU_TOPWEAVING_SUPPLIER_PROFILE.established, 2008);
  assert.match(
    CHANGZHOU_TOPWEAVING_SUPPLIER_PROFILE.descriptionEn ?? "",
    /ballistic or medical/i,
  );
  assert.equal(CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_PROFILE.established, null);
  assert.match(
    CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_PROFILE.descriptionEn ?? "",
    /equipment supplier/i,
  );
  assert.equal(DIAB_TECHNOLOGY_CHANGSHU_SUPPLIER_PROFILE.established, null);
  assert.match(
    DIAB_TECHNOLOGY_CHANGSHU_SUPPLIER_PROFILE.descriptionEn ?? "",
    /does not transfer every group approval/i,
  );
  assert.equal(DEZHOU_HAILIDA_MOLDING_SUPPLIER_PROFILE.established, null);
  assert.match(
    DEZHOU_HAILIDA_MOLDING_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /HTTP-only/i,
  );

  for (const { profile } of batch) {
    assert.deepEqual(profile.certifications, []);
    assert.deepEqual(profile.certificationsEn, []);
    assert.deepEqual(profile.standardsSupported, []);
  }
});

test("injects only product-supported measured-demand keywords into batch four", () => {
  const tongchuang = getSupplierSearchKeywords(
    CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(tongchuang.includes("bulk molding compound"));
  assert.ok(tongchuang.includes("sheet molding compound"));
  assert.ok(tongchuang.includes("BMC material"));
  assert.ok(!tongchuang.includes("fiberglass panels"));

  const topweaving = getSupplierSearchKeywords(
    CHANGZHOU_TOPWEAVING_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(topweaving.includes("fiberglass cloth"));
  assert.ok(topweaving.includes("carbon fiber fabric"));
  assert.ok(!topweaving.includes("fiberglass roll"));
  assert.ok(!topweaving.includes("vacuum infusion"));

  const diab = getSupplierSearchKeywords(
    DIAB_TECHNOLOGY_CHANGSHU_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.deepEqual(diab, ["resin infusion", "vacuum infusion"]);

  for (const profile of [
    CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_PROFILE,
    DEZHOU_HAILIDA_MOLDING_SUPPLIER_PROFILE,
  ]) {
    assert.deepEqual(getSupplierSearchKeywords(profile), []);
  }
});

test("uses actual high-demand products instead of confusing compounds with molds", () => {
  const tongchuang = buildSupplierSeoBrief(
    CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_PROFILE,
  );
  assert.equal(tongchuang.topicLabel, "SMC sheet molding compounds");
  assert.match(tongchuang.pageTitle, /SMC sheet molding compounds/i);
  assert.doesNotMatch(tongchuang.pageTitle, /Compression Molds/i);

  const topweaving = buildSupplierSeoBrief(
    CHANGZHOU_TOPWEAVING_SUPPLIER_PROFILE,
  );
  assert.equal(topweaving.topicLabel, "Fiberglass Fabrics");
  assert.match(topweaving.pageTitle, /Fiberglass Fabrics/i);
});
