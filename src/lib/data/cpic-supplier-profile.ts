import type { SupplierListing } from "@/lib/db/schema";

export const CPIC_SUPPLIER_ID = "sup-cpic";
export const CPIC_SUPPLIER_SLUG = "chongqing-polycomp-international";

// Curated from CPIC's official website. The logo is the current header asset
// published at https://www.cpicfiber.com/images/main_logo_new.png and was
// downloaded for local use on 2026-08-06. Company-published claims are not
// treated as independent GetFRP verification.
export const CPIC_SUPPLIER_PROFILE: SupplierListing = {
  id: CPIC_SUPPLIER_ID,
  name: "重庆国际复合材料股份有限公司",
  nameEn: "Chongqing Polycomp International Corporation",
  slug: CPIC_SUPPLIER_SLUG,
  location: "重庆市大渡口区",
  locationEn: "Dadukou District, Chongqing, China",
  province: "重庆",
  category: "fiber",
  products: [
    "热固性与热塑性直接无捻粗纱",
    "合股无捻粗纱",
    "热塑性、BMC 与湿法短切纱",
    "玻璃纤维细纱与膨体纱",
    "机织布与方格布",
    "短切毡、湿法毡、缝编毡与针刺毡",
    "多轴向玻璃纤维织物",
  ],
  productsEn: [
    "Thermosetting and thermoplastic direct roving",
    "Assembled fiberglass roving",
    "Thermoplastic, BMC and wet chopped strands",
    "Glass fiber yarn and bulked yarn",
    "Woven fabric and woven roving",
    "Chopped-strand, wet-laid, stitched and needled mats",
    "Multiaxial fiberglass fabrics",
  ],
  processList: [
    "连续玻璃纤维拉丝",
    "浸润剂处理与粗纱合股",
    "短切加工",
    "细纱加捻与膨化",
    "机织与多轴向织物加工",
    "玻纤毡粘结、缝编与针刺加工",
  ],
  processListEn: [
    "Continuous glass-fiber drawing",
    "Sizing application and roving assembly",
    "Glass-fiber chopping",
    "Yarn twisting and bulking",
    "Woven and multiaxial fabric conversion",
    "Bonded, stitched and needled mat production",
  ],
  established: 1991,
  verified: false,
  description:
    "重庆国际复合材料股份有限公司（CPIC）成立于1991年，是云天化集团玻纤及复合材料产业的重要企业，核心业务涵盖玻璃纤维及复合材料的研发、生产与销售。公司官网披露其在中国重庆、珠海、常州以及海外设有生产基地，并通过北美、欧洲和中国香港销售子公司服务国际市场。",
  descriptionEn:
    "Chongqing Polycomp International Corporation (CPIC), established in 1991, is a Yuntianhua Group company focused on the R&D, production and sale of glass fiber and composite materials. CPIC's official website lists production bases in Chongqing, Zhuhai and Changzhou in China as well as overseas operations, supported by sales subsidiaries in North America, Europe and Hong Kong, China.",
  certifications: [
    "AEO 高级认证企业（公司官网公示；采购时确认当前状态）",
    "高性能玻璃 AS9100D 认证（公司官网公示；采购时确认证书范围与有效期）",
    "CNAS 实验室认可（公司官网公示；采购时确认当前范围与有效期）",
    "ECS301HP 欧盟食品接触材料 EU 10/2011 符合推荐信（产品专项）",
  ],
  certificationsEn: [
    "AEO advanced certified enterprise (company-published; confirm current status)",
    "AS9100D certification for high-performance glass (company-published; confirm current scope and validity)",
    "CNAS laboratory accreditation (company-published; confirm current scope and validity)",
    "EU 10/2011 compliance recommendation for ECS301HP food-contact applications (product-specific)",
  ],
  productsServicesSummary:
    "CPIC 官网产品目录覆盖直接纱、合股纱、短切纱、细纱、膨体纱、机织布、毡和多轴向布。其热固性直接纱可采用 E、ECT、ECR 与 TM 玻璃体系，适配不饱和聚酯、乙烯基酯、酚醛和环氧树脂，并面向缠绕、拉挤、手糊、织造等工艺；热塑性产品覆盖 PP、PA、PBT 等树脂及 LFT、GMT、双螺杆挤出等工艺。采购时应按具体牌号确认玻璃类型、浸润剂、tex、单丝直径、适配树脂、包装、TDS/SDS、批次测试、产品专项认证、原产地和目的市场贸易救济风险。",
  productsServicesSummaryEn:
    "CPIC's official product directory covers direct and assembled rovings, chopped strands, glass fiber yarn, bulked yarn, woven fabrics, mats and multiaxial fabrics. Its thermosetting direct-roving range is published in E, ECT, ECR and TM glass systems for UPR, vinyl ester, phenolic and epoxy resins across winding, pultrusion, hand lay-up and weaving. Thermoplastic grades cover resins such as PP, PA and PBT and processes including LFT, GMT and twin-screw extrusion. Buyers should confirm the exact grade, glass type, sizing, tex, filament diameter, resin compatibility, package, TDS/SDS, batch testing, product-specific certification, origin and destination-market trade-remedy exposure before approval.",
  ecatalogs: [
    {
      title: "CPIC 标准产品目录",
      titleEn: "CPIC Standard Product Directory",
      description: "CPIC 官网直接纱、合股纱、短切纱、细纱、织物与毡类产品入口。",
      descriptionEn:
        "Official product directory for direct and assembled rovings, chopped strands, yarns, fabrics and mats.",
      url: "https://www.cpicfiber.com/channels/13.html",
      format: "Official product directory",
    },
    {
      title: "CPIC 直接纱产品目录",
      titleEn: "CPIC Direct Roving Catalog",
      description: "热固性与热塑性直接纱牌号、适配树脂、工艺和产品说明书。",
      descriptionEn:
        "Official thermosetting and thermoplastic direct-roving grades, compatible resins, processes and data sheets.",
      url: "https://www.cpicfiber.com/channels/40.html",
      format: "Product catalog",
    },
    {
      title: "CPIC 公司简介",
      titleEn: "CPIC Company Profile",
      description: "公司沿革、业务定位、生产布局与海外销售网络。",
      descriptionEn:
        "Official overview of company history, business focus, production footprint and international sales network.",
      url: "https://www.cpicfiber.com/channels/2.html",
      format: "Company profile",
    },
    {
      title: "CPIC 资质认证",
      titleEn: "CPIC Qualification & Certification Directory",
      description: "公司官网公示的企业、体系和产品专项资质入口。",
      descriptionEn:
        "Official directory of company, management-system and product-specific qualifications; buyers should verify current scope and validity.",
      url: "https://www.cpicfiber.com/channels/16.html",
      format: "Certification directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-06T00:00:00.000Z"),
  logo: "/supplier-assets/cpic-logo.png",
  contactEmail: "zhangyao3872@cpicfiber.com",
  contactPhone: "+86-23-68156883",
  address:
    "Zone B, Jianqiao Industrial Zone, Dadukou District, Chongqing, China",
  website: "https://www.cpicfiber.com/",
  enterpriseId: null,
  scaleTier: "XL",
  brandPriority: 28,
  viewCount: 0,
  capabilities: [
    "glass fiber",
    "direct roving",
    "assembled roving",
    "E-glass",
    "ECT glass",
    "ECR glass",
    "high-modulus TM glass",
    "chopped strands",
    "glass fiber yarn",
    "woven roving",
    "fiberglass mat",
    "multiaxial fabric",
    "pultrusion reinforcement",
    "filament winding reinforcement",
    "thermoplastic reinforcement",
  ],
  standardsSupported: ["AS9100D", "CNAS", "AEO", "EU 10/2011 (ECS301HP)"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-06T00:00:00.000Z"),
  updatedAt: new Date("2026-08-06T00:00:00.000Z"),
};
