import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_UTEK_SUPPLIER_ID = "sup-changzhou-utek";
export const CHANGZHOU_UTEK_SUPPLIER_SLUG = "changzhou-utek-composite";

// Curated from Changzhou Utek's current official website and its China
// Composites Expo exhibitor page. The expo listing says the company produces
// selected fiberglass mats and fabrics; Utek's broader current catalog is
// described here as its published supply portfolio, not as proof that every
// listed item is manufactured in-house. Company-published claims have not
// been independently verified by GetFRP. The locally stored official logo was
// downloaded on 2026-08-12 from the current website header asset:
// https://www.utekcomposites.com/uploadfiles/128.1.164.27/webid192/logo/202106/60c0127558877.png
export const CHANGZHOU_UTEK_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_UTEK_SUPPLIER_ID,
  name: "常州联拓复合材料有限公司",
  nameEn: "Changzhou Utek Composite Co., Ltd.",
  slug: CHANGZHOU_UTEK_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "玻璃纤维纱、短切纱及无捻粗纱",
    "短切毡、连续毡、表面毡及复合毡",
    "玻纤布、经编多轴向织物及单向织物",
    "碳纤维、芳纶、玄武岩与高硅氧织物",
    "不饱和聚酯、乙烯基酯及环氧树脂",
    "SMC、BMC、胶衣及复材化工辅料",
    "真空导入与热压罐工艺辅材",
    "PVC、PET、PMI 泡沫及 PP 蜂窝芯材",
  ],
  productsEn: [
    "Fiberglass yarns, chopped strands and rovings",
    "Chopped-strand, continuous-filament, surface and combination mats",
    "Fiberglass cloth, stitched multiaxials and unidirectional fabrics",
    "Carbon, aramid, basalt and high-silica fabrics",
    "Unsaturated-polyester, vinyl-ester and epoxy resins",
    "SMC, BMC, gelcoats and composite chemical auxiliaries",
    "Vacuum-infusion and autoclave consumables",
    "PVC, PET and PMI foams and polypropylene honeycomb cores",
  ],
  processList: [
    "玻纤毡与织物供货",
    "手糊、缠绕及拉挤材料配套",
    "真空导入与热压罐辅材配套",
    "SMC/BMC 材料配套",
    "夹芯复合材料芯材配套",
  ],
  processListEn: [
    "Fiberglass mat and fabric supply",
    "Material packages for hand lay-up, filament winding and pultrusion",
    "Vacuum-infusion and autoclave consumable supply",
    "SMC and BMC material supply",
    "Core-material supply for sandwich composites",
  ],
  established: 2012,
  verified: false,
  description:
    "常州联拓复合材料有限公司位于江苏常州。公司官网称企业于 2012 年成立，早期主营玻璃纤维、树脂、SMC 和 BMC，目前将自身定位为复合材料综合解决方案提供商，公开目录覆盖增强材料、树脂与化工品、工艺辅材、芯材及轴流风机。中国国际复合材料工业技术展览会的展商资料称，公司生产粉剂和乳液型短切毡、针织毡、复合毡、经编布、夹芯毡及玻纤布，并供应耐碱玻纤、SMC/BMC、格栅和复合土工材料。上述成立时间、生产与产品范围均为企业或展会公开陈述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Changzhou Utek Composite Co., Ltd. is based in Changzhou, Jiangsu. Its official website says the company was established in 2012, initially focusing on fiberglass, resins, SMC and BMC, and now positions the business as an overall composite-material solution provider. Its published catalog spans reinforcements, resins and chemicals, process consumables, core materials and axial fans. The company's China Composites Expo exhibitor listing says it produces powder- and emulsion-bonded chopped-strand mat, stitched mat, combination mat, warp-knitted fabric, core mat and fiberglass cloth, while also supplying alkali-resistant glass fiber, SMC/BMC, gratings and composite geosynthetics. These establishment, production and product-scope statements are company- or expo-published and have not been independently verified by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "联拓官网将产品分为增强材料、化工材料、工艺辅材、复合材料和轴流风机五大入口。增强材料包括 E/C/AR 玻纤纱及粗纱、短切毡与连续毡、表面毡、经编多轴向和单向织物，以及 S 玻纤、高硅氧/石英、玄武岩、碳纤维、芳纶和 UHMWPE 织物；化工目录列出 SMC/BMC、胶衣、不饱和聚酯、乙烯基酯和环氧树脂、粘结剂、浸润剂与促进/固化体系；辅材目录覆盖真空袋膜、脱模膜、透气毡、导流网、脱模布、密封胶带、PVC/PET/PMI 泡沫、PP 蜂窝，以及缠绕、拉挤和手糊辅材。采购方应先确认具体产品由联拓生产还是经销，并按牌号核验法律生产主体与地址、纤维类型和浸润剂、线密度或克重、织物结构、树脂体系与性能、芯材密度和机械性能、辅材耐温与树脂相容性、测试方法、批次 CoA、现行 TDS/SDS、管理体系证书、MOQ、包装和交期。",
  productsServicesSummaryEn:
    "Utek's official catalog is organized around reinforcements, chemicals, process auxiliaries, composite materials and axial fans. Reinforcements include E-, C- and AR-glass yarns and rovings, chopped-strand and continuous-filament mats, surface tissues, stitched multiaxial and unidirectional fabrics, plus S-glass, high-silica or quartz, basalt, carbon, aramid and UHMWPE fabrics. The chemical directory lists SMC/BMC, gelcoats, unsaturated-polyester, vinyl-ester and epoxy resins, binders, sizings, accelerators and curing systems. Its auxiliary directory covers vacuum bagging film, release film, breather, flow mesh, peel ply, sealant tape, PVC/PET/PMI foams, PP honeycomb, and materials for winding, pultrusion and hand lay-up. Buyers should first confirm whether each grade is manufactured by Utek or traded, then validate the legal manufacturer and site, fiber and sizing type, linear or areal weight, fabric construction, resin system and properties, core density and mechanics, consumable temperature resistance and resin compatibility, test methods, lot CoA, current TDS/SDS, management-system certificates, MOQ, packaging and lead time.",
  ecatalogs: [
    {
      title: "联拓官网与公司介绍",
      titleEn: "Utek Official Website & Company Introduction",
      description: "企业公开的 2012 年起步历程、业务定位与产品范围。",
      descriptionEn:
        "Official company story, positioning and product scope published by Utek.",
      url: "https://www.utekcomposites.com/",
      format: "Company profile",
    },
    {
      title: "增强材料产品目录",
      titleEn: "Reinforcement Product Directory",
      description: "玻纤纱、粗纱、毡、织物和高性能纤维增强材料。",
      descriptionEn:
        "Official directory for yarns, rovings, mats, fabrics and high-performance reinforcements.",
      url: "https://www.utekcomposites.com/product_category/Reinforcement.html",
      format: "Product directory",
    },
    {
      title: "树脂与化工材料目录",
      titleEn: "Resin & Chemical Materials Directory",
      description: "SMC/BMC、树脂、胶衣、粘结剂、浸润剂及固化体系。",
      descriptionEn:
        "Official directory for SMC/BMC, resins, gelcoats, binders, sizings and curing systems.",
      url: "https://www.utekcomposites.com/product_category/Chemical.html",
      format: "Product directory",
    },
    {
      title: "工艺辅材与芯材目录",
      titleEn: "Process Consumables & Core Materials Directory",
      description: "真空导入、热压罐、缠绕、拉挤和手糊辅材及夹芯芯材。",
      descriptionEn:
        "Official directory for infusion, autoclave, winding, pultrusion and hand-lay-up consumables and core materials.",
      url: "https://www.utekcomposites.com/product_category/Auxiliary.html",
      format: "Product directory",
    },
    {
      title: "中国国际复材展展商资料",
      titleEn: "China Composites Expo Exhibitor Profile",
      description: "展会发布的中英文公司名称、生产/供应范围和产品类别。",
      descriptionEn:
        "Organizer-published exhibitor identity, production and supply scope, and product categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-895-1124351.html",
      format: "Exhibitor profile",
    },
    {
      title: "联拓联系方式",
      titleEn: "Utek Contact Details",
      description: "常州注册地址、电话、传真、邮箱和询盘入口。",
      descriptionEn:
        "Official Changzhou registered office, telephone, fax, email and inquiry channel.",
      url: "https://www.utekcomposites.com/contactus.html",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-utek-logo.png",
  contactEmail: "info@utekcomposite.com",
  contactPhone: "+86 519 8585 6360",
  address:
    "FuhanYuan 1-812, New North District, Changzhou 213022, Jiangsu, China",
  website: "https://www.utekcomposites.com/",
  enterpriseId: null,
  scaleTier: "S",
  brandPriority: 4,
  viewCount: 0,
  capabilities: [
    "fiberglass roving",
    "fiberglass chopped strand mat",
    "fiberglass stitched fabric",
    "multiaxial fabric",
    "high-performance fiber fabric",
    "SMC and BMC",
    "composite resins",
    "vacuum infusion consumables",
    "autoclave consumables",
    "PVC and PET foam core",
    "PP honeycomb core",
    "pultrusion auxiliaries",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
