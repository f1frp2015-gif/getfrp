import type { SupplierListing } from "@/lib/db/schema";

export const CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_ID =
  "sup-changshu-jiangnan-fiberglass";
export const CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_SLUG =
  "changshu-jiangnan-fiberglass";

// Curated from Changshu Jiangnan Fiberglass's current official company,
// product and contact pages and the 2026 China Composites Expo C directory.
// Official logo downloaded on 2026-08-25 from the live website header CDN:
// https://img03.71360.com/w3/og7445/20250827/45e9f6348627a2f24ec6e0755c91d321.png?ct=webp
export const CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_ID,
  name: "常熟江南玻璃纤维有限公司",
  nameEn: "Changshu Jiangnan Fiberglass Co., Ltd.",
  slug: CHANGSHU_JIANGNAN_FIBERGLASS_SUPPLIER_SLUG,
  location: "江苏常熟",
  locationEn: "Changshu, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "E 玻纤工业布和玻璃纤维机织物",
    "硅胶等涂覆玻璃纤维布卷",
    "热处理和膨体玻璃纤维布",
    "玻璃纤维网格布和复合玻纤布",
    "消防、防火、焊接和车辆用玻纤防火毯",
    "耐高温玻纤制品及按尺寸裁切服务",
  ],
  productsEn: [
    "E-glass fiberglass cloth and woven industrial fabrics",
    "Silicone and other coated fiberglass cloth rolls",
    "Heat-treated and texturized fiberglass cloth",
    "Fiberglass mesh and composite fiberglass cloth",
    "Fiberglass fire, welding and large-vehicle blankets",
    "High-temperature fiberglass products and custom cutting services",
  ],
  processList: [
    "玻璃纤维织造和经编",
    "宽幅玻纤布涂覆",
    "玻纤布热处理与膨化",
    "玻纤布复合、覆膜和表面处理",
    "防火毯裁切、缝制和包装",
    "按尺寸和温度需求定制工业织物",
  ],
  processListEn: [
    "Fiberglass weaving and warp knitting",
    "Wide-width fiberglass-cloth coating",
    "Heat treatment and texturizing",
    "Fiberglass-cloth laminating, facing and surface treatment",
    "Fire-blanket cutting, sewing and packaging",
    "Custom industrial fabrics by dimensions and temperature requirement",
  ],
  established: null,
  verified: false,
  description:
    "常熟江南玻璃纤维有限公司当前英文官网将企业定位为耐高温材料和玻纤复合材料制造及出口商，产品入口包括玻纤网格布、玻纤布、热处理/膨体布、玻纤复合布、附加耐热涂层布以及消防、车辆和焊接防火毯。官网展示经编、宽幅涂覆和大批量织物/防火毯能力。中国国际复材展 C 字母展商页收录同一中文主体并列出玻纤纱、玻纤布/带/毡、织物和复材最终制品。官网把企业沿革写为 1956 年，而展会和公开法人资料存在 1992 年等不同口径；在不能把品牌前身与当前法人注册时间统一前，本页不填写成立年份。产能、认证、市场地位和性能均为企业或展会自述，尚未由 GetFRP 独立审计。",
  descriptionEn:
    "Changshu Jiangnan Fiberglass Co., Ltd. presents itself on its current English website as a manufacturer and exporter of high-temperature materials and fiberglass composites. Its live product navigation covers fiberglass mesh, cloth, heat-treated or texturized fabrics, laminated fiberglass cloth, additional heat-resistant coated fabrics and fire blankets for domestic, vehicle and welding protection. The site also describes warp-knitting and wide-width coating assets and large-volume fabric and blanket output. China Composites Expo lists the same Chinese entity under fiberglass yarn, cloth, tape, mat, woven reinforcement and composite end products. The current site traces the business to 1956, whereas the expo and public legal-entity references use other dates including 1992. The establishment year remains blank until brand or predecessor history can be reconciled with the current legal entity. Capacity, certification, market-position and performance claims remain company- or organizer-published and have not been independently audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "官网产品目录显示江南玻纤并非只提供通用玻纤布，还覆盖热处理、膨体、涂硅或其他涂层的耐热织物、复合布、网格布以及成品防火毯。采购方应按最终用途建立材料级规格：玻璃成分和纱线牌号、经纬密度与组织、单位面积质量、厚度、幅宽、卷长和接头数量；偶联剂或浸润剂、灼烧减量、含水率、拉伸强力及经纬方向；涂层化学体系、单/双面、涂覆量、颜色、针孔、耐折、剥离及耐温；裁切宽度、毛边控制、卷芯、托盘和防潮包装。用于焊接、消防、车辆或烟火分区的成品毯，还需明确实际暴露温度、持续时间、火焰/辐射/熔滴工况、尺寸、缝线、搭接、开合机构、重复使用、清洁和报废准则，不能把“800°C”“防火”等营销描述直接当成整件系统等级。建筑网格布、船艇或道路增强用途则需另行约定耐碱、浸渍、层间粘结、疲劳、老化及目标市场标准。官网和展会提到多项质量、环境及产品认证，但本轮公开页没有完整现行证书包可核对主体、厂址、产品范围、证书号和有效期，因此认证数组保持为空。官网当前公开电话、邮箱和海虞镇向阳路 19 号地址；其中文旧域名和英文新域名并存，报价、付款及发送图纸前应独立核对联系人和收款主体。",
  productsServicesSummaryEn:
    "The current catalog shows that Jiangnan supplies more than generic fiberglass cloth. It covers heat-treated, texturized, silicone- or otherwise coated high-temperature fabrics, laminated cloth, mesh and finished fire blankets. Buyers should qualify the textile rather than rely on a family name: glass composition and yarn designation; warp and fill count and weave; area weight; thickness; width; roll length and permitted joints; sizing or finish; loss on ignition; moisture; tensile strength by direction; coating chemistry, one- or two-side application, add-on, color, pinholes, flex resistance, adhesion and temperature exposure; slit-width tolerance; fray control; core; pallet and moisture-protective packaging. Finished blankets for welding, first response, vehicles or smoke and fire compartmentation require the actual exposure temperature, duration, flame or radiation and molten-splash scenario, dimensions, sewing thread, overlaps, deployment mechanism, reuse, cleaning and retirement criteria. Marketing language such as “800°C” or “fireproof” is not by itself a system classification. Building mesh, marine and road-reinforcement programs need separate alkali resistance, impregnation, interlaminar bonding, fatigue, aging and destination-standard requirements. The website and expo refer to quality, environmental and product approvals, but the reviewed pages do not expose a complete current certificate package sufficient to verify legal entity, plant, product scope, number and validity; the certification arrays remain empty. The current website publishes a telephone, email and No. 19 Xiangyang Road address in Haiyu Town. Older Chinese and newer English domains coexist, so independently verify the contact and beneficiary entity before sending drawings, placing an order or making payment.",
  ecatalogs: [
    {
      title: "江南玻纤官网",
      titleEn: "Official Jiangnan Fiberglass Website",
      description: "公司、产品、产线和当前联系信息。",
      descriptionEn: "Official company, product, production and current contact information.",
      url: "https://www.jnglassfiber.com/",
      format: "Official website",
    },
    {
      title: "江南玻纤产品目录",
      titleEn: "Jiangnan Fiberglass Product Directory",
      description: "玻纤网格布、工业布、复合布、耐热布和防火毯。",
      descriptionEn: "Fiberglass mesh, industrial cloth, laminates, heat-resistant fabrics and blankets.",
      url: "https://www.jnglassfiber.com/products",
      format: "Product directory",
    },
    {
      title: "江南玻纤布系列",
      titleEn: "Jiangnan Fiberglass Cloth Series",
      description: "玻纤工业布和相关织物产品入口。",
      descriptionEn: "Official industrial fiberglass-cloth and woven-product entry.",
      url: "https://www.jnglassfiber.com/Fiberglass-Cloth-Series",
      format: "Product category",
    },
    {
      title: "江南玻纤复合布",
      titleEn: "Jiangnan Composite Fiberglass Cloth",
      description: "复合、覆面和涂层玻纤布产品。",
      descriptionEn: "Official laminated, faced and coated fiberglass-cloth products.",
      url: "https://www.jnglassfiber.com/Glass-Fiber-Cloth-Composite-Series",
      format: "Product category",
    },
    {
      title: "江南玻纤防火毯",
      titleEn: "Jiangnan Fire Blankets",
      description: "消防、车辆和焊接防护毯产品入口。",
      descriptionEn: "Official fire, vehicle and welding blanket category.",
      url: "https://www.jnglassfiber.com/Fire-Blankets",
      format: "Product category",
    },
    {
      title: "江南玻纤联系方式",
      titleEn: "Jiangnan Fiberglass Contact Page",
      description: "海虞镇地址、电话和业务邮箱。",
      descriptionEn: "Official Haiyu address, telephone and business email.",
      url: "https://www.jnglassfiber.com/contact-us.html",
      format: "Official contact",
    },
    {
      title: "中国国际复材展 C 字母展商页",
      titleEn: "China Composites Expo Exhibitors — C",
      description: "常熟江南展商身份、产品类别和展会简介。",
      descriptionEn: "Organizer entry for Changshu Jiangnan and its product categories.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=C",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/changshu-jiangnan-fiberglass-logo.webp",
  contactEmail: "fiber@jn-fiber.cn",
  contactPhone: "+86 512 5256 2980",
  address:
    "No. 19 Xiangyang Road, Haiyu Town, Changshu, Jiangsu, China",
  website: "https://www.jnglassfiber.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 24,
  viewCount: 0,
  capabilities: [
    "fiberglass woven fabrics",
    "coated fiberglass cloth",
    "texturized fiberglass cloth",
    "fiberglass mesh",
    "fire blankets",
    "welding blankets",
    "wide-width coating",
    "custom fabric cutting",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
