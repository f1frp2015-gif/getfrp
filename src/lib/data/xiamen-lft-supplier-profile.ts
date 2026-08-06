import type { SupplierListing } from "@/lib/db/schema";

export const XIAMEN_LFT_SUPPLIER_ID = "sup-xiamen-lft";
export const XIAMEN_LFT_SUPPLIER_SLUG = "xiamen-lft-composite-plastic";

// Curated from Xiamen LFT's official English company-history, product,
// technical-data and contact pages. The company publishes multiple founding
// dates in its marketing materials; this profile uses 2016 because the
// official history specifically identifies that year as the creation of
// Xiamen LFT Composite Plastic Co., Ltd. Certification, facility, patent,
// performance and market claims remain company-published and unverified by
// GetFRP. The current official logo was downloaded from
// https://www.lfrt-plastic.com/uploads/15364/logo.png; the server supplies a
// WebP image, stored locally as public/supplier-assets/xiamen-lft-logo.webp.
export const XIAMEN_LFT_SUPPLIER_PROFILE: SupplierListing = {
  id: XIAMEN_LFT_SUPPLIER_ID,
  name: "长纤（厦门）新材料科技有限公司",
  nameEn: "Xiamen LFT Composite Plastic Co., Ltd.",
  slug: XIAMEN_LFT_SUPPLIER_SLUG,
  location: "福建厦门",
  locationEn: "Xiamen, Fujian, China",
  province: "福建",
  category: "manufacturer",
  products: [
    "PP 长玻纤与长碳纤增强热塑性粒料",
    "PA6、PA66 与 PA12 长玻纤/长碳纤增强粒料",
    "PBT、TPU、PPS 与 PPA 长纤维增强热塑性粒料",
    "PEEK、PEI 与 MXD6 长碳纤增强工程塑料粒料",
    "ABS、PPO、PLA 与 HDPE 长玻纤增强粒料",
    "按应用定制的 LFT / LFRT 配方、颜色与纤维含量",
  ],
  productsEn: [
    "Long-glass- and long-carbon-fiber reinforced polypropylene compounds",
    "Long-fiber reinforced PA6, PA66 and PA12 compounds",
    "Long-fiber reinforced PBT, TPU, PPS and PPA compounds",
    "Long-carbon-fiber reinforced PEEK, PEI and MXD6 compounds",
    "Long-glass-fiber reinforced ABS, PPO, PLA and HDPE compounds",
    "Application-specific LFT/LFRT formulations, colors and fiber contents",
  ],
  processList: [
    "长玻纤与长碳纤连续浸渍及粒料生产",
    "热塑性基体与增强体系配方开发",
    "材料选型、性能分析与金属替代支持",
    "注塑、型材挤出及模压成型应用支持",
    "定制配方、颜色、添加剂与纤维含量",
    "技术数据、样品与量产导入支持",
  ],
  processListEn: [
    "Continuous long-glass- and long-carbon-fiber impregnation and pellet production",
    "Thermoplastic matrix and reinforcement formulation",
    "Material selection, performance analysis and metal-replacement support",
    "Application support for injection molding, profile extrusion and compression molding",
    "Custom formulations, colors, additives and fiber contents",
    "Technical data, sampling and production-introduction support",
  ],
  established: 2016,
  verified: false,
  description:
    "长纤（厦门）新材料科技有限公司以 LFT-G® 品牌开发和生产长纤维增强热塑性复合材料。其官网公司历史将 2016 年列为 Xiamen LFT Composite Plastic Co., Ltd. 的创立年份，并称厦门基地面积约 12,000 平方米，涵盖办公、技术开发、复合粒料制造及配套加工。公开产品以玻璃纤维或碳纤维增强 PP、PA、PBT、TPU、PPS、PPA、PEEK 等热塑性基体为主，面向汽车与新能源、家电、工业设备、航空航天、运动休闲等轻量化应用。",
  descriptionEn:
    "Xiamen LFT Composite Plastic Co., Ltd. develops and manufactures long-fiber reinforced thermoplastic compounds under the LFT-G® brand. Its official company history identifies 2016 as the year Xiamen LFT was created, and the company describes an approximately 12,000 m² Xiamen facility covering offices, technical development, composite-pellet manufacturing and captive processing. The published range combines long glass or carbon fiber with thermoplastic matrices including PP, PA, PBT, TPU, PPS, PPA and PEEK for lightweight automotive and EV, appliance, industrial-equipment, aerospace and sporting-goods applications.",
  certifications: [
    "ISO 9001（企业官网公开；认证主体、范围与有效期需核验）",
    "ISO 14001（企业官网公开；认证主体、范围与有效期需核验）",
    "IATF 16949 汽车质量体系（企业新闻页面公开；证书与适用工厂需核验）",
  ],
  certificationsEn: [
    "ISO 9001 (company-published; confirm certified entity, scope and validity)",
    "ISO 14001 (company-published; confirm certified entity, scope and validity)",
    "IATF 16949 automotive quality system (stated on company news pages; confirm certificate and applicable plant)",
  ],
  productsServicesSummary:
    "Xiamen LFT 官网列出的材料矩阵包括 PP、PA6、PA66、PA12、PBT、TPU、PPS、PPA、PEEK、PEI、MXD6、ABS、PPO、PLA 与 HDPE，并同时提供长玻纤和长碳纤系列。官网技术数据中心发布部分标准牌号 TDS，并称可按应用要求定制复合配方，支持从产品概念、材料选型和性能分析，到粒料生产及注塑、型材挤出、模压成型应用导入。公开的性能、产能、客户、专利与认证数据均为企业自述；采购方应针对具体牌号核验 TDS/SDS、树脂与纤维类型、纤维含量及保留长度、阻燃或导电等级、力学与热性能、颜色、粒长、合规文件、包装、MOQ、交期与批次一致性。",
  productsServicesSummaryEn:
    "Xiamen LFT's official directory lists PP, PA6, PA66, PA12, PBT, TPU, PPS, PPA, PEEK, PEI, MXD6, ABS, PPO, PLA and HDPE matrices across long-glass- and long-carbon-fiber product families. Its technical-data center publishes selected standard-grade data sheets, while the company also states that it custom-formulates compounds and supports projects from concept, material selection and performance analysis through pellet production and introduction to injection molding, profile extrusion or compression molding. Published performance, capacity, customer, patent and certification statements are company-supplied. Buyers should validate the exact TDS/SDS, matrix and fiber type, fiber loading and retained length, flame-retardant or conductive grade, mechanical and thermal data, color, pellet length, compliance documents, packaging, MOQ, lead time and batch consistency for the quoted material.",
  ecatalogs: [
    {
      title: "Xiamen LFT 英文官网",
      titleEn: "Xiamen LFT Official Website",
      description: "LFT-G® 产品系列、材料优势、应用与联系信息总览。",
      descriptionEn:
        "Official overview of LFT-G® material families, published advantages, applications and contact information.",
      url: "https://www.lfrt-plastic.com/",
      format: "Official website",
    },
    {
      title: "Xiamen LFT 公司介绍",
      titleEn: "Xiamen LFT Company Profile",
      description: "公司沿革、工厂、产品、应用、质量与市场信息。",
      descriptionEn:
        "Official company history and published factory, product, application, quality and market information.",
      url: "https://www.lfrt-plastic.com/about-us",
      format: "Company profile",
    },
    {
      title: "LFT-G® 产品目录",
      titleEn: "LFT-G® Product Directory",
      description: "长玻纤与长碳纤增强热塑性粒料的材料系列入口。",
      descriptionEn:
        "Official directory for long-glass- and long-carbon-fiber reinforced thermoplastic compound families.",
      url: "https://www.lfrt-plastic.com/products",
      format: "Product directory",
    },
    {
      title: "LFT-G® 技术数据中心",
      titleEn: "LFT-G® Technical Data Sheet Centre",
      description: "PP、PA、PPS、TPU 等标准长纤增强牌号的 TDS 入口。",
      descriptionEn:
        "Official data-sheet directory for selected PP, PA, PPS, TPU and other long-fiber compound grades.",
      url: "https://www.lfrt-plastic.com/technical-data-sheet",
      format: "Technical data directory",
    },
    {
      title: "Xiamen LFT 服务能力",
      titleEn: "Xiamen LFT Services",
      description: "材料、设计与工艺工程支持及全生命周期服务说明。",
      descriptionEn:
        "Official overview of material, design and process-engineering support across the product life cycle.",
      url: "https://www.lfrt-plastic.com/our-services",
      format: "Service overview",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/xiamen-lft-logo.webp",
  contactEmail: "candyhu@lfrtplastic.com",
  contactPhone: "+86 139 5009 5707",
  address:
    "Building B, No. 55 Hongxi South Road, Torch High-tech Zone, Xiang'an District, Xiamen, Fujian 361101, China",
  website: "https://www.lfrt-plastic.com/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "long glass fiber thermoplastic compounds",
    "long carbon fiber thermoplastic compounds",
    "PP LFT compounds",
    "PA6 and PA66 LFT compounds",
    "PPS and PPA LFT compounds",
    "PEEK LCF compounds",
    "custom thermoplastic compounding",
    "metal-replacement material development",
    "injection-molding material support",
  ],
  standardsSupported: ["ISO 9001", "ISO 14001", "IATF 16949"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
