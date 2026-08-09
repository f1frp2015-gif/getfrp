import type { SupplierListing } from "@/lib/db/schema";

export const FANGHUA_SUPPLIER_ID = "sup-fanghua-mould";
export const FANGHUA_SUPPLIER_SLUG = "yuyao-fanghua-mould";

// Curated from Yuyao Fanghua Mould's current official Chinese website.
// Company history, staffing, export, equipment, tolerance and lead-time
// statements are company-published claims and are not GetFRP verification.
// "Fanghua Mould" is a descriptive English display name because the official
// website publishes only the Chinese legal name. Official logo source:
// https://yyfanghua.com/static/upload/image/20230614/1686735359920312.png
export const FANGHUA_SUPPLIER_PROFILE: SupplierListing = {
  id: FANGHUA_SUPPLIER_ID,
  name: "余姚市方华模具有限公司",
  nameEn: "Fanghua Mould",
  slug: FANGHUA_SUPPLIER_SLUG,
  location: "浙江宁波余姚",
  locationEn: "Yuyao, Ningbo, Zhejiang, China",
  province: "浙江",
  category: "mold",
  products: [
    "玻璃钢拉挤模具",
    "平板、矩形管、方管、棒材、角钢与工字钢等常规型材拉挤模具",
    "门窗、天线罩、特殊型材、多腔与波形板等复杂拉挤模具",
    "拉挤预成型装置与模架",
    "拉挤模具型腔加工",
    "模压模具、挤出模具与注塑模具",
    "小五金件机加工",
  ],
  productsEn: [
    "FRP pultrusion molds and dies",
    "Pultrusion molds for flat panels, rectangular and square tubes, rods, angles and I-beams",
    "Complex pultrusion molds for window and door profiles, radomes, custom profiles, multi-cavity sections and corrugated panels",
    "Pultrusion preformers and die frames",
    "Pultrusion-die cavity machining",
    "Compression, extrusion and injection molds",
    "Machining of small metal parts",
  ],
  processList: [
    "按图纸或样品进行拉挤模具设计与定制",
    "龙门加工、数控磨削、铣削与精密型腔加工",
    "单腔、多腔及整体式、分体式模具制造",
    "注射段、加热模、预成型装置与模架配套",
    "模具表面精加工与可选硬铬处理",
    "成品检验与售后设计优化",
  ],
  processListEn: [
    "Custom pultrusion-mold design from drawings or samples",
    "Gantry machining, CNC grinding, milling and precision cavity machining",
    "Single-cavity, multi-cavity, solid and split-die manufacturing",
    "Integration of injection sections, heated dies, preformers and die frames",
    "Precision finishing and optional hard-chrome plating",
    "Finished-mold inspection and after-sales design optimization",
  ],
  // Fanghua's official history says the predecessor business was first
  // established in 1998; this may not be the current legal entity's
  // registration date.
  established: 1998,
  verified: false,
  description:
    "余姚市方华模具有限公司官网称，其前身为余姚市方华印字机厂，最早成立于 1998 年，现位于浙江余姚并专门生产玻璃钢拉挤模具。官网公开的产品范围涵盖常规与复杂型材模具、预成型装置和模架、型腔加工，并延伸至模压、挤出、注塑模具及小五金机加工；公司同时公开龙门加工中心、龙门数控磨床、高精密机床、磨床和铣床等设备，并称模具已销往国内外市场。",
  descriptionEn:
    "Yuyao Fanghua Mould's official website traces its predecessor, Yuyao Fanghua Printing Machine Factory, to 1998 and describes the current business as a specialist manufacturer of FRP pultrusion molds in Yuyao, Zhejiang. Its published range covers conventional and complex profile dies, preformers and die frames, cavity machining, together with compression, extrusion and injection molds and small-part machining. The company also lists gantry machining centers, CNC gantry grinders, precision machine tools, grinders and milling machines, and states that its molds are sold in China and overseas.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "方华官网的通用技术表公开了 42CrMo、P20 或其他模具材料，单腔或多腔、整体式或分体式结构，以及按需组合注射模、加热模和预成型装置。页面列出的常用模具长度为 900 或 1000 mm，一般模具外形尺寸公差为 ±2 mm、型腔易测量位置公差为 ±0.08（页面未标明单位）、型腔与模芯表面粗糙度为 Ra 0.2，可选 0.02–0.05 mm 硬铬层，公开交期为 30–90 天，并接受 STEP、CAD 和 PDF 图纸。上述数值均为企业官网通用信息，不应视为具体订单承诺；采购方应在 RFQ、设计评审和试模验收阶段确认材料牌号与热处理、图纸版本、分型与加热方案、树脂和纤维体系、关键尺寸及单位、收缩补偿、入口和固化区设计、表面与镀层、试模材料、检验记录、易损件、包装、交期和售后责任。",
  productsServicesSummaryEn:
    "Fanghua's general technical table publishes mold-material options including 42CrMo, P20 or alternatives; single- or multi-cavity and solid or split construction; and combinations of injection sections, heated dies and preformers as required. It lists typical die lengths of 900 or 1,000 mm, a general outside-dimension tolerance of ±2 mm, a tolerance of ±0.08 for readily measurable cavity positions (the page does not state the unit), Ra 0.2 cavity and core surface roughness, optional hard-chrome thickness of 0.02–0.05 mm, a published lead-time range of 30–90 days, and STEP, CAD and PDF drawing inputs. These are generic company-published values, not a commitment for a specific order. Buyers should confirm the steel grade and heat treatment, drawing revision, split and heating design, resin and reinforcement system, critical dimensions and units, shrinkage compensation, entry and cure-zone design, finish and plating, trial material, inspection records, spares, packing, schedule and after-sales responsibility during RFQ, design review and mold acceptance.",
  ecatalogs: [
    {
      title: "方华模具官方网站",
      titleEn: "Fanghua Mould Official Website",
      description: "企业、产品、能力、服务与公开联系方式总览。",
      descriptionEn:
        "Official overview of the company, products, capabilities, services and published contact details.",
      url: "https://yyfanghua.com/",
      format: "Official website",
    },
    {
      title: "方华模具企业介绍",
      titleEn: "Fanghua Mould Company Profile",
      description: "官网发布的企业沿革、设备、产品范围、应用与市场介绍。",
      descriptionEn:
        "Official company history and overview of equipment, product range, applications and markets.",
      url: "https://yyfanghua.com/about/",
      format: "Company profile",
    },
    {
      title: "方华拉挤模具产品目录",
      titleEn: "Fanghua Pultrusion Mold Directory",
      description: "常规、复杂拉挤模具、预成型、模架与型腔加工目录。",
      descriptionEn:
        "Official directory for conventional and complex pultrusion molds, preformers, die frames and cavity machining.",
      url: "https://yyfanghua.com/products/",
      format: "Product directory",
    },
    {
      title: "方华拉挤模具通用技术表",
      titleEn: "Fanghua General Pultrusion Mold Technical Table",
      description: "官网公开的材料、结构、精度、镀层、交期与图纸格式信息。",
      descriptionEn:
        "Company-published material, construction, tolerance, plating, lead-time and drawing-format information.",
      url: "https://yyfanghua.com/list_41/174.html",
      format: "Technical specification",
    },
    {
      title: "方华模具联系方式",
      titleEn: "Fanghua Mould Contact Page",
      description: "官网公开的联系人、电话、邮箱与余姚工厂地址。",
      descriptionEn:
        "Official contact names, telephone numbers, email and Yuyao factory address.",
      url: "https://yyfanghua.com/contact/",
      format: "Contact page",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-09T00:00:00.000Z"),
  logo: "/supplier-assets/fanghua-logo.png",
  contactEmail: "liu@yyfanghua.com",
  contactPhone: "+86 574 6235 0612",
  address:
    "No. 36 Qiutao Road, Hudong Industrial Park, Liangnong Town, Yuyao, Ningbo, Zhejiang, China",
  website: "https://yyfanghua.com/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 16,
  viewCount: 0,
  capabilities: [
    "frp pultrusion molds",
    "pultrusion die design",
    "single-cavity and multi-cavity molds",
    "window and door profile molds",
    "radome profile molds",
    "custom profile molds",
    "preformers and die frames",
    "cavity machining",
    "hard chrome plating",
    "cnc machining",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-09T00:00:00.000Z"),
  updatedAt: new Date("2026-08-09T00:00:00.000Z"),
};
