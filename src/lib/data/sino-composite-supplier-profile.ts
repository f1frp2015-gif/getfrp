import type { SupplierListing } from "@/lib/db/schema";

export const SINO_COMPOSITE_SUPPLIER_ID = "sup-sino-composite";
export const SINO_COMPOSITE_SUPPLIER_SLUG = "sino-composite-structures";

// Curated from Sino Composite Structures' official English company profile,
// product directory, service page, certificate library and contact page.
// Product test and approval statements remain company-published and have not
// been independently verified by GetFRP. Official logo source:
// https://www.sino-grate.com/wp-content/uploads/2023/06/sino_logo1.png
export const SINO_COMPOSITE_SUPPLIER_PROFILE: SupplierListing = {
  id: SINO_COMPOSITE_SUPPLIER_ID,
  name: "Sino Composite Structures Co., Ltd.",
  nameEn: "Sino Composite Structures Co., Ltd.",
  slug: SINO_COMPOSITE_SUPPLIER_SLUG,
  location: "江苏无锡",
  locationEn: "Wuxi, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "模塑与拉挤玻璃钢格栅及酚醛格栅",
    "玻璃钢管、工字梁、槽钢、角钢、平板及棒材等拉挤型材",
    "玻璃钢扶手、护栏、爬梯、平台板及通道系统",
    "玻璃纤维筋与玻璃钢井盖",
    "玻璃钢电缆桥架系统",
    "连续缠绕玻璃钢管道、杆体与船用管",
    "格栅安装夹具及配件",
  ],
  productsEn: [
    "Molded and pultruded FRP grating, including phenolic grating",
    "Pultruded FRP tubes, I-beams, channels, angles, flat sheets and rods",
    "FRP handrail, ladder, decking, plank and access systems",
    "Fiberglass rebar and FRP manhole covers",
    "FRP cable-tray systems",
    "Continuous-winding FRP pipe, poles and marine tubes",
    "Grating clips and installation accessories",
  ],
  processList: [
    "模塑玻璃钢格栅制造",
    "玻璃钢格栅与结构型材拉挤成型",
    "按载荷、环境和工况进行产品、树脂与安装方案选型",
    "项目设计、工程图纸与玻璃钢结构方案支持",
    "工厂预装配与运输协调",
    "安装图纸、手册与现场技术指导",
  ],
  processListEn: [
    "Molded FRP grating manufacture",
    "Pultrusion of FRP grating and structural profiles",
    "Product, resin and installation selection for the stated load and service environment",
    "Project design, engineering drawings and FRP structure solutions",
    "Factory pre-assembly and transport coordination",
    "Installation drawings, manuals and technical guidance",
  ],
  established: 2002,
  verified: false,
  description:
    "Sino Composite Structures Co., Ltd. 官网称其自 2002 年开展玻璃钢业务，总部位于江苏无锡。公司从模塑玻璃钢格栅起步，现公开产品覆盖模塑与拉挤格栅、酚醛格栅、拉挤结构型材、扶手与爬梯系统、电缆桥架、玻璃纤维筋、井盖、连续缠绕管道、杆体、船用管和安装配件，并提供项目设计、选型、预装配与运输支持。",
  descriptionEn:
    "Sino Composite Structures Co., Ltd. states on its official website that it has operated in the FRP business since 2002 and is based in Wuxi, Jiangsu. Beginning with molded FRP grating, its published range now covers molded, pultruded and phenolic grating; pultruded structural profiles; handrail and ladder systems; cable tray; fiberglass rebar; manhole covers; continuous-winding pipe; poles; marine tubes; and installation accessories. The company also publishes project design, product selection, pre-assembly and transport support.",
  certifications: [
    "ASTM E84 与 ASTM D635 燃烧/阻燃测试声明（企业官网公开；需按报价产品核验现行报告）",
    "ASTM D695-10、ASTM D638-10 与 ASTM D790-10 力学测试声明（企业官网公开；需核验样品、树脂体系与实验室范围）",
    "ASTM D2863-08 氧指数测试声明（企业官网公开；需核验现行报告）",
    "ASTM F3059 Level 2 及 USCG、ABS、DNV GL、BV、NK 认可声明（企业官网公开；需核验具体产品、证书编号、范围与有效期）",
  ],
  certificationsEn: [
    "ASTM E84 and ASTM D635 fire/flammability test claims (company-published; request current reports for the quoted product)",
    "ASTM D695-10, ASTM D638-10 and ASTM D790-10 mechanical-test claims (company-published; confirm the sample, resin system and laboratory scope)",
    "ASTM D2863-08 oxygen-index test claim (company-published; request the current report)",
    "ASTM F3059 Level 2 and USCG, ABS, DNV GL, BV and NK approval claims (company-published; confirm the product, certificate number, scope and validity)",
  ],
  productsServicesSummary:
    "官网产品目录覆盖工业通道与平台所需的模塑、拉挤及酚醛格栅，管材、工字梁、槽钢、角钢、平板和棒材等拉挤型材，以及扶手、爬梯、电缆桥架、玻璃纤维筋、井盖、连续缠绕管道、杆体和船用管。服务页称技术团队可依据载荷、使用环境和工况推荐产品型号、树脂与安装方法，并提供安装图纸和手册；常规数量的生产周期通常为两到三周，产品至少提供五年质保。上述交期、质保和测试/认可均为企业公开声明，采购方应在 RFQ 阶段确认设计载荷、支撑跨距、挠度限值、树脂体系、阻燃等级、颜色、表面、切割图、夹具、包装、MOQ、交期及现行证书。",
  productsServicesSummaryEn:
    "The official directory covers molded, pultruded and phenolic grating for industrial walkways and platforms; pultruded tube, I-beam, channel, angle, flat-sheet and rod profiles; and FRP handrail, ladder, cable-tray, rebar, manhole-cover, continuous-winding pipe, pole and marine-tube systems. The service page says its technical team can recommend the product model, resin and installation method from the stated load, service environment and operating conditions, and can provide installation drawings and manuals. It also states a typical two-to-three-week production period for general quantities and at least a five-year product warranty. These timing, warranty, test and approval statements are company-published; buyers should confirm design load, support span, deflection limit, resin, fire rating, colour, surface, cut plan, clips, packaging, MOQ, lead time and current certificates during RFQ.",
  ecatalogs: [
    {
      title: "Sino Composite 公司介绍",
      titleEn: "Sino Composite Company Profile",
      description: "公司沿革、产品范围、结构系统与项目工程能力介绍。",
      descriptionEn:
        "Official company history and overview of its product range, structural systems and project-engineering capabilities.",
      url: "https://www.sino-grate.com/about/company-profile/",
      format: "Company profile",
    },
    {
      title: "Sino Composite 产品目录",
      titleEn: "Sino Composite Product Directory",
      description: "格栅、型材、结构系统、钢筋、井盖、桥架、管道、杆体及配件入口。",
      descriptionEn:
        "Official directory for grating, profiles, structural systems, rebar, manhole covers, cable tray, pipe, poles and accessories.",
      url: "https://www.sino-grate.com/shop/",
      format: "Product directory",
    },
    {
      title: "玻璃钢格栅产品目录",
      titleEn: "FRP Grating Product Directory",
      description: "模塑、拉挤及酚醛玻璃钢格栅产品入口。",
      descriptionEn:
        "Official product directory for molded, pultruded and phenolic FRP grating.",
      url: "https://www.sino-grate.com/product-category/frp-grating/",
      format: "Technical directory",
    },
    {
      title: "玻璃钢结构系统目录",
      titleEn: "FRP Structural Systems Directory",
      description: "管材、工字梁、槽钢、角钢、平板及棒材等拉挤结构型材。",
      descriptionEn:
        "Official directory for pultruded FRP tube, I-beam, channel, angle, flat-sheet and rod profiles.",
      url: "https://www.sino-grate.com/product-category/frp-structures-system/",
      format: "Technical directory",
    },
    {
      title: "技术服务与常见问题",
      titleEn: "Technical Service and FAQ",
      description: "选型、测试声明、安装支持、生产周期与质保信息。",
      descriptionEn:
        "Company-published product-selection, test, installation-support, production-time and warranty information.",
      url: "https://www.sino-grate.com/service/",
      format: "Service guide",
    },
    {
      title: "证书与测试文件库",
      titleEn: "Certificate and Test Document Library",
      description: "企业官网公开的符合性文件与产品测试报告图片。",
      descriptionEn:
        "Company-published conformity documents and product test-report images; buyers should verify current scope and validity.",
      url: "https://www.sino-grate.com/about/certificate/",
      format: "Credential library",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/sino-composite-logo.png",
  contactEmail: "sales@sino-grate.com",
  contactPhone: "+86 510 8689 0852",
  address: "No. 21 Zhihui Road, Huishan District, Wuxi, Jiangsu, China",
  website: "https://www.sino-grate.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 17,
  viewCount: 0,
  capabilities: [
    "molded FRP grating",
    "pultruded FRP grating",
    "phenolic grating",
    "pultruded FRP profiles",
    "FRP handrail systems",
    "FRP ladder systems",
    "FRP cable tray",
    "fiberglass rebar",
    "continuous-winding FRP pipe",
    "FRP poles and marine tubes",
    "engineering design and pre-assembly",
  ],
  standardsSupported: [
    "ASTM E84",
    "ASTM D635",
    "ASTM D695-10",
    "ASTM D638-10",
    "ASTM D790-10",
    "ASTM D2863-08",
    "ASTM F3059",
  ],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
