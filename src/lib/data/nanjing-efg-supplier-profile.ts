import type { SupplierListing } from "@/lib/db/schema";

export const NANJING_EFG_SUPPLIER_ID = "sup-nanjing-efg";
export const NANJING_EFG_SUPPLIER_SLUG = "nanjing-efg";

// Curated from Nanjing EFG's official English home, company, product and
// contact pages. The official site identifies the business as a manufacturer
// and exporter, while public company-registration information identifies the
// Chinese legal entity as Nanjing Feige Industry & Trade Co., Ltd. Buyers
// should therefore confirm the contracting entity and the factory responsible
// for the quoted product. The official pages also conflict on history: the
// About page says operations began in 2003, while the home page says the brand
// has focused on waterproofing fiberglass and composite bases since 2006. This
// profile uses the current legal entity's 2006 incorporation year and treats
// the earlier operating-history statement as company-published information.
// Official logo source (downloaded 2026-08-06):
// https://www.nanjingefg.com/uploads/202016071/logo202007091127117634308.png
export const NANJING_EFG_SUPPLIER_PROFILE: SupplierListing = {
  id: NANJING_EFG_SUPPLIER_ID,
  name: "南京菲戈工贸有限公司",
  nameEn: "Nanjing EFG Co., Ltd.",
  slug: NANJING_EFG_SUPPLIER_SLUG,
  location: "江苏南京",
  locationEn: "Nanjing, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "玻璃纤维薄毡、增强玻纤毡及矿物涂层玻纤材料",
    "纺粘、增强及再生聚酯毡",
    "玻纤、聚酯及玻纤-聚酯复合基材",
    "吸声吊顶、保温板及石膏板用饰面材料",
    "玻纤纸、玻纤网格布、玻纤带及短切纱",
    "陶瓷纤维毡及铝覆玻纤保温板",
  ],
  productsEn: [
    "Fiberglass tissue, reinforced glass-fiber mat and mineral-coated fiberglass",
    "Spunbond, reinforced and recycled polyester mats",
    "Fiberglass, polyester and fiberglass-polyester composite bases",
    "Facers for acoustic ceilings, insulation panels and gypsum board",
    "Fiberglass paper, mesh, tape and chopped strands",
    "Ceramic-fiber mat and aluminum-faced fiberglass insulation panels",
  ],
  processList: [
    "玻璃纤维与聚酯非织造材料制造",
    "增强毡与复合毡加工",
    "矿物涂层与板材饰面材料开发",
    "打孔、覆面及卷材转换",
    "按应用要求提供样品与产品定制",
  ],
  processListEn: [
    "Fiberglass and polyester nonwoven manufacture",
    "Reinforced and composite mat conversion",
    "Mineral coating and board-facer development",
    "Perforation, facing and roll-goods conversion",
    "Application-specific samples and product customization",
  ],
  established: 2006,
  verified: false,
  description:
    "Nanjing EFG Co., Ltd. 对应公开中文主体南京菲戈工贸有限公司，是一家位于南京的玻纤与聚酯非织造材料供应商。其官网将公司定位为玻纤毡/薄毡、聚酯毡、增强及复合防水基材的生产与出口企业，并重点展示吸声吊顶、保温板和石膏板饰面材料。官网 About 页称相关业务始于 2003 年，而首页称该防水玻纤与复合基材品牌始于 2006 年；公开工商资料显示现中文主体成立于 2006 年，因此本资料采用 2006 年，并将更早沿革视为企业自述。采购方应通过营业执照、工厂审核和订单文件确认签约主体、实际生产工厂及产品能力。",
  descriptionEn:
    "Nanjing EFG Co., Ltd., identified in public Chinese company-registration information as Nanjing Feige Industry & Trade Co., Ltd., is a Nanjing-based supplier of fiberglass and polyester nonwovens. Its official site positions the business as a producer and exporter of fiberglass mat and tissue, polyester mat, and reinforced or composite bases for waterproofing, with a current emphasis on facers for acoustic ceilings, insulation panels and gypsum board. The About page says the related business began in 2003, while the home page dates the waterproofing-fiberglass and composite-base brand to 2006. This profile uses the current Chinese entity's 2006 incorporation year and treats the earlier history as a company statement. Buyers should confirm the contracting entity, actual manufacturing site and quoted capabilities through the business license, factory audit and order documents.",
  certifications: [
    "SGS 质量控制文件 TR No. 20151202078（企业官网提供；需核验文件性质、适用产品、测试范围与现行有效性）",
  ],
  certificationsEn: [
    "SGS quality-control document TR No. 20151202078 (supplier-hosted; confirm document type, covered product, test scope and current relevance)",
  ],
  productsServicesSummary:
    "Nanjing EFG 官网目录覆盖玻纤毡/薄毡、玻纤纸、玻纤带、网格布、短切纱、聚酯毡、复合毡及陶瓷纤维毡。其公司介绍还列出增强玻纤毡、纺粘与增强聚酯毡、玻纤-聚酯复合基材、矿物涂层材料，以及吸声吊顶、保温板和石膏板饰面材料；公开应用包括沥青防水卷材、道路铺装、屋面瓦、油气与化工管道包覆、运动地板和防水石膏板。官网承诺可提供 TDS、样品和定制支持，但公开页面没有形成完整的牌号级规格体系。采购方应按具体型号核验纤维与粘结剂体系、克重与 MD/CD 拉伸、厚度和幅宽公差、涂层量、孔型、树脂或沥青相容性、卷长与包装、含水率、缺陷标准、TDS/SDS、批次 COA、MOQ、交期、现行测试文件，以及签约与生产主体。",
  productsServicesSummaryEn:
    "Nanjing EFG's official directory covers fiberglass mat and tissue, fiberglass paper, tape, mesh and chopped strands, polyester mats, composite mats and ceramic-fiber mats. The company page also lists reinforced fiberglass mat, spunbond and reinforced polyester mat, fiberglass-polyester composite bases, mineral-coated materials, and facers for acoustic ceilings, insulation panels and gypsum board. Published applications include bituminous waterproofing membranes, road paving, roofing shingles, oil-and-gas or chemical pipe wrapping, sports flooring and moisture-resistant gypsum board. The site offers TDS documents, samples and customized support, but the public pages do not provide a complete grade-level specification system. Buyers should validate the quoted fiber and binder system, areal weight and MD/CD tensile properties, thickness and width tolerances, coating loading, perforation pattern, resin or bitumen compatibility, roll length and packaging, moisture and defect limits, TDS/SDS, batch COA, MOQ, lead time, current test documentation, and the contracting and manufacturing entities.",
  ecatalogs: [
    {
      title: "Nanjing EFG 产品目录",
      titleEn: "Nanjing EFG Product Directory",
      description: "玻纤毡、玻纤纸、玻纤带、网格布、短切纱、聚酯毡与复合毡入口。",
      descriptionEn:
        "Official directory for fiberglass mats, paper, tape, mesh and chopped strands, plus polyester and composite mats.",
      url: "https://www.nanjingefg.com/products",
      format: "Official product directory",
    },
    {
      title: "Nanjing EFG 公司介绍",
      titleEn: "Nanjing EFG Company Profile",
      description: "企业自述沿革、产品、应用、工厂照片、设备、市场及服务信息。",
      descriptionEn:
        "Supplier-published history, product and application range, factory imagery, equipment, market and service information.",
      url: "https://www.nanjingefg.com/about-us",
      format: "Company profile",
    },
    {
      title: "Nanjing EFG 质量控制文件",
      titleEn: "Nanjing EFG Quality-Control Document",
      description: "官网提供的 SGS TR No. 20151202078 文件；采购方应核验文件类型与现行适用性。",
      descriptionEn:
        "Supplier-hosted SGS document TR No. 20151202078; buyers should verify its document type and current applicability.",
      url: "https://www.nanjingefg.com/Content/upload/PDF/201816071/SGS-EFG101115D-fiberglass-mat%20.pdf",
      format: "Supplier-hosted test document",
    },
    {
      title: "Nanjing EFG 联系方式",
      titleEn: "Nanjing EFG Contact Directory",
      description: "南京公开联系地址、邮箱与电话。",
      descriptionEn:
        "Official Nanjing contact address, email and telephone numbers.",
      url: "https://www.nanjingefg.com/contact-us",
      format: "Contact directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-06T00:00:00.000Z"),
  logo: "/supplier-assets/nanjing-efg-logo.png",
  contactEmail: "contact@njefg.com",
  contactPhone: "+86 25 5832 1911",
  address: "No. 20 Jiangjun Avenue, Nanjing, Jiangsu, China",
  website: "https://www.nanjingefg.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 14,
  viewCount: 0,
  capabilities: [
    "fiberglass tissue",
    "fiberglass mat",
    "polyester mat",
    "composite mat",
    "coated fiberglass facer",
    "acoustic panel facer",
    "insulation panel facer",
    "gypsum board facer",
    "waterproofing membrane carrier",
    "fiberglass mesh",
    "fiberglass tape",
    "fiberglass chopped strands",
    "custom nonwoven materials",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-06T00:00:00.000Z"),
  updatedAt: new Date("2026-08-06T00:00:00.000Z"),
};
