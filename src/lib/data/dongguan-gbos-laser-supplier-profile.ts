import type { SupplierListing } from "@/lib/db/schema";

export const DONGGUAN_GBOS_LASER_SUPPLIER_ID = "sup-dongguan-gbos-laser";
export const DONGGUAN_GBOS_LASER_SUPPLIER_SLUG = "dongguan-gbos-laser";

// Curated from GBOS' current official website and the 2026 China Composites
// Expo D directory. Composite-sector relevance comes from the organizer's
// cutting-equipment listing; the supplier's own site describes a wider flexible-
// material equipment portfolio. Company, patent, user, network and certification
// statements remain supplier- or organizer-published claims. No certificate was
// recorded without a current document tying legal entity, number, scope, issuer
// and validity together. Official light-background logo downloaded 2026-08-25:
// https://www.gboslaser.cn/themes/gboslaser/images/gbos/logo-2.png?v=1732618854
export const DONGGUAN_GBOS_LASER_SUPPLIER_PROFILE: SupplierListing = {
  id: DONGGUAN_GBOS_LASER_SUPPLIER_ID,
  name: "东莞市光博士激光科技股份有限公司",
  nameEn: "Dongguan GBOS Laser Technology Co., Ltd.",
  slug: DONGGUAN_GBOS_LASER_SUPPLIER_SLUG,
  location: "广东东莞",
  locationEn: "Dongguan, Guangdong, China",
  province: "广东",
  category: "equipment",
  products: [
    "数字刀片切割系统",
    "激光切割系统",
    "三维五轴激光切割机",
    "激光打标与微加工系统",
    "AI 智能省料排版系统 ITS / ITS2",
    "IoT Bridge 设备与生产数据平台",
    "自动划线与喷线设备",
    "非标自动化与机器人应用方案",
  ],
  productsEn: [
    "Digital knife cutting systems",
    "Laser cutting systems",
    "Three-dimensional five-axis laser cutting machines",
    "Laser marking and micromachining systems",
    "ITS and ITS2 AI nesting and material-optimization software",
    "IoT Bridge equipment and production-data platform",
    "Automated line-marking and spray-line equipment",
    "Custom automation and robotic application solutions",
  ],
  processList: [
    "柔性材料数字刀片裁切",
    "激光切割、打标、雕刻与微加工",
    "AI 排版与材料利用率优化",
    "自动送料、视觉识别与连续裁切",
    "三维异形件五轴激光加工",
    "非标工艺与自动化单元开发",
    "设备联网及生产数据管理",
    "安装、培训、维护与本地服务（企业声明）",
  ],
  processListEn: [
    "Digital knife cutting of flexible materials",
    "Laser cutting, marking, engraving and micromachining",
    "AI nesting and material-utilization optimization",
    "Automated feeding, vision recognition and continuous cutting",
    "Five-axis laser processing of three-dimensional parts",
    "Custom process and automation-cell development",
    "Connected-machine and production-data management",
    "Installation, training, maintenance and local support (company claim)",
  ],
  established: 2005,
  verified: false,
  description:
    "东莞市光博士激光科技股份有限公司（GBOS）是位于广东东莞的数字裁切、激光加工与自动化设备供应商。企业官网称品牌于 2005 年在广东注册，现行产品由刀片切割、激光、自动化、IoT Bridge 与 ITS/ITS2 排版系统构成。中国国际复材展在 D 字母网上展厅将同一企业列为切割设备展商，并把数字切割系统、数字激光设备等作为展示产品。因此本页将 GBOS 定位为复合材料工厂可评估的裁切设备供应商，而不是碳纤维、玻纤或复材制品制造商；官网所列客户、专利、网点、认证和装机数字均未由 GetFRP 独立审计。",
  descriptionEn:
    "Dongguan GBOS Laser Technology Co., Ltd. is a Dongguan, Guangdong supplier of digital cutting, laser-processing and automation equipment. The official website says the GBOS business was registered in Guangdong in 2005 and currently groups its offer into blade cutting, laser systems, automation, the IoT Bridge platform and ITS/ITS2 nesting software. China Composites Expo lists the same legal entity in its D directory as a cutting-equipment exhibitor and identifies digital cutting and digital laser equipment as the displayed scope. GetFRP therefore presents GBOS as a cutting-equipment candidate for composite factories, not as a manufacturer of carbon fiber, fiberglass or finished composite parts. Customer, patent, service-network, certification and installed-base figures are company- or organizer-published claims and have not been independently audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "GBOS 官网公开的产品组合包括数字震动刀裁切、激光切割与打标、三维五轴激光设备、视觉识别、自动送料、自动划线、非标自动化、AI 排版和 IoT 设备管理。复材采购方不应仅凭“切割设备”分类推定任一机型都适用于碳纤预浸料、玻纤织物、夹芯材料或固化层压板；材料形态、厚度、黏性、粉尘、烟气、纤维导电性、热影响、毛边、尺寸精度和下游铺层要求会改变刀具、功率、台面、除尘和安全方案。询价应提交最大/最小幅宽、单层或多层、卷材或板材、材料牌号、厚度范围、目标节拍、排版格式、允许热影响区、边缘质量、尺寸公差、标记与追溯需求，并要求供应商使用代表性材料进行试切。设备 URS 还应明确有效工作区、送料与收料、真空吸附、刀具/激光模组、视觉精度、自动排版、CAD/CAM 文件格式、网络接口、数据归属、离线运行、权限、备份与网络安全。FAT/SAT 应记录代表性图形、连续运行时间、材料利用率、切割速度、尺寸与边缘结果、粉尘烟气控制、噪声、换型、报警、急停、防护联锁和废料处理。买方还需确认整机 CE 或目的市场安全要求适用范围、激光等级、护罩与联锁、排风防爆、接地、防静电、滤材和职业暴露控制，不能把官网的通用认证陈述扩展为特定出口机型已合规。商务边界应列出主机、软件许可、排版模块、送料台、除尘、空压/冷却、治具、安装、培训、差旅、备件、耗材、质保和远程支持。出货前取得机械、电气、气路、维护、参数、备份和易损件文件，并确认英文资料、电压频率、目的地服务响应和可本地采购的关键元件。本轮没有取得带完整法人、证书号、范围、发证机构和当前有效期的证书文件，因此认证字段保持为空。",
  productsServicesSummaryEn:
    "GBOS publishes a portfolio covering digital oscillating-knife cutting, laser cutting and marking, three-dimensional five-axis laser equipment, vision recognition, automated feeding and line marking, custom automation, AI nesting and connected-machine management. A composite buyer should not infer from the expo's cutting-equipment classification that every model is suitable for carbon prepreg, glass fabric, core stock or cured laminate. Material form, thickness, tack, conductive fiber dust, fumes, thermal damage, fraying, dimensional tolerance and downstream lay-up requirements change the required tool, power, bed, extraction and safety design. An RFQ should state minimum and maximum width, single- or multi-ply cutting, roll or sheet form, material grade and thickness range, target cycle, nesting-file format, permitted heat-affected zone, edge quality, tolerance, marking and traceability, and should require trials with representative production material. The user-requirement specification should define usable work area; feed and take-off; vacuum hold-down; blade or laser modules; vision accuracy; nesting; CAD/CAM formats; network interfaces; data ownership; offline operation; access control; backup and cybersecurity. FAT and SAT should record representative geometries, sustained runtime, material utilization, speed, dimensional and edge results, dust and fume control, noise, changeover, alarms, emergency stops, guarding interlocks and scrap handling. Confirm the exact machine's laser class, guarding, interlocks, extraction and explosion considerations, grounding, static control, filtration, occupational exposure controls and destination-market safety evidence instead of transferring broad website certification claims to an offered configuration. The commercial boundary should identify machine, software licenses, nesting modules, feed table, extraction, compressed air or cooling, fixtures, installation, training, travel, spares, consumables, warranty and remote support. Obtain mechanical, electrical, pneumatic, maintenance, parameter, backup and wear-part documents before shipment, and confirm English documentation, voltage and frequency, destination service response and locally sourceable critical components. No current certificate document with complete legal entity, number, scope, issuer and validity was reviewed, so no certification is recorded as verified.",
  ecatalogs: [
    {
      title: "光博士官方网站",
      titleEn: "Official GBOS Website",
      description: "现行设备、解决方案、公司与服务入口。",
      descriptionEn: "Current equipment, solutions, company and support entry point.",
      url: "https://www.gboslaser.cn/",
      format: "Official website",
    },
    {
      title: "光博士产品中心",
      titleEn: "GBOS Product Center",
      description: "数字刀片、激光及自动化产品组合。",
      descriptionEn: "Official digital knife, laser and automation portfolio.",
      url: "https://www.gboslaser.cn/products",
      format: "Product directory",
    },
    {
      title: "光博士公司简介",
      titleEn: "GBOS Company Profile",
      description: "业务历史、产品分组与企业自述能力。",
      descriptionEn: "Published history, product groups and company-claimed capabilities.",
      url: "https://www.gboslaser.cn/about",
      format: "Company profile",
    },
    {
      title: "光博士官方联系方式",
      titleEn: "GBOS Official Contact Page",
      description: "东莞地址、国内与国际业务电话和邮箱。",
      descriptionEn: "Dongguan address and domestic and international business contacts.",
      url: "https://www.gboslaser.cn/contact-us",
      format: "Official contact",
    },
    {
      title: "中国国际复材展 D 字母展商页",
      titleEn: "China Composites Expo Exhibitors — D",
      description: "光博士展商身份、数字裁切与激光设备范围。",
      descriptionEn: "Organizer source for GBOS and its digital cutting and laser-equipment scope.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=300",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/dongguan-gbos-logo.png",
  contactEmail: "gbos@gboslaser.com",
  contactPhone: "+86 769 8899 0609",
  address: "No. 8, Dongcheng Section, Songshan Lake Avenue, Dongcheng Subdistrict, Dongguan, Guangdong 523127, China",
  website: "https://www.gboslaser.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 24,
  viewCount: 0,
  capabilities: [
    "digital knife cutting systems",
    "laser cutting and marking systems",
    "three-dimensional five-axis laser processing",
    "AI nesting and material optimization",
    "vision-guided cutting",
    "automated feeding and handling",
    "custom automation cells",
    "connected-machine production data",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
