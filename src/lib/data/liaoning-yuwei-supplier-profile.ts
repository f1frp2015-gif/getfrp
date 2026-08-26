import type { SupplierListing } from "@/lib/db/schema";

export const LIAONING_YUWEI_SUPPLIER_ID = "sup-liaoning-yuwei";
export const LIAONING_YUWEI_SUPPLIER_SLUG = "liaoning-yuwei-specialty-epoxy";

// Curated from Yuwei's current official company, product and contact pages and
// the CCE L directory. CCE retains the legacy exhibitor name 辽阳鑫宇化工 while
// the current official site publishes Liaoning Yuwei Technology. The sources
// are kept separate and no unverified legal-name succession is asserted. The
// full official Yuwei logo was downloaded on 2026-08-25.
export const LIAONING_YUWEI_SUPPLIER_PROFILE: SupplierListing = {
  id: LIAONING_YUWEI_SUPPLIER_ID,
  name: "辽宁宇威科技有限公司",
  nameEn: "Liaoning Yuwei Technology Co., Ltd.",
  slug: LIAONING_YUWEI_SUPPLIER_SLUG,
  location: "辽宁辽阳",
  locationEn: "Liaoyang, Liaoning, China",
  province: "辽宁",
  category: "resin",
  products: ["酚氧树脂系列", "氢化双酚 A 型环氧树脂", "高耐热多官能团环氧树脂", "二聚酸改性环氧树脂", "溴化环氧树脂", "无卤阻燃环氧树脂", "结晶型环氧树脂", "双酚 A 型液体环氧树脂", "双酚 A 型固体环氧树脂", "烷基 C12-C14 缩水甘油醚活性稀释剂", "1,4-环己烷二甲醇二缩水甘油醚", "聚丙二醇缩水甘油醚", "三羟甲基丙烷三缩水甘油醚", "1,6-己二醇二缩水甘油醚"],
  productsEn: ["Phenoxy resin series", "Hydrogenated bisphenol-A epoxy resins", "High-heat-resistant multifunctional epoxy resins", "Dimer-acid-modified epoxy resins", "Brominated epoxy resins", "Halogen-free flame-retardant epoxy resins", "Crystalline epoxy resins", "Bisphenol-A liquid epoxy resins", "Bisphenol-A solid epoxy resins", "C12-C14 alkyl glycidyl-ether reactive diluents", "1,4-cyclohexanedimethanol diglycidyl ether", "Polypropylene-glycol glycidyl ether", "Trimethylolpropane triglycidyl ether", "1,6-hexanediol diglycidyl ether"],
  processList: ["特种环氧树脂研发与生产", "活性环氧稀释剂研发与生产", "酚氧树脂合成", "氢化双酚 A 环氧体系配套", "多官能高耐热环氧体系配套", "二聚酸柔韧改性", "含卤与无卤阻燃树脂选型", "结晶型和双酚 A 环氧选型", "复材胶黏增强体系用树脂配套", "牌号 TDS、SDS、样品和批次质量确认"],
  processListEn: ["Specialty epoxy-resin development and production", "Reactive epoxy-diluent development and production", "Phenoxy-resin synthesis", "Hydrogenated bisphenol-A epoxy system matching", "Multifunctional heat-resistant epoxy system matching", "Dimer-acid flexibility modification", "Halogenated and halogen-free flame-retardant resin selection", "Crystalline and bisphenol-A epoxy selection", "Resin matching for composite adhesive and reinforcement systems", "Grade TDS, SDS, sample and batch-quality confirmation"],
  established: 2009,
  verified: false,
  description: "辽宁宇威科技有限公司现行官网称企业成立于 2009 年，位于辽宁辽阳，研发和生产特种环氧树脂与活性稀释剂。官网明确列出酚氧、氢化双酚 A、高耐热多官能、二聚酸改性、溴化、无卤阻燃、结晶型、双酚 A 液体/固体环氧，以及多种缩水甘油醚稀释剂，并将复材胶黏增强材料列为应用之一。中国国际复材展 L 字母页保留了“辽阳鑫宇化工有限公司”这一旧展商名称；域名与业务线能够形成调查线索，但当前官网未明确发布法定更名或承继文件，因此 GetFRP 仅为辽宁宇威现行主体建页，不把两名称写成已证实的同一法律主体。产能、专利、体系认证和性能为企业发布信息，认证字段在未取得现行证书前保持为空。",
  descriptionEn: "Liaoning Yuwei Technology Co., Ltd. says on its current official website that it was founded in 2009 in Liaoyang and develops and produces specialty epoxy resins and reactive diluents. The published range explicitly covers phenoxy, hydrogenated bisphenol-A, heat-resistant multifunctional, dimer-acid-modified, brominated, halogen-free flame-retardant, crystalline and bisphenol-A liquid and solid epoxies, plus multiple glycidyl-ether diluents. Composite adhesive and reinforcement material is one published application. China Composites Expo's L directory retains the legacy exhibitor name Liaoyang Xinyu Chemical Co., Ltd. The domain and business range provide a research trail, but the current website does not publish a legal name-change or succession document. GetFRP therefore builds the profile for the current Yuwei entity and does not state that the two names are a proven identical legal person. Capacity, patent, management-system and performance statements are company-published; certification fields remain empty until current certificates are matched to entity, site, scope and validity.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "宇威产品跨越热塑性高分子酚氧树脂、多类特种环氧和单/双/多官能缩水甘油醚活性稀释剂。复材配方询价应说明树脂角色、目标黏度和温度、环氧当量、官能度、颜色、挥发物、水分、氯含量、阻燃限制、增韧需求、纤维浸润、适用期、固化剂和促进剂、固化曲线、Tg、韧性、粘接和环境性能。活性稀释剂不能只按“降黏”替换，应评估反应性、交联密度、放热、收缩、气味、毒理和最终热机械性能。买方应取得牌号级 TDS/SDS、规格和 COA 样张，要求批次追溯、包装储运、保质期和法规声明，并用真实纤维、填料、胶黏或涂层体系做小试、放大和工艺窗口确认。CCE 旧名称只能作为历史检索入口，合同、发票、收款、生产和质量文件都应使用当前已核验法律主体。",
  productsServicesSummaryEn: "Yuwei's range crosses high-molecular-weight thermoplastic phenoxy resins, several specialty epoxy families and mono-, di- and multifunctional glycidyl-ether reactive diluents. A composites formulation inquiry should state whether the material is the primary resin, modifier or reactive diluent and identify the reinforcement, filler, adhesive, coating, casting or electronic application. Define viscosity and measurement temperature, epoxy equivalent weight, functionality, molecular-weight or softening range where relevant, color, clarity, nonvolatile content, moisture, hydrolysable and total chlorine, residuals and odor constraints. State the required mix ratio and compatibility with curing agent, accelerator, toughener, pigment and filler; pot life, exotherm and cure schedule; glass-transition temperature, strength, elongation, toughness, adhesion, dielectric or flame performance; and resistance to heat, humidity, chemicals and aging. A reactive diluent cannot be substituted only on viscosity reduction. Its functionality and reactivity can change crosslink density, shrinkage, exotherm, gel time, thermal and mechanical properties, emission and handling risk. Compare C12-C14 alkyl glycidyl ether, cyclohexanedimethanol diglycidyl ether, polypropylene-glycol glycidyl ether, trimethylolpropane triglycidyl ether, hexanediol diglycidyl ether and other candidates in the complete formulation. Request the exact grade TDS and SDS, sales specification, typical and guaranteed values, COA example, test methods, regulatory and substance declarations, shelf life, storage temperature, packaging, sampling and change-notification policy. Trials should use the production fiber, sizing, filler, pigment and cure equipment, then progress from laboratory screening to representative laminate, bond or coating panels and a controlled scale-up. Confirm wet-out, voids, flow, gel and cure, Tg, mechanical and environmental durability after the actual post-cure. Purchase documents should identify the current legal manufacturer and site, batch traceability, retain-sample and complaint procedure, transport classification and whether any custom specification is controlled by a signed quality agreement. The China Composites Expo legacy Liaoyang Xinyu name is only a historical discovery trail; absent a published legal succession document, quotation, invoice, payment, production and quality records should all be checked against the current Liaoning Yuwei entity. Supplier claims about capacity, patents and system certification do not replace current certificate or batch evidence.",
  ecatalogs: [
    { title: "宇威官方网站", titleEn: "Official Yuwei Website", description: "企业、产品和联系信息入口。", descriptionEn: "Official company, product and contact entry.", url: "https://www.lnxinyu.com/", format: "Official website" },
    { title: "宇威公司简介", titleEn: "About Liaoning Yuwei", description: "现行主体、历史、产品家族和应用。", descriptionEn: "Current entity, history, product families and applications.", url: "https://www.lnxinyu.com/page/about-us.html", format: "Company page" },
    { title: "宇威产品中心", titleEn: "Yuwei Product Center", description: "特种环氧和活性稀释剂目录。", descriptionEn: "Official specialty-epoxy and reactive-diluent directory.", url: "https://www.lnxinyu.com/product", format: "Product directory" },
    { title: "特种环氧树脂", titleEn: "Specialty Epoxy Resins", description: "特种环氧产品类别。", descriptionEn: "Official specialty-epoxy product category.", url: "https://www.lnxinyu.com/product/test", format: "Product category" },
    { title: "活性稀释剂", titleEn: "Reactive Diluents", description: "缩水甘油醚活性稀释剂类别。", descriptionEn: "Official glycidyl-ether reactive-diluent category.", url: "https://www.lnxinyu.com/product/thinner", format: "Product category" },
    { title: "宇威联系方式", titleEn: "Yuwei Contact", description: "辽阳工厂地址、出口联系人、电话和邮箱。", descriptionEn: "Official Liaoyang factory address, export contact, phone and email.", url: "https://www.lnxinyu.com/page/contact-us.html", format: "Contact page" },
    { title: "中国国际复材展 L 字母页", titleEn: "China Composites Expo — L Directory", description: "旧展商名称“辽阳鑫宇化工”调查线索，不作为法定更名证明。", descriptionEn: "Legacy Liaoyang Xinyu exhibitor trail; not evidence of legal name succession.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=L", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/liaoning-yuwei-logo.webp",
  contactEmail: "epoxy-diluent@lnxinyu.com",
  contactPhone: "+86 138 7619 5572",
  address: "No. 29 Wanhe 2nd Road, Hongwei District, Liaoyang, Liaoning, China",
  website: "https://www.lnxinyu.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 27,
  viewCount: 0,
  capabilities: ["specialty epoxy resins", "phenoxy resins", "hydrogenated bisphenol-A epoxy", "multifunctional heat-resistant epoxy", "modified and flame-retardant epoxy", "reactive epoxy diluents", "glycidyl ethers", "formulation sample support"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
