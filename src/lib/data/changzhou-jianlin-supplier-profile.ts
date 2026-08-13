import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_JIANLIN_SUPPLIER_ID =
  "sup-changzhou-jianlin-glass-fiber";
export const CHANGZHOU_JIANLIN_SUPPLIER_SLUG =
  "changzhou-jianlin-glass-fiber";

// Curated from the exact legal entity's active official website, its current
// China Composites Expo records and a People's Daily report. The official site
// is currently available over HTTP, carries MIIT filing 苏ICP备2023036594-1 and
// identifies the company, address and contacts, but its HTTPS certificate has
// a common-name mismatch as reviewed on 2026-08-13. The ISO certificate image
// displayed by the company was issued in 2023 and lists a 2024 surveillance or
// renewal date plus re-certification before 2026, so it is recorded as
// historical evidence rather than a current certification. Product,
// partnership and application statements remain company- or organizer-
// published and have not been independently verified by GetFRP. Official logo
// downloaded 2026-08-13 from the current website header:
// http://img.iapply.cn/cf2d523ea2a272aaf584458f74df0f9f
export const CHANGZHOU_JIANLIN_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_JIANLIN_SUPPLIER_ID,
  name: "常州市建林玻纤有限公司",
  nameEn: "Changzhou Jianlin Glass Fiber Co., Ltd.",
  slug: CHANGZHOU_JIANLIN_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "玻璃纤维单向经编织物",
    "双轴向、三轴向与四轴向经编织物",
    "碳纤维布与碳玻混编布",
    "芳纶与玄武岩纤维经编增强材料",
    "缝编毡与复合毡",
    "夹心毡与短切产品",
    "EWR200、EWR400、EWR600 方格布",
    "体育用品用复材增强织物",
  ],
  productsEn: [
    "Unidirectional warp-knitted glass-fiber fabrics",
    "Biaxial, triaxial and quadriaxial fabrics",
    "Carbon-fiber and carbon/glass hybrid fabrics",
    "Aramid- and basalt-fiber warp-knitted reinforcements",
    "Stitched and combination mats",
    "Core mats and chopped-fiber products",
    "EWR200, EWR400 and EWR600 woven rovings",
    "Composite reinforcements for sporting goods",
  ],
  processList: [
    "高性能纤维多轴向经编",
    "单向与多轴向增强结构制造",
    "玻纤、碳纤、芳纶与玄武岩纤维织物加工",
    "碳玻混编织物制造",
    "缝编毡、复合毡与夹心毡加工",
    "玻纤方格布织造",
  ],
  processListEn: [
    "High-performance-fiber multiaxial warp knitting",
    "Unidirectional and multiaxial reinforcement construction",
    "Glass-, carbon-, aramid- and basalt-fiber fabric conversion",
    "Carbon/glass hybrid-fabric manufacturing",
    "Stitched, combination- and core-mat processing",
    "Woven-roving production",
  ],
  established: 2014,
  verified: false,
  description:
    "常州市建林玻纤有限公司是位于江苏常州新北区的高性能纤维多轴向增强材料制造企业。官网称公司成立于 2014 年，围绕玻璃纤维、碳纤维、芳纶和玄武岩纤维生产单向及多轴向经编织物、毡类和方格布，应用覆盖风电叶片、船艇、轨道交通、光固化管道、新型建材、航空航天和体育用品。中国国际复材展当前名录以 CHANGZHOU JIANLIN GLASS FIBER CO., LTD. 收录该常州法人；官网英文联系页与该名称一致，因此本页按同一主体去重。",
  descriptionEn:
    "Changzhou Jianlin Glass Fiber Co., Ltd. is a high-performance multiaxial reinforcement manufacturer in Xinbei District, Changzhou, Jiangsu. Its official website dates the company to 2014 and presents unidirectional and multiaxial fabrics, mats and woven rovings based on glass, carbon, aramid and basalt fibers for wind blades, boats, rail transport, UV-cured pipelines, building materials, aerospace and sporting goods. The current China Composites Expo directory lists the same Changzhou legal entity as CHANGZHOU JIANLIN GLASS FIBER CO., LTD., matching the English name on the official contact page, so this profile keeps one deduplicated supplier identity.",
  certifications: [
    "官网展示一张 GB/T 19001-2016 / ISO 9001:2015 质量管理体系证书，范围为玻璃纤维加工与坯布销售；证书签发于 2023 年 7 月 28 日，页面所示年审/续证日期为 2024 年 7 月 15 日前、再认证日期为 2026 年 7 月 27 日前。该日期截至本页复核时均已届满，不能据此视为现行认证；采购方应向认证机构核验最新证书、监督审核、范围与状态",
    "官网另展示多项商业信用类证书；这些不等同于产品认证、实验室认可或客户批准，采购时应分别核验签发机构、用途与有效期",
  ],
  certificationsEn: [
    "The official site displays a GB/T 19001-2016 / ISO 9001:2015 quality-management certificate covering glass-fiber processing and grey-fabric sales. It was issued on 28 July 2023 and shows surveillance or renewal before 15 July 2024 and re-certification before 27 July 2026. Those dates had passed at this profile review, so the image is not treated as evidence of current certification. Buyers should verify the latest certificate, surveillance audit, scope and status with the certification body",
    "The site also displays commercial credit certificates. These are not substitutes for product certification, laboratory accreditation or customer approval; buyers should validate their issuer, purpose and validity separately",
  ],
  productsServicesSummary:
    "官网目录列出单向、双轴向和多轴向经编织物，复合毡、夹心毡、方格布与体育用品相关产品，并展示 0°/90° 单轴织物、90° 织物加短切毡、G4-LBX 与 G4-LT 系列以及 EWR200/400/600 等示例牌号；CCE 展商资料进一步列出三轴、四轴、纯碳纤维布、碳玻混编布和缝编毡。官网称其原料合作方包括重庆国际复材、泰山玻纤、中国巨石和欧文斯科宁，但这些属于企业自述的供应关系，不代表相关原料商对成品或质量体系背书。人民日报 2022 年报道曾现场记录公司经编机生产风电叶片用玻纤织物，可作为历史生产场景的交叉证据，但不能替代当前产能和设备审计。织物 RFQ 应明确纤维厂家与牌号、玻璃类型、tex/丝束、浸润剂与树脂相容性、面密度、0°/±45°/90° 等铺向及各层比例、缝编纱、毡层和芯材、幅宽、卷长、厚度与压实、渗透性、接头、毛边、褶皱和外观缺陷限值，以及含水率、可燃物含量、拉伸性能、批次 CoA 和追溯。还应约定样品/首件、检验方法、卷装和防潮、MOQ、交期、产能分配、变更管理与不合格处置。风电、轨交、管道和航空项目需取得项目专属材料批准、阻燃烟毒或耐久数据，不能用展会用途描述代替资格认可。官网目前仅 HTTP 可正常访问，HTTPS 证书域名不匹配；采购方不应通过未加密页面提交账号、合同或付款资料，并应通过独立渠道复核联系人、收款主体与银行账户。",
  productsServicesSummaryEn:
    "The official catalog lists unidirectional, biaxial and multiaxial warp-knitted fabrics, combination mats, core mats, woven rovings and sporting-goods-related products. Example entries include 0°/90° uniaxial fabric, 90° fabric with chopped-strand mat, G4-LBX and G4-LT grades, and EWR200/400/600. The CCE exhibitor material additionally lists triaxial and quadriaxial fabrics, pure carbon fabric, carbon/glass hybrids and stitched mats. The company names Chongqing Polycomp, Taishan Fiberglass, China Jushi and Owens Corning as raw-material partners, but these are supplier-published relationships and do not mean that the named fiber producers endorse Jianlin's finished products or quality system. A 2022 People's Daily report observed a warp-knitting machine producing glass fabric for wind blades, providing dated cross-evidence of a production scene rather than a current capacity or equipment audit. A fabric RFQ should define fiber maker and grade, glass type, tex or tow, sizing and resin compatibility, areal weight, 0°/±45°/90° orientation and layer share, stitching yarn, mat layer and core, width, roll length, thickness and compaction, permeability, splices, fraying, wrinkles and cosmetic-defect limits, plus moisture, loss on ignition, tensile properties, batch CoA and traceability. It should also set sample or first-article approval, inspection method, roll and moisture-protective packing, MOQ, lead time, allocated capacity, change control and nonconformance handling. Wind, railway, pipeline and aerospace programs require project-specific material approval and applicable fire-smoke-toxicity or durability evidence; an expo application statement is not qualification. The official site currently works over HTTP while its HTTPS certificate has a domain-name mismatch. Buyers should not submit credentials, contracts or payment documents through the unencrypted site and should independently reconfirm contacts, contracting entity and bank account.",
  ecatalogs: [
    {
      title: "建林玻纤官方公司简介",
      titleEn: "Official Jianlin Glass Fiber Company Profile",
      description:
        "成立年份、材料体系、产品类别、应用范围和原料合作关系自述。",
      descriptionEn:
        "Official founding year, fiber systems, product categories, applications and raw-material relationship statements.",
      url: "http://www.czjianlin.com/page/373783.html",
      format: "Company profile",
    },
    {
      title: "建林玻纤官方产品目录",
      titleEn: "Official Jianlin Glass Fiber Product Directory",
      description:
        "单向/多轴向织物、毡类、方格布和示例产品牌号。",
      descriptionEn:
        "Official unidirectional and multiaxial fabrics, mats, woven rovings and example grade entries.",
      url: "http://www.czjianlin.com/product/373791.html",
      format: "Product directory",
    },
    {
      title: "官网历史质量体系证书",
      titleEn: "Official Historical Quality-System Certificate",
      description:
        "官网展示的 ISO 9001:2015 证书图片；所示年审与再认证日期已届满，需重新核验。",
      descriptionEn:
        "Company-displayed ISO 9001:2015 certificate image; the shown surveillance and re-certification dates have passed and require revalidation.",
      url: "http://www.czjianlin.com/imgs_detail/325359.html",
      format: "Historical certificate",
    },
    {
      title: "建林玻纤官方联系页面",
      titleEn: "Official Jianlin Glass Fiber Contact Page",
      description: "中英文公司名、常州地址、电话、邮箱和官网域名。",
      descriptionEn:
        "Official Chinese and English names, Changzhou address, telephone, email and website domain.",
      url: "http://www.czjianlin.com/page/373801.html",
      format: "Contact page",
    },
    {
      title: "中国国际复材展展商资料",
      titleEn: "China Composites Expo Exhibitor Record",
      description:
        "展会发布的 7H36 展位、英文名称和高性能纤维多轴向经编增强材料类别。",
      descriptionEn:
        "Organizer-published booth 7H36, English name and high-performance multiaxial reinforcement category.",
      url: "https://www.chinacompositesexpo.com/cn/news.php?c_id=252",
      format: "Exhibitor directory",
    },
    {
      title: "人民日报建林玻纤生产报道",
      titleEn: "People's Daily Jianlin Production Report",
      description:
        "2022 年现场报道记录经编设备、风电叶片用织物及当时的小微企业经营背景。",
      descriptionEn:
        "A 2022 on-site report covering warp-knitting equipment, wind-blade fabric and the company's then-current small-enterprise context.",
      url: "https://www.peopleapp.com/column/30035585131-500000622762",
      format: "News report",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-jianlin-logo.png",
  contactEmail: "53078375@qq.com",
  contactPhone: "+86 139 5121 8080",
  address:
    "No. 696 Huanghe West Road, Tangzhuang Village, Luoxi Town, Xinbei District, Changzhou, Jiangsu, China",
  website: "http://www.czjianlin.com/",
  enterpriseId: null,
  scaleTier: "S",
  brandPriority: 5,
  viewCount: 0,
  capabilities: [
    "glass-fiber multiaxial fabrics",
    "unidirectional glass-fiber fabrics",
    "biaxial fabrics",
    "triaxial fabrics",
    "quadriaxial fabrics",
    "carbon-fiber fabrics",
    "carbon/glass hybrid fabrics",
    "aramid-fiber reinforcements",
    "basalt-fiber reinforcements",
    "stitched and combination mats",
    "core mats",
    "woven rovings",
    "wind-blade reinforcement fabrics",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
