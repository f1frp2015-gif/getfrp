import type { SupplierListing } from "@/lib/db/schema";

export const JUSHI_SUPPLIER_ID = "sup-jushi";
export const JUSHI_SUPPLIER_SLUG = "jushi";
export const JUSHI_LEGACY_SLUG = "china-jushi";

// Curated from China Jushi's public English website. Claims remain attributed
// to the company and are separate from GetFRP's verification status.
export const JUSHI_SUPPLIER_PROFILE: SupplierListing = {
  id: JUSHI_SUPPLIER_ID,
  name: "中国巨石股份有限公司",
  nameEn: "China Jushi Co., Ltd.",
  slug: JUSHI_SUPPLIER_SLUG,
  location: "浙江桐乡",
  locationEn: "Tongxiang, Zhejiang, China",
  province: "浙江",
  category: "fiber",
  products: [
    "玻璃纤维纱",
    "玻璃纤维粗纱与纱线",
    "短切原丝毡与方格布",
    "热塑性塑料用玻璃纤维",
    "高强高模玻璃纤维 E6 / E7 / E8 / E9",
    "连续型材、管道及模压增强材料",
  ],
  productsEn: [
    "Fiberglass yarn, roving and reinforcement fabrics",
    "Chopped strand mat and woven roving",
    "Fiberglass products for thermoplastics",
    "High-strength and high-modulus glass fiber: E6, E7, E8 and E9",
    "Fiberglass products for profiles, pipes and molding",
  ],
  processList: [
    "池窑拉丝",
    "纱线、粗纱及织物加工",
    "短切与毡类加工",
    "复合材料增强应用开发",
    "材料检测与技术服务",
  ],
  processListEn: [
    "Tank-furnace glass fiber drawing",
    "Yarn, roving and fabric conversion",
    "Chopping and mat production",
    "Composite reinforcement application development",
    "Materials testing and technical services",
  ],
  established: 1998,
  verified: false,
  description:
    "中国巨石股份有限公司是中国建材玻纤业务板块的核心企业，主营玻璃纤维及其制品的制造与销售。公司官网披露其 1999 年在上海证券交易所上市，股票代码 600176，并在中国、埃及和美国设有玻纤生产基地。",
  descriptionEn:
    "China Jushi Co., Ltd. is a core enterprise in China National Building Material's fiberglass business division, focused on fiberglass and finished fiberglass articles. Jushi's English website states that the company listed on the Shanghai Stock Exchange in 1999 under stock code 600176 and operates fiberglass production bases in China, Egypt and the United States.",
  certifications: [
    "ISO 9001（公司公开信息）",
    "ISO 14001（公司公开信息）",
    "CNAS testing center",
    "ISO/IEC 17025:2017 testing management system",
  ],
  certificationsEn: [
    "ISO 9001 (company-published information)",
    "ISO 14001 (company-published information)",
    "CNAS-accredited testing center",
    "ISO/IEC 17025:2017 laboratory management system",
  ],
  productsServicesSummary:
    "巨石官网公开的产品和应用覆盖建筑与基础设施、风电及能源、电气电子、交通运输、化学防腐、热塑性增强、型材、管道、模压和织物毡类。E8 高模玻纤页面披露其模量高于传统 E 玻纤，并强调无硼无氟原料路线。采购时应按具体牌号确认玻纤类型、线密度、浸润剂、包装、批次、TDS/SDS、测试依据和目的市场供货安排。",
  productsServicesSummaryEn:
    "Jushi's public product and application pages cover building and infrastructure, wind energy, electrical and electronics, transportation, chemical-corrosion resistance, thermoplastic reinforcement, profiles, pipes, molding, fabrics and mats. Its E8 high-modulus page describes modulus above conventional E-glass and a boron-free, fluorine-free raw-material route. Buyers should confirm the exact grade, glass type, tex, sizing, package, batch, TDS/SDS, test basis and destination-market supply arrangement before approval.",
  ecatalogs: [
    {
      title: "巨石官网产品与服务",
      titleEn: "Jushi Product & Service Directory",
      description: "巨石官网英文产品、应用、检测服务和研发核心入口。",
      descriptionEn: "Official English directory covering products, applications, testing services and R&D focus areas.",
      url: "https://www.jushi.com/en/product",
      format: "Official website",
    },
    {
      title: "玻璃纤维产品说明",
      titleEn: "Jushi Product Description",
      description: "粗纱、毡布、热塑性增强、型材、模压、开模和管道等产品路径。",
      descriptionEn: "Official product map for rovings, mats, thermoplastics, profiles, molding, open molding and pipe applications.",
      url: "https://www.jushi.com/en/product/product-introduction",
      format: "Product directory",
    },
    {
      title: "巨石集团业务板块",
      titleEn: "Jushi Group Business Segments",
      description: "集团产能、生产基地、研发和全球业务布局。",
      descriptionEn: "Official business-segment page describing production bases, capacity, R&D and global operations.",
      url: "https://www.jushi.com/en/business/group",
      format: "Company profile",
    },
    {
      title: "E8 高模玻璃纤维",
      titleEn: "E8 High-Modulus Glass Fiber",
      description: "高模玻纤的模量、软化点和清洁生产信息。",
      descriptionEn: "Official R&D page covering E8 modulus, softening point and boron-free, fluorine-free production inputs.",
      url: "https://www.jushi.com/en",
      format: "R&D overview",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-02T00:00:00.000Z"),
  logo: "/supplier-assets/jushi-logo.png",
  contactEmail: "info@jushi.com",
  contactPhone: "0086-573-88181222",
  address: "318 Fenghuanghu Avenue, Wutong District, Tongxiang, Zhejiang 314500, China",
  website: "https://www.jushi.com/en",
  enterpriseId: null,
  scaleTier: "XL",
  brandPriority: 35,
  viewCount: 0,
  capabilities: [
    "glass fiber",
    "roving",
    "yarn",
    "woven roving",
    "chopped strand mat",
    "thermoplastic reinforcement",
    "high modulus glass fiber",
  ],
  standardsSupported: ["ISO 9001", "ISO 14001", "ISO/IEC 17025:2017", "CNAS"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-02T00:00:00.000Z"),
  updatedAt: new Date("2026-08-02T00:00:00.000Z"),
};

export const JUSHI_PRODUCT_RELATION = {
  supplierListingId: JUSHI_SUPPLIER_ID,
  productId: "fiber-glass",
  relationshipType: "supplier",
  supplierProductName: "Fiberglass yarn, roving, fabrics and mats",
  isPrimary: true,
  isVerified: false,
  customAvailable: false,
  moq: null,
  moqUnit: null,
  leadTimeDays: null,
  specificationOverrides: {},
  evidence: {
    sourceType: "official_website",
    sourceUrl: "https://www.jushi.com/en/product",
    reviewedAt: "2026-08-02",
    note: "Relationship based on China Jushi's official English product directory; exact grade and commercial availability require buyer confirmation.",
  },
};
