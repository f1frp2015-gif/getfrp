import type { SupplierListing } from "@/lib/db/schema";

export const LEUCO_TAICANG_SUPPLIER_ID = "sup-leuco-taicang";
export const LEUCO_TAICANG_SUPPLIER_SLUG = "leuco-taicang";

// Curated from LEUCO's current official China composite-processing, company,
// download and contact pages plus the CCE directory. The official LEUCO logo
// was downloaded from leuco.com on 2026-08-25.
export const LEUCO_TAICANG_SUPPLIER_PROFILE: SupplierListing = {
  id: LEUCO_TAICANG_SUPPLIER_ID,
  name: "乐客精密工具（太仓）有限公司",
  nameEn: "LEUCO Precision Tooling (Taicang) Co., Ltd.",
  slug: LEUCO_TAICANG_SUPPLIER_SLUG,
  location: "江苏太仓",
  locationEn: "Taicang, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: ["复合材料硬质合金铣刀", "复合材料金刚石涂层铣刀", "金刚石/PCD 刃铣刀", "p-System 高精度铣刀", "复材钻头和专利入钻结构钻头", "沉头钻和扩孔工具", "复合材料圆锯片", "刀柄、夹持系统和附件", "定制刀具及几何方案"],
  productsEn: ["Solid-carbide routers for composite processing", "Diamond-coated routers for composite processing", "Diamond-tipped and PCD end mills", "p-System high-precision cutters", "Composite drills and patented-entry drill bits", "Countersinks and reaming tools", "Circular saw blades for composite panels", "Tool holders, clamping systems and accessories", "Custom tools and application-specific geometry"],
  processList: ["CFRP、GFRP 和 AFRP 铣削", "复材板材锯切和分切", "复材钻孔、沉头和扩孔", "硬质合金与金刚石涂层刀具选型", "PCD/DP 金刚石刃刀具应用", "低毛刺和低分层切削方案", "刀柄与夹持系统匹配", "客户材料试切和参数优化", "定制刀具几何设计与技术咨询"],
  processListEn: ["CFRP, GFRP and AFRP routing", "Composite-panel sawing and sizing", "Composite drilling, countersinking and reaming", "Carbide and diamond-coated tool selection", "PCD and DP diamond-edge tool application", "Low-fuzz and low-delamination machining strategies", "Tool-holder and clamping-system matching", "Customer-material trials and parameter optimization", "Custom tool-geometry design and technical consulting"],
  established: null,
  verified: false,
  description:
    "乐客精密工具（太仓）有限公司是 LEUCO 在中国的精密刀具业务主体。中国国际复材展资料和官网复合材料加工方案均支持其面向 CFRP、GFRP 与 AFRP 的铣刀、钻头、沉头钻、锯片、刀柄和定制刀具业务，刀具材料包括未涂层或涂层硬质合金以及 DP/PCD 金刚石刃。官网还列出金刚石刃立铣刀、p-System 铣刀和具有专利入钻结构的钻头。CFRP、GFRP、AFRP 是被加工材料，不是乐客自产复材产品；本页因此不把碳纤维、玻璃纤维、板材或其他被切削材料词植入为其供应商关键词。太仓地址在不同官方页面存在版本差异，询价、验厂和发运前应向企业确认现行合同和收货地址。",
  descriptionEn:
    "LEUCO Precision Tooling (Taicang) Co., Ltd. is LEUCO's precision-tooling entity in China. Both the China Composites Expo record and LEUCO's official composite-processing solution support routers, drills, countersinks, saw blades, tool holders and custom tooling for machining CFRP, GFRP and AFRP, using uncoated or coated carbide and DP or PCD diamond edges. The official page also identifies diamond-tipped end mills, p-System cutters and drill bits with a patented entry geometry. CFRP, GFRP and AFRP are workpiece materials, not composite products manufactured by LEUCO. GetFRP therefore excludes carbon-fiber, fiberglass, sheet and other workpiece-material supplier phrases from this equipment page. Official LEUCO pages show more than one Taicang address variant, so the contracting, audit, invoice, receiving and dispatch location should be confirmed before an order. No company founding year, management-system certificate, tool-life guarantee or material-specific machining result is presented as independently verified.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "乐客复材加工方案覆盖铣削、锯切、钻孔、沉头、扩孔、夹持和定制刀具。询价应提交实际 CFRP/GFRP/AFRP 或夹芯材料、树脂和铺层、厚度、加工图、设备接口、转速/进给范围、集尘、边缘与孔壁要求、毛刺和分层限值、尺寸公差、节拍及刀具寿命评价方法。硬质合金、涂层、PCD/DP 和不同几何不能仅按材料名称互换，必须通过代表性试切确认。采购方应锁定刀具编号、尺寸、刃数、旋向、柄部、动平衡、可修磨范围、包装、防伪、批次、换型通知和技术支持边界。",
  productsServicesSummaryEn:
    "LEUCO's official composite-processing solution covers routing, sawing, drilling, countersinking, reaming, tool holding and application-specific tooling. An RFQ should provide the actual CFRP, GFRP, AFRP, sandwich panel or hybrid material, including matrix, reinforcement architecture and orientation, cured state, thickness, surface layers, core, inserts and any conductive-dust or health constraints. Add the part drawing, hole and edge features, dimensional and geometric tolerances, machine and spindle interface, available rpm, feed, power, runout, tool-change arrangement, extraction and cooling or dry-machining restrictions. Acceptance criteria should define edge fuzz, fiber pull-out, delamination, breakout, splintering, burr, heat damage, hole diameter and cylindricity, countersink angle and depth, surface finish, positional tolerance, cycle time and the method used to evaluate usable tool life. Carbide, coated carbide, diamond-coated, DP or PCD cutting edges and different rake, helix or entry geometries are not interchangeable merely because each is listed for composites. Require a representative trial that records material batch, support and clamping, tool identifier, runout, rpm, feed, depth and width of cut, entry and exit strategy, extraction, measured quality, wear and failure mode. For saw blades, define diameter, kerf, bore, tooth form and count, hook angle, flange, line speed, panel support and cut direction. For routers and p-System cutters, define shank, cutting diameter and length, flute count, handedness, ramping and nesting duty. For drills, countersinks and reamers, identify stack order, backing, one-shot or multi-step operation and entry/exit quality. Tool-holder scope should address interface, balance grade, clamping torque, pullout control and measured assembly runout. Buyers should request the current item drawing, recommended starting parameters, safety and dust guidance, inspection record, traceability and packaging, then separate standard catalog tools, custom engineering, trial work, holders, spares, regrinding or replacement policy and on-site support in the quotation. The official Chinese composite page and other global contact pages show different Taicang street-address variants; confirm the active legal, invoice, audit, receiving and shipping locations directly with LEUCO. Tool descriptions establish machining capability only and do not turn the cut carbon or glass composite into a LEUCO-manufactured product, so no material-supplier search keyword is assigned.",
  ecatalogs: [
    { title: "乐客中国官网", titleEn: "Official LEUCO China Website", description: "中国企业、产品和服务入口。", descriptionEn: "Official China company, product and service entry.", url: "https://www.leuco.com/ZH/CN/home", format: "Official website" },
    { title: "复合材料加工方案", titleEn: "Composite Processing", description: "CFRP、GFRP、AFRP 刀具和应用依据。", descriptionEn: "Official CFRP, GFRP and AFRP tooling and application source.", url: "https://www.leuco.com/ZH/CN/solutions/applications/composite-processing", format: "Application page" },
    { title: "乐客公司简介", titleEn: "About LEUCO", description: "集团和精密工具业务说明。", descriptionEn: "Official group and precision-tooling overview.", url: "https://www.leuco.com/ZH/CN/ueber_leuco/unternehmen", format: "Company page" },
    { title: "乐客媒体下载", titleEn: "LEUCO Media Downloads", description: "官方目录和技术资料入口。", descriptionEn: "Official catalog and technical-document entry.", url: "https://www.leuco.com/ZH/CN/Services/medien-downloads", format: "Download center" },
    { title: "中国国际复材展 L 字母页", titleEn: "China Composites Expo — L Directory", description: "太仓主体与复材切削刀具范围。", descriptionEn: "Organizer source for the Taicang entity and composite-cutting tool scope.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=L", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/leuco-taicang-logo.png",
  contactEmail: "info@leuco.com.cn",
  contactPhone: "+86 512 5359 5359",
  address: "No. 27 Fada Road, Economic Development Zone, Taicang, Jiangsu, China",
  website: "https://www.leuco.com/ZH/CN/home",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 26,
  viewCount: 0,
  capabilities: ["composite routing tools", "CFRP and GFRP drilling", "PCD and diamond-coated tools", "composite saw blades", "p-System cutters", "tool clamping systems", "material trials", "custom tool geometry"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
