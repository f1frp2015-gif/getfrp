import type { SupplierListing } from "@/lib/db/schema";

export const SHENGLI_LIMITED_SUPPLIER_ID = "sup-shengli-limited";
export const SHENGLI_LIMITED_SUPPLIER_SLUG = "shengli-limited";

// Curated from Shengli Limited's official company, FRP/GRP pipe, GFT-RTP,
// sales/export and contact pages. The official site identifies Shengli
// Limited as a New Zealand-based China sourcing and supply partner and names
// Shengli Xinda in Dongying, China, as its FRP-pipe manufacturing source. The
// two entities are not treated as interchangeable here. Product, performance,
// relationship and export statements remain company-published and unverified
// by GetFRP. The current official logo was downloaded from:
// https://shenglinz.com/assets/images-template/logo.png
export const SHENGLI_LIMITED_SUPPLIER_PROFILE: SupplierListing = {
  id: SHENGLI_LIMITED_SUPPLIER_ID,
  name: "Shengli Limited",
  nameEn: "Shengli Limited",
  slug: SHENGLI_LIMITED_SUPPLIER_SLUG,
  location: "新西兰内皮尔",
  locationEn: "Napier, New Zealand",
  province: null,
  category: "manufacturer",
  products: [
    "FRP / GRP 管道与管件",
    "玻璃纤维带增强热塑性聚乙烯复合管（GFT-RTP）",
    "定制复合材料管道与管件供应",
    "面向工业和基础设施的中国制造产品供应",
  ],
  productsEn: [
    "FRP / GRP pipe and fittings",
    "Glass-fiber-tape reinforced thermoplastic polyethylene pipe (GFT-RTP)",
    "Custom composite pipe and fitting supply",
    "China-manufactured products for industry and infrastructure",
  ],
  processList: [
    "中国制造商寻源与供应链对接",
    "按买方规格协调定制生产",
    "生产监控与质量控制协调（企业自述）",
    "销售、出口及全球交付协调",
    "大宗项目与本地制造授权洽谈",
  ],
  processListEn: [
    "Chinese-manufacturer sourcing and supply-chain coordination",
    "Custom-manufacturing coordination against buyer specifications",
    "Production monitoring and quality-control coordination (company-published)",
    "Sales, export and worldwide-delivery coordination",
    "Large-volume project and local-manufacturing-rights discussions",
  ],
  established: 1999,
  verified: false,
  description:
    "Shengli Limited 官网称其于 1999 年由中国企业 Shandong Shengli 与新西兰贸易咨询公司 Atkin Management Ltd 以东西方合资形式创立，现从新西兰内皮尔向全球客户提供中国工业品寻源、制造协调、销售与出口服务。其复合材料业务重点包括 FRP / GRP 管道与管件，以及玻璃纤维带增强热塑性聚乙烯复合管（GFT-RTP）。官网将东营的 Shengli Xinda 描述为其 FRP 管道制造来源，因此采购方应按具体项目分别核验签约销售主体、实际生产工厂和质量责任边界。",
  descriptionEn:
    "Shengli Limited states that it began in 1999 as an East-West joint venture between Shandong Shengli in China and New Zealand trade consultancy Atkin Management Ltd. Operating from Napier, New Zealand, it offers global buyers China sourcing, manufacturing coordination, sales and export services for industrial products. Its composites offer centers on FRP / GRP pipe and fittings and glass-fiber-tape reinforced thermoplastic polyethylene pipe (GFT-RTP). The official site names Shengli Xinda in Dongying as its FRP-pipe manufacturing source, so buyers should confirm the contracting seller, actual factory and quality-responsibility boundary for each order.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "Shengli 官网将 FRP / GRP 管道定位于工业与基础设施应用，并称可通过其中国供应链提供未在网站逐项展示的定制管道和管件。其 GFT-RTP 产品采用内外 HDPE 层与玻璃纤维增强芯层结构，官网称可提供大小口径和连续长度，并面向油气、水和浆体输送等场景。上述性能、寿命、专利和应用陈述均为企业发布，官网页面未列明可直接适用于采购的完整牌号、设计标准或证书清单。采购方应在询价时确认签约与制造主体、工厂地址、树脂/热塑性基体与增强结构、内衬、缠绕或成型工艺、口径、压力等级、环刚度、连接方式、设计与测试标准、原材料与批次追溯、第三方检验、现行证书、MOQ、交期、包装、Incoterms、质保及售后责任。GFT-RTP 页面还明确说明该产品不适合现场开孔或带压开口，具体支管方案应由项目工程师审核。",
  productsServicesSummaryEn:
    "Shengli positions its FRP / GRP pipe offer for industrial and infrastructure use and says its China supply chain can source or manufacture custom pipe and fittings beyond the examples published online. Its GFT-RTP page describes a glass-fiber reinforced core between inner and outer HDPE layers, with small- and large-diameter and continuous-length supply for oil and gas, water and slurry service. These performance, service-life, patent and application statements are company-published, and the web pages do not provide a complete grade-specific design-standard or certificate schedule for procurement. An RFQ should therefore identify the contracting and manufacturing entities, factory address, resin or thermoplastic matrix and reinforcement architecture, liner, winding or forming process, diameter, pressure class, ring stiffness, joint system, design and test standards, material and batch traceability, third-party inspection, current certificates, MOQ, lead time, packaging, Incoterms, warranty and after-sales responsibility. The GFT-RTP page also states that the pipe cannot be tapped or drilled on site; branch-connection design should be reviewed by the project engineer.",
  ecatalogs: [
    {
      title: "Shengli 官方网站",
      titleEn: "Shengli Official Website",
      description: "企业、产品、服务和全球供应定位总览。",
      descriptionEn:
        "Official overview of the company, product groups, services and global supply positioning.",
      url: "https://www.shenglinz.com/",
      format: "Official website",
    },
    {
      title: "Shengli 公司介绍",
      titleEn: "Shengli Company Profile",
      description: "官网发布的 1999 年创立背景、合资关系与运营模式。",
      descriptionEn:
        "Official company history, 1999 origin, joint-venture background and operating model.",
      url: "https://www.shenglinz.com/about-us/shengli-ltd/",
      format: "Company profile",
    },
    {
      title: "FRP / GRP 管道与管件目录",
      titleEn: "FRP / GRP Pipe and Fittings Directory",
      description: "官网发布的复合材料管道、管件与相关产品入口。",
      descriptionEn:
        "Official directory for composite pipe, fittings and related supply categories.",
      url: "https://www.shenglinz.com/products/pipes-fittings-and-streetware/",
      format: "Product directory",
    },
    {
      title: "GRP / FRP 管道供应页",
      titleEn: "GRP / FRP Pipe Supply Page",
      description: "官网对东营制造来源、定制供应与管件能力的说明。",
      descriptionEn:
        "Official description of the Dongying manufacturing source, custom supply and fitting capability.",
      url: "https://www.shenglinz.com/products/pipes-fittings-and-streetware/grp-frp-pipe-manufacturers-in-china/",
      format: "Product overview",
    },
    {
      title: "GFT-RTP 技术概述",
      titleEn: "GFT-RTP Technical Overview",
      description: "玻璃纤维带增强热塑性聚乙烯复合管的结构、应用与使用限制。",
      descriptionEn:
        "Official overview of GFT-RTP construction, applications, performance claims and use limitations.",
      url: "https://www.shenglinz.com/products/pipes-fittings-and-streetware/gft-rtp-pipe/",
      format: "Technical overview",
    },
    {
      title: "Shengli 官方联系方式",
      titleEn: "Shengli Official Contact",
      description: "官网发布的新西兰地址、邮箱、电话和传真。",
      descriptionEn:
        "Official New Zealand address, email, telephone and fax details.",
      url: "https://www.shenglinz.com/contact-us/",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/shengli-limited-logo.png",
  contactEmail: "info@shengli.asia",
  contactPhone: "+64 6 835 1401",
  address: "15 Hunter Drive, Awatoto, Napier 4110, New Zealand",
  website: "https://www.shenglinz.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 12,
  viewCount: 0,
  capabilities: [
    "FRP pipe",
    "GRP pipe",
    "FRP and GRP fittings",
    "GFT-RTP composite pipe",
    "custom composite pipe sourcing",
    "production monitoring and export coordination",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
