import type { SupplierListing } from "@/lib/db/schema";

export const DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_ID =
  "sup-dongguan-maikos-composites";
export const DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_SLUG =
  "dongguan-maikos-composites";

// Curated from Dongguan Maikos Composites' current Deawa and Maikos websites
// and China Composites Expo's current Net Show. The official legal statement
// identifies 东莞市麦科斯复合材料有限公司 as the owner and operator of the
// Deawa/迪瓦 and Maikos/麦科斯 marks and the deawa.cn, maikos.com.cn and
// deawa.net domains, so the brand-led exhibitor entry is deduplicated to this
// one mainland-China legal entity. Product, service and customer statements
// remain company-published claims. No current certificate with a complete
// legal identity, number, scope, issuer and validity was found on the reviewed
// official pages. Official Deawa logo downloaded 2026-08-13 from:
// http://www.deawa.cn/css-com/img/logo.png
export const DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_PROFILE: SupplierListing = {
  id: DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_ID,
  name: "东莞市麦科斯复合材料有限公司",
  nameEn: "Maikos Composites Co., Ltd.",
  slug: DONGGUAN_MAIKOS_COMPOSITES_SUPPLIER_SLUG,
  location: "广东东莞",
  locationEn: "Dongguan, Guangdong, China",
  province: "广东",
  category: "additive",
  products: [
    "复合材料半永久性外脱模剂",
    "碳纤维与玻璃钢制品脱模剂",
    "水性与溶剂型脱模剂",
    "环氧树脂与不饱和树脂成型用脱模剂",
    "模具洁模剂与洗模水",
    "模具封孔剂",
    "橡胶、轮胎与聚氨酯制品脱模剂",
    "面向具体材料和工艺的脱模体系定制样品（企业声明）",
  ],
  productsEn: [
    "Semi-permanent composite mold release agents",
    "Release agents for carbon-fiber and fiberglass products",
    "Water-based and solvent-based release agents",
    "Mold release agents for epoxy and unsaturated-resin processing",
    "Mold cleaners and cleaning fluids",
    "Mold sealers",
    "Release agents for rubber, tires and polyurethane products",
    "Application-specific release-system samples (company claim)",
  ],
  processList: [
    "复合材料脱模剂配方研发与生产",
    "水性及溶剂型产品配制",
    "按树脂、模具和工艺条件进行样品匹配（企业声明）",
    "模具清洁、封孔和脱模配套方案",
    "现场应用问题支持（企业声明）",
  ],
  processListEn: [
    "Composite release-agent formulation and production",
    "Water-based and solvent-based product formulation",
    "Sample matching to resin, mold and process conditions (company claim)",
    "Integrated mold cleaning, sealing and release systems",
    "On-site application support (company claim)",
  ],
  established: 2001,
  verified: false,
  description:
    "东莞市麦科斯复合材料有限公司是位于中国大陆广东省东莞市的脱模材料企业，官方英文名称使用 Maikos Composites Co., Ltd.。中国国际复材展以品牌名 DEAWA 收录该展商；企业官网法律声明明确说明 deawa/迪瓦、maikos/麦科斯商标及 deawa.cn、maikos.com.cn、deawa.net 域名均属于并由东莞市麦科斯复合材料有限公司运营，因此本页将这些品牌和域名去重为同一个中国大陆法律主体，不另建 DEAWA 或 Maikos 重复页。企业 2019 年官网文章称其从 2001 年开始引进、研究和开发脱模剂与封孔剂；现行中文简介则称已专注脱模剂 26 年。由于两种表述的时间口径不同，本页将 2001 年记录为企业公开的业务起点，而不是独立核实的工商成立日期。",
  descriptionEn:
    "Maikos Composites Co., Ltd. is the English identity used by 东莞市麦科斯复合材料有限公司, a mainland-China mold-release materials business in Dongguan, Guangdong. China Composites Expo lists the exhibitor under the DEAWA brand. The company's official legal statement says that the Deawa/迪瓦 and Maikos/麦科斯 marks and the deawa.cn, maikos.com.cn and deawa.net domains belong to and are operated by the Dongguan legal entity. GetFRP therefore deduplicates those brands and domains into this one mainland supplier rather than creating separate Deawa and Maikos companies. A company article published in 2019 says the business began introducing, researching and developing release agents and mold sealers in 2001, while the current Chinese overview describes 26 years of focus. This profile records 2001 as the company-published operating start, not as independently verified incorporation evidence.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "麦科斯现行官网把业务核心描述为碳纤维、玻璃纤维、橡胶和热固性树脂成型用脱模剂的研发、生产与销售，旗下同时使用 Maikos 麦科斯和 Deawa 迪瓦品牌。官网产品与应用页覆盖复合材料脱模剂、橡胶脱模剂、洁模剂、封孔剂，并提到风电、交通、航空航天、运动器材、游艇、格栅、卫浴、轮胎和聚氨酯等应用。中国国际复材展把 DEAWA 归入模具脱模材料，展商简介也将其范围聚焦于复合材料脱模剂。这些行业覆盖和定制、两千多家客户、24 小时现场响应等数字均为企业声明，不代表 GetFRP 已核实客户、配方、工厂产能或响应承诺。官网公开的 deawa 7300 产品页把该牌号描述为适用于热固化环氧复合纤维和不饱和树脂的半永久脱模剂，并给出无色透明外观、0.715±0.02 密度、一年保质期、室温施工、固化后 400°C 热稳定性及新模具 3–4 层、旧模具 2–3 层的参考操作。该页面同时明确提示网页资料不能替代现场选型并要求用户测试，因此本页不把这些典型值扩展为所有牌号的保证性能。采购询价应锁定具体牌号和最新 TDS/SDS 修订版，说明水性或溶剂型、是否含硅及可迁移物、活性成分、模具材质和表面状态、树脂体系、成型温度、固化周期、喷涂或擦涂方法、每层闪干时间、预计脱模次数和清模频率。若制品后续需要粘接、喷漆、胶衣或电镀，还应验证转移、表面能、附着力和污染残留；若采用易燃溶剂，则应核验 VOC、闪点、通风、防爆、职业防护、危险品分类、UN 编号、包装和运输条件。供应商应提交批次 CoA 字段、保质期与储存温度、包装规格、MOQ、交期、配方及生产地点变更通知、异常批次追溯与投诉处理方案。洁模剂、封孔剂和脱模剂应作为整套系统在代表性模具、树脂、温度和节拍下试验，记录清洁方法、涂层数量、干燥时间、首件外观、脱模力趋势、连续脱模次数、积垢、模具表面变化及后加工附着力，再形成批准牌号与工艺窗口。官网英文站和中国站提供海外询价信息，可作为初步出口准备度信号；买方仍应确认合同及出口主体、英文标签和 SDS、目的市场化学品法规、危险品申报、Incoterm、收款账户和批次追溯。本次复核未在官网找到同时具备完整法律主体、标准、证书号、范围、发证机构和当前有效期的管理体系或产品证书，因此不记录任何已验证认证。",
  productsServicesSummaryEn:
    "Maikos' current official sites center on the research, production and sale of release agents for carbon-fiber, glass-fiber, rubber and thermoset-resin molding under the Maikos and Deawa brands. Published categories include composite and rubber release agents, mold cleaners and mold sealers, with application references spanning wind energy, transport, aerospace, sporting goods, yachts, grating, sanitary products, tires and polyurethane. China Composites Expo classifies DEAWA under mould release materials and likewise describes a composite-release focus. Industry coverage, customization, 2,000-plus users and 24-hour on-site response are company claims rather than verified customers, formula scope, capacity or service commitments. An official deawa 7300 page describes a semi-permanent release agent for heat-cured epoxy composite fiber and unsaturated resin, with a colorless appearance, density of 0.715±0.02, one-year shelf life, room-temperature application, stated cured stability at 400°C and reference application of three to four coats on a new mold or two to three on an older mold. The same site says its information is not a substitute for field selection and that users must test, so GetFRP does not extend these typical values to other grades or treat them as purchase guarantees. An RFQ should identify the grade and current TDS/SDS revision; water- or solvent-based chemistry; silicone and transferable content; active solids; mold material and surface; resin system; molding temperature and cycle; wipe or spray method; flash time; expected releases and cleaning interval. If parts will be bonded, painted, gel-coated or plated, test transfer, surface energy, adhesion and contamination. For flammable solvent systems, verify VOC, flash point, ventilation, explosion protection, PPE, dangerous-goods class, UN number, pack and transport. Require lot-linked COA fields, shelf life and storage, pack size, MOQ, lead time, formula and site change notification, traceability and complaint handling. Qualify cleaner, sealer and release agent as one system on a representative mold and process, recording cleaning, coats, dry time, first-part finish, release-force trend, consecutive releases, buildup, mold effects and downstream adhesion. The English site and China contact channels are initial export-readiness signals; confirm contracting/export entity, English labels and SDS, destination chemical rules, DG declaration, Incoterm, payee and traceability. No official certificate with complete legal identity, standard, number, scope, issuer and current validity was found, so none is recorded as verified.",
  ecatalogs: [
    {
      title: "迪瓦官方中文网站",
      titleEn: "Official Deawa Chinese Website",
      description: "现行品牌、法律主体、产品、应用与联系入口。",
      descriptionEn: "Current brand, legal identity, products, applications and contact route.",
      url: "http://www.deawa.cn/",
      format: "Official website",
    },
    {
      title: "麦科斯官方中文网站",
      titleEn: "Official Maikos Chinese Website",
      description: "同一法律主体的麦科斯品牌、产品与公司介绍。",
      descriptionEn: "Maikos-brand products and company profile for the same legal entity.",
      url: "http://www.maikos.com.cn/",
      format: "Official website",
    },
    {
      title: "迪瓦法律声明",
      titleEn: "Deawa Official Legal Statement",
      description: "法律主体、品牌、域名归属、地址和官方联系邮箱。",
      descriptionEn: "Legal entity, marks, domain ownership, address and official email.",
      url: "http://www.deawa.cn/falvshengming",
      format: "Legal statement",
    },
    {
      title: "迪瓦公司简介",
      titleEn: "Deawa Company Profile",
      description: "脱模剂业务、两大品牌、公开行业应用与企业自述服务能力。",
      descriptionEn: "Release-agent focus, two brands, applications and company-published support scope.",
      url: "http://www.deawa.cn/about/company/",
      format: "Company profile",
    },
    {
      title: "迪瓦 7300 复合材料脱模剂",
      titleEn: "Deawa 7300 Composite Release Agent",
      description: "企业公开的用途、典型物性、参考施工步骤与适用限制。",
      descriptionEn: "Company-published use, typical properties, reference application and limitations.",
      url: "http://www.deawa.cn/products/fuhecailiaotuomoji/boligangzhipin/13.html",
      format: "Official product page",
    },
    {
      title: "迪瓦官方联系方式",
      titleEn: "Official Deawa Contact Page",
      description: "东莞地址、手机、传真、邮箱与三个公司域名。",
      descriptionEn: "Dongguan address, mobile, fax, email and company domains.",
      url: "http://www.deawa.cn/contact",
      format: "Official contact page",
    },
    {
      title: "中国国际复材展 DEAWA 网上展厅",
      titleEn: "China Composites Expo DEAWA Profile",
      description: "展会发布的品牌展商、展位、脱模材料分类与应用简介。",
      descriptionEn: "Exhibitor source for the brand, booth, release-material category and applications.",
      url: "https://www.chinacompositesexpo.com/en/netshow.php?_MULTI_PAGE_START=330",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/dongguan-maikos-deawa-logo.png",
  contactEmail: "deawa@189.cn",
  contactPhone: "+86 133 7772 9539",
  address: "Room 1203, Vanke Tower, Nancheng District, Dongguan, Guangdong, China",
  website: "http://www.deawa.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "semi-permanent composite release agents",
    "carbon-fiber and fiberglass mold release",
    "water-based release agents",
    "solvent-based release agents",
    "epoxy and unsaturated-resin mold release",
    "mold cleaners",
    "mold sealers",
    "rubber and tire release agents",
    "polyurethane release agents",
    "application-specific sample matching (company claim)",
    "on-site application support (company claim)",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
