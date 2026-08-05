import type { SupplierListing } from "@/lib/db/schema";

export const NOAH_COMPOSITES_SUPPLIER_ID = "sup-noah-composites";
export const NOAH_COMPOSITES_SUPPLIER_SLUG = "noah-composites";
export const NOAH_COMPOSITES_LEGAL_NAME_EN =
  "Huizhou Noah Composites Technology Co., Ltd.";

// Curated from Noah Composites' official English website and company-history
// page. Company-published claims remain separate from GetFRP verification.
// The official logo was downloaded from the supplier's current WordPress media
// library at:
// https://noahcomposites.com/wp-content/uploads/2025/05/cropped-Noah-%E9%80%8F%E6%98%8E%E5%BA%95%E8%89%B2png.png
export const NOAH_COMPOSITES_SUPPLIER_PROFILE: SupplierListing = {
  id: NOAH_COMPOSITES_SUPPLIER_ID,
  name: "惠州诺亚复合材料科技有限公司",
  nameEn: "Noah Composites",
  slug: NOAH_COMPOSITES_SUPPLIER_SLUG,
  location: "广东惠州",
  locationEn: "Huizhou, Guangdong, China",
  province: "广东",
  category: "manufacturer",
  products: [
    "碳纤维汽车零部件",
    "水上运动用碳纤维水翼、桨与板类产品",
    "船舶与海洋用碳纤维部件",
    "碳纤维球拍、球杆及其他运动器材",
    "医疗、救援及新兴应用复合材料制品",
    "碳纤维与玻璃纤维定制 OEM / ODM 制品",
  ],
  productsEn: [
    "Carbon-fiber automotive parts",
    "Carbon-fiber hydrofoils, paddles and watersports equipment",
    "Carbon-fiber marine structures and components",
    "Carbon-fiber rackets, sticks and other sporting goods",
    "Composite products for medical, rescue and emerging applications",
    "Custom OEM/ODM carbon- and glass-fiber composite parts",
  ],
  processList: [
    "复合材料设计与工程开发",
    "模具设计、快速打样与样件验证",
    "预浸料铺层与自动裁切",
    "预浸料压缩模塑（PCM）",
    "热压罐固化与真空导入",
    "CNC 加工与表面涂装",
    "力学、疲劳与环境测试",
  ],
  processListEn: [
    "Composite design and engineering",
    "Tooling, rapid prototyping and sample validation",
    "Prepreg lay-up and automated material cutting",
    "Prepreg compression molding (PCM)",
    "Autoclave curing and vacuum infusion",
    "CNC machining and surface finishing",
    "Mechanical, fatigue and environmental testing",
  ],
  // The official history describes the 2016 transition from trading to an
  // integrated R&D, manufacturing and sales operation.
  established: 2016,
  verified: false,
  description:
    "Noah Composites 官网历史页面称，其业务前身 Jin Hong Company 于 2012 年从贸易业务起步，并于 2016 年转型为集研发、生产与销售于一体的复合材料制造商。公司位于广东惠州，为汽车、水上运动、船舶海洋、运动器材、医疗救援及其他应用提供碳纤维与玻璃纤维制品的 OEM / ODM 开发和生产服务。",
  descriptionEn:
    "According to its official company history, Noah Composites began as Jin Hong Company in 2012 and transitioned to an integrated R&D, manufacturing and sales operation in 2016. Based in Huizhou, Guangdong, the company provides OEM/ODM carbon- and glass-fiber composite product development for automotive, watersports, marine, sporting-goods, medical, rescue and other custom applications.",
  certifications: ["ISO 9001（企业官网公开）", "国家高新技术企业（企业官网公开）"],
  certificationsEn: [
    "ISO 9001 (company-published information)",
    "National High-Tech Enterprise (company-published information)",
  ],
  productsServicesSummary:
    "公司官网公开的能力覆盖产品设计、复材工程、模具与样件、批量生产、预浸料压缩模塑、热压罐、真空导入、CNC 加工、涂装以及实验室测试，并称其惠州制造设施面积约 24,000 平方米。采购方应在询盘与样件审批阶段确认具体材料体系、铺层设计、模具权属、尺寸公差、表面等级、测试方法、认证范围、MOQ、交期与批次追溯要求。",
  productsServicesSummaryEn:
    "The official website describes capabilities spanning product design, composite engineering, tooling and prototypes, serial production, prepreg compression molding, autoclave curing, vacuum infusion, CNC machining, coating and in-house laboratory testing, and states that its Huizhou manufacturing facility covers approximately 24,000 m². Buyers should confirm the material system, laminate design, tooling ownership, dimensional tolerance, surface class, test method, certification scope, MOQ, lead time and batch-traceability requirements during RFQ and sample approval.",
  ecatalogs: [
    {
      title: "Noah Composites 官网产品与制造能力",
      titleEn: "Noah Composites Product & Manufacturing Directory",
      description: "官网产品、行业应用、制造工艺、设备与质量控制总览。",
      descriptionEn:
        "Official overview of products, industry applications, manufacturing processes, equipment and quality-control capabilities.",
      url: "https://noahcomposites.com/",
      format: "Official website",
    },
    {
      title: "Noah Composites 公司历史与团队",
      titleEn: "Noah Composites Company History & Team",
      description: "官网发布的公司沿革、制造基地、研发与质量团队介绍。",
      descriptionEn:
        "Official company history and overview of the manufacturing base, R&D organization and quality team.",
      url: "https://noahcomposites.com/about-noah-composites/",
      format: "Company profile",
    },
    {
      title: "定制复合材料制品开发流程",
      titleEn: "Custom Composite Product Development",
      description: "从询盘、工程评估、样件和模具到批量生产的定制流程。",
      descriptionEn:
        "Official custom-development workflow covering inquiry, engineering review, samples, tooling and serial production.",
      url: "https://noahcomposites.com/custom-composite-products/",
      format: "Service guide",
    },
    {
      title: "复合材料研发能力",
      titleEn: "Composite Research & Development Capabilities",
      description: "官网研发、材料、快速打样和测试能力介绍。",
      descriptionEn:
        "Official overview of R&D, materials, rapid prototyping and testing capabilities.",
      url: "https://noahcomposites.com/research-development/",
      format: "Technical overview",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-04T00:00:00.000Z"),
  logo: "/supplier-assets/noah-composites-logo.png",
  contactEmail: "marketing@noahcomposites.com",
  contactPhone: "+86 181 2951 2302",
  address:
    "6th Floor, Building AB, Technology Innovation Center, No. 2 Huatai South Road, Huiao Avenue, Huizhou, Guangdong, China",
  website: "https://noahcomposites.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 24,
  viewCount: 0,
  capabilities: [
    "custom carbon fiber parts",
    "automotive carbon fiber parts",
    "watersports composites",
    "marine composites",
    "sports equipment",
    "prepreg compression molding",
    "autoclave curing",
    "vacuum infusion",
    "CNC machining",
    "tooling and prototyping",
  ],
  standardsSupported: ["ISO 9001"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-04T00:00:00.000Z"),
  updatedAt: new Date("2026-08-04T00:00:00.000Z"),
};
