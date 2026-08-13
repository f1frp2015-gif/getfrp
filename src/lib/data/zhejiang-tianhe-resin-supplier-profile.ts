import type { SupplierListing } from "@/lib/db/schema";

export const ZHEJIANG_TIANHE_RESIN_SUPPLIER_ID =
  "sup-zhejiang-tianhe-resin";
export const ZHEJIANG_TIANHE_RESIN_SUPPLIER_SLUG =
  "zhejiang-tianhe-resin";

// Curated from Zhejiang Tianhe Resin's official Chinese and English company,
// history, product, honors and contact pages. Company-published capacity,
// export, product-performance and certification statements remain unverified
// by GetFRP. The locally stored wordmark is the current English-header asset:
// https://omo-oss-image1.thefastimg.com/portal-saas/pg2024041918075517428/cms/image/6b056a20-2b4c-4908-a06b-98c1762d3626.png?vf=B7gH3s
export const ZHEJIANG_TIANHE_RESIN_SUPPLIER_PROFILE: SupplierListing = {
  id: ZHEJIANG_TIANHE_RESIN_SUPPLIER_ID,
  name: "浙江天和树脂有限公司",
  nameEn: "Zhejiang Tianhe Resin Co., Ltd.",
  slug: ZHEJIANG_TIANHE_RESIN_SUPPLIER_SLUG,
  location: "浙江台州临海",
  locationEn: "Linhai, Taizhou, Zhejiang, China",
  province: "浙江",
  category: "resin",
  products: [
    "不饱和聚酯树脂",
    "岩板复合胶与岩板专用胶",
    "云石胶",
    "环氧干挂胶与环氧 AB 胶",
    "建筑加固、流体、水晶、石材面胶及石英石胶",
  ],
  productsEn: [
    "Unsaturated polyester resins",
    "Sintered-stone composite and specialty adhesives",
    "Marble glue and stone mastic",
    "Epoxy dry-hanging and two-component AB adhesives",
    "Building-reinforcement, fluid, crystal, stone-surface and quartz-stone adhesives",
  ],
  processList: [
    "树脂研发、配方与生产",
    "石材胶粘剂研发与制造",
    "DCS 自动化生产控制",
    "产品检测与应用开发",
    "出口及定制包装供货",
  ],
  processListEn: [
    "Resin R&D, formulation and production",
    "Stone-adhesive development and manufacturing",
    "DCS-controlled production",
    "Product testing and application development",
    "Export supply and customized packaging",
  ],
  // The official history page dates establishment of the Zhejiang Tianhe
  // Resin factory to 1996. The affiliated Shanghai New Tianhe Group states a
  // separate 1985 founding year on the corporate homepage.
  established: 1996,
  verified: false,
  description:
    "浙江天和树脂有限公司位于浙江省台州市临海市，隶属于上海新天和实业集团。官网发展历程将浙江天和树脂工厂开工年份列为 1996 年，并称 2013 年产能扩至 13.5 万吨。公司官网将其定位为集研发、生产和贸易于一体的不饱和聚酯树脂与石材化工企业，公开产品包括岩板复合胶、云石胶、环氧干挂胶、建筑加固胶、流体胶、水晶胶、石材面胶和石英石胶等；英文公司资料称其树脂产品已出口至 60 个国家和地区。上述产能、出口与产品信息均为企业公开陈述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Zhejiang Tianhe Resin Co., Ltd. is based in Linhai, Taizhou, Zhejiang and is affiliated with Shanghai New Tianhe Group. Its official history dates the Zhejiang Tianhe Resin factory to 1996 and states that capacity expanded to 135,000 tonnes in 2013. The company presents itself as an R&D, manufacturing and trading business for unsaturated polyester resins and stone chemicals. Its published adhesive range includes sintered-stone composite adhesive, marble glue, epoxy dry-hanging adhesive, building-reinforcement adhesive, fluid glue, crystal glue, stone-surface glue and quartz-stone glue. The English company profile says Tianhe resin products have reached 60 countries and regions. These capacity, export and product statements are company-published and have not been independently verified by GetFRP.",
  certifications: [
    "官网荣誉页展示历史 ISO 9001:2008 证书；现行证书、有效期与范围待核验",
    "官网荣誉页展示历史 ISO 14001:2004 证书；现行证书、有效期与范围待核验",
    "官网荣誉页展示历史 ISO 10012:2003 与 OHSAS 18001:1999 证书；当前状态待核验",
  ],
  certificationsEn: [
    "Legacy ISO 9001:2008 certificate shown on the official honors page; current certificate, validity and scope to be confirmed",
    "Legacy ISO 14001:2004 certificate shown on the official honors page; current certificate, validity and scope to be confirmed",
    "Legacy ISO 10012:2003 and OHSAS 18001:1999 certificates shown on the official honors page; current status to be confirmed",
  ],
  productsServicesSummary:
    "天和官网公开不饱和聚酯树脂及石材胶粘剂的研发制造能力，并称采用 DCS 自动化控制、配套生产与检测设备。英文产品目录覆盖岩板复合胶、岩板专用胶、多个云石胶品牌以及环氧干挂 AB 胶；单品页公开部分配比、操作时间、剪切强度、包装、储存期和 JC/T 989、JC/T 887 等产品级试验或标准信息。不同页面引用的标准年份与管理体系版本并不完全一致，采购方应针对具体牌号核验最新 TDS/SDS、树脂化学体系、主剂/固化剂比例、凝胶或适用期、剪切强度及基材、VOC、施工温度、储存期、包装、MOQ、交期、私牌要求和现行证书。",
  productsServicesSummaryEn:
    "Tianhe's official sites publish R&D and manufacturing coverage for unsaturated polyester resins and stone adhesives, together with DCS production control and in-house production and testing equipment. The English product directory covers sintered-stone composite and specialty adhesives, multiple marble-glue brands, and two-component epoxy dry-hanging adhesives. Individual product pages publish selected mix ratios, working times, shear strengths, packaging, shelf life and product-level references to JC/T 989 or JC/T 887. Standard editions and management-system versions are not consistent across all pages. Buyers should validate the current grade-specific TDS/SDS, resin chemistry, resin-to-hardener ratio, gel or pot life, shear strength and substrates, VOC, application temperature, shelf life, packaging, MOQ, lead time, private-label requirements and current certificates before approval.",
  ecatalogs: [
    {
      title: "天和树脂英文公司简介",
      titleEn: "Tianhe Resin Company Profile",
      description: "公司、集团化工布局、树脂与石材胶粘剂业务及出口陈述。",
      descriptionEn:
        "Official company overview covering the group chemical footprint, resin and stone-adhesive businesses, and export statements.",
      url: "https://www.marbleglue.com/about_us/1.html",
      format: "Company profile",
    },
    {
      title: "石材胶粘剂产品目录",
      titleEn: "Stone Adhesive Product Directory",
      description: "岩板胶、云石胶、环氧干挂胶和相关石材胶粘剂产品入口。",
      descriptionEn:
        "Official directory for sintered-stone adhesives, marble glue, epoxy dry-hanging adhesives and related products.",
      url: "https://www.marbleglue.com/Product_List/Products.html",
      format: "Product directory",
    },
    {
      title: "岩板复合胶技术页",
      titleEn: "Sintered-stone Composite Adhesive Technical Page",
      description: "配比、操作时间、剪切强度、包装、储存及产品级测试信息。",
      descriptionEn:
        "Supplier-published mix ratio, working time, shear strength, packaging, storage and product-level test information.",
      url: "https://www.marbleglue.com/Product_detail/84.html",
      format: "Technical product page",
    },
    {
      title: "天和树脂发展历程",
      titleEn: "Tianhe Resin Development History",
      description: "浙江工厂 1996 年开工及企业公开产能扩张时间线。",
      descriptionEn:
        "Official timeline covering the Zhejiang factory's 1996 start and company-published capacity expansions.",
      url: "https://www.marbleglue.com/History.html",
      format: "Company timeline",
    },
    {
      title: "天和树脂历史证书页",
      titleEn: "Tianhe Resin Legacy Certificate Page",
      description: "官网展示的旧版管理体系证书；现行有效性与范围需另行核验。",
      descriptionEn:
        "Official display of legacy management-system certificates; current validity and scope require separate confirmation.",
      url: "https://www.marbleglue.com/Honor.html",
      format: "Legacy certificate archive",
    },
    {
      title: "天和树脂联系方式",
      titleEn: "Tianhe Resin Contact Directory",
      description: "临海头门港地址、电话、邮箱及在线留言入口。",
      descriptionEn:
        "Official Linhai Toumen Port address, telephone, email and inquiry channel.",
      url: "https://www.marbleglue.com/Contacts.html",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-12T00:00:00.000Z"),
  logo: "/supplier-assets/zhejiang-tianhe-resin-logo.png",
  contactEmail: "1812@vip.163.com",
  contactPhone: "+86 576 8589 0909",
  address:
    "Toumen Port Economic Development Zone, Linhai, Taizhou, Zhejiang, China",
  website: "https://www.marbleglue.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 24,
  viewCount: 0,
  capabilities: [
    "unsaturated polyester resin",
    "resin formulation",
    "sintered-stone adhesive",
    "marble glue",
    "stone mastic",
    "epoxy dry-hanging adhesive",
    "two-component epoxy adhesive",
    "building-reinforcement adhesive",
    "quartz-stone adhesive",
    "customized packaging",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-12T00:00:00.000Z"),
  updatedAt: new Date("2026-08-12T00:00:00.000Z"),
};
