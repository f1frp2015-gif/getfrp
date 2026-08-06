import type { SupplierListing } from "@/lib/db/schema";

export const CHONGQING_DUJIANG_SUPPLIER_ID = "sup-chongqing-dujiang";
export const CHONGQING_DUJIANG_SUPPLIER_SLUG =
  "chongqing-dujiang-composites";

// Curated from Chongqing Dujiang's official English company, product, factory,
// certificate and contact pages at frp-cqdj.com, with its company-owned FRP
// profile site at cqdjfrp.com used to corroborate the profile-manufacturing
// range and Beibei production address. Company-published history, staffing,
// sales, factory scale, manufacturing and export claims remain unverified by
// GetFRP. The certification page currently exposes archived ISO and CCS files
// whose printed validity dates have passed; they are recorded below as expired
// evidence, not as current certification. Official logo source (downloaded
// 2026-08-06 from the current cqdjfrp.com header):
// https://shopcdnalpha.grainajz.com/templates/39244/1051/87b921fe-dcf1-4369-b135-65c3909939f1-%E6%9C%AA%E6%A0%87%E9%A2%98-2-%E6%81%A2%E5%A4%8D%E7%9A%84-%E6%81%A2%E5%A4%8D%E7%9A%84-%E6%81%A2%E5%A4%8D%E7%9A%84.png
export const CHONGQING_DUJIANG_SUPPLIER_PROFILE: SupplierListing = {
  id: CHONGQING_DUJIANG_SUPPLIER_ID,
  name: "重庆市都江复合材料有限公司",
  nameEn: "Chongqing Dujiang Composites Co., Ltd.",
  slug: CHONGQING_DUJIANG_SUPPLIER_SLUG,
  location: "重庆",
  locationEn: "Chongqing, China",
  province: "重庆",
  category: "manufacturer",
  products: [
    "玻璃纤维无捻粗纱、短切纱与纱线",
    "玻纤短切毡、表面毡、网格布、方格布、织物与网格带",
    "不饱和聚酯、乙烯基酯、环氧与胶衣树脂",
    "玻璃钢棒材、筋材、管材、格栅及结构型材",
    "碳纤维织物、板材、管材、网格与短切纤维，以及芳纶和混编织物",
    "脱模蜡、固化剂、促进剂、钛白粉及其他复材辅料",
  ],
  productsEn: [
    "Fiberglass rovings, chopped strands and yarns",
    "Chopped-strand and surface mats, mesh, woven roving, fabrics and mesh tape",
    "Unsaturated-polyester, vinyl-ester, epoxy and gel-coat resins",
    "Fiberglass rods, rebar, tubes, gratings and structural profiles",
    "Carbon-fiber fabrics, sheets, tubes, mesh and chopped fiber, plus aramid and hybrid fabrics",
    "Mold-release wax, curing agents, accelerators, titanium dioxide and other composite auxiliaries",
  ],
  processList: [
    "玻璃纤维熔制、拉丝及无捻粗纱制备（企业公开产线）",
    "玻纤网格布、方格布及其他织物织造",
    "玻纤毡成型、粘结、干燥与压辊加工",
    "玻璃钢棒、管、筋材及结构型材成型与后加工",
    "树脂及复材辅料配套供应与包装",
    "OEM/ODM、尺寸规格、标签及包装定制",
  ],
  processListEn: [
    "Glass melting, fiber drawing and roving preparation (supplier-published production line)",
    "Fiberglass mesh, woven-roving and other fabric manufacture",
    "Glass-mat forming, bonding, drying and rolling",
    "Fiberglass rod, tube, rebar and structural-profile forming and finishing",
    "Resin and composite-auxiliary supply and packing",
    "OEM/ODM and custom dimensions, labeling and packaging",
  ],
  established: 2002,
  verified: false,
  description:
    "重庆市都江复合材料有限公司官网称，现公司于 2002 年正式启用该名称，其玻纤与玻璃钢业务沿革可追溯至 1980 年。公开目录覆盖玻纤增强材料、热固性树脂、玻璃钢型材、碳纤维与芳纶材料及配套辅料。公司自述拥有 289 名员工、约 50,000 平方米厂区，并提供一站式采购与 OEM/ODM 服务。其官网分别公开重庆渝北办公地址和重庆北碚生产地址；采购方应通过营业执照、工厂审核和订单文件核验签约主体、实际生产地点、产品来源及质量责任链。",
  descriptionEn:
    "Chongqing Dujiang Composites Co., Ltd. states that the current company name was adopted in 2002 and traces its fiberglass and FRP operating history to 1980. Its published catalog spans fiberglass reinforcements, thermoset resins, FRP profiles, carbon- and aramid-fiber materials, and related auxiliaries. The company reports 289 employees, approximately 50,000 m² of plant space, one-stop sourcing and OEM/ODM services. Its official sites publish a Yubei office address and a separate Beibei production address; buyers should verify the contracting entity, actual production site, product origin and quality-responsibility chain through the business license, factory audit and order-specific documents.",
  certifications: [
    "历史 ISO 9001:2015 / GB/T 19001-2016 质量管理体系证书，范围为玻璃纤维纱生产，文件显示有效期至 2021-11-11（已过期；询盘时索取现行证书并核验主体、范围与有效期）",
    "历史 ISO 14001:2015 / GB/T 24001-2016 环境管理体系证书，范围为玻纤产品设计与生产，文件显示有效期至 2022-12-21（已过期；询盘时索取现行证书）",
    "历史中国船级社工厂认可证书，覆盖玻纤方格布、短切毡、缝编织物与无捻粗纱，文件显示有效期至 2023-01-31（已过期；船用项目需重新核验现行认可）",
  ],
  certificationsEn: [
    "Archived ISO 9001:2015 / GB/T 19001-2016 quality-management certificate for fiberglass-yarn production, printed valid through November 11, 2021 (expired; request and verify a current certificate, entity, scope and validity)",
    "Archived ISO 14001:2015 / GB/T 24001-2016 environmental-management certificate for the design and production of fiberglass products, printed valid through December 21, 2022 (expired; request a current certificate)",
    "Archived China Classification Society Works Approval covering glass-fiber woven roving, chopped-strand mats, stitched fabrics and roving, printed valid through January 31, 2023 (expired; re-verify current approval for marine projects)",
  ],
  productsServicesSummary:
    "都江官网提供玻纤无捻粗纱、短切纱、毡、网格与织物，不饱和聚酯、乙烯基酯、环氧及胶衣树脂，玻璃钢棒、筋、管、格栅和结构型材，以及碳纤维、芳纶、脱模蜡和其他辅料的多品类目录。官网展示玻纤拉丝、织造、毡材加工和型材生产信息，并宣传一站式采购、定制与 OEM/ODM 服务；但页面未为大多数产品提供统一的可下载 TDS、批次 COA、MOQ 或交期。采购方应按报价型号核验实际制造商与产地、玻纤类型和浸润剂、树脂牌号与批次、织物克重/幅宽、型材纤维含量与公差、力学/耐腐蚀测试、包装、MOQ、交期及质保。官网展示的 ISO 9001、ISO 14001 与中国船级社文件均已超过印载有效期，不应视为现行认证。",
  productsServicesSummaryEn:
    "Dujiang's official catalog covers fiberglass rovings, chopped strands, mats, mesh and fabrics; unsaturated-polyester, vinyl-ester, epoxy and gel-coat resins; fiberglass rods, rebar, tubes, gratings and structural profiles; plus carbon fiber, aramid, mold-release wax and other auxiliaries. The sites publish glass-fiber drawing, weaving, mat-processing and profile-production information and advertise one-stop sourcing, customization and OEM/ODM services. Most listings do not provide a common downloadable TDS, batch COA, MOQ or lead time. Buyers should qualify the quoted manufacturer and origin, glass type and sizing, resin grade and batch, fabric weight and width, profile fiber content and tolerances, mechanical and corrosion testing, packaging, MOQ, lead time and warranty. The ISO 9001, ISO 14001 and China Classification Society files currently displayed by the supplier are past their printed validity dates and must not be treated as current certification.",
  ecatalogs: [
    {
      title: "都江复材英文官网",
      titleEn: "Chongqing Dujiang Official Website",
      description: "企业介绍、主要产品系列、公开产线、OEM/ODM 与联系方式总览。",
      descriptionEn:
        "Official company overview, principal product families, published production lines, OEM/ODM and contact details.",
      url: "https://www.frp-cqdj.com/",
      format: "Official website",
    },
    {
      title: "都江复材公司介绍",
      titleEn: "Chongqing Dujiang Company Profile",
      description: "企业沿革、公开人员与厂区规模、产品范围及证书档案。",
      descriptionEn:
        "Official operating history, published staffing and plant scale, product scope and certificate archive.",
      url: "https://www.frp-cqdj.com/about-us/",
      format: "Company profile",
    },
    {
      title: "都江复材产品目录",
      titleEn: "Chongqing Dujiang Product Directory",
      description: "玻纤、树脂、玻璃钢型材、碳纤维、芳纶及辅料产品入口。",
      descriptionEn:
        "Official directory for fiberglass, resins, FRP profiles, carbon fiber, aramid and auxiliary materials.",
      url: "https://www.frp-cqdj.com/products/",
      format: "Product directory",
    },
    {
      title: "都江复材工厂展示",
      titleEn: "Chongqing Dujiang Factory Tour",
      description: "企业公开的玻纤粗纱、织物、毡材、树脂与仓储照片。",
      descriptionEn:
        "Supplier-published fiberglass roving, fabric, mat, resin and warehouse photographs.",
      url: "https://www.frp-cqdj.com/factory-tour/",
      format: "Factory tour",
    },
    {
      title: "都江复材历史证书档案",
      titleEn: "Chongqing Dujiang Archived Certificates",
      description: "官网公开的历史 ISO 与船级社文件；当前展示文件均已超过印载有效期。",
      descriptionEn:
        "Supplier-hosted historical ISO and classification documents; the currently displayed files are past their printed validity dates.",
      url: "https://www.frp-cqdj.com/about-us/#certificate",
      format: "Expired certificate archive",
    },
    {
      title: "都江玻璃钢型材官网",
      titleEn: "Chongqing Dujiang FRP Profile Website",
      description: "玻璃钢棒、管、筋材、格栅与结构型材目录及北碚生产地址。",
      descriptionEn:
        "Company-owned directory for fiberglass rods, tubes, rebar, gratings and structural profiles, including the Beibei production address.",
      url: "https://www.cqdjfrp.com/",
      format: "Official FRP profile website",
    },
    {
      title: "都江复材联系方式",
      titleEn: "Chongqing Dujiang Contact Directory",
      description: "官网公开的电话、邮箱、渝北办公地址与询盘入口。",
      descriptionEn:
        "Official telephone, email, Yubei office address and inquiry channel.",
      url: "https://www.frp-cqdj.com/contact-us/",
      format: "Contact directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-06T00:00:00.000Z"),
  logo: "/supplier-assets/chongqing-dujiang-logo.png",
  contactEmail: "marketing@frp-cqdj.com",
  contactPhone: "+86 23 6785 3804",
  address:
    "Northwest of Damotan, Tianma Village, Xiema Street, Beibei District, Chongqing, China",
  website: "https://www.frp-cqdj.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 23,
  viewCount: 0,
  capabilities: [
    "fiberglass roving",
    "fiberglass mat",
    "fiberglass mesh",
    "fiberglass fabric",
    "unsaturated polyester resin",
    "vinyl ester resin",
    "epoxy resin",
    "gel coat resin",
    "FRP rod",
    "FRP rebar",
    "FRP tube",
    "FRP grating",
    "FRP structural profiles",
    "carbon-fiber materials",
    "aramid fabric",
    "composite auxiliaries",
    "OEM and ODM",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-06T00:00:00.000Z"),
  updatedAt: new Date("2026-08-06T00:00:00.000Z"),
};
