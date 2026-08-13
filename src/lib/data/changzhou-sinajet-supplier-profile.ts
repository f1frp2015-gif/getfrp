import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_SINAJET_SUPPLIER_ID = "sup-changzhou-sinajet";
export const CHANGZHOU_SINAJET_SUPPLIER_SLUG =
  "changzhou-sinajet-digital-cutting";

// Curated from Sinajet's current official English company, composites,
// product and contact pages and its China Composites Expo exhibitor profile.
// The expo says the company was established in 2007, while the English site
// traces its activity to 2006; this profile uses the organizer-published 2007
// date and makes no claim about the reason for the discrepancy. Patent,
// recognition, performance and product claims remain company- or
// organizer-published and have not been independently verified by GetFRP.
// Official logo downloaded 2026-08-13 from the current website header:
// https://www.sinajet.net/uploadfiles/107.151.154.88/webid1035/logo/202101/6005379956d8b.jpg
export const CHANGZHOU_SINAJET_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_SINAJET_SUPPLIER_ID,
  name: "常州纳捷机电科技有限公司",
  nameEn: "Changzhou Sinajet Science and Technology Co., Ltd.",
  slug: CHANGZHOU_SINAJET_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "DG/DH 系列数字裁切机",
    "DM 系列数字裁切机",
    "复合材料干纤维织物与柔性片材裁切系统",
    "3D-CNC 超声波裁切机",
    "风电叶片材料裁切解决方案",
    "重型卷材自动送料与连续裁切系统",
    "圆刀、振动刀、超声波刀等裁切模块与工具",
    "排版、控制、视觉扫描与裁切软件",
  ],
  productsEn: [
    "DG/DH Series digital cutters",
    "DM Series digital cutters",
    "Cutting systems for dry composite fabrics and flexible sheet materials",
    "3D-CNC ultrasonic cutting machines",
    "Wind-turbine blade material cutting solutions",
    "Heavy-duty roll feeding and continuous cutting systems",
    "Circular, oscillating and ultrasonic knife modules and tools",
    "Nesting, control, vision-scanning and cutting software",
  ],
  processList: [
    "碳纤维、玻璃纤维与芳纶织物数字裁切",
    "多层、卷对片与连续送料裁切",
    "3D-CNC 超声波裁切",
    "风电叶片铺层套料裁切",
    "自动排版、识别、标记与生产数据管理",
    "非标裁切产线设计、制造与服务",
  ],
  processListEn: [
    "Digital cutting of carbon-, glass- and aramid-fiber fabrics",
    "Multi-ply, roll-to-sheet and continuously fed cutting",
    "3D-CNC ultrasonic cutting",
    "Wind-blade ply nesting and cutting",
    "Automated nesting, recognition, marking and production-data handling",
    "Custom cutting-line design, manufacture and service",
  ],
  established: 2007,
  verified: false,
  description:
    "常州纳捷机电科技有限公司位于江苏常州，专注于非金属材料智能绘图、裁切装备及非标定制成套生产线。中国国际复合材料工业技术展览会资料称公司成立于 2007 年，拥有 200 多件授权专利、其中 70 件仍有效，并为国家级专精特新“小巨人”企业；其英文官网将业务起点表述为 2006 年。当前官网面向纺织服装、包装、汽车内饰、家具及复合材料等行业，并公开 DG/DH、DM 数字裁切机和 3D-CNC 超声波裁切机。成立时间差异、专利数量、荣誉及性能声明均为企业或展会公开信息，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Changzhou Sinajet Science and Technology Co., Ltd. is based in Changzhou, Jiangsu and develops intelligent plotting and cutting equipment plus custom production lines for non-metallic materials. Its China Composites Expo profile says the company was established in 2007, has received more than 200 patent grants with 70 currently valid, and is recognized as a national-level specialized and innovative 'Little Giant'; the English corporate site instead traces its activity to 2006. The current website serves textile and apparel, packaging, automotive interiors, furniture and composites and publishes DG/DH and DM digital cutters plus a 3D-CNC ultrasonic cutting machine. The date discrepancy, patent counts, recognition and performance statements are company- or organizer-published and have not been independently verified by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "纳捷官网的复合材料目录列出 DG/DH、DM 数字裁切机和 3D-CNC 超声波裁切机；复材解决方案面向碳纤维、玻璃纤维、芳纶等柔性材料，并列出风电叶片裁切、重型卷材自动送料、汽车 PVB 膜超声波布丝裁切及其他定制场景。公司公开采用圆刀、振动刀和超声波等工具，并提供模块、控制/排版软件、视觉扫描与自动送料组合。官网公开的最高裁切速度等参数属于特定方案描述，不能外推至所有型号。设备采购方应按报价型号核验有效工作幅面、单层/多层与最大厚度、适用纤维和预浸料状态、刀具配置、定位与重复精度、送料张力和对齐、粉尘与纤维控制、可燃粉尘安全要求、电气制式、对应型号与制造场地的现行 CE/UL 文件、软件授权、FAT/SAT 验收指标、安装培训、备件、质保及目的地服务能力。",
  productsServicesSummaryEn:
    "Sinajet's official composites directory lists DG/DH and DM digital cutters and a 3D-CNC ultrasonic cutting machine. Its composite solutions address flexible carbon-, glass- and aramid-fiber materials and include wind-blade cutting, heavy-roll automatic feeding, automotive PVB-film ultrasonic wire spreading and cutting, and other custom applications. The company publishes circular-, oscillating- and ultrasonic-knife tools together with modules, control and nesting software, vision scanning and automatic feeding. Published maximum cutting speeds are specific solution statements and must not be generalized to every machine. Equipment buyers should qualify the exact quoted model's working width and length; single- or multi-ply capacity and maximum thickness; supported fibers and prepreg state; tool configuration; positioning and repeatability; feed tension and alignment; dust and loose-fiber control; combustible-dust safety requirements; electrical supply; current CE or UL documents for the model and manufacturing site; software licensing; FAT/SAT acceptance criteria; installation and training; spares; warranty; and destination support.",
  ecatalogs: [
    {
      title: "纳捷英文官网与公司介绍",
      titleEn: "Sinajet Official Website & Company Profile",
      description: "公司沿革、应用行业、研发制造定位与全球业务入口。",
      descriptionEn:
        "Official company history, application markets, R&D and manufacturing positioning, and international inquiry entry.",
      url: "https://www.sinajet.net/aboutus.html",
      format: "Company profile",
    },
    {
      title: "复合材料裁切设备目录",
      titleEn: "Composite Cutting Equipment Directory",
      description: "DG/DH、DM 数字裁切机及 3D-CNC 超声波裁切机。",
      descriptionEn:
        "Official directory for DG/DH and DM digital cutters and the 3D-CNC ultrasonic cutting machine.",
      url: "https://www.sinajet.net/fhclxy.html",
      format: "Product directory",
    },
    {
      title: "复合材料行业解决方案",
      titleEn: "Composite Industry Solutions",
      description: "复材、风电叶片、自动送料及定制裁切应用。",
      descriptionEn:
        "Official composite, wind-blade, automatic-feeding and custom cutting applications.",
      url: "https://www.sinajet.net/Composite-Industry-Solution.html",
      format: "Solution page",
    },
    {
      title: "裁切模块与工具",
      titleEn: "Cutting Modules & Tools",
      description: "官网公开的工具头、模块与设备配置入口。",
      descriptionEn:
        "Official directory for published cutting heads, modules and machine configurations.",
      url: "https://www.sinajet.net/Modules-and-Tools.html",
      format: "Product directory",
    },
    {
      title: "中国国际复材展展商资料",
      titleEn: "China Composites Expo Exhibitor Profile",
      description: "展会发布的企业身份、专利与荣誉声明、展位及产品类别。",
      descriptionEn:
        "Organizer-published company identity, patent and recognition statements, booth and product categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-1523-6749874.html",
      format: "Exhibitor profile",
    },
    {
      title: "纳捷联系方式",
      titleEn: "Sinajet Contact Details",
      description: "常州地址、电话、传真、邮箱与询盘入口。",
      descriptionEn:
        "Official Changzhou address, telephone, fax, email and inquiry channel.",
      url: "https://www.sinajet.net/contactus.html",
      format: "Official contact",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-sinajet-logo.jpg",
  contactEmail: "sales@sinajet.cn",
  contactPhone: "+86 519 8668 3500",
  address:
    "No. 5 Xinya Road, Wujin High-Tech Industry Zone, Changzhou, Jiangsu, China",
  website: "https://www.sinajet.net/",
  enterpriseId: null,
  scaleTier: "M",
  brandPriority: 8,
  viewCount: 0,
  capabilities: [
    "composite fabric digital cutting",
    "carbon fiber fabric cutting",
    "glass fiber fabric cutting",
    "aramid fabric cutting",
    "multi-ply cutting",
    "3D CNC ultrasonic cutting",
    "wind-blade material cutting",
    "automatic roll feeding",
    "cutting modules and tools",
    "nesting and cutting software",
    "vision scanning and marking",
    "custom nonmetal cutting lines",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
