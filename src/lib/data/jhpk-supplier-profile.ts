import type { SupplierListing } from "@/lib/db/schema";

export const JHPK_SUPPLIER_ID = "sup-jhpk";
export const JHPK_SUPPLIER_SLUG = "beijing-jinghua-parker";

// Curated from JHPK's current official English home, company-history,
// product and service pages, with the Chinese legal identity and Beijing /
// Handan operating footprint cross-checked against the company's official
// Chinese site. The official sites use more than one English translation of
// the legal name; this profile follows the "Beijing Jinghua Parker
// Polymerization Machinery Equipment" form published by the current English
// site while preserving the Chinese legal name verbatim. Factory scale,
// export, market-share, patent and conformity statements remain
// company-published and unverified by GetFRP. The locally stored logo is the
// current JHPK header wordmark served by the official jhpk.com.cn homepage:
// https://img.website.xin/contents/sitefiles3607/18039045/images/8581012.png
export const JHPK_SUPPLIER_PROFILE: SupplierListing = {
  id: JHPK_SUPPLIER_ID,
  name: "北京京华派克聚合机械设备有限公司",
  nameEn:
    "Beijing Jinghua Parker Polymerization Machinery Equipment Co., Ltd.",
  slug: JHPK_SUPPLIER_SLUG,
  location: "北京及河北邯郸",
  locationEn: "Beijing and Handan, Hebei, China",
  province: "北京",
  category: "equipment",
  products: [
    "聚氨酯树脂拉挤与缠绕注胶设备 JHPK-G20A",
    "高压 HP-RTM 与 RTM 注射设备",
    "高压聚氨酯与聚脲喷涂、灌注设备",
    "湿法模塑双组分注射设备",
    "纤维喷射与自动化双组分喷涂系统",
    "喷涂/灌注枪、供料泵、加热保温管路及配套附件",
  ],
  productsEn: [
    "JHPK-G20A resin-injection equipment for pultrusion machines and winding lines",
    "High-pressure HP-RTM and RTM injection equipment",
    "High-pressure polyurethane and polyurea spray/injection equipment",
    "Two-component wet-molding injection equipment",
    "Filament-spray and automated two-component spray systems",
    "Spray/injection guns, feed pumps, heated hoses and auxiliary equipment",
  ],
  processList: [
    "复材注胶与双组分流体设备设计",
    "机加工零部件与设备装配",
    "数字控制、计量、加热与压力系统集成",
    "质量检验、整机调试与出口包装",
    "远程技术支持、安装培训与售后服务",
  ],
  processListEn: [
    "Composite-injection and two-component fluid-equipment design",
    "Component machining and machine assembly",
    "Digital control, metering, heating and pressure-system integration",
    "Quality inspection, machine commissioning and export packing",
    "Remote technical support, installation training and after-sales service",
  ],
  established: 2003,
  verified: false,
  description:
    "北京京华派克聚合机械设备有限公司以 JHPK 品牌开发和制造聚氨酯、聚脲及复合材料工艺设备。公司中英文官网称 JHPK 于 2003 年在北京成立，2017 年在河北邯郸投用生产基地；当前产品范围包括高压喷涂/灌注设备、HP-RTM/RTM 注射设备、聚氨酯树脂拉挤与缠绕注胶系统、湿法模塑设备、纤维喷射系统及枪、泵、加热管路等配件。官网发布的厂区规模、市场份额、专利和海外销售数据属于企业公开信息，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Beijing Jinghua Parker Polymerization Machinery Equipment Co., Ltd., trading as JHPK, develops and manufactures polyurethane, polyurea and composite-processing equipment. The company's official Chinese and English sites state that JHPK was established in Beijing in 2003 and opened its Handan, Hebei production base in 2017. The current portfolio covers high-pressure spray/injection equipment, HP-RTM and RTM injection systems, polyurethane-resin pultrusion and winding injection equipment, wet-molding equipment, filament-spray systems, and supporting guns, pumps and heated hoses. Published factory-scale, market-share, patent and overseas-sales figures are company statements and have not been independently verified by GetFRP.",
  certifications: [
    "ISO 9000 质量管理体系（企业官网表述；需核验确切标准、现行证书、持证主体、场地、范围与有效期）",
    "CE 合规声明（企业官网称产品系列符合 CE 要求；需按具体设备型号核验声明、适用指令、协调标准与技术文件）",
  ],
  certificationsEn: [
    "ISO 9000 quality-management system (company-published wording; confirm the exact standard, current certificate, holder, site, scope and validity)",
    "CE conformity (company states that its product range meets CE requirements; confirm the model-specific declaration, applicable directives, harmonized standards and technical file)",
  ],
  productsServicesSummary:
    "JHPK 当前英文官网把 HP-RTM/RTM 注射、拉挤注胶、湿法模塑注射与纤维喷射列为主要设备类别。JHPK-G20A 页面将该系统描述为聚氨酯型材拉挤及缠绕生产线的配套注胶设备，并公开电驱动、数字控制、按拉挤速度调节出料量及针对含填料体系的设计信息。服务页称主要型号可快速发货、出口设备提供包装，并提供收费安装培训、一年整机质保及长期电话和视频在线支持；具体条款应以报价和合同为准。采购方应按目标工艺核验树脂体系、双组分比例、黏度和填料、流量与压力范围、温控精度、混合/清洗方式、与模具或产线的接口、控制与安全架构、当地电气规范、FAT/SAT、备件、软件与电气图纸、安装责任、培训语言、质保除外项及型号级 CE 技术文件。",
  productsServicesSummaryEn:
    "JHPK's current English site groups its composite-relevant machinery under HP-RTM/RTM injection, pultrusion injection, wet-molding injection and filament-spray equipment. The JHPK-G20A page describes a complementary injection system for polyurethane-profile pultrusion and winding lines, publishing electric drive, digital control, output adjustment against pultrusion speed and design features for filled material systems. The service page states that selected models can ship quickly, exported equipment receives packing, chargeable installation and training are available, and the complete machine carries a one-year warranty with ongoing telephone and video support; commercial terms require confirmation in the quotation and contract. Buyers should qualify the resin chemistry, component ratio, viscosity and filler content, flow and pressure range, temperature-control accuracy, mixing and cleaning method, mold or line interfaces, control and safety architecture, destination electrical code, FAT/SAT, spares, software and electrical documentation, installation responsibility, training language, warranty exclusions and model-specific CE technical file.",
  ecatalogs: [
    {
      title: "JHPK 英文官网",
      titleEn: "JHPK Official English Website",
      description: "当前产品分类、企业公开规模信息、联系方式及官方 JHPK 品牌标识。",
      descriptionEn:
        "Current product categories, company-published scale information, contact details and the official JHPK brand identity.",
      url: "https://jhpk.com.cn/",
      format: "Official website",
    },
    {
      title: "JHPK 公司历史",
      titleEn: "JHPK Company History",
      description: "企业从 1988 年行业经历、2003 年设立到邯郸生产基地及海外销售的官网时间线。",
      descriptionEn:
        "Official timeline covering the founder's industry history, JHPK's 2003 establishment, the Handan production base and overseas sales statements.",
      url: "https://jhpk.com.cn/whojhpkare",
      format: "Company profile",
    },
    {
      title: "JHPK-G20A 拉挤与缠绕注胶设备",
      titleEn: "JHPK-G20A Pultrusion and Winding Injection Equipment",
      description: "聚氨酯型材拉挤及缠绕生产线配套注胶系统的官网产品介绍。",
      descriptionEn:
        "Official product page for a polyurethane-profile pultrusion and winding injection system.",
      url: "https://jhpk.com.cn/productinfo/1148453.html",
      format: "Product page",
    },
    {
      title: "JHPK-HY3 高压喷涂/注射设备",
      titleEn: "JHPK-HY3 High-Pressure Spray/Injection Equipment",
      description: "高压聚氨酯喷涂、注射及 RTM 应用的企业产品说明。",
      descriptionEn:
        "Company-published product information for high-pressure polyurethane spray, injection and RTM applications.",
      url: "https://jhpk.com.cn/productinfo/1148798.html",
      format: "Product page",
    },
    {
      title: "JHPK 服务说明",
      titleEn: "JHPK Service Guide",
      description: "发货、出口包装、安装培训、质保及远程技术支持的官网说明。",
      descriptionEn:
        "Official service statements covering dispatch, export packing, installation training, warranty and remote technical support.",
      url: "https://jhpk.com.cn/service",
      format: "Service guide",
    },
    {
      title: "京华派克中文产品中心",
      titleEn: "Jinghua Parker Chinese Product Center",
      description: "中文官网发布的设备型号、复材注胶系统及公司联系方式。",
      descriptionEn:
        "Official Chinese directory for equipment models, composite injection systems and company contact information.",
      url: "https://www.jhpk.net/product.html",
      format: "Product directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-12T00:00:00.000Z"),
  logo: "/supplier-assets/jhpk-logo.png",
  contactEmail: "info@jhpk.net",
  contactPhone: "+86 138 0120 0210",
  address:
    "13th Floor, Building 13, Greenland Sailing International, Daxing District, Beijing, China",
  website: "https://jhpk.com.cn/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "polyurethane pultrusion injection equipment",
    "polyurethane winding injection equipment",
    "HP-RTM injection equipment",
    "RTM injection equipment",
    "wet-molding injection equipment",
    "polyurethane and polyurea spray equipment",
    "filament-spray equipment",
    "two-component metering and mixing",
    "spray and injection guns",
    "feed pumps and heated hoses",
    "equipment commissioning and training",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-12T00:00:00.000Z"),
  updatedAt: new Date("2026-08-12T00:00:00.000Z"),
};
