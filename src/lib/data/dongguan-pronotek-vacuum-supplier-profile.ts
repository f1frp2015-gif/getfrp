import type { SupplierListing } from "@/lib/db/schema";

export const DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_ID =
  "sup-dongguan-pronotek-vacuum";
export const DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_SLUG =
  "dongguan-pronotek-vacuum";

// Curated from Pronotek China's current official website and the 2026 China
// Composites Expo D directory. The organizer says the Pronotek brand began in
// Italy in 1988 and the China operation was established in 2017; this profile
// records the China operating start rather than transferring the brand date to
// the Dongguan legal entity. All manufacturing, network and performance claims
// remain company-published. Official logo downloaded 2026-08-25 from:
// https://pronotek.com/upload/202109/18/202109181055553193.png
export const DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_PROFILE: SupplierListing = {
  id: DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_ID,
  name: "东莞市普诺克真空科技有限公司",
  nameEn: "Dongguan Pronotek Vacuum Technology Co., Ltd.",
  slug: DONGGUAN_PRONOTEK_VACUUM_SUPPLIER_SLUG,
  location: "广东东莞",
  locationEn: "Dongguan, Guangdong, China",
  province: "广东",
  category: "equipment",
  products: [
    "旋片真空泵",
    "罗茨真空泵",
    "干式螺杆真空泵",
    "无油旋片真空泵",
    "涡旋式真空泵",
    "无油活塞真空泵与压缩机",
    "真空系统、机组与中央真空站",
    "真空泵油、过滤器、配件与维修服务",
  ],
  productsEn: [
    "Rotary-vane vacuum pumps",
    "Roots mechanical-booster vacuum pumps",
    "Dry screw vacuum pumps",
    "Oil-free rotary-vane vacuum pumps",
    "Scroll vacuum pumps",
    "Oil-free piston vacuum pumps and compressors",
    "Vacuum systems, pump skids and central vacuum stations",
    "Vacuum-pump oils, filters, spares and repair services",
  ],
  processList: [
    "真空泵与机组设计和装配（企业声明）",
    "前级真空系统集成",
    "中央真空站规划与集成",
    "按工况定制真空解决方案",
    "泵型选型与系统容量计算支持（企业声明）",
    "现场安装与调试",
    "预防性维护、检修和延保",
    "原厂配件、过滤与真空泵油供应",
  ],
  processListEn: [
    "Vacuum-pump and skid design and assembly (company claim)",
    "Fore-vacuum system integration",
    "Central vacuum-station planning and integration",
    "Duty-specific custom vacuum solutions",
    "Pump selection and system-capacity support (company claim)",
    "On-site installation and commissioning",
    "Preventive maintenance, overhaul and extended service",
    "Supply of spares, filtration and vacuum-pump oils",
  ],
  established: 2017,
  verified: false,
  description:
    "东莞市普诺克真空科技有限公司是位于广东东莞的工业真空泵、真空系统与维修服务供应商。企业官网公开旋片、罗茨、干式螺杆、无油旋片、涡旋和活塞泵，并提供中央真空站、定制系统、配件与服务。中国国际复材展在 D 字母网上展厅以同一中文主体收录该展商，展品范围为真空泵及真空系统、类别为辅助设备及工具。展会资料称 Pronotek 品牌创建于 1988 年、2017 年进入中国；本页将 2017 年作为中国业务公开起点，不把意大利品牌历史误写为东莞法人的工商成立年。",
  descriptionEn:
    "Dongguan Pronotek Vacuum Technology Co., Ltd. is a Dongguan, Guangdong supplier of industrial vacuum pumps, engineered vacuum systems and pump services. Its official website publishes rotary-vane, Roots booster, dry-screw, oil-free rotary-vane, scroll and piston technologies together with central stations, custom systems, spares and service. China Composites Expo lists the matching Chinese entity in its D directory under auxiliary equipment and tools, with vacuum pumps and systems as the exhibit scope. The organizer says the Pronotek brand began in 1988 and entered China in 2017. This profile records 2017 only as the published start of the China operation and does not misstate the Italian brand history as the Dongguan legal entity's independently verified incorporation year.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "普诺克的官网产品范围覆盖多种真空发生方式和集中式系统，但官网当前列出的主要应用页为半导体、光伏、科研和养殖，并没有把每个泵型直接标注为复材真空导入专用设备。它进入 GetFRP 的依据是中国国际复材展将其列为真空泵及真空系统展商；采购方应依据具体复材工艺重新选型，而不是把任一通用工业泵自动等同于真空袋成型、VARTM/真空导入、灌注、脱泡或热压罐辅助真空系统。询价应说明工艺类型、同时运行的模具或真空点数、腔体容积、目标绝压或相对真空、抽气时间、持续泄漏量、树脂挥发物与水汽、环境温度、海拔、连续运行周期、备用率、噪声、洁净度和油污染限制。供应商应给出工作曲线、极限压力与额定抽速的测试条件、有效抽速、入口与排气接口、允许气载、油返流控制、气镇、冷凝/树脂捕集、过滤、冷却、电机功率、防护等级和材料兼容性。系统级 RFQ 还应规定缓冲罐、阀组、真空表和传感器、PLC、报警、冗余、旁通、排气处理、集液罐、自动排液、管路压降、远程监控及与车间控制系统的接口。FAT/SAT 应验证规定容积的抽空时间、稳态压力、泄漏保持、切换逻辑、报警、温升、噪声和连续运行，而不能只验证电机转动。复材树脂或溶剂可能造成冷凝、污染、火灾或危险排放，买方须完成介质危害、ATEX/防爆、接地、通风、排气、职业暴露和废油处置审查，并确认供应商书面允许的介质。商务比较要统一泵组、控制、罐体、过滤与捕集、安装、管路、调试、培训、首批油品和备件边界；同时索取维护间隔、易损件寿命、质保排除、现场响应和关键备件价格。本页不记录未经完整现行文件核验的认证、性能或全球网络主张。",
  productsServicesSummaryEn:
    "Pronotek's official portfolio spans several vacuum-generation technologies and centralized systems, but its current application pages emphasize semiconductor, photovoltaic, research and breeding duties rather than labeling every pump as dedicated composite-infusion equipment. Its GetFRP relevance comes from China Composites Expo's listing of Pronotek for vacuum pumps and systems. Buyers must reselect equipment for the actual composite process and should not treat a general industrial pump as automatically suitable for vacuum-bag molding, VARTM or vacuum infusion, resin degassing or autoclave support. An RFQ should identify the process; simultaneous molds or vacuum points; chamber volume; target absolute or gauge pressure; pump-down time; sustained leak load; resin volatiles and water vapor; ambient temperature; altitude; duty cycle; redundancy; noise; cleanliness and oil-contamination limits. Ask for the test basis behind pumping curves, ultimate pressure and nominal speed, plus effective speed, connections, gas-load allowance, backstreaming control, gas ballast, condensate or resin trapping, filtration, cooling, motor power, enclosure and material compatibility. A system RFQ should define receiver, valves, gauges and sensors, PLC, alarms, redundancy, bypass, exhaust treatment, knock-out pot, automatic drains, piping pressure loss, remote monitoring and plant-control interfaces. FAT and SAT should demonstrate pump-down time on the specified volume, steady pressure, leak hold, changeover logic, alarms, temperature rise, noise and sustained operation rather than merely proving that motors turn. Composite resins or solvents may condense, contaminate equipment or create fire and hazardous-emission risks. Complete media-hazard, explosion-protection, grounding, ventilation, exhaust, occupational-exposure and waste-oil reviews and obtain written media acceptance. Normalize commercial comparisons for pump skid, controls, receiver, filtration and trapping, installation, piping, commissioning, training, first-fill oils and spares; obtain maintenance intervals, wear-part life, warranty exclusions, field-response terms and critical-spare prices. No certification, performance or global-network claim is presented as independently verified without a complete current source document.",
  ecatalogs: [
    {
      title: "普诺克中国官网",
      titleEn: "Official Pronotek China Website",
      description: "中国业务、产品、服务与联系方式入口。",
      descriptionEn: "China business, products, services and contact entry point.",
      url: "https://pronotek.com/",
      format: "Official website",
    },
    {
      title: "普诺克产品目录",
      titleEn: "Pronotek Product Directory",
      description: "真空泵、系统、配件和维修产品组。",
      descriptionEn: "Official vacuum-pump, system, spare and repair categories.",
      url: "https://pronotek.com/products.html",
      format: "Product directory",
    },
    {
      title: "真空系统与机组",
      titleEn: "Vacuum Systems and Pump Skids",
      description: "前级系统、中央真空站与定制解决方案。",
      descriptionEn: "Fore-vacuum systems, central stations and custom solutions.",
      url: "https://pronotek.com/products/vacuum-systems.html",
      format: "Official product page",
    },
    {
      title: "普诺克公司简介",
      titleEn: "Pronotek Company Profile",
      description: "品牌、中国业务与企业自述研发制造能力。",
      descriptionEn: "Brand, China operation and company-published development and production scope.",
      url: "https://pronotek.com/company/about-pronotek.html",
      format: "Company profile",
    },
    {
      title: "普诺克官方联系方式",
      titleEn: "Pronotek Official Contact Page",
      description: "东莞地址、电话、传真与销售邮箱。",
      descriptionEn: "Dongguan address, telephone, fax and sales email.",
      url: "https://pronotek.com/contact/contact.html",
      format: "Official contact",
    },
    {
      title: "中国国际复材展 D 字母展商页",
      titleEn: "China Composites Expo Exhibitors — D",
      description: "普诺克展商身份、真空泵与系统范围。",
      descriptionEn: "Organizer source for Pronotek and its vacuum-pump and system scope.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=300",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/dongguan-pronotek-logo.png",
  contactEmail: "sales@pronotek.com",
  contactPhone: "+86 769 8978 4003",
  address: "Building A, Zhongbang Zhigu Industrial Park, Nancheng District, Dongguan, Guangdong, China",
  website: "https://pronotek.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 21,
  viewCount: 0,
  capabilities: [
    "rotary-vane vacuum pumps",
    "Roots booster vacuum pumps",
    "dry screw vacuum pumps",
    "oil-free vacuum pumps",
    "central vacuum stations",
    "custom vacuum-system integration",
    "vacuum-pump maintenance and overhaul",
    "vacuum filtration, oils and spares",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
