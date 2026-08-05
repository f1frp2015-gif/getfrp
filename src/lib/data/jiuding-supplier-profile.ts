import type { SupplierListing } from "@/lib/db/schema";

export const JIUDING_SUPPLIER_ID = "sup-jiuding";
export const JIUDING_SUPPLIER_SLUG = "jiangsu-jiuding-new-materials";

// Curated from Jiuding's official English export website. The website calls
// the business Jiuding New Material Co., Ltd. and identifies Jiangsu Jiuding
// New Material Co., Ltd. as its former name. Company-published capability and
// certification statements remain separate from GetFRP verification.
// Official logo source:
// https://www.jiudingcomposite.com/uploads/202027407/logo202006051112355935739.png
export const JIUDING_SUPPLIER_PROFILE: SupplierListing = {
  id: JIUDING_SUPPLIER_ID,
  name: "江苏九鼎新材料股份有限公司",
  nameEn: "Jiangsu Jiuding New Materials Co., Ltd.",
  slug: JIUDING_SUPPLIER_SLUG,
  location: "江苏如皋",
  locationEn: "Rugao, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "玻璃钢拉挤结构型材、横担、扶手与梯具",
    "模塑与拉挤玻璃钢格栅、踏步及沟盖板",
    "玻璃钢法兰、检查井、弯头与连接件",
    "玻璃纤维纱、织物与砂轮增强网片",
    "建筑、商业及工业用定制热固性复合材料部件",
  ],
  productsEn: [
    "Pultruded FRP structural profiles, crossarms, handrails and ladders",
    "Molded and pultruded FRP grating, stair treads and trench covers",
    "FRP flanges, manholes, elbows and couplings",
    "Fiberglass yarn, fabrics and grinding-wheel reinforcement mesh",
    "Custom thermoset composite products and components",
  ],
  processList: [
    "玻璃纤维拉丝、改性、织造与表面处理",
    "连续拉挤成型",
    "模塑玻璃钢格栅",
    "纤维缠绕",
    "真空导入",
    "SMC 模压与 RTM 成型",
  ],
  processListEn: [
    "Fiberglass drawing, modification, weaving and surface treatment",
    "Continuous pultrusion",
    "Molded FRP grating",
    "Filament winding",
    "Vacuum infusion",
    "SMC compression molding and RTM",
  ],
  established: 1994,
  verified: false,
  description:
    "九鼎英文官网称，公司现以 Jiuding New Material Co., Ltd. 名义开展业务，前身为 Jiangsu Jiuding New Material Co., Ltd.，成立于 1994 年，并于 2007 年在深圳证券交易所上市（股票代码 002201）。官网公开业务覆盖玻璃纤维纱、织物、砂轮增强材料及玻璃钢制品，并将拉挤型材、格栅、法兰和定制热固性复材部件作为主要出口产品。",
  descriptionEn:
    "Jiuding's official English export site describes the business as Jiuding New Material Co., Ltd., formerly Jiangsu Jiuding New Material Co., Ltd. The company states that it was established in 1994 and listed on the Shenzhen Stock Exchange in 2007 under stock code 002201. Its published scope covers fiberglass yarn and fabrics, grinding-wheel reinforcement materials, FRP products, pultruded profiles, gratings, flanges and custom thermoset composite components.",
  certifications: [
    "ISO 9001（企业官网公开；证书范围与有效期需确认）",
    "ISO 14001（企业官网公开；证书范围与有效期需确认）",
    "OHSAS 18001（企业官网仍有公开；现行证书状态需确认）",
    "TS 16949（企业官网仍有公开；现行证书状态需确认）",
  ],
  certificationsEn: [
    "ISO 9001 (company-published; confirm certificate scope and validity)",
    "ISO 14001 (company-published; confirm certificate scope and validity)",
    "OHSAS 18001 (still stated by the company; confirm current certification status)",
    "TS 16949 (still stated by the company; confirm current certification status)",
  ],
  productsServicesSummary:
    "官网产品目录覆盖拉挤结构型材、横担、扶手、梯具、模塑/拉挤格栅、踏步、检查井、法兰、弯头与连接件，并称可采用缠绕、拉挤、模塑、真空导入、SMC 和 RTM 等热固性复合材料工艺进行定制生产。公司公开称拥有 21 条拉挤生产线、500 余套拉挤模具和 100 余套格栅模具，型材与格栅出口至 50 多个国家和地区。以上产能、认证和具体牌号信息均应在 RFQ、样件与工厂审核阶段确认。",
  productsServicesSummaryEn:
    "The official product directory covers pultruded structural profiles, crossarms, handrails, ladders, molded and pultruded grating, stair treads, manholes, flanges, elbows and couplings. Jiuding also publishes custom thermoset processing through winding, pultrusion, molding, vacuum infusion, SMC and RTM. The company states that it operates 21 pultrusion lines with more than 500 pultrusion molds and over 100 grating molds, and that its profiles and gratings reach more than 50 countries and regions. Buyers should confirm current capacity, certification scope, resin system, fire performance, load tables, MOQ and lead time during RFQ, sample approval and factory audit.",
  ecatalogs: [
    {
      title: "九鼎复材英文官网",
      titleEn: "Jiuding Composite Official English Website",
      description: "公司、产品、制造能力、认证声明及出口联系方式总览。",
      descriptionEn:
        "Official overview of the company, product range, manufacturing capabilities, certification statements and export contacts.",
      url: "https://www.jiudingcomposite.com/",
      format: "Official website",
    },
    {
      title: "九鼎公司介绍",
      titleEn: "Jiuding Company Profile",
      description: "官网发布的公司沿革、上市信息、工艺、设备、市场与服务介绍。",
      descriptionEn:
        "Official company history, listing information, processes, equipment, export markets and service overview.",
      url: "https://www.jiudingcomposite.com/about-us",
      format: "Company profile",
    },
    {
      title: "九鼎产品目录",
      titleEn: "Jiuding Product Directory",
      description: "拉挤型材、格栅、法兰、检查井及连接件等官网产品入口。",
      descriptionEn:
        "Official directory for pultruded profiles, gratings, flanges, manholes and fittings.",
      url: "https://www.jiudingcomposite.com/products",
      format: "Product directory",
    },
    {
      title: "玻璃钢拉挤型材",
      titleEn: "FRP Pultrusion Profiles",
      description: "拉挤型材产品、性能、应用、选型与维护资料。",
      descriptionEn:
        "Official product and technical guide covering pultruded-profile types, properties, applications and selection.",
      url: "https://www.jiudingcomposite.com/frp-pultrusion-profiles/",
      format: "Technical directory",
    },
    {
      title: "玻璃钢格栅",
      titleEn: "FRP Grating",
      description: "模塑与拉挤格栅、踏步、沟盖及应用选型资料。",
      descriptionEn:
        "Official product and technical guide for molded and pultruded grating, stair treads and trench covers.",
      url: "https://www.jiudingcomposite.com/frp-grating/",
      format: "Technical directory",
    },
    {
      title: "玻璃钢法兰与管件",
      titleEn: "FRP Flanges & Fittings",
      description: "法兰、检查井、弯头、连接件及定制产品目录。",
      descriptionEn:
        "Official directory for FRP flanges, manholes, elbows, couplings and custom fittings.",
      url: "https://www.jiudingcomposite.com/frp-flanges/",
      format: "Product directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/jiuding-logo.png",
  contactEmail: "zhuxiaoxiang@jiudinggroup.com",
  contactPhone: "+86-513-80695308",
  address: "No. 1 East Zhongshan Road, Rugao, Jiangsu, China",
  website: "https://www.jiudingcomposite.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "pultruded FRP profiles",
    "molded FRP grating",
    "pultruded FRP grating",
    "FRP flanges and fittings",
    "filament winding",
    "vacuum infusion",
    "SMC compression molding",
    "RTM",
    "fiberglass textiles",
    "custom thermoset composites",
  ],
  standardsSupported: ["ISO 9001", "ISO 14001"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
