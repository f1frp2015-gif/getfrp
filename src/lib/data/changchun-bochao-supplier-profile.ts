import type { SupplierListing } from "@/lib/db/schema";

export const CHANGCHUN_BOCHAO_SUPPLIER_ID = "sup-changchun-bochao";
export const CHANGCHUN_BOCHAO_SUPPLIER_SLUG =
  "changchun-bochao-natural-fiber-composites";

// Curated from the current BoChao company, product and research pages and the
// 2026 China Composites Expo C directory. Official logo downloaded on
// 2026-08-25 from the current website header:
// https://www.bochaoautoparts.com/image/logo.webp
export const CHANGCHUN_BOCHAO_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGCHUN_BOCHAO_SUPPLIER_ID,
  name: "长春博超汽车零部件股份有限公司",
  nameEn: "Changchun BoChao Auto Parts Co., Ltd.",
  slug: CHANGCHUN_BOCHAO_SUPPLIER_SLUG,
  location: "吉林长春",
  locationEn: "Changchun, Jilin, China",
  province: "吉林",
  category: "manufacturer",
  products: [
    "汽车门板、顶棚、衣帽架和座椅背板用天然纤维复合材料",
    "汽车行李箱内饰及地毯基材用天然纤维复合件",
    "麻纤维增强热塑性和热固性复合板材",
    "竹纤维复合材料和绿色家装板材",
    "运动及滑雪装备用天然纤维复合材料",
    "按性能、工艺和应用要求定制的天然纤维结构件",
  ],
  productsEn: [
    "Natural-fiber composites for automotive door panels, headliners, parcel shelves and seat-back parts",
    "Natural-fiber luggage-compartment trim and carpet substrates",
    "Hemp-fiber-reinforced thermoplastic and thermoset composite sheets",
    "Bamboo-fiber composites and green interior boards",
    "Natural-fiber materials for sporting and ski equipment",
    "Custom natural-fiber structural parts developed to performance, process and application requirements",
  ],
  processList: [
    "天然植物纤维材料配方与应用开发",
    "纤维复合板材制备",
    "热压与模压成型",
    "模具设计和制造",
    "水切割及成型件后加工",
    "汽车内饰件性能验证与批量制造",
  ],
  processListEn: [
    "Natural plant-fiber material formulation and application development",
    "Fiber-composite sheet production",
    "Hot pressing and compression molding",
    "Mold design and manufacturing",
    "Waterjet trimming and molded-part finishing",
    "Automotive-interior validation and serial production",
  ],
  established: 2006,
  verified: false,
  description:
    "长春博超汽车零部件股份有限公司官网将其定位为天然植物纤维复合材料研发与制造企业，成立脉络始于 2006 年，并公开长春、扬州和佛山多地布局。当前产品页围绕麻纤维、竹纤维及其他天然纤维，列出汽车门板、顶棚、行李箱、座椅背板、衣帽架和地毯等内饰应用，以及绿色家装、板材、滑雪和运动器材方向。官网还展示材料制备、复合成型、模具开发、水切割和质量检验场景。中国国际复材展 C 字母展商页收录同一主体，并将其归入天然纤维织物和复合材料最终制品。性能、客户、产能、专利和环境收益均属企业或展会自述，尚未由 GetFRP 独立审计。",
  descriptionEn:
    "Changchun BoChao Auto Parts Co., Ltd. presents itself on its official website as a developer and manufacturer of natural plant-fiber composite materials, with an operating history beginning in 2006 and sites stated in Changchun, Yangzhou and Foshan. Its current product page covers hemp, bamboo and other natural-fiber materials for automotive door panels, headliners, luggage-compartment trim, seat backs, parcel shelves and carpet substrates, together with green interior boards and exploratory ski and sporting-goods applications. The site also shows material preparation, composite molding, mold development, waterjet trimming and quality-inspection activities. China Composites Expo lists the same entity under natural fibers and composite end products. Performance, customer, capacity, patent and environmental-benefit statements remain supplier- or organizer-published and have not been independently audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "博超当前官网把天然植物纤维复合材料的价值重点放在轻量、吸音隔热、可成型、可回收和低碳方向，并说明可按客户性能指标、工艺条件和应用场景提供材料、结构与产品开发。主页展示 IATF 16949:2016、ISO 14001:2015 等证书名称和图片，但本轮公开页面没有同时提供足以核对证书主体、生产地址、认证范围、编号和有效期的完整现行文件，因此本页不列已核实认证。采购 RFQ 应把“天然纤维复材”拆成可验收参数：明确麻、竹或其他纤维种类、来源与批次；热塑或热固基体及回收料比例；纤维含量、面密度、板厚和公差；含水率、气味、VOC、霉变和吸水；拉伸、弯曲、剥离、冲击、蠕变、阻燃、烟雾与热老化要求；表皮、胶膜和背衬体系；颜色、纹理、外观缺陷、翘曲及切边标准。汽车项目还应约定目标车型、零件图纸版本、模具归属、首件批准、PPAP/APQP 层级、过程能力、材料变更通知、可追溯性和失效分析。家装或运动用品项目不能直接沿用汽车测试包，应按目的市场重新核验甲醛/VOC、阻燃、耐候、疲劳、湿热及消费品法规。官网当前联系地址为长春汽车经济技术开发区宝来街 888 号，而同域名旧版介绍曾公开高尔夫路 399 号；询价、审厂或付款前应让供应商确认当前签约法人、生产地点和收款账户。",
  productsServicesSummaryEn:
    "BoChao's current website positions its natural plant-fiber composites around low weight, acoustic and thermal insulation, moldability, recyclability and lower-carbon material choices. It also states that material, structural and product development can be tailored to customer performance targets, process conditions and application scenarios. The home page displays certificate names and images including IATF 16949:2016 and ISO 14001:2015, but the reviewed public pages do not provide a complete current package sufficient to verify the certified entity, manufacturing address, scope, certificate number and validity. No certification is therefore recorded as independently verified. An RFQ should convert the broad phrase “natural-fiber composite” into controlled acceptance criteria: hemp, bamboo or other fiber type, source and lot; thermoplastic or thermoset matrix and recycled-content target; fiber content, areal weight, sheet thickness and tolerances; moisture, odor, VOC, mold growth and water uptake; tensile, flexural, peel, impact, creep, flame, smoke and heat-aging requirements; skin, film and backing construction; color, texture, visible defects, warpage and trimmed-edge quality. Automotive programs should additionally define vehicle and drawing revision, tool ownership, first-article approval, PPAP or APQP level, process capability, material-change notification, traceability and failure analysis. Interior-building or sporting-goods projects cannot simply reuse an automotive test package; destination-market formaldehyde or VOC, fire, weathering, fatigue, humidity and consumer-product rules need separate qualification. The current website gives No. 888 Baolai Street in the Changchun Automotive Economic and Technological Development Zone, while an older page on the same domain published No. 399 Golf Road. Confirm the contracting entity, active plant and beneficiary account before an audit, order or payment.",
  ecatalogs: [
    {
      title: "长春博超官网",
      titleEn: "Official BoChao Website",
      description: "公司定位、生产场景、能力和当前联系信息。",
      descriptionEn: "Official company positioning, production scenes, capabilities and current contact details.",
      url: "https://www.bochaoautoparts.com/",
      format: "Official website",
    },
    {
      title: "长春博超产品体系",
      titleEn: "BoChao Product Portfolio",
      description: "天然纤维汽车内饰、板材、家装和运动用品应用。",
      descriptionEn: "Natural-fiber automotive interiors, sheets, interior boards and sporting applications.",
      url: "https://www.bochaoautoparts.com/products.html",
      format: "Product directory",
    },
    {
      title: "长春博超研发能力",
      titleEn: "BoChao R&D Capabilities",
      description: "企业公开的材料、工艺、模具和测试能力。",
      descriptionEn: "Supplier-published material, process, tooling and test capabilities.",
      url: "https://www.bochaoautoparts.com/research.html",
      format: "Capability page",
    },
    {
      title: "中国国际复材展 C 字母展商页",
      titleEn: "China Composites Expo Exhibitors — C",
      description: "博超展商身份、产品分类和展会简介。",
      descriptionEn: "Organizer entry for BoChao, its categories and exhibitor description.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=C",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/changchun-bochao-logo.webp",
  contactEmail: "inquiry@bochaoautoparts.com",
  contactPhone: "+86 431 8597 9000",
  address:
    "No. 888 Baolai Street, Changchun Automotive Economic and Technological Development Zone, Changchun, Jilin, China",
  website: "https://www.bochaoautoparts.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 24,
  viewCount: 0,
  capabilities: [
    "natural plant-fiber composites",
    "hemp-fiber composite sheets",
    "bamboo-fiber composites",
    "automotive interior parts",
    "hot pressing",
    "compression molding",
    "mold development",
    "waterjet trimming",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
