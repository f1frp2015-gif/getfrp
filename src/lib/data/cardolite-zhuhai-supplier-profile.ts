import type { SupplierListing } from "@/lib/db/schema";

export const CARDOLITE_ZHUHAI_SUPPLIER_ID = "sup-cardolite-zhuhai";
export const CARDOLITE_ZHUHAI_SUPPLIER_SLUG = "cardolite-zhuhai";

// Curated from Cardolite's official Chinese company, composites, product and
// location pages plus the CCE directory. The official organization-schema logo
// was downloaded from cardolite.com on 2026-08-25.
export const CARDOLITE_ZHUHAI_SUPPLIER_PROFILE: SupplierListing = {
  id: CARDOLITE_ZHUHAI_SUPPLIER_ID,
  name: "卡德莱化工（珠海）有限公司",
  nameEn: "Cardolite Chemical (Zhuhai) Co., Ltd.",
  slug: CARDOLITE_ZHUHAI_SUPPLIER_SLUG,
  location: "广东珠海",
  locationEn: "Zhuhai, Guangdong, China",
  province: "广东",
  category: "manufacturer",
  products: [
    "LITE 2401 低黏度酚醛胺环氧固化剂",
    "LITE 2402 低黏度酚醛胺环氧固化剂",
    "NX-4005 腰果酚酚醛交联剂",
    "LITE 513DF 反应型稀释剂和改性剂",
    "LITE 514HP 柔性环氧改性剂",
    "LITE 547LV 低黏度环氧酚醛树脂",
    "NX-9008、LITE 9006 和 LITE 9001 聚醚多元醇",
    "FormuLITE 复合材料配方体系",
  ],
  productsEn: [
    "LITE 2401 low-viscosity phenalkamine epoxy curing agent",
    "LITE 2402 low-viscosity phenalkamine epoxy curing agent",
    "NX-4005 cardanol phenolic crosslinker",
    "LITE 513DF reactive diluent and modifier",
    "LITE 514HP flexible epoxy modifier",
    "LITE 547LV low-viscosity epoxy novolac resin",
    "NX-9008, LITE 9006 and LITE 9001 polyether polyols",
    "FormuLITE formulated composite systems",
  ],
  processList: [
    "腰果壳液衍生物化学加工",
    "酚醛胺固化剂配方",
    "环氧酚醛树脂配制",
    "反应型稀释与增韧改性",
    "多元醇配方开发",
    "复材树脂体系应用配方",
    "实验室配伍和固化窗口评估",
    "批次质量控制和技术支持",
  ],
  processListEn: [
    "Cashew nutshell liquid derivative chemistry",
    "Phenalkamine curing-agent formulation",
    "Epoxy novolac resin formulation",
    "Reactive dilution and flexible modification",
    "Polyol formulation development",
    "Composite resin-system application formulation",
    "Laboratory compatibility and cure-window evaluation",
    "Batch quality control and technical support",
  ],
  established: null,
  verified: false,
  description:
    "卡德莱化工（珠海）有限公司是 Cardolite 在珠海的腰果壳液衍生物生产主体。中国国际复材展和官方复材页面支持酚醛胺环氧固化剂、腰果酚交联剂、反应型稀释剂、柔性改性剂、低黏度环氧酚醛树脂、多元醇及 FormuLITE 配方体系。官网把部分牌号描述为适合手糊、拉挤或胶粘应用，这是树脂应用场景，不代表珠海公司生产拉挤型材或终端复材。本页展示集团当前产品询价范围，但每个订单仍须确认由珠海法人生产、销售或提供技术支持的具体牌号和产地。",
  descriptionEn:
    "Cardolite Chemical (Zhuhai) Co., Ltd. is Cardolite's Zhuhai manufacturing entity for cashew nutshell liquid derivative chemistry. The China Composites Expo listing and Cardolite's current official composites pages support phenalkamine epoxy curing agents, a cardanol phenolic crosslinker, reactive diluent, flexible epoxy modifier, low-viscosity epoxy novolac, polyols and FormuLITE systems. Some grades are described for hand lay-up, pultrusion or adhesive applications. Those are resin-use contexts and do not mean that the Zhuhai company manufactures pultruded profiles, fiber reinforcement or finished composite parts; no such material-product keywords are injected. This page presents the group's current inquiry families, while buyers must confirm the grades actually produced, sold or technically supported by the Zhuhai legal entity and the stated country of origin. Group history, capacity, approvals and other sites' certifications are not transferred to this entity.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "卡德莱复材目录覆盖酚醛胺固化剂、腰果酚交联剂、环氧改性剂、环氧酚醛树脂、多元醇和配方体系。询价需明确树脂主剂、固化剂配比、混合黏度、适用期、凝胶/脱模、固化温度、玻璃化转变温度、力学和耐化学目标，并用实际纤维和工艺验证浸润、放热、孔隙和表面。不同牌号不能按“生物基固化剂”通用名称互换，珠海生产/销售范围、SDS、TDS、CoA、危运和法规文件均须以正式报价为准。",
  productsServicesSummaryEn:
    "Cardolite's official composites portfolio covers phenalkamine curing agents, a cardanol phenolic crosslinker, reactive dilution, flexible epoxy modification, low-viscosity epoxy novolac, polyols and formulated systems. LITE 2401 and LITE 2402 are presented as solvent-free, very-low-viscosity phenalkamine curing agents for fiber-reinforced epoxy composites. NX-4005 is a solvent-free, low-viscosity cardanol phenolic crosslinker described for hand lay-up, pultrusion and adhesive use; LITE 513DF and LITE 514HP address reactive dilution and flexibility, while LITE 547LV is an epoxy novolac and the NX/LITE 9000 families are polyols. These descriptions are starting points, not interchangeable guarantees. An RFQ should state the base resin, curing-agent ratio, mixed viscosity, pot life, gel and demold target, cure schedule, laminate thickness, peak exotherm, glass-transition requirement, mechanical and chemical-resistance targets, color, moisture sensitivity and storage life. Evaluation should use the buyer's actual glass, carbon or other reinforcement and the intended process to verify wet-out, drain, air release, exotherm, void content, surface finish and post-cure. Buyers should request the current regional TDS, SDS, sample certificate of analysis, regulatory declarations, transport classification and controlled formulation-change notice. Cardolite's official locations page says products are made at Zhuhai and Mangalore facilities, but the quote must identify which grades are produced or supplied by Cardolite Chemical (Zhuhai), the manufacturing origin, seller of record and technical-support entity. The broader group's history, capacity, patents, certifications and approvals are not automatically attributes of the Zhuhai legal entity. No pultruded-profile, fiberglass, carbon-fiber or finished-part search term is assigned merely because a resin is recommended for that conversion process.",
  ecatalogs: [
    { title: "卡德莱中文官网", titleEn: "Cardolite China Official Website", description: "中国业务与产品入口。", descriptionEn: "Official China business and product entry.", url: "https://cn.cardolite.com/", format: "Official website" },
    { title: "卡德莱公司简介", titleEn: "About Cardolite", description: "集团与中国业务范围。", descriptionEn: "Published group and China scope.", url: "https://cn.cardolite.com/about/", format: "Company page" },
    { title: "卡德莱复材产品", titleEn: "Cardolite Composites", description: "复材树脂、固化剂和改性剂目录。", descriptionEn: "Composite resin, curing-agent and modifier families.", url: "https://cn.cardolite.com/composites/", format: "Product category" },
    { title: "卡德莱全球地点", titleEn: "Cardolite Locations", description: "珠海工厂地址和联系电话。", descriptionEn: "Official Zhuhai site address and telephone.", url: "https://cn.cardolite.com/locations/", format: "Contact page" },
    { title: "中国国际复材展 K 字母页", titleEn: "China Composites Expo — K Directory", description: "珠海主体与复材产品来源。", descriptionEn: "Organizer source for the Zhuhai entity and composite scope.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=K", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/cardolite-logo.png",
  contactEmail: null,
  contactPhone: "+86 756 726 9066",
  address: "No. 1248 Shihua 9th Road, Gaolan Port Economic Zone, Zhuhai 519050, Guangdong, China",
  website: "https://cn.cardolite.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 27,
  viewCount: 0,
  capabilities: ["phenalkamine curing agents", "cardanol phenolic crosslinkers", "reactive diluents", "flexible epoxy modifiers", "epoxy novolac resin", "polyether polyols", "composite resin formulation", "technical application support"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
