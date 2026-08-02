import type { SupplierListing } from "@/lib/db/schema";

export const ZHONGFU_SHENYING_SUPPLIER_ID = "sup-zhongfu";
export const ZHONGFU_SHENYING_SUPPLIER_SLUG = "zhongfu-shenying";
export const ZHONGFU_SHENYING_LEGACY_SLUG = "zhongfu-shenying-carbon-fiber";

// Curated from Zhongfu Shenying's official website and its public data API.
// Company-published claims remain separate from GetFRP verification.
export const ZHONGFU_SHENYING_SUPPLIER_PROFILE: SupplierListing = {
  id: ZHONGFU_SHENYING_SUPPLIER_ID,
  name: "中复神鹰碳纤维股份有限公司",
  nameEn: "Zhongfu Shenying Carbon Fiber Co., Ltd.",
  slug: ZHONGFU_SHENYING_SUPPLIER_SLUG,
  location: "江苏连云港",
  locationEn: "Lianyungang, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "SYT45 / SYT45S / SYT45T 碳纤维",
    "SYT49S / SYT49T / SYT49C 碳纤维",
    "SYT55 / SYT65 / SYT70 高强碳纤维",
    "SYM40J / SYM46J / SYM50J 高强高模碳纤维",
  ],
  productsEn: [
    "SYT45, SYT45S and SYT45T carbon fiber",
    "SYT49S, SYT49T and SYT49C carbon fiber",
    "SYT55, SYT65 and SYT70 high-strength carbon fiber",
    "SYM40J, SYM46J and SYM50J high-strength, high-modulus carbon fiber",
  ],
  processList: ["干喷湿纺", "PAN 原丝聚合", "预氧化与碳化", "碳纤维应用开发"],
  processListEn: [
    "Dry-jet wet spinning",
    "PAN precursor polymerization",
    "Stabilization and carbonization",
    "Carbon fiber application development",
  ],
  established: 2006,
  verified: false,
  description:
    "中复神鹰碳纤维股份有限公司成立于2006年，隶属于中国建材集团，集碳纤维及其复合材料研发、生产、销售于一体，并于2022年在上海证券交易所上市（688295）。",
  descriptionEn:
    "Zhongfu Shenying Carbon Fiber Co., Ltd. was established in 2006 and is part of China National Building Material Group. The company develops, manufactures and sells carbon fiber and carbon-fiber composite materials, and was listed on the Shanghai Stock Exchange in 2022 under stock code 688295.",
  certifications: ["ISO 9001", "国家高新技术企业"],
  certificationsEn: [
    "ISO 9001 (company-published information)",
    "National High-Tech Enterprise (company-published information)",
  ],
  productsServicesSummary:
    "官网公开的碳纤维产品覆盖航空航天、风电叶片、压力容器、碳/碳复合材料、体育休闲、建筑桥梁、汽车与轨道交通、碳纤维电缆芯及电子3C等应用。采购时应按具体牌号、丝束规格、拉伸强度、模量、线密度、上浆体系、包装、TDS/SDS及目标市场要求确认。",
  productsServicesSummaryEn:
    "The official site describes carbon fiber applications in aerospace, wind blades, pressure vessels, carbon/carbon composites, sporting goods, bridges and buildings, automotive and rail transit, carbon-fiber cable cores, and electronic 3C products. Buyers should confirm grade, tow size, tensile strength, modulus, linear density, sizing, package, TDS/SDS and destination-market requirements before approval.",
  ecatalogs: [
    {
      title: "中复神鹰产品与应用",
      titleEn: "Zhongfu Shenying Product & Application Directory",
      description: "官网产品型号、应用领域与技术介绍入口。",
      descriptionEn: "Official product, application and technical-information directory.",
      url: "https://www.zfsycf.com.cn/#/product",
      format: "Official website",
    },
    {
      title: "中复神鹰公司简介",
      titleEn: "Zhongfu Shenying Company Introduction",
      description: "官网发布的公司历史、基地与技术路线介绍。",
      descriptionEn: "Official company history, manufacturing-base and technology overview.",
      url: "https://www.zfsycf.com.cn/#/about/my",
      format: "Company profile",
    },
    {
      title: "碳纤维产品型号数据",
      titleEn: "Carbon Fiber Grade Data",
      description: "官网公开的型号、规格、拉伸强度、模量和线密度数据。",
      descriptionEn: "Official grade table covering specifications, tensile strength, modulus and linear density.",
      url: "https://www.zfsycf.com.cn/#/productIntroduce/top",
      format: "Technical directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-02T00:00:00.000Z"),
  logo: "/supplier-assets/zhongfu-shenying-logo.png",
  contactEmail: "sales@zfsycf.com.cn",
  contactPhone: "+86-518-86070008",
  address: "No. 1-6 Jinqiao Road, Lianyungang, Jiangsu, China",
  website: "https://www.zfsycf.com.cn/",
  enterpriseId: null,
  scaleTier: "XL",
  brandPriority: 34,
  viewCount: 0,
  capabilities: [
    "carbon fiber",
    "PAN precursor",
    "dry-jet wet spinning",
    "T700-grade carbon fiber",
    "T800-grade carbon fiber",
    "high-modulus carbon fiber",
    "carbon fiber for pressure vessels",
    "carbon fiber for wind energy",
  ],
  standardsSupported: ["ISO 9001"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-02T00:00:00.000Z"),
  updatedAt: new Date("2026-08-02T00:00:00.000Z"),
};

export const ZHONGFU_SHENYING_PRODUCT_RELATION = {
  supplierListingId: ZHONGFU_SHENYING_SUPPLIER_ID,
  productId: "fiber-glass",
  relationshipType: "supplier",
  supplierProductName: "Carbon fiber grades and reinforcements",
  isPrimary: true,
  isVerified: false,
  customAvailable: false,
  moq: null,
  moqUnit: null,
  leadTimeDays: null,
  specificationOverrides: {},
  evidence: {
    sourceType: "official_website",
    sourceUrl: "https://www.zfsycf.com.cn/",
    reviewedAt: "2026-08-02",
    note: "Relationship based on the official Zhongfu Shenying product and application directory; exact grade availability requires buyer confirmation.",
  },
};
