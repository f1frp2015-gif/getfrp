import type { SupplierListing } from "@/lib/db/schema";

export const EXEL_COMPOSITES_NANJING_SUPPLIER_ID =
  "sup-exel-composites-nanjing";
export const EXEL_COMPOSITES_NANJING_SUPPLIER_SLUG =
  "exel-composites-nanjing";

// Curated from Exel's current official China, contact, process and investor
// pages and the matching China Composites Expo entity. Official logo downloaded
// on 2026-08-25 from the organization asset declared by exelcomposites.com:
// https://exelcomposites.com/wp-content/uploads/2020/06/logo.png
export const EXEL_COMPOSITES_NANJING_SUPPLIER_PROFILE: SupplierListing = {
  id: EXEL_COMPOSITES_NANJING_SUPPLIER_ID,
  name: "埃克赛复合材料（南京）有限公司",
  nameEn: "Exel Composites (Nanjing) Co., Ltd.",
  slug: EXEL_COMPOSITES_NANJING_SUPPLIER_SLUG,
  location: "江苏南京",
  locationEn: "Nanjing, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "定制拉挤玻璃纤维复合材料型材与管材",
    "定制拉挤碳纤维复合材料型材与管材",
    "风电叶片碳纤维拉挤板与配套复材部件",
    "交通、电气、通信、建筑和工业设备复材型材",
    "复合材料产品设计、研发与量产工程服务",
  ],
  productsEn: [
    "Custom pultruded GFRP (glass-fiber) profiles and tubes",
    "Custom pultruded CFRP (carbon-fiber) profiles and tubes",
    "Pultruded carbon-fiber planks and composite components for wind power",
    "Composite profiles for transportation, electrical, telecom, building and industrial equipment",
    "Composite product design, R&D and production-engineering services",
  ],
  processList: [
    "连续拉挤成型",
    "玻纤和碳纤增强结构设计",
    "材料、树脂和纤维方向选型",
    "产品研发、模具和工艺开发",
    "切割、后加工与装配",
    "批量制造与质量控制",
  ],
  processListEn: [
    "Continuous pultrusion",
    "Glass- and carbon-fiber structural design",
    "Material, resin and fiber-orientation selection",
    "Product R&D, tooling and process development",
    "Cutting, secondary processing and assembly",
    "Volume production and quality control",
  ],
  established: null,
  verified: false,
  description:
    "埃克赛复合材料（南京）有限公司是 Exel Composites 在中国的制造主体。Exel 当前中国业务页说明其中国制造网络具备拉挤成型和产品设计研发能力，并面向多个行业生产复合材料型材；公司当前联系页仍列示南京办公室邮箱和中国电话。Exel 公开资料显示其 2022 年将南京地区两个制造点整合为一个，并出售已关闭厂址；2024 年及后续公开文件继续提到南京工厂承担拉挤风电部件生产，因此本页仅采用整合后的当前南京制造口径，不沿用已关闭厂址。中国国际复材展以同一中英文主体收录企业。主体、产品和能力信息来自企业或展会公开资料，尚未由 GetFRP 现场审计。",
  descriptionEn:
    "Exel Composites (Nanjing) Co., Ltd. is Exel Composites' manufacturing entity in China. Exel's current China page states that its Chinese footprint includes pultrusion and product-design R&D and manufactures composite profiles for multiple industries; the current contact page continues to publish a Nanjing office email and China telephone number. Company disclosures show that two Nanjing-area manufacturing sites were consolidated into one in 2022 and the closed property was sold. Later 2024 and 2025 disclosures continue to identify a Nanjing factory for pultruded wind-power components, so this profile uses the current consolidated Nanjing manufacturing scope and does not reproduce the closed site's address. China Composites Expo lists the same Chinese and English entity. Identity, products and capabilities are company- or organizer-published and have not been independently site-audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "Exel 集团官网将拉挤、拉绕和连续层压列为连续制造技术，但当前中国制造页只明确把拉挤和产品设计研发归于中国工厂；因此本页不把拉绕或连续层压自动标记为南京现场能力。官方工艺资料说明拉挤通过连续纤维浸渍、预成型、加热模具固化、牵引和定尺切割形成恒定截面型材，可按强度、刚度、耐久、环境和电气要求调整纤维、方向和树脂。集团公开产品和应用包括玻纤/碳纤管材与型材、通信和天线部件、门窗及建筑型材、交通和电气绝缘件、工业工具杆以及风电叶片碳板和部件。RFQ 应明确南京工厂是否为报价产品的实际生产场地，并给出截面图、长度、直线度、扭曲度、尺寸公差、纤维种类和体积分数、毡/织物/轴向纱组合、树脂体系、颜色/表面、阻燃/烟毒/电气/耐候/耐化学要求、二次加工、装配和包装。机械或环境性能必须绑定到具体铺层、树脂、壁厚、纤维方向、测试方法和调湿条件。定制项目还需区分设计、模具、首件批准和重复生产，确认模具产权、修模、工程变更、批次追溯、FAT/首件记录、检验计划和供应中断预案。Exel 官网提供 2025 年发布的集团 ISO 9001、ISO 14001 和 ISO 45001 文件入口，但采购方仍应核对证书附件是否覆盖当前中国法人、南京生产地址和报价范围；本页在未逐项确认完整证书范围前不将其列为已核实认证。旧版资料中的南京地址可能对应已关闭厂址，付款、审厂和物流安排应通过当前 office.nanjing@exelcomposites.com 和中国电话复核。",
  productsServicesSummaryEn:
    "Exel's group website describes pultrusion, pull-winding and continuous lamination as its continuous manufacturing technologies, but the current China page explicitly assigns only pultrusion and product-design R&D to the Chinese factory. This profile therefore does not automatically mark pull-winding or continuous lamination as Nanjing-site capability. The official process guide explains how pultrusion draws continuous reinforcement through resin impregnation, preforming, a heated cure die, pulling and cut-to-length operations to produce constant-section profiles, with fiber, orientation and resin adjusted for strength, stiffness, durability, environment and electrical requirements. Group products and applications include glass- and carbon-fiber tubes and profiles, telecom and antenna components, window and building profiles, transportation and electrical-insulation components, industrial poles, wind-blade carbon planks and other wind components. An RFQ should first confirm that Nanjing is the actual manufacturing site for the quoted product, then define section drawing, length, straightness, twist, dimensional tolerance, fiber type and volume, mat/fabric/axial-roving architecture, resin system, color and finish, fire/smoke/toxicity, electrical, weathering or chemical requirements, secondary machining, assembly and packing. Mechanical or environmental claims must be tied to the exact lay-up, resin, wall, fiber direction, test method and conditioning. Custom programs should separate design, tooling, first-article approval and repeat production and define tooling ownership, repair, engineering change, batch traceability, first-article records, inspection plan and continuity measures. Exel provides December 2025 group ISO 9001, ISO 14001 and ISO 45001 document links, but buyers must confirm that certificate schedules cover the current Chinese legal entity, Nanjing production address and quoted scope. None is recorded as independently verified until that scope is checked. Older published Nanjing addresses may describe the site closed during the 2022 consolidation; confirm audit, payment and logistics details through the current office.nanjing@exelcomposites.com address and China telephone.",
  ecatalogs: [
    {
      title: "Exel 中国制造能力",
      titleEn: "Official Exel China Manufacturing Page",
      description: "中国工厂拉挤、产品设计和研发能力。",
      descriptionEn: "Current China-site pultrusion, product-design and R&D scope.",
      url: "https://ideas.exelcomposites.com/exel-composites-in-china",
      format: "Official China profile",
    },
    {
      title: "Exel 连续制造工艺",
      titleEn: "Official Exel Manufacturing-Process Guide",
      description: "拉挤、拉绕和连续层压的集团工艺说明。",
      descriptionEn: "Group guide to pultrusion, pull-winding and continuous lamination.",
      url: "https://exelcomposites.com/guide-to-composites/our-manufacturing-processes/",
      format: "Process guide",
    },
    {
      title: "Exel 数据表与证书入口",
      titleEn: "Exel Data Sheets and Certificates",
      description: "当前体系文件和管材、型材技术资料入口。",
      descriptionEn: "Current management-system documents and profile/tube data sheets.",
      url: "https://exelcomposites.com/data-sheets-and-specifications/",
      format: "Technical library",
    },
    {
      title: "Exel 中国联系方式",
      titleEn: "Official Exel China Contact",
      description: "当前南京邮箱和中国电话。",
      descriptionEn: "Current Nanjing email and China telephone.",
      url: "https://exelcomposites.com/contact-us/",
      format: "Contact page",
    },
    {
      title: "中国国际复材展 Exel 南京网上展厅",
      titleEn: "China Composites Expo Exel Nanjing Net Show",
      description: "中英文法人主体和参展企业说明。",
      descriptionEn: "Organizer-published Chinese and English legal identity.",
      url: "https://www.chinacompositesexpo.com/cn/netshow-193-91112841.html",
      format: "Exhibitor profile",
    },
    {
      title: "Exel 中国制造整合说明",
      titleEn: "Official Exel China Manufacturing Consolidation Update",
      description: "2022 年南京地区生产整合及已关闭厂址说明。",
      descriptionEn: "Official 2022 consolidation and closed-property clarification.",
      url: "https://investors.exelcomposites.com/company-news/release/exel-composites-plc-financial-statements-release-q1-q4-2022-stable-revenue-and-higher-profitability-in-2022-compared-to-2021-3E1434281AE1F1B4/",
      format: "Official investor release",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/exel-composites-logo.png",
  contactEmail: "office.nanjing@exelcomposites.com",
  contactPhone: "+86 25 5216 4669",
  address: "Nanjing area, Jiangsu, China",
  website: "https://ideas.exelcomposites.com/exel-composites-in-china",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 22,
  viewCount: 0,
  capabilities: [
    "custom glass-fiber pultruded profiles",
    "custom carbon-fiber pultruded profiles",
    "composite tubes and constant-section parts",
    "wind-power pultruded components",
    "product design and application engineering",
    "tooling and process development",
    "secondary processing and assembly",
    "repeat-volume manufacturing",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
