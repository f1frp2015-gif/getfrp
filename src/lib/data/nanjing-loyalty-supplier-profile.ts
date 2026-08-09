import type { SupplierListing } from "@/lib/db/schema";

export const NANJING_LOYALTY_SUPPLIER_ID = "sup-nanjing-loyalty";
export const NANJING_LOYALTY_SUPPLIER_SLUG =
  "nanjing-loyalty-composite-equipment";

// Curated from Nanjing Loyalty's official English company, product, honor,
// case and contact pages. Establishment, R&D scale, patent, market and award
// statements remain company-published unless the linked document itself is
// described below. The certificate scans currently exposed by the supplier
// are past their printed validity dates and are therefore recorded as archive
// evidence rather than current qualifications. Official logo source
// (downloaded 2026-08-09 from the current English website header):
// http://en.njloyalty.net/picture/logo.jpg
export const NANJING_LOYALTY_SUPPLIER_PROFILE: SupplierListing = {
  id: NANJING_LOYALTY_SUPPLIER_ID,
  name: "南京诺尔泰复合材料设备制造有限公司",
  nameEn: "Nanjing Loyalty Composite Equipment Manufacture Co., Ltd.",
  slug: NANJING_LOYALTY_SUPPLIER_SLUG,
  location: "江苏南京",
  locationEn: "Nanjing, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "履带式拉挤设备及数字伺服、聚氨酯专用拉挤装备",
    "液压往复式拉挤设备、自动切割与配套单元",
    "复合芯导线生产线与专用绕线设备",
    "拉挤预成型模具",
    "光伏复合材料边框拉挤生产线与边框产品",
    "风电叶片梁板拉挤、卷绕、检测与打磨设备",
    "碳纤维锚杆、缠绕管、螺纹增强材料及特殊建材制品",
  ],
  productsEn: [
    "Crawler pultrusion machines and digital-servo or polyurethane-specific pultrusion equipment",
    "Hydraulic reciprocating pultrusion machines, automatic cutting and auxiliary units",
    "Composite conductor-core production lines and specialized winding equipment",
    "Pultrusion preforming dies",
    "Pultrusion lines and products for photovoltaic composite frames",
    "Pultrusion, winding, inspection and grinding equipment for wind-blade spar caps",
    "Carbon-fiber anchor rods, wound tubes, threaded reinforcement and specialty building products",
  ],
  processList: [
    "玻纤/碳纤浸渍、预成型、加热模具固化、连续牵引与自动切割",
    "履带牵引、液压往复与数字伺服拉挤生产线设计和装配",
    "复合芯导线、光伏边框及风电叶片梁板专用产线工程",
    "拉挤预成型模具与配套单元设计制造",
    "开发试验线、工艺验证与设备调试",
    "客户工艺方案、技术支持与售后服务",
  ],
  processListEn: [
    "Glass- or carbon-fiber impregnation, preforming, heated-die curing, continuous pulling and automatic cutting",
    "Crawler, hydraulic-reciprocating and digital-servo pultrusion-line design and assembly",
    "Specialized line engineering for composite conductor cores, photovoltaic frames and wind-blade spar caps",
    "Pultrusion preforming-die and auxiliary-unit design and manufacture",
    "Development lines, process trials and equipment commissioning",
    "Customer process design, technical support and after-sales service",
  ],
  established: 2000,
  verified: false,
  description:
    "南京诺尔泰复合材料设备制造有限公司官网称，公司成立于 2000 年，主要从事复合材料设备与制品研发制造。当前目录覆盖履带式与液压拉挤设备、预成型模具、复合芯导线生产线、光伏复合材料边框生产线、风电叶片梁板相关装备以及碳纤维制品。公司自述拥有约 5,000 平方米研发中心、10 条开发与试验生产线和 20 多项专利技术，并称产品已销售至 20 多个国家和地区；上述规模、知识产权与市场覆盖声明应由采购方独立核验。",
  descriptionEn:
    "Nanjing Loyalty Composite Equipment Manufacture Co., Ltd. says it was established in 2000 to develop and manufacture composite-processing equipment and products. Its current directory covers crawler and hydraulic pultrusion machines, preforming dies, composite conductor-core lines, photovoltaic composite-frame lines, wind-blade spar-cap equipment and carbon-fiber products. The company reports a roughly 5,000 m² R&D center, ten development and test lines, more than 20 patented technologies, and sales to more than 20 countries and regions; buyers should independently verify these scale, intellectual-property and market-coverage statements.",
  certifications: [
    "历史 GB/T 24001-2016 / ISO 14001:2015 环境管理体系证书，覆盖多类拉挤设备、复合芯导线设备、风电叶片梁板拉挤设备及光伏边框的设计制造，文件显示有效期至 2024-12-28（已过期；询盘时索取现行证书）",
    "历史 ECM CE 复合材料拉挤设备符合性证书，引用 EN ISO 12100、EN 60204-1 与 EN 61000-6-2/-4，文件显示有效期至 2025-08-07（已过期；需按实际型号重新核验）",
    "历史 ECM CE 自动切割机符合性证书，文件显示有效期至 2023-07-31（已过期；需按实际型号重新核验）",
    "历史高新技术企业证书 GR202232008672，2022-11-18 发证、有效期三年（已超过证书有效期；需核验后续认定）",
    "公司简介声称通过 ISO 9001，但公开荣誉页未提供可核验的现行证书；采购方应索取认证主体、范围与有效期完整文件",
  ],
  certificationsEn: [
    "Archived GB/T 24001-2016 / ISO 14001:2015 environmental-management certificate covering several pultrusion-equipment families, composite conductor-core equipment, wind-blade spar-cap pultrusion equipment and photovoltaic-frame design and manufacture, printed valid through December 28, 2024 (expired; request a current certificate)",
    "Archived ECM CE certificate for composite pultrusion equipment referencing EN ISO 12100, EN 60204-1 and EN 61000-6-2/-4, printed valid through August 7, 2025 (expired; re-verify the quoted model)",
    "Archived ECM CE certificate for automatic cutting machines, printed valid through July 31, 2023 (expired; re-verify the quoted model)",
    "Archived High-Tech Enterprise certificate GR202232008672, issued November 18, 2022 with a three-year validity period (expired; confirm any subsequent recognition)",
    "The company profile claims ISO 9001, but the public honor directory does not provide a verifiable current certificate; request the complete certified entity, scope and validity documents",
  ],
  productsServicesSummary:
    "诺尔泰官网公开履带式、液压往复式、数字伺服和聚氨酯专用拉挤装备，并列出拉挤预成型模具、复合芯导线及绕线设备、光伏复合材料边框产线、风电叶片梁板相关装备，以及碳纤维锚杆和缠绕管等制品。官网还提供西班牙 50T 液压拉挤设备等国际案例，并承诺提供拉挤设备、工艺设计与综合工艺服务。公开产品页多为名称和图片，未统一提供速度、牵引力、型材尺寸、温控、精度、FAT/SAT、MOQ 或交期。采购方应按项目核验成品截面和设计产能、纤维/树脂体系、浸渍与预成型方案、牵引和切割控制、模具与温区、公用工程、安全标准、验收指标、安装培训、备件、质保及目的地服务。官网展示的环境管理、高新技术企业与两份 CE 文件均已超过印载有效期，不应视为现行资质。",
  productsServicesSummaryEn:
    "Nanjing Loyalty's website publishes crawler, hydraulic-reciprocating, digital-servo and polyurethane-specific pultrusion equipment, together with preforming dies, composite conductor-core and winding systems, photovoltaic composite-frame lines, wind-blade spar-cap equipment, carbon-fiber anchor rods and wound tubes. The site also presents international cases including a 50-ton hydraulic pultrusion machine in Spain and promises equipment supply, process design and broader process service. Most public product pages provide names and images rather than consistent speed, pulling-force, profile-size, temperature-control, accuracy, FAT/SAT, MOQ or lead-time data. Buyers should qualify the finished cross-section and design output; fiber and resin system; impregnation and preforming concept; pulling and cutting control; die and heating zones; utilities; safety standards; acceptance criteria; installation and training; spares; warranty; and destination support. The environmental-management, High-Tech Enterprise and two CE files displayed by the supplier are all past their printed validity dates and must not be treated as current qualifications.",
  ecatalogs: [
    {
      title: "诺尔泰英文官网",
      titleEn: "Nanjing Loyalty Official English Website",
      description: "公司、主要产品系列、案例与联系方式总览。",
      descriptionEn:
        "Official overview of the company, principal product families, cases and contact details.",
      url: "http://en.njloyalty.net/",
      format: "Official website",
    },
    {
      title: "诺尔泰公司介绍",
      titleEn: "Nanjing Loyalty Company Profile",
      description: "成立年份、研发中心、试验线、市场覆盖与服务承诺。",
      descriptionEn:
        "Official establishment, R&D center, test-line, market-coverage and service statements.",
      url: "http://en.njloyalty.net/about.php?categoryID=920",
      format: "Company profile",
    },
    {
      title: "诺尔泰产品目录",
      titleEn: "Nanjing Loyalty Product Directory",
      description: "拉挤设备、模具、复合芯导线、光伏边框与复材制品入口。",
      descriptionEn:
        "Official directory for pultrusion equipment, dies, composite conductor cores, photovoltaic frames and composite products.",
      url: "http://en.njloyalty.net/pro.php",
      format: "Product directory",
    },
    {
      title: "诺尔泰荣誉与历史证书",
      titleEn: "Nanjing Loyalty Honors and Archived Certificates",
      description: "专利、荣誉及已超过印载有效期的管理体系、CE 与高新技术企业文件。",
      descriptionEn:
        "Supplier-hosted patents, honors and management-system, CE and High-Tech Enterprise documents that are past their printed validity dates.",
      url: "http://en.njloyalty.net/honor.php?categoryID=921",
      format: "Archived certificate directory",
    },
    {
      title: "诺尔泰国际案例",
      titleEn: "Nanjing Loyalty International Cases",
      description: "官网公开的复合芯导线与西班牙液压拉挤设备案例。",
      descriptionEn:
        "Supplier-published composite conductor-core and Spanish hydraulic-pultrusion cases.",
      url: "http://en.njloyalty.net/cases.php?categoryID=929",
      format: "Case directory",
    },
    {
      title: "诺尔泰联系方式",
      titleEn: "Nanjing Loyalty Contact Directory",
      description: "南京江北新区地址、电话、邮箱与销售联系人。",
      descriptionEn:
        "Official Nanjing Jiangbei address, telephone, email and sales contact.",
      url: "http://en.njloyalty.net/contact.php?categoryID=917",
      format: "Contact directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-09T00:00:00.000Z"),
  logo: "/supplier-assets/nanjing-loyalty-logo.jpg",
  contactEmail: "office@njloyalty.net",
  contactPhone: "+86 25 5880 4462",
  address:
    "No. 26 Bofu Road, Zhongshan Area, Intelligent Manufacturing Industrial Park, Jiangbei New Area, Nanjing, Jiangsu, China",
  website: "http://njloyalty.net/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 19,
  viewCount: 0,
  capabilities: [
    "pultrusion equipment",
    "crawler pultrusion machines",
    "hydraulic pultrusion machines",
    "digital-servo pultrusion equipment",
    "polyurethane pultrusion equipment",
    "pultrusion preforming dies",
    "composite conductor-core production lines",
    "composite winding equipment",
    "photovoltaic composite-frame pultrusion",
    "wind-blade spar-cap equipment",
    "carbon-fiber composite products",
    "custom process design and commissioning",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-09T00:00:00.000Z"),
  updatedAt: new Date("2026-08-09T00:00:00.000Z"),
};
