import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_KEREN_SUPPLIER_ID =
  "sup-changzhou-keren-machinery";
export const CHANGZHOU_KEREN_SUPPLIER_SLUG =
  "changzhou-keren-machinery";

// Curated from the exact mainland-China legal entity's active Chinese and
// English official websites and current China Composites Expo records. The
// English website footer uses "Changzhou Keren Machine Co., Ltd.", while the
// expo uses "CHANGZHOU KEREN MACHINERY FACTORY CO., LTD."; both pages identify
// the same Chinese legal name, domain, Changzhou contacts and winding-machine
// product set, so this profile keeps one deduplicated supplier identity. Scale,
// customer, qualification and product-performance statements remain company-
// or organizer-published and have not been independently verified by GetFRP.
// Official logo downloaded 2026-08-13 from the current website header:
// https://omo-oss-image.thefastimg.com/portal-saas/new2021113010295194415/cms/image/abca9bf1-b4c5-47fa-a4cf-6e74564303ad.png
export const CHANGZHOU_KEREN_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_KEREN_SUPPLIER_ID,
  name: "常州市科仁机械有限公司",
  nameEn: "Changzhou Keren Machine Co., Ltd.",
  slug: CHANGZHOU_KEREN_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "碳纤维与高性能纤维专用收卷机",
    "玻璃纤维单丝卷绕设备",
    "数控伺服与变频卷绕机",
    "直流无刷电机与磁性卷绕机",
    "高速卷绕机与自动换卷机",
    "UHMWPE、芳纶、玄武岩及特种纤维卷绕机",
    "滤芯、薄膜、胶带与电子载带卷绕设备",
    "卷绕机配件及非标定制设备",
  ],
  productsEn: [
    "Carbon-fiber and high-performance-fiber winding machines",
    "Glass-fiber monofilament winding equipment",
    "CNC servo and variable-frequency winders",
    "DC brushless-motor and magnetic winders",
    "High-speed winders and automatic roll changers",
    "UHMWPE, aramid, basalt and specialty-fiber winders",
    "Filter-cartridge, film, tape and electronic carrier-tape winding equipment",
    "Winder accessories and custom machinery",
  ],
  processList: [
    "特种纤维收卷与精密排线",
    "电子张力调节与恒张力卷绕",
    "数控伺服、变频及直流无刷驱动集成",
    "低摩擦纤维导向与防起毛设计",
    "卷轴、纸管与往复行程定制",
    "自动换卷与卷绕产线配套",
    "非标卷绕设备设计制造",
  ],
  processListEn: [
    "Specialty-fiber take-up and precision traverse winding",
    "Electronic tension adjustment and constant-tension winding",
    "CNC servo, variable-frequency and DC brushless drive integration",
    "Low-friction fiber guidance and fuzz-reduction design",
    "Custom spindle, tube and traverse-stroke configuration",
    "Automatic roll changing and line integration",
    "Custom winding-equipment engineering and manufacturing",
  ],
  established: 2008,
  verified: false,
  description:
    "常州市科仁机械有限公司是位于江苏常州武进区的卷绕设备制造企业。官网称公司创立于 2008 年，面向碳纤维、玻璃纤维、芳纶、UHMWPE、玄武岩及其他高性能纤维提供专用收卷、数控伺服、变频、高速和自动换卷设备，也覆盖滤芯、薄膜、胶带与电子载带等卷绕场景。中国国际复材展 2025 名录以 7L33 展位收录该企业；展会英文名使用 CHANGZHOU KEREN MACHINERY FACTORY CO., LTD.，官网英文页脚使用 Changzhou Keren Machine Co., Ltd.，但二者均对应同一中文公司名、官网域名、常州联系方式与产品体系，因此本页合并为一个供应商主体。",
  descriptionEn:
    "Changzhou Keren Machine Co., Ltd. is a winding-equipment manufacturer in Wujin District, Changzhou, Jiangsu. Its official website dates the company to 2008 and presents dedicated take-up, CNC-servo, variable-frequency, high-speed and automatic roll-changing equipment for carbon fiber, glass fiber, aramid, UHMWPE, basalt and other high-performance fibers, alongside winders for filter media, films, tapes and electronic carrier tape. The China Composites Expo 2025 directory lists the company at booth 7L33. The expo uses CHANGZHOU KEREN MACHINERY FACTORY CO., LTD., while the official English footer uses Changzhou Keren Machine Co., Ltd.; both records carry the same Chinese company name, domain, Changzhou contacts and product set, so this page consolidates them into one supplier identity.",
  certifications: [
    "官网碳纤维专用收卷机页面称具备 ISO 9001 质量管理体系证书，但未公开证书编号、认证机构、获证主体、范围或有效期；官网“企业荣誉”入口复核时返回找不到页面，因此本页不把该自述视为已核验的现行认证，采购方应索取完整证书并向认证机构核验",
    "官网称企业为 AAA 资信、重合同守信用和企业管理先进单位；这些属于企业自述的信用/荣誉信息，不等同于产品安全合格、计量校准、出口市场准入或客户批准",
  ],
  certificationsEn: [
    "The official carbon-fiber winder page states that an ISO 9001 quality-management certificate is available, but it does not publish a certificate number, certification body, certified legal entity, scope or validity. The site's Honor link returned a page-not-found result at review, so the claim is not treated here as verified current certification. Buyers should obtain the complete certificate and validate it with the certification body",
    "The website describes the company as holding AAA credit, contract-trustworthiness and management honors. These are company-published credit or recognition statements, not substitutes for product-safety conformity, calibration, export-market access or customer approval",
  ],
  productsServicesSummary:
    "官网英文产品页给出的碳纤维专用收卷机示例参数包括变频或伺服驱动、100–20,000 dtex、216/230/290/330 mm 纸管长度（可选其他规格）、100–300 mm 往复行程、300 mm 主轴直径、最高 400 m/min 的按需卷绕速度和电子张力调节，并称低摩擦改进用于降低细旦高性能纤维起毛；这些是单一示例机型的企业发布值，不应外推到全部设备。该页面还列出 1 套起订、木箱包装、30% 预付款及美元报价区间，说明官网具备面向国际询价的交易信息，但价格、交期、付款和配置均应取得针对项目的正式报价。卷绕设备 RFQ 应明确纤维种类、厂家/牌号、tow 或 dtex/tex、浸润剂与表面敏感性、线速度、张力范围/精度/波动、锭位数量、纸管内径与长度、满卷外径和重量、往复行程、排线节距与卷装形状、卷绕比、驱动和控制方式，以及自动换卷、接头/切断、断丝检测、静电控制、粉尘和碳纤维导电碎屑管理。还应定义电源与气源、PLC/HMI 和数据接口、配方与追溯、报警联锁、防护罩和适用 GB/CE/UL 要求；官网所称“三种防爆方案”必须落实为危险区域、气体/粉尘组别、温度组别及相应 CN Ex、ATEX 或 IECEx 证书范围，不能只凭产品描述验收。采购前应使用实际纤维完成样机试卷与 FAT，约定张力/速度测量方法、连续运行、满卷成形、毛丝和损耗判定、SAT、图纸手册、备件、安装培训、质保和远程/现场服务。官网首页称注册资本 1,000 万元、技术员工 50 人并列举中石化等配供关系，这些均需通过营业执照、社保/组织资料、订单或客户可核验引用重新确认。官网 2021 年公司新闻宣布新增 1 万平方米基地并将新址变更为武进区礼嘉镇甘棠路 73 号，但当前联系页页脚仍列江东路贺北村城东工业园 3 栋；RFQ、验厂、合同、收款与发货前应书面确认实际生产、开票和交付地址。",
  productsServicesSummaryEn:
    "The official English carbon-fiber winder page gives example specifications of variable-frequency or servo drive, 100–20,000 dtex, 216/230/290/330 mm bobbin length with other sizes optional, 100–300 mm traverse, a 300 mm spindle diameter, winding speed up to 400 m/min to customer requirements, and electronically adjustable tension. It also describes a lower-friction design intended to reduce fuzz on fine high-performance fibers. These are supplier-published values for one example machine and should not be generalized across the range. The page lists a one-set minimum order, wooden-case packing, a 30% down payment and a USD price band, showing that the website carries international inquiry terms; price, lead time, payment and configuration still require a project-specific formal offer. A winder RFQ should define fiber type, maker and grade, tow or dtex/tex, sizing and surface sensitivity, line speed, tension range, accuracy and variation, number of positions, tube bore and length, full-package diameter and weight, traverse stroke, pitch and package shape, winding ratio, drive and controls, plus automatic roll change, joining or cutting, broken-yarn detection, static control, dust and conductive carbon-fiber debris management. It should also set power and air, PLC/HMI and data interfaces, recipes and traceability, alarms, interlocks, guarding and applicable GB, CE or UL requirements. The site's reference to three explosion-protection schemes must be converted into a defined hazardous zone, gas or dust group, temperature class and applicable CN Ex, ATEX or IECEx certificate scope; a product description is not acceptance evidence. Buyers should trial the actual fiber and complete FAT covering calibrated tension and speed measurement, continuous running, full-package build, fuzz and waste criteria, then agree SAT, drawings and manuals, spares, installation, training, warranty and remote or on-site service. The homepage claims RMB 10 million registered capital, 50 technical employees and supply relationships with Sinopec and other named organizations; these require revalidation through the business licence, workforce or organization records, orders or customer-verifiable references. A 2021 official news item announced a new 10,000-square-metre base at No. 73 Gantang Road, Lijia Town, Wujin District, while the current contact footer still lists Building 3, Chengdong Industrial Park, Hebei Village, Jiangdong Road. The actual manufacturing, invoicing and dispatch addresses should be confirmed in writing before an audit, contract, payment or shipment.",
  ecatalogs: [
    {
      title: "科仁机械官方公司简介",
      titleEn: "Official Keren Company Profile",
      description:
        "公司名称、创立年份、产品范围、企业规模和客户关系自述。",
      descriptionEn:
        "Official company name, founding year, product range, scale and customer-relationship statements.",
      url: "https://www.kerenjixie.com/profile/2672.html",
      format: "Company profile",
    },
    {
      title: "科仁机械英文产品目录",
      titleEn: "Official Keren English Product Directory",
      description:
        "高性能纤维、数控伺服、高速、自动换卷及其他卷绕设备入口。",
      descriptionEn:
        "Official high-performance-fiber, CNC-servo, high-speed, automatic roll-changing and other winder categories.",
      url: "http://en.kerenjixie.com/product.html",
      format: "Product directory",
    },
    {
      title: "碳纤维专用收卷机产品页",
      titleEn: "Official Carbon-Fiber Winder Product Page",
      description:
        "适用纤维、低摩擦设计、示例技术参数及国际询价条款。",
      descriptionEn:
        "Applicable fibers, low-friction design, example specifications and international inquiry terms.",
      url: "http://en.kerenjixie.com/product_details/930430400882794496.html",
      format: "Product page",
    },
    {
      title: "科仁机械官方联系页面",
      titleEn: "Official Keren Contact Page",
      description:
        "常州地址、电话、手机、邮箱、网址及官网运营主体。",
      descriptionEn:
        "Official Changzhou address, telephone, mobile, email, domain and website operator.",
      url: "https://www.kerenjixie.com/contact_us.html",
      format: "Contact page",
    },
    {
      title: "新增生产基地官方公告",
      titleEn: "Official New Production-Base Announcement",
      description:
        "官网发布的 1 万平方米新增基地及礼嘉镇甘棠路 73 号地址。",
      descriptionEn:
        "Company-published announcement of a new 10,000-square-metre base at No. 73 Gantang Road, Lijia Town.",
      url: "https://www.kerenjixie.com/news_1/2.html",
      format: "Company news",
    },
    {
      title: "中国国际复材展展商名录",
      titleEn: "China Composites Expo Exhibitor Directory",
      description:
        "展会发布的 7L33 展位、中文主体与英文字段。",
      descriptionEn:
        "Organizer-published booth 7L33, Chinese legal name and English listing.",
      url: "https://www.chinacompositesexpo.com/cn/news.php?c_id=252",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-keren-logo.png",
  contactEmail: "czkeren@aliyun.com",
  contactPhone: "+86 138 6122 9788",
  address:
    "Production base announced at No. 73 Gantang Road, Lijia Town, Wujin District, Changzhou, Jiangsu, China; the current website footer still lists Building 3, Chengdong Industrial Park, Hebei Village, Jiangdong Road, Wujin District",
  website: "https://www.kerenjixie.com/",
  enterpriseId: null,
  scaleTier: "S",
  brandPriority: 9,
  viewCount: 0,
  capabilities: [
    "carbon-fiber winding machines",
    "glass-fiber winding equipment",
    "high-performance-fiber take-up",
    "CNC servo winding",
    "variable-frequency winding",
    "DC brushless-motor winders",
    "constant-tension winding",
    "precision traverse winding",
    "automatic roll changing",
    "UHMWPE and aramid-fiber winding",
    "filter-cartridge and film winding",
    "custom winding-equipment engineering",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
