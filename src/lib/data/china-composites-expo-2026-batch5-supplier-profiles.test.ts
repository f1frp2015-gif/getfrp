import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import {
  DONGGUAN_ACTION_COMPOSITES_SUPPLIER_ID,
  DONGGUAN_ACTION_COMPOSITES_SUPPLIER_PROFILE,
  DONGGUAN_ACTION_COMPOSITES_SUPPLIER_SLUG,
} from "./dongguan-action-composites-supplier-profile";
import {
  DONGGUAN_GBOS_LASER_SUPPLIER_ID,
  DONGGUAN_GBOS_LASER_SUPPLIER_PROFILE,
  DONGGUAN_GBOS_LASER_SUPPLIER_SLUG,
} from "./dongguan-gbos-laser-supplier-profile";
import {
  DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_ID,
  DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_PROFILE,
  DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_SLUG,
} from "./dongguan-juli-composite-technology-supplier-profile";
import {
  DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_ID,
  DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_PROFILE,
  DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_SLUG,
} from "./dongguan-pronotek-vacuum-supplier-profile";
import {
  DONGGUAN_TSTAR_COMPOSITES_SUPPLIER_ID,
  DONGGUAN_TSTAR_COMPOSITES_SUPPLIER_PROFILE,
  DONGGUAN_TSTAR_COMPOSITES_SUPPLIER_SLUG,
} from "./dongguan-tstar-composites-supplier-profile";
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
    profile: DONGGUAN_GBOS_LASER_SUPPLIER_PROFILE,
    id: DONGGUAN_GBOS_LASER_SUPPLIER_ID,
    slug: DONGGUAN_GBOS_LASER_SUPPLIER_SLUG,
    identity: /东莞市光博士|dongguan gbos|gboslaser\.cn/i,
  },
  {
    profile: DONGGUAN_TSTAR_COMPOSITES_SUPPLIER_PROFILE,
    id: DONGGUAN_TSTAR_COMPOSITES_SUPPLIER_ID,
    slug: DONGGUAN_TSTAR_COMPOSITES_SUPPLIER_SLUG,
    identity: /东莞天石达|dongguan tstar|tstarco\.com/i,
  },
  {
    profile: DONGGUAN_ACTION_COMPOSITES_SUPPLIER_PROFILE,
    id: DONGGUAN_ACTION_COMPOSITES_SUPPLIER_ID,
    slug: DONGGUAN_ACTION_COMPOSITES_SUPPLIER_SLUG,
    identity: /东莞艾可迅|dongguan action composites|action-composites\.com\.cn/i,
  },
  {
    profile: DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_PROFILE,
    id: DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_ID,
    slug: DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_SLUG,
    identity: /东莞市聚力|dongguan juli|carbonfiber360\.com/i,
  },
  {
    profile: DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_PROFILE,
    id: DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_ID,
    slug: DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_SLUG,
    identity: /东莞市普诺克|dongguan pronotek|pronotek\.com/i,
  },
] as const;

test("publishes exactly five deduplicated profiles in the fifth CCE batch", () => {
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

test("keeps batch five unclaimed, source-backed and indexable", () => {
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
    assert.equal(isSupplierProfileIndexable(profile), true);
  }

  for (const profile of [
    DONGGUAN_GBOS_LASER_SUPPLIER_PROFILE,
    DONGGUAN_TSTAR_COMPOSITES_SUPPLIER_PROFILE,
    DONGGUAN_ACTION_COMPOSITES_SUPPLIER_PROFILE,
    DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_PROFILE,
  ]) {
    assert.ok(profile.logo?.startsWith("/supplier-assets/"));
    assert.equal(existsSync(`public${profile.logo}`), true);
  }

  assert.equal(
    DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_PROFILE.logo,
    "/supplier-assets/dongguan-juli-logo.png",
  );
  assert.match(
    DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_PROFILE.productsServicesSummaryEn ??
      "",
    /stored locally/i,
  );
});

test("preserves China-entity, certificate and product-claim boundaries", () => {
  assert.equal(DONGGUAN_GBOS_LASER_SUPPLIER_PROFILE.established, 2005);
  assert.match(
    DONGGUAN_GBOS_LASER_SUPPLIER_PROFILE.descriptionEn ?? "",
    /not as a manufacturer of carbon fiber/i,
  );
  assert.equal(DONGGUAN_TSTAR_COMPOSITES_SUPPLIER_PROFILE.established, 2012);
  assert.match(
    DONGGUAN_TSTAR_COMPOSITES_SUPPLIER_PROFILE.descriptionEn ?? "",
    /fiberglass fishing product rather than a carbon-fiber fishing rod/i,
  );
  assert.equal(DONGGUAN_ACTION_COMPOSITES_SUPPLIER_PROFILE.established, 2012);
  assert.match(
    DONGGUAN_ACTION_COMPOSITES_SUPPLIER_PROFILE.descriptionEn ?? "",
    /does not automatically transfer another group facility/i,
  );
  assert.equal(DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_PROFILE.established, 2011);
  assert.match(
    DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_PROFILE.descriptionEn ?? "",
    /does not present the name difference as an independently verified corporate rename/i,
  );
  assert.equal(DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_PROFILE.established, 2017);
  assert.match(
    DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_PROFILE.descriptionEn ?? "",
    /does not misstate the Italian brand history/i,
  );

  for (const { profile } of batch) {
    assert.deepEqual(profile.certifications, []);
    assert.deepEqual(profile.certificationsEn, []);
    assert.deepEqual(profile.standardsSupported, []);
  }
});

test("injects only measured-demand keywords supported by actual batch-five products", () => {
  const tstar = getSupplierSearchKeywords(
    DONGGUAN_TSTAR_COMPOSITES_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  for (const phrase of [
    "carbon fiber sheets",
    "carbon fiber tube",
    "carbon fiber plate",
    "fiberglass rod",
    "fiberglass tube",
    "fiberglass fishing rod",
    "fiberglass rebar",
    "pultruded",
  ]) {
    assert.ok(tstar.includes(phrase), phrase);
  }
  assert.ok(!tstar.includes("carbon fiber fishing rod"));

  const juli = getSupplierSearchKeywords(
    DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  for (const phrase of [
    "carbon fiber sheets",
    "carbon fiber tube",
    "carbon fiber plate",
    "fiberglass rod",
    "fiberglass tube",
    "pultruded",
  ]) {
    assert.ok(juli.includes(phrase), phrase);
  }
  assert.ok(!juli.includes("carbon fiber fishing rod"));

  for (const profile of [
    DONGGUAN_GBOS_LASER_SUPPLIER_PROFILE,
    DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_PROFILE,
  ]) {
    assert.deepEqual(getSupplierSearchKeywords(profile), []);
  }

  assert.deepEqual(
    getSupplierSearchKeywords(
      DONGGUAN_ACTION_COMPOSITES_SUPPLIER_PROFILE,
    ).map(({ phrase }) => phrase),
    ["carbon fiber products"],
  );
});

test("builds carbon-tube SEO briefs only for suppliers that actually offer tubes", () => {
  for (const profile of [
    DONGGUAN_TSTAR_COMPOSITES_SUPPLIER_PROFILE,
    DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_PROFILE,
  ]) {
    const brief = buildSupplierSeoBrief(profile);
    assert.equal(brief.topicLabel, "Carbon fiber tubes");
    assert.match(brief.pageTitle, /Carbon fiber tubes/i);
  }

  const action = buildSupplierSeoBrief(
    DONGGUAN_ACTION_COMPOSITES_SUPPLIER_PROFILE,
  );
  assert.doesNotMatch(action.pageTitle, /Carbon Fiber Sheets|Carbon Fiber Tube/i);
});
