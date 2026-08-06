import type { SupplierListing } from "@/lib/db/schema";

export const HEBEI_WEITONG_SUPPLIER_ID = "sup-hebei-weitong-frp";
export const HEBEI_WEITONG_SUPPLIER_SLUG = "hebei-weitong-frp";

// Curated from Hebei Weitong's official English website, company profile,
// product directory, service and contact pages. The Chinese legal name and
// April 30, 2015 incorporation date were cross-checked against public company-
// registration information. Production scale, staffing, export, patent,
// certification, equipment and capacity statements remain company-published
// and unverified by GetFRP. No current certificate files were available on the
// reviewed pages, so buyers should request certificate numbers, scopes and
// validity dates. Official logo source (downloaded 2026-08-06 from the current
// website header): https://www.frpwt.com/logo.png
export const HEBEI_WEITONG_SUPPLIER_PROFILE: SupplierListing = {
  id: HEBEI_WEITONG_SUPPLIER_ID,
  name: "河北伟通玻璃钢有限公司",
  nameEn: "Hebei Weitong FRP Co., Ltd.",
  slug: HEBEI_WEITONG_SUPPLIER_SLUG,
  location: "河北衡水",
  locationEn: "Hengshui, Hebei, China",
  province: "河北",
  category: "manufacturer",
  products: [
    "连续缠绕、夹砂、循环水、工艺与环氧压力玻璃钢管道",
    "大型现场缠绕、卧式、立式与压力玻璃钢储罐",
    "玻璃钢洗涤塔、浓缩塔、烟道、风管与一体化泵站",
    "玻璃钢法兰、弯头、三通、四通、异径管及其他管件",
    "玻璃钢格栅、电缆桥架、角钢、槽钢与异型件",
    "玻璃钢管罐生产设备、模具，以及树脂、纤维和辅料",
  ],
  productsEn: [
    "Continuous-wound, sand-filled, circulation-water, process and epoxy-pressure FRP pipe",
    "Large field-wound, horizontal, vertical and pressure FRP storage tanks",
    "FRP scrubbers, concentration towers, flues, ducts and integrated pump stations",
    "FRP flanges, elbows, tees, crosses, reducers and other pipe fittings",
    "FRP grating, cable tray, angles, channels and special-shaped parts",
    "FRP pipe and tank production equipment, molds, resin, fiber and additives",
  ],
  processList: [
    "玻璃钢管道与大型罐体纤维缠绕",
    "玻璃钢管件、塔器、风管与异型件手糊成型",
    "玻璃钢角钢、槽钢及其他型材拉挤成型",
    "管道、储罐与非标设备工程设计及尺寸定制",
    "法兰、管件、现场接头、开孔与总成预制",
    "压力与密封测试、安装指导及售后服务",
  ],
  processListEn: [
    "Filament winding for FRP pipe and large tanks",
    "Hand lay-up for fittings, towers, ducts and special-shaped parts",
    "Pultrusion of FRP angles, channels and other profiles",
    "Engineering design and dimensional customization for pipe, tanks and process equipment",
    "Flange, fitting, field-joint, nozzle and assembly prefabrication",
    "Pressure and leak testing, installation guidance and after-sales support",
  ],
  established: 2015,
  verified: false,
  description:
    "河北伟通玻璃钢有限公司位于河北省衡水市冀州区。其英文官网称公司成立于 2015 年 4 月 30 日，占地超过 20,000 平方米，其中生产车间约 11,000 平方米，集研发、设计与制造于一体。官网产品目录覆盖玻璃钢管道、储罐、塔器与烟道、管件、格栅和拉挤型材，并延伸至玻璃钢生产设备、模具与原材料。上述规模、人员、产能、专利、客户及出口信息均为企业公开陈述，采购方应通过营业执照、工厂审核、订单业绩与可追溯质量文件独立核验。",
  descriptionEn:
    "Hebei Weitong FRP Co., Ltd. is based in Jizhou District, Hengshui, Hebei. Its official English website states that the company was established on April 30, 2015 and operates on more than 20,000 m², including approximately 11,000 m² of production workshops, with research, design and manufacturing functions. The published range covers FRP pipe, tanks, towers and flues, fittings, grating and pultruded profiles, plus FRP production equipment, molds and raw materials. Its scale, staffing, capacity, patent, customer and export statements are company-published; buyers should independently confirm them through the business license, factory audit, order references and traceable quality records.",
  certifications: [
    "ISO 9001 质量管理体系（企业官网声明；未查见现行证书文件，需核验认证主体、编号、范围与有效期）",
    "ISO 14001 环境管理体系（企业官网声明；未查见现行证书文件，需核验认证主体、编号、范围与有效期）",
    "ISO 45001 职业健康安全管理体系（企业官网声明；未查见现行证书文件，需核验认证主体、编号、范围与有效期）",
  ],
  certificationsEn: [
    "ISO 9001 quality management system (company-published; no current certificate file reviewed—confirm entity, certificate number, scope and validity)",
    "ISO 14001 environmental management system (company-published; no current certificate file reviewed—confirm entity, certificate number, scope and validity)",
    "ISO 45001 occupational health and safety management system (company-published; no current certificate file reviewed—confirm entity, certificate number, scope and validity)",
  ],
  productsServicesSummary:
    "伟通官网公开的主要范围包括 DN15-DN4000 系列玻璃钢管道、DN23000 以下储罐、塔器、烟道、格栅、型材、管件、一体化泵站，以及管罐生产设备、模具和玻纤/树脂/辅料。官网还展示高规格压力测试平台、45 吨拉挤设备与 BPO 固化炉，并提供设计、安装指导和售后服务；但多数产品页未提供可下载的项目级 TDS、设计计算、层合结构、检验试验计划、MOQ 或交期。管道询盘应明确介质、浓度、温度、设计压力/真空、刚度等级、内衬与结构层、口径、连接和支撑；罐塔询盘还应提供容积、尺寸、风震荷载、喷嘴表和现场条件。采购方应核验设计标准、树脂与增强材料、腐蚀裕量、层合程序、原材料批次、工艺见证点、尺寸与压力测试、第三方报告、包装、质保及实际制造地点，并确认目录中的设备和原材料是自产还是配套供应。",
  productsServicesSummaryEn:
    "Weitong's website publishes FRP pipe from DN15 to DN4000, tanks below DN23000, towers, flues, grating, profiles, fittings and integrated pump stations, together with pipe-and-tank production equipment, molds, reinforcement, resin and additives. It also shows a pressure-test platform, 45-ton pultrusion equipment and a BPO curing oven, and advertises design, installation guidance and after-sales support. Most product pages do not provide a downloadable project-level TDS, design calculation, laminate schedule, inspection-and-test plan, MOQ or lead time. A pipe RFQ should define the medium and concentration, temperature, design pressure or vacuum, stiffness, liner and structural laminate, diameter, joints and supports; tank and tower RFQs should add volume, geometry, wind and seismic loads, nozzle schedule and site conditions. Buyers should validate the design code, resin and reinforcement, corrosion allowance, laminate procedure, raw-material batches, process witness points, dimensional and pressure tests, third-party reports, packaging, warranty and actual manufacturing site, and clarify whether listed equipment and raw materials are manufactured or sourced by the supplier.",
  ecatalogs: [
    {
      title: "伟通玻璃钢英文官网",
      titleEn: "Weitong FRP Official Website",
      description: "企业介绍、主要产品、应用、项目与出口联系方式总览。",
      descriptionEn:
        "Official overview of the company, principal products, applications, projects and export contacts.",
      url: "https://www.frpwt.com/",
      format: "Official website",
    },
    {
      title: "伟通公司介绍与工厂设备",
      titleEn: "Weitong Company, Factory & Equipment Profile",
      description: "企业沿革、厂区规模、公开设备、研发、专利与质量体系声明。",
      descriptionEn:
        "Company-published history, site scale, equipment, R&D, patent and management-system statements.",
      url: "https://www.frpwt.com/about-us/",
      format: "Company profile",
    },
    {
      title: "伟通产品目录",
      titleEn: "Weitong Product Directory",
      description: "管道、储罐、塔器、管件、型材、设备、模具与原材料入口。",
      descriptionEn:
        "Official directory for pipe, tanks, towers, fittings, profiles, equipment, molds and raw materials.",
      url: "https://www.frpwt.com/products/",
      format: "Product directory",
    },
    {
      title: "伟通玻璃钢管道目录",
      titleEn: "Weitong FRP Pipe Directory",
      description: "连续缠绕、夹砂、循环水、工艺、风管与环氧压力管道。",
      descriptionEn:
        "Official directory for continuous-wound, sand-filled, circulation, process, duct and epoxy-pressure pipe.",
      url: "https://www.frpwt.com/fiberglass-pipes/",
      format: "Product category",
    },
    {
      title: "伟通储罐与塔器目录",
      titleEn: "Weitong FRP Tank & Tower Directory",
      description: "大型现场缠绕、卧式、立式与压力罐，以及洗涤塔、浓缩塔和泵站。",
      descriptionEn:
        "Official directory for large field-wound, horizontal, vertical and pressure tanks, scrubbers, concentration towers and pump stations.",
      url: "https://www.frpwt.com/fiberglass-tanks/",
      format: "Product category",
    },
    {
      title: "伟通管件、格栅与型材目录",
      titleEn: "Weitong Fittings, Grating & Profiles Directory",
      description: "法兰、弯头、三通、异径管、电缆桥架、角钢、槽钢与格栅。",
      descriptionEn:
        "Official directory for flanges, elbows, tees, reducers, cable tray, angles, channels and grating.",
      url: "https://www.frpwt.com/fiberglass-pipe-fittings-special-shaped-parts-and-profiles/",
      format: "Product category",
    },
    {
      title: "伟通设计安装服务",
      titleEn: "Weitong Design & Installation Services",
      description: "企业公开的设计、制造、安装指导与售后服务范围。",
      descriptionEn:
        "Company-published design, manufacturing, installation-guidance and after-sales service scope.",
      url: "https://www.frpwt.com/design-installation-services/",
      format: "Service overview",
    },
    {
      title: "伟通联系方式",
      titleEn: "Weitong Contact Directory",
      description: "官网公开的冀州地址、电话、邮箱、WhatsApp 与埃及分支信息。",
      descriptionEn:
        "Official Jizhou address, telephone, email, WhatsApp and Egypt branch information.",
      url: "https://www.frpwt.com/contact-us/",
      format: "Contact directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-06T00:00:00.000Z"),
  logo: "/supplier-assets/hebei-weitong-logo.png",
  contactEmail: "hbwtww@weitongfrp.com",
  contactPhone: "+86 131 0338 7269",
  address:
    "No. 101 Chunfeng Street, Jizhou District, Hengshui City, Hebei Province, China",
  website: "https://www.frpwt.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "FRP pipe",
    "filament-wound FRP pipe",
    "epoxy FRP pressure pipe",
    "FRP storage tanks",
    "field-wound FRP tanks",
    "FRP scrubbers and towers",
    "FRP duct and flue",
    "FRP pipe fittings",
    "FRP grating",
    "pultruded FRP profiles",
    "FRP cable tray",
    "FRP production equipment and molds",
    "engineering design and installation support",
    "pressure and leak testing",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-06T00:00:00.000Z"),
  updatedAt: new Date("2026-08-06T00:00:00.000Z"),
};
