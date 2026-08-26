import type { SupplierListing } from "@/lib/db/schema";

export const NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_ID = "sup-ningbo-refitech-carbon-fiber";
export const NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_SLUG = "ningbo-refitech-carbon-fiber";

// Curated from Refitech Ningbo's current official China pages, the current
// Refitech group site and the CCE N directory. The complete official Refitech
// wordmark and COMPOSITE SOLUTIONS baseline were downloaded from the current
// parent website on 2026-08-25 without cropping; the China site uses the same
// group identity and identifies the Ningbo production site.
export const NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_PROFILE: SupplierListing = {
  id: NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_ID,
  name: "宁波瑞菲科碳纤维有限公司",
  nameEn: "Refitech Ningbo Carbon Fiber Co., Ltd.",
  slug: NINGBO_REFITECH_CARBON_FIBER_SUPPLIER_SLUG,
  location: "浙江宁波",
  locationEn: "Ningbo, Zhejiang, China",
  province: "浙江",
  category: "manufacturer",
  products: ["定制碳纤维无人机与 UAV 零件", "碳纤维机器人抓手和搬运部件", "碳纤维码垛、装配和取放部件", "碳纤维机器外壳、框架和结构件", "圆形碳纤维管", "矩形碳纤维管", "Refiflex 二/三/四通碳纤连接件", "碳纤维板和面板", "eVTOL 碳纤维复合材料部件", "定制玻璃纤维复合材料部件", "模压复材零件与装配件"],
  productsEn: ["Custom carbon-fiber drone and UAV parts", "Carbon-fiber robot grippers and handling components", "Carbon-fiber palletizing, assembly and pick-and-place parts", "Carbon-fiber machine housings, frames and structural components", "Round carbon-fiber tubes", "Rectangular carbon-fiber tubes", "Refiflex two-, three- and four-way carbon connectors", "Carbon-fiber plates and panels", "Carbon-fiber composite parts for eVTOL projects", "Custom glass-fiber composite components", "Molded composite parts and assemblies"],
  processList: ["碳纤和玻纤零件可制造性评审", "预浸料管材成型", "复材模压和热压成型", "RTM 闭模成型", "真空导入成型", "高压釜固化", "CNC 铣削和钻孔", "水刀切割", "粘接、连接和组件装配", "原型、首件和小批量/量产验证"],
  processListEn: ["Carbon- and glass-fiber part manufacturability review", "Prepreg tube molding", "Composite compression and hot-press molding", "RTM closed-mold processing", "Vacuum infusion", "Autoclave curing", "CNC milling and drilling", "Waterjet cutting", "Bonding, joining and component assembly", "Prototype, first-article and series-production validation"],
  established: 2013,
  verified: false,
  description: "宁波瑞菲科碳纤维有限公司是 Refitech 在宁波的复材生产主体。中国官网列出无人机、机器人、机器制造和 eVTOL 等定制碳纤/玻纤部件，并发布圆管、矩形管、Refiflex 连接件、碳纤维板/面板及模压装配能力；联系页给出宁波鄞州生产地址和本地销售、技术电话。Refitech 集团官网也列出 Ningbo 生产地点，中国国际复材展 N 字母页列出该中文企业。本页只把宁波官网明确展示的产品和能力归入该法人；集团其他站点的历史、客户、工艺、证书和地点不自动视为宁波公司的已核实属性。",
  descriptionEn: "Refitech Ningbo Carbon Fiber Co., Ltd. is the Ningbo composite-production identity published by Refitech's China website. The current China pages present custom carbon- and glass-fiber components for drones and UAVs, robot grippers and handling, machine structures and eVTOL development, together with round and rectangular carbon tubes, Refiflex connectors, carbon plates or panels and molded assemblies. The contact page identifies the Yinzhou, Ningbo production address and local sales and technical channels, while the current parent website also lists Ningbo as a production location. China Composites Expo independently lists the Chinese legal name in its N directory. GetFRP attributes only the products and capabilities supported by the Ningbo-facing pages to this entity. Group history, customers, certifications, processes and other sites are not automatically treated as verified Ningbo legal-entity attributes.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "定制碳纤维或玻纤零件 RFQ 应提供受控 3D/2D 图纸、材料体系、铺层和纤维方向、树脂和固化制度、表面、孔位、嵌件、粘接/紧固接口、质量、刚度、强度、疲劳、冲击、温度、阻燃、介电或尺寸稳定性目标，以及年需求、批量和原型节点。圆形/矩形碳管需规定外形、内外尺寸和公差、长度、壁厚、直线度、圆度/角部、纤维方向、表面、端部、孔槽、连接方式和弯扭/压溃性能；碳板/面板需规定长宽厚、铺层、平整度、表面、CNC 边缘、孔位、夹芯/实心结构和方向性能。Refiflex 连接件要核对接口管尺寸、方向、载荷、胶接长度、装配间隙、胶粘剂和防错。无人机、机器人、机器和 eVTOL 部件均需要工况载荷谱、边界、失效模式、环境、寿命和验证计划，官网应用图不能替代设计批准。工艺选择必须与宁波报价实体确认：预浸料、RTM、热压、真空导入、高压釜、CNC 和水刀的适用尺寸、模具、材料、批量及验收并不相同。首件应有材料批号、铺层/成型记录、固化曲线、尺寸和外观报告、无损检测或破坏试样方案、粘接记录、质量和性能结果；量产需定义检验计划、控制计划、治具校准、留样、变更通知和不合格追溯。采购方应取得当前 TDS/SDS、材料与工艺规范、批次证书和适用认证原件。中国官网出现 ISO 9001:2015 描述，但在取得与宁波法人、地址、范围、编号、发证机构和有效期一致的证书前，本页不将其记录为已核实认证。还需确认合同、开票、收款、出口和保修主体，模具所有权，知识产权，Incoterm、包装、防护和售后响应。",
  productsServicesSummaryEn: "A custom carbon- or glass-fiber component RFQ should include controlled 3D and 2D drawings, material system, layup and fiber directions, resin and cure schedule, surface, holes, inserts, bonded or fastened interfaces, mass, stiffness, strength, fatigue, impact, temperature, fire, dielectric or dimensional-stability targets, annual demand, lot size and prototype milestones. Round or rectangular carbon tubes require outer and inner geometry and tolerance, length, wall thickness, straightness, roundness or corner definition, fiber architecture, surface, end treatment, holes and slots, joining method and bending, torsion or crush acceptance. Carbon plates or panels need length, width, thickness, layup, flatness, finish, CNC edge and hole criteria, solid or sandwich construction and directional properties. Refiflex connectors should be checked against mating-tube size and orientation, load path, bond length, assembly clearance, adhesive and poka-yoke needs. Drone, robot, machinery and eVTOL parts all require operating load spectra, boundaries, failure modes, environment, life and a verification plan; application photographs are not design approval. Confirm the exact Ningbo contracting entity and process for every quote. Prepreg, RTM, hot pressing, vacuum infusion, autoclave, CNC and waterjet have different size, tooling, material, volume and acceptance limits and are not interchangeable. A first article should carry material-lot identity, layup or molding traveler, cure record, dimensional and visual report, NDT or destructive-coupon plan, bonding records, mass and performance results. Series production needs an inspection and control plan, fixture calibration, retention samples, change notification and nonconformance traceability. Obtain current material TDS and SDS, process specifications, lot certificates and any applicable certification originals. The China website refers to ISO 9001:2015, but GetFRP does not record it as verified until the certificate matches the Ningbo legal entity, address, scope, number, issuer and validity. Also confirm the contracting, invoicing, payee, export and warranty entity, tooling ownership, IP controls, Incoterm, protective packing and support response. Group claims and other Refitech locations do not automatically apply to this company.",
  ecatalogs: [
    { title: "瑞菲科中国官网", titleEn: "Refitech China Website", description: "宁波主体、产品和联系入口。", descriptionEn: "Official Ningbo-facing company, product and contact entry point.", url: "https://www.refitech.cn/", format: "Official website" },
    { title: "行业复材产品", titleEn: "Composite Products by Industry", description: "无人机、机器人和机器部件。", descriptionEn: "Official drone, robot and machinery component scope.", url: "https://www.refitech.cn/carbon-composite-products-for-different-industries/", format: "Product page" },
    { title: "eVTOL 复材能力", titleEn: "eVTOL Composite Capability", description: "eVTOL 项目部件与开发内容。", descriptionEn: "Official eVTOL part and development content.", url: "https://www.refitech.cn/evtol/", format: "Application page" },
    { title: "宁波联系方式", titleEn: "Refitech Ningbo Contact", description: "生产地址及销售、技术电话。", descriptionEn: "Official production address and local sales and technical channels.", url: "https://www.refitech.cn/contact", format: "Contact page" },
    { title: "Refitech 集团地点", titleEn: "Refitech Locations", description: "集团官网对宁波生产地点的确认。", descriptionEn: "Current parent-site confirmation of the Ningbo production location.", url: "https://www.refitech.eu/about-us/", format: "Corporate page" },
    { title: "中国国际复材展 N 字母页（第 3 页）", titleEn: "China Composites Expo — N Directory, Page 3", description: "宁波瑞菲科展商记录。", descriptionEn: "Organizer source for the Ningbo Refitech exhibitor.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=60&head=N", format: "Exhibitor directory" },
  ],
  profilePublished: true, profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/ningbo-refitech-logo.png",
  contactEmail: null, contactPhone: "Sales: +86 138 0586 3595 / Technical: +86 150 8840 0025",
  address: "West Ground Floor, Building B, No. 398 East Jingu Middle Road, Yinzhou District, Ningbo, Zhejiang, China",
  website: "https://www.refitech.cn/", enterpriseId: null, scaleTier: null, brandPriority: 27, viewCount: 0,
  capabilities: ["custom carbon-fiber components", "carbon-fiber tubes", "carbon-fiber plates and panels", "robot and UAV parts", "composite molding", "vacuum infusion", "CNC and waterjet machining", "bonded assemblies"],
  standardsSupported: [], moqKg: null, leadTimeDays: null, exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"), updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
