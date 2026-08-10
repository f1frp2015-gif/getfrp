import type { SupplierListing } from "@/lib/db/schema";

export const EASTFRP_SUPPLIER_ID = "sup-anhui-anche-eastfrp";
export const EASTFRP_SUPPLIER_SLUG = "anhui-anche-east-frp";

// Curated from Anhui Anche New Material Co., Ltd.'s current official English
// website at eastfrp.com. Factory, staffing, product, performance, delivery and
// testing statements are company-published and remain unverified by GetFRP.
// The site displays certificate images without enough searchable scope,
// certificate-number or validity detail to support certification tags, so none
// are inferred here. The current official ANCHE wordmark was downloaded from:
// https://ijrorwxhoijlmk5p.ldycdn.com/cloud/mpBqkKorRmmSoljlolqp/gongsilogo.jpg
export const EASTFRP_SUPPLIER_PROFILE: SupplierListing = {
  id: EASTFRP_SUPPLIER_ID,
  name: "安徽安车新材料有限公司",
  nameEn: "Anhui Anche New Material Co., Ltd.",
  slug: EASTFRP_SUPPLIER_SLUG,
  location: "安徽宣城宣州",
  locationEn: "Xuancheng, Anhui, China",
  province: "安徽",
  category: "manufacturer",
  products: [
    "建筑、洁净空间与工业内装用玻璃钢墙板和平板",
    "冷藏车、干货车、房车、客车及新能源汽车用玻璃钢平板",
    "压花玻璃钢装饰板与卵石纹玻纤板",
    "玻璃钢波纹板与冷却塔用胶衣波纹板",
    "SMC/BMC 模压电气箱体及定制复合材料部件",
    "船舶、轨道交通及工程应用用玻璃钢板材和异形件",
  ],
  productsEn: [
    "FRP wall panels and fiberglass-reinforced plastic flat sheets for commercial interiors, clean spaces and industrial buildings",
    "FRP flat sheets for refrigerated trucks, dry vans, RVs, buses and new-energy vehicles",
    "Embossed FRP decorative panels and pebble-textured fiberglass sheets",
    "FRP corrugated sheets and gel-coated cooling-tower panels",
    "SMC and BMC molded electrical enclosures and custom composite parts",
    "FRP panels and shaped parts for marine, rail-transport and engineering applications",
  ],
  processList: [
    "玻璃钢平板、卷材与墙板生产",
    "胶衣表面与毡基、方格布增强结构",
    "厚度、宽度、长度、颜色及表面效果定制",
    "压花与波纹玻璃钢板生产",
    "SMC/BMC 模压件生产",
    "机械、冲击、耐候、色差、烟密度与氧指数等企业实验室测试（官网公开）",
  ],
  processListEn: [
    "FRP flat-sheet, roll and wall-panel production",
    "Gel-coated surfaces with fiberglass mat or woven-roving constructions",
    "Custom thickness, width, length, color and surface finish",
    "Embossed and corrugated FRP panel production",
    "SMC and BMC compression-molded parts",
    "Company-published mechanical, impact, weathering, color, smoke-density and oxygen-index test capability",
  ],
  established: null,
  verified: false,
  description:
    "安徽安车新材料有限公司官网使用 ANCHE 品牌，并通过 eastfrp.com 展示其位于安徽宣城宣州经济开发区的复合材料业务。官网称工厂占地约 20,000 平方米并设有两条玻璃钢生产线，公开产品包括建筑与洁净空间用 FRP 墙板、冷藏车及房车等运输用平板、压花装饰板、冷却塔用波纹板，以及 SMC/BMC 模压电气箱体和其他复合材料部件。",
  descriptionEn:
    "Anhui Anche New Material Co., Ltd. uses the ANCHE brand and presents its composite-material business through the official EastFRP.com website. The company states that its Xuancheng, Anhui factory covers approximately 20,000 m² and operates two lines for FRP production. Its published range includes FRP wall panels for building and clean-space interiors, flat sheets for refrigerated trucks, RVs and other transport bodies, embossed decorative sheets, corrugated cooling-tower panels, and SMC/BMC-molded electrical enclosures and other composite parts.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "安车官网的 FRP 墙板与平板页面公开了胶衣层、玻纤毡或方格布增强层及基材表面的板材结构，并列出 1.0–3.5 mm 厚度、最大 2,800 mm 宽度、最长 100 m/卷及颜色定制等通用规格。页面还发布了拉伸、弯曲、吸水率、冲击和巴柯尔硬度等典型数据，并引用 GB/T 1447-2005、GB/T 1449-2005、GB/T 1462-2005 与 GB/T 1451-2005 等测试方法；这些数据未附带可下载、可追溯到具体牌号和批次的完整报告。采购方应在询价时锁定树脂与胶衣体系、增强结构、阻燃或食品接触要求、厚度与平整度公差、颜色和纹理标准、板材或卷材尺寸、二次加工、包装、MOQ、交期，并索取与报价结构一致的 TDS、样板、测试报告和现行体系证书。官网展示的“fire-resistant”等产品名称不应在缺少具体测试结构、标准、报告和适用范围时视为已验证等级。",
  productsServicesSummaryEn:
    "Anche's FRP wall-panel and flat-sheet pages describe a construction using a gel-coat surface, fiberglass mat or woven-roving reinforcement and a prepared backing surface. The company publishes generic options of 1.0–3.5 mm thickness, widths up to 2,800 mm, lengths up to 100 m per roll and custom colors. The same pages show typical tensile, flexural, water-absorption, impact and Barcol-hardness values and cite methods including GB/T 1447-2005, GB/T 1449-2005, GB/T 1462-2005 and GB/T 1451-2005, but do not attach complete downloadable reports traceable to a specific grade and batch. Buyers should therefore fix the resin and gel coat, reinforcement construction, fire or food-contact requirement, thickness and flatness tolerances, color and texture standard, sheet or roll dimensions, secondary fabrication, packing, MOQ and lead time in the RFQ, then request the matching TDS, approved sample, test reports and current management-system certificates. Product names such as “fire-resistant” should not be treated as a verified rating without the tested construction, standard, report and application scope.",
  ecatalogs: [
    {
      title: "安车新材英文官网",
      titleEn: "Anhui Anche / East FRP Official Website",
      description: "公司、主要产品、应用、工厂与公开联系方式总览。",
      descriptionEn:
        "Official overview of the company, main product groups, applications, factory and public contact details.",
      url: "https://www.eastfrp.com/",
      format: "Official website",
    },
    {
      title: "安车新材公司介绍",
      titleEn: "Anhui Anche Company Profile",
      description: "官网公开的厂区、生产线、人员、产品范围与实验室概况。",
      descriptionEn:
        "Company-published factory, production-line, staffing, product-range and laboratory overview.",
      url: "https://www.eastfrp.com/About-us.html",
      format: "Company profile",
    },
    {
      title: "玻璃钢墙板产品目录",
      titleEn: "FRP Wall Panels Directory",
      description: "建筑、医院、实验室、冷藏及其他墙面应用用 FRP 板材入口。",
      descriptionEn:
        "Official FRP wall-panel directory for building, hospital, laboratory, refrigerated and other wall applications.",
      url: "https://www.eastfrp.com/products/FRP%2BWall%2BPanels.html",
      format: "Product directory",
    },
    {
      title: "玻璃钢墙板与卷材技术页面",
      titleEn: "FRP Wall Panel and Sheet-Roll Technical Page",
      description: "官网发布的板材结构、尺寸、典型性能、测试方法、包装与交期信息。",
      descriptionEn:
        "Company-published panel construction, dimensions, typical properties, test methods, packing and lead-time information.",
      url: "https://www.eastfrp.com/frp-wall-panels-fiberglass-frp-sheet-roll-grp-sandwich-siding-panel-frp-flat-panel.html",
      format: "Technical product page",
    },
    {
      title: "玻璃钢平板产品目录",
      titleEn: "FRP Flat Panel Directory",
      description: "房车、冷藏车、干货车、客车、船舶及墙面用平板产品入口。",
      descriptionEn:
        "Official flat-panel range for RV, refrigerated and dry-cargo truck, bus, marine and wall applications.",
      url: "https://www.eastfrp.com/FRP-Panel-pl3839954.html",
      format: "Product directory",
    },
    {
      title: "玻璃钢波纹板产品目录",
      titleEn: "FRP Corrugated Sheet Directory",
      description: "冷却塔用及胶衣玻璃钢波纹板产品入口。",
      descriptionEn:
        "Official corrugated-sheet range including cooling-tower and gel-coated FRP panels.",
      url: "https://www.eastfrp.com/FRP-Corrugated-Sheet-pl3729954.html",
      format: "Product directory",
    },
    {
      title: "压花玻璃钢板产品目录",
      titleEn: "Embossed FRP Panel Directory",
      description: "压花、装饰及卵石纹玻璃钢板产品入口。",
      descriptionEn:
        "Official embossed, decorative and pebble-textured FRP panel range.",
      url: "https://www.eastfrp.com/Embossed-FRP-Panel-pl3629954.html",
      format: "Product directory",
    },
    {
      title: "安车新材联系方式",
      titleEn: "Anhui Anche Contact Page",
      description: "官网公开的手机、邮箱、WhatsApp 与宣城地址。",
      descriptionEn:
        "Official mobile, email, WhatsApp and Xuancheng address details.",
      url: "https://www.eastfrp.com/contactus.html",
      format: "Contact page",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-10T00:00:00.000Z"),
  logo: "/supplier-assets/eastfrp-logo.jpg",
  contactEmail: "Jessica.ma@eastfrp.com",
  contactPhone: "+86 173 3375 5091",
  address:
    "Liqiao Development Zone, Xuanzhou District, Xuancheng, Anhui, China",
  website: "https://www.eastfrp.com/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "frp wall panels",
    "fiberglass flat sheets",
    "frp sheet rolls",
    "gel-coated frp panels",
    "embossed frp panels",
    "frp corrugated sheets",
    "refrigerated truck body panels",
    "rv fiberglass panels",
    "smc and bmc molded parts",
    "custom panel dimensions and colors",
  ],
  standardsSupported: [
    "GB/T 1447-2005",
    "GB/T 1449-2005",
    "GB/T 1462-2005",
    "GB/T 1451-2005",
  ],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-10T00:00:00.000Z"),
  updatedAt: new Date("2026-08-10T00:00:00.000Z"),
};
