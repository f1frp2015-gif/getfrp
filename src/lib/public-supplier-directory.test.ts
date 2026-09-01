import assert from "node:assert/strict";
import { test } from "node:test";
import { ALTA_PERFORMANCE_MATERIALS_SUPPLIER_PROFILE } from "./data/alta-performance-materials-supplier-profile";
import { AOC_SUPPLIER_PROFILE } from "./data/aoc-supplier-profile";
import { ANJIE_SUPPLIER_PROFILE } from "./data/anjie-supplier-profile";
import { ATCC_SUPPLIER_PROFILE } from "./data/atcc-supplier-profile";
import { CHANGSHENG_CARBON_SUPPLIER_PROFILE } from "./data/changsheng-carbon-supplier-profile";
import { CHANGZHOU_AOLANTE_SUPPLIER_PROFILE } from "./data/changzhou-aolante-supplier-profile";
import { CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_PROFILE } from "./data/changzhou-hongfa-zongheng-supplier-profile";
import { CHANGZHOU_JIANLIN_SUPPLIER_PROFILE } from "./data/changzhou-jianlin-supplier-profile";
import { CHANGZHOU_PUTAI_SUPPLIER_PROFILE } from "./data/changzhou-putai-supplier-profile";
import { CHANGZHOU_RIXIN_GROUP_SUPPLIER_PROFILE } from "./data/changzhou-rixin-group-supplier-profile";
import { CHANGZHOU_RIXIN_MOLDING_SUPPLIER_PROFILE } from "./data/changzhou-rixin-molding-supplier-profile";
import { CHANGZHOU_RUNFENGYUAN_SUPPLIER_PROFILE } from "./data/changzhou-runfengyuan-supplier-profile";
import { CHANGZHOU_SAIRUI_SUPPLIER_PROFILE } from "./data/changzhou-sairui-supplier-profile";
import { CHANGZHOU_SHENYING_SUPPLIER_PROFILE } from "./data/changzhou-shenying-supplier-profile";
import { CHANGZHOU_SINAJET_SUPPLIER_PROFILE } from "./data/changzhou-sinajet-supplier-profile";
import { CHANGZHOU_UTEK_SUPPLIER_PROFILE } from "./data/changzhou-utek-supplier-profile";
import { HEBEI_WEITONG_SUPPLIER_PROFILE } from "./data/hebei-weitong-supplier-profile";
import { HONGYU_COMPOSITE_SUPPLIER_PROFILE } from "./data/hongyu-composite-supplier-profile";
import { CHONGQING_DUJIANG_SUPPLIER_PROFILE } from "./data/chongqing-dujiang-supplier-profile";
import {
  HONGFU_TONGXIN_SUPPLIER_PROFILE,
} from "./data/hongfu-tongxin-supplier-profile";
import { HORSE_CONSTRUCTION_SUPPLIER_PROFILE } from "./data/horse-construction-supplier-profile";
import { JUFA_SUPPLIER_PROFILE } from "./data/jufa-supplier-profile";
import { KEERDA_SUPPLIER_PROFILE } from "./data/keerda-supplier-profile";
import { NOAH_COMPOSITES_SUPPLIER_PROFILE } from "./data/noah-composites-supplier-profile";
import { SINO_COMPOSITE_SUPPLIER_PROFILE } from "./data/sino-composite-supplier-profile";
import { SUZHOU_GREENTECH_SUPPLIER_PROFILE } from "./data/suzhou-greentech-supplier-profile";
import { JIUDING_SUPPLIER_PROFILE } from "./data/jiuding-supplier-profile";
import { JHPK_SUPPLIER_PROFILE } from "./data/jhpk-supplier-profile";
import { MAXTONE_SUPPLIER_PROFILE } from "./data/maxtone-supplier-profile";
import { MATEX_SUPPLIER_PROFILE } from "./data/matex-supplier-profile";
import { NANJING_EFG_SUPPLIER_PROFILE } from "./data/nanjing-efg-supplier-profile";
import { NANJING_LOYALTY_SUPPLIER_PROFILE } from "./data/nanjing-loyalty-supplier-profile";
import { NEWTECH_GROUP_SUPPLIER_PROFILE } from "./data/newtech-group-supplier-profile";
import { CROTTI_SUPPLIER_PROFILE } from "./data/crotti-supplier-profile";
import { EASTFRP_SUPPLIER_PROFILE } from "./data/eastfrp-supplier-profile";
import { FANGHUA_SUPPLIER_PROFILE } from "./data/fanghua-supplier-profile";
import { FEILIHUA_SUPPLIER_PROFILE } from "./data/feilihua-supplier-profile";
import {
  F1_COMPOSITE_ENTERPRISE_ID,
  F1_COMPOSITE_SUPPLIER_ID,
  F1_COMPOSITE_SUPPLIER_PROFILE,
} from "./data/f1-composite-supplier-profile";
import { PULWELL_SUPPLIER_PROFILE } from "./data/pulwell-supplier-profile";
import { RUNSING_SUPPLIER_PROFILE } from "./data/runsing-supplier-profile";
import { SHANGHAI_MOYAN_SUPPLIER_PROFILE } from "./data/shanghai-moyan-supplier-profile";
import { SHENGLI_LIMITED_SUPPLIER_PROFILE } from "./data/shengli-limited-supplier-profile";
import { SPARE_COMPOSITES_SUPPLIER_PROFILE } from "./data/spare-composites-supplier-profile";
import { STRONGFIBRE_SUPPLIER_PROFILE } from "./data/strongfibre-supplier-profile";
import { TANGSHAN_RUNFENG_SUPPLIER_PROFILE } from "./data/tangshan-runfeng-supplier-profile";
import { TENGJUN_FRP_SUPPLIER_PROFILE } from "./data/tengjun-frp-supplier-profile";
import { WELLS_WAM_SUPPLIER_PROFILE } from "./data/wells-wam-supplier-profile";
import { SINAUVA_SUPPLIER_PROFILE } from "./data/sinauva-composites-supplier-profile";
import { TECHSTORM_SUPPLIER_PROFILE } from "./data/techstorm-supplier-profile";
import { TLB_SUPPLIER_PROFILE } from "./data/tlb-supplier-profile";
import { TUOTIAN_SUPPLIER_PROFILE } from "./data/tuotian-supplier-profile";
import { XIAMEN_LFT_SUPPLIER_PROFILE } from "./data/xiamen-lft-supplier-profile";
import { YUTO_NEW_MATERIAL_SUPPLIER_PROFILE } from "./data/yuto-new-material-supplier-profile";
import { ZHEJIANG_HUAFENG_SUPPLIER_PROFILE } from "./data/zhejiang-huafeng-supplier-profile";
import { ZHEJIANG_TIANHE_RESIN_SUPPLIER_PROFILE } from "./data/zhejiang-tianhe-resin-supplier-profile";
import {
  ZHONGSHENG_FIBERGLASS_SUPPLIER_PROFILE,
} from "./data/zhongsheng-fiberglass-supplier-profile";
import { CURATED_SUPPLIER_PROFILES } from "./data/curated-supplier-profiles";
import { buildChinaSourcingMapData } from "./data/china-sourcing-map";
import { supplierCategories } from "./data/suppliers";
import { supplierRouteSlug } from "./supplier-slugs";

process.env.DATABASE_URL ??= "postgresql://user:pass@localhost/getfrp-test";

async function loadDirectory() {
  return import("./public-supplier-directory");
}

test("adds every published Git-backed profile when the database is empty", async () => {
  const { mergePublicSupplierDirectory } = await loadDirectory();
  const directory = mergePublicSupplierDirectory([], "en");

  assert.deepEqual(
    new Set(directory.map(({ slug }) => slug)),
    new Set(
      CURATED_SUPPLIER_PROFILES.flatMap(({ profile }) =>
        profile.profilePublished && profile.nameEn?.trim()
          ? [supplierRouteSlug(profile)]
          : [],
      ),
    ),
  );
  assert.doesNotMatch(
    JSON.stringify(directory),
    /[\p{Script=Han}]/u,
    "the public English supplier directory must not expose Chinese text",
  );
  const alta = directory.find(
    ({ id }) => id === ALTA_PERFORMANCE_MATERIALS_SUPPLIER_PROFILE.id,
  );
  assert.equal(alta?.slug, "alta-performance-materials");
  assert.equal(alta?.location, "London, United Kingdom");
  assert.equal(alta?.category, "resin");
  assert.equal(
    alta?.logo,
    "/supplier-assets/alta-performance-materials-logo.png",
  );
  assert.match(alta?.description ?? "", /20 sites across/i);
  assert.match(
    ALTA_PERFORMANCE_MATERIALS_SUPPLIER_PROFILE.productsServicesSummaryEn ??
      "",
    /DERAKANE SIGNIA/i,
  );
  const f1Composite = directory.find(
    ({ id }) => id === F1_COMPOSITE_SUPPLIER_ID,
  );
  assert.equal(directory[0]?.id, F1_COMPOSITE_SUPPLIER_ID);
  assert.equal(f1Composite?.verified, true);
  assert.equal(f1Composite?.sponsored, true);
  assert.equal(
    f1Composite?.logo,
    "/supplier-assets/f1-composite-logo.png",
  );
  assert.equal(f1Composite?.enterpriseId, F1_COMPOSITE_ENTERPRISE_ID);
  assert.equal(
    directory.filter(({ id }) => id === ATCC_SUPPLIER_PROFILE.id).length,
    1,
  );
  assert.equal(
    directory.filter(
      ({ id }) => id === CHANGZHOU_AOLANTE_SUPPLIER_PROFILE.id,
    ).length,
    1,
  );
  assert.equal(
    directory.filter(
      ({ id }) => id === CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_PROFILE.id,
    ).length,
    1,
  );
  assert.equal(
    directory.filter(
      ({ id }) => id === CHANGZHOU_JIANLIN_SUPPLIER_PROFILE.id,
    ).length,
    1,
  );
  assert.equal(
    directory.filter(
      ({ id }) => id === CHANGZHOU_PUTAI_SUPPLIER_PROFILE.id,
    ).length,
    1,
  );
  assert.equal(
    directory.filter(
      ({ id }) => id === CHANGZHOU_RIXIN_GROUP_SUPPLIER_PROFILE.id,
    ).length,
    1,
  );
  assert.equal(
    directory.filter(
      ({ id }) => id === CHANGZHOU_RIXIN_MOLDING_SUPPLIER_PROFILE.id,
    ).length,
    1,
  );
  assert.equal(
    directory.filter(
      ({ id }) => id === CHANGZHOU_RUNFENGYUAN_SUPPLIER_PROFILE.id,
    ).length,
    1,
  );
  assert.equal(
    directory.filter(
      ({ id }) => id === CHANGZHOU_SAIRUI_SUPPLIER_PROFILE.id,
    ).length,
    1,
  );
  assert.equal(
    directory.filter(
      ({ id }) => id === CHANGZHOU_SHENYING_SUPPLIER_PROFILE.id,
    ).length,
    1,
  );
  assert.equal(
    directory.filter(
      ({ id }) => id === CHANGZHOU_SINAJET_SUPPLIER_PROFILE.id,
    ).length,
    1,
  );
  assert.equal(
    directory.filter(
      ({ id }) => id === CHANGZHOU_UTEK_SUPPLIER_PROFILE.id,
    ).length,
    1,
  );
  assert.match(
    directory.find(({ id }) => id === NOAH_COMPOSITES_SUPPLIER_PROFILE.id)
      ?.description ?? "",
    /Jin Hong Company/,
  );
  const eastfrp = directory.find(
    ({ id }) => id === EASTFRP_SUPPLIER_PROFILE.id,
  );
  assert.equal(eastfrp?.slug, "anhui-anche-east-frp");
  assert.equal(eastfrp?.location, "Xuancheng, Anhui, China");
  assert.equal(eastfrp?.logo, "/supplier-assets/eastfrp-logo.jpg");
  assert.match(eastfrp?.products.join(" ") ?? "", /FRP wall panels/i);
  assert.match(eastfrp?.description ?? "", /20,000 m²/i);
  assert.equal(
    directory.filter(({ name }) => name.toLowerCase().includes("noah"))[0]
      ?.slug,
    "noah-composites",
  );
  const jufa = directory.find(({ id }) => id === JUFA_SUPPLIER_PROFILE.id);
  assert.equal(jufa?.logo, "/supplier-assets/jufa-logo.png");
  assert.match(jufa?.products.join(" ") ?? "", /pultrusion/i);
  assert.match(jufa?.description ?? "", /polyurethane-modified resin/i);
  const keerda = directory.find(
    ({ id }) => id === KEERDA_SUPPLIER_PROFILE.id,
  );
  assert.equal(keerda?.slug, "nanjing-keerda-mould");
  assert.equal(keerda?.verified, false);
  assert.equal(keerda?.category, "mold");
  assert.equal(keerda?.logo, "/supplier-assets/keerda-logo.png");
  assert.match(keerda?.products.join(" ") ?? "", /pultrusion dies/i);
  assert.match(keerda?.description ?? "", /established in 1993/i);
  const crotti = directory.find(
    ({ id }) => id === CROTTI_SUPPLIER_PROFILE.id,
  );
  assert.equal(crotti?.logo, "/supplier-assets/crotti-logo.png");
  assert.match(crotti?.products.join(" ") ?? "", /TICO 55, 65, 72/);
  assert.match(crotti?.processList.join(" ") ?? "", /pultrusion/i);
  const fanghua = directory.find(
    ({ id }) => id === FANGHUA_SUPPLIER_PROFILE.id,
  );
  assert.equal(fanghua?.name, "Fanghua Mould");
  assert.equal(fanghua?.slug, "yuyao-fanghua-mould");
  assert.equal(fanghua?.verified, false);
  assert.equal(fanghua?.category, "mold");
  assert.equal(fanghua?.location, "Yuyao, Ningbo, Zhejiang, China");
  assert.equal(fanghua?.logo, "/supplier-assets/fanghua-logo.png");
  assert.match(fanghua?.products.join(" ") ?? "", /pultrusion molds/i);
  assert.match(fanghua?.processList.join(" ") ?? "", /cavity machining/i);
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
  assert.equal(aoc?.logo, "/supplier-assets/aoc-logo-card.png");
  assert.match(aoc?.description ?? "", /Jinling AOC Formulations/i);
  const anjie = directory.find(
    ({ id }) => id === ANJIE_SUPPLIER_PROFILE.id,
  );
  assert.equal(anjie?.slug, "haining-anjie-composite-materials");
  assert.equal(anjie?.location, "Haining, Zhejiang, China");
  assert.equal(anjie?.logo, "/supplier-assets/anjie-logo.jpg");
  assert.match(anjie?.description ?? "", /NONGCHAOER Composite Materials/i);
  const changshengCarbon = directory.find(
    ({ id }) => id === CHANGSHENG_CARBON_SUPPLIER_PROFILE.id,
  );
  assert.equal(changshengCarbon?.slug, "changsheng-carbon");
  assert.equal(changshengCarbon?.location, "Langfang, Hebei, China");
  assert.equal(changshengCarbon?.category, "fiber");
  assert.equal(
    changshengCarbon?.logo,
    "/supplier-assets/changsheng-carbon-logo.jpg",
  );
  assert.match(changshengCarbon?.description ?? "", /December 2, 2021/i);
  assert.match(
    CHANGSHENG_CARBON_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /ZA60XC-12K/i,
  );
  const feilihua = directory.find(
    ({ id }) => id === FEILIHUA_SUPPLIER_PROFILE.id,
  );
  assert.equal(feilihua?.slug, "hubei-feilihua-quartz-glass");
  assert.equal(feilihua?.location, "Jingzhou, Hubei, China");
  assert.equal(feilihua?.category, "fiber");
  assert.equal(feilihua?.logo, "/supplier-assets/feilihua-logo.png");
  assert.match(feilihua?.products.join(" ") ?? "", /hollow quartz-fiber/i);
  assert.match(feilihua?.description ?? "", /stock code 300395/i);
  const jhpk = directory.find(({ id }) => id === JHPK_SUPPLIER_PROFILE.id);
  assert.equal(jhpk?.slug, "beijing-jinghua-parker");
  assert.equal(jhpk?.location, "Beijing and Handan, Hebei, China");
  assert.equal(jhpk?.category, "equipment");
  assert.equal(jhpk?.logo, "/supplier-assets/jhpk-logo.png");
  assert.match(jhpk?.description ?? "", /established in Beijing in 2003/i);
  assert.match(
    JHPK_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /JHPK-G20A/i,
  );
  const hongfuTongxin = directory.find(
    ({ id }) => id === HONGFU_TONGXIN_SUPPLIER_PROFILE.id,
  );
  assert.equal(hongfuTongxin?.slug, "shenzhen-hongfu-tongxin");
  assert.equal(hongfuTongxin?.location, "Shenzhen, Guangdong, China");
  assert.equal(
    hongfuTongxin?.logo,
    "/supplier-assets/hongfu-tongxin-logo.png",
  );
  assert.match(
    hongfuTongxin?.description ?? "",
    /FRP production factory in Dongguan/i,
  );
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
  const shanghaiMoyan = directory.find(
    ({ id }) => id === SHANGHAI_MOYAN_SUPPLIER_PROFILE.id,
  );
  assert.equal(shanghaiMoyan?.slug, "shanghai-moyan-instrument");
  assert.equal(shanghaiMoyan?.location, "Shanghai, China");
  assert.equal(shanghaiMoyan?.category, "equipment");
  assert.equal(
    shanghaiMoyan?.logo,
    "/supplier-assets/shanghai-moyan-logo.png",
  );
  assert.match(shanghaiMoyan?.products.join(" ") ?? "", /pultrusion/i);
  assert.match(shanghaiMoyan?.description ?? "", /1,200 m²/i);
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
  const tangshanRunfeng = directory.find(
    ({ id }) => id === TANGSHAN_RUNFENG_SUPPLIER_PROFILE.id,
  );
  assert.equal(
    tangshanRunfeng?.slug,
    "tangshan-runfeng-composite-materials",
  );
  assert.equal(tangshanRunfeng?.location, "Tangshan, Hebei, China");
  assert.equal(
    tangshanRunfeng?.logo,
    "/supplier-assets/tangshan-runfeng-logo.webp",
  );
  assert.match(
    tangshanRunfeng?.description ?? "",
    /(?:since|founded in) 2004/i,
  );
  assert.match(tangshanRunfeng?.products.join(" ") ?? "", /skylight/i);
  const tengjun = directory.find(
    ({ id }) => id === TENGJUN_FRP_SUPPLIER_PROFILE.id,
  );
  assert.equal(tengjun?.slug, "hebei-tengjun-frp");
  assert.equal(tengjun?.location, "Zaoqiang, Hengshui, Hebei, China");
  assert.equal(tengjun?.logo, "/supplier-assets/tengjun-frp-logo.png");
  assert.match(tengjun?.description ?? "", /more than 60 countries/i);
  const tlb = directory.find(({ id }) => id === TLB_SUPPLIER_PROFILE.id);
  assert.equal(tlb?.slug, "jiangsu-tianlong-basalt-fiber");
  assert.equal(tlb?.location, "Yizheng, Yangzhou, Jiangsu, China");
  assert.equal(tlb?.category, "fiber");
  assert.equal(tlb?.verified, false);
  assert.equal(tlb?.logo, "/supplier-assets/tlb-logo.png");
  assert.match(tlb?.products.join(" ") ?? "", /basalt fiber/i);
  assert.match(tlb?.description ?? "", /established in Yizheng/i);
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
  const suzhouGreentech = directory.find(
    ({ id }) => id === SUZHOU_GREENTECH_SUPPLIER_PROFILE.id,
  );
  assert.equal(suzhouGreentech?.slug, "suzhou-greentech");
  assert.equal(suzhouGreentech?.location, "Taicang, Jiangsu, China");
  assert.equal(suzhouGreentech?.category, "manufacturer");
  assert.equal(
    suzhouGreentech?.logo,
    "/supplier-assets/suzhou-greentech-logo.jpg",
  );
  assert.match(
    SUZHOU_GREENTECH_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /TPO\/TPU\/PU/i,
  );
  const maxtone = directory.find(
    ({ id }) => id === MAXTONE_SUPPLIER_PROFILE.id,
  );
  assert.equal(maxtone?.slug, "yangzhou-maxtone-composite");
  assert.equal(maxtone?.location, "Yangzhou, Jiangsu, China");
  assert.equal(maxtone?.logo, "/supplier-assets/maxtone-logo.png");
  assert.match(maxtone?.description ?? "", /since 1996/i);
  const matex = directory.find(
    ({ id }) => id === MATEX_SUPPLIER_PROFILE.id,
  );
  assert.equal(matex?.slug, "changzhou-matex-composites");
  assert.equal(matex?.location, "Changzhou, Jiangsu, China");
  assert.equal(matex?.logo, "/supplier-assets/matex-logo.png");
  assert.equal(matex?.category, "fiber");
  assert.match(matex?.description ?? "", /since 2007/i);
  assert.match(matex?.products.join(" ") ?? "", /multiaxial|biaxial/i);
  const nanjingEfg = directory.find(
    ({ id }) => id === NANJING_EFG_SUPPLIER_PROFILE.id,
  );
  assert.equal(nanjingEfg?.slug, "nanjing-efg");
  assert.equal(nanjingEfg?.location, "Nanjing, Jiangsu, China");
  assert.equal(nanjingEfg?.category, "fiber");
  assert.equal(
    nanjingEfg?.logo,
    "/supplier-assets/nanjing-efg-logo.png",
  );
  assert.match(nanjingEfg?.description ?? "", /incorporation year/i);
  const nanjingLoyalty = directory.find(
    ({ id }) => id === NANJING_LOYALTY_SUPPLIER_PROFILE.id,
  );
  assert.equal(
    nanjingLoyalty?.slug,
    "nanjing-loyalty-composite-equipment",
  );
  assert.equal(nanjingLoyalty?.location, "Nanjing, Jiangsu, China");
  assert.equal(nanjingLoyalty?.category, "equipment");
  assert.equal(
    nanjingLoyalty?.logo,
    "/supplier-assets/nanjing-loyalty-logo.jpg",
  );
  assert.match(nanjingLoyalty?.description ?? "", /established in 2000/i);
  assert.match(
    nanjingLoyalty?.products.join(" ") ?? "",
    /composite conductor-core production lines/i,
  );
  assert.match(
    NANJING_LOYALTY_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /past their printed validity dates/i,
  );
  const newtechGroup = directory.find(
    ({ id }) => id === NEWTECH_GROUP_SUPPLIER_PROFILE.id,
  );
  assert.equal(newtechGroup?.slug, "newtech-group");
  assert.equal(newtechGroup?.location, "Changzhou, Jiangsu, China");
  assert.equal(newtechGroup?.category, "fiber");
  assert.equal(
    newtechGroup?.logo,
    "/supplier-assets/newtech-group-logo-light.png",
  );
  assert.match(newtechGroup?.description ?? "", /18,000 tonnes/i);
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
  const tuotian = directory.find(
    ({ id }) => id === TUOTIAN_SUPPLIER_PROFILE.id,
  );
  assert.equal(
    tuotian?.slug,
    "lianyungang-tuotian-aviation-equipment",
  );
  assert.equal(tuotian?.location, "Lianyungang, Jiangsu, China");
  assert.equal(tuotian?.logo, "/supplier-assets/tuotian-logo.webp");
  assert.equal(tuotian?.category, "equipment");
  assert.match(tuotian?.description ?? "", /30,000 m² production base/i);
  const yutoNewMaterial = directory.find(
    ({ id }) => id === YUTO_NEW_MATERIAL_SUPPLIER_PROFILE.id,
  );
  assert.equal(yutoNewMaterial?.slug, "dongguan-yuto-new-material");
  assert.equal(yutoNewMaterial?.location, "Dongguan, Guangdong, China");
  assert.equal(
    yutoNewMaterial?.logo,
    "/supplier-assets/yuto-new-material-logo.png",
  );
  assert.match(yutoNewMaterial?.description ?? "", /3K plain-/i);
  const zhejiangHuafeng = directory.find(
    ({ id }) => id === ZHEJIANG_HUAFENG_SUPPLIER_PROFILE.id,
  );
  assert.equal(
    zhejiangHuafeng?.slug,
    "zhejiang-huafeng-new-material",
  );
  assert.equal(zhejiangHuafeng?.location, "Hangzhou, Zhejiang, China");
  assert.equal(
    zhejiangHuafeng?.logo,
    "/supplier-assets/zhejiang-huafeng-logo.webp",
  );
  assert.match(zhejiangHuafeng?.description ?? "", /since 1998/i);
  const zhejiangTianheResin = directory.find(
    ({ id }) => id === ZHEJIANG_TIANHE_RESIN_SUPPLIER_PROFILE.id,
  );
  assert.equal(zhejiangTianheResin?.slug, "zhejiang-tianhe-resin");
  assert.equal(
    zhejiangTianheResin?.location,
    "Linhai, Taizhou, Zhejiang, China",
  );
  assert.equal(zhejiangTianheResin?.category, "resin");
  assert.equal(
    zhejiangTianheResin?.logo,
    "/supplier-assets/zhejiang-tianhe-resin-logo.png",
  );
  assert.match(zhejiangTianheResin?.description ?? "", /135,000 tonnes/i);
  assert.match(
    ZHEJIANG_TIANHE_RESIN_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /not consistent across all pages/i,
  );
  const zhongshengFiberglass = directory.find(
    ({ id }) => id === ZHONGSHENG_FIBERGLASS_SUPPLIER_PROFILE.id,
  );
  assert.equal(
    zhongshengFiberglass?.slug,
    "taizhou-zhongsheng-glass-fiber-products",
  );
  assert.equal(zhongshengFiberglass?.location, "Taizhou, Jiangsu, China");
  assert.equal(
    zhongshengFiberglass?.logo,
    "/supplier-assets/zhongsheng-fiberglass-logo.png",
  );
  assert.match(zhongshengFiberglass?.description ?? "", /November 18, 2013/i);
  assert.match(
    ZHONGSHENG_FIBERGLASS_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /98,000 Mingchen-brand/i,
  );
  const hebeiWeitong = directory.find(
    ({ id }) => id === HEBEI_WEITONG_SUPPLIER_PROFILE.id,
  );
  assert.equal(hebeiWeitong?.slug, "hebei-weitong-frp");
  assert.equal(hebeiWeitong?.location, "Hengshui, Hebei, China");
  assert.equal(
    hebeiWeitong?.logo,
    "/supplier-assets/hebei-weitong-logo.png",
  );
  assert.match(hebeiWeitong?.description ?? "", /April 30, 2015/i);
  assert.match(
    HEBEI_WEITONG_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /DN15 to DN4000/i,
  );
  const hongyuComposite = directory.find(
    ({ id }) => id === HONGYU_COMPOSITE_SUPPLIER_PROFILE.id,
  );
  assert.equal(
    hongyuComposite?.slug,
    "hongyu-composite-materials-technology-jiaxing",
  );
  assert.equal(hongyuComposite?.location, "Jiaxing, Zhejiang, China");
  assert.equal(hongyuComposite?.category, "equipment");
  assert.equal(hongyuComposite?.logo, null);
  assert.match(
    HONGYU_COMPOSITE_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /16 independent/i,
  );
  const chongqingDujiang = directory.find(
    ({ id }) => id === CHONGQING_DUJIANG_SUPPLIER_PROFILE.id,
  );
  assert.equal(chongqingDujiang?.slug, "chongqing-dujiang-composites");
  assert.equal(chongqingDujiang?.location, "Chongqing, China");
  assert.equal(
    chongqingDujiang?.logo,
    "/supplier-assets/chongqing-dujiang-logo.png",
  );
  assert.match(chongqingDujiang?.description ?? "", /adopted in 2002/i);
  assert.match(
    CHONGQING_DUJIANG_SUPPLIER_PROFILE.productsServicesSummaryEn ?? "",
    /past their printed validity dates/i,
  );
});

test("keeps Git-backed profiles in aggregate consumers when the database is partial", async () => {
  const { mergePublicSupplierRows } = await loadDirectory();
  const rows = mergePublicSupplierRows([
    {
      supplier: F1_COMPOSITE_SUPPLIER_PROFILE,
      enterpriseLogo: null,
      enterpriseWebsite: null,
      employeeCount: null,
      annualRevenue: null,
    },
  ]);
  const publishedRows = rows
    .filter(({ supplier }) => supplier.profilePublished)
    .map(({ supplier }) => ({
      category: supplier.category,
      province: supplier.province,
    }));
  const map = buildChinaSourcingMapData(
    publishedRows,
    supplierCategories.map((category) => ({
      id: category.id,
      label: category.nameEn,
    })),
  );

  assert.equal(
    rows.filter(({ supplier }) => supplier.id === F1_COMPOSITE_SUPPLIER_ID)
      .length,
    1,
  );
  assert.ok(map.mappedTotal > 1, "a partial database row must not collapse the map");
  assert.ok(
    (map.provinces.find(({ name }) => name === "Jiangsu")?.total ?? 0) > 0,
    "Git-backed Jiangsu profiles must remain available to regional pages",
  );
});

test("restores F1 Composites trust presentation from Git when the database row is degraded", async () => {
  const { mergePublicSupplierDirectory } = await loadDirectory();
  const directory = mergePublicSupplierDirectory(
    [
      {
        supplier: {
          ...F1_COMPOSITE_SUPPLIER_PROFILE,
          name: "Stale database display name",
          nameEn: "Stale database display name",
          slug: "legacy-f1-record",
          verified: false,
          profilePublished: false,
          logo: null,
          brandPriority: 0,
        },
        enterpriseLogo: "https://www.f1composite.com/brand/f1-logo.png",
        enterpriseWebsite: "https://www.f1composite.com",
        employeeCount: "10-50",
        annualRevenue: null,
      },
    ],
    "en",
  );
  const f1Composite = directory.find(
    ({ id }) => id === F1_COMPOSITE_SUPPLIER_ID,
  );

  assert.equal(directory[0]?.id, F1_COMPOSITE_SUPPLIER_ID);
  assert.equal(f1Composite?.verified, true);
  assert.equal(f1Composite?.profilePublished, true);
  assert.equal(f1Composite?.sponsored, true);
  assert.equal(f1Composite?.name, "F1 Composites");
  assert.equal(f1Composite?.slug, "f1-composite");
  assert.equal(
    f1Composite?.logo,
    "/supplier-assets/f1-composite-logo.png",
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

test("keeps incomplete database records visible after completed homepages", async () => {
  const { mergePublicSupplierDirectory } = await loadDirectory();
  const directory = mergePublicSupplierDirectory(
    [
      {
        supplier: {
          ...NOAH_COMPOSITES_SUPPLIER_PROFILE,
          profilePublished: false,
          verified: false,
          brandPriority: 0,
          scaleTier: "S",
          viewCount: 0,
        },
        enterpriseLogo: null,
        enterpriseWebsite: null,
        employeeCount: null,
        annualRevenue: null,
      },
      {
        supplier: {
          ...NOAH_COMPOSITES_SUPPLIER_PROFILE,
          id: "sup-legacy-no-homepage",
          slug: "legacy-no-homepage",
          name: "Legacy supplier without a homepage",
          nameEn: "Legacy Supplier Without a Homepage",
          profilePublished: true,
          profileReviewedAt: null,
          descriptionEn: "Short legacy directory record.",
          website: null,
          ecatalogs: [],
          verified: true,
          brandPriority: 10_000,
          scaleTier: "XL",
          viewCount: 10_000,
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
    directory.filter(
      ({ id }) =>
        id === NOAH_COMPOSITES_SUPPLIER_PROFILE.id ||
        id === "sup-legacy-no-homepage",
    ).length,
    2,
  );
  const completedIndex = directory.findIndex(
    ({ id }) => id === NOAH_COMPOSITES_SUPPLIER_PROFILE.id,
  );
  const incompleteIndex = directory.findIndex(
    ({ id }) => id === "sup-legacy-no-homepage",
  );
  assert.ok(completedIndex >= 0);
  assert.ok(incompleteIndex > completedIndex);
  assert.equal(directory[incompleteIndex]?.profilePublished, false);
  assert.equal(
    directory.find(({ id }) => id === NOAH_COMPOSITES_SUPPLIER_PROFILE.id)
      ?.profilePublished,
    true,
  );
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
