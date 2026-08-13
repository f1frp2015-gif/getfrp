import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_SHANGKE_SUPPLIER_ID =
  "sup-changzhou-shangke-new-material";
export const CHANGZHOU_SHANGKE_SUPPLIER_SLUG =
  "changzhou-sunchem-new-material";

// Curated from the exact mainland-China company's current official website,
// its company, product, quality and contact pages, and the current China
// Composites Expo exhibitor record. The legal Chinese name, SUNCHEM wordmark,
// domain email, telephone and polyimide product range identify one supplier.
// Product performance, patent and certification statements remain company- or
// organizer-published and have not been independently verified by GetFRP.
// Official logo downloaded 2026-08-13 from the current website header:
// http://www.sunchempi.com/static/upload/image/20250722/1753177604717408.png
export const CHANGZHOU_SHANGKE_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_SHANGKE_SUPPLIER_ID,
  name: "常州市尚科新材料有限公司",
  nameEn: "Changzhou Sunchem New Material Co., Ltd.",
  slug: CHANGZHOU_SHANGKE_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "resin",
  products: [
    "SK 系列聚酰亚胺模塑粉",
    "SK 系列聚酰亚胺超细粉",
    "SK 系列可溶聚酰亚胺超细粉",
    "SK 双马来酰亚胺树脂",
    "SK 系列高耐温环氧树脂",
    "SK 系列聚酰胺酸溶液",
    "聚酰亚胺薄膜、涂层与胶黏剂材料",
    "聚酰亚胺型材、零件及复合材料制品",
  ],
  productsEn: [
    "SK-series polyimide molding powders",
    "SK-series polyimide ultrafine powders",
    "SK-series soluble polyimide ultrafine powders",
    "SK bismaleimide resin",
    "SK-series high-temperature epoxy resin",
    "SK-series polyamic-acid solutions",
    "Polyimide materials for films, coatings and adhesives",
    "Polyimide profiles, parts and composite products",
  ],
  processList: [
    "高性能聚合物与树脂研发",
    "聚酰亚胺聚合、粉体与溶液制备",
    "模塑粉、超细粉与颗粒料生产",
    "高耐温环氧与双马来酰亚胺树脂配制",
    "聚酰亚胺型材和零件加工",
    "材料性能检测与应用开发",
  ],
  processListEn: [
    "High-performance polymer and resin R&D",
    "Polyimide polymerization and powder or solution preparation",
    "Molding-powder, ultrafine-powder and pellet production",
    "High-temperature epoxy and bismaleimide resin formulation",
    "Polyimide profile and component processing",
    "Materials testing and application development",
  ],
  established: 2009,
  verified: false,
  description:
    "常州市尚科新材料有限公司（SUNCHEM）是位于江苏常州新北区的高性能聚合物材料供应商。公司官网与中国国际复材展均将企业创建时间列为 2009 年，并显示其持续研发和生产聚酰亚胺材料、高性能树脂、模塑粉、塑料及制品。公开产品覆盖聚酰亚胺模塑粉、超细粉和可溶超细粉，双马来酰亚胺树脂、高耐温环氧树脂、聚酰胺酸溶液，以及薄膜、涂层、胶黏剂、型材、零件和复合材料等形态；企业发布的应用领域包括航空航天、舰船兵器、电子信息和集成电路。展会英文名与官网英文名均使用 Changzhou Sunchem New Material Co., Ltd.，中文主体、电话、域名邮箱及产品体系相符，本页已去重为一个供应商。上述产品性能、应用及技术能力均为企业或展会主办方公开陈述，采购前应按具体牌号、批次与最终用途验证。",
  descriptionEn:
    "Changzhou Sunchem New Material Co., Ltd. (SUNCHEM) is a high-performance polymer-material supplier in Xinbei District, Changzhou, Jiangsu. Both the official website and China Composites Expo date the business to 2009 and describe R&D and production of polyimide materials, high-performance resins, molding powders, plastics and finished products. The published range covers polyimide molding powders, ultrafine and soluble ultrafine powders, bismaleimide resin, high-temperature epoxy resin, polyamic-acid solutions, and materials or products for films, coatings, adhesives, profiles, parts and composites. Company-published application fields include aerospace, naval and defence equipment, electronic information and integrated circuits. The expo and official website both use Changzhou Sunchem New Material Co., Ltd.; the exact Chinese legal name, telephone, domain email and product scope align, so this page consolidates them into one supplier identity. Product-performance, application and technical-capability statements are company- or organizer-published and should be validated for the quoted grade, batch and end use.",
  certifications: [
    "官网公司简介称企业已通过质量管理、环境管理及职业健康安全管理体系认证，但未在该页列出证书编号、认证机构、获证主体、标准版本、范围或有效期；采购方应取得完整现行证书并向认证机构核验",
  ],
  certificationsEn: [
    "The official company profile says quality, environmental and occupational-health-and-safety management systems have been certified, but it does not state certificate numbers, certification bodies, certified entity, standard editions, scopes or validity. Buyers should obtain the complete current certificates and validate them with the certification bodies",
  ],
  productsServicesSummary:
    "尚科官网产品表列出 15 个 SK 牌号。聚酰亚胺模塑粉包括 SK-010、SK-0110、SK-0120 和 SK-0130；企业给出的用途涉及发动机零件、轴承轴瓦、垫片、耐磨衬条、导向环、绝缘件、密封圈和活塞环。SK-0131/0132 聚酰亚胺超细粉及 SK-0170/0180/0190 可溶聚酰亚胺超细粉面向耐高温环氧或双马来酰亚胺基碳纤维复合材料层间增韧，部分可溶牌号还列出气体分离膜用途。SK-0310 是可溶双马来酰亚胺树脂，SK-0430 是面向拉挤管、棒和复材制品的高耐温环氧树脂；SK-0910 至 SK-0940 聚酰胺酸溶液覆盖薄膜、纤维、涂层、漆包线、胶黏剂和复材基体树脂。官网质量页展示原子吸收分光光度仪、热变形/维卡试验机、摩擦磨损试验机、高低温力学试验仪、红外光谱仪、冲击试验机和熔融指数仪，但设备图片不等同于经认可实验室能力。粉体或树脂 RFQ 应明确化学结构与牌号、形态、粒径及分布、纯度、挥发物、水分、灰分、玻璃化转变或热变形温度、熔融/溶解特性、溶剂与固含、黏度、凝胶时间、储存条件、保质期、包装、批次 CoA 和变更控制。用于碳纤维复材增韧、拉挤、薄膜或电子材料时，还应定义相容树脂和纤维、添加量、混合/分散工艺、固化周期、层间韧性、耐热、介电、阻燃、离子杂质、释气和目标法规；企业列出的温度或用途不得直接外推到客户成品。样品与量产批准应覆盖最新 TDS/SDS、原始测试方法和曲线、限度样、批次追溯、第三方验证、MOQ、交期、产能分配、出口包装及知识产权/受控用途合规。官网联系页使用“红楼路”的概括地址，而公开工商资料列出奔牛运南西路 228 号；验厂、合同、开票、付款和发运前应书面确认注册、研发、生产、仓储及收款地点。",
  productsServicesSummaryEn:
    "Sunchem's official product table lists 15 SK grades. Polyimide molding powders include SK-010, SK-0110, SK-0120 and SK-0130, with company-published uses covering engine parts, bearings and bushings, gaskets, wear strips, guide rings, insulation parts, seals and piston rings. SK-0131/0132 polyimide ultrafine powders and SK-0170/0180/0190 soluble ultrafine powders target interlaminar toughening of high-temperature epoxy- or bismaleimide-matrix carbon-fiber composites; selected soluble grades are also listed for gas-separation membranes. SK-0310 is a soluble bismaleimide resin, SK-0430 is a high-temperature epoxy for pultruded tubes, rods and composite products, and SK-0910 through SK-0940 polyamic-acid solutions cover films, fibres, coatings, enamelled wire, adhesives and composite-matrix applications. The official quality page shows atomic-absorption spectroscopy, heat-deflection/Vicat, friction and wear, high/low-temperature mechanical, infrared, impact and melt-flow instruments, but equipment photographs do not establish accredited laboratory capability. A powder or resin RFQ should define chemical structure and grade, physical form, particle size and distribution, purity, volatiles, moisture, ash, glass-transition or heat-deflection temperature, melt or solubility behaviour, solvent and solids, viscosity, gel time, storage, shelf life, packaging, batch CoA and change control. For carbon-composite toughening, pultrusion, film or electronic use, also specify compatible resin and fibre, addition level, mixing and dispersion, cure cycle, interlaminar toughness, thermal, dielectric and flame performance, ionic contamination, outgassing and destination regulation. Supplier-published temperature or application statements must not be extrapolated to the buyer's finished product. Sample and production approval should include current TDS/SDS, original test methods and curves, boundary samples, batch traceability, third-party validation, MOQ, lead time, capacity allocation, export packaging, and intellectual-property or controlled-use compliance. The official contact page gives the general location Honglou Road, while public registration data lists No. 228 Yunnan West Road, Benniu. Confirm registered, R&D, production, warehouse, invoicing, payment and dispatch sites in writing before an audit, contract, payment or shipment.",
  ecatalogs: [
    {
      title: "尚科官方公司简介",
      titleEn: "Official Sunchem Company Profile",
      description: "公司主体、创建时间、聚酰亚胺产品形态、应用和研发自述。",
      descriptionEn:
        "Official identity, founding date, polyimide product forms, applications and R&D statements.",
      url: "http://www.sunchempi.com/about_14/",
      format: "Company profile",
    },
    {
      title: "尚科官方产品与牌号表",
      titleEn: "Official Sunchem Product and Grade Table",
      description: "15 个 SK 牌号的名称、型号、特点及企业发布用途。",
      descriptionEn:
        "Official names, grade codes, characteristics and supplier-published uses for 15 SK grades.",
      url: "http://www.sunchempi.com/product/",
      format: "Product directory",
    },
    {
      title: "尚科官方品质保障页",
      titleEn: "Official Sunchem Quality Page",
      description: "企业展示的检测设备与品质管理信息；不代表实验室认可。",
      descriptionEn:
        "Company-published testing-equipment and quality information; not evidence of laboratory accreditation.",
      url: "http://www.sunchempi.com/quality/",
      format: "Quality evidence",
    },
    {
      title: "尚科官方联系页面",
      titleEn: "Official Sunchem Contact Page",
      description: "常州地址、电话、域名邮箱和网站主体信息。",
      descriptionEn:
        "Official Changzhou address, telephone, domain email and website identity.",
      url: "http://www.sunchempi.com/lxwm/",
      format: "Contact page",
    },
    {
      title: "中国国际复材展尚科展商页",
      titleEn: "China Composites Expo Sunchem Profile",
      description: "展会发布的中英文主体、6W27 展位、企业介绍和产品类别。",
      descriptionEn:
        "Organizer-published Chinese and English identity, booth 6W27, company overview and product category.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-814-3372810.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-shangke-logo.png",
  contactEmail: "info@sunchempi.com",
  contactPhone: "+86 519 8313 1261",
  address: "Honglou Road, Xinbei District, Changzhou, Jiangsu, China",
  website: "http://www.sunchempi.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 17,
  viewCount: 0,
  capabilities: [
    "polyimide molding powders",
    "polyimide ultrafine powders",
    "soluble polyimide powders",
    "polyamic-acid solutions",
    "bismaleimide resin",
    "high-temperature epoxy resin",
    "carbon-composite interlaminar toughening materials",
    "polyimide films and coatings",
    "high-temperature adhesives",
    "polyimide profiles and components",
    "high-performance polymer R&D",
    "materials testing and application development",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
