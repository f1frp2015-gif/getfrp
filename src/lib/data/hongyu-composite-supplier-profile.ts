import type { SupplierListing } from "@/lib/db/schema";

export const HONGYU_COMPOSITE_SUPPLIER_ID = "sup-hongyu-composite-jiaxing";
export const HONGYU_COMPOSITE_SUPPLIER_SLUG =
  "hongyu-composite-materials-technology-jiaxing";

// Curated from Hongyu's official company, forming, product and news pages.
// Performance, application and localization claims remain company-published
// and have not been independently verified by GetFRP. The official site uses
// the text brand "弘誉复材" in its header and has its logo-image option disabled;
// no current official logo file was available on 2026-08-12, so this profile
// intentionally uses the supplier-page text fallback instead of an image.
export const HONGYU_COMPOSITE_SUPPLIER_PROFILE: SupplierListing = {
  id: HONGYU_COMPOSITE_SUPPLIER_ID,
  name: "弘誉复合材料技术（嘉兴）有限公司",
  nameEn: "Hongyu Composite Materials Technology (Jiaxing) Co., Ltd.",
  slug: HONGYU_COMPOSITE_SUPPLIER_SLUG,
  location: "浙江嘉兴",
  locationEn: "Jiaxing, Zhejiang, China",
  province: "浙江",
  category: "equipment",
  products: [
    "碳纤维复合材料急冷急热模压成型系统",
    "热塑性与热固性复材专用模具及温控系统",
    "高精度复合材料模具设计与制造",
    "复合材料切割刀具与定制切割机械",
    "预浸料与固化复合材料回收利用方案",
    "复合材料模压与拉挤解决方案",
  ],
  productsEn: [
    "Rapid heating and cooling compression-molding systems for carbon-fiber composites",
    "Dedicated molds and temperature-control systems for thermoplastic and thermoset composites",
    "High-precision composite mold design and manufacturing",
    "Composite cutting tools and custom cutting machinery",
    "Recycling and reuse solutions for prepreg and cured composites",
    "Composite compression-molding and pultrusion solutions",
  ],
  processList: [
    "急冷急热模压成型",
    "热塑性与热固性复合材料成型",
    "模具设计与制造",
    "刀具及切割系统定制",
    "预浸料与固化复材回收",
    "设备导入、国产化与技术服务",
  ],
  processListEn: [
    "Rapid heating and cooling compression molding",
    "Thermoplastic and thermoset composite forming",
    "Mold design and manufacturing",
    "Custom tooling and cutting-system engineering",
    "Prepreg and cured-composite recycling",
    "Equipment integration, localization and technical services",
  ],
  // The official site does not publish the legal entity's establishment year.
  established: null,
  verified: false,
  description:
    "弘誉复合材料技术（嘉兴）有限公司在官网将自身定位为复合材料成型加工设备与技术服务商，业务包括碳纤维复合材料急冷急热控制系统、专用模具与高精度模具设计制造、复材切割刀具与定制切割机械，以及预浸料和固化复合材料的回收利用。官网成型页面重点介绍面向热塑性碳纤维复材的 GMS 短周期模压系统；近期展会信息还将业务概括为高性能复材急冷急热一站式模压成型及拉挤解决方案。",
  descriptionEn:
    "Hongyu Composite Materials Technology (Jiaxing) Co., Ltd. presents itself on its official website as a composite-processing equipment and technical-service provider. Its published scope includes rapid heating and cooling control systems for carbon-fiber composites, dedicated and high-precision mold engineering, composite cutting tools and custom cutting machinery, and recycling or reuse methods for prepreg and cured composites. The forming page focuses on a GMS short-cycle compression-molding system for thermoplastic carbon-fiber composites, while a recent exhibition notice describes the business as offering integrated rapid heating and cooling molding and pultrusion solutions for high-performance composites.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "弘誉官网称其复材成型系统适用于热塑性与热固性树脂，可组合红外加热器、专用模具和模温控制器进行急冷急热成型。公开参数包括最高加工温度 450°C、温度控制精度 ±5°C、16 个独立温控通道、加热与冷却水量自动调节、编码器毫米级位置设置、压力控制以及远程 Wi-Fi 诊断。刀具与切割设备页面主张 3.5 mm 最小刀齿间距、高速高精度切割，并可按需求定制装置。回收业务覆盖未固化预浸料、固化复材、UD 与织物预浸料边料及云母材料的再利用。采购方应针对具体设备核验型号与实机业绩，并在 RFQ 中明确材料体系、制件尺寸、模具与压机接口、升降温速率、通道与传感器配置、温度均匀性、压力与行程、节拍、软件及远程访问权限、公用工程、切割精度和刀具寿命，以及 FAT/SAT、安装调试、培训、备件、质保和目的地支持。",
  productsServicesSummaryEn:
    "Hongyu states that its composite-forming system supports thermoplastic and thermoset resin systems and combines infrared heating, dedicated molds and mold-temperature control for rapid heating and cooling. Published figures include a maximum process temperature of 450°C, stated control accuracy of ±5°C, 16 independent temperature-control channels, automatic heater and cooling-water adjustment, encoder-based millimeter positioning, pressure control and remote Wi-Fi diagnostics. The tooling range claims a 3.5 mm minimum blade-tooth pitch, high-speed precision cutting and application-specific machine customization. Its recycling scope covers uncured prepreg, cured composites, UD and fabric-prepreg offcuts, and mica-material reuse. Buyers should confirm the exact model and installed references, then define the material system, part envelope, mold and press interfaces, heating and cooling rates, zones and sensors, temperature uniformity, pressure and stroke, cycle time, software and remote-access controls, utilities, cutting tolerance and tool life, FAT/SAT, commissioning, training, spares, warranty and destination support in the RFQ.",
  ecatalogs: [
    {
      title: "弘誉复材公司介绍",
      titleEn: "Hongyu Company Introduction",
      description: "企业定位、主要设备与技术服务范围，以及公司发布的英文介绍。",
      descriptionEn:
        "Official company overview covering the supplier's positioning, principal equipment and technical-service scope, including its published English introduction.",
      url: "http://www.go-factory.com.cn/",
      format: "Company profile",
    },
    {
      title: "弘誉复材主要产品",
      titleEn: "Hongyu Main Products",
      description: "复材成型系统、刀具和定制切割机械、复材回收与再利用方案。",
      descriptionEn:
        "Official product overview for composite-forming systems, tooling and custom cutting machinery, and composite recycling or reuse solutions.",
      url: "http://www.go-factory.com.cn/col.jsp?id=103",
      format: "Product directory",
    },
    {
      title: "GMS 急冷急热模压成型系统",
      titleEn: "GMS Rapid Heating and Cooling Molding System",
      description: "热塑性碳纤维复材短周期模压工艺、系统构成与公开特点。",
      descriptionEn:
        "Official overview of the short-cycle thermoplastic carbon-fiber compression-molding process, system configuration and published characteristics.",
      url: "http://www.go-factory.com.cn/col.jsp?id=105",
      format: "Process guide",
    },
    {
      title: "弘誉复材新闻与展会信息",
      titleEn: "Hongyu News and Exhibition Updates",
      description: "公司近期展会信息、模压及拉挤业务表述与复材回收应用动态。",
      descriptionEn:
        "Company-published exhibition updates and recent descriptions of its molding, pultrusion and composite-recycling activities.",
      url: "http://www.go-factory.com.cn/col.jsp?id=104",
      format: "News directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-12T00:00:00.000Z"),
  logo: null,
  contactEmail: null,
  contactPhone: null,
  address: null,
  website: "http://www.go-factory.com.cn/",
  enterpriseId: null,
  scaleTier: "S",
  brandPriority: 4,
  viewCount: 0,
  capabilities: [
    "rapid heating and cooling molding systems",
    "thermoplastic composite compression molding",
    "thermoset composite compression molding",
    "carbon-fiber composite processing equipment",
    "multi-zone mold temperature control",
    "high-precision composite molds",
    "composite cutting tools",
    "custom composite cutting machinery",
    "prepreg and cured-composite recycling",
    "composite pultrusion solutions",
    "equipment integration and technical services",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-12T00:00:00.000Z"),
  updatedAt: new Date("2026-08-12T00:00:00.000Z"),
};
