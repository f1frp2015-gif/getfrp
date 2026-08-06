import type { SupplierListing } from "@/lib/db/schema";

export const ZHEJIANG_HUAFENG_SUPPLIER_ID = "sup-zhejiang-huafeng";
export const ZHEJIANG_HUAFENG_SUPPLIER_SLUG =
  "zhejiang-huafeng-new-material";

// Curated from Zhejiang Huafeng's official English company, product,
// certificate, project and contact pages. Establishment, capacity, standards,
// certification and performance statements remain company-published and
// unverified by GetFRP. The Chinese legal name is cross-checked against public
// company-registration and NEEQ profile information. The official HPIPE
// header logo was downloaded from the current supplier website asset at:
// https://www.cnhf-frp.com/uploads/45094/logo.png
// The server supplies WebP data, stored locally with the matching extension at
// public/supplier-assets/zhejiang-huafeng-logo.webp.
export const ZHEJIANG_HUAFENG_SUPPLIER_PROFILE: SupplierListing = {
  id: ZHEJIANG_HUAFENG_SUPPLIER_ID,
  name: "浙江华丰新材料股份有限公司",
  nameEn: "Zhejiang Huafeng New Material Co., Ltd.",
  slug: ZHEJIANG_HUAFENG_SUPPLIER_SLUG,
  location: "浙江杭州",
  locationEn: "Hangzhou, Zhejiang, China",
  province: "浙江",
  category: "manufacturer",
  products: [
    "连续缠绕玻璃钢夹砂管与 GRP/FRP 压力管",
    "玻璃钢顶管与压力顶管",
    "给水、排水、排污及海水输送玻璃钢管",
    "玻璃钢风管与工业流体管道",
    "玻璃钢法兰、三通、弯头、套筒与接头",
    "玻璃钢检查井及通信、电力电缆保护管",
  ],
  productsEn: [
    "Continuously wound GRP mortar pipe and GRP/FRP pressure pipe",
    "GRP jacking pipe and pressure jacking pipe",
    "Fiberglass pipe for water supply, drainage, sewerage and seawater service",
    "FRP ductwork and industrial fluid piping",
    "GRP flanges, tees, elbows, sleeves and couplings",
    "Fiberglass manholes and communication or power cable protection pipe",
  ],
  processList: [
    "连续缠绕玻璃钢夹砂管成型",
    "树脂、连续玻纤、短切玻纤与石英砂自动配料",
    "环向缠绕、固化与定尺切割",
    "玻璃钢管件与检查井制造",
    "接头系统配置与项目设计支持",
    "实验室及成品性能测试",
  ],
  processListEn: [
    "Continuous winding of GRP mortar pipe",
    "Automated proportioning of resin, continuous glass fiber, chopped fiber and quartz sand",
    "Hoop winding, curing and cut-to-length finishing",
    "GRP fitting and fiberglass manhole manufacture",
    "Joint-system configuration and project design support",
    "Laboratory and finished-product testing",
  ],
  established: 1998,
  verified: false,
  description:
    "浙江华丰新材料股份有限公司英文官网称其自 1998 年起从事新型管材研发、生产与销售，总部位于浙江杭州。公司公开产品包括连续缠绕玻璃钢夹砂管、GRP/FRP 压力管、玻璃钢顶管、给排水与排污管、风管、法兰、三通、弯头、套筒和检查井，以及通信和电力电缆保护管，应用覆盖市政给排水、水利、石化、海洋与非开挖工程。",
  descriptionEn:
    "Zhejiang Huafeng New Material Co., Ltd. states on its official English website that it has developed, manufactured and sold new piping materials since 1998 and is headquartered in Hangzhou, Zhejiang. Its published range includes continuously wound GRP mortar and pressure pipe, GRP jacking pipe, water-supply, drainage and sewer pipe, FRP ductwork, flanges, tees, elbows, sleeves and manholes, plus communication and power cable protection pipe for municipal water, water infrastructure, petrochemical, marine and trenchless projects.",
  certifications: [
    "ISO 9001 质量管理体系（官网证书页公开；认证主体、范围与有效期需核验）",
    "ISO 14001 环境管理体系（官网证书页公开；认证主体、范围与有效期需核验）",
    "ISO 45001 职业健康安全管理体系（官网标注为 OHSAS45001；应核验证书标准、主体、范围与有效期）",
    "ASTM D3517、BS EN 14364、ISO 23856、ISO 25780 与 KS 相关证书/测试资料（官网公开；应按具体产品与项目核验完整文件）",
  ],
  certificationsEn: [
    "ISO 9001 quality management system (shown on the official certificate page; confirm entity, scope and validity)",
    "ISO 14001 environmental management system (shown on the official certificate page; confirm entity, scope and validity)",
    "ISO 45001 occupational health and safety management system (the company page labels the document as OHSAS45001; confirm the standard, entity, scope and validity)",
    "ASTM D3517, BS EN 14364, ISO 23856, ISO 25780 and KS-related certificates or test documents (company-published; validate the complete document for the quoted product and project)",
  ],
  productsServicesSummary:
    "华丰官网称公司占地约 80,000 平方米，运行 5 条连续缠绕玻璃钢管生产线，管材年产能约 60,000 吨，并设有省级研发中心和专业测试实验室。公开 GRP/FRP 管规格覆盖 DN300–DN4000，原料体系包括树脂、连续与短切玻纤及石英砂；官网还列出一体式 GRP 套筒、橡胶密封套筒、法兰、弯头、三通和检查井等连接与配套产品。上述规模、产能、标准和证书均为企业公开信息。采购方应针对具体工况核验树脂体系、直径与壁厚、压力等级 PN、环刚度 SN、接头形式、内衬、饮用水或耐化学介质要求、设计寿命依据、适用标准、型式与批次测试、现行证书、项目业绩、MOQ、交期、包装、安装指导与质保。",
  productsServicesSummaryEn:
    "Huafeng states that its site covers approximately 80,000 m², operates five continuous-winding GRP pipe lines with annual pipe capacity of about 60,000 tonnes, and includes a provincial R&D center and professional testing laboratory. Published GRP/FRP pipe specifications span DN300–DN4000 and use resin, continuous and chopped glass fiber, and quartz sand. The site also lists integrated GRP sleeves, rubber-sealed sleeve systems, flanges, elbows, tees and manholes. These scale, capacity, standards and certification statements are company-published. Buyers should validate the resin system, diameter and wall thickness, PN pressure class, SN ring stiffness, joint type, liner, potable-water or chemical-service requirement, design-life basis, applicable standard, type and batch testing, current certificates, project references, MOQ, lead time, packaging, installation support and warranty for the quoted system.",
  ecatalogs: [
    {
      title: "华丰英文官网",
      titleEn: "Huafeng Official English Website",
      description: "公司、主要产品、应用、研发及出口联系方式总览。",
      descriptionEn:
        "Official overview of the company, principal products, applications, R&D and export contacts.",
      url: "https://www.cnhf-frp.com/",
      format: "Official website",
    },
    {
      title: "华丰公司介绍",
      titleEn: "Huafeng Company Profile",
      description: "官网公开的沿革、生产线、年产能、研发与资质概览。",
      descriptionEn:
        "Official company history and published production-line, capacity, R&D and qualification information.",
      url: "https://www.cnhf-frp.com/about-us",
      format: "Company profile",
    },
    {
      title: "GRP/FRP 管产品目录",
      titleEn: "GRP/FRP Pipe Product Directory",
      description: "玻璃钢管、顶管、给排水管、排污管与风管产品入口。",
      descriptionEn:
        "Official directory for GRP/FRP pipe, jacking pipe, water, drainage, sewer and ductwork products.",
      url: "https://www.cnhf-frp.com/grp-frp-pipe/",
      format: "Product directory",
    },
    {
      title: "GRP/FRP 管件产品目录",
      titleEn: "GRP/FRP Pipe Fitting Directory",
      description: "法兰、三通、弯头、套筒、接头和玻璃钢检查井产品入口。",
      descriptionEn:
        "Official directory for GRP flanges, tees, elbows, sleeves, couplings and fiberglass manholes.",
      url: "https://www.cnhf-frp.com/grp-frp-pipe-fitting/",
      format: "Product directory",
    },
    {
      title: "华丰证书页",
      titleEn: "Huafeng Certificate Page",
      description: "官网公开的管理体系、产品标准、测试与荣誉文件。",
      descriptionEn:
        "Company-published management-system, product-standard, test and qualification documents.",
      url: "https://www.cnhf-frp.com/certificate",
      format: "Certificate directory",
    },
    {
      title: "华丰项目案例",
      titleEn: "Huafeng Project References",
      description: "官网公开的市政、水利、海洋、工业与非开挖项目案例。",
      descriptionEn:
        "Company-published municipal, water, marine, industrial and trenchless project references.",
      url: "https://www.cnhf-frp.com/project",
      format: "Project directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/zhejiang-huafeng-logo.webp",
  contactEmail: "export@zjhfxcl.com",
  contactPhone: "+86 182 0581 5999",
  address:
    "12th Floor, Building 2, Zhijiang Changjiu Center, Zhuantang Street, Xihu District, Hangzhou, Zhejiang, China",
  website: "https://www.cnhf-frp.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 25,
  viewCount: 0,
  capabilities: [
    "GRP mortar pipe",
    "GRP pressure pipe",
    "GRP jacking pipe",
    "water and sewer pipe",
    "FRP ductwork",
    "GRP pipe fittings",
    "fiberglass manholes",
    "cable protection pipe",
    "continuous filament winding",
    "pipe joint systems",
    "project engineering support",
  ],
  standardsSupported: [
    "ASTM D3517",
    "BS EN 14364",
    "ISO 23856",
    "ISO 25780",
    "ISO 9001",
    "ISO 14001",
    "ISO 45001",
  ],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
