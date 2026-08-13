import type { SupplierListing } from "@/lib/db/schema";

// Reuses the supplier identity from scripts/seed-china-supply-chain-v3.ts so
// production database rows receive the reviewed Git-backed homepage content.
export const FEILIHUA_SUPPLIER_ID = "gf-hubei-fiberglass";
export const FEILIHUA_SUPPLIER_SLUG = "hubei-feilihua-quartz-glass";

// Curated from Feilihua's official English company, product, quality and
// contact pages, with business-scope cross-checks against its 2024 annual
// report filed with the Shenzhen Stock Exchange. The 1966 date is the
// operating history published by the company; the current company was
// restructured as a limited-liability company in 1999. The locally stored
// official logo was downloaded on 2026-08-12 from the current English-site
// header asset:
// https://www.feilihua.com/uploadfiles/2020/07/20200701095215248.png
// Company-published product, certification and application claims remain
// unverified by GetFRP.
export const FEILIHUA_SUPPLIER_PROFILE: SupplierListing = {
  id: FEILIHUA_SUPPLIER_ID,
  name: "湖北菲利华石英玻璃股份有限公司",
  nameEn: "Hubei Feilihua Quartz Glass Co., Ltd.",
  slug: FEILIHUA_SUPPLIER_SLUG,
  location: "湖北荆州",
  locationEn: "Jingzhou, Hubei, China",
  province: "湖北",
  category: "fiber",
  products: [
    "石英纤维纱与石英纤维织物",
    "空心石英纤维纱与织物",
    "石英纤维编织制品与立体编织预制件",
    "石英纤维增强复合材料及制品",
    "半导体用气熔、电熔与不透明石英玻璃材料",
    "合成石英、石英晶圆及光纤制造用石英器件",
  ],
  productsEn: [
    "Quartz-fiber yarns and fabrics",
    "Hollow quartz-fiber yarns and fabrics",
    "Quartz-fiber woven products and three-dimensional braided preforms",
    "Quartz-fiber-reinforced composite materials and products",
    "Flame-fused, electric-fused and opaque quartz glass for semiconductor processing",
    "Synthetic quartz, quartz wafers and quartz components for optical-fiber manufacturing",
  ],
  processList: [
    "气熔、电熔与合成石英玻璃制造",
    "石英玻璃精密加工与器件制造",
    "石英纤维拉丝与纱线制造",
    "石英纤维织造与立体编织",
    "石英纤维复合材料研发与制造",
  ],
  processListEn: [
    "Flame-fused, electric-fused and synthetic quartz-glass production",
    "Precision machining and fabrication of quartz-glass components",
    "Quartz-fiber drawing and yarn production",
    "Quartz-fiber weaving and three-dimensional braiding",
    "Quartz-fiber composite development and manufacturing",
  ],
  established: 1966,
  verified: false,
  description:
    "湖北菲利华石英玻璃股份有限公司位于湖北荆州，其官网将企业沿革追溯至 1966 年成立的沙市石英玻璃厂，1999 年改制为有限责任公司，并于 2014 年在深圳证券交易所创业板上市（股票代码 300395）。公司官网称其在荆州、潜江、上海、合肥、泰兴和济南设有六个生产基地，并形成石英玻璃材料及制品、石英纤维材料、织物和复合材料的一体化制造体系。其 2024 年年度报告披露的主营业务包括石英玻璃材料、石英玻璃制品、石英玻璃纤维材料以及复合材料及制品的制造与销售。上述产品、基地及体系信息均为企业公开披露，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Hubei Feilihua Quartz Glass Co., Ltd. is based in Jingzhou, Hubei. Its official history traces the business to the Shashi Quartz Glass Factory established in 1966, records restructuring as a limited-liability company in 1999, and notes its 2014 listing on the Shenzhen Stock Exchange GEM under stock code 300395. Feilihua's English site states that it operates six manufacturing bases in Jingzhou, Qianjiang, Shanghai, Hefei, Taixing and Jinan and describes an integrated chain spanning quartz-glass materials and components, quartz-fiber materials and fabrics, and composite materials. Its 2024 annual report defines the core business as the manufacture and sale of quartz-glass materials, quartz-glass products, quartz-glass-fiber materials, and composite materials and products. These product, site and system statements are company-published and have not been independently verified by GetFRP.",
  certifications: [
    "ISO 9001（企业官网发布；采购方应核验现行证书、法律主体、生产地址及范围）",
    "ISO 14001（企业官网发布；采购方应核验现行证书、法律主体、生产地址及范围）",
    "OHSAS 18001（企业官网仍使用该表述；采购方应确认是否已迁移至 ISO 45001）",
    "CNAS 实验室信息（官网质量栏目展示；应核验现行认可证书、编号及项目范围）",
  ],
  certificationsEn: [
    "ISO 9001 (company-published; confirm the current certificate, legal holder, site and scope)",
    "ISO 14001 (company-published; confirm the current certificate, legal holder, site and scope)",
    "OHSAS 18001 (still stated on the company site; confirm whether the system has migrated to ISO 45001)",
    "CNAS laboratory information (displayed in the official quality section; confirm the current accreditation certificate, number and test scope)",
  ],
  productsServicesSummary:
    "菲利华官网按半导体、光学、光纤、石英纤维与织物、复合材料五类展示产品。半导体目录列出 FLH301 电熔石英、FLH211/311/321 系列气熔石英、FLH331 高纯无气泡石英、FLHO321 系列不透明石英以及 FSTQZ®W/B 等材料；光学目录包括合成石英和石英晶圆；光纤目录包括炉芯管、石英燃烧器、石英棒和石英管。石英纤维页面展示实心与空心石英纤维纱、织物及编织制品，并将耐高温、低介电、透波、隔热和耐腐蚀列为主要特性，公开应用包括天线罩和电磁窗口、热防护、高温过滤、半导体隔热及耐酸复材。2024 年年报还列出石英玻璃纤维立体编织预制件及石英纤维基复合材料。采购方应按具体牌号核验 SiO₂ 纯度、羟基与杂质限值、几何尺寸与公差、光学或介电指标、纤维直径、线密度、织物组织与克重、浸润剂/表面处理、热处理状态、测试方法、批次 COA、TDS/SDS、洁净包装、现行证书与实验室认可范围、出口或最终用途限制、MOQ 和交期。",
  productsServicesSummaryEn:
    "Feilihua's official site organizes its portfolio into semiconductor, optics, optical-fiber, quartz-fiber and fabric, and composite-material sections. The semiconductor directory lists FLH301 electric-fused quartz, FLH211/311/321 flame-fused families, FLH331 high-purity bubble-free quartz, FLHO321 opaque grades, and FSTQZ®W/B materials. The optics section lists synthetic quartz and quartz wafers, while the optical-fiber section covers muffle tubes, quartz burners, rods and tubing. The quartz-fiber pages show solid and hollow quartz-fiber yarns, fabrics and woven products, with company-published applications in radomes and electromagnetic windows, thermal protection, high-temperature filtration, semiconductor insulation and acid-resistant composites. The 2024 annual report also names three-dimensional quartz-fiber braided preforms and quartz-fiber-based composites. Buyers should validate the exact grade, SiO₂ purity, hydroxyl and impurity limits, geometry and tolerances, optical or dielectric properties, filament diameter, linear density, weave and areal weight, sizing or surface treatment, heat-treatment condition, test method, lot CoA, TDS/SDS, clean packaging, current certificate and laboratory-accreditation scope, export or end-use controls, MOQ and lead time.",
  ecatalogs: [
    {
      title: "菲利华公司简介",
      titleEn: "Feilihua Company Profile",
      description: "官网发布的企业沿革、生产基地、研发中心、业务范围与管理体系概览。",
      descriptionEn:
        "Official overview of Feilihua's history, manufacturing bases, R&D centers, business scope and management systems.",
      url: "https://www.feilihua.com/en/gsjj/index.aspx",
      format: "Company profile",
    },
    {
      title: "石英纤维与织物产品",
      titleEn: "Quartz Fiber & Fabric Products",
      description: "石英纤维纱、空心石英纤维、织物、编织制品、特性与应用信息。",
      descriptionEn:
        "Official product information for quartz-fiber yarns, hollow quartz fiber, fabrics and woven products, including published properties and applications.",
      url: "https://www.feilihua.com/en/fibre/list.aspx",
      format: "Product directory",
    },
    {
      title: "石英玻璃产品目录",
      titleEn: "Quartz Glass Product Directory",
      description: "半导体、光学和光纤制造用石英玻璃材料与器件入口。",
      descriptionEn:
        "Official quartz-glass directories for semiconductor, optics and optical-fiber manufacturing applications.",
      url: "https://www.feilihua.com/en/Semiconductor/list.aspx",
      format: "Product directory",
    },
    {
      title: "菲利华 2024 年年度报告",
      titleEn: "Feilihua 2024 Annual Report",
      description: "深交所披露的公司身份、主营业务、产品、应用与经营信息。",
      descriptionEn:
        "Shenzhen Stock Exchange filing covering the legal identity, core business, products, applications and operating information.",
      url: "https://disc.static.szse.cn/disc/disk03/finalpage/2025-04-21/4f7a9afd-0e1f-4db2-af61-eb8efe3de186.PDF",
      format: "Annual report (PDF)",
    },
    {
      title: "菲利华联系方式",
      titleEn: "Feilihua Contact Directory",
      description: "官网公开的石英材料、石英纤维销售电话、总部地址与邮箱。",
      descriptionEn:
        "Official quartz-material and quartz-fiber sales numbers, headquarters address and email.",
      url: "https://www.feilihua.com/en/ContactUs/index.aspx",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-12T00:00:00.000Z"),
  logo: "/supplier-assets/feilihua-logo.png",
  contactEmail: "info@feilihua.com",
  contactPhone: "+86 716 8304668",
  address: "68 Dongfang Avenue, Jingzhou, Hubei 434001, China",
  website: "https://www.feilihua.com/en/",
  enterpriseId: null,
  scaleTier: "XL",
  brandPriority: 25,
  viewCount: 0,
  capabilities: [
    "quartz glass",
    "fused quartz",
    "synthetic quartz",
    "semiconductor quartz materials",
    "optical quartz",
    "quartz tubing",
    "quartz fiber",
    "hollow quartz fiber",
    "quartz fiber fabric",
    "three-dimensional quartz-fiber preforms",
    "quartz-fiber composites",
    "precision quartz machining",
  ],
  standardsSupported: ["ISO 9001", "ISO 14001", "OHSAS 18001", "CNAS"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-12T00:00:00.000Z"),
  updatedAt: new Date("2026-08-12T00:00:00.000Z"),
};
