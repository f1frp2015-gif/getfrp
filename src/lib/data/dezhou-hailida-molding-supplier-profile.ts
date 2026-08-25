import type { SupplierListing } from "@/lib/db/schema";

export const DEZHOU_HAILIDA_MOLDING_SUPPLIER_ID =
  "sup-dezhou-hailida-molding";
export const DEZHOU_HAILIDA_MOLDING_SUPPLIER_SLUG =
  "dezhou-hailida-molding";

// Curated from Hailida's current official company, mold, finished-product and
// contact pages plus the 2026 China Composites Expo D directory. The site is
// HTTP-only in the review environment. Capacity, equipment, certification and
// customer claims remain supplier- or organizer-published. Official logo:
// https://14150949.s21i.faiusr.com/4/ABUIABAEGAAgobbmhwYot-z_9QEw9AM4eA.png
export const DEZHOU_HAILIDA_MOLDING_SUPPLIER_PROFILE: SupplierListing = {
  id: DEZHOU_HAILIDA_MOLDING_SUPPLIER_ID,
  name: "德州海力达模塑有限公司",
  nameEn: "Dezhou Hailida Molding Co., Ltd.",
  slug: DEZHOU_HAILIDA_MOLDING_SUPPLIER_SLUG,
  location: "山东德州",
  locationEn: "Dezhou, Shandong, China",
  province: "山东",
  category: "mold",
  products: [
    "SMC/BMC 复合材料模具",
    "LFT-D 与 PCM 电池壳等复材模具",
    "PDCPD 与 HP-RTM 模具（展会目录）",
    "汽车内外饰与车身覆盖件模具和部件",
    "高速列车内外饰及轨道信号箱体部件",
    "电力通信、充电桩与通风柜复材部件",
    "整体卫浴、底盘、洗手盆等模具和制品",
    "医疗器械、地下管廊、装饰板及其他定制模压件",
  ],
  productsEn: [
    "SMC and BMC composite molds",
    "LFT-D and PCM battery-enclosure molds",
    "PDCPD and HP-RTM molds (expo catalog)",
    "Automotive interior, exterior and body-panel molds and parts",
    "High-speed-rail interior or exterior and rail-signal enclosure parts",
    "Power, telecom, charging-pile and fume-hood composite parts",
    "Integrated-bathroom, shower-tray and basin molds and products",
    "Medical-equipment, utility-tunnel, decorative-panel and other custom molded parts",
  ],
  processList: [
    "SMC/BMC/LFT-D/PCM/PDCPD/HP-RTM 模具设计",
    "模流、数控编程与工程数据转换",
    "大型龙门数控、深孔钻与电火花加工",
    "机器人激光淬火和模具表面处理（展会目录）",
    "三坐标与关节臂尺寸检测",
    "大吨位液压机试模与模压部件生产",
    "工装夹具设计和制造",
    "模具安装、调试、维修与售后服务",
  ],
  processListEn: [
    "SMC, BMC, LFT-D, PCM, PDCPD and HP-RTM mold design",
    "Mold-flow work, CNC programming and engineering-data conversion",
    "Large gantry CNC, deep-hole drilling and EDM machining",
    "Robotic laser hardening and mold surface treatment (expo catalog)",
    "CMM and portable articulated-arm dimensional inspection",
    "Large-press mold trials and compression-molded part production",
    "Fixture and production-tooling design and manufacture",
    "Mold installation, commissioning, repair and after-sales service",
  ],
  established: null,
  verified: false,
  description:
    "德州海力达模塑有限公司官网把企业定位为 SMC/BMC/LFT-D 模具研发、设计、制造与服务商，同时展示高速列车、汽车、轨道信号、电力通信、卫浴、充电桩、地下管廊和装饰板等模压部件。中国国际复材展以 DEZHOU HAILIDA MOLDING CO., LTD. 收录同一企业，并把公开模具范围扩展到 PCM、PDCPD 和 HP-RTM。官网和其他公开记录对经营年限采用不同口径，本页不在未完成法人沿革核验时填写成立年份。设备数量、人员、认证、客户和增长率均为企业或展会陈述，不代表 GetFRP 已完成审厂、证书核验或客户背调。",
  descriptionEn:
    "Dezhou Hailida Molding Co., Ltd. presents itself on its official website as a developer, designer, manufacturer and service provider for SMC, BMC and LFT-D molds. The same site displays molded products for high-speed rail, automotive, rail signaling, power and telecom, bathrooms, charging equipment, utility tunnels and decorative panels. China Composites Expo lists the matching exhibitor as DEZHOU HAILIDA MOLDING CO., LTD. and extends the published mold scope to PCM, PDCPD and HP-RTM. The website and other public records use different operating-history descriptions, so this profile does not assign an establishment year before the legal-company timeline is reconciled. Equipment count, workforce, certification, customer and growth statements remain company- or organizer-published and do not represent a GetFRP factory audit, certificate verification or customer reference check.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "海力达当前官网把业务分为模具、工装和成品，并展示轨交侧顶板、窗口墙板、端墙、座椅，汽车前围、翼子板、保险杠面罩、导流罩，轨道信号箱、电力通信箱、卫浴件、充电桩、地下管廊、装饰板等。展会目录列出 SMC、PCM、LFT-D、PDCPD 和 HP-RTM 模具，但官网未在同一页面为每种工艺提供完整的材料窗口、最大模具尺寸、压机吨位或验收标准。模具 RFQ 应明确工艺和材料牌号、零件 3D/2D 版本、A级面要求、收缩和翘曲补偿、年产量与穴数、模具钢/铝材、镶件、加热/冷却/真空/顶出、表面硬度、激光淬火或涂层、吊装和运输、目标压机接口、模流、设计评审、加工精度、CMM 报告、试模材料、T0/T1/T2 和最终验收、备件、维护与变更控制。由海力达同时供应部件时，还要另行约定原料、模压窗口、嵌件、尺寸和外观、机械/阻燃/电气性能、PPAP/首件、批次 CoA、追溯和包装。官网展示 ISO/IATF 等证书图片和 CRCC 等文字，但本轮未取得足以完整核对法人、地址、范围、编号和当前有效期的文件包，认证数组为空。官网为 HTTP-only，发图纸、账号或付款指令前应独立核验域名、联系人、签约主体、工厂地点和安全传输方式。",
  productsServicesSummaryEn:
    "Hailida's current website separates molds, tooling and finished products and displays rail side-roof panels, window walls, end walls and seats; automotive front panels, fenders, bumper fascias and fairings; signal enclosures; power and telecom boxes; bathroom parts; charging equipment; utility-tunnel parts; and decorative panels. The expo directory lists SMC, PCM, LFT-D, PDCPD and HP-RTM molds, but the public site does not provide a complete material window, maximum tool envelope, press tonnage or acceptance standard for every process in one place. A mold RFQ should define process and material grade; part 3D and 2D revision; Class-A surface requirement; shrinkage and warpage compensation; annual volume and cavity count; tool steel or aluminum; inserts; heating, cooling, vacuum and ejection; surface hardness; laser hardening or coating; lifting and transport; target-press interface; flow analysis; design reviews; machining accuracy; CMM report; trial material; T0, T1 and T2 stages and final acceptance; spares; maintenance; and change control. If Hailida also supplies the part, separately contract for raw material, molding window, inserts, dimensional and cosmetic limits, mechanical, flame and electrical performance, PPAP or first article, lot CoA, traceability and packaging. The website displays management-system certificate images and CRCC-related text, but the reviewed public material did not provide a complete current package sufficient to verify legal entity, address, scope, number and validity. Certification arrays remain empty. The official site is HTTP-only in the review environment; independently verify the domain, contact, contracting entity, factory site and secure transfer method before sending drawings, credentials or payment instructions.",
  ecatalogs: [
    {
      title: "德州海力达官网",
      titleEn: "Official Hailida Website",
      description: "当前公司、模具、工装、产品和联系信息。",
      descriptionEn: "Current company, molds, tooling, products and contact information.",
      url: "http://www.hailidacn.com/",
      format: "Official website",
    },
    {
      title: "海力达公司介绍",
      titleEn: "Hailida Company Profile",
      description: "模具业务、加工检测资源和应用范围。",
      descriptionEn: "Official mold scope, machining and inspection resources and applications.",
      url: "http://www.hailidacn.com/h-col-101.html",
      format: "Company profile",
    },
    {
      title: "海力达模具目录",
      titleEn: "Hailida Mold Directory",
      description: "SMC/BMC/LFT-D 模具及公开产品入口。",
      descriptionEn: "Official SMC, BMC and LFT-D mold and product entry.",
      url: "http://www.hailidacn.com/h-col-106.html",
      format: "Mold directory",
    },
    {
      title: "海力达模压产品目录",
      titleEn: "Hailida Molded-product Directory",
      description: "轨交、汽车、电力通信、卫浴和其他制品。",
      descriptionEn: "Official rail, automotive, power, telecom, bathroom and other products.",
      url: "http://www.hailidacn.com/h-col-103.html",
      format: "Product directory",
    },
    {
      title: "海力达联系方式",
      titleEn: "Hailida Contact Page",
      description: "德州地址、电话、手机和邮箱。",
      descriptionEn: "Official Dezhou address, telephone, mobile and email.",
      url: "http://www.hailidacn.com/h-col-102.html",
      format: "Official contact",
    },
    {
      title: "中国国际复材展 D 字母展商页",
      titleEn: "China Composites Expo Exhibitors — D",
      description: "海力达展商身份、展位和模具类别。",
      descriptionEn: "Organizer entry for Hailida, its booth and mold categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=30&head=D",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/dezhou-hailida-logo.png",
  contactEmail: "hailida8@188.com",
  contactPhone: "+86 534 2750 246",
  address: "Intersection of Tianqu Road and Chongde 11th Avenue, Dezhou, Shandong, China",
  website: "http://www.hailidacn.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 24,
  viewCount: 0,
  capabilities: [
    "SMC and BMC molds",
    "LFT-D and PCM molds",
    "HP-RTM molds",
    "automotive composite molds",
    "rail composite molds and parts",
    "large-format CNC machining",
    "mold trials and dimensional inspection",
    "tooling commissioning and repair",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
