import type { SupplierListing } from "@/lib/db/schema";

export const TAISHAN_SUPPLIER_ID = "sup-taishan";
export const TAISHAN_SUPPLIER_SLUG = "taishan-fiberglass";

// Curated from Taishan Fiberglass' official English website. GetFRP does not
// treat company-published claims as independent verification.
export const TAISHAN_SUPPLIER_PROFILE: SupplierListing = {
  id: TAISHAN_SUPPLIER_ID,
  name: "泰山玻璃纤维有限公司",
  nameEn: "Taishan Fiberglass Co., Ltd.",
  slug: TAISHAN_SUPPLIER_SLUG,
  location: "山东泰安",
  locationEn: "Tai'an, Shandong, China",
  province: "山东",
  category: "fiber",
  products: [
    "无碱玻璃纤维无捻粗纱",
    "短切原丝毡与织物",
    "电子级玻璃纤维纱",
    "耐腐蚀与高性能玻璃纤维",
  ],
  productsEn: [
    "E-glass fiberglass roving and yarn",
    "Chopped strand mats and fiberglass fabrics",
    "Electronic and industrial fiberglass yarns",
    "High-performance fiberglass for pipes, tanks, wind energy and pultrusion",
  ],
  processList: ["池窑拉丝", "玻纤纱线与织物加工", "短切与毡类加工", "复合材料应用开发"],
  processListEn: [
    "Tank-furnace glass fiber drawing",
    "Yarn and fabric conversion",
    "Chopped strand and mat production",
    "Fiberglass reinforcement application development",
  ],
  established: 1997,
  verified: false,
  description:
    "泰山玻璃纤维有限公司（CTG）成立于1997年，专注玻璃纤维及其制品的制造与应用。公司官网公开信息显示，其产品覆盖建筑、风电、管道与贮罐、拉挤、电子及工业等应用场景。",
  descriptionEn:
    "Taishan Fiberglass (CTG) was established in 1997 and focuses on fiberglass and fiberglass-reinforced products. Its official English website describes a diversified product portfolio for pipes and tanks, wind energy, open molding, pultrusion, panels, molding, mats and fabrics, thermoplastics, and electronic and industrial yarns.",
  certifications: ["ISO 9001", "ISO 14001", "ISO 45001", "FDA", "DNV", "Lloyd's Register"],
  certificationsEn: [
    "ISO 9001 (company-published information)",
    "ISO 14001 (company-published information)",
    "ISO 45001 (company-published information)",
    "FDA product approvals (where applicable)",
    "DNV and Lloyd's Register product approvals (where applicable)",
  ],
  productsServicesSummary:
    "官网产品服务覆盖管道与贮罐、风电、开模、拉挤、连续板材、模压、毡布、热塑性塑料以及电子和工业纱线。具体牌号、浸润剂、线密度、包装、TDS/SDS、认证范围和目的市场供货安排应在询盘阶段确认。",
  productsServicesSummaryEn:
    "The official product directory covers solutions for pipes and tanks, wind energy, open molding, pultrusion, continuous panel molding, compression molding, mats and fabrics, thermoplastics, and electronic and industrial yarns. Buyers should confirm the exact grade, sizing, tex, package, TDS/SDS, certification scope and destination-market availability before approval.",
  ecatalogs: [
    {
      title: "泰山玻纤产品服务",
      titleEn: "Taishan Fiberglass Product & Application Directory",
      description: "泰山玻纤官网英文产品和应用入口。",
      descriptionEn: "Official English directory covering CTG products and fiberglass application solutions.",
      url: "https://www.ctgf.com/English/",
      format: "Official website",
    },
    {
      title: "管道与贮罐用玻璃纤维",
      titleEn: "Fiberglass Solutions for Pipes & Tanks",
      description: "官网发布的管道与贮罐成型工艺用玻纤资料。",
      descriptionEn: "Official technical catalog for fiberglass used in pipe and tank molding processes.",
      url: "https://www.ctgf.com/upload/2015/1/%E7%AE%A1%E9%81%93%E4%B8%AD.pdf",
      format: "PDF",
    },
    {
      title: "电子细纱产品资料",
      titleEn: "Electronic Fiberglass Yarn Catalog",
      description: "官网发布的电子级玻纤纱产品资料。",
      descriptionEn: "Official technical catalog for electronic fiberglass yarns.",
      url: "https://www.ctgf.com/upload/2015/1/%E7%94%B5%E5%AD%90%E7%BB%86%E7%BA%B1%E4%B8%AD.pdf",
      format: "PDF",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-02T00:00:00.000Z"),
  logo: "/supplier-assets/taishan-logo.png",
  contactEmail: "ctgf@ctgf.com",
  contactPhone: "+86-538-8619027 / +86-538-6622006",
  address: "Tai'an Economic Development Zone, Shandong, China",
  website: "https://www.ctgf.com/English/",
  enterpriseId: null,
  scaleTier: "XL",
  brandPriority: 32,
  viewCount: 0,
  capabilities: [
    "glass fiber",
    "roving",
    "yarn",
    "electronic fiberglass yarn",
    "chopped strand mat",
    "woven fabric",
    "pultrusion reinforcement",
    "pipe and tank reinforcement",
  ],
  standardsSupported: ["ISO 9001", "ISO 14001", "ISO 45001", "FDA", "DNV", "Lloyd's Register"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-02T00:00:00.000Z"),
  updatedAt: new Date("2026-08-02T00:00:00.000Z"),
};

export const TAISHAN_PRODUCT_RELATION = {
  supplierListingId: TAISHAN_SUPPLIER_ID,
  productId: "fiber-glass",
  relationshipType: "supplier",
  supplierProductName: "Fiberglass roving, yarn, mats and fabrics",
  isPrimary: true,
  isVerified: false,
  customAvailable: false,
  moq: null,
  moqUnit: null,
  leadTimeDays: null,
  specificationOverrides: {},
  evidence: {
    sourceType: "official_website",
    sourceUrl: "https://www.ctgf.com/English/",
    reviewedAt: "2026-08-02",
    note: "Relationship based on Taishan Fiberglass' official English product directory; exact grade and commercial availability require buyer confirmation.",
  },
};
