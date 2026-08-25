import type { SupplierListing } from "@/lib/db/schema";

export const WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_ID =
  "sup-weihai-guangwei-composites";
export const WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_SLUG =
  "weihai-guangwei-composites";

// Curated from the current official Guangwei Composites website and its 2026
// China Composites Expo entry. The legal entity is the Shenzhen-listed company,
// while several product families are made by named subsidiaries; buyers should
// therefore confirm the contracting and manufacturing entity for each RFQ.
// Official logo downloaded on 2026-08-25 from the current official-site header:
// https://www.gwcfc.com/templates/guangwei/images/logo.png
export const WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_PROFILE: SupplierListing = {
  id: WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_ID,
  name: "威海光威复合材料股份有限公司",
  nameEn: "Weihai Guangwei Composites Co., Ltd.",
  slug: WEIHAI_GUANGWEI_COMPOSITES_SUPPLIER_SLUG,
  location: "山东威海",
  locationEn: "Weihai, Shandong, China",
  province: "山东",
  category: "fiber",
  products: [
    "T300 至 T1100 级高强碳纤维及织物",
    "M40J 至 M65J 级高模碳纤维及织物",
    "碳纤维、玻璃纤维、芳纶纤维和石英纤维预浸料",
    "拉挤碳纤维风电叶片碳梁",
    "碳纤维复合材料板材、管材、异形件与结构件",
    "碳纤维生产装备、检测检验与技术设计服务",
  ],
  productsEn: [
    "T300- through T1100-class high-strength carbon fiber and fabrics",
    "M40J- through M65J-class high-modulus carbon fiber and fabrics",
    "Carbon-, glass-, aramid- and quartz-fiber prepregs",
    "Pultruded carbon-fiber spar caps for wind-turbine blades",
    "Carbon-fiber composite plates, tubes, shaped parts and structures",
    "Carbon-fiber production equipment, testing and engineering services",
  ],
  processList: [
    "湿法和干喷湿纺碳纤维制备",
    "碳纤维织造与经编",
    "热熔法、溶剂法和阶段性预浸",
    "碳梁连续拉挤成型",
    "复材设计、铺层、成型和后加工",
    "材料与制品检测分析",
  ],
  processListEn: [
    "Wet-spinning and dry-jet wet-spinning carbon-fiber production",
    "Carbon-fiber weaving and warp knitting",
    "Hot-melt, solvent and staged prepreg production",
    "Continuous pultrusion of carbon-fiber spar caps",
    "Composite design, lay-up, molding and secondary processing",
    "Material and finished-component testing",
  ],
  established: null,
  verified: false,
  description:
    "威海光威复合材料股份有限公司（深交所代码 300699）隶属光威集团，官网披露其通过威海拓展纤维、通用新材料、光威能源新材料、光威复材科技、光威精密机械等单位，形成从原丝、碳纤维、织物、树脂和预浸料到复合材料制品、装备、检测和设计的产业链。当前官网列出 T300 至 T1100 级高强碳纤维、M40J 至 M65J 级高模碳纤维、多种纤维预浸料、拉挤风电碳梁以及板材、管材和异形件。中国国际复材展 2026 网上展厅以同一中英文主体收录公司，展位号 6V01。主体、产品和能力信息来自企业或展会公开资料，尚未由 GetFRP 现场审计。",
  descriptionEn:
    "Weihai Guangwei Composites Co., Ltd. (Shenzhen Stock Exchange code 300699), part of Guangwei Group, publishes an integrated chain spanning precursor, carbon fiber, fabrics, resin and prepreg through composite components, production equipment, testing and engineering. The current official site identifies operating units including Weihai Tuozhan Fiber, the General New Materials business, Guangwei Energy New Materials, Guangwei Composite Technology and Guangwei Precision Machinery. Its published portfolio covers T300- through T1100-class high-strength fibers, M40J- through M65J-class high-modulus fibers, multi-fiber prepregs, pultruded wind-blade spar caps, plates, tubes and shaped components. China Composites Expo lists the same Chinese and English entity at booth 6V01 for 2026. Identity, products and capabilities are company- or organizer-published and have not been independently site-audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网碳纤维目录按牌号、丝束、强度、模量、伸长率和线密度列出多个货架型号，包括 GQ3522、GQ4522、QZ5526、QZ6026、QM4035、QM4050 和 QM3560 等系列；预浸料目录覆盖环氧、双马来酰亚胺、氰酸酯和酚醛树脂体系，以及碳纤维、玻璃纤维、芳纶和石英纤维增强形式，列出航空航天、轨道交通、船舶、体育休闲、风电、透波、工装和 3C 等应用示例。公司还公开板材、管材、结构件、夹层件、缠绕壳体和风电碳梁等制品范围。采购方不应把集团级能力自动视为同一工厂或同一法人可以交付的全部范围：RFQ 应明确签约主体、生产场地、纤维牌号与丝束、上浆剂和树脂相容性、织物结构或预浸料面密度与树脂含量、卷材尺寸、储运条件、材料批次、CoA 字段及变更通知。碳梁和其他结构件还需给出图纸、铺层、纤维体积分数、树脂体系、拉挤或其他成型路线、尺寸公差、表面、无损检测、取样和力学验收方法。官网和展会提到多项质量、航空、汽车、实验室和船级社资质，但当前页面未同时提供足以核对主体、地址、范围、证书编号和有效期的完整证书包，因此本页不把这些列为已核实认证；买方应索取覆盖报价产品与生产场地的现行证书和报告。官网当前可通过浏览器访问，但本机命令行验证其 TLS 证书链时出现自签链异常，交换图纸、付款或登录前应独立核对域名、联系人和证书状态。",
  productsServicesSummaryEn:
    "The official carbon-fiber directory publishes shelf grades with tow size, tensile strength, modulus, elongation and linear density, including GQ3522, GQ4522, QZ5526, QZ6026, QM4035, QM4050 and QM3560 families. The prepreg directory covers epoxy, bismaleimide, cyanate-ester and phenolic matrices with carbon, glass, aramid and quartz reinforcement, and gives aerospace, rail, marine, sporting, wind, radome, tooling and 3C examples. Published component scope also includes plates, tubes, structural and sandwich parts, wound shells and wind-blade spar caps. Group-level capability should not be read as proof that one legal entity or site performs every operation. An RFQ should identify the contracting entity and production site; fiber grade and tow; sizing and resin compatibility; fabric architecture or prepreg areal weight and resin content; roll dimensions; storage and transport limits; batch identity; certificate-of-analysis fields; and change notification. Spar caps and other structures also require a controlled drawing, lay-up, fiber volume, resin system, pultrusion or other route, dimensional tolerance, surface criteria, NDT, sampling and mechanical acceptance methods. The company and organizer mention quality, aerospace, automotive, laboratory and classification credentials, but the reviewed pages do not expose a complete current certificate set sufficient to verify entity, address, scope, number and validity. None is recorded as independently verified; request certificates and reports covering the quoted product and manufacturing site. The official site loads in browsers, while command-line validation from the review environment reported a self-signed element in its TLS chain. Independently verify the domain, contact and certificate status before exchanging controlled drawings, credentials or payment instructions.",
  ecatalogs: [
    {
      title: "光威复材官网",
      titleEn: "Official Guangwei Composites Website",
      description: "公司主体、业务板块、产品和当前联系方式。",
      descriptionEn: "Official identity, business units, products and current contacts.",
      url: "https://www.gwcfc.com/",
      format: "Official website",
    },
    {
      title: "光威复材公司简介",
      titleEn: "Official Guangwei Company Profile",
      description: "产业链、子公司、牌号范围和应用。",
      descriptionEn: "Value chain, operating units, grade range and applications.",
      url: "https://www.gwcfc.com/content/list-25.aspx",
      format: "Company profile",
    },
    {
      title: "碳纤维及织物目录",
      titleEn: "Carbon Fiber and Fabric Directory",
      description: "碳纤维牌号、丝束与公开性能表。",
      descriptionEn: "Published carbon-fiber grades, tow sizes and property table.",
      url: "https://www.gwcfc.com/photo/list-56.aspx",
      format: "Product directory",
    },
    {
      title: "高性能预浸料目录",
      titleEn: "High-Performance Prepreg Directory",
      description: "增强材料、树脂体系、型号和应用范围。",
      descriptionEn: "Reinforcements, resin systems, grades and application scope.",
      url: "https://www.gwcfc.com/photo/list-57.aspx",
      format: "Product directory",
    },
    {
      title: "中国国际复材展光威网上展厅",
      titleEn: "China Composites Expo Guangwei Net Show",
      description: "同一主体、2026 展位号与展会产品分类。",
      descriptionEn: "Matching identity, 2026 booth and organizer product categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-123-7865053.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/weihai-guangwei-composites-logo.png",
  contactEmail: "guangwei@gwcfc.cn",
  contactPhone: "+86 631 562 8340",
  address: "No. 130 Tianjin Road, High-tech Zone, Weihai, Shandong, China",
  website: "https://www.gwcfc.com/",
  enterpriseId: null,
  scaleTier: "XL",
  brandPriority: 28,
  viewCount: 0,
  capabilities: [
    "PAN-based high-strength and high-modulus carbon fiber",
    "carbon-fiber woven and warp-knit fabrics",
    "carbon, glass, aramid and quartz prepregs",
    "pultruded carbon-fiber wind-blade spar caps",
    "carbon-fiber plates, tubes and shaped components",
    "composite engineering and manufacturing",
    "carbon-fiber production equipment",
    "material and component testing",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
