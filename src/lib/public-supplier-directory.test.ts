import assert from "node:assert/strict";
import { test } from "node:test";
import { AOC_SUPPLIER_PROFILE } from "./data/aoc-supplier-profile";
import { JUFA_SUPPLIER_PROFILE } from "./data/jufa-supplier-profile";
import { NOAH_COMPOSITES_SUPPLIER_PROFILE } from "./data/noah-composites-supplier-profile";
import { JIUDING_SUPPLIER_PROFILE } from "./data/jiuding-supplier-profile";
import { CROTTI_SUPPLIER_PROFILE } from "./data/crotti-supplier-profile";
import { SPARE_COMPOSITES_SUPPLIER_PROFILE } from "./data/spare-composites-supplier-profile";
import { STRONGFIBRE_SUPPLIER_PROFILE } from "./data/strongfibre-supplier-profile";
import { WELLS_WAM_SUPPLIER_PROFILE } from "./data/wells-wam-supplier-profile";

process.env.DATABASE_URL ??= "postgresql://user:pass@localhost/getfrp-test";

async function loadDirectory() {
  return import("./public-supplier-directory");
}

test("adds every published Git-backed profile when the database is empty", async () => {
  const { mergePublicSupplierDirectory } = await loadDirectory();
  const directory = mergePublicSupplierDirectory([], "en");

  assert.deepEqual(
    new Set(directory.map(({ slug }) => slug)),
    new Set([
      "aoc",
      "wanhua-chemical",
      "jushi",
      "taishan-fiberglass",
      "zhongfu-shenying",
      "noah-composites",
      "jiangsu-jiuding-new-materials",
      "jufa-new-material",
      "shanghai-crotti",
      "strongfibre",
      "nanjing-spare-composites",
      "wells-advanced-materials",
    ]),
  );
  assert.match(
    directory.find(({ id }) => id === NOAH_COMPOSITES_SUPPLIER_PROFILE.id)
      ?.description ?? "",
    /Jin Hong Company/,
  );
  assert.equal(
    directory.filter(({ name }) => name.toLowerCase().includes("noah"))[0]
      ?.slug,
    "noah-composites",
  );
  const jufa = directory.find(({ id }) => id === JUFA_SUPPLIER_PROFILE.id);
  assert.equal(jufa?.logo, "/supplier-assets/jufa-logo.png");
  assert.match(jufa?.products.join(" ") ?? "", /pultrusion/i);
  assert.match(jufa?.description ?? "", /polyurethane-modified resin/i);
  const crotti = directory.find(
    ({ id }) => id === CROTTI_SUPPLIER_PROFILE.id,
  );
  assert.equal(crotti?.logo, "/supplier-assets/crotti-logo.png");
  assert.match(crotti?.products.join(" ") ?? "", /TICO 55, 65, 72/);
  assert.match(crotti?.processList.join(" ") ?? "", /pultrusion/i);
  const strongfibre = directory.find(
    ({ id }) => id === STRONGFIBRE_SUPPLIER_PROFILE.id,
  );
  assert.equal(strongfibre?.name, "Strongfibre");
  assert.equal(strongfibre?.verified, false);
  assert.equal(strongfibre?.location, "Nantong, Jiangsu, China");
  assert.equal(strongfibre?.logo, "/supplier-assets/strongfibre-logo.png");
  assert.match(strongfibre?.description ?? "", /Strongworld Group/i);
  const spare = directory.find(
    ({ id }) => id === SPARE_COMPOSITES_SUPPLIER_PROFILE.id,
  );
  assert.equal(spare?.logo, "/supplier-assets/spare-composites-logo.png");
  assert.match(spare?.products.join(" ") ?? "", /grating/i);
  assert.match(spare?.processList.join(" ") ?? "", /pultrusion/i);
  const wellsWam = directory.find(
    ({ id }) => id === WELLS_WAM_SUPPLIER_PROFILE.id,
  );
  assert.equal(wellsWam?.slug, "wells-advanced-materials");
  assert.equal(wellsWam?.logo, "/supplier-assets/wells-wam-logo.png");
  assert.match(wellsWam?.description ?? "", /stock code 301555/i);
  const aoc = directory.find(({ id }) => id === AOC_SUPPLIER_PROFILE.id);
  assert.equal(aoc?.slug, "aoc");
  assert.equal(aoc?.location, "Nanjing, Jiangsu, China");
  assert.equal(aoc?.logo, "/supplier-assets/aoc-logo-white.svg");
  assert.match(aoc?.description ?? "", /Jinling AOC Formulations/i);
});

test("keeps one supplier and preserves database identity and trust state", async () => {
  const { mergePublicSupplierDirectory } = await loadDirectory();
  const databaseProfile = {
    ...NOAH_COMPOSITES_SUPPLIER_PROFILE,
    nameEn: "Database Noah",
    verified: true,
  };
  const directory = mergePublicSupplierDirectory(
    [
      {
        supplier: databaseProfile,
        enterpriseLogo: null,
        enterpriseWebsite: null,
        employeeCount: null,
        annualRevenue: null,
      },
    ],
    "en",
  );
  const noahProfiles = directory.filter(
    ({ id }) => id === NOAH_COMPOSITES_SUPPLIER_PROFILE.id,
  );

  assert.equal(noahProfiles.length, 1);
  assert.equal(noahProfiles[0]?.name, "Database Noah");
  assert.equal(noahProfiles[0]?.verified, true);
  assert.equal(
    noahProfiles[0]?.website,
    NOAH_COMPOSITES_SUPPLIER_PROFILE.website,
  );
  assert.equal(noahProfiles[0]?.logo, NOAH_COMPOSITES_SUPPLIER_PROFILE.logo);
});

test("enriches an unclaimed Jiuding database seed without changing its identity", async () => {
  const { mergePublicSupplierDirectory } = await loadDirectory();
  const directory = mergePublicSupplierDirectory(
    [
      {
        supplier: {
          ...JIUDING_SUPPLIER_PROFILE,
          nameEn: "Database Jiuding Legal Name",
          locationEn: "Dongta, Jiangsu, China",
          descriptionEn: "Sparse seed description",
          website: null,
          logo: null,
          ecatalogs: [],
          verified: true,
        },
        enterpriseLogo: null,
        enterpriseWebsite: null,
        employeeCount: null,
        annualRevenue: null,
      },
    ],
    "en",
  );
  const jiuding = directory.find(({ id }) => id === JIUDING_SUPPLIER_PROFILE.id);

  assert.equal(jiuding?.name, "Database Jiuding Legal Name");
  assert.equal(jiuding?.verified, true);
  assert.equal(jiuding?.location, "Rugao, Jiangsu, China");
  assert.equal(jiuding?.website, "https://www.jiudingcomposite.com/");
  assert.equal(jiuding?.logo, "/supplier-assets/jiuding-logo.png");
  assert.match(jiuding?.description ?? "", /stock code 002201/i);
});

test("does not override a supplier-managed claimed Jiuding profile", async () => {
  const { mergePublicSupplierDirectory } = await loadDirectory();
  const directory = mergePublicSupplierDirectory(
    [
      {
        supplier: {
          ...JIUDING_SUPPLIER_PROFILE,
          enterpriseId: "ent-claimed-jiuding",
          locationEn: "Supplier-managed location",
          descriptionEn: "Supplier-managed description",
          website: "https://supplier-managed.example/",
          logo: "/supplier-managed-logo.png",
        },
        enterpriseLogo: null,
        enterpriseWebsite: null,
        employeeCount: null,
        annualRevenue: null,
      },
    ],
    "en",
  );
  const jiuding = directory.find(({ id }) => id === JIUDING_SUPPLIER_PROFILE.id);

  assert.equal(jiuding?.location, "Supplier-managed location");
  assert.equal(jiuding?.description, "Supplier-managed description");
  assert.equal(jiuding?.website, "https://supplier-managed.example/");
  assert.equal(jiuding?.logo, "/supplier-managed-logo.png");
});

test("does not add a curated duplicate when a database row owns its slug", async () => {
  const { mergePublicSupplierDirectory } = await loadDirectory();
  const directory = mergePublicSupplierDirectory(
    [
      {
        supplier: {
          ...NOAH_COMPOSITES_SUPPLIER_PROFILE,
          id: "sup-database-noah",
          nameEn: "Database-owned Noah slug",
        },
        enterpriseLogo: null,
        enterpriseWebsite: null,
        employeeCount: null,
        annualRevenue: null,
      },
    ],
    "en",
  );

  assert.equal(
    directory.filter(({ slug }) => slug === "noah-composites").length,
    1,
  );
  assert.equal(
    directory.find(({ slug }) => slug === "noah-composites")?.id,
    "sup-database-noah",
  );
});
