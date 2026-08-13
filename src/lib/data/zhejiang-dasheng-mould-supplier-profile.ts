import type { SupplierListing } from "@/lib/db/schema";

export const ZHEJIANG_DASHENG_MOULD_SUPPLIER_ID = "sup-zhejiang-dasheng-mould";
export const ZHEJIANG_DASHENG_MOULD_SUPPLIER_SLUG = "zhejiang-dasheng-mould-plastics";

// Curated from Zhejiang Dasheng Mould Plastics' current company-owned English
// and Chinese websites and China Composites Expo's current Net Show. The
// exhibitor identity DASHENG MOULD, current legal names 浙江大盛模塑有限公司 /
// Zhejiang Dasheng Mould Plastics Co., Ltd., Huangyan address, telephone,
// email, dsmould.com domain and unified social-credit code printed on the
// official certificate images are deduplicated to this mainland-China entity.
// Capacity, customer, equipment and service-network statements remain
// company-published claims. Official logo downloaded 2026-08-13 from:
// https://www.dsmould.com/static/website1098/images/logo.png
export const ZHEJIANG_DASHENG_MOULD_SUPPLIER_PROFILE: SupplierListing = {
  id: ZHEJIANG_DASHENG_MOULD_SUPPLIER_ID,
  name: "浙江大盛模塑有限公司",
  nameEn: "Zhejiang Dasheng Mould Plastics Co., Ltd.",
  slug: ZHEJIANG_DASHENG_MOULD_SUPPLIER_SLUG,
  location: "浙江台州黄岩",
  locationEn: "Huangyan, Taizhou, Zhejiang, China",
  province: "浙江",
  category: "mold",
  products: [
    "SMC、BMC、GMT、LFT-D 与 RTM 复合材料模具",
    "碳纤维、玻璃纤维先进材料模压模具与制品",
    "汽车内外饰、保险杠、格栅、仪表板与车灯模具",
    "热塑性注塑模具与热固性模压模具",
    "中大型复杂注塑模具与压铸模具",
    "家电、耐用消费品与大型医疗部件模具",
    "高铁、航空与汽车复合材料部件模压方案",
    "模具试制、维修、落地与量产导入支持",
  ],
  productsEn: [
    "Composite compression molds for SMC, BMC, GMT, LFT-D and RTM",
    "Compression tooling and parts for carbon- and glass-fiber advanced materials",
    "Automotive interior, exterior, bumper, grille, instrument-panel and lamp molds",
    "Thermoplastic injection molds and thermoset compression molds",
    "Medium-to-large complex injection and die-casting molds",
    "Home-appliance, consumer-durable and large medical-component molds",
    "Composite molding programs for rail, aerospace and automotive parts",
    "Mold trials, repair, localization and production-introduction support",
  ],
  processList: [
    "DFM、Moldflow 与模具工程设计",
    "三轴及五轴高速数控加工",
    "多轴深孔钻削与冷却回路加工",
    "大型 EDM、合模与精密配模",
    "280T 至 2800T 注塑试模（企业发布设备范围）",
    "最高 4000T 压机模压试制（企业发布设备范围）",
    "大型三坐标尺寸检测、试模与验收报告",
    "海外现场维修、维护与售后支持（企业声明）",
  ],
  processListEn: [
    "DFM, Moldflow and mold engineering",
    "Three- and five-axis high-speed CNC machining",
    "Multi-axis deep-hole drilling and cooling-channel machining",
    "Large-format EDM, spotting and precision mold fitting",
    "Injection trials from 280T to 2,800T (company-published equipment range)",
    "Compression trials on presses up to 4,000T (company-published equipment range)",
    "Large-format CMM inspection, mold trials and acceptance reporting",
    "Overseas on-site repair, maintenance and after-sales support (company claim)",
  ],
  established: 2001,
  verified: false,
  description:
    "浙江大盛模塑有限公司是位于中国大陆浙江省台州市黄岩区的模具企业。现行中英文官网称企业自 2001 年起为汽车和工业客户提供热塑性、热固性注塑及先进复合材料模具，具备 SMC、BMC、GMT、LFT-D、RTM 等工艺模具开发能力。中国国际复材展网上展厅以 DASHENG MOULD 收录该展商，并描述台州总部、中大型汽车及结构件模具、热固性与热塑性模具及面向欧美和亚洲的业务。展商名称、现行中英文法律名称、黄岩金川路 333 号地址、0576-84228552 电话、info@dsmould.com 邮箱、dsmould.com 域名以及官网证书图片上的统一社会信用代码已去重为同一家中国大陆企业；大盛长兴、徐州基地及上海销售分支作为官网披露的运营地点，不另建重复主体，墨西哥、迪拜和意大利服务点也不作为本页中国主体。名称相近且无法由官网身份链关联的其他“大盛”模具企业不并入。",
  descriptionEn:
    "Zhejiang Dasheng Mould Plastics Co., Ltd. is a mainland-China tooling company in Huangyan, Taizhou, Zhejiang. Its current Chinese and English websites say the business has supported automotive and industrial customers since 2001 with thermoplastic, thermoset and advanced-composite tooling, including development capability for SMC, BMC, GMT, LFT-D and RTM processes. China Composites Expo lists the exhibitor as DASHENG MOULD and describes a Taizhou headquarters, medium-to-large automotive and structural molds, thermoset and thermoplastic tooling, and business across Europe, the Americas and Asia. The exhibitor wording, current Chinese and English legal names, No. 333 Jinchuan Road address, telephone, info@dsmould.com email, dsmould.com domain and unified social-credit code printed on company-hosted certificate images are deduplicated to this one mainland entity. Published Changxing and Xuzhou bases and the Shanghai sales branch are treated as operating locations rather than duplicate suppliers. Mexico, Dubai and Italy service points are not presented as the legal subject of this China profile, and unrelated similarly named mold companies are excluded.",
  certifications: [
    "GB/T 19001-2016 / ISO 9001:2015 — 北京海德国际认证有限公司证书 04624Q14104R2M；范围为模具设计、开发、制造；2024-08-02 签发，2027-08-01 到期；信息转录自企业官网现行证书图片，须结合年度监督审核及发证机构数据库核验状态",
    "GB/T 45001-2020 / ISO 45001:2018 — 北京海德国际认证有限公司证书 04624S11007R0M；范围为模具设计、开发、制造及相关管理活动；2028-04-22 到期；信息转录自企业官网现行证书图片，须结合年度监督审核及发证机构数据库核验状态",
  ],
  certificationsEn: [
    "GB/T 19001-2016 / ISO 9001:2015 — Beijing Head International Certification certificate 04624Q14104R2M; mold design, development and manufacture; issued 2024-08-02, expires 2027-08-01; company-hosted image, live status unverified",
    "GB/T 45001-2020 / ISO 45001:2018 — Beijing Head International Certification certificate 04624S11007R0M; mold design, development, manufacture and related management; expires 2028-04-22; company-hosted image, live status unverified",
  ],
  productsServicesSummary:
    "大盛官网把当前业务分为汽车、家电、耐用消费品、医疗和先进材料五类。与复合材料采购直接相关的先进材料页面说明，碳纤维或玻璃纤维材料在加热模具中受压固化，并列出 SMC、BMC、GMT、LFT-D、RTM 模具开发能力，以及汽车保险杠、电池壳、座椅框架、电表箱、绝缘端子、开关外壳、光伏安装结构、充电桩外壳、高铁、航空和汽车部件等应用。这里应区分模具、试制品与批量制品：官网列出注塑、压铸和复材模压能力，不代表每套汽车或工业模具都是复材模具，也不代表图片中的部件已取得特定行业批准。RFQ 应锁定成型工艺、材料牌号和供应商、纤维/树脂体系、料片或预成型体、零件 CAD 和基准、收缩率、分型与脱模方向、表面等级、关键尺寸、公差、模具钢和热处理、模腔和镶件、加热/冷却区、传感器、压机台面、吨位、行程、温度和固化周期。设计阶段应要求 DFM、流动或充填分析的输入和假设、图纸版本、材料数据、设计评审及工程变更记录；试模阶段应使用约定材料和生产条件，记录温度、压力、时间、样品位置、尺寸、外观、孔隙、纤维取向、缺陷、修模事项和复验结果。官网设备页发布 Makino、DMG Mori、Quick Jet、GS、FIDIA 等加工设备，多轴深孔钻、280T–2800T 注塑机、最高 4000T 压机、合模机、EDM 和大型 CMM；这些是企业自述的能力信号，应通过设备台账、现场审厂、校准记录和代表性项目验证，并确认具体订单由黄岩、长兴、徐州或其他地点完成。官网当前总览称在中国有三座生产基地、制造面积超过 50,000 平方米、400 多名员工、年产能 800 多套模具；黄岩基地页面则单列约 20,000 平方米、约 500 套年产能。中国国际复材展较早的展商简介记载两处设施、25,000 平方米、300 多名员工和年产 500 多套。两组数字属于不同日期和口径，本页不合并为一个“核实产能”；采购方须按报价主体、工厂和产品类别核验当前负荷、瓶颈工序、外协比例、试模排期和可承诺交期。官网上传的 ISO 9001 和 ISO 45001 图片具有可读证书号、版本、范围、发证机构和有效期，故在本页按图片转录，但 GetFRP 未向发证机构独立确认实时状态，管理体系认证也不是具体模具或零件批准。官网 ISO 14001 图片显示证书 04623E10014R0M 于 2026-01-05 到期，复核日已过期，因此不列为现行认证；询价时应索取更新证书或确认不再持有。官网提供中英文页面、国际询价表、海外展会记录，并声称在美洲、欧洲和中东设服务点，可作为初步出口准备度信号。买方仍应确认合同与出口主体、目的地安全规范、英文图纸和验收文件、模具归属、知识产权、备件、远程访问、现场安装人员签证、包装防锈、吊装标识、Incoterm、质保、维修响应和付款账户。所有客户、产能、模具寿命、换模时间、设备与 24/7 服务陈述都需以当前受控证据、审厂、FAT/SAT 和合同验证。",
  productsServicesSummaryEn:
    "Dasheng's current site groups its business into automotive, appliance, durable-goods, medical and advanced-material solutions. Its composite page describes carbon- or glass-fiber material pressed and cured in a heated mold, publishes SMC, BMC, GMT, LFT-D and RTM tooling capability and names automotive, electrical, new-energy, rail and aerospace applications. Buyers must distinguish tooling, trial parts and serial parts: the injection and die-casting catalog does not make every Dasheng mold a composite mold, and application imagery is not approval. An RFQ should control process, material and producer, fiber/resin system, charge or preform, CAD and datums, shrinkage, parting, finish, dimensions, steel and heat treatment, thermal zones, sensors, press interface and cycle. DFM and flow-analysis assumptions, drawings, material data and changes need review control. Acceptance should use agreed production material and record settings, dimensions, appearance, defects, corrections and re-validation. Published CNC, drilling, EDM, spotting, trial-press and CMM equipment are signals requiring records, audit, calibration and a representative project. Confirm site and subcontracting. The current overview claims three China plants, more than 50,000 square metres, 400-plus people and above 800 molds; its Huangyan section separately claims about 20,000 square metres and around 500 molds. The older China Composites Expo profile gives two facilities, 25,000 square metres, 300-plus people and over 500 molds. Dates and scopes differ, so GetFRP does not combine them into one verified capacity. Current company-hosted ISO 9001 and ISO 45001 images show identity, standard, number, scope, issuer and expiry, but live status remains unverified and management certification is not tool approval. ISO 14001 certificate 04623E10014R0M expired on 2026-01-05 and is excluded from current certifications. The multilingual site, inquiry form, exhibitions and claimed overseas service points support an initial export-ready flag. Verify exporter, destination safety, drawings, acceptance, tooling/IP ownership, spares, packing, Incoterm, warranty and payee. Claims require evidence, audit, FAT/SAT and contract confirmation.",
  ecatalogs: [
    {
      title: "大盛模塑官方英文官网",
      titleEn: "Official Dasheng English Website",
      description: "现行企业身份、业务分类、全球布局、认证图片与联系方式。",
      descriptionEn: "Current identity, business categories, global footprint, certificate images and contacts.",
      url: "https://www.dsmould.com/",
      format: "Official website",
    },
    {
      title: "大盛先进材料解决方案",
      titleEn: "Dasheng Advanced-Material Solution",
      description: "复材模压工艺、碳纤维/玻璃纤维材料和公开应用。",
      descriptionEn: "Composite compression process, carbon/glass-fiber materials and published applications.",
      url: "https://www.dsmould.com/Explore-Dasheng/SMC/",
      format: "Official solution page",
    },
    {
      title: "大盛数字化工厂与质量能力",
      titleEn: "Dasheng Digital Factory and Quality Capabilities",
      description: "加工、试模、检测设备和全球售后服务自述。",
      descriptionEn: "Company-published machining, trial, inspection and global after-sales capability.",
      url: "https://www.dsmould.com/Ultimate-Quality.html",
      format: "Capability page",
    },
    {
      title: "大盛模塑官方联系方式",
      titleEn: "Official Dasheng Contact Page",
      description: "黄岩总部地址、电话、采购联系邮箱和询价表。",
      descriptionEn: "Huangyan address, telephone, procurement email and inquiry form.",
      url: "https://www.dsmould.com/Contact-us.html",
      format: "Official contact page",
    },
    {
      title: "中国国际复材展 DASHENG MOULD 网上展厅",
      titleEn: "China Composites Expo DASHENG MOULD Profile",
      description: "展会发布的台州主体、模具范围及历史产能。",
      descriptionEn: "Exhibitor source.",
      url: "https://www.chinacompositesexpo.com/en/netshow.php?_MULTI_PAGE_START=330",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/zhejiang-dasheng-mould-logo.webp",
  contactEmail: "info@dsmould.com",
  contactPhone: "+86 576 8422 8552",
  address: "No. 333 Jinchuan Road, Huangyan District, Taizhou, Zhejiang, China",
  website: "https://www.dsmould.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "SMC, BMC, GMT, LFT-D and RTM tooling",
    "carbon- and glass-fiber compression molding",
    "thermoset compression molds",
    "thermoplastic injection molds",
    "medium-to-large automotive molds",
    "die-casting molds",
    "DFM and Moldflow engineering",
    "three- and five-axis CNC machining",
    "deep-hole drilling, EDM and spotting",
    "injection and compression trials",
    "CMM inspection and acceptance reporting",
    "international repair and after-sales support (company claim)",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
