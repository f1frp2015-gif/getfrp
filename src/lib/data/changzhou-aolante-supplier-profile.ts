import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_AOLANTE_SUPPLIER_ID =
  "sup-changzhou-aolante-machinery";
export const CHANGZHOU_AOLANTE_SUPPLIER_SLUG =
  "changzhou-aolante-machinery";

// Curated from the exact legal entity's active official website, its current
// China Composites Expo profile and public business-registration records. The
// website describes Aolante's brand history as beginning in 2010, while the
// Changzhou legal entity was registered in 2018; this profile keeps those dates
// separate. Product, patent, equipment, sales and export statements remain
// company- or organizer-published and have not been independently verified by
// GetFRP. Official logo downloaded 2026-08-13 from the current website header:
// https://omo-oss-image.thefastimg.com/portal-saas/new2023081418012629092/cms/image/8ee3d7a3-6a56-4bcc-b4cf-1804e18f8aa8.png
export const CHANGZHOU_AOLANTE_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_AOLANTE_SUPPLIER_ID,
  name: "常州市奥兰特机械有限公司",
  nameEn: "Changzhou Aolante Machinery Co., Ltd.",
  slug: CHANGZHOU_AOLANTE_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "油式与水式模温机",
    "防爆模温机与防爆油加热器",
    "电加热导热油炉",
    "风冷、水冷冷水机及螺杆机组",
    "冷热一体机与速冷速热模温机",
    "高低温液冷及冷热冲击测试系统",
    "PLC 模温机与油/水循环温度控制机",
    "非标定制工业温控设备",
  ],
  productsEn: [
    "Oil- and water-circulating mold temperature controllers",
    "Explosion-proof temperature controllers and oil heaters",
    "Electric thermal-oil heaters",
    "Air- and water-cooled chillers and screw chiller units",
    "Combined heating and cooling units and rapid-cycle controllers",
    "High/low-temperature liquid-cooling and thermal-shock test systems",
    "PLC-controlled and oil/water circulation temperature-control units",
    "Custom industrial temperature-control equipment",
  ],
  processList: [
    "工业模具加热与冷却循环",
    "导热油和水介质温度控制",
    "防爆温控系统设计制造",
    "电加热导热油循环",
    "冷水机组与冷热一体化",
    "高低温测试回路集成",
    "PLC/PID 控制及非标设备定制",
  ],
  processListEn: [
    "Industrial mold heating and cooling circulation",
    "Thermal-oil and water-medium temperature control",
    "Explosion-protected temperature-control system engineering",
    "Electric thermal-oil circulation heating",
    "Chiller and combined heating/cooling integration",
    "High/low-temperature test-loop integration",
    "PLC/PID controls and custom equipment engineering",
  ],
  established: 2018,
  verified: false,
  description:
    "常州市奥兰特机械有限公司是位于江苏常州天宁区的工业温控设备制造企业。中国国际复材展与公司官网均将其列为深圳市奥兰特机械有限公司体系的常州子公司/生产基地，面向模具及相关设备领域提供模温机、导热油加热、冷水机和定制冷热温控系统。官网把复合材料和碳纤维复材成型列为服务应用，并公开常州与深圳生产基地及重庆办事处。公开工商资料显示该常州法人于 2018 年成立；官网所称“2010 年”是奥兰特品牌/业务沿革口径，并非该常州法人的注册日期。",
  descriptionEn:
    "Changzhou Aolante Machinery Co., Ltd. is an industrial temperature-control equipment manufacturer in Tianning District, Changzhou, Jiangsu. Both its China Composites Expo profile and official website identify it as the Changzhou subsidiary or production base within the Shenzhen Aolante Machinery organization, supplying mold-temperature controllers, thermal-oil heating, chillers and custom heating/cooling systems. The official site lists composites and carbon-fiber composite molding among its served applications and publishes production bases in Changzhou and Shenzhen plus a Chongqing office. Public business-registration records date the Changzhou legal entity to 2018; the site's 2010 statement describes the Aolante brand or business history rather than this entity's registration date.",
  certifications: [
    "官网称奥兰特拥有 30+ 项资质/专利，但未在公司介绍页逐项披露证书、专利号、主体或有效期；采购方应索取与常州市奥兰特机械有限公司及拟购机型对应的现行文件，并独立核验",
  ],
  certificationsEn: [
    "The official site claims more than 30 qualifications and patents but does not itemize certificate or patent references, legal entities or validity on the company profile. Buyers should obtain current documents tied to Changzhou Aolante Machinery Co., Ltd. and the proposed machine, then verify them independently",
  ],
  productsServicesSummary:
    "官网产品目录列出防爆、油式、水式和非标模温机，电加热导热油炉，风冷/水冷冷水机，冷热一体与速冷速热设备，以及高低温液冷和冷热冲击测试系统；展会则将产品归入模具及相关设备和环保设备。官网还称奥兰特拥有 40+ 台先进设备、年销量 1,000+，销售网络覆盖中国、欧美、南亚和东南亚；这些均为企业自述，应通过近期设备清单、产能记录、客户验收资料与出口单据重新核验。复材模具温控设备 RFQ 应明确模具质量与材料、工艺节拍、升降温曲线、工作/最高温度、控温稳定性与均匀性、回路数量、导热介质、加热和制冷能力、泵流量/扬程、系统压力、接口和软管、冷却水与环境条件、电压频率、PLC/PID、传感器、通讯和数据记录。涉及防爆机型时还应定义危险区域、气体/粉尘组别、温度组别及适用 CN Ex、ATEX 或 IECEx 合格范围，不应仅凭“防爆”产品名称验收。询价还需约定材料与元件品牌、报警和联锁、FAT/SAT、校准、图纸/说明书、备件、安装调试、培训、质保、交期、包装和出口文件，并确认合同、收款和售后主体。",
  productsServicesSummaryEn:
    "The official product directory lists explosion-protected, oil, water and custom mold-temperature controllers; electric thermal-oil heaters; air- and water-cooled chillers; combined and rapid heating/cooling units; and high/low-temperature liquid-cooling and thermal-shock test systems. The expo classifies the offering under molds and related equipment and environmental equipment. The website also claims more than 40 advanced machines, annual sales above 1,000 units and a network covering China, Europe, the Americas, South Asia and Southeast Asia. These are company-published statements that buyers should revalidate through a current equipment list, capacity records, customer acceptance evidence and export documents. A composite-mold temperature-control RFQ should define mold mass and material, process cycle, heat-up and cool-down profile, operating and maximum temperatures, stability and uniformity, number of circuits, heat-transfer medium, heating and cooling capacity, pump flow and head, system pressure, connectors and hoses, cooling-water and ambient conditions, voltage and frequency, PLC/PID, sensors, communications and data logging. For explosion-protected equipment, also define the hazardous zone, gas or dust group, temperature class and required CN Ex, ATEX or IECEx certification scope; the product name alone is not acceptance evidence. The RFQ should further specify material and component makes, alarms and interlocks, FAT/SAT, calibration, drawings and manuals, spares, installation and commissioning, training, warranty, lead time, packaging and export documents, and should confirm the contracting, payment and service legal entities.",
  ecatalogs: [
    {
      title: "奥兰特官方公司与应用介绍",
      titleEn: "Official Aolante Company & Application Profile",
      description:
        "主体名称、奥兰特沿革、生产基地、复材/碳纤维应用及企业自述规模。",
      descriptionEn:
        "Official legal name, Aolante history, production bases, composites applications and company-published scale statements.",
      url: "https://www.czaolante.com/about.html",
      format: "Company profile",
    },
    {
      title: "工业温控设备产品目录",
      titleEn: "Industrial Temperature-Control Product Directory",
      description:
        "模温机、油炉、冷水机、冷热一体机和高低温测试设备分类及产品入口。",
      descriptionEn:
        "Official categories and product links for temperature controllers, oil heaters, chillers, combined units and high/low-temperature test equipment.",
      url: "https://www.czaolante.com/product/5/",
      format: "Product directory",
    },
    {
      title: "奥兰特官方联系页面",
      titleEn: "Official Aolante Contact Page",
      description: "常州地址、联系人、电话、邮箱及官网运营主体。",
      descriptionEn:
        "Official Changzhou address, contacts, telephone, email and website operator.",
      url: "https://www.czaolante.com/contact.html",
      format: "Contact page",
    },
    {
      title: "中国国际复材展展商资料",
      titleEn: "China Composites Expo Exhibitor Profile",
      description:
        "展会发布的中英文名称、集团关系、温控业务、出口地区和产品类别。",
      descriptionEn:
        "Organizer-published Chinese and English names, group relationship, temperature-control business, export regions and product categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-3134-6759540.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-aolante-logo.png",
  contactEmail: "fufu@szaolante.com",
  contactPhone: "+86 136 7003 4348",
  address:
    "No. 117 Zhoutangqiao, Huayuan Village, Zhenglu Town, Tianning District, Changzhou, Jiangsu, China",
  website: "https://www.czaolante.com/",
  enterpriseId: null,
  scaleTier: "S",
  brandPriority: 6,
  viewCount: 0,
  capabilities: [
    "mold temperature controllers",
    "oil-circulating temperature control",
    "water-circulating temperature control",
    "explosion-protected temperature-control equipment",
    "electric thermal-oil heaters",
    "air- and water-cooled chillers",
    "combined heating and cooling units",
    "rapid heating and cooling controllers",
    "high/low-temperature liquid-cooling test systems",
    "PLC and PID controls",
    "custom industrial temperature-control engineering",
    "composite-molding temperature control",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
