import type { SupplierListing } from "@/lib/db/schema";

export const AOC_SUPPLIER_ID = "sup-aoc";
export const AOC_SUPPLIER_SLUG = "aoc";
export const AOC_LEGAL_NAME_EN = "Jinling AOC Formulations Co., Ltd.";

// Curated from AOC's official Asia-Pacific English product, processing and
// China-location pages. Company-published claims remain separate from GetFRP
// verification. The official logo was downloaded from the supplier's current
// website asset at:
// https://static.aocformulations.com/img/footer/aoc_white-1581420507.svg
export const AOC_SUPPLIER_PROFILE: SupplierListing = {
  id: AOC_SUPPLIER_ID,
  name: "AOC 力联思",
  nameEn: "AOC",
  slug: AOC_SUPPLIER_SLUG,
  location: "江苏南京",
  locationEn: "Nanjing, Jiangsu, China",
  province: "江苏",
  category: "resin",
  products: [
    "不饱和聚酯树脂",
    "乙烯基酯树脂",
    "SMC / BMC 树脂体系与低收缩添加剂",
    "耐腐蚀复合材料树脂体系",
    "胶衣、涂层与特种配方材料",
  ],
  productsEn: [
    "Unsaturated polyester resins",
    "Vinyl ester resins",
    "SMC/BMC resin systems and low-profile additives",
    "Corrosion-resistant composite resin systems",
    "Gelcoats, coatings and specialty formulations",
  ],
  processList: [
    "浇注",
    "纤维缠绕",
    "手糊与喷射成型",
    "RTM 与真空导入",
    "SMC / BMC 模压",
    "拉挤成型",
    "CIPP 管道修复",
  ],
  processListEn: [
    "Casting",
    "Filament winding",
    "Hand lay-up and spray-up",
    "RTM and vacuum infusion",
    "SMC/BMC compression molding",
    "Pultrusion",
    "Relining and CIPP",
  ],
  // AOC's official site uses 1961 as the start of its company timeline and
  // states that it has served global composites markets for over 50 years.
  established: 1961,
  verified: false,
  description:
    "AOC 官网将其定位为面向传统复合材料、涂层与防护层、着色与视觉效果、胶粘剂及特种材料的全球配方与解决方案供应商。其亚太英文站公开 Atlac®、Palapreg®、Palatal® 与 Synolite™ 等树脂产品，并将金陵力联思配方有限公司（Jinling AOC Formulations Co., Ltd.）列为中国公司，办公地址位于江苏南京。",
  descriptionEn:
    "AOC describes itself as a global supplier of specialty formulations and solutions for conventional composites, coatings and protective barriers, colorants and visual effects, adhesives and specialties. Its Asia-Pacific site publishes Atlac®, Palapreg®, Palatal® and Synolite™ resin products and lists Jinling AOC Formulations Co., Ltd. as its China location in Nanjing, Jiangsu.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "AOC 亚太官网公开的树脂化学体系包括邻苯型、间苯型、Iso/NPG、Ortho/NPG、DCPD、马来酸型、单体游离型和乙烯基酯树脂；适配浇注、缠绕、手糊/喷射、RTM、真空导入、SMC/BMC、拉挤、CIPP 与人造石等工艺。Atlac® 面向高温化学腐蚀环境，Palapreg® 面向 SMC/BMC 批量成型，Palatal® 面向建筑、基础设施、工业和消费应用。采购时应通过官网产品选型器或中国公司确认具体牌号、TDS/SDS、化学体系、工艺窗口、认证范围、包装、MOQ、交期和目的市场供货安排。",
  productsServicesSummaryEn:
    "AOC's Asia-Pacific site publishes orthophthalic, isophthalic, Iso/NPG, Ortho/NPG, DCPD, maleic, monomer-free and vinyl-ester chemistries for casting, filament winding, hand lay-up and spray-up, RTM, vacuum infusion, SMC/BMC, pultrusion, CIPP and artificial-stone processing. Atlac® is positioned for chemically resistant components, Palapreg® for SMC/BMC production, and Palatal® for building, infrastructure, industrial and consumer applications. Buyers should use the official product selector or China contact to confirm the exact grade, TDS/SDS, chemistry, processing window, certification scope, package, MOQ, lead time and destination-market availability.",
  ecatalogs: [
    {
      title: "AOC 亚太产品选型器",
      titleEn: "AOC Asia-Pacific Product Selector",
      description: "亚太区域公开的树脂牌号、化学体系、工艺与应用筛选入口。",
      descriptionEn:
        "Official regional selector for resin grades, chemistries, processing methods and applications.",
      url: "https://aocformulations.com/en-asia/products/",
      format: "Product selector",
    },
    {
      title: "AOC 产品品牌",
      titleEn: "AOC Product Brands",
      description: "Atlac、Palapreg 与 Palatal 品牌定位和应用范围。",
      descriptionEn:
        "Official overview of the Atlac, Palapreg and Palatal brands and their target applications.",
      url: "https://aocformulations.com/en-asia/products/product-brands/",
      format: "Brand directory",
    },
    {
      title: "AOC 树脂化学体系",
      titleEn: "AOC Resin Chemistries",
      description: "邻苯、间苯、NPG、DCPD、马来酸型、无单体与乙烯基酯体系。",
      descriptionEn:
        "Official directory for orthophthalic, isophthalic, NPG, DCPD, maleic, monomer-free and vinyl-ester chemistries.",
      url: "https://aocformulations.com/en-asia/products/chemical-nature/",
      format: "Technical directory",
    },
    {
      title: "AOC 复合材料加工工艺",
      titleEn: "AOC Composite Processing Guide",
      description: "浇注、缠绕、手糊、RTM、导入、SMC/BMC、拉挤与 CIPP 工艺入口。",
      descriptionEn:
        "Official processing directory for casting, winding, open molding, RTM, infusion, SMC/BMC, pultrusion and CIPP.",
      url: "https://aocformulations.com/en-asia/products/processing/",
      format: "Process directory",
    },
    {
      title: "AOC 中国公司联系方式",
      titleEn: "AOC China Location & Contact",
      description: "官网发布的南京公司地址、中国邮箱和联系电话。",
      descriptionEn:
        "Official listing for the Nanjing company address, China email and telephone.",
      url: "https://aocformulations.com/en-asia/contact/locations/asia-pacific/china/jinling-aoc-resins-co-ltd/",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/aoc-logo-white.svg",
  contactEmail: "china@aocformulations.com",
  contactPhone: "+86 25 8549 3888",
  address:
    "3/F, Block A, Fenghuo Building, No. 88 Yun Long Shan Road, Nanjing, Jiangsu Province 210019, China",
  website: "https://aocformulations.com/en-asia/home/",
  enterpriseId: null,
  scaleTier: "XL",
  brandPriority: 29,
  viewCount: 0,
  capabilities: [
    "unsaturated polyester resin",
    "vinyl ester resin",
    "corrosion-resistant resin",
    "SMC and BMC resin",
    "low-profile additives",
    "gelcoat",
    "filament winding",
    "RTM and infusion",
    "pultrusion resin",
    "CIPP resin",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};

export const AOC_PRODUCT_RELATION = {
  supplierListingId: AOC_SUPPLIER_ID,
  productId: "resin-gelcoat",
  relationshipType: "supplier",
  supplierProductName:
    "Unsaturated polyester, vinyl ester and composite resin systems",
  isPrimary: true,
  isVerified: false,
  customAvailable: false,
  moq: null,
  moqUnit: null,
  leadTimeDays: null,
  specificationOverrides: {},
  evidence: {
    sourceType: "official_website",
    sourceUrl: "https://aocformulations.com/en-asia/products/",
    reviewedAt: "2026-08-05",
    note: "Relationship based on AOC's official Asia-Pacific product selector; exact grade and commercial availability require buyer confirmation.",
  },
};
