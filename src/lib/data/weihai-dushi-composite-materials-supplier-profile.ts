import type { SupplierListing } from "@/lib/db/schema";

export const WEIHAI_DUSHI_SUPPLIER_ID =
  "sup-weihai-dushi-composite-materials";
export const WEIHAI_DUSHI_SUPPLIER_SLUG =
  "weihai-dushi-composite-materials";

// Curated from Weihai Dushi's current Chinese and English websites, China
// Composites Expo's 2026 exhibitor directory and Weihai Ecology and
// Environment Bureau project records. The official website and government
// records use the 2021-founded legal entity 威海杜氏复合材料有限公司; an older
// CCE Net Show description says 2010, so this profile uses the government date
// and records the discrepancy instead of merging the two dates. The current
// official header logo was reviewed on 2026-08-24 at:
// https://cdn.fuwucms.com/a/374704463871/files/8ec88b387314957fe87799e1a76363ce.png
// and is stored locally rather than hotlinked. Company-published capacity,
// qualification and product statements are not independent GetFRP
// verification.
export const WEIHAI_DUSHI_SUPPLIER_PROFILE: SupplierListing = {
  id: WEIHAI_DUSHI_SUPPLIER_ID,
  name: "威海杜氏复合材料有限公司",
  nameEn: "Weihai Dushi Composite Materials Co., Ltd.",
  slug: WEIHAI_DUSHI_SUPPLIER_SLUG,
  location: "山东威海火炬高技术产业开发区",
  locationEn: "Weihai, Shandong, China",
  province: "山东",
  category: "fiber",
  products: [
    "单向及织物碳纤维预浸料",
    "玻璃纤维布及平纹、斜纹和彩色玻纤织物预浸料",
    "平纹、斜纹、展宽、提花、锻造纹及装饰碳纤维织物",
    "芳纶纤维预浸料及芳纶/碳纤维混编预浸料",
    "低克重、阻燃、低温固化及行业定制预浸料（企业目录）",
    "企业目录列示的相关复合材料制品",
  ],
  productsEn: [
    "Unidirectional and woven carbon-fiber prepregs",
    "Fiberglass cloth and woven glass-fiber prepregs in plain, twill and colored formats",
    "Plain, twill, spread-tow, Jacquard, forged-pattern and decorative carbon-fiber prepregs and fabrics",
    "Aramid-fiber prepregs and aramid/carbon hybrid-fabric prepregs",
    "Low-areal-weight, flame-retardant, low-temperature-cure and application-specific prepregs (company catalog)",
    "Related composite parts listed in the company catalog",
  ],
  processList: [
    "碳纤维、玻璃纤维及混编织物预浸",
    "涂胶、复合与预浸布生产（政府环评工艺记录）",
    "单向、平纹、斜纹、展宽、提花及装饰织物转换",
    "按客户工艺和性能调整原材料及树脂配方（企业声明）",
    "10–1000 g/m² 碳纤预浸料、最高 1600 g/m² 玻纤预浸料及最宽 1.5 m 生产（企业声明）",
    "样品确认、定制生产与交付支持",
  ],
  processListEn: [
    "Carbon-, glass- and hybrid-fabric impregnation",
    "Resin coating, lamination and prepreg production documented in the government EIA record",
    "Unidirectional, plain, twill, spread-tow, Jacquard and decorative textile conversion",
    "Raw-material and resin-formula adjustment for customer process and performance requirements (company claim)",
    "Carbon prepreg from 10–1,000 g/m², glass prepreg up to 1,600 g/m² and width up to 1.5 m (company claim)",
    "Sample confirmation, custom production and delivery support",
  ],
  established: 2021,
  verified: false,
  description:
    "威海杜氏复合材料有限公司是位于山东威海的碳纤维、玻璃纤维和芳纶预浸料及织物供应商。企业当前中英文官网使用同一中英文名称、电话、邮箱和吉海街 6 号地址；中国国际复材展 2026 年展商名录以 WEIHAI DUSHI COMPOSITE MATERIALS CO., LTD. 列示该企业并公布 6A06 展位，威海市生态环境局则记录了同一地址的碳纤维预浸布生产及扩建项目。政府公开文件写明企业成立于 2021 年 8 月 9 日；复材展网上展厅的一段旧介绍称 2010 年成立。GetFRP 采用政府记录的法定主体成立时间，并把年份差异保留为待供应商说明的公开资料冲突。本页为未认领、未验证的公开资料页，不代表 GetFRP 已完成审厂或产品认证。",
  descriptionEn:
    "Weihai Dushi Composite Materials Co., Ltd. is a carbon-, glass- and aramid-fiber prepreg and textile supplier in Weihai, Shandong. Its current Chinese and English websites use the same company identity, telephone, email and No. 6 Jihai Street address. China Composites Expo lists WEIHAI DUSHI COMPOSITE MATERIALS CO., LTD. at booth 6A06 for carbon fiber, glass fiber, prepreg and related composite products, while Weihai Ecology and Environment Bureau records cover carbon-fiber prepreg production and expansion at the same site. Government records date the legal entity to August 9, 2021; an older CCE Net Show description says 2010. GetFRP uses the government legal-entity date and keeps the discrepancy visible for supplier clarification. This is an unclaimed, unverified public-source profile, not a completed factory audit or product approval.",
  certifications: [
    "国家高新技术企业（企业官网声明；采购前索取当前证书编号、范围和有效期）",
    "质量、环境及职业健康安全管理体系认证（企业官网声明；未取得当前证书编号和有效期）",
    "实用新型专利证书（企业官网声明；按具体技术和权利状态核验）",
  ],
  certificationsEn: [
    "National High-Tech Enterprise (company-published; request the current certificate number, scope and validity)",
    "Quality, environmental and occupational-health-and-safety management-system certifications (company-published; current certificate numbers and validity not obtained)",
    "Utility-model patent certificates (company-published; verify the specific technology and current legal status)",
  ],
  productsServicesSummary:
    "企业官网目录覆盖单向与织物碳纤维预浸料、玻璃纤维织物预浸料、芳纶及碳/芳纶混编预浸料、装饰织物和相关复合材料制品；英文首页同时列出碳纤维编织布、单向碳纤维和双向碳纤维。玻纤产品页公开平纹、斜纹和彩色织物预浸料，其中斜纹页给出 100、200、400 g/m² 等单位面积质量并允许客户指定纤维克重。企业称碳纤预浸料范围为 10–1000 g/m²、玻纤预浸料最高 1600 g/m²、最大幅宽 1.5 m，并可按客户生产工艺和目标性能调整原材料与树脂配方。上述均为目录值，应通过报价牌号、TDS、SDS、树脂体系、纤维生产商及等级、上浆、织法、经纬密度、单位面积质量与公差、树脂含量、挥发份、凝胶时间、固化制度、储存温度和寿命、出库剩余寿命、批次 COA、层合板试验和试生产验证。官网首页声称年产预浸料 600 万平方米、织物 150 万平方米；关于页的“企业优势”又写 400 万和 50 万平方米；复材展网上展厅旧介绍写 500 万和 60 万平方米。威海市生态环境局 2026 年审批文件仅对新增高端碳纤维预浸布项目记录年产 125 万平方米，不能用来证明整个企业当前总产能。GetFRP 因此不设置规模等级，也不合并这些口径。官网展示高新技术企业和管理体系等资质文字，但本次未取得可读的当前证书编号、持证范围和有效期，所以 standardsSupported 保持为空；采购方应索取完整证书并核对法定主体、场所和产品。英文官网、英文产品内容和联系方式支持基础出口沟通，仍需在首单前核对合同/收款/出口主体、原产地、包装、冷链或控温运输、目的国化学品文件及贸易限制。",
  productsServicesSummaryEn:
    "The official catalog covers unidirectional and woven carbon-fiber prepregs, woven glass-fiber prepregs, aramid and carbon/aramid hybrid prepregs, decorative textiles and related composite parts. The English home page also lists woven, unidirectional and bidirectional carbon-fiber materials. A glass-fiber twill-prepreg page publishes 100, 200 and 400 g/m² options and says buyers may specify fiber areal weight. The company claims carbon prepreg from 10–1,000 g/m², glass prepreg up to 1,600 g/m², width up to 1.5 m and raw-material or resin-formula adjustment to the customer's process and performance needs. Treat these as catalog claims. A controlled RFQ should define fiber producer and grade, sizing, weave and count, areal-weight tolerance, resin system and content, volatiles, gel behavior, cure, storage temperature and life, minimum remaining life on arrival, roll build, splices, defects, lot COA, laminate tests and a representative processing trial. Public capacity statements are internally inconsistent: the home page says 6 million m²/year of prepreg and 1.5 million m²/year of fabric; the about-page advantage section says 4 million and 0.5 million m²/year; an older CCE description says 5 million and 0.6 million m²/year. A 2026 Weihai government approval records only an added 1.25 million m²/year high-end carbon-fiber prepreg project, not total current company capacity. GetFRP therefore leaves scaleTier unset. The website names high-tech, management-system and patent qualifications, but readable current certificate numbers, holder scope and validity were not obtained, so standardsSupported remains empty. The English website and contact channel support basic export communication, not completed qualification. Before a first order, confirm the contracting, payee and exporting entities, origin, batch traceability, packaging, temperature-controlled logistics where needed, destination chemical documents and applicable trade restrictions.",
  ecatalogs: [
    {
      title: "威海杜氏英文官网",
      titleEn: "Official Weihai Dushi English Website",
      description: "当前英文企业名称、产品范围、产能声明、应用和联系方式入口。",
      descriptionEn:
        "Current English identity, product scope, company-published capacity, applications and contact entry points.",
      url: "https://whdushi.com/en",
      format: "Official website",
    },
    {
      title: "威海杜氏产品目录",
      titleEn: "Official Weihai Dushi Product Directory",
      description: "碳纤、玻纤、芳纶、混编与复合材料制品分类。",
      descriptionEn:
        "Official carbon-, glass-, aramid-, hybrid-fiber and composite-parts directory.",
      url: "https://whdushi.com/product",
      format: "Official product directory",
    },
    {
      title: "碳纤维预浸料产品索引",
      titleEn: "Official Carbon-Fiber Prepreg Product Index",
      description: "单向、平纹、斜纹、展宽、提花及行业定制预浸料产品入口。",
      descriptionEn:
        "Official index for unidirectional, plain, twill, spread-tow, Jacquard and application-specific carbon prepregs.",
      url: "https://whdushi.com/tag/%E7%A2%B3%E7%BA%A4%E7%BB%B4%E9%A2%84%E6%B5%B8%E6%96%99?m=product",
      format: "Official product index",
    },
    {
      title: "B-3 玻璃纤维斜纹织物预浸料",
      titleEn: "Official B-3 Woven Glass-Fiber Twill Prepreg Page",
      description: "100、200、400 g/m² 等企业规格和客户指定克重说明。",
      descriptionEn:
        "Company-published 100, 200 and 400 g/m² options and custom areal-weight statement.",
      url: "https://whdushi.com/product/82.html",
      format: "Official product page",
    },
    {
      title: "威海杜氏公司与资质页",
      titleEn: "Official Company and Qualification Page",
      description: "公司简介、服务流程、企业优势、产能与资质声明。",
      descriptionEn:
        "Company profile, service flow, advantages, capacity and qualification claims.",
      url: "https://whdushi.com/en/about",
      format: "Official company profile",
    },
    {
      title: "威海杜氏官方联系方式",
      titleEn: "Official Weihai Dushi Contact Page",
      description: "联系人、电话、邮箱和吉海街 6 号地址。",
      descriptionEn:
        "Company contact, telephone, email and No. 6 Jihai Street address.",
      url: "https://whdushi.com/en/message",
      format: "Official contact page",
    },
    {
      title: "中国国际复材展 2026 展商网上展厅",
      titleEn: "China Composites Expo 2026 Net Show — W Exhibitors",
      description: "展商名称、6A06 展位、材料类别和历史企业自述。",
      descriptionEn:
        "Exhibitor identity, booth 6A06, material categories and historical company description.",
      url: "https://www.chinacompositesexpo.com/en/netshow.php?head=W&kind_id=23",
      format: "Exhibitor directory",
    },
    {
      title: "威海市高端碳纤维预浸布项目审批公示",
      titleEn: "Weihai Approval Notice for High-End Carbon-Fiber Prepreg Project",
      description: "政府公开的项目地址、新增面积、工艺和年产 125 万平方米项目口径。",
      descriptionEn:
        "Government record for the project address, added area, process and 1.25 million m²/year project scope.",
      url: "https://sthjj.weihai.gov.cn/art/2026/1/27/art_44913_6116846.html",
      format: "Government approval record",
    },
    {
      title: "威海杜氏高端碳纤维预浸布项目环评文件",
      titleEn: "Weihai Dushi High-End Carbon-Fiber Prepreg EIA Record",
      description: "法定主体成立时间、经营范围、地址和生产工艺来源。",
      descriptionEn:
        "Government source for legal-entity formation date, business scope, address and production process.",
      url: "https://sthjj.weihai.gov.cn/art/2026/1/9/art_86964_6095825.html",
      format: "Government EIA record",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-24T00:00:00.000Z"),
  logo: "/supplier-assets/weihai-dushi-logo.png",
  contactEmail: "1807029979@qq.com",
  contactPhone: "+86 156 3174 1888",
  address:
    "No. 6 Jihai Street, Chucun Town, Torch High-Tech Industrial Development Zone, Weihai, Shandong, China",
  website: "https://whdushi.com/en",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "carbon-fiber prepreg",
    "glass-fiber prepreg",
    "aramid and carbon/aramid hybrid prepreg",
    "unidirectional carbon-fiber materials",
    "plain, twill, spread-tow, Jacquard and decorative fabrics",
    "prepreg resin coating and lamination",
    "10–1,000 g/m² carbon prepreg (company claim)",
    "glass prepreg up to 1,600 g/m² and 1.5 m wide (company claim)",
    "customer-specific raw-material and resin-formula adjustment (company claim)",
    "3C, automotive, rail, aviation, sports and industrial applications (company claim)",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-24T00:00:00.000Z"),
  updatedAt: new Date("2026-08-24T00:00:00.000Z"),
};
