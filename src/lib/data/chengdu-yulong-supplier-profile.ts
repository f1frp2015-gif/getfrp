import type { SupplierListing } from "@/lib/db/schema";

export const CHENGDU_YULONG_SUPPLIER_ID = "sup-chengdu-yulong";
export const CHENGDU_YULONG_SUPPLIER_SLUG = "chengdu-yulong-chemical";

// Curated from the exact mainland-China exhibitor's current official website
// and China Composites Expo profile. The site dates the operating history to
// 1958, while its certification statements are on a 2018 company-introduction
// page without current certificates, numbers, scopes or issuer-status links;
// those claims are not converted into verified certification fields. The PVB
// page identifies Chengdu Longcheng Advanced Materials as a controlled company,
// so that range remains explicitly separated from Yulong's own manufacturing.
// Official logo downloaded 2026-08-13 from the current official-site header:
// https://cdn.ilhjy.cn/983379590_shop_ilhjy_cn/public_html/runtime/uploads/a90dddf76d08db20a6245f88168ac400.png
export const CHENGDU_YULONG_SUPPLIER_PROFILE: SupplierListing = {
  id: CHENGDU_YULONG_SUPPLIER_ID,
  name: "成都玉龙化工有限公司",
  nameEn: "Chengdu Yulong Chemical Co., Ltd.",
  slug: CHENGDU_YULONG_SUPPLIER_SLUG,
  location: "四川成都",
  locationEn: "Chengdu, Sichuan, China",
  province: "四川",
  category: "additive",
  products: [
    "氰尿酸三聚氰胺盐（MCA）无卤阻燃剂",
    "三聚氰胺及三聚氰胺泡沫",
    "聚脲防水、防腐与混凝土保护涂层",
    "有机硅单体用催化剂",
    "尿素与碳酸氢铵等化肥及工业原料",
    "杀菌灭藻、缓蚀阻垢及清洗预膜水处理剂",
    "官网列示的控股企业低黏度 PVB 树脂",
  ],
  productsEn: [
    "Melamine cyanurate (MCA) halogen-free flame retardants",
    "Melamine and melamine foam",
    "Polyurea waterproofing, anticorrosion and concrete-protection coatings",
    "Catalysts for direct synthesis of methylchlorosilanes",
    "Urea, ammonium bicarbonate and related fertilizer/industrial feedstocks",
    "Biocide, scale/corrosion-control and cleaning/passivation water-treatment chemicals",
    "Low-viscosity PVB resin listed for a controlled company on Yulong's site",
  ],
  processList: [
    "MCA 氮系无卤阻燃剂生产与改性开发",
    "三聚氰胺及开孔三聚氰胺泡沫生产",
    "双组分聚脲涂层配制与工程应用支持",
    "有机硅催化剂生产",
    "尿素、碳酸氢铵与复合肥生产",
    "工业循环水药剂生产及设备/系统清洗预膜服务",
  ],
  processListEn: [
    "MCA nitrogen-based halogen-free flame-retardant production and modification",
    "Melamine and open-cell melamine-foam production",
    "Two-component polyurea formulation and application support",
    "Organosilicon-catalyst production",
    "Urea, ammonium-bicarbonate and compound-fertilizer production",
    "Industrial-water chemical production and equipment/system cleaning and passivation",
  ],
  established: 1958,
  verified: false,
  description:
    "成都玉龙化工有限公司是位于四川成都青白江的化工材料企业，官网将历史沿革追溯至 1958 年西南地区首家国有小型氮肥示范厂。当前官网产品中心列出 MCA 无卤阻燃剂、三聚氰胺泡沫、聚脲、尿素、有机硅催化剂和水处理剂，并另行介绍控股企业生产的低黏度 PVB 树脂。中国国际复材展以 CHENGDU YULONG CHEMICAL CO., LTD. 收录同一主体，网上展厅发布三聚氰胺、合成氨、尿素、碳酸氢铵和复合肥等历史业务说明；当前展厅未给出产品类别或展位号。历史起点、产能、产品性能和市场地位均为企业或展会发布，尚未由 GetFRP 现场审计。",
  descriptionEn:
    "Chengdu Yulong Chemical Co., Ltd. is a chemical-materials company in Qingbaijiang, Chengdu, Sichuan. Its official site traces the operating history to a state-owned small nitrogen-fertilizer demonstration plant established in 1958, described as the first of its kind in Southwest China. The current product center lists MCA halogen-free flame retardants, melamine foam, polyurea, urea, organosilicon catalysts and water-treatment chemicals, while separately identifying low-viscosity PVB resin as made by a controlled company. China Composites Expo lists the same entity as CHENGDU YULONG CHEMICAL CO., LTD. and publishes historical descriptions of melamine, ammonia, urea, ammonium bicarbonate and compound-fertilizer operations; its current net-show entry supplies neither a product category nor booth number. Historical origin, capacity, performance and market-position statements are company- or organizer-published and have not been independently site-audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "复材相关采购重点是氰尿酸三聚氰胺盐（MCA）阻燃剂。官网称基础 MCA 用于合成树脂、橡胶、润滑材料和防火涂料，改性 MCA-1/MCA-2 面向 PA6/PA66，MG-3 面向硅胶，并称相应配方可达到 UL 94 V-0；这些是 2018 年企业产品页中的配方性能声明，不是当前产品认证或对任意最终材料的通用保证。RFQ 应明确 MCA 牌号、CAS/化学组成、纯度、粒径分布、含水率、白度、分解温度、添加量、基材/玻纤体系、目标厚度与阻燃等级，并索取当前 TDS、SDS、批次 CoA、杂质/重金属/离子数据和由认可实验室出具的具体配方及厚度测试报告。三聚氰胺泡沫需约定密度、开孔率、尺寸、吸声、导热、热稳定、烟毒和阻燃测试方法；聚脲需定义 A/B 组分、混合比、固含/VOC、凝胶和表干时间、拉伸/伸长、附着力、厚度、耐介质、基面处理与施工设备；有机硅催化剂需明确活性组成、杂质、粒径、投料比例和甲基氯硅烷工艺条件。官网尿素页引用 GB/T 2440-2017，但买方仍需确认现行标准版本、工业或农业级、缩二脲、水分、粒径和包装。官网 2018 年企业简介声称通过 ISO 9001、ISO 14001 和清洁生产审核，但未公开当前证书、证书号、范围、到期日和发证机构状态，本页不将其列为已核实认证。官网 PVB 页面明确制造主体为控股企业成都龙成高新材料有限公司；报价、合同、发票、生产工厂、CoA 和质量责任必须确认由哪个法律主体承担。化学品采购应在下单前核对当前 SDS、危险性/运输分类、中文危险公示标签、适用法规清单、HS 编码、包装和仓储条件；出口还需按具体化学组成、用途、目的国和最终用户完成当期海关、出口管制和制裁审查。",
  productsServicesSummaryEn:
    "The principal composites-relevant product is melamine cyanurate (MCA) flame retardant. The official site says its base MCA is used in synthetic resins, rubber, lubricants and fire-protection coatings; modified MCA-1/MCA-2 target PA6/PA66 and MG-3 targets silicone, with company-stated formulations reaching UL 94 V-0. These statements come from a 2018 company product page and are not a current product certificate or a blanket guarantee for every finished compound. An RFQ should define MCA grade, CAS/chemistry, purity, particle-size distribution, moisture, whiteness, decomposition temperature, loading, polymer and glass-reinforcement system, target thickness and flame rating, and require current TDS, SDS, batch CoA, impurity/heavy-metal/ionic data and accredited test reports for the exact formulation and thickness. Melamine foam needs density, open-cell content, dimensions, acoustic absorption, thermal conductivity/stability, smoke-toxicity and fire-test methods. Polyurea needs A/B chemistry, mix ratio, solids/VOC, gel and tack-free time, tensile/elongation, adhesion, thickness, media resistance, substrate preparation and application equipment. Organosilicon catalyst orders need active chemistry, impurities, particle size, dosage and methylchlorosilane-process conditions. The official urea page cites GB/T 2440-2017, but buyers should confirm the current standard revision, agricultural or industrial grade, biuret, moisture, particle size and packing. A 2018 company-introduction page claims ISO 9001, ISO 14001 and cleaner-production audit status but exposes no current certificates, numbers, scopes, expiry dates or issuer status; no certification is recorded as verified here. The PVB page expressly names controlled company Chengdu Longcheng Advanced Materials Co., Ltd. as manufacturer, so quotation, contract, invoice, production site, CoA and quality responsibility must identify the actual legal entity. Before ordering any chemical, verify the current SDS, hazard and transport classification, Chinese hazard label, regulatory inventory status, HS code, packing and storage conditions. Export transactions also require current customs, export-control and sanctions review based on exact composition, use, destination and end user.",
  ecatalogs: [
    {
      title: "玉龙化工官方企业简介",
      titleEn: "Official Yulong Company Profile",
      description: "企业历史、主体、业务和未附完整证书的管理体系声明。",
      descriptionEn:
        "Official history, identity, business description and management-system claims without complete certificates.",
      url: "https://www.cdylhg.com/aboutUsInfo?art_id=237773&art_guid=F83853B4-1C78-2F56-7EDF-EB741683E685",
      format: "Company profile",
    },
    {
      title: "玉龙化工官方产品目录",
      titleEn: "Official Yulong Product Directory",
      description: "MCA、三聚氰胺泡沫、PVB、聚脲、尿素、有机硅催化剂和水处理剂入口。",
      descriptionEn:
        "Official MCA, melamine foam, PVB, polyurea, urea, organosilicon-catalyst and water-treatment entries.",
      url: "https://www.cdylhg.com/productList?menu_id=71149&menu_guid=93932DFF-3492-97E0-7ACC-2D5924665D59",
      format: "Product directory",
    },
    {
      title: "玉龙 MCA 阻燃剂产品页",
      titleEn: "Yulong MCA Flame-Retardant Page",
      description: "MCA 用途、改性牌号与企业发布的配方性能说明。",
      descriptionEn:
        "Company-published MCA uses, modified grades and formulation-performance statements.",
      url: "https://www.cdylhg.com/productInfo?art_id=222111&art_guid=93932DFF-3492-97E0-7ACC-2D5924665D59",
      format: "Product page",
    },
    {
      title: "玉龙三聚氰胺泡沫产品页",
      titleEn: "Yulong Melamine-Foam Page",
      description: "开孔泡沫特性、应用和企业装置说明。",
      descriptionEn:
        "Official open-cell foam properties, applications and equipment statement.",
      url: "https://www.cdylhg.com/productInfo?art_id=222109&art_guid=93932DFF-3492-97E0-7ACC-2D5924665D59",
      format: "Product page",
    },
    {
      title: "中国国际复材展玉龙网上展厅",
      titleEn: "China Composites Expo Yulong Net Show",
      description: "展会发布的英文主体和历史业务简介。",
      descriptionEn:
        "Organizer-published English identity and historical operating description.",
      url: "https://www.chinacompositesexpo.com/en/netshow.php?_MULTI_PAGE_START=240",
      format: "Exhibitor profile",
    },
    {
      title: "玉龙化工官方联系方式",
      titleEn: "Official Yulong Contact Page",
      description: "青白江园区地址、总机、企业邮箱和化肥销售电话。",
      descriptionEn:
        "Official Qingbaijiang site address, switchboard, company email and fertilizer-sales telephone.",
      url: "https://www.cdylhg.com/contact",
      format: "Contact page",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-13T00:00:00.000Z"),
  logo: "/supplier-assets/chengdu-yulong-logo.png",
  contactEmail: "yulong2001427@126.com",
  contactPhone: "+86 28 8360 3056",
  address:
    "Yulong Chemical Eco-Industrial Park, Dawan Subdistrict, Qingbaijiang District, Chengdu, Sichuan, China",
  website: "https://www.cdylhg.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 18,
  viewCount: 0,
  capabilities: [
    "MCA halogen-free flame retardants",
    "melamine and melamine foam",
    "polyurea coatings",
    "organosilicon synthesis catalysts",
    "urea and ammonium bicarbonate",
    "industrial water-treatment chemicals",
    "chemical formulation and application support",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-13T00:00:00.000Z"),
  updatedAt: new Date("2026-08-13T00:00:00.000Z"),
};
