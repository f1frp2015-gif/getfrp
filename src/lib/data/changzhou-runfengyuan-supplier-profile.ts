import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_RUNFENGYUAN_SUPPLIER_ID =
  "sup-changzhou-runfengyuan";
export const CHANGZHOU_RUNFENGYUAN_SUPPLIER_SLUG =
  "changzhou-runfengyuan-textile-machinery";

// Curated from Changzhou Run Feng Yuan's current official English website and
// its standalone China Composites Expo profile. The official site spaces the
// brand as "Run Feng Yuan", while the expo renders "RUNFENGYUAN"; the legal
// Chinese name, Changzhou location and RSM/BS equipment range align. Company
// scale, output, recognition and product-performance statements remain
// company- or organizer-published and have not been independently verified by
// GetFRP. The two sources publish conflicting capital, site-area and headcount
// figures, which are disclosed below for buyer reconciliation. Official logo
// downloaded 2026-08-13 from the current website header:
// https://www.run-yuan.com/uploads/image/20220422/11/runfengyuan-textile-machinery-companies.png
export const CHANGZHOU_RUNFENGYUAN_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_RUNFENGYUAN_SUPPLIER_ID,
  name: "常州润丰源纺机制造有限公司",
  nameEn: "Changzhou Run Feng Yuan Textile Machinery Manufacturing Co., Ltd.",
  slug: CHANGZHOU_RUNFENGYUAN_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "RSM3/3 多轴向经编机",
    "RSM3/1、RSM2/1 双轴向经编机",
    "玻璃纤维与碳纤维经编机",
    "BS1-F 短切型经编机",
    "BS1-V 及其他缝编机",
    "CFPL 玻璃纤维拉挤生产线",
    "CFPL 碳纤维拉挤生产线",
    "经编设备备件、安装培训与技术服务",
  ],
  productsEn: [
    "RSM3/3 multiaxial warp-knitting machines",
    "RSM3/1 and RSM2/1 biaxial warp-knitting machines",
    "Glass- and carbon-fiber warp-knitting machines",
    "BS1-F chopped-fiber warp-knitting machines",
    "BS1-V and other stitch-bonding machines",
    "CFPL glass-fiber pultrusion lines",
    "CFPL carbon-fiber pultrusion lines",
    "Warp-knitting spares, installation, training and technical service",
  ],
  processList: [
    "多轴向与双轴向增强织物设备设计制造",
    "玻纤、碳纤维铺纬、衬经与缝编",
    "短切纤维铺放与缝编设备制造",
    "玻纤与碳纤维拉挤线设计制造",
    "非标经编设备与针织工艺开发",
    "设备安装、操作培训、维护与备件服务",
  ],
  processListEn: [
    "Multiaxial and biaxial reinforcement-machine design and manufacture",
    "Glass- and carbon-fiber weft insertion, warp laying and stitch bonding",
    "Chopped-fiber placement and stitch-bonding equipment manufacture",
    "Glass- and carbon-fiber pultrusion-line design and manufacture",
    "Custom warp-knitting equipment and knitting-process development",
    "Installation, operator training, maintenance and spare-parts service",
  ],
  established: 2002,
  verified: false,
  description:
    "常州润丰源纺机制造有限公司位于江苏常州新北区奔牛镇，官网与中国国际复材展资料均称公司创建于 2002 年，专业从事经编、缝编机械的研发、生产、销售和服务。面向复合材料的公开产品包括 RSM 多轴向/双轴向经编机、BS 短切与缝编设备，以及 CFPL 玻纤和碳纤维拉挤线。官网称公司已开发六大系列 60 多种产品，并提供国内外安装培训和技术服务；相关规模、产量、荣誉和设备性能均为企业或展会公开陈述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Changzhou Run Feng Yuan Textile Machinery Manufacturing Co., Ltd. is based in Benniu Town, Xinbei District, Changzhou, Jiangsu. Its official website and China Composites Expo profile both say the company was founded in 2002 and develops, manufactures, sells and services warp-knitting and stitch-bonding machinery. Its published composite-material equipment includes RSM multiaxial and biaxial warp-knitting machines, BS chopped-fiber and stitch-bonding equipment, and CFPL glass- and carbon-fiber pultrusion lines. The official site says it has developed more than 60 products across six series and provides domestic and international installation, training and technical service. Scale, output, recognition and equipment-performance statements are company- or organizer-published and have not been independently verified by GetFRP.",
  certifications: [
    "官网荣誉页称公司获得高新技术企业、国家火炬计划项目证书、国家重点新产品证书、江苏省创新型企业及纺织技术创新奖等称号；页面主要展示图片和英文标题，采购方应索取可读文件并核验授予主体、项目/证书编号、适用范围、日期及当前有效性",
  ],
  certificationsEn: [
    "The official honors page claims high-tech-enterprise recognition, a National Torch Program project certificate, a National Key New Product certificate, Jiangsu innovative-enterprise recognition and textile-technology awards. The page mainly exposes images and English captions, so buyers should obtain legible documents and validate the granting body, project or certificate number, scope, date and current validity",
  ],
  productsServicesSummary:
    "润丰源官网按多轴向、双轴向、缝编和拉挤设备组织复材相关产品。RSM3/3 产品页称设备将经向、纬向和斜向衬纱通过捆绑纱结合为多层增强织物，并公布斜向纱角度可在 30°–60° 调整；官网还列出 RSM3/1、RSM2/1、BS1-F、BS1-V 和 CFPL 系列。官网公司介绍称注册资本 1,500 万元、占地 12 万平方米、建筑面积 6 万平方米、员工 450 人、年产 500 台高档经编机；CCE 则称注册资本 3,000 万元、占地 25 万平方米、建筑面积 13 万平方米、员工 242 人。两套数据明显冲突，采购方必须按当前法人、制造地址和目标产线通过营业执照、财务/社保材料和现场审厂核实。设备 RFQ 应明确织物结构与 0°/±θ/90° 铺层、纤维类型和线密度、幅宽、克重、针距、工作速度与验收工况、张力和铺纬精度、短切长度与分布、经编组织、树脂/纤维兼容性、拉挤截面与牵引力、加热和固化控制、安全防护与粉尘治理、电气制式、控制与软件、FAT/SAT、CE 等目的地合规文件、备件、安装培训、质保、远程与当地服务。",
  productsServicesSummaryEn:
    "Run Feng Yuan's official website organizes its composite-related offering into multiaxial, biaxial, stitch-bonding and pultrusion equipment. The RSM3/3 page says the machine binds warp, weft and oblique inlay yarns into multilayer reinforcements and publishes an adjustable oblique-yarn angle of 30°–60°; the site also lists RSM3/1, RSM2/1, BS1-F, BS1-V and CFPL series equipment. Its company profile claims RMB 15 million registered capital, a 120,000 m² site, 60,000 m² of buildings, 450 employees and annual output of 500 high-grade warp-knitting machines. The expo instead publishes RMB 30 million capital, a 250,000 m² site, 130,000 m² of buildings and 242 employees. These figures materially conflict, so buyers should reconcile the current legal entity, manufacturing address and target line through the business license, financial or social-insurance evidence and an on-site audit. An equipment RFQ should define fabric architecture and 0°/±θ/90° layers; fiber type and linear density; width; areal weight; gauge; operating speed and acceptance conditions; tension and weft-laying accuracy; chop length and distribution; stitch pattern; resin and fiber compatibility; pultruded section and pull force; heating and cure control; guarding and dust extraction; electrical supply; controls and software; FAT/SAT; destination compliance documents such as CE; spares; installation and training; warranty; and remote and local service.",
  ecatalogs: [
    {
      title: "润丰源公司介绍",
      titleEn: "Run Feng Yuan Company Profile",
      description: "成立年份、产品系列、厂区与产能自述、工厂图片及质量控制入口。",
      descriptionEn:
        "Official founding year, product series, company-published scale and output, factory gallery and quality-control entry.",
      url: "https://www.run-yuan.com/company-profile/",
      format: "Company profile",
    },
    {
      title: "多轴向经编机目录",
      titleEn: "Multiaxial Warp-Knitting Machine Directory",
      description: "玻纤、碳纤维 RSM 多轴向设备及公开工艺说明。",
      descriptionEn:
        "Official RSM multiaxial equipment for glass and carbon fiber with published process descriptions.",
      url: "https://www.run-yuan.com/products/multi-axial-warp-knitting-machine/",
      format: "Product directory",
    },
    {
      title: "双轴向经编机目录",
      titleEn: "Biaxial Warp-Knitting Machine Directory",
      description: "RSM 双轴向、土工格栅和玻纤复合经编设备入口。",
      descriptionEn:
        "Official RSM biaxial, geogrid and glass-fiber composite warp-knitting equipment entry.",
      url: "https://www.run-yuan.com/products/biaxial-warp-knitting-machine/",
      format: "Product directory",
    },
    {
      title: "玻纤与碳纤维拉挤线",
      titleEn: "Glass- & Carbon-Fiber Pultrusion Lines",
      description: "CFPL 系列玻纤和碳纤维拉挤设备入口。",
      descriptionEn:
        "Official CFPL glass- and carbon-fiber pultrusion-equipment directory.",
      url: "https://www.run-yuan.com/products/textile-pultrusion-line/",
      format: "Product directory",
    },
    {
      title: "研发与技术服务",
      titleEn: "R&D & Technical Service",
      description: "非标设备、针织工艺、培训和现场技术指导说明。",
      descriptionEn:
        "Official custom-machine, knitting-process, training and field-guidance description.",
      url: "https://www.run-yuan.com/r-d/",
      format: "Capability page",
    },
    {
      title: "荣誉资质",
      titleEn: "Honors & Qualifications",
      description: "企业荣誉图片入口；采购方需索取并核验证明文件。",
      descriptionEn:
        "Company-published honors gallery; buyers should obtain and verify supporting documents.",
      url: "https://www.run-yuan.com/honor-certificates.html",
      format: "Qualification gallery",
    },
    {
      title: "中国国际复材展展商资料",
      titleEn: "China Composites Expo Exhibitor Profile",
      description: "展会发布的法人名称、规模口径、RSM/BS 型号、展位和产品类别。",
      descriptionEn:
        "Organizer-published legal name, scale figures, RSM/BS models, booth and product categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-3086-1126542.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-runfengyuan-logo.png",
  contactEmail: "244765629@qq.com",
  contactPhone: "+86 136 1611 0629",
  address:
    "Qijia Village, Benniu Town, Xinbei District, Changzhou, Jiangsu, China",
  website: "https://www.run-yuan.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 22,
  viewCount: 0,
  capabilities: [
    "multiaxial warp-knitting machines",
    "biaxial warp-knitting machines",
    "glass fiber reinforcement machinery",
    "carbon fiber reinforcement machinery",
    "chopped-fiber stitch-bonding machines",
    "CFPL glass-fiber pultrusion lines",
    "CFPL carbon-fiber pultrusion lines",
    "custom warp-knitting machinery",
    "knitting-process development",
    "installation and operator training",
    "spare-parts and technical service",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
