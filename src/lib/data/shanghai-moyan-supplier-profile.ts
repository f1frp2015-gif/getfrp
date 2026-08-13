import type { SupplierListing } from "@/lib/db/schema";

export const SHANGHAI_MOYAN_SUPPLIER_ID = "sup-shanghai-moyan";
export const SHANGHAI_MOYAN_SUPPLIER_SLUG = "shanghai-moyan-instrument";

// Curated from Shanghai Moyan's official company, glass-fiber equipment,
// solution and contact pages. Scale, product-series, customer, patent and
// performance statements remain company-published and have not been
// independently verified by GetFRP. The English name follows the supplier's
// China Composites Expo 2026 exhibitor listing. The locally stored official
// logo is the current header asset downloaded on 2026-08-12 from:
// https://www.shmyjd.net/uploadfile/202512/bbf892d2413491f.png
export const SHANGHAI_MOYAN_SUPPLIER_PROFILE: SupplierListing = {
  id: SHANGHAI_MOYAN_SUPPLIER_ID,
  name: "上海莫研机电设备有限公司",
  nameEn: "Shanghai Moyan Instrument Co., Ltd.",
  slug: SHANGHAI_MOYAN_SUPPLIER_SLUG,
  location: "上海",
  locationEn: "Shanghai, China",
  province: "上海",
  category: "equipment",
  products: [
    "玻璃纤维与玄武岩纤维络纱抗静电剂外涂控制系统",
    "带断纱、留皮、乱纱与蓬头监测的智能纱架",
    "络纱、短切、拉挤、织布与整经纱架",
    "浸润剂配料、全自动配液与自动供油系统",
    "纱线与纱筒机器视觉识别系统",
    "张力控制及定制流体自动化设备",
  ],
  productsEn: [
    "Glass- and basalt-fiber winding coating systems",
    "Smart creels with broken-end, residual-yarn, tangling and fuzz monitoring",
    "Winding, chopped-strand, pultrusion, weaving and warping creels",
    "Sizing-ingredient, fully automatic liquid-batching and oil-supply systems",
    "Machine-vision systems for yarn and package recognition",
    "Tension-control and custom fluid-automation equipment",
  ],
  processList: [
    "玻纤与玄武岩纤维络纱外涂及抗静电剂供给",
    "纱团放卷、张力控制与多工位纱架供纱",
    "浸润剂配料、输送与自动供油",
    "短切、拉挤、织布和整经工序配套",
    "工业视觉监测与异常预警",
    "流体自动化系统设计、集成与调试",
  ],
  processListEn: [
    "Anti-static coating and oil supply for glass- and basalt-fiber winding",
    "Package unwinding, tension control and multi-position creel feeding",
    "Sizing formulation, transfer and automatic oil supply",
    "Auxiliary feeding for chopping, pultrusion, weaving and warping",
    "Industrial vision monitoring and exception alerts",
    "Fluid-automation system design, integration and commissioning",
  ],
  established: 2013,
  verified: false,
  description:
    "上海莫研机电设备有限公司成立于 2013 年，位于上海市青浦区。公司官网将其定位为涂覆、分装、配液自动化设备制造商与系统集成商；在纤维材料领域，产品覆盖玻璃纤维和玄武岩纤维络纱抗静电剂外涂控制、智能纱架、浸润剂配料、张力控制、自动供油，以及短切、拉挤、织布和整经纱架。官网同时公开机器视觉与纱线异常监测方案，并称在保定、重庆和广州设有办事处。首页还发布 1,200 平方米标准生产厂房、80 多个自研产品系列、30 多个国际营销区域及 200 多家合作客户等数据；这些规模与市场覆盖数据均为企业自述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Shanghai Moyan Instrument Co., Ltd. was established in 2013 and is based in Qingpu District, Shanghai. Its official website positions the business as a manufacturer and system integrator for coating, dispensing and liquid-batching automation. For fiber-material production, the published range covers anti-static coating control for glass- and basalt-fiber winding, smart creels, sizing-ingredient systems, tension control, automatic oil supply, and creels for chopped strand, pultrusion, weaving and warping. The site also presents machine-vision and yarn-exception monitoring and says the company has offices in Baoding, Chongqing and Guangzhou. Homepage figures cite a 1,200 m² standard production plant, more than 80 self-developed product series, over 30 international marketing regions and more than 200 customers; these scale and market-coverage statements are company-published and have not been independently verified by GetFRP.",
  certifications: [
    "ISO 9001 质量管理体系证书（企业官网展示；采购方应核验认证主体、范围与现行有效期）",
  ],
  certificationsEn: [
    "ISO 9001 quality-management certificate (displayed on the company website; confirm the certified entity, scope and current validity)",
  ],
  productsServicesSummary:
    "莫研官网的玻璃纤维设备目录列出络纱涂油系统、络纱纱架、短切纱架、拉挤纱架、织布纱架、自动配料系统、视觉识别系统、蓬头监测装置，以及浸润剂滴定和喷涂组件。企业公开参数包括络纱涂油精度 ±1%、1–9 个通道、涂油槽或喷涂方式；滴定组件范围 20–220 滴/分钟、压力 0.2 MPa；喷涂组件流量小于 38 ml/min、压力 0.2–0.5 MPa。官网还称研发团队具有十余年流体控制经验，使用 PID 控制、机器视觉、数据采集与智能算法，并拥有 20 多项发明专利和软件著作权。上述参数、知识产权与业绩均需在采购时针对实际型号核验。询盘应明确纤维与浸润剂体系、纱团尺寸和数量、张力范围及容差、线速度、涂覆或配料精度、接液材质、监测项目与误报率、PLC 和数据接口、安全与远程访问、产线边界、公用工程、FAT/SAT、安装调试、培训、备件、质保及目的地服务。",
  productsServicesSummaryEn:
    "Moyan's glass-fiber equipment directory lists a winding oiling system; winding, chopped-strand, pultrusion and weaving creels; an automatic ingredient system; machine-vision and fuzz-monitoring devices; and sizing-liquid dripping and spraying components. Company-published figures include ±1% oiling accuracy, one to nine channels, and oil-bath or spray application for the winding system; 20–220 drops per minute at 0.2 MPa for the dripping component; and less than 38 ml/min at 0.2–0.5 MPa for the spray component. The official site also says its team has more than ten years of fluid-control experience, applies PID control, machine vision, data acquisition and intelligent algorithms, and holds more than 20 invention patents and software copyrights. Buyers should validate those performance, intellectual-property and reference claims for the quoted model. An RFQ should define the fiber and sizing chemistry, package dimensions and position count, tension range and tolerance, line speed, coating or batching accuracy, wetted materials, monitored conditions and false-alarm limits, PLC and data interfaces, safety and remote access, line boundaries, utilities, FAT/SAT, commissioning, training, spares, warranty and destination support.",
  ecatalogs: [
    {
      title: "莫研公司介绍",
      titleEn: "Moyan Company Profile",
      description: "企业定位、纤维材料设备范围、公开规模数据、质量体系与知识产权展示。",
      descriptionEn:
        "Official company positioning, fiber-equipment scope, published scale figures, quality-system display and intellectual-property claims.",
      url: "https://www.shmyjd.net/about_us.html",
      format: "Company profile",
    },
    {
      title: "玻璃纤维生产设备目录",
      titleEn: "Glass-fiber Production Equipment Directory",
      description: "外涂系统、智能纱架、配料系统及公开产品参数。",
      descriptionEn:
        "Official directory for coating systems, smart creels, ingredient systems and published product parameters.",
      url: "https://www.shmyjd.net/glass_fiber_production_equipment.html",
      format: "Product directory",
    },
    {
      title: "玻璃纤维生产方案",
      titleEn: "Glass-fiber Production Solution",
      description: "络纱控制流水线、纱架、外涂、浸润剂配料与客户现场。",
      descriptionEn:
        "Official winding-control line, creel, coating, sizing-ingredient and customer-site overview.",
      url: "https://www.shmyjd.net/solutions/9.html",
      format: "Solution guide",
    },
    {
      title: "玻纤生产智能视觉识别",
      titleEn: "Glass-fiber Machine-vision Solution",
      description: "纱线和纱筒识别、缺陷监测、数据记录与产线接口说明。",
      descriptionEn:
        "Official yarn and package recognition, defect monitoring, data-recording and production-line interface overview.",
      url: "https://www.shmyjd.net/solutions/8.html",
      format: "Solution guide",
    },
    {
      title: "莫研联系方式",
      titleEn: "Moyan Contact Details",
      description: "上海与保定地址、电话、邮箱和询盘入口。",
      descriptionEn:
        "Official Shanghai and Baoding addresses, telephone, email and inquiry channel.",
      url: "https://www.shmyjd.net/contact_us.html",
      format: "Official contact",
    },
    {
      title: "2026 中国国际复材展展商资料",
      titleEn: "China Composites Expo 2026 Exhibitor Profile",
      description: "展会发布的中英文企业名称、纤维材料设备范围与展位信息。",
      descriptionEn:
        "Organizer-published Chinese and English company names, fiber-equipment scope and booth information.",
      url: "https://www.chinacompositesexpo.com/en/netshow-1893-7877443.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-12T00:00:00.000Z"),
  logo: "/supplier-assets/shanghai-moyan-logo.png",
  contactEmail: "info@shmyjd.net",
  contactPhone: "+86 21 5523 3357",
  address:
    "Room 102, 1st Floor, Building 3, No. 666 Songhuang Road, Qingpu District, Shanghai 201799, China",
  website: "https://www.shmyjd.net/",
  enterpriseId: null,
  scaleTier: "S",
  brandPriority: 6,
  viewCount: 0,
  capabilities: [
    "glass-fiber production equipment",
    "basalt-fiber production equipment",
    "anti-static coating control",
    "winding oiling systems",
    "smart creels",
    "pultrusion creels",
    "chopped-strand creels",
    "weaving and warping creels",
    "sizing-ingredient systems",
    "automatic oil-supply systems",
    "yarn tension control",
    "machine-vision yarn monitoring",
    "custom fluid automation",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-12T00:00:00.000Z"),
  updatedAt: new Date("2026-08-12T00:00:00.000Z"),
};
