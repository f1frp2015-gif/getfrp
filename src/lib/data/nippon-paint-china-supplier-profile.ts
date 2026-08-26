import type { SupplierListing } from "@/lib/db/schema";

export const NIPPON_PAINT_CHINA_SUPPLIER_ID = "sup-nippon-paint-china";
export const NIPPON_PAINT_CHINA_SUPPLIER_SLUG = "nippon-paint-china-composite-coatings";

// Curated from Nippon Paint China's current Fiber Paint product/news pages,
// contact page and the CCE L directory. The complete official China mark was
// downloaded from nipponpaint.com.cn on 2026-08-25 without cropping its symbol
// or Chinese wordmark.
export const NIPPON_PAINT_CHINA_SUPPLIER_PROFILE: SupplierListing = {
  id: NIPPON_PAINT_CHINA_SUPPLIER_ID,
  name: "立邦涂料（中国）有限公司",
  nameEn: "Nippon Paint (China) Co., Ltd.",
  slug: NIPPON_PAINT_CHINA_SUPPLIER_SLUG,
  location: "上海",
  locationEn: "Shanghai, China",
  province: "上海",
  category: "manufacturer",
  products: ["纤邦彩®碳纤维复合材料涂装解决方案", "工业碳纤维复材涂装产品系列", "碳纤维复材 A 级表面涂装方案", "纤邦彩®玻纤复材涂装产品系列", "纤邦彩®光伏复合材料边框涂装解决方案", "低温快固功能涂料系列", "高耐候功能涂料系列", "高硬度功能涂料系列", "复材功能涂料添加剂系列", "复材颜色、光泽与视觉效果方案"],
  productsEn: ["Fiber Paint carbon-fiber composite coating solution", "Industrial carbon-composite coating series", "Class-A-surface coating solution for carbon composites", "Fiber Paint glass-fiber composite coating series", "Fiber Paint photovoltaic-composite-frame coating solution", "Low-temperature fast-curing functional coating series", "High-weatherability functional coating series", "High-hardness functional coating series", "Functional coating additive series for composites", "Composite color, gloss and visual-effect coating options"],
  processList: ["碳纤维复材表面状态评估", "玻纤复材表面和纤维外露评估", "低表面能基材润湿与附着方案", "纤维复印和织纹凹陷涂层设计", "低温快速固化涂装", "水性玻纤复材涂装", "颜色、光泽和视觉效果配置", "紫外、盐雾、高温高湿和风沙工况选型", "光伏复材边框涂装", "样板、工艺窗口和量产线验证"],
  processListEn: ["Carbon-composite surface-condition assessment", "Glass-composite surface and exposed-fiber assessment", "Wetting and adhesion design for low-surface-energy substrates", "Coating design for fiber print-through and weave depressions", "Low-temperature fast-cure coating application", "Waterborne coating of glass-fiber composites", "Color, gloss and visual-effect configuration", "UV, salt-spray, heat-humidity and windblown-sand service selection", "Photovoltaic composite-frame coating", "Panel, process-window and production-line validation"],
  established: null,
  verified: false,
  description: "立邦涂料（中国）有限公司官网发布纤邦彩®复合材料涂装矩阵，覆盖碳纤维复材、玻纤复材和功能涂料。碳纤维方案针对粗糙度、低表面能、附着、纤维复印、织纹凹陷和 A 级外观挑战，并面向交通、航空航天、工业和体育休闲制品；玻纤方案面向光伏组件、风电和节能门窗，另有纤邦彩®光伏复合材料边框涂装方案；功能系列包括低温快固、高耐候、高硬度和添加剂。中国国际复材展 L 字母页列出立邦涂料（中国）展商。碳纤维和玻璃纤维是被涂装的基材，不是立邦供应的增强材料；本页不把立邦列为纤维、织物或复材制品制造商。性能、VOC、奖项和项目数据按企业发布信息呈现，仍需以牌号、工艺、膜厚、基材和目标规范验证。",
  descriptionEn: "Nippon Paint (China) Co., Ltd. publishes a Fiber Paint composite-coating matrix covering carbon-fiber composites, glass-fiber composites and functional coatings. Its carbon-composite page identifies surface roughness, low surface energy, adhesion, fiber print-through, weave depressions and Class-A appearance as coating challenges, while the current exhibition article places the series in transportation, aerospace, industrial and sporting-goods applications. The glass-composite series is described for photovoltaic modules, wind and energy-efficient windows, with a separate Fiber Paint photovoltaic-composite-frame solution. Functional families include low-temperature fast cure, high weatherability, high hardness and additives. China Composites Expo's L directory lists the Nippon Paint China exhibitor. Carbon and glass fibers are substrates being coated, not reinforcement products supplied by Nippon Paint; the profile does not classify the company as a fiber, fabric or composite-part manufacturer. Performance, VOC, award and project statements remain supplier-published and require grade-, process-, film-build-, substrate- and specification-matched validation.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "复材涂层 RFQ 应说明碳纤维或玻纤基材、树脂、成型工艺、脱模剂和表面状态，目标颜色、光泽、外观等级、纤维复印容限、膜系和膜厚，以及生产线温度、时间、设备、节拍和 VOC/环保限制。户外、光伏、交通、体育器材、航空和工业场景还要给出紫外、湿热、盐雾、风沙、石击、刮擦、化学品和温度循环等工况与验收方法。低温快固、水性、高耐候或高硬度是系列定位，不代表任一牌号自动满足全部性能。买方应索取完整层间体系、TDS/SDS、基材清洁和打磨规范、配比和适用期、闪干与固化窗口、返工方案、色差和光泽控制、附着和耐久试验，并用实际基材做实验室样板、线试和量产确认。",
  productsServicesSummaryEn: "A composite-coating RFQ should identify carbon- or glass-fiber construction, matrix resin, molding process, peel ply or release agent, post-cure, surface roughness, exposed fiber, porosity, contamination and current pretreatment. Define the target color, gloss, visual effect and appearance class; allowable fiber print-through, pinholes, weave depressions and orange peel; required primer, surfacer, color and clear functions; dry-film build and mass; masking and bond areas; touch-up and repair expectation. State the available cleaning, sanding, plasma or other pretreatment, spray or application equipment, flash and oven zones, part temperature, maximum cure temperature, takt, batch size and VOC or environmental restrictions. Outdoor, photovoltaic, transport, sporting-goods, aerospace and industrial applications need service-specific exposure: UV and weathering, heat and humidity, salt spray, windblown sand, water immersion, cleaning chemicals, fuels or oils, stone chip, scratch, abrasion, impact, thermal cycling and substrate flex. Specify the requested test method, specimen and acceptance value rather than relying on labels such as high weatherability or high hardness. For photovoltaic composite frames, include frame resin and reinforcement, geometry, cut ends and joints, inland, desert or marine site, expected design life, module assembly and electrical-isolation constraints. For a Class-A carbon-composite surface, agree reference panels, viewing conditions, color tolerance, gloss range, wave-scan or other appearance metrics and the permitted rework rate. Ask Nippon Paint China for the exact system and grade names, TDS and SDS, mix ratio, induction and pot life, thinning, application window, wet and dry film, flash, cure and post-cure, sanding and intercoat limits, storage, shelf life, cleanup and repair procedure. Laboratory panels should use production substrate and release history. Line trials should confirm wetting, adhesion, solvent entrapment, print-through, color and gloss, cure, yield, overspray and takt before approval. Require test reports whose coating, substrate, pretreatment, film build, cure and laboratory match the proposed process; marketing statements about low VOC, fast cure, weathering, scratch or stone-chip performance are not transferable without that match. Clarify whether quotation scope includes paint, additives, process engineering, line audit, color matching, trial panels, on-site launch, defect analysis and ongoing technical service. Carbon and glass reinforcement remain customer substrates, so GetFRP excludes raw-fiber and composite-part supplier phrases from this coating profile.",
  ecatalogs: [
    { title: "立邦中国官方网站", titleEn: "Official Nippon Paint China Website", description: "中国业务和联系信息入口。", descriptionEn: "Official China business and contact entry.", url: "https://www.nipponpaint.com.cn/", format: "Official website" },
    { title: "纤邦彩碳纤维复材涂装方案", titleEn: "Fiber Paint Carbon-Composite Coating Solution", description: "碳纤维复材表面挑战和涂装方案。", descriptionEn: "Official carbon-composite surface challenges and coating solution.", url: "https://www.nipponpaint.com.cn/paint/repairDetail/gac/102", format: "Product page" },
    { title: "复材涂装产品矩阵", titleEn: "Composite-Coating Product Matrix", description: "碳纤维、玻纤和功能涂料系列。", descriptionEn: "Official carbon, glass and functional coating series.", url: "https://www.nipponpaint.com.cn/news/2306", format: "Official news" },
    { title: "光伏复合材料边框涂装", titleEn: "Photovoltaic Composite-Frame Coating", description: "纤邦彩光伏复材边框方案。", descriptionEn: "Official Fiber Paint photovoltaic composite-frame solution.", url: "https://www.nipponpaint.com.cn/news/2273", format: "Official news" },
    { title: "立邦联系方式", titleEn: "Nippon Paint China Contact", description: "业务联系和全国服务热线。", descriptionEn: "Official business contact and national service line.", url: "https://www.nipponpaint.com.cn/contact", format: "Contact page" },
    { title: "中国国际复材展 L 字母页", titleEn: "China Composites Expo — L Directory", description: "立邦涂料（中国）展商主体来源。", descriptionEn: "Organizer source for the Nippon Paint China exhibitor.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=L", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/nippon-paint-china-logo.png",
  contactEmail: null,
  contactPhone: "400-885-1687",
  address: null,
  website: "https://www.nipponpaint.com.cn/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 27,
  viewCount: 0,
  capabilities: ["carbon-composite coatings", "glass-composite coatings", "photovoltaic frame coatings", "low-temperature fast-cure coatings", "waterborne composite coatings", "weatherable coatings", "high-hardness coatings", "color and appearance engineering"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
