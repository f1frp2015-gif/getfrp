import type { SupplierListing } from "@/lib/db/schema";

export const NABERTHERM_SHANGHAI_SUPPLIER_ID = "sup-nabertherm-shanghai";
export const NABERTHERM_SHANGHAI_SUPPLIER_SLUG = "nabertherm-shanghai-industrial-furnaces";

// Curated from Nabertherm's current Chinese product, company and Shanghai sales
// pages and the CCE N directory. The complete official logo includes the black
// and yellow wordmark plus the MORE THAN HEAT / 30–3000 °C baseline.
export const NABERTHERM_SHANGHAI_SUPPLIER_PROFILE: SupplierListing = {
  id: NABERTHERM_SHANGHAI_SUPPLIER_ID,
  name: "纳博热（上海）工业炉有限公司",
  nameEn: "Nabertherm Ltd. (Shanghai)",
  slug: NABERTHERM_SHANGHAI_SUPPLIER_SLUG,
  location: "上海闵行",
  locationEn: "Minhang, Shanghai, China",
  province: "上海",
  category: "equipment",
  products: ["空气循环炉与干燥箱", "辐射加热箱式炉", "高温炉（最高 1800°C 产品系列）", "保护气氛、反应气体或真空工艺炉", "马弗炉与实验室箱式炉", "管式炉", "脱脂和烧结炉系统", "熔化与保温炉", "特殊应用定制炉", "工艺控制与记录系统"],
  productsEn: ["Air-circulation furnaces and drying ovens", "Radiation-heated chamber furnaces", "High-temperature furnace families up to 1800 °C", "Protective-gas, reactive-gas and vacuum process furnaces", "Muffle and laboratory chamber furnaces", "Tube furnaces", "Debinding and sintering furnace systems", "Melting and holding furnaces", "Custom furnaces for special applications", "Process-control and documentation systems"],
  processList: ["中国区工业炉销售与售后协调", "工件与热处理工艺需求分析", "空气、保护气氛或真空炉型初选", "温度、炉膛和装载方式配置", "加热、排气和冷却方案确认", "控制器与数据记录选型", "定制炉工程接口", "用户测试中心协调", "备件、维护与技术支持", "安装调试和验收范围确认"],
  processListEn: ["China industrial-furnace sales and after-sales coordination", "Workpiece and thermal-process requirement analysis", "Air, protective-atmosphere or vacuum furnace screening", "Temperature, chamber and loading configuration", "Heating, exhaust and cooling concept confirmation", "Controller and process-data recording selection", "Custom-furnace engineering interface", "User test-center coordination", "Spare-parts, maintenance and technical support", "Installation, commissioning and acceptance-scope confirmation"],
  established: 2005,
  verified: false,
  description: "纳博热（上海）工业炉有限公司是 Nabertherm 官网列出的中国销售公司，负责中国市场销售和售后接口。官网当前产品导航覆盖空气循环、辐射加热、高温、保护气氛/真空、马弗、管式、脱脂烧结、熔化保温、实验室和定制工业炉及工艺控制系统；中国国际复材展 N 字母页支持上海展商身份。本页不把炉内处理的碳纤维、玻纤、树脂、陶瓷或增材制造工件写成纳博热自产材料，也不因展会设备分类推导其销售复材固化热压罐。",
  descriptionEn: "Nabertherm Ltd. (Shanghai), identified in Chinese exhibition material as Nabertherm's Shanghai industrial-furnace company, is the China sales-company entry published on the current Nabertherm website. The reviewed official navigation covers air-circulation and drying ovens, radiation-heated chamber furnaces, high-temperature solutions, protective-gas and vacuum systems, laboratory muffle and tube furnaces, debinding and sintering systems, melting and holding furnaces, custom furnace engineering and process-control documentation. The China Composites Expo N directory independently supports the Shanghai exhibitor identity. This is an equipment profile: carbon fiber, fiberglass, resin, ceramic, metal powder or any other workpiece processed in a furnace is not a material manufactured by Nabertherm. The exhibition category also is not evidence that the Shanghai entity offers composite-curing autoclaves, so GetFRP does not publish an autoclave product or inject material-product keywords.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "工业炉询价应提供工件、装载量、温度曲线、气氛、炉膛尺寸、均温性、排气、冷却、洁净度、数据记录和安全联锁要求。涉及树脂、粘结剂或增材制造脱脂时，还要提交挥发物、溶剂、粘结剂和尾气风险资料。采购方需确认设备制造地、上海公司的销售/售后范围、安装调试、验收方法、备件和保修责任；未核对现行主体和范围前不把集团证书写入已验证字段。",
  productsServicesSummaryEn: "A furnace RFQ should define the workpiece and process before a model is selected. State material composition, binder or volatile content, part geometry and mass, batch loading and fixture, target temperature profile, heating and cooling rates, soak times, required uniformity, maximum temperature, chamber dimensions and usable volume. Identify whether the process runs in air, controlled ventilation, protective gas, reactive gas or vacuum; specify oxygen and dew-point limits, gas flow, pressure range, leak-rate expectations, exhaust treatment and any explosion, solvent or hazardous-decomposition risk. For composite or additive-manufacturing debinding, provide the exact resin or binder system, SDS, emitted species and loading limit rather than assuming that a generic oven configuration is safe. Define controller architecture, thermocouples, over-temperature protection, recipe security, data recording, audit trail, remote access and interface to the plant system. The purchase specification should also allocate utilities, foundations, lifting and access, local code compliance, factory and site acceptance tests, temperature-uniformity surveys, instrument calibration, installation, commissioning, operator training, documentation language, spare parts, preventive maintenance, response time and warranty. The current official sales-company page lists the Shanghai contact as Nabertherm Ltd. (Shanghai). Buyers should confirm which entity designs and manufactures the selected furnace, which entity quotes and invoices, the origin of major modules, and the precise Shanghai sales and after-sales scope. Group product statements and certificates are not treated as Shanghai-site certification without a current document matching legal entity, product, site, standard, scope and validity, so certification arrays remain empty. Nabertherm equipment may process advanced materials, glass, ceramics or binder-containing parts, but those workpieces are not its products. No composite-curing autoclave is listed on the reviewed official pages used for this profile, and the CCE category alone is not enough to create one.",
  ecatalogs: [
    { title: "纳博热中国官网", titleEn: "Nabertherm China Website", description: "中国产品、公司和联系入口。", descriptionEn: "Official China product, company and contact entry.", url: "https://nabertherm.com/cn", format: "Official website" },
    { title: "全球销售公司", titleEn: "Global Sales Companies", description: "上海公司名称、地址、电话和邮箱。", descriptionEn: "Official Shanghai company name, address, phone and email.", url: "https://nabertherm.com/cn/gongsi/quanqiuxiaoshousi", format: "Company page" },
    { title: "热加工技术", titleEn: "Thermal Process Technology", description: "空气、保护气氛和真空工艺入口。", descriptionEn: "Official air, protective-atmosphere and vacuum process entry.", url: "https://nabertherm.com/cn/pulukete/gongye/rejiagongjishu", format: "Product category" },
    { title: "先进材料炉", titleEn: "Furnaces for Advanced Materials", description: "辐射、循环空气、高温与实验室炉系列。", descriptionEn: "Official radiation, air-circulation, high-temperature and laboratory ranges.", url: "https://nabertherm.com/cn/pulukete/gongye/xianjincailiao", format: "Product category" },
    { title: "实验室炉", titleEn: "Laboratory Furnaces", description: "干燥箱、马弗、箱式、高温与管式炉。", descriptionEn: "Official drying, muffle, chamber, high-temperature and tube furnaces.", url: "https://nabertherm.com/cn/pulukete/shiyanshi", format: "Product category" },
    { title: "工业热处理中文目录", titleEn: "Thermal Process Technology Chinese Catalog", description: "官方工业炉目录。", descriptionEn: "Official Chinese industrial-furnace catalog.", url: "https://nabertherm.com/sites/default/files/2023-05/thermalprocesstechnology_chinese.pdf", format: "PDF catalog" },
    { title: "中国国际复材展 N 字母页", titleEn: "China Composites Expo — N Directory", description: "上海展商主体和设备范围。", descriptionEn: "Organizer source for the Shanghai exhibitor and equipment scope.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=N", format: "Exhibitor directory" },
  ],
  profilePublished: true, profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/nabertherm-shanghai-logo.svg",
  contactEmail: "contact@nabertherm-cn.com", contactPhone: "+86 21 6490 2960",
  address: "No. 158, Lane 150, Pingbei Road, Minhang District, Shanghai 201109, China",
  website: "https://nabertherm.com/cn", enterpriseId: null, scaleTier: null, brandPriority: 27, viewCount: 0,
  capabilities: ["industrial furnace sales", "air-circulation furnaces", "high-temperature furnaces", "protective-atmosphere and vacuum furnaces", "debinding and sintering", "laboratory furnaces", "process control", "China after-sales support"],
  standardsSupported: [], moqKg: null, leadTimeDays: null, exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"), updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
