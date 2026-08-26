import type { SupplierListing } from "@/lib/db/schema";

export const LANXI_JOEN_FIBERGLASS_SUPPLIER_ID =
  "sup-lanxi-joen-fiberglass";
export const LANXI_JOEN_FIBERGLASS_SUPPLIER_SLUG =
  "lanxi-joen-fiberglass";

// Curated from JOEN's current official company, product and contact pages plus
// the CCE directory. The official logo was downloaded from hzglass.com and
// losslessly preserved at web display dimensions on 2026-08-25.
export const LANXI_JOEN_FIBERGLASS_SUPPLIER_PROFILE: SupplierListing = {
  id: LANXI_JOEN_FIBERGLASS_SUPPLIER_ID,
  name: "兰溪庄原玻璃纤维有限公司",
  nameEn: "Lanxi Joen Fiberglass Co., Ltd.",
  slug: LANXI_JOEN_FIBERGLASS_SUPPLIER_SLUG,
  location: "浙江兰溪",
  locationEn: "Lanxi, Zhejiang, China",
  province: "浙江",
  category: "manufacturer",
  products: [
    "高性能玻璃纤维织物和玻纤布",
    "硅橡胶涂覆玻璃纤维布",
    "铝箔复合玻璃纤维织物",
    "玻璃纤维防火毯",
    "车辆用大尺寸防火毯",
    "焊接防护毯和焊接帘",
    "防火文件袋和电池防护袋",
    "焊接隔间与模块化安全作业间",
    "裁切、缝制和边缘增强玻纤制品",
  ],
  productsEn: [
    "High-performance fiberglass fabrics and fiberglass cloth",
    "Silicone-coated fiberglass fabric",
    "Aluminum-foil laminated fiberglass fabric",
    "Fiberglass fire blankets",
    "Large vehicle fire blankets",
    "Welding blankets and welding curtains",
    "Fire-resistant document and battery safety bags",
    "Welding booths and modular safety enclosures",
    "Cut, sewn and edge-reinforced fiberglass products",
  ],
  processList: [
    "玻璃纤维织造",
    "织物后处理",
    "硅橡胶涂覆和固化",
    "铝箔与玻纤织物复合",
    "卷材分切和定尺裁切",
    "防火毯与安全袋缝制",
    "边缘包覆、孔眼和五金装配",
    "焊接隔间和安全作业间组装",
    "成品尺寸与外观检验",
  ],
  processListEn: [
    "Fiberglass weaving",
    "Fabric after-treatment and finishing",
    "Silicone-rubber coating and curing",
    "Aluminum-foil lamination to fiberglass fabric",
    "Roll slitting and cut-to-size conversion",
    "Fire-blanket and safety-bag sewing",
    "Edge binding, eyelet and hardware assembly",
    "Welding-booth and safety-enclosure assembly",
    "Finished-dimension and appearance inspection",
  ],
  established: null,
  verified: false,
  description:
    "兰溪庄原玻璃纤维有限公司以 JOEN 品牌提供玻纤织物及其涂覆、复合和缝制制品。官网当前目录支持玻纤布、硅胶涂覆布、铝箔复合布、防火毯、车辆防火毯、焊接毯、防火袋及焊接隔间。官网把经营历史追溯至 2001 年，而公开法人年份存在不同口径，本页不把品牌/经营起点直接写成当前法人成立年份。官网还介绍南京涂层企业和江西关联公司，相关涂覆或转化产品在询价时必须确认实际制造法人和场地，不自动归入兰溪主体。",
  descriptionEn:
    "Lanxi Joen Fiberglass Co., Ltd. supplies fiberglass textiles and coated, laminated or sewn conversions under the JOEN name. Its current official catalog supports fiberglass cloth, silicone-coated glass fabric, aluminum-foil laminated glass fabric, fire blankets, vehicle fire blankets, welding protection, fire-resistant bags and welding or safety enclosures. GetFRP maps the measured-demand phrase fiberglass cloth to the published glass fabric and does not infer raw roving or unrelated composite panels. The official site traces the operating business to 2001, while public legal-entity sources use a different date; the profile therefore leaves establishment blank rather than converting a brand or operating-history date into a verified incorporation date. The website also discusses an acquired Nanjing coating company and a Jiangxi affiliate. Buyers must confirm which legal entity and plant manufactures each coated or converted item instead of automatically assigning affiliate operations to the Lanxi company.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "庄原官网展示从玻纤织造、后处理、涂覆、复合到裁切缝制的产品链。玻纤布询价应明确玻璃类型、纱支、组织、克重、厚度、幅宽、卷长、浸润或后处理、散边和树脂/应用相容性。硅胶布需确认单/双面、涂覆量、颜色、耐温、阻燃、耐油和柔韧；铝箔复合布需确认箔厚、胶层、反射面、剥离和接缝。防火毯、焊接毯、车辆毯和安全袋需按实际火源、尺寸、折叠展开、人机操作、缝线、五金、包装和测试报告批准。",
  productsServicesSummaryEn:
    "JOEN's official site presents a chain from fiberglass weaving and after-treatment through coating, lamination, cutting, sewing and finished safety products. A base-fabric RFQ should define glass type, yarn construction, weave, areal weight, thickness, usable width, roll length, finish or sizing, edge fray, appearance and compatibility with the intended coating, resin or thermal duty. Silicone-coated fiberglass inquiries need one- or two-side construction, silicone chemistry and loading, color, thickness, continuous and peak temperature cycle, flame behavior, oil or chemical exposure, flexibility and adhesion. Aluminum-foil laminated fabric additionally requires foil gauge, adhesive system, reflective-face orientation, peel target, water-vapor or thermal objective and seam construction. Fire blankets, welding blankets, vehicle blankets and fire-resistant bags are finished safety products, not interchangeable fabric rolls. The RFQ should state the actual hazard, object dimensions, deployment method, number and position of handles, seam and thread, edge binding, eyelets or other hardware, folding and storage arrangement, labeling, packaging and model-specific test evidence. Welding booths and modular safety enclosures require layout drawings, frame responsibility, curtain overlap, viewing windows, ventilation or extraction interfaces and installation boundaries. JOEN's corporate page describes a 2001 operating origin, acquisition of a Nanjing coating business and later investment in a Jiangxi affiliate. GetFRP does not translate those statements into a verified incorporation year or assume that all affiliate products are made by the Lanxi legal entity. Quotations should identify manufacturer, factory, seller, country of origin and certificate holder. Published management systems, capacity, flame ratings and performance remain supplier claims until current reports and certificates are matched to the exact product, legal holder, address, scope and validity.",
  ecatalogs: [
    { title: "庄原官网", titleEn: "JOEN Official Website", description: "公司、织物和防火制品入口。", descriptionEn: "Official company, fabric and fire-product entry.", url: "https://www.hzglass.com/cn/", format: "Official website" },
    { title: "庄原公司简介", titleEn: "About JOEN", description: "业务链和关联运营历史。", descriptionEn: "Published operating chain and affiliate history.", url: "https://www.hzglass.com/cn/page-6925.html", format: "Company page" },
    { title: "庄原产品中心", titleEn: "JOEN Products", description: "玻纤布、涂覆布和安全制品目录。", descriptionEn: "Fiberglass, coated-fabric and safety-product catalog.", url: "https://www.hzglass.com/cn/cate-6923.html", format: "Product directory" },
    { title: "庄原联系页", titleEn: "JOEN Contact", description: "兰溪工厂和出口联系方式。", descriptionEn: "Lanxi factory and export contact details.", url: "https://www.hzglass.com/cn/page-6926.html", format: "Contact page" },
    { title: "中国国际复材展 L 字母页", titleEn: "China Composites Expo — L Directory", description: "兰溪庄原展商来源。", descriptionEn: "Organizer source for the JOEN exhibitor identity.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=L", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/lanxi-joen-logo.png",
  contactEmail: "export@hzglass.com",
  contactPhone: "+86 571 8814 0461",
  address: "No. 8 Jianshe Road, Hengxi Town, Lanxi, Zhejiang, China",
  website: "https://www.hzglass.com/cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 27,
  viewCount: 0,
  capabilities: ["fiberglass fabric", "silicone-coated fiberglass", "foil-laminated glass fabric", "fire blankets", "vehicle fire blankets", "welding protection", "safety bags", "cutting and sewing"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
