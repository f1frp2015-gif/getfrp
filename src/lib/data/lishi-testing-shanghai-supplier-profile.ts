import type { SupplierListing } from "@/lib/db/schema";

export const LISHI_TESTING_SHANGHAI_SUPPLIER_ID = "sup-lishi-testing-shanghai";
export const LISHI_TESTING_SHANGHAI_SUPPLIER_SLUG = "lishi-testing-shanghai";

// Curated from Lishi's current official product pages and contact footer plus
// the CCE directory. The complete official header logo was downloaded on
// 2026-08-26 from:
// https://omo-oss-image.thefastimg.com/portal-saas/pg2025062210365598584/cms/image/ed48f293-d7b5-442c-824f-077b72b485de.png
export const LISHI_TESTING_SHANGHAI_SUPPLIER_PROFILE: SupplierListing = {
  id: LISHI_TESTING_SHANGHAI_SUPPLIER_ID,
  name: "力试（上海）科学仪器有限公司",
  nameEn: "Lishi (Shanghai) Scientific Instruments Co., Ltd.",
  slug: LISHI_TESTING_SHANGHAI_SUPPLIER_SLUG,
  location: "上海金山",
  locationEn: "Jinshan, Shanghai, China",
  province: "上海",
  category: "equipment",
  products: ["LE 系列电子万能试验系统", "LD 系列电子万能试验系统", "液压伺服万能试验系统", "电液伺服疲劳试验系统", "电子伺服疲劳试验系统", "结构疲劳试验系统", "金属摆锤冲击试验机", "落锤与塑料摆锤冲击试验机", "扭转试验系统", "高温蠕变和多轴耦合环境蠕变系统", "维卡软化点与热变形温度试验机", "环境模拟、夹具、变形测量和数据采集系统"],
  productsEn: ["LE-series electronic universal testing systems", "LD-series electronic universal testing systems", "Hydraulic-servo universal testing systems", "Electro-hydraulic servo fatigue testing systems", "Electronic-servo fatigue testing systems", "Structural fatigue testing systems", "Metal pendulum impact testers", "Drop-weight and plastic pendulum impact testers", "Torsion testing systems", "High-temperature creep and coupled-environment multiaxial creep systems", "Vicat softening and heat-deflection temperature testers", "Environmental simulation, fixtures, extensometry and data-acquisition systems"],
  processList: ["静态拉伸、压缩和弯曲测试", "动态和疲劳测试", "低载荷到高载荷力学测试", "单轴与多轴加载", "高温、低温和环境耦合测试", "冲击、落锤和摆锤测试", "扭转与结构部件测试", "蠕变和长期性能测试", "夹具、引伸计和变形测量集成", "控制、数据采集和试验软件配置"],
  processListEn: ["Static tensile, compression and flexural testing", "Dynamic and fatigue testing", "Low-load to high-load mechanical testing", "Uniaxial and multiaxial loading", "High-temperature, low-temperature and coupled-environment testing", "Impact, drop-weight and pendulum testing", "Torsion and structural-component testing", "Creep and long-duration performance testing", "Fixture, extensometer and deformation-measurement integration", "Control, data acquisition and test-software configuration"],
  established: null,
  verified: false,
  description:
    "力试（上海）科学仪器有限公司提供材料和结构力学试验设备。中国国际复材展将其列为覆盖静态到动态、低载荷到高载荷、单轴到多轴以及常温、高温和低温环境的测试解决方案供应商；官网现行目录包括电子/液压万能、伺服疲劳、结构疲劳、冲击、扭转、蠕变、热变形/维卡、环境模拟、夹具、变形测量、控制和数据采集。复合材料是其可测试对象之一，不是力试自产纤维、层合板或终端复材产品。本页不因设备能够测试碳纤维或玻纤材料而植入相应材料供应商关键词，也不把通用设备类别当作某一标准、载荷精度或试验方法已获认可的证明。",
  descriptionEn:
    "Lishi (Shanghai) Scientific Instruments Co., Ltd. supplies material and structural mechanical-testing equipment. China Composites Expo describes a test-solution scope from static to dynamic, low to high load, uniaxial to multiaxial, and ambient to high- or low-temperature conditions. The current official directory includes electronic and hydraulic universal, servo-fatigue, structural-fatigue, impact, torsion, creep, heat-deflection and Vicat, environmental-simulation, fixture, deformation-measurement, control and data-acquisition systems. Composite material is one class of test specimen, not a fiber, laminate or finished composite product made by Lishi. GetFRP does not assign carbon-fiber, fiberglass or other material-supplier search phrases merely because the equipment can test those materials. Nor does a generic equipment category prove conformance to a particular standard, load or strain accuracy, environmental range or accreditation scope. Model, configuration, method and calibration evidence must match the quoted system.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "力试目录覆盖万能、疲劳、结构、冲击、扭转、蠕变、热性能和环境耦合试验，并延伸至夹具、引伸计、控制器、数据采集和软件。设备 RFQ 应锁定试样、标准和方法、力/位移/应变范围、精度等级、频率/速度、波形、温度与环境、夹具、通道、控制模式、保护、数据格式、产能和安全边界。复材测试还要明确各向异性方向、铺层、端部加强、对中、防屈曲、非接触应变测量和破坏能量处理。FAT/SAT、校准和验收必须针对实际配置与目标标准，不能从官网通用品类推断。",
  productsServicesSummaryEn:
    "Lishi's current official catalog covers universal, fatigue, structural, impact, torsion, creep, thermal-property and coupled-environment testing, together with fixtures, extensometry, controllers, data acquisition and software. A useful RFQ starts with the specimen and governing method, then defines force, torque, displacement and strain ranges, required class or uncertainty, static speed, dynamic frequency, waveform, stroke, stiffness, control mode, number of channels, synchronization, sampling, temperature or other environment and the expected daily test volume. For composites, identify material system, laminate architecture and orientation, coupon or component geometry, tabs, gripping and alignment, compression anti-buckling, flexural span, interlaminar or through-thickness method, non-contact or contact strain measurement, failure containment and how post-failure data are handled. Universal-machine scope should state frame capacity and working space, load cells, grips, compression platens, bend fixtures, extensometers and software methods. Fatigue systems additionally need actuator rating, dynamic stroke and force at frequency, hydraulic power or electromechanical duty, cooling, waveform generation, specimen heating, long-duration shutdown logic and cycle-count recovery. Structural tests require load introduction, reaction frame, multiple actuators, channel control, fixture design and civil or foundation responsibility. Impact equipment needs energy range, striker and supports, speed measurement, guarding, specimen conditioning and data reduction. Creep and environmental systems require temperature uniformity, atmosphere, chamber or furnace access, long-term stability, specimen count, backup power and recovery after interruption. Heat-deflection or Vicat equipment should define bath medium, stations, temperature ramp, displacement resolution and calibration artifacts. Require a configuration-specific compliance matrix against each requested standard; a catalog-family name is not proof of the method. FAT should use traceable reference devices or representative specimens to verify force, displacement, strain, temperature, frequency, control transitions, interlocks, data export and repeatability. SAT should confirm utilities, foundation, alignment, guarding, emergency stop, noise, software permissions, backup and operator training. Obtain the final BOM, drawings, manuals, software licence and update policy, calibration certificates and uncertainty, maintenance plan, critical spares, consumables, remote-access controls and service response. Separate machine, fixtures, sensors, environment chamber, hydraulic or utility package, guarding, shipping, installation, calibration, method development and training in the quotation. Composite testing capability does not make Lishi a manufacturer of the tested reinforcement or laminate, so material-product search keywords are excluded.",
  ecatalogs: [
    { title: "力试官方网站", titleEn: "Official Lishi Website", description: "企业、产品和联系信息入口。", descriptionEn: "Official company, product and contact-information entry.", url: "https://www.lishi-test.com/", format: "Official website" },
    { title: "力试产品中心", titleEn: "Lishi Product Center", description: "万能、疲劳、冲击、蠕变和热性能设备目录。", descriptionEn: "Official universal, fatigue, impact, creep and thermal-equipment directory.", url: "https://www.lishi-test.com/product/7/", format: "Product directory" },
    { title: "中国国际复材展 L 字母页", titleEn: "China Composites Expo — L Directory", description: "上海主体与静态、动态及环境力学测试范围。", descriptionEn: "Organizer source for the Shanghai entity and static, dynamic and environmental mechanical-testing scope.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=L", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-26T00:00:00.000Z"),
  logo: "/supplier-assets/lishi-testing-shanghai-logo.png",
  contactEmail: "LSl@lishi-test.com",
  contactPhone: "+86 21 3719 9700",
  address: "No. 199 Jinliu Road, Jinshan District, Shanghai, China",
  website: "https://www.lishi-test.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 26,
  viewCount: 0,
  capabilities: ["universal material testing", "servo fatigue testing", "structural fatigue testing", "impact testing", "torsion testing", "creep testing", "thermal-property testing", "environmental simulation", "extensometry and data acquisition"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-26T00:00:00.000Z"),
};
