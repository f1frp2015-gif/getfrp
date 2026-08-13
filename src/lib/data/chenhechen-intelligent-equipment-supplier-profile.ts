import type { SupplierListing } from "@/lib/db/schema";

export const CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_ID =
  "sup-chenhechen-intelligent-equipment";
export const CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_SLUG =
  "chenhechen-intelligent-equipment";

// Curated from the exact mainland-China exhibitor's current CHENcan brand
// website and its current China Composites Expo profile. The website presents
// two production bases: Shandong Chencan Machinery Incorporated Company and
// Chenhechen Intelligent Equipment (Jiangsu) Co., Ltd. This profile is limited
// to the latter legal entity, which CCE names as the exhibitor. The brand's
// 1998 history and worldwide operating claims predate the Jiangsu company, so
// they are retained as brand-lineage claims rather than the legal entity's
// establishment date or independently verified facts. Official CHENcan logo
// downloaded 2026-08-13 from the current website header:
// https://chencanmachine.com/wp-content/uploads/2026/02/CHENcan-logo.png
export const CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_PROFILE: SupplierListing = {
  id: CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_ID,
  name: "晨和晨智能装备（江苏）有限责任公司",
  nameEn: "Chenhechen Intelligent Equipment (Jiangsu) Co., Ltd.",
  slug: CHENHECHEN_INTELLIGENT_EQUIPMENT_SUPPLIER_SLUG,
  location: "江苏宿迁",
  locationEn: "Suqian, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "复合材料修边与钻孔五轴加工中心",
    "复合夹芯板锯铣加工中心",
    "高速龙门模具加工中心",
    "大型风电叶片与模具加工设备",
    "工业级颗粒 3D 打印设备",
    "3D 打印与铣削复合加工中心",
    "三维五轴激光切割设备",
    "定制 CNC 与自动化加工系统",
  ],
  productsEn: [
    "Five-axis machining centers for composite trimming and drilling",
    "Composite sandwich-panel sawing and milling centers",
    "High-speed gantry mold-machining centers",
    "Large wind-blade and tooling machining systems",
    "Industrial pellet 3D printers",
    "Hybrid 3D-printing and milling centers",
    "Three-dimensional five-axis laser-cutting equipment",
    "Custom CNC and automated machining systems",
  ],
  processList: [
    "五轴 CNC 修边、钻孔与铣削设备设计制造",
    "复合板材锯切、铣削与钻孔设备集成",
    "大型龙门及模具加工系统制造",
    "颗粒挤出增材与减材复合设备集成",
    "专机定制、装配、校准与出厂测试",
    "安装、培训、备件与技术支持",
  ],
  processListEn: [
    "Five-axis CNC trimming, drilling and milling equipment design and manufacture",
    "Composite-panel sawing, milling and drilling equipment integration",
    "Large gantry and mold-machining system manufacture",
    "Pellet-extrusion additive and subtractive equipment integration",
    "Custom-machine engineering, assembly, calibration and factory testing",
    "Installation, training, spare-parts and technical support",
  ],
  established: 2021,
  verified: false,
  description:
    "晨和晨智能装备（江苏）有限责任公司位于江苏宿迁泗洪经济开发区，是晨灿机械（CHENcan）的江苏生产基地。中国国际复材展以“晨灿机械（晨和晨智能装备（江苏）有限责任公司）”收录该参展主体，英文主体为 CHENCAN MACHINE (CHENHECHEN INTELLIGENT EQUIPMENT (JIANGSU) CO., LTD.)，并发布 2026 年展位 6M01。官网将山东与江苏列为两个生产基地，江苏基地地址为宿迁市泗洪经济开发区宁波路 21 号。行业协会资料称江苏公司于 2021 年设立；官网所称 1998 年、27 年经验、全球客户与市场覆盖属于晨灿品牌沿革和企业公开陈述，不能视为该江苏法人的成立日期或 GetFRP 独立核验结论。",
  descriptionEn:
    "Chenhechen Intelligent Equipment (Jiangsu) Co., Ltd. is the CHENcan Machinery production base in Sihong Economic Development Zone, Suqian, Jiangsu. China Composites Expo lists the exact exhibitor as CHENCAN MACHINE (CHENHECHEN INTELLIGENT EQUIPMENT (JIANGSU) CO., LTD.) and publishes booth 6M01 for 2026. The official website identifies separate Shandong and Jiangsu production bases and gives the Jiangsu location as No. 21 Ningbo Road, Sihong Economic Development Zone, Suqian. An industry-association report says the Jiangsu company was established in 2021. The website's 1998 origin, 27 years of experience, global-client and market-coverage statements describe the CHENcan brand lineage; they are not treated as the Jiangsu legal entity's incorporation date or as independently verified GetFRP findings.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网复材相关设备包括 PC 系列复合材料修边/钻孔五轴机、复合夹芯板加工中心、高速龙门模具加工中心、工业级颗粒 3D 打印机及 3D 打印与铣削复合系统；CCE 还列出五轴联动数控龙门加工中心、三维五轴激光切割机和自动化设备。设备选型须从工件和验收结果反推配置：RFQ 应提供材料体系（CFRP/GFRP/夹芯板/泡沫/塑料/铝合金等）、未固化或固化状态、最大包络、质量与装夹基准、CAD/STEP 数据、工序、曲率与可达性、孔径/孔位、轮廓与厚度公差、表面质量、节拍、换型及班次。复材切削还应明确粉尘与纤维导电风险、主轴和刀具、分层/毛刺/撕裂判定、集尘过滤、防静电、接地、密封防护、废料处置和职业健康要求；夹芯板需定义面板、芯材、粘接层、压紧与切口质量。采购方应逐项确认 X/Y/Z 及旋转轴行程、摆角、主轴功率/转速/扭矩、控制器、重复定位与体积精度、刀库、测头、真空台或工装、集尘、冷却、软件接口、占地、地基、电源和气源。FAT/SAT 应使用约定材料和代表性工件，写明连续运行时长、精度测量方法、合格率、节拍、噪声、粉尘和整改责任。官网页面使用 CHENcan 品牌并同时覆盖山东和江苏基地；报价、合同、发票、收款、出口、安装、质保和认证主体必须明确写明由江苏法人、山东法人或其他主体承担。官网展示 ISO/CE 概括性陈述，但公开页未提供足以核对江苏法人、地址、范围、编号和有效期的完整证书，因此本页不列为已核实资质。",
  productsServicesSummaryEn:
    "The official composite-relevant range includes PC-series five-axis machines for composite trimming and drilling, composite sandwich-panel machining centers, high-speed gantry mold centers, industrial pellet 3D printers and hybrid printing/milling systems. CCE also names five-axis gantry machining, three-dimensional five-axis laser cutting and automated equipment. Select equipment from the workpiece and acceptance result backward: an RFQ should define material system (CFRP, GFRP, sandwich panel, foam, plastic or aluminum), uncured or cured state, maximum envelope, weight and datums, CAD/STEP data, operations, curvature and access, hole diameter and position, contour and thickness tolerances, surface criteria, cycle time, changeover and shifts. Composite cutting also requires dust and conductive-fiber risk controls, spindle and tooling, delamination/burr/tear criteria, extraction and filtration, antistatic measures, grounding, sealing, waste handling and occupational-health requirements. For sandwich panels, define skins, core, adhesive layer, hold-down and cut-edge quality. Confirm X/Y/Z and rotary travel, angular range, spindle power/speed/torque, controller, repeatability and volumetric accuracy, tool magazine, probing, vacuum table or fixtures, extraction, cooling, software interfaces, footprint, foundations and utilities. FAT/SAT should use agreed materials and representative parts and define run duration, measurement method, yield, cycle time, noise, dust and shortfall remedies. Because the website uses the CHENcan brand across both Shandong and Jiangsu bases, quotation, contract, invoice, beneficiary, export, installation, warranty and certificate responsibility must explicitly identify the responsible legal entity. The site shows broad ISO/CE claims but does not expose complete certificates sufficient to verify Jiangsu legal entity, address, scope, number and validity; they are therefore not recorded as verified credentials here.",
  ecatalogs: [
    {
      title: "晨灿机械官方公司介绍",
      titleEn: "Official CHENcan Company Profile",
      description: "品牌能力、山东与江苏生产基地、质量和全球服务陈述。",
      descriptionEn:
        "Brand capabilities, Shandong and Jiangsu production bases, quality and global-service statements.",
      url: "https://chencanmachine.com/about-us/",
      format: "Company profile",
    },
    {
      title: "晨灿机械设备目录",
      titleEn: "CHENcan Machine Directory",
      description: "五轴、龙门、复合材料加工与工业 3D 打印设备入口。",
      descriptionEn:
        "Official five-axis, gantry, composite-machining and industrial 3D-printing directory.",
      url: "https://chencanmachine.com/machine/",
      format: "Product directory",
    },
    {
      title: "PC 系列复材五轴加工中心",
      titleEn: "PC-Series Five-Axis Composite Machining Center",
      description: "面向复合材料复杂曲面的修边与钻孔设备说明。",
      descriptionEn:
        "Official machine page for trimming and drilling curved composite parts.",
      url: "https://chencanmachine.com/machine/pc-series-5-axis-cnc-router-for-composite-trimming-drilling/",
      format: "Product page",
    },
    {
      title: "复合夹芯板加工中心",
      titleEn: "Composite Sandwich-Panel Machining Center",
      description: "复合板材锯切、铣削和钻孔设备入口。",
      descriptionEn:
        "Official sawing, milling and drilling solution for composite sandwich panels.",
      url: "https://chencanmachine.com/machine/3-axis-cnc-machining-center-for-vehicle-body-panel-processing/",
      format: "Product page",
    },
    {
      title: "中国国际复材展晨灿展商页",
      titleEn: "China Composites Expo CHENcan Profile",
      description: "精确江苏法人英文主体、6M01 展位及产品类别。",
      descriptionEn:
        "Organizer-published exact Jiangsu legal identity, booth 6M01 and equipment categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-3240-4506784.html",
      format: "Exhibitor profile",
    },
    {
      title: "晨灿机械官方联系方式",
      titleEn: "CHENcan Official Contact",
      description: "品牌邮箱、电话、WhatsApp 与项目资料提交入口。",
      descriptionEn:
        "Official brand email, phone, WhatsApp and project-requirement channel.",
      url: "https://chencanmachine.com/contact-us/",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/chenhechen-chencan-logo.png",
  contactEmail: "info@chencanmachine.com",
  contactPhone: "+86 187 6392 6336",
  address:
    "No. 21 Ningbo Road, Sihong Economic Development Zone, Suqian, Jiangsu, China",
  website: "https://chencanmachine.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 17,
  viewCount: 0,
  capabilities: [
    "five-axis composite trimming and drilling",
    "composite sandwich-panel machining",
    "high-speed gantry machining centers",
    "wind-blade and large-tooling machining",
    "industrial pellet 3D printing",
    "hybrid additive and subtractive manufacturing",
    "three-dimensional five-axis laser cutting",
    "custom CNC engineering",
    "machine assembly, calibration and testing",
    "installation, training and technical support",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
