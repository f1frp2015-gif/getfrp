import type { SupplierListing } from "@/lib/db/schema";

export const HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_ID = "sup-hs-hyosung-carbon-materials-jiangsu";
export const HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_SLUG = "hs-hyosung-carbon-materials-jiangsu";

// Curated from HS Hyosung Advanced Materials' current carbon-fiber and global-
// network pages plus the 2026 CCE G directory. Official logo downloaded
// 2026-08-25 from the current HS Hyosung Advanced Materials website.
export const HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_PROFILE: SupplierListing = {
  id: HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_ID,
  name: "高胜晓星碳材料（江苏）有限公司",
  nameEn: "HS Hyosung Carbon Materials (Jiangsu) Co., Ltd.",
  slug: HS_HYOSUNG_CARBON_MATERIALS_JIANGSU_SUPPLIER_SLUG,
  location: "江苏徐州新沂",
  locationEn: "Xinyi, Xuzhou, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "TANSOME 标准模量 6K 碳纤维",
    "TANSOME 标准模量 12K 碳纤维",
    "TANSOME 标准模量 24K 碳纤维",
    "TANSOME 中间模量 12K 碳纤维",
    "TANSOME 中间模量 24K 碳纤维",
    "TANSOME 超高强 12K 碳纤维",
    "高压氢气/CNG 容器用碳纤维",
    "电缆芯、建筑加固、工业及体育用碳纤维",
  ],
  productsEn: [
    "TANSOME standard-modulus 6K carbon fiber filaments",
    "TANSOME standard-modulus 12K carbon fiber filaments",
    "TANSOME standard-modulus 24K carbon fiber filaments",
    "TANSOME intermediate-modulus 12K carbon fiber filaments",
    "TANSOME intermediate-modulus 24K carbon fiber filaments",
    "TANSOME ultra-high-tensile 12K carbon fiber filaments",
    "Carbon fiber for hydrogen and CNG high-pressure vessels",
    "Carbon fiber for cable cores, construction, general industry and sports",
  ],
  processList: [
    "碳纤维原丝稳定化、碳化与表面处理（集团工艺说明）",
    "织物加工用标准模量碳纤维供应",
    "预浸料加工用碳纤维供应",
    "高压容器纤维缠绕用碳纤维供应",
    "电缆芯连续复材用碳纤维供应",
    "建筑与土木加固用碳纤维供应",
    "航空航天及绿色能源用中间模量纤维供应",
    "牌号、丝束与应用选型支持",
  ],
  processListEn: [
    "Carbon-fiber precursor stabilization, carbonization and surface treatment (group process description)",
    "Standard-modulus carbon fiber supply for fabric processing",
    "Carbon fiber supply for prepreg processing",
    "Carbon fiber supply for high-pressure-vessel filament winding",
    "Carbon fiber supply for continuous-composite cable cores",
    "Carbon fiber supply for civil-engineering reinforcement",
    "Intermediate-modulus fiber supply for aerospace and green energy",
    "Grade, tow-count and application selection support",
  ],
  established: 2022,
  verified: false,
  description:
    "高胜晓星碳材料（江苏）有限公司是 HS HYOSUNG Advanced Materials 位于江苏徐州新沂的碳纤维制造主体。中国国际复材展以该中文主体收录企业；集团当前全球网络页列出 HS HYOSUNG Carbon Materials (Jiangsu) Co., Ltd.、新沂经济开发区地址、电话和 Carbon Fiber 产品线。集团官网的 TANSOME 产品页公开标准模量 6K/12K/24K、中间模量 12K/24K 和超高强 12K 碳纤维，以及高压容器、电缆芯、航空航天、风电、体育、工业与建筑加固等应用。公开公司报告称江苏法人 2022 年设立、2024 年碳纤维增设产线投运。本页把集团产品体系与江苏生产主体联系起来，但不把韩国全集团历史、总产能、认证或所有牌号自动转移为江苏工厂已经核实的产能、批准与设计值。",
  descriptionEn:
    "HS Hyosung Carbon Materials (Jiangsu) Co., Ltd. is the HS Hyosung Advanced Materials carbon-fiber entity in Xinyi, Xuzhou, Jiangsu. China Composites Expo lists the current Chinese entity. The group's current global-network page identifies HS HYOSUNG Carbon Materials (Jiangsu) Co., Ltd., its Xinyi Economic Development Zone location, telephone and Carbon Fiber product line. The official TANSOME page publishes standard-modulus 6K, 12K and 24K, intermediate-modulus 12K and 24K and ultra-high-tensile 12K fibers, with high-pressure vessel, cable-core, aerospace, wind, sports, industrial and construction uses. Public company reporting dates the Jiangsu entity to 2022 and says an expanded carbon-fiber line began operation in 2024. This profile connects the group portfolio to the identified Jiangsu manufacturing entity, but does not transfer the Korean group's full history, total capacity, certifications or every grade into verified Jiangsu-site capacity, approvals or design values.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "集团官网把 TANSOME 分为三个主要产品族。标准模量碳纤维适合织物、预浸料和纤维缠绕，提供 6K、12K、24K，用于高压容器、电缆芯、一般工业和土木建筑；中间模量纤维提供 12K、24K，面向航空航天、绿色能源和体育；超高强产品为 12K，官网称最高拉伸强度可达 6,400 MPa，面向卫星和发动机壳体等高拉伸要求场景。上述参数、应用与未来扩产目标均为集团发布信息，不是 GetFRP 的验证、担保或特定江苏批次的设计允许值。采购 RFQ 应锁定具体 TANSOME 牌号、标准/中间模量类别、丝束数、单丝直径、线密度、拉伸强度与模量、断裂伸长、密度、上浆类型与含量、表面处理、含水率、毛丝/断丝、卷装尺寸、净重、接头、放卷方向和批次追溯，并要求江苏工厂当前 TDS、SDS、规格书、批次 CoA 字段、检验方法、抽样计划和变更通知。高压容器应用必须把纤维牌号与树脂、浸胶、缠绕张力、铺层、固化、内胆、接头、循环和爆破试验共同验证；材料供应商的应用说明不能替代容器设计批准。预浸料和织物客户需验证上浆与树脂相容、浸润、树脂含量、铺覆、固化和层合板性能；电缆芯、建筑加固、风电、航空航天和体育用品分别需要适用的长期环境、疲劳、阻燃、介电、耐候、冲击和目的国合规证据。官网列出的集团总产能与扩产计划不能作为江苏当前可售产能，买方应核实产线、牌号认证矩阵、月度可供量、MOQ、交期、包装、防潮、运输、保质期和异常隔离。集团可持续报告提到质量体系与中国新厂任务，但本轮没有把证书号、范围、发证机构和有效期逐项对齐至江苏法人及碳纤产品，因此认证数组为空。联系电话与地址来自当前官方全球网络；合同前仍应核实销售、开票、收款、出口主体和技术责任边界。",
  productsServicesSummaryEn:
    "The official TANSOME portfolio has three principal families. Standard-modulus fiber is published for fabric, prepreg and filament-winding processing in 6K, 12K and 24K, serving pressure vessels, cable cores, general industry and civil construction. Intermediate-modulus fiber is available in 12K and 24K for aerospace, green energy and sports. The ultra-high-tensile family is a 12K product for tensile-critical uses such as satellites and motor cases; the website states tensile strength up to 6,400 MPa. These values, applications and future expansion targets are group-published information, not GetFRP verification, warranties or Jiangsu-lot design allowables. An RFQ should lock the exact TANSOME grade, modulus class, tow count, filament diameter, linear density, tensile strength and modulus, elongation, density, sizing chemistry and content, surface treatment, moisture, fuzz and broken-filament limits, package size, net weight, splices, unwind direction and lot traceability. Require a current Jiangsu-site TDS, SDS, specification, lot CoA fields, test methods, sampling plan and change-notification terms. Pressure-vessel qualification must evaluate the offered fiber together with resin, impregnation, winding tension, lay-up, cure, liner, boss and cyclic and burst tests; an application statement from the fiber supplier is not vessel approval. Prepreg and fabric processors should validate sizing-resin compatibility, wet-out, resin content, drape, cure and laminate performance. Cable-core, strengthening, wind, aerospace and sports programs each need the relevant long-term environmental, fatigue, flame, dielectric, weathering, impact and destination evidence. Group capacity and expansion plans are not current sellable Jiangsu capacity; audit the line and grade-approval matrix, monthly allocation, MOQ, lead time, package, moisture protection, transport, shelf life and segregation of nonconforming material. Group sustainability reporting refers to quality-system work at the China plant, but this review did not align certificate number, scope, issuer and validity with the Jiangsu entity and carbon-fiber product, so no certification is recorded as verified. The telephone and address come from the current official global network; verify sales, invoice, payee, exporter and technical-liability identities before contract.",
  ecatalogs: [
    { title: "TANSOME 碳纤维产品页", titleEn: "Official TANSOME Carbon Fiber Page", description: "丝束、模量类别与应用目录。", descriptionEn: "Official tow, modulus-family and application directory.", url: "https://www.hshyosungadvancedmaterials.com/en/business/carbon-fiber", format: "Product page" },
    { title: "HS HYOSUNG 全球网络", titleEn: "HS Hyosung Global Network", description: "江苏碳材料主体、地址、电话及产品线。", descriptionEn: "Official Jiangsu carbon-materials entity, address, telephone and product line.", url: "https://www.hshyosungadvancedmaterials.com/en/company/global-network", format: "Company directory" },
    { title: "HS HYOSUNG 公司手册", titleEn: "HS Hyosung Company Profile", description: "集团与江苏法人官方目录。", descriptionEn: "Official group and Jiangsu-entity directory.", url: "https://www.hshyosung.com/resources/front/ebook/en/HS_HYOSUNG_PROFILE_EN.pdf", format: "PDF" },
    { title: "中国国际复材展 G 字母页", titleEn: "China Composites Expo Exhibitors — G", description: "高胜晓星江苏主体、展位与碳纤维类别。", descriptionEn: "Organizer source for the Jiangsu entity, booth and carbon-fiber category.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=G", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/hs-hyosung-carbon-materials-jiangsu-logo.svg",
  contactEmail: null,
  contactPhone: "+86 516 8878 9776",
  address: "No. 1 Xiaoxing Road, Xinyi Economic Development Zone, Xuzhou, Jiangsu 221400, China",
  website: "https://www.hshyosungadvancedmaterials.com/en/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 30,
  viewCount: 0,
  capabilities: ["TANSOME carbon fiber", "standard-modulus 6K 12K and 24K", "intermediate-modulus 12K and 24K", "ultra-high-tensile 12K", "pressure-vessel carbon fiber", "prepreg and fabric processing compatibility", "cable-core carbon fiber", "industrial and sports carbon fiber"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
