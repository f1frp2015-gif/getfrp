import type { SupplierListing } from "@/lib/db/schema";

export const CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_ID =
  "sup-changshu-dongyu-fiberglass";
export const CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_SLUG =
  "changshu-dongyu-fiberglass";

// Curated from Dongyu's current official company, mat, tissue, roving, fabric
// and contact pages and the 2026 China Composites Expo C directory. Official
// logo downloaded on 2026-08-25 from the current official header asset:
// https://img.wanwang.xin/contents/sitefiles2056/10284638/images/32449864.png
export const CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_PROFILE: SupplierListing = {
  id: CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_ID,
  name: "常熟市东宇绝缘复合材料有限公司",
  nameEn: "Changshu Dongyu Insulated Compound Materials Co., Ltd.",
  slug: CHANGSHU_DONGYU_FIBERGLASS_SUPPLIER_SLUG,
  location: "江苏常熟",
  locationEn: "Changshu, Jiangsu, China",
  province: "江苏",
  category: "fiber",
  products: [
    "粉剂和乳液粘结 E 玻纤短切毡",
    "缠绕、手糊和拉挤用玻纤表面毡",
    "玻纤无捻粗纱布和电子级玻纤布",
    "缠绕、拉挤和织造用直接无捻粗纱",
    "多轴向玻纤织物和缝编复合毡",
    "玻纤防火毯及碳纤维织物",
  ],
  productsEn: [
    "Powder- and emulsion-bonded E-glass chopped strand mat",
    "Fiberglass surface tissue for winding, hand lay-up and pultrusion",
    "Fiberglass woven roving and electronic-grade fiberglass cloth",
    "Direct fiberglass roving for filament winding, pultrusion and weaving",
    "Multiaxial fiberglass fabrics and stitched combo mats",
    "Fiberglass fire blankets and carbon-fiber fabric",
  ],
  processList: [
    "短切毡和表面毡生产",
    "玻纤织造和电子布生产",
    "直接与合股无捻粗纱上浆",
    "多轴向织物和复合毡缝编",
    "玻纤防火毯加工",
    "幅宽、面密度、卷装和浸润剂定制",
  ],
  processListEn: [
    "Chopped-strand mat and surface-tissue production",
    "Fiberglass weaving and electronic-cloth production",
    "Direct and assembled roving sizing",
    "Multiaxial-fabric and combo-mat stitching",
    "Fiberglass fire-blanket conversion",
    "Custom width, area weight, package and sizing selection",
  ],
  established: 1996,
  verified: false,
  description:
    "常熟市东宇绝缘复合材料有限公司（DYF）官网将企业描述为始于 1996 年的玻纤复合材料研发、生产和销售企业，当前产品覆盖玻纤无捻粗纱、玻纤纱、短切毡、表面毡、复合毡、多轴向织物、玻纤布、网格布、复材制品、防火毯和碳纤维织物。官网公开多个具体技术页，包括粉剂/乳液 E 玻纤短切毡、缠绕/手糊/拉挤用表面毡、缠绕/拉挤/织造用直接无捻粗纱和电子级玻纤布。中国国际复材展 C 字母页收录同一中文主体，展会自述产品销往多个国家和地区。产品性能、认证、客户、奖项和出口覆盖均为企业或展会发布，尚未由 GetFRP 独立审计。",
  descriptionEn:
    "Changshu Dongyu Insulated Compound Materials Co., Ltd., trading as DYF, describes itself on its official site as a fiberglass-composite materials developer, manufacturer and seller founded in 1996. The current portfolio spans fiberglass roving and yarn, chopped strand mat, surface tissue, combo mat, multiaxial fabrics, woven cloth, mesh, composite products, fire blankets and carbon-fiber fabric. Its official technical pages publish powder- and emulsion-bonded E-glass chopped strand mats; surface tissues for winding, hand lay-up or pultrusion; direct roving for winding, pultrusion or weaving; and electronic-grade fiberglass cloth. China Composites Expo lists the same Chinese entity and states that its products reach multiple countries and regions. Product performance, certification, customer, award and export-footprint statements are company- or organizer-published and have not been independently audited by GetFRP.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "东宇短切毡页面公开 M211/M212 等粉剂牌号和不同面密度、幅宽及 UP/VE/EP 相容性；直接无捻粗纱页公开 312/312T/386/386T/386H 等牌号，并说明缠绕、拉挤和织造用途；表面毡分 S-BM(W)、S-BM(H)、S-BM(P) 缠绕、手糊和拉挤系列；电子玻纤布页列出 106、1080、2116、7628 等规格。上述数据不能跨牌号互换，采购 RFQ 应明确 E 玻纤或其他玻璃成分、单丝直径、线密度、浸润剂和目标树脂、短切长度、粘结剂类型和含量、面密度及公差、幅宽、卷径/卷重、含水率、灼烧减量、浸透/浸润速度、拉伸强力、分散均匀性、毛羽和接头。电子布和多轴向织物还要约定组织、经纬密度、纤维方向、缝线、厚度、表面缺陷、卷装张力和可接受拼接。包装、托盘堆码、仓储温湿度及先进先出条件应写进订单。官网称通过 ISO 9001、UKAS 和 DNV GL 等认证，但没有在本轮页面提供足以核对当前法人、地址、范围、证书号和有效期的完整文件，故本页不列已核实认证。官网浏览器访问一度触发 429 限流，但同一官方域名通过普通网页请求可访问，且公司、产品、联系和备案信息一致；供应链团队仍应在发送图纸、交换账号或付款前复核域名、联系人和安全连接。",
  productsServicesSummaryEn:
    "Dongyu's chopped-strand-mat page publishes M211 and M212 powder grades at multiple weights and widths with stated UP, VE and EP compatibility. Its direct-roving page identifies 312, 312T, 386, 386T and 386H grades for winding, pultrusion or weaving. Surface tissue is divided into S-BM(W), S-BM(H) and S-BM(P) winding, hand-lay-up and pultrusion families, while the electronic-cloth page lists specifications such as 106, 1080, 2116 and 7628. These figures are not interchangeable across grades. An RFQ should state E-glass or other glass composition; filament diameter; linear density; sizing and target resin; chopped length; binder chemistry and content; area weight and tolerance; width; roll diameter or weight; moisture; loss on ignition; wet-out and impregnation rate; tensile strength; distribution uniformity; fuzz and permitted joints. Electronic cloth and multiaxial reinforcement also require weave, warp and fill count, fiber directions, stitching yarn, thickness, visual-defect limits, winding tension and splice rules. Packaging, pallet stack, storage temperature and humidity and first-in-first-out controls belong in the purchase specification. The official site says the company has ISO 9001, UKAS and DNV GL-related approvals, but the reviewed pages do not expose a complete current package sufficient to verify the legal entity, site, scope, number and validity. No certification is recorded as independently verified. Browser access to the official site temporarily returned HTTP 429 during review, although normal requests to the same domain exposed consistent company, product, contact and registration content. Reconfirm the domain, contact and secure connection before sending drawings, exchanging credentials or issuing payment.",
  ecatalogs: [
    {
      title: "东宇玻纤官网",
      titleEn: "Official Dongyu Fiberglass Website",
      description: "公司、产品体系、新闻和展会信息。",
      descriptionEn: "Official company, portfolio, news and exhibition information.",
      url: "https://www.dongyufiberglass.com/",
      format: "Official website",
    },
    {
      title: "东宇公司介绍",
      titleEn: "Dongyu Company Profile",
      description: "公司沿革、产品范围和企业自述市场覆盖。",
      descriptionEn: "Official history, product scope and supplier-stated market reach.",
      url: "https://www.dongyufiberglass.com/gsgk",
      format: "Company profile",
    },
    {
      title: "东宇 E 玻纤短切毡",
      titleEn: "Dongyu E-glass Chopped Strand Mat",
      description: "M211/M212 牌号、面密度、幅宽和树脂相容性。",
      descriptionEn: "M211 and M212 grades, area weights, widths and published resin compatibility.",
      url: "https://www.dongyufiberglass.com/productinfo/1528439.html",
      format: "Technical product page",
    },
    {
      title: "东宇玻纤表面毡",
      titleEn: "Dongyu Fiberglass Surface Tissue",
      description: "缠绕、手糊和拉挤系列及公开参数。",
      descriptionEn: "Winding, hand-lay-up and pultrusion series with published parameters.",
      url: "https://www.dongyufiberglass.com/productinfo/1504128.html",
      format: "Technical product page",
    },
    {
      title: "东宇直接无捻粗纱",
      titleEn: "Dongyu Direct Roving",
      description: "缠绕、拉挤和织造牌号及仓储说明。",
      descriptionEn: "Winding, pultrusion and weaving grades plus storage guidance.",
      url: "https://www.dongyufiberglass.com/productinfo/1603075.html?templateId=1133605",
      format: "Technical product page",
    },
    {
      title: "东宇电子级玻纤布",
      titleEn: "Dongyu Electronic-grade Fiberglass Fabric",
      description: "玻纤布规格、密度、面重和拉伸强力表。",
      descriptionEn: "Published fiberglass-cloth styles, counts, area weights and tensile values.",
      url: "https://www.dongyufiberglass.com/productinfo/1538452.html",
      format: "Technical product page",
    },
    {
      title: "东宇联系方式",
      titleEn: "Dongyu Contact Directory",
      description: "总部、国际销售、国内销售、生产和质检联系信息。",
      descriptionEn: "Official headquarters, international sales, domestic sales, production and QC contacts.",
      url: "https://www.dongyufiberglass.com/lxwm",
      format: "Official contact",
    },
    {
      title: "中国国际复材展 C 字母展商页",
      titleEn: "China Composites Expo Exhibitors — C",
      description: "东宇展商身份、产品类别和展会简介。",
      descriptionEn: "Organizer entry for Dongyu, its categories and exhibitor description.",
      url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=C",
      format: "Exhibitor directory",
    },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/changshu-dongyu-fiberglass-logo.png",
  contactEmail: "sales@dongyufiberglass.com",
  contactPhone: "+86 512 5252 1366",
  address: "No. 2 Dongyu Road, Changshu, Jiangsu, China",
  website: "https://www.dongyufiberglass.com/",
  enterpriseId: null,
  scaleTier: "L",
  brandPriority: 25,
  viewCount: 0,
  capabilities: [
    "chopped strand mat",
    "fiberglass surface tissue",
    "fiberglass roving",
    "fiberglass woven fabrics",
    "multiaxial fiberglass",
    "combo mat",
    "electronic fiberglass cloth",
    "carbon-fiber fabric",
  ],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
