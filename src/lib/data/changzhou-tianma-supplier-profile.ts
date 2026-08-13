import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_TIANMA_SUPPLIER_ID =
  "sup-changzhou-tianma-group";
export const CHANGZHOU_TIANMA_SUPPLIER_SLUG = "changzhou-tianma-group";

// Curated from the company's current official website and its current China
// Composites Expo exhibitor profile. The website footer names Changzhou Tianma
// Group Co., Ltd. (formerly Building Materials Factory 253), matching the expo
// exhibitor. Published capacity figures differ between the site's company
// introduction and product-type summary, so they are retained only as
// company-published reference points and must be confirmed by legal entity and
// production site. Official logo downloaded 2026-08-13 from the current header:
// https://www.tm253.com/uploadfiles/128.1.164.122/webid2195/logo/202311/654c727352061.png
export const CHANGZHOU_TIANMA_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_TIANMA_SUPPLIER_ID,
  name: "常州天马集团有限公司",
  nameEn: "Changzhou Tianma Group Co., Ltd.",
  slug: CHANGZHOU_TIANMA_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "玻璃纤维纱、粗纱与短切纤维",
    "短切毡、连续毡、表面毡与湿法薄毡",
    "玻璃纤维织物与壁布",
    "不饱和聚酯树脂",
    "胶衣与乙烯基酯树脂",
    "固化剂、促进剂与化工辅料",
    "SMC 与 BMC 模塑料",
    "玻璃钢储罐、冷却塔及其他 FRP 制品",
    "风电与光伏复合材料产品",
  ],
  productsEn: [
    "Glass-fiber yarns, rovings and chopped strands",
    "Chopped-strand, continuous, surfacing and wet-laid mats",
    "Glass-fiber fabrics and wall coverings",
    "Unsaturated polyester resins",
    "Gelcoats and vinyl ester resins",
    "Curing agents, accelerators and chemical auxiliaries",
    "SMC and BMC molding compounds",
    "FRP tanks, cooling towers and other finished products",
    "Wind-energy and photovoltaic composite products",
  ],
  processList: [
    "玻璃纤维纱、粗纱及短切纤维制造",
    "玻纤毡、织物、薄毡与壁布生产",
    "不饱和聚酯、乙烯基酯与胶衣树脂生产",
    "固化体系及化工辅料供应",
    "SMC/BMC 配混与模塑料生产",
    "玻璃钢储罐、冷却塔及制品制造",
    "复材原材料与制品综合供应",
  ],
  processListEn: [
    "Glass-fiber yarn, roving and chopped-strand manufacturing",
    "Glass mat, fabric, tissue and wall-covering production",
    "Unsaturated polyester, vinyl ester and gelcoat resin production",
    "Cure-system and chemical-auxiliary supply",
    "SMC/BMC compounding and molding-compound production",
    "FRP tank, cooling-tower and finished-product manufacturing",
    "Integrated composite raw-material and finished-product supply",
  ],
  established: 1960,
  verified: false,
  description:
    "常州天马集团有限公司位于江苏常州新北区，官网与中国国际复材展均使用该法人名称，官网同时标注“原建材二五三厂”。官网称其前身于 1960 年按国家计划筹建，并将自身称为“中国玻璃钢工业的摇篮”；这里的 1960 年表示企业沿革起点，不等同于当前法人的工商注册日期。公司公开产品覆盖玻璃纤维纱与制品、不饱和聚酯和乙烯基酯树脂、胶衣及辅料、SMC/BMC、玻璃钢制品、风电与光伏复材。复材展以 CHANGZHOU TIANMA GROUP CO., LTD. 收录该展商并发布 2026 年展位 7M06。历史、行业地位、规模、产能、市场与产品性能均为企业或展会公开陈述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Changzhou Tianma Group Co., Ltd. is based in Xinbei District, Changzhou, Jiangsu. Both the official website and China Composites Expo identify this legal entity, while the website also notes its former identity as Building Materials Factory 253. The site traces the enterprise lineage to a state-planned project begun in 1960 and calls the business the cradle of China's FRP industry; 1960 is therefore presented here as the start of the organizational lineage, not the current legal entity's registration date. The published portfolio spans glass-fiber yarns and products, unsaturated polyester and vinyl ester resins, gelcoats and auxiliaries, SMC/BMC, finished FRP products, and wind-energy and photovoltaic composites. China Composites Expo lists the exhibitor as CHANGZHOU TIANMA GROUP CO., LTD. and publishes booth 7M06 for 2026. History, industry-position, scale, capacity, market and product-performance statements are company- or organizer-published and have not been independently verified by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "天马官网产品目录分为化工、玻纤、复合材料、风电和光伏系列。化工目录包括不饱和聚酯树脂、胶衣、乙烯基酯树脂、固化剂与促进剂、精细与合成化工及丙烯酸羟酯；玻纤目录覆盖直接纱、合股纱、短切原丝、短切毡、连续毡、表面毡、湿法薄毡、织物、壁布及热塑用纱；复材目录列有 SMC/BMC 和玻璃钢制品。官网公司简介和产品类型栏目对玻纤毡/织物、模塑料、化工辅材及 FRP 制品产能的口径不完全一致，不应直接相加，采购方须按实际签约法人、工厂和产品线索取最新产能、设备清单及审厂资料。玻纤询价应确认玻璃类型、tex、单丝直径、浸润剂、树脂与工艺相容性、含水率、可燃物含量、强度、硬挺度/分散性、卷装及批次 CoA；毡和织物还需确认结构、克重、宽度、粘结剂、苯乙烯溶解或浸透特性、拉伸、接头和卷长。树脂与胶衣应核对精确牌号、基体化学、反应单体、黏度、酸值、胶凝与固化条件、放热峰、固含、收缩、HDT、力学与耐介质性能、颜色、储存温度、保质期、TDS/SDS 及危化运输。SMC/BMC 与 FRP 制品还应确认配方、纤维含量、成型窗口、图纸公差、结构层合、检测、法规/认证范围、样品验证、追溯、包装、MOQ 和交期。",
  productsServicesSummaryEn:
    "Tianma's official directory is organized into chemical, glass-fiber, composite, wind-energy and photovoltaic lines. Chemicals include unsaturated polyester, gelcoat and vinyl ester resins; curing agents and accelerators; fine and synthetic chemicals; and hydroxy acrylic esters. The glass-fiber directory covers direct and assembled rovings, chopped strands, chopped-strand and continuous mats, surfacing and wet-laid tissues, fabrics, wall coverings and thermoplastic yarns. Composite listings include SMC/BMC and finished FRP products. Capacity figures for glass-fiber mats or fabrics, molding compounds, chemical auxiliaries and FRP products are not fully consistent between the company introduction and product-type summary; they should not be summed, and buyers should request current capacity, equipment and audit evidence for the actual contracting entity, plant and line. For glass fiber, specify glass type, tex, filament diameter, sizing, resin and process compatibility, moisture, loss on ignition, strength, stiffness or dispersion, package and lot CoA. For mats and fabrics, also qualify construction, weight, width, binder, styrene solubility or wet-out, tensile performance, splices and roll length. Resin and gelcoat RFQs should define exact grade, base chemistry, reactive monomer, viscosity, acid value, gel and cure conditions, exotherm, solids, shrinkage, HDT, mechanical and chemical resistance, color, storage temperature, shelf life, TDS/SDS and dangerous-goods transport. For SMC/BMC and finished FRP products, also confirm formulation, fiber content, molding window, drawing tolerances, laminate construction, inspection, regulatory or certificate scope, sample validation, traceability, packaging, MOQ and lead time.",
  ecatalogs: [
    {
      title: "天马集团官方简介",
      titleEn: "Official Tianma Group Profile",
      description: "企业沿革、主营产品、应用领域与企业公开规模信息。",
      descriptionEn:
        "Official history, principal products, applications and company-published scale information.",
      url: "https://www.tm253.com/?previews_id=1007.html",
      format: "Company profile",
    },
    {
      title: "天马产品目录",
      titleEn: "Tianma Product Directory",
      description: "化工、玻纤、复材、风电与光伏产品总目录。",
      descriptionEn:
        "Official directory for chemical, glass-fiber, composite, wind and photovoltaic products.",
      url: "https://www.tm253.com/product.html",
      format: "Product directory",
    },
    {
      title: "化工产品目录",
      titleEn: "Chemical Product Directory",
      description: "UPR、胶衣、乙烯基酯、固化体系及精细化工入口。",
      descriptionEn:
        "Official UPR, gelcoat, vinyl ester, cure-system and fine-chemical directory.",
      url: "https://www.tm253.com/product_category/hg.html",
      format: "Product directory",
    },
    {
      title: "玻纤产品目录",
      titleEn: "Glass-fiber Product Directory",
      description: "玻纤纱、粗纱、短切纤维、毡、薄毡、织物与壁布入口。",
      descriptionEn:
        "Official yarn, roving, chopped strand, mat, tissue, fabric and wall-covering directory.",
      url: "https://www.tm253.com/product_category/54963.html",
      format: "Product directory",
    },
    {
      title: "复合材料产品目录",
      titleEn: "Composite Product Directory",
      description: "SMC/BMC 模塑料及玻璃钢制品入口。",
      descriptionEn:
        "Official SMC/BMC molding-compound and finished-FRP directory.",
      url: "https://www.tm253.com/product_category/54969.html",
      format: "Product directory",
    },
    {
      title: "2023 年企业质量信用报告",
      titleEn: "2023 Enterprise Quality Credit Report",
      description: "官网 2024 年发布的企业质量信息入口；具体证书仍需逐项核验。",
      descriptionEn:
        "Company-published quality report posted in 2024; individual certificates still require verification.",
      url: "https://www.tm253.com/new_detail/nid/98706.html",
      format: "Quality report",
    },
    {
      title: "中国国际复材展展商资料",
      titleEn: "China Composites Expo Exhibitor Profile",
      description: "官方英文主体、2026 年 7M06 展位、产品与展品分类。",
      descriptionEn:
        "Organizer-published English identity, 2026 booth 7M06, products and exhibitor categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-878-91119006.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-tianma-logo.png",
  contactEmail: "sales1@tm253.com",
  contactPhone: "+86 519 6819 3652",
  address:
    "No. 309, Huanghai Road, Xinbei District, Changzhou, Jiangsu, China",
  website: "https://www.tm253.com/",
  enterpriseId: null,
  scaleTier: "XL",
  brandPriority: 35,
  viewCount: 0,
  capabilities: [
    "glass-fiber yarns and rovings",
    "chopped-strand and continuous mats",
    "surfacing tissue and wet-laid mat",
    "glass-fiber fabrics and wall coverings",
    "unsaturated polyester and vinyl ester resin",
    "gelcoat and curing auxiliaries",
    "SMC and BMC molding compounds",
    "finished FRP tanks and cooling towers",
    "wind and photovoltaic composite products",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
