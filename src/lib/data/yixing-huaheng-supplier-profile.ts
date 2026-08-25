import type { SupplierListing } from "@/lib/db/schema";

export const YIXING_HUAHENG_SUPPLIER_ID = "sup-yixing-huaheng";
export const YIXING_HUAHENG_SUPPLIER_SLUG =
  "yixing-huaheng-high-performance-fiber";

// Curated from the current official company website and the matching 2026
// China Composites Expo profile. The white header wordmark was unsuitable for
// GetFRP's light card, so the local asset uses the official site's alternate
// dark-text header logo downloaded on 2026-08-25 from:
// https://www.huahengcf.com/uploads/image/20231209/1702088907316579.png
export const YIXING_HUAHENG_SUPPLIER_PROFILE: SupplierListing = {
  id: YIXING_HUAHENG_SUPPLIER_ID,
  name: "宜兴市华恒高性能纤维织造有限公司",
  nameEn: "Yixing Huaheng High Performance Fiber Textile Co., Ltd.",
  slug: YIXING_HUAHENG_SUPPLIER_SLUG,
  location: "江苏宜兴",
  locationEn: "Yixing, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "碳纤维布、轴向布、展宽布、编织带与套管",
    "芳纶、玄武岩、超高分子量聚乙烯和混编织物",
    "3D 立体织物与碳纤维、石英纤维针刺预制体",
    "单向和双向碳纤维预浸料",
    "碳纤维建筑加固布与拉挤单向板",
    "缠绕碳纤维管和模压碳纤维板",
  ],
  productsEn: [
    "Carbon-fiber cloth, multiaxial and spread-tow fabrics, tapes and braided sleeves",
    "Aramid, basalt, UHMWPE and hybrid woven fabrics",
    "3D woven fabrics and carbon- or quartz-fiber needle-punched preforms",
    "Unidirectional and bidirectional carbon-fiber prepregs",
    "Carbon-fiber strengthening fabric and pultruded unidirectional plates",
    "Wound carbon-fiber tubes and molded carbon-fiber sheets",
  ],
  processList: [
    "平纹、斜纹和缎纹织造",
    "多轴向经编、展宽与混编",
    "3D 织造、编带与套管编织",
    "针刺和缝合预制体成型",
    "预浸料涂膜、热压、冷却、覆膜与卷取",
    "单向板连续拉挤、碳管缠绕和板材模压",
  ],
  processListEn: [
    "Plain, twill and satin weaving",
    "Multiaxial warp knitting, tow spreading and hybrid weaving",
    "3D weaving, tape braiding and sleeve braiding",
    "Needle-punching and stitching of fiber preforms",
    "Prepreg film coating, hot pressing, cooling, laminating and winding",
    "Continuous plate pultrusion, tube winding and sheet molding",
  ],
  established: 2001,
  verified: false,
  description:
    "宜兴市华恒高性能纤维织造有限公司官网记载企业 1997 年开始从事纤维行业、2001 年正式成立，位于江苏宜兴。企业当前产品目录覆盖碳纤维、芳纶、玄武岩、超高分子量聚乙烯和混编织物，3D 立体织物、针刺预制体、预浸料、建筑加固材料，以及碳纤维管和板。官网列示剑杆织机、经编机、预浸机、针刺机和织管机等设备。中国国际复材展 2026 网上展厅以同一中英文主体收录公司，展位号 6Q30，分类包括碳纤维、芳纶、混编、立体织物和预浸料。所有能力和设备信息均为企业或展会公开，尚未由 GetFRP 现场审计。",
  descriptionEn:
    "Yixing Huaheng High Performance Fiber Textile Co., Ltd. states that it entered the fiber field in 1997 and was formally established in 2001 in Yixing, Jiangsu. Its current official catalog covers carbon, aramid, basalt, UHMWPE and hybrid fabrics; 3D textiles; needle-punched preforms; prepregs; structural-strengthening materials; and carbon-fiber tubes and sheets. The site identifies rapier looms, warp-knitting machines, prepreg lines, needle-punching machines and tube-weaving equipment. China Composites Expo lists the same Chinese and English entity at booth 6Q30 for 2026 under carbon fiber, aramid, hybrid reinforcement, 3D textiles and prepreg. Capabilities and equipment are company- or organizer-published and have not been independently site-audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "华恒官网为碳布、芳纶布、玄武岩布、聚乙烯布、混编布、展宽布、编带和套管提供纤维规格、织法、面密度或尺寸示例；预浸料目录列出 H-CP、H-CT、H-CS 和 H-USN 系列的纤维面密度、树脂含量、总面密度、厚度和幅宽。碳纤维管目录公开多种内外径组合、最长 2400 mm 的示例长度、亮光/哑光表面和平纹/斜纹/单向外观；碳板目录给出 0.5–10 mm 厚度、若干长宽规格以及全碳、半碳和全单向类型。网站还公开碳纤维、石英、高硅氧和玻璃纤维针刺预制体，以及用于建筑补强的碳纤维单向布和拉挤单向板。RFQ 应按产品族分别定义纤维品牌与牌号、上浆剂、丝束或 D 数、经纬结构和方向、面密度及公差、幅宽/卷长/接头、预浸料树脂牌号与含量、挥发分、凝胶时间、储存温度和出库寿命。管板制品还需确认原料与铺层、纤维体积分数、成型路线、尺寸/直线度/壁厚公差、表面等级、孔隙和力学验收；“缠绕碳管”“模压板”和“拉挤单向板”属于不同工艺，不能仅按外观或商品名互换。针刺和 3D 预制体应另行规定纤维方向、针刺密度、体积密度、尺寸、层间完整性和后续 C/C 或树脂浸渍条件。展会和其他企业介绍提到 ISO 或 GJB 体系，但本次审阅的官网页面没有提供可核对主体、范围、编号与有效期的完整证书，因此本页不列为已核实认证。采购前应索取现行证书、TDS、批次 CoA、测试方法、留样和变更控制，并以代表性批次在实际树脂和工艺条件下验证。",
  productsServicesSummaryEn:
    "Huaheng's official catalog gives fiber, weave, areal-weight or dimensional examples for carbon, aramid, basalt, UHMWPE, hybrid and spread-tow fabrics, braided tapes and sleeves. Prepreg pages list H-CP, H-CT, H-CS and H-USN series with fiber areal weight, resin content, total areal weight, thickness and width. The carbon-tube directory publishes multiple inside/outside-diameter combinations, example lengths to 2,400 mm, gloss or matte surfaces and plain, twill or unidirectional appearance. The sheet directory lists 0.5–10 mm thickness, several panel sizes and all-carbon, hybrid-carbon and fully unidirectional constructions. The site also publishes carbon, quartz, high-silica and glass-fiber needle-punched preforms, along with carbon unidirectional fabric and pultruded plates for structural strengthening. RFQs should be product-family specific: state fiber producer and grade, sizing, tow or denier, warp/weft architecture and direction, areal-weight tolerance, width, roll length and splice limits; and for prepreg, resin grade and content, volatiles, gel behavior, storage temperature and out-life. Tubes and sheets additionally need raw material and lay-up, fiber volume, manufacturing route, dimension, straightness and wall-thickness tolerance, surface class, void and mechanical acceptance criteria. A wound tube, molded sheet and pultruded UD plate are different constructions and should not be substituted by appearance or trade name. Needle-punched and 3D preforms require fiber orientation, punch density, bulk density, dimension, through-thickness integrity and the downstream C/C densification or resin-infusion condition. Expo and other company introductions mention ISO or GJB systems, but the reviewed official pages do not expose complete certificates sufficient to verify legal entity, scope, number and validity; none is recorded as independently verified. Before approval, request current certificates, TDS, batch CoA, test methods, retain-sample and change-control procedures, then validate a representative production lot in the intended resin and process.",
  ecatalogs: [
    {
      title: "华恒高性能纤维官网",
      titleEn: "Official Huaheng Website",
      description: "公司主体、主要产品、设备和更新。",
      descriptionEn: "Official identity, main products, equipment and updates.",
      url: "https://www.huahengcf.com/",
      format: "Official website",
    },
    {
      title: "华恒公司概况",
      titleEn: "Official Huaheng Company Profile",
      description: "成立时间、发展路径和能力说明。",
      descriptionEn: "Establishment, development history and capability statement.",
      url: "https://www.huahengcf.com/about",
      format: "Company profile",
    },
    {
      title: "编织物与增强材料目录",
      titleEn: "Woven Reinforcement Directory",
      description: "碳纤维、芳纶、玄武岩、聚乙烯和混编产品。",
      descriptionEn: "Carbon, aramid, basalt, UHMWPE and hybrid reinforcement products.",
      url: "https://www.huahengcf.com/product",
      format: "Product directory",
    },
    {
      title: "碳纤维管与板目录",
      titleEn: "Carbon-Fiber Tube and Sheet Directory",
      description: "官网碳管、碳板规格与应用入口。",
      descriptionEn: "Official carbon-tube and carbon-sheet specifications and applications.",
      url: "https://www.huahengcf.com/product/carbon-fiber-products-series",
      format: "Product directory",
    },
    {
      title: "预浸料目录",
      titleEn: "Carbon-Fiber Prepreg Directory",
      description: "单向和双向预浸料牌号与公开参数。",
      descriptionEn: "Unidirectional and bidirectional prepreg grades and published parameters.",
      url: "https://www.huahengcf.com/product/prepreg-series",
      format: "Product directory",
    },
    {
      title: "中国国际复材展华恒网上展厅",
      titleEn: "China Composites Expo Huaheng Net Show",
      description: "同一主体、2026 展位与产品分类。",
      descriptionEn: "Matching identity, 2026 booth and product categories.",
      url: "https://www.chinacompositesexpo.com/en/netshow-240-1123696.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/yixing-huaheng-logo.png",
  contactEmail: "huahengcf@163.com",
  contactPhone: "+86 510 8780 5878",
  address: "No. 666 Gaocheng Road, Heqiao Town, Yixing, Jiangsu, China",
  website: "https://www.huahengcf.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 24,
  viewCount: 0,
  capabilities: [
    "carbon, aramid, basalt and UHMWPE weaving",
    "multiaxial and spread-tow fabrics",
    "3D woven and braided reinforcements",
    "needle-punched carbon and quartz preforms",
    "unidirectional and woven carbon prepregs",
    "pultruded carbon strengthening plates",
    "wound carbon-fiber tubes",
    "molded carbon-fiber sheets",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
