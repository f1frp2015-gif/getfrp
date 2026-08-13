import type { SupplierListing } from "@/lib/db/schema";

export const CHANGSHENG_CARBON_SUPPLIER_ID = "sup-changsheng-carbon";
export const CHANGSHENG_CARBON_SUPPLIER_SLUG = "changsheng-carbon";

// Curated from Changsheng Carbon's official English company, product,
// application, management-system, testing and contact pages. The locally
// stored logo is the higher-resolution footer wordmark served by the official
// site at /uploads/20250801/d1aac38bcd265a34425d5e4a8126f288.jpg.
// Product, capacity, certification and accreditation claims remain
// company-published and unverified by GetFRP.
export const CHANGSHENG_CARBON_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGSHENG_CARBON_SUPPLIER_ID,
  name: "长盛（廊坊）科技有限公司",
  nameEn: "Changsheng (Langfang) Technology Co., Ltd",
  slug: CHANGSHENG_CARBON_SUPPLIER_SLUG,
  location: "河北廊坊",
  locationEn: "Langfang, Hebei, China",
  province: "河北",
  category: "fiber",
  products: [
    "ZA50X-12K、ZA50G-12K 与 ZA50X-24K 碳纤维",
    "ZA55GC-12K、ZA55HC-12K 与 ZA55X-12K 碳纤维",
    "ZA60XC-12K 超高强碳纤维",
    "ZA70G-12K、ZA70UC-12K 与 ZA70XC-12K 碳纤维",
  ],
  productsEn: [
    "ZA50X-12K, ZA50G-12K and ZA50X-24K carbon fiber",
    "ZA55GC-12K, ZA55HC-12K and ZA55X-12K carbon fiber",
    "ZA60XC-12K ultra-high-strength carbon fiber",
    "ZA70G-12K, ZA70UC-12K and ZA70XC-12K carbon fiber",
  ],
  processList: [
    "PAN 原丝聚合",
    "纺丝",
    "预氧化与碳化",
    "上浆剂与界面技术开发",
    "碳纤维及复材应用测试",
  ],
  processListEn: [
    "PAN precursor polymerization",
    "Spinning",
    "Stabilization and carbonization",
    "Sizing and interface-technology development",
    "Carbon-fiber and composite application testing",
  ],
  established: 2021,
  verified: false,
  description:
    "长盛（廊坊）科技有限公司（长盛碳纤维）官网称公司成立于2021年12月2日，总部位于河北省廊坊高新技术产业开发区，注册资本17.08亿元，专注高性能碳纤维及复合材料的研发、生产与销售。官网公开的产品包括 ZA50、ZA55、ZA60 与 ZA70 系列，并称已同时实现 T700、T800、T1000 与 T1100 级碳纤维的工业化生产。",
  descriptionEn:
    "Changsheng (Langfang) Technology Co., Ltd, branded as Changsheng Carbon, states on its official site that it was established on December 2, 2021 and is headquartered in the Langfang High-tech Industrial Development Zone in Hebei. The company publishes a registered capital of RMB 1.708 billion and focuses on the development, manufacture and sale of high-performance carbon fiber and composite materials. Its official portfolio lists ZA50, ZA55, ZA60 and ZA70 series products, while the company introduction states that it has industrialized T700-, T800-, T1000- and T1100-grade carbon fiber.",
  certifications: [
    "ISO 9001（企业官网发布；采购方应核验现行证书及适用范围）",
    "IATF 16949（企业官网发布；采购方应核验现行证书及适用范围）",
    "环境管理体系认证（官网文字标题未标明标准号）",
    "职业健康安全管理体系认证（官网文字标题未标明标准号）",
    "CNAS L20630 / ISO/IEC 17025（企业称适用于特定检测项目）",
  ],
  certificationsEn: [
    "ISO 9001 (company-published; current certificate and scope to be confirmed)",
    "IATF 16949 (company-published; current certificate and scope to be confirmed)",
    "Environmental management system certification (standard number not stated in the page caption)",
    "Occupational health and safety management system certification (standard number not stated in the page caption)",
    "CNAS L20630 / ISO/IEC 17025 (company states accreditation applies to specific test items)",
  ],
  productsServicesSummary:
    "长盛碳纤维官网列出 ZA50X-12K、ZA50G-12K、ZA50X-24K、ZA55GC-12K、ZA55HC-12K、ZA55X-12K、ZA60XC-12K、ZA70G-12K、ZA70UC-12K 与 ZA70XC-12K 等牌号，并公开航空航天、压力容器、风电叶片、汽车、轨道交通、碳芯电缆、建筑桥梁、电子3C、医疗器械、体育休闲及碳/碳复材等应用。其科研页面称具备聚合、纺丝和碳化三大工序能力，并建有碳纤维检测实验室。公开页面以企业级与应用级信息为主，采购方应按目标牌号核验 TDS/SDS、丝束规格、拉伸强度与模量、线密度、上浆体系、测试方法、批次 COA、包装、最小订量、交期、证书有效性及目的市场的最终用途与出口管制要求。",
  productsServicesSummaryEn:
    "Changsheng Carbon's official site lists ZA50X-12K, ZA50G-12K, ZA50X-24K, ZA55GC-12K, ZA55HC-12K, ZA55X-12K, ZA60XC-12K, ZA70G-12K, ZA70UC-12K and ZA70XC-12K grades. Published application areas include aerospace, pressure vessels, wind blades, automotive, rail transit, carbon-core cable, bridges and buildings, electronic 3C products, medical devices, sporting goods and carbon/carbon composites. The R&D page describes capabilities across polymerization, spinning and carbonization, and the company publishes information about a dedicated carbon-fiber testing laboratory. The public pages are primarily company- and application-level disclosures. Buyers should validate the exact TDS/SDS, tow size, tensile strength and modulus, linear density, sizing compatibility, test method, batch COA, packaging, MOQ, lead time, current certificate scope and destination-market end-use or export-control requirements for the selected grade.",
  ecatalogs: [
    {
      title: "长盛碳纤维公司介绍",
      titleEn: "Changsheng Carbon Company Introduction",
      description: "成立日期、所在地、注册资本、技术路线与产业化能力的官网介绍。",
      descriptionEn:
        "Official company overview covering establishment, location, registered capital, technology and industrialization claims.",
      url: "http://www.csstgroup.com/index/lists?catname=about&lang=en",
      format: "Company profile",
    },
    {
      title: "碳纤维产品介绍",
      titleEn: "Carbon Fiber Product Introduction",
      description: "ZA50、ZA55、ZA60 与 ZA70 系列产品及应用概览。",
      descriptionEn:
        "Official product overview for the published ZA50, ZA55, ZA60 and ZA70 carbon-fiber families.",
      url: "http://www.csstgroup.com/index/lists?catname=product&lang=en",
      format: "Product page",
    },
    {
      title: "研发与工艺能力",
      titleEn: "R&D and Process Capabilities",
      description: "聚合、纺丝、碳化、研发平台、专利与应用技术的企业发布信息。",
      descriptionEn:
        "Company-published R&D information covering polymerization, spinning, carbonization, research platforms, patents and application technology.",
      url: "http://www.csstgroup.com/index/lists?catname=research&lang=en",
      format: "Technical overview",
    },
    {
      title: "管理体系认证",
      titleEn: "Management System Certifications",
      description: "官网展示的 IATF 16949、ISO 9001 及管理体系证书入口。",
      descriptionEn:
        "Official page displaying IATF 16949, ISO 9001 and other management-system certificates.",
      url: "http://www.csstgroup.com/index/lists?catname=system&lang=en",
      format: "Certificate directory",
    },
    {
      title: "碳纤维检测能力",
      titleEn: "Carbon Fiber Testing Capabilities",
      description: "CNAS L20630、ISO/IEC 17025 及检测设备与能力介绍。",
      descriptionEn:
        "Official laboratory overview covering CNAS L20630, ISO/IEC 17025 and published carbon-fiber testing equipment and capabilities.",
      url: "http://www.csstgroup.com/index/lists?catname=testing&lang=en",
      format: "Laboratory overview",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-12T00:00:00.000Z"),
  logo: "/supplier-assets/changsheng-carbon-logo.jpg",
  contactEmail: "salesoverseas@csstgroup.com",
  contactPhone: "+86 316 255 7065",
  address:
    "258 Fengxiang Road, Langfang High-tech Industrial Development Zone, Hebei Province, China",
  website: "http://www.csstgroup.com/?lang=en",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 26,
  viewCount: 0,
  capabilities: [
    "carbon fiber",
    "PAN-based carbon fiber",
    "T700-grade carbon fiber",
    "T800-grade carbon fiber",
    "T1000-grade carbon fiber",
    "T1100-grade carbon fiber",
    "12K carbon fiber",
    "24K carbon fiber",
    "carbon fiber testing",
  ],
  standardsSupported: ["ISO 9001", "IATF 16949", "ISO/IEC 17025"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-12T00:00:00.000Z"),
  updatedAt: new Date("2026-08-12T00:00:00.000Z"),
};
