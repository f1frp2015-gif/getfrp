import type { SupplierListing } from "@/lib/db/schema";

export const ZHONGSHENG_FIBERGLASS_SUPPLIER_ID = "sup-taizhou-zhongsheng";
export const ZHONGSHENG_FIBERGLASS_SUPPLIER_SLUG =
  "taizhou-zhongsheng-glass-fiber-products";

// Curated from Zhongsheng's official English website, company, product,
// equipment, certification and contact pages. Company-published capacity,
// staffing, customer, certification and export statements remain unverified by
// GetFRP. The Chinese legal name and 2013 incorporation date were cross-checked
// against public company-registration information; the official site describes
// manufacturing activity since 2000, so buyers should distinguish operating
// history from the current legal entity's formation date. Product qualification
// must include the government recall notice linked below. Official logo source
// (downloaded 2026-08-06):
// https://www.zsfiberglass.com/wp-content/uploads/2024/06/cropped-Zhongsheng-Fiber-Site-logo-A-1-316x77.png
export const ZHONGSHENG_FIBERGLASS_SUPPLIER_PROFILE: SupplierListing = {
  id: ZHONGSHENG_FIBERGLASS_SUPPLIER_ID,
  name: "泰州市中盛玻纤制品有限公司",
  nameEn: "Taizhou Zhongsheng Glass Fiber Products Co., Ltd.",
  slug: ZHONGSHENG_FIBERGLASS_SUPPLIER_SLUG,
  location: "江苏泰州",
  locationEn: "Taizhou, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "E 玻纤与 C 玻纤布、方格布及高硅氧布",
    "硅胶、丙烯酸、蛭石及铝箔涂覆玻纤织物",
    "耐碱玻纤网格布、窗纱与网格带",
    "短切毡、表面毡、针刺毡、缝编毡与复合毡",
    "家用灭火毯、汽车灭火毯与焊接防火毯",
    "防火文件袋、锂电池防火袋及其他耐热纺织制品",
  ],
  productsEn: [
    "E-glass and C-glass fabrics, woven roving and high-silica cloth",
    "Silicone-, acrylic-, vermiculite- and aluminum-foil-coated glass fabrics",
    "Alkali-resistant fiberglass mesh, insect screen and mesh tape",
    "Chopped-strand, tissue, needle, stitched and combination mats",
    "Household fire blankets, vehicle fire blankets and welding blankets",
    "Fire-resistant document bags, lithium-battery bags and other heat-resistant textiles",
  ],
  processList: [
    "玻璃纤维拉丝、加捻与整经",
    "喷气、水喷射及经编织造",
    "硅胶及其他功能涂层加工",
    "短切、针刺、缝编与复合毡制造",
    "数控裁切、缝制与成品包装",
    "幅宽、克重、织法、涂层、尺寸、标签及包装定制",
  ],
  processListEn: [
    "Glass-fiber drawing, twisting and warping",
    "Air-jet, water-jet and warp-knitting manufacture",
    "Silicone and other functional coating",
    "Chopping, needling, stitching and combination-mat manufacture",
    "CNC cutting, sewing and finished-product packing",
    "Custom width, areal weight, weave, coating, size, label and packaging",
  ],
  established: 2013,
  verified: false,
  description:
    "泰州市中盛玻纤制品有限公司位于江苏泰州姜堰区。公开工商信息显示现主体成立于 2013 年 11 月 18 日；其英文官网则称玻纤布、网格布、短切毡和灭火毯等产品的制造经验可追溯至 2000 年。官网当前产品范围还包括高硅氧布、涂覆玻纤织物、汽车与焊接防火毯、防火袋及锂电池袋，并自述拥有 3 个工厂、约 150,000 平方米场地和 500 名员工。上述沿革、规模与能力信息均需采购方通过营业执照、工厂审核和具体订单文件独立核验。",
  descriptionEn:
    "Taizhou Zhongsheng Glass Fiber Products Co., Ltd. is based in Jiangyan District, Taizhou, Jiangsu. Public company-registration information dates the current legal entity to November 18, 2013, while its official English website describes manufacturing fiberglass fabric, mesh, chopped-strand mat and fire blankets since 2000. The current published range also covers high-silica and coated glass fabrics, vehicle and welding blankets, fire-resistant bags and lithium-battery bags. The company reports three factories, approximately 150,000 m² of space and 500 employees; buyers should independently validate the operating history, scale and capabilities through the business license, factory audit and order-specific documents.",
  certifications: [
    "ISO 9001 质量管理体系（企业认证页公开；认证主体、范围、发证机构与有效期需核验）",
    "EN 1869:2019 灭火毯测试文件（官网公开 SGS 报告；具体型号、生产批次与现行适用性需核验）",
    "CE、BSI Kitemark、ASTM 与 REACH 灭火毯文件（企业官网公开；具体产品、文件性质与有效期需核验）",
    "NFPA 701、UL 94 与 RoHS 涂覆玻纤布测试文件（企业官网公开；具体克重、涂层及型号覆盖需核验）",
    "EN 13501 汽车灭火毯测试文件（企业官网公开；玻纤与高硅氧版本的具体报告范围需核验）",
  ],
  certificationsEn: [
    "ISO 9001 quality management system (supplier-published certification page; confirm certified entity, scope, issuer and validity)",
    "EN 1869:2019 fire-blanket test documentation (supplier-hosted SGS report; confirm model, production batch and current applicability)",
    "CE, BSI Kitemark, ASTM and REACH fire-blanket documents (supplier-published; confirm covered products, document type and validity)",
    "NFPA 701, UL 94 and RoHS coated-fiberglass-fabric test documents (supplier-published; confirm areal weight, coating and model scope)",
    "EN 13501 vehicle-fire-blanket test documents (supplier-published; confirm the report scope for fiberglass and high-silica versions)",
  ],
  productsServicesSummary:
    "中盛官网覆盖玻纤布、网格布、短切毡及其他玻纤毡、高硅氧与涂覆织物，以及家用、汽车和焊接防火毯等成品。网站公开从拉丝/加捻、整经、织造、涂覆到裁切缝制的设备与工序，并支持克重、幅宽、织法、涂层、尺寸、标签和包装定制。官网公布的典型日交付能力和 10–15 天交期属于企业声明，不应直接套用于具体订单。采购方应按报价型号核验原丝体系、织法、克重和尺寸公差、涂层配方与单/双面、连续工作温度、拉伸和阻燃测试、批次 COA、MOQ、交期、包装与质保。尤其需要注意，国家市场监督管理总局缺陷产品召回技术中心于 2025 年 12 月发布了该公司部分“铭辰”牌 MJT 1000×1000 mm 与 MJT 1500×1500 mm 灭火毯召回信息，涉及 2023 年 4 月 3 日至 2025 年 4 月 7 日生产的 98,000 条产品；采购灭火毯时应核对品牌、型号、生产日期、召回处置与最新第三方测试。",
  productsServicesSummaryEn:
    "Zhongsheng's website covers fiberglass cloth, mesh, chopped-strand and other glass-fiber mats, high-silica and coated fabrics, and finished household, vehicle and welding blankets. It publishes equipment and process coverage from fiber drawing or twisting, warping and weaving through coating, cutting and sewing, with customization of areal weight, width, weave, coating, dimensions, label and packaging. Published daily-capacity figures and 10- to 15-day lead times are company statements and should not be assumed for a specific order. Buyers should validate the quoted yarn system, weave, areal weight and tolerances, coating chemistry and sidedness, continuous working temperature, tensile and fire test reports, batch COA, MOQ, lead time, packaging and warranty. For fire blankets in particular, China's product-recall authority published a December 2025 notice covering 98,000 Mingchen-brand MJT 1000×1000 mm and MJT 1500×1500 mm blankets made from April 3, 2023 through April 7, 2025. Qualification should therefore confirm brand, model, production date, recall disposition and current third-party testing.",
  ecatalogs: [
    {
      title: "中盛玻纤英文官网",
      titleEn: "Zhongsheng Fiberglass Official Website",
      description: "主要产品、公开产能、质量控制、交期与联系方式总览。",
      descriptionEn:
        "Official overview of principal products, published capacity, quality control, lead times and contact details.",
      url: "https://www.zsfiberglass.com/",
      format: "Official website",
    },
    {
      title: "中盛玻纤公司介绍",
      titleEn: "Zhongsheng Fiberglass Company Profile",
      description: "企业沿革、工厂规模、产品范围及公开团队信息。",
      descriptionEn:
        "Official operating history, published factory scale, product range and team information.",
      url: "https://www.zsfiberglass.com/about-us/",
      format: "Company profile",
    },
    {
      title: "中盛玻纤布产品页",
      titleEn: "Zhongsheng Fiberglass Cloth Product Page",
      description: "E 玻纤与 C 玻纤布、规格、工艺、定制和应用信息。",
      descriptionEn:
        "Official specifications, processing, customization and application information for E-glass and C-glass fabrics.",
      url: "https://www.zsfiberglass.com/fiberglass-cloth/",
      format: "Product page",
    },
    {
      title: "中盛玻纤设备页",
      titleEn: "Zhongsheng Fiberglass Equipment Page",
      description: "官网公开的加捻、整经、织造、经编、短切及裁切设备。",
      descriptionEn:
        "Supplier-published twisting, warping, weaving, warp-knitting, chopping and cutting equipment.",
      url: "https://www.zsfiberglass.com/about-us/equipment/",
      format: "Manufacturing equipment",
    },
    {
      title: "中盛玻纤认证与测试资料",
      titleEn: "Zhongsheng Certification & Test Document Library",
      description: "灭火毯、玻纤网格、涂覆玻纤布及汽车灭火毯的公开文件入口。",
      descriptionEn:
        "Supplier-hosted document directory for fire blankets, fiberglass mesh, coated fabrics and vehicle fire blankets.",
      url: "https://www.zsfiberglass.com/about-us/certifications/",
      format: "Certification document directory",
    },
    {
      title: "部分铭辰牌灭火毯召回公告",
      titleEn: "Mingchen Fire Blanket Recall Notice",
      description:
        "国家市场监管总局缺陷产品召回技术中心发布的 2025 年 12 月召回信息，采购相关产品前应核验。",
      descriptionEn:
        "December 2025 notice from China's product-recall authority; buyers should review it before qualifying affected fire-blanket products.",
      url: "https://www.samrdprc.org.cn/xfpzh/xfpgnzh/202512/t20251231_114888.html",
      format: "Regulatory notice",
    },
    {
      title: "中盛玻纤联系方式",
      titleEn: "Zhongsheng Fiberglass Contact Directory",
      description: "官网公开的姜堰工厂地址、电话与销售邮箱。",
      descriptionEn:
        "Official Jiangyan factory address, telephone and sales email.",
      url: "https://www.zsfiberglass.com/contact-us/",
      format: "Contact directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-06T00:00:00.000Z"),
  logo: "/supplier-assets/zhongsheng-fiberglass-logo.png",
  contactEmail: "vickytang@mccomposite.com",
  contactPhone: "+86 152 5266 8039",
  address:
    "Industrial Concentration Zone of Dalun Town, Jiangyan District, Taizhou, Jiangsu, China",
  website: "https://www.zsfiberglass.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 17,
  viewCount: 0,
  capabilities: [
    "fiberglass fabric",
    "high-silica fabric",
    "coated fiberglass fabric",
    "fiberglass mesh",
    "fiberglass mat",
    "fire blanket",
    "vehicle fire blanket",
    "welding blanket",
    "fire-resistant bag",
    "glass-fiber textile converting",
    "custom fiberglass textiles",
  ],
  standardsSupported: [
    "ISO 9001",
    "EN 1869:2019",
    "NFPA 701",
    "UL 94",
    "RoHS",
    "EN 13501",
  ],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-06T00:00:00.000Z"),
  updatedAt: new Date("2026-08-06T00:00:00.000Z"),
};
