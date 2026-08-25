import type { SupplierListing } from "@/lib/db/schema";

export const DONGGUAN_ACTION_COMPOSITES_SUPPLIER_ID =
  "sup-dongguan-action-composites";
export const DONGGUAN_ACTION_COMPOSITES_SUPPLIER_SLUG =
  "dongguan-action-composites";

// Curated from Action Composites China's current official website and China
// Composites Expo's final 2026 Shenzhen exhibitor list. The profile stays with
// the named Dongguan legal entity and does not transfer every group site,
// approval or capability to China. Certification, patent, customer, volume and
// award statements remain company-published unless a current scoped document is
// linked. Official logo downloaded 2026-08-25 from:
// https://www.action-composites.com.cn/wp-content/uploads/logo.svg
export const DONGGUAN_ACTION_COMPOSITES_SUPPLIER_PROFILE: SupplierListing = {
  id: DONGGUAN_ACTION_COMPOSITES_SUPPLIER_ID,
  name: "东莞艾可迅复合材料有限公司",
  nameEn: "Dongguan Action Composites Co., Ltd.",
  slug: DONGGUAN_ACTION_COMPOSITES_SUPPLIER_SLUG,
  location: "广东东莞",
  locationEn: "Dongguan, Guangdong, China",
  province: "广东",
  category: "manufacturer",
  products: [
    "汽车用碳纤维防滚架",
    "碳纤维稳定杆",
    "碳纤维连接杆",
    "全碳纤维轮毂与轮辋",
    "汽车碳纤维弹簧部件",
    "Class-A 碳纤维后视镜壳",
    "Class-A 碳纤维内外饰件",
    "汽车安全结构与轻量化 CFRP 定制部件",
  ],
  productsEn: [
    "Automotive carbon fiber roll cages",
    "Carbon fiber stabilizer bars",
    "Carbon fiber connecting rods and links",
    "Full carbon fiber automotive wheels and braided rims",
    "Automotive carbon fiber spring components",
    "Class-A carbon fiber mirror housings",
    "Class-A carbon fiber interior and exterior trim parts",
    "Custom automotive safety structures and lightweight CFRP components",
  ],
  processList: [
    "汽车 CFRP 产品共同开发",
    "复合材料结构与外观设计",
    "仿生拓扑优化与复材有限元分析（企业声明）",
    "碳纤维热压罐成型",
    "大直径径向编织轮辋成型（企业声明）",
    "中空安全结构件一次成型",
    "Class-A 碳纤维外观面生产",
    "粗胚、精整、涂装到量产的配套服务",
  ],
  processListEn: [
    "Automotive CFRP product co-development",
    "Composite structural and cosmetic design",
    "Bionic topology optimization and composite FEM (company claim)",
    "Carbon-fiber autoclave molding",
    "Large-diameter radial braiding for wheel rims (company claim)",
    "One-shot molding of hollow safety structures",
    "Class-A carbon-fiber cosmetic-surface production",
    "Blank, finishing, painting and series-production support",
  ],
  established: 2012,
  verified: false,
  description:
    "东莞艾可迅复合材料有限公司是位于广东东莞的汽车碳纤维复合材料部件开发与制造企业。官方中文站把中国业务创立时间列为 2012 年，业务范围为汽车 CFRP 部件的开发、设计与生产，并公开防滚架、稳定杆和连接杆、全碳轮毂、弹簧、后视镜壳及 Class-A 内外饰件。中国国际复材展 2026 深圳展商最终名单以同一法律主体收录企业，展品明确为汽车碳纤维复合材料部件。本页只呈现东莞主体官网可追溯的产品和能力，不把集团其他国家工厂、体系证书、客户、产量、专利或奖项自动转移为中国供应范围的已验证事实。",
  descriptionEn:
    "Dongguan Action Composites Co., Ltd. is a Dongguan, Guangdong developer and manufacturer of automotive carbon-fiber composite parts. The official China website dates the China operation to 2012 and describes the development, design and production of automotive CFRP components. It publishes carbon roll cages, stabilizer bars and links, full-carbon wheels, springs, mirror housings and Class-A interior and exterior parts. China Composites Expo's final 2026 Shenzhen exhibitor list names the same Dongguan legal entity and identifies automotive carbon-fiber composite components as its exhibit. This profile is limited to traceable China-site products and capabilities and does not automatically transfer another group facility, management certificate, customer, production volume, patent or award into a verified Dongguan supply scope.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "艾可迅定位于汽车原厂及批量 CFRP 零部件，而不是标准碳板、碳管或通用碳纤维体育用品供应商。官网亮点产品包括 Class-A 后视镜壳和内外饰件、碳纤维防滚架、稳定杆与连接杆、全碳轮毂/轮辋和碳纤维弹簧，并公开从开发设计、粗胚到涂装和系列生产的服务。采购询价应以具体车型、零件号和受控图纸为起点，定义装配界面、载荷谱、碰撞/安全作用、刚度、强度、疲劳、温度、湿热、盐雾、石击、UV、化学品、NVH、阻燃、尺寸和 Class-A 外观要求。材料规范要明确纤维牌号与可替代规则、树脂体系、预浸料/织物、铺层方向、纤维体积分数、芯材或嵌件、胶接与紧固、固化和后处理；结构件与外观件不能共用一套笼统验收标准。开发项目应约定设计责任、DFMEA/PFMEA、复材分析模型、模具和检具所有权、样件阶段、试验计划、首件/PPAP 或买方指定批准流程、工程变更、软件和数据保密。官网展示热压罐、径向编织、中空结构一次成型与 Class-A 表面等工艺，但 RFQ 应确认拟报价零件实际使用的工厂、设备、最大尺寸、产能、自动化、关键特性控制、无损检测、修补规则和过程追溯。轮毂、防滚架、弹簧和底盘连接件属于安全相关部件，买方须取得适用于具体零件、车辆和市场的法规、型式批准、试验与失效模式证据，不能把官网奖项或通用认证陈述作为量产放行。外观件需建立颜色、纹理、纤维偏移、印透、针孔、波纹、光泽、橘皮、涂层厚度和 A 面禁区样板。供应商还应说明原料批次、冷链与保质期、铺层/编织记录、固化曲线、检验结果、序列化、留样、返修和变更通知。商务报价应拆分开发、模具、检具、测试、样件、量产、涂装、包装、备件和售后，确认中国签约/出口主体、知识产权、产能预留、MOQ、爬坡与停产责任。本轮未取得完整现行证书文件，因此官网列出的 IATF/ISO/SA 等体系陈述未录入验证认证数组。",
  productsServicesSummaryEn:
    "Action Composites is positioned for automotive OEM and series-production CFRP components, not standard carbon sheet, tube or generic sporting goods. Its official highlighted range includes Class-A mirror housings and trim, a carbon roll cage, stabilizer bars and links, full-carbon wheels or rims and carbon springs, together with development, blank production, finishing, painting and series-production support. An RFQ should begin with the vehicle program, part number and controlled drawing, then define interfaces, load spectrum, crash or safety function, stiffness, strength, fatigue, temperature, humidity, salt spray, stone impact, UV, chemicals, NVH, flammability, dimensions and Class-A appearance. The material specification should identify fiber grade and substitution rules, resin, prepreg or fabric, orientation, target fiber volume, cores or inserts, bonding and fastening, cure and post-processing. Structural and cosmetic parts need different acceptance plans. Development scope should allocate design responsibility, DFMEA and PFMEA, composite analysis model, ownership of molds and gauges, prototype phases, test plan, first article, PPAP or buyer-specific approval, engineering change, software and data confidentiality. The site shows autoclave equipment, radial braiding, one-shot hollow structures and Class-A surfaces, but the RFQ must confirm the actual factory, equipment, size envelope, capacity, automation, key-characteristic controls, nondestructive inspection, repair rules and traceability proposed for the part. Wheels, roll cages, springs and chassis links are safety-related. Obtain regulation, homologation, test and failure-mode evidence for the exact component, vehicle and market instead of treating awards or broad certification statements as production release. Cosmetic acceptance should cover color, weave, fiber distortion, print-through, pinholes, waviness, gloss, orange peel, coating thickness and master samples for restricted A-surfaces. Require material lots, cold-chain and shelf-life records, lay-up or braid record, cure trace, inspection, serialization, retention, rework and change notification. Separate development, molds, gauges, tests, prototypes, production, paint, packaging, service parts and support commercially, and confirm China contracting or export entity, IP, reserved capacity, MOQ, ramp-up and end-of-production duties. No complete current certificate document was reviewed, so the site's IATF, ISO and SA system statements are not entered as verified certifications.",
  ecatalogs: [
    {
      title: "艾可迅中国官网",
      titleEn: "Official Action Composites China Website",
      description: "中国主体、产品、能力与联系入口。",
      descriptionEn: "China entity, products, capabilities and contact entry point.",
      url: "https://www.action-composites.com.cn/",
      format: "Official website",
    },
    {
      title: "艾可迅公司简介",
      titleEn: "Action Composites China Profile",
      description: "中国业务历史、研发生产定位与公开工艺。",
      descriptionEn: "China history, development and production positioning and published processes.",
      url: "https://www.action-composites.com.cn/about-us/",
      format: "Company profile",
    },
    {
      title: "汽车 CFRP 亮点产品",
      titleEn: "Highlighted Automotive CFRP Products",
      description: "防滚架、底盘杆件、轮毂、弹簧和外观件。",
      descriptionEn: "Roll cage, chassis links, wheels, springs and cosmetic parts.",
      url: "https://www.action-composites.com.cn/product/",
      format: "Product directory",
    },
    {
      title: "艾可迅官方联系方式",
      titleEn: "Action Composites Official Contact Page",
      description: "东莞地址、电话与销售邮箱。",
      descriptionEn: "Dongguan address, telephone and sales email.",
      url: "https://www.action-composites.com.cn/contact-us/",
      format: "Official contact",
    },
    {
      title: "中国国际复材展 2026 深圳展商最终名单",
      titleEn: "China Composites Expo 2026 Shenzhen Final Exhibitor List",
      description: "艾可迅法律主体、展位及汽车碳纤维部件展品。",
      descriptionEn: "Organizer source for the Action entity, booth and automotive CFRP exhibit.",
      url: "https://shenzhen.chinacompositesexpo.com/cn/news.php?c_id=252&top_c_id=4",
      format: "Exhibitor list",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/dongguan-action-composites-logo.svg",
  contactEmail: "sales@action-composites.com.cn",
  contactPhone: "+86 769 3901 2698",
  address: "No. 3 Longkou Road, Shigu, Tangxia Town, Dongguan, Guangdong, China",
  website: "https://www.action-composites.com.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 26,
  viewCount: 0,
  capabilities: [
    "automotive CFRP component development",
    "carbon fiber safety structures",
    "Class-A carbon cosmetic parts",
    "autoclave molding",
    "radial braiding for carbon wheel rims",
    "hollow composite one-shot molding",
    "composite structural analysis and design",
    "finishing and painting",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
