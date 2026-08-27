import type { SupplierListing } from "@/lib/db/schema";

export const DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_ID =
  "sup-dezhou-hongyu-compo-tech";
export const DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_SLUG =
  "dezhou-hongyu-compo-tech";

// Curated from the company's current official Chinese website, China
// Composites Expo's Net Show, the China Composites Industry Association and a
// Shandong science-and-technology authority list. The Chinese legal identity,
// CCE's DEZHOU HONGYU COMPO-TECH CO., LTD. exhibitor name and hyfhclkj.cn are
// deduplicated as one mainland-China supplier. Product, process, capacity,
// patent and management-system statements remain company-published claims
// unless explicitly attributed to a government source. The official header
// logo was reviewed on 2026-08-13 at the company's current website, where its
// image source is:
// https://omo-oss-image.thefastimg.com/portal-saas/pg2025012014091105604/cms/image/6fac29ca-8212-4c12-98be-e0bfe541038c.png
// A referer-aware request to that exact asset succeeded on 2026-08-26. The
// complete transparent logo is stored locally rather than hotlinked.
export const DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_PROFILE: SupplierListing = {
  id: DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_ID,
  name: "德州泓宇复合材料科技有限公司",
  nameEn: "Dezhou Hongyu Compo-Tech Co., Ltd.",
  slug: DEZHOU_HONGYU_COMPO_TECH_SUPPLIER_SLUG,
  location: "山东德州天衢新区",
  locationEn: "Dezhou, Shandong, China",
  province: "山东",
  category: "fiber",
  products: [
    "碳纤维环氧预浸布（官网 130℃ 固化体系）",
    "24T、30T、40T、46T 和 55T 以上碳纤维单向预浸布系列（企业目录）",
    "沥青基 65T/80T 高模量碳纤维单向预浸布（企业目录）",
    "1K、3K、6K、12K 碳纤维平纹和斜纹编织布",
    "单向玻璃纤维布",
    "双向玻璃纤维布",
    "玄武岩、芳纶及芳碳混编预浸材料（行业协会报道）",
    "贴合布及客户规格复合增强材料（企业声明）",
  ],
  productsEn: [
    "Carbon-fiber epoxy prepreg fabrics with a company-published 130°C cure system",
    "24T, 30T, 40T, 46T and 55T-plus unidirectional carbon-fiber prepreg series (company catalog)",
    "Pitch-based 65T/80T high-modulus unidirectional carbon-fiber prepreg (company catalog)",
    "1K, 3K, 6K and 12K plain- and twill-weave carbon-fiber fabrics",
    "Unidirectional fiberglass fabrics",
    "Bidirectional fiberglass fabrics",
    "Basalt, aramid and aramid-carbon hybrid prepreg materials (industry-association report)",
    "Laminated and customer-specified composite reinforcement materials (company claim)",
  ],
  processList: [
    "碳纤维与环氧树脂热熔浸渍（企业产品页）",
    "单向碳纤维预浸料生产",
    "碳纤维平纹和斜纹编织",
    "单向及双向玻璃纤维布生产",
    "贴合布生产（企业声明）",
    "按客户克重、树脂含量、厚度和幅宽定制（企业目录）",
    "实验室新产品验证、原料控制、理化测试及工艺优化（企业声明）",
  ],
  processListEn: [
    "Hot-melt impregnation of carbon fiber with epoxy resin (official product page)",
    "Unidirectional carbon-fiber prepreg production",
    "Plain- and twill-weave carbon-fiber fabric production",
    "Unidirectional and bidirectional fiberglass-fabric production",
    "Laminated-fabric production (company claim)",
    "Customer-specific areal weight, resin content, thickness and width (company catalog)",
    "Laboratory product validation, incoming-material control, physical testing and process optimization (company claim)",
  ],
  established: 2018,
  verified: false,
  description:
    "德州泓宇复合材料科技有限公司是位于中国大陆山东省德州市天衢新区的碳纤维及复合增强材料企业。当前官网直接显示中文法律主体、乐普大道 3958 号地址、联系电话、备案号和产品目录；中国国际复材展以 DEZHOU HONGYU COMPO-TECH CO., LTD. 列示相同的成立时间、所在地和碳纤维/玻纤预浸材料范围。本页因此把中文名称、英文展商名称及 hyfhclkj.cn 去重为同一供应商，并与 GetFRP 已收录的嘉兴宏宇复合材料设备企业区分。官网称公司成立于 2018 年 11 月、注册资本 900 万元、占地 40 亩、建筑面积约 2 万平方米，现有 4 条预浸料线、5 条编织线和贴合布线，年综合产能 300 万平方米；展会资料则曾写年产能 600 万平方米。由于本页未取得独立审厂或按产品和产线拆分的产能记录，规模与产能均保留为企业声明，规模等级不作核实。",
  descriptionEn:
    "Dezhou Hongyu Compo-Tech Co., Ltd. is a mainland-China carbon-fiber and composite-reinforcement company in Dezhou, Shandong. The current website identifies 德州泓宇复合材料科技有限公司, the Lepu Avenue 3958 address and its product catalog; China Composites Expo uses the matching English exhibitor identity. GetFRP deduplicates those names and hyfhclkj.cn as one supplier, separate from the listed Hongyu equipment company in Jiaxing. The website dates the company to November 2018 and claims four prepreg lines, five weaving lines, a lamination line and 3 million square metres of annual capacity. Exhibition material has stated 6 million square metres. With no independent site audit or line-level record, scale and capacity remain company claims.",
  certifications: [
    "国家高新技术企业（山东省 2025 年第二批名单，证书号 GR202537005644）",
  ],
  certificationsEn: [
    "National High-Tech Enterprise (Shandong 2025 second-batch list, certificate GR202537005644)",
  ],
  productsServicesSummary:
    "泓宇官网把产品分为碳纤维预浸布、碳纤维编织布、单向玻纤、双向玻纤和拓展产品。碳纤维预浸布页面称材料由碳纤维和环氧树脂热熔浸渍制成，固化温度为 130℃，适用于模压、真空袋和卷绕成型，并公布 24T、30T、40T、46T/55T 以上系列的型号、纤维克重、树脂含量、总面密度、厚度和 1000 mm 幅宽。另一个页面列出沥青基 65T/80T 高模量单向预浸布，公开 100–200 g/m² 碳纤维含量、25% 树脂含量、0.10–0.20 mm 厚度和 1000 mm 幅宽。编织布页面列出 1K、3K、6K、12K，平纹或斜纹，单位面积质量约 120–480 g/m²，并公开企业型号、经纬密度、厚度和幅宽字段。这些参数均为官网目录值，不是 GetFRP 保证值；目录中 HYCU-12500 沥青基行的纤维含量写作 120 g/m²，而型号与总面密度字段可能使买方预期 125 g/m²，必须由供应商在当前 TDS 和报价中书面澄清。预浸料 RFQ 应锁定纤维生产商与牌号、PAN 基或沥青基、丝束、模量等级、树脂牌号和混配、树脂含量及公差、纤维和总面密度、挥发分、含水率、厚度、幅宽、卷长、离型纸/膜、接头、外观、黏性、铺覆性、流动、凝胶、固化制度、玻璃化转变温度、孔隙率及代表性层合板性能。还应明确 -18℃ 或供应商规定条件下的储存期限、运输温度记录、解冻方式、室温暴露寿命、复冻规则、批次标签、包装和废料处理；官网所审阅页面未给出完整冷链、保质期和 out-life 文件。24T、30T、40T、46T、55T、65T、80T 等商业等级不能自动替代可追溯的纤维牌号、批次 COA 或最终层合板设计值，买方应要求当前原丝 COA、预浸料 COA、SDS/TDS、试验方法、典型值与保证值边界，并使用目标模压、真空袋、卷绕或其他工艺制作首件。编织布采购需另行锁定经纬丝束、织法、经纬密度、克重与厚度公差、幅宽单位、歪斜、弓纬、毛丝、断纱、拼接、边部、卷芯和树脂相容性；玻纤布需要确认玻璃类型、上浆、tex、浸润、树脂适配及下游层合板依据。官网称配备专业实验室并拥有自主发明专利，但没有在所审阅页面给出设备量程、校准范围、方法、认可资质、专利号或可下载测试报告，采购审核应索取设备清单、校准记录、人员能力、近期原料/过程/成品记录和可追溯批次样表。官网及中国复合材料工业协会文章均称公司通过 ISO9001、ISO14001 和 ISO45001；然而公开的 2023 年证书注销名单显示该公司旧证书 15720Q20254R0S、15720E20174R0S 和 15720S20151R0S 已于 2023 年 8 月注销。本次审阅未取得替代证书号、发证机构数据库记录、范围和有效期，因此不把三项管理体系列为当前已核实认证。山东省科技主管部门 2025 年第二批高新技术企业名单可追溯到证书号 GR202537005644，本页仅记录这一政府名单资格；它不是产品批准或批次质量保证。官网应用页展示车钥匙、手机壳、方向盘、汽车装饰、高尔夫球杆、冲浪板、自行车和三脚架，企业介绍还列出渔具、摄影器材、风电叶片、医疗设备、轨道交通、高端工业和电子消费品。这些是市场和应用线索，不证明特定客户批准、结构设计资格、阻燃等级或目的国合规。官网当前只有中文内容，联系邮箱为 QQ 公共邮箱，未发现企业域名邮箱、英文技术包、公开出口条款、目的国合规文件或可核实近期出货证据，因此本页不标记出口准备度。询价、图纸、付款账户和合同主体必须通过官网电话与书面企业资料双重确认。官网当前 Logo 已于 2026-08-26 通过官网来源校验和 referer-aware 请求下载，裁除透明边距后完整存储在 GetFRP 本地，不再热链第三方资源。",
  productsServicesSummaryEn:
    "Hongyu publishes hot-melt epoxy carbon-fiber prepreg with a 130°C cure claim for compression molding, vacuum bagging and winding. Its tables cover 24T through 55T-plus series and pitch-based 65T/80T material, with fiber mass, resin content, total mass, thickness and 1,000 mm width. The woven catalog lists 1K, 3K, 6K and 12K plain or twill fabrics at about 120–480 g/m². These are company catalog values, not GetFRP guarantees. The pitch table pairs HYCU-12500 with 120 g/m² fiber content; require written clarification rather than normalizing it. Lock fiber producer and grade, PAN or pitch basis, tow, resin, tolerances, volatiles, tack, drape, flow, cure, Tg, voids, laminate properties, frozen storage, shipment temperature, thawing and out-life. Request current TDS, SDS, lot COAs and a representative process trial. The reviewed pages do not supply a complete cold-chain or shelf-life file. Woven and glass-fiber RFQs also need weave or architecture, sizing, tex, mass, thickness, width units, defects and resin compatibility. The company claims an internal test laboratory, but no accredited scope or downloadable reports were found. It also claims ISO 9001, ISO 14001 and ISO 45001, while a public list shows old certificates 15720Q20254R0S, 15720E20174R0S and 15720S20151R0S cancelled in August 2023. No replacement evidence was obtained, so those systems are not recorded as current verified certifications. Government-listed high-tech certificate GR202537005644 is recorded, but is not product approval. Application images are market signals only. The Chinese-only site uses a QQ email and lacks a public export evidence set, so export readiness is false. Confirm the payee and contracting entity independently. The official logo was downloaded on 2026-08-26 with source and referer validation, trimmed only to remove transparent canvas, and stored locally rather than hotlinked.",
  ecatalogs: [
    {
      title: "德州泓宇官方网站",
      titleEn: "Official Dezhou Hongyu Website",
      description: "现行中文主体、产品入口、电话、邮箱、地址和备案信息。",
      descriptionEn: "Current Chinese identity, product entry points, telephone, email, address and ICP filing.",
      url: "https://www.hyfhclkj.cn/",
      format: "Official website",
    },
    {
      title: "德州泓宇公司简介",
      titleEn: "Official Dezhou Hongyu Company Profile",
      description: "2018 年沿革、厂区、产线、实验室、企业产能和应用声明。",
      descriptionEn: "Company-published 2018 history, site, production lines, laboratory, capacity and applications.",
      url: "https://www.hyfhclkj.cn/about_detail/5.html",
      format: "Company profile",
    },
    {
      title: "德州泓宇产品中心",
      titleEn: "Official Dezhou Hongyu Product Center",
      description: "预浸料、碳纤维编织布、单向和双向玻纤及拓展产品目录。",
      descriptionEn: "Prepreg, woven carbon fabric, unidirectional and bidirectional fiberglass and extended products.",
      url: "https://www.hyfhclkj.cn/product/6/",
      format: "Product catalog",
    },
    {
      title: "碳纤维预浸布产品页",
      titleEn: "Official Carbon-Fiber Prepreg Product Page",
      description: "130℃ 固化声明及 24T 至 55T 以上系列目录参数。",
      descriptionEn: "Published 130°C cure statement and 24T-through-55T-plus catalog values.",
      url: "https://www.hyfhclkj.cn/product/60.html",
      format: "Official product page",
    },
    {
      title: "沥青基 65T/80T 预浸布产品页",
      titleEn: "Official Pitch-Based 65T/80T Prepreg Page",
      description: "高模量系列克重、树脂含量、厚度和幅宽目录。",
      descriptionEn: "High-modulus catalog covering fiber mass, resin content, thickness and width.",
      url: "https://www.hyfhclkj.cn/product/73.html",
      format: "Official product page",
    },
    {
      title: "碳纤维编织布产品页",
      titleEn: "Official Woven Carbon-Fiber Fabric Page",
      description: "1K、3K、6K、12K 平纹和斜纹系列目录。",
      descriptionEn: "1K, 3K, 6K and 12K plain- and twill-weave catalog.",
      url: "https://www.hyfhclkj.cn/product/59.html",
      format: "Official product page",
    },
    {
      title: "德州泓宇产品应用",
      titleEn: "Official Dezhou Hongyu Application Gallery",
      description: "汽车内饰、消费品、体育器材和摄影器材应用图片。",
      descriptionEn: "Company-published automotive, consumer, sports and camera-equipment application images.",
      url: "https://www.hyfhclkj.cn/application.html",
      format: "Official application gallery",
    },
    {
      title: "德州泓宇官方联系方式",
      titleEn: "Official Dezhou Hongyu Contact Page",
      description: "乐普大道地址、电话、传真和 QQ 邮箱。",
      descriptionEn: "Lepu Avenue address, telephone, fax and public QQ email.",
      url: "https://www.hyfhclkj.cn/contact.html",
      format: "Official contact page",
    },
    {
      title: "中国国际复材展德州泓宇网上展厅",
      titleEn: "China Composites Expo Dezhou Hongyu Net Show",
      description: "英文展商主体、预浸料及增强材料产品范围。",
      descriptionEn: "English exhibitor identity and prepreg and reinforcement-material scope.",
      url: "https://www.chinacompositesexpo.com/en/netshow.php?head=D",
      format: "Exhibitor profile",
    },
    {
      title: "中国复合材料工业协会德州走访",
      titleEn: "China Composites Industry Association Dezhou Visit",
      description: "泓宇企业、材料范围及管理体系声明的行业协会来源。",
      descriptionEn: "Industry-association source for the company, material scope and management-system claims.",
      url: "https://www.ccia.xin/xiehuixinwen/2447.html",
      format: "Industry association article",
    },
    {
      title: "山东省 2025 年第二批高新技术企业名单",
      titleEn: "Shandong 2025 Second-Batch High-Tech Enterprise List",
      description: "德州泓宇及证书号 GR202537005644 的政府名单来源。",
      descriptionEn: "Government-list source for Dezhou Hongyu and certificate GR202537005644.",
      url: "https://kjt.shandong.gov.cn/attach/0/512a3b681bda4fecb6fb47c3848d0ca7.pdf",
      format: "Government list (PDF)",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-26T00:00:00.000Z"),
  logo: "/supplier-assets/dezhou-hongyu-logo.png",
  contactEmail: "851765049@qq.com",
  contactPhone: "+86 534 275 2023",
  address:
    "No. 3958 Lepu Avenue, Songguantun Subdistrict, Tianqu New Area, Dezhou, Shandong, China",
  website: "https://www.hyfhclkj.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "hot-melt epoxy carbon-fiber prepreg production (official product page)",
    "24T through 55T-plus unidirectional prepreg series (company catalog)",
    "pitch-based 65T/80T high-modulus prepreg (company catalog)",
    "1K, 3K, 6K and 12K carbon-fiber weaving",
    "unidirectional and bidirectional fiberglass-fabric production",
    "four prepreg lines and five weaving lines (company claim)",
    "laminated-fabric production (company claim)",
    "in-house development and physical-testing laboratory (company claim)",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-26T00:00:00.000Z"),
};
