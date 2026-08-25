import type { SupplierListing } from "@/lib/db/schema";

export const GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_ID = "sup-guangdong-ruizhou-technology";
export const GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_SLUG = "guangdong-ruizhou-technology";

// Curated from Ruizhou's current official composite-cutting, company and
// contact pages plus the 2026 CCE G directory. Official logo downloaded
// 2026-08-25 from ruizhou.com.cn.
export const GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_PROFILE: SupplierListing = {
  id: GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_ID,
  name: "广东瑞洲科技有限公司",
  nameEn: "Guangdong Ruizhou Technology Co., Ltd.",
  slug: GUANGDONG_RUIZHOU_TECHNOLOGY_SUPPLIER_SLUG,
  location: "广东佛山",
  locationEn: "Foshan, Guangdong, China",
  province: "广东",
  category: "equipment",
  products: [
    "RZCRT5 系列复合材料数控切割机",
    "振动刀柔性复材切割系统",
    "圆刀纤维织物切割模块",
    "气动刀多层柔性材料切割模块",
    "V 型斜刀多角度切割模块",
    "数控铣刀/路由切割模块",
    "连续送料传送带切割系统",
    "画线、标注、压痕、半刀与全刀一体化工作站",
    "CAD/CAM 排版与多轴运动控制系统",
    "碳纤维、玻纤和预浸料试切与打样服务",
  ],
  productsEn: [
    "RZCRT5-series CNC composite-material cutting machines",
    "Oscillating-knife flexible-composite cutting systems",
    "Rotary-knife fiber-fabric cutting modules",
    "Pneumatic-knife multi-layer flexible-material cutting modules",
    "V-cut knife multi-angle cutting modules",
    "CNC routing and milling cutting modules",
    "Conveyor-fed continuous cutting systems",
    "Integrated marking, plotting, creasing, kiss-cutting and through-cutting workstations",
    "CAD/CAM nesting and multi-axis motion-control systems",
    "Carbon-fiber, fiberglass and prepreg sample-cutting services",
  ],
  processList: [
    "碳纤维布、玻纤布与预浸料数控刀切",
    "多轴垂直、多角度与铣削切割",
    "自动排版与材料利用率优化",
    "画线、文字标注、压痕和切割集成",
    "传送带连续送料与批量裁片",
    "真空分区吸附与材料固定",
    "客户材料试切、打样与刀具选型",
    "安装、培训、备件与售后支持",
  ],
  processListEn: [
    "CNC knife cutting of carbon fabrics, fiberglass fabrics and prepregs",
    "Multi-axis vertical, angled and routed cutting",
    "Automatic nesting and material-yield optimization",
    "Integrated plotting, text marking, creasing and cutting",
    "Conveyor-fed continuous and batch ply cutting",
    "Zoned vacuum hold-down and material stabilization",
    "Customer-material trials, sampling and tool selection",
    "Installation, training, spares and after-sales support",
  ],
  established: 1995,
  verified: false,
  description:
    "广东瑞洲科技有限公司是位于广东佛山的柔性材料数控切割设备制造商。中国国际复材展以 GUANGDONG RUIZHOU TECHNOLOGY CO., LTD. 收录企业并将其归入切割设备；现行官网显示相同中英文主体、佛山总部与工厂、电话、复材事业部联系方式和多语言入口。复合材料解决方案页公开 RZCRT5-6016EF、RZCRT5-2516EF、RZCRT5-2516E 等机型，以及振动刀、圆刀、气动刀、斜刀、铣刀、传送带、真空吸附、画线/标注/压痕/半刀/全刀和多轴控制功能。展会资料明确列出纸、塑料、碳纤维、玻璃纤维和预浸料切割。瑞洲属于设备与试切服务供应商，本页不把可被机器裁切的碳纤维、玻纤或预浸料当作瑞洲自产材料，也不注入这些材料的供应商搜索词。",
  descriptionEn:
    "Guangdong Ruizhou Technology Co., Ltd. is a flexible-material CNC cutting-equipment manufacturer in Foshan, Guangdong. China Composites Expo lists GUANGDONG RUIZHOU TECHNOLOGY CO., LTD. under cutting machinery. The current official site shows the matching Chinese and English entity, Foshan headquarters and factory, telephone, composite-business contact and multilingual entry points. Its composite solution publishes RZCRT5-6016EF, RZCRT5-2516EF and RZCRT5-2516E machines plus oscillating, rotary, pneumatic, V-cut and routing tools, conveyor feed, vacuum hold-down, plotting, marking, creasing, kiss-cutting, through-cutting and multi-axis control. The expo source names paper, plastic, carbon fiber, fiberglass and prepreg as cut materials. Ruizhou supplies equipment and sample-cutting service. GetFRP does not treat materials that its machines can cut as Ruizhou-manufactured materials and does not assign those material-supplier search phrases to this page.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "瑞洲复材解决方案把画线、绘图、文字标注、压痕、半刀和全刀集成于同一工作站，并提供滚动式传送带、可编程多轴控制、真空分区吸附和多种刀头。官网称设备可用于柔性复材并列出三种 RZCRT5 机型；具体切割能力仍取决于材料、叠层、树脂状态、背纸、幅宽、刀具、吸附与工艺参数。设备 RFQ 应提交实际碳纤维布、玻纤布、干纤维、预浸料、夹芯或其他材料样品和安全信息，定义单层/多层、总厚度、铺层尺寸、最大卷宽/卷重、有效台面、切割长度、孔/槽/锐角、边缘质量、纤维拖拽、毛边、粉尘、背纸保护、套料利用率、节拍和允许返工。刀具选型需分别验证振动刀振幅与频率、圆刀牵引、气动刀供气与多层能力、斜刀角度、铣刀转速/集尘、刀片寿命和换刀安全，不能用官网通用说明替代材料试切。自动化范围要锁定 CAD/CAM 文件格式、DXF 版本、排版算法、条码/标签、MES/ERP 接口、配方权限、用户审计、数据备份、网络安全、传送带拼接、送料纠偏、真空分区和废料收集。要求供应商使用买方代表性材料执行试切和 FAT，记录刀具、速度、加速度、真空、叠层、环境、尺寸和缺陷；SAT 再用现场材料验证精度、重复性、节拍、连续运行、急停、安全感应、断电恢复、噪声和粉尘。官网新闻中的速度或“往返原点零误差”等宣传值缺少完整试验边界，不能直接写入采购验收标准。应索取总图、地基、供电/气/真空/排风、控制 BOM、软件许可、说明书、备份、备件、易损件、维护周期、培训和质保。官网展示多项企业荣誉和证书入口，但本轮未逐项核对当前证书号、范围、发证机构与有效期，认证数组为空。报价要拆分主机、刀头、软件、真空、传送、集尘、安装、培训、打样、包装、运输和海外服务，并确认复材事业部与合同、开票、收款和出口主体。",
  productsServicesSummaryEn:
    "Ruizhou's composite solution integrates plotting, drawing, text marking, creasing, kiss-cutting and through-cutting on one workstation, with conveyor feed, programmable multi-axis control, zoned vacuum hold-down and multiple tools. The official page names three RZCRT5 models for flexible composites, but actual cutting capability depends on material, ply stack, resin condition, backing paper, width, tool, vacuum and parameters. An RFQ should include representative carbon fabric, fiberglass fabric, dry fiber, prepreg, core or other samples and safety data, then define single or multi-ply stack, total thickness, ply envelope, maximum roll width and weight, working area, cut length, holes, slots, sharp corners, edge quality, fiber drag, fuzz, dust, backing protection, nesting yield, takt and allowable rework. Tool selection should separately validate oscillating-knife amplitude and frequency, rotary-knife drag, pneumatic supply and multi-ply performance, V-cut angle, router rpm and extraction, blade life and change safety; generic website descriptions cannot replace a material trial. Automation scope should lock CAD/CAM formats, DXF revision, nesting algorithm, barcode and label, MES or ERP interfaces, recipe permissions, user audit, data backup, cybersecurity, conveyor splice, feed tracking, vacuum zoning and waste collection. Require supplier trials and FAT with the buyer's representative material, recording tool, speed, acceleration, vacuum, stack, environment, dimensions and defects. SAT should repeat on site for accuracy, repeatability, takt, endurance, E-stop and guarding, power-loss recovery, noise and dust. Website marketing values for speed or zero return-to-origin error lack complete test boundaries and should not be copied directly into acceptance criteria. Obtain general arrangement, foundation, electrical, air, vacuum and exhaust requirements, control BOM, software licensing, manuals, backups, spares, consumables, maintenance intervals, training and warranty. The site shows enterprise awards and certificate entries, but current certificate number, scope, issuer and validity were not aligned in this review, so no certification is recorded as verified. Separate machine, tools, software, vacuum, conveyor, extraction, installation, training, trials, packing, transport and overseas service, and confirm that the composite-business contact aligns with the contracting, invoice, payee and export entity.",
  ecatalogs: [
    { title: "瑞洲官方网站", titleEn: "Official Ruizhou Website", description: "企业、产品和联系入口。", descriptionEn: "Official company, product and contact entry.", url: "https://www.ruizhou.com.cn/", format: "Official website" },
    { title: "复合材料切割方案", titleEn: "Composite-Material Cutting Solution", description: "复材机型、刀具、吸附与工艺说明。", descriptionEn: "Official composite models, tools, hold-down and process description.", url: "https://www.ruizhou.com.cn/industry/11.html", format: "Solution page" },
    { title: "瑞洲公司简介", titleEn: "Ruizhou Company Profile", description: "企业历史、基地和设备业务。", descriptionEn: "Official history, facilities and equipment scope.", url: "https://www.ruizhou.com.cn/about/index.html", format: "Company profile" },
    { title: "瑞洲官方联系方式", titleEn: "Official Ruizhou Contact", description: "复材事业部、海外业务、电话与邮箱。", descriptionEn: "Official composites and overseas contacts, telephone and email.", url: "https://www.ruizhou.com.cn/contact/index.html", format: "Contact page" },
    { title: "中国国际复材展 G 字母页", titleEn: "China Composites Expo Exhibitors — G", description: "瑞洲主体、展位与切割设备范围。", descriptionEn: "Organizer source for the Ruizhou entity, booth and cutting scope.", url: "https://www.chinacompositesexpo.com/en/netshow.php?head=G", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/guangdong-ruizhou-technology-logo.png",
  contactEmail: "3d@ruizhou.com.cn",
  contactPhone: "+86 186 6639 0052",
  address: "16F, Ruizhou Technology Building, No. 20 Juyuan South Road, Guicheng Street, Nanhai District, Foshan, Guangdong, China",
  website: "https://www.ruizhou.com.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 25,
  viewCount: 0,
  capabilities: ["CNC composite cutting", "oscillating and rotary knife cutting", "prepreg ply cutting", "CAD and CAM nesting", "conveyor-fed cutting", "vacuum hold-down", "material trial cutting", "installation and overseas support"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
