import type { SupplierListing } from "@/lib/db/schema";

export const HORSE_CONSTRUCTION_SUPPLIER_ID = "sup-horse-construction";
export const HORSE_CONSTRUCTION_SUPPLIER_SLUG = "shanghai-horse-construction";

// Curated from Horse Construction's official English company, product,
// resource, distributor-network and contact pages. The Chinese legal name
// and Shanghai address were cross-checked against the company's official
// Chinese website. Capacity, certification, test, export and performance
// statements remain company-published and unverified by GetFRP. The current
// official logo was downloaded from:
// https://www.horseen.com/static/images/logo_index.png
export const HORSE_CONSTRUCTION_SUPPLIER_PROFILE: SupplierListing = {
  id: HORSE_CONSTRUCTION_SUPPLIER_ID,
  name: "上海悍马建筑科技有限公司",
  nameEn: "Shanghai Horse Construction Co., Ltd.",
  slug: HORSE_CONSTRUCTION_SUPPLIER_SLUG,
  location: "上海",
  locationEn: "Shanghai, China",
  province: "上海",
  category: "manufacturer",
  products: [
    "单向碳纤维布与碳纤维片材",
    "碳纤维板、条带与预应力碳板系统",
    "碳纤维网格、锚具与棒材",
    "FRP 桩基护套",
    "碳纤维浸渍胶、底胶与找平胶",
    "植筋、粘钢、裂缝修补及桥梁用结构胶",
  ],
  productsEn: [
    "Unidirectional carbon-fiber fabrics and wraps",
    "CFRP laminates, plates, strips and prestressed CFRP systems",
    "Carbon-fiber mesh, anchors and rods",
    "FRP pile jackets",
    "Carbon-fiber impregnation epoxy, primer and leveling adhesive",
    "Anchoring, steel-bonding, crack-repair and bridge structural adhesives",
  ],
  processList: [
    "碳纤维材料自动化生产（企业自述）",
    "FRP 加固体系选型与应用支持",
    "预应力碳板与锚固体系配套",
    "结构胶体系配套与施工资料支持",
    "产品 TDS、证书与检测报告资料库",
    "基于 ACI 规范的 CFRP 设计软件",
    "海外经销网络与出口服务",
  ],
  processListEn: [
    "Automated carbon-fiber-material production (company-published)",
    "FRP strengthening-system selection and application support",
    "Prestressed CFRP plate and anchorage-system supply",
    "Structural-adhesive system and installation-document support",
    "Product TDS, certificate and test-report library",
    "CFRP design software based on published ACI references",
    "International distributor-network and export support",
  ],
  established: 2006,
  verified: false,
  description:
    "上海悍马建筑科技有限公司（Horse Construction）官网称其自 2006 年起专注于结构加固材料，产品覆盖碳纤维布、碳纤维板、预应力碳板体系、碳纤维锚具与棒材、FRP 桩基护套，以及用于碳纤维粘贴、植筋、粘钢、裂缝修补和桥梁施工的环氧结构胶。企业英文官网公开产品目录、技术数据表、证书、检测报告、设计软件和海外经销网络。",
  descriptionEn:
    "Shanghai Horse Construction Co., Ltd. states that it has focused on structural-strengthening materials since 2006. Its published portfolio covers carbon-fiber fabric, CFRP plates and prestressed plate systems, carbon-fiber anchors, rods and mesh, FRP pile jackets, plus epoxy systems for CFRP bonding, post-installed anchoring, steel bonding, crack repair and bridge work. The official English site provides product directories, technical data sheets, certificates, test reports, design software and an international distributor network.",
  certifications: [
    "ISO 9001（企业官网提供证书下载；认证主体、标准版本、范围与有效期需核验）",
    "CE 符合性证书（企业官网提供证书下载；适用产品、法规与有效期需核验）",
  ],
  certificationsEn: [
    "ISO 9001 (certificate download published by the company; confirm the certified entity, edition, scope and validity)",
    "CE Certificate of Compliance (published by the company; confirm covered products, legislation and validity)",
  ],
  productsServicesSummary:
    "悍马英文官网将其产品划分为 FRP 复合加固、预应力碳板、锚固、粘钢、裂缝修补和桥梁支座六类体系，公开产品超过 30 种。公司介绍页称上海生产基地面积超过 5,000 平方米，配有 5 条自动化生产线，碳纤维材料年产量约 400 万平方米，并在中国设有 4 个主要仓库；这些规模数据均为企业自述。官网资料库提供碳纤维布、板材、胶粘剂、锚固材料及桥梁用结构胶的目录、TDS 和检测报告；其 CFRP Easy Design 软件页面引用 ACI 318M-14 与 ACI 440.2R-17 作为计算依据。采购方应按具体牌号核验纤维级别与面密度、拉伸性能、树脂体系和施工温度、胶粘剂混合比与固化窗口、基材处理、包装、保质期、MOQ、交期，以及现行 ISO/CE 文件和第三方检测报告。",
  productsServicesSummaryEn:
    "Horse's English site organizes its offer into six systems: FRP composite strengthening, prestressed CFRP plates, anchoring, steel bonding, crack repair and bridge-bearing work, with more than 30 published materials. The company profile states that its Shanghai production base exceeds 5,000 m², uses five automated production lines, has annual carbon-fiber-material output of about four million square meters and is supported by four main warehouses in China; these scale figures are company-published. Its resource library includes catalogs, TDS files and test reports for carbon-fiber fabrics, laminates, adhesives, anchors and bridge products. The CFRP Easy Design page cites ACI 318M-14 and ACI 440.2R-17 as calculation references. Buyers should validate the exact grade's fiber type and areal weight, tensile properties, resin chemistry and application temperature, adhesive mix ratio and cure window, substrate preparation, packaging, shelf life, MOQ and lead time, plus current ISO/CE documentation and third-party test evidence.",
  ecatalogs: [
    {
      title: "悍马国际官网",
      titleEn: "Horse Construction Official Website",
      description: "公司、结构加固体系、项目、资源与海外联系入口。",
      descriptionEn:
        "Official international overview of the company, strengthening systems, projects, resources and export contacts.",
      url: "https://www.horseen.com/",
      format: "Official website",
    },
    {
      title: "悍马公司介绍",
      titleEn: "Horse Construction Company Profile",
      description: "企业沿革、生产基地、产能与公司自述信息。",
      descriptionEn:
        "Official company history and company-published production-base and capacity information.",
      url: "https://www.horseen.com/about",
      format: "Company profile",
    },
    {
      title: "结构加固产品目录",
      titleEn: "Structural Strengthening Product Directory",
      description: "六类结构加固体系及 30 余种产品入口。",
      descriptionEn:
        "Official directory for six strengthening systems and more than 30 published materials.",
      url: "https://www.horseen.com/product/six-structural-strengthening-system",
      format: "Product directory",
    },
    {
      title: "悍马产品手册",
      titleEn: "Horse Product Catalog Library",
      description: "碳纤维布、板材、胶粘剂、网格、棒材与 FRP 护套手册下载。",
      descriptionEn:
        "Official catalog downloads for carbon-fiber fabrics, laminates, adhesives, mesh, rods and FRP jackets.",
      url: "https://www.horseen.com/index/download/category/id/5",
      format: "Catalog library",
    },
    {
      title: "产品技术数据表",
      titleEn: "Horse Product Data Sheets",
      description: "碳纤维、板材、锚具与结构胶牌号 TDS 下载。",
      descriptionEn:
        "Official TDS library for carbon-fiber fabrics, laminates, anchors and structural adhesives.",
      url: "https://www.horseen.com/resource-download/product-data-sheet",
      format: "Technical data library",
    },
    {
      title: "企业证书",
      titleEn: "Horse Certificate Library",
      description: "企业发布的 ISO 9001 与 CE 证书下载入口，采购前需核验有效性和范围。",
      descriptionEn:
        "Company-published ISO 9001 and CE certificate downloads; verify current validity and scope before purchase.",
      url: "https://www.horseen.com/resource-download/certificates",
      format: "Certificate library",
    },
    {
      title: "产品检测报告",
      titleEn: "Horse Product Test Reports",
      description: "碳纤维布、板材与结构胶的企业发布检测资料入口。",
      descriptionEn:
        "Company-published test-report library for carbon-fiber fabrics, laminates and structural adhesives.",
      url: "https://www.horseen.com/resource-download/test-report",
      format: "Test-report library",
    },
    {
      title: "CFRP 设计软件",
      titleEn: "CFRP Easy Design Software",
      description: "梁、板、柱等构件的碳纤维加固计算工具及其规范依据说明。",
      descriptionEn:
        "Official CFRP calculation-tool overview for beam, slab and column strengthening, including published code references.",
      url: "https://www.horseen.com/resource-download/software",
      format: "Design resource",
    },
    {
      title: "悍马国际联系方式",
      titleEn: "Horse Construction Contact Directory",
      description: "上海公司地址、国际邮箱、WhatsApp 与销售电话。",
      descriptionEn:
        "Official Shanghai address, international email, WhatsApp and sales-contact details.",
      url: "https://www.horseen.com/contact",
      format: "Contact directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/horse-construction-logo.png",
  contactEmail: "info@shhorse.com",
  contactPhone: "+86 181 1632 7159",
  address:
    "Room 501, No. 10, Lane 1228 Jiangchang Road, Jing'an District, Shanghai 200072, China",
  website: "https://www.horseen.com/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 21,
  viewCount: 0,
  capabilities: [
    "carbon-fiber fabrics and wraps",
    "CFRP laminates, plates and strips",
    "prestressed CFRP strengthening systems",
    "carbon-fiber anchors, rods and mesh",
    "FRP pile jackets",
    "CFRP bonding epoxies",
    "anchoring and steel-bonding adhesives",
    "crack-repair and bridge structural adhesives",
    "structural strengthening design support",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
