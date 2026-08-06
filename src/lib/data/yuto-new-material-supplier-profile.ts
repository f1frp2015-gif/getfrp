import type { SupplierListing } from "@/lib/db/schema";

export const YUTO_NEW_MATERIAL_SUPPLIER_ID = "sup-yuto-new-material";
export const YUTO_NEW_MATERIAL_SUPPLIER_SLUG =
  "dongguan-yuto-new-material";

// Curated from YUTO New Material's official company, product, equipment,
// patent and contact pages. The 2022 establishment year and legal entity name
// were cross-checked against public company-registration information. Product,
// customer, process and patent statements remain company-published and
// unverified by GetFRP. The official site also lists a Shenzhen headquarters,
// so buyers should confirm the contracting entity and production location.
// Current official header logo downloaded 2026-08-06 from:
// https://www.szyuto-xc.com/static/upload/image/20240912/1726140846444657.png
export const YUTO_NEW_MATERIAL_SUPPLIER_PROFILE: SupplierListing = {
  id: YUTO_NEW_MATERIAL_SUPPLIER_ID,
  name: "东莞市裕同新材科技有限公司",
  nameEn: "Dongguan YUTO New Material Technology Co., Ltd.",
  slug: YUTO_NEW_MATERIAL_SUPPLIER_SLUG,
  location: "广东东莞",
  locationEn: "Dongguan, Guangdong, China",
  province: "广东",
  category: "manufacturer",
  products: [
    "碳纤维与芳纶纤维手机保护壳",
    "玻纤手机后盖及碳纤维 3C 结构件",
    "无人机碳纤维框架与桨叶",
    "新能源汽车吸能盒、防撞梁及碳纤维结构件",
    "碳纤维运动与医疗器材部件",
    "3K 平纹与斜纹碳纤维预浸料",
  ],
  productsEn: [
    "Carbon-fiber and aramid-fiber phone cases",
    "Glass-fiber phone backs and carbon-composite 3C structures",
    "Carbon-composite UAV frames and propeller blades",
    "New-energy-vehicle crash boxes, bumper beams and carbon-composite structures",
    "Carbon-composite sports and medical-device components",
    "3K plain-weave and twill-weave carbon-fiber prepreg",
  ],
  processList: [
    "精密模具与纹理拓印",
    "淋涂、印刷与注塑",
    "PCM 模压与热压罐成型",
    "高速 CNC 与激光加工",
    "贴膜、PU 贴皮与模组组装",
    "来图开模、试样与批量制造",
  ],
  processListEn: [
    "Precision tooling and texture replication",
    "Flow coating, printing and injection molding",
    "PCM compression molding and autoclave processing",
    "High-speed CNC and laser processing",
    "Film lamination, PU skin application and module assembly",
    "Build-to-drawing tooling, sampling and volume production",
  ],
  established: 2022,
  verified: false,
  description:
    "东莞市裕同新材科技有限公司（裕同新材）是裕同科技集团旗下复合材料业务主体，专注于 3C 与新能源汽车等领域的碳纤维和玻璃纤维结构件。官网公开产品包括手机保护壳、玻纤手机后盖、折叠屏支撑及铰链结构、笔记本电脑结构件、无人机框架与桨叶、汽车吸能盒与防撞梁，以及运动和医疗器材部件；同时列出 3K 平纹和斜纹碳纤维预浸料。",
  descriptionEn:
    "Dongguan YUTO New Material Technology Co., Ltd. is the composite-materials business entity presented by YUTO Technology Group for structural carbon- and glass-fiber applications, with a stated focus on consumer electronics and new-energy vehicles. Its official product directory includes phone cases, glass-fiber phone backs, foldable-device supports and hinge structures, notebook-computer components, UAV frames and propeller blades, automotive crash boxes and bumper beams, sports and medical-device components, plus 3K plain- and twill-weave carbon-fiber prepreg.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "裕同新材官网将产品分为无人机、电子配件、运动器材、医疗、汽车零部件和预浸料/碳布六类。公司介绍页称其一体化研发制造链覆盖精密模具、纹理拓印、淋涂、印刷、注塑、PCM 模压、热压罐、CNC、激光、贴膜、PU 贴皮与模组组装；设备页展示全自动淋布线、激光车间、高速 CNC 加工中心和罐压车间。官网还展示碳纤维片材收卷结构、抗冲击玻纤片材检测机构和玻璃纤维拉条机等专利名称。以上均为企业公开信息，页面未提供足以独立核验的牌号级 TDS、产能、MOQ、交期或现行体系证书。采购方应按具体项目确认原丝与树脂体系、预浸料纤维面密度和树脂含量、铺层与固化制度、尺寸公差、表面处理、力学/环境测试、模具归属、试样与量产节拍、质量体系文件，以及签约主体和实际生产地址。",
  productsServicesSummaryEn:
    "YUTO New Material organizes its published offering into UAV, electronics, sports, medical, automotive and prepreg/carbon-fabric categories. The company profile describes an integrated development and manufacturing chain spanning precision tooling, texture replication, flow coating, printing, injection molding, PCM compression molding, autoclave processing, CNC, laser processing, film lamination, PU skin application and module assembly. Its equipment page shows an automated coating line, laser workshop, high-speed CNC center and autoclave workshop. The site also publishes patent titles concerning carbon-sheet winding, impact-resistant glass-fiber-sheet inspection and a glass-fiber strip machine. These are company-published statements; the public pages do not provide independently verifiable grade-level TDS data, capacity, MOQ, lead time or clearly identified current management-system certificates. Buyers should confirm the selected fiber and resin system, prepreg areal weight and resin content, layup and cure cycle, dimensional tolerances, surface finish, mechanical and environmental validation, tooling ownership, sampling and production cadence, quality-system documents, contracting entity and actual manufacturing address.",
  ecatalogs: [
    {
      title: "裕同新材公司简介",
      titleEn: "YUTO New Material Company Profile",
      description: "企业定位、所属集团、重点应用与一体化工艺链概览。",
      descriptionEn:
        "Official overview of the business, group affiliation, target applications and integrated process chain.",
      url: "https://www.szyuto-xc.com/about_7/",
      format: "Company profile",
    },
    {
      title: "裕同新材产品目录",
      titleEn: "YUTO New Material Product Directory",
      description: "无人机、3C、汽车、运动、医疗和预浸料产品入口。",
      descriptionEn:
        "Official directory for UAV, electronics, automotive, sports, medical and prepreg products.",
      url: "https://www.szyuto-xc.com/list_2/",
      format: "Product directory",
    },
    {
      title: "预浸料与碳布",
      titleEn: "Prepreg and Carbon Fabric",
      description: "3K 平纹与斜纹碳纤维预浸料产品页。",
      descriptionEn:
        "Official product page for 3K plain- and twill-weave carbon-fiber prepreg.",
      url: "https://www.szyuto-xc.com/list_15/",
      format: "Product page",
    },
    {
      title: "生产与加工设备",
      titleEn: "Production and Processing Equipment",
      description: "淋布、激光、高速 CNC 与罐压车间展示。",
      descriptionEn:
        "Official equipment gallery covering coating, laser, high-speed CNC and autoclave operations.",
      url: "https://www.szyuto-xc.com/list_17/",
      format: "Equipment gallery",
    },
    {
      title: "裕同新材专利技术",
      titleEn: "YUTO New Material Patent Technology",
      description: "企业发布的碳纤维与玻纤相关专利名称及图片。",
      descriptionEn:
        "Company-published patent titles and images related to carbon- and glass-fiber processing.",
      url: "https://www.szyuto-xc.com/list_18/",
      format: "Patent gallery",
    },
    {
      title: "裕同新材联系方式",
      titleEn: "YUTO New Material Contact Directory",
      description: "东莞公司与深圳总部的公开地址、电话及邮箱。",
      descriptionEn:
        "Official addresses, phone number and email for the Dongguan company and Shenzhen headquarters.",
      url: "https://www.szyuto-xc.com/contact_6/",
      format: "Contact directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-06T00:00:00.000Z"),
  logo: "/supplier-assets/yuto-new-material-logo.png",
  contactEmail: "zhaicuicui@szyuto.com",
  contactPhone: "+86 134 2396 3387",
  address:
    "No. 32 Lianma Road, Dalingshan Town, Dongguan, Guangdong, China",
  website: "https://www.szyuto-xc.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 24,
  viewCount: 0,
  capabilities: [
    "carbon-composite consumer-electronics structures",
    "glass-fiber phone backs",
    "carbon-composite UAV frames and propeller blades",
    "carbon-composite automotive structures",
    "carbon-composite sports and medical components",
    "3K woven carbon-fiber prepreg",
    "precision tooling and compression molding",
    "autoclave composite processing",
    "CNC and laser processing",
    "surface finishing and module assembly",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-06T00:00:00.000Z"),
  updatedAt: new Date("2026-08-06T00:00:00.000Z"),
};
