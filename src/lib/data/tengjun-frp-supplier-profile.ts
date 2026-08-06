import type { SupplierListing } from "@/lib/db/schema";

export const TENGJUN_FRP_SUPPLIER_ID = "sup-tengjun-frp";
export const TENGJUN_FRP_SUPPLIER_SLUG = "hebei-tengjun-frp";

// Curated from Hebei Tengjun FRP's official English website, company,
// product, equipment, export-market and contact pages. The official website
// does not state a founding year or publish current management-system
// certificates, so those fields remain unclaimed. Company-published capacity
// and export statements remain separate from GetFRP verification. The site
// does not expose a Chinese legal name, so its published English identity is
// preserved in both name fields rather than translating a legal entity name.
// Official logo source:
// https://www.tengjunfrp.com/upload/7619/20240428133531921242.png
export const TENGJUN_FRP_SUPPLIER_PROFILE: SupplierListing = {
  id: TENGJUN_FRP_SUPPLIER_ID,
  name: "Hebei Tengjun FRP Co., Ltd.",
  nameEn: "Hebei Tengjun FRP Co., Ltd.",
  slug: TENGJUN_FRP_SUPPLIER_SLUG,
  location: "河北衡水枣强",
  locationEn: "Zaoqiang, Hengshui, Hebei, China",
  province: "河北",
  category: "manufacturer",
  products: [
    "模塑与拉挤玻璃钢格栅、盖板及平台踏步",
    "玻璃钢拉挤结构型材、异型材、梯具与护栏",
    "缠绕玻璃钢储罐、管道及水箱",
    "玻璃钢电缆桥架、平板、井盖与标志桩",
    "SMC 模压件、机械罩壳及定制玻璃钢部件",
    "冷却塔、环保设备与玻璃纤维增强筋",
  ],
  productsEn: [
    "Molded and pultruded FRP grating, covers and platform components",
    "Pultruded FRP structural profiles, custom sections, ladders and rails",
    "Filament-wound FRP storage tanks, pipes and water tanks",
    "FRP cable tray, flat sheet, manhole covers and marker posts",
    "SMC molded products, machine covers and custom FRP parts",
    "FRP cooling towers, environmental equipment and fiberglass rebar",
  ],
  processList: [
    "连续拉挤成型",
    "微机控制纤维缠绕",
    "树脂浇注模塑格栅",
    "SMC 模压成型",
    "手糊与喷射成型",
    "按图、样品与应用要求定制设计",
  ],
  processListEn: [
    "Continuous pultrusion",
    "Computer-controlled filament winding",
    "Resin-cast molded grating",
    "SMC compression molding",
    "Hand lay-up and spray-up",
    "Custom design from drawings, samples and application requirements",
  ],
  established: null,
  verified: false,
  description:
    "河北腾骏玻璃钢英文官网将 Hebei Tengjun FRP Co., Ltd. 描述为集研发、设计、生产、加工与销售于一体的玻璃钢企业，公开地址位于河北省衡水市枣强县。其当前产品目录覆盖玻璃钢格栅、平板、电缆桥架、储罐、拉挤型材、井盖、标志桩、水箱、管道、SMC 模压件、冷却塔和玻璃纤维增强筋等。官网称相关产品销往 60 多个国家和地区；该出口范围为企业公开信息，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Hebei Tengjun FRP Co., Ltd.'s official English website describes an integrated FRP business covering product development, design, manufacturing, processing and sales from Zaoqiang County in Hengshui, Hebei. Its current directory spans FRP grating, flat sheet, cable tray, storage tanks, pultruded profiles, manhole covers, marker posts, water tanks, pipes, SMC products, cooling towers and fiberglass rebar. The company states that selected products reach more than 60 countries and regions; this export-market statement is company-published and has not been independently verified by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "腾骏官网设备页称工厂拥有 21 套大型微机控制玻璃钢缠绕生产线、20 套拉挤设备、200 套格栅模具，以及合计 1,590 套玻璃钢制品生产设备和模具；产品页还公开拉挤、缠绕、树脂浇注模塑、SMC、手糊和喷射等工艺。以上数量均为企业公开口径，采购方应通过实时工厂审核、设备清单和产能记录确认。针对具体项目，还应核验树脂体系、玻纤牌号、阻燃与耐候性能、结构荷载表、尺寸公差、检测标准、现行证书、模具费、MOQ、交期、出口包装及批次追溯。",
  productsServicesSummaryEn:
    "Tengjun's official equipment page states that the factory operates 21 large computer-controlled FRP winding lines, 20 pultrusion units, 200 grating molds, and 1,590 sets of FRP production equipment and molds in total. Product pages also publish pultrusion, filament winding, resin-cast molding, SMC, hand lay-up and spray-up capabilities. These counts are company-published and should be confirmed through a current factory audit, equipment register and capacity records. For a specific project, buyers should also validate the resin system, glass reinforcement, fire and weathering performance, structural load tables, dimensional tolerances, test standards, current certificates, tooling charges, MOQ, lead time, export packing and batch traceability.",
  ecatalogs: [
    {
      title: "河北腾骏玻璃钢英文官网",
      titleEn: "Hebei Tengjun FRP Official Website",
      description: "公司、产品类别、公开制造能力、出口联系信息与询盘入口总览。",
      descriptionEn:
        "Official overview of the company, product categories, published manufacturing capabilities, export contacts and inquiry channel.",
      url: "https://www.tengjunfrp.com/",
      format: "Official website",
    },
    {
      title: "腾骏公司介绍",
      titleEn: "Tengjun Company Profile",
      description: "官网发布的业务范围、所在地、经营理念与产品组合介绍。",
      descriptionEn:
        "Official description of the business scope, location, operating approach and product portfolio.",
      url: "https://www.tengjunfrp.com/about.html",
      format: "Company profile",
    },
    {
      title: "腾骏产品目录",
      titleEn: "Tengjun FRP Product Directory",
      description: "格栅、型材、储罐、桥架、管道、SMC 制品及其他玻璃钢产品入口。",
      descriptionEn:
        "Official directory for grating, profiles, tanks, cable tray, pipes, SMC products and other FRP products.",
      url: "https://www.tengjunfrp.com/products.html",
      format: "Product directory",
    },
    {
      title: "玻璃钢拉挤型材",
      titleEn: "Pultruded FRP Profiles",
      description: "拉挤工艺、型材截面、公开性能与应用领域说明。",
      descriptionEn:
        "Official overview of the pultrusion process, profile shapes, published properties and application sectors.",
      url: "https://www.tengjunfrp.com/pultruded-frp-profiles",
      format: "Technical directory",
    },
    {
      title: "腾骏生产设备",
      titleEn: "Tengjun Production Equipment",
      description: "官网公开的缠绕线、拉挤设备、格栅模具及其他生产设备信息。",
      descriptionEn:
        "Company-published inventory of winding lines, pultrusion equipment, grating molds and other production assets.",
      url: "https://www.tengjunfrp.com/about/euipment.html",
      format: "Capability page",
    },
    {
      title: "腾骏出口市场",
      titleEn: "Tengjun Export Market",
      description: "企业公开的主要出口产品与覆盖市场说明。",
      descriptionEn:
        "Company-published overview of exported product groups and destination markets.",
      url: "https://www.tengjunfrp.com/about/market.html",
      format: "Market overview",
    },
    {
      title: "腾骏联系方式",
      titleEn: "Tengjun Contact Details",
      description: "枣强工厂地址、电话、邮箱与官网询盘表单。",
      descriptionEn:
        "Official Zaoqiang address, telephone, email and website inquiry form.",
      url: "https://www.tengjunfrp.com/contact.html",
      format: "Contact page",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/tengjun-frp-logo.png",
  contactEmail: "hbtj@tengjunfrp.com",
  contactPhone: "+86 198 4488 3333",
  address:
    "No. 689, Industrial Park, Zaoqiang County, Hengshui, Hebei, China",
  website: "https://www.tengjunfrp.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 14,
  viewCount: 0,
  capabilities: [
    "molded FRP grating",
    "pultruded FRP grating",
    "pultruded structural profiles",
    "custom pultruded profiles",
    "filament-wound tanks and pipes",
    "FRP cable tray",
    "SMC compression molding",
    "hand lay-up and spray-up",
    "FRP cooling towers",
    "fiberglass rebar",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
