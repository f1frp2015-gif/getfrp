import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import {
  GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_ID,
  GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_PROFILE,
  GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_SLUG,
} from "./glotech-electronics-suzhou-supplier-profile";
import {
  GPM_MACHINERY_SHANGHAI_SUPPLIER_ID,
  GPM_MACHINERY_SHANGHAI_SUPPLIER_PROFILE,
  GPM_MACHINERY_SHANGHAI_SUPPLIER_SLUG,
} from "./gpm-machinery-shanghai-supplier-profile";
import {
  HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_ID,
  HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_PROFILE,
  HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_SLUG,
} from "./hangzhou-fujikura-rubber-supplier-profile";
import {
  HANGZHOU_HOLYCORE_SUPPLIER_ID,
  HANGZHOU_HOLYCORE_SUPPLIER_PROFILE,
  HANGZHOU_HOLYCORE_SUPPLIER_SLUG,
} from "./hangzhou-holycore-supplier-profile";
import {
  HANGZHOU_IECHO_SUPPLIER_ID,
  HANGZHOU_IECHO_SUPPLIER_PROFILE,
  HANGZHOU_IECHO_SUPPLIER_SLUG,
} from "./hangzhou-iecho-supplier-profile";
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
    profile: GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_PROFILE,
    id: GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_ID,
    slug: GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_SLUG,
    identity: /德宏电子（苏州）|glotech electronics \(suzhou\)|glotechgf\.com/i,
  },
  {
    profile: GPM_MACHINERY_SHANGHAI_SUPPLIER_PROFILE,
    id: GPM_MACHINERY_SHANGHAI_SUPPLIER_ID,
    slug: GPM_MACHINERY_SHANGHAI_SUPPLIER_SLUG,
    identity: /国塑机械（上海）|gpm machinery \(shanghai\)|gpmplas\.com/i,
  },
  {
    profile: HANGZHOU_HOLYCORE_SUPPLIER_PROFILE,
    id: HANGZHOU_HOLYCORE_SUPPLIER_ID,
    slug: HANGZHOU_HOLYCORE_SUPPLIER_SLUG,
    identity: /杭州华聚复合材料|hangzhou holycore|holycore\.com/i,
  },
  {
    profile: HANGZHOU_IECHO_SUPPLIER_PROFILE,
    id: HANGZHOU_IECHO_SUPPLIER_ID,
    slug: HANGZHOU_IECHO_SUPPLIER_SLUG,
    identity: /杭州爱科科技|hangzhou iecho|iechocutter\.com/i,
  },
  {
    profile: HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_PROFILE,
    id: HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_ID,
    slug: HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_SLUG,
    identity: /杭州藤仓橡胶|hangzhou fujikura rubber|fujikuracomposites\.jp/i,
  },
] as const;

test("publishes exactly five deduplicated profiles in the seventh CCE batch", () => {
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

test("keeps batch seven unclaimed, source-backed and indexable", () => {
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

test("preserves Suzhou, equipment and Fujikura group boundaries", () => {
  assert.match(
    GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_PROFILE.descriptionEn ?? "",
    /Taiwan-based Deyu Composite[\s\S]*not assigned to Glotech Electronics \(Suzhou\)/i,
  );
  assert.doesNotMatch(
    GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_PROFILE.productsEn?.join(" ") ?? "",
    /LPG|CNG|pressure vessel/i,
  );

  for (const profile of [
    GPM_MACHINERY_SHANGHAI_SUPPLIER_PROFILE,
    HANGZHOU_IECHO_SUPPLIER_PROFILE,
  ]) {
    assert.equal(profile.category, "equipment");
    assert.match(
      profile.descriptionEn ?? "",
      /equipment[\s\S]*no (?:carbon-fiber-material|carbon-fiber, fiberglass|carbon-fiber)/i,
    );
    assert.deepEqual(getSupplierSearchKeywords(profile), []);
  }

  assert.equal(HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_PROFILE.category, "distributor");
  assert.match(
    HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_PROFILE.descriptionEn ?? "",
    /do not prove[\s\S]*manufactured at the Hangzhou plant/i,
  );
  assert.match(
    HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /China inquiry contact does not make it China-made/i,
  );

  for (const { profile } of batch) {
    assert.deepEqual(profile.certifications, []);
    assert.deepEqual(profile.certificationsEn, []);
    assert.deepEqual(profile.standardsSupported, []);
  }
});

test("injects only measured-demand terms supported by seventh-batch products", () => {
  assert.deepEqual(
    getSupplierSearchKeywords(
      GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_PROFILE,
    ).map(({ phrase }) => phrase),
    ["fiberglass cloth"],
  );
  assert.deepEqual(
    getSupplierSearchKeywords(HANGZHOU_HOLYCORE_SUPPLIER_PROFILE).map(
      ({ phrase }) => phrase,
    ),
    ["fiberglass sheets", "fiberglass panels"],
  );
  assert.deepEqual(
    getSupplierSearchKeywords(
      HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_PROFILE,
    ).map(({ phrase }) => phrase),
    ["carbon fiber products"],
  );
});

test("builds product-specific SEO briefs without equipment material drift", () => {
  const glotech = buildSupplierSeoBrief(
    GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_PROFILE,
  );
  assert.match(glotech.pageTitle, /fiberglass cloth/i);

  const holycore = buildSupplierSeoBrief(HANGZHOU_HOLYCORE_SUPPLIER_PROFILE);
  assert.match(holycore.pageTitle, /FRP Sandwich Panels/i);
  assert.ok(holycore.searchKeywords.includes("fiberglass sheets"));

  for (const profile of [
    GPM_MACHINERY_SHANGHAI_SUPPLIER_PROFILE,
    HANGZHOU_IECHO_SUPPLIER_PROFILE,
  ]) {
    const brief = buildSupplierSeoBrief(profile);
    assert.doesNotMatch(
      brief.pageTitle,
      /Carbon Fiber Sheets|Carbon Fiber Products|Fiberglass Sheets/i,
    );
  }
});
