import type { SupplierListing } from "@/lib/db/schema";

export const WELLS_WAM_SUPPLIER_ID = "sup-wells-wam";
export const WELLS_WAM_SUPPLIER_SLUG = "wells-advanced-materials";

// Curated from Wells Advanced Materials' official English website, company
// profile and download center. Company-published product, patent and
// certification statements remain separate from GetFRP verification.
// Official logo source:
// https://en.wellswam.com/static/upload/image/20240607/1717720491551036.png
export const WELLS_WAM_SUPPLIER_PROFILE: SupplierListing = {
  id: WELLS_WAM_SUPPLIER_ID,
  name: "惠柏新材料科技（上海）股份有限公司",
  nameEn: "Wells Advanced Materials (Shanghai) Co., Ltd.",
  slug: WELLS_WAM_SUPPLIER_SLUG,
  location: "上海嘉定",
  locationEn: "Jiading, Shanghai, China",
  province: "上海",
  category: "resin",
  products: [
    "风电叶片用环氧树脂体系",
    "真空导入与手糊用环氧树脂体系",
    "拉挤与 RTM 工艺用环氧树脂",
    "碳纤维预浸丝与预浸料专用树脂",
    "结构粘接环氧胶膜",
    "电子电气绝缘与封装用环氧树脂",
  ],
  productsEn: [
    "Wind-energy epoxy resin systems",
    "Vacuum-infusion and hand-lay-up epoxy systems",
    "Epoxy resin systems for pultrusion and RTM",
    "Carbon-fiber towpreg and specialty prepreg resins",
    "Structural adhesive epoxy films",
    "Epoxy resins for electrical insulation and encapsulation",
  ],
  processList: [
    "特种配方改性环氧树脂研发",
    "风电与高性能复合材料应用开发",
    "预浸料、拉挤、RTM 与真空导入树脂体系开发",
    "电子电气绝缘封装材料研发",
    "差异化配方与客户应用支持",
  ],
  processListEn: [
    "Specialty formulated and modified epoxy-resin development",
    "Wind-energy and high-performance composite application development",
    "Resin-system development for prepreg, pultrusion, RTM and infusion",
    "Electrical-insulation and encapsulation material development",
    "Customized formulations and customer application support",
  ],
  established: 2010,
  verified: false,
  description:
    "惠柏新材料科技（上海）股份有限公司成立于 2010 年，专注特种配方改性环氧树脂及高性能复合材料解决方案。公司官网披露，其重点服务风电叶片、电子电气绝缘封装、交通运输轻量化、体育休闲器材和新型显示等市场，并在上海、广州及珠海建立子公司和研发、生产、销售网络。公司于 2023 年在深圳证券交易所创业板上市，股票代码 301555。",
  descriptionEn:
    "Wells Advanced Materials (Shanghai) Co., Ltd. was established in 2010 and focuses on specialty formulated and modified epoxy resins for high-performance composite applications. Its official website identifies wind-turbine blades, electrical and electronic insulation and encapsulation, lightweight transportation, sports and leisure equipment, and new-display materials as core markets, supported by subsidiaries and R&D, production and sales operations in Shanghai, Guangzhou and Zhuhai. The company listed on the Shenzhen Stock Exchange's ChiNext market in 2023 under stock code 301555.",
  certifications: [
    "质量管理体系认证（企业官网公开；具体标准、范围与有效期需确认）",
    "环境管理体系认证（企业官网公开；具体标准、范围与有效期需确认）",
    "职业健康安全管理体系认证（企业官网公开；具体标准、范围与有效期需确认）",
    "IATF 16949:2016（企业官网公开；范围与有效期需确认）",
    "EcoVadis 2024 铜牌（企业官网公开）",
  ],
  certificationsEn: [
    "Quality management system certification (company-published; confirm the standard, scope and validity)",
    "Environmental management system certification (company-published; confirm the standard, scope and validity)",
    "Occupational health and safety management system certification (company-published; confirm the standard, scope and validity)",
    "IATF 16949:2016 (company-published; confirm certificate scope and validity)",
    "EcoVadis Bronze Medal 2024 (company-published)",
  ],
  productsServicesSummary:
    "惠柏新材官网与下载中心公开的复合材料产品覆盖风电叶片灌注环氧、通用真空导入和手糊体系、拉挤及 RTM 环氧、预浸料树脂、碳纤维预浸丝、结构胶膜和电子电气封装材料。其拉挤资料列出碳纤维板材、方管、电缆芯、风电叶片大梁、电力横担、锚栓、抽油杆与异型材等应用，并提供 AP-3280A/B 等推荐体系。采购方应按具体牌号确认 TDS/SDS、混合比例、粘度、适用纤维、固化制度、耐温、认证范围、包装、MOQ、交期与出口目的地供货安排。",
  productsServicesSummaryEn:
    "WAM's official website and download center publish composite-material systems for wind-blade infusion, general vacuum infusion and hand lay-up, epoxy pultrusion and RTM, prepreg resins, carbon-fiber towpreg, structural adhesive films, and electrical and electronic encapsulation. Its pultrusion literature covers carbon-fiber plates and square tubes, composite cable cores, wind-blade spar caps, utility crossarms, anchors, sucker rods and custom profiles, and names AP-3280A/B among its recommended systems. Buyers should confirm the grade-specific TDS/SDS, mixing ratio, viscosity, fiber compatibility, cure schedule, heat resistance, certification scope, packaging, MOQ, lead time and destination-market availability before approval.",
  ecatalogs: [
    {
      title: "惠柏新材英文公司介绍",
      titleEn: "Wells Advanced Materials Company Profile",
      description: "官网发布的公司沿革、研发网络、重点市场、上市信息与企业公开认证。",
      descriptionEn:
        "Official company history, R&D network, target markets, listing information and company-published certifications.",
      url: "https://www.wellswam.com/en/aboutus-20/",
      format: "Company profile",
    },
    {
      title: "惠柏新材产品资料下载中心",
      titleEn: "WAM Product & Technical Download Center",
      description: "宣传册、产品单页和技术文档的官网英文下载入口。",
      descriptionEn:
        "Official English download directory for brochures, product flyers and technical documents.",
      url: "https://www.wellswam.com/en/download/",
      format: "Official website",
    },
    {
      title: "拉挤工艺用环氧树脂",
      titleEn: "Epoxy Resin Systems for Pultrusion",
      description: "拉挤树脂特性、典型应用及 AP-3280A/B 产品介绍。",
      descriptionEn:
        "Official technical flyer covering epoxy-pultrusion properties, applications and the AP-3280A/B system.",
      url: "https://www.wellswam.com/en/static/upload/file/20260304/1772613774427661.pdf",
      format: "PDF",
    },
    {
      title: "RTM 环氧树脂系列",
      titleEn: "RTM Epoxy Resin Series",
      description: "官网发布的 RTM 工艺用环氧树脂产品单页。",
      descriptionEn: "Official product flyer for WAM's RTM epoxy resin systems.",
      url: "https://www.wellswam.com/en/static/upload/file/20251103/1762156722707422.pdf",
      format: "PDF",
    },
    {
      title: "预浸料环氧树脂系列",
      titleEn: "Prepreg Epoxy Resin Series",
      description: "官网发布的预浸料用环氧树脂产品单页。",
      descriptionEn:
        "Official product flyer for prepreg epoxy resin systems and applications.",
      url: "https://www.wellswam.com/en/static/upload/file/20251103/1762156699315050.pdf",
      format: "PDF",
    },
    {
      title: "惠柏新材产品宣传册 2025",
      titleEn: "WAM Product Brochure 2025",
      description: "公司公开产品组合、应用市场及主要树脂系列总览。",
      descriptionEn:
        "Official overview of WAM's product portfolio, target applications and principal resin series.",
      url: "https://www.wellswam.com/en/static/upload/file/20251103/1762139495862597.pdf",
      format: "PDF",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/wells-wam-logo.png",
  contactEmail: "wam@wellsepoxy.com",
  contactPhone: "+86 21 69116380",
  address:
    "Building 2, No. 558 Boyuan Road, Jiangqiao Town, Jiading District, Shanghai, China",
  website: "https://www.wellswam.com/en/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 22,
  viewCount: 0,
  capabilities: [
    "modified epoxy resins",
    "wind-energy epoxy systems",
    "vacuum infusion",
    "hand lay-up",
    "epoxy pultrusion",
    "RTM",
    "prepreg resins",
    "carbon fiber towpreg",
    "structural adhesive films",
    "electrical insulation and encapsulation",
  ],
  standardsSupported: ["IATF 16949:2016"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
