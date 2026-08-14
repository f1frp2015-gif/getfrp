import type { SupplierListing } from "@/lib/db/schema";

export const DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_ID =
  "sup-dellahol-cnc-technology-suzhou";
export const DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_SLUG =
  "dellahol-cnc-technology-suzhou";

// Curated from Dellahol's current official website, China Composites Expo's
// current exhibitor detail and public business-registration references. The
// exhibitor name, official site copyright and Changshu contact page all resolve
// to 德拉赫数控科技（苏州）有限公司, so Dellahol/德拉赫 is published as one
// mainland-China legal entity. Product, capacity, market and service statements
// remain company-published claims. The official honors page labels an ISO 9001
// image but does not expose a complete current certificate number, scope, issuer
// and validity in its readable page data, so no certification is recorded as
// verified. Official header logo exported from the rendered company website on
// 2026-08-13; current source URL:
// https://omo-oss-image.thefastimg.com/portal-saas/pg2025112818010861988/cms/image/cdddb9e0-6f03-42b6-8371-be3eb511140e.png
export const DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_PROFILE: SupplierListing = {
  id: DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_ID,
  name: "德拉赫数控科技（苏州）有限公司",
  nameEn: "Dellahol CNC Technology (Suzhou) Co., Ltd.",
  slug: DELLAHOL_CNC_TECHNOLOGY_SUZHOU_SUPPLIER_SLUG,
  location: "江苏苏州常熟",
  locationEn: "Changshu, Suzhou, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "高精度重切加工中心",
    "型材数控加工中心",
    "数控龙门加工中心",
    "五轴加工中心",
    "钻铣与钻攻加工中心",
    "高精度铝型材锯切加工中心",
    "DJF 复合五轴加工中心",
    "DLA 龙门五轴数控加工中心",
    "智能机器人及自动化单元（企业声明）",
  ],
  productsEn: [
    "High-precision heavy-cutting machining centers",
    "CNC profile machining centers",
    "CNC gantry machining centers",
    "Five-axis machining centers",
    "CNC drilling, milling and tapping centers",
    "High-precision aluminum-profile sawing centers",
    "DJF compound five-axis machining centers",
    "DLA gantry five-axis CNC machining centers",
    "Industrial robots and automation cells (company claim)",
  ],
  processList: [
    "数控加工中心研发、装配与制造",
    "机床模块化配置与客户化设计（企业声明）",
    "铣削、钻孔、攻丝、倒角及锯切工序集成",
    "数控系统、主轴、刀库和工装夹具集成",
    "激光干涉仪、三坐标及二次元测量等整机检测（企业声明）",
    "安装调试、操作培训和售后支持（企业声明）",
  ],
  processListEn: [
    "CNC machining-center development, assembly and manufacturing",
    "Modular machine configuration and customer-specific design (company claim)",
    "Integrated milling, drilling, tapping, chamfering and sawing operations",
    "CNC control, spindle, tool-magazine and fixture integration",
    "Machine inspection using laser interferometry, CMM and vision measurement (company claim)",
    "Installation, commissioning, operator training and after-sales support (company claim)",
  ],
  established: 2020,
  verified: false,
  description:
    "德拉赫数控科技（苏州）有限公司是位于中国大陆江苏省苏州市常熟市的数控机床与智能装备企业，中国国际复材展使用 DELLAHOL CNC TECHNOLOGY (SUZHOU) CO., LTD. 作为英文展商名，并列出 6V23 展位。本页把 Dellahol、德拉赫、展会英文名和 dellahol.com 官网去重为同一法律主体。企业官网称德拉赫品牌创建于 2018 年，并将苏州公司描述为承担研发、生产制造、销售和售后的生产基地；多项公开工商信息把现法律主体成立日记录为 2020 年 11 月 12 日。因此本页以 2020 年作为法律主体成立年份，将 2018 年仅作为企业公开的品牌起点，不把品牌历史等同于工商成立时间。官网还公开总占地、资产、员工和年产能等数字，但未说明统计口径与更新时间，本页不把这些数字写入已验证规模字段。",
  descriptionEn:
    "Dellahol CNC Technology (Suzhou) Co., Ltd. is the China Composites Expo English identity for 德拉赫数控科技（苏州）有限公司, a CNC machine-tool and intelligent-equipment business in Changshu, Suzhou, Jiangsu, mainland China. The current exhibitor detail lists booth 6V23. GetFRP deduplicates Dellahol, 德拉赫, the exhibitor English name and dellahol.com into this one legal entity. The official site dates the Dellahol brand to 2018 and describes the Suzhou company as its R&D, manufacturing, sales and after-sales base, while multiple public registration references record the present legal entity as established on November 12, 2020. This profile therefore uses 2020 for the company and treats 2018 only as a company-published brand starting point. The official overview also publishes site, asset, employee and annual-capacity figures without a clear measurement basis or review date, so GetFRP does not place those figures in a verified scale field.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "中国国际复材展把德拉赫列为设备与工具类展商，公开产品范围包括高精度重切、型材、数控龙门、五轴、铝型材锯切加工中心及智能机器人。官网产品目录进一步列出立式、龙门、钻攻、钻铣、型材和切割设备系列。DJF 复合五轴加工中心页面描述最多六轴三维联动、可选刀尖跟随和转台、一次装夹完成铣削、钻孔、攻牙和倒角，并公开 BT40 主轴和 24 刀位刀库等配置；DLA 龙门五轴页面公开双摆头、五轴五联动、RTCP、HSK63F 接口及铣、镗、钻、攻丝和锯切工序。这里的“复合五轴”是机床产品名称，不能自动解释为已经验证适用于碳纤维或玻璃纤维复合材料。现行官网明确列举的被加工材料主要是铝合金、钢、铜、铝木复合型材和 PVC；虽然企业参加中国国际复材展并公开航空航天、风电等服务行业，本次审查未找到针对 CFRP/GFRP 的当前专用机型参数、加工样件报告或验收数据。因此复材买方必须把材料适用性作为 RFQ 和试切的核心，不应从展会参展或“复合”二字推断机床已获批用于复材。询价时应提供零件三维模型和受控图纸、材料体系、纤维/夹芯结构、毛坯尺寸与质量、加工包络、基准、孔槽和曲面、关键公差、表面质量、年产量、节拍及上下料方式，并要求供应商明确推荐机型、轴行程、工作台、夹具、主轴功率/扭矩/转速、刀柄接口、刀库、控制系统、RTCP、探测与补偿、冷却或干式加工策略。对玻纤和碳纤维部件，应单独确认磨蚀性刀具、刀具寿命、进给和转速窗口、分层与毛刺控制、薄壁和夹芯支撑、孔出口质量、粉尘捕集、负压风量、过滤等级、静电接地、防爆评估和导电碳尘隔离；金属排屑方案不能直接当作复材粉尘方案。FAT 应使用与量产相同或有代表性的复材坯料和刀具，在约定节拍下连续加工认可样件，检查尺寸、位置度、轮廓、孔质量、分层、毛刺、表面、粉尘外逸、刀具磨损、换刀、程序恢复、报警、联锁和数据备份。验收报告需记录机床序列号、控制器与软件版本、测量设备、环境、热机条件、激光干涉或球杆测试结果、重复定位、几何精度和样件测量方法。官网品质页称使用测振仪、红外测温仪、激光干涉仪、三坐标和二次元测量设备，买方仍应要求提交所购机床的实际出厂记录和测量设备校准状态。商务边界应列明机床本体、主轴、摆头、控制器、刀库、排尘/排屑、冷却、夹具、刀具、变压器、稳压、护罩、上料、软件许可、后处理器、运输、吊装、安装、培训、FAT/SAT、备件和耗材，防止不同报价范围不可比。还应确认基础和承载、三相电源、压缩空气、网络、厂房温湿度、维修空间、包装尺寸和重量、出口木箱、Incoterm、保修起点、远程访问安全、现场响应、关键部件供货期、控制器和主轴在目的国的服务能力。官网称品牌设备已在中国、东南亚、欧洲和非洲使用，但这是企业声明；官网没有可用英文版，当前公开邮箱也是 163.com 地址，因此本页暂不把企业标记为已确认出口就绪。买方应通过官网电话和邮箱复核英文合同、技术手册、电气图纸、安全文件、装箱单、收款主体及海外服务承诺。官网荣誉页展示“ISO9001质量体系认证”等图片标签，但可读取内容没有完整证书号、范围、发证机构和当前有效期，故不记录已验证认证；泛称“符合国家标准”也不写入标准字段，需在 RFQ 中锁定具体标准编号、版本和验收值。",
  productsServicesSummaryEn:
    "China Composites Expo lists Dellahol as an equipment-and-tools exhibitor offering heavy-cutting, profile, CNC gantry, five-axis and aluminum-profile sawing centers plus robots. Official pages add vertical, drilling/tapping, drilling/milling and cutting families. The DJF compound five-axis page describes up to six-axis 3D motion, one-setup milling, drilling, tapping and chamfering, a BT40 spindle and 24-position magazine. The DLA gantry five-axis page lists a double swivel head, simultaneous five-axis motion, RTCP and an HSK63F interface. “Compound five-axis” is a machine name and is not evidence of verified carbon- or glass-fiber composite capability. Official pages explicitly name aluminum, steel, copper, aluminum-wood profiles and PVC. Although Dellahol exhibits at China Composites Expo and publishes aerospace and wind-energy sectors, this review found no current CFRP/GFRP-specific machine specification or acceptance result. Buyers must qualify material suitability through an RFQ and cutting trial. Supply a controlled drawing and model, material and sandwich construction, blank envelope and mass, datums, features, tolerances, finish, annual volume, cycle and loading method. Require the model, travels, table and fixture, spindle power, torque and speed, holder, magazine, control, RTCP, probing, compensation and wet or dry strategy. For glass- and carbon-fiber parts, confirm abrasive tooling and life, feeds and speeds, delamination and burr control, sandwich support, hole-exit quality, dust capture, airflow, filtration, grounding, explosion-risk review and conductive-carbon-dust segregation; a chip conveyor is not a composite-dust system. FAT should use representative material and tooling at the agreed cycle, checking dimensions, position, contour, holes, delamination, burrs, surface, dust escape, tool wear, recovery, alarms, interlocks and backup. The quality page says vibration, infrared, laser interferometry, CMM and vision equipment are used, but the offered machine still needs actual release records and calibration status. The official site claims use in China, Southeast Asia, Europe and Africa, but this is company-published. With no usable English site and a public 163.com email, export readiness is not confirmed. Reconfirm English contracts, manuals, drawings, safety files, payee and overseas support through official contacts. The honors page labels an ISO 9001 image, but readable data lacks a complete certificate number, scope, issuer and current validity, so none is recorded as verified. Generic national-standard wording is likewise excluded until a specific edition and acceptance value are agreed.",
  ecatalogs: [
    {
      title: "德拉赫官方网站",
      titleEn: "Official Dellahol Website",
      description: "现行法律主体、产品系列、服务与公司动态入口。",
      descriptionEn: "Current legal identity, product families, service and company updates.",
      url: "https://www.dellahol.com/",
      format: "Official website",
    },
    {
      title: "德拉赫企业概况",
      titleEn: "Official Dellahol Company Profile",
      description: "品牌起点、苏州生产基地角色、公开业务和行业范围。",
      descriptionEn: "Brand starting point, Suzhou production-base role, business and served sectors.",
      url: "https://www.dellahol.com/about.html",
      format: "Company profile",
    },
    {
      title: "DJF 复合五轴加工中心",
      titleEn: "DJF Compound Five-Axis Machining Center",
      description: "企业公开的工序、主轴、刀库、材料和可选配置。",
      descriptionEn: "Company-published operations, spindle, tool magazine, materials and options.",
      url: "https://www.dellahol.com/product/28.html",
      format: "Official product page",
    },
    {
      title: "DLA 龙门五轴数控加工中心",
      titleEn: "DLA Gantry Five-Axis CNC Machining Center",
      description: "双摆头、RTCP、HSK63F 接口和五轴加工范围。",
      descriptionEn: "Double swivel head, RTCP, HSK63F interface and five-axis operations.",
      url: "https://www.dellahol.com/product/2.html",
      format: "Official product page",
    },
    {
      title: "德拉赫品质保证",
      titleEn: "Official Dellahol Quality Inspection Page",
      description: "企业公开的整机与零部件测量设备及质量体系入口。",
      descriptionEn: "Company-published machine and component measurement equipment and quality-system route.",
      url: "https://www.dellahol.com/intro/2672.html",
      format: "Official quality page",
    },
    {
      title: "德拉赫官方联系方式",
      titleEn: "Official Dellahol Contact Page",
      description: "常熟地址、销售与售后电话和官网发布邮箱。",
      descriptionEn: "Changshu address, sales and service telephone and official-site email.",
      url: "https://www.dellahol.com/contact.html",
      format: "Official contact page",
    },
    {
      title: "中国国际复材展德拉赫网上展厅",
      titleEn: "China Composites Expo Dellahol Profile",
      description: "当前展商中英文主体、6V23 展位、产品系列与服务行业。",
      descriptionEn: "Current Chinese and English identity, booth 6V23, product families and served sectors.",
      url: "https://www.chinacompositesexpo.com/en/netshow-4020-2254952.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/dellahol-logo.png",
  contactEmail: "tljq002@163.com",
  contactPhone: "+86 512 5286 5601",
  address:
    "No. 181-1 Huangpujiang Road, Southeast High-Tech Development Zone, Changshu, Suzhou, Jiangsu, China",
  website: "https://www.dellahol.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "high-precision heavy-cutting machining centers",
    "CNC profile machining centers",
    "CNC gantry machining centers",
    "five-axis machining centers",
    "drilling, milling and tapping centers",
    "aluminum-profile sawing centers",
    "CNC control and spindle integration",
    "machine-tool customization (company claim)",
    "industrial robot integration (company claim)",
    "installation and commissioning (company claim)",
    "operator training and after-sales support (company claim)",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
