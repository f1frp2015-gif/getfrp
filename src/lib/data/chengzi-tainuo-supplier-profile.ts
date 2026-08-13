import type { SupplierListing } from "@/lib/db/schema";

export const CHENGZI_TAINUO_SUPPLIER_ID = "sup-chengzi-tainuo";
export const CHENGZI_TAINUO_SUPPLIER_SLUG = "chengzi-tainuo-cfrt";

// Curated from the exact mainland-China exhibitor's current Chinese and English
// official sites, China Composites Expo's current directory/list, and Feicheng
// City Asset Management Group's issuer disclosure. Company capacity, product
// performance and "domestic first" statements remain attributed claims rather
// than GetFRP verification. Official logo downloaded 2026-08-13 from the
// current company-owned domain header:
// https://www.cztnsd.com/static/upload/image/20241118/1731917214143662.png
export const CHENGZI_TAINUO_SUPPLIER_PROFILE: SupplierListing = {
  id: CHENGZI_TAINUO_SUPPLIER_ID,
  name: "城资泰诺（山东）新材料科技有限公司",
  nameEn: "Chengzi Tainuo (Shandong) New Material Technology Co., Ltd.",
  slug: CHENGZI_TAINUO_SUPPLIER_SLUG,
  location: "山东泰安",
  locationEn: "Tai'an, Shandong, China",
  province: "山东",
  category: "manufacturer",
  products: [
    "连续玻璃纤维增强 PP/HDPE 单向预浸带",
    "连续碳纤维增强热塑性单向带",
    "连续玄武岩纤维增强 PP 单向预浸带",
    "CFRT 热塑性层压板及板材蒙皮",
    "CFRT/PET 泡沫夹芯板",
    "CFRT/PP 蜂窝夹芯板",
    "CFRT 复合聚酯板、车厢板及集装箱板",
  ],
  productsEn: [
    "Continuous-glass-fiber reinforced PP and HDPE UD tapes",
    "Continuous-carbon-fiber reinforced thermoplastic UD tapes",
    "Continuous-basalt-fiber reinforced PP UD tapes",
    "CFRT thermoplastic laminates and panel skins",
    "CFRT/PET foam-core sandwich panels",
    "CFRT/PP honeycomb sandwich panels",
    "CFRT polyester composite, vehicle-body and container panels",
  ],
  processList: [
    "连续纤维热塑性浸渍与单向带生产",
    "玻纤、碳纤和玄武岩纤维热塑性复合",
    "0°/90° 多层铺层与热塑层压",
    "PET 泡沫和 PP 蜂窝夹芯板热熔复合",
    "表面膜、无纺布及其他饰面热复合",
    "宽幅板材、分切与尺寸定制",
    "交通、建筑、管道和新能源应用支持",
  ],
  processListEn: [
    "Continuous-fiber thermoplastic impregnation and UD-tape production",
    "Glass-, carbon- and basalt-fiber thermoplastic compounding",
    "0°/90° multilayer lay-up and thermoplastic lamination",
    "Thermal bonding of PET-foam and PP-honeycomb sandwich panels",
    "Thermal application of films, nonwovens and other facings",
    "Wide-panel production, slitting and dimensional customization",
    "Application support for transport, building, pipeline and new energy",
  ],
  established: 2021,
  verified: false,
  description:
    "城资泰诺（山东）新材料科技有限公司位于山东省泰安市肥城市，现行中英文官网均以该完整法律名称和鲁ICP备2022005349号运行。肥城市城市资产经营集团 2024 年公开披露将其列为集团持股 60% 的一级子公司，主营业务归入化学纤维制造；官网称公司专注连续纤维增强热塑性复合材料（CFRT）的研发、生产与销售。产品包括 CFRT 单向预浸带、热塑层压板、PET 泡沫和 PP 蜂窝夹芯板，以及车厢、集装箱、建筑和管道用复合板材。中国国际复材展以同一中英文主体收录该中国大陆企业，分类为玻纤布/带/毡、夹芯板材及复合材料最终制品或部件，公开展商名单列示展位 7L15。产能、专利数量和“国内首创”等信息为企业自述，尚未由 GetFRP 现场审计。",
  descriptionEn:
    "Chengzi Tainuo (Shandong) New Material Technology Co., Ltd. is based in Feicheng, Tai'an, Shandong. Its current Chinese and English official sites publish the full legal identity under MIIT filing Lu ICP 2022005349. A 2024 issuer disclosure by Feicheng City Asset Management Group lists Chengzi Tainuo as a first-tier subsidiary with a 60% holding and classifies its business as chemical-fiber manufacturing. The official site focuses on continuous-fiber reinforced thermoplastic composites (CFRT), including UD prepreg tapes, thermoplastic laminates, PET-foam and PP-honeycomb sandwich panels, and composite sheets for vehicle bodies, containers, construction and pipeline reinforcement. China Composites Expo lists the same mainland-China entity under glass-fiber cloth/tape/mat, sandwich panel and finished-composite categories, while its exhibitor list publishes booth 7L15. Capacity, patent-count and domestic-first statements are company claims and have not been independently site-audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网公开的单向带范围包括连续玻纤增强 PP/HDPE、连续碳纤增强热塑性材料及连续玄武岩纤维增强 PP。典型公开规格为宽度 25–750 mm；玻纤/HDPE 带厚度 0.15–1.0 mm、纤维含量 45%–80%，碳纤热塑带厚度 0.15–0.45 mm、纤维含量 40%–60%，玄武岩/PP 带厚度 0.15–0.45 mm、纤维含量 45%–80%。板材目录列出厚度 0.5–10 mm、宽度不超过 2800 mm 的 CFRT 层压板，厚度 10–100 mm、宽度不超过 2800 mm 的 PET 泡沫夹芯板，以及厚度 6–60 mm、宽度不超过 2800 mm 的 PP 蜂窝夹芯板；这些是网页公开范围，并非对全部牌号、组合或量产公差的保证。RFQ 应先定义纤维种类、牌号与上浆体系，基体树脂（PP、HDPE、PET 或其他）、纤维质量/体积分数、带材厚度/宽度/面密度及公差、卷径与接头、纤维直线度、浸渍均匀性、孔隙率和表面状态。层压板需明确 0°/90° 或定制铺层、层数、总厚度、平整度、翘曲、幅宽/长度、边缘、表面膜/无纺布、颜色纹理、冲击和拉伸/弯曲/层间性能；夹芯板还需确定 PET 泡沫或 PP 蜂窝的密度、孔格、芯厚、蒙皮结构、热熔界面、剥离/剪切、压缩、局部承压、边部封装、吸水和尺寸稳定性。交通、冷藏车、房车、集装箱、建筑模板或管道缠绕项目应提供使用温度、载荷谱、阻燃/烟毒、耐候/UV、耐水与化学介质、热膨胀、疲劳、冲击、连接/粘接和法规目标，并在真实基材、成型、连接和环境条件下完成样件验证。采购方应索取当前 TDS、SDS、批次 CoA、原料与批次追溯、试验方法、检验抽样、变更通知、包装储存和保质期资料。官网称月产各类热塑复材 1000 吨以上、复合板材 30 万平方米以上，且连续碳纤维增强 PP 产品为国内首创；这些企业自述必须通过具体产线、班次、设备、良率、同类订单和现场/视频审厂核实。官网称具备高新技术企业和完整质量管理体系，但未在相关页面公开可完整核对主体、证书编号、范围、发证机构和有效期的证书，因此本页不把任何体系或产品证书列为已核实认证。",
  productsServicesSummaryEn:
    "The official range covers continuous-glass-fiber reinforced PP and HDPE tapes, continuous-carbon-fiber reinforced thermoplastic tapes, and continuous-basalt-fiber reinforced PP tapes. Published examples use widths of 25–750 mm: glass/HDPE tape at 0.15–1.0 mm thickness and 45%–80% fiber content, carbon thermoplastic tape at 0.15–0.45 mm and 40%–60%, and basalt/PP tape at 0.15–0.45 mm and 45%–80%. The panel directory lists CFRT laminates at 0.5–10 mm thick and up to 2,800 mm wide, PET-foam sandwich panels at 10–100 mm and up to 2,800 mm, and PP-honeycomb panels at 6–60 mm and up to 2,800 mm. These are web-published ranges, not a guarantee for every grade, construction or production tolerance. An RFQ should define fiber type, grade and sizing; matrix polymer such as PP, HDPE or PET; fiber weight or volume fraction; tape thickness, width, areal mass and tolerances; roll diameter and splices; fiber straightness; impregnation uniformity; void content; and surface condition. For laminates, state the 0°/90° or custom lay-up, ply count, total thickness, flatness, warp, sheet size, edge condition, film or nonwoven facing, color/texture, impact response, and tensile, flexural and interlaminar targets. For sandwich panels, add PET-foam or PP-honeycomb density, cell size, core thickness, skin construction, melt-bond interface, peel/shear/compression, local bearing, edge closure, water uptake and dimensional stability. Transport, refrigerated-body, RV, container, formwork or pipe-wrapping projects should provide service temperature, load spectrum, flame/smoke/toxicity, weathering and UV, water and chemical exposure, thermal expansion, fatigue, impact, joining/bonding and regulatory targets, followed by representative-part validation under the actual forming, joining and environmental conditions. Require current TDS, SDS, batch CoA, material and lot traceability, test methods, sampling plan, change notification, packaging, storage and shelf-life records. The official site claims more than 1,000 tonnes of thermoplastic composites and 300,000 m² of composite panels per month, and describes its continuous-carbon-fiber reinforced PP as a domestic first; verify those claims against the exact line, shifts, equipment, yield, comparable orders and a site or live-video audit. The site also describes a high-tech-enterprise status and complete quality-management system but does not expose a complete current certificate with legal entity, number, scope, issuer and validity on the reviewed pages, so no management-system or product certificate is recorded as verified here.",
  ecatalogs: [
    {
      title: "城资泰诺英文官网",
      titleEn: "Official Chengzi Tainuo English Website",
      description: "公司主体、出口联系方式、产品类别与公开规格。",
      descriptionEn:
        "Official identity, export contact, product families and published ranges.",
      url: "https://www.tynocfrt.com/",
      format: "Official website",
    },
    {
      title: "城资泰诺公司简介",
      titleEn: "Official Chengzi Tainuo Company Profile",
      description: "国资背景、地点、业务、企业自述产能和应用。",
      descriptionEn:
        "Official ownership description, location, business, claimed capacity and applications.",
      url: "https://cn.tynocfrt.com/prof/1.html",
      format: "Company profile",
    },
    {
      title: "城资泰诺 CFRT 单向带目录",
      titleEn: "Chengzi Tainuo CFRT UD-Tape Directory",
      description: "玻纤、碳纤和玄武岩纤维热塑性单向带入口。",
      descriptionEn:
        "Official glass-, carbon- and basalt-fiber thermoplastic UD-tape entries.",
      url: "https://cn.tynocfrt.com/Products/CFRTyujindanxiangdai.html",
      format: "Product directory",
    },
    {
      title: "城资泰诺 CFRT 板材目录",
      titleEn: "Chengzi Tainuo CFRT Panel Directory",
      description: "热塑层压板、PET 泡沫板、聚酯板和蜂窝板入口。",
      descriptionEn:
        "Official thermoplastic laminate, PET-foam, polyester-composite and honeycomb panel entries.",
      url: "https://cn.tynocfrt.com/Products2/CFRTresucengyaban.html",
      format: "Product directory",
    },
    {
      title: "中国国际复材展城资泰诺网上展厅",
      titleEn: "China Composites Expo Chengzi Tainuo Net Show",
      description: "匹配的中英文主体、业务介绍与展品分类。",
      descriptionEn:
        "Organizer-published matching identity, business summary and product categories.",
      url: "https://www.chinacompositesexpo.com/en/netshow.php?head=C&kind_id=3",
      format: "Exhibitor profile",
    },
    {
      title: "肥城城资集团 2024 年发行人披露",
      titleEn: "Feicheng City Asset Management Group 2024 Issuer Disclosure",
      description: "列示城资泰诺为持股 60% 的肥城一级子公司。",
      descriptionEn:
        "Lists Chengzi Tainuo as a Feicheng-based first-tier subsidiary with a 60% holding.",
      url: "https://static.sse.com.cn/disclosure/bond/announcement/corporate/c/new/2024-04-30/184749_20240430_32PZ.pdf",
      format: "Issuer disclosure (PDF)",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/chengzi-tainuo-logo.png",
  contactEmail: "grace@cztnsd.com",
  contactPhone: "+86 150 9879 8621",
  address:
    "No. 29 Chaoyang Road, Feicheng, Tai'an, Shandong, China",
  website: "https://www.tynocfrt.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 19,
  viewCount: 0,
  capabilities: [
    "continuous-glass-fiber PP and HDPE UD tape",
    "continuous-carbon-fiber thermoplastic UD tape",
    "continuous-basalt-fiber PP UD tape",
    "0/90 thermoplastic laminate consolidation",
    "PET-foam sandwich panels",
    "PP-honeycomb sandwich panels",
    "wide CFRT skins and composite panels",
    "vehicle-body, container and refrigerated-panel applications",
    "pipeline-wrapping reinforcement",
    "custom dimensions and application support",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
