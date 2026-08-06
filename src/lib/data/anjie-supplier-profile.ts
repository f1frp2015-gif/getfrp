import type { SupplierListing } from "@/lib/db/schema";

export const ANJIE_SUPPLIER_ID = "sup-anjie";
export const ANJIE_SUPPLIER_SLUG = "haining-anjie-composite-materials";

// Curated from ANJIE's official English company, product, resource and contact
// pages. Company-published scale, export, patent and product claims remain
// unverified by GetFRP. The website identifies Jiangsu NONGCHAOER Composite
// Materials Co., Ltd. as a sister company and lists its Jianhu, Jiangsu site as
// the factory, so buyers should confirm the contracting and manufacturing entity.
// Official logo source (downloaded 2026-08-05):
// https://shopcdnpro.grainajz.com/839/upload/logo/89d1649cf62c458d7cf0d39bae7babc8d7ce1de0175d16333f9d0ddeaaab08f7.jpg
export const ANJIE_SUPPLIER_PROFILE: SupplierListing = {
  id: ANJIE_SUPPLIER_ID,
  name: "海宁安捷复合材料有限责任公司",
  nameEn: "Haining ANJIE Composite Materials Co., Ltd.",
  slug: ANJIE_SUPPLIER_SLUG,
  location: "浙江海宁",
  locationEn: "Haining, Zhejiang, China",
  province: "浙江",
  category: "manufacturer",
  products: [
    "碳纤维布、板材、网格、锚绳、钢筋及短切纤维",
    "玄武岩纤维钢筋、土工格栅、单向布及短切纤维",
    "玻璃纤维钢筋、锚杆、织物及玻璃钢钢筋网",
    "单向与双向芳纶纤维织物",
    "碳纤维预浸料、纱线及定制复合材料部件",
    "结构加固用环氧树脂胶黏剂",
  ],
  productsEn: [
    "Carbon-fiber fabrics, laminates, geogrids, anchor rope, rebar and chopped fiber",
    "Basalt-fiber rebar, geogrid, unidirectional fabric and chopped fiber",
    "Glass-fiber rebar, rock bolts, fabrics and FRP rebar mesh",
    "Unidirectional and bidirectional aramid-fiber fabrics",
    "Carbon-fiber prepreg, yarn and custom composite parts",
    "Epoxy adhesives for structural-reinforcement systems",
  ],
  processList: [
    "单向、双向及多轴向增强织物制造",
    "碳纤维、玄武岩纤维与玻璃纤维钢筋及板材成型",
    "纤维网格与土工格栅制造",
    "预浸料与层压板制造",
    "短切纤维与纤维粉体加工",
    "OEM 与特殊规格定制",
  ],
  processListEn: [
    "Unidirectional, bidirectional and multiaxial reinforcement manufacture",
    "Carbon-, basalt- and glass-fiber rebar and laminate production",
    "Fiber mesh and geogrid manufacture",
    "Prepreg and laminate manufacture",
    "Chopped-fiber and fiber-powder processing",
    "OEM and custom-format production",
  ],
  established: 2004,
  verified: false,
  description:
    "海宁安捷复合材料有限责任公司官网称，公司于 2004 年在浙江海宁成立，产品覆盖碳纤维、玄武岩纤维、芳纶和玻璃纤维增强材料，包括织物、板材、预浸料、网格、钢筋、短切纤维及配套树脂。官网同时将 2019 年成立的江苏弄潮儿复合材料有限公司称为关联制造企业，并列出江苏建湖生产地址；采购方应在询盘与验厂阶段确认实际签约、生产和质量责任主体。",
  descriptionEn:
    "Haining ANJIE Composite Materials Co., Ltd. states that it was established in Haining, Zhejiang, in 2004. Its published portfolio spans carbon-, basalt-, aramid- and glass-fiber reinforcements, including fabrics, laminates, prepreg, geogrids, rebar, chopped fiber and related resin products. The current website also identifies Jiangsu NONGCHAOER Composite Materials Co., Ltd., established in 2019, as a sister manufacturing company and lists a factory in Jianhu, Jiangsu. Buyers should confirm the contracting entity, production site and quality-responsibility chain during RFQ and factory qualification.",
  certifications: [
    "2019 年 ISET 文件：碳纤维布 CJ20T–CJ140T，制造商声明 EN 13251:2016（官网公开；文件明确不构成安全或合规评估，现行适用性需核验）",
  ],
  certificationsEn: [
    "2019 ISET document for carbon-fiber fabric models CJ20T–CJ140T, with manufacturer-declared EN 13251:2016 (supplier-hosted; the document states it is not a safety or compliance assessment; current applicability to be confirmed)",
  ],
  productsServicesSummary:
    "安捷官网目录覆盖碳纤维布、板、网格、预应力加固材料、锚绳、钢筋和短切纤维，玄武岩钢筋、格栅、布及短切纤维，玻纤钢筋、锚杆与织物，以及芳纶布、预浸料和环氧胶黏剂。官网提供 2023 目录、多个单品 TDS、测试报告/MSDS 入口和一份 2019 ISET 文件，并自述拥有 120 余台生产与实验设备、出口 80 多个国家和地区。采购方应按具体产品核验牌号、纤维/树脂体系、尺寸与公差、力学性能、测试标准、批次 COA、证书范围、MOQ、交期以及海宁与江苏主体之间的供货关系。",
  productsServicesSummaryEn:
    "ANJIE's official directory covers carbon-fiber fabric, plate, geogrid, prestressed reinforcement, anchor rope, rebar and chopped fiber; basalt-fiber rebar, geogrid, fabric and chopped fiber; glass-fiber rebar, rock bolts and fabrics; plus aramid fabrics, prepreg and epoxy adhesives. The site provides a 2023 catalog, multiple product TDS files, test-report and MSDS resource sections, and a 2019 ISET document. It also states that the operating group has more than 120 production and laboratory machines and exports to over 80 countries and regions. Buyers should validate the exact grade, fiber and resin system, dimensions and tolerances, mechanical properties, test standards, batch COA, certificate scope, MOQ, lead time, and the supply relationship between the Haining and Jiangsu entities.",
  ecatalogs: [
    {
      title: "安捷官网与公司介绍",
      titleEn: "ANJIE Official Website & Company Profile",
      description: "公司沿革、产品范围、质量控制、公开规模与生产基地信息。",
      descriptionEn:
        "Official company history, product scope, quality-control statements, published scale and manufacturing-footprint information.",
      url: "https://www.anjiezj.com/aboutus",
      format: "Company profile",
    },
    {
      title: "碳纤维产品目录",
      titleEn: "Carbon-Fiber Product Directory",
      description: "碳纤维短切丝、网格、加固材料、锚绳、钢筋、织物与板材。",
      descriptionEn:
        "Official directory for chopped carbon fiber, geogrids, reinforcement systems, anchor rope, rebar, fabrics and laminates.",
      url: "https://www.anjiezj.com/Carbon-fiber-products-cfrp",
      format: "Product directory",
    },
    {
      title: "玄武岩纤维产品目录",
      titleEn: "Basalt-Fiber Product Directory",
      description: "玄武岩土工格栅、短切丝、钢筋与单向布。",
      descriptionEn:
        "Official directory for basalt-fiber geogrid, chopped fiber, rebar and unidirectional fabric.",
      url: "https://www.anjiezj.com/Basalt-fiber-products-bfrp",
      format: "Product directory",
    },
    {
      title: "玻璃纤维产品目录",
      titleEn: "Glass-Fiber Product Directory",
      description: "涂覆玻纤布、电子布、玻纤锚杆、钢筋与单向布。",
      descriptionEn:
        "Official directory for coated glass fabrics, electronic fabric, rock bolts, rebar and unidirectional fabric.",
      url: "https://www.anjiezj.com/Glassfiber-products-gfrp",
      format: "Product directory",
    },
    {
      title: "安捷产品 TDS 资料库",
      titleEn: "ANJIE Product TDS Library",
      description: "碳纤维、玄武岩、玻纤、芳纶、预浸料及环氧胶黏剂公开 TDS 入口。",
      descriptionEn:
        "Supplier-hosted TDS files for carbon-, basalt-, glass- and aramid-fiber products, prepreg and epoxy adhesives.",
      url: "https://www.anjiezj.com/Company-inform",
      format: "Technical document library",
    },
    {
      title: "安捷目录下载页",
      titleEn: "ANJIE Catalog Download Page",
      description: "官网发布的 2023 综合产品目录。",
      descriptionEn: "Supplier-hosted 2023 composite-product catalog.",
      url: "https://www.anjiezj.com/Specifications",
      format: "PDF catalog directory",
    },
    {
      title: "认证文件页",
      titleEn: "Certification Document Page",
      description: "官网发布的 2019 ISET 碳纤维布文件；使用前应阅读文件限制并核验现行状态。",
      descriptionEn:
        "Supplier-hosted 2019 ISET carbon-fabric document; buyers should review its limitations and confirm current status before use.",
      url: "https://www.anjiezj.com/certification",
      format: "Certification document directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/anjie-logo.jpg",
  contactEmail: "sales@anjiezj.com",
  contactPhone: "+86 187 6739 2086",
  address:
    "Room 502, Phoenix Commercial Building, Dingqiao Town, Haining, Zhejiang, China",
  website: "https://www.anjiezj.com/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 16,
  viewCount: 0,
  capabilities: [
    "carbon fiber fabric",
    "carbon fiber laminate",
    "carbon fiber rebar",
    "basalt fiber rebar",
    "basalt fiber geogrid",
    "glass fiber rebar",
    "glass fiber rock bolt",
    "aramid fiber fabric",
    "carbon fiber prepreg",
    "chopped fiber",
    "structural reinforcement materials",
    "custom composite reinforcements",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
