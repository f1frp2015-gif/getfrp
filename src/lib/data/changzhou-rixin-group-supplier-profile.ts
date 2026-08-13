import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_RIXIN_GROUP_SUPPLIER_ID =
  "sup-changzhou-rixin-group";
export const CHANGZHOU_RIXIN_GROUP_SUPPLIER_SLUG =
  "changzhou-rixin-group";

// Curated from the group's official English website and the China Composites
// Expo exhibitor profile. The official site is branded for Changzhou Rixin
// Resin Co., Ltd. and identifies that legal company in the footer, while its
// company profile presents Changzhou Rixin Group and its member businesses.
// Group structure, capacity, qualification and product statements remain
// company- or organizer-published and have not been independently verified by
// GetFRP. Official logo downloaded 2026-08-13 from the current site header:
// https://en.czrixin.com/uploadfiles/103.120.83.63/webid1739/logo/202011/5fa3a64b47140.png
export const CHANGZHOU_RIXIN_GROUP_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_RIXIN_GROUP_SUPPLIER_ID,
  name: "常州日新集团",
  nameEn: "Changzhou Rixin Group",
  slug: CHANGZHOU_RIXIN_GROUP_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "resin",
  products: [
    "不饱和聚酯树脂",
    "乙烯基酯树脂",
    "SMC 与 BMC 模塑料",
    "胶衣与高性能色浆",
    "玻璃纤维毡、织物、多轴向织物与粗纱",
    "胶粘剂与低收缩添加剂",
    "FRP 辅助材料与脱模剂",
    "SMC 成套生产设备",
  ],
  productsEn: [
    "Unsaturated polyester resins",
    "Vinyl ester resins",
    "SMC and BMC molding compounds",
    "Gelcoats and high-performance pigment pastes",
    "Glass-fiber mats, woven fabrics, multiaxials and rovings",
    "Adhesives and low-shrink additives",
    "FRP auxiliaries and release agents",
    "Complete SMC production equipment",
  ],
  processList: [
    "不饱和聚酯树脂生产与配方开发",
    "乙烯基酯树脂与胶衣生产",
    "SMC/BMC 配混与片材生产",
    "SMC 机组设计与成套设备供应",
    "玻纤及复材辅助材料配套",
    "上海应用研发中心技术支持",
    "复材原材料一站式供应与应用服务",
  ],
  processListEn: [
    "Unsaturated polyester resin production and formulation development",
    "Vinyl ester resin and gelcoat production",
    "SMC/BMC compounding and sheet production",
    "SMC line design and complete-equipment supply",
    "Glass-fiber and composite-auxiliary sourcing",
    "Application support through the Shanghai R&D center",
    "One-stop composite raw-material supply and application service",
  ],
  established: 1996,
  verified: false,
  description:
    "常州日新集团位于江苏常州金坛。集团英文官网由常州日新树脂有限公司运营并在页脚标明该法定主体，同时以“Changzhou Rixin Group”介绍集团业务。官网称集团创立于 1996 年，面向复合材料市场供应不饱和聚酯树脂、乙烯基酯树脂、胶衣、SMC/BMC、玻璃纤维及辅助材料，并列出常州日新树脂、日新化学、日新模塑、厦门日新复材、上海沃顿及上海研发中心等成员或业务平台。中国国际复材展亦以“常州日新集团”单独收录该展商。集团结构、产能、资质及市场地位均为企业或展会公开陈述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Changzhou Rixin Group is based in Jintan, Changzhou, Jiangsu. Its English website is operated by and identifies Changzhou Rixin Resin Co., Ltd. in the footer while presenting the wider business as Changzhou Rixin Group. The official site says the group was founded in 1996 and supplies unsaturated polyester and vinyl ester resins, gelcoats, SMC/BMC compounds, glass fiber and auxiliary materials to composite markets. Its company profile lists Changzhou Rixin Resin, Rixin Chemical, Rixin Molding Technology, Xiamen Rixin Composite Materials, Shanghai Wodow and a Shanghai R&D center among the member businesses or operating platforms. The China Composites Expo separately lists the exhibitor as Changzhou Rixin Group. Group structure, capacity, qualification and market-position statements are company- or organizer-published and have not been independently verified by GetFRP.",
  certifications: [
    "中国国际复材展资料称集团于 2015 年被评为高新技术企业；官网另设荣誉资质图片库，但公开页面未提供可机器核对的证书名称、编号、范围或有效期，采购方应向实际签约与生产主体索取现行证书",
  ],
  certificationsEn: [
    "The China Composites Expo profile says the group was recognized as a high-tech enterprise in 2015. The official site also provides an image-based certificate gallery without machine-readable standard names, numbers, scope or validity dates; buyers should obtain current certificates from the actual contracting and manufacturing entity",
  ],
  productsServicesSummary:
    "日新集团官网按 UPR、SMC/BMC、胶衣、乙烯基酯树脂、玻璃纤维和其他辅助材料组织产品，并公开风电、轨交、汽车、船艇、工程机械和卫浴等应用入口。集团简介称日新树脂不饱和聚酯树脂年产能 10 万吨、日新化学胶衣年产能 5,000 吨、日新模塑 SMC/BMC 年产能 3 万吨、上海沃顿乙烯基酯树脂年产能 5,000 吨；展会资料中的 SMC 产能口径为 2 万吨，采购时应以具体法人、工厂与最新审厂资料为准。询价前应先确认签约主体、实际生产场地和产品牌号，再核验 TDS/SDS/批次 CoA、树脂类型与反应单体、黏度、胶凝时间、酸值、固含、颜色、放热峰、收缩、储存温度和保质期；SMC/BMC 还应确认纤维含量、密度、模压窗口、表面等级和阻燃/电气要求；同时核对认证范围、法规与客户批准、原料追溯、留样、包装、危化品运输、MOQ、交期、样品试模及偏差处理。",
  productsServicesSummaryEn:
    "Rixin's official website organizes the portfolio into UPR, SMC/BMC, gelcoats, vinyl ester resins, glass fiber and other auxiliary materials, with application directories for wind energy, rail, automotive, marine, construction machinery and sanitary products. The group profile publishes annual capacities of 100,000 tonnes for unsaturated polyester resin at Rixin Resin, 5,000 tonnes for gelcoat at Rixin Chemical, 30,000 tonnes for SMC/BMC at Rixin Molding Technology and 5,000 tonnes for vinyl ester resin at Shanghai Wodow. The expo profile instead cites 20,000 tonnes for SMC, so buyers should validate the latest figures by legal entity, plant and audit evidence. Before RFQ, identify the contracting entity, actual production site and exact grade, then qualify TDS, SDS and lot CoA; resin chemistry and reactive monomer; viscosity; gel time; acid value; solids; color; exotherm; shrinkage; storage temperature and shelf life. For SMC/BMC, also confirm fiber content, density, molding window, surface class and flame-retardant or electrical requirements. Validate certificate scope, regulatory and customer approvals, raw-material traceability, retained samples, packaging, dangerous-goods transport, MOQ, lead time, trial molding and deviation control.",
  ecatalogs: [
    {
      title: "日新集团与成员企业简介",
      titleEn: "Rixin Group & Member Company Profile",
      description: "集团沿革、成员企业、业务分工、研发平台与公开产能。",
      descriptionEn:
        "Official group history, member businesses, operating roles, R&D platform and published capacities.",
      url: "https://en.czrixin.com/othercate/othername/Company%20Profile.html",
      format: "Company profile",
    },
    {
      title: "日新产品目录",
      titleEn: "Rixin Product Directory",
      description: "UPR、SMC/BMC、胶衣、乙烯基酯、玻纤与辅助材料入口。",
      descriptionEn:
        "Official UPR, SMC/BMC, gelcoat, vinyl ester, glass-fiber and auxiliary-material directory.",
      url: "https://en.czrixin.com/product.html",
      format: "Product directory",
    },
    {
      title: "生产与研发设备",
      titleEn: "Production & R&D Equipment",
      description: "集团官网公开的生产设备和研发设备图片目录。",
      descriptionEn:
        "Official image directory for production and research equipment.",
      url: "https://en.czrixin.com/othercate/othername/Device%20Display.html",
      format: "Equipment gallery",
    },
    {
      title: "荣誉资质",
      titleEn: "Certificates & Honors",
      description: "官网资质图片入口；需向实际主体索取可核验证书。",
      descriptionEn:
        "Official image gallery; request verifiable current certificates from the relevant entity and plant.",
      url: "https://en.czrixin.com/othercate/othername/Certificate.html",
      format: "Qualification gallery",
    },
    {
      title: "应用领域",
      titleEn: "Application Directory",
      description: "风电、轨交、汽车、船艇、工程机械与卫浴应用。",
      descriptionEn:
        "Official wind, rail, automotive, marine, construction-machinery and sanitary application directory.",
      url: "https://en.czrixin.com/cases.html",
      format: "Application directory",
    },
    {
      title: "中国国际复材展展商资料",
      titleEn: "China Composites Expo Exhibitor Profile",
      description: "集团成员、产品、公开产能与产品类别。",
      descriptionEn:
        "Organizer profile covering group members, products, published capacity and exhibitor categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-1644-81000800.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-rixin-group-logo.png",
  contactEmail: "Jiang.du@czrixin.com",
  contactPhone: "+86 138 2071 5885",
  address:
    "No. 68, Xiaohekou, Xiangtou Village, Zhulin Town, Jintan District, Changzhou, Jiangsu, China",
  website: "https://en.czrixin.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 27,
  viewCount: 0,
  capabilities: [
    "unsaturated polyester resin",
    "vinyl ester resin",
    "gelcoat and pigment paste",
    "SMC and BMC compounding",
    "glass-fiber materials",
    "FRP auxiliaries and release agents",
    "SMC production equipment",
    "composite application development",
    "one-stop composite raw-material supply",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
