import type { SupplierListing } from "@/lib/db/schema";

export const FANGXIN_RESIN_ANHUI_SUPPLIER_ID = "sup-fangxin-resin-anhui";
export const FANGXIN_RESIN_ANHUI_SUPPLIER_SLUG = "fangxin-resin-anhui";

// Curated from Fangxin Resin's current official group site and the 2026 China
// Composites Expo F directory. The website identifies Fangxin Resin (Anhui) as
// one of the group's manufacturing companies and reported trial production in
// July 2026. The official logo was downloaded 2026-08-25 from:
// https://shopcdnalpha.grainajz.com/275/upload/logo/e56367d0d8a6dd882895b8291343380403e31ba33397c27f05d425c733cd0217.png
export const FANGXIN_RESIN_ANHUI_SUPPLIER_PROFILE: SupplierListing = {
  id: FANGXIN_RESIN_ANHUI_SUPPLIER_ID,
  name: "方鑫树脂（安徽）有限公司",
  nameEn: "Fangxin Resin (Anhui) Co., Ltd.",
  slug: FANGXIN_RESIN_ANHUI_SUPPLIER_SLUG,
  location: "安徽宿州",
  locationEn: "Suzhou, Anhui, China",
  province: "安徽",
  category: "resin",
  products: [
    "不饱和聚酯手糊与喷射树脂",
    "玻璃钢机制板材树脂",
    "拉挤型材与玻璃钢格栅树脂",
    "SMC/BMC 模压树脂",
    "RTM 闭模成型树脂",
    "船艇与海洋玻璃钢树脂",
    "缠绕用耐热耐腐蚀树脂",
    "乙烯基酯树脂",
    "阻燃树脂",
    "胶衣与色浆",
  ],
  productsEn: [
    "Unsaturated polyester hand lay-up and spray-up resins",
    "Resins for continuous composite sheet production",
    "Pultrusion and molded-grating resin systems",
    "SMC and BMC molding resins",
    "RTM closed-mold resins",
    "Marine and boatbuilding FRP resins",
    "Heat- and corrosion-resistant filament-winding resins",
    "Vinyl ester resins",
    "Flame-retardant resin families",
    "Gelcoats and color pastes",
  ],
  processList: [
    "手糊与喷射成型树脂配套",
    "玻璃钢连续机制板工艺配套",
    "拉挤与格栅成型树脂配套",
    "SMC/BMC 压缩模塑树脂配套",
    "RTM 闭模注射树脂配套",
    "纤维缠绕管道与储罐树脂配套",
    "船艇与模具手糊树脂配套",
    "牌号选型、样品与技术咨询",
  ],
  processListEn: [
    "Resin supply for hand lay-up and spray-up",
    "Resin supply for continuous FRP sheet production",
    "Resin supply for pultrusion and molded grating",
    "Resin supply for SMC and BMC compression molding",
    "Resin supply for RTM closed-mold injection",
    "Resin supply for filament-wound pipes and tanks",
    "Resin supply for marine laminates and hand-laid molds",
    "Grade selection, sample and technical consultation",
  ],
  established: null,
  verified: false,
  description:
    "方鑫树脂（安徽）有限公司是方鑫树脂集团位于安徽宿州的树脂制造主体。中国国际复材展以该完整中英文主体收录企业，现行方鑫官网也在集团新闻中列出安徽公司，并称其于 2026 年 7 月完成锅炉点火和投料、进入试生产阶段。官网产品目录公开不饱和聚酯、乙烯基酯、醇酸、丙烯酸、水性树脂、胶衣和色浆，其中与纤维复材直接相关的分类包括手糊、机制板、拉挤/格栅、SMC/BMC、RTM、船艇、缠绕、耐热耐腐蚀和阻燃树脂。本页只植入这些官网有直接目录证据的产品与工艺关键词。集团 1992 年历史、多个生产基地及历史产能不能自动作为安徽新生产主体自身的成立年份、稳定产能或交付记录，因此本页不填写安徽公司的成立年份和规模等级。",
  descriptionEn:
    "Fangxin Resin (Anhui) Co., Ltd. is Fangxin Resin's manufacturing entity in Suzhou, Anhui. China Composites Expo lists the exact Chinese and English entity, while the current official group website names the Anhui company in its news and reports that it completed boiler ignition and material feed in July 2026, entering trial production. The official catalog publishes unsaturated polyester, vinyl ester, alkyd, acrylic and waterborne resins, gelcoats and color pastes. Composite-specific directories include hand lay-up, FRP sheet, pultrusion and grating, SMC/BMC, RTM, marine, filament-winding, heat- and corrosion-resistant and flame-retardant resins. GetFRP assigns only those source-backed product and process keywords. The group's 1992 history, multiple plants and historical capacity figures do not automatically establish the Anhui entity's own incorporation date, stable qualified capacity or delivery record, so establishment year and scale tier remain unset.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "方鑫官网按下游工艺列出多个树脂族。手糊目录公开邻苯、间苯、双酚 A、乙烯基酯及对苯体系，并给出 FX-191、FX-196、FX-197、FX-199、FX-3301、FX-189PT、FX-8200PT、FX-2597PT、FX-621、FX-963 等示例牌号的黏度、胶凝时间、固含量和用途。目录把透明板、通风管、耐化学玻璃钢、耐热制品与模具、耐腐蚀管道与储罐、船艇以及手糊和纤维缠绕列为具体应用；其他正式分类还包括机制板、拉挤/格栅、SMC/BMC、RTM、船用、石英石、人造石、阻燃与乙烯基酯树脂。所有数据均为企业目录值，不是 GetFRP 保证值，也不能假定南通目录中的每个牌号已经在安徽线体商业量产。采购方应先确认报价、生产、检验、签约与出口主体是否均为安徽公司，并锁定实际生产地点、牌号、树脂化学体系、促进/触变状态、颜色、黏度及温度、胶凝时间及试验条件、峰值放热、固含、酸值、挥发分、密度、储存期、抑制剂、固化剂与促进剂组合。拉挤和格栅树脂 RFQ 还应明确纤维/上浆相容性、浸润速度、拉速、模温窗口、收缩、表面、放热、脱模、纵横向性能、阻燃、耐候和介质；SMC/BMC 需确认增稠曲线、糊黏度、玻纤含量、熟化、流动、收缩、表面等级、嵌件、模温和循环；RTM 需锁定注射黏度、可用时间、放热、注射压力、模温、排气与孔隙目标；缠绕管道和储罐需以实际树脂、玻纤、固化制度、介质浓度、温度和设计寿命验证耐腐蚀表现。要求供应商针对拟供安徽牌号提交当前 TDS、SDS、批次 CoA 字段、留样和变更控制，区分典型值、规格限与设计允许值，并使用目标增强材料和量产工艺制作首件。官网关于 ISO、船级或其他集团资质的描述未在本轮逐项与安徽法人、生产场地、牌号、范围和有效期对齐，因此认证数组保持为空。集团官网当前公开的是南通总部电话、邮箱和地址；通过该入口询价时必须书面确认安徽业务窗口、开票/收款主体、MOQ、样品、包装、危险品运输、交期、Incoterm、目的国合规和异常处置。",
  productsServicesSummaryEn:
    "Fangxin's official catalog organizes resin families by downstream process. Its hand-lay-up table publishes ortho, iso, bisphenol-A, vinyl-ester and para-phenylene examples, including FX-191, FX-196, FX-197, FX-199, FX-3301, FX-189PT, FX-8200PT, FX-2597PT, FX-621 and FX-963, with viscosity, gel-time, solids and application fields. Published uses include translucent sheet, ventilation duct, chemical-resistant FRP, heat-resistant parts and molds, corrosion-resistant pipe and tank, marine craft, hand lay-up and filament winding. Other official directories cover FRP sheet, pultrusion and grating, SMC/BMC, RTM, marine, quartz or engineered-stone, flame-retardant and vinyl-ester resins. These are company catalog values, not GetFRP guarantees, and the Nantong catalog does not prove that every grade is commercially qualified on the Anhui line. First confirm whether quotation, production, testing, contract and export will all use the Anhui entity. Lock the actual site, grade, chemistry, promoted or thixotropic state, color, viscosity and temperature, gel-time test, peak exotherm, solids, acid value, volatiles, density, shelf life, inhibitor, catalyst and accelerator package. A pultrusion or grating RFQ should also define fiber and sizing compatibility, wet-out, pull speed, die-temperature window, shrinkage, surface, exotherm, release, directional properties, flame, weathering and media exposure. SMC/BMC requires thickening curve, paste viscosity, glass content, maturation, flow, shrinkage, surface class, inserts, mold temperature and cycle. RTM requires injection viscosity, working life, exotherm, injection pressure, mold temperature, venting and void target. Wound pipe and tank qualification must use the offered resin, reinforcement, cure, media concentration, temperature and design life. Require a current TDS, SDS, lot CoA fields, retained-sample policy and change control for the proposed Anhui grade, separating typical values, specification limits and design allowables, followed by a representative trial with the target reinforcement and process. Group-level ISO or classification statements were not aligned in this review to the Anhui legal entity, plant, grade, scope and validity, so no certification is recorded as verified. The public contact belongs to the Nantong head office; obtain a written Anhui contact, invoice and payee identity, MOQ, sample plan, dangerous-goods packing and transport, lead time, Incoterm, destination compliance and nonconformance route before ordering.",
  ecatalogs: [
    { title: "方鑫树脂官网", titleEn: "Official Fangxin Resin Website", description: "集团产品与安徽公司动态入口。", descriptionEn: "Official group product and Anhui-company news entry.", url: "https://www.fangxinresin.com/", format: "Official website" },
    { title: "复材树脂目录", titleEn: "Composite Resin Directory", description: "手糊、板材、拉挤、SMC/BMC、RTM、船用与阻燃目录。", descriptionEn: "Hand lay-up, sheet, pultrusion, SMC/BMC, RTM, marine and flame-retardant directories.", url: "https://www.fangxinresin.com/hand-lay-up-resin", format: "Product directory" },
    { title: "拉挤与格栅树脂", titleEn: "Pultrusion and Grating Resins", description: "官网拉挤/格栅树脂分类。", descriptionEn: "Official pultrusion and grating resin category.", url: "https://www.fangxinresin.com/pultrusiongrid-resin", format: "Product directory" },
    { title: "方鑫集团介绍", titleEn: "Fangxin Group Profile", description: "集团主体、基地与能力边界。", descriptionEn: "Official group identity, sites and capability boundary.", url: "https://www.fangxinresin.com/About-us", format: "Company profile" },
    { title: "方鑫官方联系方式", titleEn: "Official Fangxin Contact", description: "南通总部公开询价入口。", descriptionEn: "Published Nantong head-office inquiry entry.", url: "https://www.fangxinresin.com/Contact-us", format: "Contact page" },
    { title: "中国国际复材展 F 字母页", titleEn: "China Composites Expo Exhibitors — F", description: "安徽公司主体、展位与产品类别。", descriptionEn: "Organizer source for the Anhui entity, booth and product categories.", url: "https://www.chinacompositesexpo.com/en/netshow.php?head=F", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/fangxin-resin-anhui-logo.png",
  contactEmail: "fangxin@china-upr.com",
  contactPhone: "+86 135 1526 2358",
  address: "Suzhou, Anhui, China (confirm the current Anhui plant and contracting address with Fangxin headquarters)",
  website: "https://www.fangxinresin.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 26,
  viewCount: 0,
  capabilities: ["unsaturated polyester resin", "vinyl ester resin", "pultrusion resin", "FRP grating resin", "SMC and BMC resin", "RTM resin", "filament-winding resin", "marine and flame-retardant resin"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
