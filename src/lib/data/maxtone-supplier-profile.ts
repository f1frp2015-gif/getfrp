import type { SupplierListing } from "@/lib/db/schema";

export const MAXTONE_SUPPLIER_ID = "sup-maxtone-panel";
export const MAXTONE_SUPPLIER_SLUG = "yangzhou-maxtone-composite";

// Curated from Maxtone's official English company, product, FAQ, service,
// assembly and contact pages. Capacity, certification, performance and lead-
// time statements remain company-published and unverified by GetFRP. The
// Chinese legal name was cross-checked against public company-registration
// records. Official logo source:
// https://www.maxtonepanel.com/uploads/202132037/logo202104080939019147866.png
export const MAXTONE_SUPPLIER_PROFILE: SupplierListing = {
  id: MAXTONE_SUPPLIER_ID,
  name: "扬州麦斯通复合材料有限公司",
  nameEn: "Yangzhou MAXTONE Composite Co., Ltd.",
  slug: MAXTONE_SUPPLIER_SLUG,
  location: "江苏扬州",
  locationEn: "Yangzhou, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "玻璃钢平板与胶衣面板",
    "酚醛防水胶合板、PP 蜂窝、PU、XPS 与 PET 泡沫芯玻璃钢夹芯板",
    "冷藏、保温及干货车厢面板与 CKD 车身套件",
    "房车、露营车及特种车辆用复合车身板",
    "PP 蜂窝芯材与热塑性蜂窝板",
    "铝板或不锈钢面层复合夹芯板",
  ],
  productsEn: [
    "FRP composite and sandwich panels",
    "Gel-coated FRP flat sheets",
    "FRP panels with phenolic-plywood, PP-honeycomb, PU, XPS and PET-foam cores",
    "Refrigerated, insulated and dry-freight truck-body panels and CKD kits",
    "Composite body panels for RVs, caravans and special-purpose vehicles",
    "PP honeycomb cores, thermoplastic honeycomb panels, and aluminum- or stainless-steel-faced panels",
  ],
  processList: [
    "玻璃钢平板连续化生产",
    "夹芯板真空高压复合",
    "按应用选配玻璃钢、铝或不锈钢面层及多种芯材",
    "尺寸、厚度、颜色与表面效果定制",
    "CKD 车身套件下料、图纸与装配指导",
    "超长及超宽板材出口包装与运输方案支持",
  ],
  processListEn: [
    "Continuous FRP flat-sheet production",
    "High-vacuum pressure bonding of composite sandwich panels",
    "Application-specific selection of FRP, aluminum or stainless-steel skins and multiple core materials",
    "Custom dimensions, thicknesses, colors and surface finishes",
    "Cut-to-size CKD body kits with drawings and assembly guidance",
    "Export packing and transport planning for oversize panels",
  ],
  established: 1996,
  verified: false,
  description:
    "扬州麦斯通复合材料有限公司（MAXTONE / MTC）官网称其自 1996 年起生产玻璃钢复合板与玻璃钢平板，并为浙江华正新材料股份有限公司（上交所代码 603186）的全资子公司。企业公开产品聚焦玻璃钢夹芯板、平板、PP 蜂窝芯材，以及冷藏、保温、干货运输和房车应用的车身面板与 CKD 套件。",
  descriptionEn:
    "Yangzhou MAXTONE Composite Co., Ltd. (MTC) states that it has manufactured fiberglass composite panels and FRP sheets since 1996 and is a wholly owned subsidiary of Shanghai-listed Zhejiang Wazam New Materials Co., Ltd. (603186). Its published range focuses on FRP sandwich panels and flat sheets, PP honeycomb materials, and body panels or CKD kits for refrigerated, insulated and dry-freight vehicles, RVs and caravans.",
  certifications: [
    "ISO 9001（企业官网公开；认证主体、标准版本、证书范围与有效期需核验）",
  ],
  certificationsEn: [
    "ISO 9001 (company-published; confirm the certified entity, standard edition, certificate scope and validity)",
  ],
  productsServicesSummary:
    "麦斯通官网 FAQ 称工厂面积为 53,292 平方米、员工 130 人，不同类型玻璃钢夹芯板年产能约 600,000 平方米。企业提供玻璃钢/胶合板、PP 蜂窝、PU、XPS 与 PET 泡沫等面层和芯材组合；公开定制范围最大约 16.5 米长、3 米宽，厚度可在 15–130 毫米范围内按结构调整。官网称常规订单在图纸确认后交期通常为 20–30 天，库存标准品可更快，并支持 EXW、FOB、CNF、CIF 以及整柜、开顶柜、拼箱和部分超长货物滚装运输。以上参数、产能、交期、质保与认证均为企业自述；采购方应按报价结构核验面层厚度与树脂体系、芯材类型和密度、胶接体系、平整度与尺寸公差、保温/阻燃/食品接触报告、装配图、包装、MOQ、交期及现行 ISO 证书。",
  productsServicesSummaryEn:
    "Maxtone's official FAQ states that the factory covers 53,292 m², employs 130 people and can produce 600,000 square meters of fiberglass sandwich panels per year. Published constructions combine FRP skins with waterproof phenolic plywood, PP honeycomb, PU, XPS or PET foam, with selected aluminum or stainless-steel facings also available. The company lists custom dimensions up to approximately 16.5 m long by 3 m wide and construction-dependent thicknesses from 15 to 130 mm. It states a typical 20–30-day lead time after drawing confirmation, faster dispatch for stocked standard products, EXW/FOB/CNF/CIF terms, and GP, HC, open-top, LCL or selected roll-on/roll-off transport options. These specifications, capacity, timing, warranty and certification statements are company-published. Buyers should validate the quoted skin thickness and resin, core type and density, adhesive system, flatness and dimensional tolerances, thermal/fire/food-contact reports, assembly drawings, packaging, MOQ, lead time and current ISO certificate.",
  ecatalogs: [
    {
      title: "麦斯通英文官网",
      titleEn: "Maxtone Official English Website",
      description: "公司、热门产品、应用与出口联系方式总览。",
      descriptionEn:
        "Official overview of the company, principal products, applications and export contact details.",
      url: "https://www.maxtonepanel.com/",
      format: "Official website",
    },
    {
      title: "麦斯通公司介绍",
      titleEn: "Maxtone Company Profile",
      description: "企业沿革、股东背景、生产方式、质量体系与出口市场介绍。",
      descriptionEn:
        "Official company history and published ownership, manufacturing, quality-system and export-market information.",
      url: "https://www.maxtonepanel.com/about-us",
      format: "Company profile",
    },
    {
      title: "麦斯通产品目录",
      titleEn: "Maxtone Product Directory",
      description: "玻璃钢平板、夹芯板、保温板和车身面板产品入口。",
      descriptionEn:
        "Official directory for FRP sheets, sandwich and insulated panels, and truck-body panels.",
      url: "https://www.maxtonepanel.com/products",
      format: "Product directory",
    },
    {
      title: "麦斯通常见问题",
      titleEn: "Maxtone Sourcing FAQ",
      description: "工厂、产能、定制尺寸、MOQ、交期、贸易条款与运输方式说明。",
      descriptionEn:
        "Company-published factory, capacity, customization, MOQ, lead-time, trade-term and shipping information.",
      url: "https://www.maxtonepanel.com/faq",
      format: "Sourcing guide",
    },
    {
      title: "车身装配说明",
      titleEn: "Truck-body Assembly Instructions",
      description: "干货、保温与冷藏车厢 CKD 装配指导入口。",
      descriptionEn:
        "Official assembly-guidance entry for dry-freight, insulated and refrigerated van bodies.",
      url: "https://www.maxtonepanel.com/assembly-instructions",
      format: "Assembly guide",
    },
    {
      title: "麦斯通联系方式",
      titleEn: "Maxtone Contact Directory",
      description: "扬州工厂地址、电话、邮箱与询盘入口。",
      descriptionEn:
        "Official Yangzhou factory address, telephone, email and inquiry channel.",
      url: "https://www.maxtonepanel.com/contact-us",
      format: "Contact directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/maxtone-logo.png",
  contactEmail: "maxtonesales@hzccl.com",
  contactPhone: "+86 189 5259 7210",
  address:
    "No. 7 Xinyi Road, Weiyang Development Zone, Yangzhou, Jiangsu 225008, China",
  website: "https://www.maxtonepanel.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 19,
  viewCount: 0,
  capabilities: [
    "FRP flat sheets",
    "FRP sandwich panels",
    "FRP plywood panels",
    "FRP honeycomb panels",
    "PU and XPS foam panels",
    "truck-body panels",
    "refrigerated and insulated CKD bodies",
    "RV and caravan body panels",
    "PP honeycomb cores and panels",
    "custom composite panels",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: 30,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
