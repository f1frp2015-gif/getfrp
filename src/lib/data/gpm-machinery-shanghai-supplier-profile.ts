import type { SupplierListing } from "@/lib/db/schema";

export const GPM_MACHINERY_SHANGHAI_SUPPLIER_ID =
  "sup-gpm-machinery-shanghai";
export const GPM_MACHINERY_SHANGHAI_SUPPLIER_SLUG =
  "gpm-machinery-shanghai";

// Curated from GPM's current official thermoplastic-composite, company and
// contact pages plus the 2026 CCE G directory. Official logo downloaded
// 2026-08-25 from the image URL used by gpmplas.com.
export const GPM_MACHINERY_SHANGHAI_SUPPLIER_PROFILE: SupplierListing = {
  id: GPM_MACHINERY_SHANGHAI_SUPPLIER_ID,
  name: "国塑机械（上海）有限公司",
  nameEn: "GPM Machinery (Shanghai) Co., Ltd.",
  slug: GPM_MACHINERY_SHANGHAI_SUPPLIER_SLUG,
  location: "上海嘉定",
  locationEn: "Shanghai, China",
  province: "上海",
  category: "equipment",
  products: [
    "热塑性 UD 带生产线（连续碳纤维）",
    "PPS/PEEK/PA 碳纤维热塑性预浸带生产线",
    "PA/PP/PE 连续纤维增强热塑性单向带生产线",
    "连续玻纤增强 PE 热塑性单向带生产线",
    "PE/PP 连续芳纶增强热塑性 UD 带生产线",
    "UHMWPE 纤维单向布生产线",
    "LFRT 长玻纤增强热塑性粒料生产线",
    "CFRTP/GFRTP 单向带分切机",
    "热塑蜂窝夹芯板双带压机",
    "汽车内饰板复合机",
  ],
  productsEn: [
    "Thermoplastic carbon-fiber UD-tape production lines",
    "PPS, PEEK and PA carbon-fiber thermoplastic prepreg-tape lines",
    "PA, PP and PE continuous-fiber thermoplastic unidirectional-tape lines",
    "Continuous-glass-fiber reinforced PE UD-tape production lines",
    "PE and PP continuous-aramid thermoplastic UD-tape lines",
    "UHMWPE-fiber unidirectional-fabric production lines",
    "LFRT long-glass-fiber thermoplastic pellet-making lines",
    "CFRTP and GFRTP unidirectional-tape slitting machines",
    "Double-belt press machines for thermoplastic honeycomb sandwich panels",
    "Automotive-interior panel lamination machines",
  ],
  processList: [
    "热塑性树脂熔融浸渍与湿粉浸渍线集成",
    "连续纤维放卷、展纱、浸渍、压实与收卷",
    "UD 带宽度、面密度与树脂含量工艺开发",
    "单向带在线分切与收卷",
    "LFRT 粒料复合与切粒",
    "蜂窝芯材双带热压复合",
    "客户材料试线、打样与 FAT",
    "安装、调试、培训、备件与售后支持",
  ],
  processListEn: [
    "Melt-impregnation and wet-powder thermoplastic line integration",
    "Continuous-fiber unwinding, spreading, impregnation, consolidation and winding",
    "UD-tape width, areal-weight and resin-content process development",
    "In-line unidirectional-tape slitting and winding",
    "LFRT compounding and pellet cutting",
    "Double-belt thermal lamination of honeycomb cores",
    "Customer-material line trials, samples and FAT",
    "Installation, commissioning, training, spares and after-sales support",
  ],
  established: null,
  verified: false,
  description:
    "国塑机械（上海）有限公司是位于上海嘉定的塑料挤出与热塑性复材装备供应商。现行中英文官网公开相同 GPM/国塑机械身份、嘉定地址、电话和企业邮箱；中国国际复材展以 GPM MACHINERY (SHANGHAI) CO., LTD. 收录企业并重点介绍连续纤维增强热塑性复材生产系统。官网热塑复材目录列出碳纤、玻纤、芳纶和 UHMWPE 纤维用 UD 带/单向布线，PPS、PEEK、PA、PP、PE 等树脂配置，长玻纤热塑性粒料线、单向带分切机、双带压机和汽车内饰板复合机。国塑是设备和工程服务供应商；生产线能够加工某类碳纤、玻纤或预浸带，不等于国塑自身供应这些复材。因此本页只植入装备、生产线与工艺词，不向该页分配碳纤维材料、玻纤材料或预浸料供应商搜索词。",
  descriptionEn:
    "GPM Machinery (Shanghai) Co., Ltd. is a plastic-extrusion and thermoplastic-composite equipment supplier in Jiading, Shanghai. Its current Chinese and English websites publish the matching GPM identity, Jiading address, telephone and company email. China Composites Expo lists GPM MACHINERY (SHANGHAI) CO., LTD. and highlights continuous-fiber reinforced thermoplastic production systems. The official thermoplastic-composite directory covers UD-tape or unidirectional-fabric lines for carbon, glass, aramid and UHMWPE fibers with PPS, PEEK, PA, PP and PE matrices, plus long-glass thermoplastic pellet lines, UD-tape slitters, double-belt presses and automotive-interior lamination equipment. GPM supplies machinery and engineering services. A line's ability to process carbon fiber, fiberglass or prepreg does not mean that GPM itself supplies those materials. GetFRP therefore assigns equipment, line and process language only, with no carbon-fiber-material, fiberglass-material or prepreg-supplier search phrases.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网目录把连续碳纤热塑单向带分为湿粉浸渍、PA、PPS 和 PEEK 等配置，也列出玻纤/PE、芳纶/PE 或 PP、UHMWPE 单向布、CFRTP/GFRTP 分切、LFRT 粒料与热塑蜂窝夹芯复合。设备 RFQ 应先提交目标纤维生产商与牌号、丝束、上浆、纤维幅宽和放卷包，树脂牌号、熔指、干燥、加工温度、降解与挥发，以及目标带材宽厚、面密度、纤维/树脂含量、孔隙、表面、边缘、卷径、卷重和节拍。高温 PEEK/PPS 线需单独锁定干燥、惰性保护、熔体停留、加热区、辊面温度、冷却、排风、材料接触件、热膨胀、保温和高温安全，不能把 PA/PP 试线结果直接外推。供货范围要列明纱架、展纱、预热、浸渍、压延/压实、冷却、牵引、在线测厚/测重、分切、张力、纠偏、收卷、边料回收、配混挤出、双带压机、控制和数据接口。要求用买方代表性纤维与树脂试线，记录原料批次、干燥、温度、压力、速度、张力、能耗、废料、带材性能、连续运行、换卷和清线。FAT/SAT 应明确产能定义、合格率、尺寸与树脂含量统计、孔隙/浸润判定、停机恢复、配方权限、报警、急停、联锁、护罩、排风、粉尘和静电接地。交付包需包含总图、基础、供电、压缩空气、冷却水、导热油/加热、排风、网络、BOM、图纸、PLC/HMI 程序和备份、软件许可、中文/英文说明书、维护、易损件、培训和质保。官网显示证书入口，但本轮未对证书号、标准版本、范围、地址和有效期逐项核验，认证数组为空。报价应拆分设备、模具/辊筒、安装、试线原料、包装、海运、现场服务和海外备件，并核对合同、开票、收款和出口主体。",
  productsServicesSummaryEn:
    "The official directory separates continuous-carbon thermoplastic tape into wet-powder, PA, PPS and PEEK configurations and also lists glass-fiber/PE, aramid/PE or PP, UHMWPE unidirectional fabric, CFRTP/GFRTP slitting, LFRT pellets and thermoplastic honeycomb lamination. An equipment RFQ should first identify fiber producer and grade, tow, sizing, incoming package and spread width; resin grade, melt flow, drying, processing temperature, degradation and volatiles; and target tape width, thickness, areal weight, fiber or resin content, voids, surface, edge, roll diameter, roll mass and takt. A high-temperature PEEK or PPS line needs separately controlled drying, inerting, melt residence, heating zones, roll-face temperature, cooling, exhaust, contact materials, thermal expansion, insulation and hot-work safety. Results from a PA or PP trial cannot be extrapolated. Define the supply boundary for creels, fiber spreading, preheat, impregnation, calendaring or consolidation, cooling, puller, in-line thickness or mass measurement, slitting, tension, web guiding, winding, edge recycling, compounding extruder, double-belt press, controls and data interfaces. Require a line trial with the buyer's representative fiber and resin, recording raw-material lots, drying, temperatures, pressure, speed, tension, energy, scrap, tape properties, endurance, roll change and cleaning. FAT and SAT should define capacity, yield, dimensional and resin-content statistics, void or wet-out acceptance, restart, recipe permissions, alarms, E-stops, interlocks, guards, exhaust, dust and static grounding. The delivery package should include layout, foundations, electrical, compressed air, cooling water, thermal-oil or other heating, exhaust, network, BOM, drawings, PLC and HMI source and backups, software licenses, Chinese and English manuals, maintenance, consumables, training and warranty. The website exposes a certificate entry, but this review did not align certificate number, standard revision, scope, address and validity, so no certification is recorded as verified. Separate machine, dies or rolls, installation, trial materials, packing, sea freight, field service and overseas spares, and confirm the contracting, invoicing, payee and export entity.",
  ecatalogs: [
    { title: "GPM 官方网站", titleEn: "Official GPM Website", description: "设备、公司与联系入口。", descriptionEn: "Official equipment, company and contact entry.", url: "https://www.gpmplas.com/", format: "Official website" },
    { title: "热塑性复材设备目录", titleEn: "Thermoplastic Composite Machinery", description: "UD 带、LFRT、分切与夹芯复合设备。", descriptionEn: "Official UD-tape, LFRT, slitting and sandwich-lamination equipment.", url: "https://www.gpmplas.com/Thermoplastic-Composites-Machine-pl3848286.html", format: "Product directory" },
    { title: "GPM 产品中心", titleEn: "GPM Product Center", description: "全部设备分类与具体产品。", descriptionEn: "All machinery categories and individual products.", url: "https://www.gpmplas.com/products.html", format: "Product directory" },
    { title: "GPM 公司简介", titleEn: "GPM Company Profile", description: "上海主体与装备业务介绍。", descriptionEn: "Official Shanghai entity and equipment-business profile.", url: "https://www.gpmplas.com/aboutus.html", format: "Company profile" },
    { title: "GPM 官方联系方式", titleEn: "Official GPM Contact", description: "嘉定地址、电话和邮箱。", descriptionEn: "Published Jiading address, telephone and email.", url: "https://www.gpmplas.com/contactus.html", format: "Contact page" },
    { title: "中国国际复材展 G 字母页", titleEn: "China Composites Expo Exhibitors — G", description: "上海展商主体与复材设备范围。", descriptionEn: "Organizer source for the Shanghai exhibitor and composite-equipment scope.", url: "https://www.chinacompositesexpo.com/en/netshow.php?head=G", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/gpm-machinery-shanghai-logo.png",
  contactEmail: "salcc@gpmplas.com",
  contactPhone: "+86 21 5956 9579",
  address: "No. 121, 5888 Baoqian Road, Jiading District, Shanghai, China",
  website: "https://www.gpmplas.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 24,
  viewCount: 0,
  capabilities: ["thermoplastic UD-tape lines", "carbon and glass fiber impregnation equipment", "LFRT pellet lines", "UHMWPE UD-fabric lines", "UD-tape slitting", "double-belt presses", "material trials and FAT", "installation and commissioning"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
