import type { SupplierListing } from "@/lib/db/schema";

export const NABALTEC_SHANGHAI_SUPPLIER_ID = "sup-nabaltec-shanghai";
export const NABALTEC_SHANGHAI_SUPPLIER_SLUG = "nabaltec-shanghai-flame-retardant-fillers";

// Curated from Nabaltec's current official company and product pages and the
// CCE N directory. The complete official Nabaltec wordmark and underline were
// downloaded from nabaltec.de on 2026-08-25 without cropping any logo element.
export const NABALTEC_SHANGHAI_SUPPLIER_PROFILE: SupplierListing = {
  id: NABALTEC_SHANGHAI_SUPPLIER_ID,
  name: "耐铝（上海）贸易有限公司",
  nameEn: "Nabaltec (Shanghai) Trading Co., Ltd.",
  slug: NABALTEC_SHANGHAI_SUPPLIER_SLUG,
  location: "上海浦东",
  locationEn: "Pudong, Shanghai, China",
  province: "上海",
  category: "additive",
  products: ["APYRAL 研磨氢氧化铝阻燃填料", "APYRAL 细沉淀氢氧化铝阻燃填料", "黏度优化氢氧化铝", "表面处理氢氧化铝", "APYRAL AOH 勃姆石", "ACTILOX 勃姆石功能填料", "NABALOX 软煅烧与硬煅烧氧化铝", "NABALOX 活性与超活性氧化铝", "导热及高纯氧化铝", "GRANALOX 92%–99% 喷雾干燥氧化铝陶瓷料"],
  productsEn: ["APYRAL ground aluminum-hydroxide flame-retardant fillers", "APYRAL fine-precipitated aluminum-hydroxide flame-retardant fillers", "Viscosity-optimized aluminum hydroxides", "Surface-treated aluminum hydroxides", "APYRAL AOH boehmite grades", "ACTILOX boehmite functional fillers", "NABALOX soft- and hard-calcined aluminas", "NABALOX reactive and super-reactive aluminas", "Thermally conductive and high-purity aluminas", "GRANALOX 92%–99% spray-dried alumina ceramic bodies"],
  processList: ["中国区产品销售与贸易协调", "无卤阻燃填料牌号初选", "粒径、表面处理和黏度等级匹配", "勃姆石耐温与电气应用选型", "氧化铝纯度和粒度分布选型", "陶瓷料成形路线匹配", "样品、TDS 与 SDS 协调", "批次文件与法规资料协调", "集团技术服务接口", "进口、交付与商业条款确认"],
  processListEn: ["China product sales and trading coordination", "Halogen-free flame-retardant filler grade screening", "Particle-size, surface-treatment and viscosity-grade matching", "Boehmite selection for thermal and electrical duties", "Alumina purity and particle-distribution selection", "Ceramic-body forming-route matching", "Sample, TDS and SDS coordination", "Batch-document and regulatory-data coordination", "Interface to group technical service", "Import, delivery and commercial-term confirmation"],
  established: null,
  verified: false,
  description: "耐铝（上海）贸易有限公司是 Nabaltec 官网列出的上海贸易公司。集团当前目录包括 APYRAL 氢氧化铝无卤阻燃填料、APYRAL AOH 与 ACTILOX 勃姆石、NABALOX 氧化铝和 GRANALOX 喷雾干燥陶瓷料；中国国际复材展 N 字母页支持上海展商主体与功能填料业务的对应。本页把上海公司定位为中国销售、贸易和技术资料协调窗口，不把德国或美国集团工厂的生产、产能、体系证书和研发资产自动归入上海法人，也不把填料应用推导为上海自产复材制品。",
  descriptionEn: "Nabaltec (Shanghai) Trading Co., Ltd. is the Shanghai trading company explicitly listed on Nabaltec's current official company page. The reviewed group catalog covers APYRAL ground, fine-precipitated, viscosity-optimized and surface-treated aluminum hydroxides for environmentally oriented flame-retardant systems; APYRAL AOH and ACTILOX boehmite functional fillers; NABALOX calcined, reactive, thermally conductive and high-purity aluminas; and GRANALOX spray-dried ceramic bodies. The China Composites Expo N directory independently supports the Shanghai exhibitor identity and functional-filler scope. GetFRP presents the Shanghai entity as a China sales, trading and technical-document interface. Production plants, capacity, management systems, certificates, R&D assets and guaranteed properties published for Nabaltec AG or other group sites are not automatically attributed to this Shanghai legal entity. Likewise, a filler's suitability for cable compounds, printed-circuit boards, thermoplastics, thermosets or ceramics does not mean that the Shanghai company manufactures those downstream composite products.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "询价时应先说明树脂或聚合物体系、阻燃机制、法规目标、颜色、电气和烟密度要求，再选择氢氧化铝或勃姆石；氧化铝与陶瓷料项目则应说明纯度、晶相、粒径分布、比表面积、烧结和成形路线。必须确认具体牌号、生产地、包装、批次 CoA、TDS/SDS、法规声明、样品和量产交期。上海主体是官网列出的贸易公司，报价、进口、开票、收款、售后和质量责任应在订单中逐项确认。",
  productsServicesSummaryEn: "Start an inquiry with the actual formulation and duty, not a generic request for a flame retardant or alumina. For aluminum hydroxide, identify the polymer or resin, halogen-free and smoke target, required loading, particle-size distribution, moisture, color, electrical performance, viscosity and processing route, plus whether a ground, fine-precipitated, viscosity-optimized or surface-treated APYRAL grade is required. For boehmite, state the PCB, battery, catalyst-carrier or other qualified use, temperature exposure, dielectric duty, particle and surface requirements, dispersion method and interaction with the remaining formulation. For NABALOX alumina or GRANALOX ceramic bodies, define chemical purity, alpha content or phase requirement, particle-size distribution and top cut, surface area, green forming method, binder system, spray-dried granule behavior, sintering profile, fired density, abrasion, thermal conductivity and final component acceptance. Request the exact current TDS and SDS, sample lot, typical versus guaranteed values, test methods, packing, storage, shelf life, country of origin, batch CoA example, change-control notice and regulatory declarations relevant to the destination market. The reviewed website lists Nabaltec (Shanghai) Trading Co., Ltd. as a Shanghai trading entity. Buyers should therefore confirm which group company manufactures each grade and which legal entity quotes, imports, invoices, receives payment, handles complaints and carries warranty or product-stewardship responsibility. A group certificate or manufacturing claim must be matched to the actual production site, grade, scope and validity before it becomes a purchase requirement; GetFRP consequently leaves certification fields empty. Qualification in a composite formulation should include controlled compounding and specimen preparation, dispersion and viscosity checks, mechanical and electrical testing, flame and smoke testing under the specified standard, thermal aging, moisture conditioning and an agreed production trial. Do not infer that the Shanghai trading company manufactures cable compounds, PCBs, resin systems, laminates or ceramic components merely because Nabaltec fillers are marketed for those downstream applications.",
  ecatalogs: [
    { title: "Nabaltec 上海主体", titleEn: "Nabaltec Company Locations", description: "官网列出的上海贸易公司名称和地址。", descriptionEn: "Official listing of the Shanghai trading entity and address.", url: "https://www.nabaltec.de/en/company", format: "Company page" },
    { title: "Nabaltec 产品总览", titleEn: "Nabaltec Product Overview", description: "氢氧化铝、勃姆石、氧化铝和陶瓷料入口。", descriptionEn: "Official entry for aluminum hydroxide, boehmite, alumina and ceramic bodies.", url: "https://www.nabaltec.de/en/products", format: "Product directory" },
    { title: "氢氧化铝", titleEn: "Aluminum Hydroxide", description: "APYRAL 产品类别。", descriptionEn: "Official APYRAL category and portfolio.", url: "https://www.nabaltec.de/en/products/aluminum-hydroxide", format: "Product category" },
    { title: "勃姆石", titleEn: "Boehmite", description: "APYRAL AOH 与 ACTILOX 牌号。", descriptionEn: "Official APYRAL AOH and ACTILOX portfolio.", url: "https://www.nabaltec.de/en/products/boehmite", format: "Product category" },
    { title: "氧化铝", titleEn: "Aluminum Oxide", description: "NABALOX 产品类别。", descriptionEn: "Official NABALOX alumina portfolio.", url: "https://www.nabaltec.de/en/products/aluminum-oxide", format: "Product category" },
    { title: "陶瓷料", titleEn: "Ceramic Bodies", description: "GRANALOX 产品类别。", descriptionEn: "Official GRANALOX ceramic-body portfolio.", url: "https://www.nabaltec.de/en/products/ceramic-bodies", format: "Product category" },
    { title: "中国国际复材展 N 字母页", titleEn: "China Composites Expo — N Directory", description: "上海展商主体与展品范围。", descriptionEn: "Organizer source for the Shanghai exhibitor and scope.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=N", format: "Exhibitor directory" },
  ],
  profilePublished: true, profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/nabaltec-shanghai-logo.svg",
  contactEmail: null, contactPhone: null,
  address: "88 Keyuan Road, Pudong, Shanghai 201203, China",
  website: "https://www.nabaltec.de/en/company", enterpriseId: null, scaleTier: null, brandPriority: 26, viewCount: 0,
  capabilities: ["flame-retardant filler distribution", "aluminum hydroxide", "boehmite", "special alumina", "ceramic bodies", "grade selection", "technical document coordination", "China trading support"],
  standardsSupported: [], moqKg: null, leadTimeDays: null, exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"), updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
