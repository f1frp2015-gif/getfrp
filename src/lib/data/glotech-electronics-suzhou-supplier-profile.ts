import type { SupplierListing } from "@/lib/db/schema";

export const GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_ID =
  "sup-glotech-electronics-suzhou";
export const GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_SLUG =
  "glotech-electronics-suzhou";

// Curated from Glotech's current official company, fiberglass, quartz-fiber
// and contact pages plus the 2026 China Composites Expo G directory. The
// official logo was downloaded 2026-08-25 from:
// https://www.glotechgf.com/images/logo_dh.png
export const GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_PROFILE: SupplierListing = {
  id: GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_ID,
  name: "德宏电子（苏州）有限公司",
  nameEn: "Glotech Electronics (Suzhou) Corp.",
  slug: GLOTECH_ELECTRONICS_SUZHOU_SUPPLIER_SLUG,
  location: "江苏苏州",
  locationEn: "Suzhou, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "7628 电子级玻璃纤维布",
    "2116 轻量电子级玻璃纤维布",
    "1080 超薄电子级玻璃纤维布",
    "2165、7667、7637 与 7638 电子级玻璃纤维布",
    "2125、2313 与 2113 电子级玻璃纤维布",
    "工业级玻璃纤维布",
    "电子级石英纤维连续纱",
    "工业级石英纤维纱",
    "电子级石英纤维布",
    "工业级石英纤维布",
  ],
  productsEn: [
    "Style 7628 electronic-grade fiberglass cloth",
    "Style 2116 lightweight electronic-grade fiberglass cloth",
    "Style 1080 ultra-thin electronic-grade fiberglass cloth",
    "Styles 2165, 7667, 7637 and 7638 electronic-grade fiberglass fabrics",
    "Styles 2125, 2313 and 2113 electronic-grade fiberglass fabrics",
    "Industrial-grade fiberglass cloth",
    "Electronic-grade continuous quartz-fiber yarn",
    "Industrial-grade quartz-fiber yarn",
    "Electronic-grade quartz-fiber fabric",
    "Industrial-grade quartz-fiber fabric",
  ],
  processList: [
    "电子级玻纤布织造与后处理",
    "标准、轻量、超薄与多层覆铜板用布配套",
    "石英纤维连续纱供应",
    "电子级石英纤维精密织造",
    "工业级石英纤维织物供应",
    "布种、纱线、经纬密度与基重选型",
    "样品、规格表与批次质量文件确认",
    "PCB、封装基板及高频通信材料询价支持",
  ],
  processListEn: [
    "Electronic-grade fiberglass weaving and finishing",
    "Cloth selection for standard, lightweight, ultra-thin and multilayer laminates",
    "Continuous quartz-fiber yarn supply",
    "Precision weaving of electronic-grade quartz fiber",
    "Industrial quartz-fabric supply",
    "Style, yarn, warp and fill count and basis-weight selection",
    "Sample, specification-sheet and lot-quality-document review",
    "Inquiry support for PCB, package-substrate and high-frequency applications",
  ],
  established: 2000,
  verified: false,
  description:
    "德宏电子（苏州）有限公司是德宏工业在苏州设立的电子级玻璃纤维布生产与销售主体。现行集团官网明确说明苏州公司成立于 2000 年并承续母公司的电子级玻纤布业务，官网页脚公开苏州高新区地址、电话和企业域名邮箱；中国国际复材展也以相同中英文主体收录企业。官网当前列出标准、轻量、超薄和多层覆铜板用电子级玻纤布，公开 7628、2116、1080、2165、7667、7637、7638、2125、2313 和 2113 等布种，并展示电子级与工业级石英纤维纱、石英纤维布。本页只映射苏州主体可由官网直接支持的玻纤和石英纤维产品。集团官网同时展示由台湾德宇复合材料经营的 IV 型复合气瓶；该业务不自动归入德宏电子（苏州），因此本页不把 LPG、CNG 或压力容器写成苏州公司的自产产品。",
  descriptionEn:
    "Glotech Electronics (Suzhou) Corp. is Glotech Industrial's Suzhou producer and seller of electronic-grade fiberglass fabrics. The current official group website says the Suzhou subsidiary was established in 2000 and took over the parent company's electronic-fiberglass-fabric business; its footer publishes a Suzhou New District address, telephone and company-domain email. China Composites Expo lists the matching Chinese and English entity. The official catalog covers standard, lightweight, ultra-thin and multilayer-laminate fiberglass cloth, publishing styles 7628, 2116, 1080, 2165, 7667, 7637, 7638, 2125, 2313 and 2113, together with electronic- and industrial-grade quartz yarn and fabric. GetFRP maps only the fiberglass and quartz-fiber scope directly supported for the Suzhou business. The group website also presents Type IV composite cylinders made by Taiwan-based Deyu Composite. That separate subsidiary's LPG, CNG and pressure-vessel scope is not assigned to Glotech Electronics (Suzhou).",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网电子布表公开布种、经纬纱、经纬密度、基重和厚度：例如 7628 为约 210 g/m²、0.17 mm，2116 为约 104 g/m²、0.09 mm，1080 为约 48 g/m²、0.05 mm；这些都是供应商发布的典型目录数据，不是 GetFRP 保证值。采购 RFQ 应锁定布种与版本、E 玻璃体系、纱线规格、经纬密度、织法、处理剂/偶联剂、基重与公差、厚度、宽度、卷长、接头、毛羽、破丝、折痕、油污、离子和金属杂质、含水率、灼烧减量、拉伸、尺寸稳定性、介电要求、包装、洁净与批次追溯。PCB、PTFE 高频板、ABF/BT 封装或其他电子应用还需由树脂和层压板体系验证浸润、树脂含量、压合窗口、玻纤效应、CAF、翘曲、热膨胀、Dk/Df 与可靠性，不能仅凭“低介电”营销描述放行。石英纤维页发布 SiO₂ 纯度不低于 99.995%、关键金属杂质不高于 5 ppm 等企业指标；买方应在受控规格中定义原料路线、连续纱或织物牌号、单丝/合股、捻度、上浆、tex、强力、布重、厚度、幅宽、织法、表面处理、纯度检测方法与实验室、介电测试频率、热处理、失重、批次 CoA 和留样。半导体、高频通信或航空用途必须以具体项目的材料鉴定、污染控制、变更通知和客户批准为准。官网展示体系证书栏目，但本轮没有把证书号、发证机构、范围、苏州地址和当前有效期逐项对齐，故认证数组为空。询价时同时确认报价、制造、检验、签约、开票、收款和出口主体均为苏州公司，并核对 MOQ、样品、试产卷、交期、产能分配、Incoterm、索赔和异常批处置。",
  productsServicesSummaryEn:
    "The official electronic-cloth table publishes style, warp and fill yarn, yarn count, basis weight and thickness. Examples include style 7628 at about 210 g/m² and 0.17 mm, 2116 at about 104 g/m² and 0.09 mm, and 1080 at about 48 g/m² and 0.05 mm. These are supplier-published catalog values, not GetFRP guarantees. An RFQ should lock the style and revision, E-glass system, yarn designation, warp and fill counts, weave, finish or coupling agent, basis-weight and thickness tolerances, width, roll length, splices, fuzz, broken yarns, creases, contamination, ionic and metallic impurities, moisture, loss on ignition, tensile behavior, dimensional stability, dielectric requirements, packing, cleanliness and lot traceability. PCB, PTFE high-frequency laminate, ABF or BT package-substrate and other electronic programs must qualify wet-out, resin content, pressing window, glass-weave effects, CAF, warpage, thermal expansion, Dk and Df at a stated frequency, and reliability in the actual resin and laminate system; a generic low-dielectric description is not release evidence. The quartz pages publish company values of at least 99.995% SiO₂ and no more than 5 ppm key metallic impurities. Buyers should define the raw-material route, continuous-yarn or fabric grade, filament or ply construction, twist, sizing, tex, strength, basis weight, thickness, width, weave, surface treatment, purity method and laboratory, dielectric frequency, heat treatment, mass loss, lot CoA and retention sample in a controlled specification. Semiconductor, high-frequency communications or aerospace use requires project-specific material qualification, contamination controls, change notification and customer approval. The website exposes a management-system certificate section, but this review did not align certificate number, issuer, scope, Suzhou address and current validity, so no certification is recorded as verified. Confirm that quotation, manufacture, inspection, contract, invoice, payee and exporter all use the Suzhou entity, together with MOQ, sample and trial rolls, lead time, capacity allocation, Incoterm, claims and nonconforming-lot handling.",
  ecatalogs: [
    { title: "德宏官方网站", titleEn: "Official Glotech Website", description: "苏州业务、产品与联系入口。", descriptionEn: "Official Suzhou business, product and contact entry.", url: "https://www.glotechgf.com/", format: "Official website" },
    { title: "玻璃纤维布目录", titleEn: "Fiberglass Fabric Directory", description: "电子级与工业级玻纤布及布种表。", descriptionEn: "Electronic- and industrial-grade fiberglass cloth and style table.", url: "https://www.glotechgf.com/Products/Products?tab=dzjblxwb", format: "Product directory" },
    { title: "石英纤维纱目录", titleEn: "Quartz-Fiber Yarn Directory", description: "电子级与工业级石英纱。", descriptionEn: "Electronic- and industrial-grade quartz yarn.", url: "https://www.glotechgf.com/Products/Products?tab=dzjsyxws", format: "Product directory" },
    { title: "石英纤维布目录", titleEn: "Quartz-Fiber Fabric Directory", description: "石英织物与公开指标。", descriptionEn: "Quartz fabrics and published properties.", url: "https://www.glotechgf.com/Products/Products?tab=dzjsyxwb", format: "Product directory" },
    { title: "德宏公司简介", titleEn: "Official Glotech Company Profile", description: "集团与苏州主体边界。", descriptionEn: "Official group and Suzhou-entity boundary.", url: "https://www.glotechgf.com/About/qyjj?tab=company", format: "Company profile" },
    { title: "中国国际复材展 G 字母页", titleEn: "China Composites Expo Exhibitors — G", description: "苏州展商主体与产品范围。", descriptionEn: "Organizer source for the Suzhou exhibitor and product scope.", url: "https://www.chinacompositesexpo.com/en/netshow.php?head=G", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/glotech-electronics-suzhou-logo.png",
  contactEmail: "service.sz@glotechgf.com",
  contactPhone: "+86 512 6661 9489",
  address: "No. 136 Huashan Road, Suzhou New District, Suzhou, Jiangsu, China",
  website: "https://www.glotechgf.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 27,
  viewCount: 0,
  capabilities: ["electronic-grade fiberglass cloth", "industrial fiberglass fabric", "quartz-fiber yarn", "quartz-fiber fabric", "PCB reinforcement fabrics", "high-frequency substrate fabrics", "fabric style selection", "lot documentation support"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
