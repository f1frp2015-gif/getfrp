import type { SupplierListing } from "@/lib/db/schema";

export const TECHSTORM_SUPPLIER_ID = "sup-techstorm";
export const TECHSTORM_SUPPLIER_SLUG = "techstorm-advanced-material";
export const TECHSTORM_PRODUCT_ID = "resin-gelcoat";

// Curated from Techstorm's official English company, composites, wind-energy
// and contact pages, with the legal establishment year cross-checked against
// public exchange filings. The locally stored wordmark is the English
// TECHSTORM header asset served by techstorm.com; individual product and
// certificate claims remain company-published and unverified by GetFRP.
export const TECHSTORM_SUPPLIER_PROFILE: SupplierListing = {
  id: TECHSTORM_SUPPLIER_ID,
  name: "道生天合材料科技（上海）股份有限公司",
  nameEn: "Techstorm Advanced Material Corporation Limited",
  slug: TECHSTORM_SUPPLIER_SLUG,
  location: "上海",
  locationEn: "Shanghai, China",
  province: "上海",
  category: "resin",
  products: [
    "气瓶缠绕环氧树脂体系",
    "电缆芯棒及风电大梁拉挤树脂体系",
    "航空座椅用阻燃树脂及碳纤维预浸料",
    "新能源汽车电池上盖 HP-RTM 与预浸料树脂",
    "风电叶片灌注、手糊、结构胶及模具树脂体系",
  ],
  productsEn: [
    "Epoxy resin systems for filament-wound cylinders",
    "Pultrusion resin systems for cable core rods and wind-blade spar caps",
    "Flame-retardant resin and carbon-fiber prepreg for aircraft seating",
    "HP-RTM and prepreg resin systems for new-energy-vehicle battery covers",
    "Wind-blade infusion, hand lay-up, adhesive and tooling resin systems",
  ],
  processList: [
    "纤维缠绕",
    "拉挤成型",
    "真空灌注与手糊成型",
    "HP-RTM 与预浸料",
    "热固性树脂体系定制",
  ],
  processListEn: [
    "Filament winding",
    "Pultrusion",
    "Vacuum infusion and hand lay-up",
    "HP-RTM and prepreg processing",
    "Custom thermoset formulation",
  ],
  established: 2015,
  verified: false,
  description:
    "道生天合材料科技（上海）股份有限公司是一家总部位于上海的高性能热固性材料研发与制造企业，官网标示股票代码为 601026.SH。其官网业务覆盖风能、通用复合材料、新能源汽车及工业胶、电气绝缘和光伏。通用复材产品包括气瓶缠绕树脂、电缆芯棒及风电叶片玻纤/碳纤拉挤大梁树脂、航空座椅用阻燃树脂与碳纤维预浸料，以及新能源汽车电池上盖用 HP-RTM 和预浸料体系。",
  descriptionEn:
    "Techstorm Advanced Material Corporation Limited is a Shanghai-headquartered developer and manufacturer of high-performance thermoset materials and identifies itself on its official site by Shanghai Stock Exchange code 601026.SH. Its published portfolio spans wind energy, general composites, new-energy vehicles and industrial adhesives, electrical insulation, and photovoltaics. For general composites, Techstorm lists resin systems for filament-wound cylinders, cable core rods and glass- or carbon-fiber wind-blade spar-cap pultrusion, flame-retardant aircraft seating, carbon-fiber prepreg, and HP-RTM or prepreg battery covers.",
  certifications: [
    "ISO 9001（官网工厂信息；采购方应核验现行证书）",
    "ISO 14001（官网工厂信息；采购方应核验现行证书）",
  ],
  certificationsEn: [
    "ISO 9001 (company-published factory information; current certificate to be confirmed)",
    "ISO 14001 (company-published factory information; current certificate to be confirmed)",
  ],
  productsServicesSummary:
    "道生天合官网将复材用特种环氧体系定位于游艇、轨道交通、汽车、航空航天、压力气瓶、电缆芯棒和风电叶片等轻量化应用，并公开支持纤维缠绕、拉挤、手糊、真空灌注、HP-RTM 和预浸料等工艺。风电产品页还列出灌注树脂、结构胶、手糊树脂、拉挤树脂和模具树脂体系。公开页面主要为应用级信息，采购方应针对具体牌号索取并核验 TDS/SDS、混合比例、黏度、固化制度与 Tg、力学性能、阻燃标准、储存期、包装、最小订量、交期及现行工厂证书。",
  productsServicesSummaryEn:
    "Techstorm positions its specialty epoxy systems for lightweight composite applications including yachts, rail vehicles, cars, aerospace, pressure cylinders, cable core rods and wind blades. Company-published process coverage includes filament winding, pultrusion, hand lay-up, vacuum infusion, HP-RTM and prepreg manufacture; the wind-energy range also identifies infusion resin, structural adhesive, hand-lay-up resin, pultrusion resin and tooling systems. The public pages provide application-level rather than complete grade-level specifications. Buyers should request and validate the exact TDS/SDS, mix ratio, viscosity, cure schedule and Tg, mechanical properties, flame-retardancy standard, shelf life, packaging, MOQ, lead time and current plant certificates for the selected grade.",
  ecatalogs: [
    {
      title: "通用复合材料产品页",
      titleEn: "General Composites Product Page",
      description: "气瓶、电缆芯棒、风电拉挤大梁、航空座椅及电池上盖用树脂与预浸料。",
      descriptionEn:
        "Official overview of resin and prepreg systems for cylinders, cable core rods, wind-blade spar caps, aircraft seating and battery covers.",
      url: "https://www.techstorm.com/composite-eng",
      format: "Product page",
    },
    {
      title: "风能材料产品页",
      titleEn: "Wind Energy Materials Page",
      description: "灌注、结构胶、手糊、拉挤及模具树脂体系与公开牌号入口。",
      descriptionEn:
        "Official wind-energy portfolio covering infusion, adhesive, hand lay-up, pultrusion and tooling systems, including published grade families.",
      url: "https://www.techstorm.com/windenergy-eng",
      format: "Product directory",
    },
    {
      title: "道生天合公司介绍",
      titleEn: "Techstorm Company Introduction",
      description: "公司业务、上海研发实验室及制造基地概况。",
      descriptionEn:
        "Official overview of the company portfolio, Shanghai R&D laboratory and manufacturing facility.",
      url: "https://www.techstorm.com/introduce-eng",
      format: "Company profile",
    },
    {
      title: "道生天合联系方式与布局",
      titleEn: "Techstorm Contact and Operating Footprint",
      description: "上海总部及其他公开运营地点与联系电话。",
      descriptionEn:
        "Official contact page for the Shanghai headquarters and other published operating locations.",
      url: "https://www.techstorm.com/contactus-eng",
      format: "Contact directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/techstorm-logo.png",
  contactEmail: null,
  contactPhone: "+86 21 5754 0229",
  address:
    "No. 308 Pingda Road, Lin-Gang Special Area of China (Shanghai) Pilot Free Trade Zone, Shanghai, China",
  website: "https://www.techstorm.com/en/index.html",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 32,
  viewCount: 0,
  capabilities: [
    "epoxy resin systems",
    "filament winding resin",
    "pultrusion resin",
    "vacuum infusion resin",
    "structural adhesive",
    "HP-RTM resin",
    "prepreg resin",
    "flame-retardant resin",
    "tooling resin",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};

export const TECHSTORM_PRODUCT_RELATION = {
  supplierListingId: TECHSTORM_SUPPLIER_ID,
  productId: TECHSTORM_PRODUCT_ID,
  relationshipType: "supplier",
  supplierProductName:
    "Specialty epoxy resin systems for composite manufacturing",
  isPrimary: true,
  isVerified: false,
  customAvailable: true,
  moq: null,
  moqUnit: null,
  leadTimeDays: null,
  specificationOverrides: {},
  evidence: {
    sourceType: "official_website",
    sourceUrl: "https://www.techstorm.com/composite-eng",
    reviewedAt: "2026-08-05",
    note: "Relationship based on Techstorm's official general-composites page; exact grade availability and specifications require buyer confirmation.",
  },
};
