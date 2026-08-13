import type { SupplierListing } from "@/lib/db/schema";

export const CHENGWU_HERUN_SUPPLIER_ID = "sup-chengwu-herun";
export const CHENGWU_HERUN_SUPPLIER_SLUG = "chengwu-herun-new-material";

// Curated from the exact mainland-China exhibitor's current official website,
// current China Composites Expo entry and public project evidence. The official
// site is active and publishes 2026 products/news under 鲁ICP备2022030854号,
// but only its HTTP endpoint currently serves valid content; its HTTPS endpoint
// has a certificate/connection failure. The site's displayed email is malformed
// (cwhrxcl@.163.com), so it is deliberately omitted. Official logo downloaded
// 2026-08-13 from the current official-site header:
// http://www.herun-tech.cn/static/pc/static/img/06d3754a2a3122c6.png
export const CHENGWU_HERUN_SUPPLIER_PROFILE: SupplierListing = {
  id: CHENGWU_HERUN_SUPPLIER_ID,
  name: "成武和润新材料科技有限公司",
  nameEn: "Chengwu Herun New Material Technology Co., Ltd.",
  slug: CHENGWU_HERUN_SUPPLIER_SLUG,
  location: "山东菏泽",
  locationEn: "Heze, Shandong, China",
  province: "山东",
  category: "resin",
  products: [
    "DMP-30、DMP-10、BDMA 与 HR 系列环氧促进剂",
    "酚醛胺系列环氧固化剂",
    "改性胺系列环氧固化剂",
    "聚酰胺系列环氧固化剂",
    "水性胺系列环氧固化剂",
    "功能性环氧体系及定制代加工服务",
  ],
  productsEn: [
    "DMP-30, DMP-10, BDMA and HR-series epoxy accelerators",
    "Phenalkamine epoxy curing agents",
    "Modified-amine epoxy curing agents",
    "Polyamide epoxy curing agents",
    "Waterborne-amine epoxy curing agents",
    "Functional epoxy systems and custom toll manufacturing",
  ],
  processList: [
    "环氧促进剂研发与生产",
    "酚醛胺、改性胺与聚酰胺固化剂研发生产",
    "水性环氧固化剂研发生产",
    "环氧体系配方与应用支持",
    "功能性化学品定制代加工",
    "批次检验、包装与技术服务",
  ],
  processListEn: [
    "Epoxy-accelerator development and production",
    "Phenalkamine, modified-amine and polyamide hardener development and production",
    "Waterborne epoxy-hardener development and production",
    "Epoxy-system formulation and application support",
    "Custom toll manufacturing of functional chemicals",
    "Batch testing, packing and technical service",
  ],
  established: 2021,
  verified: false,
  description:
    "成武和润新材料科技有限公司位于山东省菏泽市成武县化工园区，公开项目文件记载公司成立于 2021 年 4 月 13 日。当前官网以鲁ICP备2022030854号运行，产品目录列出 DMP-30、DMP-10、BDMA 等环氧促进剂，以及酚醛胺、改性胺、聚酰胺和水性胺系列固化剂，并提供功能性环氧体系和定制代加工服务。中国国际复材展以同一英文主体收录该大陆企业，2026 网上展厅列示展位 8S01，产品类别涵盖环氧树脂、胶黏剂、涂料、其他增强材料和复材制品。网站、项目和产能数据均为企业、项目文件或展会发布，尚未由 GetFRP 现场审计。",
  descriptionEn:
    "Chengwu Herun New Material Technology Co., Ltd. is located in Chengwu County Chemical Industry Park, Heze, Shandong. Public project documentation records its incorporation on April 13, 2021. Its current official site operates under MIIT filing Lu ICP 2022030854 and lists DMP-30, DMP-10, BDMA and other epoxy accelerators; phenalkamine, modified-amine, polyamide and waterborne-amine hardeners; functional epoxy systems; and custom toll manufacturing. China Composites Expo lists the same mainland-China entity and publishes booth 8S01 for 2026 under epoxy resin, adhesive, coating, other reinforcement and finished-composite categories. Website, project and capacity information is company-, project- or organizer-published and has not been independently site-audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网促进剂目录列出 DMP-30、DMP-10、BDMA、HR-7088 和 HR-7095，固化剂目录按酚醛胺、水性胺、改性胺和聚酰胺分类，并展示 HR-D062、HR-8001、HR-2301/2302、HR-8019、HR-8188、HR-PAA46/PAA50 等多个牌号。CCE 发布的一期设计产能为促进剂 2 万吨/年、固化剂 2.4 万吨/年和水性固化剂 6000 吨/年；公开项目文件所述一期实际建设规模与总设计口径并不完全相同，采购方必须以当前工厂、具体产品线和最新环评/验收许可为准。RFQ 应明确产品类别与牌号、化学名称和 CAS、活性物含量、胺值/活泼氢当量、黏度、色度、密度、水分、游离胺/酚、固含、溶剂、离子及可水稀释性，并给出配套环氧树脂、树脂/固化剂比例、适用期、凝胶/表干/完全固化时间与温度、放热峰、Tg、硬度、拉伸/弯曲/冲击/粘接、耐水/耐盐雾/耐化学介质和储存稳定性目标。用于复材时还需定义增强材料、铺层/纤维体积分数、灌注或模压工艺、混合黏度及温升曲线、纤维浸润、脱泡、厚件放热、孔隙率、玻璃化转变温度、后固化和最终力学/耐久测试。样品和量产批次应索取当前 TDS、SDS、批次 CoA、分析方法、留样与变更通知制度，并在相同树脂、填料、颜料、促进剂和工艺条件下进行小试、中试与放大确认。官网未公开可核对主体、地址、范围、编号、发证机构和有效期的完整体系或产品证书，因此本页不列为已核实认证。当前官网只通过 HTTP 提供内容，HTTPS 连接存在证书/握手异常；对公付款和文件交换应通过独立渠道复核域名、联系人、收款主体与银行账户。官网公开邮箱写成无效的 cwhrxcl@.163.com，本页不采录；请先通过官网电话确认可用业务邮箱。化学品采购还需逐品核验 SDS、危险性和运输分类、标签、法规清单、HS 编码、包装、仓储、保质期及目的国合规要求。",
  productsServicesSummaryEn:
    "The official accelerator directory lists DMP-30, DMP-10, BDMA, HR-7088 and HR-7095. The hardener directory groups phenalkamine, waterborne-amine, modified-amine and polyamide products and displays grades including HR-D062, HR-8001, HR-2301/2302, HR-8019, HR-8188 and HR-PAA46/PAA50. CCE publishes Phase-I design capacities of 20,000 t/y accelerators, 24,000 t/y hardeners and 6,000 t/y waterborne hardeners, while public project documentation describes a different initial built scale; buyers must verify the current plant, line and latest environmental approval/acceptance for the exact product. An RFQ should define product family and grade, chemical identity and CAS, active content, amine value or active-hydrogen equivalent, viscosity, color, density, moisture, free amine/phenol, solids, solvent, ionic content and water dilutability. State the companion epoxy, resin-to-hardener ratio, pot life, gel/tack-free/full-cure time and temperature, exotherm, Tg, hardness, tensile/flexural/impact/bond performance, water/salt-spray/chemical resistance and storage stability. Composite use also needs reinforcement, lay-up or fiber volume fraction, infusion or compression process, mixed-viscosity and exotherm profile, wet-out, degassing, thick-section thermal control, void content, glass-transition temperature, post-cure and final mechanical/durability tests. Require current TDS, SDS, batch CoA, methods, retain-sample and change-notification controls, and qualify samples and production lots with the same resin, filler, pigment, accelerator and process. The site exposes no complete current management-system or product certificates sufficient to verify legal entity, address, scope, number, issuer and validity; none is recorded as verified. The official site currently serves content only over HTTP, while HTTPS has certificate/handshake failures. Independently verify the domain, contact, beneficiary and bank account before payment or file exchange. Its published email is malformed as cwhrxcl@.163.com and is deliberately omitted; confirm a working business email by official phone. For each chemical, also verify the SDS, hazard and transport classification, label, regulatory inventories, HS code, packing, storage, shelf life and destination-market obligations.",
  ecatalogs: [
    {
      title: "成武和润官方企业主页",
      titleEn: "Official Chengwu Herun Website",
      description: "公司主体、园区、业务范围、ICP备案和 2026 更新。",
      descriptionEn:
        "Official identity, site, business scope, MIIT filing and 2026 updates.",
      url: "http://www.herun-tech.cn/",
      format: "Official website",
    },
    {
      title: "和润环氧促进剂目录",
      titleEn: "Herun Epoxy-Accelerator Directory",
      description: "DMP-30、DMP-10、HR-7095、HR-7088 与 BDMA 入口。",
      descriptionEn:
        "Official DMP-30, DMP-10, HR-7095, HR-7088 and BDMA entries.",
      url: "http://www.herun-tech.cn/list_8.html",
      format: "Product directory",
    },
    {
      title: "和润环氧固化剂目录",
      titleEn: "Herun Epoxy-Hardener Directory",
      description: "酚醛胺、改性胺、聚酰胺和水性胺牌号入口。",
      descriptionEn:
        "Official phenalkamine, modified-amine, polyamide and waterborne-amine grades.",
      url: "http://www.herun-tech.cn/list_9.html",
      format: "Product directory",
    },
    {
      title: "和润官方产品目录书",
      titleEn: "Official Herun Product Workbook",
      description: "官网提供的可下载产品目录。",
      descriptionEn: "Downloadable product workbook linked by the official site.",
      url: "http://www.herun-tech.cn/style/pc/img/mulu.xlsx",
      format: "XLSX catalog",
    },
    {
      title: "中国国际复材展和润网上展厅",
      titleEn: "China Composites Expo Herun Net Show",
      description: "同一英文主体、2026 展位 8S01、产品类别与设计产能。",
      descriptionEn:
        "Organizer-published matching identity, 2026 booth 8S01, categories and design capacities.",
      url: "https://www.chinacompositesexpo.com/en/netshow.php?_MULTI_PAGE_START=30&kind_id=3",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/chengwu-herun-logo.png",
  contactEmail: null,
  contactPhone: "+86 158 5301 5508",
  address:
    "Chengwu County Chemical Industry Park, Heze, Shandong, China",
  website: "http://www.herun-tech.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "DMP and BDMA epoxy accelerators",
    "phenalkamine epoxy hardeners",
    "modified-amine epoxy hardeners",
    "polyamide epoxy hardeners",
    "waterborne epoxy hardeners",
    "functional epoxy-system formulation",
    "custom chemical toll manufacturing",
    "coating, adhesive and composite application support",
    "batch testing and technical service",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
