import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_PANWANG_SUPPLIER_ID = "sup-changzhou-panwang";
export const CHANGZHOU_PANWANG_SUPPLIER_SLUG =
  "changzhou-panwang-frp-composite-materials";

// Curated from Changzhou Panwang's official company, product and contact
// pages. The establishment date, capacity, product scope and contact details
// are company-published and have not been independently verified by GetFRP.
// The locally stored official logo is the current header asset served at:
// http://www.pwblgfhcl.com/UploadFiles/f/20190413102028-88131.png
export const CHANGZHOU_PANWANG_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_PANWANG_SUPPLIER_ID,
  name: "常州攀旺玻璃钢复合材料有限公司",
  nameEn: "Changzhou Panwang Fiberglass Composite Materials Co., Ltd.",
  slug: CHANGZHOU_PANWANG_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "additive",
  products: [
    "不饱和聚酯树脂用促进剂",
    "复合材料固化剂与过氧化物体系",
    "过氧化苯甲酰与过氧化苯甲酸叔丁酯",
    "玻璃钢用颜料糊",
    "模压与拉挤用脱模剂",
    "环己酮与苯胺等配套化工原料",
  ],
  productsEn: [
    "Accelerators and promoters for unsaturated polyester resins",
    "Composite curing agents and organic-peroxide systems",
    "Benzoyl peroxide and tert-butyl peroxybenzoate",
    "Pigment pastes for FRP manufacturing",
    "Release agents for compression molding and pultrusion",
    "Cyclohexanone, aniline and related chemical raw materials",
  ],
  processList: [
    "不饱和聚酯树脂配套辅料生产",
    "促进剂配方与预促进体系定制",
    "复合材料固化体系供货",
    "颜料糊配制",
    "模压与拉挤脱模体系供货",
  ],
  processListEn: [
    "Production of auxiliaries for unsaturated polyester resin",
    "Promoter formulation and custom pre-accelerated systems",
    "Composite curing-system supply",
    "Pigment-paste formulation",
    "Release-system supply for compression molding and pultrusion",
  ],
  established: 2005,
  verified: false,
  description:
    "常州攀旺玻璃钢复合材料有限公司位于江苏常州，官网称公司成立于 2005 年 1 月，拥有 3,000 吨不饱和聚酯树脂配套辅料生产能力。企业公开介绍重点提及固化后制品呈透明色的促进剂，并称可为树脂生产企业定制预促进体系。官网产品目录还列出固化剂、过氧化苯甲酰、过氧化苯甲酸叔丁酯、环己酮、颜料糊、模压与拉挤用脱模剂及苯胺等产品。上述产能与产品信息均为企业公开陈述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Changzhou Panwang Fiberglass Composite Materials Co., Ltd. is based in Changzhou, Jiangsu. Its official website states that the company began in January 2005 and has 3,000 tonnes of production capacity for auxiliaries used with unsaturated polyester resin. Panwang highlights accelerators intended to preserve a transparent appearance after resin cure and says it can formulate custom pre-accelerated systems for resin producers. Its published directory also lists curing agents, benzoyl peroxide, tert-butyl peroxybenzoate, cyclohexanone, pigment pastes, release agents for compression molding and pultrusion, and aniline. These capacity and product statements are company-published and have not been independently verified by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "攀旺官网公开了促进剂、固化剂、过氧化苯甲酰、环己酮、叔丁酯、颜料糊、脱模剂和苯胺八类产品，并展示叔丁酯固化剂、过氧化苯甲酰固化剂、过氧化苯甲酸叔丁酯、高含量叔丁酯以及模压拉挤脱模剂等产品入口。公开页面未提供可直接用于采购批准的完整牌号级 TDS、SDS、运输分类或现行管理体系证书。涉及有机过氧化物及其他化工原料时，采购方应针对具体牌号核验化学名称与 CAS、有效含量或有效氧、稀释剂、凝胶或固化窗口、储存温度与保质期、SADT（如适用）、相容性、危险品分类与 UN 编号、包装、批次 CoA、现行 SDS、生产及危化品相关资质、目的市场法规、MOQ 和交期；促进剂与过氧化物还应由供应商书面确认分开储运和目标树脂体系的配套方案。",
  productsServicesSummaryEn:
    "Panwang's official site publishes eight product categories: accelerators, curing agents, benzoyl peroxide, cyclohexanone, tert-butyl peroxide products, pigment pastes, release agents and aniline. Product entries include tert-butyl peroxybenzoate curing agents, benzoyl peroxide curing agents, high-content tert-butyl peroxide products and release agents for compression molding or pultrusion. The public pages do not provide complete grade-level TDS, SDS, transport classifications or current management-system certificates suitable for procurement approval. For organic peroxides and other chemical raw materials, buyers should validate the exact chemical identity and CAS number, active content or active oxygen, diluent, gel or cure window, storage temperature and shelf life, SADT where applicable, compatibility, dangerous-goods class and UN number, packaging, lot CoA, current SDS, manufacturing and hazardous-chemical authorizations, destination-market compliance, MOQ and lead time. The supplier should also confirm in writing how accelerators and peroxides are segregated in storage and transport and matched to the target resin system.",
  ecatalogs: [
    {
      title: "攀旺公司介绍",
      titleEn: "Panwang Company Profile",
      description: "企业成立时间、公开产能、促进剂特点与定制能力。",
      descriptionEn:
        "Official company overview covering the published start date, capacity, accelerator positioning and formulation service.",
      url: "http://www.pwblgfhcl.com/about",
      format: "Company profile",
    },
    {
      title: "攀旺产品目录",
      titleEn: "Panwang Product Directory",
      description: "促进剂、固化剂、过氧化物、颜料糊、脱模剂及配套化工原料。",
      descriptionEn:
        "Official directory for accelerators, curing agents, peroxide products, pigment pastes, release agents and related chemicals.",
      url: "http://www.pwblgfhcl.com/tileproduct",
      format: "Product directory",
    },
    {
      title: "攀旺联系方式",
      titleEn: "Panwang Contact Details",
      description: "常州地址、联系电话、邮箱与在线留言入口。",
      descriptionEn:
        "Official Changzhou address, telephone numbers, email and inquiry channel.",
      url: "http://www.pwblgfhcl.com/contact",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-12T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-panwang-logo.png",
  contactEmail: "489461198@qq.com",
  contactPhone: "+86 135 8456 8290",
  address:
    "Longgang 3rd Road, Weitang Chemical Industrial Park, Xinbei District, Changzhou, Jiangsu, China",
  website: "http://www.pwblgfhcl.com/",
  enterpriseId: null,
  scaleTier: "S",
  brandPriority: 4,
  viewCount: 0,
  capabilities: [
    "unsaturated polyester resin accelerators",
    "resin promoters",
    "custom pre-accelerated systems",
    "composite curing agents",
    "benzoyl peroxide",
    "tert-butyl peroxybenzoate",
    "pigment paste",
    "compression-molding release agent",
    "pultrusion release agent",
    "FRP chemical auxiliaries",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-12T00:00:00.000Z"),
  updatedAt: new Date("2026-08-12T00:00:00.000Z"),
};
