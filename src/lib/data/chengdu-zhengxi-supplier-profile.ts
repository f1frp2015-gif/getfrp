import type { SupplierListing } from "@/lib/db/schema";

export const CHENGDU_ZHENGXI_SUPPLIER_ID = "sup-chengdu-zhengxi";
export const CHENGDU_ZHENGXI_SUPPLIER_SLUG =
  "chengdu-zhengxi-intelligent-equipment";

// Curated from the exact mainland-China exhibitor's current official website,
// current official catalog and China Composites Expo net-show entry. The group
// says it began operating under the Zhengxi brand in 2009 and completed its
// shareholding reform in 2024; earlier factory-lineage statements are therefore
// not used as the legal entity's establishment date. Public pages display broad
// ISO, CE and other credential claims but not complete current certificates for
// this exact legal entity, so no certification is recorded as verified here.
// Official logo downloaded 2026-08-13 from the current official-site header:
// https://www.zhengxi.com/web/static/web/img/logo.png
export const CHENGDU_ZHENGXI_SUPPLIER_PROFILE: SupplierListing = {
  id: CHENGDU_ZHENGXI_SUPPLIER_ID,
  name: "成都正西智能装备集团股份有限公司",
  nameEn: "Chengdu Zhengxi Intelligent Equipment Group Co., Ltd.",
  slug: CHENGDU_ZHENGXI_SUPPLIER_SLUG,
  location: "四川成都",
  locationEn: "Chengdu, Sichuan, China",
  province: "四川",
  category: "equipment",
  products: [
    "SMC 与 PCM 复合材料成型液压机",
    "HP-RTM 高压树脂传递模塑液压机",
    "碳纤维复合材料成型液压机",
    "SMC 自动模压生产线",
    "LFT-D 与 GMT 自动模压生产线",
    "BMC/DMC 自动模压生产线",
    "复合材料成型自动化单元与智能工厂",
    "冲压、锻造、汽车内饰及其他行业液压机",
  ],
  productsEn: [
    "SMC and PCM composite-molding hydraulic presses",
    "HP-RTM high-pressure resin-transfer-molding presses",
    "Carbon-fiber composite-molding hydraulic presses",
    "Automated SMC compression-molding lines",
    "Automated LFT-D and GMT molding lines",
    "Automated BMC/DMC molding lines",
    "Composite-molding automation cells and smart factories",
    "Hydraulic presses for stamping, forging, automotive interiors and other industries",
  ],
  processList: [
    "复合材料液压机设计、制造与非标定制",
    "伺服液压与压力、速度、位置闭环控制集成",
    "SMC、BMC/DMC、LFT-D 与 GMT 自动模压线集成",
    "HP-RTM 压机与注射、模温及自动化接口集成",
    "机器人上下料、称量、切割、输送与脱模自动化",
    "工艺数据采集、追溯与数字化车间集成",
    "安装调试、培训、备件与售后服务",
  ],
  processListEn: [
    "Composite hydraulic-press engineering, manufacture and customization",
    "Servo-hydraulic and closed-loop force, speed and position control integration",
    "SMC, BMC/DMC, LFT-D and GMT automated molding-line integration",
    "HP-RTM press integration with injection, mold-temperature and automation interfaces",
    "Robotic loading, weighing, cutting, conveying and demolding automation",
    "Process-data acquisition, traceability and digital-workshop integration",
    "Installation, commissioning, training, spare parts and after-sales service",
  ],
  established: 2009,
  verified: false,
  description:
    "成都正西智能装备集团股份有限公司位于四川成都青白江，官网称正西品牌于 2009 年开始专注液压成型设备，2024 年完成集团股份制改革。其复材产品目录覆盖 SMC、PCM、HP-RTM、碳纤维成型液压机，以及 SMC、LFT-D、GMT、BMC/DMC 自动模压生产线，并提供自动化产线、数字化车间和智能工厂方案。中国国际复材展以同一英文主体收录该大陆企业，2026 网上展厅列示展位 8N08，类别为复材制品生产系统、辅助设备与工具、模具相关设备及其他设备工具。成立时间、集团规模、项目数量、市场覆盖和技术地位均为企业或展会发布，尚未由 GetFRP 现场审计。",
  descriptionEn:
    "Chengdu Zhengxi Intelligent Equipment Group Co., Ltd. is based in Qingbaijiang, Chengdu, Sichuan. The official site says the Zhengxi brand began focusing on hydraulic-forming equipment in 2009 and that the group completed a shareholding reform in 2024. Its composites directory covers SMC, PCM, HP-RTM and carbon-fiber molding presses plus automated SMC, LFT-D, GMT and BMC/DMC compression lines, with wider automation, digital-workshop and smart-factory solutions. China Composites Expo lists the same mainland-China entity and publishes booth 8N08 for 2026 under finished-composite production systems, accessory equipment and tools, mold-related equipment and other equipment and tools. Establishment, group scale, project count, market coverage and technology-position statements are company- or organizer-published and have not been independently site-audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "正西官网将复材设备分为 SMC、PCM、HP-RTM、碳纤维液压机及 SMC、LFT-D、GMT、BMC/DMC 自动线；官方复材方案页称压机可采用伺服系统、框架式或四柱式结构、数据采集追溯，并按工艺配置自动切片称重、团料计量分块等单元。这些属于厂商发布的产品和方案说明，不能替代具体型号技术协议。RFQ 应从材料与零件反推设备：明确 SMC/BMC/DMC/GMT/LFT-D/热塑预浸料/CFRP 或 HP-RTM 体系、铺料及树脂状态、最大成品和模具尺寸/重量、年产量与节拍、目标压制力、工作台尺寸、开口、行程、快速下行/排气/保压/回程速度和压力曲线、允许偏载、滑块平行度、位置/压力/温度精度、模具加热与冷却、真空及注射接口、脱模和上下料方式。自动线还需约定切割、称量、缓存、机器人、输送、视觉、安全围护、配方管理、MES/ERP/OPC-UA 等接口和追溯数据所有权。HP-RTM 项目需把合模力、注射压力/流量、混配计量、模温、真空、泄漏监测和联锁边界写入双方接口矩阵。供应商应提供基础载荷、设备布置、吊装和维修空间、电力/液压油/冷却水/压缩空气需求、主要元件品牌、备件清单、软件许可、网络安全、远程服务权限、培训、质保和全生命周期服务方案。FAT/SAT 必须使用约定模具、材料和代表性工件，定义连续运行时长、节拍、压力与温度曲线、平行度、尺寸/外观/孔隙或缺陷判定、成品率、数据追溯及未达标整改责任。官网显示 ISO 9001、CE、国军标及行业领先等概括性宣传，但当前公开页面未提供足以核对股份公司主体、地址、范围、编号、发证机构和有效期的完整证书；采购方应逐份索取并向发证机构核验，本页不列为已核实认证。集团官网同时呈现多个成员公司和制造基地，报价、合同、发票、收款、出口、制造、安装、质保和认证责任必须锁定实际法律主体。",
  productsServicesSummaryEn:
    "Zhengxi's official composites range separates SMC, PCM, HP-RTM and carbon-fiber presses from automated SMC, LFT-D, GMT and BMC/DMC lines. Its official composites solution describes servo systems, frame or four-column structures, process-data capture and traceability, and configurable cells such as SMC sheet cutting and weighing or BMC/DMC bulk-metering and portioning. These are supplier-published product and solution statements, not a substitute for a model-specific technical agreement. Build an RFQ backward from material and part: define SMC, BMC/DMC, GMT, LFT-D, thermoplastic prepreg, CFRP or HP-RTM chemistry; charge and resin state; maximum part and mold envelope and mass; annual volume and cycle time; required force; platen size; daylight; stroke; rapid approach, breathing, dwell and return profiles; permissible eccentric load; slide parallelism; position, pressure and temperature accuracy; mold heating/cooling; vacuum and injection interfaces; demolding and handling. Automated lines also need cutting, weighing, buffer, robot, conveyor, vision and guarding requirements; recipe management; MES, ERP or OPC-UA interfaces; and ownership of traceability data. HP-RTM projects should define closing force, injection pressure/flow, mixing and metering, mold temperature, vacuum, leak detection and interlocks in a joint interface matrix. Require foundation loads, layout, lifting and maintenance clearance, power/oil/cooling-water/compressed-air demand, key component makes, spare-parts list, software licensing, cybersecurity, remote-service access, training, warranty and lifecycle support. FAT/SAT should use the agreed mold, material and representative part, with continuous-run duration, cycle time, force and temperature curves, parallelism, dimensional/appearance/void or defect criteria, yield, traceability and remedies. The website displays broad ISO 9001, CE, military-quality and industry-leading promotional claims but does not expose complete current certificates sufficient to verify the shareholding company, address, scope, number, issuer and validity. Buyers should obtain and verify each certificate; none is recorded as verified here. Because the group site presents several member companies and manufacturing bases, the quotation, contract, invoice, beneficiary, exporter, manufacturer, installer, warranty and certification responsibility must identify the actual legal entity.",
  ecatalogs: [
    {
      title: "正西智能官方企业简介",
      titleEn: "Official Zhengxi Company Profile",
      description: "集团主体、2009 年起点、2024 股份制改革及业务范围。",
      descriptionEn:
        "Official group identity, 2009 operating origin, 2024 shareholding reform and business scope.",
      url: "https://www.zhengxi.com/about/about.html",
      format: "Company profile",
    },
    {
      title: "正西复合材料成型设备目录",
      titleEn: "Zhengxi Composite-Molding Equipment Directory",
      description: "SMC、PCM、HP-RTM、碳纤维压机与自动模压生产线入口。",
      descriptionEn:
        "Official SMC, PCM, HP-RTM, carbon-fiber press and automated-line directory.",
      url: "https://www.zhengxi.com/product/17.html",
      format: "Product directory",
    },
    {
      title: "正西复合材料成型解决方案",
      titleEn: "Zhengxi Composite-Molding Solution",
      description: "压机结构、伺服、数据追溯及自动线单元说明。",
      descriptionEn:
        "Official press architecture, servo, data-traceability and automation-cell description.",
      url: "https://www.zhengxi.com/solutioninfo/11.html",
      format: "Solution page",
    },
    {
      title: "正西智能全系产品画册",
      titleEn: "Zhengxi Full-Range Product Catalog",
      description: "官方设备、自动化、信息化能力与联系信息画册。",
      descriptionEn:
        "Official catalog for equipment, automation, information systems and contact details.",
      url: "https://www.zhengxi.com/web/upload/2023/09/12/1694488579001yv3x9.pdf",
      format: "PDF catalog",
    },
    {
      title: "中国国际复材展正西网上展厅",
      titleEn: "China Composites Expo Zhengxi Net Show",
      description: "同一英文主体、2026 展位 8N08 和设备类别。",
      descriptionEn:
        "Organizer-published matching identity, 2026 booth 8N08 and equipment categories.",
      url: "https://www.chinacompositesexpo.com/en/netshow.php?_MULTI_PAGE_START=240",
      format: "Exhibitor profile",
    },
    {
      title: "正西智能官方联系方式",
      titleEn: "Official Zhengxi Contact Page",
      description: "总部地址、销售与服务电话、国际业务邮箱。",
      descriptionEn:
        "Official headquarters address, sales/service numbers and international-business email.",
      url: "https://www.zhengxi.com/contact.html",
      format: "Contact page",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/chengdu-zhengxi-logo.png",
  contactEmail: "info@cdzhengxi.com",
  contactPhone: "+86 28 6799 9199",
  address:
    "No. 1698 Zhihui Avenue, Dawan Subdistrict, Qingbaijiang District, Chengdu, Sichuan, China",
  website: "https://www.zhengxi.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 19,
  viewCount: 0,
  capabilities: [
    "composite-molding hydraulic presses",
    "SMC and PCM compression molding",
    "HP-RTM press and process integration",
    "carbon-fiber hot-press molding",
    "SMC, BMC/DMC, GMT and LFT-D automated lines",
    "servo-hydraulic process control",
    "robotic material handling and demolding",
    "process data acquisition and traceability",
    "digital workshops and smart factories",
    "custom equipment engineering",
    "installation, commissioning and lifecycle support",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
