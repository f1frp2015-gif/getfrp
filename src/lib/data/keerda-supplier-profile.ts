import type { SupplierListing } from "@/lib/db/schema";

export const KEERDA_SUPPLIER_ID = "sup-nanjing-keerda-mould";
export const KEERDA_SUPPLIER_SLUG = "nanjing-keerda-mould";

// Curated from Nanjing Keerda Mould's current official Chinese and English
// company, product, service, honor and contact pages. Establishment, product,
// processing and hardness statements are company-published and are not
// GetFRP verification. The current official logo was downloaded from:
// http://www.keerdacn.com/en/upLoad/slide/month_2509/202509011426504584.png
export const KEERDA_SUPPLIER_PROFILE: SupplierListing = {
  id: KEERDA_SUPPLIER_ID,
  name: "南京科尔达模具有限公司",
  nameEn: "Nanjing Keerda Mould Co., Ltd.",
  slug: KEERDA_SUPPLIER_SLUG,
  location: "江苏南京",
  locationEn: "Nanjing, Jiangsu, China",
  province: "江苏",
  category: "mold",
  products: [
    "玻璃钢拉挤模具与拉挤模架",
    "工字梁、H 型、槽钢及大型板材拉挤模具",
    "圆管、矩形、直角及其他玻璃钢异型材模具",
    "玻璃钢门窗型材模具",
    "复合材料模压模具与玻璃钢制品",
    "模具硬铬、深孔加工及热处理服务",
  ],
  productsEn: [
    "FRP pultrusion dies and die frames",
    "Pultrusion dies for I-beams, H-sections, channels and large panels",
    "FRP special-profile dies for round, rectangular, right-angle and custom sections",
    "Pultrusion dies for FRP window and door profiles",
    "Composite compression molds and FRP products",
    "Hard-chrome plating, deep-hole machining and heat-treatment services",
  ],
  processList: [
    "玻璃钢拉挤模具设计与制造",
    "异型材、开口及闭口截面模具精密加工",
    "模架与配套工装制造",
    "模具镜面抛光与硬铬表面处理",
    "深槽、深孔、盲孔及曲面加工",
    "热处理、交付与售后技术支持",
  ],
  processListEn: [
    "FRP pultrusion-die design and manufacture",
    "Precision machining for special, open and closed profile sections",
    "Die-frame and supporting-tool manufacture",
    "Mirror polishing and hard-chrome surface treatment",
    "Deep-groove, deep-hole, blind-hole and curved-surface machining",
    "Heat treatment, delivery and after-sales technical support",
  ],
  // Keerda's official company profile says the business was established in
  // 1993 and previously operated as Taizhou Keerda Mould Co., Ltd.
  established: 1993,
  verified: false,
  description:
    "南京科尔达模具有限公司位于南京市六合区中山科技园。公司官网称其前身为台州市科尔达模具有限公司，创建于 1993 年，主要从事玻璃钢拉挤模具设计与制造。官网当前目录列有工字梁、H 型、槽钢、大型板材、圆管、矩形和直角等拉挤及异型材模具，并介绍门窗模具、模压模具、硬铬、深孔加工和热处理等配套能力。",
  descriptionEn:
    "Nanjing Keerda Mould Co., Ltd. is located in Zhongshan Science and Technology Park, Liuhe District, Nanjing. Its official website says the business was established in 1993 and previously operated as Taizhou Keerda Mould Co., Ltd., with a focus on FRP pultrusion-die design and manufacture. The current official directory shows dies for I-beams, H-sections, channels, large panels, round tubes, rectangular and right-angle profiles, together with window-and-door tooling, compression molds, hard-chrome plating, deep-hole machining and heat treatment.",
  certifications: [
    "企业营业执照（企业官网荣誉资质栏目公开图片；统一社会信用代码、登记状态与经营范围需另行核验）",
  ],
  certificationsEn: [
    "Business license (image published in the company's official honor section; independently confirm the unified social credit code, registration status and business scope)",
  ],
  productsServicesSummary:
    "科尔达官网将玻璃钢拉挤模具列为核心产品，并公开工字梁、H 型、U 型槽、模架、大型板材以及圆管、矩形和直角异型材模具实例。官网同时列出门窗模具、模压模具、玻璃钢制品、硬铬表面处理、深孔加工和热处理类别；公司介绍称其相关表面处理能力覆盖曲面、深槽、深孔、盲孔、内外球面、螺杆、料筒和热流道，并发布 HRC55–65 的硬度声明。采购方应在 RFQ 和试模验收阶段确认型材图纸与公差、纤维和树脂体系、拉挤速度、模具钢材、型腔数量和长度、加热分区与温控、镀铬厚度与硬度、表面粗糙度、直线度、试模材料、首件样品、备件、交期和出口包装。",
  productsServicesSummaryEn:
    "Keerda's official website positions FRP pultrusion dies as a core product and publishes examples for I-beams, H-sections, U-channels, die frames, large panels, round tubes, rectangular profiles and right-angle sections. It also lists window-and-door dies, compression molds, FRP products, hard-chrome surface treatment, deep-hole machining and heat treatment. The company profile says its related surface-treatment operation handles curved surfaces, deep grooves, deep and blind holes, internal and external spherical surfaces, screws, barrels and hot runners, and publishes an HRC 55–65 hardness claim. Buyers should confirm the profile drawing and tolerances, fiber and resin system, pull speed, tool-steel grade, cavity count and die length, heating zones and controls, chrome thickness and hardness, surface finish, straightness, trial material, first-article sample, spares, lead time and export packing during RFQ and die-trial acceptance.",
  ecatalogs: [
    {
      title: "科尔达英文官网",
      titleEn: "Nanjing Keerda Official English Website",
      description: "企业、产品、服务、新闻与联系方式英文入口。",
      descriptionEn:
        "Official English overview of the company, products, services, news and contact details.",
      url: "http://www.keerdacn.com/en/",
      format: "Official website",
    },
    {
      title: "科尔达公司介绍",
      titleEn: "Keerda Company Profile",
      description: "官网发布的企业沿革、拉挤模具定位和表面处理能力介绍。",
      descriptionEn:
        "Official company history and overview of pultrusion-die and surface-treatment capabilities.",
      url: "http://www.keerdacn.com/en/about/?21.html",
      format: "Company profile",
    },
    {
      title: "玻璃钢拉挤模具目录",
      titleEn: "FRP Pultrusion Mould Directory",
      description: "工字梁、H 型、槽钢、大型板材和模架等拉挤模具实例。",
      descriptionEn:
        "Official examples of pultrusion tooling for I-beams, H-sections, channels, large panels and die frames.",
      url: "http://www.keerdacn.com/en/list/?7_1.html",
      format: "Product directory",
    },
    {
      title: "玻璃钢异型材模具目录",
      titleEn: "FRP Special-Profile Mould Directory",
      description: "圆管、矩形、直角及其他异型材模具实例。",
      descriptionEn:
        "Official examples of round, rectangular, right-angle and other special-profile dies.",
      url: "http://www.keerdacn.com/en/list/?6_1.html",
      format: "Product directory",
    },
    {
      title: "科尔达荣誉资质",
      titleEn: "Keerda Honor & License Page",
      description: "企业官网公开的营业执照图片入口。",
      descriptionEn:
        "Official page publishing a business-license image; independently verify current registration details.",
      url: "http://www.keerdacn.com/en/list/?26_1.html",
      format: "Evidence library",
    },
    {
      title: "科尔达联系方式",
      titleEn: "Keerda Contact Details",
      description: "官网发布的南京地址、电话、传真与联系人信息。",
      descriptionEn:
        "Official Nanjing address, telephone, fax and contact-person details.",
      url: "http://www.keerdacn.com/en/about/?32.html",
      format: "Contact page",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-09T00:00:00.000Z"),
  logo: "/supplier-assets/keerda-logo.png",
  contactEmail: null,
  contactPhone: "+86 25 5767 6665",
  address:
    "No. 405 Wangxin Road, Zhongshan Science and Technology Park, Liuhe District, Nanjing, Jiangsu, China",
  website: "http://www.keerdacn.com/en/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 14,
  viewCount: 0,
  capabilities: [
    "FRP pultrusion dies",
    "pultrusion die design",
    "I-beam and H-section tooling",
    "channel and large-panel tooling",
    "round and rectangular profile dies",
    "FRP window and door profile dies",
    "compression molds",
    "hard chrome plating",
    "deep-hole machining",
    "heat treatment",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-09T00:00:00.000Z"),
  updatedAt: new Date("2026-08-09T00:00:00.000Z"),
};
