import type { SupplierListing } from "@/lib/db/schema";

export const CHENGDU_CHANGYUANSHUN_SUPPLIER_ID =
  "sup-chengdu-changyuanshun";
export const CHENGDU_CHANGYUANSHUN_SUPPLIER_SLUG =
  "chengdu-changyuanshun";

// Curated from the exact mainland-China exhibitor's active official websites
// and current China Composites Expo profile. The carbon-fiber, general glass-
// fiber and high-silica sites publish the same Chengdu legal name, address and
// telephone, so they are treated as product-line sites of one supplier rather
// than separate companies. Capacity statements differ among official pages,
// while the public ISO news item does not expose a complete certificate for
// independent validation; neither is converted into a verified GetFRP field.
// Official CYS logo downloaded 2026-08-13 from the current carbon-site header:
// https://cyscarbon.com/upload/XiTongCanShu/logo.png
export const CHENGDU_CHANGYUANSHUN_SUPPLIER_PROFILE: SupplierListing = {
  id: CHENGDU_CHANGYUANSHUN_SUPPLIER_ID,
  name: "成都长远顺实业有限公司",
  nameEn: "Chengdu Chang Yuan Shun Co., Ltd.",
  slug: CHENGDU_CHANGYUANSHUN_SUPPLIER_SLUG,
  location: "四川成都",
  locationEn: "Chengdu, Sichuan, China",
  province: "四川",
  category: "fiber",
  products: [
    "无碱玻璃纤维直接纱、合股纱与短切纱",
    "短切毡、缝编毡、复合毡与 RTM 夹芯毡",
    "方格布与多轴向经编玻纤织物",
    "碳纤维布、多轴向织物与建筑加固布",
    "碳纤维短切纱、磨碎粉与表面毡",
    "单向及织物碳纤维预浸料",
    "高硅氧与石英纤维纱、布、毡、带、绳和套管",
    "耐碱玻纤、芳纶织物与混编增强材料",
  ],
  productsEn: [
    "E-glass direct rovings, assembled rovings and chopped strands",
    "Chopped-strand, stitched, combination and RTM core mats",
    "Woven rovings and multiaxial glass-fiber fabrics",
    "Carbon fabrics, multiaxials and structural-strengthening fabrics",
    "Chopped and milled carbon fiber and carbon surface veils",
    "Unidirectional and fabric carbon-fiber prepregs",
    "High-silica and quartz yarns, fabrics, mats, tapes, ropes and sleeves",
    "Alkali-resistant glass fiber, aramid fabrics and hybrid reinforcements",
  ],
  processList: [
    "玻璃纤维纱与短切纤维生产和供应",
    "玻纤毡、方格布与多轴向织物加工",
    "碳纤维织造、短切、磨碎与表面毡加工",
    "碳纤维单向和织物预浸",
    "高硅氧与石英纤维织造、针刺和编织加工",
    "特种织物预缩及硅胶、PTFE、PU 等涂层后处理",
    "出口贸易与产品技术支持",
  ],
  processListEn: [
    "Glass-fiber roving and chopped-fiber production and supply",
    "Glass mat, woven-roving and multiaxial-fabric processing",
    "Carbon-fiber weaving, chopping, milling and surface-veil processing",
    "Unidirectional and fabric carbon-fiber prepregging",
    "High-silica and quartz weaving, needling and braiding",
    "Preshrinking and silicone, PTFE, PU and other coated finishing",
    "Export trading and product technical support",
  ],
  established: 2002,
  verified: false,
  description:
    "成都长远顺实业有限公司（CYS）是位于四川成都的增强纤维与复合材料供应商。碳纤维、玻璃纤维和高硅氧纤维三个当前官网均使用同一成都公司名称、金石路 81 号地址及联系电话，本页据此合并为一个法律主体。官网称公司成立于 2002 年并拥有自营进出口权，业务覆盖玻纤纱、布、毡和玻璃球，以及碳纤维、芳纶、石英和高硅氧材料。中国国际复材展以 CHENGDU CHANG YUAN SHUN CO., LTD. 收录该主体，发布 2026 年展位 7S26，并列出玻纤纱、玻纤布/带/毡、玻纤织物、碳纤维及织物和芳纶纤维及织物类别。成立年份、制造能力、出口资质及产品信息均为企业或展会发布，尚未由 GetFRP 现场审计。",
  descriptionEn:
    "Chengdu Chang Yuan Shun Co., Ltd. (CYS) is a reinforcement-fiber and composites supplier in Chengdu, Sichuan. Its current carbon-fiber, general fiberglass and high-silica websites use the same Chengdu legal name, No. 81 Jinshi Road address and telephone numbers, so this page consolidates them into one legal-entity profile. The company dates itself to 2002, says it holds self-managed import/export rights, and presents glass rovings, fabrics, mats and marbles alongside carbon, aramid, quartz and high-silica materials. China Composites Expo lists the same entity as CHENGDU CHANG YUAN SHUN CO., LTD., publishes booth 7S26 for 2026 and categorizes its exhibit under glass yarn, glass fabric/tape/mat, glass textiles, carbon fiber and fabrics, and aramid fiber and fabrics. Founding date, manufacturing capability, export status and product statements are company- or organizer-published and have not been independently site-audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网产品体系横跨三条相关产品线：169chem 目录包括无碱直接纱、合股纱、喷射/SMC/缠绕/拉挤纱、短切纱、短切毡、缝编及夹芯复合毡、方格布、多轴向织物、耐碱玻纤、碳纤维布、芳纶、石英和部分玻璃钢制品；cyscarbon 补充碳纤维建筑加固布、多轴向碳布、短切纱、磨碎粉、表面毡以及单向和织物预浸料；gosilicafiber 列出高硅氧/石英纱线、短切、布、过滤网、针刺毡、带、绳、套管和隔热防火制品，并提供预缩或硅胶、PTFE、PU、丙烯酸、蛭石、石墨等涂层选择。官网不同页面曾发布不一致的玻纤产能数字，因此本页不设规模等级，买方应要求按具体产品、生产地点和年份提供经核验的产能、设备与排产记录。增强材料 RFQ 应明确纤维种类和牌号、tex/丝束、浸润剂与树脂相容性、面密度、铺向和层间结构、幅宽/卷长、短切长度、含水率/可燃物含量、拉伸指标、渗透或浸润要求、接头和外观缺陷、包装、CoA 和批次追溯；预浸料还应约定树脂体系、树脂含量、挥发分、面密度、凝胶/固化条件、冷藏温度、出冷库寿命和剩余保质期；高硅氧与涂层制品需定义 SiO₂ 含量、厚度/克重、长期和瞬时温度的测试方法、涂层成分与增重、耐折/脱层和阻燃性能。官网新闻称 2026 年完成 ISO 管理体系换证并发布证书日期，但公开页面未提供可核对公司名称、范围、证书号和认证机构状态的完整证书；本页不将其列为已核实认证。官网也发布过玻纤两用物项参数检测信息，但单次检测不能代替出口分类或许可判断；涉及高性能玻纤、碳纤维/预浸料、军工或敏感最终用途时，应由交易双方依据当前中国出口管制、目的国制裁及最终用户规则逐项审查。报价、合同、发票、收款、原产地、制造工厂和质量责任应统一到同一明确主体，避免把三个产品线域名误当作三个供应商。",
  productsServicesSummaryEn:
    "The official range spans three related product lines. The 169chem catalog includes E-glass direct and assembled rovings, spray-up/SMC/filament-winding/pultrusion rovings, chopped strands, chopped, stitched and core-combination mats, woven rovings, multiaxials, alkali-resistant glass, carbon fabrics, aramid, quartz and selected FRP products. Cyscarbon adds structural-strengthening and multiaxial carbon fabrics, chopped and milled carbon fiber, surface veils, and unidirectional or fabric prepregs. Gosilicafiber lists high-silica and quartz yarn, chopped fiber, fabric, filter mesh, needle mat, tape, rope, sleeving and thermal/fire-protection fabrications, with preshrunk or silicone, PTFE, PU, acrylic, vermiculite, graphite and other finishes. Official pages have published inconsistent fiberglass-capacity figures, so no scale tier is assigned; buyers should request product-, plant- and year-specific capacity, equipment and loading evidence. A reinforcement RFQ should define fiber type and grade, tex or tow, sizing and resin compatibility, areal weight, orientation and layer construction, width and roll length, chop length, moisture and loss on ignition, tensile criteria, permeability or wet-out needs, splices and cosmetic limits, packing, CoA and batch traceability. For prepreg, add resin system and content, volatiles, areal weight, gel/cure conditions, cold-storage temperature, out-life and remaining shelf life. High-silica and coated goods need SiO2 content, thickness or mass, test methods for continuous and excursion temperature, finish chemistry and add-on, flex/delamination and flame criteria. A 2026 company news item says its ISO management system was renewed and gives certificate dates, but the public page does not expose a complete certificate sufficient to validate legal name, scope, number and certification-body status; no certification is recorded as verified here. The company has also published a glass-fiber dual-use-parameter test, but one test does not determine export classification or licensing. High-performance glass, carbon fiber or prepreg, military and sensitive end uses require transaction-specific review under current Chinese export-control, destination-sanctions and end-user rules. Quotation, contract, invoice, beneficiary, origin, manufacturing plant and quality responsibility should identify one consistent entity rather than treating the three product-line domains as separate suppliers.",
  ecatalogs: [
    {
      title: "长远顺官方企业简介",
      titleEn: "Official CYS Company Profile",
      description: "公司主体、业务部门、产品范围和进出口业务自述。",
      descriptionEn:
        "Official legal identity, business units, product scope and import/export statement.",
      url: "https://169chem.net/ch/about/1.html",
      format: "Company profile",
    },
    {
      title: "长远顺玻纤与复材产品目录",
      titleEn: "CYS Fiberglass and Composite Product Directory",
      description: "玻纤纱、毡、织物、耐碱玻纤、碳纤维、芳纶、石英和玻璃钢产品入口。",
      descriptionEn:
        "Official directory for glass rovings, mats and fabrics, AR glass, carbon, aramid, quartz and FRP products.",
      url: "https://169chem.net/ch/ProductClass.html",
      format: "Product directory",
    },
    {
      title: "CYS 碳纤维产品目录",
      titleEn: "CYS Carbon-Fiber Product Directory",
      description: "碳纤维布、多轴向织物、短切/磨碎纤维、表面毡和预浸料。",
      descriptionEn:
        "Official carbon fabrics, multiaxials, chopped and milled fiber, veil and prepreg range.",
      url: "https://cyscarbon.com/ProductClass.html",
      format: "Product directory",
    },
    {
      title: "CYS 高硅氧与石英产品目录",
      titleEn: "CYS High-Silica and Quartz Product Directory",
      description: "高硅氧及石英纱、布、毡、带、绳、套管和热防护制品。",
      descriptionEn:
        "Official high-silica and quartz yarn, fabric, mat, tape, rope, sleeve and thermal-protection range.",
      url: "https://www.gosilicafiber.com/Products/",
      format: "Product directory",
    },
    {
      title: "中国国际复材展长远顺展商页",
      titleEn: "China Composites Expo CYS Profile",
      description: "展会发布的中英文主体、7S26 展位、业务说明和展品类别。",
      descriptionEn:
        "Organizer-published bilingual identity, booth 7S26, business description and exhibit categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-824-91118520.html",
      format: "Exhibitor profile",
    },
    {
      title: "长远顺官方联系方式",
      titleEn: "Official CYS Contact Page",
      description: "成都地址、电话、传真及 169chem 企业邮箱。",
      descriptionEn:
        "Official Chengdu addresses, telephone, fax and 169chem company email addresses.",
      url: "https://169chem.net/ch/about/3.html",
      format: "Contact page",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/chengdu-changyuanshun-logo.png",
  contactEmail: "info@169chem.net",
  contactPhone: "+86 28 8440 0953",
  address:
    "Torch Power Port, No. 81 Jinshi Road, Jinjiang District, Chengdu, Sichuan, China",
  website: "https://169chem.net/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "E-glass rovings and chopped strands",
    "glass-fiber mats and woven rovings",
    "multiaxial glass-fiber fabrics",
    "alkali-resistant glass fiber",
    "carbon-fiber fabrics and multiaxials",
    "chopped and milled carbon fiber",
    "carbon-fiber surface veils",
    "carbon-fiber prepregs",
    "high-silica and quartz textiles",
    "high-temperature coated fabrics",
    "aramid and hybrid reinforcements",
    "export trading and technical support",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
