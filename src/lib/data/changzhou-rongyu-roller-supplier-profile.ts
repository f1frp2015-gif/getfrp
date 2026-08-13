import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_RONGYU_ROLLER_SUPPLIER_ID =
  "sup-changzhou-rongyu-roller-manufacture";
export const CHANGZHOU_RONGYU_ROLLER_SUPPLIER_SLUG =
  "changzhou-rongyu-roller-manufacture";

// Curated from the exact mainland-China company's active official website,
// official contact page and China Composites Expo exhibitor record. The expo
// English field misspells "Roll" as "Rool"; this profile uses the readable
// English name published by the supplier's trade-show profile while retaining
// one identity for the exact Chinese legal name, domain, phone and product set.
// Establishment, plant scale, equipment and capability statements are supplier-
// or organizer-published and have not been independently verified by GetFRP.
// Official logo downloaded 2026-08-13 from the current website header:
// http://img.iapply.cn/7efb366499ad18de453c0aa2b258b2ba
export const CHANGZHOU_RONGYU_ROLLER_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_RONGYU_ROLLER_SUPPLIER_ID,
  name: "常州市荣誉制辊有限公司",
  nameEn: "Changzhou Rongyu Roller Manufacture Co., Ltd.",
  slug: CHANGZHOU_RONGYU_ROLLER_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "equipment",
  products: [
    "压花辊与花纹辊",
    "镜面辊与超镜面辊",
    "雾面辊与网纹辊",
    "压延辊与对轧辊",
    "导辊、弯曲辊与光辊",
    "镀铬抛光辊",
    "加热辊外筒",
    "造纸、涂布及碳纤维行业辊筒修磨",
  ],
  productsEn: [
    "Embossing and patterned rollers",
    "Mirror and super-mirror rollers",
    "Matte and anilox rollers",
    "Calender and pairing rollers",
    "Guide, bending and smooth rollers",
    "Chrome-plated polished rollers",
    "Heating-roll shells",
    "Roll grinding and repair for paper, coating and carbon-fiber lines",
  ],
  processList: [
    "辊筒设计与精密机械加工",
    "花纹雕刻与压花辊制造",
    "镜面、雾面及网纹表面加工",
    "镀铬、抛光与表面修复",
    "辊面冷磨与热磨",
    "大型辊筒修磨与再制造",
    "辊筒检测、配对与动平衡配套",
  ],
  processListEn: [
    "Roll engineering and precision machining",
    "Pattern engraving and embossing-roll manufacturing",
    "Mirror, matte and anilox surface finishing",
    "Chrome plating, polishing and surface refurbishment",
    "Cold and hot roll grinding",
    "Large-roll repair and remanufacturing",
    "Roll inspection, pairing and balancing support",
  ],
  established: 1990,
  verified: false,
  description:
    "常州市荣誉制辊有限公司是位于江苏常州武进区的工业辊筒制造与修复企业。官网称公司建于 1990 年，占地 18,000 平方米，拥有 80 多台套大型精密机床、2 台套进口雕刻机及德国照相版系统；这些规模与年份均为企业自述，采购方应以当前营业执照、设备清单和验厂结果复核。公司产品覆盖压花、镜面、雾面、网纹、压延、导向、镀铬抛光及加热辊部件，服务造纸、塑料、包装印刷、纺织、无纺布、金属、机械及复合材料相关产线。中国国际复材展名录将英文名称拼作 CHANGZHOU RONGYU ROOL MANUFACTURING CO., LTD.；该条目与官网的中文主体、域名、电话和产品范围一致，本页已去重并统一为一个供应商主体。",
  descriptionEn:
    "Changzhou Rongyu Roller Manufacture Co., Ltd. is an industrial-roll manufacturer and repair provider in Wujin District, Changzhou, Jiangsu. Its official website says the company was built in 1990 and operates an 18,000-square-metre site with more than 80 large precision machine tools, two imported engraving machines and a German photographic plate system. These dates and scale figures are company statements and should be checked against the current business licence, equipment register and an on-site audit. The range covers embossing, mirror, matte, anilox, calender, guide, chrome-plated polished and heating-roll components for paper, plastics, packaging and printing, textiles, nonwovens, metals, machinery and composite-material lines. The China Composites Expo listing misspells the English name as CHANGZHOU RONGYU ROOL MANUFACTURING CO., LTD.; its Chinese name, domain, phone and product scope match the official website, so this page consolidates the records into one supplier identity.",
  certifications: [
    "官网仅称建立了完善的质量保证体系，未公开 ISO 或其他管理体系证书编号、认证机构、获证主体、范围和有效期；本页不把该表述视为已核验认证，采购方应索取完整现行证书并向认证机构核验",
    "官网设有“荣誉资质”栏目，但资质图片不能替代材料证书、热处理记录、镀层检测、尺寸/形位报告、动平衡报告或适用市场合规文件",
  ],
  certificationsEn: [
    "The official website states only that a quality-assurance system has been established; it does not publish an ISO or other management-system certificate number, certification body, certified entity, scope or validity. This is not treated as verified certification. Buyers should obtain the complete current certificate and validate it with the issuing body",
    "The website has an Honors and Qualifications section, but honor images are not substitutes for material certificates, heat-treatment records, coating tests, dimensional and geometric inspection, balance reports or applicable market-conformity documents",
  ],
  productsServicesSummary:
    "官网产品目录列出各类花辊样品、雾面辊、压延轮、弯曲辊、加热辊外筒、网纹辊、对轧辊、压花辊和超镜面辊；中国国际复材展资料还列出导辊、光辊、镀铬抛光辊，以及造纸压延、压榨、涂布背辊等辊筒的冷磨、热磨和维修。面向碳纤维、预浸料、薄膜、无纺布或其他连续卷材产线的 RFQ，应先明确辊筒功能和工位、卷材/树脂体系、幅宽与线速度、工作温度和压力、允许张力波动，以及辊体和轴颈材料、热处理、面长、直径、壁厚、轴承接口、载荷、挠度与设计寿命。图纸和验收规范还应给出圆度、圆柱度、直线度、同轴度、全跳动、冠形/中高曲线、表面粗糙度 Ra/Rz、硬度、镀层或涂层类型/厚度/结合力/耐蚀要求和动平衡等级；加热或冷却辊需另定介质、压力、流量、温度均匀性、热变形和密封方案。镜面辊应约定粗糙度与光泽度量测方法，压花/网纹辊应提供 CAD 或实样、花纹重复长度、接缝、线数、深度、网穴容积和试压样判定；碳纤维及敏感卷材应用还需验证低跳动、张力稳定、纤维勾挂/磨损、导电碎屑与清洁度控制。修磨项目应记录来料尺寸、剩余壁厚和镀层、裂纹/无损检测及修复前后测量。FAT 宜包含材料与热处理文件、尺寸和形位报告、表面与镀层报告、动平衡、无损检测、热态运行或试压样；包装运输需约定吊点、轴颈防护、防锈防潮和支承锁固。官网不同页面出现潘家镇与礼嘉镇地址表述，当前联系页给出礼嘉镇秦巷村委杨家村 777 号；验厂、合同、付款和发运前应书面确认实际生产、开票与交付地址。",
  productsServicesSummaryEn:
    "The official product directory lists patterned-roll samples, matte rolls, calender rolls, bending rolls, heating-roll shells, anilox rolls, pairing rolls, embossing rolls and super-mirror rolls. The China Composites Expo profile also identifies guide, smooth and chrome-plated polished rolls, plus cold and hot grinding or repair for paper calender, press and coating-backup rollers. For carbon fiber, prepreg, film, nonwoven or another continuous-web line, an RFQ should first define roll function and station, web and resin system, working width and line speed, operating temperature and pressure, allowable tension variation, then body and journal materials, heat treatment, face length, diameter, wall thickness, bearing interfaces, load, deflection and design life. Drawings and acceptance criteria should specify roundness, cylindricity, straightness, concentricity, total indicated runout, crown profile, Ra/Rz roughness, hardness, coating or plating type, thickness, adhesion, corrosion resistance and balance grade. Heated or cooled rolls additionally need medium, pressure, flow, temperature uniformity, thermal deformation and sealing requirements. Mirror rolls require an agreed roughness and gloss test method; embossing or anilox rolls require CAD or a physical master, repeat length, seam criteria, line count, depth, cell volume and an approved trial impression. Carbon-fiber and sensitive-web applications should also validate low runout, tension stability, fiber snagging and abrasion, conductive debris and cleanliness control. Repair RFQs should document incoming dimensions, remaining wall and coating, crack or NDT condition, and pre/post-repair measurements. FAT should cover material and heat-treatment records, dimensions and geometry, surface and coating reports, balancing, NDT and, where applicable, a thermal run or trial impression. Packaging should define lift points, journal protection, corrosion and moisture protection, supports and locking. Official pages refer to both Panjia Town and Lijia Town; the current contact page gives No. 777 Yangjia Village, Qinxiang Village Committee, Lijia Town. Confirm the actual manufacturing, invoicing and dispatch locations in writing before an audit, contract, payment or shipment.",
  ecatalogs: [
    {
      title: "荣誉制辊官方公司简介",
      titleEn: "Official Rongyu Company Profile",
      description: "公司主体、企业沿革、厂区与设备规模及服务行业自述。",
      descriptionEn:
        "Official company identity, history, site and equipment scale, and served-industry statements.",
      url: "http://www.cz-ryzg.com/page/382068.html",
      format: "Company profile",
    },
    {
      title: "荣誉制辊官方产品目录",
      titleEn: "Official Rongyu Product Directory",
      description: "花辊、雾面辊、压延辊、加热辊、网纹辊和镜面辊入口。",
      descriptionEn:
        "Official patterned, matte, calender, heating, anilox and mirror-roll directory.",
      url: "http://www.cz-ryzg.com/product/382057.html",
      format: "Product directory",
    },
    {
      title: "荣誉制辊官方联系页面",
      titleEn: "Official Rongyu Contact Page",
      description: "现行常州地址、电话、传真、邮箱和官网域名。",
      descriptionEn:
        "Current Changzhou address, telephone, fax, email and official domain.",
      url: "http://www.cz-ryzg.com/page/382073.html",
      format: "Contact page",
    },
    {
      title: "中国国际复材展展商页",
      titleEn: "China Composites Expo Exhibitor Profile",
      description: "展会发布的中英文主体、工业辊筒范围和修磨能力。",
      descriptionEn:
        "Organizer-published Chinese and English identity, industrial-roll range and grinding capabilities.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-3025-6758886.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/changzhou-rongyu-roller-logo.png",
  contactEmail: "czryzg@163.com",
  contactPhone: "+86 519 8620 3588",
  address:
    "No. 777 Yangjia Village, Qinxiang Village Committee, Lijia Town, Wujin District, Changzhou, Jiangsu, China",
  website: "http://www.cz-ryzg.com/",
  enterpriseId: null,
  scaleTier: "S",
  brandPriority: 8,
  viewCount: 0,
  capabilities: [
    "industrial roller manufacturing",
    "embossing and patterned rollers",
    "mirror and super-mirror rollers",
    "matte and anilox rollers",
    "calender and pairing rollers",
    "guide and bending rollers",
    "chrome plating and polishing",
    "cold and hot roll grinding",
    "large-roll repair and remanufacturing",
    "carbon-fiber line roller service",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: false,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
