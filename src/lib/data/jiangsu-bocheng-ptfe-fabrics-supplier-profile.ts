import type { SupplierListing } from "@/lib/db/schema";

export const JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_ID =
  "sup-jiangsu-bocheng-ptfe-fabrics";
export const JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_SLUG =
  "jiangsu-bocheng-ptfe-fabrics";

// Curated from Bocheng's current official company, product and contact pages
// plus the China Composites Expo directory. The official logo was downloaded
// from the current bcflon.com homepage on 2026-08-25.
export const JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_PROFILE: SupplierListing = {
  id: JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_ID,
  name: "江苏博诚新科技材料有限公司",
  nameEn: "Jiangsu Bocheng New Tech Materials Co., Ltd.",
  slug: JIANGSU_BOCHENG_PTFE_FABRICS_SUPPLIER_SLUG,
  location: "江苏泰兴",
  locationEn: "Taixing, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "棕色 PTFE 涂覆玻璃纤维布",
    "黑色防静电 PTFE 涂覆玻璃纤维布",
    "PTFE 玻纤基自粘胶带",
    "PTFE 开孔网格输送带",
    "PTFE 涂覆玻纤输送带",
    "硅橡胶涂覆玻璃纤维布",
    "定制宽度、长度和颜色的涂覆玻纤卷材",
    "裁切、模压和成形的 PTFE 涂覆织物制品",
  ],
  productsEn: [
    "Brown PTFE-coated fiberglass fabric and cloth",
    "Black antistatic PTFE-coated fiberglass fabric",
    "PTFE fiberglass-cloth adhesive tape",
    "PTFE open-mesh conveyor belts",
    "PTFE-coated fiberglass conveyor belts",
    "Silicone-coated fiberglass fabric",
    "Coated fiberglass rolls customized for width, length and color",
    "Cut, molded and formed PTFE-coated fabric components",
  ],
  processList: [
    "玻璃纤维基布浸渍",
    "PTFE 分散液多道涂覆",
    "防静电涂层配方加工",
    "硅橡胶涂覆和固化",
    "胶粘剂涂布与离型衬复合",
    "网格带和输送带接头制作",
    "卷材分切和定尺裁切",
    "模压、成形及定制加工",
  ],
  processListEn: [
    "Fiberglass base-cloth impregnation",
    "Multiple-pass PTFE dispersion coating",
    "Antistatic coating formulation and finishing",
    "Silicone-rubber coating and curing",
    "Adhesive coating and release-liner lamination",
    "Mesh and conveyor-belt joint fabrication",
    "Roll slitting and cut-to-length conversion",
    "Molding, forming and custom fabrication",
  ],
  established: null,
  verified: false,
  description:
    "江苏博诚新科技材料有限公司在泰兴生产 PTFE 和硅橡胶涂覆玻纤织物、玻纤胶带及工业输送带。官网和中国国际复材展资料共同支持棕色与黑色防静电 PTFE 玻纤布、PTFE 自粘胶带、开孔网格带、涂覆输送带及硅胶玻纤布。本页只将 fiberglass cloth 映射到有官网产品依据的涂覆玻纤基材，不把企业描述为原始玻璃纤维纱或未涂覆增强织物生产商。成立年份、体系、产能和适用合规均留待与现行法人文件和具体产品报告核对。",
  descriptionEn:
    "Jiangsu Bocheng New Tech Materials Co., Ltd. manufactures PTFE- and silicone-coated fiberglass textiles, fiberglass-cloth tapes and industrial belts in Taixing. Its current official catalog and China Composites Expo listing support brown PTFE glass fabric, black antistatic PTFE glass fabric, PTFE adhesive tape, open-mesh and coated conveyor belts, silicone-coated fiberglass, and converted components. GetFRP maps the measured-demand phrase fiberglass cloth only to these published coated-glass substrates; it does not present Bocheng as a producer of raw glass fiber, roving or uncoated reinforcement fabric. The official site offers dimensional and performance customization, but buyers must confirm the exact base cloth, coating formulation, conversion scope and manufacturing location in the quotation. Establishment date, management systems, capacity and regulatory suitability remain unverified until matched to current legal-entity and product files.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "博诚官网的供货范围围绕 PTFE 涂覆玻纤布、胶带、网格带、输送带和硅胶布展开。询价应明确基布组织与克重、成品厚度、涂覆量、颜色、孔隙率、表面电阻、离型、耐温、幅宽、卷长、接头和边缘增强。防静电、普通、开孔网格及硅胶体系不能仅按通用“特氟龙布”互换。胶带需另行确认胶系、剥离力、离型衬、卷芯和储存期；输送带项目需提交周长、速度、张力、温度、接头与跟踪要求；裁切或模压件需冻结图纸、公差和包装。",
  productsServicesSummaryEn:
    "Bocheng's official catalog centers on PTFE-coated fiberglass fabric, fiberglass-cloth adhesive tape, open-mesh and coated conveyor belts, silicone-coated fabric, and converted components. A fabric RFQ should define the glass base-cloth weave and mass, finished thickness, PTFE loading, number of coating passes, color, surface texture, porosity, electrical surface resistance where antistatic performance is required, release behavior, temperature cycle, usable width and roll length. Brown general-purpose, black antistatic, open-mesh and silicone-coated constructions serve different duties and should not be substituted under a generic Teflon-cloth description. Tape inquiries additionally need adhesive chemistry, peel target, service temperature, release liner, roll core, width, length and shelf life. Conveyor-belt projects should provide circumference, width, mesh or solid construction, joint type, edge reinforcement, guides or fasteners, working tension, line speed, operating temperature, tracking tolerance and contact material. Cut, molded or formed components require a controlled drawing, dimensional tolerances, edge treatment, tooling responsibility, inspection plan and packaging. Website statements that dimensions, coating color and performance can be customized should be converted into a written specification and approved sample rather than treated as an unlimited capability guarantee. Buyers should request current TDS, SDS, lot COA and any application-specific food-contact, electrical or flame documentation, then confirm that each document names the quoted product and responsible legal entity. Published scale, certifications and performance remain supplier claims until that review is complete.",
  ecatalogs: [
    { title: "博诚官网", titleEn: "Bocheng Official Website", description: "公司与主要产品入口。", descriptionEn: "Official company and product entry.", url: "https://www.bcflon.com/", format: "Official website" },
    { title: "博诚公司简介", titleEn: "About Bocheng", description: "企业范围与定制能力。", descriptionEn: "Company scope and published customization.", url: "https://www.bcflon.com/About-Us.html", format: "Company page" },
    { title: "PTFE 涂覆玻纤布", titleEn: "PTFE-Coated Fiberglass Fabric", description: "涂覆玻纤织物目录。", descriptionEn: "Official coated-fiberglass category.", url: "https://www.bcflon.com/products/Ptfe-Coated-Fiberglass-Fabric/", format: "Product category" },
    { title: "PTFE 玻纤胶带", titleEn: "PTFE Adhesive Tape", description: "玻纤基胶带目录。", descriptionEn: "Official fiberglass-cloth tape category.", url: "https://www.bcflon.com/products/Ptfe-Adhesive-Tape/", format: "Product category" },
    { title: "PTFE 网格输送带", titleEn: "PTFE Open-Mesh Conveyor Belt", description: "网格输送带目录。", descriptionEn: "Official open-mesh belt category.", url: "https://www.bcflon.com/products/Ptfe-Open-Mesh-Conveyor-Belt/", format: "Product category" },
    { title: "博诚联系页", titleEn: "Bocheng Contact", description: "泰兴地址、电话和邮箱。", descriptionEn: "Published Taixing address, phone and email.", url: "https://www.bcflon.com/Contact-Us.html", format: "Contact page" },
    { title: "中国国际复材展 J 字母页", titleEn: "China Composites Expo — J Directory", description: "展商主体和产品来源。", descriptionEn: "Organizer source for exhibitor identity and scope.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=J&kind_id=40", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/jiangsu-bocheng-logo.png",
  contactEmail: "Loganji@k-fabco.com",
  contactPhone: "+86 157 2246 5246",
  address: "Jianshe Road East, Gensi Industry Park, Gensi Town, Taixing, Jiangsu, China",
  website: "https://www.bcflon.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 26,
  viewCount: 0,
  capabilities: ["PTFE-coated fiberglass fabric", "antistatic coated fabric", "PTFE adhesive tape", "silicone-coated fiberglass", "open-mesh conveyor belts", "coated conveyor belts", "roll slitting", "custom converted components"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
