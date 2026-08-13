import type { SupplierListing } from "@/lib/db/schema";

export const TOPGLOW_SHANGHAI_SUPPLIER_ID = "sup-topglow-shanghai";
export const TOPGLOW_SHANGHAI_SUPPLIER_SLUG =
  "topglow-advanced-materials-shanghai";

// Curated from the mainland-China legal entity's current Chinese and English
// official sites, the China Composites Expo Net Show, and current/historical
// parent-company disclosures. Topglow is presented as a materials distributor
// and application-support provider, not as the manufacturer of every listed
// grade. Official logo downloaded 2026-08-13 from the current company domain:
// https://www.topglow.cn/uploadfiles/428/logo.png
export const TOPGLOW_SHANGHAI_SUPPLIER_PROFILE: SupplierListing = {
  id: TOPGLOW_SHANGHAI_SUPPLIER_ID,
  name: "崇献新材料科技（上海）有限公司",
  nameEn: "Topglow Advanced Materials (Shanghai) Co., Ltd.",
  slug: TOPGLOW_SHANGHAI_SUPPLIER_SLUG,
  location: "上海",
  locationEn: "Shanghai, China",
  province: "上海",
  category: "fiber",
  products: [
    "PAN 基及沥青基碳纤维",
    "碳纤维预浸料及复材工艺辅材",
    "卷制用 BOPP、橡胶片及芯轴",
    "碳制品用钻头及脱模剂",
    "PET、OPP、PI、PO 功能薄膜",
    "硅油、氟素及非硅离型膜",
    "丙烯酸、PU、硅胶及 OCA 胶粘材料",
    "碳纤维滚筒、气胀轴及工装",
  ],
  productsEn: [
    "PAN- and pitch-based carbon fiber",
    "Carbon-fiber prepreg and composite-process auxiliaries",
    "BOPP process film, rubber sheet and mandrels",
    "Drills and release agents for carbon-composite products",
    "PET, OPP, PI and PO functional films",
    "Silicone-, fluorine- and non-silicone release films",
    "Acrylic, PU, silicone and OCA adhesive materials",
    "Carbon-fiber rollers, air shafts and fixtures",
  ],
  processList: [
    "复材原材料及工艺辅材选型与供应",
    "碳纤维、预浸料和脱模体系配套",
    "功能薄膜、离型膜与胶粘材料供应",
    "样品、牌号和应用条件匹配",
    "碳纤维滚筒、芯轴和相关工装供应",
    "制程改善、材料整合及技术咨询",
    "多语言出口询盘与供应链协调",
  ],
  processListEn: [
    "Composite raw-material and process-auxiliary selection and supply",
    "Carbon-fiber, prepreg and release-system coordination",
    "Functional-film, release-liner and adhesive-material distribution",
    "Sample, grade and application-condition matching",
    "Carbon-fiber roller, mandrel and related tooling supply",
    "Process-improvement, material-integration and technical consulting",
    "Multilingual export inquiry and supply-chain coordination",
  ],
  established: 2017,
  verified: false,
  description:
    "崇献新材料科技（上海）有限公司是位于上海市闵行区的中国大陆材料贸易与应用服务主体。公司现行中文官网以该完整法律名称运行，英文站使用 Topglow Advanced Materials 品牌；崇越电通股份有限公司的公开年报将该上海公司列入集团企业，历史年报记载其于 2017 年 10 月设立。官网所述 1990 年为 Topglow 业务体系的起始年份，并非本上海法律实体的成立年份。公司公开服务包装、工业、能源、光电、机械和专业咨询领域；复材相关范围包括 PAN 基和沥青基碳纤维、预浸料、卷制用 BOPP、橡胶片、芯轴、钻头、脱模剂、功能/离型薄膜、胶粘材料以及碳纤维滚筒等。中国国际复材展网上展厅以同一中文主体收录该企业，分类为其它增强材料、树脂生产用原辅材料、预浸料生产用原辅材料及模具相关设备。本页按一个上海主体完成去重，并将制造商、牌号和产地留作每次采购核验，不把代理或供应范围误写成自有制造能力。",
  descriptionEn:
    "Topglow Advanced Materials (Shanghai) Co., Ltd. is a mainland-China materials trading and application-support entity in Minhang District, Shanghai. Its current Chinese official site publishes the full legal name, while the English site uses the Topglow Advanced Materials brand. Public annual reports from Topco Technologies list the Shanghai company within the group, and a historical group report records its incorporation in October 2017. The 1990 date on Topglow's website describes the wider business lineage, not the incorporation year of this Shanghai legal entity. The official range serves packaging, industrial, energy, optoelectronics, machinery and consulting markets. Composite-related items include PAN- and pitch-based carbon fiber, prepreg, BOPP process film, rubber sheet, mandrels, drills, release agents, functional and release films, adhesives, and carbon-fiber rollers. China Composites Expo lists the matching Chinese entity under other reinforcement materials, resin-production auxiliaries, prepreg-production auxiliaries, and mould-related equipment. This page deduplicates the record as one Shanghai entity and treats manufacturer, grade and origin as RFQ-level checks rather than implying that Topglow manufactures every distributed item.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "Topglow 官网把复材产品列在工业材料板块，公开的碳复材范围为卷轴卷制工艺用双向拉伸聚丙烯薄膜（BOPP）、橡胶片、PAN 基及沥青基碳纤维、预浸料、芯轴、钻头和碳制品用脱模剂；机械板块另列碳纤维滚筒和芯轴、气胀轴、夹具及清洁滚轮。功能材料范围还包括 PET 光学/化学处理/抗静电/有色薄膜，易接着 OPP，单向或双向拉伸 PI、PO 薄膜，硅油型、氟素型及非硅型离型膜，VMPET/VMOPP 电镀膜，以及耐热/耐酸丙烯酸、OCA、PU、抗静电、防污、硬化和硅胶等胶粘或涂层材料。网站没有为复材条目统一公开制造商、商业牌号、TDS、SDS、批次 CoA、MOQ、交期或授权区域，因此采购方不应仅凭目录名称批准材料。RFQ 应先明确 Topglow 在交易中的角色（授权代理、经销商、进口商或转售商），并要求报价和订单写明法律卖方、原制造商、生产地点、品牌/牌号、原产国、授权区域、供货渠道及可追溯链。碳纤维和预浸料应定义 PAN/沥青基、丝束、拉伸模量/强度、上浆体系、纤维面密度、树脂体系与含量、挥发分、固化制度、幅宽、卷长、冷链、剩余保质期和批次试验；薄膜和离型材料应定义基材、厚度及公差、宽度、表面处理、离型力、耐温、雾度/透过率、表面电阻、涂层或胶系、残余粘着率和复材树脂相容性。芯轴、钻头、滚筒和工装需提供材质、图纸、尺寸/跳动、表面粗糙度、平衡等级、载荷、温度、转速及验收方法。还应索取当前 TDS/SDS、批次 CoA、原厂包装标签、保质期、储运要求、法规声明、变更通知、退换货条件、Incoterm 与交期，并对关键材料向原厂交叉确认授权和批次真实性。官网及所审阅页面未提供可完整核对主体、编号、范围、发证机构和有效期的体系或产品证书，因此本页暂不列示已核实认证。",
  productsServicesSummaryEn:
    "Topglow places its composite offering within the industrial-materials section. The published carbon-composite range covers biaxially oriented polypropylene (BOPP) for rolling processes, rubber sheet, PAN- and pitch-based carbon fiber, prepreg, mandrels, drills and release agents for carbon products. The machinery section also lists carbon-fiber rollers and cores, air shafts, fixtures and cleaning rollers. Its broader functional-material range includes optical, chemically treated, antistatic and colored PET film; easy-bond OPP; mono- or biaxially oriented PI and PO film; silicone, fluorine and non-silicone release film; VMPET and VMOPP metallized film; and heat- or acid-resistant acrylic, OCA, PU, antistatic, antifouling, hardcoat and silicone adhesive or coating materials. The site does not publish one common set of legal manufacturers, commercial grades, TDS, SDS, batch CoAs, MOQs, lead times or territory authorizations for these entries, so catalog naming alone is not an approval basis. An RFQ should first state Topglow's transaction role—authorized agent, distributor, importer or reseller—and require the quotation and PO to identify the legal seller, original manufacturer, production site, brand and grade, country of origin, authorized territory, supply channel and traceability chain. For carbon fiber and prepreg, define PAN or pitch base, tow size, tensile modulus and strength, sizing, fiber areal weight, resin system and content, volatiles, cure cycle, width, roll length, cold-chain conditions, remaining shelf life and lot testing. For films and release materials, specify substrate, thickness and tolerance, width, surface treatment, release force, temperature resistance, haze or transmission, surface resistivity, coating or adhesive chemistry, residual adhesion and compatibility with the composite resin. For mandrels, drills, rollers and fixtures, supply material, drawings, dimensional and runout limits, surface finish, balance grade, load, temperature, speed and acceptance method. Require current TDS and SDS, batch CoA, original-manufacturer packaging labels, shelf life, storage and transport conditions, regulatory declarations, change notification, return terms, Incoterm and lead time, and independently confirm authorization and batch authenticity with the original manufacturer for critical materials. No management-system or product certificate with a complete legal entity, number, scope, issuer and current validity was exposed on the reviewed pages, so no certification is recorded as verified here.",
  ecatalogs: [
    {
      title: "Topglow 英文官网",
      titleEn: "Official Topglow English Website",
      description: "上海主体、联系方式、服务领域和多语言出口入口。",
      descriptionEn:
        "Shanghai identity, contact details, service markets and multilingual export entry point.",
      url: "https://en.topglow.cn/",
      format: "Official website",
    },
    {
      title: "Topglow 碳复材产品页",
      titleEn: "Official Topglow Carbon-Composite Materials Page",
      description: "碳纤维、预浸料、工艺薄膜、芯轴、钻头和脱模剂范围。",
      descriptionEn:
        "Published carbon fiber, prepreg, process film, mandrel, drill and release-agent range.",
      url: "https://en.topglow.cn/carbon-composite-materials.htm",
      format: "Product page",
    },
    {
      title: "Topglow 工业功能材料页",
      titleEn: "Official Topglow Industrial Functional Materials Page",
      description: "功能薄膜、离型膜、胶粘剂和涂层材料范围。",
      descriptionEn:
        "Functional films, release liners, adhesives and coating-material range.",
      url: "https://en.topglow.cn/functional-film-chemistry-materials.htm",
      format: "Product page",
    },
    {
      title: "Topglow 联系方式",
      titleEn: "Official Topglow Contact Page",
      description: "上海闵行地址、电话、传真和电子邮箱。",
      descriptionEn:
        "Minhang, Shanghai address, telephone, fax and email.",
      url: "https://en.topglow.cn/contact-us.htm",
      format: "Contact page",
    },
    {
      title: "Topglow 公司电子型录",
      titleEn: "Official Topglow Company Brochure",
      description: "企业与服务范围的现行官网 PDF。",
      descriptionEn: "Current official PDF covering the company and service range.",
      url: "https://www.topglow.cn/uploadfiles/428/EDM/2026cn_profile_service.pdf",
      format: "Official brochure (PDF)",
    },
    {
      title: "中国国际复材展崇献网上展厅",
      titleEn: "China Composites Expo Topglow Net Show",
      description: "匹配中文主体、企业介绍和复材产品分类。",
      descriptionEn:
        "Organizer-published matching Chinese identity, company summary and composite categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?key_word=%E5%B4%87%E7%8C%AE",
      format: "Exhibitor profile",
    },
    {
      title: "崇越电通 2025 年年报",
      titleEn: "Topco Technologies 2025 Annual Report",
      description: "集团公开披露中的崇献新材料科技（上海）有限公司。",
      descriptionEn:
        "Parent-company disclosure listing Topglow Advanced Materials (Shanghai).",
      url: "https://www.topcocorp.com/upload/media/finance/INFOR/Meeting/2025AnnualReport.pdf",
      format: "Parent annual report (PDF)",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/topglow-shanghai-logo.png",
  contactEmail: "webmaster@topglow.com",
  contactPhone: "+86 21 6401 1398",
  address:
    "Room 705, No. 1855 Qixin Road, Minhang District, Shanghai, China",
  website: "https://www.topglow.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "PAN- and pitch-based carbon-fiber sourcing",
    "carbon-fiber prepreg sourcing",
    "BOPP process film and rubber sheet",
    "release films and release agents",
    "functional PET, OPP, PI and PO films",
    "industrial adhesives and coating materials",
    "mandrels, drills and carbon-fiber rollers",
    "original-manufacturer material and grade coordination",
    "multilingual export inquiry support",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
