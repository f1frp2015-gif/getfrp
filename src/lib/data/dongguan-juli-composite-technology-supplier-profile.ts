import type { SupplierListing } from "@/lib/db/schema";

export const DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_ID =
  "sup-dongguan-juli-composite-technology";
export const DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_SLUG =
  "dongguan-juli-composite-technology";

// Curated from Juli's current official website and China Composites Expo's D
// directory / Shenzhen Net Show. The organizer uses the earlier/alternate name
// 东莞市聚力玻纤制品有限公司 while the current official site identifies
// 东莞市聚力复合材料科技有限公司. The shared Juli identity, founder narrative,
// product families and Dongguan location support one deduplicated profile, but
// GetFRP does not claim an independently verified corporate-name change. The
// current official header logo was downloaded on 2026-08-26 from:
// https://omo-oss-image.thefastimg.com/portal-saas/pg2024013110150491818/cms/image/9a582194-4cc3-4d59-b743-ad927d12c1ac.png
export const DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_PROFILE: SupplierListing = {
  id: DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_ID,
  name: "东莞市聚力复合材料科技有限公司",
  nameEn: "Dongguan Juli Composite Technology Co., Ltd.",
  slug: DONGGUAN_JULI_COMPOSITE_TECHNOLOGY_SUPPLIER_SLUG,
  location: "广东东莞",
  locationEn: "Dongguan, Guangdong, China",
  province: "广东",
  category: "manufacturer",
  products: [
    "碳纤维管、棒、板、条与异型材",
    "碳纤维模压件与定制异形件",
    "碳纤维卷管和拉缠管",
    "玻璃纤维棒、管及拉挤型材",
    "玻纤-碳纤混杂增强型材",
    "芳纶与玄武岩纤维定制复材制品",
    "碳纤维潜水鱼枪与体育用品部件",
    "机器人、无人机、汽车和医疗设备用定制 CFRP 部件",
  ],
  productsEn: [
    "Carbon fiber tubes, rods, sheets, strips and custom profiles",
    "Carbon fiber compression-molded parts and custom shapes",
    "Roll-wrapped and pullwound carbon fiber tubes",
    "Fiberglass FRP rods, tubes and pultruded profiles",
    "Fiberglass-carbon-fiber hybrid reinforced profiles",
    "Custom aramid- and basalt-fiber composite products",
    "Carbon fiber spearguns and sporting-goods components",
    "Custom CFRP parts for robots, drones, automotive and medical equipment",
  ],
  processList: [
    "碳纤维与玻纤拉挤成型",
    "连续纤维拉缠/拉编成型",
    "预浸料卷管成型",
    "纤维缠绕成型",
    "热压罐成型",
    "压缩模塑",
    "碳纤、玻纤、芳纶与玄武岩混杂设计",
    "按图开发、样件与批量定制",
  ],
  processListEn: [
    "Carbon-fiber and fiberglass pultrusion",
    "Continuous-fiber pullwinding and pull-braiding",
    "Prepreg roll wrapping",
    "Fiber winding",
    "Autoclave molding",
    "Compression molding",
    "Carbon, glass, aramid and basalt hybrid-reinforcement design",
    "Drawing-based development, prototypes and repeat custom production",
  ],
  established: 2011,
  verified: false,
  description:
    "东莞市聚力复合材料科技有限公司现行官网将企业定位为碳纤维和玻璃纤维产品研发、生产与销售企业，公开 2011 年成立、塘厦生产地址，以及管、棒、板、型材、模压件、潜水鱼枪和定制零部件。中国国际复材展的 D 字母展厅及深圳网上展厅以东莞市聚力玻纤制品有限公司 / DONGGUAN JULI FRP PRODUCTS CO., LTD. 收录同一 Juli 产品体系，列出 GFRP、CFRP、KFRP 棒、管、条、异型材和拉缠/卷制管。本页基于品牌、产品、创办人叙述和东莞位置将两种名称去重为一个供应商资料，但不把名称变化描述为已独立核验的工商更名。",
  descriptionEn:
    "Dongguan Juli Composite Technology Co., Ltd. is the identity on the current official website, which presents a Dongguan developer and manufacturer of carbon-fiber and fiberglass products, dates the business to 2011 and publishes tubes, rods, sheets, profiles, molded parts, spearguns and custom components. China Composites Expo's D directory and Shenzhen Net Show use the earlier or alternate identity Dongguan Juli FRP Products Co., Ltd. and list the same Juli product system: GFRP, CFRP and KFRP rods, tubes, strips, complex profiles and pullwound or roll-wrapped tubes. GetFRP deduplicates the two names into one supplier profile based on the shared brand, product scope, founder narrative and Dongguan location, but does not present the name difference as an independently verified corporate rename.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "聚力官网按材料、成型和应用展示产品：碳纤维管、板、棒、条、型材和模压件，玻纤棒及其他玻纤制品，以及机器人、运动、无人机、汽车等定制零件；企业简介公开拉挤、缠绕、卷管、热压罐和模压工艺。复材展补充列出拉缠/拉编与玻纤、碳纤、芳纶增强及混杂组合。采购方应把“可定制”转化为受控技术规格。碳纤维管/棒 RFQ 要定义外形、内外径、壁厚、长度、直线度、同心度、铺层或编织角、纤维与树脂、表面织纹、光泽、端部、孔槽、胶接和载荷；碳板/条要注明尺寸、厚度、铺层方向、平面度、A/B 面、孔加工、边缘封闭和允许外观缺陷。玻纤拉挤棒、管和型材应锁定截面、公差、树脂、玻纤种类、表面毡、纵横向性能、电绝缘、阻燃、UV、耐介质和温度。模压、热压罐、缠绕或卷管定制件应附图纸版本、材料与铺层规范、模具所有权、固化、首件、无损/破坏性试验、修补和批量检验计划。机器人臂、无人机、汽车、医疗或体育部件不能仅凭应用分类证明适用性；须按照实际载荷、疲劳、冲击、平衡、环境、清洁、法规和接口进行验证。潜水鱼枪等体育产品需确认尺寸、海水耐久、冲击、表面、装配和责任边界。供应商应提供拟量产地点和工艺、当前 TDS/SDS、原料批次和冷链、铺层/拉挤/固化记录、尺寸和外观报告、代表性样件、测试方法、CoA 字段、追溯、变更通知及不合格处置。对长管长杆，应明确最大连续长度、接头、端保护、捆扎、托架、木箱和集装箱支撑；对 Class-A 碳纹件，应建立光泽、纹理、纤维歪斜、印透、针孔、波纹和色差样板。报价应拆分模具、试样、CNC、涂装、检验、包装、MOQ、交期和 Incoterm。官网当前 Logo 已于 2026-08-26 从页面实际引用的官方 CDN 资源下载并裁除透明边距，完整标识存储在 GetFRP 本地，不再热链第三方资源。本轮未取得完整现行证书文件，认证数组保持为空。",
  productsServicesSummaryEn:
    "Juli's official site organizes its offer by material, process and application: carbon-fiber tubes, sheets, rods, strips, profiles and molded parts; fiberglass rods and other glass products; and custom robot, sports, drone and automotive components. Its company overview publishes pultrusion, winding, roll wrapping, autoclave and compression molding, while the expo adds pullwinding or pull-braiding and glass, carbon, aramid and hybrid reinforcement combinations. A buyer should turn the broad custom capability into a controlled specification. A carbon tube or rod RFQ needs shape, inside and outside dimensions, wall, length, straightness, concentricity, lay-up or braid angle, fiber and resin, cosmetic weave, gloss, ends, holes or slots, bonding and load. Carbon sheets and strips need size, thickness, orientation, flatness, A and B faces, machining, sealed edges and cosmetic limits. Pultruded fiberglass rods, tubes and profiles require section, tolerances, resin, glass form, veil, longitudinal and transverse properties, electrical, flame, UV, chemical and temperature requirements. A molded, autoclaved, wound or roll-wrapped custom part needs drawing revision, material and lay-up, mold ownership, cure, first article, nondestructive or destructive test, repair and recurring inspection. Robot arms, drones, automotive, medical and sporting categories do not prove fitness; validate actual load, fatigue, impact, balance, environment, cleanliness, regulation and interfaces. A speargun or sporting product needs dimensions, saltwater durability, impact, finish, assembly and liability boundaries. Require proposed production site and route, current TDS and SDS, raw-material lot and cold-chain history, lay-up, pulling or cure records, dimensional and cosmetic reports, representative samples, test methods, COA fields, traceability, change notification and nonconformance handling. Long tubes and rods need continuous-length limit, joints, end protection, bundles, supports, crates and container bracing. Class-A carbon surfaces need master limits for gloss, weave, fiber distortion, print-through, pinholes, waviness and color. Separate tooling, trials, CNC, coating, inspection, packing, MOQ, lead time and Incoterm. The site's complete logo was downloaded on 2026-08-26 from the exact CDN asset referenced by the official header, trimmed only to remove transparent canvas, and stored locally by GetFRP rather than hotlinked. No complete current certificate was reviewed, so no certification is recorded as verified.",
  ecatalogs: [
    {
      title: "聚力复合材料官网",
      titleEn: "Official Juli Composite Website",
      description: "现行企业名称、产品、工艺、应用与联系入口。",
      descriptionEn: "Current company identity, products, processes, applications and contact entry point.",
      url: "https://www.carbonfiber360.com/",
      format: "Official website",
    },
    {
      title: "聚力公司简介",
      titleEn: "Juli Company Profile",
      description: "成立年份、生产地点、工艺和企业自述规模。",
      descriptionEn: "Published start, production location, processes and company-claimed scale.",
      url: "https://www.carbonfiber360.com/about.html",
      format: "Company profile",
    },
    {
      title: "聚力产品中心",
      titleEn: "Juli Product Center",
      description: "碳纤维、玻纤与定制复材制品目录。",
      descriptionEn: "Official carbon, glass and custom composite product directory.",
      url: "https://www.carbonfiber360.com/product/5/",
      format: "Product directory",
    },
    {
      title: "聚力生产工艺",
      titleEn: "Juli Manufacturing Processes",
      description: "模压、热压罐、卷制与拉挤工艺入口。",
      descriptionEn: "Official compression, autoclave, roll-wrapping and pultrusion entries.",
      url: "https://www.carbonfiber360.com/Pultruded-Process.html",
      format: "Process page",
    },
    {
      title: "聚力官方联系方式",
      titleEn: "Juli Official Contact Page",
      description: "东莞地址、电话与业务邮箱。",
      descriptionEn: "Dongguan address, telephone and business email.",
      url: "https://www.carbonfiber360.com/Contact.html",
      format: "Official contact",
    },
    {
      title: "中国国际复材展 D 字母展商页",
      titleEn: "China Composites Expo Exhibitors — D",
      description: "聚力展商旧/备用名称和制品范围。",
      descriptionEn: "Organizer source for the earlier/alternate Juli identity and product scope.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=300",
      format: "Exhibitor directory",
    },
    {
      title: "深圳复材展聚力网上展厅",
      titleEn: "CCE Shenzhen Juli Net Show",
      description: "英文展商身份、拉挤/拉缠/卷管与材料组合。",
      descriptionEn: "English organizer profile for pultruded, pullwound and roll-wrapped products.",
      url: "https://shenzhen.chinacompositesexpo.com/en/netshow-1368-91123416.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-26T00:00:00.000Z"),
  logo: "/supplier-assets/dongguan-juli-logo.png",
  contactEmail: "sales18@julitech.cn",
  contactPhone: "+86 134 1262 9149",
  address: "No. 5 Chuangxing Road, Shitanpu, Tangxia Town, Dongguan, Guangdong, China",
  website: "https://www.carbonfiber360.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 25,
  viewCount: 0,
  capabilities: [
    "carbon fiber tubes, rods and sheets",
    "pultruded fiberglass rods and profiles",
    "pullwound and roll-wrapped composite tubes",
    "compression-molded carbon parts",
    "autoclave molding",
    "hybrid fiber-reinforced products",
    "sporting-goods composite components",
    "custom CFRP component development",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-26T00:00:00.000Z"),
};
