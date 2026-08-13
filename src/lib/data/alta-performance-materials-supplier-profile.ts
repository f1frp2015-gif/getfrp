import type { SupplierListing } from "@/lib/db/schema";

export const ALTA_PERFORMANCE_MATERIALS_SUPPLIER_ID =
  "sup-alta-performance-materials";
export const ALTA_PERFORMANCE_MATERIALS_SUPPLIER_SLUG =
  "alta-performance-materials";
export const ALTA_PERFORMANCE_MATERIALS_LEGAL_NAME_EN =
  "ALTA Performance Materials Holdings Company (UK) Limited";

// Curated from ALTA Performance Materials' official company, product,
// service, accreditation, safety-data and contact pages. Company-published
// site-count, product, compliance and accreditation statements have not been
// independently verified by GetFRP. The locally stored white wordmark is the
// current organization logo declared by the official site's schema metadata:
// https://altapm.com/wp-content/uploads/2025/04/ALTA-Performance-Materials.png
export const ALTA_PERFORMANCE_MATERIALS_SUPPLIER_PROFILE: SupplierListing = {
  id: ALTA_PERFORMANCE_MATERIALS_SUPPLIER_ID,
  name: "ALTA Performance Materials",
  nameEn: "ALTA Performance Materials",
  slug: ALTA_PERFORMANCE_MATERIALS_SUPPLIER_SLUG,
  location: "英国伦敦",
  locationEn: "London, United Kingdom",
  province: null,
  category: "resin",
  products: [
    "不饱和聚酯树脂",
    "环氧乙烯基酯树脂",
    "阻燃树脂",
    "复合材料胶衣",
    "低收缩与低轮廓添加剂",
  ],
  productsEn: [
    "Unsaturated polyester resins",
    "Epoxy vinyl ester resins",
    "Fire-retardant resins",
    "Composite gelcoats",
    "Low-shrink and low-profile additives",
  ],
  processList: [
    "热固性树脂配方与制造",
    "复合材料应用开发与技术服务",
    "胶衣与 SMC 应用实验室测试",
    "材料表征、光谱、显微及湿化学分析",
    "耐腐蚀与人造石应用开发",
  ],
  processListEn: [
    "Thermoset resin formulation and manufacturing",
    "Composite application development and technical service",
    "Gelcoat and SMC application-laboratory testing",
    "Materials characterization, spectroscopy, microscopy and wet-chemistry analysis",
    "Corrosion-resistant FRP and engineered-stone application development",
  ],
  established: null,
  verified: false,
  description:
    "ALTA Performance Materials 是一家面向复合材料行业的全球高性能热固性树脂与胶衣制造商和供应商。官网现代奴役声明称，ALTA Performance Materials Holdings Company (UK) Limited 及其关联企业在美洲、欧洲、中东和亚洲共有 20 个站点；官网联系方式页列出伦敦全球总部，以及美国 Grandview、西班牙巴塞罗那、印度 Navi Mumbai、中国上海和巴西 Araçariguama 的区域中心。其材料面向建筑材料、耐腐蚀 FRP、休闲、交通运输和风能等市场。上述网络与业务信息均为企业公开陈述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "ALTA Performance Materials is a global manufacturer and supplier of high-performance thermoset resins and gelcoats for composite materials. Its official modern-slavery statement says ALTA Performance Materials Holdings Company (UK) Limited and its affiliates operate 20 sites across the Americas, Europe, the Middle East and Asia. The official contact page lists a global headquarters in London and regional centers in Grandview, Barcelona, Navi Mumbai, Shanghai and Araçariguama. ALTA publishes applications across building materials, corrosion-resistant FRP, recreation, transportation and wind energy. These footprint and business statements are company-published and have not been independently verified by GetFRP.",
  certifications: [
    "EcoVadis 银牌（官网公示，授予英国控股公司；采购时确认当前评估期与范围）",
    "法国与芬兰实体通过当地行业协会加入 Responsible Care®（官网说明并非所有站点均为正式签署方）",
    "欧洲销售产品的 SDS 符合 REACH 要求（公司公开陈述；应按具体牌号和目的市场核验）",
  ],
  certificationsEn: [
    "EcoVadis Silver Medal awarded to the UK holding company (company-published; confirm the current assessment period and scope)",
    "Responsible Care® signatory status for ALTA France and ALTA Finland through their respective trade associations (company-published; not all ALTA sites are formal signatories)",
    "REACH-compliant SDS for products sold within Europe (company-published; verify the current grade- and market-specific documentation)",
  ],
  productsServicesSummary:
    "ALTA 官网产品目录覆盖不饱和聚酯树脂、环氧乙烯基酯树脂、阻燃树脂、胶衣及低轮廓添加剂，公开品牌包括 AME®、AROTRAN®、DERAKANE®、DERAKANE SIGNIA®、HETRON®、MODAR®、ENGUARD®、INSTINT®、MAXGUARD®、NEULON®、AROPOL® 与 POLARIS®。官网还列出耐腐蚀科学中心、人造石卓越中心、胶衣应用实验室、SMC 应用实验室及多类分析服务。采购时应针对具体牌号确认树脂化学体系、反应单体、促进/预促进状态、粘度、凝胶时间、放热峰、机械与耐化学性能、阻燃等级、颜色、TDS/SDS、REACH/法规适用性、包装、MOQ、交期、生产地点和目的市场供货安排。",
  productsServicesSummaryEn:
    "ALTA's official portfolio covers unsaturated polyester resins, epoxy vinyl ester resins, fire-retardant resins, gelcoats and low-profile additives under brands including AME®, AROTRAN®, DERAKANE®, DERAKANE SIGNIA®, HETRON®, MODAR®, ENGUARD®, INSTINT®, MAXGUARD®, NEULON®, AROPOL® and POLARIS®. The official service directory also lists a Corrosion Science Center, Engineered Stone Center of Excellence, Gel Coat Application Laboratory, SMC Application Labs and analytical services. Buyers should validate the exact grade, resin chemistry, reactive monomer, promoted or unpromoted state, viscosity, gel time, peak exotherm, mechanical and chemical-resistance data, fire-performance classification, color, TDS/SDS, REACH and destination-market compliance, package, MOQ, lead time, manufacturing origin and regional availability before approval.",
  ecatalogs: [
    {
      title: "ALTA 产品与品牌目录",
      titleEn: "ALTA Products & Brands Directory",
      description: "热固性树脂、胶衣、添加剂与品牌入口。",
      descriptionEn:
        "Official directory for thermoset resins, gelcoats, additives and product brands.",
      url: "https://www.altapm.com/products/",
      format: "Official product directory",
    },
    {
      title: "环氧乙烯基酯树脂目录",
      titleEn: "Epoxy Vinyl Ester Resin Directory",
      description: "AME、AROTRAN、DERAKANE、DERAKANE SIGNIA 与 HETRON 品牌入口。",
      descriptionEn:
        "Official directory for AME, AROTRAN, DERAKANE, DERAKANE SIGNIA and HETRON epoxy vinyl ester resins.",
      url: "https://www.altapm.com/products/epoxy-vinyl-ester-resins/",
      format: "Product directory",
    },
    {
      title: "不饱和聚酯树脂目录",
      titleEn: "Unsaturated Polyester Resin Directory",
      description: "AROPOL、AROTRAN 与 POLARIS 不饱和聚酯树脂入口。",
      descriptionEn:
        "Official directory for AROPOL, AROTRAN and POLARIS unsaturated polyester resins.",
      url: "https://www.altapm.com/products/unsaturated-polyester-resins/",
      format: "Product directory",
    },
    {
      title: "胶衣产品目录",
      titleEn: "Gelcoat Product Directory",
      description: "ENGUARD、INSTINT 与 MAXGUARD 胶衣产品入口。",
      descriptionEn:
        "Official directory for ENGUARD, INSTINT and MAXGUARD gelcoats.",
      url: "https://www.altapm.com/products/gelcoats/",
      format: "Product directory",
    },
    {
      title: "协会与资质公示",
      titleEn: "Associations & Accreditations",
      description: "官网公示的行业协会、Responsible Care 与 EcoVadis 信息。",
      descriptionEn:
        "Official association, Responsible Care and EcoVadis disclosures.",
      url: "https://www.altapm.com/associations-accreditations/",
      format: "Accreditation directory",
    },
    {
      title: "安全数据与 REACH 说明",
      titleEn: "Safety Data & REACH Information",
      description: "欧洲 SDS、REACH 注册和 SVHC 披露说明。",
      descriptionEn:
        "Official guidance covering European SDS, REACH registration and SVHC disclosure.",
      url: "https://www.altapm.com/she/safety-data/",
      format: "Regulatory guidance",
    },
    {
      title: "ALTA 全球联系方式",
      titleEn: "ALTA Global Contact Directory",
      description: "伦敦总部和美洲、欧洲、印度、亚太及拉美区域联系方式。",
      descriptionEn:
        "Official global-headquarters and regional contact details for the Americas, Europe, India, Asia Pacific and Latin America.",
      url: "https://www.altapm.com/contact/",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-12T00:00:00.000Z"),
  logo: "/supplier-assets/alta-performance-materials-logo.png",
  contactEmail: "europe.customerinquiries@altapm.com",
  contactPhone: null,
  address:
    "The Jellicoe King's Cross, 5 Beaconsfield Street, King's Cross, London N1C 4EW, United Kingdom",
  website: "https://www.altapm.com/",
  enterpriseId: null,
  scaleTier: "XL",
  brandPriority: 31,
  viewCount: 0,
  capabilities: [
    "unsaturated polyester resin",
    "epoxy vinyl ester resin",
    "fire-retardant resin",
    "gelcoat",
    "low-profile additives",
    "corrosion-resistant FRP resin",
    "pultrusion resin",
    "SMC resin",
    "engineered-stone resin",
    "composite application testing",
    "materials characterization",
  ],
  standardsSupported: ["REACH"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-12T00:00:00.000Z"),
  updatedAt: new Date("2026-08-12T00:00:00.000Z"),
};
