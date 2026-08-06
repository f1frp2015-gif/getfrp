import type { SupplierListing } from "@/lib/db/schema";

export const CROTTI_SUPPLIER_ID = "sup-crotti";
export const CROTTI_SUPPLIER_SLUG = "shanghai-crotti";
export const CROTTI_LEGAL_NAME_EN =
  "Shanghai Crotti Materials Technology Development Co., Ltd.";

// Curated from Shanghai Crotti's current official Chinese/English website,
// product API and public certificate library. Capability, capacity, test and
// certification statements are company-published and are not GetFRP
// verification. The official logo was downloaded from:
// https://cdn.shcld.com/static/media/logo_black.62b0a7db.png
export const CROTTI_SUPPLIER_PROFILE: SupplierListing = {
  id: CROTTI_SUPPLIER_ID,
  name: "上海克络蒂材料科技发展有限公司",
  nameEn: "Shanghai Crotti",
  slug: CROTTI_SUPPLIER_SLUG,
  location: "上海松江（江苏宿迁生产基地）",
  locationEn: "Shanghai, China (production base in Suqian, Jiangsu)",
  province: "上海",
  category: "manufacturer",
  products: [
    "玻璃纤维增强聚氨酯门窗型材",
    "TICO 55、65、72、85 与 95 系列平开门窗系统",
    "TICO 83 推拉与 143 提升推拉门窗系统",
    "节能、耐火及被动房用聚氨酯复合材料门窗",
    "聚氨酯复合材料构件",
    "聚氨酯外墙涂料、阻燃聚醚及外墙防水保温系统",
  ],
  productsEn: [
    "Glass-fiber-reinforced polyurethane door and window profiles",
    "TICO 55, 65, 72, 85 and 95 casement window and door systems",
    "TICO 83 sliding and TICO 143 lift-and-slide systems",
    "Energy-efficient, fire-resistant and passive-house composite windows",
    "Polyurethane composite components",
    "Polyurethane exterior-wall coatings, flame-retardant polyether and waterproof insulation systems",
  ],
  processList: [
    "玻璃纤维增强聚氨酯型材连续拉挤成型",
    "聚氨酯复合材料与门窗系统研发",
    "门窗系统设计、加工与装配",
    "型材彩色与仿木表面处理",
    "气密、水密、抗风压、保温、隔声与耐火性能测试",
    "建筑节能门窗应用与旧窗拆换服务",
  ],
  processListEn: [
    "Continuous pultrusion of glass-fiber-reinforced polyurethane profiles",
    "Polyurethane composite and window-system R&D",
    "Window and door system design, machining and assembly",
    "Colored and wood-effect profile finishing",
    "Air, water, wind-load, thermal, acoustic and fire-performance testing",
    "Building-envelope application engineering and window replacement",
  ],
  // The official company history traces the Crotti business predecessor to
  // 1991; this is not presented as the legal entity's registration date.
  established: 1991,
  verified: false,
  description:
    "克络蒂官网称，其企业前身可追溯至 1991 年，主要从事聚氨酯复合材料的研发、规模化生产、推广与应用。公司总部位于上海松江，并在江苏宿迁设有生产基地；当前官网产品目录覆盖 TICO 55、65、72、83、85、95 与 143 系列玻璃纤维增强聚氨酯节能、耐火门窗型材及系统，同时公开聚氨酯复合材料构件和建筑节能相关产品。",
  descriptionEn:
    "Shanghai Crotti's official website traces the Crotti business predecessor to 1991 and describes a focus on the R&D, scaled production and application of polyurethane composites. The company lists its headquarters in Songjiang, Shanghai, and a production base in Suqian, Jiangsu. Its current product directory covers TICO 55, 65, 72, 83, 85, 95 and 143 glass-fiber-reinforced polyurethane energy-efficient and fire-resistant window profile systems, together with polyurethane composite components and related building-envelope products.",
  certifications: [
    "国家高新技术企业（企业官网证书栏目公开；现行有效期需确认）",
    "康居产品认证证书（企业官网公开；产品范围与有效期需确认）",
    "TICO 95 系列 PHI 报告（企业官网公开；当前被动房认证范围需确认）",
    "55/65/85/95 系列性能与耐火检测报告（企业官网公开；报告签发方、样品与有效性需确认）",
  ],
  certificationsEn: [
    "National High-Tech Enterprise (company-published certificate; confirm current validity)",
    "Kangju product certification (company-published; confirm product scope and validity)",
    "TICO 95 PHI report (company-published; confirm current Passive House Institute scope and listing)",
    "Series-specific performance and fire-resistance test reports (company-published; confirm issuer, specimen and validity)",
  ],
  productsServicesSummary:
    "官网公开的 TICO 产品系列覆盖外开、内开、复古平开、推拉和提升推拉系统，并为不同玻璃配置发布整窗传热系数、型材性能、颜色、项目与检测报告信息。公司称其玻纤聚氨酯门窗项目的年饱和产能可对应约 300 万平方米门窗面积，并公开上海办公地址、宿迁工厂地址及英文联系方式。采购方应在 RFQ 与样窗审批阶段确认型材截面、聚氨酯体系、玻纤结构、U 值与玻璃配置、耐火等级、检测样品、PHI/认证范围、五金、表面、尺寸公差、MOQ、交期、包装和批次追溯。",
  productsServicesSummaryEn:
    "Crotti's official TICO directory covers outward- and inward-opening casement, heritage-style casement, sliding and lift-and-slide systems, with company-published whole-window thermal values, profile data, colors, project references and test reports for selected series. The company states that the glass-fiber/polyurethane window-profile program has an annual saturated capacity equivalent to approximately 3 million m² of window area and publishes both its Shanghai office and Suqian factory locations. Buyers should confirm the section drawing, polyurethane system, glass architecture, U-value and glazing configuration, fire rating, tested specimen, PHI or other certification scope, hardware, finish, dimensional tolerance, MOQ, lead time, export packing and batch traceability during RFQ and sample-window approval.",
  ecatalogs: [
    {
      title: "克络蒂官方网站",
      titleEn: "Shanghai Crotti Official Website",
      description: "公司、产品、应用、新闻与联系方式总览。",
      descriptionEn:
        "Official overview of the company, product systems, applications, news and contact details.",
      url: "http://www.shcld.com/",
      format: "Official website",
    },
    {
      title: "克络蒂企业介绍",
      titleEn: "Crotti Company Profile",
      description: "官网发布的企业沿革、研发、生产基地、能力与市场介绍。",
      descriptionEn:
        "Official company history and overview of R&D, production locations, capabilities and markets.",
      url: "http://www.shcld.com/introduction",
      format: "Company profile",
    },
    {
      title: "TICO 门窗与型材产品目录",
      titleEn: "TICO Window & Profile Product Directory",
      description: "TICO 各系列型材、门窗配置、性能、颜色、项目与报告入口。",
      descriptionEn:
        "Official TICO series directory covering profiles, window configurations, performance, finishes, projects and reports.",
      url: "http://www.shcld.com/tico/product",
      format: "Product directory",
    },
    {
      title: "克络蒂证书与检测报告",
      titleEn: "Crotti Certificates & Test Reports",
      description: "官网公开的检测报告、荣誉、认证和专利证书目录。",
      descriptionEn:
        "Company-published library of test reports, awards, certification documents and patents.",
      url: "http://www.shcld.com/certificate",
      format: "Evidence library",
    },
    {
      title: "克络蒂联系方式",
      titleEn: "Crotti Contact & Factory Locations",
      description: "上海办公地址、宿迁工厂地址、电话与邮箱。",
      descriptionEn:
        "Official Shanghai office, Suqian factory, telephone and email details.",
      url: "http://www.shcld.com/contact",
      format: "Contact page",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/crotti-logo.png",
  contactEmail: "collodin@shcld.com",
  contactPhone: "+86 21 5985 1080",
  address:
    "Building 24B, No. 3825 Xinzhuan Highway, Dongjing Town, Songjiang District, Shanghai, China",
  website: "http://www.shcld.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 16,
  viewCount: 0,
  capabilities: [
    "pultruded polyurethane composite profiles",
    "glass fiber reinforced polyurethane profiles",
    "energy efficient window profiles",
    "fire resistant windows",
    "passive house windows",
    "TICO window and door systems",
    "sliding and lift-slide systems",
    "polyurethane composite components",
    "window replacement",
  ],
  standardsSupported: ["DG/TJ 08-2242-2023"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
