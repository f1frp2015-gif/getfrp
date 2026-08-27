import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_NEWTECH_SMART_SUPPLIER_ID =
  "sup-changzhou-newtech-smart-industry";
export const CHANGZHOU_NEWTECH_SMART_SUPPLIER_SLUG =
  "changzhou-newtech-smart-industry";

// Curated from the exact mainland-China company's dedicated pages and carbon-
// fiber-line brochure on its parent Newtech Group's current official website,
// together with its standalone China Composites Expo record. Newtech Smart is
// a separate legal supplier from Newtech Group, so this equipment-led profile
// complements rather than duplicates the group's material-supply profile.
// Capacity, performance, patent, award and project claims remain company- or
// organizer-published and have not been independently verified by GetFRP.
// Reviewed 2026-08-26: the dedicated company page uses the complete parent
// Newtech Group header wordmark and provides no standalone Newtech Smart logo.
// The card uses the exact official page identity downloaded from
// https://en.newtechgroupcn.com/uploadfiles/211.149.255.8/webid1830/logo/202304/64360df19d215.png;
// it must not be interpreted as a separately registered subsidiary mark.
export const CHANGZHOU_NEWTECH_SMART_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_NEWTECH_SMART_SUPPLIER_ID,
  name: "常州市新创智能科技有限公司",
  nameEn: "Newtech Smart Industry Co., Ltd.",
  slug: CHANGZHOU_NEWTECH_SMART_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "PAN 原丝生产线及工艺技术包",
    "1K–50K 碳纤维碳化生产线及交钥匙工程",
    "预氧炉、低温/高温碳化炉与后处理设备",
    "纤维放丝、牵伸、上浆、干燥与收卷设备",
    "碳纤维表观质量在线智能检测系统",
    "玻纤与碳纤维多轴向经编装备",
    "风电叶片预成型体柔性生产线",
    "碳纤维、玻璃纤维与混杂纤维拉挤装备及制品",
    "复材结构、铺层、连接、模具与仿真设计",
  ],
  productsEn: [
    "PAN-precursor production lines and process packages",
    "1K–50K carbonization lines and turnkey carbon-fiber projects",
    "Oxidation, low-/high-temperature carbonization and post-treatment equipment",
    "Fiber creel, drawing, sizing, drying and winding equipment",
    "Online carbon-fiber surface-quality inspection systems",
    "Glass- and carbon-fiber multiaxial warp-knitting equipment",
    "Flexible wind-blade preform production lines",
    "Carbon-, glass- and hybrid-fiber pultrusion equipment and products",
    "Composite structure, layup, joint, tooling and simulation design",
  ],
  processList: [
    "原丝与碳化线规划、工艺及工程设计",
    "专用设备设计、制造、安装与调试",
    "碳纤维生产线控制、检测与自动化集成",
    "玻纤和碳纤多轴向织造装备研发",
    "拉挤工艺、模具和生产线开发",
    "复材结构、铺层、连接及仿真分析",
    "FAT/SAT、培训、维保与备件服务",
  ],
  processListEn: [
    "Precursor- and carbonization-line planning, process and engineering design",
    "Special-purpose equipment design, manufacture, installation and commissioning",
    "Carbon-fiber-line controls, inspection and automation integration",
    "Glass- and carbon-fiber multiaxial textile-equipment development",
    "Pultrusion process, tooling and production-line development",
    "Composite structure, layup, joint and simulation analysis",
    "FAT/SAT, training, maintenance and spare-parts support",
  ],
  established: 2013,
  verified: false,
  description:
    "常州市新创智能科技有限公司（Newtech Smart Industry）是位于江苏常州的复合材料智能装备与工程企业，也是新创碳谷集团旗下独立法人。集团官网专页称公司成立于 2013 年，历史可追溯至常州市第八纺织机械有限公司，重点开发复材产业链自动化生产装备，范围覆盖上游 PAN 原丝与碳化线、中游织造和拉挤装备，以及下游复材成型装备和设计研发。企业官方碳纤维生产线资料进一步发布原丝、碳化、控制、在线检测和交钥匙工艺包能力。中国国际复材展以同一中英文主体将其列入纤维生产、纤维再加工、复材最终制品生产、模具和研发设计类别，2026 年展位为 7F28。GetFRP 已另有“新创碳谷集团有限公司”材料供应主页；本页对应新创智能法人及其装备/工程采购范围，二者并存而不合并。企业所述产线速度、产能、能耗、专利、项目和设备性能均需在具体技术协议及验收工况中复核。",
  descriptionEn:
    "Newtech Smart Industry Co., Ltd. is a composite intelligent-equipment and engineering business in Changzhou, Jiangsu and a distinct legal entity within Newtech Group. Its dedicated official profile dates the company to 2013, traces its history to Changzhou No. 8 Textile Machinery Co., Ltd., and describes automated equipment across the composite value chain: upstream PAN-precursor and carbonization lines, intermediate weaving and pultrusion equipment, and downstream composite molding plus design R&D. Its official carbon-fiber-line brochure adds precursor, carbonization, controls, online inspection and turnkey process-package capabilities. China Composites Expo lists the same Chinese and English supplier under fiber production, fiber reprocessing, finished-composite production, tooling and R&D/design, with booth 7F28 for 2026. GetFRP separately publishes a materials-led profile for Newtech Group Co., Ltd.; this page represents the Newtech Smart legal entity and its equipment or engineering procurement scope, so the two remain separate rather than merged. Published line speed, capacity, energy, patent, project and equipment-performance claims require validation in the project-specific technical agreement and acceptance conditions.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "新创智能官方碳纤维线资料提出从项目前期规划、原丝/碳化线设计制造、设备供货安装调试到技术培训的全生命周期交付。原丝线公开采用 DMSO 溶剂聚合，可选干喷湿法或湿法纺丝，并列出聚合、纺丝、溶剂回收、公用工程和收卷；碳化线覆盖纱架、氧化炉、低温/高温碳化炉、表面处理、水洗、上浆、干燥、驱动、收卷、焚烧、余热回收、控制和自动包装。资料还发布阻燃抑爆、碳纤维表观质量在线检测、余热与溶剂回收、工艺废水回用等方案。这些“首创”、速度、幅宽、单线产量、能耗和连续运行时间为企业自述，不能脱离原料、丝束、产品等级、产能口径、当地能源/环保条件和验收稳定运行期比较。设备事业部官网还展示玻纤/碳纤多轴向经编主机和风电叶片预成型柔性线；设计中心覆盖结构、铺层、连接、模具与仿真；拉挤事业部发布碳板、玻纤板及楔形/三角形异型件。整线 RFQ 应给出原料与目标纤维规格、K 数、产能及合格率口径、线速和有效幅宽、热工曲线、张力范围与精度、氧含量/炉压/气流均匀性、表面处理和上浆、排放与溶剂回收、能耗边界、公用工程、控制架构、MES/数据接口、网络安全、防爆防火、目的国机械/电气/压力/环保合规，以及厂房接口和备件。合同应把设计边界、工艺包授权、知识产权与保密、长周期件、分包商、FAT/SAT 样品和运行时长、性能保证、延期/未达标责任、安装签证、培训语言、远程支持、质保和生命周期服务写入可验收条款。拉挤制品或复材设计采购则应另行明确纤维/树脂、截面和公差、铺层、力学与耐久、NDT、首件及批次追溯。官网用集团站承载子公司资料，并发布集团或事业部联系方式；询价、合同、开票、收款、出口和质保前应书面确认由常州市新创智能科技有限公司还是另一集团法人承担各项责任。",
  productsServicesSummaryEn:
    "Newtech Smart's official carbon-fiber-line brochure presents life-cycle delivery from front-end project planning through precursor/carbonization-line engineering and manufacture, equipment installation and commissioning, and technical training. The published precursor-line concept uses DMSO solution polymerization, offers dry-jet wet or wet spinning, and covers polymerization, spinning, solvent recovery, utilities and winding. The carbonization scope includes creels, oxidation, low- and high-temperature furnaces, surface treatment, washing, sizing, drying, drives, winding, incineration, heat recovery, controls and automated packing. The literature also presents flame/explosion suppression, online carbon-fiber surface-quality inspection, heat and solvent recovery, and process-water reuse. Claims concerning first-of-kind features, speeds, widths, single-line output, energy and continuous runtime are supplier-published and cannot be compared without matching precursor, tow, product grade, capacity definition, local utility/environmental conditions and the stable acceptance run. The official equipment page also shows glass- and carbon-fiber multiaxial warp-knitting machines and a flexible wind-blade preform line; the design center covers structures, layups, joints, tooling and simulation; and the pultrusion division publishes carbon planks, glass planks and wedge or triangular profiles. A line RFQ should define feedstock and target fiber, tow count, capacity and yield basis, speed and effective width, thermal profile, tension range and accuracy, oxygen/furnace-pressure/airflow uniformity, surface treatment and sizing, emissions and solvent recovery, energy boundary, utilities, control architecture, MES/data interfaces, cybersecurity, explosion/fire protection, destination machinery/electrical/pressure/environmental compliance, building interfaces and spares. Contract acceptance should cover design limits, process-package licence, IP and confidentiality, long-lead items, subcontractors, FAT/SAT samples and duration, performance guarantees, delay or shortfall remedies, installation sign-off, training language, remote support, warranty and life-cycle service. Pultruded-product or composite-design sourcing needs a separate definition of fiber/resin, section and tolerances, layup, mechanical and durability requirements, NDT, first article and batch traceability. Because the subsidiary material is hosted on the group website and group or business-unit contacts are published, confirm in writing which legal entity bears quotation, contract, invoice, payment, export and warranty obligations.",
  ecatalogs: [
    {
      title: "新创智能官方公司专页",
      titleEn: "Official Newtech Smart Company Profile",
      description: "独立法人名称、2013 年成立信息及上中下游复材装备范围。",
      descriptionEn:
        "Official legal identity, 2013 establishment and upstream-to-downstream composite-equipment scope.",
      url: "https://www.newtechgroupcn.com/othercate/othername/xczn.html",
      format: "Subsidiary profile",
    },
    {
      title: "新创智能碳纤维生产线资料",
      titleEn: "Official Newtech Smart Carbon-Fiber-Line Brochure",
      description: "PAN 原丝、碳化线、工艺包、在线检测、节能环保和服务资料。",
      descriptionEn:
        "Official PAN-precursor, carbonization-line, process-package, online-inspection, utility and service brochure.",
      url: "https://www.newtechgroupcn.com/uploadfiles/211.149.255.8/webid1800/uploadfile/202504/751744269143431.pdf",
      format: "PDF brochure",
    },
    {
      title: "新创智能装备事业部",
      titleEn: "Newtech Smart Equipment Division",
      description: "多轴向经编主机、风电叶片预成型柔性线及装备研发介绍。",
      descriptionEn:
        "Official multiaxial warp-knitting, wind-blade preform-line and equipment-R&D overview.",
      url: "https://en.newtechgroupcn.com/othercate/othername/Equipment-Business-Division1.html",
      format: "Capability page",
    },
    {
      title: "新创智能复材设计研发中心",
      titleEn: "Newtech Smart Composite Design R&D Center",
      description: "结构、铺层、连接、工艺、模具和仿真设计能力。",
      descriptionEn:
        "Official structural, layup, joint, process, tooling and simulation-design scope.",
      url: "https://en.newtechgroupcn.com/othercate/othername/Composite-Design-RD-Center.html",
      format: "Design capability",
    },
    {
      title: "新创智能拉挤事业部",
      titleEn: "Newtech Smart Pultrusion Division",
      description: "碳纤、玻纤和混杂纤维拉挤板及异型件范围。",
      descriptionEn:
        "Official carbon-, glass- and hybrid-fiber pultruded plank and profile range.",
      url: "https://en.newtechgroupcn.com/othercate/othername/Pultrusion-Division.html",
      format: "Capability page",
    },
    {
      title: "中国国际复材展新创智能展商页",
      titleEn: "China Composites Expo Newtech Smart Profile",
      description: "展会发布的独立中英文主体、7F28 展位和设备/设计类别。",
      descriptionEn:
        "Organizer-published legal identity, booth 7F28 and equipment or design categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-4155-2255222.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-26T00:00:00.000Z"),
  logo: "/supplier-assets/newtech-group-logo-light.png",
  contactEmail: "info@newtryglobal.com",
  contactPhone: "+86 519 8565 1859",
  address:
    "No. 329 Huanghai Road, Xinbei District, Changzhou, Jiangsu, China",
  website:
    "https://en.newtechgroupcn.com/othercate/othername/xczn.html",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 20,
  viewCount: 0,
  capabilities: [
    "PAN precursor production lines",
    "carbon-fiber carbonization lines",
    "carbon-fiber process packages",
    "turnkey carbon-fiber projects",
    "oxidation and carbonization furnaces",
    "fiber surface treatment and sizing equipment",
    "online carbon-fiber quality inspection",
    "multiaxial warp-knitting equipment",
    "wind-blade preform production lines",
    "pultrusion equipment and products",
    "composite structure and layup design",
    "tooling and simulation design",
    "equipment installation and commissioning",
    "FAT, SAT, training and maintenance",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-26T00:00:00.000Z"),
};
