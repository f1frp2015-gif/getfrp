import type { SupplierListing } from "@/lib/db/schema";

export const JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_ID =
  "sup-jiangsu-aosheng-composites";
export const JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_SLUG =
  "jiangsu-aosheng-composites";

// Curated from Aosheng's current official corporate, basic-material, wind,
// application, manufacturing and contact pages plus the 2026 CCE directory.
// The black/red navigation logo was downloaded from aoshenghi-tech.com on
// 2026-08-25; the site's primary white logo was unsuitable for a white card.
export const JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_PROFILE: SupplierListing = {
  id: JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_ID,
  name: "江苏澳盛复合材料科技股份有限公司",
  nameEn: "Jiangsu Aosheng Composite Materials Technology Co., Ltd.",
  slug: JIANGSU_AOSHENG_COMPOSITES_SUPPLIER_SLUG,
  location: "江苏苏州",
  locationEn: "Suzhou, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "碳纤维机织物（平纹、斜纹、缎纹和单向）",
    "碳纤维与芳纶、玻纤或玄武岩纤维混编织物",
    "单向与织物碳纤维预浸料",
    "风电叶片用碳纤维拉挤板和单向块材",
    "碳纤维水翼与鞋底支撑件",
    "碳纤维高尔夫球杆与自行车部件（集团运动业务询价）",
    "碳纤维无人机壳体和螺旋桨叶片",
    "碳纤维笔记本电脑壳与 3C 外观件",
    "汽车碳纤维内外饰和结构件（集团镇江业务询价）",
    "III/IV 型储氢气瓶（集团氢能业务询价）",
  ],
  productsEn: [
    "Carbon fiber woven fabrics — plain, twill, satin and unidirectional",
    "Carbon fiber hybrid fabrics with aramid, glass or basalt fiber",
    "Unidirectional and woven carbon fiber prepreg",
    "Carbon fiber pultruded plates and unidirectional blocks for wind blades",
    "Carbon fiber hydrofoils and sole-support components",
    "Carbon fiber golf-club and bicycle components — group sports-sector inquiry",
    "Carbon fiber drone shells and propeller blades",
    "Carbon fiber laptop cases and 3C cosmetic parts",
    "Automotive carbon fiber interior, exterior and structural parts — Zhenjiang group inquiry",
    "Type III and Type IV composite hydrogen cylinders — group hydrogen-sector inquiry",
  ],
  processList: [
    "碳纤维织造与混编",
    "单向和织物预浸",
    "碳纤维拉挤成型",
    "预浸料铺层与热压罐固化",
    "真空导入成型",
    "复合材料模压成型",
    "复材结构设计、仿真与原型开发",
    "CNC 加工与装配",
    "表面涂装与化学镀处理",
    "样件验证和批量导入",
  ],
  processListEn: [
    "Carbon fiber weaving and hybrid-fabric manufacture",
    "Unidirectional and woven-fabric prepregging",
    "Carbon fiber pultrusion",
    "Prepreg lay-up and autoclave curing",
    "Vacuum infusion",
    "Composite compression molding",
    "Composite structural design, simulation and prototyping",
    "CNC machining and assembly",
    "Surface coating and chemical-plating treatment",
    "Prototype validation and serial-production launch",
  ],
  established: 2002,
  verified: false,
  description:
    "江苏澳盛复合材料科技股份有限公司是苏州吴江的碳纤维复合材料企业。2026 中国国际复材展名录与其现行官网共同支持碳纤维织物、混编织物、预浸料、风电叶片拉挤板以及运动、无人机和 3C 复材应用。GetFRP 仅把 carbon fiber fabric、carbon fiber plate、pultruded、resin infusion 与 vacuum infusion 等有实测需求的英文词分配给官网明确产品或工艺。官网同时展示镇江汽车、晋江运动、苏州氢能和海外基地，因此本页把终端产品标为集团询价范围；采购方须确认实际制造工厂、合同法人和适用规格。官网关于奖项、客户、规模、CNAS、专利和标准参与均保持公司自述，不作为平台认证。",
  descriptionEn:
    "Jiangsu Aosheng Composite Materials Technology Co., Ltd. is a Suzhou-based carbon-composite company whose current corporate website and 2026 China Composites Expo listing support carbon-fiber woven and hybrid fabrics, prepreg, wind-blade pultruded plate and composite application development. The official site also presents automotive, sports, hydrogen, aviation and overseas footprints under the Aosheng group. GetFRP therefore assigns measured-demand phrases such as carbon fiber fabric, carbon fiber plate, pultruded, resin infusion and vacuum infusion only where a published product or manufacturing route supports them. Fishing rods may be an end use of prepreg, but they are not listed here as an Aosheng finished product. Likewise, automotive parts, sports products and hydrogen cylinders are marked as group-sector inquiries rather than automatically attributed to the Jiangsu parent factory. Buyers must confirm the exact legal entity, production site and specification behind a quotation. Awards, customer relationships, capacity, CNAS, patent and standards-participation statements on the website remain company claims, not GetFRP verification.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "澳盛官网的基础材料目录覆盖平纹、斜纹、缎纹、单向碳纤维织物以及与芳纶、玻纤、玄武岩纤维的混编织物，并展示单向和织物预浸料；风电业务明确列出碳纤维拉挤板和单向块材。询价织物时应约定纤维牌号与丝束、组织、经纬密度、面密度、幅宽、纤维方向、上浆相容性、外观缺陷和卷装；预浸料还需锁定树脂体系、树脂含量、挥发分、流变窗口、Tg、固化制度、离型材料、冷藏寿命和运输温度。拉挤板 RFQ 应给出截面、长度、公差、纤维体积分数、直线度、孔隙率、玻璃化温度、纵横向性能、疲劳、搭接/粘接表面、检测方案和风电叶片设计验证要求，不能只用 carbon fiber plate 通用关键词替代技术规范。官网发布织造、预浸、拉挤、热压罐、真空导入、模压、机加工和表面处理能力，但不同工艺不代表任意产品都可互换生产；项目需确认对应设备、模具、最大尺寸、节拍、检验和变更控制。水翼、鞋底支撑、无人机壳体、桨叶和笔记本电脑壳可作为应用询价起点；高尔夫、自行车、汽车与储氢气瓶涉及集团不同事业部或子公司，必须在 NDA、样件和合同阶段核对实际法人、地址、知识产权、法规责任和量产记录。官网旧域名 aosheng-china.com 在本轮标准浏览器核验时返回 403，现行 aoshenghi-tech.com 页脚明确江苏澳盛主体，本页采用现行域名和苏州总部联系方式。官网展示的奖项、客户、产能、实验室、专利和标准参与仍是企业公开陈述；本轮未取得能逐项对应法人、地址、范围、编号和有效期的证书文件，故认证和支持标准保持为空。",
  productsServicesSummaryEn:
    "Aosheng's official basic-material catalog covers plain, twill, satin and unidirectional carbon-fiber fabrics, hybrids with aramid, glass or basalt fiber, and both unidirectional and woven-fabric prepreg. Its wind-power pages explicitly publish carbon-fiber pultruded plate and unidirectional block. A fabric RFQ should define fiber grade and tow, weave, warp and weft count, areal weight, usable width, fiber orientation, sizing compatibility, cosmetic defects and roll packing. A prepreg RFQ additionally needs the resin family, resin content, volatiles, rheology window, glass-transition target, cure cycle, release material, frozen shelf life and cold-chain requirements. A pultruded-plate inquiry should specify cross-section, cut length, tolerances, fiber volume, straightness, void limit, Tg, longitudinal and transverse properties, fatigue, bonding-surface preparation, inspection and the wind-blade qualification plan; the broad phrase carbon fiber plate is not a substitute for this specification. The website publishes weaving, prepregging, pultrusion, autoclave cure, vacuum infusion, compression molding, machining and surface-treatment capability, but those processes are not interchangeable or necessarily available for every item. Confirm the applicable equipment, tool, maximum envelope, cycle time, inspection plan and change control for the quoted part. Hydrofoils, sole supports, drone shells, propeller blades and laptop cases are useful application-entry points. Golf, bicycle, automotive and hydrogen-cylinder work appears across different group sectors or subsidiaries, so the NDA, prototype order and supply contract should name the actual legal entity, address, intellectual-property responsibility, regulatory scope and serial-production evidence. The former aosheng-china.com domain returned HTTP 403 in this review; the current aoshenghi-tech.com footer names the Jiangsu entity, and this profile uses that current domain and its Suzhou-headquarters contact. Published awards, customers, consumption, laboratory status, patents and standards participation remain company statements. No certificate file was verified against a specific entity, address, scope, number and validity date, so certifications and supported standards remain empty.",
  ecatalogs: [
    { title: "澳盛官网", titleEn: "Official Aosheng Website", description: "现行公司与业务入口。", descriptionEn: "Current company and business entry.", url: "https://www.aoshenghi-tech.com/", format: "Official website" },
    { title: "基础材料", titleEn: "Aosheng Basic Materials", description: "织物、预浸料和材料产品。", descriptionEn: "Published fabrics, prepreg and materials.", url: "https://www.aoshenghi-tech.com/products-and-applications/basic-materials", format: "Product page" },
    { title: "风电业务", titleEn: "Aosheng Wind Power", description: "拉挤板和单向块材应用。", descriptionEn: "Pultruded plate and UD-block applications.", url: "https://www.aoshenghi-tech.com/products-and-applications/wind-power-business", format: "Product page" },
    { title: "公司与业务版图", titleEn: "Aosheng About and Footprints", description: "成立沿革、总部与集团边界。", descriptionEn: "History, headquarters and group-footprint boundary.", url: "https://www.aoshenghi-tech.com/about-us", format: "Company page" },
    { title: "2026 官方手册", titleEn: "Aosheng 2026 Brochure", description: "官网发布的英文产品手册。", descriptionEn: "Company-published English product brochure.", url: "https://www.aoshenghi-tech.com/Public/Uploads/uploadfile/files/20260307/AOSHENGBrochure1.pdf", format: "PDF" },
    { title: "中国国际复材展 J 字母页", titleEn: "China Composites Expo — J Directory", description: "展商主体来源。", descriptionEn: "Organizer source for exhibitor identity.", url: "https://www.chinacompositesexpo.com/en/netshow.php?head=J", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/jiangsu-aosheng-logo-dark.png",
  contactEmail: null,
  contactPhone: "+86 139 1886 6912",
  address: "Intersection of Zhonghe Road and Fuping Road, Wujiang District, Suzhou, Jiangsu, China",
  website: "https://www.aoshenghi-tech.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 30,
  viewCount: 0,
  capabilities: ["carbon fiber fabric", "carbon fiber prepreg", "carbon fiber pultruded plate", "pultrusion", "vacuum infusion", "autoclave curing", "compression molding", "composite parts"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
