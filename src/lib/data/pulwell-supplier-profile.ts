import type { SupplierListing } from "@/lib/db/schema";

export const PULWELL_SUPPLIER_ID = "sup-pulwell";
export const PULWELL_SUPPLIER_SLUG = "pulwell-composites";
export const PULWELL_PRODUCT_ID = "frp-rebar";

// Curated from Pulwell's official English company, technology, product and
// contact pages. Production, export, certification, standards and performance
// statements remain company-published and unverified by GetFRP. The current
// official logo was downloaded from:
// https://www.gfrp-china.com/uploads/11638/logo1.png
export const PULWELL_SUPPLIER_PROFILE: SupplierListing = {
  id: PULWELL_SUPPLIER_ID,
  name: "Pulwell Composites Co., Ltd.",
  nameEn: "Pulwell Composites Co., Ltd.",
  slug: PULWELL_SUPPLIER_SLUG,
  location: "广东中山",
  locationEn: "Zhongshan, Guangdong, China",
  province: "广东",
  category: "manufacturer",
  products: [
    "玻璃纤维、玄武岩纤维及碳纤维复合筋",
    "GFRP 传力杆、拉杆、网片、弯筋及箍筋",
    "玻璃钢工字梁、槽钢、角钢、横担及定制拉挤型材",
    "玻璃纤维与碳纤维管、棒材及伸缩杆",
    "CFRP 加固板与复合材料条带",
    "玻璃钢电围栏杆、植物支撑杆及车道标杆",
  ],
  productsEn: [
    "Glass-, basalt- and carbon-fiber composite rebar",
    "GFRP dowel bars, tie bars, mesh, bends and stirrups",
    "FRP I-beams, channels, angles, crossarms and custom pultruded profiles",
    "Fiberglass and carbon-fiber tubes, rods and telescoping poles",
    "CFRP strengthening plates and composite strips",
    "Fiberglass fence posts, plant stakes and driveway markers",
  ],
  processList: [
    "单向连续拉挤成型",
    "复合材料卷制成型",
    "压缩模塑",
    "型材结构、材料与工艺参数设计支持",
    "磨削、钻孔、倒角、涂装、共注射及装配等后加工",
    "原材料与成品的内部实验室测试",
  ],
  processListEn: [
    "Unidirectional continuous pultrusion",
    "Roll-wrapped composite processing",
    "Compression molding",
    "Profile geometry, material and process engineering support",
    "Grinding, drilling, chamfering, painting, co-injection and assembly",
    "In-house raw-material and finished-product testing",
  ],
  established: 2001,
  verified: false,
  description:
    "Pulwell Composites Co., Ltd. 官网称公司自 2001 年起从事纤维增强复合材料制造，总部位于广东中山，并在香港设有办公室。其公开产品覆盖玻璃纤维、玄武岩纤维与碳纤维复合筋，GFRP 传力杆和拉杆，拉挤结构型材，玻璃纤维与碳纤维管棒，CFRP 加固条，以及农业围栏杆和植物支撑杆等定制复合材料制品。",
  descriptionEn:
    "Pulwell Composites Co., Ltd. states on its official website that it has manufactured fiber-reinforced composites since 2001. Headquartered in Zhongshan, Guangdong, with a published Hong Kong branch office, its range includes glass-, basalt- and carbon-fiber composite rebar; GFRP dowel and tie bars; pultruded structural profiles; fiberglass and carbon-fiber tubes and rods; CFRP strengthening strips; and composite posts and stakes for agricultural and other custom applications.",
  certifications: [
    "ISO 9001（企业官网公开；采购方应核验认证主体、范围与有效期）",
    "RoHS / REACH 符合性声明（企业官网公开；应按具体产品、材料体系及目的市场核验）",
  ],
  certificationsEn: [
    "ISO 9001 (company-published; confirm the certified entity, scope and validity)",
    "RoHS / REACH compliance claim (company-published; confirm for the quoted product, material system and destination market)",
  ],
  productsServicesSummary:
    "Pulwell 官网称其拥有约 10,000 平方米工厂、14 条拉挤线和 3 条卷制线，超过 80% 的产品出口至欧洲、北美和澳大利亚。公开材料选项包括玻璃纤维、碳纤维、玄武岩纤维及混杂增强，树脂体系包括聚酯、乙烯基酯、环氧、酚醛和聚氨酯；后加工覆盖削尖、锥化、无心磨削、钻孔、倒角、涂装、共注射和装配。企业技术页还列出树脂胶凝时间、树脂含量、拉伸、弯曲、压缩、剪切、粘结、染料渗透、巴柯尔硬度和密度等内部测试能力。上述产能、出口、认证、标准与性能均为企业公开声明；采购方应针对具体牌号和批次核验图纸、材料体系、纤维含量、尺寸公差、表面、力学数据、测试方法与报告、证书、包装、MOQ、交期和追溯要求。",
  productsServicesSummaryEn:
    "Pulwell's official site states that its approximately 10,000 m² factory operates 14 pultrusion lines and three roll-wrapping lines, with more than 80% of output exported to Europe, North America and Australia. Published material options include glass, carbon, basalt and hybrid reinforcement with polyester, vinyl-ester, epoxy, phenolic or polyurethane resins. Finishing capabilities include pointing, tapering, centerless grinding, drilling, chamfering, painting, co-injection and assembly. The company also lists in-house testing for resin gel time and content, tensile, flexural, compression, shear and bond strength, dye penetration, Barcol hardness and density. These capacity, export, certification, standards and performance statements are company-published. Buyers should validate the drawing, material system, fiber content, dimensional tolerance, surface, mechanical data, test method and report, certificate, packaging, MOQ, lead time and traceability for the quoted grade and batch.",
  ecatalogs: [
    {
      title: "Pulwell 公司介绍",
      titleEn: "Pulwell Company Profile",
      description: "公司沿革、制造基地、产品范围、材料选项与质量控制概览。",
      descriptionEn:
        "Official overview of the company history, manufacturing base, product scope, material options and quality controls.",
      url: "https://www.gfrp-china.com/about-us",
      format: "Company profile",
    },
    {
      title: "复合材料钢筋产品目录",
      titleEn: "Composite Rebar Product Directory",
      description: "玻璃纤维、玄武岩纤维和碳纤维复合筋、网片、弯筋与箍筋。",
      descriptionEn:
        "Official directory for glass-, basalt- and carbon-fiber rebar, mesh, bends and stirrups.",
      url: "https://www.gfrp-china.com/composite-rebar/",
      format: "Product directory",
    },
    {
      title: "GFRP 传力杆产品目录",
      titleEn: "GFRP Dowel Bar Product Directory",
      description: "混凝土路面、机场、收费站和工业场地用 GFRP 传力杆。",
      descriptionEn:
        "Official directory for GFRP dowel bars used in concrete pavements, airports, tolling and industrial sites.",
      url: "https://www.gfrp-china.com/gfrp-dowel-bars/",
      format: "Product directory",
    },
    {
      title: "玻璃钢结构型材目录",
      titleEn: "FRP Structural Profile Directory",
      description: "玻璃钢结构型材、定制拉挤件及聚氨酯拉挤制品。",
      descriptionEn:
        "Official directory for FRP structural profiles, custom pultrusions and polyurethane pultrusions.",
      url: "https://www.gfrp-china.com/frp-profiles/",
      format: "Product directory",
    },
    {
      title: "Pulwell 工艺与测试能力",
      titleEn: "Pulwell Technology & Testing Capabilities",
      description: "拉挤、卷制、压缩模塑、工程设计和内部测试能力。",
      descriptionEn:
        "Company-published overview of pultrusion, roll wrapping, compression molding, engineering and testing capabilities.",
      url: "https://www.gfrp-china.com/pulwell-technology",
      format: "Technical overview",
    },
    {
      title: "Pulwell 官方联系方式",
      titleEn: "Pulwell Official Contact",
      description: "中山地址、企业邮箱、电话及总经理公开联系方式。",
      descriptionEn:
        "Official Zhongshan address, company email, telephone and published general-manager contact.",
      url: "https://www.gfrp-china.com/contact-us",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/pulwell-logo.png",
  contactEmail: "info@gfrp-china.com",
  contactPhone: "+86 760 8613 3395",
  address:
    "No. 20 Lianhong Road, Torch Development Zone, Zhongshan City, Guangdong Province 528437, China",
  website: "https://www.gfrp-china.com/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 20,
  viewCount: 0,
  capabilities: [
    "GFRP rebar",
    "GFRP dowel bars",
    "composite rebar mesh and bends",
    "pultruded FRP profiles",
    "custom pultrusions",
    "fiberglass and carbon-fiber tubes",
    "CFRP strengthening strips",
    "fiberglass fence posts and stakes",
    "roll-wrapped composites",
    "compression molding",
    "in-house composite testing",
  ],
  standardsSupported: [
    "ASTM D7957",
    "ASTM D8505",
    "ISO 10406",
    "ACI 440.1R",
  ],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};

export const PULWELL_PRODUCT_RELATION = {
  supplierListingId: PULWELL_SUPPLIER_ID,
  productId: PULWELL_PRODUCT_ID,
  relationshipType: "supplier",
  supplierProductName:
    "Glass-, basalt- and carbon-fiber composite rebar and GFRP dowel bars",
  isPrimary: true,
  isVerified: false,
  customAvailable: true,
  moq: null,
  moqUnit: null,
  leadTimeDays: null,
  specificationOverrides: {},
  evidence: {
    sourceType: "official_website",
    sourceUrl: "https://www.gfrp-china.com/composite-rebar/",
    reviewedAt: "2026-08-05",
    note: "Relationship based on Pulwell's official composite-rebar directory; exact grade, standards compliance and commercial availability require buyer confirmation.",
  },
};
