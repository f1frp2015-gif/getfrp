import type { SupplierListing } from "@/lib/db/schema";

export const SINAUVA_SUPPLIER_ID = "sup-sinauva-composites";
export const SINAUVA_SUPPLIER_SLUG = "sinauva-composites";

// Curated from Sinauva Composites' current official English website. The
// company states that it manufactures and exports selected fiberglass
// products while also using associated factories to broaden its catalog.
// Product, export and certification statements are company-published and
// remain separate from GetFRP verification. Official logo source:
// https://www.sinauva-composites.com/uploads/202236326/logo202206141652094198879.png
export const SINAUVA_SUPPLIER_PROFILE: SupplierListing = {
  id: SINAUVA_SUPPLIER_ID,
  name: "Sinauva Composites Co., Ltd.",
  nameEn: "Sinauva Composites Co., Ltd.",
  slug: SINAUVA_SUPPLIER_SLUG,
  location: "北京丰台",
  locationEn: "Fengtai, Beijing, China",
  province: "北京",
  category: "manufacturer",
  products: [
    "玻璃钢夹芯板、FRP 面板及结构泡沫与蜂窝芯材",
    "玻璃纤维无捻粗纱、短切毡、连续毡、RTM 毡、针刺毡及缝编毡",
    "玻璃纤维单轴向、双轴向、三轴向、四轴向及多轴向织物",
    "碳纤维、芳纶、石英纤维及混杂增强织物",
    "玻璃纤维与碳纤维拉挤型材及玻璃钢格栅",
    "玻璃钢管件、复合材料部件、网格布及玻璃钢制品",
  ],
  productsEn: [
    "FRP sandwich panels, fiberglass skins, and structural foam and honeycomb cores",
    "Fiberglass roving, chopped strand, continuous filament, RTM, needle and stitched mats",
    "Unidirectional, biaxial, triaxial, quadraxial and multiaxial fiberglass fabrics",
    "Carbon, aramid, quartz and hybrid reinforcement fabrics",
    "Pultruded fiberglass and carbon-fiber profiles and fiberglass grating",
    "FRP pipe fittings, composite parts, fiberglass mesh and finished products",
  ],
  processList: [
    "玻纤复合材料产品研发、制造与出口",
    "玻璃钢夹芯板、面板及芯材供应",
    "玻璃纤维增强材料、织物和成品供应",
    "产品规格、包装与品牌定制",
    "合作工厂产品整合与采购支持",
    "质量检验、出口物流、清关与售后支持",
  ],
  processListEn: [
    "Fiberglass-composite product development, manufacturing and export",
    "FRP sandwich-panel, skin and core-material supply",
    "Fiberglass reinforcement, fabric and finished-product supply",
    "Product-specification, packaging and branding customization",
    "Associated-factory product sourcing and supply coordination",
    "Quality inspection, export logistics, customs and after-sales support",
  ],
  established: null,
  verified: false,
  description:
    "Sinauva Composites Co., Ltd. 官网显示其位于北京丰台，专注玻纤复合材料面板、结构泡沫芯材、玻纤增强材料和玻璃钢制品的研发、制造与出口。官网产品目录覆盖夹芯板、FRP 面板、粗纱与毡类、多轴向及高级织物、拉挤型材、格栅、管件和定制复合材料部件。公司同时说明，为扩展品类并满足不同采购需求，部分相关玻纤产品由合作工厂供应。",
  descriptionEn:
    "Sinauva Composites Co., Ltd. presents itself as a Beijing-based developer, manufacturer and exporter of fiberglass-composite panels, structural foam cores, reinforcement materials and finished FRP products. Its official catalog spans sandwich panels and FRP skins; rovings, mats and multiaxial or advanced fabrics; pultruded profiles; grating; pipe fittings; and custom composite parts. The company also states that it works with associated factories to broaden the range of related fiberglass products available to buyers.",
  certifications: [
    "ISO 9001（官网称其工厂已认证；证书标准版本、持证主体、产品范围与有效期需确认）",
  ],
  certificationsEn: [
    "ISO 9001 (the company states that its factory is certified; confirm the standard version, certificate holder, scope and validity)",
  ],
  productsServicesSummary:
    "Sinauva 官网将产品分为玻璃钢面板、玻纤增强材料、玻纤织物和 FRP 复合材料制品四大类。公开目录包括蜂窝、XPS、热塑性、聚木和 PU 泡沫夹芯板，玻纤表皮与芯材，各类粗纱、毡、单向及多轴向织物，以及碳纤维/芳纶织物、拉挤型材、格栅、管件、网格布和复合材料部件。公司称其产品出口美国、欧洲、澳大利亚和东南亚，并提供定制、质检、包装、运输及清关支持。由于官网同时披露合作工厂供货模式，采购方应按具体 SKU 核实签约主体、实际生产地点、ISO 9001 证书持有人、TDS/测试方法、纤维与树脂体系、尺寸与公差、阻燃和力学数据、包装、MOQ、交期及批次追溯。",
  productsServicesSummaryEn:
    "Sinauva organizes its public catalog into fiberglass panels, fiberglass reinforcements, fiberglass fabrics and finished FRP composite products. The published range includes honeycomb-, XPS-, thermoplastic-, polywood- and PU-foam sandwich panels; fiberglass skins and cores; rovings and multiple mat constructions; unidirectional and multiaxial fabrics; carbon and aramid fabrics; pultruded profiles; grating; pipe fittings; mesh and composite parts. The company says it exports to the Americas, Europe, Australia and Southeast Asia and offers customization, inspection, packaging, shipping and customs support. Because the website also discloses an associated-factory supply model, buyers should confirm the contracting entity and actual manufacturing site for each SKU, the ISO 9001 certificate holder, TDS and test methods, fiber and resin system, dimensions and tolerances, fire and mechanical data, packaging, MOQ, lead time and batch traceability before approval.",
  ecatalogs: [
    {
      title: "Sinauva 官方英文网站",
      titleEn: "Sinauva Composites Official Website",
      description: "公司、重点产品、应用、出口与公开联系方式总览。",
      descriptionEn:
        "Official overview of the company, core products, applications, export activity and public contact details.",
      url: "https://www.sinauva-composites.com/",
      format: "Official website",
    },
    {
      title: "Sinauva 公司介绍",
      titleEn: "Sinauva Company Profile",
      description: "官网发布的业务范围、工厂认证声明、合作工厂模式、产品和出口市场介绍。",
      descriptionEn:
        "Company-published overview of its business scope, factory-certification statement, associated-factory model, products and export markets.",
      url: "https://www.sinauva-composites.com/about-us",
      format: "Company profile",
    },
    {
      title: "Sinauva 产品目录",
      titleEn: "Sinauva Product Directory",
      description: "面板、增强材料、织物、型材、格栅、管件与其他 FRP 制品目录。",
      descriptionEn:
        "Official directory for panels, reinforcements, fabrics, profiles, grating, pipe fittings and other FRP products.",
      url: "https://www.sinauva-composites.com/products",
      format: "Product directory",
    },
    {
      title: "玻璃钢面板目录",
      titleEn: "Fiberglass Panel Directory",
      description: "夹芯板、面板、蜂窝与结构泡沫芯材产品入口。",
      descriptionEn:
        "Official category directory for sandwich panels, skins, honeycomb and structural foam cores.",
      url: "https://www.sinauva-composites.com/fiberglass-panel/",
      format: "Product directory",
    },
    {
      title: "玻纤增强材料目录",
      titleEn: "Fiberglass Reinforcements Directory",
      description: "短切毡、连续毡、RTM 毡、针刺毡、粗纱与其他增强材料入口。",
      descriptionEn:
        "Official category directory for chopped-strand, continuous-filament, RTM and needle mats, rovings and related reinforcements.",
      url: "https://www.sinauva-composites.com/fiberglass-reinorcements/",
      format: "Product directory",
    },
    {
      title: "玻纤与高级织物目录",
      titleEn: "Fiberglass & Advanced Fabric Directory",
      description: "单轴向及多轴向玻纤织物和碳纤维、芳纶与混杂织物入口。",
      descriptionEn:
        "Official category directory for unidirectional and multiaxial fiberglass fabrics plus carbon, aramid and hybrid fabrics.",
      url: "https://www.sinauva-composites.com/fiberglass-fabric/",
      format: "Product directory",
    },
    {
      title: "FRP 复合材料制品目录",
      titleEn: "FRP Composite Products Directory",
      description: "拉挤型材、格栅、管件、网格布、碳纤维制品与定制部件入口。",
      descriptionEn:
        "Official category directory for pultruded profiles, grating, pipe fittings, mesh, carbon-fiber products and custom parts.",
      url: "https://www.sinauva-composites.com/frp-composite-products/",
      format: "Product directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/sinauva-composites-logo.webp",
  contactEmail: "sales@sinauvafrp.com",
  contactPhone: "+86 10 6766 9667",
  address:
    "Building 2, No. 1 Courtyard, Nanfangzhuang, Fengtai District, Beijing, China",
  website: "https://www.sinauva-composites.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 16,
  viewCount: 0,
  capabilities: [
    "FRP sandwich panels",
    "fiberglass skins and sheets",
    "structural foam and honeycomb cores",
    "fiberglass roving and mats",
    "unidirectional and multiaxial fabrics",
    "carbon aramid and hybrid fabrics",
    "pultruded fiberglass and carbon profiles",
    "fiberglass grating",
    "FRP pipe fittings and composite parts",
    "customization and export logistics",
  ],
  standardsSupported: ["ISO 9001"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
