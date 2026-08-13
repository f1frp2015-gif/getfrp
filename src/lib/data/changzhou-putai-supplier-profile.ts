import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_PUTAI_SUPPLIER_ID = "sup-changzhou-putai";
export const CHANGZHOU_PUTAI_SUPPLIER_SLUG = "changzhou-putai-pro-tech";

// Curated from Changzhou Putai's current official Chinese and English
// company, product and contact pages and its China Composites Expo exhibitor
// profile. Capacity, market-coverage, qualification and product claims remain
// company- or organizer-published and have not been independently verified by
// GetFRP. The locally stored official logo was downloaded on 2026-08-13 from
// the current website header asset:
// https://15736140.s21i.faiusr.com/4/ABUIABAEGAAgieCu3wUosfynrAUwkAM4NQ.png
export const CHANGZHOU_PUTAI_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_PUTAI_SUPPLIER_ID,
  name: "常州普泰玻纤制品有限公司",
  nameEn: "Changzhou Pro-Tech Industry Co., Ltd.",
  slug: CHANGZHOU_PUTAI_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "玻璃纤维方格布与无捻粗纱布",
    "单向、双轴向、三轴向与四轴向缝编织物",
    "短切毡、方格布复合毡及夹芯复合毡",
    "3D 中空机织物与双轴向夹芯复合材料",
    "玻璃纤维导流网与大幅宽大卷装复合织物",
    "碳纤维机织、多轴向、单向及展宽织物",
    "芳纶、玄武岩及混杂纤维高性能织物",
    "聚氨酯拉挤专用针织毡",
  ],
  productsEn: [
    "Fiberglass woven roving and woven fabrics",
    "Unidirectional, biaxial, triaxial and quadraxial stitched fabrics",
    "Chopped-strand, woven-roving combination and core combination mats",
    "3D sandwich woven fabrics and biaxial core complexes",
    "Fiberglass flow mesh and jumbo-width combination fabrics",
    "Carbon woven, multiaxial, unidirectional and spread-tow fabrics",
    "Aramid, basalt and hybrid high-performance fabrics",
    "Knitted mat for polyurethane pultrusion",
  ],
  processList: [
    "玻纤、碳纤、芳纶、玄武岩及混杂纤维机织",
    "单向与多轴向经编缝编",
    "短切层、方格布与芯层复合缝编",
    "3D 中空与夹芯织物制造",
    "碳纤维展宽及织物制造",
    "真空导流与拉挤用增强材料配套",
  ],
  processListEn: [
    "Weaving of glass, carbon, aramid, basalt and hybrid fibers",
    "Unidirectional and multiaxial warp stitching",
    "Stitch bonding of chopped layers, woven rovings and core layers",
    "3D hollow and sandwich-fabric manufacture",
    "Carbon-fiber spreading and fabric manufacture",
    "Reinforcement supply for infusion and pultrusion",
  ],
  established: 2007,
  verified: false,
  description:
    "常州普泰玻纤制品有限公司位于江苏常州。公司中英文官网称企业成立于 2007 年，并将自身描述为玻纤、碳纤、芳纶、玄武岩及混杂纤维工业织物制造商；中文介绍另称其团队自 1995 年起涉足复合材料行业。当前目录覆盖机织布、多轴向织物、复合毡、夹芯毡、3D 织物、导流网及碳纤维织物。公司公开年产量超过 20,000 吨，并称已与 30 多个国家和地区建立业务关系；上述经历、产能与市场覆盖均为企业公开陈述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Changzhou Pro-Tech Industry Co., Ltd., the English trading name used by Changzhou Putai Fiberglass Products Co., Ltd., is based in Changzhou, Jiangsu. Its current Chinese and English websites say the company was established in 2007 to manufacture industrial fabrics from glass, carbon, aramid, basalt and hybrid fibers; the Chinese profile separately traces the team's composite-material activity to 1995. The published catalog spans woven and multiaxial fabrics, combination and core mats, 3D fabrics, flow mesh and carbon-fiber textiles. The company reports annual output above 20,000 tonnes and business relationships in more than 30 countries and regions. These history, capacity and market-coverage statements are company-published and have not been independently verified by GetFRP.",
  certifications: [
    "中国国际复材展资料称企业通过 ISO 9001 质量管理体系认证；官网未公开可核验的现行证书，采购方应索取认证主体、范围、编号与有效期完整文件",
  ],
  certificationsEn: [
    "The China Composites Expo profile says the company has ISO 9001 quality-management certification; the official site does not publish a verifiable current certificate, so buyers should request the complete certified entity, scope, certificate number and validity dates",
  ],
  productsServicesSummary:
    "普泰官网产品目录列出 0°/90° 和 ±45° 双轴向布、三轴向与四轴向布、单向布、方格布复合毡、短切缝编毡、夹芯复合毡、3D 中空机织物、玻纤导流网，以及碳纤维机织、多轴向、单向和展宽织物。展会资料还列出大幅宽大卷装复合织物及聚氨酯拉挤专用针织毡，应用面向船艇、轨道交通、汽车、储罐、非开挖管道、风电和体育休闲。官网部分单品页公开了克重、纤维方向、标准/最大幅宽与包装示例，但不能外推至全部产品。采购方应按具体牌号核验法律生产主体与制造地址、纤维品牌/牌号和浸润剂、经纬或各轴向克重与公差、短切层和芯层构成、缝合纱与针距、幅宽和卷长、树脂相容性、浸润/导流性能、力学指标、测试方法、批次 CoA、现行 TDS、包装、MOQ、交期及现行 ISO 9001 证书。",
  productsServicesSummaryEn:
    "Putai's official directory lists 0°/90° and ±45° biaxials, triaxials, quadraxials, unidirectionals, woven-roving combination mat, stitched chopped-strand mat, core combination mat, 3D hollow woven fabric, fiberglass flow mesh, and carbon woven, multiaxial, unidirectional and spread-tow fabrics. The expo profile additionally identifies jumbo-width combination fabrics and knitted mat for polyurethane pultrusion, with applications in marine craft, rail, automotive, tanks, trenchless pipe rehabilitation, wind energy and sports. Some individual product pages publish areal weights, fiber orientations, standard or maximum widths and packaging examples, but these values must not be generalized across the portfolio. Buyers should qualify the exact grade's legal manufacturer and production site; fiber brand, grade and sizing; warp, weft or directional areal weights and tolerances; chopped and core layer construction; stitching yarn and gauge; width and roll length; resin compatibility; wet-out or flow behavior; mechanical properties; test methods; lot CoA; current TDS; packaging; MOQ; lead time; and current ISO 9001 certificate.",
  ecatalogs: [
    {
      title: "普泰英文官网",
      titleEn: "Changzhou Pro-Tech Official Website",
      description: "企业介绍、主要产品、应用行业与英文询盘入口。",
      descriptionEn:
        "Official English overview of the company, principal products, applications and inquiry channel.",
      url: "https://www.cn-protech.com/",
      format: "Official website",
    },
    {
      title: "普泰公司介绍",
      titleEn: "Changzhou Putai Company Profile",
      description: "成立年份、纤维种类、产能和市场覆盖的企业公开说明。",
      descriptionEn:
        "Company-published establishment, fiber types, capacity and market-coverage statements.",
      url: "https://www.cn-protech.com/h-col-101.html",
      format: "Company profile",
    },
    {
      title: "普泰产品目录",
      titleEn: "Changzhou Putai Product Directory",
      description: "多轴向织物、复合毡、3D 织物、导流网和碳纤维织物目录。",
      descriptionEn:
        "Official directory for multiaxials, combination mats, 3D fabrics, flow mesh and carbon-fiber textiles.",
      url: "https://www.cn-protech.com/h-col-103.html",
      format: "Product directory",
    },
    {
      title: "中国国际复材展展商资料",
      titleEn: "China Composites Expo Exhibitor Profile",
      description: "展会发布的企业身份、产能、工艺、应用、ISO 9001 声明及产品类别。",
      descriptionEn:
        "Organizer-published identity, capacity, process, application, ISO 9001 claim and product categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-19-91111275.html",
      format: "Exhibitor profile",
    },
    {
      title: "普泰联系方式",
      titleEn: "Changzhou Putai Contact Details",
      description: "常州新北区地址、电话、传真和邮箱。",
      descriptionEn:
        "Official Changzhou Xinbei address, telephone, fax and email.",
      url: "https://www.cn-protech.com/h-col-102.html",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-putai-logo.png",
  contactEmail: "info@cn-protech.com",
  contactPhone: "+86 519 8512 3791",
  address:
    "No. 88 Fenshui Road, Xinbei District, Changzhou, Jiangsu, China",
  website: "https://www.cn-protech.com/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 8,
  viewCount: 0,
  capabilities: [
    "fiberglass woven roving",
    "unidirectional fabric",
    "biaxial fabric",
    "triaxial fabric",
    "quadraxial fabric",
    "stitched chopped strand mat",
    "woven roving combination mat",
    "core combination mat",
    "3D sandwich woven fabric",
    "fiberglass flow mesh",
    "carbon fiber fabric",
    "spread-tow carbon fabric",
    "aramid and basalt fabric",
    "polyurethane pultrusion knitted mat",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
