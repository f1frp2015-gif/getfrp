import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_XINGAO_SUPPLIER_ID =
  "sup-changzhou-xingao-insulation-materials";
export const CHANGZHOU_XINGAO_SUPPLIER_SLUG =
  "changzhou-xingao-insulation-materials";

// Curated from the exact mainland-China company's current English and Chinese
// websites and its China Composites Expo exhibitor page. Product styles,
// export reach, certifications, plant size, equipment count and output remain
// company- or organizer-published claims and have not been independently
// verified by GetFRP. The official pages currently publish inconsistent plant
// and capacity figures, so this profile deliberately assigns no scale tier and
// tells buyers to validate capacity against a dated quotation and audit. The
// locally stored official logo was downloaded on 2026-08-13 from the current
// website header asset:
// https://inrorwxhklmlll5p.ldycdn.com/cloud/liBpoKqnliSRjjrpiormiq/logo-top.png
export const CHANGZHOU_XINGAO_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_XINGAO_SUPPLIER_ID,
  name: "常州市新高绝缘材料有限公司",
  nameEn: "Changzhou Xingao Insulation Materials Co., Ltd.",
  slug: CHANGZHOU_XINGAO_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "电子级玻璃纤维布 7628/7628-L、7637、2116、1080、106、7642",
    "云母带用玻璃纤维布 771、792、EW25–EW45",
    "工业级玻璃纤维布 3732、EW60–EW200、EWX200",
    "定制克重、厚度、经纬密度、幅宽及织法的无碱玻纤布",
  ],
  productsEn: [
    "Electronic-grade fiberglass cloth styles 7628/7628-L, 7637, 2116, 1080, 106 and 7642",
    "Fiberglass cloth for mica tape in styles 771, 792 and EW25–EW45",
    "Industrial-grade fiberglass cloth in styles 3732, EW60–EW200 and EWX200",
    "Custom E-glass fabrics by areal weight, thickness, construction, width and weave",
  ],
  processList: [
    "无碱玻璃纤维纱喷气织造",
    "电子级玻纤布定制与供货",
    "云母带基布定制与供货",
    "工业玻纤布定制与供货",
    "布重、厚度、经纬密度与幅宽检测",
  ],
  processListEn: [
    "Air-jet weaving of E-glass yarn",
    "Electronic-grade fiberglass-cloth customization and supply",
    "Mica-tape carrier-fabric customization and supply",
    "Industrial fiberglass-cloth customization and supply",
    "Areal-weight, thickness, construction and width inspection",
  ],
  established: 2000,
  verified: false,
  description:
    "常州市新高绝缘材料有限公司位于江苏常州，官网与中国国际复材展均使用同一中英文主体。公司官网称企业成立于 2000 年，以无碱玻璃纤维纱为原料生产和定制玻璃纤维布，公开产品分为电子级玻纤布、云母带用玻纤布和工业级玻纤布；展商资料还列出胶带、碳纤维复合材料、体育器材和电子等应用。官网称产品出口欧洲、美洲、东南亚等 20 多个国家或地区，但该范围及具体客户资格尚未经 GetFRP 独立核验。官网不同版块对厂房面积、设备数量和日产量的表述不一致，因此本页不据此判定企业规模，买方应以现场审核、设备清单、近期产能负荷和订单技术协议为准。",
  descriptionEn:
    "Changzhou Xingao Insulation Materials Co., Ltd. is based in Changzhou, Jiangsu, and its official website and China Composites Expo profile identify the same Chinese and English legal supplier. The company dates itself to 2000 and says it weaves and customizes fiberglass cloth from E-glass yarn. Its published range is organized into electronic-grade cloth, mica-tape fiberglass cloth and industrial fiberglass cloth; the expo profile also mentions tape, carbon-fiber composites, sporting goods and electronics applications. The website says products are exported to more than 20 countries or regions across Europe, the Americas and Southeast Asia, but this reach and customer approvals have not been independently verified by GetFRP. Different official-page sections give inconsistent plant-area, equipment-count and daily-output figures, so this profile does not infer a scale tier; buyers should rely on a site audit, equipment list, current loading and the order-specific technical agreement.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网发布的电子级系列包括 7628/7628-L、7637、2116、1080、106 和 7642，云母带系列包括 771、792、EW25、EW30、EW32、EW35、EW40、EW45，工业系列包括 3732、EW60、EW100、EW140、EW200 和 EWX200，并给出部分产品的盎司重/克重、经纬密度、厚度、幅宽和织法。RFQ 不应只写“型号”：应逐项锁定玻璃成分与纱线来源/牌号、经纬纱支或 tex、浸润剂及表面处理、织法、经纬密度、克重和公差、厚度、有效幅宽、卷长、接头、布边、弓纬/斜纬、断经断纬、污染与含水率、灼烧减量、拉伸和电气性能，以及与树脂、胶黏剂或云母带工艺的相容性。电子布还需确认离子污染/碱含量、厚度和克重均匀性、层压树脂及压制工艺适配，并由买方指定适用 IPC 或客户规范；云母带基布需明确胶黏剂/树脂体系、耐热等级、介电要求、复合及分切运行性；工业布则按涂层、使用温度和终端工况补充要求。官网展示 ISO、SGS、RoHS、TÜV 等文字或证书图片，但公开页面没有足够的证书编号、申请人/制造地址、范围、标准、样品和有效期信息，本页不把它们录入已支持标准；采购前应取得完整现行证书和报告并向签发机构核验。部分单品页发布 10,000 米 MOQ 和约 15 天批量交期，这不是全系列承诺。订单应约定封样、首件、批次 CoA、检验方法、留样与追溯、包装防潮、标签、装柜方式、交期和索赔规则。",
  productsServicesSummaryEn:
    "The official electronic range lists styles 7628/7628-L, 7637, 2116, 1080, 106 and 7642; mica-tape fabrics include 771, 792, EW25, EW30, EW32, EW35, EW40 and EW45; industrial fabrics include 3732, EW60, EW100, EW140, EW200 and EWX200. Selected pages publish ounce or gram weight, warp/weft density, thickness, width and weave. An RFQ should not rely on a style number alone: lock the glass composition and yarn maker/grade, warp and weft count or tex, sizing and finish, weave, construction, areal weight and tolerance, thickness, usable width, roll length, splices, selvage, bow/skew, broken ends or picks, contamination and moisture, loss on ignition, tensile and electrical properties, plus compatibility with the resin, adhesive or mica-tape process. Electronic cloth also needs ionic-contamination or alkali limits, thickness/weight uniformity, laminate-resin and press-cycle compatibility, and a buyer-specified IPC or customer specification. Mica-tape cloth needs adhesive/resin, thermal-class, dielectric, laminating and slitting requirements. Industrial cloth needs its coating, temperature and end-use conditions. Official pages display ISO, SGS, RoHS and TUV wording or certificate images, but do not expose enough certificate number, applicant/manufacturing address, scope, standard, sample and validity detail to record a supported standard here; obtain current complete documents and validate them with the issuer before qualification. Some individual product pages publish a 10,000 m MOQ and about 15 days for bulk delivery, which should not be treated as a range-wide commitment. The order should define an approved sample or first article, lot CoA, inspection methods, retained samples and traceability, moisture-protective packing, labels, container loading, lead time and claim handling.",
  ecatalogs: [
    {
      title: "新高绝缘英文官网与公司介绍",
      titleEn: "Xingao Official Website & Company Profile",
      description: "企业主体、2000 年成立信息、产品方向、出口陈述和联系方式。",
      descriptionEn:
        "Official identity, establishment, product focus, export statement and contact details.",
      url: "https://www.czxingao.com/aboutus.html",
      format: "Company profile",
    },
    {
      title: "新高绝缘产品总览",
      titleEn: "Xingao Product Overview",
      description: "电子级、云母带用和工业级玻璃纤维布产品入口。",
      descriptionEn:
        "Official electronic, mica-tape and industrial fiberglass-cloth directory.",
      url: "https://www.czxingao.com/products.html",
      format: "Product directory",
    },
    {
      title: "电子级玻璃纤维布目录",
      titleEn: "Electronic Fiberglass Cloth Directory",
      description: "电子布型号和已公开的结构参数。",
      descriptionEn:
        "Official electronic-cloth styles and published construction data.",
      url: "https://www.czxingao.com/electronic-fiberglass-cloth.html",
      format: "Product directory",
    },
    {
      title: "云母带用玻璃纤维布目录",
      titleEn: "Mica-Tape Fiberglass Cloth Directory",
      description: "云母带基布型号和已公开的结构参数。",
      descriptionEn:
        "Official mica-tape carrier styles and published construction data.",
      url: "https://www.czxingao.com/mica-tape-fiberglass-cloth.html",
      format: "Product directory",
    },
    {
      title: "新高绝缘证书展示页",
      titleEn: "Xingao Certificate Display",
      description: "企业展示的证书图片；完整文件和有效性仍需采购方核验。",
      descriptionEn:
        "Company-displayed certificate images; complete documents and validity require buyer verification.",
      url: "https://www.czxingao.com/certificate.html",
      format: "Certificate gallery",
    },
    {
      title: "中国国际复材展新高绝缘展商页",
      titleEn: "China Composites Expo Xingao Profile",
      description: "展会发布的中英文主体、产品类别和应用范围。",
      descriptionEn:
        "Organizer-published Chinese and English identity, product categories and application scope.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-2977-1126433.html",
      format: "Exhibitor profile",
    },
    {
      title: "新高绝缘官方联系方式",
      titleEn: "Xingao Official Contact Details",
      description: "常州地址、电话、邮箱和询盘入口。",
      descriptionEn:
        "Official Changzhou address, telephone, email and inquiry channel.",
      url: "https://www.czxingao.com/contactus.html",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-xingao-logo.png",
  contactEmail: "info@czxingao.com",
  contactPhone: "+86 519 8896 0086",
  address:
    "No. 72, Sangyuan Village, Zhenglu Town, Changzhou, Jiangsu, China",
  website: "https://www.czxingao.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 14,
  viewCount: 0,
  capabilities: [
    "electronic-grade fiberglass cloth",
    "mica-tape fiberglass cloth",
    "industrial fiberglass cloth",
    "E-glass fabric weaving",
    "air-jet weaving",
    "custom fiberglass fabric construction",
    "fiberglass fabric testing",
    "export fiberglass fabric supply",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
