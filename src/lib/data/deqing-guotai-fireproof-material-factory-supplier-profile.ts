import type { SupplierListing } from "@/lib/db/schema";

export const DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_ID =
  "sup-deqing-guotai-fireproof-material-factory";
export const DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_SLUG =
  "deqing-guotai-fireproof-material-factory";

// Curated from the factory's current Chinese and English official website and
// China Composites Expo's Net Show. The official site, domain email, Deqing
// contact address and exhibitor name resolve to 德清国泰耐火保温材料厂, so the
// Chinese name, English exhibitor identity and guotaixf.com are deduplicated as
// one mainland-China supplier. Product, temperature, site-size, process and
// export statements remain company-published claims. The official honor pages
// expose a 2012 test file and a product-specific CE attestation for a descent
// control/rescue device; the attestation states a 2015 expiry date and does not
// establish current company-wide or fireproof-textile certification. No current
// certification is therefore recorded. Official header logo downloaded on
// 2026-08-13 from:
// http://www.guotaixf.com/template/gtxf/styles/images/logo.png
export const DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_PROFILE: SupplierListing = {
  id: DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_ID,
  name: "德清国泰耐火保温材料厂",
  nameEn: "Deqing Guotai Fireproof Material Factory",
  slug: DEQING_GUOTAI_FIREPROOF_MATERIAL_FACTORY_SUPPLIER_SLUG,
  location: "浙江湖州德清",
  locationEn: "Deqing, Huzhou, Zhejiang, China",
  province: "浙江",
  category: "fiber",
  products: [
    "玻璃纤维防火布、带、绳和套管",
    "硅橡胶涂层玻璃纤维布",
    "铝箔复合玻璃纤维布",
    "高硅氧玻璃纤维防火布",
    "玄武岩纤维防火布",
    "陶瓷纤维布、毯、板和纸",
    "膨胀型防火密封与耐高温封堵材料",
    "可拆卸保温套及缝制安全防护制品",
    "芳纶和碳纤维耐热纺织品（企业目录）",
  ],
  productsEn: [
    "Fiberglass fireproof fabric, tape, rope and sleeving",
    "Silicone-coated fiberglass fabric",
    "Aluminium-foil laminated fiberglass fabric",
    "High-silica fiberglass fireproof fabrics",
    "Basalt-fiber fireproof fabrics",
    "Ceramic-fiber fabric, blanket, board and paper",
    "Intumescent fire sealing and high-temperature plugging materials",
    "Detachable insulation jackets and sewn safety-protection products",
    "Aramid- and carbon-fiber thermal textiles (company catalog)",
  ],
  processList: [
    "耐高温纺织物及窄幅带加工（企业声明）",
    "玻纤涂层与铝箔复合（企业目录）",
    "耐高温绳、线和套管编织转换（企业声明）",
    "防火毯、保温套和安全防护制品裁剪缝制（企业声明）",
    "耐火棉毯、板、纸及异型件转换（企业声明）",
    "按工况组合设计防火隔热方案（企业声明）",
  ],
  processListEn: [
    "High-temperature textile and narrow-tape conversion (company claim)",
    "Fiberglass coating and aluminium-foil lamination (company catalog)",
    "Braided high-temperature rope, line and sleeving conversion (company claim)",
    "Cutting and sewing of fire blankets, insulation jackets and protective products (company claim)",
    "Conversion of refractory blankets, boards, papers and shaped parts (company claim)",
    "Application-specific fire and thermal-insulation combinations (company claim)",
  ],
  established: 1997,
  verified: false,
  description:
    "德清国泰耐火保温材料厂是位于中国大陆浙江省湖州市德清县的防火与高温隔热材料供应商，中国国际复材展以 DEQING GUOTAI FIREPROOF MATERIAL FACTORY 为英文展商名，公开范围包括防火布、硅胶布、膨体玻纤布、带、绳、套管、玻纤针刺毯、玻纤表面毡、铝箔玻纤布，以及碳纤维、玄武岩纤维和芳纶防火纺织品。企业当前中英文官网持续显示相同的中文名称、英文名称、德清干山地址、企业域名邮箱和产品体系，本页因此把中文名、英文展商名及 guotaixf.com 去重为同一主体。官网称工厂成立于 1997 年并公开占地和厂房面积，但本页未取得工商档案或独立审厂资料，故 1997 年和规模数据仅作为企业声明，规模字段保持未核实。",
  descriptionEn:
    "Deqing Guotai Fireproof Material Factory is a mainland-China supplier of fireproof and high-temperature insulation materials in Deqing County, Huzhou, Zhejiang. China Composites Expo uses the same English identity and publishes its fiberglass and other thermal-textile scope. The current Chinese and English website presents the matching names, Ganshan address, company-domain email and product system. GetFRP therefore deduplicates the Chinese identity, English exhibitor name and guotaixf.com as one supplier. The website dates the factory to 1997 and publishes site-area figures, but this review did not obtain a registry extract or independent site audit. The year and scale remain company statements, and no verified scale tier is assigned.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "国泰官网把产品分为防火隔热布、带、毯、板、绳线、套管、隔热纸、膨胀密封、耐火堵料、可拆卸保温套、异型耐火制品和安全防护用品，并按材料列出玻璃纤维、高硅氧玻纤、陶瓷纤维、玄武岩、芳纶、碳纤维、玻璃棉和莫来石纤维等系列。官网代表性产品页把 GT530 硅胶涂层玻纤布的厚度写为 0.2–3 mm，公开爆破强度、经纬向断裂强力、涂胶量和 -70℃至 300℃工作范围；高硅氧玻纤布页面公开 0.1–1.5 mm 厚度、平纹或缎纹、可选涂层、SiO₂≥96%、接近 1700℃软化点和 900℃长期使用声明。这些是企业目录参数，不是 GetFRP 保证值，采购文件必须锁定具体型号、实物结构、试验方法、允差和批次验收标准。询价时应明确基布化学组成、纱线与织法、经纬密度、克重、厚度、幅宽、卷长、接头、边部、涂层树脂、单双面、涂层量、颜色、连续和短时峰值温度、热导率、尺寸稳定性、拉伸/爆破/撕裂、耐磨、耐化学品、电绝缘及储存条件。防火、阻燃、耐火和隔热不是可互换的性能等级；买方应写明适用法规和标准版本、火焰或熔滴暴露、时间、热通量、背温、烟气、完整性、失效判据、试样方向与调湿，并要求当前报告覆盖所报价的材料、厚度、涂层和生产地址。用于焊接毯、挡烟垂壁、膨胀节、管道包覆、电缆防护或可拆卸阀门/涡轮/注塑机保温套时，还需提供成品图纸、层次结构、内外层和填充物、缝线、包边、搭接、扣件、观察口、拆装空间、表面温度目标、热损失、人员接触风险和清洗维护要求。样品和首件应按量产工艺制作，记录材料批次、涂层/复合、裁剪缝制、尺寸、重量和外观，批量订单要求 COA、批号追溯、关键原料与工艺变更通知、抽样方案、包装防潮及卷芯和托盘尺寸。官网同时列有石棉系列；石棉产品在许多目的国受到禁止或严格限制，买方必须在 RFQ 中禁止未经批准的石棉替代，核实成分、SDS、标签、运输和进口/使用法规。本页产品范围面向耐火隔热纺织与转换件，不把这些材料自动视为树脂复合材料的结构增强织物；若用于层压、缠绕、模压或其他复材工艺，必须另行验证浸润、上浆/表面处理、树脂相容性、纤维体积分数和层合板性能。官网有可用英文版、企业域名邮箱和国际联系信息，故本页标记具备公开出口沟通入口；但官网仅通过 HTTP 正常提供服务，部分页面对辅助电话号码的写法不一致，出口合同、收款主体、英文技术资料、目的国合规、包装和 Incoterm 仍需通过主电话及企业域名邮箱复核。荣誉页展示的 2012 年缓降器检测文件和 CE 符合性声明仅适用于 GT-HJQ30 逃生缓降装置，且页面证书标注 2015 年到期；它不能证明当前防火纺织品、其他产品或全公司认证。因此本页不记录任何当前已核实认证，也不把历史荣誉照片作为采购批准。",
  productsServicesSummaryEn:
    "Guotai's website groups its offer into thermal cloth, tape, blankets, boards, ropes, sleeving, paper, sealing materials, detachable jackets and safety goods. A representative page lists GT530 silicone-coated fiberglass cloth at 0.2–3 mm thick with published strength, coating-content and -70°C to 300°C values. The high-silica page lists 0.1–1.5 mm thickness, plain or satin weave, optional coating, SiO2 of at least 96%, a softening point near 1700°C and a 900°C long-service claim. These are company catalog values, not GetFRP guarantees; the purchase specification must lock the model, construction, test method, tolerances and lot acceptance values. Define substrate, weave, mass, dimensions, splices, coating, temperature limits and required thermal, mechanical, chemical and electrical performance. For converted blankets, curtains, joints, pipe protection or equipment jackets, add controlled drawings, layers, fill, thread, seams, fasteners, openings and surface-temperature targets. Fireproof, flame-retardant, refractory and insulating are not interchangeable ratings. State the destination rule and standard edition, exposure, heat flux, back-face limit, integrity, failure criteria and conditioning, and require a current report for the offered construction. First articles should identify material lots and conversion records; repeat orders need COAs, change notice, sampling and moisture-protective packing. The catalog also lists asbestos products. Because asbestos is prohibited or tightly controlled in many destinations, prohibit unapproved substitution and verify composition, SDS, labeling, transport and import or use law. This profile covers thermal-protection textiles and converted insulation parts; it does not treat them automatically as structural reinforcement for resin composites. Laminating, winding or molding use needs separate wet-out, surface-treatment, resin-compatibility and laminate-property trials. A usable English website, company-domain email and international contacts support a public export route, so export readiness is marked true. Because the site works reliably only over HTTP and secondary phone numbers differ, confirm the payee, documents, destination compliance, packing and Incoterm through the main phone and domain email. The honor gallery contains 2012 test and CE material only for a GT-HJQ30 descent control/rescue device; the attestation states an expiry in 2015. It is not current certification for fireproof textiles, other products or the company. No current verified certification is listed.",
  ecatalogs: [
    {
      title: "德清国泰英文官网",
      titleEn: "Official Deqing Guotai English Website",
      description: "现行企业名称、英文入口、产品系列和公开联系方式。",
      descriptionEn: "Current company identity, English entry point, product families and public contacts.",
      url: "http://www.guotaixf.com/en.html",
      format: "Official website",
    },
    {
      title: "德清国泰企业介绍",
      titleEn: "Official Deqing Guotai Company Profile",
      description: "1997 年沿革、材料范围及企业公开规模声明。",
      descriptionEn: "Company-published 1997 history, material scope and scale statements.",
      url: "http://www.guotaixf.com/en/aboutus.html",
      format: "Company profile",
    },
    {
      title: "德清国泰产品目录",
      titleEn: "Official Deqing Guotai Product Directory",
      description: "防火隔热纺织品、密封材料、保温套和异型耐火制品分类。",
      descriptionEn: "Fire and thermal textiles, sealing materials, insulation jackets and shaped refractory categories.",
      url: "http://www.guotaixf.com/en/products.html",
      format: "Product directory",
    },
    {
      title: "GT 防火硅胶涂层布",
      titleEn: "GT Fireproof Silicone-Coated Fiberglass Cloth",
      description: "企业公开的 GT530 厚度、强力、涂层量、温度和用途参数。",
      descriptionEn: "Company-published GT530 thickness, strength, coating, temperature and application data.",
      url: "http://wap.guotaixf.com/en/products/details-gt-fireproof-silica-gel-cloth-1032.html",
      format: "Official product page",
    },
    {
      title: "高硅氧玻璃纤维布",
      titleEn: "High-Silica Fiberglass Fabric",
      description: "企业公开的厚度、织法、二氧化硅含量和温度声明。",
      descriptionEn: "Company-published thickness, weave, silica-content and temperature claims.",
      url: "http://wap.guotaixf.com/en/products/details-high-silica-fiberglass-fabric-1039.html",
      format: "Official product page",
    },
    {
      title: "可拆卸保温套目录",
      titleEn: "Detachable Insulation Jacket Directory",
      description: "阀门、涡轮、注塑设备、管道和铁路保温套产品入口。",
      descriptionEn: "Valve, turbine, molding-equipment, pipe and railway insulation-jacket entries.",
      url: "http://wap.guotaixf.com/en/products/detachable-insulation-sleeve-464.html",
      format: "Official product directory",
    },
    {
      title: "德清国泰官方联系方式",
      titleEn: "Official Deqing Guotai Contact Page",
      description: "德清地址、主电话、企业域名邮箱和国际联系入口。",
      descriptionEn: "Deqing address, main telephone, company-domain email and international contact route.",
      url: "http://www.guotaixf.com/en/contactus.html",
      format: "Official contact page",
    },
    {
      title: "德清国泰荣誉资料页",
      titleEn: "Official Deqing Guotai Honor Gallery",
      description: "历史缓降器测试与过期 CE 图片来源；不作为当前认证。",
      descriptionEn: "Source for historic descent-device test and expired CE images; not current certification.",
      url: "http://www.guotaixf.com/en/honor.html",
      format: "Historic evidence gallery",
    },
    {
      title: "中国国际复材展德清国泰网上展厅",
      titleEn: "China Composites Expo Deqing Guotai Net Show",
      description: "英文展商主体及防火、玻纤和高温隔热产品范围。",
      descriptionEn: "English exhibitor identity and fireproof, fiberglass and high-temperature insulation scope.",
      url: "https://www.chinacompositesexpo.com/en/netshow.php?key_word=DEQING%20GUOTAI&submit=&all_year=",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/deqing-guotai-logo.png",
  contactEmail: "gt@guotaixf.com",
  contactPhone: "+86 572 8495 262",
  address:
    "No. 66, Zhenxing South Road, Ganshan Town, Deqing County, Zhejiang 313223, China",
  website: "http://www.guotaixf.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "fiberglass fireproof textile supply and conversion",
    "silicone coating and aluminium-foil lamination (company catalog)",
    "high-silica and basalt thermal fabrics",
    "ceramic-fiber blankets, boards, papers and textiles",
    "fireproof rope, tape and sleeving conversion (company claim)",
    "detachable insulation-jacket cutting and sewing (company claim)",
    "intumescent sealing and refractory plugging products",
    "custom thermal-protection combinations (company claim)",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
