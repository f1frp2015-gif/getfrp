import type { SupplierListing } from "@/lib/db/schema";

export const NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_ID = "sup-ningbo-licheng-super-resin";
export const NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_SLUG = "ningbo-licheng-super-resin-carbon-composites";

// Curated from Ningbo Super Resin's current and legacy official company,
// capability, product and contact pages and the CCE N directory. The complete
// official icon, Ningbo SUPER RESIN wordmark and Chinese company name were
// downloaded from super-resin.cn on 2026-08-25 without cropping.
export const NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_PROFILE: SupplierListing = {
  id: NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_ID,
  name: "宁波丽成复合材料制品有限公司",
  nameEn: "Ningbo Licheng Composite Products Co., Ltd.",
  slug: NINGBO_LICHENG_SUPER_RESIN_SUPPLIER_SLUG,
  location: "浙江宁波",
  locationEn: "Ningbo, Zhejiang, China",
  province: "浙江",
  category: "manufacturer",
  products: ["半导体晶圆搬运碳纤维圆盘", "半导体晶圆搬运碳纤维叉和机械臂", "碳纤维机器人关节臂与吸盘搬运臂", "碳纤维辊筒和高性能管件", "碳纤维板", "碳纤维芳纶蜂窝板", "碳纤维铝蜂窝复合板", "医疗 X 射线与乳腺机碳纤维面板", "航空机翼部件和无人机零件", "汽车翼子板、侧围、尾翼和发动机盖", "摩托车碳纤维排气管部件", "碳纤维假肢配件", "碳纤维后备箱壳体和纺机零件", "定制碳纤维高尔夫球杆和杆身"],
  productsEn: ["Carbon-fiber discs for semiconductor wafer handling", "Carbon-fiber forks and robot arms for wafer handling", "Carbon-fiber articulated and vacuum-gripper handling arms", "Carbon-fiber rollers and high-performance tubes", "Carbon-fiber plates", "Carbon-fiber and aramid honeycomb panels", "Carbon-fiber and aluminum honeycomb composite panels", "Carbon-fiber panels for medical X-ray and mammography equipment", "Aircraft wing components and drone parts", "Automotive fenders, side panels, spoilers and bonnets", "Carbon-fiber motorcycle exhaust components", "Carbon-fiber prosthetic accessories", "Carbon-fiber trunk shells and loom components", "Custom carbon-fiber golf clubs and shafts"],
  processList: ["碳纤维预浸料裁剪和铺层", "高压釜成型", "热压模压成型", "碳纤维管材卷制", "蜂窝夹芯板复合", "CNC 切削、钻孔和修边", "粘接、嵌件和组件装配", "表面涂装和外观处理", "模具与工装开发", "原型、首件和批量质量验证"],
  processListEn: ["Carbon-fiber prepreg cutting and layup", "Autoclave molding", "Hot-press compression molding", "Roll wrapping of carbon-fiber tubes", "Honeycomb-sandwich panel assembly", "CNC cutting, drilling and trimming", "Bonding, inserts and component assembly", "Coating and cosmetic finishing", "Mold and fixture development", "Prototype, first-article and series-quality validation"],
  established: 2011,
  verified: false,
  description: "宁波丽成复合材料制品有限公司以 Ningbo SUPER RESIN 标识发布定制碳纤维复材制品。当前及旧版官网产品目录覆盖半导体晶圆搬运圆盘、叉和机械臂，碳纤辊筒/管件、碳板、碳纤/芳纶与铝蜂窝板、医疗 X 射线面板、航空与无人机零件、汽车外饰、摩托车排气部件、假肢配件、后备箱壳体、纺机件及定制高尔夫球杆/杆身。官网公司页记载 2011 年成立，中国国际复材展 N 字母页列出该宁波企业。本页只采用官网实际产品，不把航空、汽车、医疗或体育行业标签扩写成未展示的其他终端产品。",
  descriptionEn: "Ningbo Licheng Composite Products Co., Ltd., identified on its official logo as Ningbo SUPER RESIN, publishes a broad custom carbon-composite offer. Its current and legacy official directories support wafer-handling discs, forks and robot arms; carbon rollers and tubes; carbon plates; carbon-and-aramid or carbon-and-aluminum honeycomb panels; medical X-ray panels; aircraft and drone components; automotive exterior parts; motorcycle exhaust components; prosthetic accessories; trunk shells; loom components; and custom carbon-fiber golf clubs or shafts. The official company page records establishment in 2011, and China Composites Expo independently lists the Ningbo exhibitor in its N directory. GetFRP maps only products shown in the company's current or official legacy catalog. Aerospace, automotive, medical and sports labels are not expanded into unrelated finished products that the website does not identify.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "定制碳纤零件应以受控图纸和可验证工况询价。需提供材料牌号或允许体系、铺层表和纤维方向、树脂含量、固化制度、蜂窝芯材/密度/孔格、胶膜和面板构造、尺寸和公差、平整度、孔位、嵌件、粘接/紧固接口、表面、外观区、质量、刚度、强度、疲劳、冲击、温度和寿命要求。半导体晶圆搬运圆盘、叉和机械臂还需规定洁净度、颗粒/离子污染、放气、表面电阻或接地、翘曲、动态挠度、定位重复性、设备接口和清洁包装；医疗 X 射线面板需规定射线透过/衰减、均匀性、伪影、面密度、平整度、边缘封闭和适用法规，但官网产品图不等于医疗器械批准。碳纤辊筒和管件需锁定内外尺寸、长度、壁厚、直线度、圆度、平衡、惯量、临界转速、端头和粘接；碳板/蜂窝板需锁定铺层、方向、芯材、胶接、面板厚度、平整度、边缘与插入件。汽车、航空、无人机、摩托车、假肢和高尔夫用品各有不同载荷、法规和外观标准，必须逐件验证。工艺 RFQ 应确认预浸料铺层、高压釜、热压、卷管、蜂窝复合、CNC、粘接和涂装的实际供应边界、模具责任、最大尺寸、批量与验收。首件需材料批号、铺层/固化记录、尺寸和外观、无损检测或试样、粘接、质量和性能报告；量产需控制计划、关键特性、治具校准、留样、变更通知和追溯。官网提到 ISO 9001 和 ISO 13485，但本页在证书与宁波法人、地址、范围、编号和有效期匹配前不记录为已核实认证。采购还应确认合同/开票/收款/出口主体、模具和知识产权、保密、包装、防护、MOQ、交期、Incoterm、保修和售后。",
  productsServicesSummaryEn: "Custom carbon components should be quoted against controlled drawings and verifiable operating conditions. Provide the permitted material or grade, layup schedule and fiber directions, resin content and cure, honeycomb material, density and cell size, film adhesive and panel construction, dimensions and tolerance, flatness, holes, inserts, bonded or fastened interfaces, finish and cosmetic zones, mass, stiffness, strength, fatigue, impact, temperature and life requirements. Semiconductor wafer-handling discs, forks and robot arms also need cleanliness, particle and ionic contamination, outgassing, surface resistance or grounding, warpage, dynamic deflection, positional repeatability, equipment interfaces and clean packing. Medical X-ray panels require transmission or attenuation, uniformity, artifact, areal mass, flatness, edge closure and applicable regulatory evidence; an official product photograph is not medical-device approval. Carbon rollers and tubes need inner and outer dimensions, length, wall, straightness, roundness, balance, inertia, critical speed, end fittings and bond acceptance. Carbon plates and honeycomb panels need layup, direction, core, bondline, skin thickness, flatness, edges and inserts. Automotive, aircraft, drone, motorcycle, prosthetic and golf products have different load, regulatory and cosmetic regimes and must be qualified individually. A process RFQ should confirm the actual Ningbo supply boundary for prepreg layup, autoclave, hot pressing, roll wrapping, sandwich assembly, CNC, bonding and coating, together with tooling ownership, maximum size, production volume and acceptance. A first article needs material-lot identity, layup and cure records, dimensional and visual results, NDT or coupons, bonding records, mass and performance evidence. Series supply needs a control plan, key characteristics, fixture calibration, retention samples, change notice and traceability. The official website refers to ISO 9001 and ISO 13485, but GetFRP does not record either as verified until a current certificate matches the Ningbo legal entity, address, scope, number and validity. Buyers should also confirm the contracting, invoicing, payee and export entity, tooling and IP, confidentiality, packing and protection, MOQ, lead time, Incoterm, warranty and support.",
  ecatalogs: [
    { title: "丽成当前官网", titleEn: "Ningbo Super Resin Website", description: "公司、能力与联系入口。", descriptionEn: "Official company, capability and contact entry point.", url: "https://www.super-resin.cn/en/", format: "Official website" },
    { title: "公司简介", titleEn: "Company Profile", description: "2011 年和业务范围。", descriptionEn: "Official 2011 establishment and business overview.", url: "https://www.super-resin.cn/en/about.html", format: "Company page" },
    { title: "制造能力", titleEn: "Manufacturing Capability", description: "工艺、设备和质量能力。", descriptionEn: "Official process, equipment and quality capability page.", url: "https://super-resin.cn/en/support.html?scrollTo=a4", format: "Capability page" },
    { title: "官方产品目录", titleEn: "Official Product Directory", description: "碳纤零件和板材目录。", descriptionEn: "Official carbon-component and panel directory.", url: "https://en.super-resin.cn/product/", format: "Product directory" },
    { title: "碳纤维蜂窝板", titleEn: "Carbon-Fiber Honeycomb Panel", description: "碳纤与铝/芳纶蜂窝板。", descriptionEn: "Official carbon-and-aluminum or aramid honeycomb panel page.", url: "https://en.super-resin.cn/product/20/", format: "Product page" },
    { title: "丽成联系方式", titleEn: "Ningbo Super Resin Contact", description: "宁波地址、电话和邮箱。", descriptionEn: "Official Ningbo address, phone and email.", url: "https://super-resin.cn/en/contact.html?scrollTo=a1", format: "Contact page" },
    { title: "中国国际复材展 N 字母页（第 3 页）", titleEn: "China Composites Expo — N Directory, Page 3", description: "宁波丽成展商记录。", descriptionEn: "Organizer source for the Ningbo Licheng exhibitor.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=60&head=N", format: "Exhibitor directory" },
  ],
  profilePublished: true, profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/ningbo-licheng-logo.png",
  contactEmail: "info@super-resin.cn", contactPhone: "+86 574 8838 5544",
  address: "No. 197 Shanshan Road, Wangchun Industrial Park, Haishu District, Ningbo, Zhejiang, China",
  website: "https://www.super-resin.cn/", enterpriseId: null, scaleTier: null, brandPriority: 27, viewCount: 0,
  capabilities: ["custom carbon-fiber parts", "carbon-fiber plates and panels", "carbon-fiber tubes and rollers", "honeycomb sandwich panels", "semiconductor handling parts", "medical X-ray panels", "autoclave and hot-press molding", "CNC and bonded assemblies"],
  standardsSupported: [], moqKg: null, leadTimeDays: null, exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"), updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
