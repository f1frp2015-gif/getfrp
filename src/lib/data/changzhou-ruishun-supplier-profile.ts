import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_RUISHUN_SUPPLIER_ID =
  "sup-changzhou-ruishun-new-materials";
export const CHANGZHOU_RUISHUN_SUPPLIER_SLUG =
  "changzhou-ruishun-new-materials";

// Curated from the exact mainland-China company's active official website,
// its official product, contact and evidence pages, current China Composites
// Expo record and public business-registration data. The expo adds "Technology"
// to the English name, while the official website footer uses "Changzhou
// Ruishun New Materials Co., Ltd."; the Chinese legal name, Changzhou address,
// domain-linked email and fiberglass product set identify one supplier. Scale,
// export, customer and performance statements remain company- or organizer-
// published and have not been independently verified by GetFRP. Official logo
// downloaded 2026-08-13 from the current official website header:
// https://ikrorwxhimoolr5p.ldycdn.com/cloud/lpBplKirlpSRllpqoklkkq/Left.png
export const CHANGZHOU_RUISHUN_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_RUISHUN_SUPPLIER_ID,
  name: "常州市瑞顺新材料科技有限公司",
  nameEn: "Changzhou Ruishun New Materials Co., Ltd.",
  slug: CHANGZHOU_RUISHUN_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "工业级与电子级玻璃纤维布",
    "预浸料用玻璃纤维布",
    "高硅氧与膨体玻璃纤维布",
    "硅胶、PU、PTFE 与 Hypalon 涂层玻纤布",
    "硅胶压延玻璃纤维布",
    "铝箔复合玻璃纤维布与胶带",
    "灭火毯、焊接毯与防火披风",
    "车辆防火毯、电池防火袋及隔热制品",
  ],
  productsEn: [
    "Industrial- and electronic-grade fiberglass fabrics",
    "Prepreg fiberglass fabrics",
    "High-silica and expanded fiberglass fabrics",
    "Silicone-, PU-, PTFE- and Hypalon-coated fiberglass fabrics",
    "Silicone-calendered fiberglass fabrics",
    "Aluminum-foil laminated fiberglass cloth and tape",
    "Fire blankets, welding blankets and fireproof cloaks",
    "Vehicle fire blankets, battery fireproof bags and insulation products",
  ],
  processList: [
    "玻璃纤维织造与卷材加工",
    "硅胶压延与涂层复合",
    "PU、PTFE、Hypalon 与蛭石涂层加工",
    "铝箔覆合与胶带分切",
    "玻纤布裁切、缝制和 OEM 成品加工",
    "面密度、经纬密度、幅宽与厚度定制",
  ],
  processListEn: [
    "Fiberglass weaving and roll-goods conversion",
    "Silicone calendering and coating lamination",
    "PU, PTFE, Hypalon and vermiculite coating",
    "Aluminum-foil lamination and tape slitting",
    "Fabric cutting, sewing and OEM finished-product conversion",
    "Custom areal weight, warp/weft density, width and thickness",
  ],
  established: 2021,
  verified: false,
  description:
    "常州市瑞顺新材料科技有限公司是位于江苏常州钟楼区的玻璃纤维织物与防火隔热制品供应商。公开工商记录显示公司成立于 2021 年；官网覆盖工业级、电子级、预浸料用和高硅氧玻纤布，硅胶、PU、PTFE、Hypalon 等涂层或压延织物，以及灭火毯、焊接防护和隔热成品。中国国际复材展以 CHANGZHOU RUISHUN NEW MATERIALS TECHNOLOGY CO., LTD 收录该企业，官网页脚使用 Changzhou Ruishun New Materials Co., Ltd.；两者对应同一中文主体、常州地址和产品体系，本页已去重为一个供应商。官网及展会称产品出口北美、南美、欧洲、东南亚和中东，这属于企业/主办方发布的市场信息，需以近期提单、客户可核验引用或实际出口文件复核。",
  descriptionEn:
    "Changzhou Ruishun New Materials Co., Ltd. is a fiberglass-fabric and fire/thermal-protection supplier in Zhonglou District, Changzhou, Jiangsu. Public business-registration data dates the company to 2021. Its official website covers industrial, electronic, prepreg and high-silica fiberglass fabrics; silicone-, PU-, PTFE- and Hypalon-coated or calendered textiles; and converted products for fire, welding and thermal protection. The China Composites Expo lists CHANGZHOU RUISHUN NEW MATERIALS TECHNOLOGY CO., LTD., while the official footer uses Changzhou Ruishun New Materials Co., Ltd.; the records share the exact Chinese company, Changzhou address and product scope, so this page consolidates them into one supplier identity. Official and organizer-published material says products are sold in North America, South America, Europe, Southeast Asia and the Middle East. Buyers should revalidate that market claim through recent shipping records, customer-verifiable references or actual export documents.",
  certifications: [
    "官网公司简介宣称具备 SGS、ISO 9001、CE 等认证，但未在该表述处给出 ISO 证书编号、认证机构、获证主体、范围或有效期；采购方应取得完整现行证书并向认证机构核验，不能仅凭宣传文字认定",
    "官网“Certification & Report”页提供硅胶布 RoHS、高硅氧布、550°C/1000°C 耐热、PFAS、灭火毯和一份名为 CE certification 的可下载文件；文件名和下载页不能证明所报价具体型号、批次或用途合格，需核对报告编号、申请人/制造商、样品描述、标准版本、结果、签发机构及与订单产品的一致性",
  ],
  certificationsEn: [
    "The official profile claims SGS, ISO 9001 and CE certification, but the claim does not state an ISO certificate number, certification body, certified legal entity, scope or validity. Buyers should obtain the complete current certificate and validate it with the certification body rather than treating marketing text as certification",
    "The official Certification & Report page offers downloads named for silicone-fabric RoHS, high-silica fabric, 550°C/1000°C heat resistance, PFAS, fire blankets and CE certification. A file name and download listing do not establish conformity of the quoted grade, batch or end use. Check report number, applicant and manufacturer, sample description, standard edition, result, issuer and exact linkage to the ordered product",
  ],
  productsServicesSummary:
    "官网目录显示瑞顺覆盖工业级、电子级、预浸料用、高硅氧、膨体和钓竿用玻纤布，以及硅胶、PU、PTFE、Hypalon、染色、蛭石和铝箔复合织物；下游成品包括灭火毯、车辆防火毯、防火披风、电池防火袋、焊接毯/围护、隔热罩、软连接、防烟垂壁和防火卷帘。企业称可定制经纬密度、幅宽和厚度，并把织造、涂层、裁切和缝制作为一体化能力；这些工序边界及分包环节应在验厂和报价中确认。玻纤布 RFQ 应定义玻璃类型、纱线厂家/牌号、tex、浸润剂、组织结构、经纬密度、面密度、幅宽、厚度、卷长、接头、边部、翘曲、断纱、污渍、含水率、可燃物含量、拉伸强力及树脂/胶黏剂相容性。涂层或压延布还应明确基布、单/双面、涂层化学体系、涂覆量、总厚度、颜色、表面、针孔、剥离/附着力、耐温定义（连续/峰值及时间）、阻燃、烟毒、耐介质、耐老化、低温柔性和 PFAS/RoHS/REACH 等法规边界。防火毯、焊接防护和车辆/电池场景必须依据目标国家、安装方式、尺寸、缝线、包边、把手、包装和真实火灾/热通量风险指定标准与验收，不能把原材料测试外推为成品系统认证。样品与量产确认应包括规格书、限度样、批次 CoA、第三方报告原件、首件/型式试验、卷材抽样、包装防潮、标签追溯、变更控制、MOQ、交期和年度产能分配。官网页面出现若干未填充的产线/面积/人数计数器，以及与玻纤业务无关的汽车无障碍座椅模板文案，因此不将这些页面元素视为产能或行业经验凭据。当前官网地址为钟楼区富都江南新经济产业园，而公开工商记录进一步列到洪庄路 10 号 5-215；验厂、合同、开票、付款和发运前应书面确认注册、销售、生产与仓储地点。",
  productsServicesSummaryEn:
    "The official catalog spans industrial, electronic, prepreg, high-silica, expanded and fishing-rod fiberglass fabrics, plus silicone, PU, PTFE, Hypalon, dyed, vermiculite and aluminum-foil laminated textiles. Converted products include fire and vehicle blankets, fireproof cloaks, battery fire bags, welding blankets and habitats, insulation covers, flexible connectors, smoke curtains and fire shutters. The company presents customizable warp/weft density, width and thickness and an integrated weaving, coating, cutting and sewing offer; buyers should confirm actual process boundaries and subcontracting in the quotation and audit. A fabric RFQ should define glass type, yarn maker and grade, tex, sizing, weave, warp/weft density, areal weight, width, thickness, roll length, splices, edges, skew, broken yarns, contamination, moisture, loss on ignition, tensile strength and resin or adhesive compatibility. For coated or calendered fabric, also state substrate, one- or two-sided construction, coating chemistry and add-on, total thickness, colour and finish, pinholes, peel or adhesion, the meaning of temperature resistance (continuous versus peak and duration), flame, smoke/toxicity, chemical and ageing resistance, low-temperature flexibility and the PFAS/RoHS/REACH boundary. Fire blankets, welding protection and vehicle or battery applications require standards and acceptance criteria tied to the destination market, installation, size, sewing thread, edging, handles, packaging and the actual fire or heat-flux hazard; a raw-material test must not be extrapolated into finished-system certification. Sample and production approval should cover a specification, boundary sample, batch CoA, original third-party reports, first-article or type testing, roll sampling, moisture-protective packing, label traceability, change control, MOQ, lead time and annual capacity allocation. Several official pages show unpopulated counters for lines, area and staff and unrelated template text about automotive accessibility seats, so those elements are not treated as capacity or experience evidence. The website gives Fudu Jiangnan New Economy Industrial Park, Zhonglou District, while public registration data further identifies No. 10 Hongzhuang Road, Building 5-215. Confirm registered, sales, production, warehouse, invoicing and dispatch sites in writing before an audit, contract, payment or shipment.",
  ecatalogs: [
    {
      title: "瑞顺官方公司简介",
      titleEn: "Official Ruishun Company Profile",
      description: "公司主体、玻纤产品范围、定制能力、应用与出口市场自述。",
      descriptionEn:
        "Official identity, fiberglass scope, customization, applications and export-market statements.",
      url: "https://www.ruishunmaterials.com/aboutus.html",
      format: "Company profile",
    },
    {
      title: "瑞顺官方产品目录",
      titleEn: "Official Ruishun Product Directory",
      description: "基布、涂层/压延织物、铝箔复合和防火隔热成品目录。",
      descriptionEn:
        "Official base fabrics, coated/calendered textiles, foil laminates and fire/thermal products.",
      url: "https://www.ruishunmaterials.com/products.html",
      format: "Product directory",
    },
    {
      title: "瑞顺官方证书与报告下载页",
      titleEn: "Official Ruishun Certification and Report Downloads",
      description: "企业发布的 RoHS、耐热、PFAS、灭火毯与 CE 文件入口；需逐份核验适用性。",
      descriptionEn:
        "Company-published RoHS, heat, PFAS, fire-blanket and CE file listings; applicability requires document-level review.",
      url: "https://www.ruishunmaterials.com/certification.html",
      format: "Evidence downloads",
    },
    {
      title: "瑞顺官方联系页面",
      titleEn: "Official Ruishun Contact Page",
      description: "官网域名邮箱、WhatsApp、常州地址及网站运营主体。",
      descriptionEn:
        "Domain email, WhatsApp, Changzhou address and official site operator.",
      url: "https://www.ruishunmaterials.com/contactus.html",
      format: "Contact page",
    },
    {
      title: "中国国际复材展瑞顺展商页",
      titleEn: "China Composites Expo Ruishun Profile",
      description: "展会发布的中英文主体、7J06 展位、产品与出口市场。",
      descriptionEn:
        "Organizer-published identity, booth 7J06, products and export markets.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-3284-6760440.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-ruishun-logo.png",
  contactEmail: "sales@ruishunmaterials.com",
  contactPhone: "+86 180 6875 5165",
  address:
    "Fudu Jiangnan New Economy Industrial Park, Zhonglou District, Changzhou, Jiangsu, China",
  website: "https://www.ruishunmaterials.com/",
  enterpriseId: null,
  scaleTier: "S",
  brandPriority: 8,
  viewCount: 0,
  capabilities: [
    "industrial fiberglass fabrics",
    "electronic-grade fiberglass fabrics",
    "prepreg fiberglass fabrics",
    "high-silica fiberglass fabrics",
    "silicone-coated and calendered fabrics",
    "PU, PTFE and Hypalon coatings",
    "aluminum-foil fiberglass laminates",
    "fire and welding blankets",
    "vehicle and battery fire protection",
    "fiberglass cutting and sewing",
    "OEM converted fiberglass products",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
