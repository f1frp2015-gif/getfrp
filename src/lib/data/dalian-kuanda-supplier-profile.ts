import type { SupplierListing } from "@/lib/db/schema";

export const DALIAN_KUANDA_SUPPLIER_ID = "sup-dalian-kuanda";
export const DALIAN_KUANDA_SUPPLIER_SLUG =
  "dalian-kuanda-special-vehicle";

// Curated from the current company-owned website, China Composites Expo's Net
// Show and current Ministry of Ecology and Environment vehicle disclosures.
// Product, capacity, performance and qualification statements remain attributed
// claims. Official logo downloaded 2026-08-13 from the current website header:
// http://dlkuanda.com.cn/templates/default/images/logo.png
export const DALIAN_KUANDA_SUPPLIER_PROFILE: SupplierListing = {
  id: DALIAN_KUANDA_SUPPLIER_ID,
  name: "大连宽大特种车辆有限公司",
  nameEn: "Dalian Kuanda Special Vehicle Co., Ltd.",
  slug: DALIAN_KUANDA_SUPPLIER_SLUG,
  location: "辽宁大连",
  locationEn: "Dalian, Liaoning, China",
  province: "辽宁",
  category: "manufacturer",
  products: [
    "玻璃钢面板/XPS 芯材保温复合板",
    "玻璃钢板和玻璃钢车厢面板",
    "铝蒙皮保温复合板",
    "房车车壁、车顶和地板复合板",
    "定制尺寸及异形切割复合板",
    "冷藏及保温车厢",
    "玻璃钢复合板干货车厢",
    "房车及特种车辆复合部件",
  ],
  productsEn: [
    "FRP-faced XPS-core insulated sandwich panels",
    "FRP sheets and vehicle-body face panels",
    "Aluminium-skinned insulated composite panels",
    "RV wall, roof and floor composite panels",
    "Custom-size and profile-cut composite panels",
    "Refrigerated and insulated vehicle bodies",
    "FRP-sandwich dry-freight bodies",
    "RV and special-vehicle composite components",
  ],
  processList: [
    "玻璃钢面板与 XPS 芯材复合",
    "一体化连续复合板压制",
    "数控淋胶及温度、流量和轨迹控制",
    "在线定尺及数控异形切割",
    "铝蒙皮保温板复合",
    "车厢结构设计、拼装和密封",
    "房车及特种车辆上装装配",
    "按图纸定制板材厚度、尺寸和面层",
  ],
  processListEn: [
    "FRP face-sheet and XPS-core lamination",
    "Integrated continuous sandwich-panel pressing",
    "CNC adhesive dispensing with temperature, flow and path control",
    "In-line cut-to-length and CNC profile cutting",
    "Aluminium-skin insulated-panel lamination",
    "Vehicle-body structural design, assembly and sealing",
    "RV and special-vehicle body assembly",
    "Drawing-based customization of panel thickness, size and skins",
  ],
  established: null,
  verified: false,
  description:
    "大连宽大特种车辆有限公司（官网品牌写作“大连宽大专用汽车”，标识为 DALIAN KUANDA）是位于中国大陆辽宁省大连市金州区的复合板材和专用车辆供应商。现行官网联系人页明确展示法律主体名称、三十里堡街道卫国社区卫国屯 520 号地址、公司座机、复合板材电话和同域名邮箱；官网产品导航覆盖保温板、玻璃钢板、铝复合板、房车用板、定制板和应用案例，以及冷藏、干货、房车等车辆上装。官网称 2020 年建成一体化连续复合板生产线并设立特种车辆公司板材部，以玻璃钢面板和 XPS 芯材制造车厢、建筑、农业和工业用保温夹芯板。中国国际复材展网上展厅以 Dalian Kuanda Special Vehicle Co., Ltd. 将企业归入复合材料成品部件，介绍 FRP 制品、保温冷藏车部件、房车改装和家具制造。生态环境部 2024—2025 年机动车环保信息公开文件也持续列示同一法律主体及 KDK 型号车辆，支持其作为现行中国大陆车辆生产信息公开主体。官网沿革写前身 1989 年始建于营口，而展会页面写公司 1990 年成立；这两项更适合作为业务沿革，现有公开材料不足以确认现行法律主体的工商成立日期，因此本页不把 1989 或 1990 填入法律实体成立年份。中文法律名称、英文展商名称、DALIAN KUANDA 品牌、网站标题中的“大连宽大专用汽车”及 dlkuanda.com.cn 域名已去重为同一供应商。",
  descriptionEn:
    "Dalian Kuanda Special Vehicle Co., Ltd. (branded on its website as Dalian Kuanda Special Purpose Automobile and DALIAN KUANDA) is a mainland-China supplier of composite panels and special vehicles in Jinzhou District, Dalian, Liaoning. The current official contact page identifies the legal entity, its Weiguotun 520 address in Sanshilipu, company telephone, composite-panel contact and company-domain email. Its product navigation covers insulated panels, FRP sheets, aluminium composite panels, RV panels, custom panels and applications, together with refrigerated, dry-freight and RV bodies. The website says an integrated continuous composite-panel line was completed and the special-vehicle company's panel division was established in 2020 to make insulated sandwich panels with FRP skins and XPS cores for vehicle, building, agricultural and industrial applications. China Composites Expo's Net Show lists Dalian Kuanda Special Vehicle Co., Ltd. under finished composite parts and describes FRP products, insulated and refrigerated vehicle parts, RV conversion and furniture production. Ministry of Ecology and Environment vehicle disclosures from 2024 and 2025 continue to list the same legal entity and KDK vehicle models, supporting its current status as a mainland-China vehicle disclosure entity. The official history says its predecessor began in Yingkou in 1989, while the exhibition page says the company was founded in 1990. Those dates are treated as business lineage because the reviewed sources do not establish the current legal entity's incorporation date. The Chinese legal name, English exhibitor identity, DALIAN KUANDA brand, the website's Dalian Kuanda Special Purpose Automobile wording and dlkuanda.com.cn domain are deduplicated as one supplier.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "宽大官网称其 2020 年投产的连续复合板生产线配备数控淋胶机和两台大型数控切割机，可控制淋胶温度、流量和轨迹并在线定尺、异形切割；公布的设备口径为压制宽度 3.5 米、单板最大长度 15 米，玻璃钢内外面层可选 1.0—3.0 mm、XPS 芯层可选 20—120 mm。官网还发布 XPS 闭孔率 99%、导热系数 0.026 W/(m·K)、使用环境约 -40°C 至 100°C，以及防水、耐腐蚀、轻质、保温和易清洁等性能表述；这些数值和适用边界均为企业自述，采购时不能替代对应牌号的检测报告。询价应明确用途和结构图、FRP 面层树脂和增强体系、胶衣或涂层、面层厚度、芯材类型/密度/厚度、胶黏剂体系、总厚度、宽长、颜色、表面纹理、边缘结构、拼缝和预埋件；同时锁定面密度、平整度、尺寸允差、剥离和剪切强度、弯曲/冲击、导热系数、吸水率、水汽渗透、阻燃和烟毒、耐候/UV、热循环、低温脆性、耐化学品及清洁卫生要求。用于冷藏车厢、药品运输、食品或房车时，还应提供工作温区、冷机和底盘接口、门框与密封、冷桥处理、排水、防结露、内衬卫生、载荷和道路振动工况，并明确成品车公告、排放、强制认证、食品接触或 GSP 等项目适用要求。RFQ 和承认书需确认实际制造地点、连续线与外协工序边界、面层和芯材供应商、首件样板、样品至量产控制、批次 COA、取样方法、检测标准及版本、追溯、包装、MOQ、产能和交期。官网以 HTTP 正常提供内容，但 2026-08-13 核验时 HTTPS 连接不稳定，买方不应通过未加密页面提交敏感资料，应另行核实邮箱、账户和收款主体。官网称已取得质量、环境和职业健康安全管理体系认证，并展示荣誉入口，但所审阅页面没有足以核实当前有效性的证书号、标准版本、认证范围、发证机构数据库记录和有效期，因此本页不列为已核实认证。展会所述注册资本、人员、面积和性能产能，以及官网各项设备和性能口径，均应通过营业执照、当前证书、近期第三方报告、审厂、设备清单和代表性订单复核。",
  productsServicesSummaryEn:
    "Kuanda says its continuous composite-panel line commissioned in 2020 uses CNC adhesive dispensing and two large CNC cutters, controlling adhesive temperature, flow and path while supporting in-line cut-to-length and profile cutting. The company publishes a 3.5 m pressing width, panels up to 15 m long, 1.0–3.0 mm inner and outer FRP skins, and 20–120 mm XPS cores. It also publishes a 99% XPS closed-cell ratio, thermal conductivity of 0.026 W/(m·K), an approximate -40°C to 100°C service range, and waterproof, corrosion-resistant, lightweight, insulating and cleanable characteristics. These figures and their limits are company claims, not substitutes for grade-specific test reports. An RFQ should define the application and structural drawing; FRP skin resin and reinforcement; gel coat or coating; skin thickness; core type, density and thickness; adhesive; total thickness; width and length; color; surface; edge construction; joints; and inserts. Lock basis weight, flatness and dimensional tolerances, peel and shear strength, bending and impact, thermal conductivity, water absorption, vapor transmission, flame and smoke performance, weathering and UV, thermal cycling, low-temperature brittleness, chemical resistance and hygiene or cleaning requirements. For refrigerated bodies, pharmaceutical or food transport and RVs, provide the operating-temperature envelope; refrigeration-unit and chassis interfaces; doors and seals; thermal-bridge controls; drainage and condensation controls; sanitary lining; payload; and road-vibration duty. Also identify any applicable completed-vehicle announcement, emissions, compulsory certification, food-contact or GSP requirement. The RFQ and approval package should confirm the actual manufacturing location; continuous-line and subcontract boundaries; face-sheet and core suppliers; first-article panel; sample-to-production controls; batch COA; sampling method; test standard and edition; traceability; packing; MOQ; capacity; and lead time. The website serves content over HTTP, while HTTPS connectivity was unstable during the 2026-08-13 review. Buyers should not submit sensitive information through an unencrypted page and should independently verify email, account and payee identity. The site says quality, environmental and occupational-health-and-safety management certifications have been obtained and provides an honors section, but the reviewed pages do not provide a certificate number, standard edition, scope, issuer database record and validity period sufficient to establish current status. None is therefore recorded as a verified certification. Exhibition claims about capital, staffing and area, and company-published equipment, performance and capacity figures should be checked through the business license, current certificates, recent third-party reports, a site audit, equipment records and representative orders.",
  ecatalogs: [
    {
      title: "大连宽大官网",
      titleEn: "Official Dalian Kuanda Website",
      description: "企业品牌、板材、车厢、房车、联系方式和 ICP 备案。",
      descriptionEn: "Company brand, panels, vehicle bodies, RVs, contacts and ICP filing.",
      url: "http://dlkuanda.com.cn/",
      format: "Official website",
    },
    {
      title: "宽大公司介绍与沿革",
      titleEn: "Official Kuanda Company Profile and History",
      description: "1989 年业务沿革、2020 年连续板材线和企业自述能力。",
      descriptionEn: "1989 business lineage, 2020 continuous panel line and published capabilities.",
      url: "http://dlkuanda.com.cn/index.php?p=about",
      format: "Company profile",
    },
    {
      title: "宽大复合板材目录",
      titleEn: "Official Kuanda Composite Panel Directory",
      description: "保温板、玻璃钢板、铝复合板、房车板和定制板分类。",
      descriptionEn: "Insulated, FRP, aluminium, RV and custom panel categories.",
      url: "http://dlkuanda.com.cn/index.php?p=ban",
      format: "Product directory",
    },
    {
      title: "宽大板材部和生产线",
      titleEn: "Official Kuanda Panel Division and Line",
      description: "连续复合、数控淋胶、切割及公开尺寸能力。",
      descriptionEn: "Continuous lamination, CNC dispensing and cutting, and published size capability.",
      url: "http://dlkuanda.com.cn/index.php?p=banex&id=332",
      format: "Capability page",
    },
    {
      title: "宽大联系方式",
      titleEn: "Official Kuanda Contact Page",
      description: "法律主体、地址、复合板材电话和同域名邮箱。",
      descriptionEn: "Legal identity, address, composite-panel contact and company-domain email.",
      url: "http://dlkuanda.com.cn/index.php?p=contact",
      format: "Contact page",
    },
    {
      title: "中国国际复材展宽大网上展厅",
      titleEn: "China Composites Expo Dalian Kuanda Net Show",
      description: "英文主体、复材成品部件类别和展会业务范围。",
      descriptionEn: "English identity, finished-composite category and exhibition-described scope.",
      url: "https://www.chinacompositesexpo.com/en/netshow.php?_MULTI_PAGE_START=300",
      format: "Exhibitor profile",
    },
    {
      title: "生态环境部 2025 年 4 月机动车环保信息",
      titleEn: "MEE April 2025 Vehicle Environmental Disclosure",
      description: "列示大连宽大特种车辆有限公司及 KDK 旅居车型。",
      descriptionEn: "Lists Dalian Kuanda Special Vehicle Co., Ltd. and a KDK motorhome model.",
      url: "https://www.mee.gov.cn/ywgz/dqhjbh/ydyhjgl/202505/W020250529556470328977.pdf",
      format: "Government disclosure (PDF)",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/dalian-kuanda-logo.png",
  contactEmail: "13478434888@dlkuanda.com.cn",
  contactPhone: "+86 411 8711 2949 / +86 133 9024 6636",
  address:
    "No. 520 Weiguotun, Weiguo Community, Sanshilipu Subdistrict, Jinzhou District, Dalian, Liaoning, China",
  website: "http://dlkuanda.com.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "continuous FRP-XPS sandwich-panel lamination",
    "CNC adhesive dispensing and profile cutting",
    "FRP and aluminium insulated composite panels",
    "custom panel dimensions, skins and core thickness",
    "refrigerated and dry-freight vehicle bodies",
    "RV composite panels and body assembly",
    "vehicle-body structural design and sealing",
    "finished composite vehicle components",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
