import type { SupplierListing } from "@/lib/db/schema";

export const F1_COMPOSITE_SUPPLIER_ID = "sup-yaoyi";
export const F1_COMPOSITE_SUPPLIER_SLUG = "f1-composite";
export const F1_COMPOSITE_ENTERPRISE_ID =
  "0ef991ac-03b8-46bd-a5e9-6346ea43939e";
export const F1_COMPOSITE_PINNED_BRAND_PRIORITY = 1000;

// This is GetFRP's verified, claimed and sponsored F1 Composites profile. The
// public content is kept in Git so the official identity, local logo and pinned
// trust state remain available if the supplier/enterprise database join is
// temporarily unavailable. The logo was copied on 2026-08-09 from the current
// official asset at https://www.f1composite.com/brand/f1-logo.png and matches
// the source asset in the canonical F1 Composites repository.
export const F1_COMPOSITE_SUPPLIER_PROFILE: SupplierListing = {
  id: F1_COMPOSITE_SUPPLIER_ID,
  name: "F1 Composites",
  nameEn: "F1 Composites",
  slug: F1_COMPOSITE_SUPPLIER_SLUG,
  location: "重庆",
  locationEn: "Chongqing, China",
  province: "重庆",
  category: "manufacturer",
  products: [
    "FRP 拉挤结构型材",
    "玻璃钢格栅与平台系统",
    "玻璃钢门窗型材及成品系统",
    "定制拉挤型材",
    "拉挤复合材料管材与板材",
  ],
  productsEn: [
    "Pultruded FRP structural profiles",
    "FRP gratings and platform systems",
    "Fiberglass window and door profiles and systems",
    "Custom pultrusions",
    "Pultruded composite pipe and panels",
  ],
  processList: [
    "图纸与选型评审",
    "定制模具与打样",
    "质量与出口文件",
    "国际项目交付",
  ],
  processListEn: [
    "Drawing and profile-selection review",
    "Custom tooling and prototyping",
    "Quality and export documentation",
    "International project delivery",
  ],
  established: 2024,
  verified: true,
  description:
    "F1 Composites 是风渡新材料面向国际市场的出口公司，为海外项目提供拉挤 FRP 型材、格栅、玻璃钢门窗系统和定制拉挤产品，并负责英文工程支持、质量文件、出口协调与国际交付。",
  descriptionEn:
    "According to its official website, F1 Composites is FengDu New Material's international export company. It supplies pultruded FRP profiles, gratings, fiberglass window and door systems, and custom pultrusions for overseas projects, with English-language engineering, quality documentation, export coordination and international delivery support.",
  certifications: [
    "PHI 组件证书 2491wi03（Fengdu Passive GFRP 90 系列，phB / 温和气候，有效期至 2026-12-31）",
    "三星级绿色建材文件英文非官方摘要（监管用途须核对中文原证）",
    "Intertek AS 2047 / AS/NZS 4420.1 送检样品报告 240821010SHF-001 与 240821010SHF-002",
  ],
  certificationsEn: [
    "PHI Component Certificate 2491wi03 — Fengdu Passive GFRP 90 Series, phB / cool-temperate, valid through 2026-12-31",
    "3-Star Green Building Material document — unofficial English summary; original Chinese certificate required",
    "Intertek 240821010SHF-001 and -002 — configuration-specific window and door sample reports",
  ],
  productsServicesSummary:
    "供应拉挤玻璃钢结构型材、格栅与平台系统、门窗型材及成品系统、定制拉挤件、管材与板材；配套提供图纸与选型评审、定制模具和打样、批次质量文件、出口包装、集货与国际物流支持。采购方应按具体产品和项目核对证书覆盖范围、检测样品、材料体系、尺寸公差、批次追溯和交付文件。",
  productsServicesSummaryEn:
    "Supplies pultruded fiberglass structural profiles, gratings and platform systems, fenestration profiles and finished window/door systems, custom pultrusions, pipe and panels. Services include drawing and profile-selection review, custom tooling and prototyping, batch quality records, export packing, consolidation and international logistics support. Buyers should confirm certificate scope, tested specimen, material system, dimensional tolerance, batch traceability and delivery documents for the quoted product and project.",
  ecatalogs: [
    {
      title: "F1 Composites FRP 型材设计手册（2026）",
      titleEn: "F1 Composites FRP Profile Design Manual — 2026",
      description: "结构型材、材料性能、设计基础与选型数据。",
      descriptionEn:
        "Structural profiles, material properties, design basis and selection data.",
      url: "https://www.f1composite.com/downloads/f1composite-frp-profile-design-manual-2026.pdf",
      format: "PDF · 24 pages",
    },
    {
      title: "玻璃钢门窗产品目录",
      titleEn: "Pultruded FRP Window & Door Catalog",
      description: "70/80/90/140 系列门窗型材、系统配置与热工数据。",
      descriptionEn:
        "70/80/90/140-series fenestration profiles, system configurations and thermal data.",
      url: "https://www.f1composite.com/downloads/f1composite-frp-window-door-catalog.pdf",
      format: "PDF",
    },
    {
      title: "油气与矿用拉挤管产品目录（2026.06）",
      titleEn: "Oilfield & Mine Pultruded Pipe Catalog — 2026.06",
      description: "油田地面集输与煤矿瓦斯抽放拉挤管系列。",
      descriptionEn:
        "Pultruded pipe series for oilfield gathering and coal-mine methane drainage.",
      url: "https://www.f1composite.com/downloads/f1composite-oilfield-mine-pipe-catalog-2026-06.pdf",
      format: "PDF · 3 pages",
    },
    {
      title: "PHI 90 系列被动房组件证书",
      titleEn: "PHI Component Certificate — 90-Series GFRP Window",
      description: "PHI 组件证书 2491wi03。",
      descriptionEn:
        "Passive House Institute component certificate 2491wi03 for the 90-Series GFRP window.",
      url: "https://www.f1composite.com/downloads/phi-certificate-gfrp-90-series-2491wi03.pdf",
      format: "PDF · Certification",
    },
    {
      title: "三星级绿色建材产品认证",
      titleEn: "3-Star Green Building Material Certificate",
      description: "玻璃钢门窗三星级绿色建材产品认证文件。",
      descriptionEn:
        "3-Star green building material certification for the covered GFRP window systems.",
      url: "https://www.f1composite.com/downloads/f1composite-3star-green-building-cert-frp-windows-2025.pdf",
      format: "PDF · Certification",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-09-01T00:00:00.000Z"),
  logo: "/supplier-assets/f1-composite-logo.png",
  contactEmail: "inquiry@f1composite.com",
  contactPhone: "+86 138 8333 8993",
  address:
    "No. 153 Jinyu Avenue, Liangjiang New Area, Chongqing 401121, China",
  website: "https://www.f1composite.com",
  enterpriseId: F1_COMPOSITE_ENTERPRISE_ID,
  scaleTier: null,
  brandPriority: F1_COMPOSITE_PINNED_BRAND_PRIORITY,
  viewCount: 0,
  capabilities: ["profile", "grating", "tube", "panel", "custom"],
  standardsSupported: [
    "EN 13706",
    "ASTM D3917",
    "AS 2047",
    "AS/NZS 4420.1",
  ],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-09T00:00:00.000Z"),
  updatedAt: new Date("2026-09-01T00:00:00.000Z"),
};
