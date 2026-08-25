import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_ID =
  "sup-changzhou-tongchuang-composite-materials";
export const CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_SLUG =
  "changzhou-tongchuang-composite-materials";

// Curated from the current Changzhou Tongchuang website and the 2026 China
// Composites Expo C directory. The current site works over HTTP but its footer
// advertises an HTTPS URL that failed TLS negotiation during the 2026-08-25
// review. Capacity, certification and market claims remain supplier- or
// organizer-published. The official header logo was downloaded from:
// http://www.tc-smc.com/UploadFiles/202482016218667.jpg
export const CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_PROFILE: SupplierListing =
  {
    id: CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_ID,
    name: "常州市同创复合材料有限公司",
    nameEn: "Changzhou Tongchuang Composite Materials Co., Ltd.",
    slug: CHANGZHOU_TONGCHUANG_COMPOSITE_MATERIALS_SUPPLIER_SLUG,
    location: "江苏常州",
    locationEn: "Changzhou, Jiangsu, China",
    province: "江苏",
    category: "resin",
    products: [
      "SMC 片状模塑料",
      "BMC/DMC 团状模塑料",
      "电器绝缘模压制品、隔弧板与绝缘子",
      "汽车配件与电池箱等模压部件",
      "SMC 电工绝缘板及按图数控板加工",
      "BMC 高分子天花板与装饰板",
      "矿用防爆及其他定制 FRP 模压制品",
      "SMC/BMC 模具、配方与表面处理配套服务",
    ],
    productsEn: [
      "SMC sheet molding compounds",
      "BMC bulk molding compounds and DMC compounds",
      "Compression-molded electrical-insulation parts, arc barriers and insulators",
      "Compression-molded automotive parts and battery boxes",
      "SMC electrical-insulation boards with drawing-based CNC conversion",
      "BMC polymer ceilings and decorative panels",
      "Mine-safety and other custom compression-molded FRP parts",
      "SMC/BMC molds, formulation support and surface finishing",
    ],
    processList: [
      "SMC 片材与 BMC/DMC 团料生产",
      "热固性模压材料配方和颜色调配",
      "100–1500 吨级液压机压缩模塑（企业声明）",
      "模具设计、制造与维护",
      "绝缘板 CNC 按图切削、钻孔与组装",
      "模压制品外观与表面处理",
      "电气、交通、矿用、建筑与汽车应用开发",
      "理化实验室与产学研支持（企业声明）",
    ],
    processListEn: [
      "SMC sheet and BMC/DMC bulk-compound production",
      "Thermoset molding-compound formulation and color matching",
      "Compression molding on 100- to 1,500-tonne hydraulic presses (company claim)",
      "Mold design, manufacture and maintenance",
      "Drawing-based CNC cutting, drilling and assembly of insulation board",
      "Cosmetic and surface finishing of molded parts",
      "Application development for electrical, transport, mining, building and automotive programs",
      "Physical-property laboratory and university collaboration (company claim)",
    ],
    established: 1989,
    verified: false,
    description:
      "常州市同创复合材料有限公司官网把企业定位为 SMC、DMC/BMC 模塑料及模压制品制造商，产品目录还包括电器绝缘、汽车配件、板加工、天花板和矿用防爆产品。公司简介称相关生产历史可追溯至 1989 年，并公开模具、材料配方、表面处理和绝缘板按图加工服务；页眉 Logo 使用同一中英文主体。中国国际复材展以 CHANGZHOU TONGCHUANG COMPOSITE MATERIALS CO., LTD. 收录同一企业，产品说明与官网一致。本页不把网站与展会列出的产线、年产能、专利、认证或出口市场视为 GetFRP 已审计事实。",
    descriptionEn:
      "Changzhou Tongchuang Composite Materials Co., Ltd. presents itself on its current official website as a manufacturer of SMC sheet molding compound, DMC/BMC bulk molding compound and compression-molded products. Its directory also covers electrical insulation, automotive parts, CNC-converted insulation board, polymer ceilings and mine-safety products. The company profile traces this production history to 1989 and publishes mold, formulation, finishing and drawing-based board-conversion services; the current header logo identifies the same Chinese and English business. China Composites Expo lists the matching exhibitor as CHANGZHOU TONGCHUANG COMPOSITE MATERIALS CO., LTD. Production-line, annual-capacity, patent, certification and export-market statements remain company- or organizer-published and have not been independently audited by GetFRP.",
    certifications: [],
    certificationsEn: [],
    productsServicesSummary:
      "同创同时销售模塑料和模压成品，询价必须先区分采购对象。SMC/BMC/DMC 原料 RFQ 应写明树脂体系、玻纤种类和长度、纤维与填料含量、密度、颜色、低收缩/低轮廓要求、增稠和熟化窗口、挥发物、储存温度、保质期、流动性、模压温度/压力/时间、收缩率、翘曲、力学、电气、阻燃、耐热、耐候和耐介质指标，并要求牌号 TDS、SDS、批次 CoA 和追溯。绝缘板、隔弧板、绝缘子、电池箱、汽车件、天花板或其他成品还要约定图纸版本、模具所有权、尺寸公差、嵌件、表面等级、颜色、外观缺陷、试模/首件、检验方法、包装和不合格处置。官网列出的 UL、RoHS、ISO、高新技术企业和产能信息没有在本轮形成可同时核对法人、地址、产品范围、证书号与有效期的完整当前文件包，因此认证数组保持为空，采购方应索取目的市场和具体牌号/部件的现行证据。官网当前只在 HTTP 上稳定访问，其页面却写有不可用的 HTTPS 地址；交换受控图纸、账号或付款信息前，应通过独立渠道确认域名、联系人、签约法人、收款账户和安全传输方式。",
    productsServicesSummaryEn:
      "Tongchuang sells both molding compounds and finished compression-molded parts, so an inquiry should first distinguish the purchased deliverable. An SMC, BMC or DMC compound RFQ should define resin chemistry; glass type and length; fiber and filler loading; density; color; low-shrink or low-profile requirement; thickening and maturation window; volatiles; storage temperature and shelf life; flow; molding temperature, pressure and time; shrinkage and warpage; mechanical, electrical, flame, thermal, weathering and chemical-resistance criteria; and the required grade TDS, SDS, lot CoA and traceability. An insulation board, arc barrier, insulator, battery box, automotive component, ceiling or other finished-part RFQ also needs drawing revision, mold ownership, dimensional tolerances, inserts, surface class, color, cosmetic-defect limits, trials or first article, inspection method, packaging and nonconformance handling. The website publishes UL, RoHS, ISO, high-tech-enterprise and capacity statements, but the reviewed public material did not expose a complete current evidence package tying legal entity, address, product scope, certificate number and validity together. The certification arrays therefore remain empty, and buyers should obtain destination-market and grade- or part-specific current evidence. The official site currently works reliably only over HTTP even though its page text advertises a non-working HTTPS URL. Independently confirm the domain, contact, contracting entity, beneficiary account and secure file-transfer method before sharing controlled drawings, credentials or payment instructions.",
    ecatalogs: [
      {
        title: "同创复材官网",
        titleEn: "Official Tongchuang Website",
        description: "当前公司、产品目录与公开联系方式。",
        descriptionEn: "Current company, product directory and published contacts.",
        url: "http://www.tc-smc.com/",
        format: "Official website",
      },
      {
        title: "同创公司简介",
        titleEn: "Tongchuang Company Profile",
        description: "生产历史、材料、模压、模具和板加工业务说明。",
        descriptionEn: "Official production history and compound, molding, mold and board-conversion scope.",
        url: "http://www.tc-smc.com/about.asp?id=1",
        format: "Company profile",
      },
      {
        title: "SMC/BMC 与模压制品目录",
        titleEn: "SMC, BMC & Molded Product Directory",
        description: "模塑料、电器绝缘、汽车件、板加工和天花板目录。",
        descriptionEn: "Official compounds, electrical, automotive, board-conversion and ceiling directory.",
        url: "http://www.tc-smc.com/products.asp",
        format: "Product directory",
      },
      {
        title: "同创联系方式",
        titleEn: "Tongchuang Contact Page",
        description: "常州地址、电话、传真和业务邮箱。",
        descriptionEn: "Official Changzhou address, telephone, fax and business email.",
        url: "http://www.tc-smc.com/contact.asp",
        format: "Official contact",
      },
      {
        title: "中国国际复材展 C 字母展商页",
        titleEn: "China Composites Expo Exhibitors — C",
        description: "同创展商身份、模塑料与模压产品说明。",
        descriptionEn: "Organizer entry for Tongchuang, molding compounds and molded products.",
        url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=60&head=C",
        format: "Exhibitor directory",
      },
    ],
    profilePublished: true,
    profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
    logo: "/supplier-assets/changzhou-tongchuang-logo.jpg",
    contactEmail: "cztchyj@163.com",
    contactPhone: "+86 519 8388 0434",
    address: "No. 66 Huiling West Road, Zouqu Town, Zhonglou District, Changzhou, Jiangsu, China",
    website: "http://www.tc-smc.com/",
    enterpriseId: null,
    scaleTier: null,
    brandPriority: 24,
    viewCount: 0,
    capabilities: [
      "SMC sheet molding compound",
      "BMC and DMC bulk molding compound",
      "compression-molded FRP parts",
      "electrical insulation components",
      "CNC insulation-board conversion",
      "SMC/BMC mold development",
      "compound color and formulation support",
    ],
    standardsSupported: [],
    moqKg: null,
    leadTimeDays: null,
    exportReady: true,
    createdAt: new Date("2026-08-25T00:00:00.000Z"),
    updatedAt: new Date("2026-08-25T00:00:00.000Z"),
  };
