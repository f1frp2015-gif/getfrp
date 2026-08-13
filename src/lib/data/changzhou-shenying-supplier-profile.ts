import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_SHENYING_SUPPLIER_ID =
  "sup-changzhou-shenying-carbon-composites";
export const CHANGZHOU_SHENYING_SUPPLIER_SLUG =
  "changzhou-shenying-carbon-fiber-composites";

// Curated from Changzhou Shenying's active FRPAPP-hosted official company,
// product and contact pages; the current China Composites Expo directory; a
// Wujin District government profile; and a public-company filing. This legal
// entity belongs to the Lianyungang Yingyou industrial group and is distinct
// from GetFRP's Zhongfu Shenying Carbon Fiber Co., Ltd. profile. Scale,
// equipment, exports, applications and installed-capability statements remain
// company-, organizer- or filing-published and have not been independently
// verified by GetFRP. Reviewed 2026-08-13: the standalone domain published on
// the contact page, tskplastic.com.cn, no longer responds, but the hosted
// official profile is active and identifies the exact company. It renders the
// company name as text and exposes only FRPAPP platform graphics, not a current
// supplier logo, so this profile deliberately uses the text fallback.
export const CHANGZHOU_SHENYING_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_SHENYING_SUPPLIER_ID,
  name: "常州神鹰碳塑复合材料有限公司",
  nameEn: "Changzhou Shenying Carbon Fiber Composites Co., Ltd.",
  slug: CHANGZHOU_SHENYING_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "碳纤维汽车零部件与结构件",
    "医用透 X 光碳纤维板",
    "碳纤维传动轴",
    "碳纤维无人机与整流罩部件",
    "超长碳纤维结构件、棒材与机械臂",
    "碳纤维齿轮、尾鳍、琴盒及其他定制制品",
    "长玻纤及碳纤维增强热塑性粒子",
    "注塑、吹塑汽车与工业塑料部件",
  ],
  productsEn: [
    "Carbon-fiber automotive components and structures",
    "Radiolucent carbon-fiber medical panels",
    "Carbon-fiber drive shafts",
    "Carbon-fiber UAV and fairing components",
    "Extra-long carbon-fiber structures, rods and robotic arms",
    "Carbon-fiber gears, fins, instrument cases and other custom products",
    "Long-glass- and carbon-fiber-reinforced thermoplastic pellets",
    "Injection- and blow-molded automotive and industrial plastic parts",
  ],
  processList: [
    "碳纤维短纤造粒",
    "三维纤维缠绕",
    "碳纤维复材拉挤",
    "复合材料模压成型",
    "热压罐成型",
    "RTM 液体模塑",
    "80–2,800 吨注塑与全自动吹塑",
    "模具设计制造、塑料焊接与气辅注射",
  ],
  processListEn: [
    "Chopped-carbon-fiber pellet compounding",
    "Three-dimensional fiber winding",
    "Carbon-fiber composite pultrusion",
    "Composite compression molding",
    "Autoclave processing",
    "Resin transfer molding",
    "Injection molding on company-published 80–2,800-tonne machines and automated blow molding",
    "Mold design and manufacture, plastic welding and gas-assisted injection",
  ],
  established: 2011,
  verified: false,
  description:
    "常州神鹰碳塑复合材料有限公司位于江苏武进经济开发区，是鹰游集团体系下从事碳纤维复合材料及塑料部件研发制造的常州法人。官网将业务分为模具、注塑、吹塑、碳塑新复材与碳纤维应用研发，并公开缠绕、拉挤、模压、热压罐和 RTM 等复材工艺；2026 中国国际复材展资料则将其产品归入碳纤维及织物、环氧树脂、预浸料和复合材料最终制品/部件。武进区政府 2025 年资料称公司自 2011 年落户西太湖以来持续研发生产碳纤维复材及制品。该公司与 GetFRP 已收录、隶属中国建材体系的中复神鹰碳纤维股份有限公司不是同一法人，本页不会合并两者资料。",
  descriptionEn:
    "Changzhou Shenying Carbon Fiber Composites Co., Ltd. is a Changzhou legal entity within the Lianyungang Yingyou industrial group, based in Wujin Economic Development Zone, Jiangsu. Its official profile divides the business into mold engineering, injection molding, blow molding, carbon-fiber-reinforced plastics and carbon-fiber application R&D, and publishes winding, pultrusion, compression molding, autoclave and RTM capabilities. The 2026 China Composites Expo directory classifies its offering under carbon fiber and fabric, epoxy resin, prepreg, and finished composite products or parts. A 2025 Wujin District government profile says the company has developed and produced carbon-fiber composites and products in the West Taihu area since 2011. It is not the same legal entity as GetFRP-listed Zhongfu Shenying Carbon Fiber Co., Ltd. in the CNBM group, and the two records are not merged.",
  certifications: [
    "常州市武进区政府 2025 年公开资料称公司为国家高新技术企业和江苏省专精特新企业，并建有一个省级工程技术研究中心及一个市级企业技术中心；采购方应从主管部门或企业取得现行认定文件，核验主体、编号、范围和有效期",
  ],
  certificationsEn: [
    "A 2025 Wujin District government profile describes the company as a national high-tech enterprise and a Jiangsu specialized and innovative enterprise, with one provincial engineering-technology research center and one municipal enterprise technology center. Buyers should obtain current authority or company documents and validate the legal entity, reference number, scope and validity",
  ],
  productsServicesSummary:
    "官网公司介绍列出碳纤维汽车部件、医用透 X 光板、传动轴、无人机等制品，并称具备短纤造粒、三维缠绕、拉挤、模压、热压罐和 RTM 设备；产品目录另展示超长结构件、机械手臂棒材、齿轮、整流罩、尾鳍、琴盒、长玻纤粒子等 2014 年发布的示例。官网还称拥有 80–2,800 吨注塑机、全自动吹塑机、模具与塑料焊接设备，并出口至日本、美国、菲律宾和中东；这些较早的设备、产品和出口陈述应通过近期设备清单、订单/报关资料和现场审厂重新核验。官网与 CCE 均曾公布注册资本 2.5 亿元、总投资 3.3 亿元和 6.8 万平方米厂房；2024 年公开公司文件则记录该法人注册资本为 11,362 万元，两套口径明显冲突，采购方应以最新营业执照、股权材料和经审计/盖章资料为准。复材部件 RFQ 应明确材料体系与纤维牌号、铺层/纤维含量、成型工艺、模具和工装责任、尺寸与外观公差、孔隙和缺陷限值、力学及功能测试、无损检测、首件/样件、批次追溯和 CoC/CoA；汽车项目还应明确 APQP、PPAP、控制计划和变更管理，医疗透 X 板需定义射线衰减、图像伪影、生物相容性/清洁要求及适用法规，传动轴和旋转件需定义扭矩、临界转速、动平衡、疲劳及超速验证。询价还应确认当前生产地点、外协工序、产能、MOQ、交期、包装、出口文件、知识产权、质保与不合格处置。",
  productsServicesSummaryEn:
    "The official company profile lists carbon-fiber automotive parts, radiolucent medical panels, drive shafts and UAV components, and states that the site has chopped-fiber pelletizing, three-dimensional winding, pultrusion, compression molding, autoclave and RTM equipment. Its product directory additionally shows examples published in 2014, including extra-long structures, robotic-arm rods, gears, fairings, fins, instrument cases and long-glass-fiber pellets. The site also claims 80–2,800-tonne injection machines, automated blow molding, mold and plastic-welding equipment, and exports to Japan, the United States, the Philippines and the Middle East. Buyers should revalidate these older equipment, product and export statements through a current machine list, order or customs evidence and an on-site audit. Both the official profile and CCE have published RMB 250 million registered capital, RMB 330 million total investment and 68,000 m² of buildings, while a 2024 public-company filing records RMB 113.62 million registered capital for the legal entity. These figures materially conflict, so buyers should rely on the latest business license, ownership evidence and audited or company-stamped documents. A composite-part RFQ should define the material system and fiber grade; layup or fiber fraction; molding route; mold and fixture responsibility; dimensional and cosmetic tolerances; void and defect limits; mechanical and functional testing; NDT; first article or sample; lot traceability; and CoC or CoA. Automotive work should add APQP, PPAP, control plan and change management. Radiolucent medical panels require X-ray attenuation, imaging-artifact, biocompatibility or cleaning and applicable-regulatory requirements, while drive shafts and rotating parts require torque, critical speed, dynamic balance, fatigue and overspeed validation. The RFQ should also confirm the current production site, subcontracted operations, capacity, MOQ, lead time, packaging, export documents, intellectual property, warranty and nonconformance handling.",
  ecatalogs: [
    {
      title: "常州神鹰官方公司介绍",
      titleEn: "Official Changzhou Shenying Company Profile",
      description:
        "集团关系、业务模块、公开规模、设备工艺、产品与出口市场自述。",
      descriptionEn:
        "Official group relationship, business modules, published scale, equipment, processes, products and export-market statements.",
      url: "http://lygcp.frpapp.com/introduce/",
      format: "Company profile",
    },
    {
      title: "碳纤维与塑料制品目录",
      titleEn: "Carbon-Fiber & Plastic Product Directory",
      description:
        "官网发布的结构件、医疗板、传动轴、无人机、齿轮、粒子及其他示例产品。",
      descriptionEn:
        "Official structures, medical panels, drive shafts, UAVs, gears, pellets and other example products.",
      url: "http://lygcp.frpapp.com/sell/",
      format: "Product directory",
    },
    {
      title: "官方联系页面",
      titleEn: "Official Contact Page",
      description:
        "法人名称、武进地址、电话及当前有效托管官网；所列独立域名已失效。",
      descriptionEn:
        "Legal name, Wujin address, telephone and active hosted website; the listed standalone domain is no longer responsive.",
      url: "http://lygcp.frpapp.com/contact/",
      format: "Contact page",
    },
    {
      title: "中国国际复材展展商资料",
      titleEn: "China Composites Expo Exhibitor Profile",
      description:
        "展会发布的集团关系、规模口径、应用领域、展位和产品类别。",
      descriptionEn:
        "Organizer-published group relationship, scale figures, applications, booth and product categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=30&head=C",
      format: "Exhibitor directory",
    },
    {
      title: "武进区政府企业动态",
      titleEn: "Wujin District Government Company Update",
      description:
        "成立年份、当前研发方向、政府项目及高新/专精特新与研发平台记录。",
      descriptionEn:
        "Government record of founding year, current R&D direction, project and high-tech, specialized-enterprise and R&D-platform statements.",
      url: "https://www.wj.gov.cn/html/czwj/2025/CIENAHOM_0113/514963.html",
      format: "Government record",
    },
    {
      title: "公开公司关联交易文件",
      titleEn: "Public-Company Related-Party Filing",
      description:
        "常州神鹰法人、统一社会信用代码、注册资本、地址、股权与经营范围记录。",
      descriptionEn:
        "Public filing covering the legal entity, unified credit code, registered capital, address, ownership and business scope.",
      url: "https://static.cninfo.com.cn/finalpage/2024-03-28/1219429189.PDF",
      format: "Public-company filing",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: null,
  contactEmail: null,
  contactPhone: "+86 519 8655 3039",
  address:
    "No. 5 Jinhua Road, Wujin Economic Development Zone, Changzhou, Jiangsu 213145, China",
  website: "http://lygcp.frpapp.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 20,
  viewCount: 0,
  capabilities: [
    "carbon-fiber composite structures",
    "automotive composite components",
    "radiolucent carbon-fiber medical panels",
    "carbon-fiber drive shafts",
    "carbon-fiber UAV components",
    "long-fiber thermoplastic compounding",
    "three-dimensional fiber winding",
    "composite pultrusion",
    "compression molding",
    "autoclave processing",
    "resin transfer molding",
    "injection and blow molding",
    "mold design and manufacture",
    "custom composite-part engineering",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
