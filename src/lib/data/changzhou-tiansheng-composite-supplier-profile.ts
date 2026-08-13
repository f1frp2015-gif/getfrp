import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_ID =
  "sup-changzhou-tiansheng-composite";
export const CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_SLUG =
  "changzhou-tiansheng-composite";

// Curated from the China Composites Expo exhibitor profile and the current
// official website of parent company Changzhou Tiansheng New Materials Group.
// The parent site identifies "Tiansheng Composite" in its group structure and
// assigns structural-foam production and processing to the subsidiary. The
// parent-owned domain and its group logo must not be mistaken for a separate
// subsidiary website or logo. No independently branded current subsidiary logo
// was available on the official pages reviewed on 2026-08-13, so the profile
// deliberately uses the text fallback. The site is currently HTTP-only; HTTPS
// returns an SSL protocol error.
export const CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_ID,
  name: "常州天晟复合材料有限公司",
  nameEn: "Changzhou Tiansheng Composite Co., Ltd.",
  slug: CHANGZHOU_TIANSHENG_COMPOSITE_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "Strucell PVC 结构泡沫芯材",
    "PVC 泡沫平板与轮廓板",
    "双曲、打孔、开槽及开槽打孔芯材",
    "按图预切成套芯材（Kits）",
    "五轴加工异形 PVC 泡沫芯材",
    "夹芯板材与后加工产品",
    "泡沫芯材与蜂窝芯材（展会分类）",
  ],
  productsEn: [
    "Strucell PVC structural foam core",
    "PVC foam flat and contour-cut panels",
    "Double-cut, perforated, grooved and grooved-perforated cores",
    "Drawing-based pre-cut core kits",
    "Five-axis-machined shaped PVC foam cores",
    "Sandwich panels and processed products",
    "Foam and honeycomb core materials (expo classification)",
  ],
  processList: [
    "PVC 结构泡沫生产与加工",
    "芯材切片、开槽、打孔与组合加工",
    "轮廓切割与玻纤网格布贴合",
    "按二维图纸预切、定形、编号与配套",
    "按三维数据五轴加工异形件",
    "手糊、真空导流和模压工艺适配加工",
  ],
  processListEn: [
    "PVC structural-foam production and processing",
    "Core slicing, grooving, perforation and combined processing",
    "Contour cutting and glass-mesh backing",
    "2D drawing-based pre-cutting, shaping, numbering and kitting",
    "Five-axis machining of 3D shaped parts",
    "Core processing for hand lay-up, vacuum infusion and compression molding",
  ],
  established: null,
  verified: false,
  description:
    "常州天晟复合材料有限公司是中国国际复材展收录的江苏常州结构芯材展商，英文名为 CHANGZHOU TIANSHENG COMPOSITE CO., LTD.。常州天晟新材料集团股份有限公司的当前官网在“公司构成”中列出“天晟复合”，并在发展沿革中说明集团全资子公司负责结构泡沫材料的生产与加工；该官网由母公司运营，并非子公司的独立域名。官网产品页将 Strucell（思强赛）PVC 结构泡沫、表面加工和成套芯材列为结构泡沫产品。展商页将其归入泡沫芯材、蜂窝芯材和夹芯板材。官网沿革对早期子公司使用了简称，公开页不足以无歧义确认当前法人的成立日期，因此本页不填成立年份。展商页把母公司 2011 年上市事件写入子公司简介，采购方不应据此推定子公司本身为上市主体。企业关系、产品、性能、行业地位、项目与认证陈述均为集团或展会公开信息，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Changzhou Tiansheng Composite Co., Ltd. is a structural-core exhibitor from Changzhou, Jiangsu listed by China Composites Expo under the English name CHANGZHOU TIANSHENG COMPOSITE CO., LTD. The current official website of Changzhou Tiansheng New Materials Group identifies Tiansheng Composite in its group structure and says a wholly owned subsidiary produces and processes structural foam. This is a parent-operated website, not a separate subsidiary domain. The official product pages list Strucell PVC structural foam, surface processing and pre-cut kits within the structural-foam range, while the expo classifies the exhibitor under foam cores, honeycomb cores and sandwich panels. The history page uses a shortened early subsidiary name, so the public official record reviewed here does not establish the current legal entity's incorporation year without ambiguity; no establishment year is assigned. The expo description also applies the parent's 2011 stock-market listing to the subsidiary profile, which must not be read as evidence that the subsidiary itself is listed. Corporate relationship, product, performance, market-position, project and certification statements are group- or organizer-published and have not been independently verified by GetFRP.",
  certifications: [
    "母集团官网称 Strucell PVC 结构泡沫通过 DNV/GL 和 CCS 全系列认证；公开产品页未提供证书编号、具体牌号、标准、范围或有效期，须向实际签约与生产主体索取现行证书",
  ],
  certificationsEn: [
    "The parent website says Strucell PVC structural foam has DNV/GL and CCS series certification. The public product page does not identify certificate numbers, exact grades, standards, scope or validity dates; obtain current certificates from the actual contracting and manufacturing entity",
  ],
  productsServicesSummary:
    "母集团官网把 Strucell PVC 描述为刚性交联闭孔结构泡沫，用于风电叶片、船舶游艇、交通车辆和运动器材等夹芯复材。官网另公开平板、轮廓板、双曲板、打孔板、开槽板和开槽打孔板等加工形式，以及按客户图纸预切、定形、编号的成套芯材和按三维数据五轴加工的异形件；页面给出的工艺适配包括手糊、真空导流/树脂注射和模压。网站发布的密度、温度范围、性能、认证与“国内首家”等陈述均须以牌号 TDS、现行证书和第三方试验为准，且页面把密度单位写作 kg/cm³，明显需要采购前澄清，不能直接作为验收值。询价应先确认签约法人、实际工厂、母集团授权和收款账户，再明确 PVC 泡沫牌号、名义密度与容差、板厚/尺寸与公差、闭孔率、剪切/压缩/拉伸性能及方向性、吸水率、热变形与使用温度、阻燃/烟毒、疲劳、树脂相容性和认证适用范围。加工芯材还应提供二维/三维图纸版本、槽孔形式与尺寸、网格布与胶粘体系、拼接和编号方案、套件完整性、试装、首件检验、包装防潮、批次 CoA、追溯、MOQ、交期和偏差处理。",
  productsServicesSummaryEn:
    "The parent website describes Strucell PVC as a rigid cross-linked closed-cell structural foam for sandwich composites in wind blades, marine craft, transport vehicles and sporting goods. It also publishes flat, contour-cut, double-cut, perforated, grooved and grooved-perforated formats, drawing-based pre-cut and numbered kits, and five-axis-machined 3D parts. Published process compatibility includes hand lay-up, vacuum infusion or resin injection, and compression molding. Website density, temperature, performance, certification and first-in-China statements require grade TDS, current certificates and third-party test evidence; notably, the page prints density in kg/cm3, an apparent unit issue that must be clarified before it is used as an acceptance value. Start qualification by confirming the contracting legal entity, actual plant, parent authorization and beneficiary account. Then define PVC foam grade, nominal density and tolerance, thickness and dimensional tolerances, closed-cell content, directional shear/compression/tensile properties, water absorption, heat distortion and use temperature, fire/smoke/toxicity requirements, fatigue, resin compatibility and certificate scope. For processed cores, control the 2D/3D drawing revision, groove and hole pattern, mesh and adhesive system, joint and numbering scheme, kit completeness, trial fit, first-article inspection, moisture-protective packaging, lot CoA, traceability, MOQ, lead time and deviation handling.",
  ecatalogs: [
    {
      title: "母集团官网：天晟复合",
      titleEn: "Parent Website: Tiansheng Composite",
      description: "集团官网对天晟复合的公司构成归属页。",
      descriptionEn:
        "Parent-group page identifying Tiansheng Composite in the corporate structure.",
      url: "http://www.tschina.com/articleinfo/42",
      format: "Subsidiary profile",
    },
    {
      title: "天晟集团发展沿革",
      titleEn: "Tiansheng Group Development History",
      description: "集团对子公司结构泡沫职责、Strucell 投产和国际化沿革的公开说明。",
      descriptionEn:
        "Official group history covering the subsidiary's structural-foam role, Strucell launch and international development.",
      url: "http://www.tschina.com/zuji",
      format: "Company history",
    },
    {
      title: "结构泡沫产品目录",
      titleEn: "Structural Foam Product Directory",
      description: "Strucell P、表面加工及成套芯材入口。",
      descriptionEn:
        "Official directory for Strucell P, surface processing and core kits.",
      url: "http://www.tschina.com/product/11",
      format: "Product directory",
    },
    {
      title: "Strucell PVC 结构泡沫",
      titleEn: "Strucell PVC Structural Foam",
      description: "企业发布的产品说明、性能特点、应用和认证陈述。",
      descriptionEn:
        "Company-published product description, features, applications and certification claims.",
      url: "http://www.tschina.com/proinfo/13",
      format: "Product page",
    },
    {
      title: "芯材表面加工",
      titleEn: "Core Surface Processing",
      description: "平板、轮廓、双曲、打孔、开槽和组合加工方式。",
      descriptionEn:
        "Published flat, contour, double-cut, perforated, grooved and combined processing formats.",
      url: "http://www.tschina.com/proinfo/14",
      format: "Process guide",
    },
    {
      title: "成套芯材（Kits）",
      titleEn: "Pre-cut Core Kits",
      description: "按图预切、编号和五轴异形件加工说明。",
      descriptionEn:
        "Drawing-based pre-cutting, numbering and five-axis shaped-core information.",
      url: "http://www.tschina.com/proinfo/15",
      format: "Product page",
    },
    {
      title: "中国国际复材展展商资料",
      titleEn: "China Composites Expo Exhibitor Profile",
      description: "展商中英文主体及泡沫、蜂窝芯材和夹芯板类别。",
      descriptionEn:
        "Organizer-published Chinese and English identity plus foam-core, honeycomb-core and sandwich-panel categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-239-2247390.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: null,
  contactEmail: null,
  contactPhone: null,
  address: null,
  website: "http://www.tschina.com/articleinfo/42",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 24,
  viewCount: 0,
  capabilities: [
    "PVC structural foam core",
    "contour-cut and grooved core panels",
    "perforated and resin-flow core formats",
    "drawing-based pre-cut core kits",
    "five-axis shaped-core machining",
    "sandwich-core processing",
    "wind and marine core applications",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
