import type { SupplierListing } from "@/lib/db/schema";

export const CHENGDU_LUCHEN_SUPPLIER_ID = "sup-chengdu-luchen";
export const CHENGDU_LUCHEN_SUPPLIER_SLUG =
  "chengdu-luchen-new-materials";

// Curated from the exact mainland-China exhibitor's current official website,
// the certificate images published there and the China Composites Expo
// directory. The official site was active over HTTP when reviewed, including
// 2026 news and a matching MIIT filing, but its HTTPS certificate was expired.
// Certificate details below are transcribed from the full company-hosted
// images; GetFRP has not independently queried each certification body. The
// site's two Bureau Veritas thumbnail captions are reversed relative to the
// standards printed on the certificates, so the certificate images—not the
// captions—control this record. Official logo downloaded 2026-08-13 from:
// http://www.lu-chen-composite.cn/static/index/images/logo.png
export const CHENGDU_LUCHEN_SUPPLIER_PROFILE: SupplierListing = {
  id: CHENGDU_LUCHEN_SUPPLIER_ID,
  name: "成都鲁晨新材料科技有限公司",
  nameEn: "Chengdu Lu Chen New Materials Technology Co., Ltd.",
  slug: CHENGDU_LUCHEN_SUPPLIER_SLUG,
  location: "四川成都",
  locationEn: "Chengdu, Sichuan, China",
  province: "四川",
  category: "manufacturer",
  products: [
    "碳纤维、芳纶纤维及玻璃纤维预浸料",
    "快速固化、高透明、阻燃、耐低温及中高 Tg 环氧预浸料",
    "模具预浸料与高性能胶膜",
    "预浸料用环氧、阻燃、低温、胶膜及模具树脂体系",
    "碳纤维复合材料板材、管材与结构件",
    "碳纤维医疗板、蜂窝夹芯板、乱纹板与哑光碳板",
    "高压容器及按需定制复合材料制品",
  ],
  productsEn: [
    "Carbon-, aramid- and glass-fiber prepregs",
    "Fast-cure, clear, flame-retardant, cryogenic and medium/high-Tg epoxy prepregs",
    "Tooling prepreg and high-performance film adhesive",
    "Epoxy, flame-retardant, low-temperature, film-adhesive and tooling resin systems for prepreg",
    "Carbon-composite sheets, tubes and structural components",
    "Carbon medical panels, honeycomb sandwich panels, forged-pattern and matte carbon sheets",
    "High-pressure vessels and custom composite products",
  ],
  processList: [
    "热熔法单向及织物预浸",
    "四轴纤维缠绕",
    "热压罐固化与高温箱固化",
    "模压与 RTM 成型",
    "数控切割及洁净室激光加工",
    "复合材料板、管和结构件设计与制造",
    "树脂体系开发与定制复材方案",
  ],
  processListEn: [
    "Hot-melt unidirectional and fabric prepregging",
    "Four-axis filament winding",
    "Autoclave and high-temperature-oven curing",
    "Compression molding and RTM",
    "CNC cutting and clean-room laser processing",
    "Composite sheet, tube and structural-part design and manufacturing",
    "Resin-system development and custom composite solutions",
  ],
  established: 2013,
  verified: false,
  description:
    "成都鲁晨新材料科技有限公司是位于四川成都新津的高性能纤维复合材料企业。当前官网称公司成立于 2013 年，研发、设计、生产和销售环氧树脂，碳纤维、芳纶纤维和玻璃纤维预浸料，以及相应复合材料制品；公开装备栏目列出预浸、四轴缠绕、模压、数控切割、热压罐、洁净室/激光和高温箱系统。中国国际复材展以 CHENGDU LU CHEN NEW MATERIALS TECHNOLOGY CO., LTD. 收录同一主体，2026 年展商名录发布展位 6Y01，网上展厅列出玻纤织物、碳纤维、芳纶、预浸料及复材部件类别。成立年份、制造能力和展品信息均为企业或展会发布，尚未由 GetFRP 现场审计。",
  descriptionEn:
    "Chengdu Lu Chen New Materials Technology Co., Ltd. is a high-performance fiber-composites company in Xinjin, Chengdu, Sichuan. Its current official site dates the company to 2013 and presents the development, design, manufacture and sale of epoxy systems; carbon-, aramid- and glass-fiber prepregs; and related composite products. Its published equipment sections cover prepregging, four-axis winding, compression molding, CNC cutting, autoclave, clean-room/laser and high-temperature-oven systems. China Composites Expo lists the same entity as CHENGDU LU CHEN NEW MATERIALS TECHNOLOGY CO., LTD., assigns booth 6Y01 in its 2026 exhibitor list and categorizes the net-show range under glass-fiber woven goods, carbon fiber, aramid, prepreg and finished composite parts. Founding date, manufacturing capabilities and exhibit claims are company- or organizer-published and have not been independently site-audited by GetFRP.",
  certifications: [
    "BS EN ISO 9001:2015 与 EN 9100:2018（技术等同 AS9100D）— Bureau Veritas 证书 CN052498；范围为民用航空碳纤维预浸料及碳纤维复合材料制品生产制造；2024-12-24 签发，2027-12-23 到期；信息来自企业官网证书图片，认证状态未由 GetFRP 向发证机构独立核验",
    "ISO 9001:2015 — Bureau Veritas 证书 CN052573；范围覆盖碳/芳纶/玻纤预浸料生产销售及相应复材制品研发、设计、生产和销售；2024-12-09 签发，2028-01-25 到期；信息来自企业官网证书图片，认证状态未由 GetFRP 向发证机构独立核验",
    "GB/T 24001-2016 / ISO 14001:2015 — 中国质量认证中心证书 00126E300669R201；本周期 2026-03-05 签发，2029-03-04 到期；信息来自企业官网证书图片，须结合年度监督审核和发证机构状态核验",
    "GB/T 45001-2020 / ISO 45001:2018 — 中国质量认证中心证书 00126S300561R201；本周期 2026-03-05 签发，2029-03-04 到期；信息来自企业官网证书图片，须结合年度监督审核和发证机构状态核验",
  ],
  certificationsEn: [
    "BS EN ISO 9001:2015 and EN 9100:2018 (technically equivalent to AS9100D) — Bureau Veritas certificate CN052498; scope: manufacture of civil-aviation carbon-fiber prepreg and carbon-composite products; issued 2024-12-24, expires 2027-12-23; transcribed from the company-hosted certificate image and not independently status-checked with the issuer by GetFRP",
    "ISO 9001:2015 — Bureau Veritas certificate CN052573; scope covers production and sale of carbon-, aramid- and glass-fiber prepreg and R&D, design, manufacture and sale of the corresponding composite products; issued 2024-12-09, expires 2028-01-25; transcribed from the company-hosted certificate image and not independently status-checked with the issuer by GetFRP",
    "GB/T 24001-2016 / ISO 14001:2015 — China Quality Certification Centre certificate 00126E300669R201; current-cycle issue date 2026-03-05, valid through 2029-03-04; transcribed from the company-hosted image and subject to surveillance-audit and issuer-status checks",
    "GB/T 45001-2020 / ISO 45001:2018 — China Quality Certification Centre certificate 00126S300561R201; current-cycle issue date 2026-03-05, valid through 2029-03-04; transcribed from the company-hosted image and subject to surveillance-audit and issuer-status checks",
  ],
  productsServicesSummary:
    "官网预浸料目录包括 150°C/10 分钟快速固化 C64/G64/A64、高透明 C67、阻燃 C81/G81/C83、耐低温 G61、高性能胶膜 N62、中高 Tg C51/C53 和模具预浸料 C75；树脂目录还发布 LC501/502/503、LC601/602/604/605/607、LC705、LC801/802/803/805/806 等牌号，并给出耐热、低温、阻燃或适配基材等企业指标。上述牌号性能、DIN 5510、UL 94、FAR 25.853、EN 45545 和极低温等表述属于企业产品页声明，不能由管理体系证书替代验证，因此本页不把它们写入“支持标准”。买方 RFQ 应明确纤维品牌/丝束或织物结构、树脂牌号、纤维和树脂含量、面密度/幅宽、挥发分、黏性、凝胶/固化曲线、Tg 测试方法、储存温度、出冷库寿命、剩余保质期、包装、CoA 和批次追溯；成型件还需图纸、铺层、孔隙率、尺寸公差、NDT、首件和验收标准。航空、压力容器、防护或阻燃用途应要求具体产品/工厂范围内的当前证书、材料与工艺鉴定、测试报告和客户批准，管理体系认证不等于产品批准。涉及高性能碳纤维、预浸料、高压容器、防护产品或敏感最终用途时，应基于具体牌号、性能、目的地和最终用户开展当前中国出口管制与制裁合规审查。官网当前仅 HTTP 可用，HTTPS 证书在复核日已过期；不要通过该站提交密码、合同、银行资料或其他敏感信息，签约和付款前应通过独立渠道复核企业邮箱、电话、合同主体和收款账户。官网认证页的两张 Bureau Veritas 缩略图标题与证书实际标准互换，本页按证书原图记录。公司不同官方页面公开的专利总数亦不一致，故未将专利数量作为核实字段。",
  productsServicesSummaryEn:
    "The official prepreg catalog includes 150°C/10-minute fast-cure C64/G64/A64, clear C67, flame-retardant C81/G81/C83, low-temperature G61, N62 film adhesive, medium/high-Tg C51/C53 and C75 tooling prepreg. The resin pages also publish LC501/502/503, LC601/602/604/605/607, LC705 and LC801/802/803/805/806 grades with company-stated heat, cryogenic, flame or reinforcement compatibility properties. References to DIN 5510, UL 94, FAR 25.853, EN 45545, very-low-temperature performance and other grade claims come from company product pages; management-system certificates do not validate them, so no product standard is populated in the supported-standards field. A prepreg RFQ should define fiber maker and tow or fabric construction, resin grade, fiber/resin content, areal weight and width, volatiles, tack, gel/cure profile, Tg method, storage temperature, out-life, remaining shelf life, packing, CoA and batch traceability. Molded parts additionally need drawings, layup, void limits, dimensional tolerances, NDT, first-article and acceptance requirements. Aviation, pressure-vessel, protective or flame-critical use requires current certificates covering the exact product and site, plus material/process qualification, test evidence and customer approval; management-system certification is not product approval. High-performance carbon fiber, prepreg, pressure vessels, protective goods and sensitive end uses also require transaction-specific review under current Chinese export controls and destination/end-user sanctions based on exact grade and performance. The official site is currently usable only over HTTP and its HTTPS certificate was expired on the review date. Do not submit passwords, contracts, banking data or other sensitive information through it; independently confirm company email, telephone, contracting entity and beneficiary before contracting or payment. The official certification page swaps the thumbnail captions of its two Bureau Veritas images, so this profile follows the standards printed on the certificate originals. Official company pages also publish inconsistent patent totals, so no patent count is treated as verified.",
  ecatalogs: [
    {
      title: "鲁晨新材官方企业概况",
      titleEn: "Official Lu Chen Company Profile",
      description: "企业主体、成立年份、地址和业务范围自述。",
      descriptionEn:
        "Official legal identity, founding-year, address and business-scope statement.",
      url: "http://www.lu-chen-composite.cn/qygk.html",
      format: "Company profile (HTTP)",
    },
    {
      title: "鲁晨树脂体系目录",
      titleEn: "Lu Chen Resin-System Directory",
      description: "预浸料用环氧、低温、阻燃、胶膜和模具树脂牌号。",
      descriptionEn:
        "Official epoxy, low-temperature, flame-retardant, film-adhesive and tooling resin grades.",
      url: "http://www.lu-chen-composite.cn/shuzhi/",
      format: "Product directory (HTTP)",
    },
    {
      title: "鲁晨预浸料体系目录",
      titleEn: "Lu Chen Prepreg-System Directory",
      description: "快速固化、高透明、阻燃、耐低温、中高 Tg 和模具预浸料。",
      descriptionEn:
        "Official fast-cure, clear, flame-retardant, low-temperature, medium/high-Tg and tooling prepreg range.",
      url: "http://www.lu-chen-composite.cn/hxcp/",
      format: "Product directory (HTTP)",
    },
    {
      title: "鲁晨复材产品目录",
      titleEn: "Lu Chen Composite-Product Directory",
      description: "复合材料板材、管材、结构件和代表性板材图片。",
      descriptionEn:
        "Official composite sheet, tube, structural-part and representative panel range.",
      url: "http://www.lu-chen-composite.cn/fccp/",
      format: "Product directory (HTTP)",
    },
    {
      title: "鲁晨体系认证原图",
      titleEn: "Lu Chen Management-System Certificates",
      description: "企业公开的航空质量、质量、环境和职业健康安全体系证书原图。",
      descriptionEn:
        "Company-hosted aerospace-quality, quality, environmental and occupational-health-and-safety certificate images.",
      url: "http://www.lu-chen-composite.cn/txrz1/",
      format: "Certificate images (HTTP)",
    },
    {
      title: "2026 中国国际复材展展商名录",
      titleEn: "2026 China Composites Expo Exhibitor List",
      description: "展会发布的成都鲁晨英文主体和 6Y01 展位。",
      descriptionEn:
        "Organizer-published English legal identity and booth 6Y01.",
      url: "https://www.chinacompositesexpo.com/cn/news.php?c_id=252",
      format: "Exhibitor list",
    },
    {
      title: "中国国际复材展鲁晨网上展厅",
      titleEn: "China Composites Expo Lu Chen Net Show",
      description: "展会发布的业务简介和展品类别。",
      descriptionEn:
        "Organizer-published business introduction and product categories.",
      url: "https://www.chinacompositesexpo.com/en/netshow.php?_MULTI_PAGE_START=240",
      format: "Exhibitor profile",
    },
    {
      title: "鲁晨新材官方联系方式",
      titleEn: "Official Lu Chen Contact Page",
      description: "成都新津地址、销售电话、手机和企业邮箱。",
      descriptionEn:
        "Official Xinjin address, sales telephone, mobile numbers and company email.",
      url: "http://www.lu-chen-composite.cn/lxwm/",
      format: "Contact page (HTTP)",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/chengdu-luchen-logo.png",
  contactEmail: "lcywb@lu-chen-composite.cn",
  contactPhone: "+86 28 8240 1350",
  address:
    "No. 288 Longxi Henan Road, Puxing Subdistrict, Xinjin District, Chengdu, Sichuan, China",
  website: "http://www.lu-chen-composite.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "carbon-fiber prepreg",
    "aramid-fiber prepreg",
    "glass-fiber prepreg",
    "epoxy and specialty prepreg resins",
    "film adhesive",
    "hot-melt prepregging",
    "filament winding",
    "autoclave curing",
    "compression molding and RTM",
    "composite sheets and sandwich panels",
    "composite tubes and structural parts",
    "custom composite design and manufacturing",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
