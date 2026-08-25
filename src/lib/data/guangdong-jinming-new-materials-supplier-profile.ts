import type { SupplierListing } from "@/lib/db/schema";

export const GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_ID = "sup-guangdong-jinming-new-materials";
export const GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_SLUG = "guangdong-jinming-new-materials";

// CCE uses the current Guangdong Jinming exhibitor name; the matching official
// site still displays the earlier Dongguan Jinming Composite Materials label.
// Identity is joined by the same 2012 origin, Dongguan location, product/process
// scope and contact domain. Official logo downloaded 2026-08-25 from jmfiber.cn.
export const GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_PROFILE: SupplierListing = {
  id: GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_ID,
  name: "广东锦明新材料科技有限公司",
  nameEn: "Guangdong Jinming New Materials Technology Co., Ltd.",
  slug: GUANGDONG_JINMING_NEW_MATERIALS_SUPPLIER_SLUG,
  location: "广东东莞",
  locationEn: "Dongguan, Guangdong, China",
  province: "广东",
  category: "manufacturer",
  products: [
    "卷制碳纤维管与大管径碳管",
    "碳纤维异型管与定制管",
    "碳纤维板、片及拉编板材",
    "拉编碳纤维管与型材",
    "模压碳纤维制品与异形件",
    "碳纤维机器人机械臂及配件",
    "无人机机壳及工业/农业无人机复材部件",
    "碳纤维船桨与其他运动器材",
    "碳纤维摄影、医疗与汽车配件",
    "彩色玻璃纤维圆管",
  ],
  productsEn: [
    "Roll-wrapped carbon fiber tubes and large-diameter carbon fiber tubes",
    "Custom carbon fiber tubes and shaped tubing",
    "Carbon fiber sheets, plates and pull-braided panels",
    "Pull-braided carbon fiber tubes and profiles",
    "Compression-molded carbon fiber products and custom-shaped parts",
    "Carbon fiber robot arms and robotic components",
    "Carbon fiber UAV shells and industrial or agricultural drone parts",
    "Carbon fiber paddles and other sporting goods",
    "Carbon fiber photography, medical and automotive components",
    "Colored fiberglass round tubes",
  ],
  processList: [
    "预浸料卷管与大直径管成型",
    "连续拉编/编织增强成型",
    "碳纤维板材成型",
    "碳纤维异型件压缩模塑",
    "手糊复合材料成型（展会说明）",
    "快速模具与产品成型服务",
    "按图纸进行碳纤维零部件定制",
    "外观、尺寸与装配接口检验",
  ],
  processListEn: [
    "Prepreg roll wrapping and large-diameter tube forming",
    "Continuous pull-braiding and braided reinforcement forming",
    "Carbon fiber plate and sheet forming",
    "Compression molding of carbon-fiber shaped parts",
    "Composite hand lay-up (expo description)",
    "Rapid tooling and product-forming service",
    "Drawing-based custom carbon-fiber component production",
    "Cosmetic, dimensional and assembly-interface inspection",
  ],
  established: 2012,
  verified: false,
  description:
    "广东锦明新材料科技有限公司是中国国际复材展当前列示的东莞碳纤维制品企业。展会资料称企业 2012 年成立，具备管材卷制、异形件模压、拉编管材和手糊等工艺，生产碳纤维管、板与模压制品。匹配的现行 jmfiber.cn 官网仍使用“东莞市锦明复合材料有限公司”名称，但公开相同的东莞地点、碳管/碳板/卷制/拉编/模压产品范围以及机器人、无人机、运动、摄影、医疗和汽车零部件。本页据此把展会当前名称与官网旧标签去重为一个供应商，同时明确名称边界，而不声称已独立审阅工商更名文件。官网还公开彩色玻璃纤维圆管；未发现碳纤维钓鱼竿的具体产品页，因此不植入该搜索词。",
  descriptionEn:
    "Guangdong Jinming New Materials Technology Co., Ltd. is the current Dongguan carbon-fiber-products exhibitor listed by China Composites Expo. The organizer dates the business to 2012 and describes roll-wrapped tube, compression-molded shaped-part, pull-braided tube and hand-lay-up operations for carbon-fiber tubes, plates and molded products. The matching current jmfiber.cn website still displays the earlier label Dongguan Jinming Composite Materials Co., Ltd., but publishes the same Dongguan location, tube, plate, roll-wrapping, pull-braiding and molding scope and robot, UAV, sports, photography, medical and automotive components. GetFRP deduplicates the current expo identity and the website's legacy label as one supplier while disclosing the boundary; no independent corporate-name-change filing was reviewed. The site also lists colored fiberglass round tubes. No specific carbon-fiber fishing-rod product page was found, so that search phrase is not assigned.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "锦明官网把产品按“所有产品、碳纤维管、卷制、拉编、模压、航天/科技、摄影器材、运动器材、机器人、医疗、时尚和定制产品”组织，并公开碳纤维定制板、拉编板、异型管、大管径管、机械臂、无人机机壳、船桨、轮椅、箭袋和玻纤圆管等具体条目。官网称管材厚度公差可达 ±0.1 mm，但未给出该声明适用的直径、长度、壁厚、工艺、量测方法或抽样范围，因此采购方必须在当前图纸和检验计划中重新确认。碳管 RFQ 应锁定圆/方/异形截面、内外径或基准尺寸、壁厚、长度、直线度、圆度、同心度、锥度、铺层/编织角、纤维与树脂牌号、表面纹理、光泽、端部、孔位、粘接和动平衡；碳板需明确尺寸、厚度、0/90 或准各向同性铺层、平面度、表面、孔加工、边缘封闭和装配载荷。卷制、拉编、模压和手糊不能只按“碳纤维制品”混合比价，应分别验证模具、材料批次、铺层或编织、固化制度、成型压力、孔隙、尺寸和外观。机器人臂、无人机、医疗、摄影和汽车部件需要结构接口、质量、刚度、疲劳、冲击、环境、阻燃/生物相容/行业标准等项目专用要求；官网应用分类不等于设计批准或客户认证。运动制品应以具体图纸和性能指标询价：官网有碳纤维船桨等条目，但没有本轮可核验的碳纤维钓鱼竿产品，因此不得从“运动器材”推断该词。要求供应商提交拟供材料与工艺的 TDS/SDS、原料及成品 CoA 字段、首件、尺寸与外观报告、代表性破坏/无损试验、模具所有权、变更通知和不合格处置。官网展示“ISO9001 认证”入口，但本轮未取得同时清晰显示当前法律主体、证书号、范围、机构和有效期的文件，认证数组保持为空。报价应拆分模具、样件、量产单价、MOQ、二次加工、涂装、检验、包装和 Incoterm，并确认使用广东锦明还是官网旧主体签约、开票、收款和出口。",
  productsServicesSummaryEn:
    "Jinming's official site organizes its catalog into all products, carbon-fiber tubes, roll-wrapped, pull-braided, molded, aerospace or technology, photography, sporting, robotic, medical, fashion and custom products. Specific entries include custom sheets, pull-braided panels, shaped and large-diameter tubes, robot arms, UAV shells, paddles, wheelchairs, quivers and colored fiberglass tubes. The website states tube thickness tolerance as tight as ±0.1 mm, but does not define the applicable diameter, length, wall, process, measurement method or sampling scope, so it must be reconfirmed in the current drawing and inspection plan. A tube RFQ should lock round, square or shaped geometry; inside and outside dimensions; wall; length; straightness; roundness; concentricity; taper; lay-up or braid angle; fiber and resin grade; cosmetic texture and gloss; ends; holes; bonding and balance. A sheet RFQ should define size, thickness, 0/90 or quasi-isotropic lay-up, flatness, face, machining, edge sealing and assembly loads. Roll wrapping, pull-braiding, compression molding and hand lay-up should not be combined under a generic carbon-products quote; separately qualify tooling, material lot, lay-up or braid, cure, molding pressure, voids, dimensions and appearance. Robot arms, UAVs, medical, photography and automotive parts need project-specific interfaces, mass, stiffness, fatigue, impact, environment and relevant flame, biocompatibility or industry requirements. Website application categories are not design approval or customer certification. Sporting goods should be sourced against a named product drawing and performance specification. The site publishes a carbon-fiber paddle, but no verifiable carbon-fiber fishing-rod product was reviewed, so that phrase must not be inferred from the sports category. Require TDS and SDS for the proposed materials and process, raw-material and finished-part CoA fields, first article, dimensional and cosmetic report, representative destructive or NDT evidence, tooling ownership, change notification and nonconformance handling. The site has an ISO 9001 entry, but this review did not obtain a legible current certificate showing the current legal entity, number, scope, issuer and validity; no certification is recorded as verified. Separate tooling, samples, recurring unit price, MOQ, secondary machining, coating, inspection, packing and Incoterm, and confirm whether Guangdong Jinming or the legacy website entity will contract, invoice, receive payment and export.",
  ecatalogs: [
    { title: "锦明官方网站", titleEn: "Official Jinming Website", description: "企业、产品与联系入口。", descriptionEn: "Official company, product and contact entry.", url: "https://www.jmfiber.cn/", format: "Official website" },
    { title: "锦明碳纤维产品目录", titleEn: "Jinming Carbon Fiber Product Directory", description: "管、板、卷制、拉编、模压和应用制品。", descriptionEn: "Tubes, sheets, roll-wrapped, pull-braided, molded and application parts.", url: "https://www.jmfiber.cn/products/", format: "Product directory" },
    { title: "锦明公司简介", titleEn: "Jinming Company Profile", description: "官网旧主体名称与能力说明。", descriptionEn: "Official legacy entity label and capability description.", url: "https://www.jmfiber.cn/about/", format: "Company profile" },
    { title: "锦明官方联系方式", titleEn: "Official Jinming Contact", description: "电话、邮箱与东莞地址。", descriptionEn: "Official telephone, email and Dongguan address.", url: "https://www.jmfiber.cn/contact/", format: "Contact page" },
    { title: "中国国际复材展锦明展商页", titleEn: "China Composites Expo Jinming Exhibitor Page", description: "当前广东锦明主体与工艺范围。", descriptionEn: "Organizer source for the current Guangdong Jinming entity and process scope.", url: "https://www.chinacompositesexpo.com/en/netshow-3827-7890981.html", format: "Exhibitor profile" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/guangdong-jinming-new-materials-logo.png",
  contactEmail: "yeminyi@jmfiber.com",
  contactPhone: "+86 133 2688 0630",
  address: "Building B, Jilong Industrial Zone, Changlong Village, Huangjiang Town, Dongguan, Guangdong, China",
  website: "https://www.jmfiber.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 27,
  viewCount: 0,
  capabilities: ["carbon fiber tubes", "carbon fiber sheets and plates", "roll-wrapped tubes", "pull-braided composites", "compression-molded carbon parts", "robot and UAV components", "carbon fiber sporting goods", "custom composite parts"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
