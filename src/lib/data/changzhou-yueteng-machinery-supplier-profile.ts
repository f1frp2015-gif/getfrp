import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_ID =
  "sup-changzhou-yueteng-machinery";
export const CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_SLUG =
  "changzhou-yueteng-machinery";

// Curated from Yueteng Machinery's current official company, product, CFRT,
// thermoplastic-lamination and contact pages plus the 2026 China Composites
// Expo C directory. The official website is HTTP-only in the review environment.
// Equipment performance and qualification claims remain supplier-published.
// Official header logo downloaded on 2026-08-25 from:
// http://www.czyueteng.com/images/logo.png
export const CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_ID,
  name: "常州市悦腾机械有限公司",
  nameEn: "Changzhou Yueteng Machinery Co., Ltd.",
  slug: CHANGZHOU_YUETENG_MACHINERY_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "CFRT 连续纤维增强热塑性预浸带生产线",
    "单向带及多角度热塑性复合板材生产配置",
    "YT 特种玻纤热塑复合片材机组",
    "YTS13 三维双层剑杆织机",
    "YTR11 多层及 YTR12/YTR21 双层剑杆织机",
    "YTD22 提花地毯双层剑杆织机",
    "YT736 绒布剑杆织机",
    "连续玻纤、碳纤、芳纶或玄武岩热塑复合线定制",
  ],
  productsEn: [
    "CFRT continuous-fiber reinforced thermoplastic prepreg-tape production lines",
    "Production configurations for unidirectional tape and multi-angle thermoplastic laminates",
    "YT fiberglass thermoplastic sheet-lamination lines",
    "YTS13 3D double-layer rapier looms",
    "YTR11 multilayer and YTR12/YTR21 double-layer rapier looms",
    "YTD22 Jacquard carpet double-layer rapier looms",
    "YT736 pile-fabric rapier looms",
    "Custom continuous-glass, carbon, aramid or basalt thermoplastic composite lines",
  ],
  processList: [
    "连续纤维放卷与张力控制",
    "热塑性树脂熔融、浸渍与复合",
    "预浸带冷却、定型、切边和收卷",
    "PP、PA、PET、PPS、PEEK 等基体适配（企业目录）",
    "0°/90° 及其他角度复合板铺层配置",
    "编织布 PP/PE 挤出复膜",
    "双层、多层、三维和提花剑杆织造",
    "设备设计、制造、调试与技术服务",
  ],
  processListEn: [
    "Continuous-fiber unwinding and tension control",
    "Thermoplastic resin melting, impregnation and consolidation",
    "Prepreg-tape cooling, sizing, edge trimming and winding",
    "Matrix adaptation for PP, PA, PET, PPS and PEEK (company catalog)",
    "Layup configurations for 0/90-degree and other-angle laminates",
    "PP or PE extrusion coating and lamination of woven substrates",
    "Double-layer, multilayer, 3D and Jacquard rapier weaving",
    "Equipment design, manufacture, commissioning and technical service",
  ],
  established: null,
  verified: false,
  description:
    "常州市悦腾机械有限公司官网把企业定位为双层剑杆织机和连续纤维热塑性复合机组的研发、生产、销售和技术服务商。当前产品中心列有 CFRT 连续纤维热塑性预浸带线、特种玻纤热塑复合机组、三维/多层/双层剑杆织机和绒布、提花地毯织机；CFRT 页面还公开玻纤、碳纤、芳纶、玄武岩与多种热塑性树脂的设备适配范围。中国国际复材展以同一中文主体收录，归类为纤维再加工、预浸料生产及模具相关设备。本页将悦腾作为设备供应商，不把设备可生产的预浸带、板材或管道自动写成悦腾自营材料产品，也不独立确认网页中的专利、奖项、性能或行业领先陈述。",
  descriptionEn:
    "Changzhou Yueteng Machinery Co., Ltd. presents itself on its official website as a developer, manufacturer and service provider for double-layer rapier looms and continuous-fiber thermoplastic composite lines. The current directory lists a CFRT continuous-fiber thermoplastic prepreg-tape line, a fiberglass thermoplastic lamination line, 3D, multilayer and double-layer rapier looms, plus pile and Jacquard-carpet looms. The CFRT page further publishes equipment configurations for glass, carbon, aramid or basalt reinforcement with multiple thermoplastic matrices. China Composites Expo lists the same Chinese entity under fiber reprocessing, prepreg-production and mold-related equipment. This profile treats Yueteng as an equipment supplier; tape, laminate or pipe output that its lines can produce is not automatically represented as Yueteng's own material inventory. Patent, award, performance and market-position statements have not been independently verified.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "悦腾 CFRT 页面把生产线描述为纤维输送、树脂熔融、浸渍成型、冷却定型和收卷的一体化系统，公开 350–2000 mm 幅宽、单向带/多角度板材、PP/PA/PET/PPS/PEEK 基体和玻纤/碳纤/芳纶/玄武岩增强等可选范围；这些是设备供应商目录能力，必须通过目标配置的技术协议、试机和验收确认。YT 特种玻纤复合机组则是 PP 或 PE 挤出后对编织布/无纺布等基材复膜，与 CFRT 单丝束浸渍线不是同一设备路线。设备 RFQ 应明确目标成品、有效幅宽和速度、纤维牌号/纱束/展纱质量、树脂牌号与含水率、浸渍和孔隙率目标、纤维含量、温度/压力/张力闭环、铺层与分切、收卷直径、能耗、公用工程、换料清洗、废边回收、在线测厚/缺陷检测、数据接口、安全防护、占地、交付边界、FAT/SAT 样料和验收统计、备件、培训、质保和售后响应。剑杆织机项目还需约定经纬/Z 向纱线、层数、幅宽、织法、开口/送经/卷取、断纱检测和样布验收。官网为 HTTP-only；发送产线布局、配方、账号或付款资料前，应独立核验域名、联系人、签约主体和安全文件通道。",
  productsServicesSummaryEn:
    "Yueteng describes its CFRT line as an integrated system for fiber feeding, resin melting, impregnation, forming, cooling and winding. The page publishes a 350–2,000 mm width range, unidirectional-tape or multi-angle laminate configurations, PP/PA/PET/PPS/PEEK matrices and glass/carbon/aramid/basalt reinforcement options. These are equipment-catalog capabilities that require confirmation in the target configuration's technical agreement, trial run and acceptance test. The YT fiberglass composite line instead extrusion-coats a woven or nonwoven substrate with PP or PE; it is not the same process as a CFRT tow-impregnation line. An equipment RFQ should specify target output; effective width and line speed; fiber grade, tow and spreading quality; resin grade and moisture; impregnation and void targets; fiber content; closed-loop temperature, pressure and tension control; layup, slitting and winding diameter; energy and utilities; material changeover and cleaning; trim recycling; online thickness or defect inspection; data interface; guarding; footprint; battery limits; FAT/SAT material and statistical acceptance; spares; training; warranty; and service response. A rapier-loom project additionally needs warp, weft and Z-yarn definitions; layer count; width; weave; shedding, let-off and take-up; broken-yarn detection; and accepted sample fabric. The official site is HTTP-only in the review environment. Independently verify the domain, contact, contracting entity and secure file channel before transmitting line layouts, formulations, credentials or payment information.",
  ecatalogs: [
    {
      title: "悦腾机械官网",
      titleEn: "Official Yueteng Machinery Website",
      description: "当前公司、设备、新闻和联系方式。",
      descriptionEn: "Current company, equipment, news and contact information.",
      url: "http://www.czyueteng.com/",
      format: "Official website",
    },
    {
      title: "悦腾公司简介",
      titleEn: "Yueteng Company Profile",
      description: "剑杆织机与连续纤维热塑复合设备业务范围。",
      descriptionEn: "Official rapier-loom and continuous-fiber thermoplastic equipment scope.",
      url: "http://www.czyueteng.com/about.html",
      format: "Company profile",
    },
    {
      title: "悦腾设备目录",
      titleEn: "Yueteng Equipment Directory",
      description: "CFRT、热塑复合机组与多种剑杆织机。",
      descriptionEn: "Official CFRT, thermoplastic-lamination and rapier-loom directory.",
      url: "http://www.czyueteng.com/products_class_33.html",
      format: "Equipment directory",
    },
    {
      title: "CFRT 预浸带生产线",
      titleEn: "CFRT Prepreg-tape Production Line",
      description: "幅宽、基体、增强纤维、成型与应用范围。",
      descriptionEn: "Published width, matrix, reinforcement, forming and application range.",
      url: "http://www.czyueteng.com/Detail_pro_117.html",
      format: "Technical equipment page",
    },
    {
      title: "玻纤热塑复合片材机组",
      titleEn: "Fiberglass Thermoplastic Lamination Line",
      description: "PP/PE 挤出、复膜、冷却与卷取设备说明。",
      descriptionEn: "Official PP/PE extrusion, lamination, cooling and winding description.",
      url: "http://www.czyueteng.com/Detail_pro_116.html",
      format: "Technical equipment page",
    },
    {
      title: "悦腾联系方式",
      titleEn: "Yueteng Contact Page",
      description: "常州地址、电话、手机和邮箱。",
      descriptionEn: "Official Changzhou address, telephone, mobile and email.",
      url: "http://www.czyueteng.com/contact.html",
      format: "Official contact",
    },
    {
      title: "中国国际复材展 C 字母展商页",
      titleEn: "China Composites Expo Exhibitors — C",
      description: "悦腾展商身份、展位和设备类别。",
      descriptionEn: "Organizer entry for Yueteng, its booth and equipment categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=60&head=C",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-yueteng-logo.png",
  contactEmail: "jsczyueteng@163.com",
  contactPhone: "+86 519 8867 2118",
  address: "No. 178 Moujia Village, Zhenglu Town, Tianning District, Changzhou, Jiangsu 213115, China",
  website: "http://www.czyueteng.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 23,
  viewCount: 0,
  capabilities: [
    "CFRT prepreg-tape production line",
    "continuous-fiber thermoplastic impregnation",
    "thermoplastic laminate production equipment",
    "3D rapier loom",
    "multilayer rapier loom",
    "double-layer rapier loom",
    "equipment commissioning and training",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
