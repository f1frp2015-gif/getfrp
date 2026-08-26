import type { SupplierListing } from "@/lib/db/schema";

export const LECTRA_SHANGHAI_SUPPLIER_ID = "sup-lectra-shanghai";
export const LECTRA_SHANGHAI_SUPPLIER_SLUG = "lectra-shanghai-technical-textile-cutting";

// Curated from Lectra's current China contact page, global Vector TechTex page
// and the CCE L directory. Lectra's official website PNG is a white wordmark
// intended for a dark header. To keep the mark complete and legible on GetFRP's
// white card, the black-and-red wordmark was cropped intact from page 1 of
// lectra.cn/sites/default/files/2023-04/AccuMark-v16.0-WhatsNew_AccuPlan-zhcn-V2.pdf
// on 2026-08-25. It was not redrawn, recolored or clipped.
export const LECTRA_SHANGHAI_SUPPLIER_PROFILE: SupplierListing = {
  id: LECTRA_SHANGHAI_SUPPLIER_ID,
  name: "力克系统（上海）有限公司",
  nameEn: "Lectra Systems (Shanghai) Co., Ltd.",
  slug: LECTRA_SHANGHAI_SUPPLIER_SLUG,
  location: "上海徐汇",
  locationEn: "Xuhui, Shanghai, China",
  province: "上海",
  category: "equipment",
  products: ["Vector TechTex 技术材料自动裁剪系统", "Vector TechTex Q2 低层裁剪配置", "Vector TechTex iX2 低层裁剪配置", "Vector TechTex iQ50 裁剪配置", "Vector TechTex iQ80 裁剪配置", "Vector TechTex iX6 高生产率裁剪配置", "Vector TechTex iX9 高生产率裁剪配置", "低层到高层技术纺织材料裁剪解决方案", "CAD 到裁剪房自动化工作流", "传感器与联网裁剪数据方案"],
  productsEn: ["Vector TechTex automated technical-material cutting systems", "Vector TechTex Q2 low-ply cutting configuration", "Vector TechTex iX2 low-ply cutting configuration", "Vector TechTex iQ50 cutting configuration", "Vector TechTex iQ80 cutting configuration", "Vector TechTex iX6 high-productivity cutting configuration", "Vector TechTex iX9 high-productivity cutting configuration", "Low- to high-ply technical-textile cutting solutions", "CAD-to-cutroom automation workflow", "Sensor-enabled connected cutting data solution"],
  processList: ["技术纺织材料自动铺裁", "碳纤维等技术材料低层裁剪", "硬质技术织物高层裁剪", "CAD 数据向裁剪房传递", "订单与裁片排样优化", "裁剪任务和配方管理", "材料利用率与废料优化", "传感器与设备状态数据采集", "裁剪房联网与工业 4.0 集成", "设备配置、培训、维护和技术支持"],
  processListEn: ["Automated technical-textile cutting", "Low-ply cutting of carbon fiber and other technical materials", "High-ply cutting of hard technical fabrics", "CAD-data transfer to the cutting room", "Order and marker nesting optimization", "Cut-job and recipe management", "Material-yield and waste optimization", "Sensor and machine-status data collection", "Connected cutting-room and Industry 4.0 integration", "Configuration, training, maintenance and technical support"],
  established: null,
  verified: false,
  description: "力克系统（上海）有限公司是力克官网联系页公布的上海实体，地址位于徐汇区钦州北路。力克全球官网的 Vector TechTex 系列面向低层到高层技术材料自动裁剪，其中 Q2 和 iX2 明确包括碳纤维材料，iQ50/iQ80 兼顾产能和灵活性，iX6/iX9 面向较硬织物和高生产率场景；官网还说明 CAD 到裁剪房自动化、排样、材料优化、传感器和联网能力。中国国际复材展 L 字母页列出力克系统（上海）展商。碳纤维及其他复材在这里是被裁剪的工件，不是力克生产或销售的增强纤维、预浸料、板材或终端复材产品，因此本页不植入这些材料供应商关键词。集团产品范围与上海主体的报价、交付、进口、安装和质保边界必须在订单中确认。",
  descriptionEn: "Lectra Systems (Shanghai) Co., Ltd. is the Shanghai entity published on Lectra's current China contact page, at Qinzhou North Road in Xuhui. Lectra's global Vector TechTex page describes automated cutting from low- to high-ply technical materials. Q2 and iX2 explicitly cover a diverse range including carbon fibers; iQ50 and iQ80 balance production capacity and flexibility; iX6 and iX9 address hard fabrics and high-productivity cutting. The page also publishes CAD-to-cutroom automation, nesting and material optimization, sensors and connected Industry 4.0 functions. China Composites Expo's L directory lists the Shanghai exhibitor. Carbon fiber and other composites are workpiece materials handled by the equipment, not reinforcement, prepreg, sheet or finished composite products manufactured by Lectra. GetFRP therefore excludes those material-supplier keywords. Group-product scope must not be confused with the Shanghai legal entity's exact quotation, importer, installation, software, service and warranty responsibilities, which buyers should establish contractually.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "Vector TechTex 采购应从材料和裁剪任务出发：干纤维、预浸料或其他技术织物，材料宽度、厚度、黏性、硬度、背衬与铺层高度，裁片尺寸和容差，日产量、换型、排样规则、缺陷区避让、标识和追溯，再选择 Q2、iX2、iQ50、iQ80、iX6 或 iX9 配置。RFQ 还应锁定有效裁剪区、刀具与耗材、真空与压料、输送和收料、CAD/CAM 格式、服务器和账号、接口、传感器、数据所有权、网络安全、远程维护、培训和服务等级。碳纤维粉尘、预浸料低温状态、离型纸、黏附和清洁要求应在代表性材料试切中验证。FAT/SAT 应以真实铺层和裁片测量精度、节拍、材料利用率、断点恢复与安全联锁，不能只依据官网系列名称。",
  productsServicesSummaryEn: "A Vector TechTex procurement should start from the actual material and cut job rather than a model name. State whether the input is dry carbon reinforcement, prepreg or another technical textile; give roll width, thickness, areal mass, backing, tack, stiffness, fraying behavior and compressed ply height. Provide the smallest and largest piece, geometry complexity, hole and notch detail, directional or nesting constraints, required dimensional tolerance, edge-quality acceptance, defect-zone avoidance, marker rules, identification and traceability, daily mix, takt, shift pattern and changeover expectation. This evidence should drive selection among Q2, iX2, iQ50, iQ80, iX6 and iX9 instead of assuming that every configuration handles every material and ply height. The RFQ should define usable cutting area, conveyor and collection arrangement, vacuum and material hold-down, cutting head and tools, sharpening or consumables, marking and labeling, roll handling, protective film or release-paper removal and downstream kitting. For carbon fiber, include dust and conductive-particle collection, grounding, contamination control and safe cleaning. For prepreg, include storage and out-time status, backing-paper behavior, tack, room temperature and cleaning method. Supply representative production material for trials; substitute fabric may hide cut-quality, contamination or yield problems. Software scope should identify CAD and marker formats, order import, nesting rules, job queue, recipe versioning, user roles, server or cloud architecture, licences, updates, API and machine interfaces, sensor and status data, dashboards, data ownership, retention, backup and cybersecurity. Clarify whether the Shanghai entity sells the hardware, software subscriptions, imported components, installation and local support, and which Lectra legal entity provides each warranty. FAT should reproduce agreed rolls, ply heights and parts, then measure dimensional accuracy, repeatability, edge condition, throughput, material utilization, tool life, alarm handling, restart after interruption and safety interlocks. SAT should verify footprint, power, compressed air, network, extraction, environmental conditions, guarding, emergency stop, operator workflow, training and data exchange after installation. Obtain the configuration BOM, layout, manuals, licence and renewal schedule, maintenance interval, critical spares and consumables, remote-access controls, response times and escalation path. Vector TechTex's ability to cut carbon fibers does not make Lectra a supplier of carbon fiber, prepreg, laminates or the parts cut from them, so those product-demand terms remain excluded.",
  ecatalogs: [
    { title: "力克中国官方网站", titleEn: "Official Lectra China Website", description: "中国业务、产品和服务入口。", descriptionEn: "Official China business, product and service entry.", url: "https://lectra.cn/", format: "Official website" },
    { title: "Vector TechTex", titleEn: "Vector TechTex", description: "技术材料裁剪系列和配置依据。", descriptionEn: "Official technical-material cutting range and configurations.", url: "https://www.lectra.com/en/more-industries/products/vector-techtex", format: "Product page" },
    { title: "力克中国联系方式", titleEn: "Lectra China Contact", description: "上海法律主体、地址和电话。", descriptionEn: "Official Shanghai legal entity, address and telephone.", url: "https://lectra.cn/contact-us", format: "Contact page" },
    { title: "Vector Automotive", titleEn: "Vector Automotive", description: "汽车面料自动裁剪系统入口。", descriptionEn: "Official automotive-material automated cutting entry.", url: "https://lectra.cn/auto/vector", format: "Product page" },
    { title: "Vector Furniture", titleEn: "Vector Furniture", description: "家具面料自动裁剪系统入口。", descriptionEn: "Official furniture-material automated cutting entry.", url: "https://lectra.cn/furniture/vector", format: "Product page" },
    { title: "中国国际复材展 L 字母页", titleEn: "China Composites Expo — L Directory", description: "力克系统（上海）展商主体来源。", descriptionEn: "Organizer source for the Lectra Systems Shanghai exhibitor.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=L", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/lectra-shanghai-logo.png",
  contactEmail: null,
  contactPhone: "+86 21 5389 1665",
  address: "6F, Building 91, No. 1122 Qinzhou North Road, Xuhui District, Shanghai 200233, China",
  website: "https://lectra.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 27,
  viewCount: 0,
  capabilities: ["technical textile cutting", "carbon-fiber fabric cutting", "low-ply cutting", "high-ply cutting", "CAD-to-cutroom workflow", "automated nesting", "sensor-enabled cutting", "software and service support"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
