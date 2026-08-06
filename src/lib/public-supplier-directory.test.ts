import assert from "node:assert/strict";
import { test } from "node:test";
import { AOC_SUPPLIER_PROFILE } from "./data/aoc-supplier-profile";
import { ANJIE_SUPPLIER_PROFILE } from "./data/anjie-supplier-profile";
import { HORSE_CONSTRUCTION_SUPPLIER_PROFILE } from "./data/horse-construction-supplier-profile";
import { JUFA_SUPPLIER_PROFILE } from "./data/jufa-supplier-profile";
import { NOAH_COMPOSITES_SUPPLIER_PROFILE } from "./data/noah-composites-supplier-profile";
import { SINO_COMPOSITE_SUPPLIER_PROFILE } from "./data/sino-composite-supplier-profile";
import { JIUDING_SUPPLIER_PROFILE } from "./data/jiuding-supplier-profile";
import { MAXTONE_SUPPLIER_PROFILE } from "./data/maxtone-supplier-profile";
import { CROTTI_SUPPLIER_PROFILE } from "./data/crotti-supplier-profile";
import { PULWELL_SUPPLIER_PROFILE } from "./data/pulwell-supplier-profile";
import { RUNSING_SUPPLIER_PROFILE } from "./data/runsing-supplier-profile";
import { SHENGLI_LIMITED_SUPPLIER_PROFILE } from "./data/shengli-limited-supplier-profile";
import { SPARE_COMPOSITES_SUPPLIER_PROFILE } from "./data/spare-composites-supplier-profile";
import { STRONGFIBRE_SUPPLIER_PROFILE } from "./data/strongfibre-supplier-profile";
import { TENGJUN_FRP_SUPPLIER_PROFILE } from "./data/tengjun-frp-supplier-profile";
import { WELLS_WAM_SUPPLIER_PROFILE } from "./data/wells-wam-supplier-profile";
import { SINAUVA_SUPPLIER_PROFILE } from "./data/sinauva-composites-supplier-profile";
import { TECHSTORM_SUPPLIER_PROFILE } from "./data/techstorm-supplier-profile";
import { XIAMEN_LFT_SUPPLIER_PROFILE } from "./data/xiamen-lft-supplier-profile";

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
      "haining-anjie-composite-materials",
      "shanghai-horse-construction",
      "wanhua-chemical",
      "jushi",
      "taishan-fiberglass",
      "zhongfu-shenying",
      "noah-composites",
      "pulwell-composites",
      "shandong-runsing-composites",
      "shengli-limited",
      "jiangsu-jiuding-new-materials",
      "yangzhou-maxtone-composite",
      "jufa-new-material",
      "shanghai-crotti",
      "strongfibre",
      "nanjing-spare-composites",
      "wells-advanced-materials",
      "sinauva-composites",
      "techstorm-advanced-material",
      "hebei-tengjun-frp",
      "sino-composite-structures",
      "xiamen-lft-composite-plastic",
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
  const sinauva = directory.find(
    ({ id }) => id === SINAUVA_SUPPLIER_PROFILE.id,
  );
  assert.equal(sinauva?.slug, "sinauva-composites");
  assert.equal(
    sinauva?.logo,
    "/supplier-assets/sinauva-composites-logo.webp",
  );
  assert.match(sinauva?.products.join(" ") ?? "", /sandwich panels/i);
  assert.match(sinauva?.description ?? "", /associated factories/i);
  const aoc = directory.find(({ id }) => id === AOC_SUPPLIER_PROFILE.id);
  assert.equal(aoc?.slug, "aoc");
  assert.equal(aoc?.location, "Nanjing, Jiangsu, China");
  assert.equal(aoc?.logo, "/supplier-assets/aoc-logo-white.svg");
  assert.match(aoc?.description ?? "", /Jinling AOC Formulations/i);
  const anjie = directory.find(
    ({ id }) => id === ANJIE_SUPPLIER_PROFILE.id,
  );
  assert.equal(anjie?.slug, "haining-anjie-composite-materials");
  assert.equal(anjie?.location, "Haining, Zhejiang, China");
  assert.equal(anjie?.logo, "/supplier-assets/anjie-logo.jpg");
  assert.match(anjie?.description ?? "", /NONGCHAOER Composite Materials/i);
  const horse = directory.find(
    ({ id }) => id === HORSE_CONSTRUCTION_SUPPLIER_PROFILE.id,
  );
  assert.equal(horse?.slug, "shanghai-horse-construction");
  assert.equal(horse?.location, "Shanghai, China");
  assert.equal(
    horse?.logo,
    "/supplier-assets/horse-construction-logo.png",
  );
  assert.match(horse?.description ?? "", /since 2006/i);
  assert.equal(
    directory.find(({ id }) => id === TECHSTORM_SUPPLIER_PROFILE.id)?.logo,
    "/supplier-assets/techstorm-logo.png",
  );
  const pulwell = directory.find(
    ({ id }) => id === PULWELL_SUPPLIER_PROFILE.id,
  );
  assert.equal(pulwell?.slug, "pulwell-composites");
  assert.equal(pulwell?.location, "Zhongshan, Guangdong, China");
  assert.equal(pulwell?.logo, "/supplier-assets/pulwell-logo.png");
  assert.match(pulwell?.description ?? "", /since 2001/i);
  const runsing = directory.find(
    ({ id }) => id === RUNSING_SUPPLIER_PROFILE.id,
  );
  assert.equal(runsing?.slug, "shandong-runsing-composites");
  assert.equal(runsing?.logo, "/supplier-assets/runsing-logo.png");
  assert.match(runsing?.description ?? "", /factories in Weifang/i);
  const shengli = directory.find(
    ({ id }) => id === SHENGLI_LIMITED_SUPPLIER_PROFILE.id,
  );
  assert.equal(shengli?.slug, "shengli-limited");
  assert.equal(shengli?.location, "Napier, New Zealand");
  assert.equal(
    shengli?.logo,
    "/supplier-assets/shengli-limited-logo.png",
  );
  assert.match(shengli?.description ?? "", /began in 1999/i);
  assert.match(shengli?.description ?? "", /Shengli Xinda in Dongying/i);
  const tengjun = directory.find(
    ({ id }) => id === TENGJUN_FRP_SUPPLIER_PROFILE.id,
  );
  assert.equal(tengjun?.slug, "hebei-tengjun-frp");
  assert.equal(tengjun?.location, "Zaoqiang, Hengshui, Hebei, China");
  assert.equal(tengjun?.logo, "/supplier-assets/tengjun-frp-logo.png");
  assert.match(tengjun?.description ?? "", /more than 60 countries/i);
  const sinoComposite = directory.find(
    ({ id }) => id === SINO_COMPOSITE_SUPPLIER_PROFILE.id,
  );
  assert.equal(sinoComposite?.slug, "sino-composite-structures");
  assert.equal(sinoComposite?.location, "Wuxi, Jiangsu, China");
  assert.equal(
    sinoComposite?.logo,
    "/supplier-assets/sino-composite-logo.png",
  );
  assert.match(sinoComposite?.description ?? "", /since 2002/i);
  const maxtone = directory.find(
    ({ id }) => id === MAXTONE_SUPPLIER_PROFILE.id,
  );
  assert.equal(maxtone?.slug, "yangzhou-maxtone-composite");
  assert.equal(maxtone?.location, "Yangzhou, Jiangsu, China");
  assert.equal(maxtone?.logo, "/supplier-assets/maxtone-logo.png");
  assert.match(maxtone?.description ?? "", /since 1996/i);
  const xiamenLft = directory.find(
    ({ id }) => id === XIAMEN_LFT_SUPPLIER_PROFILE.id,
  );
  assert.equal(xiamenLft?.slug, "xiamen-lft-composite-plastic");
  assert.equal(xiamenLft?.location, "Xiamen, Fujian, China");
  assert.equal(xiamenLft?.logo, "/supplier-assets/xiamen-lft-logo.webp");
  assert.match(
    xiamenLft?.description ?? "",
    /long-fiber reinforced thermoplastic/i,
  );
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
