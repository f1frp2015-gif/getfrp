import type { SupplierListing } from "@/lib/db/schema";

export const DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_ID =
  "sup-dezhou-junteng-material-technology";
export const DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_SLUG =
  "dezhou-junteng-material-technology";

// Curated from the company's current export website, its established bilingual
// dzjunteng.com website, China Composites Expo's Net Show and the national
// High-Tech Enterprise Recognition portal. The current certificate gallery
// identifies the Chinese legal entity as 德州骏腾材料科技股份有限公司, while the
// websites and CCE use Dezhou Junteng Material Technology Co., Ltd.; those
// names and both official domains are deduplicated here as one mainland-China
// supplier. Product, capacity, equipment and process statements remain
// company-published claims unless explicitly attributed to the government
// record. The current official header logo was reviewed on 2026-08-13 at:
// https://www.juntengcarbonfiber.com/upload/8942/20260629132755489704.webp
// and is stored locally rather than hotlinked.
export const DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_PROFILE: SupplierListing =
  {
    id: DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_ID,
    name: "德州骏腾材料科技股份有限公司",
    nameEn: "Dezhou JunTeng Material Technology Co., Ltd.",
    slug: DEZHOU_JUNTENG_MATERIAL_TECHNOLOGY_SUPPLIER_SLUG,
    location: "山东德州天衢新区",
    locationEn: "Dezhou, Shandong, China",
    province: "山东",
    category: "fiber",
    products: [
      "200 g/m² 和 300 g/m² 单向碳纤维加固布（企业目录）",
      "1K–12K 平纹、斜纹及缎纹双向碳纤维编织布",
      "提花、彩色及混编碳纤维织物",
      "碳纤维拉挤板材",
      "碳纤维浸渍胶、粘钢胶、植筋胶及灌注胶",
      "短切碳纤维和碳纤维粉",
      "碳/碳板材、螺栓、螺母、垫片、螺柱及隔热材料",
      "按图加工碳/碳异形件和高温工装",
    ],
    productsEn: [
      "200 g/m² and 300 g/m² unidirectional carbon-fiber reinforcement fabrics (company catalog)",
      "1K–12K plain-, twill- and satin-weave bidirectional carbon-fiber fabrics",
      "Jacquard, colored and hybrid carbon-fiber textiles",
      "Pultruded carbon-fiber plates",
      "Carbon-fabric impregnating adhesive, steel-bonding adhesive, anchoring adhesive and grouting adhesive",
      "Chopped carbon fiber and carbon-fiber powder",
      "Carbon-carbon plates, bolts, nuts, washers, studs and thermal-insulation materials",
      "Drawing-based carbon-carbon shapes and high-temperature fixtures",
    ],
    processList: [
      "单向碳纤维布生产及碳纤维经纬编织",
      "Dornier 和 747 织机生产（企业声明）",
      "平纹、斜纹、缎纹、提花及混编织造",
      "分切、锁边和定制幅宽加工",
      "碳纤维板材拉挤（企业目录）",
      "结构加固环氧胶粘剂配套供应",
      "碳/碳成型、碳化、石墨化、烧结及精密机加工（企业声明）",
      "原材料、过程和成品实验室检测（企业声明）",
    ],
    processListEn: [
      "Unidirectional carbon-fiber reinforcement production and bidirectional weaving",
      "Dornier and 747 loom production (company claim)",
      "Plain, twill, satin, Jacquard and hybrid weaving",
      "Slitting, edge control and custom-width conversion",
      "Carbon-fiber plate pultrusion (company catalog)",
      "Complementary structural-reinforcement epoxy adhesives",
      "Carbon-carbon forming, carbonization, graphitization, sintering and precision machining (company claim)",
      "Incoming-material, in-process and finished-product laboratory testing (company claim)",
    ],
    established: 2008,
    verified: false,
    description:
      "德州骏腾材料科技股份有限公司是位于中国大陆山东省德州市的碳纤维织物及碳/碳复合材料企业。当前英文官网的页眉、公司简介、联系信息和证书图片均指向同一德州主体；原有中英文官网 dzjunteng.com 展示相同的 2008 年成立时间、产品范围和联系电话，中国国际复材展则以 DEZHOU JUNTENG MATERIAL TECHNOLOGY CO., LTD 列示同一企业。本页因此把股份公司中文名称、官网英文名称、展商名称及两个官方域名去重为同一供应商。企业官网称现有 30 余名员工、7 名研发人员、30 余条生产线，织物年产能超过 100 万平方米，并配置综合实验室和技术检测中心；复材展资料写员工 40 余人。由于本页未进行现场审厂，也未取得按产线、班次和产品拆分的产能记录，人员、设备和产能均保留为企业声明，规模等级不作核实。",
    descriptionEn:
      "Dezhou JunTeng Material Technology Co., Ltd. is a mainland-China carbon-fiber textile and carbon-carbon composite supplier in Dezhou, Shandong. Its current export website, established bilingual dzjunteng.com site and China Composites Expo entry identify the same 2008-founded business. The current qualification images use the Chinese legal name 德州骏腾材料科技股份有限公司, while the English sites and exhibition use the Co., Ltd. form; GetFRP deduplicates those names and both official domains as one supplier. The company claims more than 30 employees, seven R&D staff, over 30 production lines, annual fabric capacity above 1 million square metres and an internal laboratory. CCE has stated more than 40 employees. No site audit or line-level capacity record was obtained, so headcount, equipment and capacity remain company claims.",
    certifications: [
      "国家高新技术企业（证书号 GR202337005133，2023 年 12 月 7 日发证，三年有效期）",
    ],
    certificationsEn: [
      "National High-Tech Enterprise (certificate GR202337005133, issued December 7, 2023 with three-year validity)",
    ],
    productsServicesSummary:
      "骏腾当前官网把产品分为碳纤维加固材料、碳纤维编织布和碳/碳材料三组。加固材料页列出 200 g/m²、300 g/m² 单向布和 I/II 级企业选型，并宣称 I 级材料拉伸强度超过 3400 MPa、弹性模量不低于 2.3×10⁵ MPa；但网页没有在同一位置给出可下载的当前型式检验报告、样本数量、统计基础或逐批保证字段。采购方必须按项目设计和现行适用标准锁定单向布等级、原丝生产商与牌号、12K 或其他丝束、单位面积质量及公差、理论厚度、宽度和卷长、纤维方向、拼接、毛丝、断丝、上浆/表面处理、树脂体系、浸润性、拉伸强度和模量试验方法，并索取当前第三方报告、批次 COA、合格证及施工配套胶的 TDS/SDS。网站的 300 g/m² 6K 2×2 斜纹布产品页公布 300±4 g/m²、约 0.30 mm 干布厚度、500/1000 mm 常备幅宽和 10–1500 mm 定制幅宽，并列出 ≥3300 MPa 拉伸强度与 ≥220 GPa 模量；这些是企业目录值，不是 GetFRP 保证值，而且页面明确提醒双向斜纹布不应代替建筑主承重加固用单向布。斜纹类别页的“标准规格”表却把条目写成平纹，属于目录内部不一致，询价时应要求供应商确认准确织法、克重、丝束、经纬密度、幅宽、厚度、测试方向和当前数据表。编织布还包括 1K–12K 平纹、斜纹、缎纹、提花、彩色和混编产品；适用于外观件、运动器材、无人机、模具和一般复合材料时，应另行验证树脂相容性、铺覆性、歪斜/弓纬、边部、卷芯、缺陷限值和目标层合板性能。官网还列出碳纤维拉挤板、短切纤维、粉末和结构加固胶。胶粘剂采购必须锁定 A/B 组分、混合比、黏度、适用期、施工温湿度、固化制度、储存期、钢—混凝土或 CFRP—混凝土界面试验、耐久性和目的地化学品文件，不能把网站的“国标 A 级”文字当作当前产品批准。碳/碳目录覆盖板材、紧固件、隔热毡/筒和异形件，并宣称具备成型、碳化、石墨化、烧结和机加工能力。高温炉、光伏及半导体热场 RFQ 应明确原料和预制体、密度、开口孔隙率、灰分及元素限值、强度方向、工作温度与气氛、氧化防护或 SiC 涂层、热循环、尺寸公差、螺纹、表面状态、清洁和包装；官网个别异形件页面的 ±0.02 mm、2200℃、≤550 ppm 灰分和 1300 次以上热冲击等数字必须由与所报价牌号、尺寸、工艺和批次对应的报告验证。公司资质页目前仍宣称 ISO 9001、ISO 14001 和 ISO 45001，但公开的证书图片分别显示 00221Q28354R1S、00221E34973R1S 和 00221S24399R1S，均已于 2024 年 12 月 10 日到期；未取得续证编号、范围和有效期，因此不把三体系列为当前认证。页面展示的专精特新和创新型中小企业牌匾有效期也止于 2025 年 12 月 31 日，AAA 信用类证书则止于 2023 年 2 月 18 日，均不列为当前资格。高新技术企业证书 GR202337005133 的企业名称、发证日期和三年有效期可由官网原图和国家高企认定管理工作网的山东 2023 年第二批备案公告交叉核对，本页仅把它记录为企业资格，不视为产品合格证明。中国复材展把该展商归入碳纤维、混编织物、预浸料和复合材料制品，但当前官网的可见产品目录未找到明确预浸料产品页，所以本页不把预浸料列为当前已证实产品。英文官网提供企业域名邮箱、电话、WhatsApp、询盘表、英文产品内容和国际社交入口，因此标记为具备基础出口沟通条件；这不等于通过工厂、质量、制裁、海关、付款账户或目的国合规审核。首单前应通过官网固定电话和企业书面资料双重确认合同主体、收款账户、生产地址、原产地文件、出口主体及可追溯样品。",
    productsServicesSummaryEn:
      "JUN TENG's catalog covers reinforcement fabrics, woven carbon textiles and carbon-carbon materials. Its reinforcement page lists 200 and 300 g/m² unidirectional fabric and company-described Grade I/II options, claiming above 3,400 MPa tensile strength and at least 230 GPa modulus for Grade I. No type-test report or lot guarantee appears beside those claims; define fiber grade, tow, mass, geometry, surface treatment, resin and test method, then obtain reports and lot COAs. A 300 g/m² 6K 2×2 twill page publishes 300±4 g/m², about 0.30 mm dry thickness, 500/1,000 mm stock widths, 10–1,500 mm custom width, ≥3,300 MPa tensile strength and ≥220 GPa modulus. These are catalog values. The page warns that bidirectional twill cannot replace unidirectional primary structural reinforcement, while its category table inconsistently labels standard rows as plain weave. Require the exact weave, tow, count, width, test direction and datasheet. Woven textiles and structural adhesives require product-specific handling, compatibility, cure, interface and aging evidence. Carbon-carbon parts require density, ash, directional strength, service atmosphere, protection, dimensions and cleanliness. Figures such as ±0.02 mm, 2,200°C, ≤550 ppm ash and 1,300-plus thermal-shock cycles need part-specific evidence. The site claims ISO 9001, ISO 14001 and ISO 45001, but displayed certificates 00221Q28354R1S, 00221E34973R1S and 00221S24399R1S expired on December 10, 2024. Displayed SME and credit awards are also expired. High-tech certificate GR202337005133 remains within its three-year term and matches the national 2023 Shandong filing; it is not product approval. CCE tags prepreg, but no clear current prepreg product page was found, so prepreg is not listed here. English contact channels support basic export communication, not completed qualification. Confirm the contracting entity, payee, factory and export party before ordering.",
    ecatalogs: [
      {
        title: "德州骏腾英文官网",
        titleEn: "Official JUN TENG Export Website",
        description: "当前英文企业主体、产品目录、联系方式和国际询盘入口。",
        descriptionEn: "Current English identity, product catalog, contact details and international inquiry path.",
        url: "https://www.juntengcarbonfiber.com/",
        format: "Official website",
      },
      {
        title: "德州骏腾公司简介",
        titleEn: "Official JUN TENG Company Profile",
        description: "2008 年沿革、人员、厂址、产线、产能和产品范围声明。",
        descriptionEn: "Company-published 2008 history, workforce, site, production-line, capacity and product claims.",
        url: "https://www.juntengcarbonfiber.com/about.html",
        format: "Company profile",
      },
      {
        title: "德州骏腾资质证书页",
        titleEn: "Official JUN TENG Qualification Gallery",
        description: "高新技术企业、历史 ISO、已到期中小企业牌匾和信用证书原图。",
        descriptionEn: "Source images for the high-tech certificate, historical ISO certificates and expired SME and credit awards.",
        url: "https://www.juntengcarbonfiber.com/about/certificate.html",
        format: "Official certificate gallery",
      },
      {
        title: "碳纤维加固材料目录",
        titleEn: "Official Carbon-Fiber Reinforcement Catalog",
        description: "单向布、双向布、200/300 g/m² 选型和配套结构胶。",
        descriptionEn: "Unidirectional and bidirectional fabrics, 200/300 g/m² selection guidance and structural adhesives.",
        url: "https://www.juntengcarbonfiber.com/carbon-fiber-reinforcement-fabric",
        format: "Official product catalog",
      },
      {
        title: "300 g/m² 6K 斜纹碳纤维布",
        titleEn: "Official 300 g/m² 6K Twill Fabric Page",
        description: "企业规格值、幅宽、适用工艺和建筑主承重用途限制说明。",
        descriptionEn: "Company specification values, widths, process notes and explicit primary-structural-use limitation.",
        url: "https://www.juntengcarbonfiber.com/300g-twill-carbon-fiber-woven-fabric.html",
        format: "Official product page",
      },
      {
        title: "碳/碳复合材料目录",
        titleEn: "Official Carbon-Carbon Materials Catalog",
        description: "板材、紧固件、隔热材料及按图异形件范围。",
        descriptionEn: "Carbon-carbon plates, fasteners, insulation and drawing-based custom shapes.",
        url: "https://www.juntengcarbonfiber.com/carbon-carbon-materials",
        format: "Official product catalog",
      },
      {
        title: "德州骏腾官方联系方式",
        titleEn: "Official JUN TENG Contact Page",
        description: "电话、企业域名邮箱、WhatsApp 和生产地址。",
        descriptionEn: "Telephone, company-domain email, WhatsApp and production address.",
        url: "https://www.juntengcarbonfiber.com/contact.html",
        format: "Official contact page",
      },
      {
        title: "德州骏腾原有双语官网",
        titleEn: "Established Official JUN TENG Bilingual Website",
        description: "交叉核对英文主体、2008 年沿革、织造设备和既有产品目录。",
        descriptionEn: "Cross-check for the English identity, 2008 history, weaving equipment and established product catalog.",
        url: "https://en.dzjunteng.com/",
        format: "Official website",
      },
      {
        title: "中国国际复材展德州骏腾网上展厅",
        titleEn: "China Composites Expo Dezhou Junteng Net Show",
        description: "展商英文名称、6W12 展位、材料范围和应用领域。",
        descriptionEn: "Exhibitor identity, booth 6W12, material scope and application fields.",
        url: "https://www.chinacompositesexpo.com/en/netshow-3512-6761808.html",
        format: "Exhibitor profile",
      },
      {
        title: "山东省 2023 年第二批高新技术企业备案公告",
        titleEn: "National Filing of Shandong 2023 Second-Batch High-Tech Enterprises",
        description: "国家高企认定管理工作网备案公告，与证书号 GR202337005133 交叉核对。",
        descriptionEn: "National recognition-portal filing used to cross-check certificate GR202337005133.",
        url: "http://www.innocom.gov.cn/gqrdw/c101460/202312/24a992fbf67241be826444143b3c4074.shtml",
        format: "Government announcement",
      },
    ],
    profilePublished: true,
    profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
    logo: "/supplier-assets/dezhou-junteng-logo.webp",
    contactEmail: "fanfan@juntengcarbonfiber.com",
    contactPhone: "+86 534 260 9588",
    address:
      "East of Chongde 11th Road, East Zone, Economic and Technical Development Zone Project, Dezhou, Shandong, China",
    website: "https://www.juntengcarbonfiber.com/",
    enterpriseId: null,
    scaleTier: null,
    brandPriority: 18,
    viewCount: 0,
    capabilities: [
      "unidirectional carbon-fiber reinforcement production",
      "1K–12K plain, twill, satin, Jacquard and hybrid weaving",
      "Dornier and 747 weaving machines (company claim)",
      "slitting, edge control and 10–1,500 mm custom width (product-page claim)",
      "carbon-fiber plate pultrusion",
      "structural-reinforcement adhesive supply",
      "carbon-carbon forming and thermal processing (company claim)",
      "carbon-carbon precision machining to drawing",
      "30-plus production lines and internal laboratory (company claim)",
    ],
    standardsSupported: [],
    moqKg: null,
    leadTimeDays: null,
    exportReady: true,
    createdAt: new Date("2026-08-13T00:00:00.000Z"),
    updatedAt: new Date("2026-08-13T00:00:00.000Z"),
  };
