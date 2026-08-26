import type { SupplierListing } from "@/lib/db/schema";

export const KUNMING_FEIXIANG_FRP_SUPPLIER_ID = "sup-kunming-feixiang-frp";
export const KUNMING_FEIXIANG_FRP_SUPPLIER_SLUG = "kunming-feixiang-frp";

// Curated from Feixiang's current official company, product and contact pages
// plus the CCE directory. The current official logo was downloaded from
// frpladder.com on 2026-08-25.
export const KUNMING_FEIXIANG_FRP_SUPPLIER_PROFILE: SupplierListing = {
  id: KUNMING_FEIXIANG_FRP_SUPPLIER_ID,
  name: "昆明飞翔材料技术有限公司",
  nameEn: "Kunming Feixiang Material Technology Co., Ltd.",
  slug: KUNMING_FEIXIANG_FRP_SUPPLIER_SLUG,
  location: "云南昆明",
  locationEn: "Kunming, Yunnan, China",
  province: "云南",
  category: "manufacturer",
  products: [
    "拉挤玻璃钢结构型材",
    "拉挤玻璃纤维管和实心绝缘杆",
    "玻璃钢光伏支架型材",
    "玻璃钢绝缘人字梯和直梯",
    "多节伸缩绝缘梯",
    "玻璃钢绝缘脚手架和作业平台",
    "玻璃纤维绝缘操作杆与带电作业工具",
    "绝缘围栏、标识和安全防护用品",
    "电力检测仪器和施工工具",
  ],
  productsEn: [
    "Pultruded GFRP structural profiles",
    "Pultruded fiberglass tubes and solid insulating rods",
    "FRP photovoltaic support profiles",
    "Fiberglass A-frame and straight insulating ladders",
    "Multi-section telescopic fiberglass insulating ladders",
    "FRP insulating scaffolds and work platforms",
    "Fiberglass operating rods and live-line tools",
    "Insulating barriers, signs and personal protective equipment",
    "Electrical test instruments and construction tools",
  ],
  processList: [
    "玻璃纤维连续拉挤成型",
    "中空绝缘管和实心杆拉挤",
    "结构型材定尺切割",
    "绝缘梯横档与侧轨加工",
    "梯具、脚手架和平台装配",
    "金属连接件与复材型材连接",
    "表面和边缘精整",
    "尺寸、承载和绝缘用途出厂检验",
    "按使用高度和场景定制",
  ],
  processListEn: [
    "Continuous glass-fiber pultrusion",
    "Pultrusion of hollow insulating tubes and solid rods",
    "Cut-to-length processing of structural profiles",
    "Insulating ladder rail and rung machining",
    "Ladder, scaffold and platform assembly",
    "Joining of metal hardware to composite profiles",
    "Surface and edge finishing",
    "Dimensional, load and electrical-duty release inspection",
    "Customization by working height and use case",
  ],
  established: null,
  verified: false,
  description:
    "昆明飞翔材料技术有限公司面向电力和带电作业提供拉挤玻璃钢型材、绝缘管/杆、光伏支架、绝缘梯、伸缩梯、脚手架、作业平台和操作杆。展会资料称相关业务 2001 年起于石家庄并于 2015 年迁至昆明，但这些经营沿革不能直接等同现行法人的注册年份，故成立年份留空。展会中文“鱼竿梯”指多节伸缩绝缘梯，不是钓鱼竿；本页不植入 fishing rod。官网当前仍公布 0311 销售电话，询价时应确认昆明签约、生产、开票和收货主体。",
  descriptionEn:
    "Kunming Feixiang Material Technology Co., Ltd. supplies pultruded GFRP profiles, insulating tubes and rods, photovoltaic support profiles, fiberglass ladders, telescopic ladders, scaffolds, work platforms and operating tools for electrical work. The China Composites Expo account says the related business began in Shijiazhuang in 2001 and moved to Kunming in 2015, but that operating history is not treated as the incorporation date of the current legal entity; the establishment field therefore remains blank. A Chinese product term in the expo description refers to a multi-section telescopic insulating ladder, not a fishing rod. GetFRP deliberately excludes fishing-rod keywords. The current official site still publishes 0311 sales numbers associated with Shijiazhuang, so buyers should confirm which Kunming or related entity will contract, manufacture, invoice and ship each order. Certifications and performance remain supplier-published until current reports are matched to the exact model and legal holder.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "飞翔目录覆盖拉挤型材、绝缘管和实心杆、光伏支架、绝缘梯、伸缩梯、绝缘脚手架、平台及带电作业工具。型材询价应明确树脂体系、玻纤含量、截面、壁厚、长度、公差、颜色、表面毡、阻燃/耐候和加工孔位。梯具及平台须按额定工况确认工作高度、承载、踏档间距、防滑、支撑、五金、电气试验方法和周期。网站自述与展会沿革、电话区号存在地域交叉，签约前应书面确认法人、工厂、检测和售后主体。",
  productsServicesSummaryEn:
    "Feixiang's current directory spans pultruded profiles, hollow insulating tubes, solid rods, photovoltaic supports, A-frame and straight ladders, multi-section telescopic ladders, insulating scaffolds, work platforms and live-line operating tools. A profile RFQ should state the resin system, glass content, section drawing, wall thickness, length, tolerances, color, surface veil, weathering or flame requirement, hole pattern and secondary machining. Tube and rod inquiries additionally need inside and outside diameter, straightness, concentricity, surface finish, end preparation, flexural or tensile targets and the applicable electrical-duty test. Ladder, scaffold and platform purchasing is safety critical: specify working height, access configuration, rated load, rung spacing, anti-slip construction, spreader or outrigger arrangement, wheel and brake requirements, guardrails, metal hardware, environmental exposure and rescue procedure. Require model-specific drawings and test records rather than relying on the generic word insulated. Operating rods and live-line tools should be selected by system voltage, length, connection interface, contamination environment, storage and periodic-test regime. The expo account describes a business beginning in Shijiazhuang and moving to Kunming; the official site still lists 0311 sales numbers. Buyers must therefore identify the legal seller, manufacturing site, invoice issuer, test laboratory and warranty contact in the purchase order. The expo expression sometimes translated literally as fish-pole ladder means a telescoping ladder construction and provides no evidence that Feixiang manufactures recreational fishing rods. Current certificate files, test standards, load ratings, dielectric values, capacity and delivery claims should be requested for the quoted model and checked for holder, address, scope and validity before approval.",
  ecatalogs: [
    { title: "飞翔官网", titleEn: "Feixiang Official Website", description: "企业与电力绝缘产品入口。", descriptionEn: "Official company and electrical-insulation product entry.", url: "https://www.frpladder.com/", format: "Official website" },
    { title: "飞翔公司简介", titleEn: "About Feixiang", description: "公司定位和业务范围。", descriptionEn: "Published company positioning and scope.", url: "https://www.frpladder.com/aboutUs", format: "Company page" },
    { title: "飞翔产品中心", titleEn: "Feixiang Products", description: "梯具、操作杆、脚手架和绝缘型材目录。", descriptionEn: "Ladders, operating tools, scaffolds and insulating profiles.", url: "https://www.frpladder.com/products", format: "Product directory" },
    { title: "飞翔联系页", titleEn: "Feixiang Contact", description: "官网电话和邮箱。", descriptionEn: "Published telephone and email contacts.", url: "https://www.frpladder.com/contactUs", format: "Contact page" },
    { title: "中国国际复材展 K 字母页", titleEn: "China Composites Expo — K Directory", description: "昆明飞翔展商和产品来源。", descriptionEn: "Organizer source for Feixiang identity and scope.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=K", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/kunming-feixiang-logo.png",
  contactEmail: "kmfeixiang@163.com",
  contactPhone: "400-818-7888; 0311-89699911/22/33",
  address: null,
  website: "https://www.frpladder.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 27,
  viewCount: 0,
  capabilities: ["pultruded GFRP profiles", "fiberglass insulating tubes", "solid insulating rods", "FRP photovoltaic supports", "fiberglass ladders", "telescopic insulating ladders", "insulating scaffolds", "live-line operating tools"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
