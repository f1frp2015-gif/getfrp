import type { SupplierListing } from "@/lib/db/schema";

export const NINGBO_JINGWEI_CNC_SUPPLIER_ID = "sup-ningbo-jingwei-cnc";
export const NINGBO_JINGWEI_CNC_SUPPLIER_SLUG = "ningbo-jingwei-cnc-composite-cutting";

// Curated from JWEI's current official company, composite-solution, machine,
// brochure and contact pages and the CCE N directory. The complete official
// orange icon, JWEI wordmark, Chinese wordmark and registered mark were
// downloaded from jingwei.com.cn on 2026-08-25 without cropping.
export const NINGBO_JINGWEI_CNC_SUPPLIER_PROFILE: SupplierListing = {
  id: NINGBO_JINGWEI_CNC_SUPPLIER_ID,
  name: "宁波经纬数控股份有限公司",
  nameEn: "Ningbo Jingwei CNC Co., Ltd.",
  slug: NINGBO_JINGWEI_CNC_SUPPLIER_SLUG,
  location: "浙江宁波",
  locationEn: "Ningbo, Zhejiang, China",
  province: "浙江",
  category: "equipment",
  products: ["SC 系列复合材料数字裁切机", "CB03E-2516-RQ 复材智能裁切系统", "碳纤维干布与预浸料单层裁切方案", "玻纤预浸料与干布裁切方案", "固化碳板与环氧板铣切方案", "聚酯纤维吸音板裁切方案", "PE 膜与离型膜裁切方案", "石墨、橡胶与发泡材料裁切方案", "切割、压痕、绘图与铣切多功能刀头", "复材 CAD 排版、真空吸附与收料工作流"],
  productsEn: ["SC-series digital cutting machines for composite materials", "CB03E-2516-RQ intelligent composite cutting system", "Single-ply cutting solution for dry carbon fabric and prepreg", "Cutting solution for fiberglass prepreg and dry fabric", "Routing solution for cured carbon plate and epoxy board", "Cutting solution for polyester acoustic panels", "PE-film and release-film cutting solution", "Cutting solution for graphite, rubber and foam materials", "Multi-function cutting, creasing, plotting and routing heads", "Composite CAD nesting, vacuum hold-down and collection workflow"],
  processList: ["客户材料、CAD 文件与节拍需求评审", "单层干布和预浸料数字裁切", "刀片切割、压痕、绘图和铣切", "真空分区吸附和材料固定", "自动排版与材料利用率优化", "切割路径和刀具参数配置", "代表性材料试切与边缘质量确认", "尺寸精度、重复性和节拍验收", "碳纤导电粉尘抽排接口规划", "安装、培训、软件和售后支持"],
  processListEn: ["Customer-material, CAD-file and takt review", "Digital cutting of single-ply dry fabric and prepreg", "Knife cutting, creasing, plotting and routing", "Zoned vacuum hold-down and material restraint", "Automatic nesting and material-yield optimization", "Cut-path and tool-parameter configuration", "Representative-material trials and edge-quality review", "Dimensional-accuracy, repeatability and takt acceptance", "Carbon-fiber conductive-dust extraction interface planning", "Installation, training, software and after-sales support"],
  established: null,
  verified: false,
  description: "宁波经纬数控股份有限公司（JWEI）官网提供柔性材料数字裁切设备，并为复合材料行业发布 SC 系列和 CB03E-2516-RQ 等裁切方案。官网复材样本列出的被加工材料包括碳纤维干布/预浸料、固化碳板、玻纤预浸料/干布、环氧板、聚酯吸音板、PE/离型膜、石墨、橡胶和发泡材料；功能覆盖切割、压痕、绘图、铣切、真空吸附与数字排版。中国国际复材展 N 字母页列出该宁波展商。本页定位为复材裁切设备与工艺方案，不把碳纤维、玻璃纤维、预浸料或裁切后的零件写成经纬自产材料或制品。",
  descriptionEn: "Ningbo Jingwei CNC Co., Ltd. (JWEI) publishes digital cutting equipment for flexible materials and a dedicated composite-industry solution built around its SC series and CB03E-2516-RQ system. The current official composite brochure identifies dry carbon fabric, carbon prepreg, cured carbon plate, fiberglass prepreg and dry fabric, epoxy board, polyester acoustic panel, PE or release film, mesh, graphite, rubber and foam among the materials that can be evaluated. Published functions include cutting, creasing, plotting, routing, vacuum hold-down and digital nesting, with the configured material determining the usable tool, thickness, speed and result. The China Composites Expo N directory independently lists the Ningbo exhibitor. This is an equipment and process profile: carbon fiber, fiberglass, prepreg, films and cut components are customer materials or outputs, not evidence that JWEI manufactures those materials or finished composite products.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "复材裁切设备询价应从实际材料和零件数据开始，而不是只报设备型号。需提交干纤维或预浸料状态、纤维类型和织物结构、上浆/树脂体系、离型纸或保护膜、粘性、单层厚度、叠层高度、幅宽、卷径和重量、最小与最大零件、孔槽和尖角、方向与排版约束、尺寸公差、边缘毛丝/拉纤/分层标准、标记、配套和追溯要求。若裁切固化碳板、环氧板、石墨或橡胶，还要规定硬度、厚度、粉尘、铣刀、转速、进给和表面要求。代表性材料试切应记录 CAD 版本、排版率、刀具、速度、加速度、真空区域、尺寸、重复性、边缘状态、节拍、耗材寿命和停机恢复。碳纤维粉尘具有导电性，买卖双方需明确源头抽排、过滤、接地、电气隔离、清洁以及火灾/爆炸和职业卫生评估；工作台吸附真空不能自动视作合格除尘系统。RFQ 还应锁定有效工作幅面、输送和收料、卷材供料、刀头及备件、真空泵和抽排边界、CAD/排版软件格式和许可、MES/ERP 接口、数据权限、远程访问、安全防护、急停和当地合规。FAT 要用约定材料持续运行并验证精度、重复性、产能、利用率、工具寿命、报警和安全联锁；SAT 再核对地基、占地、电力、压缩空气、真空、抽排、网络、环境、安装、培训和数据连接。采购时应取得配置 BOM、布局、说明书、电气图、程序与参数备份、软件续费、易损件价格、保修范围、远程及现场响应、包装和 Incoterm。官网可能列出精度和最大厚度，但这些指标须与具体机型、刀具、材料和测试条件绑定，不作为所有复材的通用保证。",
  productsServicesSummaryEn: "A composite-cutting inquiry should begin with real material and part data rather than a machine name. State whether the input is dry reinforcement, prepreg, cured laminate, board, film, foam, graphite or rubber; identify fiber and textile architecture, sizing or resin, backing or release paper, tack, hardness, single-ply thickness, total stack, usable width, roll diameter and mass. Provide the smallest and largest pieces, holes, slots and sharp corners, directional and nesting constraints, required dimensional tolerance, edge acceptance for fuzz, pulled fiber, delamination or resin drag, and the marking, kitting and traceability workflow. Routing cured carbon plate, epoxy board, graphite or rubber also requires the thickness, dust behavior, cutter, spindle speed, feed and surface criteria. A representative-material trial should record the CAD revision, nesting yield, tool, speed, acceleration, vacuum zones, environment, measured dimensions, repeatability, edge condition, takt, consumable life and recovery after interruption. Carbon-fiber dust is electrically conductive, so buyer and seller must define source capture, filtration, grounding, electrical segregation, safe cleaning, fire or explosion review and occupational-hygiene controls. Table hold-down vacuum is not automatically a qualified dust-extraction system. The RFQ should also lock the usable cutting area, conveyor and collection arrangement, roll handling, cutting heads and spares, vacuum and extraction boundary, supported CAD and nesting formats, licence and update terms, MES or ERP interfaces, user permissions, data ownership, remote access, guarding, safety sensing, emergency stops and destination compliance. FAT should use the agreed production material and demonstrate accuracy, repeatability, edge quality, throughput, utilization, tool life, alarms, restart and interlocks during sustained operation. SAT should confirm footprint, foundation, power, compressed air, vacuum, extraction, network, environment, installation, training and data exchange. Obtain the configuration BOM, layout, manuals, electrical drawings, control-program and parameter backups, software-renewal schedule, consumable and critical-spare prices, warranty exclusions, support response, export packing and Incoterm. Published accuracy or maximum-thickness figures must be tied to the exact model, tool, material and test condition; they are not universal guarantees for every composite. Carbon fiber, fiberglass, prepreg and the parts cut from them remain customer inputs or outputs, not JWEI product keywords.",
  ecatalogs: [
    { title: "经纬数控官网", titleEn: "JWEI Official Website", description: "公司与数字裁切产品入口。", descriptionEn: "Official company and digital-cutting entry point.", url: "https://www.jingwei.com.cn/", format: "Official website" },
    { title: "复合材料行业方案", titleEn: "Composite Industry Solution", description: "复材裁切设备与工艺场景。", descriptionEn: "Official composite cutting equipment and workflow page.", url: "https://www.jingwei.com.cn/fucai/", format: "Industry solution" },
    { title: "SC 系列复材裁切机", titleEn: "SC Composite Cutter", description: "SC 系列配置与功能。", descriptionEn: "Official SC-series composite cutter page.", url: "https://www.jingwei.com.cn/products/v28.html", format: "Product page" },
    { title: "CB03E-2516-RQ 复材样本", titleEn: "CB03E-2516-RQ Composite Brochure", description: "材料范围、功能和参数资料。", descriptionEn: "Official material, function and specification brochure.", url: "https://www.jingwei.com.cn/uploadfile/2026/0130/20260130043323150.pdf", format: "PDF brochure" },
    { title: "经纬联系方式", titleEn: "JWEI Contact", description: "宁波地址、电话和邮箱。", descriptionEn: "Official Ningbo address, phone and email.", url: "https://www.jingwei.com.cn/contact/", format: "Contact page" },
    { title: "中国国际复材展 N 字母页（第 3 页）", titleEn: "China Composites Expo — N Directory, Page 3", description: "宁波经纬展商记录。", descriptionEn: "Organizer source for the Ningbo Jingwei exhibitor.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=60&head=N", format: "Exhibitor directory" },
  ],
  profilePublished: true, profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/ningbo-jingwei-logo.png",
  contactEmail: "info@jingwei.com.cn", contactPhone: "+86 574 8797 5939 / +86 183 6827 3707",
  address: "No. 1206 Jianlan Road, Ningbo High-tech Zone, Ningbo, Zhejiang, China",
  website: "https://www.jingwei.com.cn/", enterpriseId: null, scaleTier: null, brandPriority: 26, viewCount: 0,
  capabilities: ["digital composite cutting", "single-ply dry-fabric cutting", "prepreg ply cutting", "cured-laminate routing", "CAD nesting", "vacuum hold-down", "customer-material trials", "installation and software support"],
  standardsSupported: [], moqKg: null, leadTimeDays: null, exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"), updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
