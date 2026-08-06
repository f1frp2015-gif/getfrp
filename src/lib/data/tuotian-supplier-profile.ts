import type { SupplierListing } from "@/lib/db/schema";

export const TUOTIAN_SUPPLIER_ID = "sup-lianyungang-tuotian";
export const TUOTIAN_SUPPLIER_SLUG =
  "lianyungang-tuotian-aviation-equipment";

// Curated from Tuotian's official English company, product, market, service
// and contact pages. The 2024 National High-Tech Enterprise designation is
// cross-checked against the Jiangsu provincial recognition list. Equipment,
// export, patent and certification claims remain company-published unless a
// separate source is identified below, and have not been verified by GetFRP.
// The supplier's current official logo is stored locally from:
// https://www.to-t.com/uploads/45360/logo.png
export const TUOTIAN_SUPPLIER_PROFILE: SupplierListing = {
  id: TUOTIAN_SUPPLIER_ID,
  name: "连云港拓天航空装备有限公司",
  nameEn: "Lianyungang Tuotian Aviation Equipment Co., Ltd.",
  slug: TUOTIAN_SUPPLIER_SLUG,
  location: "江苏连云港",
  locationEn: "Lianyungang, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "全自动玻璃钢管道连续缠绕生产线",
    "玻璃钢管道、油田高压管与绝缘管缠绕设备",
    "玻璃钢电杆、气瓶、储罐及大型容器缠绕设备",
    "碳纤维预浸带与复合材料壳体缠绕设备",
    "玻璃钢拉挤设备与离心浇铸管道设备",
    "固化炉、液压试验机、修整设备及管道模具",
  ],
  productsEn: [
    "Fully automatic continuous GRP/FRP pipe winding production lines",
    "Winding equipment for FRP pipe, oilfield high-pressure pipe and electrical-insulation tube",
    "Winding equipment for FRP poles, gas cylinders, tanks and large containers",
    "Carbon-fiber prepreg-tape and composite-shell winding equipment",
    "FRP pultrusion and centrifugal-casting pipe equipment",
    "Curing ovens, hydraulic test presses, trimming equipment and pipe molds",
  ],
  processList: [
    "复合材料工艺分析与定制生产线设计",
    "数控加工、板材切割、卷制与结构件制造",
    "机械、电气和自动控制系统装配",
    "精密测量、整机调试与出厂验收",
    "海外安装、校准、操作培训与售后支持",
  ],
  processListEn: [
    "Composite-process analysis and custom production-line design",
    "CNC machining, plate cutting, rolling and structural fabrication",
    "Mechanical, electrical and automation-system assembly",
    "Precision inspection, machine commissioning and factory acceptance",
    "Overseas installation, calibration, operator training and after-sales support",
  ],
  // The official site attributes a 70-year industrial heritage to parent
  // Zhongtong Group but does not state the legal entity's establishment year.
  established: null,
  verified: false,
  description:
    "连云港拓天航空装备有限公司是连云港中通集团的核心子公司，专注高性能复合材料工艺装备的研发与制造。公司官网称其技术传承自中国早期玻璃钢缠绕设备制造体系，并公开约 30,000 平方米生产基地、6 个专业车间及覆盖研发到批量制造的生产链。其产品面向管道、氢气瓶及其他压力容器、电杆、储罐、复合材料壳体和拉挤制品等应用。",
  descriptionEn:
    "Lianyungang Tuotian Aviation Equipment Co., Ltd. is presented on its official website as a core subsidiary of Lianyungang Zhongtong Group and a developer and manufacturer of high-performance composite-processing equipment. The company publishes a roughly 30,000 m² production base with six specialized workshops and an industrial chain extending from R&D through serial manufacture. Its equipment serves pipe, hydrogen-cylinder and other pressure-vessel, utility-pole, tank, composite-shell and pultruded-product applications.",
  certifications: [
    "ISO 9001:2015（企业官网公开；需核验现行证书、范围与有效期）",
    "ISO 45001:2018（企业官网公开；需核验现行证书、范围与有效期）",
    "国家高新技术企业（江苏省 2024 年第二批认定名单，证书编号 GR202432005650）",
  ],
  certificationsEn: [
    "ISO 9001:2015 (company-published; confirm the current certificate, scope and validity)",
    "ISO 45001:2018 (company-published; confirm the current certificate, scope and validity)",
    "National High-Tech Enterprise (Jiangsu 2024 second-batch recognition list; certificate GR202432005650)",
  ],
  productsServicesSummary:
    "拓天官网产品目录以玻璃钢缠绕技术为核心，覆盖管道连续缠绕生产线、定长管及油田高压管缠绕机、电气绝缘管、电杆、气瓶、储罐、大型容器和壳体缠绕设备，并提供碳纤维预浸带缠绕、拉挤、离心浇铸管道、固化、液压试验、修整与模具等配套装备。官网生产能力包括数控加工中心、重型车床、镗铣设备、激光及等离子切割、卷板与型材弯曲，以及三坐标和激光跟踪检测；服务范围包括工艺分析、定制方案、现场安装调试、校准、培训、在线支持和技术升级。官网称产品出口 50 多个国家，并公开印度、突尼斯、伊拉克和波兰项目案例。采购方应在 RFQ 阶段明确成品类型、尺寸和设计产能，纤维及树脂体系，缠绕方式和轴数，张力与树脂计量控制，模具和固化方案，公用工程，厂房接口，安全标准，FAT/SAT 验收指标，安装范围，备件、质保及目的地服务条件。",
  productsServicesSummaryEn:
    "Tuotian's official directory is centered on FRP winding technology and covers continuous pipe lines; fixed-length, oilfield high-pressure and electrical-insulation pipe winders; pole, cylinder, tank, large-container and shell winding equipment; and supporting carbon-fiber prepreg-tape winding, pultrusion, centrifugal pipe casting, curing, hydraulic testing, trimming and mold systems. Published manufacturing resources include CNC machining centers, heavy lathes, boring and milling equipment, laser and plasma cutting, plate and section rolling, coordinate measurement and laser tracking. Services include process analysis, custom solution design, on-site installation and commissioning, calibration, training, online support and technical upgrades. The company says its products reach more than 50 countries and publishes project cases in India, Tunisia, Iraq and Poland. Buyers should define the finished-product type, dimensions and design output; fiber and resin system; winding method and axes; tension and resin-metering control; mandrel and cure concept; utilities and plant interfaces; safety standard; FAT/SAT acceptance criteria; installation scope; spares; warranty; and destination support in the RFQ.",
  ecatalogs: [
    {
      title: "拓天航空装备公司介绍",
      titleEn: "Tuotian Company Profile",
      description: "公司定位、生产基地、产品应用、公开认证及加工检测能力。",
      descriptionEn:
        "Official overview of the company, production base, applications, published certifications, manufacturing resources and inspection equipment.",
      url: "https://www.to-t.com/about-us",
      format: "Company profile",
    },
    {
      title: "拓天复材工艺装备目录",
      titleEn: "Tuotian Composite Equipment Directory",
      description: "缠绕、拉挤、固化、试验、修整、模具与离心浇铸设备入口。",
      descriptionEn:
        "Official directory for winding, pultrusion, curing, testing, trimming, mold and centrifugal-casting equipment.",
      url: "https://www.to-t.com/products",
      format: "Product directory",
    },
    {
      title: "全自动玻璃钢管道连续缠绕生产线",
      titleEn: "Fully Automatic FRP Pipe Continuous Winding Lines",
      description: "连续管道生产线、工艺流程及配套设备公开产品页。",
      descriptionEn:
        "Official product family covering continuous pipe production lines, the published process sequence and supporting equipment.",
      url: "https://www.to-t.com/fully-automatic-frp-pipe-continuous-winding/",
      format: "Product directory",
    },
    {
      title: "拓天技术与售后服务",
      titleEn: "Tuotian Technical and After-Sales Service",
      description: "售前工艺分析、安装调试培训与售后支持范围。",
      descriptionEn:
        "Company-published pre-sales process analysis, installation, commissioning, training and after-sales support scope.",
      url: "https://www.to-t.com/our-service",
      format: "Service guide",
    },
    {
      title: "拓天出口市场",
      titleEn: "Tuotian Export Markets",
      description: "官网发布的出口区域与 50 多个国家市场覆盖声明。",
      descriptionEn:
        "Official statement of the supplier's regional export markets and claimed coverage of more than 50 countries.",
      url: "https://www.to-t.com/production-market",
      format: "Market overview",
    },
    {
      title: "江苏省 2024 年第二批高新技术企业名单",
      titleEn: "Jiangsu 2024 High-Tech Enterprise Recognition List",
      description: "江苏省官方名单列示连云港拓天航空装备有限公司及证书编号。",
      descriptionEn:
        "Official provincial list identifying Lianyungang Tuotian Aviation Equipment Co., Ltd. and certificate GR202432005650.",
      url: "https://file.smejs.cn/file/group1/M00/00/61/rBIAAWd_NyqAfQIHABERYi02yEg961.pdf",
      format: "Official PDF",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/tuotian-logo.webp",
  contactEmail: "risingsun6699@outlook.com",
  contactPhone: "+86 180 6134 5550",
  address:
    "Jinrong Road, Haizhou District, Lianyungang City, Jiangsu Province, China",
  website: "https://www.to-t.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 17,
  viewCount: 0,
  capabilities: [
    "continuous FRP pipe winding lines",
    "computer-controlled filament winding equipment",
    "high-pressure pipe winding equipment",
    "hydrogen and gas cylinder winding equipment",
    "FRP tank and container winding equipment",
    "carbon-fiber prepreg tape winding",
    "FRP pultrusion equipment",
    "composite curing ovens",
    "hydraulic pressure testing equipment",
    "FRP pipe molds and trimming equipment",
    "custom production-line engineering",
    "overseas installation and commissioning",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
