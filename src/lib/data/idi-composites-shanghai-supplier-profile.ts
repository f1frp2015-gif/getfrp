import type { SupplierListing } from "@/lib/db/schema";

export const IDI_COMPOSITES_SHANGHAI_SUPPLIER_ID =
  "sup-idi-composites-shanghai";
export const IDI_COMPOSITES_SHANGHAI_SUPPLIER_SLUG =
  "idi-composites-shanghai";

// Curated from the current IDI China and IDI Composites International sites
// and the 2026 China Composites Expo entry for 艾蒂复合材料（上海）有限公司.
// The China site describes the Shanghai operation as established in 2002,
// while public entity naming and dates are not uniform; established is kept
// null until the exact contracting entity is confirmed. Official group logo
// downloaded on 2026-08-25 from the current global-site header:
// https://idicomposites.com/images/logo_idi.jpg
export const IDI_COMPOSITES_SHANGHAI_SUPPLIER_PROFILE: SupplierListing = {
  id: IDI_COMPOSITES_SHANGHAI_SUPPLIER_ID,
  name: "艾蒂复合材料（上海）有限公司",
  nameEn: "IDI Composites (Shanghai) Co., Ltd.",
  slug: IDI_COMPOSITES_SHANGHAI_SUPPLIER_SLUG,
  location: "上海金山",
  locationEn: "Jinshan, Shanghai, China",
  province: "上海",
  category: "resin",
  products: [
    "玻璃纤维增强团状模塑料（BMC）",
    "玻璃纤维增强片状模塑料（SMC）",
    "定制聚酯和乙烯基酯热固性模塑料",
    "压塑与注塑用高性能热固性复合材料",
    "电气、汽车、轨道交通、建筑及餐饮设备用定制模塑料",
    "中国民用市场热固性模塑料",
  ],
  productsEn: [
    "Glass-fiber-reinforced bulk molding compound (BMC)",
    "Glass-fiber-reinforced sheet molding compound (SMC)",
    "Custom polyester- and vinyl-ester-based thermoset molding compounds",
    "High-performance thermoset composites for compression and injection molding",
    "Custom molding compounds for electrical, automotive, rail, construction and food-service equipment",
    "Thermoset molding compounds for China's civil market",
  ],
  processList: [
    "BMC 团状模塑料配方与生产",
    "SMC 片状模塑料配方与片材生产",
    "聚酯及乙烯基酯配方定制",
    "压塑与注塑应用开发",
    "机械、电气和安全性能实验室测试",
    "客户应用与模具工艺支持",
  ],
  processListEn: [
    "BMC formulation and bulk-compound production",
    "SMC formulation and sheet-compound production",
    "Custom polyester and vinyl-ester formulation",
    "Compression- and injection-molding application development",
    "Mechanical, electrical and safety laboratory testing",
    "Customer application and molding-process support",
  ],
  established: null,
  verified: false,
  description:
    "中国国际复材展网上展厅以“艾蒂复合材料（上海）有限公司”收录展商。IDI 中国官网将上海业务描述为位于上海金山工业区的 SMC/BMC 定制材料制造单位，公开产品包括团状模塑料、片状模塑料、热固性复合材料及中国民用模塑料；公司介绍称上海业务设有生产设备和综合实验室，可进行机械、电气和安全等测试。IDI 全球官网把中国列入其国际制造和服务网络。官网不同位置使用“艾蒂复合材料（上海）有限公司”“艾蒂上海有限公司”和“艾蒂国际复合材料有限公司”等名称，公开成立日期也不能直接与展商法人的工商日期统一，因此本页暂不填写成立年份，并要求采购方确认签约与生产主体。",
  descriptionEn:
    "China Composites Expo lists the exhibitor as IDI Composites (Shanghai) Co., Ltd. The IDI China website describes the Shanghai operation in Jinshan Industrial Zone as a custom SMC and BMC materials manufacturer and publishes bulk molding compound, sheet molding compound, thermoset composites and a China civil-market molding-compound range. The company profile also states that the Shanghai operation has production equipment and integrated laboratories for mechanical, electrical and safety testing. IDI's global site includes China in its international manufacturing and service network. The Chinese site uses several entity forms in different locations, including IDI Composites (Shanghai), IDI Shanghai and IDI International Composites, and its published operation date cannot be reconciled directly with all public legal-entity dates. The establishment year is therefore left blank, and buyers should confirm the contracting and manufacturing entity.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "IDI 中国官网把 BMC 描述为将树脂、惰性填料、短切增强玻纤、催化剂、稳定剂、颜料、脱模剂和增稠剂等混合形成的团状热固性模塑料，可用于压塑或注塑；SMC 则以片材形式供应并面向压塑。官网强调按客户性能需求定制配方，展会资料进一步提到聚酯、乙烯基酯 BMC/SMC 和特殊高性能模塑料，应用覆盖汽车、轨道交通、电气、建筑、餐饮设备、替代能源、农业机械、家电和照明。采购方应按具体牌号而不是“SMC/BMC”总类做技术核验：RFQ 应明确树脂化学体系、玻纤长度与含量、填料、密度、颜色、收缩率、流动性、成型窗口、模温/压力/时间、储存温度与保质期、机械和电气性能、耐热、阻燃、耐候、耐化学品、VOC/气味及表面外观。注塑 BMC 与压塑 BMC/SMC 的设备、模具、流道和排气要求不同，应安排实际模具试料并约定首件、过程能力、批次 CoA 和颜色批差。食品接触、铁路、汽车、电气绝缘和建筑项目还需分别核验目的市场法规、材料级测试、阻燃/烟毒/电痕/介电/耐漏电或其他应用标准，不能用集团经验代替牌号和场地批准。官网本轮页面未提供足以同时核对上海签约主体、生产地址、范围、证书编号和有效期的完整现行证书包，因此不列已核实认证；买方应索取与报价牌号和金山场地对应的现行证书、TDS/SDS、合规声明、测试报告和变更通知。",
  productsServicesSummaryEn:
    "The IDI China site describes BMC as a bulk thermoset molding compound made by combining resin, inert fillers, chopped glass-fiber reinforcement, catalysts, stabilizers, pigments, release agents and thickeners for compression or injection molding. SMC is supplied as sheet compound and is intended primarily for compression molding. The site emphasizes formulation to customer performance requirements, while the expo entry further identifies polyester- and vinyl-ester-based BMC and SMC plus specialty high-performance molding compounds for automotive, rail, electrical, construction, food-service equipment, alternative energy, agriculture, appliances and lighting. Qualification should be grade-specific rather than based on the SMC or BMC family name. An RFQ should state resin chemistry; glass length and content; filler; density; color; shrinkage; flow; molding window; mold temperature, pressure and cycle; storage temperature and shelf life; mechanical and electrical properties; heat, flame, weather and chemical resistance; VOC or odor; and surface appearance. Injection-molded BMC and compression-molded BMC or SMC impose different machine, mold, runner, venting and charge-pattern requirements, so trials in the actual tool should define first-article approval, process capability, batch CoA and color-lot criteria. Food-contact, rail, automotive, electrical-insulation and building programs each require the destination-market regulation and material-level flame, smoke, toxicity, tracking, dielectric or other application tests; group experience is not a substitute for grade and plant approval. The reviewed public pages do not expose a complete current certificate package sufficient to verify the Shanghai contracting entity, Jinshan site, scope, number and validity, so no certification is recorded as independently verified. Request current certificates, TDS and SDS, declarations of conformity, test reports and change-notification terms covering the quoted grade and manufacturing site.",
  ecatalogs: [
    {
      title: "IDI 中国官网",
      titleEn: "Official IDI China Website",
      description: "中国业务、产品、应用和联系信息。",
      descriptionEn: "Official China operations, products, applications and contacts.",
      url: "https://www.idichina.com/",
      format: "Official website",
    },
    {
      title: "IDI 中国公司概况",
      titleEn: "IDI China Company Profile",
      description: "上海业务、实验室、全球网络和实体名称信息。",
      descriptionEn:
        "Official Shanghai operation, laboratory, global network and entity-name information.",
      url: "https://www.idichina.com/gongyi/1.html",
      format: "Company profile",
    },
    {
      title: "IDI 热固性复合材料产品中心",
      titleEn: "IDI Thermoset Composite Product Center",
      description: "BMC、SMC 和中国民用模塑料产品入口。",
      descriptionEn:
        "Official entry point for BMC, SMC and China civil-market molding compounds.",
      url: "https://www.idichina.com/products.html",
      format: "Product directory",
    },
    {
      title: "IDI 团状模塑料 BMC",
      titleEn: "IDI Bulk Molding Compound",
      description: "BMC 组成、压塑/注塑与公开应用信息。",
      descriptionEn:
        "Official BMC composition, compression or injection molding and application information.",
      url: "https://www.idichina.com/product/5.html",
      format: "Technical product page",
    },
    {
      title: "IDI 片状模塑料 SMC",
      titleEn: "IDI Sheet Molding Compound",
      description: "SMC 产品与成型用途。",
      descriptionEn: "Official SMC product and molding-use information.",
      url: "https://www.idichina.com/product/6.html",
      format: "Technical product page",
    },
    {
      title: "IDI 中国联系方式",
      titleEn: "IDI China Contact Page",
      description: "上海金山地址、电话和业务邮箱。",
      descriptionEn:
        "Official Shanghai Jinshan address, telephone and sales email.",
      url: "https://www.idichina.com/contact.html",
      format: "Official contact",
    },
    {
      title: "IDI Composites International 官网",
      titleEn: "Official IDI Composites International Website",
      description: "集团产品、全球位置和官方品牌。",
      descriptionEn: "Official group products, global locations and branding.",
      url: "https://idicomposites.com/",
      format: "Official group website",
    },
    {
      title: "中国国际复材展 A 字母展商页",
      titleEn: "China Composites Expo Exhibitors — A",
      description: "艾蒂上海展商身份、模塑料范围和应用行业。",
      descriptionEn:
        "Organizer entry for IDI Shanghai, molding compounds and application industries.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=A",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/idi-composites-logo.jpg",
  contactEmail: "sales-asia@idicomposites.com",
  contactPhone: "+86 21 5727 7688",
  address:
    "No. 918 Jinbai Road, Jinshan Industrial Zone, Shanghai 201506, China",
  website: "https://www.idichina.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 26,
  viewCount: 0,
  capabilities: [
    "bulk molding compound",
    "sheet molding compound",
    "glass-fiber thermoset compounds",
    "polyester molding compounds",
    "vinyl-ester molding compounds",
    "compression-molding materials",
    "injection-molding materials",
    "custom thermoset formulation",
    "material application testing",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
