import type { SupplierListing } from "@/lib/db/schema";

export const ANDAO_MACHINERY_SHANDONG_SUPPLIER_ID =
  "sup-andao-machinery-shandong";
export const ANDAO_MACHINERY_SHANDONG_SUPPLIER_SLUG =
  "andao-machinery-special-fiber-equipment";

// Curated from Andao Machinery Manufacturing (Shandong)'s current official
// company, product and contact pages and its 2026 China Composites Expo entry.
// Official logo downloaded on 2026-08-25 from the current website header:
// https://www.andaojx.cn/uploads/allimg/20230726/1-230H6114511949.png
export const ANDAO_MACHINERY_SHANDONG_SUPPLIER_PROFILE: SupplierListing = {
  id: ANDAO_MACHINERY_SHANDONG_SUPPLIER_ID,
  name: "安道机械制造（山东）有限公司",
  nameEn: "Andao Machinery Manufacturing (Shandong) Co., Ltd.",
  slug: ANDAO_MACHINERY_SHANDONG_SUPPLIER_SLUG,
  location: "山东东营",
  locationEn: "Dongying, Shandong, China",
  province: "山东",
  category: "equipment",
  products: [
    "高性能纤维与特种纤维卷绕机",
    "碳纤维、玻璃纤维及单丝/带材卷绕机",
    "芳纶纺丝成套设备",
    "工业丝纺丝成套设备",
    "电磁感应加热辊、牵伸辊、烘干辊与压延辊",
    "放卷、倒筒及客户特殊定制设备",
  ],
  productsEn: [
    "High-performance and special-fiber winding machines",
    "Carbon-fiber, glass-fiber and monofilament or tape winders",
    "Complete aramid-fiber spinning equipment",
    "Complete industrial-filament spinning equipment",
    "Electromagnetic induction heated, drawing, drying and calendering rollers",
    "Unwinding, rewinding and special custom equipment",
  ],
  processList: [
    "恒张力控制卷绕",
    "精密排线卷绕",
    "芳纶纺丝系统集成",
    "工业丝纺丝线配置",
    "电磁感应辊筒加热",
    "设备设计、制造与定制集成",
  ],
  processListEn: [
    "Constant-tension winding control",
    "Precision traverse winding",
    "Aramid spinning-system integration",
    "Industrial-filament line configuration",
    "Electromagnetic induction roll heating",
    "Equipment design, manufacture and custom integration",
  ],
  established: null,
  verified: false,
  description:
    "安道机械制造（山东）有限公司位于山东东营。官网将公司定位为化纤卷绕机、特种纤维卷绕机、电磁加热辊、工业丝成套设备和芳纶丝成套设备制造商；当前产品目录进一步列出碳纤维卷绕机、玻纤全自动卷绕机、单丝/带卷绕机、放卷与倒筒设备，以及牵伸、烘干、压延等辊筒单元。中国国际复材展 2026 网上展厅列出同一主体，展位号 6T68，产品类别为纤维再加工和处理设备。所有能力和性能陈述均来自企业或展会公开资料，尚未由 GetFRP 进行设备验收或现场审计。",
  descriptionEn:
    "Andao Machinery Manufacturing (Shandong) Co., Ltd. is based in Dongying, Shandong. Its official site presents the company as a manufacturer of chemical-fiber winders, special-fiber winders, electromagnetic heating rollers, complete industrial-filament equipment and complete aramid-filament equipment. The current product directory further lists carbon-fiber winding machines, automatic glass-fiber winders, monofilament or tape winders, unwinding and rewinding units, and drawing, drying and calendering rollers. China Composites Expo lists the same entity at booth 6T68 for 2026 under fiber reprocessing and handling equipment. All capability and performance statements are company- or organizer-published and have not been independently subjected to factory acceptance testing or a site audit by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网把卷绕机分为高性能纤维、碳纤维、单丝/带材和特殊定制等方向，并说明控制路线包括恒张力与精密排线；公开型号示例包括 SW320SG 单头带导盘卷绕机、双头全自动卷绕机、玻纤全自动卷绕机及工字筒卷绕机。芳纶成套设备导航覆盖挤出、纺丝、水洗、烘干、上油与卷绕系统，工业丝成套设备则可按普通强度至高强工业丝目标配置。采购此类设备不能只依据产品名称：RFQ 应明确纤维种类、上游原丝或溶液状态、单丝/丝束/带材规格、目标筒型和成品卷重、线速度、张力范围与精度、排线节距、断丝和接头处理、加热温区、溶剂与腐蚀环境、防爆和安全联锁、控制系统品牌、数据接口、能源介质、占地及环境条件。项目应约定样料试机、设计评审、FAT/SAT、节拍和良率验收、随机备件、易损件清单、软件与图纸交付、培训、远程支持和质保响应。若为芳纶或碳纤维产线，还需确认材料接触件、纤维毛羽与粉尘控制、静电防护、张力闭环和清洁维护方案。官网没有在本轮页面中提供足以核对主体、地址、范围、证书编号和有效期的完整现行证书包，因此不列已核实认证；买方应索取与报价设备及制造场地对应的证书、电气图、关键件清单和同类设备验收记录。",
  productsServicesSummaryEn:
    "The official catalog separates winding equipment for high-performance fibers, carbon fiber, monofilament or tape and special custom duties, and identifies constant-tension control and precision traverse winding as control approaches. Published examples include an SW320SG single-position winder with guide roll, twin-position automatic winders, automatic glass-fiber winders and spool winders. The aramid line navigation covers extrusion, spinning, washing, drying, oiling and winding systems, while complete industrial-filament lines are described as configurable from general-strength to high-strength filament targets. Equipment procurement should not rely on a product family name alone. An RFQ should define fiber chemistry and upstream feed state; monofilament, tow or tape dimensions; package type and finished weight; line speed; tension range and accuracy; traverse pitch; broken-end and splice handling; heating zones; solvent and corrosion conditions; explosion protection and safety interlocks; control-system make; data interfaces; utilities; footprint; and ambient requirements. The project should contract for customer-material trials, design review, factory and site acceptance testing, rate and yield criteria, commissioning spares, wear-part lists, software and drawing deliverables, operator training, remote support and warranty response. Aramid and carbon-fiber lines also require explicit review of material-contact surfaces, fuzz and dust control, static protection, closed-loop tension control, and cleanout or maintenance access. The reviewed pages do not expose a complete current certificate package sufficient to verify the legal entity, manufacturing address, scope, certificate number and validity, so none is recorded as independently verified. Request certificates, electrical drawings, critical-component lists and acceptance references for comparable equipment built at the quoted site.",
  ecatalogs: [
    {
      title: "安道机械官网",
      titleEn: "Official Andao Machinery Website",
      description: "公司主体、产品导航和当前联系方式。",
      descriptionEn: "Official company identity, product navigation and contacts.",
      url: "https://www.andaojx.cn/",
      format: "Official website",
    },
    {
      title: "安道机械公司介绍",
      titleEn: "Andao Machinery Company Profile",
      description: "东营制造主体和主要设备范围。",
      descriptionEn:
        "Official Dongying manufacturer profile and principal equipment scope.",
      url: "https://www.andaojx.cn/about/",
      format: "Company profile",
    },
    {
      title: "安道机械产品中心",
      titleEn: "Andao Machinery Product Center",
      description: "卷绕机、芳纶及工业丝成套设备和辊筒单元。",
      descriptionEn:
        "Official directory for winders, aramid and industrial-filament lines and roller units.",
      url: "https://www.andaojx.cn/pro/",
      format: "Product directory",
    },
    {
      title: "安道机械联系方式",
      titleEn: "Andao Machinery Contact Page",
      description: "东营地址、电话和邮箱。",
      descriptionEn: "Official Dongying address, telephone and email.",
      url: "https://www.andaojx.cn/contact/",
      format: "Official contact",
    },
    {
      title: "中国国际复材展 A 字母展商页",
      titleEn: "China Composites Expo Exhibitors — A",
      description: "安道机械 6T68 展位与纤维处理设备范围。",
      descriptionEn:
        "Organizer entry for Andao Machinery at booth 6T68 and its fiber-handling equipment scope.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=A",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/andao-machinery-shandong-logo.png",
  contactEmail: "Salaa@21cn.com",
  contactPhone: "+86 180 5141 5558",
  address:
    "Chizhou Road, Dongying Economic and Technological Development Zone, Dongying, Shandong, China",
  website: "https://www.andaojx.cn/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "chemical-fiber winding machines",
    "carbon-fiber winders",
    "glass-fiber automatic winders",
    "monofilament and tape winders",
    "aramid spinning lines",
    "industrial-filament lines",
    "electromagnetic induction heated rollers",
    "constant-tension winding control",
    "custom fiber-processing equipment",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
