import type { SupplierListing } from "@/lib/db/schema";

export const NEWTECH_GROUP_SUPPLIER_ID = "sup-newtech-group";
export const NEWTECH_GROUP_SUPPLIER_SLUG = "newtech-group";
export const NEWTECH_GROUP_PRODUCT_ID = "fiber-glass";

// Curated from Newtech Group's official English and Chinese company, product,
// pultrusion, testing and contact pages plus its company-published carbon-fiber
// and prepreg brochures. The locally stored logo is the current official site
// icon served from:
// https://en.newtechgroupcn.com/uploadfiles/211.149.255.8/webid1830/logo/202211/637354fa8db94.png
// Capacity, product-performance, accreditation and experience statements are
// company-published and remain unverified by GetFRP. The legal establishment
// year was cross-checked against public enterprise-record summaries.
export const NEWTECH_GROUP_SUPPLIER_PROFILE: SupplierListing = {
  id: NEWTECH_GROUP_SUPPLIER_ID,
  name: "新创碳谷集团有限公司",
  nameEn: "Newtech Group Co., Ltd.",
  slug: NEWTECH_GROUP_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "PAN 原丝",
    "12K、24K、25K 与 50K 碳纤维",
    "碳纤维织物与单向、斜纹、多轴向预浸料",
    "碳纤维、玻璃纤维与混杂纤维拉挤制品",
    "圆柱状与片状再生短切碳纤维",
    "复合材料零部件、工程与智能化装备",
  ],
  productsEn: [
    "PAN precursor",
    "12K, 24K, 25K and 50K carbon fiber",
    "Carbon-fiber fabric and unidirectional, twill and multiaxial prepreg",
    "Carbon-, glass- and hybrid-fiber pultruded products",
    "Cylindrical and flake recycled chopped carbon fiber",
    "Composite parts, engineering and intelligent equipment",
  ],
  processList: [
    "PAN 原丝与碳化",
    "多轴向经编与织物制造",
    "预浸料制造",
    "碳纤维、玻璃纤维与混杂纤维拉挤",
    "碳纤维复材回收与短切再生",
    "复材设计、成型与测试验证",
  ],
  processListEn: [
    "PAN precursor production and carbonization",
    "Multiaxial warp knitting and fabric manufacture",
    "Prepreg manufacture",
    "Carbon-, glass- and hybrid-fiber pultrusion",
    "Carbon-composite recycling and chopped-fiber recovery",
    "Composite design, molding and test validation",
  ],
  established: 2020,
  verified: false,
  description:
    "新创碳谷集团有限公司总部位于江苏常州，官网将其定位为面向全球碳纤维及复合材料应用市场提供工业化解决方案的产业集团，业务覆盖碳纤维原料、织物与预浸料、拉挤及其他复材制品、智能装备和检测。集团公开资料显示，其碳纤维事业部首条碳化线于 2021 年投产，供应 12K、24K、25K 与 50K 碳纤维，并发布总产能 1.8 万吨/年；该产能及相关性能数据均为企业自述，未经 GetFRP 独立核验。",
  descriptionEn:
    "Newtech Group Co., Ltd. is a Changzhou, Jiangsu-based industrial group that positions itself as a provider of industrialized carbon-fiber and composite application solutions for global markets. Its official portfolio spans carbon-fiber raw materials, fabrics and prepregs, pultruded and other composite products, intelligent equipment, and testing. A company-published carbon-fiber brochure states that the business unit's first carbonization line entered operation in 2021, lists 12K, 24K, 25K and 50K products, and reports total annual capacity of 18,000 tonnes. GetFRP has not independently verified that capacity or the published performance data.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "新创碳谷官网与产品资料展示了一条从 PAN 原丝、碳纤维、织物和预浸料延伸至拉挤型材、复材零部件、回收短切纤维、生产装备及检测的垂直业务链。预浸料资料列出 UD150、UD200、UD300、PN300、LT400 和 TW200 等代表型号，并说明可配套中低温固化、阻燃、快固化及耐高温热固性环氧体系；拉挤事业部公开提供碳纤、玻纤及混杂纤维制品。官网还称旗下 WMC 检测机构按 ISO/IEC 17025 运行并取得 CNAS 与 DNV GL 相关资质，但采购方应核验其现行证书、认可范围及其与具体供货主体的关系。下单前应针对选定业务单元和牌号确认法定生产主体、TDS/SDS、纤维牌号与丝束、上浆体系、树脂体系、测试方法与批次 COA、尺寸公差、最小订量、交期、包装、出口许可和最终用途限制。",
  productsServicesSummaryEn:
    "Newtech's official site and product literature present a vertical portfolio extending from PAN precursor, carbon fiber, fabric and prepreg to pultruded profiles, composite parts, recycled chopped fiber, production equipment and testing. The prepreg brochure lists representative UD150, UD200, UD300, PN300, LT400 and TW200 products with medium- or low-temperature cure, flame-retardant, fast-cure and high-temperature thermoset epoxy options. The pultrusion division publishes carbon-, glass- and hybrid-fiber products. The group site also describes its WMC testing affiliate as operating to ISO/IEC 17025 and holding CNAS and DNV GL credentials; buyers should validate the current certificates, accreditation scope and relationship to the supplying legal entity. Before approval, confirm the exact business unit and manufacturer, TDS/SDS, fiber grade and tow size, sizing and resin system, test method and batch COA, dimensional tolerances, MOQ, lead time, packaging, export authorization and end-use restrictions.",
  ecatalogs: [
    {
      title: "新创碳谷公司与碳纤维产品资料",
      titleEn: "Newtech Carbon Fiber and Company Profile",
      description: "公司公开的产业链、12K 至 50K 碳纤维、公开产能及再生短切纤维资料。",
      descriptionEn:
        "Official brochure covering the group supply chain, 12K through 50K carbon fiber, published capacity and recycled chopped fiber.",
      url: "https://www.newtechgroupcn.com/uploadfiles/211.149.255.8/webid1800/uploadfile/202411/4491731655863582.pdf",
      format: "PDF brochure",
    },
    {
      title: "碳纤维预浸料产品资料",
      titleEn: "Carbon Fiber Prepreg Brochure",
      description: "单向、斜纹及多轴向预浸料的代表型号、面密度、树脂含量与幅宽。",
      descriptionEn:
        "Official representative grades, areal weights, resin contents and widths for unidirectional, twill and multiaxial prepreg.",
      url: "https://www.newtechgroupcn.com/uploadfiles/211.149.255.8/webid1800/uploadfile/202411/9461731656213395.pdf",
      format: "PDF brochure",
    },
    {
      title: "新创碳谷产品中心",
      titleEn: "Newtech Product Center",
      description: "PAN 原丝、碳纤维、回收纤维、预浸料、装备、复材零部件与工程入口。",
      descriptionEn:
        "Official directory for PAN precursor, carbon fiber, recycled fiber, prepreg, equipment, composite parts and engineering.",
      url: "https://en.newtechgroupcn.com/product_category/Product-center.html",
      format: "Product directory",
    },
    {
      title: "拉挤事业部介绍",
      titleEn: "Pultrusion Division Overview",
      description: "碳纤维、玻璃纤维及混杂纤维拉挤制品与应用介绍。",
      descriptionEn:
        "Official overview of carbon-, glass- and hybrid-fiber pultruded products and applications.",
      url: "https://en.newtechgroupcn.com/othercate/othername/Pultrusion-Division.html",
      format: "Capability page",
    },
    {
      title: "集团公司介绍",
      titleEn: "Newtech Group Introduction",
      description: "集团架构、复材产业链及常州碳纤维基地的官网介绍。",
      descriptionEn:
        "Official group structure, composite value-chain and Changzhou carbon-fiber base overview.",
      url: "https://en.newtechgroupcn.com/aboutus.html",
      format: "Company profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-12T00:00:00.000Z"),
  logo: "/supplier-assets/newtech-group-logo.png",
  contactEmail: "info@newtechgroupcn.com",
  contactPhone: "+86 519 8565 1887",
  address:
    "No. 329 Huanghai Road, Xinbei District, Changzhou, Jiangsu, China",
  website: "https://en.newtechgroupcn.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 25,
  viewCount: 0,
  capabilities: [
    "PAN precursor",
    "carbon fiber",
    "12K carbon fiber",
    "24K carbon fiber",
    "25K carbon fiber",
    "50K carbon fiber",
    "carbon fiber fabric",
    "carbon fiber prepreg",
    "carbon fiber pultrusion",
    "glass fiber pultrusion",
    "recycled chopped carbon fiber",
    "composite testing",
  ],
  standardsSupported: ["GB/T 3362-2017", "GB/T 26752-2020"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-12T00:00:00.000Z"),
  updatedAt: new Date("2026-08-12T00:00:00.000Z"),
};

export const NEWTECH_GROUP_PRODUCT_RELATION = {
  supplierListingId: NEWTECH_GROUP_SUPPLIER_ID,
  productId: NEWTECH_GROUP_PRODUCT_ID,
  relationshipType: "supplier",
  supplierProductName:
    "Carbon fiber, carbon-fiber fabric and composite reinforcements",
  isPrimary: true,
  isVerified: false,
  customAvailable: true,
  moq: null,
  moqUnit: null,
  leadTimeDays: null,
  specificationOverrides: {},
  evidence: {
    sourceType: "official_website",
    sourceUrl:
      "https://www.newtechgroupcn.com/uploadfiles/211.149.255.8/webid1800/uploadfile/202411/4491731655863582.pdf",
    reviewedAt: "2026-08-12",
    note: "Relationship based on Newtech Group's official carbon-fiber and composite brochure; exact grade availability and specifications require buyer confirmation.",
  },
};
