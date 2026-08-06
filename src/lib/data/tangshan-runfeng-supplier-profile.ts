import type { SupplierListing } from "@/lib/db/schema";

export const TANGSHAN_RUNFENG_SUPPLIER_ID = "sup-tangshan-runfeng";
export const TANGSHAN_RUNFENG_SUPPLIER_SLUG =
  "tangshan-runfeng-composite-materials";

// Curated from the supplier's official English website, company profile,
// product directory and contact page. Establishment, facility, certification,
// test, patent and production statements remain company-published and
// unverified by GetFRP. The Chinese legal name is cross-checked against public
// company-registration information. The official header wordmark was
// downloaded from the current website asset at:
// https://www.frpexpert.com/uploads/202332299/logo202312261517357642806.jpg
// The server supplies WebP data, stored locally with the matching extension at
// public/supplier-assets/tangshan-runfeng-logo.webp.
export const TANGSHAN_RUNFENG_SUPPLIER_PROFILE: SupplierListing = {
  id: TANGSHAN_RUNFENG_SUPPLIER_ID,
  name: "唐山润峰复合材料有限公司",
  nameEn: "Tangshan Runfeng Composite Materials Co., Ltd.",
  slug: TANGSHAN_RUNFENG_SUPPLIER_SLUG,
  location: "河北唐山",
  locationEn: "Tangshan, Hebei, China",
  province: "河北",
  category: "manufacturer",
  products: [
    "玻璃钢采光板与透明、半透明波纹屋面板",
    "胶衣玻璃钢平板、卷材与墙面板",
    "防腐与阻燃玻璃钢板",
    "冷库、冷藏车、房车及预制建筑用玻璃钢夹芯板",
    "冷却塔、工业厂房与农业建筑用定制玻璃钢板",
    "运输车辆厢体及建筑装饰用玻璃钢板材",
  ],
  productsEn: [
    "FRP skylight sheets and transparent or translucent corrugated roofing panels",
    "Gel-coated FRP flat sheets, rolls and wall panels",
    "Corrosion-resistant and flame-retardant FRP panels",
    "FRP sandwich panels for cold storage, refrigerated trucks, RVs and prefabricated buildings",
    "Custom FRP panels for cooling towers, industrial plants and agricultural buildings",
    "FRP sheet products for transport bodies and architectural finishes",
  ],
  processList: [
    "玻璃钢板材连续成型",
    "胶衣、覆膜与表面纹理定制",
    "平板、卷材与波纹板生产",
    "泡沫与蜂窝芯玻璃钢夹芯板复合",
    "板型、长度、宽度、厚度、颜色及阻燃等级定制",
    "OEM、新产品设计、检验与运输支持",
  ],
  processListEn: [
    "Continuous FRP sheet forming",
    "Gelcoat, protective-film and surface-texture customization",
    "Flat-sheet, roll and corrugated-panel production",
    "Foam- and honeycomb-core FRP sandwich-panel lamination",
    "Custom profile, length, width, thickness, color and fire-performance options",
    "OEM, new-product design, inspection and transportation support",
  ],
  established: 2004,
  verified: false,
  description:
    "唐山润峰复合材料有限公司英文官网称公司成立于 2004 年，位于河北唐山，专注于连续成型玻璃钢板材及相关产品的研发与制造。官网公开的产品范围覆盖建筑采光、防腐和阻燃板，胶衣平板与卷材，冷却塔和工业建筑板材，以及房车、客车、轨道交通、罐车、冷藏车和物流车辆用板材与夹芯板。官网还称唐山生产基地共有 3 个、总占地约 45,000 平方米，并于 2019 年获评高新技术企业；上述规模和资质信息均需由采购方核验。",
  descriptionEn:
    "Tangshan Runfeng Composite Materials Co., Ltd. states on its official English website that it was founded in 2004 in Tangshan, Hebei, and focuses on the development and manufacture of continuously formed FRP sheets and related products. Its published range covers construction skylight, corrosion-resistant and flame-retardant panels, gel-coated flat sheets and rolls, cooling-tower and industrial-building panels, plus sheets and sandwich panels for RVs, buses, rail vehicles, tankers, refrigerated bodies and logistics vehicles. The company also reports three Tangshan production bases covering approximately 45,000 m² and high-tech-enterprise recognition in 2019; buyers should independently confirm these scale and qualification statements.",
  certifications: [
    "ISO 9001 质量管理体系（企业官网公开；认证主体、范围与有效期需核验）",
    "ISO 14001 环境管理体系（企业官网公开；认证主体、范围与有效期需核验）",
    "ISO 45001 职业健康安全管理体系（企业官网公开；认证主体、范围与有效期需核验）",
    "产品曾通过 ASTM、BS 等性能测试（企业官网概述；具体标准、型号与完整报告需核验）",
  ],
  certificationsEn: [
    "ISO 9001 quality management system (company-published; confirm certified entity, scope and validity)",
    "ISO 14001 environmental management system (company-published; confirm certified entity, scope and validity)",
    "ISO 45001 occupational health and safety management system (company-published; confirm certified entity, scope and validity)",
    "Product performance testing described against ASTM and BS requirements (company-published overview; confirm the exact standards, products and complete reports)",
  ],
  productsServicesSummary:
    "润峰官网将主要业务分为建筑与运输两类：建筑侧包括采光波纹板、防腐板、阻燃板、复合板、畜牧与孵化设备板、冷却塔板及装饰纹理板；运输侧包括房车、客车、轨道交通、罐车、冷藏厢和快递物流车辆用板材。官网还提供玻璃钢板设计与生产、原辅材料采购协助、OEM、新产品开发、订单运输和工厂/货物检验支持。采购方应针对实际报价型号核验树脂与增强材料、胶衣或保护膜、芯材与胶接体系、板型和尺寸公差、单位面积重量、透光率、阻燃或耐腐蚀报告、表面等级、MOQ、交期、包装、质保以及现行管理体系证书。",
  productsServicesSummaryEn:
    "Runfeng's website groups its supply scope into construction and transportation. Construction applications include skylight corrugated sheets, corrosion-resistant and flame-retardant panels, composite panels, livestock and incubation-equipment panels, cooling-tower panels and decorative textures. Transportation applications include sheets for RVs, buses, rail vehicles, tankers, refrigerated bodies and express-logistics vehicles. The company also advertises FRP-sheet design and production, sourcing assistance for related materials, OEM, new-product development, shipment support and factory or goods inspection. Buyers should validate the quoted resin and reinforcement, gelcoat or protective film, core and adhesive system, profile and dimensional tolerance, areal weight, light transmission, fire or corrosion test reports, surface class, MOQ, lead time, packaging, warranty and current management-system certificates.",
  ecatalogs: [
    {
      title: "润峰英文官网",
      titleEn: "Runfeng Official English Website",
      description: "公司、主要产品、应用与出口联系方式总览。",
      descriptionEn:
        "Official overview of the company, principal products, applications and export contacts.",
      url: "https://www.frpexpert.com/",
      format: "Official website",
    },
    {
      title: "润峰公司介绍",
      titleEn: "Runfeng Company Profile",
      description: "官网公开的公司沿革、生产基地、产品范围、认证与服务信息。",
      descriptionEn:
        "Official company history and published production-base, product-range, certification and service information.",
      url: "https://www.frpexpert.com/about-us",
      format: "Company profile",
    },
    {
      title: "润峰产品目录",
      titleEn: "Runfeng Product Directory",
      description: "采光、胶衣、防腐、阻燃及夹芯玻璃钢板材产品入口。",
      descriptionEn:
        "Official directory for skylight, gel-coated, corrosion-resistant, flame-retardant and sandwich FRP panels.",
      url: "https://www.frpexpert.com/products",
      format: "Product directory",
    },
    {
      title: "润峰公司资料 PDF",
      titleEn: "Runfeng Company Profile PDF",
      description: "官网发布的公司与产品能力资料。",
      descriptionEn:
        "Supplier-published PDF overview of the company and product capabilities.",
      url: "https://www.frpexpert.com/Content/upload/pdf/202132299/COMPANY-PROFILE.pdf?rnd=784",
      format: "PDF",
    },
    {
      title: "润峰联系方式",
      titleEn: "Runfeng Contact Directory",
      description: "官网发布的唐山地址、出口邮箱与联系电话。",
      descriptionEn:
        "Official Tangshan address, export email and telephone contact information.",
      url: "https://www.frpexpert.com/contact-us",
      format: "Contact directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/tangshan-runfeng-logo.webp",
  contactEmail: "admin@frpexpert.com",
  contactPhone: "+86 150 3349 0654",
  address:
    "South of Guihua Road, Fine Chemical Park, west of West Outer Ring Road, Nanbao Development Area, Tangshan, Hebei, China",
  website: "https://www.frpexpert.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "FRP skylight sheets",
    "corrugated FRP roofing panels",
    "gel-coated FRP sheets and rolls",
    "corrosion-resistant FRP panels",
    "flame-retardant FRP panels",
    "FRP sandwich panels",
    "RV and refrigerated-body panels",
    "cooling-tower panels",
    "continuous FRP sheet forming",
    "custom FRP panels",
  ],
  standardsSupported: ["ISO 9001", "ISO 14001", "ISO 45001"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
