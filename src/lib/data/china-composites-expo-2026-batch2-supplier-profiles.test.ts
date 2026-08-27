import assert from "node:assert/strict";
import { test } from "node:test";
import {
  ADESSO_WUHU_TIANDAO_SUPPLIER_ID,
  ADESSO_WUHU_TIANDAO_SUPPLIER_PROFILE,
  ADESSO_WUHU_TIANDAO_SUPPLIER_SLUG,
} from "./adesso-wuhu-tiandao-supplier-profile";
import {
  ANDAO_MACHINERY_SHANDONG_SUPPLIER_ID,
  ANDAO_MACHINERY_SHANDONG_SUPPLIER_PROFILE,
  ANDAO_MACHINERY_SHANDONG_SUPPLIER_SLUG,
} from "./andao-machinery-shandong-supplier-profile";
import {
  BAODING_VISIGHT_SUPPLIER_ID,
  BAODING_VISIGHT_SUPPLIER_PROFILE,
  BAODING_VISIGHT_SUPPLIER_SLUG,
} from "./baoding-visight-supplier-profile";
import {
  BEIJING_BAIRUIDING_SUPPLIER_ID,
  BEIJING_BAIRUIDING_SUPPLIER_PROFILE,
  BEIJING_BAIRUIDING_SUPPLIER_SLUG,
} from "./beijing-bairuiding-supplier-profile";
import {
  CURATED_SUPPLIER_PROFILES,
  getCuratedSupplierProfile,
  getCuratedSupplierSlugs,
} from "./curated-supplier-profiles";
import {
  IDI_COMPOSITES_SHANGHAI_SUPPLIER_ID,
  IDI_COMPOSITES_SHANGHAI_SUPPLIER_PROFILE,
  IDI_COMPOSITES_SHANGHAI_SUPPLIER_SLUG,
} from "./idi-composites-shanghai-supplier-profile";
import { getSupplierSearchKeywords } from "./supplier-search-keywords";
import { isSupplierProfileIndexable } from "../supplier-indexability";

const batch = [
  {
    profile: ADESSO_WUHU_TIANDAO_SUPPLIER_PROFILE,
    id: ADESSO_WUHU_TIANDAO_SUPPLIER_ID,
    slug: ADESSO_WUHU_TIANDAO_SUPPLIER_SLUG,
    identity: /芜湖天道|wuhu tiandao|adessomaterials\.com/i,
  },
  {
    profile: ANDAO_MACHINERY_SHANDONG_SUPPLIER_PROFILE,
    id: ANDAO_MACHINERY_SHANDONG_SUPPLIER_ID,
    slug: ANDAO_MACHINERY_SHANDONG_SUPPLIER_SLUG,
    identity: /安道机械制造|andao machinery|andaojx\.cn/i,
  },
  {
    profile: BAODING_VISIGHT_SUPPLIER_PROFILE,
    id: BAODING_VISIGHT_SUPPLIER_ID,
    slug: BAODING_VISIGHT_SUPPLIER_SLUG,
    identity: /保定维赛|baoding visight|visight\.com\.cn/i,
  },
  {
    profile: BEIJING_BAIRUIDING_SUPPLIER_PROFILE,
    id: BEIJING_BAIRUIDING_SUPPLIER_ID,
    slug: BEIJING_BAIRUIDING_SUPPLIER_SLUG,
    identity: /北京柏瑞鼎|beijing bairuiding|3dbraiding\.com/i,
  },
  {
    profile: IDI_COMPOSITES_SHANGHAI_SUPPLIER_PROFILE,
    id: IDI_COMPOSITES_SHANGHAI_SUPPLIER_ID,
    slug: IDI_COMPOSITES_SHANGHAI_SUPPLIER_SLUG,
    identity: /艾蒂复合材料|idi composites.*shanghai|idichina\.com/i,
  },
] as const;

test("publishes one deduplicated profile for each second-batch CCE supplier", () => {
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

test("keeps the batch unclaimed, source-backed and indexable", () => {
  for (const { profile } of batch) {
    assert.equal(profile.profilePublished, true);
    assert.equal(profile.verified, false);
    assert.equal(profile.enterpriseId, null);
    assert.ok(profile.nameEn?.trim());
    assert.match(profile.website ?? "", /^https?:\/\//);
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
        profile.website
          ? new URL(url).hostname.replace(/^www\./, "") ===
            new URL(profile.website).hostname.replace(/^www\./, "")
          : false,
      ),
    );
    assert.equal(isSupplierProfileIndexable(profile), true);
  }

  for (const profile of [
    ADESSO_WUHU_TIANDAO_SUPPLIER_PROFILE,
    ANDAO_MACHINERY_SHANDONG_SUPPLIER_PROFILE,
    BAODING_VISIGHT_SUPPLIER_PROFILE,
    IDI_COMPOSITES_SHANGHAI_SUPPLIER_PROFILE,
  ]) {
    assert.equal(profile.exportReady, true);
    assert.ok(profile.logo?.startsWith("/supplier-assets/"));
  }

  assert.equal(BEIJING_BAIRUIDING_SUPPLIER_PROFILE.exportReady, false);
  assert.equal(
    BEIJING_BAIRUIDING_SUPPLIER_PROFILE.logo,
    "/supplier-assets/beijing-bairuiding-logo.png",
  );
  assert.match(
    BEIJING_BAIRUIDING_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /stored locally/i,
  );
});

test("preserves the reviewed legal-identity and evidence boundaries", () => {
  assert.equal(ADESSO_WUHU_TIANDAO_SUPPLIER_PROFILE.established, null);
  assert.match(
    ADESSO_WUHU_TIANDAO_SUPPLIER_PROFILE.descriptionEn ?? "",
    /production base/i,
  );
  assert.match(
    ADESSO_WUHU_TIANDAO_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /certificate-name error/i,
  );

  assert.equal(ANDAO_MACHINERY_SHANDONG_SUPPLIER_PROFILE.category, "equipment");
  assert.match(
    ANDAO_MACHINERY_SHANDONG_SUPPLIER_PROFILE.productsEn?.join(" ") ?? "",
    /carbon-fiber.*winders/i,
  );

  assert.equal(BAODING_VISIGHT_SUPPLIER_PROFILE.established, 2011);
  assert.deepEqual(BAODING_VISIGHT_SUPPLIER_PROFILE.certifications, []);
  assert.match(
    BAODING_VISIGHT_SUPPLIER_PROFILE.productsEn?.join(" ") ?? "",
    /PVC.*PET.*PMI.*balsa/i,
  );

  assert.deepEqual(BEIJING_BAIRUIDING_SUPPLIER_PROFILE.certifications, []);
  assert.match(
    BEIJING_BAIRUIDING_SUPPLIER_PROFILE.processListEn?.join(" ") ?? "",
    /simulation.*performance testing/i,
  );

  assert.equal(IDI_COMPOSITES_SHANGHAI_SUPPLIER_PROFILE.established, null);
  assert.deepEqual(IDI_COMPOSITES_SHANGHAI_SUPPLIER_PROFILE.certifications, []);
  assert.match(
    IDI_COMPOSITES_SHANGHAI_SUPPLIER_PROFILE.descriptionEn ?? "",
    /confirm the contracting and manufacturing entity/i,
  );
});

test("maps only product-supported measured-demand keywords into batch two", () => {
  const adesso = getSupplierSearchKeywords(
    ADESSO_WUHU_TIANDAO_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(!adesso.includes("carbon fiber products"));

  const andao = getSupplierSearchKeywords(
    ANDAO_MACHINERY_SHANDONG_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.deepEqual(andao, []);

  const visight = getSupplierSearchKeywords(
    BAODING_VISIGHT_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(visight.includes("resin infusion"));
  assert.ok(visight.includes("vacuum infusion"));

  const bairuiding = getSupplierSearchKeywords(
    BEIJING_BAIRUIDING_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(bairuiding.includes("carbon fiber products"));
  assert.ok(!bairuiding.includes("carbon fiber tube"));

  const idi = getSupplierSearchKeywords(
    IDI_COMPOSITES_SHANGHAI_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.ok(idi.includes("bulk molding compound"));
  assert.ok(idi.includes("BMC material"));
  assert.ok(idi.includes("sheet molding compound"));
});
