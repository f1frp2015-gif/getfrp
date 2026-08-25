import type { SupplierListing } from "@/lib/db/schema";

export const HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_ID =
  "sup-hangzhou-fujikura-rubber";
export const HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_SLUG =
  "hangzhou-fujikura-rubber";

// Curated from Fujikura Composites' current official group, affiliated-company,
// shaft and China control-equipment contact pages plus the 2026 CCE H directory.
// The local Hangzhou site linked by the parent currently returns a blank page,
// so this profile uses only group-published scope and marks the entity boundary.
// Official logo downloaded 2026-08-25 from the parent site's current SVG.
export const HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_PROFILE: SupplierListing = {
  id: HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_ID,
  name: "杭州藤仓橡胶有限公司",
  nameEn: "Hangzhou Fujikura Rubber Co., Ltd.",
  slug: HANGZHOU_FUJIKURA_RUBBER_SUPPLIER_SLUG,
  location: "浙江杭州",
  locationEn: "Hangzhou, Zhejiang, China",
  province: "浙江",
  category: "distributor",
  products: [
    "Fujikura VENTUS 系列碳纤维高尔夫球杆轴询价",
    "Fujikura VENTUS TR 系列碳纤维高尔夫球杆轴询价",
    "Fujikura SPEEDER 系列碳纤维高尔夫球杆轴询价",
    "Fujikura SPEEDER NX 系列碳纤维高尔夫球杆轴询价",
    "Fujikura AIR SPEEDER 碳纤维高尔夫球杆轴询价",
    "DIAMOND SPEEDER 碳纤维木杆轴与球道木杆轴询价",
    "DIAMOND SPEEDER 碳纤维混合杆轴与铁杆轴询价",
    "藤仓气缸与低摩擦气动执行器",
    "藤仓压力调节器与比例阀",
    "藤仓单向阀、泄压阀与针阀",
  ],
  productsEn: [
    "Inquiry access for Fujikura VENTUS carbon-fiber golf shafts",
    "Inquiry access for Fujikura VENTUS TR carbon-fiber golf shafts",
    "Inquiry access for Fujikura SPEEDER carbon-fiber golf shafts",
    "Inquiry access for Fujikura SPEEDER NX carbon-fiber golf shafts",
    "Inquiry access for Fujikura AIR SPEEDER carbon-fiber golf shafts",
    "Inquiry access for DIAMOND SPEEDER carbon-fiber wood and fairway shafts",
    "Inquiry access for DIAMOND SPEEDER carbon-fiber hybrid and iron shafts",
    "Fujikura air cylinders and low-friction pneumatic actuators",
    "Fujikura pressure regulators and proportional valves",
    "Fujikura check, relief and needle valves",
  ],
  processList: [
    "中国区产品可供性与授权渠道确认",
    "球杆轴系列、重量、硬度、长度、扭矩与调子选型",
    "球杆轴真伪、序列、包装和来源追溯",
    "样品、配杆与应用适配确认",
    "日本制造标识与实际产地核验",
    "气缸、调压器和阀件型号选型",
    "杭州报价、合同、开票、收款与出口主体确认",
    "交期、MOQ、售后和非合格品路径确认",
  ],
  processListEn: [
    "China availability and authorized-channel confirmation",
    "Shaft series, weight, flex, length, torque and bend-profile selection",
    "Shaft authenticity, serial, packing and source traceability",
    "Sample, club-fitting and application confirmation",
    "Made-in-Japan marking and actual origin verification",
    "Air-cylinder, regulator and valve model selection",
    "Hangzhou quotation, contract, invoice, payee and exporter confirmation",
    "Lead-time, MOQ, after-sales and nonconformance-route confirmation",
  ],
  established: null,
  verified: false,
  description:
    "杭州藤仓橡胶有限公司是 Fujikura Composites（藤仓复合材料）集团官网列出的中国子公司。集团控制设备官网把杭州公司列为中国联系点，公开杭州下沙地址、电话、传真和公司域名邮箱；中国国际复材展以 HANGZHOU FUJIKURA RUBBER CO., LTD. 收录企业，展商说明提到从汽车发动机部件到高尔夫碳轴，并归入碳纤维、环氧树脂、纤维原料、切割和研发类别。集团和 Fujikura Shaft 官网公开 VENTUS、SPEEDER、AIR SPEEDER、DIAMOND SPEEDER 等碳纤维高尔夫轴系列，但部分产品页明确标注日本制造。由于集团资料没有证明这些球杆轴由杭州工厂制造，本页把它们写成杭州主体可被询问和确认的集团产品范围，而不是杭州自产事实；“carbon fiber products”关键词只代表展会和集团官网共同支持的碳轴关联，采购前必须确认授权、实际卖方、产地和出口主体。",
  descriptionEn:
    "Hangzhou Fujikura Rubber Co., Ltd. is a China subsidiary listed on the current Fujikura Composites group website. The group's control-equipment site publishes the Hangzhou company as its China contact with a Xiasha address, telephone, fax and company-domain email. China Composites Expo lists HANGZHOU FUJIKURA RUBBER CO., LTD.; its exhibitor description ranges from automotive engine components to carbon golf shafts and assigns carbon fiber, epoxy resin, fiber raw materials, cutting and R&D categories. The group and Fujikura Shaft sites publish VENTUS, SPEEDER, AIR SPEEDER and DIAMOND SPEEDER carbon-fiber golf-shaft families, while some product pages explicitly say Made in Japan. Because the group sources do not prove that those shafts are manufactured at the Hangzhou plant, this page presents them only as group-product inquiry scope to confirm with the Hangzhou entity, not as Hangzhou-made facts. The measured-demand phrase carbon fiber products reflects the expo and group-supported shaft association only; buyers must verify authorization, seller, origin and exporter before purchase.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "Fujikura Shaft 官网按 VENTUS、VENTUS TR、SPEEDER、SPEEDER NX、AIR SPEEDER 和 JEWEL/DIAMOND SPEEDER 等系列公开球杆轴，并把木杆、球道木、混合杆和铁杆用途分开。官网规格通常包含型号、硬度、长度、重量、扭矩、Tip/Butt 直径、调子和价格，部分页面说明 M46X、M40X、90T 碳纤维、开纤布或 VeloCore/VTC 等材料与结构技术。所有这些都是藤仓集团/品牌发布的产品信息，不是 GetFRP 独立测试，也不证明杭州公司拥有现货、授权或生产。询价应提供球杆类型、杆头与接口、目标长度、球员挥速/节奏、目标弹道和重量，锁定系列、确切型号、重量级、flex、扭矩、调子、Tip/Butt、修剪和装配要求。要求书面确认卖方是否为杭州藤仓、品牌授权链、原产国、批号/序列、真伪验证、包装、质保、最小订单、交期、退换货和目的国商标/经销限制；任何“Made in Japan”标识均须与实际产品和报关文件一致，不能因中国公司提供询价而改写为中国制造。高尔夫应用还应通过合格配杆师或代表性试装验证杆头兼容、成杆长度、挥重、频率、扭矩、粘接、方向、耐久和用户安全。集团官网同时把杭州公司列为控制设备中国联系点，官方目录包含气缸、调压器、比例阀、单向/泄压/针阀等；这类产品 RFQ 要给出介质、压力、流量、温度、洁净度、响应、泄漏、材料、螺纹/法兰、电气接口、寿命和适用法规，并确认杭州供货型号。CCE 的“环氧树脂、纤维原料、切割机器、研发”分类很宽，本轮未找到能证明杭州公司当前独立销售具体环氧牌号、通用碳纤维原丝或切割机型号的官网目录，因此这些分类不会扩展为产品或 SEO 词。杭州本地域名由集团官方链接，但本轮标准浏览器只得到空白页面；本页采用集团官网和控制设备页的主体及联系证据。集团官网披露的是集团规模、历史和管理体系，不能自动成为杭州法人的成立年份、规模或认证，故相应字段留空。",
  productsServicesSummaryEn:
    "The Fujikura Shaft website organizes products into VENTUS, VENTUS TR, SPEEDER, SPEEDER NX, AIR SPEEDER and JEWEL or DIAMOND SPEEDER families, with separate wood, fairway, hybrid and iron applications. Published specifications typically cover model, flex, length, weight, torque, tip and butt diameter, bend profile and price; some pages describe M46X, M40X, 90T carbon fiber, spread-tow fabric or VeloCore and VTC technologies. These are Fujikura group or brand statements, not independent GetFRP tests, and they do not establish Hangzhou stock, authorization or manufacture. An inquiry should identify club type, head and interface, target playing length, player speed and tempo, desired flight and weight, then lock family, exact model, weight class, flex, torque, bend profile, tip and butt, trimming and assembly. Require written confirmation of whether Hangzhou Fujikura is the seller, the authorized channel, country of origin, lot or serial traceability, authenticity process, packing, warranty, MOQ, lead time, return policy and destination trademark or distribution restrictions. Any Made in Japan marking must align with the actual unit and customs documents; a China inquiry contact does not make it China-made. A qualified club fitter or representative build should verify head compatibility, playing length, swing weight, frequency, torque, bonding, orientation, durability and user safety. The group also publishes Hangzhou as its China control-equipment contact, with official air-cylinder, pressure-regulator, proportional-valve, check, relief and needle-valve directories. Those RFQs should state media, pressure, flow, temperature, cleanliness, response, leakage, materials, thread or flange, electrical interface, service life and governing rules, and confirm the exact model supplied through Hangzhou. The expo's epoxy resin, fiber raw material, cutting machine and R&D categories are broad. This review found no current official Hangzhou catalog proving specific epoxy grades, general carbon-fiber tow or cutting-machine models, so those classifications do not expand the products or SEO phrases. The parent links a Hangzhou local domain, but a standard browser returned a blank page during this review; the profile therefore relies on the group corporate and control-equipment pages for entity and contact evidence. Group history, scale and management systems do not automatically become Hangzhou incorporation, scale or certification facts, so those fields remain unset.",
  ecatalogs: [
    { title: "Fujikura Composites 官网", titleEn: "Official Fujikura Composites Website", description: "集团业务、碳轴与公司入口。", descriptionEn: "Official group business, carbon-shaft and company entry.", url: "https://www.fujikuracomposites.jp/en/", format: "Official website" },
    { title: "集团公司与子公司", titleEn: "Group Company and Affiliates", description: "杭州藤仓列入集团子公司。", descriptionEn: "Official group page listing Hangzhou Fujikura as a subsidiary.", url: "https://www.fujikuracomposites.jp/en/company-en/", format: "Company profile" },
    { title: "中国区控制设备联系", titleEn: "China Control-Equipment Contact", description: "杭州地址、电话和邮箱。", descriptionEn: "Official Hangzhou address, telephone and email.", url: "https://www.fujikuracomposites.jp/control/en/agency-en/", format: "Contact page" },
    { title: "Fujikura Shaft 产品线", titleEn: "Fujikura Shaft Lineup", description: "VENTUS、SPEEDER 与其他碳轴系列。", descriptionEn: "Official VENTUS, SPEEDER and other carbon-shaft families.", url: "https://www.fujikurashaft.jp/en/", format: "Product directory" },
    { title: "DIAMOND SPEEDER", titleEn: "DIAMOND SPEEDER", description: "木杆、球道木、混合杆与铁杆碳轴规格。", descriptionEn: "Official wood, fairway, hybrid and iron carbon-shaft specifications.", url: "https://www.fujikurashaft.jp/en/en_material/en_jewel_line/diamond_speeder/", format: "Product page" },
    { title: "中国国际复材展 H 字母页", titleEn: "China Composites Expo Exhibitors — H", description: "杭州展商主体与碳轴关联范围。", descriptionEn: "Organizer source for the Hangzhou exhibitor and carbon-shaft association.", url: "https://www.chinacompositesexpo.com/en/netshow.php?head=H", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/hangzhou-fujikura-rubber-logo.svg",
  contactEmail: "souk@hangzhoufujikura.com",
  contactPhone: "+86 571 8691 2036",
  address: "M6-5-4 Xiasha Economic Development Zone, Hangzhou, Zhejiang, China",
  website: "https://www.fujikuracomposites.jp/en/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 22,
  viewCount: 0,
  capabilities: ["Fujikura group product inquiry", "carbon golf-shaft selection", "shaft specification and origin confirmation", "China availability confirmation", "pneumatic control equipment", "pressure regulators and valves", "lot and channel traceability", "export-entity confirmation"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
