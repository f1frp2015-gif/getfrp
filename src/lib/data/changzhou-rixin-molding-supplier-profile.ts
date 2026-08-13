import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_RIXIN_MOLDING_SUPPLIER_ID =
  "sup-changzhou-rixin-molding";
export const CHANGZHOU_RIXIN_MOLDING_SUPPLIER_SLUG =
  "changzhou-rixin-molding-technology";

// Curated from Changzhou Rixin Molding Technology's official website and its
// standalone China Composites Expo profile. The expo uses the English name
// Changzhou Rixin SMC/BMC Co., Ltd.; the official company and Rixin Group
// pages render the English business name as Changzhou Rixin Molding
// Technology Co., Ltd. This is a distinct legal-company profile from the
// Changzhou Rixin Group exhibitor entry. Capacity, qualification, equipment
// and product statements remain company- or organizer-published and have not
// been independently verified by GetFRP. Official logo downloaded 2026-08-13
// from the current site header:
// https://www.czrxms.com/templates/pc_cn/images/logo.png
export const CHANGZHOU_RIXIN_MOLDING_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_RIXIN_MOLDING_SUPPLIER_ID,
  name: "常州日新模塑科技有限公司",
  nameEn: "Changzhou Rixin Molding Technology Co., Ltd.",
  slug: CHANGZHOU_RIXIN_MOLDING_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "SMC 片状模塑料",
    "BMC 团状模塑料",
    "汽车车门、翼子板、保险杠、面板、脚踏板与轮毂罩",
    "整体卫浴、台盆及其他卫浴模压制品",
    "燃气表箱与低压电器 BMC 部件",
    "工程机械与建材模压制品",
    "农业、铁路及海洋装备复材部件",
    "SMC/BMC 成套机组与一体化技术服务",
  ],
  productsEn: [
    "SMC sheet molding compounds",
    "BMC bulk molding compounds",
    "Automotive doors, fenders, bumpers, panels, steps and wheel covers",
    "Integrated bathroom components, basins and other sanitary molded parts",
    "Gas-meter boxes and low-voltage electrical BMC components",
    "Construction-machinery and building-material molded parts",
    "Composite parts for agriculture, rail and marine equipment",
    "Complete SMC/BMC production lines and integrated technical services",
  ],
  processList: [
    "SMC/BMC 配方设计与材料开发",
    "自研 SMC 生产线与自动切纱",
    "BMC 自动配料、捏合与挤条",
    "SMC 片材与 BMC 团料生产",
    "最高 3,000 吨级压机模压成型",
    "汽车、卫浴、建材与电气制品模压制造",
    "实验室材料与工艺验证",
    "SMC/BMC 机组设计及一体化技术服务",
  ],
  processListEn: [
    "SMC/BMC formulation design and material development",
    "Self-developed SMC lines with automated fiber chopping",
    "Automated BMC dosing, kneading and extrusion",
    "SMC sheet and BMC bulk-compound production",
    "Compression molding on presses published at up to 3,000 tonnes",
    "Molding of automotive, sanitary, construction and electrical parts",
    "Laboratory material and process validation",
    "SMC/BMC line design and integrated technical service",
  ],
  established: 2009,
  verified: false,
  description:
    "常州日新模塑科技有限公司位于江苏常州金坛朱林，官网称公司成立于 2009 年，专业从事 SMC/BMC 与模压制品的研发、生产和销售，并自行设计 SMC 机组、提供 SMC/BMC 一体化技术服务。公开应用覆盖汽车、建材、卫浴、铁路、农业、海洋装备、电力、水利和新能源。中国国际复材展以“CHANGZHOU RIXIN SMC/BMC CO., LTD.”收录该公司；日新集团英文官网则使用“Changzhou Rixin Molding Technology Co., Ltd.”。本页是该法人公司的独立档案，与已发布的“常州日新集团”集团展商档案分开。产能、设备、资质与客户验证均为企业或展会公开陈述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Changzhou Rixin Molding Technology Co., Ltd. is based in Zhulin, Jintan District, Changzhou, Jiangsu. Its official website says the company was founded in 2009 and develops, manufactures and sells SMC/BMC compounds and compression-molded parts. It also designs SMC production lines and provides integrated SMC/BMC technical services. Published applications include automotive, building materials, sanitary products, rail, agriculture, marine equipment, electric power, water infrastructure and new energy. The China Composites Expo lists the company as CHANGZHOU RIXIN SMC/BMC CO., LTD., while the Rixin Group English site uses Changzhou Rixin Molding Technology Co., Ltd. This is a standalone legal-company profile, separate from GetFRP's Changzhou Rixin Group exhibitor profile. Capacity, equipment, qualification and customer-validation statements are company- or organizer-published and have not been independently verified by GetFRP.",
  certifications: [
    "官网称公司通过 ISO 9001、ISO 14001 与 IATF 16949 体系认证；荣誉资质页面仅以图片标题展示，采购方应索取现行证书，核验公司名称、证书编号、范围、地址、发证机构与有效期",
    "官网称公司为国家高新技术企业、常州市环保示范企业并通过安全生产标准化三级验收；相关称号与验收应以主管机构记录和现行文件为准",
  ],
  certificationsEn: [
    "The official site says the company holds ISO 9001, ISO 14001 and IATF 16949 management-system certification. Its honors page exposes image titles rather than verifiable certificate details, so buyers should obtain current copies and validate the legal name, number, scope, address, issuer and validity",
    "The official site describes the company as a national high-tech enterprise, a Changzhou environmental demonstration enterprise and a Level 3 work-safety standardization company; validate these claims against current authority records and documents",
  ],
  productsServicesSummary:
    "日新模塑官网按 SMC、BMC 与模压制品组织产品，公开 SMC9008、SMC8002、SMC6008 等材料示例，以及汽车车门、重卡脚踏板、整体卫浴、翼子板、面板、保险杠、工程机械围板、台盆、燃气表箱和电气部件等制品。官网公司介绍称 SMC 年产能 5 万吨、BMC 年产能 2 万吨，并配有 3,000 吨、2,000 吨、1,500 吨等 5 台压机；同一集团英文简介此前公开日新模塑 SMC/BMC 年产能 3 万吨，展会资料为 SMC 2 万吨，采购方应以该法人、目标产线和近期审厂材料核实当前口径。询价需明确材料还是成品、牌号/配方所有权、树脂与玻纤体系、纤维长度和含量、填料、密度、增稠与熟化、储存和保质期、模压温压时间窗口、收缩与翘曲、表面等级、颜色、力学/电气/阻燃/耐候指标、模具与压机吨位、模流和试模、尺寸与外观检验、PPAP/APQP/首件、批次 CoA 和追溯、认证与客户批准、包装、MOQ、产能、交期及不合格处置。",
  productsServicesSummaryEn:
    "Rixin Molding's official website organizes its offering into SMC, BMC and compression-molded products. It publishes example compounds such as SMC9008, SMC8002 and SMC6008, plus molded automotive doors, heavy-truck steps, integrated bathroom parts, fenders, panels, bumpers, construction-machinery covers, basins, gas-meter boxes and electrical components. The company profile claims annual capacities of 50,000 tonnes for SMC and 20,000 tonnes for BMC and lists five presses, including 3,000-, 2,000- and 1,500-tonne units. The Rixin Group English profile previously published 30,000 tonnes for Rixin Molding's combined compounds, while the expo profile cites 20,000 tonnes for SMC; buyers should reconcile current figures for this legal entity and the target line through recent audit evidence. An RFQ should distinguish compound from finished part and define grade or formulation ownership; resin and glass system; fiber length and loading; filler; density; thickening and maturation; storage and shelf life; molding temperature, pressure and time window; shrinkage and warpage; surface class; color; mechanical, electrical, flame and weathering requirements; mold and press tonnage; flow and trials; dimensional and cosmetic inspection; PPAP, APQP or first article; lot CoA and traceability; certificate and customer approvals; packaging; MOQ; capacity; lead time; and nonconformance control.",
  ecatalogs: [
    {
      title: "日新模塑公司介绍",
      titleEn: "Rixin Molding Company Profile",
      description: "成立年份、主营业务、公开产能、压机配置、认证及业务特点。",
      descriptionEn:
        "Official establishment, business scope, published capacities, press fleet, certifications and operating characteristics.",
      url: "https://www.czrxms.com/single838014134.html",
      format: "Company profile",
    },
    {
      title: "SMC/BMC 与模压制品目录",
      titleEn: "SMC, BMC & Molded Product Directory",
      description: "材料牌号示例和汽车、卫浴、建材、电气等模压制品。",
      descriptionEn:
        "Official example grades and molded automotive, sanitary, construction and electrical products.",
      url: "https://www.czrxms.com/list17320870.html",
      format: "Product directory",
    },
    {
      title: "生产与实验室设备",
      titleEn: "Production & Laboratory Equipment",
      description: "SMC 生产线、自动切纱、纱房、实验室、捏合机、挤条机与 BMC 自动配料设备。",
      descriptionEn:
        "Official SMC line, automated chopping, fiber-room, laboratory, kneader, extruder and automated BMC dosing gallery.",
      url: "https://www.czrxms.com/",
      format: "Equipment gallery",
    },
    {
      title: "荣誉资质",
      titleEn: "Qualifications & Honors",
      description: "ISO 9001/14001、IATF 16949 与工程技术中心图片入口，需核验证书。",
      descriptionEn:
        "Official ISO 9001/14001, IATF 16949 and engineering-center image entry; verify current certificates.",
      url: "https://www.czrxms.com/list14505855.html",
      format: "Qualification gallery",
    },
    {
      title: "应用领域",
      titleEn: "Application Directory",
      description: "农业、汽车、卫浴、建材与铁路应用。",
      descriptionEn:
        "Official agriculture, automotive, sanitary, construction and rail application directory.",
      url: "https://www.czrxms.com/list15258468.html",
      format: "Application directory",
    },
    {
      title: "中国国际复材展展商资料",
      titleEn: "China Composites Expo Exhibitor Profile",
      description: "SMC/BMC 材料、机组、一体化服务与产品类别。",
      descriptionEn:
        "Organizer profile covering SMC/BMC compounds, production lines, integrated service and categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-729-8993480.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-rixin-molding-logo.png",
  contactEmail: "rxsmc@yahoo.com.cn",
  contactPhone: "+86 519 8262 5352",
  address:
    "No. 168 Longxi Avenue, Zhulin Town, Jintan District, Changzhou, Jiangsu, China",
  website: "https://www.czrxms.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 26,
  viewCount: 0,
  capabilities: [
    "SMC sheet molding compound",
    "BMC bulk molding compound",
    "SMC and BMC formulation development",
    "compression-molded composite parts",
    "automotive composite components",
    "sanitary composite components",
    "electrical BMC components",
    "SMC production line design",
    "compound laboratory validation",
    "integrated SMC/BMC technical service",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
