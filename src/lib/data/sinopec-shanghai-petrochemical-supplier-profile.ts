import type { SupplierListing } from "@/lib/db/schema";

export const SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_ID =
  "sup-sinopec-shanghai-petrochemical";
export const SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_SLUG =
  "sinopec-shanghai-petrochemical-carbon-fiber";

// Curated from Sinopec Shanghai Petrochemical's current official pages and the
// matching 2026 China Composites Expo entry. Official logo downloaded on
// 2026-08-25 from the current official-site header:
// https://spc.sinopec.com/spc/content_file/home/herderlogo/2026/6/b49e0f0859994e94b876b54d867ea68c.png
export const SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_PROFILE: SupplierListing = {
  id: SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_ID,
  name: "中国石化上海石油化工股份有限公司",
  nameEn: "Sinopec Shanghai Petrochemical Co., Ltd.",
  slug: SINOPEC_SHANGHAI_PETROCHEMICAL_SUPPLIER_SLUG,
  location: "上海金山",
  locationEn: "Jinshan, Shanghai, China",
  province: "上海",
  category: "fiber",
  products: [
    "聚丙烯腈基碳纤维原丝与预氧丝",
    "3K 和 12K 小丝束碳纤维",
    "24K、48K 和 60K 大丝束碳纤维",
    "通用级与高性能碳纤维牌号",
    "面向风电、交通、油田和体育休闲的工业碳纤维",
  ],
  productsEn: [
    "PAN-based carbon-fiber precursor and oxidized fiber",
    "3K and 12K small-tow carbon fiber",
    "24K, 48K and 60K large-tow carbon fiber",
    "General-purpose and high-performance carbon-fiber grades",
    "Industrial carbon fiber for wind, transportation, oilfield and sporting applications",
  ],
  processList: [
    "聚丙烯腈聚合与原丝纺丝",
    "原丝预氧化与碳化",
    "小丝束和大丝束碳纤维工业化生产",
    "上浆、卷绕和批次质量控制",
    "碳纤维应用开发与下游工艺验证",
  ],
  processListEn: [
    "PAN polymerization and precursor spinning",
    "Precursor oxidation and carbonization",
    "Industrial small-tow and large-tow carbon-fiber production",
    "Sizing, winding and batch quality control",
    "Carbon-fiber application development and downstream process trials",
  ],
  established: 1993,
  verified: false,
  description:
    "中国石化上海石油化工股份有限公司前身始建于 1972 年，官网记载其于 1993 年改制上市，现为中国石化控股子公司，位于上海金山。公司官方产品页披露其聚丙烯腈基碳纤维采用硫氰酸钠湿法纺丝，并覆盖小丝束和大丝束；2025 年官方发布进一步列出 3K、12K、24K、48K 和 60K 等规格。中国国际复材展 2026 网上展厅以同一中英文主体收录公司，展位号 6P06，并描述从原丝、预氧丝到碳丝的产业链。产品与工艺信息来自企业和展会公开资料，尚未由 GetFRP 现场审计。",
  descriptionEn:
    "Sinopec Shanghai Petrochemical Co., Ltd. traces its predecessor to 1972 and states that it was restructured and listed in 1993. The Sinopec-controlled company is based in Jinshan, Shanghai. Its official product page describes PAN-based carbon fiber made through sodium-thiocyanate wet spinning and a portfolio spanning small- and large-tow material. A 2025 official product release identifies 3K, 12K, 24K, 48K and 60K capability. China Composites Expo lists the same Chinese and English entity at booth 6P06 for 2026 and describes a chain from precursor and oxidized fiber to carbon fiber. Product and process information is company- and organizer-published and has not been independently site-audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "上海石化官网将碳纤维分为碳纤维和大丝束碳纤维，说明其纤维表面沟槽、微孔分布、圆形截面、展纱和树脂浸润特性，并将大丝束产品用于风电叶片、汽车和石油化工等场景。官方 60K 发布称公司已具备 3K、12K、24K、48K、60K 等规格、近 20 种型号，并给出 60K 产品面向深远海风电和建筑桥梁的应用方向。采购方应以最新牌号 TDS 和批次文件为准，不应把新闻中的研发或试生产状态视为所有规格均可现货供货。碳纤维 RFQ 应明确丝束、强度/模量等级、拉伸强度、弹性模量、伸长率、线密度、密度、单丝直径、上浆剂种类和含量、含水率、毛丝、束宽与展纱、包装形式、接头和卷重，并指定目标树脂、拉挤/经编/缠绕/铺带工艺及线速和张力条件。用于风电碳梁、压力容器、油田、交通或体育制品时，还应在相同树脂、纤维体积分数、固化制度和环境条件下验证浸润、孔隙、层间剪切、拉伸/压缩/弯曲、疲劳和耐久。买方应索取当前 TDS、SDS、批次 CoA、测试方法、留样、工厂与牌号变更通知、出口包装和储存要求。上海石化官网存在企业级体系认证入口，但本次公开页面未提供可将具体证书范围直接绑定到报价碳纤维牌号和生产场地的完整证据，因此本页不列为已核实认证。官网内容可访问，但本机命令行检查其 TLS 链时出现自签链异常；交换商业文件或付款信息前应独立确认域名、证书和联系人。",
  productsServicesSummaryEn:
    "Shanghai Petrochemical's official product page separates carbon fiber and large-tow carbon fiber, describing surface grooves, micropore distribution, round cross-section, spreading and resin wet-out, and identifies wind blades, automotive and petrochemical uses for large tow. The company's official 60K release says it has 3K, 12K, 24K, 48K and 60K specifications across nearly 20 models and positions 60K for deep-offshore wind and bridge applications. Buyers should rely on the current grade TDS and batch documents: a development or trial-production announcement does not prove every specification is available from stock. A carbon-fiber RFQ should state tow, strength/modulus class, tensile strength, modulus, elongation, linear density, density, filament diameter, sizing chemistry and content, moisture, fuzz, tow width and spreading, package, splice and bobbin weight, together with the target resin, pultrusion, multiaxial knitting, winding or tape-laying process, line speed and tension. Wind spar-cap, pressure-vessel, oilfield, transportation or sporting programs should validate wet-out, voids, interlaminar shear, tensile, compression, flexural, fatigue and durability using the intended resin, fiber volume, cure and environment. Require current TDS, SDS, batch CoA, methods, retain-sample controls, site and grade change notification, export packing and storage requirements. The corporate site has a management-system section, but the reviewed public pages do not provide complete evidence tying a certificate scope to the quoted carbon-fiber grade and production site; none is recorded as independently verified. The content is accessible, while command-line validation from the review environment reported a self-signed element in the site's TLS chain. Independently confirm the domain, certificate and contact before exchanging commercial files or payment instructions.",
  ecatalogs: [
    {
      title: "上海石化官网",
      titleEn: "Official Sinopec Shanghai Petrochemical Website",
      description: "企业主体、发展沿革、业务和联系方式。",
      descriptionEn: "Official identity, history, business and contacts.",
      url: "https://spc.sinopec.com/spc/",
      format: "Official website",
    },
    {
      title: "上海石化产品介绍",
      titleEn: "Official Shanghai Petrochemical Product Directory",
      description: "碳纤维、大丝束碳纤维及其他产品入口。",
      descriptionEn: "Official carbon-fiber, large-tow and other product entries.",
      url: "https://spc.sinopec.com/spc/business/ywgs/A136004005Gone1.shtml",
      format: "Product directory",
    },
    {
      title: "上海石化 60K 大丝束碳纤维发布",
      titleEn: "Official 60K Large-Tow Carbon-Fiber Release",
      description: "3K 至 60K 规格范围、公开性能和应用方向。",
      descriptionEn: "Published 3K-to-60K range, performance and applications.",
      url: "https://spc.sinopec.com/spc/news/qyxw/2026/6/I1521166596100325377.shtml",
      format: "Official product release",
    },
    {
      title: "中国国际复材展上海石化网上展厅",
      titleEn: "China Composites Expo Shanghai Petrochemical Net Show",
      description: "同一主体、2026 展位与碳纤维产业链介绍。",
      descriptionEn: "Matching identity, 2026 booth and carbon-fiber chain description.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-3556-4508048.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/sinopec-shanghai-petrochemical-logo.png",
  contactEmail: "spc@spc.com.cn",
  contactPhone: "+86 21 5794 1941",
  address: "No. 48 Jinyi Road, Jinshan District, Shanghai 200540, China",
  website: "https://spc.sinopec.com/spc/",
  enterpriseId: null,
  scaleTier: "XL",
  brandPriority: 26,
  viewCount: 0,
  capabilities: [
    "PAN precursor spinning",
    "small-tow carbon fiber",
    "large-tow carbon fiber",
    "3K to 60K tow portfolio",
    "oxidation and carbonization",
    "fiber sizing and winding",
    "pultrusion and multiaxial application support",
    "wind, transportation and oilfield application development",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
