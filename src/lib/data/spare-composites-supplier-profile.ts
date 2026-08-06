import type { SupplierListing } from "@/lib/db/schema";

export const SPARE_COMPOSITES_SUPPLIER_ID = "sup-spare-composites";
export const SPARE_COMPOSITES_SUPPLIER_SLUG = "nanjing-spare-composites";
export const SPARE_COMPOSITES_LEGAL_NAME_EN =
  "Nanjing Spare Composites Yizheng Co., Ltd.";

// Curated from SPARE's current Chinese website and its official English
// export website. The Chinese site brands the business as Nanjing Spare New
// Materials Co., Ltd.; the English export site identifies its operator as
// Nanjing Spare Composites Yizheng Co., Ltd. Company-published capability,
// capacity, certification and legal-entity statements remain separate from
// GetFRP verification.
// Official logo source:
// https://www.sparefrp.com/uploads/allimg/20240731/1-240I110555O33.png
export const SPARE_COMPOSITES_SUPPLIER_PROFILE: SupplierListing = {
  id: SPARE_COMPOSITES_SUPPLIER_ID,
  name: "南京斯贝尔新材料有限公司",
  nameEn: "Nanjing Spare Composites",
  slug: SPARE_COMPOSITES_SUPPLIER_SLUG,
  location: "江苏扬州仪征",
  locationEn: "Yizheng, Yangzhou, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "定制及标准玻璃钢拉挤型材",
    "拉挤与模塑玻璃钢格栅、铺板及盖板",
    "玻璃钢桥梁构件、结构梁柱、复合钢筋及墙板",
    "玻璃钢扶手围栏、梯轨、工具手柄及门窗型材",
    "玻璃钢桥架、光伏边框、环氧拉挤型材及纤维增强连接件",
    "车辆复合材料型材与冷却塔结构件",
  ],
  productsEn: [
    "Custom and standard pultruded FRP profiles",
    "Pultruded and molded FRP grating, decking and covers",
    "FRP bridge components, structural beams, columns, rebar and wall cladding",
    "FRP handrails, fencing, ladder rails, tool handles, and window and door profiles",
    "FRP cable trays, solar-panel frames, epoxy pultrusions and fiber-reinforced connectors",
    "Vehicle composite profiles and cooling-tower structures",
  ],
  processList: [
    "玻璃钢连续拉挤成型",
    "模压及注塑设备配套成型",
    "定制型材设计、模具与产品开发",
    "后道机加工与自动喷涂",
    "结构件施工、装配与安装支持",
    "独立质量检验与研发测试",
  ],
  processListEn: [
    "Continuous FRP pultrusion",
    "Molding and injection-molding equipment",
    "Custom-profile engineering, tooling and product development",
    "Secondary machining and automated spray finishing",
    "Structural-component construction, assembly and installation support",
    "Independent quality inspection and R&D testing",
  ],
  established: 1995,
  verified: false,
  description:
    "斯贝尔中文官网以“南京斯贝尔新材料有限公司”展示业务，英文出口官网则以 Nanjing Spare Composites 品牌运营，并在页脚标注 Nanjing Spare Composites Yizheng Co., Ltd.。公司官网历史称南京斯贝尔于 1995 年 5 月创立、仪征公司于 2011 年成立。其公开业务聚焦玻璃纤维增强复合材料拉挤型材、格栅、桥梁及基础设施构件，并提供定制产品开发、加工、检测和安装支持。",
  descriptionEn:
    "SPARE's Chinese website presents the business as Nanjing Spare New Materials Co., Ltd., while its official English export site operates under the Nanjing Spare Composites brand and names Nanjing Spare Composites Yizheng Co., Ltd. in the site footer. The company's published history says Nanjing Spare was founded in May 1995 and the Yizheng company was established in 2011. Its public product scope centers on pultruded glass-fiber composite profiles, gratings, bridge and infrastructure components, with custom development, machining, testing and installation support.",
  certifications: [
    "ISO 9001（企业历史页面称 2008 年首次通过；现行证书范围与有效期需确认）",
    "高新技术企业（企业官网公开；现行资质需确认）",
    "江苏省专精特新中小企业（企业官网公开；现行资质需确认）",
  ],
  certificationsEn: [
    "ISO 9001 (company history says first certified in 2008; confirm current certificate scope and validity)",
    "High-Tech Enterprise (company-published; confirm current status)",
    "Jiangsu Specialized and Innovative SME (company-published; confirm current status)",
  ],
  productsServicesSummary:
    "中文官网公开标准/定制拉挤型材、拉挤及模塑格栅、桥梁构件、梯轨、工具手柄、环氧拉挤型材、连接件、盖板、冷却塔结构、扶手围栏、门窗型材、钢筋墙板、光伏边框、桥架及车辆复材型材等产品。中文公司介绍称南京与仪征工厂合计占地约 47,000 平方米、员工约 300 人、专业技术人员 40 余人，配备 40 余条拉挤线，年加工能力约 1 万吨；英文官网则称拥有接近 50 条拉挤线，并公开模压、注塑、后道机加工、自动喷涂、独立检测与研发中心。两个官网对产线数量和运营实体的表述存在差异，采购方应在询盘、样件和工厂审核阶段确认签约主体、当前产能、树脂体系、阻燃与载荷数据、尺寸公差、认证范围、MOQ、交期及批次追溯。",
  productsServicesSummaryEn:
    "SPARE's official catalogs cover standard and custom pultruded profiles; pultruded and molded grating; bridge components; ladder rails; tool handles; epoxy pultrusions; connectors; covers; cooling-tower structures; handrails and fencing; window and door profiles; rebar and wall cladding; solar-panel frames; cable trays; and vehicle composite profiles. The Chinese company profile states that its Nanjing and Yizheng facilities total about 47,000 m², employ around 300 people including more than 40 technical staff, operate more than 40 pultrusion lines and have annual processing capacity of about 10,000 tonnes. The English site describes almost 50 pultrusion lines plus molding, injection molding, secondary machining, automated paint finishing, independent inspection and R&D centers. Because the two official sites differ on line count and operating-entity wording, buyers should confirm the contracting entity, current capacity, resin system, fire and load data, dimensional tolerances, certification scope, MOQ, lead time and batch traceability during RFQ, sample approval and factory audit.",
  ecatalogs: [
    {
      title: "斯贝尔中文官网",
      titleEn: "SPARE Official Chinese Website",
      description: "公司、产品、应用、资料下载及当前公开联系方式总览。",
      descriptionEn:
        "Official Chinese overview of the company, products, applications, downloads and current public contact details.",
      url: "https://www.sparefrp.com/",
      format: "Official website",
    },
    {
      title: "斯贝尔中文公司介绍",
      titleEn: "SPARE Chinese Company Profile",
      description: "官网公开的工厂规模、员工、产线、产能、研发与出口市场信息。",
      descriptionEn:
        "Company-published overview of facilities, workforce, pultrusion lines, capacity, R&D and export markets.",
      url: "https://www.sparefrp.com/about/",
      format: "Company profile",
    },
    {
      title: "斯贝尔产品中心",
      titleEn: "SPARE Product Directory",
      description: "标准和定制型材、格栅、结构件及应用制品目录。",
      descriptionEn:
        "Official directory for standard and custom profiles, grating, structural components and application products.",
      url: "https://www.sparefrp.com/products/",
      format: "Product directory",
    },
    {
      title: "SPARE 英文出口官网",
      titleEn: "SPARE Official English Export Website",
      description: "英文产品、应用、案例、制造能力及出口联系方式总览。",
      descriptionEn:
        "Official English overview of products, applications, case studies, manufacturing capabilities and export contacts.",
      url: "https://www.sparecomposite.com/",
      format: "Official website",
    },
    {
      title: "SPARE 英文公司介绍",
      titleEn: "SPARE English Company Profile",
      description: "英文官网发布的生产基地、设备、研发、专利、标准参与及市场信息。",
      descriptionEn:
        "Official English profile covering production bases, equipment, R&D, patents, standards participation and markets.",
      url: "https://www.sparecomposite.com/about.html",
      format: "Company profile",
    },
    {
      title: "SPARE 公司历史",
      titleEn: "SPARE Company History",
      description: "官网发布的 1995 年以来发展节点、ISO 9001 及标准参与记录。",
      descriptionEn:
        "Company-published timeline since 1995, including ISO 9001 and standards-participation milestones.",
      url: "https://www.sparecomposite.com/about-10.html",
      format: "Company history",
    },
    {
      title: "SPARE 荣誉与资质",
      titleEn: "SPARE Honors & Qualifications",
      description: "企业官网公开的荣誉、资质及证书图片入口。",
      descriptionEn:
        "Official directory of company-published honors, qualifications and certificate images.",
      url: "https://www.sparecomposite.com/about-11.html",
      format: "Qualification directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-06T00:00:00.000Z"),
  logo: "/supplier-assets/spare-composites-logo.png",
  contactEmail: "myy021@njspare.com",
  contactPhone: "+86 191 0847 1079",
  address: "No. 10 Xingye Road, Yizheng, Yangzhou, Jiangsu, China",
  website: "https://www.sparefrp.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 20,
  viewCount: 0,
  capabilities: [
    "custom pultruded FRP profiles",
    "standard FRP structural profiles",
    "pultruded FRP grating",
    "molded FRP grating",
    "FRP bridge components",
    "FRP cable trays",
    "FRP handrails and fencing",
    "composite rebar and wall cladding",
    "secondary machining and finishing",
    "custom tooling and product development",
    "in-house inspection and testing",
  ],
  standardsSupported: ["ISO 9001"],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-06T00:00:00.000Z"),
  updatedAt: new Date("2026-08-06T00:00:00.000Z"),
};
