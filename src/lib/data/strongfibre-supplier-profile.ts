import type { SupplierListing } from "@/lib/db/schema";

export const STRONGFIBRE_SUPPLIER_ID = "sup-strongfibre";
export const STRONGFIBRE_SUPPLIER_SLUG = "strongfibre";
export const STRONGFIBRE_LEGAL_NAME_EN = "Nantong Strongfibre Co., Ltd.";

// Curated from Strongfibre's official Chinese and English websites. Capacity,
// certification and group-affiliation statements are company-published claims
// and remain separate from GetFRP verification. Official logo source:
// http://strongfibre.com/upload/202305/1684894453.png
export const STRONGFIBRE_SUPPLIER_PROFILE: SupplierListing = {
  id: STRONGFIBRE_SUPPLIER_ID,
  name: "南通盛世纤维制品有限公司",
  nameEn: "Strongfibre",
  slug: STRONGFIBRE_SUPPLIER_SLUG,
  location: "江苏南通",
  locationEn: "Nantong, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "玻璃纤维织物",
    "玻璃纤维单轴向、双轴向、三轴向与四轴向织物",
    "玻璃纤维原丝短切毡与针织短切毡",
    "玻璃纤维方格布",
    "多轴向织物、方格布与短切毡复合毡",
    "玄武岩纤维织物与多轴向复合织物",
    "玻璃纤维与碳纤维混杂织物",
  ],
  productsEn: [
    "Fiberglass fabrics",
    "Unidirectional, biaxial, triaxial and quadaxial fiberglass fabrics",
    "Fiberglass chopped strand mat and stitched chopped strand mat",
    "Fiberglass woven roving",
    "Multiaxial, woven-roving and chopped-strand combo mats",
    "Basalt fiber fabrics and multiaxial combo mats",
    "Glass- and carbon-fiber hybrid fabrics",
  ],
  processList: [
    "单轴向与多轴向铺层和缝编",
    "玻璃纤维与玄武岩纤维织造",
    "短切原丝铺放与毡类加工",
    "毡布复合缝编",
    "厂内试验与测量",
  ],
  processListEn: [
    "Unidirectional and multiaxial lay-up and stitch bonding",
    "Fiberglass and basalt-fiber weaving",
    "Chopped-strand laying and mat production",
    "Fabric-and-mat combo stitch bonding",
    "In-house testing and measurement",
  ],
  established: null,
  verified: false,
  description:
    "南通盛世纤维制品有限公司以 Strongfibre 品牌开展业务。公司官网称其为 Strongworld Group 旗下企业，位于江苏南通，专注玻璃纤维经编织物、短切毡、复合毡、玄武岩纤维织物以及玻纤/碳纤混杂织物的生产与销售，并面向型材、船艇、汽车、轨道交通、光固化管道、风电、建材及航空航天等复合材料应用供货。",
  descriptionEn:
    "Strongfibre is the brand used by Nantong Strongfibre Co., Ltd., which its official website describes as a Strongworld Group company in Nantong, Jiangsu. The manufacturer publishes a reinforcement range spanning fiberglass stitched fabrics, chopped strand mats, combo mats, basalt fabrics and glass/carbon hybrid fabrics for profiles, marine, automotive, rail, cured-in-place pipe, wind-energy, building-material and aerospace applications.",
  certifications: [
    "ISO 9001:2015（企业官网公开；证书范围与有效期需确认）",
  ],
  certificationsEn: [
    "ISO 9001:2015 (company-published; confirm certificate scope and validity)",
  ],
  productsServicesSummary:
    "盛世官网产品目录覆盖玻纤单轴向、双轴向、三轴向和四轴向织物、方格布、原丝短切毡、针织短切毡、多类复合毡、玄武岩纤维织物及混杂织物。公司公开称其配备编织设备和厂内试验测量设施，全年稳定产能达 12,000 吨。采购方应在询盘和样品审批阶段确认纤维牌号与浸润剂、克重、铺层方向、幅宽、缝编线、树脂相容性、卷长、包装、测试方法、认证范围、MOQ 与交期。",
  productsServicesSummaryEn:
    "Strongfibre's official directory covers unidirectional, biaxial, triaxial and quadaxial fiberglass fabrics, woven roving, chopped strand mats, stitched mats, several combo-mat constructions, basalt fabrics and hybrid reinforcements. The company states that it operates weaving equipment and in-house test facilities with stable annual capacity of 12,000 tonnes. Buyers should confirm the fiber grade and sizing, areal weight, reinforcement orientation, width, stitch yarn, resin compatibility, roll length, packaging, test method, certification scope, MOQ and lead time during RFQ and sample approval.",
  ecatalogs: [
    {
      title: "盛世纤维英文官网",
      titleEn: "Strongfibre Official English Website",
      description: "公司、主要产品、应用、产能声明与公开联系方式总览。",
      descriptionEn:
        "Official overview of the company, core products, applications, published capacity and contact details.",
      url: "http://strongfibre.com/index.php?lang=en",
      format: "Official website",
    },
    {
      title: "盛世纤维公司介绍",
      titleEn: "Strongfibre Company Profile",
      description: "官网发布的企业、产品、设备、产能和应用介绍。",
      descriptionEn:
        "Official company profile covering products, equipment, published capacity and application markets.",
      url: "http://strongfibre.com/about/show.php?id=179",
      format: "Company profile",
    },
    {
      title: "盛世纤维产品目录",
      titleEn: "Strongfibre Product Directory",
      description: "短切毡、多轴向织物、方格布、复合毡、玄武岩及混杂织物目录。",
      descriptionEn:
        "Official directory for chopped strand mats, multiaxial fabrics, woven roving, combo mats, basalt and hybrid fabrics.",
      url: "http://strongfibre.com/product/product.php?class1=166",
      format: "Product directory",
    },
    {
      title: "玻璃纤维多轴向织物",
      titleEn: "Fiberglass Multiaxial Fabrics",
      description: "官网单轴向、双轴向、三轴向及四轴向缝编织物产品入口。",
      descriptionEn:
        "Official product directory for unidirectional, biaxial, triaxial and quadaxial stitch-bonded fabrics.",
      url: "http://strongfibre.com/product/product.php?class2=173",
      format: "Technical directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/strongfibre-logo.png",
  contactEmail: "strongrate@strongrate.com",
  contactPhone: "+86-513-86865691",
  address:
    "158 Yuwan Middle Road, Shigang Technology Industrial Park, Tongzhou District, Nantong 226300, Jiangsu, China",
  website: "http://strongfibre.com/index.php?lang=en",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 16,
  viewCount: 0,
  capabilities: [
    "fiberglass fabrics",
    "unidirectional fabrics",
    "multiaxial fabrics",
    "chopped strand mat",
    "woven roving",
    "combo mat",
    "basalt fiber fabrics",
    "glass carbon hybrid fabrics",
    "stitch bonding",
  ],
  standardsSupported: ["ISO 9001:2015"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};

export const STRONGFIBRE_PRODUCT_RELATION = {
  supplierListingId: STRONGFIBRE_SUPPLIER_ID,
  productId: "fiber-glass",
  relationshipType: "supplier",
  supplierProductName: "Fiberglass multiaxial fabrics, mats and woven reinforcements",
  isPrimary: true,
  isVerified: false,
  customAvailable: false,
  moq: null,
  moqUnit: null,
  leadTimeDays: null,
  specificationOverrides: {},
  evidence: {
    sourceType: "official_website",
    sourceUrl: "http://strongfibre.com/product/product.php?class1=166",
    reviewedAt: "2026-08-05",
    note: "Relationship based on Strongfibre's official product directory; exact construction, specification and commercial availability require buyer confirmation.",
  },
};
