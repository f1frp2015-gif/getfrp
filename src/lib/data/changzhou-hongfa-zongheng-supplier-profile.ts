import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_ID =
  "sup-changzhou-hongfa-zongheng";
export const CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_SLUG =
  "changzhou-hongfa-zongheng";

// Curated from PGTEX's active official Chinese and English websites, the
// current China Composites Expo directories and Changzhou government records.
// Older CCE and NEEQ records use the former shareholding name
// 常州市宏发纵横新材料科技股份有限公司; the refreshed official website and
// current 2026 CCE material use 常州市宏发纵横新材料科技有限公司. Both names,
// the PGTEX brand and historical NEEQ code 833719 identify the same supplier,
// so this profile deliberately keeps one canonical record. Capacity, market
// share, overseas-footprint and award statements remain company-published and
// have not been independently verified by GetFRP. Official logo downloaded
// 2026-08-13 from the current website header:
// https://www.pgtex.cn/static/upload/image/20260427/1777276532913444.png
export const CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_ID,
  name: "常州市宏发纵横新材料科技有限公司",
  nameEn: "PGTEX China Co., Ltd.",
  slug: CHANGZHOU_HONGFA_ZONGHENG_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "玻璃纤维多轴向经编织物",
    "碳纤维与碳纤维增强织物",
    "PP 夹芯毡织物",
    "混杂纤维增强织物",
    "粉末粘结织物",
    "芳纶、超高分子量聚乙烯及混杂纤维方案",
    "复材织物裁剪与缝制套件",
  ],
  productsEn: [
    "Glass-fiber multiaxial fabrics",
    "Carbon fiber and carbon-fiber reinforcement fabrics",
    "PP core-mat fabrics",
    "Hybrid-fiber reinforcement fabrics",
    "Powder-bonded fabrics",
    "Aramid, UHMWPE and hybrid-fiber solutions",
    "Cut-and-sewn composite fabric kits",
  ],
  processList: [
    "高性能纤维多轴向经编",
    "玻璃纤维与碳纤维织物制造",
    "混杂纤维结构设计与织造",
    "粉末粘结织物加工",
    "复材织物裁剪、套裁与缝制",
    "应用导向的增强材料定制开发",
  ],
  processListEn: [
    "High-performance-fiber multiaxial warp knitting",
    "Glass- and carbon-fiber fabric manufacturing",
    "Hybrid-fiber architecture design and conversion",
    "Powder-bonded fabric processing",
    "Composite-fabric cutting, kitting and sewing",
    "Application-specific reinforcement development",
  ],
  established: 2003,
  verified: false,
  description:
    "常州市宏发纵横新材料科技有限公司（PGTEX）是位于常州国家高新技术产业开发区的高性能纤维增强材料企业，官网称公司成立于 2003 年，面向玻璃纤维、碳纤维、芳纶、超高分子量聚乙烯和混杂纤维提供经编织物及定制复材增强方案，应用覆盖风电、汽车、船舶、轨道交通、航空与体育用品。当前官网与 2026 年中国国际复材展资料使用“有限公司”，而较早展会和挂牌资料使用“股份有限公司”及证券代码 833719；本页将这些历史名称与 PGTEX 品牌按同一主体去重，不另建重复主页。",
  descriptionEn:
    "PGTEX China Co., Ltd. is a high-performance fiber-reinforcement manufacturer in Changzhou National High-Tech Industrial Development Zone, Jiangsu. Its official website dates the company to 2003 and presents warp-knitted fabrics and tailored reinforcement solutions using glass, carbon, aramid, UHMWPE and hybrid fibers for wind energy, automotive, marine, railway, aviation and sporting-goods applications. The current website and 2026 China Composites Expo material use the Chinese limited-company name, while older expo and NEEQ records use the former joint-stock name and code 833719. This page deduplicates those historical names and the PGTEX brand into one supplier record.",
  certifications: [
    "ISO 9001 质量管理体系证书（官网资质页展示；采购时核验证书主体、范围与有效期）",
    "ISO 14001 环境管理体系证书（官网资质页展示；采购时核验证书主体、范围与有效期）",
    "ISO 45001 职业健康安全管理体系证书（官网资质页展示；采购时核验证书主体、范围与有效期）",
    "官网列示国家高新技术企业、国家制造业单项冠军示范企业及省级研发平台等资质与荣誉；采购方应向主管部门或企业索取现行证明并独立核验",
  ],
  certificationsEn: [
    "ISO 9001 quality-management certificate displayed on the official qualification page; verify the legal entity, scope and validity",
    "ISO 14001 environmental-management certificate displayed on the official qualification page; verify the legal entity, scope and validity",
    "ISO 45001 occupational-health-and-safety certificate displayed on the official qualification page; verify the legal entity, scope and validity",
    "The official site lists national high-tech-enterprise and manufacturing single-champion recognition plus provincial R&D platforms; buyers should obtain current authority or company evidence and verify it independently",
  ],
  productsServicesSummary:
    "PGTEX 官网产品中心列出碳纤维、玻璃纤维多轴向布、PP 夹芯毡、碳纤维增强布、混杂纤维增强布、裁剪缝制及粉末粘结布，并称可围绕玻纤、碳纤、芳纶、UHMWPE 与混杂纤维定制复材增强方案。官网还公布美国与摩洛哥研发生产基地、各类经编材料年产能 50 万吨以及全球风电市场占有率 30% 等口径；这些属于企业自述，采购方应通过当前组织架构、工厂清单、产线与产能记录、客户批准和现场审厂重新核验，不应把集团、规划或历史口径直接当作合同保证。织物 RFQ 应明确纤维种类与牌号、丝束/tex、面密度、UD/双轴/三轴/四轴结构、铺层方向、幅宽与卷长、缝编纱、粉末或粘结剂、浸润剂与树脂相容性、厚度和压实特性、渗透性、搭接/接头及外观缺陷限值、批次物性、含水率、可燃物含量、CoA 和追溯。裁剪套件还应约定图纸版本、套裁、编号、方向、拼接、包装和防错；风电、汽车、轨交或航空项目应追加客户/材料批准、APQP/PPAP、阻燃烟毒、首件、无损检测和变更管理等项目专属要求。询价同时应确认 MOQ、产能分配、交期、包装储存、出口文件、原产地、碳足迹/LCA 边界及不合格处置。",
  productsServicesSummaryEn:
    "PGTEX's official product center lists carbon fiber, glass-fiber multiaxials, PP core-mat fabrics, carbon-fiber reinforcement fabrics, hybrid reinforcements, cut-and-sewn kits and powder-bonded fabrics, and says it tailors reinforcement solutions using glass, carbon, aramid, UHMWPE and hybrid fibers. The website also publishes an R&D and production footprint in the United States and Morocco, 500,000 tonnes of annual warp-knitted-material capacity and a 30% global wind-market share. These are company statements: buyers should revalidate the current organization, plants, lines, capacity records, customer approvals and audit evidence, and should not treat group, planned or historical figures as contractual guarantees. A fabric RFQ should define fiber type and grade, tow or tex, areal weight, UD/biaxial/triaxial/quadriaxial architecture, orientation, width and roll length, stitching yarn, powder or binder, sizing and resin compatibility, thickness and compaction, permeability, overlaps or splices, cosmetic-defect limits, batch properties, moisture, loss on ignition, CoA and traceability. Cut kits also require drawing revision, nesting, part identification, orientation, joins, packaging and mistake-proofing. Wind, automotive, railway or aviation programs should add project-specific customer or material approval, APQP/PPAP, fire-smoke-toxicity, first-article, NDT and change-control requirements. The RFQ should also confirm MOQ, allocated capacity, lead time, packaging and storage, export documents, origin, product-carbon-footprint or LCA boundary, and nonconformance handling.",
  ecatalogs: [
    {
      title: "PGTEX 官方公司介绍",
      titleEn: "Official PGTEX Company Profile",
      description:
        "成立年份、业务定位、材料体系、应用行业、海外布局、研发平台及企业自述规模。",
      descriptionEn:
        "Official founding year, business focus, material systems, applications, overseas footprint, R&D platforms and company-published scale.",
      url: "https://www.pgtex.cn/en/?about_7/",
      format: "Company profile",
    },
    {
      title: "PGTEX 增强材料产品目录",
      titleEn: "PGTEX Reinforcement Product Directory",
      description:
        "多轴向玻纤、碳纤维、混杂织物、PP 夹芯毡、粉末粘结布和裁剪缝制入口。",
      descriptionEn:
        "Official multiaxial glass, carbon, hybrid, PP core-mat, powder-bonded and cut-and-sewn product entries.",
      url: "https://www.pgtex.cn/en/?list_2/",
      format: "Product directory",
    },
    {
      title: "PGTEX 官方资质证书页",
      titleEn: "Official PGTEX Qualification Page",
      description:
        "官网展示的质量、环境、职业健康安全体系证书、荣誉和专利资料；采购时复核现行状态。",
      descriptionEn:
        "Officially displayed quality, environmental and occupational-health certificates, honors and patents; revalidate current status before approval.",
      url: "https://www.pgtex.cn/?about_10/",
      format: "Certification directory",
    },
    {
      title: "PGTEX 官方联系页面",
      titleEn: "Official PGTEX Contact Page",
      description: "英文公司名、常州地址、电话和 info@pgtex.cn 邮箱。",
      descriptionEn:
        "Official English company name, Changzhou address, telephone and info@pgtex.cn email.",
      url: "https://www.pgtex.cn/en/?about_31/",
      format: "Contact page",
    },
    {
      title: "中国国际复材展参展商名录",
      titleEn: "China Composites Expo Exhibitor Directory",
      description:
        "展会发布的中文历史主体名、PGTEX 英文名及 5G12 展位记录。",
      descriptionEn:
        "Organizer-published former Chinese legal name, PGTEX English name and booth 5G12 record.",
      url: "https://www.chinacompositesexpo.com/cn/news.php?c_id=252",
      format: "Exhibitor directory",
    },
    {
      title: "常州市政府企业公开资料",
      titleEn: "Changzhou Government Company Record",
      description:
        "政府公开的企业技术平台、产品与历史产能口径，用于主体和产业能力交叉核验。",
      descriptionEn:
        "Government-published R&D platforms, products and historical capacity statements for entity and capability cross-checking.",
      url: "https://zg.changzhou.gov.cn/html/czzg/2021/CIBLKPQE_0220/54029.html",
      format: "Government record",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-hongfa-zongheng-logo.png",
  contactEmail: "info@pgtex.cn",
  contactPhone: "+86 519 8343 2588",
  address:
    "No. 28 Lijiang Road, Xixiashu Town, Xinbei District, Changzhou, Jiangsu 213135, China",
  website: "https://www.pgtex.cn/",
  enterpriseId: null,
  scaleTier: "XL",
  brandPriority: 30,
  viewCount: 0,
  capabilities: [
    "glass-fiber multiaxial fabrics",
    "carbon fiber",
    "carbon-fiber reinforcement fabrics",
    "aramid-fiber reinforcement",
    "UHMWPE-fiber reinforcement",
    "hybrid-fiber reinforcement fabrics",
    "PP core-mat fabrics",
    "powder-bonded fabrics",
    "multiaxial warp knitting",
    "composite-fabric cutting and kitting",
    "composite-fabric sewing",
    "wind-blade reinforcements",
    "application-specific fabric development",
  ],
  standardsSupported: ["ISO 9001", "ISO 14001", "ISO 45001"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
