import type { SupplierListing } from "@/lib/db/schema";

export const RUNSING_SUPPLIER_ID = "sup-runsing";
export const RUNSING_SUPPLIER_SLUG = "shandong-runsing-composites";

// Curated from Runsing's official English company, product, quality and
// contact pages. Production, export, certification and performance statements
// remain company-published and unverified by GetFRP. The current official
// wordmark was downloaded from https://style.runsing.com/logo.gif; despite the
// URL suffix, the server supplies a PNG image, stored locally as
// public/supplier-assets/runsing-logo.png.
export const RUNSING_SUPPLIER_PROFILE: SupplierListing = {
  id: RUNSING_SUPPLIER_ID,
  name: "Shandong Runsing Composites Co., Ltd.",
  nameEn: "Shandong Runsing Composites Co., Ltd.",
  slug: RUNSING_SUPPLIER_SLUG,
  location: "山东潍坊",
  locationEn: "Weifang, Shandong, China",
  province: "山东",
  category: "manufacturer",
  products: [
    "房车、冷藏车、干货车及建筑用玻璃钢平板",
    "压花、防滑与装饰玻璃钢板",
    "XPS、PU、EPS、PET 泡沫及 PP 蜂窝芯玻璃钢夹芯板",
    "连续纤维增强热塑性复合材料（CFRT）板材",
    "碳纤维板及玻璃钢运动器材面板",
    "耐火玻璃纤维板、HPL 装饰板与玻璃钢采光板",
  ],
  productsEn: [
    "FRP flat sheets for RVs, refrigerated and dry-cargo trucks, buildings and industrial equipment",
    "Embossed, non-slip and decorative FRP panels",
    "FRP sandwich panels with XPS, PU, EPS, PET foam, PP honeycomb and wood cores",
    "Continuous fiber-reinforced thermoplastic (CFRT) sheets",
    "Carbon-fiber panels and composite sporting-goods panels",
    "Fire-resistant fiberglass sheets, HPL decorative panels and fiberglass skylight panels",
  ],
  processList: [
    "玻璃钢板材与层压板生产",
    "泡沫、蜂窝及木芯夹芯板复合",
    "高光、哑光、压花与防滑表面定制",
    "宽度、厚度、颜色及外观定制",
    "碳纤维预浸料铺层、模压与热压罐成型（官网公开）",
    "材料选型、应用指导、质量测试与售后技术支持",
  ],
  processListEn: [
    "FRP sheet and laminate production",
    "Foam-, honeycomb- and wood-core sandwich-panel bonding",
    "High-gloss, matte, embossed and non-slip surface customization",
    "Custom width, thickness, color and appearance",
    "Carbon-fiber prepreg lay-up, molding and autoclave processing (company-published)",
    "Material selection, application guidance, quality testing and after-sales technical support",
  ],
  established: 2010,
  verified: false,
  description:
    "Runsing 英文官网将企业标识为 Shandong Runsing Composites Co., Ltd.，并称其于 2010 年成立，在山东潍坊和安徽马鞍山设有工厂。官网公开产品覆盖玻璃钢平板、压花板、夹芯板、CFRT 板、夹芯芯材、碳纤维板、耐火玻纤板、HPL 板和玻璃钢采光板，主要面向房车、冷藏及物流车辆、建筑装饰、工业设备、船舶、农业和运动器材应用。",
  descriptionEn:
    "Runsing's official English website identifies the business as Shandong Runsing Composites Co., Ltd. and states that it was founded in 2010, with factories in Weifang, Shandong, and Ma'anshan, Anhui. Its published range covers FRP flat and embossed sheets, sandwich panels, CFRT sheets, sandwich cores, carbon-fiber panels, fire-resistant fiberglass sheets, HPL panels and fiberglass skylight panels for RV, refrigerated and logistics vehicles, building, industrial-equipment, marine, agricultural and sporting-goods applications.",
  certifications: [
    "近 10 款产品获得欧盟 CE 认证（企业官网公开；具体产品、证书号、范围与有效期需核验）",
    "ISO 9001 体系下的工厂内部测试系统（企业官网表述；认证主体、证书范围与有效期需核验）",
    "部分阻燃玻璃钢产品宣称达到 ASTM E84 Class A（企业官网公开；具体测试报告与样品结构需核验）",
  ],
  certificationsEn: [
    "EU CE certification for nearly ten products (company-published; confirm products, certificate numbers, scope and validity)",
    "Factory testing system described as ISO 9001-compliant (company-published; confirm certified entity, scope and validity)",
    "ASTM E84 Class A stated for selected flame-retardant FRP products (company-published; confirm the complete report and tested construction)",
  ],
  productsServicesSummary:
    "Runsing 官网称其两地工厂合计厂房面积超过 43,000 平方米、员工超过 300 人，玻璃钢板、夹芯板、装饰板、PP 蜂窝板和 XPS 板年产量合计约 500 万平方米，并称其出口占比为 70%–80%，已服务 20 多个国家的 300 多家客户。官网支持按项目选择面层与芯材，并定制宽度、厚度、颜色、光泽、纹理、阻燃和保温方案。以上产能、出口、认证与性能均为企业公开信息；采购方应针对报价型号核验材料结构、树脂体系、面层和芯材、尺寸公差、平整度、胶接体系、阻燃或保温报告、CE/ISO 文件、MOQ、交期、包装及质保条件。",
  productsServicesSummaryEn:
    "Runsing states that its two factories have more than 43,000 m² of plant space and over 300 workers, with combined annual output of approximately five million square meters across fiberglass, composite, decorative, PP-honeycomb and XPS panels. The company also publishes an export share of 70%–80% and says it has served more than 300 customers in over 20 countries. Its website offers project-specific selection of skins and cores plus customization of width, thickness, color, gloss, texture, fire performance and insulation. These capacity, export, certification and performance statements are company-published. Buyers should validate the offered construction, resin, facing and core, dimensional tolerance, flatness, adhesive system, fire or thermal reports, CE/ISO documents, MOQ, lead time, packaging and warranty for the quoted product.",
  ecatalogs: [
    {
      title: "Runsing 英文官网",
      titleEn: "Runsing Official English Website",
      description: "公司、产品、应用方案及出口联系方式总览。",
      descriptionEn:
        "Official overview of the company, product range, application solutions and export contacts.",
      url: "https://www.runsing.com/",
      format: "Official website",
    },
    {
      title: "Runsing 公司介绍",
      titleEn: "Runsing Company Profile",
      description: "官网公开的公司沿革、工厂、产能、研发、市场与服务信息。",
      descriptionEn:
        "Official company history and published factory, capacity, R&D, market and service information.",
      url: "https://www.runsing.com/aboutus.html",
      format: "Company profile",
    },
    {
      title: "Runsing 产品目录",
      titleEn: "Runsing Product Directory",
      description: "玻璃钢板、夹芯板、CFRT、芯材、碳纤维板及其他板材产品入口。",
      descriptionEn:
        "Official directory for FRP sheets, sandwich panels, CFRT, cores, carbon-fiber panels and related panel products.",
      url: "https://www.runsing.com/products.html",
      format: "Product directory",
    },
    {
      title: "玻璃钢平板产品目录",
      titleEn: "FRP Flat Sheet Directory",
      description: "房车、冷藏车、干货车及其他应用的平板产品与定制信息。",
      descriptionEn:
        "Official flat-sheet range for RVs, refrigerated and dry-cargo trucks and other applications.",
      url: "https://www.runsing.com/supplier-4794778-frp-flat-sheet",
      format: "Product directory",
    },
    {
      title: "玻璃钢夹芯板产品目录",
      titleEn: "FRP Sandwich Panel Directory",
      description: "PP 蜂窝、XPS、PET、EPS、PVC 泡沫及木芯夹芯板产品。",
      descriptionEn:
        "Official sandwich-panel range covering PP honeycomb, XPS, PET, EPS and PVC foam and wood cores.",
      url: "https://www.runsing.com/supplier-4794789-frp-sandwich-panels",
      format: "Product directory",
    },
    {
      title: "Runsing 联系方式",
      titleEn: "Runsing Contact Directory",
      description: "上海办公地址、山东工厂地址、电话与联系入口。",
      descriptionEn:
        "Official Shanghai office and Shandong factory addresses, telephone and contact channel.",
      url: "https://www.runsing.com/contactus.html",
      format: "Contact directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-05T00:00:00.000Z"),
  logo: "/supplier-assets/runsing-logo.png",
  contactEmail: "skyseafly@runsing.com",
  contactPhone: "+86 21 3369 3040",
  address:
    "Factory: No. 148 Kunlun Street, Xin'an Subdistrict, Anqiu, Weifang, Shandong 262100, China; sales office: No. 1958 Qianming Road, Fengjing, Jinshan District, Shanghai 201501, China",
  website: "https://www.runsing.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 20,
  viewCount: 0,
  capabilities: [
    "FRP flat sheet",
    "embossed FRP panels",
    "FRP sandwich panels",
    "CFRT sheets",
    "foam and honeycomb cores",
    "carbon fiber panels",
    "fire-resistant fiberglass sheets",
    "HPL panels",
    "fiberglass skylight panels",
    "custom composite panels",
  ],
  standardsSupported: ["ASTM E84"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-05T00:00:00.000Z"),
  updatedAt: new Date("2026-08-05T00:00:00.000Z"),
};
