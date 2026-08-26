import type { SupplierListing } from "@/lib/db/schema";

export const NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_ID = "sup-nanya-electronic-materials-kunshan";
export const NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_SLUG = "nanya-electronic-materials-kunshan-glass-fabric";

// Curated from Nan Ya's current mainland facility and product pages and the CCE
// N directory. The complete official device, Chinese wordmark and NAN YA
// PLASTICS baseline were downloaded from nypc.com.cn without cropping.
export const NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_PROFILE: SupplierListing = {
  id: NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_ID,
  name: "南亚电子材料（昆山）有限公司",
  nameEn: "Nan Ya Electronic Materials (Kunshan) Co., Ltd.",
  slug: NANYA_ELECTRONIC_KUNSHAN_SUPPLIER_SLUG,
  location: "江苏昆山",
  locationEn: "Kunshan, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: ["7628、2116 与 1080 电子级玻璃纤维布", "106、1035、1067 与 1078 轻型电子玻纤布", "1000、1017、1015 超薄电子玻纤布", "1027、1024、1037 与 1030 超薄电子玻纤布", "低介电 1078、2116、2113 与 3313 玻纤布", "EL127 液态双酚 A 型环氧树脂", "NP-175FM 高 Tg 低 CTE 覆铜板", "NP-150 多功能覆铜板", "FR-4-86 UV Block 耐燃覆铜板", "CEM-3-09HT 导热复合覆铜板", "一般覆铜板与布/席组合覆铜板", "超薄铜箔"],
  productsEn: ["7628, 2116 and 1080 electronic glass-fiber fabrics", "106, 1035, 1067 and 1078 lightweight electronic glass fabrics", "1000, 1017 and 1015 ultra-thin electronic glass fabrics", "1027, 1024, 1037 and 1030 ultra-thin electronic glass fabrics", "Low-dielectric 1078, 2116, 2113 and 3313 glass fabrics", "EL127 liquid bisphenol-A epoxy resin", "NP-175FM high-Tg low-CTE copper-clad laminate", "NP-150 multifunctional copper-clad laminate", "FR-4-86 UV Block flame-resistant copper-clad laminate", "CEM-3-09HT thermal-conductive composite CCL", "General and fabric/mat composite copper-clad laminates", "Ultra-thin copper foil"],
  processList: ["电子级玻纤布生产", "经纬密度、克重与厚度控制", "高开纤与低中空玻纤布配置", "超薄玻纤布生产", "低介电玻纤布生产", "液态双酚 A 环氧树脂生产", "覆铜板制造", "铜箔生产", "昆山厂产品销售与技术协调", "牌号、批次和质量文件管理"],
  processListEn: ["Electronic glass-fabric production", "Warp/fill count, areal-weight and thickness control", "Open-weave and low-void glass-fabric configuration", "Ultra-thin glass-fabric production", "Low-dielectric glass-fabric production", "Liquid bisphenol-A epoxy-resin production", "Copper-clad laminate manufacturing", "Copper-foil production", "Kunshan-site product sales and technical coordination", "Grade, batch and quality-document management"],
  established: 2000,
  verified: false,
  description: "南亚塑胶大陆官网将南亚电子材料（昆山）有限公司列为 2000 年 8 月成立的昆山厂，主要产品为覆铜板、环氧树脂、玻纤布和铜箔，并给出四类产品分机。官网产品页公开 7628、2116、1080 等通用电子布，1000/1017/1027 等超薄布和低介电布，以及 EL127 液态双酚 A 环氧树脂与多种 CCL；中国国际复材展 N 字母页第 2 页列出该主体。本页不把同官网另列法人的必成玻璃纤维（昆山）原纱和短切纤维业务归入南亚电子材料昆山。",
  descriptionEn: "Nan Ya's current mainland website identifies Nan Ya Electronic Materials (Kunshan) Co., Ltd. as a Kunshan facility established in August 2000 with four principal product groups: copper-clad laminate, epoxy resin, glass fabric and copper foil. Its official product pages publish general electronic glass fabrics including 7628, 2116 and 1080; ultra-thin 1000, 1017, 1027 and related styles; low-dielectric glass fabrics; EL127 liquid bisphenol-A epoxy resin; and several rigid and composite CCL families. The second page of the China Composites Expo N directory independently lists the same exhibitor. The reviewed mainland facility page separately identifies Bisheng Fiberglass (Kunshan) as another legal entity for electronic glass yarn and chopped strands. GetFRP therefore does not attribute raw glass yarn or chopped-strand production to Nan Ya Electronic Materials (Kunshan), even where the wider group describes vertical integration.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "电子玻纤布询价需指定 IPC/企业布号、纱线、经纬密度、克重、厚度、幅宽、开纤、上浆、卷长、接头、缺陷和包装，并针对 PCB、IC 载板、HDI 或低介电用途定义 Dk/Df、CAF 与层压验证。环氧树脂需规定牌号、黏度、环氧当量、颜色、水分、离子杂质、固化剂和应用；CCL/铜箔需使用独立完整规范。官网列出体系认证文字，但在证书主体、昆山场地、产品范围和有效期逐项匹配前，验证字段保持为空。",
  productsServicesSummaryEn: "For electronic glass fabric, specify the exact style and controlled revision rather than asking for generic fiberglass cloth. Define yarn nomenclature in warp and fill, count per inch, nominal and tolerance for areal weight and thickness, width, roll length, selvage, finish or sizing, open-weave requirement, filament spreading, hollow or metal-fiber defect controls, joints, visual-defect map, packaging and storage. For ultra-thin or low-dielectric styles, add target Dk and Df at the stated frequency and method, moisture conditioning, thickness distribution, dimensional stability, thermal expansion, tensile behavior, resin wet-out, CAF-related qualification and laminate or PCB process conditions. Qualification should use the actual intended resin, treatment, lamination cycle, copper construction and board design. For EL127 liquid bisphenol-A epoxy resin, define epoxy equivalent, viscosity and test temperature, color, moisture, hydrolyzable chlorine and ionic impurities where relevant, storage and shelf life, packaging, hardener and accelerator, mix ratio, cure and post-cure, Tg, electrical, mechanical, adhesion, chemical and process requirements. CCL and copper foil require separate controlled specifications for construction, resin system, glass styles, copper thickness and treatment, Tg, CTE, thermal reliability, peel strength, dielectric behavior, drilling and PCB acceptance; a glass-fabric style is not interchangeable with a finished CCL grade. Request current TDS/SDS, product and site declaration, CoA example, lot definition, traceability, change notification and retained-sample policy. The facility page mentions management-system certifications, but GetFRP leaves certification arrays empty until current documents are matched to Nan Ya Electronic Materials (Kunshan), the Changjiang South Road site, product scope and validity. The same official mainland website lists Bisheng Fiberglass (Kunshan) separately for glass yarn and chopped strands. Buyers must not use wider group vertical-integration language to assume that these raw-fiber products are manufactured or sold by the Nan Ya Electronic Materials legal entity without written confirmation of manufacturer, seller, invoice, origin and quality responsibility.",
  ecatalogs: [
    { title: "南亚电子材料昆山厂", titleEn: "Nan Ya Electronic Materials Kunshan Facility", description: "主体、成立年月、四类产品和联系分机。", descriptionEn: "Official entity, establishment date, four product groups and contacts.", url: "https://www.nypc.com.cn/j2nc/zhcn/facilities_KS.jsp", format: "Facility page" },
    { title: "大陆产品索引", titleEn: "Mainland Product Index", description: "覆铜板、铜箔、环氧树脂和玻纤布入口。", descriptionEn: "Official mainland CCL, foil, epoxy and glass-fabric index.", url: "https://www.nypc.com.cn/j2nc/zhcn/prodindex", format: "Product directory" },
    { title: "电子级玻纤布", titleEn: "Electronic Glass Fabrics", description: "通用、超薄和低介电布号与规格。", descriptionEn: "Official general, ultra-thin and low-dielectric styles and specifications.", url: "https://www.nypc.com.cn/j2nc/zhcn/prod/Electronic%20Glass%20Fabrics", format: "Product page" },
    { title: "液态双酚 A 环氧树脂", titleEn: "Liquid Bisphenol-A Epoxy Resin", description: "EL127 产品与应用说明。", descriptionEn: "Official EL127 product and application page.", url: "https://www.nypc.com.cn/j2nc/zhcn/prod/Liquid%20Bisphenol-A%20%20Epoxy%20Resin", format: "Product page" },
    { title: "覆铜板产品索引", titleEn: "Copper-Clad Laminate Index", description: "NP、FR-4 和 CEM-3 等产品入口。", descriptionEn: "Official NP, FR-4 and CEM-3 product entry.", url: "https://www.nypc.com.cn/j2nc/zhcn/prodindex?dc_btn_0=Func_Prodlist&dc_cateid_0=P_D_001", format: "Product category" },
    { title: "中国国际复材展 N 字母页（第 2 页）", titleEn: "China Composites Expo — N Directory, Page 2", description: "南亚电子材料昆山展商记录。", descriptionEn: "Organizer source for the Nan Ya Electronic Materials Kunshan exhibitor.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=30&head=N", format: "Exhibitor directory" },
  ],
  profilePublished: true, profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/nanya-electronic-kunshan-logo.png",
  contactEmail: null, contactPhone: "+86 512 5735 7080",
  address: "No. 201 Changjiang South Road, Kunshan Economic and Technological Development Zone, Jiangsu 215300, China",
  website: "https://www.nypc.com.cn/j2nc/zhcn/facilities_KS.jsp", enterpriseId: null, scaleTier: null, brandPriority: 28, viewCount: 0,
  capabilities: ["electronic glass fabrics", "ultra-thin glass fabrics", "low-dielectric glass fabrics", "liquid epoxy resin", "copper-clad laminates", "copper foil", "style and batch control", "PCB material support"],
  standardsSupported: [], moqKg: null, leadTimeDays: null, exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"), updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
