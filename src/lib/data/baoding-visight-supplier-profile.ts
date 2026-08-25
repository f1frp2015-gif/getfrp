import type { SupplierListing } from "@/lib/db/schema";

export const BAODING_VISIGHT_SUPPLIER_ID = "sup-baoding-visight";
export const BAODING_VISIGHT_SUPPLIER_SLUG =
  "baoding-visight-structural-core-materials";

// Curated from Baoding Visight's current official company, PVC, PET, PMI,
// balsa and contact pages and its 2026 China Composites Expo entry. Official
// logo downloaded on 2026-08-25 from the current website header:
// http://www.visight.com.cn/Uploadfiles/Picture/2018-5-15/2018515145073876.png
export const BAODING_VISIGHT_SUPPLIER_PROFILE: SupplierListing = {
  id: BAODING_VISIGHT_SUPPLIER_ID,
  name: "保定维赛新材料科技股份有限公司",
  nameEn: "Baoding Visight Advanced Material Technology Co., Ltd.",
  slug: BAODING_VISIGHT_SUPPLIER_SLUG,
  location: "河北保定",
  locationEn: "Baoding, Hebei, China",
  province: "河北",
  category: "core",
  products: [
    "Vicell V 系列闭孔交联 PVC 结构泡沫",
    "Vicell T 系列 PET 结构泡沫",
    "Vicell P 系列 PMI 结构泡沫",
    "Vicell B 系列巴沙木芯材",
    "结构芯材板材、开槽打孔及定制加工件",
  ],
  productsEn: [
    "Vicell V-series closed-cell cross-linked PVC structural foam",
    "Vicell T-series PET structural foam",
    "Vicell P-series PMI structural foam",
    "Vicell B-series balsa-wood core material",
    "Structural-core sheets, grooved or perforated formats and custom-machined parts",
  ],
  processList: [
    "PVC、PET 与 PMI 泡沫研发和生产",
    "巴沙木芯材加工",
    "芯材板材切割、开槽和打孔",
    "真空导入、RTM 与模压用芯材适配",
    "夹芯结构应用开发与定制加工",
  ],
  processListEn: [
    "PVC, PET and PMI foam development and production",
    "Balsa-core processing",
    "Core-sheet cutting, grooving and perforation",
    "Core preparation for vacuum infusion, RTM and molding",
    "Sandwich-structure application development and custom machining",
  ],
  established: 2011,
  verified: false,
  description:
    "保定维赛新材料科技股份有限公司成立于 2011 年，官网将其定位为高强、轻质结构芯材的研发、生产与销售企业，当前产品体系包括 Vicell V 系列 PVC 泡沫、T 系列 PET 泡沫、P 系列 PMI 泡沫和 B 系列巴沙木芯材，应用方向覆盖风电、航空航天、船舶、轨道交通、新能源汽车、医疗设备、运动器材和雷达罩。官网列出保定、威海、连云港、望都等生产或运营实体及甘肃联系点。中国国际复材展网上展厅收录同一主体并将产品归入泡沫芯材、巴沙木、夹芯板和复材制件。产能、市场排名、性能和应用陈述均为企业或展会发布，尚未由 GetFRP 独立审计。",
  descriptionEn:
    "Founded in 2011, Baoding Visight Advanced Material Technology Co., Ltd. presents itself on its official site as a developer, manufacturer and seller of high-strength lightweight structural core materials. The current portfolio covers Vicell V-series PVC foam, T-series PET foam, P-series PMI foam and B-series balsa core, with stated applications in wind energy, aerospace, marine, rail, new-energy vehicles, medical equipment, sporting goods and radomes. The site identifies operating or production entities in Baoding, Weihai, Lianyungang and Wangdu, plus a Gansu contact. China Composites Expo lists the same entity under foam core, balsa, sandwich panels and composite parts. Capacity, market-position, performance and application statements are company- or organizer-published and have not been independently audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网公开的 Vicell V 系列为闭孔交联 PVC 泡沫，牌号范围 V45 至 V250，描述了与环氧、不饱和聚酯和乙烯基酯树脂的相容性，以及真空导入、RTM、模压等工艺用途。Vicell T 系列 PET 泡沫列出 T60 至 T300 及部分封孔 S 型号，面向风电、交通、船舶和建筑夹芯；Vicell P 系列 PMI 包括 P、PH、Pb、Px、Pw 等子系列，面向不同共固化温度和航空航天、轨道、医疗、雷达罩应用；Vicell B 系列巴沙木公开 B100、B130、B150 等密度等级。上述性能、温度和相容性描述需要用具体牌号 TDS 与项目工艺重新验证。RFQ 应明确芯材化学体系、密度和允许偏差、板厚与尺寸、闭孔率、压缩/剪切/拉伸指标及方向、吸水率、树脂吸收量、热变形或长期使用温度、阻燃要求、表面处理、开槽/打孔/网格布形式、曲面贴合半径、拼接方式、包装防潮和批次追溯。风电、船舶、轨道和航空项目还应约定取样、老化、疲劳、阻燃、烟毒、介电或无损检测标准，并确认报价产品由哪个法人和场地生产。官网展示若干体系证书图示，但本轮页面未同时提供足以核对主体、地址、范围、编号和有效期的完整现行证书包，因此不列已核实认证。官网目前通过 HTTP 可访问，HTTPS 在核验环境出现协议错误；交换图纸、登录信息或付款指令前应独立核对域名、联系人和安全传输方式。",
  productsServicesSummaryEn:
    "The official Vicell V-series page identifies closed-cell cross-linked PVC foam from V45 through V250 and describes compatibility with epoxy, unsaturated-polyester and vinyl-ester matrices plus vacuum-infusion, RTM and molding applications. The Vicell T-series PET page lists T60 through T300 and selected sealed S variants for wind, transport, marine and building sandwich structures. The Vicell P-series PMI portfolio includes P, PH, Pb, Px and Pw subfamilies aimed at different co-cure temperatures and aerospace, rail, medical and radome uses. The Vicell B-series balsa page publishes B100, B130 and B150 density grades. These performance, temperature and resin-compatibility statements require grade-specific TDS review and validation in the buyer's actual process. An RFQ should specify core chemistry; nominal density and tolerance; sheet thickness and dimensions; closed-cell content; directional compression, shear and tensile criteria; water uptake; resin absorption; heat-distortion or continuous-use temperature; flame requirements; surface treatment; grooves, perforations or scrim format; minimum forming radius; splice pattern; moisture-protective packaging; and lot traceability. Wind, marine, rail and aerospace programs should additionally contract for sampling, aging, fatigue, flame/smoke/toxicity, dielectric or NDT methods and identify which legal entity and site will manufacture the quoted grade. Although the site displays management-system certificate imagery, the reviewed pages do not provide a complete current package sufficient to verify entity, address, scope, number and validity, so no certification is recorded as independently verified. The site currently works over HTTP while HTTPS returned a protocol error in the review environment. Independently verify the domain, contact and secure transfer method before exchanging controlled drawings, credentials or payment instructions.",
  ecatalogs: [
    {
      title: "维赛新材官网",
      titleEn: "Official Visight Website",
      description: "公司、产品、市场和当前运营联系点。",
      descriptionEn:
        "Official company, product, market and operating-location information.",
      url: "http://www.visight.com.cn/",
      format: "Official website",
    },
    {
      title: "维赛新材公司介绍",
      titleEn: "Visight Company Profile",
      description: "公司历史、研发生产布局和公开业务范围。",
      descriptionEn:
        "Official company history, R&D and production footprint and published scope.",
      url: "http://www.visight.com.cn/about.aspx?t=1",
      format: "Company profile",
    },
    {
      title: "Vicell V 系列 PVC 泡沫",
      titleEn: "Vicell V-series PVC Foam",
      description: "牌号、公开性能、树脂相容性和加工用途。",
      descriptionEn:
        "Published grades, properties, resin compatibility and processing applications.",
      url: "http://www.visight.com.cn/vicell.aspx?t=11",
      format: "Technical product page",
    },
    {
      title: "Vicell T 系列 PET 泡沫",
      titleEn: "Vicell T-series PET Foam",
      description: "PET 芯材牌号与应用范围。",
      descriptionEn: "Official PET-core grades and application scope.",
      url: "http://www.visight.com.cn/vicell.aspx?t=93",
      format: "Technical product page",
    },
    {
      title: "Vicell P 系列 PMI 泡沫",
      titleEn: "Vicell P-series PMI Foam",
      description: "PMI 子系列、温度等级和应用说明。",
      descriptionEn:
        "Official PMI subfamilies, temperature classes and application information.",
      url: "http://www.visight.com.cn/vicell.aspx?t=94",
      format: "Technical product page",
    },
    {
      title: "Vicell B 系列巴沙木",
      titleEn: "Vicell B-series Balsa Core",
      description: "巴沙木芯材密度等级与加工信息。",
      descriptionEn:
        "Official balsa-core density grades and processing information.",
      url: "http://www.visight.com.cn/vi-balsa.aspx?t=14",
      format: "Technical product page",
    },
    {
      title: "维赛新材联系方式",
      titleEn: "Visight Contact Directory",
      description: "保定总部及其他公开运营地点。",
      descriptionEn:
        "Official Baoding headquarters and other published operating locations.",
      url: "http://www.visight.com.cn/contact.aspx?t=26",
      format: "Official contact",
    },
    {
      title: "中国国际复材展 B 字母展商页",
      titleEn: "China Composites Expo Exhibitors — B",
      description: "保定维赛展商身份、产品分类和展会简介。",
      descriptionEn:
        "Organizer entry for Baoding Visight, product categories and exhibitor scope.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=B",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/baoding-visight-logo.png",
  contactEmail: "vicell02@visight.com.cn",
  contactPhone: "+86 312 305 6818",
  address:
    "No. 768 Lixing Street, High-tech Zone, Baoding, Hebei, China",
  website: "http://www.visight.com.cn/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 24,
  viewCount: 0,
  capabilities: [
    "cross-linked PVC structural foam",
    "PET structural foam",
    "PMI structural foam",
    "balsa-wood core",
    "sandwich core sheets",
    "core grooving and perforation",
    "custom core machining",
    "vacuum-infusion core preparation",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
