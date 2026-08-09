import type { SupplierListing } from "@/lib/db/schema";

export const TLB_SUPPLIER_ID = "bf-tianlong";
export const TLB_SUPPLIER_SLUG = "jiangsu-tianlong-basalt-fiber";

// Curated from Jiangsu Tianlong's current official Chinese and English
// company, product and contact pages. Establishment, site area, patent,
// export-market and qualification statements are company-published claims and
// remain separate from GetFRP verification. The current official logo was
// downloaded from:
// https://www.tlcbf.com/static/home/default/images/common/logo.png
export const TLB_SUPPLIER_PROFILE: SupplierListing = {
  id: TLB_SUPPLIER_ID,
  name: "江苏天龙玄武岩连续纤维股份有限公司",
  nameEn: "Jiangsu Tianlong Basalt Continuous Fiber Co., Ltd.",
  slug: TLB_SUPPLIER_SLUG,
  location: "江苏仪征",
  locationEn: "Yizheng, Yangzhou, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "玄武岩纤维有捻纱、无捻纱、缝纫线与短切纤维",
    "玄武岩纤维针刺毡、网格布、套管、单向布与纤维带",
    "玄武岩纤维土工格栅",
    "玄武岩纤维复合筋与锚杆",
    "玻璃纤维复合筋",
    "道路贴缝带、抗裂贴及复合纤维防火密封系统",
  ],
  productsEn: [
    "Basalt fiber twisted yarn, roving, sewing thread and chopped fiber",
    "Basalt fiber needle felt, mesh, sleeves, unidirectional fabric and tape",
    "Basalt fiber geogrid",
    "Basalt fiber reinforced polymer rebar and anchor bolts",
    "Fiberglass reinforced polymer rebar",
    "Road joint-sealing and anti-crack tapes, plus composite-fiber fire-protection systems",
  ],
  processList: [
    "连续玄武岩纤维拉丝",
    "加捻、短切、缝纫线及纱线后加工",
    "织造、针刺与土工材料加工",
    "纤维复合筋、锚杆与型材成型",
    "功能性复合材料与防火密封系统开发",
    "材料检测、应用研发与技术咨询",
  ],
  processListEn: [
    "Continuous basalt-fiber drawing",
    "Twisting, chopping, sewing-thread and yarn post-processing",
    "Weaving, needle punching and geosynthetic fabrication",
    "Fiber-composite rebar, anchor-bolt and profile forming",
    "Functional composite and fire-protection system development",
    "Material testing, application R&D and technical consulting",
  ],
  established: 2007,
  verified: false,
  description:
    "江苏天龙玄武岩连续纤维股份有限公司于 2007 年 5 月成立于江苏省仪征市。企业官网称其业务涵盖连续玄武岩纤维及复合材料制品的研发、生产、销售、设备制造、技术咨询与服务；当前产品目录包括玄武岩纱线、短切纤维、织物与土工材料，以及 BFRP/GFRP 复合筋、锚杆、道路抗裂材料和复合纤维防火密封技术。官网公开的公司英文名为 Jiangsu Tianlong Basalt Continuous Fiber Co., Ltd.，品牌简称为 TLB。",
  descriptionEn:
    "Jiangsu Tianlong Basalt Continuous Fiber Co., Ltd. was established in Yizheng, Jiangsu, in May 2007. Its official website describes an integrated operation covering R&D, production, sales, equipment manufacture, technical consulting and services for continuous basalt fiber and composite products. The current directory spans basalt yarns, chopped fiber, fabrics and geosynthetics; BFRP and GFRP rebar; anchor bolts; road anti-crack materials; and composite-fiber fire-protection systems. The company uses TLB as its brand abbreviation.",
  certifications: [
    "ISO 9001（企业发展历程称 2011 年通过；当前证书范围与有效期需确认）",
    "国家高新技术企业（企业官网自述；当前资格状态需独立核验）",
  ],
  certificationsEn: [
    "ISO 9001 (the company timeline says certification was obtained in 2011; confirm current scope and validity)",
    "National high-tech enterprise (company-published; independently confirm current qualification status)",
  ],
  productsServicesSummary:
    "天龙官网将产品分为纤维、织物、复合筋、复合材料和新技术体系五类。公司称拥有 81,500 平方米办公、研发及生产场地，配置拉丝、后加工、复合材料生产和检测设备，并向 10 多个国家销售；官网同时称已拥有 70 多项发明专利。上述规模、专利和市场覆盖均为企业公开声明。采购方应在询盘、样品批准和工厂审核阶段确认玄武岩原料与纤维牌号、浸润剂和树脂相容性、单丝直径与 tex、含水率、织物克重与结构、复合筋直径与表面形式、树脂体系、保证力学值、试验标准、批次 COA、认证状态、MOQ、交期及出口包装。",
  productsServicesSummaryEn:
    "Tianlong's official website groups its portfolio into fibers, fabrics, composite reinforcement, composite materials and new technology systems. The company states that it has 81,500 m² of office, R&D and production space with fiber-drawing, post-processing, composite-production and testing equipment, sells to more than 10 countries, and holds more than 70 invention patents. These scale, patent and market-coverage figures are company-published claims. Buyers should confirm the basalt source and fiber grade, sizing and resin compatibility, filament diameter and tex, moisture, fabric weight and construction, rebar diameter and surface form, resin system, guaranteed mechanical values, test standard, batch COA, current certifications, MOQ, lead time and export packing during RFQ, sample approval and factory audit.",
  ecatalogs: [
    {
      title: "天龙英文官网",
      titleEn: "TLB Official English Website",
      description: "企业介绍、产品分类、应用案例、新闻和联系方式英文入口。",
      descriptionEn:
        "Official English entry point for the company, product categories, applications, news and contact details.",
      url: "https://www.tlcbf.com/?lang=en",
      format: "Official website",
    },
    {
      title: "天龙公司介绍",
      titleEn: "TLB Company Profile",
      description: "官网发布的企业沿革、场地、设备、研发与产品范围介绍。",
      descriptionEn:
        "Official company history and overview of facilities, equipment, R&D and product scope.",
      url: "https://www.tlcbf.com/about?lang=en",
      format: "Company profile",
    },
    {
      title: "玄武岩纤维产品目录",
      titleEn: "Basalt Fiber Product Directory",
      description: "有捻纱、无捻纱、缝纫线和短切玄武岩纤维目录。",
      descriptionEn:
        "Official directory for twisted yarn, roving, sewing thread and chopped basalt fiber.",
      url: "https://www.tlcbf.com/xwl?lang=en",
      format: "Product directory",
    },
    {
      title: "玄武岩织物与土工材料目录",
      titleEn: "Basalt Fabric and Geosynthetic Directory",
      description: "针刺毡、网格布、套管、单向布、纤维带和土工格栅目录。",
      descriptionEn:
        "Official directory for needle felt, mesh, sleeves, unidirectional fabric, tape and geogrid.",
      url: "https://www.tlcbf.com/zwl?lang=en",
      format: "Product directory",
    },
    {
      title: "玄武岩纤维复合筋",
      titleEn: "Basalt Fiber Reinforced Polymer Rebar",
      description: "官网发布的 BFRP 复合筋产品说明与企业自述性能特点。",
      descriptionEn:
        "Official BFRP rebar description and company-published performance characteristics.",
      url: "https://www.tlcbf.com/fhj/260.html?lang=en",
      format: "Product page",
    },
    {
      title: "天龙联系方式",
      titleEn: "TLB Contact Details",
      description: "官网发布的仪征地址、销售电话、热线和产品咨询邮箱。",
      descriptionEn:
        "Official Yizheng address, sales telephone, hotline and product-inquiry email.",
      url: "https://www.tlcbf.com/contact?lang=en",
      format: "Contact page",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-09T00:00:00.000Z"),
  logo: "/supplier-assets/tlb-logo.png",
  contactEmail: "tianlong@tlcbf.com",
  contactPhone: "+86 153 5856 9950",
  address:
    "No. 9 Jingxiu Road, Yizheng Economic Development Zone, Yangzhou, Jiangsu, China",
  website: "https://www.tlcbf.com/?lang=en",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 16,
  viewCount: 0,
  capabilities: [
    "continuous basalt fiber",
    "basalt fiber yarn",
    "chopped basalt fiber",
    "basalt fiber fabrics",
    "basalt fiber geogrid",
    "BFRP rebar",
    "GFRP rebar",
    "composite anchor bolts",
    "road anti-crack materials",
    "composite fiber fire protection",
    "application R&D",
    "material testing",
  ],
  standardsSupported: ["JT/T 776-2010", "JG/T 365-2012"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-09T00:00:00.000Z"),
  updatedAt: new Date("2026-08-09T00:00:00.000Z"),
};
