import type { SupplierListing } from "@/lib/db/schema";

export const ADESSO_WUHU_TIANDAO_SUPPLIER_ID =
  "sup-adesso-wuhu-tiandao";
export const ADESSO_WUHU_TIANDAO_SUPPLIER_SLUG =
  "adesso-wuhu-tiandao-recyclable-epoxy";

// Curated from the current Adesso Advanced Materials website and its 2026
// China Composites Expo entry. The exhibitor entry names Adesso Advanced
// Materials and Wuhu Tiandao together; the official company profile identifies
// Wuhu Tiandao Green New Materials as the formulation-resin production base.
// Official logo downloaded on 2026-08-25 from the current website header:
// http://www.adessomaterials.com/static/upload/image/20240423/1713852317928005.png
export const ADESSO_WUHU_TIANDAO_SUPPLIER_PROFILE: SupplierListing = {
  id: ADESSO_WUHU_TIANDAO_SUPPLIER_ID,
  name: "芜湖天道绿色新材料有限公司（艾达索高新材料）",
  nameEn:
    "Wuhu Tiandao Green New Materials Co., Ltd. (Adesso Advanced Materials)",
  slug: ADESSO_WUHU_TIANDAO_SUPPLIER_SLUG,
  location: "安徽芜湖",
  locationEn: "Wuhu, Anhui, China",
  province: "安徽",
  category: "resin",
  products: [
    "Cleavamine 可降解环氧固化剂体系",
    "Recycloset 可回收热固性环氧配方",
    "覆铜板与 PCB 用可降解固化剂",
    "风电叶片用可降解固化剂与树脂体系",
    "航空内饰及复合材料部件用可回收环氧材料方案",
  ],
  productsEn: [
    "Cleavamine degradable curing-agent systems for thermoset epoxy",
    "Recycloset recyclable thermoset epoxy formulations",
    "Degradable curing agents for copper-clad laminates and PCBs",
    "Degradable curing-agent and resin systems for wind-turbine blades",
    "Recyclable epoxy material solutions for aerospace interiors and composite components",
  ],
  processList: [
    "环氧固化剂研发与配方",
    "可回收热固性树脂体系开发",
    "芜湖配方树脂生产",
    "复材化学解聚与纤维回收路线开发",
    "PCB、风电和碳纤维复材应用验证",
  ],
  processListEn: [
    "Epoxy curing-agent research and formulation",
    "Recyclable thermoset resin-system development",
    "Formulated-resin production at the Wuhu base",
    "Chemical depolymerization and fiber-recovery process development",
    "Application validation for PCB, wind-energy and carbon-fiber composites",
  ],
  established: null,
  verified: false,
  description:
    "中国国际复材展网上展厅以“艾达索高新材料芜湖有限公司/芜湖天道绿色新材料有限公司”收录该展商。艾达索官网将芜湖天道绿色新材料有限公司描述为配方树脂生产基地，并公开 Cleavamine 可降解固化剂和 Recycloset 可回收热固性环氧配方，应用方向包括覆铜板/PCB、风电叶片、航空内饰及其他碳纤维制品。官网还列出无锡研发、长沙产业化与美国新泽西研发联系点。企业历史、技术首创、专利、奖项和应用效果均为公司或展会发布，尚未由 GetFRP 独立审计；本页不把品牌级陈述自动等同于芜湖法人可交付的全部产品。",
  descriptionEn:
    "China Composites Expo lists the exhibitor under the combined identity of Adesso Advanced Materials Wuhu and Wuhu Tiandao Green New Materials. Adesso's official profile identifies Wuhu Tiandao Green New Materials Co., Ltd. as its formulated-resin production base and publishes the Cleavamine degradable curing-agent platform and Recycloset recyclable thermoset epoxy formulations. Stated application areas include copper-clad laminates and PCBs, wind-turbine blades, aerospace interiors and other carbon-fiber products. The site also identifies R&D or industrialization contacts in Wuxi, Changsha and Cranbury, New Jersey. Company history, claimed technology firsts, patents, awards and application performance are supplier- or organizer-published and have not been independently audited by GetFRP. Brand-level statements should not be read as proof that the Wuhu legal entity supplies every listed formulation.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "艾达索官网的当前产品导航分为 PCB 系列和风电叶片系列可降解固化剂，并把 Cleavamine 描述为可使热固性环氧复材在特定化学条件下解聚、回收纤维与树脂组分的固化体系；Recycloset 是围绕该路线形成的可回收热固性环氧配方。采购方需要把“可降解”从营销概念转化为牌号级、工艺级验证：RFQ 应明确目标基材与增强纤维、混合比例、黏度和适用期、固化温度/时间、Tg、力学与电气性能、阻燃或耐候要求、储存期、包装和运输限制。若项目以回收为核心，还应索取解聚介质、温度、时间、设备、防护、溶剂回收、回收纤维保留率及树脂组分去向的完整说明，并用实际层压板或叶片材料做小试。覆铜板、风电叶片和航空内饰的法规与验证路径不同，不能用一个应用案例代替另一个行业的型式验证。官网未在本轮核验页面同时提供足以验证芜湖法人、地址、范围、证书编号和有效期的完整现行证书包，因此本页不列已核实认证。买方还应确认签约主体、实际生产场地、批次 CoA 字段、变更通知、知识产权使用边界及回收方案在目的国的化学品和废物合规性。官网当前仅能通过 HTTP 稳定访问，HTTPS 在核验环境返回域名证书错误；交换配方、受控图纸、登录信息或付款指令前，应独立核对域名、联系人和安全通道。",
  productsServicesSummaryEn:
    "The current official product navigation separates degradable curing agents for PCB/copper-clad-laminate applications from systems for wind-turbine blades. Adesso presents Cleavamine as a curing platform intended to let thermoset epoxy composites depolymerize under specified chemical conditions so fibers and resin constituents can be recovered; Recycloset is the recyclable thermoset epoxy formulation platform built around that route. Buyers should convert the word recyclable into a grade- and process-specific validation plan. An RFQ should identify substrate and reinforcement; mix ratio; viscosity and working life; cure temperature and time; glass-transition temperature; mechanical and electrical properties; flame, weathering or dielectric requirements; shelf life; packaging; and transport constraints. Where end-of-life recovery is decisive, request the exact depolymerization medium, temperature, duration, equipment, worker protection, solvent recovery, retained-fiber properties and disposition of recovered resin constituents, then run trials on the actual laminate or blade material. PCB, wind-blade and aerospace-interior qualification routes are not interchangeable, and one application example is not proof of approval in another sector. The reviewed pages do not expose a complete current certificate package sufficient to verify the Wuhu entity, site, scope, number and validity, so no certification is recorded as independently verified. Buyers should also confirm the contracting party, production site, batch CoA fields, change notification, intellectual-property boundary and chemical or waste compliance of the proposed recovery route in the destination market. The official site is currently stable over HTTP, while HTTPS returned a certificate-name error in the review environment. Independently verify the domain, contact and secure exchange channel before sharing formulations, controlled drawings, credentials or payment instructions.",
  ecatalogs: [
    {
      title: "艾达索高新材料官网",
      titleEn: "Official Adesso Advanced Materials Website",
      description: "品牌、研发与产业化布局、产品和联系方式。",
      descriptionEn:
        "Official brand, R&D and industrialization footprint, products and contacts.",
      url: "http://www.adessomaterials.com/",
      format: "Official website",
    },
    {
      title: "艾达索公司介绍",
      titleEn: "Official Adesso Company Profile",
      description: "芜湖天道生产基地、技术平台与发展信息。",
      descriptionEn:
        "Official description of the Wuhu Tiandao production base and technology platforms.",
      url: "http://www.adessomaterials.com/?aboutus/",
      format: "Company profile",
    },
    {
      title: "艾达索产品中心",
      titleEn: "Adesso Product Center",
      description: "PCB 与风电叶片系列可降解固化剂入口。",
      descriptionEn:
        "Official entry point for PCB and wind-blade degradable curing-agent systems.",
      url: "http://www.adessomaterials.com/?product/",
      format: "Product directory",
    },
    {
      title: "艾达索联系方式",
      titleEn: "Adesso Contact Page",
      description: "长沙、芜湖和美国联系点及公开邮箱。",
      descriptionEn:
        "Published Changsha, Wuhu and US contact locations and email.",
      url: "http://www.adessomaterials.com/?contact/",
      format: "Official contact",
    },
    {
      title: "中国国际复材展 A 字母展商页",
      titleEn: "China Composites Expo Exhibitors — A",
      description: "艾达索/芜湖天道展商身份、产品方向和应用范围。",
      descriptionEn:
        "Organizer entry for the combined Adesso/Wuhu Tiandao identity and product scope.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=A",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/adesso-wuhu-tiandao-logo.png",
  contactEmail: "xiangli@adessomaterials.com",
  contactPhone: null,
  address:
    "Building 4, Science and Innovation Center, Exi Road, Sanshan Economic Development Zone, Wuhu, Anhui, China",
  website: "http://www.adessomaterials.com/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 20,
  viewCount: 0,
  capabilities: [
    "degradable epoxy curing agents",
    "recyclable thermoset epoxy formulation",
    "composite chemical depolymerization",
    "fiber-recovery process development",
    "PCB and copper-clad laminate materials",
    "wind-blade resin systems",
    "carbon-fiber composite recycling",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
