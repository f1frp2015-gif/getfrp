import type { SupplierListing } from "@/lib/db/schema";

export const ATCC_SUPPLIER_ID = "sup-atcc";
export const ATCC_SUPPLIER_SLUG = "advanced-technik-composite-atcc";

// Curated from ATCC's current official company, history, technology,
// qualification and global-footprint pages and the China Composites Expo
// exhibitor profile published under its former legal name. The official
// history records the 2025-10-20 rename from Changzhou Qifu Antai Composite
// Materials Technology Co., Ltd. to the current Chinese name. Program,
// qualification, technical and operating-footprint statements remain
// company- or organizer-published and have not been independently verified by
// GetFRP. Official logo downloaded 2026-08-13 from the current site header:
// https://www.atcc.net/static/upload/image/20251023/1761187788790399.png
export const ATCC_SUPPLIER_PROFILE: SupplierListing = {
  id: ATCC_SUPPLIER_ID,
  name: "科泰思创新技术（江苏）股份有限公司",
  nameEn: "Advanced Technik Composite Corp.",
  slug: ATCC_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "航空级碳纤维复合材料结构件",
    "民用飞机复材框、梁、肋、箱体及其他工作包部件",
    "无人机与 eVTOL 中大型全复材机翼、机身及整机结构",
    "碳纤维复合材料回转体与传动轴",
    "一体化复合材料油箱",
    "全复材胶接机翼",
    "复合材料成型与装配工装",
    "结构设计、强度分析、工艺仿真及试验验证服务",
  ],
  productsEn: [
    "Aircraft-grade carbon-fiber composite structures",
    "Composite frames, beams, ribs, boxes and other civil-aircraft work-package parts",
    "Medium and large all-composite wings, fuselages and airframes for UAV and eVTOL programs",
    "Carbon-fiber composite rotating bodies and drive shafts",
    "Integrated composite fuel tanks",
    "Bonded all-composite wings",
    "Composite forming and assembly tooling",
    "Structural design, strength analysis, process simulation and test-validation services",
  ],
  processList: [
    "复合材料结构设计与强度分析",
    "工艺设计、成型仿真及工装设计",
    "预浸料自动铺丝/铺带、连续裁切与手工铺贴",
    "热隔膜、热压罐、液体成型与模压成型",
    "碳纤维复材零件制造、胶接与装配",
    "材料、工艺、结构与产品试验验证",
    "民机工作包转移与低空飞行器结构交付",
  ],
  processListEn: [
    "Composite structural design and strength analysis",
    "Process design, forming simulation and tooling design",
    "Automated prepreg fiber or tape placement, continuous cutting and hand lay-up",
    "Hot-diaphragm, autoclave, liquid-molding and compression-molding processes",
    "Carbon-composite part manufacture, bonding and assembly",
    "Material, process, structural and product test validation",
    "Civil-aircraft work-package transfer and low-altitude airframe delivery",
  ],
  established: 2017,
  verified: false,
  description:
    "科泰思创新技术（江苏）股份有限公司（ATCC）总部位于江苏常州，官网里程碑显示企业于 2017 年 7 月成立，并于 2025 年 10 月 20 日由“常州启赋安泰复合材料科技有限公司”完成股份制更名。中国国际复材展仍以该旧名收录展商。公司官网将核心业务定位为航空级碳纤维复合材料结构件，覆盖民机转包、低空飞行器及高端工业应用，并称 2018 年全资收购德国 COTESA GmbH 和 EC 公司，现形成六基地、两中心及全球销售办公室布局。上述沿革、项目、客户、资质与全球布局均为企业或展会公开陈述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Advanced Technik Composite Corp. (ATCC) is headquartered in Changzhou, Jiangsu. Its official history says the business was established in July 2017 and changed its Chinese legal name from Changzhou Qifu Antai Composite Materials Technology Co., Ltd.—the name still used by the China Composites Expo listing—to 科泰思创新技术（江苏）股份有限公司 on October 20, 2025. The current website focuses the group on aircraft-grade carbon-fiber composite structures for civil-aircraft subcontracting, low-altitude aircraft and high-end industrial applications. It says ATCC fully acquired Germany's COTESA GmbH and EC in 2018 and now operates a six-base, two-center footprint with global sales offices. These history, program, customer, qualification and footprint statements are company- or organizer-published and have not been independently verified by GetFRP.",
  certifications: [
    "官网称德国工厂具备 AS9100、Nadcap、空客与波音认证及 ISO/IEC 17025；上述为集团内特定境外工厂资质，采购方应按实际制造场地核验现行证书、范围与批准状态",
    "官网称科泰思（中国）复合材料有限责任公司具备 AS9100 与空客供应商资质，并推进波音和中国商飞认证；上述为子公司/场地资质，不应自动视为母公司或其他基地资质",
  ],
  certificationsEn: [
    "The official site says the German plants hold AS9100, Nadcap, Airbus and Boeing approvals and ISO/IEC 17025; these are site-specific group qualifications, so buyers should validate current certificates, scope and approval status for the actual manufacturing plant",
    "The official site says Cotesa China Composites Co., Ltd. holds AS9100 and Airbus supplier approval and is pursuing Boeing and COMAC qualification; these are subsidiary and site credentials and must not automatically be attributed to the parent or another base",
  ],
  productsServicesSummary:
    "科泰思创官网提供从结构设计、强度分析、工艺设计与成型仿真、工装设计，到零件制造装配和试验验证的一体化解决方案。技术页面公开自动铺丝/铺带、8.5 m × 1.6 m 铺贴区域、热隔膜成型、碳纤维回转体、一体化油箱及全复材胶接机翼等能力；展会资料则列出商用飞机复材工作包、低空经济和中大型无人机整机结构设计制造。公开参数属于特定设备或案例，不能外推至所有基地和项目。采购方应先确认签约主体、设计责任与实际制造场地，再核验项目保密和出口管制要求、适航与客户批准、AS9100/Nadcap/ISO 17025 证书范围、材料与供应商批准清单、材料许用值、冷冻储存和解冻控制、铺层与固化工艺、工装与计量、NDI、首件检验/AS9102、序列号和批次追溯、CoC、偏差处置、知识产权、产能、工装归属、验收节点、交期及在役支持。",
  productsServicesSummaryEn:
    "ATCC's official website presents an integrated offering from structural design, strength analysis, process design and forming simulation, and tooling design through part manufacture and assembly and test validation. Its technology pages publish automated fiber or tape placement with an 8.5 m × 1.6 m placement area, hot-diaphragm forming, carbon-composite rotating structures, integrated fuel tanks and bonded all-composite wings. The expo profile adds civil-aircraft composite work packages and integrated structural design and manufacture for low-altitude and medium-to-large UAV programs. Published dimensions and performance statements are specific equipment or case claims and must not be generalized across every base or project. Buyers should identify the contracting entity, design authority and actual manufacturing plant, then qualify program confidentiality and export-control requirements; airworthiness and customer approvals; AS9100, Nadcap and ISO 17025 scope; material and approved-supplier lists; allowables; frozen storage and thaw control; lay-up and cure process; tooling and calibration; NDI; first-article inspection and AS9102; serial and batch traceability; CoC; deviation control; intellectual property; capacity; tool ownership; acceptance gates; lead time; and in-service support.",
  ecatalogs: [
    {
      title: "科泰思创官网与集团简介",
      titleEn: "ATCC Official Website & Group Profile",
      description: "现行企业名称、成立年份、核心业务、收购历史和全球布局。",
      descriptionEn:
        "Current company name, establishment, core business, acquisition history and global footprint.",
      url: "https://www.atcc.net/about/",
      format: "Company profile",
    },
    {
      title: "科泰思创里程碑",
      titleEn: "ATCC Corporate Milestones",
      description: "2025 年股份制更名、基地建设、客户批准及项目节点。",
      descriptionEn:
        "Official 2025 legal-name change, site development, customer approvals and program milestones.",
      url: "https://www.atcc.net/history-atcc",
      format: "Corporate history",
    },
    {
      title: "复合材料集成解决方案",
      titleEn: "Integrated Composite Solutions",
      description: "结构、强度、工艺、仿真、工装、制造装配与试验验证入口。",
      descriptionEn:
        "Official directory for structures, strength, process, simulation, tooling, manufacture, assembly and validation.",
      url: "https://www.atcc.net/products_2/",
      format: "Solution directory",
    },
    {
      title: "科泰思创技术创新",
      titleEn: "ATCC Technology Directory",
      description: "自动铺放、热隔膜、回转体、油箱与全复材机翼技术。",
      descriptionEn:
        "Official automated placement, hot-diaphragm, rotating-body, fuel-tank and all-composite-wing capabilities.",
      url: "https://www.atcc.net/news_3/",
      format: "Technology directory",
    },
    {
      title: "集团荣誉资质",
      titleEn: "Group Honors & Qualifications",
      description: "集团及各制造场地公开的认证与客户批准入口，需按主体和基地核验。",
      descriptionEn:
        "Published group and plant certification and customer-approval entry; validate by legal entity and site.",
      url: "https://www.atcc.net/certification/",
      format: "Qualification directory",
    },
    {
      title: "全球产业布局与联系方式",
      titleEn: "Global Footprint & Contacts",
      description: "常州总部、国内基地、德国工厂及海外销售办公室。",
      descriptionEn:
        "Official Changzhou headquarters, Chinese bases, German plants and international sales offices.",
      url: "https://www.atcc.net/global_32.html",
      format: "Site and contact directory",
    },
    {
      title: "中国国际复材展展商资料（企业旧名）",
      titleEn: "China Composites Expo Profile (Former Legal Name)",
      description: "以原名常州启赋安泰发布的成立年份、核心业务、项目和产品类别。",
      descriptionEn:
        "Organizer profile published under the former Changzhou Qifu Antai name, covering establishment, business, programs and categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-3765-91144989.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/atcc-logo.png",
  contactEmail: "marketing@atcc.net",
  contactPhone: "+86 519 8597 9550",
  address: "No. 202 Donghai Road, Xinbei District, Changzhou, Jiangsu, China",
  website: "https://www.atcc.net/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 28,
  viewCount: 0,
  capabilities: [
    "aircraft-grade carbon composite structures",
    "civil-aircraft work packages",
    "UAV and eVTOL composite airframes",
    "composite structural design",
    "strength analysis",
    "forming simulation",
    "automated fiber and tape placement",
    "hot-diaphragm forming",
    "autoclave processing",
    "liquid and compression molding",
    "composite tooling",
    "bonding and assembly",
    "non-destructive inspection and test validation",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
