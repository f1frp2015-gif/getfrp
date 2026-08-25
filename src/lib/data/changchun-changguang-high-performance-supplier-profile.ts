import type { SupplierListing } from "@/lib/db/schema";

export const CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_ID =
  "sup-changchun-changguang-high-performance";
export const CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_SLUG =
  "changchun-changguang-high-performance-materials";

// Curated from Changchun Changguang Advanced Materials' current official
// company, prepreg, adhesive, tube and contact pages and its joint entry with
// Changguang Aerospace at China Composites Expo. Official logo downloaded on
// 2026-08-25 from:
// https://www.cccgam.net/tpl/index/pc/default/static/icons/logo.png
export const CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_ID,
  name: "长春长光高性能材料有限公司",
  nameEn: "Changchun Changguang Advanced Materials Co., Ltd.",
  slug: CHANGCHUN_CHANGGUANG_HIGH_PERFORMANCE_SUPPLIER_SLUG,
  location: "吉林长春",
  locationEn: "Changchun, Jilin, China",
  province: "吉林",
  category: "manufacturer",
  products: [
    "环氧、氰酸酯、双马来酰亚胺和邻苯二甲腈树脂基体",
    "T700、T800、M40、M55 碳纤维预浸料",
    "玻璃纤维、高硅氧布和 1K/3K 碳布预浸料",
    "窄带分切预浸料、特种胶粘剂和胶膜",
    "可定制性能并预埋金属接头的高精度碳纤维管",
    "功能性复合材料板材和高性能复材结构件",
  ],
  productsEn: [
    "Epoxy, cyanate-ester, bismaleimide and phthalonitrile resin matrices",
    "T700-, T800-, M40- and M55-grade carbon-fiber prepregs",
    "Glass-fiber, high-silica-cloth and 1K or 3K carbon-cloth prepregs",
    "Slit-tape prepregs, specialty structural adhesives and adhesive films",
    "High-precision custom carbon-fiber tubes with optional embedded metal connectors",
    "Functional composite plates and high-performance composite structures",
  ],
  processList: [
    "树脂配方及胶粘剂开发",
    "热熔预浸和预浸料面密度定制",
    "预浸料窄带分切与铺放",
    "干法与湿法纤维缠绕",
    "RTM 树脂及复材结构件成型",
    "流变、热分析、微量水分和力学性能测试",
  ],
  processListEn: [
    "Resin formulation and adhesive development",
    "Hot-melt prepregging and custom reinforcement areal weight",
    "Prepreg slit-tape conversion and layup",
    "Dry and wet filament winding",
    "RTM resin and composite-structure molding",
    "Rheology, thermal analysis, trace-moisture and mechanical testing",
  ],
  established: 2025,
  verified: false,
  description:
    "长春长光高性能材料有限公司官网称公司由长春长光宇航复合材料有限公司控股并与骨干员工共同出资，于 2025 年 1 月成立，业务包括民用复材结构件、高性能预浸料、树脂基体、特种胶粘剂和胶膜。产品体系公开环氧、氰酸酯、双马和邻苯二甲腈等树脂，T700/T800/M40/M55 碳纤维以及玻纤、高硅氧布预浸料，胶粘剂、胶膜、功能板材、高精度碳纤维管和结构件。中国国际复材展 C 字母页以“长春长光宇航复合材料有限公司（长春长光高性能材料有限公司）”联合收录该展商。本页以拥有当前产品官网和联系信息的长光高材法人为主体，不把母公司全部军工资质、合同或历史自动归入新公司。",
  descriptionEn:
    "Changchun Changguang Advanced Materials Co., Ltd. states on its official website that it was established in January 2025 by Changchun Changguang Aerospace Composites and key employees, with Changguang Aerospace as the controlling shareholder. Its published scope covers civil composite structures, high-performance prepregs, resin matrices, specialty adhesives and adhesive films. The current portfolio identifies epoxy, cyanate ester, bismaleimide and phthalonitrile systems; T700, T800, M40 and M55 carbon-fiber plus glass and high-silica prepregs; adhesives; films; functional plates; high-precision carbon-fiber tubes; and composite structures. China Composites Expo jointly lists Changguang Aerospace and Changguang Advanced Materials. This profile is anchored to the newer legal entity that operates the current product and contact website and does not transfer every defense qualification, contract or historical claim of its parent to the new company.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网预浸料页公开可配套 T700、T800、M40、M55、玻璃纤维、1K/3K 碳布和高硅氧布，增强纤维面密度可定制在 75–400 g/m²；胶粘剂页列出室温固化、快速固化、耐 100°C/220°C 和橡胶粘接等 YH 系列产品。关于页称碳纤维管可采用预浸料铺放、干法缠绕和湿法缠绕，实现强度/模量定制与金属接头预埋。以上参数、应用与航天交付记录均是供应商自述，必须落到具体牌号、图纸和生产批次验证。RFQ 应明确树脂化学体系、固化温度/时间/压力、Tg、放热、黏度和适用期；纤维品牌与等级、织物结构、面密度、公差、树脂含量、挥发物、铺贴性、冷藏温度、保质期和出库寿命；胶粘剂的混合比、胶层厚度、基材处理、剪切/剥离/疲劳及湿热老化。碳管与板件还需约定内外径、壁厚、直线度、圆度、纤维角度、孔隙率、表面、嵌件拉脱、无损检测和机加工基准。官网称特定阻燃树脂预浸料通过轨道交通条件及 EN 45545 HL3，并称公司通过 ISO 9001，但本轮没有公开可同时核验主体、地址、范围、证书号、等级适用条款和有效期的完整证书包，故不列已核实认证。其联系页搜索标题在核验时出现与企业无关的垃圾文本，正文和全站导航仍显示公司地址、电话和邮箱；交换受控图纸、登录凭证或付款指令前，应独立复核域名、联系人和安全传输方式。",
  productsServicesSummaryEn:
    "The official prepreg page states that T700, T800, M40 and M55 carbon fiber, glass fiber, 1K or 3K carbon cloth and high-silica cloth can be paired with the company's resin systems at reinforcement areal weights from 75 to 400 g/m². Its adhesive page lists YH-series room-temperature cure, rapid-cure, 100°C or 220°C-resistant and rubber-bonding products. The company page says high-strength and high-modulus carbon-fiber tubes can be made by prepreg layup, dry winding or wet filament winding with tailored strength or modulus and embedded metal connectors. These ranges, applications and aerospace-delivery records are supplier statements and must be qualified against the quoted grade, drawing and production lot. An RFQ should specify resin chemistry; cure temperature, time and pressure; Tg; exotherm; viscosity and working life; fiber maker and grade; textile architecture; areal-weight tolerance; resin content; volatiles; drape; frozen-storage temperature; shelf life and out-life. Adhesive qualification should cover mix ratio, bond-line thickness, substrate preparation, lap shear, peel, fatigue and hot-wet aging. Tubes and plates additionally need inner and outer diameter, wall, straightness, roundness, ply angles, void limit, surface class, insert pull-out, NDT and machining datums. The site says a particular flame-retardant prepreg passed railway requirements and EN 45545 HL3 and says the company holds ISO 9001, but no complete current package was exposed that simultaneously verifies entity, site, scope, certificate number, applicable hazard level and validity. No certification is recorded as independently verified. During review, the contact page's search title contained unrelated spam text even though the body and site navigation still showed the company's address, telephone and email. Independently verify the domain, contact and secure transfer route before sharing controlled drawings, credentials or payment instructions.",
  ecatalogs: [
    {
      title: "长光高材官网",
      titleEn: "Official Changguang Advanced Materials Website",
      description: "公司、市场、产品和当前联系信息。",
      descriptionEn: "Official company, market, product and current contact information.",
      url: "https://www.cccgam.net/",
      format: "Official website",
    },
    {
      title: "长光高材公司介绍",
      titleEn: "Changguang Advanced Materials Company Profile",
      description: "股权边界、成立日期、技术能力和企业公开声明。",
      descriptionEn: "Ownership boundary, establishment date, technical capabilities and published claims.",
      url: "https://www.cccgam.net/gywm",
      format: "Company profile",
    },
    {
      title: "长光高材预浸料",
      titleEn: "Changguang Prepreg Portfolio",
      description: "增强材料种类和面密度定制范围。",
      descriptionEn: "Reinforcement families and published areal-weight range.",
      url: "https://www.cccgam.net/fqszyjl.html",
      format: "Technical product page",
    },
    {
      title: "长光高材胶粘剂",
      titleEn: "Changguang Adhesives",
      description: "YH 系列胶粘剂牌号和固化温度说明。",
      descriptionEn: "YH adhesive grades and supplier-published cure or temperature descriptions.",
      url: "https://www.cccgam.net/jzj",
      format: "Technical product page",
    },
    {
      title: "长光高材高精度复材管",
      titleEn: "Changguang High-Precision Composite Tubes",
      description: "复材管材产品入口和工艺能力。",
      descriptionEn: "Official composite-tube product entry and process capability.",
      url: "https://www.cccgam.net/pmjcjg.html",
      format: "Product page",
    },
    {
      title: "长光高材联系方式",
      titleEn: "Changguang Contact Page",
      description: "公司地址、电话和邮箱；页面元数据异常需二次核验。",
      descriptionEn: "Company address, telephone and email; page metadata requires independent recheck.",
      url: "https://www.cccgam.net/lxwm",
      format: "Official contact",
    },
    {
      title: "中国国际复材展 C 字母展商页",
      titleEn: "China Composites Expo Exhibitors — C",
      description: "长光宇航与长光高材联合展商身份和产品范围。",
      descriptionEn: "Joint organizer entry for Changguang Aerospace and Advanced Materials.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=C",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/changchun-changguang-high-performance-logo.png",
  contactEmail: "CGAM02025@163.com",
  contactPhone: "+86 431 8053 2376",
  address:
    "No. 2999 Guangji Road, Beihu Science and Technology Development Zone, Changchun, Jilin, China",
  website: "https://www.cccgam.net/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 25,
  viewCount: 0,
  capabilities: [
    "carbon-fiber prepreg",
    "glass-fiber prepreg",
    "cyanate-ester resin",
    "bismaleimide resin",
    "epoxy structural adhesive",
    "adhesive film",
    "custom carbon-fiber tubing",
    "dry filament winding",
    "wet filament winding",
    "composite structures",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
