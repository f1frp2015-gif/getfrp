import type { SupplierListing } from "@/lib/db/schema";

export const MATEX_SUPPLIER_ID = "sup-changzhou-matex";
export const MATEX_SUPPLIER_SLUG = "changzhou-matex-composites";

// Curated from Matex's official company, product, contact and technical-data
// pages. Capacity, workforce, export and equipment statements are
// company-published and have not been independently verified by GetFRP. No
// certification is listed because a current certificate could not be verified
// from the official site. The supplier's current official logo is stored
// locally from the header asset served on its official website:
// https://cdn.globalso.com/matex-frp/logo2.png
export const MATEX_SUPPLIER_PROFILE: SupplierListing = {
  id: MATEX_SUPPLIER_ID,
  name: "常州迈特复合材料有限公司",
  nameEn: "Chang Zhou Matex Composites Co., Ltd.",
  slug: MATEX_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "单向、双轴向、三轴向及四轴向玻璃纤维织物",
    "粉剂与乳剂玻璃纤维短切毡",
    "玻璃纤维方格布、布毡复合材料及玻纤布",
    "玻璃纤维与聚酯表面毡",
    "拉挤、缠绕、喷射及热塑性塑料用玻纤粗纱与短切纤维",
    "不饱和聚酯树脂与乙烯基酯树脂",
  ],
  productsEn: [
    "Unidirectional, biaxial, triaxial and quadraxial fiberglass fabrics",
    "Powder- and emulsion-bonded chopped strand mats",
    "Woven roving, woven-roving combo mats and fiberglass cloth",
    "Fiberglass and polyester veils or tissues",
    "Roving and chopped strands for pultrusion, filament winding, spray-up and thermoplastics",
    "Unsaturated polyester and vinyl ester resins",
  ],
  processList: [
    "多轴向针织与缝编",
    "玻璃纤维织造",
    "短切毡及复合毡生产",
    "定制玻纤增强材料开发",
    "拉挤、缠绕、RTM 与真空灌注材料配套",
  ],
  processListEn: [
    "Multiaxial knitting and stitch bonding",
    "Fiberglass weaving",
    "Chopped-strand and combination-mat production",
    "Custom fiberglass reinforcement development",
    "Materials for pultrusion, filament winding, RTM and vacuum infusion",
  ],
  established: 2007,
  verified: false,
  description:
    "常州迈特复合材料有限公司是一家位于江苏常州的玻纤材料制造商，官网称其自 2007 年起从事玻璃纤维织物、毡和表面毡的开发与生产。公司公开的四大玻纤系列包括针织织物与毡、短切毡、机织增强材料和表面毡，并另列玻纤粗纱、短切纤维、不饱和聚酯树脂及乙烯基酯树脂产品。官网披露工厂约有 70 名员工、19,000 平方米设施和约 21,000 吨玻纤年产能，产品出口至 30 多个国家和地区；这些规模与出口数据均为企业自述。",
  descriptionEn:
    "Chang Zhou Matex Composites Co., Ltd. is a fiberglass-material manufacturer in Changzhou, Jiangsu. Its official site says the company has developed and produced fiberglass textiles, mats and veils since 2007. The published reinforcement portfolio covers knitted fabrics and mats, chopped strand mats, woven reinforcements and veils, with additional roving, chopped-strand, unsaturated-polyester-resin and vinyl-ester-resin ranges. Matex reports approximately 70 employees, a 19,000 m² facility, about 21,000 tonnes of annual fiberglass capacity and exports to more than 30 countries and regions; these scale and export figures are company-published.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "迈特官网列出的增强材料覆盖单向、双轴向、三轴向和四轴向织物，缝编毡、RTM/导流毡，粉剂与乳剂短切毡，方格布、玻纤布和布毡复合材料，以及玻纤/聚酯表面毡。其产品页面还提供面密度、幅宽、玻纤排列、适配树脂和典型用途等参数，并称可开发定制规格。粗纱、短切纤维和树脂系列面向拉挤、纤维缠绕、喷射、连续板材、热塑性塑料、BMC、手糊、RTM 与真空灌注等工艺。采购方应针对具体牌号核验 TDS/SDS、玻纤类型与浸润剂、面密度和公差、幅宽与卷长、树脂相容性、力学与浸润性能、现行质量体系证书、最小订量、交期及包装。",
  productsServicesSummaryEn:
    "Matex's official range includes unidirectional, biaxial, triaxial and quadraxial fabrics; stitched, RTM and infusion mats; powder- and emulsion-bonded chopped strand mats; woven roving, fiberglass cloth and woven-roving combinations; and fiberglass or polyester veils. Product pages publish parameters such as areal weight, roll width, fiber orientation, compatible resin systems and typical applications, and the company offers custom constructions. Its roving, chopped-strand and resin ranges target pultrusion, filament winding, spray-up, continuous panels, thermoplastics, BMC, hand lay-up, RTM and infusion. Buyers should validate the exact TDS/SDS, glass type and sizing, areal-weight tolerance, width and roll length, resin compatibility, mechanical and wet-out performance, current quality-system certificates, MOQ, lead time and packaging for the selected grade.",
  ecatalogs: [
    {
      title: "迈特公司介绍",
      titleEn: "Matex Company Profile",
      description: "企业历史、玻纤产品系列、工厂规模及公开出口覆盖。",
      descriptionEn:
        "Official company history, fiberglass portfolio, published plant scale and export footprint.",
      url: "https://www.matex-frp.com/about-us/",
      format: "Company profile",
    },
    {
      title: "迈特产品目录",
      titleEn: "Matex Product Directory",
      description: "多轴向织物、毡、机织增强材料、粗纱、短切纤维及树脂产品入口。",
      descriptionEn:
        "Official directory for multiaxial fabrics, mats, woven reinforcements, roving, chopped strands and resins.",
      url: "https://www.matex-frp.com/products/",
      format: "Product directory",
    },
    {
      title: "经向单向玻纤技术页",
      titleEn: "Warp Unidirectional Fiberglass Technical Page",
      description: "公开面密度、幅宽、玻纤排列、适用场景及质量控制说明。",
      descriptionEn:
        "Official construction, areal-weight, width, application and quality-control information for warp unidirectional reinforcements.",
      url: "https://www.matex-frp.com/warp-unidirectional-0-2-product/",
      format: "Technical product page",
    },
    {
      title: "1203 拉挤树脂技术数据表",
      titleEn: "1203 Pultrusion Resin Technical Data Sheet",
      description: "用于玻璃钢拉挤型材的不饱和聚酯树脂公开性能与试验方法。",
      descriptionEn:
        "Official technical data for an unsaturated polyester resin intended for pultruded FRP profiles.",
      url: "https://www.matex-frp.com/uploads/TDS%20%201203.pdf",
      format: "PDF technical data sheet",
    },
    {
      title: "迈特联系方式",
      titleEn: "Matex Contact Page",
      description: "常州地址、公开邮箱与联系电话。",
      descriptionEn:
        "Official Changzhou address, public email and telephone details.",
      url: "https://www.matex-frp.com/contact-us/",
      format: "Contact directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-06T00:00:00.000Z"),
  logo: "/supplier-assets/matex-logo.png",
  contactEmail: "info@matexcomposites.com",
  contactPhone: "+86 135 8451 0068",
  address:
    "No. 8, Changwu North Road, Changzhou 213161, Jiangsu, China",
  website: "https://www.matex-frp.com/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 20,
  viewCount: 0,
  capabilities: [
    "multiaxial fiberglass fabric",
    "unidirectional fiberglass fabric",
    "chopped strand mat",
    "woven roving",
    "fiberglass veil",
    "pultrusion roving",
    "filament winding roving",
    "fiberglass chopped strands",
    "unsaturated polyester resin",
    "vinyl ester resin",
    "custom fiberglass reinforcement",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-06T00:00:00.000Z"),
  updatedAt: new Date("2026-08-06T00:00:00.000Z"),
};
