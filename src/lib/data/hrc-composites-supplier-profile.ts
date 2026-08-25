import type { SupplierListing } from "@/lib/db/schema";

export const HRC_COMPOSITES_SUPPLIER_ID = "sup-hrc-composites";
export const HRC_COMPOSITES_SUPPLIER_SLUG = "hrc-composites";

// Curated from HRC's current official about, production, sustainability and
// contact pages plus the 2026 CCE exhibitor directory. The official white/red
// navigation logo was downloaded 2026-08-25 from grouphrc.com and placed on a
// dark presentation canvas so it remains legible in GetFRP's white logo card.
export const HRC_COMPOSITES_SUPPLIER_PROFILE: SupplierListing = {
  id: HRC_COMPOSITES_SUPPLIER_ID,
  name: "亨睿碳纤维",
  nameEn: "HRC Group",
  slug: HRC_COMPOSITES_SUPPLIER_SLUG,
  location: "江苏常熟",
  locationEn: "Changshu, Jiangsu, China",
  province: "江苏",
  category: "composite",
  products: [
    "碳纤维热塑复合板",
    "再生碳纤维增强注塑粒子",
    "再生碳纤维无纺布",
    "再生碳纤维热塑毡",
    "再生碳纤维热固预浸料",
    "碳纤维建筑模板体系",
    "再生碳纤维匹克球拍",
    "碳纤维复合行李箱板件",
    "碳纤维汽车内外饰与结构部件",
    "碳纤维航空零部件与机体结构",
  ],
  productsEn: [
    "Carbon fiber sheets — thermoplastic composite",
    "Recycled carbon-fiber reinforced injection-molding pellets",
    "Recycled carbon-fiber nonwoven fabric",
    "Recycled carbon-fiber thermoplastic mats",
    "Recycled carbon-fiber thermoset prepreg",
    "Carbon fiber composite building formwork systems",
    "Recycled carbon fiber pickleball paddles",
    "Carbon fiber composite luggage panels",
    "Carbon fiber automotive interior, exterior and structural parts",
    "Carbon fiber aerospace components and airframe structures",
  ],
  processList: [
    "复材中间体材料开发与配方设计",
    "碳纤维复材产品工程设计与仿真",
    "热塑性复材注塑成型",
    "高压树脂传递模塑（HP-RTM）",
    "湿法模压成型",
    "预浸料热压罐固化",
    "复合材料纤维缠绕",
    "零部件后处理、装配与量产导入",
    "CFRP 废料微波裂解与纤维回收",
    "再生纤维非织造、配混与中间体制造",
  ],
  processListEn: [
    "Composite intermediate-material development and formulation",
    "Carbon-composite product engineering, design and simulation",
    "Thermoplastic composite injection molding",
    "High-pressure resin transfer molding (HP-RTM)",
    "Wet compression molding",
    "Autoclave curing of prepreg laminates",
    "Composite filament winding",
    "Part finishing, assembly and serial-production launch",
    "Microwave pyrolysis and fiber recovery from CFRP waste",
    "Recycled-fiber nonwoven, compounding and intermediate manufacture",
  ],
  established: 2014,
  verified: false,
  description:
    "HRC（亨睿碳纤维）是以江苏常熟为中国研发、汽车、航空及碳中和业务基地的先进复合材料解决方案集团。中国国际复材展 2026 网上展厅以 HRC 主体收录其研发、工程、咨询、工业化量产、回收和复材部件业务；官网当前公开热塑注塑、HP-RTM、湿法模压、热压罐和纤维缠绕能力，并展示再生碳纤维注塑粒子、无纺布、热塑毡、预浸料、热塑板、建筑模板、匹克球拍、行李箱和汽车/航空部件。本页据此植入 carbon fiber sheets、carbon fiber pickleball paddle 与 carbon fiber products 等有实际需求的英文关键词，只覆盖官网明确列出的产品，不把工程服务或通用工艺改写成现货材料。",
  descriptionEn:
    "HRC Group is an advanced-composites solution provider whose current official website identifies Changshu, Jiangsu as the location of its China R&D, automotive, aerospace and carbon-neutrality operations. The 2026 China Composites Expo directory lists HRC for R&D, engineering, consulting, industrialized serial production, recycling and finished composite parts. HRC's current pages publish thermoplastic injection molding, HP-RTM, wet compression molding, autoclave curing and filament winding, together with recycled-carbon injection pellets, nonwoven, thermoplastic mat, prepreg, thermoplastic sheet, building formwork, pickleball paddle, luggage and automotive or aerospace parts. GetFRP therefore assigns measured-demand phrases including carbon fiber sheets, carbon fiber pickleball paddle and carbon fiber products only to explicit catalog evidence. Engineering services and generic process capability are not relabeled as stock material. HRC is presented as the exhibitor brand/group; buyers must identify the exact HRC legal entity, plant and contracting party for each project.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "HRC 官网把服务链分为中间体开发、工程设计、工艺开发、量产、后处理和回收，并分别公开常熟研发、汽车、航空与碳中和地址。采购项目应首先确认承接业务的具体法人、生产基地和合同主体，再用图纸、材料规范、年度量纲和目标成本定义交付。碳纤维汽车或航空部件 RFQ 应锁定纤维牌号与丝束、织物/UD/短纤形态、树脂与玻璃化温度、铺层、纤维体积分数、孔隙率、外观等级、尺寸与基准、公差、嵌件、胶接、涂装、阻燃、导电/屏蔽、疲劳、冲击、环境老化、无损检测、首件和变更控制；HP-RTM、湿法模压、热塑注塑、热压罐和缠绕之间不可互换，应在样件阶段固定工艺路线、模具责任、节拍和验证计划。再生材料 RFQ 还应锁定废料来源与分选、回收路线、纤维长度分布、洁净度、残留树脂、上浆/相容剂、基体牌号、批间波动、机械性能保留、碳足迹核算边界和追溯。注塑粒子、无纺布、热塑毡、预浸料和热塑板需分别约定含量、面密度、厚度、幅宽、挥发分、树脂流动/熔指、储存期、成型窗口和包装；匹克球拍、行李箱、建筑模板等终端应用不能代表所有规格已商品化，应索取对应产品图纸、样品、BOM 和量产记录。官网公开的回收能力、性能保留、规模、客户/行业地位和体系认证均属于公司自述；本轮未逐项取得能对应具体法律主体、地址、范围、编号和有效期的证书或第三方报告，所以认证与标准数组保持为空，且不把宣传数字写成 GetFRP 验证结论。",
  productsServicesSummaryEn:
    "HRC's official site structures the offer around intermediate-material development, engineering, process development, serial production, finishing and recycling, and publishes separate Changshu locations for R&D, automotive, aerospace and carbon-neutrality operations. A buyer should first identify the legal entity, plant and contracting party responsible for the quoted scope, then define the drawing, material specification, annual volume and target economics. An automotive or aerospace carbon-composite RFQ should lock fiber grade and tow, woven, UD or chopped form, resin and glass-transition requirement, lay-up, fiber volume, void limit, cosmetic class, datums and tolerances, inserts, bonding, coating, flame behavior, conductivity or shielding, fatigue, impact, environmental aging, NDT, first-article acceptance and change control. HP-RTM, wet compression molding, thermoplastic injection, autoclave cure and filament winding are not interchangeable labels; the prototype phase should freeze the route, tooling ownership, cycle target and validation plan. A recycled-material RFQ additionally needs feedstock source and sorting, recovery route, fiber-length distribution, cleanliness, residual resin, sizing or compatibilizer, matrix grade, lot variability, retained mechanical properties, carbon-footprint boundary and traceability. Injection pellets, nonwoven, thermoplastic mat, prepreg and sheet each need controlled content, areal weight, thickness, width, volatiles, flow or melt index, shelf life, processing window and packing. Pickleball paddles, luggage panels and building formwork are published applications, not proof that every geometry is a stocked standard item; request the applicable drawing, sample, BOM and serial-production evidence. HRC's capacity, recovered-property, market-position and management-system statements remain company claims. This review did not obtain certificate files aligned to a specific legal entity, address, scope, number and validity date, so no certification or standard is marked verified.",
  ecatalogs: [
    { title: "HRC 官网", titleEn: "Official HRC Website", description: "集团、服务与应用入口。", descriptionEn: "Official group, service and application entry.", url: "https://www.grouphrc.com/", format: "Official website" },
    { title: "HRC 量产能力", titleEn: "HRC Production Capabilities", description: "注塑、HP-RTM、湿法模压、热压罐与缠绕。", descriptionEn: "Injection, HP-RTM, wet compression, autoclave and winding.", url: "https://www.grouphrc.com/cn/services/production", format: "Capability page" },
    { title: "HRC 可持续产品", titleEn: "HRC Recycled Products", description: "回收方案和再生中间体/终端产品。", descriptionEn: "Recycling solutions and regenerated intermediate/end products.", url: "https://www.grouphrc.com/cn/sustainability", format: "Product page" },
    { title: "HRC 联系方式", titleEn: "Official HRC Contact", description: "常熟各业务基地地址和电话。", descriptionEn: "Published Changshu operating locations and telephones.", url: "https://www.grouphrc.com/contact", format: "Contact page" },
    { title: "中国国际复材展 HRC 页面", titleEn: "China Composites Expo — HRC", description: "展商主体与业务类别。", descriptionEn: "Organizer source for exhibitor identity and scope.", url: "https://www.chinacompositesexpo.com/cn/netshow-1921-4501508.html", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/hrc-logo.svg",
  contactEmail: null,
  contactPhone: "+86 512 8988 8688",
  address: "No. 59 Huangpujiang Road, Changshu, Jiangsu, China",
  website: "https://www.grouphrc.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 29,
  viewCount: 0,
  capabilities: ["carbon fiber composite parts", "carbon fiber sheets", "HP-RTM", "wet compression molding", "autoclave curing", "filament winding", "recycled carbon fiber", "serial production"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
