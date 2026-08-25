import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import {
  JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_ID,
  JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_PROFILE,
  JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_SLUG,
} from "./jiangsu-aosheng-composites-supplier-profile";
import {
  JIANGSU_AULLAND_FRP_SUPPLIER_ID,
  JIANGSU_AULLAND_FRP_SUPPLIER_PROFILE,
  JIANGSU_AULLAND_FRP_SUPPLIER_SLUG,
} from "./jiangsu-aulland-frp-supplier-profile";
import {
  JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_ID,
  JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_PROFILE,
  JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_SLUG,
} from "./jiangsu-changhai-fiberglass-supplier-profile";
import {
  JIANGSU_ESONE_PTFE_FABRICS_SUPPLIER_ID,
  JIANGSU_ESONE_PTFE_FABRICS_SUPPLIER_PROFILE,
  JIANGSU_ESONE_PTFE_FABRICS_SUPPLIER_SLUG,
} from "./jiangsu-esone-ptfe-fabrics-supplier-profile";
import {
  JIANGSU_JUNHUA_PEEK_SUPPLIER_ID,
  JIANGSU_JUNHUA_PEEK_SUPPLIER_PROFILE,
  JIANGSU_JUNHUA_PEEK_SUPPLIER_SLUG,
} from "./jiangsu-junhua-peek-supplier-profile";
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
    profile: JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_PROFILE,
    id: JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_ID,
    slug: JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_SLUG,
    identity: /江苏澳盛复合材料|jiangsu aosheng composite|aoshenghi-tech\.com/i,
  },
  {
    profile: JIANGSU_AULLAND_FRP_SUPPLIER_PROFILE,
    id: JIANGSU_AULLAND_FRP_SUPPLIER_ID,
    slug: JIANGSU_AULLAND_FRP_SUPPLIER_SLUG,
    identity: /江苏澳兰德新材料|jiangsu aulland new material|jsald\.com/i,
  },
  {
    profile: JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_PROFILE,
    id: JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_ID,
    slug: JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_SLUG,
    identity: /江苏长海复合材料|jiangsu changhai composite|changhaigfrp\.com/i,
  },
  {
    profile: JIANGSU_ESONE_PTFE_FABRICS_SUPPLIER_PROFILE,
    id: JIANGSU_ESONE_PTFE_FABRICS_SUPPLIER_ID,
    slug: JIANGSU_ESONE_PTFE_FABRICS_SUPPLIER_SLUG,
    identity: /江苏永盛氟塑|jiangsu esone new material|esone\.com/i,
  },
  {
    profile: JIANGSU_JUNHUA_PEEK_SUPPLIER_PROFILE,
    id: JIANGSU_JUNHUA_PEEK_SUPPLIER_ID,
    slug: JIANGSU_JUNHUA_PEEK_SUPPLIER_SLUG,
    identity: /江苏君华特种高分子|jiangsu junhua hpp|chinapeek\.com/i,
  },
] as const;

test("publishes exactly five deduplicated profiles in the ninth CCE batch", () => {
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

test("keeps batch nine unclaimed, source-backed and indexable", () => {
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
    assert.equal(isSupplierProfileIndexable(profile), true);
    assert.deepEqual(profile.certifications, []);
    assert.deepEqual(profile.certificationsEn, []);
    assert.deepEqual(profile.standardsSupported, []);
  }

  for (const profile of [
    JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_PROFILE,
    JIANGSU_ESONE_PTFE_FABRICS_SUPPLIER_PROFILE,
    JIANGSU_JUNHUA_PEEK_SUPPLIER_PROFILE,
  ]) {
    assert.ok(profile.logo?.startsWith("/supplier-assets/"));
    assert.equal(existsSync(`public${profile.logo}`), true);
  }
  assert.equal(JIANGSU_AULLAND_FRP_SUPPLIER_PROFILE.logo, null);
  assert.equal(JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_PROFILE.logo, null);
});

test("preserves legal-entity, subsidiary, material and history boundaries", () => {
  assert.match(
    JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_PROFILE.descriptionEn ?? "",
    /group-sector inquiries[\s\S]*exact legal entity/i,
  );
  assert.doesNotMatch(
    JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_PROFILE.productsEn?.join(" ") ?? "",
    /fishing rods?/i,
  );
  assert.match(
    JIANGSU_JUNHUA_PEEK_SUPPLIER_PROFILE.descriptionEn ?? "",
    /Changzhou Junhang[\s\S]*will manufacture and contract/i,
  );
  assert.match(
    JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_PROFILE.descriptionEn ?? "",
    /Product-specific roving end uses[\s\S]*finished pipe/i,
  );
  assert.equal(JIANGSU_ESONE_PTFE_FABRICS_SUPPLIER_PROFILE.established, 2014);
  assert.match(
    JIANGSU_ESONE_PTFE_FABRICS_SUPPLIER_PROFILE.descriptionEn ?? "",
    /Youngsun predecessor dating to 1990[\s\S]*uses 2014/i,
  );
  assert.match(
    JIANGSU_AULLAND_FRP_SUPPLIER_PROFILE.descriptionEn ?? "",
    /ASTM E84, ABS and ISO 9001 references remain company claims/i,
  );
});

test("injects only measured-demand terms supported by ninth-batch products", () => {
  assert.deepEqual(
    getSupplierSearchKeywords(JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_PROFILE).map(
      ({ phrase }) => phrase,
    ),
    [
      "pultruded",
      "carbon fiber plate",
      "carbon fiber fabric",
      "carbon fiber products",
      "resin infusion",
      "vacuum infusion",
    ],
  );

  assert.deepEqual(
    getSupplierSearchKeywords(JIANGSU_AULLAND_FRP_SUPPLIER_PROFILE).map(
      ({ phrase }) => phrase,
    ),
    [
      "fiberglass panels",
      "fiberglass grating",
      "pultruded",
      "FRP grating",
      "pultruded fiberglass",
      "fiberglass pultruded grating",
      "FRP grating panels",
      "molded FRP grating",
      "fiberglass tube",
    ],
  );

  assert.deepEqual(
    getSupplierSearchKeywords(JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_PROFILE).map(
      ({ phrase }) => phrase,
    ),
    [
      "chopped strand mat",
      "fiberglass cloth",
      "fiberglass panels",
      "fiberglass mat",
      "fiberglass chopped strand mat",
    ],
  );

  const junhua = getSupplierSearchKeywords(
    JIANGSU_JUNHUA_PEEK_SUPPLIER_PROFILE,
  ).map(({ phrase }) => phrase);
  assert.deepEqual(junhua, [
    "carbon fiber sheets",
    "pultruded",
    "carbon fiber plate",
    "carbon fiber panels",
    "carbon fiber products",
  ]);
  assert.ok(!junhua.includes("pultruded fiberglass"));

  assert.deepEqual(
    getSupplierSearchKeywords(JIANGSU_ESONE_PTFE_FABRICS_SUPPLIER_PROFILE).map(
      ({ phrase }) => phrase,
    ),
    ["fiberglass cloth"],
  );
});

test("builds material-specific SEO briefs for the five new pages", () => {
  assert.match(
    buildSupplierSeoBrief(JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_PROFILE).pageTitle,
    /carbon fiber woven fabrics/i,
  );
  assert.match(
    buildSupplierSeoBrief(JIANGSU_AULLAND_FRP_SUPPLIER_PROFILE).pageTitle,
    /FRP Grating/i,
  );
  assert.match(
    buildSupplierSeoBrief(JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_PROFILE).pageTitle,
    /chopped strand mat/i,
  );
  assert.match(
    buildSupplierSeoBrief(JIANGSU_JUNHUA_PEEK_SUPPLIER_PROFILE).pageTitle,
    /PEEK5600G neat PEEK resin/i,
  );
  assert.match(
    buildSupplierSeoBrief(JIANGSU_ESONE_PTFE_FABRICS_SUPPLIER_PROFILE).pageTitle,
    /Fiberglass Fabrics/i,
  );

  const junhuaBrief = buildSupplierSeoBrief(
    JIANGSU_JUNHUA_PEEK_SUPPLIER_PROFILE,
  );
  assert.ok(junhuaBrief.searchKeywords.includes("carbon fiber sheets"));
  assert.ok(!junhuaBrief.searchKeywords.includes("pultruded fiberglass"));
});
