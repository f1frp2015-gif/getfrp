import type { SupplierListing } from "@/lib/db/schema";

export const BEIJING_BAIRUIDING_SUPPLIER_ID = "sup-beijing-bairuiding";
export const BEIJING_BAIRUIDING_SUPPLIER_SLUG =
  "beijing-bairuiding-3d-braiding";

// Curated from Beijing Bairuiding's current official website and its 2026
// China Composites Expo entry. The current official header references this logo
// asset, but the supplier CDN returned 403/567 during the 2026-08-25 review, so
// the profile intentionally uses GetFRP's text fallback instead of copying an
// unavailable or third-party image:
// https://img601.yun300.cn/repository/image/3739fe95-93c5-496d-a8b9-84225277855a.png?tenantId=229674&viewType=1&k=1780378551000
export const BEIJING_BAIRUIDING_SUPPLIER_PROFILE: SupplierListing = {
  id: BEIJING_BAIRUIDING_SUPPLIER_ID,
  name: "北京柏瑞鼎科技有限公司",
  nameEn: "Beijing Bairuiding Technology Co., Ltd.",
  slug: BEIJING_BAIRUIDING_SUPPLIER_SLUG,
  location: "北京",
  locationEn: "Beijing, China",
  province: "北京",
  category: "manufacturer",
  products: [
    "碳纤维及高性能纤维三维编织预制体",
    "厚壁筒形与大尺寸三维编织预制体",
    "三维编织实心杆、软硬绳索和弹簧",
    "三维编织法兰、接头、桁架和异形预制体",
    "扩张编织管形成的三维编织板件",
    "三维编织机与整体工艺解决方案",
  ],
  productsEn: [
    "Carbon-fiber and high-performance-fiber 3D braided preforms",
    "Thick-wall tubular and large-format 3D braided preforms",
    "3D braided solid rods, flexible or rigid ropes and springs",
    "3D braided flanges, joints, trusses and shaped preforms",
    "3D braided panels formed from expanded braided tubes",
    "3D braiding machines and integrated process solutions",
  ],
  processList: [
    "三维编织预制体定制",
    "三维编织整体方案设计",
    "三维编织复合材料成型",
    "编织结构与复材仿真计算",
    "复合材料性能测试",
    "三维编织机与工艺技术服务",
  ],
  processListEn: [
    "Custom 3D braided preform manufacture",
    "Integrated 3D braiding solution design",
    "3D braided composite molding",
    "Braided-architecture and composite simulation",
    "Composite performance testing",
    "3D braiding machine and process technical services",
  ],
  established: null,
  verified: false,
  description:
    "北京柏瑞鼎科技有限公司官网聚焦三维编织技术，公开业务包括三维编织预制体定制、整体解决方案、三维编织复合材料制作、仿真计算、性能测试和相关技术服务。当前产品展示包含厚壁筒形大尺寸预制体、2 米大承载杆件、实心软/硬绳索、弹簧、圆截面实心杆、金属连接杆件与拼接桁架、法兰及由扩张编织管形成的板件。中国国际复材展网上展厅收录同一主体，范围包括三维编织机、预制体、复材设计制造和服务。产品、尺寸、能力及应用陈述来自企业或展会公开资料，尚未经 GetFRP 现场审计或第三方验证。",
  descriptionEn:
    "Beijing Bairuiding Technology Co., Ltd. focuses its official website on 3D braiding technology. Published services include custom 3D braided preforms, integrated braiding solutions, manufacture of 3D braided composites, simulation, performance testing and related technical services. The current product display includes thick-wall large tubular preforms, two-metre load-bearing rods, solid flexible or rigid ropes, springs, round solid rods, metal-connected rod and truss assemblies, flanges and panels formed by expanding braided tubes. China Composites Expo lists the same entity for 3D braiding machines, preforms, composite design and manufacture, and technical services. Product, size, capability and application statements are company- or organizer-published and have not been independently site-audited or third-party validated by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "柏瑞鼎的官网展示说明其供货边界既可能是干态或预成型的三维编织预制体，也可能延伸到浸渍成型后的复合材料部件、编织设备或工程服务；采购方必须在 RFQ 中把交付物定义清楚。预制体项目应明确纤维种类与牌号、丝束、上浆剂、纱线张力、编织角、轴向/偏轴纱比例、截面和壁厚、长度、局部增厚、孔洞/分叉/法兰/接头几何、纤维体积分数目标、尺寸公差、搬运定型与包装。若交付复材成品，还应增加树脂体系、浸渍路线、固化制度、孔隙率、纤维体积分数、表面与机加工、无损检测、静强度、疲劳、冲击和环境老化验收。若采购三维编织机或整线，则需约定载纱器数量、可编截面、编织速度、张力控制、换纱和断纱处理、控制系统、数据接口、工装、样件试制、FAT/SAT、培训、备件和软件图纸交付。官网提供仿真与测试服务入口，但没有公开足以替代项目级模型假设、材料输入、边界条件、网格收敛和试验方法的完整技术包，双方应在合同中约定模型和试验报告格式。当前官网 HTTPS 证书与域名不匹配，HTTP 页面也会被部分浏览器安全策略拦截；官网页眉引用的官方 Logo CDN 在核验时返回拒绝访问，因此本页使用文字回退。交换受控图纸、登录信息或付款指令前应独立核对域名、联系人和安全通道。官网亦未提供可同时核对主体、地址、范围、编号和有效期的完整现行证书包，本页不列已核实认证。",
  productsServicesSummaryEn:
    "Bairuiding's website indicates that the commercial boundary may be a dry or stabilized 3D braided preform, an impregnated and cured composite part, a braiding machine, or an engineering service; the RFQ must define the deliverable explicitly. A preform specification should state fiber type and grade, tow size, sizing, yarn tension, braiding angle, axial-to-bias yarn ratio, section and wall thickness, length, local reinforcement, hole, branch, flange or joint geometry, target fiber volume, dimensional tolerance, handling stabilization and packaging. If the deliverable is a finished composite, add the resin system, impregnation route, cure cycle, void and fiber-volume criteria, surface and machining requirements, NDT, static strength, fatigue, impact and environmental-aging acceptance. For a 3D braiding machine or line, contract for carrier count, achievable cross-sections, braiding rate, tension control, bobbin change and broken-yarn handling, control hardware, data interfaces, tooling, customer-part trials, FAT and SAT, training, spares, and software or drawing deliverables. The site offers simulation and testing, but its public pages do not provide a complete technical package that could replace project-specific model assumptions, material inputs, boundary conditions, mesh convergence or test methods; define the model and test-report format contractually. The current HTTPS certificate does not match the domain, and some browser security policies block the HTTP site. The official header's logo CDN denied access during review, so the page deliberately uses a text fallback. Independently verify the domain, contact and secure exchange channel before sharing controlled drawings, credentials or payment instructions. The site also does not expose a complete current certificate set sufficient to verify entity, site, scope, number and validity, so no certification is recorded as independently verified.",
  ecatalogs: [
    {
      title: "柏瑞鼎三维编织官网",
      titleEn: "Official Bairuiding 3D Braiding Website",
      description: "公司身份、产品展示和三维编织服务范围。",
      descriptionEn:
        "Official identity, product display and 3D braiding service scope.",
      url: "http://www.3dbraiding.com/",
      format: "Official website",
    },
    {
      title: "柏瑞鼎三维编织产品展示",
      titleEn: "Bairuiding 3D Braided Product Display",
      description: "筒形、杆件、绳索、桁架、法兰和板件预制体入口。",
      descriptionEn:
        "Official display of tubular, rod, rope, truss, flange and panel preforms.",
      url: "http://www.3dbraiding.com/product/11.html",
      format: "Product page",
    },
    {
      title: "中国国际复材展 B 字母展商页",
      titleEn: "China Composites Expo Exhibitors — B",
      description: "北京柏瑞鼎展商身份、三维编织机、预制体和服务范围。",
      descriptionEn:
        "Organizer entry for Beijing Bairuiding, 3D braiding machines, preforms and services.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=B",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: null,
  contactEmail: null,
  contactPhone: null,
  address: "Beijing, China",
  website: "http://www.3dbraiding.com/",
  enterpriseId: null,
  scaleTier: "S",
  brandPriority: 14,
  viewCount: 0,
  capabilities: [
    "3D braided preforms",
    "carbon-fiber 3D braiding",
    "tubular and shaped preforms",
    "3D braided rods and trusses",
    "3D braided composite molding",
    "3D braiding machines",
    "composite simulation",
    "composite performance testing",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
