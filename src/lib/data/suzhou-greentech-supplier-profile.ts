import type { SupplierListing } from "@/lib/db/schema";

export const SUZHOU_GREENTECH_SUPPLIER_ID = "sup-suzhou-greentech";
export const SUZHOU_GREENTECH_SUPPLIER_SLUG = "suzhou-greentech";

// Curated from Greentech's current Chinese company, product and contact pages
// and its English company, product and contact pages. The newer Chinese
// company page identifies the legal entity as 苏州瑞高新材料股份有限公司,
// while the supplier's English site continues to use Suzhou Greentech Co.,
// Ltd. Product, customer, certification and scale claims remain
// company-published and unverified by GetFRP. The locally stored official logo
// is the current header asset served by the supplier's website at:
// https://24865197.s21i.faiusr.com/2/ABUIABACGAAglpP6_AUotpmU_gcwlgE4ogE.jpg
export const SUZHOU_GREENTECH_SUPPLIER_PROFILE: SupplierListing = {
  id: SUZHOU_GREENTECH_SUPPLIER_ID,
  name: "苏州瑞高新材料股份有限公司",
  nameEn: "Suzhou Greentech Co., Ltd.",
  slug: SUZHOU_GREENTECH_SUPPLIER_SLUG,
  location: "江苏太仓",
  locationEn: "Taicang, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "汽车内饰用 TPO 表皮、薄膜与复合材料",
    "PU 合成革、复合革及织物/超纤/3D 网布复合材料",
    "PVC 包覆材料与 PVC+PP 吸附成型材料",
    "汽车内饰用改性 TPU 材料",
    "透光、抗菌、双色、免弱化及负离子功能表皮材料",
  ],
  productsEn: [
    "TPO skins, foils and laminated materials for automotive interiors",
    "PU synthetic leather and laminates with fabric, microfiber or 3D mesh",
    "PVC upholstery and PVC+PP vacuum-forming materials",
    "Modified TPU materials for automotive interior trim",
    "Light-permeable, antibacterial, bicolor, weakening-free and anion-functional surface materials",
  ],
  processList: [
    "汽车内饰表皮材料设计与配方开发",
    "TPO 薄膜、复合与功能化表皮制造",
    "PU 合成革与织物、超纤及 3D 网布复合",
    "PVC 包覆与 PVC+PP 吸附成型材料开发",
    "颜色、纹理与功能定制",
    "材料、耐候、磨耗、燃烧、雾化及色差测试",
  ],
  processListEn: [
    "Automotive interior surface-material design and formulation",
    "TPO foil, lamination and functional-skin manufacturing",
    "PU synthetic-leather lamination with fabric, microfiber and 3D mesh",
    "PVC upholstery and PVC+PP vacuum-forming material development",
    "Custom color, grain and functional-surface development",
    "Material, weathering, abrasion, flammability, fogging and color testing",
  ],
  established: 2012,
  verified: false,
  description:
    "苏州瑞高新材料股份有限公司成立于 2012 年 10 月，位于江苏省太仓市璜泾镇，专注于环保型汽车内饰复合材料的研发、生产与销售。其较新的中文公司介绍将主要产品概括为 TPO、TPU 与 PU 材料，并披露旗下马鞍山瑞高科技有限公司和苏州瑞高启航新材料有限公司；官网产品目录及英文页面同时展示 TPO、PU 与 PVC 汽车内饰表皮和复合材料系列。",
  descriptionEn:
    "Suzhou Greentech Co., Ltd., whose current Chinese legal name is published as 苏州瑞高新材料股份有限公司, was established in October 2012 in Huangjing, Taicang, Jiangsu. The company develops and manufactures environmentally oriented composite surface materials for automotive interiors. Its newer Chinese company profile describes TPO, TPU and PU as the principal material families and identifies subsidiaries in Ma'anshan and Suzhou, while the official product directory and English pages present TPO, PU and PVC automotive skin and laminated-material ranges.",
  certifications: [
    "IATF 16949（企业官网公开；采购方应核验现行证书与适用范围）",
    "ISO 14001（企业官网公开；采购方应核验现行证书与适用范围）",
    "CNAS 认可实验室 L14945（企业官网公开；采购方应核验现行认可状态与能力范围）",
  ],
  certificationsEn: [
    "IATF 16949 (company-published; current certificate and scope to be confirmed)",
    "ISO 14001 (company-published; current certificate and scope to be confirmed)",
    "CNAS-accredited laboratory L14945 (company-published; current status and capability scope to be confirmed)",
  ],
  productsServicesSummary:
    "瑞高官网公开的 TPO 系列包括薄膜、复合、免弱化、透光、双色和抗菌材料；PU 系列包括单革、复合、3D 网布、负离子、透光和抗菌材料；PVC 系列包括织物包覆与 PVC+PP 吸附成型材料，应用展示覆盖仪表板、门板、座椅、头枕和排挡罩。较新的中文公司介绍称公司占地近 270 亩、员工近千人，拥有 CNAS 认可实验室，并起草或参与 14 项国家或行业标准。公开页面未提供可直接采购的牌号级 TDS/SDS，且较新的中文介绍以 TPO/TPU/PU 为主、产品目录与英文页面仍列 TPO/PU/PVC。采购方应确认 PVC 与 TPU 的当前供货范围，并针对目标牌号核验基材与结构、厚度和幅宽、颜色与纹理、单位面积质量、拉伸与撕裂、耐磨、耐候、耐水解、阻燃、VOC/气味/雾化、耐化学品、成型窗口、OEM 规范、现行证书、MOQ、样件周期、量产交期和批次追溯要求。",
  productsServicesSummaryEn:
    "Greentech's official directory lists TPO foil, laminated, weakening-free, light-permeable, bicolor and antibacterial materials; PU single-skin and laminates with 3D mesh, anion, light-permeable and antibacterial functions; and PVC fabric-upholstery and PVC+PP vacuum-forming materials. Published applications include instrument panels, door panels, seats, headrests and gear-shift covers. The newer Chinese company profile reports a site of nearly 270 mu, close to 1,000 employees, a CNAS-accredited laboratory, and participation in 14 national or industry standards. Public pages do not provide procurement-ready grade-level TDS or SDS documents, and the newer Chinese profile emphasizes TPO/TPU/PU while the product directory and English pages still list TPO/PU/PVC. Buyers should confirm the current PVC and TPU supply scope and validate the selected grade's substrate and construction, thickness and width, color and grain, mass per area, tensile and tear performance, abrasion, weathering, hydrolysis resistance, flammability, VOC/odor/fogging, chemical resistance, forming window, OEM specification, current certificates, MOQ, sample timing, serial-production lead time and lot traceability.",
  ecatalogs: [
    {
      title: "瑞高新材料公司介绍",
      titleEn: "Greentech Company Profile",
      description: "公司沿革、主要材料、研发平台、质量体系、荣誉与制造布局。",
      descriptionEn:
        "Current official Chinese profile covering company history, principal materials, R&D platforms, quality systems, recognition and manufacturing footprint.",
      url: "https://www.rgecosz.com/col.jsp?id=106",
      format: "Company profile",
    },
    {
      title: "瑞高汽车内饰材料产品目录",
      titleEn: "Greentech Automotive Interior Materials Directory",
      description: "TPO、PU、PVC 产品系列、功能材料与汽车内饰应用。",
      descriptionEn:
        "Official English directory for TPO, PU and PVC product families, functional materials and automotive-interior applications.",
      url: "https://www.rgecosz.com/en/col.jsp?id=103",
      format: "Product directory",
    },
    {
      title: "Greentech 英文公司与实验室介绍",
      titleEn: "Greentech Company, Laboratory & Certification Overview",
      description: "英文公司概况、研发实验室、测试设备与企业公开认证。",
      descriptionEn:
        "Official English overview of the company, R&D laboratory, testing equipment and company-published certifications.",
      url: "https://www.rgecosz.com/en/col.jsp?id=106",
      format: "Company profile",
    },
    {
      title: "瑞高新材料联系方式",
      titleEn: "Greentech Contact Details",
      description: "太仓工厂地址、公司电话、邮箱与网站。",
      descriptionEn:
        "Official Taicang factory address, company telephone, email and website.",
      url: "https://www.rgecosz.com/en/col.jsp?id=102",
      format: "Contact page",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-12T00:00:00.000Z"),
  logo: "/supplier-assets/suzhou-greentech-logo.jpg",
  contactEmail: "rgtc100@rgecosz.com",
  contactPhone: "+86 512 5330 8286",
  address:
    "No. 5 Youyi Road, Industrial Park, Huangjing Town, Taicang, Jiangsu, China",
  website: "https://www.rgecosz.com/en/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 12,
  viewCount: 0,
  capabilities: [
    "automotive interior surface materials",
    "TPO automotive skins and foils",
    "TPO laminated materials",
    "PU synthetic leather",
    "PVC upholstery materials",
    "PVC+PP vacuum-forming materials",
    "modified TPU interior materials",
    "light-permeable interior skins",
    "antibacterial interior skins",
    "custom color and grain development",
    "automotive interior material testing",
  ],
  standardsSupported: ["IATF 16949", "ISO 14001"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-12T00:00:00.000Z"),
  updatedAt: new Date("2026-08-12T00:00:00.000Z"),
};
