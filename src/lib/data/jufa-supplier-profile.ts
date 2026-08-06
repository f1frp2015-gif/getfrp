import type { SupplierListing } from "@/lib/db/schema";

export const JUFA_SUPPLIER_ID = "sup-jufa-new-material";
export const JUFA_SUPPLIER_SLUG = "jufa-new-material";
export const JUFA_PRODUCT_ID = "resin-gelcoat";

// Curated from Nanjing Jufa's current Chinese and English official websites.
// Company-published capability, award and certification statements remain
// separate from GetFRP verification. The official header logo was downloaded
// from the supplier's website at:
// http://www.jufa-composite.com/portal-saas/pg2025012316112855742/cms/image/cb4b54fc-b3d3-4357-8985-cbf8c96da5b7.png
export const JUFA_SUPPLIER_PROFILE: SupplierListing = {
  id: JUFA_SUPPLIER_ID,
  name: "南京聚发新材料有限公司",
  nameEn: "Nanjing Jufa New Material Co., Ltd.",
  slug: JUFA_SUPPLIER_SLUG,
  location: "江苏南京",
  locationEn: "Nanjing, Jiangsu, China",
  province: "江苏",
  category: "resin",
  products: [
    "聚氨酯拉挤树脂（含脂肪族、低烟低毒阻燃体系）",
    "聚氨酯缠绕树脂",
    "聚氨酯 RTM 与真空灌注树脂",
    "聚氨酯湿法模压树脂",
    "聚氨酯 SMC 片材",
    "聚氨酯预浸料树脂与预浸料织物",
    "复合材料用环氧灌注、拉挤与手糊树脂",
    "聚氨酯、环氧及丙烯酸胶粘剂",
  ],
  productsEn: [
    "Polyurethane pultrusion resins, including aliphatic and low-FST systems",
    "Polyurethane filament-winding resins",
    "Polyurethane RTM and vacuum-infusion resins",
    "Polyurethane wet-compression-molding resins",
    "Polyurethane SMC sheet materials",
    "Polyurethane prepreg resins and prepreg fabrics",
    "Epoxy infusion, pultrusion and hand-lay-up resin systems",
    "Polyurethane, epoxy and acrylic adhesives",
  ],
  processList: [
    "纤维增强复合材料树脂配方与应用开发",
    "定制材料开发、试制与工艺适配",
    "拉挤、缠绕、RTM/VARTM 与湿法模压工艺支持",
    "SMC 与预浸料体系开发",
    "聚氨酯改性树脂开发",
    "应用测试与质量控制支持",
  ],
  processListEn: [
    "Resin formulation and application development for fiber-reinforced composites",
    "Custom material development, pilot trials and process matching",
    "Process support for pultrusion, filament winding, RTM/VARTM and wet compression molding",
    "SMC and prepreg system development",
    "Polyurethane-modified resin development",
    "Application testing and quality-control support",
  ],
  established: 2018,
  verified: false,
  description:
    "南京聚发新材料有限公司成立于 2018 年，专注于聚氨酯及聚氨酯改性树脂在纤维增强复合材料中的应用开发。公司官网公开的产品组合覆盖拉挤、纤维缠绕、RTM/真空灌注、湿法模压、SMC 和预浸料等工艺，并通过与康达新材合作补充环氧树脂及聚氨酯、环氧和丙烯酸胶粘剂产品。官网还将光伏边框与支架、节能窗框、管道、高铁构件、化工桥架、风电和储能列为相关应用方向。",
  descriptionEn:
    "Founded in 2018, Nanjing Jufa New Material Co., Ltd. develops polyurethane and polyurethane-modified resin systems for fiber-reinforced composites. Its official website publishes material solutions for pultrusion, filament winding, RTM/vacuum infusion, wet compression molding, SMC and prepreg processing. Through cooperation with Kangda New Materials, the published supply scope also includes epoxy resins and polyurethane, epoxy and acrylic adhesives. Jufa highlights applications including photovoltaic frames and supports, energy-efficient window frames, composite pipe, high-speed rail components, chemical cable trays, wind energy and energy storage.",
  certifications: [
    "ISO 9001（企业发展历程公开；证书范围与有效期需确认）",
    "国家高新技术企业（企业官网公开）",
    "江苏省专精特新企业（企业官网公开，2024）",
    "国家级专精特新“小巨人”企业（企业官网公开，2025）",
    "光伏边框与脂肪族树脂 TÜV 认证（产品级，范围与有效期需确认）",
  ],
  certificationsEn: [
    "ISO 9001 (company-published history; confirm certificate scope and validity)",
    "National High-Tech Enterprise (company-published)",
    "Jiangsu Specialized, Refined, Distinctive and Innovative Enterprise (company-published, 2024)",
    "National Specialized and Innovative 'Little Giant' Enterprise (company-published, 2025)",
    "TUV certification for photovoltaic-frame and aliphatic resin products (product-level; confirm scope and validity)",
  ],
  productsServicesSummary:
    "聚发官网公开的聚氨酯复材体系覆盖脂肪族耐候拉挤、低烟低毒阻燃拉挤、缠绕、长操作期真空灌注、RTM、湿法模压、SMC 与预浸料，并列出光伏、高铁、风电叶片、复合材料杆塔、节能门窗、化工桥架及储能等应用。官网“企业实力”页面称年产能超过 10 万吨，并列出多项管理与实验室体系；检测能力页面同时说明部分检测服务由康达新材上海技术中心提供，因此采购方应在询盘阶段确认实际供货法人、生产基地、牌号 TDS/SDS、混配比例、工艺窗口、储存期、认证报告适用范围、MOQ、交期及批次追溯要求。",
  productsServicesSummaryEn:
    "Jufa's official site presents polyurethane composite systems for weather-resistant aliphatic pultrusion, low-FST pultrusion, filament winding, long-pot-life vacuum infusion, RTM, wet compression molding, SMC and prepreg. Published applications include photovoltaic structures, high-speed rail, wind blades, composite poles and towers, energy-efficient windows, chemical cable trays and energy storage. The company-strength page states annual capacity above 100,000 tonnes and lists several management and laboratory systems, while the testing page also attributes some services to Kangda New Materials' Shanghai technical center. Buyers should therefore confirm the contracting entity, production site, grade-specific TDS/SDS, mix ratio, processing window, shelf life, applicable certification reports, MOQ, lead time and batch traceability during RFQ.",
  ecatalogs: [
    {
      title: "聚发新材官网",
      titleEn: "Jufa New Material Official Website",
      description: "公司概况、产品系列、应用、技术支持与联系方式总览。",
      descriptionEn:
        "Official overview of the company, product families, applications, technical support and contacts.",
      url: "http://www.jufa-composite.com/",
      format: "Official website",
    },
    {
      title: "聚发新材英文官网",
      titleEn: "Jufa New Material English Website",
      description: "面向国际采购方的英文公司、树脂体系与联系方式。",
      descriptionEn:
        "English-language company, resin-system and export-contact information for international buyers.",
      url: "http://en.jufa-composite.com/",
      format: "Official English website",
    },
    {
      title: "聚发公司简介",
      titleEn: "Jufa Company Profile",
      description: "公司沿革、聚氨酯复材产品组合及合作供应范围。",
      descriptionEn:
        "Official company history, polyurethane composite portfolio and cooperative supply scope.",
      url: "http://www.jufa-composite.com/about_us/3.html",
      format: "Company profile",
    },
    {
      title: "聚氨酯树脂产品目录",
      titleEn: "Polyurethane Resin Product Directory",
      description: "拉挤、缠绕、RTM、湿法模压、SMC 与预浸料体系。",
      descriptionEn:
        "Official product directory for pultrusion, winding, RTM, wet compression molding, SMC and prepreg systems.",
      url: "http://www.jufa-composite.com/Products/20.html",
      format: "Product directory",
    },
    {
      title: "应用领域",
      titleEn: "Composite Application Directory",
      description: "光伏、门窗、管道、高铁与化工桥架等应用展示。",
      descriptionEn:
        "Official application directory covering photovoltaic structures, windows, pipe, high-speed rail and chemical cable trays.",
      url: "http://www.jufa-composite.com/yingyong.html",
      format: "Application directory",
    },
    {
      title: "技术资料下载",
      titleEn: "Jufa Technical Downloads",
      description: "聚氨酯树脂、复材工艺、光伏边框及检测标准资料。",
      descriptionEn:
        "Official technical resources for polyurethane resins, composite processes, photovoltaic frames and test standards.",
      url: "http://www.jufa-composite.com/Download.html",
      format: "Technical library",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/jufa-logo.png",
  contactEmail: "sales3@jufa-composite.com",
  contactPhone: "+86 186 5164 2188",
  address:
    "Building A, Chuangzhi Industrial Park, No. 37 Shenzhou Road, Lukou Street, Jiangning District, Nanjing, Jiangsu, China",
  website: "http://www.jufa-composite.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 22,
  viewCount: 0,
  capabilities: [
    "polyurethane composite resin",
    "pultrusion resin",
    "filament winding resin",
    "RTM and vacuum infusion resin",
    "wet compression molding",
    "SMC materials",
    "prepreg resin",
    "epoxy resin systems",
    "composite adhesives",
    "custom resin development",
  ],
  standardsSupported: ["ISO 9001"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};

export const JUFA_PRODUCT_RELATION = {
  supplierListingId: JUFA_SUPPLIER_ID,
  productId: JUFA_PRODUCT_ID,
  relationshipType: "supplier",
  supplierProductName:
    "Polyurethane composite resins and epoxy resin systems",
  isPrimary: true,
  isVerified: false,
  customAvailable: true,
  moq: null,
  moqUnit: null,
  leadTimeDays: null,
  specificationOverrides: {},
  evidence: {
    sourceType: "official_website",
    sourceUrl: "http://www.jufa-composite.com/Products/20.html",
    reviewedAt: "2026-08-05",
    note: "Relationship is based on Jufa's official resin directory; buyers should verify grade-specific properties and current supply terms.",
  },
};
