import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_SAIRUI_SUPPLIER_ID = "sup-changzhou-sairui";
export const CHANGZHOU_SAIRUI_SUPPLIER_SLUG =
  "changzhou-sairui-engineering-technology";

// Curated from the current Changzhou Sairui profile hosted on ORIT's official
// website, the company's standalone China Composites Expo profile, and public
// CNIPA / Changzhou New District records. ORIT's site identifies Sairui as the
// Changzhou manufacturing business in this sales channel; the legal entity,
// product models and parent-company relationship align with the expo profile.
// Installed-line, award and performance statements remain company- or
// organizer-published and have not been independently verified by GetFRP.
// Reviewed 2026-08-13: the current Sairui page exposes only the Beijing ORIT
// operator's header logo, not a standalone current Sairui logo, so this profile
// deliberately uses the supplier-page text fallback instead of that logo.
export const CHANGZHOU_SAIRUI_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_SAIRUI_SUPPLIER_ID,
  name: "常州赛瑞工程技术有限公司",
  nameEn: "Changzhou ORIT_SR Tech Co., Ltd.",
  slug: CHANGZHOU_SAIRUI_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "LN_DW 型碳布织造生产线",
    "LN_PS1 型热固性预浸料生产线",
    "LN_TP1 型热塑性预浸料生产线",
    "LN_PE1 型湿法浸渍生产线",
    "CC3 型单向布交叉铺层生产线",
    "RC6 型碳纤维生产线原丝电子放丝系统",
    "独立送经、拖引送经、中心卷取与翻卷验布设备",
    "在线浸胶定型设备与定制复材生产线",
  ],
  productsEn: [
    "LN_DW carbon-fabric weaving lines",
    "LN_PS1 thermoset prepreg lines",
    "LN_TP1 thermoplastic prepreg lines",
    "LN_PE1 wet-impregnation lines",
    "CC3 unidirectional cross-ply lines",
    "RC6 precursor electronic creel and let-off systems for carbonization lines",
    "Independent warp let-off, driven warp feed, center winding and inspection-rewinding equipment",
    "Online impregnation and setting equipment plus custom composite-production lines",
  ],
  processList: [
    "碳纤维织物织造产线设计与集成",
    "热固性与热塑性预浸料产线设计与制造",
    "湿法浸渍与在线浸胶定型",
    "单向预浸料交叉铺层",
    "碳纤维原丝放卷、张力与电子放丝控制",
    "翻卷验布、卷取与送经装备制造",
    "机电一体化控制与非标产线定制",
  ],
  processListEn: [
    "Carbon-fiber fabric weaving-line design and integration",
    "Thermoset and thermoplastic prepreg-line design and manufacture",
    "Wet impregnation and online impregnation or setting",
    "Unidirectional prepreg cross-plying",
    "Carbon-fiber precursor unwinding, tension and electronic let-off control",
    "Inspection rewinding, winding and warp-feed equipment manufacture",
    "Mechatronic controls and custom production-line engineering",
  ],
  established: 2009,
  verified: false,
  description:
    "常州赛瑞工程技术有限公司（ORIT_SR）是位于江苏常州的复合材料中间制品装备企业。赛瑞官方资料称公司成立于 2009 年，前身为常州瑞赛机电设备有限公司，是江苏帝威新材料科技发展有限公司（TiWin）的全资子公司，重点开发碳纤维织物、热固性及热塑性预浸料、湿法浸渍、单向交叉铺层和碳纤维原丝电子放丝装备。中国国际复材展资料同样将其定位为复材技术装备研发企业，并列出预浸料生产及搬运设备、复材制品生产设备和定制生产线等类别。官网所述产线业绩、奖项与性能为企业自述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Changzhou ORIT_SR Tech Co., Ltd. is a Changzhou, Jiangsu-based equipment company serving composite intermediate-product manufacturing. Its official profile says the business was established in 2009, previously operated as Changzhou Ruisai Electromechanical Equipment Co., Ltd., and is a wholly owned subsidiary of Jiangsu TiWin New Material Technology Development Co., Ltd. The published focus covers carbon-fiber fabric weaving, thermoset and thermoplastic prepreg, wet impregnation, unidirectional cross-plying, and electronic precursor let-off equipment for carbonization lines. Its China Composites Expo profile likewise presents the company as a composite-technology equipment developer and lists prepreg production and handling equipment, finished-composite production equipment, and custom lines. Installed-line, award and performance statements on the official site are company-published and have not been independently verified by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "赛瑞官方产品页列出 LN_DW 碳布织造线、LN_PS1 热固性预浸料线、LN_TP1 热塑性预浸料线、LN_PE1 湿法浸渍线、CC3 单向布交铺线和 RC6 碳纤维生产线原丝放丝系统，并提供 BS 独立送经、FB 拖引送经、CW 中心卷取、WI 在线浸胶定型和 RW 翻卷验布等单机及用户定制。官网称 2015 年销售完整 LN_DW 生产线、2016 年完成首套 RC6 系统开车并安装 LN_PS 线、2018 年由中航复材选购 LN_PS 线；这些客户和项目陈述应通过合同、验收记录和可联系的装机用户核验。国家知识产权局 2020 年集成电路布图设计公告记录该公司为“新型热固预浸料生产线专用集成电路布图”的权利人；常州国家高新区 2021 年公开名单亦列出以该公司为依托单位的高性能碳纤维复合材料装备工程技术研究中心。设备 RFQ 应明确纤维类型、丝束规格与卷装，树脂体系，原料和成品幅宽，克重与树脂含量，放卷张力及控制精度，纤维展开与排布，线速和验收工况，温度区、加热冷却与浸渍方式，辊隙和压力，铺层角度与对齐公差，卷取与检测，电气制式、控制系统、数据接口和安全防护，以及 FAT/SAT、安装调试、培训、备件、质保和目的地合规文件。当前赛瑞官方资料由北京威瑞亚太科技有限公司 ORIT 网站承载，公开电话和邮箱为北京销售通道；采购方应另行确认常州法人、制造场地、收款主体及项目服务责任。",
  productsServicesSummaryEn:
    "Sairui's official product page lists LN_DW carbon-fabric weaving lines, LN_PS1 thermoset prepreg lines, LN_TP1 thermoplastic prepreg lines, LN_PE1 wet-impregnation lines, CC3 UD cross-ply lines and RC6 precursor let-off systems for carbonization lines. It also publishes BS independent warp let-off, FB driven warp-feed, CW center-winding, WI online impregnation and setting, RW inspection-rewinding, and custom equipment. The site says it sold a complete LN_DW line in 2015, commissioned its first RC6 system and installed an LN_PS line in 2016, and supplied an LN_PS line selected by AVIC Composite in 2018. Buyers should validate these customer and project statements through contracts, acceptance records and contactable installed references. A 2020 CNIPA integrated-circuit layout-design announcement names the company as rights holder for a layout dedicated to a new thermoset-prepreg production line, while a 2021 Changzhou New District public list names the company as host of a high-performance carbon-fiber composite equipment engineering-technology research center. An equipment RFQ should define fiber type, tow specification and package; resin chemistry; input and output width; areal weight and resin content; unwind tension and control accuracy; spreading and alignment; line speed and acceptance conditions; temperature zones, heating, cooling and impregnation method; nip gap and pressure; ply angle and alignment tolerance; winding and inspection; electrical supply, controls, data interfaces and guarding; FAT/SAT; commissioning; training; spares; warranty; and destination compliance documents. The current official Sairui material is hosted on the website of Beijing-based ORIT operator Beijing Weirui Asia-Pacific Technology Co., Ltd., and its published phone and email form a Beijing sales channel. Buyers should separately confirm the Changzhou legal entity, manufacturing site, payment beneficiary and project-service responsibilities.",
  ecatalogs: [
    {
      title: "赛瑞官方公司与产品介绍",
      titleEn: "Official Sairui Company & Product Profile",
      description:
        "赛瑞沿革、母公司关系、主要产线型号、项目自述和设备子页面入口。",
      descriptionEn:
        "Official history, parent relationship, principal line models, project statements and equipment subpages.",
      url: "http://www.orit.cn/product/orit.aspx",
      format: "Company and product profile",
    },
    {
      title: "LN_PS1 热固性预浸料生产线",
      titleEn: "LN_PS1 Thermoset Prepreg Line",
      description: "官网发布的 LN_PS1 设备介绍入口。",
      descriptionEn: "Official LN_PS1 equipment profile.",
      url: "http://www.orit.cn/product/orit/ln_ps1型热固型预浸料生产线.aspx",
      format: "Product page",
    },
    {
      title: "LN_DW 碳布织造生产线",
      titleEn: "LN_DW Carbon-Fabric Weaving Line",
      description: "官网发布的 LN_DW 设备介绍入口。",
      descriptionEn: "Official LN_DW equipment profile.",
      url: "http://www.orit.cn/product/orit/ln_dw型碳布织造生产线.aspx",
      format: "Product page",
    },
    {
      title: "中国国际复材展展商资料",
      titleEn: "China Composites Expo Exhibitor Profile",
      description: "展会发布的中英文名称、企业介绍、设备范围和产品类别。",
      descriptionEn:
        "Organizer-published Chinese and English names, company overview, equipment scope and product categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-1788-81001952.html",
      format: "Exhibitor profile",
    },
    {
      title: "国家知识产权局布图设计公告",
      titleEn: "CNIPA Layout-Design Announcement",
      description:
        "权利人名称、常州地址和热固性预浸料生产线专用布图登记记录。",
      descriptionEn:
        "Official rights-holder name, Changzhou address and registration record for a thermoset-prepreg-line layout design.",
      url: "https://www.cnipa.gov.cn/art/2020/2/21/art_164_58560.html",
      format: "Government record",
    },
    {
      title: "常州国家高新区工程技术研究中心名单",
      titleEn: "Changzhou New District Engineering-Center List",
      description:
        "政府公开的工程技术研究中心名称及依托企业记录。",
      descriptionEn:
        "Government-published engineering-technology research-center and host-company record.",
      url: "https://www.cznd.gov.cn/html/cznd/2021/CCHBPPFD_0610/442203.html",
      format: "Government record",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: null,
  contactEmail: "xin.ren@orit.cn",
  contactPhone: "+86 10 8586 1032 ext. 11",
  address:
    "Buildings 5 and 9, Binjiang International Enterprise Port, No. 202 Donghai Road, Xinbei District, Changzhou, Jiangsu, China",
  website: "http://www.orit.cn/product/orit.aspx",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "carbon-fabric weaving lines",
    "thermoset prepreg lines",
    "thermoplastic prepreg lines",
    "wet-impregnation lines",
    "UD cross-ply lines",
    "carbonization-line precursor let-off systems",
    "electronic tension and let-off control",
    "warp-feed and winding equipment",
    "inspection-rewinding equipment",
    "online impregnation and setting equipment",
    "custom composite-production lines",
    "mechatronic control-system engineering",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
