import type { SupplierListing } from "@/lib/db/schema";

export const LIANYUNGANG_WEIDE_SUPPLIER_ID = "sup-lianyungang-weide";
export const LIANYUNGANG_WEIDE_SUPPLIER_SLUG = "lianyungang-weide-filament-winding-equipment";

// Curated from Weide's current official company, product and contact pages and
// the CCE L directory. The complete official mark was downloaded from wdfrp.com
// on 2026-08-25 and preserved without cropping its emblem or registered mark.
export const LIANYUNGANG_WEIDE_SUPPLIER_PROFILE: SupplierListing = {
  id: LIANYUNGANG_WEIDE_SUPPLIER_ID,
  name: "连云港唯德复合材料设备有限公司",
  nameEn: "Lianyungang Weide Composite Materials Facilities Co., Ltd.",
  slug: LIANYUNGANG_WEIDE_SUPPLIER_SLUG,
  location: "江苏连云港",
  locationEn: "Lianyungang, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: ["连续缠绕玻璃钢管道生产线", "高压储氢气瓶缠绕生产线", "四轴高精度缠绕机", "卧式缠绕机", "高压环氧管道缠绕生产线", "玻璃钢管道离心浇铸生产线", "玻璃钢灯杆缠绕生产线", "自动上下料机械手", "缠绕固化炉", "树脂供料系统", "连续缠绕智能配料与输送系统", "接头制作和质量保证配套系统"],
  productsEn: ["Continuous-filament-winding FRP pipe production lines", "High-pressure hydrogen-cylinder winding production lines", "Four-axis high-precision filament winding machines", "Horizontal filament winding machines", "High-pressure epoxy-pipe winding production lines", "Centrifugal-casting GRP pipe production lines", "FRP lighting-pole winding production lines", "Automatic loading and unloading manipulators", "Winding-process curing ovens", "Resin supply systems", "Intelligent feeding and conveying systems for continuous winding", "Joint-making and quality-assurance auxiliary systems"],
  processList: ["连续钢带模玻璃钢管道缠绕", "复合气瓶四轴高精度缠绕", "环氧管道数控缠绕", "离心浇铸玻璃钢管道成型", "树脂、纤维、石英砂和助剂计量供料", "自动上下料与物料输送", "缠绕后温控固化", "管道接头制作配套", "产线工艺与设备方案设计", "设备安装、调试和售后支持"],
  processListEn: ["Continuous steel-band-mandrel FRP pipe winding", "Four-axis precision composite-cylinder winding", "CNC epoxy-pipe winding", "Centrifugal-casting GRP pipe forming", "Resin, fiber, quartz-sand and additive metering and feeding", "Automatic loading, unloading and material conveyance", "Temperature-controlled post-winding cure", "Pipe-joint production integration", "Production-line process and equipment design", "Equipment installation, commissioning and after-sales support"],
  established: 2001,
  verified: false,
  description: "连云港唯德复合材料设备有限公司官网称企业成立于 2001 年，专注高端复合材料装备研发和制造，现行范围包括连续缠绕玻璃钢管道线、高压储氢气瓶缠绕线、四轴和卧式缠绕机、环氧管道线、离心浇铸 GRP 管道线、灯杆线及配套机械手、固化炉、树脂供料和智能输送系统。中国国际复材展 L 字母页列出同名展商。唯德销售的是制造管道、气瓶和灯杆的装备与产线，不等于其自产这些玻璃钢或碳纤维终端产品；本页因此不植入玻纤、碳纤维、FRP 管道或储氢瓶材料供应商关键词。官网的产能、性能、进口替代、寿命和力学数据属于企业发布主张，需以目标配置、FAT/SAT 和合同验收文件核实。",
  descriptionEn: "Lianyungang Weide Composite Materials Facilities Co., Ltd. says on its current official website that it was established in 2001 and develops and manufactures composite-production equipment. The published range covers continuous-filament-winding FRP pipe lines, high-pressure hydrogen-cylinder winding lines, four-axis and horizontal winding machines, high-pressure epoxy-pipe lines, centrifugal-casting GRP pipe lines, lighting-pole lines and supporting manipulators, curing ovens, resin-supply, intelligent feeding, conveying, joint-making and quality-assurance systems. China Composites Expo's L directory lists the matching exhibitor. Weide sells the machinery used to make pipes, cylinders and poles; those outputs are not presented as Weide-manufactured FRP or carbon-fiber products. GetFRP therefore excludes reinforcement, FRP-pipe and finished-cylinder supplier keywords. Capacity, performance, import-substitution, service-life and mechanical-property statements are supplier claims that must be validated against the quoted configuration, representative trials, FAT, SAT and contractual acceptance records.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "唯德目录横跨连续缠绕、四轴气瓶缠绕、卧式环氧管缠绕、离心浇铸和灯杆缠绕五类设备，并将供料、输送、装卸、固化、接头和质量保障模块组合成产线。设备 RFQ 需要明确目标制品、直径/长度/壁厚、原料体系、缠绕角和铺层、节拍与年产量、张力与定位精度、轴数、控制程序、配料精度、固化曲线、换型时间、安全防护、排放处理、厂房和公用工程。连续管线还需说明钢带模、砂层、内衬、接口和在线检验；气瓶线需说明瓶型、内胆、纤维路径、轴控、上下料和追溯；离心浇铸线需说明模具、转速、加热、脱模和冷却。FAT/SAT 必须使用代表性原料和制品，并把设备、工艺包、安装、培训、备件、软件、远程访问和验收边界写入合同。",
  productsServicesSummaryEn: "Weide's catalog spans five equipment routes: continuous filament winding, four-axis pressure-vessel winding, horizontal epoxy-pipe winding, centrifugal-casting GRP pipe production and FRP lighting-pole winding. The supplier also publishes feeding, conveying, loading, curing, joint-making and quality-support modules that can be combined into a line. An RFQ should identify the finished product, diameter, length and wall range, liner and laminate concept, resin, reinforcement and filler system, winding pattern and angle, target takt and annual output, number of recipes and changeover time. Define fiber-creel count and tension range, axes and positioning accuracy, mandrel or steel-band mold arrangement, resin and additive metering, sand feeding where applicable, cure profile, oven temperature and uniformity, handling, joint fabrication, dust and vapor extraction, utilities, footprint, foundation and operator staffing. A continuous-pipe line needs the band-mandrel range, inner layer, structural and sand-layer sequence, additive-manufacturing method, cut and transport logic, coupling design and online dimensional or defect checks. A hydrogen-cylinder line needs the intended cylinder type and liner, fiber path, winding-head and axis control, automatic loading and unloading, resin control, cure, serial traceability and safe handling of rejected parts. An epoxy-pipe line needs pressure class, DN range, winding and cure recipe, mandrel extraction and flange or fitting scope. A centrifugal-casting line needs mold inventory, rotational-speed and material-distribution control, heating, compaction, cooling, demolding and balance provisions. FAT should use representative raw materials to produce agreed trial articles and measure takt, recipe repeatability, layer placement, tension, metering, dimensions, cure and downtime recovery. SAT should repeat critical functions after shipment and verify utilities, guarding, interlocks, emergency stop, extraction, noise, software access, data backup and operator training. Obtain the final equipment BOM, general arrangement, control architecture, interface list, source code or escrow position where relevant, cybersecurity and remote-access rules, manuals, spare and consumable lists, preventive-maintenance schedule and service response. Separate machinery, molds and mandrels, creels, ovens, robots, environmental treatment, process know-how, installation, travel, trial materials and product qualification in the quotation. Published performance and product-quality claims do not prove that every configuration achieves the same result, and the equipment listing does not make Weide a supplier of the pipe, cylinder, pole, fiber or resin processed on it.",
  ecatalogs: [
    { title: "唯德官方网站", titleEn: "Official Weide Website", description: "企业、设备和联系信息入口。", descriptionEn: "Official company, equipment and contact entry.", url: "https://www.wdfrp.com/", format: "Official website" },
    { title: "唯德公司简介", titleEn: "About Weide", description: "公司历史、四类核心产线与配套系统。", descriptionEn: "Official history, core lines and supporting systems.", url: "https://www.wdfrp.com/about-us", format: "Company page" },
    { title: "唯德产品目录", titleEn: "Weide Product Directory", description: "连续缠绕、四轴、卧式、离心和灯杆设备分类。", descriptionEn: "Official continuous, four-axis, horizontal, centrifugal and pole-equipment categories.", url: "https://www.wdfrp.com/products", format: "Product directory" },
    { title: "连续缠绕复材设备", titleEn: "Continuous Winding Composite Equipment", description: "连续缠绕生产线产品依据。", descriptionEn: "Official continuous-winding production-line source.", url: "https://www.wdfrp.com/countinue-filament-winding-machine/composite-material-winding-equipment.html", format: "Product page" },
    { title: "环氧管缠绕机", titleEn: "Epoxy Filament Winding Machine", description: "卧式环氧管道设备依据。", descriptionEn: "Official horizontal epoxy-pipe equipment source.", url: "https://www.wdfrp.com/horizontal-winding-machine/epoxy-filament-winding-machine.html", format: "Product page" },
    { title: "唯德联系方式", titleEn: "Weide Contact", description: "连云港地址、电话和邮箱。", descriptionEn: "Official Lianyungang address, telephone and email.", url: "https://www.wdfrp.com/contact-us", format: "Contact page" },
    { title: "中国国际复材展 L 字母页", titleEn: "China Composites Expo — L Directory", description: "连云港唯德展商主体来源。", descriptionEn: "Organizer source for the Lianyungang Weide exhibitor.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=L", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/lianyungang-weide-logo.webp",
  contactEmail: "weide_zsj@126.com",
  contactPhone: "+86 139 6139 5177",
  address: "Hongmen Industrial Park, Haizhou District, Lianyungang, Jiangsu, China",
  website: "https://www.wdfrp.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 27,
  viewCount: 0,
  capabilities: ["continuous filament winding lines", "four-axis cylinder winding", "horizontal epoxy-pipe winding", "centrifugal GRP pipe lines", "FRP lighting-pole winding", "resin feeding systems", "curing ovens", "automation and commissioning"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
