import type { SupplierListing } from "@/lib/db/schema";

export const NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_ID = "sup-ningbo-haigela-lcp-fiber";
export const NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_SLUG = "ningbo-haigela-higlar-lcp-fiber";

// Curated from Higlar's current official company, product, application and
// service pages and the CCE N directory. The complete official gold icon,
// Chinese wordmark and Higlar New Material wordmark were downloaded from
// yokolar.com on 2026-08-25 without cropping.
export const NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_PROFILE: SupplierListing = {
  id: NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_ID,
  name: "宁波海格拉新材料科技有限公司",
  nameEn: "Ningbo Haigela New Material Technology Co., Ltd.",
  slug: NINGBO_HAIGELA_LCP_FIBER_SUPPLIER_SLUG,
  location: "浙江宁波",
  locationEn: "Ningbo, Zhejiang, China",
  province: "浙江",
  category: "manufacturer",
  products: ["Higlar LCP 液晶聚芳酯纤维", "HT 系列高强 LCP 长丝", "LCP 短切纤维", "LCP 单丝", "LCP 合股与加捻纱", "彩色 LCP 纤维", "低介电 LCP 纤维", "多组分复合 LCP 纤维", "柔软和高弹 LCP 纤维", "LCP 织物系列", "LCP 短纤维纸", "LCP 浆粕纸"],
  productsEn: ["Higlar liquid-crystal-polyarylate (LCP) fiber", "HT-series high-strength LCP filament yarn", "Chopped LCP fiber", "LCP monofilament", "Ply-twisted and twisted LCP yarn", "Colored LCP fiber", "Low-dielectric LCP fiber", "Multicomponent composite LCP fiber", "Soft and high-elasticity LCP fiber", "LCP fabric series", "LCP short-fiber paper", "LCP pulp paper"],
  processList: ["LCP 聚合物熔融纺丝", "高强 LCP 长丝生产", "长丝短切和长度定制", "单丝和多股纱生产", "合股、加捻和颜色定制", "低介电和多组分纤维开发", "LCP 织物转换", "短纤维湿法成纸", "LCP 浆粕和浆粕纸转换", "牌号、线密度和应用样品协调"],
  processListEn: ["Melt spinning of LCP polymer", "High-strength LCP filament production", "Filament chopping and length customization", "Monofilament and multi-end yarn production", "Plying, twisting and color customization", "Low-dielectric and multicomponent fiber development", "LCP fabric conversion", "Wet-laid short-fiber paper formation", "LCP pulp and pulp-paper conversion", "Grade, linear-density and application-sample coordination"],
  established: null,
  verified: false,
  description: "宁波海格拉新材料科技有限公司以 Higlar 品牌发布液晶聚芳酯（LCP）纤维及转换材料。官网产品目录覆盖高强长丝、短切纤维、单丝、合股/加捻纱、彩色、低介电、多组分、柔软和高弹 LCP 纤维，以及织物、短纤维纸和浆粕纸。中国国际复材展 N 字母页列出该宁波企业。官网中英文页面对成立年份分别出现 2017 与 2018 两种说法，因此本页不填写成立年份。5G、机器人线缆、航天、雷达罩、防护服和体育面料属于官网应用方向，不等同于企业供应所有下游终端产品。",
  descriptionEn: "Ningbo Haigela New Material Technology Co., Ltd. publishes liquid-crystal-polyarylate (LCP) fiber and converted materials under the Higlar identity. Its current official product directory covers high-strength filament, chopped fiber, monofilament, ply-twisted or twisted yarn, colored, low-dielectric, multicomponent, soft and high-elasticity LCP variants, together with fabric, short-fiber paper and pulp paper. Individual pages expose HT and MF grade families rather than one interchangeable commodity. The China Composites Expo N directory independently lists the Ningbo exhibitor. The official Chinese and English company pages give inconsistent 2017 and 2018 establishment dates, so GetFRP leaves the field blank. Published references to 5G, robot cable, aerospace, radomes, protective clothing and sports fabrics describe possible applications; they do not prove that Haigela manufactures every downstream cable, radome, garment or sporting product.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "LCP 纤维询价应明确牌号、化学体系、长丝/短切/单丝/纱线/织物/纸浆形态、线密度、单丝直径、股数、捻向和捻度、颜色、卷装、长度、含水率、上油或表面处理、强度、模量、伸长、热收缩、熔点/耐温、介电性能和批次公差。短切纤维还需锁定名义与允许长度分布、粉尘、团聚、散装密度、分散性和基体相容性；织物需规定组织、经纬密度、面密度、幅宽、卷长、边部、接头和缺陷；短纤维纸/浆粕纸需规定纤维长度、厚度、克重、孔隙率、均匀性、粘结剂、方向性、幅宽和卷/片包装。官网不同 HT、MF 和功能系列不可只凭类别名互换，采购方应索取当前 TDS、SDS、样品 COA、测试方法和统计范围，并用实际树脂、编织、造纸、涂覆或线缆工艺试样。低介电、高强、柔软、高弹、耐热和耐化学等描述需要与具体牌号、试样构造、方向、温湿度和测试频率绑定，不应自动扩展为下游组件的保证。首件试验应记录材料批次、储存、预处理、设备张力/温度/速度、分散或浸润、成型参数和最终性能；量产需约定批号追溯、留样、变更通知、COA 字段和不合格处理。出口询价还要确认合同与收款法人、生产地点、原产地、包装防潮与纱筒保护、MOQ、交期、Incoterm、运输和目的地化学/纤维合规资料。官网对企业规模、研发、专利、客户或认证的描述均需取得与当前宁波法人、地址、范围、编号和有效期一致的文件后再验证。",
  productsServicesSummaryEn: "An LCP-fiber inquiry should identify the exact grade, polymer chemistry and form: filament, chopped fiber, monofilament, plied or twisted yarn, fabric, short-fiber paper, pulp or pulp paper. Define linear density, filament diameter, end count, twist direction and level, color, package build, cut length, moisture, finish or surface treatment, tensile strength, modulus, elongation, shrinkage, thermal limit, dielectric target and batch tolerance. Chopped fiber also needs nominal and allowable length distribution, dust, agglomeration, bulk density, dispersion and matrix compatibility. Fabric requires weave, ends and picks, areal weight, width, roll length, edges, splices and defect limits. Short-fiber or pulp paper requires fiber length, thickness, basis weight, porosity, uniformity, binder, directionality, width and roll or sheet packing. Higlar's published HT, MF and functional families must not be substituted on the strength of a category name. Request the current grade TDS and SDS, sample certificate fields, test methods and statistical basis, then run the material through the actual resin, braiding, weaving, papermaking, coating or cable process. High-strength, low-dielectric, soft, elastic, thermal and chemical descriptions must be tied to the named grade, specimen construction, direction, conditioning and test frequency; they are not blanket guarantees for a finished downstream assembly. A first-article trial should record material lot, storage and conditioning, equipment tension, temperature and speed, dispersion or impregnation behavior, conversion settings and finished performance. Repeat supply should define lot traceability, retention samples, change notification, COA fields and nonconformance handling. Export inquiries also need the contracting and payee entity, manufacturing site, origin, moisture barrier and bobbin protection, MOQ, lead time, Incoterm, transport and destination chemical or fiber documentation. Company-published scale, R&D, patent, customer and certification statements remain unverified until documents match the current Ningbo legal entity, address, scope, number and validity. Applications such as 5G, robot cables, radomes, protective clothing and sports textiles are qualification contexts, not product keywords for finished goods.",
  ecatalogs: [
    { title: "海格拉英文官网", titleEn: "Higlar English Website", description: "公司和 LCP 材料入口。", descriptionEn: "Official company and LCP-material entry point.", url: "https://yokolar.com/index_en", format: "Official website" },
    { title: "Higlar 产品目录", titleEn: "Higlar Product Directory", description: "纤维、织物、纸和浆粕目录。", descriptionEn: "Official fiber, fabric, paper and pulp directory.", url: "https://www.yokolar.com/products_en", format: "Product directory" },
    { title: "LCP 纤维产品页", titleEn: "LCP Fiber Product Page", description: "代表牌号和规格字段。", descriptionEn: "Representative official grade and specification fields.", url: "https://www.yokolar.com/productshow_en/422", format: "Product page" },
    { title: "应用领域", titleEn: "Published Applications", description: "官网应用方向，需逐项目验证。", descriptionEn: "Company-published application contexts requiring project validation.", url: "https://www.yokolar.com/anli_en", format: "Application page" },
    { title: "服务支持", titleEn: "Higlar Service", description: "技术与服务接口。", descriptionEn: "Official technical and service channel.", url: "https://www.yokolar.com/server_en", format: "Service page" },
    { title: "中国国际复材展 N 字母页（第 3 页）", titleEn: "China Composites Expo — N Directory, Page 3", description: "宁波海格拉展商记录。", descriptionEn: "Organizer source for the Ningbo Haigela exhibitor.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?_MULTI_PAGE_START=60&head=N", format: "Exhibitor directory" },
  ],
  profilePublished: true, profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/ningbo-haigela-logo.png",
  contactEmail: "sales@yokolar.cn", contactPhone: "+86 574 6307 8899",
  address: "No. 181 Zhanhong Road, High-tech Zone, Zonghan Street, Cixi, Ningbo, Zhejiang, China",
  website: "https://www.yokolar.com/", enterpriseId: null, scaleTier: null, brandPriority: 26, viewCount: 0,
  capabilities: ["LCP fiber", "high-strength filament", "chopped LCP fiber", "monofilament and twisted yarn", "functional LCP grades", "LCP fabrics", "LCP short-fiber paper", "LCP pulp paper"],
  standardsSupported: [], moqKg: null, leadTimeDays: null, exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"), updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
