import type { SupplierListing } from "@/lib/db/schema";

export const WANHUA_SUPPLIER_ID = "sup-wanhua";
export const WANHUA_PRODUCT_ID = "resin-gelcoat";

// Curated from Wanhua Chemical's official English-language company, business
// unit and technical-solution pages. This committed fallback keeps the public
// profile available during database outages and makes the published record
// reproducible from Git via scripts/upsert-wanhua-supplier-profile.ts.
export const WANHUA_SUPPLIER_PROFILE: SupplierListing = {
  id: WANHUA_SUPPLIER_ID,
  name: "万华化学集团股份有限公司",
  nameEn: "Wanhua Chemical Group Co., Ltd.",
  slug: "wanhua-chemical",
  location: "山东烟台",
  locationEn: "Yantai, Shandong, China",
  province: "山东",
  category: "resin",
  products: [
    "聚氨酯复合材料树脂体系",
    "玻纤增强聚氨酯拉挤体系",
    "HP-RTM 聚氨酯体系",
    "MDI、TDI 与聚醚多元醇",
    "WANAMINE 特种胺及环氧固化剂原料",
  ],
  productsEn: [
    "Polyurethane composite resin systems",
    "Glass-fiber-reinforced polyurethane pultrusion systems",
    "HP-RTM polyurethane systems",
    "MDI, TDI and polyether polyols",
    "WANAMINE specialty amines and epoxy-curing-agent raw materials",
  ],
  processList: [
    "聚氨酯复合材料配方与应用开发",
    "HP-RTM 与拉挤工艺材料方案",
    "环氧固化剂原料开发",
    "复合材料应用技术支持",
    "全球生产与销售网络",
  ],
  processListEn: [
    "Polyurethane composite formulation and application development",
    "Material systems for HP-RTM and pultrusion",
    "Epoxy-curing-agent raw-material development",
    "Composite application technical support",
    "Global production and sales network",
  ],
  established: 1978,
  verified: false,
  description:
    "万华化学是一家总部位于山东烟台的全球化新材料与化工企业。其官网将业务划分为聚氨酯、石化、精细化学品和新兴材料，并披露在中国及欧洲设有 14 个主要生产基地。公司在复合材料领域公开提供发泡与非发泡聚氨酯树脂体系、玻纤增强聚氨酯拉挤及 HP-RTM 方案，以及用于 FRP、高压管、预浸料和层压板的特种胺与环氧固化剂原料。现公司实体成立于 1998 年，业务历史可追溯至 1978 年的合成革与 MDI 项目。",
  descriptionEn:
    "Wanhua Chemical is a global advanced-materials and chemical producer headquartered in Yantai, Shandong. Its official site organizes the business across polyurethanes, petrochemicals, performance chemicals and emerging materials, with 14 principal production complexes in China and Europe. For composites, Wanhua publishes foaming and non-foaming polyurethane resin systems, glass-fiber-reinforced PU pultrusion and HP-RTM solutions, plus specialty amines and epoxy-curing-agent raw materials for FRP, high-pressure pipe, prepreg and laminate applications. The present company was established in 1998, with operating roots in a synthetic-leather and MDI project begun in 1978.",
  certifications: [
    "ISCC PLUS（MDI、TDI 与生物基聚醚；企业 2024 年公开信息）",
  ],
  certificationsEn: [
    "ISCC PLUS (MDI, TDI and bio-based polyethers; company-published in 2024)",
  ],
  productsServicesSummary:
    "面向复合材料加工商提供聚氨酯及环氧相关原料与应用方案。官网公开的聚氨酯复材体系覆盖汽车内外饰、门窗型材、电杆、板材型材、汽车结构件、动力电池壳体与防护板等应用，并支持发泡/非发泡体系、HP-RTM 和玻纤增强 PU 拉挤。特种胺产品包括 WANAMINE MDA、H12MDA、IPDA、8100/8110 等，可用于环氧固化剂及风电、FRP 高压管、预浸料、层压板和防腐体系。买方应按具体牌号向万华确认 TDS/SDS、工艺窗口、适用认证、最小订量和目的市场供货安排。",
  productsServicesSummaryEn:
    "Wanhua supplies polyurethane- and epoxy-related raw materials and application solutions for composite processors. Company-published PU composite systems address automotive interior and exterior parts, door and window profiles, utility poles, plate profiles, structural automotive parts, battery housings and protective panels through foaming and non-foaming formulations, HP-RTM and glass-fiber-reinforced PU pultrusion. Specialty amines including WANAMINE MDA, H12MDA, IPDA and 8100/8110 grades are positioned for epoxy curing agents and applications such as wind energy, high-pressure FRP pipe, prepreg, laminates and corrosion-resistant systems. Buyers should confirm the grade-specific TDS/SDS, processing window, applicable certifications, MOQ and destination-market supply arrangement directly with Wanhua.",
  ecatalogs: [
    {
      title: "万华化学公司概况",
      titleEn: "Wanhua Chemical Company Profile",
      description: "公司业务、全球生产基地、研发中心、发展历史及联系方式。",
      descriptionEn:
        "Official overview of the business portfolio, production footprint, R&D network, company history and locations.",
      url: "https://en.whchem.com/column/79/",
      format: "Company profile",
    },
    {
      title: "聚氨酯业务单元",
      titleEn: "Polyurethane Business Unit",
      description: "异氰酸酯、聚醚多元醇、PU 体系与聚氨酯复合材料应用。",
      descriptionEn:
        "Official business-unit overview covering isocyanates, polyether polyols, PU systems and polyurethane composite applications.",
      url: "https://en.whchem.com/column/131/",
      format: "Business unit",
    },
    {
      title: "聚氨酯与环氧复合材料方案",
      titleEn: "Polyurethane and Epoxy Composite Solutions",
      description: "发泡/非发泡 PU 复材、FRP 用特种胺、预浸料、层压板及高压管应用。",
      descriptionEn:
        "Official technical article on foaming and non-foaming PU composites, specialty amines for FRP, prepreg, laminates and high-pressure pipe.",
      url: "https://en.whchem.com/cmscontent/538.html",
      format: "Technical article",
    },
    {
      title: "动力电池聚氨酯复合材料方案",
      titleEn: "Polyurethane Composite Solutions for Battery Systems",
      description: "HP-RTM 电池壳、PU 夹芯板及玻纤增强 PU 拉挤材料。",
      descriptionEn:
        "Official application brief covering HP-RTM battery cases, PU sandwich panels and glass-fiber-reinforced PU pultrusion.",
      url: "https://en.whchem.com/cmscontent/734.html",
      format: "Application brief",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-01T00:00:00.000Z"),
  logo: "/api/supplier-assets/wanhua-logo",
  contactEmail: "support@whchem.com",
  contactPhone: "400-960-0309",
  address: "No. 3 Sanya Road, YEDA, Yantai, Shandong Province, China",
  website: "https://en.whchem.com/",
  enterpriseId: null,
  scaleTier: "XL",
  brandPriority: 30,
  viewCount: 0,
  capabilities: [
    "resin",
    "polyurethane",
    "epoxy",
    "pultrusion",
    "HP-RTM",
    "composite systems",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-04-17T17:42:13.014Z"),
  updatedAt: new Date("2026-08-01T00:00:00.000Z"),
};

export const WANHUA_PRODUCT_RELATION = {
  supplierListingId: WANHUA_SUPPLIER_ID,
  productId: WANHUA_PRODUCT_ID,
  relationshipType: "supplier",
  supplierProductName:
    "Polyurethane composite systems and epoxy-curing-agent raw materials",
  isPrimary: true,
  isVerified: false,
  customAvailable: false,
  moq: null,
  moqUnit: null,
  leadTimeDays: null,
  specificationOverrides: {},
  evidence: {
    sourceType: "official_website",
    sourceUrl: "https://en.whchem.com/cmscontent/538.html",
    reviewedAt: "2026-08-01",
    note: "Relationship based on Wanhua Chemical's official composite-solutions publication; individual grade claims require buyer verification.",
  },
};
