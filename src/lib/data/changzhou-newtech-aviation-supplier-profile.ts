import type { SupplierListing } from "@/lib/db/schema";

export const CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_ID =
  "sup-changzhou-newtech-aviation";
export const CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_SLUG =
  "changzhou-newtech-aviation";

// Curated from the exact mainland-China company's dedicated pages on parent
// Newtech Group's current official website and its standalone China Composites
// Expo profile. Newtech Aviation is a separate legal supplier from Newtech
// Group and Newtech Smart. The dedicated pages use the complete parent-group
// header wordmark and expose no subsidiary-specific logo. The card therefore
// uses that exact official page identity, downloaded on 2026-08-26 from
// https://en.newtechgroupcn.com/uploadfiles/211.149.255.8/webid1830/logo/202304/64360df19d215.png;
// it must not be interpreted as a separately registered subsidiary mark.
// AS9100, project, facility, customer and equipment statements are company- or
// organizer-published and remain subject to documentary and on-site verification.
export const CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_ID,
  name: "常州新创航空科技有限公司",
  nameEn: "Newtech Aviation Co., Ltd.",
  slug: CHANGZHOU_NEWTECH_AVIATION_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "航空复合材料结构件与内饰件",
    "双曲帽型、L 型、C 型和帽型长桁",
    "T 型筋、肋、梁、隔框及填充芯材",
    "填充芯材连续成型设备",
    "长桁热模压、机械与辊压预成型设备",
    "热隔膜和多功能曲面预成型设备",
    "平板自动铺放设备",
    "预浸料自动分切复卷设备及分切丝束",
    "热压罐、拉挤、HP-RTM、湿法模压和预浸料模压模具",
    "复材加工、预成型、装配、检测和辅助工装",
  ],
  productsEn: [
    "Aerospace composite structural and interior parts",
    "Double-curvature hat, L-, C- and hat-section stringers",
    "T-stiffeners, ribs, beams, frames and filler cores",
    "Continuous filler-core forming equipment",
    "Hot-press, mechanical and roll-forming stringer preform equipment",
    "Hot-diaphragm and multifunction curved-preform equipment",
    "Automated flat-panel placement equipment",
    "Automated prepreg slitting/rewinding equipment and slit-tow rolls",
    "Autoclave, pultrusion, HP-RTM, wet-compression and prepreg-compression molds",
    "Composite machining, preforming, assembly, inspection and auxiliary tooling",
  ],
  processList: [
    "航空复材零件设计、制造、检验与交付",
    "热压罐、烘箱及预浸料成型",
    "长桁、筋、肋、梁与隔框成型",
    "复材预成型设备和自动化产线研发制造",
    "长桁预成型全线交钥匙工程",
    "热压罐、拉挤、HP-RTM 与模压模具制造",
    "预浸料分切、复卷与覆膜",
    "工装设计、制造及技术咨询服务",
  ],
  processListEn: [
    "Aerospace composite part design, manufacture, inspection and delivery",
    "Autoclave, oven and prepreg processing",
    "Stringer, stiffener, rib, beam and frame forming",
    "Composite preforming-equipment and automated-line development",
    "Turnkey stringer-preforming production lines",
    "Autoclave, pultrusion, HP-RTM and compression-molding tool manufacture",
    "Prepreg slitting, rewinding and film application",
    "Tooling design, manufacture and technical consulting",
  ],
  established: 2017,
  verified: false,
  description:
    "常州新创航空科技有限公司位于江苏常州，是新创碳谷集团体系内专注航空复合材料制件、自动化装备、生产线和工装模具的独立法人。集团官网专页称公司成立于 2017 年，可为航空企业提供自主研发和生产的复材制件、自动化设备及工装模具；中国国际复材展以 NEWTECH AVIATION CO., LTD. 独立收录该展商，发布 2026 年展位 7F28，并将其归入纤维生产设备、复材最终制品生产设备、模具、研发设计和技术转让类别。GetFRP 已另有“新创碳谷集团有限公司”材料主页和“常州市新创智能科技有限公司”装备主页；本页只对应新创航空法人及其航空制件、航空专机和工装范围，三者不合并。公司所述高新技术企业、客户项目、国产首台、填补国内空白、工艺能力和设备性能均为企业或展会公开陈述，尚未经 GetFRP 独立核验。",
  descriptionEn:
    "Newtech Aviation Co., Ltd. is a distinct Changzhou, Jiangsu legal entity within the Newtech Group ecosystem, focused on aerospace composite parts, automated equipment, production lines and tooling. Its dedicated official profile dates the company to 2017 and says it develops and manufactures composite parts, automation and tools for aerospace customers. China Composites Expo separately lists the exhibitor as NEWTECH AVIATION CO., LTD., publishes booth 7F28 for 2026, and classifies it under fiber-production equipment, finished-composite production equipment, molds, R&D/design and technology transfer. GetFRP separately publishes a materials-led page for Newtech Group Co., Ltd. and an equipment-led page for Newtech Smart Industry Co., Ltd.; this page represents only the Newtech Aviation legal entity and its aerospace parts, special-purpose equipment and tooling scope, so the three remain separate. High-tech-enterprise, customer-project, domestic-first, technology-gap, process and equipment-performance claims are company- or organizer-published and have not been independently verified by GetFRP.",
  certifications: [
    "集团官网称公司于 2019 年取得 AS9100 体系认证；公开页未提供证书编号、版本、认证机构、范围、场地或有效期，须索取当前证书并核验与实际签约及生产主体的关系",
  ],
  certificationsEn: [
    "The group website says the company obtained AS9100 system certification in 2019. The public page does not provide the certificate number, revision, certification body, scope, site or validity dates; obtain the current certificate and verify its relationship to the actual contracting and manufacturing entity",
  ],
  productsServicesSummary:
    "新创航空官网航空解决方案分为四类：自动化装备、航空复材制件、工装模具和预浸料自动分切。装备包括填充芯材连续成型、帽型长桁热模压、小型多功能长桁、曲面自动预成型、热隔膜预成型及长桁预成型全线交钥匙工程；公司简介另列机械预成型、自动辊压、平板自动铺放和预浸料分切复卷。制件页展示双曲帽型、L/C/帽型长桁、T 型筋、肋、C 型梁、隔框角片、Z 型隔框和填充芯材，并称生产车间约 20,000 平方米、配有清洁间、热压罐和烘箱。模具范围覆盖热压罐、拉挤、HP-RTM、湿法模压和预浸料模压，工装覆盖加工、预成型、装配、检测和成型辅助。上述设施、项目、客户和认证均需审厂、证书及项目文件复核。航空制件 RFQ 应明确图纸/模型与更改单、适航/客户规范、材料与合格供方、预浸料批次和储运、铺层表与方向、夹芯和胶接、模具与工艺规范、热循环和过程记录、孔隙率/纤维体积分数、尺寸和表面要求、NDT 方法与验收级别、首件检验、FAI/PPAP 类文件、特种过程批准、设备校准、人员资格、批次追溯、保存期限和不合格控制。自动化装备和模具 RFQ 还应规定适用零件、节拍、精度与重复性、温压/张力/位移范围、控制与数据接口、安全互锁、FAT/SAT 样件和持续运行、计量与 MSA、厂房接口、备件、培训、质保和性能未达标责任。签约前应书面确认由新创航空、新创智能还是其他集团法人承担报价、合同、设计知识产权、出口、开票、收款和质保责任。",
  productsServicesSummaryEn:
    "Newtech Aviation's official aerospace solution page divides the offer into automation, aerospace composite parts, tooling, and automated prepreg slitting. Equipment includes continuous filler-core forming, hot-press hat-stringer preforming, multifunction stringer trials, automated curved preforming, hot-diaphragm forming and turnkey stringer-preforming lines; the company overview also lists mechanical preforming, automated roll forming, flat-panel automated placement, and prepreg slitting/rewinding. Published parts include double-curvature hat, L-, C- and hat-section stringers, T-stiffeners, ribs, C-beams, frame clips, Z-frames and filler cores. The site reports approximately 20,000 square metres of production space with cleanroom areas, autoclaves and ovens. Mold scope covers autoclave, pultrusion, HP-RTM, wet-compression and prepreg-compression processes, while tooling spans machining, preforming, assembly, inspection and molding aids. These facility, project, customer and certification statements require plant-audit, certificate and project-document verification. An aerospace-part RFQ should control drawings/models and revisions, airworthiness or customer specifications, materials and approved sources, prepreg lot and cold-chain handling, ply book and orientation, core and bonding, tools and process specification, thermal cycle and process records, porosity/fiber volume, dimensions and surface, NDT method and acceptance level, first-article inspection, FAI or PPAP-type records, special-process approval, equipment calibration, personnel qualification, lot traceability, record retention and nonconformance control. Equipment and tooling RFQs should also define the target part, takt time, accuracy and repeatability, temperature/pressure/tension/displacement ranges, controls and data interfaces, safety interlocks, FAT/SAT samples and endurance run, metrology and MSA, facility interfaces, spares, training, warranty and performance-shortfall remedies. Confirm in writing whether Newtech Aviation, Newtech Smart or another group legal entity bears quotation, contract, design-IP, export, invoice, payment and warranty responsibility.",
  ecatalogs: [
    {
      title: "新创航空官方公司专页",
      titleEn: "Official Newtech Aviation Company Profile",
      description: "独立法人名称、2017 年成立信息、航空制件与专机范围。",
      descriptionEn:
        "Official legal identity, 2017 establishment, aerospace parts and special-equipment scope.",
      url: "https://www.newtechgroupcn.com/othercate/othername/hkjj.html",
      format: "Subsidiary profile",
    },
    {
      title: "航空复合材料解决方案",
      titleEn: "Aerospace Composite Solutions",
      description: "自动化装备、航空制件、工装模具和预浸料分切业务。",
      descriptionEn:
        "Official automation, aerospace-part, tooling and prepreg-slitting capability page.",
      url: "https://www.newtechgroupcn.com/othercate/othername/hkfhclzdhsb.html",
      format: "Capability page",
    },
    {
      title: "新创碳谷集团产品与能力手册",
      titleEn: "Newtech Group Product & Capability Brochure",
      description: "集团官网发布的集团架构及新创航空能力资料。",
      descriptionEn:
        "Official group brochure covering corporate structure and Newtech Aviation capabilities.",
      url: "https://www.newtechgroupcn.com/uploadfiles/211.149.255.8/webid1800/uploadfile/202412/7561735201184634.pdf",
      format: "PDF brochure",
    },
    {
      title: "中国国际复材展新创航空展商页",
      titleEn: "China Composites Expo Newtech Aviation Profile",
      description: "独立中英文主体、2026 年 7F28 展位和设备/模具/设计类别。",
      descriptionEn:
        "Organizer-published identity, 2026 booth 7F28 and equipment, mold and design categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-4154-1127610.html",
      format: "Exhibitor profile",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-26T00:00:00.000Z"),
  logo: "/supplier-assets/newtech-group-logo-light.png",
  contactEmail: null,
  contactPhone: null,
  address: null,
  website:
    "https://www.newtechgroupcn.com/othercate/othername/hkjj.html",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 24,
  viewCount: 0,
  capabilities: [
    "aerospace composite parts",
    "aerospace stringers and stiffeners",
    "autoclave and prepreg processing",
    "automated composite preforming equipment",
    "hot-diaphragm forming equipment",
    "turnkey stringer-preforming lines",
    "HP-RTM and compression-molding tools",
    "composite assembly and inspection tooling",
    "prepreg slitting and rewinding",
    "aerospace composite process development",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-26T00:00:00.000Z"),
};
