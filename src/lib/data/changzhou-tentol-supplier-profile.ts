import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_TENTOL_SUPPLIER_ID =
  "sup-changzhou-tentol-machinery-equipment";
export const CHANGZHOU_TENTOL_SUPPLIER_SLUG =
  "changzhou-tentol-machinery-equipment";

// Curated from the exact mainland-China company's current Chinese and English
// websites and its China Composites Expo exhibitor page. The expo record and
// the official logo use the English name TENTOL. Establishment, export,
// certification, patent, application and performance statements remain
// company- or organizer-published and have not been independently verified by
// GetFRP. The official site currently serves over HTTP while its HTTPS endpoint
// presents an invalid certificate, so buyers should independently authenticate
// documents and payment instructions. The locally stored official logo was
// downloaded on 2026-08-13 from the current website header asset:
// http://www.cztengtuo.com/template/cztengtuo/images/4834150ac77b4fb1b896969af0bd3fe2_50.png
export const CHANGZHOU_TENTOL_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_TENTOL_SUPPLIER_ID,
  name: "常州腾拓机械设备有限公司",
  nameEn: "Changzhou Tentol Machinery Equipment Co., Ltd.",
  slug: CHANGZHOU_TENTOL_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "热固性干法与湿法预浸料生产线",
    "PEEK 等热塑性预浸料生产线",
    "碳纤、玻纤及玄武岩纤维预浸料复合机",
    "预浸纱及单丝预浸料生产线",
    "预浸料涂胶机",
    "热固/热塑预浸料预分切与窄带分切机",
    "涂层毡及玻纤涂层生产线",
    "涂布、复合、分切、复卷及绝缘材料设备",
  ],
  productsEn: [
    "Thermoset dry- and wet-process prepreg lines",
    "Thermoplastic prepreg lines including PEEK applications",
    "Carbon-, glass- and basalt-fiber prepreg laminating machines",
    "Prepreg-yarn and single-filament prepreg lines",
    "Prepreg resin-film coating machines",
    "Thermoset and thermoplastic prepreg pre-slitters and narrow-tape slitters",
    "Coated-mat and fiberglass-coating production lines",
    "Coating, laminating, slitting, rewinding and insulation-material equipment",
  ],
  processList: [
    "复材涂布、浸渍、复合与分切产线设计",
    "专用设备制造、装配与调试",
    "热固性及热塑性预浸料工艺设备集成",
    "放卷、展纤、张力、涂胶、加热、冷却与收卷集成",
    "安装指导、培训、售后与备件服务",
  ],
  processListEn: [
    "Composite coating, impregnation, laminating and slitting-line design",
    "Special-purpose equipment manufacture, assembly and commissioning",
    "Thermoset and thermoplastic prepreg process-equipment integration",
    "Unwind, spreading, tension, coating, heating, cooling and rewind integration",
    "Installation guidance, training, after-sales and spare-parts support",
  ],
  established: 2009,
  verified: false,
  description:
    "常州腾拓机械设备有限公司（官方英文 Logo 及中国国际复材展均使用 TENTOL）位于江苏常州。官网称公司成立于 2009 年，是研发、生产、销售和服务一体的机械设备制造商，产品覆盖复材预浸料生产及分切设备，以及涂层毡、绝缘材料、软瓷和吉利丁片等其他行业专用设备。复材展展商页将其列为预浸料生产及处理设备和复材最终制品生产设备供应商，并发布 2026 年展位 8G21。官网称产品销往国内近 30 个省市及美国、日本、韩国等国家；上述市场、客户应用、专利及设备性能均为企业或展会公开陈述，尚未经 GetFRP 独立核验。官网目前可通过 HTTP 访问，但 HTTPS 证书无效，采购方应通过多个独立渠道核验询价、合同、收款账户和文件真伪。",
  descriptionEn:
    "Changzhou Tentol Machinery Equipment Co., Ltd. is based in Changzhou, Jiangsu; both the official logo and China Composites Expo use the English name TENTOL. The official website dates the company to 2009 and describes an integrated R&D, manufacturing, sales and service business. Its range covers composite prepreg-production and slitting equipment plus machinery for coated mat, electrical insulation, flexible decorative materials and gelatin sheet. China Composites Expo classifies the supplier under prepreg production or processing and finished-composite production equipment and publishes booth 8G21 for 2026. The website says equipment has been sold across nearly 30 Chinese provinces or municipalities and to markets including the United States, Japan and South Korea. These market, customer-application, patent and performance claims are company- or organizer-published and have not been independently verified by GetFRP. The current site is reachable over HTTP, while its HTTPS endpoint presents an invalid certificate; authenticate inquiries, contracts, beneficiary accounts and documents through multiple independent channels.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "腾拓官网的复材设备目录列出热固干法预浸料线、湿法预浸料线、PEEK 预浸料线、碳纤/玻纤预浸料线、预浸纱/单丝预浸料线、涂胶机，以及热固和热塑预浸料预分切/窄带分切机；官网还发布预浸料复合机适用于碳纤、玻纤和玄武岩纤维，涂胶机适用于环氧、双马来酰亚胺和氰酸酯等热熔树脂，窄带示例宽度为 3.175、6.35 和 12.7 mm。这些是选型入口，不是验收保证。整线 RFQ 应定义原丝/织物/单向带输入形式、纤维种类与 K 数、树脂体系及黏度/温度窗口、目标幅宽和厚度、面密度与树脂含量及公差、线速、展纤均匀性、张力范围和精度、放卷/接料、计量涂布或浸渍方式、温区与控制精度、压合/排气、离型纸或膜、冷却、在线检测、切边和收卷。PEEK 等热塑设备还应确认最高工艺温度、熔体停留、材料耐温、压力与冷却能力；分切设备应给出材料厚度、黏性、基材、刀型、最小/最大宽度、宽度及毛边公差、速度、张力、粉尘/废边和卷径。项目边界需包括公用工程、溶剂和 VOC、通风、防火防爆、职业安全、洁净度、PLC/HMI、数据接口、目的国机械与电气法规、厂房接口、安装、培训、备件、远程服务和质保。合同应以双方认可的原料和目标产品约定 FAT/SAT 样品、运行时长、产能/合格率口径、关键质量参数、能耗边界、性能保证及未达标整改。官网与展会称企业通过 ISO 9001，但公开资质页没有可读取的完整证书编号、法人、地址、范围和有效期，本页不把它列为已核实资质；应索取现行证书并向签发机构验证。",
  productsServicesSummaryEn:
    "Tentol's official composite-equipment directory lists thermoset dry and wet prepreg lines, a PEEK prepreg line, carbon/glass-fiber prepreg lines, prepreg-yarn or single-filament lines, resin-film coaters, and thermoset or thermoplastic prepreg pre-slitters and narrow-tape slitters. The website also says its prepreg laminator supports carbon, glass and basalt fibers, its coater supports hot-melt systems including epoxy, bismaleimide and cyanate ester, and example narrow-tape widths include 3.175, 6.35 and 12.7 mm. These are selection cues rather than acceptance guarantees. A line RFQ should define the incoming tow, fabric or UD-tape form; fiber and tow count; resin chemistry and viscosity/temperature window; target width and thickness; areal weight and resin content with tolerances; line speed; spread uniformity; tension range and accuracy; unwind and splicing; metered coating or impregnation method; zones and temperature accuracy; consolidation and air removal; release paper or film; cooling; inline inspection; edge trim and winding. PEEK and other thermoplastic systems also need maximum process temperature, melt residence, material temperature resistance, pressure and cooling capacity. Slitting equipment needs material thickness, tack, liner, blade type, minimum/maximum width, width and edge-quality tolerance, speed, tension, dust or trim handling and roll diameter. Project scope should cover utilities, solvent/VOC handling, ventilation, fire and explosion protection, occupational safety, cleanliness, PLC/HMI and data interfaces, destination machinery and electrical rules, building interfaces, installation, training, spares, remote support and warranty. Use agreed feedstock and target product to define FAT/SAT samples, run duration, capacity and yield basis, critical quality parameters, energy boundary, performance guarantees and shortfall remedies. The company and expo say ISO 9001, but the public qualification page does not expose a readable complete certificate number, legal entity, address, scope and validity, so it is not recorded as verified here; obtain the current certificate and validate it with the issuer.",
  ecatalogs: [
    {
      title: "腾拓机械官网与公司介绍",
      titleEn: "Tentol Official Website & Company Profile",
      description: "企业主体、2009 年成立信息、业务范围、市场陈述和生产展示。",
      descriptionEn:
        "Official identity, establishment, business scope, market statement and production display.",
      url: "http://www.cztengtuo.com/about/",
      format: "Company profile",
    },
    {
      title: "腾拓复材行业专用装备目录",
      titleEn: "Tentol Composite-Equipment Directory",
      description: "预浸料生产、涂胶、预浸纱和热固/热塑分切设备。",
      descriptionEn:
        "Official prepreg-production, coating, prepreg-yarn and thermoset/thermoplastic slitting equipment.",
      url: "http://www.cztengtuo.com/product/fj/",
      format: "Product directory",
    },
    {
      title: "腾拓产品总目录",
      titleEn: "Tentol Full Product Directory",
      description: "复材、涂层毡、绝缘、分切及通用设备分类。",
      descriptionEn:
        "Official composite, coated-mat, insulation, slitting and general-equipment categories.",
      url: "http://www.cztengtuo.com/product/",
      format: "Product directory",
    },
    {
      title: "中国国际复材展腾拓展商页",
      titleEn: "China Composites Expo Tentol Profile",
      description: "展会发布的 TENTOL 英文主体、8G21 展位和设备类别。",
      descriptionEn:
        "Organizer-published TENTOL identity, booth 8G21 and equipment categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-3073-81012232.html",
      format: "Exhibitor profile",
    },
    {
      title: "腾拓资质荣誉展示页",
      titleEn: "Tentol Qualification Display",
      description: "企业公开的资质入口；完整证书和有效性仍需采购方核验。",
      descriptionEn:
        "Company qualification gallery; complete documents and validity require buyer verification.",
      url: "http://www.cztengtuo.com/about/2.html",
      format: "Qualification gallery",
    },
    {
      title: "腾拓官方联系方式",
      titleEn: "Tentol Official Contact Details",
      description: "常州地址、电话、企业域名邮箱和询盘渠道。",
      descriptionEn:
        "Official Changzhou address, phone numbers, domain email and inquiry channels.",
      url: "http://www.cztengtuo.com/contact/",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-tentol-logo.png",
  contactEmail: "pengyiye@cztengtuo.com",
  contactPhone: "+86 519 8580 7086",
  address: "No. 2 Dongqu Road, Luoyang Town, Wujin District, Changzhou, Jiangsu, China",
  website: "http://www.cztengtuo.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 16,
  viewCount: 0,
  capabilities: [
    "thermoset prepreg production lines",
    "thermoplastic prepreg production lines",
    "PEEK prepreg equipment",
    "wet prepreg production lines",
    "prepreg yarn production lines",
    "prepreg resin-film coating",
    "narrow-tape slitting",
    "coated-mat production lines",
    "fiberglass coating lines",
    "coating, laminating and rewinding equipment",
    "equipment assembly and commissioning",
    "installation and after-sales support",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
