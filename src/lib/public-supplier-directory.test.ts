import assert from "node:assert/strict";
import { test } from "node:test";
import { NOAH_COMPOSITES_SUPPLIER_PROFILE } from "./data/noah-composites-supplier-profile";
import { JIUDING_SUPPLIER_PROFILE } from "./data/jiuding-supplier-profile";
import { STRONGFIBRE_SUPPLIER_PROFILE } from "./data/strongfibre-supplier-profile";

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
      "wanhua-chemical",
      "jushi",
      "taishan-fiberglass",
      "zhongfu-shenying",
      "noah-composites",
      "jiangsu-jiuding-new-materials",
      "strongfibre",
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
  const strongfibre = directory.find(
    ({ id }) => id === STRONGFIBRE_SUPPLIER_PROFILE.id,
  );
  assert.equal(strongfibre?.name, "Strongfibre");
  assert.equal(strongfibre?.verified, false);
  assert.equal(strongfibre?.location, "Nantong, Jiangsu, China");
  assert.equal(strongfibre?.logo, "/supplier-assets/strongfibre-logo.png");
  assert.match(strongfibre?.description ?? "", /Strongworld Group/i);
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
