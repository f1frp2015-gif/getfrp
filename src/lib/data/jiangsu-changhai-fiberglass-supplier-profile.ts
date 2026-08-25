import type { SupplierListing } from "@/lib/db/schema";

export const JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_ID =
  "sup-jiangsu-changhai-fiberglass";
export const JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_SLUG =
  "jiangsu-changhai-fiberglass";

// Curated from Changhai's official English roving, glass-product,
// thermoplastic, product-detail and contact pages plus the 2026 CCE directory.
// Its current logo CDN returned HTTP 567 and a broken image in a clean browser
// on 2026-08-25, so GetFRP uses the supplier-name text fallback.
export const JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_PROFILE: SupplierListing = {
  id: JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_ID,
  name: "江苏长海复合材料股份有限公司",
  nameEn: "Jiangsu Changhai Composite Materials Holding Co., Ltd.",
  slug: JIANGSU_CHANGHAI_FIBERGLASS_SUPPLIER_SLUG,
  location: "江苏常州",
  locationEn: "Changzhou, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: [
    "玻璃纤维短切毡",
    "玻璃纤维表面毡、连续毡和湿法毡",
    "玻璃纤维无捻粗纱布与双轴向织物",
    "玻纤缝编毡、复合毡和网格布",
    "SMC、缠绕、拉挤、喷射、织造和制毡用玻纤粗纱",
    "PA6/PA66 热塑增强用玻纤短切原丝",
    "LFT 直接粗纱和 CFRT 连续预浸带",
    "连续玻纤增强 PP 复合板",
    "CFRT 蒙皮热塑蜂窝复合板",
    "玻纤涂层毡、蓄电池隔板和真空导入芯材",
  ],
  productsEn: [
    "Glass fiber chopped strand mat",
    "Glass fiber surface mat, continuous mat and wet-laid mat",
    "Glass fiber woven roving and biaxial fabrics",
    "Glass fiber stitched mats, combination mats and mesh fabrics",
    "Glass fiber roving for SMC, winding, pultrusion, spray-up, weaving and mat production",
    "Glass fiber chopped strands for PA6 and PA66 thermoplastics",
    "LFT direct roving and CFRT continuous prepreg tape",
    "Continuous glass fiber-reinforced thermoplastic FRP/CFRT polypropylene panels",
    "Glass fiber FRP/CFRT-skinned thermoplastic honeycomb panels",
    "Coated glass mats, battery separators and vacuum-infusion core materials",
  ],
  processList: [
    "玻璃纤维拉丝和浸润剂适配",
    "粗纱合股与直接纱生产",
    "玻璃纤维短切和分散",
    "短切毡成网与粘结",
    "无捻粗纱织造和多轴向缝编",
    "湿法毡和涂层毡加工",
    "连续玻纤热塑浸渍与 CFRT 制带",
    "玻纤增强 PP 复合板层压",
    "蜂窝芯与 CFRT 蒙皮复合",
    "卷材分切、检验与包装",
  ],
  processListEn: [
    "Glass-fiber forming and sizing-system adaptation",
    "Assembled and direct-roving production",
    "Glass-fiber chopping and dispersion",
    "Chopped-strand-mat web formation and bonding",
    "Woven-roving manufacture and multiaxial stitching",
    "Wet-laid and coated-mat processing",
    "Continuous-fiber thermoplastic impregnation and CFRT tape manufacture",
    "Lamination of glass-reinforced polypropylene composite panels",
    "Thermoplastic honeycomb-core and CFRT-skin lamination",
    "Roll slitting, inspection and packing",
  ],
  established: 2002,
  verified: false,
  description:
    "江苏长海复合材料股份有限公司是常州的玻璃纤维及复合材料供应商。2026 中国国际复材展名录和官网当前目录支持玻纤粗纱、短切原丝、短切毡、表面毡、连续毡、无捻粗纱布、多轴向/缝编复合毡、网格布以及热塑增强用 LFT、CFRT 带材和复合板。本页将 chopped strand mat、fiberglass cloth、fiberglass mat、fiberglass chopped strand mat 与 fiberglass panels 等实测需求词限定到对应产品。CFRT 蜂窝板的玻纤属性来自连续玻纤增强蒙皮，不把所有蜂窝芯都描述为实心玻纤板。官网 Logo 的第三方 CDN 本轮返回 HTTP 567，故使用文字标识；认证、产能和行业地位仍属公司自述。",
  descriptionEn:
    "Jiangsu Changhai Composite Materials Holding Co., Ltd. is a Changzhou supplier of glass-fiber reinforcement and thermoplastic composite materials. Its current official catalog and the 2026 China Composites Expo directory support roving, chopped strands, chopped strand mat, surface and continuous mat, woven roving, biaxial and stitched combinations, mesh, LFT reinforcement, CFRT tape and glass-reinforced thermoplastic panels. GetFRP assigns measured-demand phrases such as chopped strand mat, fiberglass cloth, fiberglass mat, fiberglass chopped strand mat and fiberglass panels only to these published products. The thermoplastic honeycomb offer is described as a core with continuous-glass-fiber-reinforced CFRT skins, not as a solid fiberglass panel or a claim that every honeycomb grade contains glass. Product-specific roving end uses do not mean Changhai manufactures the customer's finished pipe, SMC part or pultruded profile. The official site's current logo CDN returned HTTP 567 and rendered broken in a clean browser, so the page uses a text fallback. Capacity, market-position and certification statements remain company claims pending certificate- and plant-level verification.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary:
    "长海官网按无捻粗纱、玻璃纤维制品和热塑复材分类。粗纱目录包含制毡纱、透明板纱、连续管道纱、SMC 纱、缠绕直接纱、拉挤直接纱、织造直接纱和喷射纱；这些名称说明推荐成型用途，并不代表长海供应相应终端管道、板、SMC 件或拉挤型材。粗纱 RFQ 应约定玻璃类型、线密度、浸润剂体系、树脂相容性、含水率、毛羽、硬挺度、分散/浸透、筒子重量和包装。短切毡需明确粉剂或乳液粘结剂、面密度、幅宽、卷长、苯乙烯溶解、拉伸、含水率和适用树脂；表面毡、连续毡、湿法毡和涂层毡不能用同一规格替代。无捻粗纱布、双轴向、多轴向、缝编毡、复合毡和网格布 RFQ 应锁定组织、方向、面密度、缝线、幅宽、卷装、拼接、外观和树脂渗透。热塑业务包含 PA6/PA66 短切原丝、LFT 直接纱、CFRT 连续预浸带、连续玻纤增强 PP 板及 CFRT 蒙皮蜂窝板；询价应给出基体牌号、玻纤含量、纤维长度/方向、带材厚宽、板材厚度与幅面、层合结构、表面膜、孔隙率、弯曲/冲击、耐热、阻燃、翘曲和成型窗口。蜂窝板还需锁定芯材、孔径、密度、蒙皮结构、剥离/剪切和封边。官网还展示蓄电池隔板、真空导入芯材等卷材，需以具体产品数据表而非分类名下单。官网 Logo 资产通过第三方 CDN 返回 HTTP 567，GetFRP 不热链破图。官网展示的规模、体系、市场位置和质量声明本轮没有形成能对应法人、地址、范围、编号和有效期的独立证书链，因此认证和标准字段保持为空，采购方应在批准供应商前索取当前原件、测试报告、样品和批次 COA。",
  productsServicesSummaryEn:
    "Changhai's official catalog is organized around roving, glass-fiber products and thermoplastic composites. Roving families include mat yarn, transparent-panel yarn, continuous-pipe roving, SMC roving, winding direct roving, pultrusion direct roving, weaving direct roving and spray-up roving. Those names state the recommended conversion process; they do not mean Changhai supplies the customer's finished pipe, panel, SMC part or pultruded profile. A roving RFQ should define glass type, linear density, sizing chemistry, resin compatibility, moisture, fuzz, stiffness, dispersion or wet-out, package weight and packing. Chopped strand mat needs the powder or emulsion binder, areal weight, width, roll length, styrene solubility, tensile handling strength, moisture and target resin. Surface mat, continuous mat, wet-laid mat and coated mat are not substitutes. Woven roving, biaxial or multiaxial fabric, stitched mat, combination mat and mesh inquiries should lock architecture, direction, areal weight, stitch yarn, width, roll, splice rules, appearance and resin permeability. The thermoplastics portfolio includes PA6 or PA66 chopped strands, LFT direct roving, CFRT continuous prepreg tape, continuous-glass-reinforced polypropylene panels and CFRT-skinned honeycomb panels. Specify matrix grade, glass content, fiber length or orientation, tape width and thickness, panel gauge and format, lay-up, surface film, voids, flexural and impact targets, heat resistance, flame behavior, warpage and processing window. A honeycomb inquiry additionally needs core material, cell size, density, skin build-up, peel and shear requirements and edge closure. Battery separators and vacuum-infusion core materials should be ordered from a named technical data sheet rather than a broad category label. The official logo asset returned HTTP 567 through its third-party CDN, so GetFRP does not hotlink the broken image. Published scale, management systems, market position and quality statements were not supported in this review by an independently matched certificate chain for legal holder, address, scope, number and validity date; certifications and supported standards therefore remain empty. Buyers should request current originals, test reports, samples and lot COAs before approval.",
  ecatalogs: [
    { title: "长海官网产品中心", titleEn: "Changhai Official Products", description: "粗纱、玻纤制品和热塑复材入口。", descriptionEn: "Roving, glass products and thermoplastics.", url: "https://en.changhaigfrp.com/Products/1.html", format: "Official website" },
    { title: "玻纤粗纱", titleEn: "Glass Fiber Roving", description: "各成型用途粗纱目录。", descriptionEn: "Roving families by conversion process.", url: "https://en.changhaigfrp.com/Products/Glass_fiber_roving.html", format: "Product category" },
    { title: "玻璃纤维制品", titleEn: "Glass Fiber Products", description: "毡、织物、网格和组合材料。", descriptionEn: "Mats, fabrics, mesh and combinations.", url: "https://en.changhaigfrp.com/Products/Glass_fiber_products.html", format: "Product category" },
    { title: "短切毡", titleEn: "Chopped Strand Mat", description: "官网短切毡产品页。", descriptionEn: "Official chopped-strand-mat detail.", url: "https://en.changhaigfrp.com/Products_1/Glass_fiber_chopped_strand_mat.html", format: "Product page" },
    { title: "热塑增强产品", titleEn: "Thermoplastic Reinforcements", description: "短切、LFT、CFRT 带材和板材。", descriptionEn: "Chopped, LFT, CFRT tape and panels.", url: "https://en.changhaigfrp.com/Products/Glass_Fiber_products_for_thermoplastics.html", format: "Product category" },
    { title: "长海联系页", titleEn: "Official Changhai Contact", description: "常州地址、外贸电话和邮箱。", descriptionEn: "Published Changzhou address, export phone and email.", url: "https://en.changhaigfrp.com/contact.html", format: "Contact page" },
    { title: "中国国际复材展 J 字母页", titleEn: "China Composites Expo — J Directory", description: "展商主体来源。", descriptionEn: "Organizer source for exhibitor identity.", url: "https://www.chinacompositesexpo.com/en/netshow.php?head=J", format: "Exhibitor directory" },
  ],
  profilePublished: true,
  profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: null,
  contactEmail: "mail@changhaigfrp.com",
  contactPhone: "+86 519 8870 8813",
  address: "No. 308 Changhong East Road, Wujin District, Changzhou, Jiangsu, China",
  website: "https://en.changhaigfrp.com/",
  enterpriseId: null,
  scaleTier: null,
  brandPriority: 29,
  viewCount: 0,
  capabilities: ["glass fiber roving", "chopped strand mat", "fiberglass fabrics", "stitched mats", "chopped strands", "LFT roving", "CFRT tape", "thermoplastic composite panels"],
  standardsSupported: [],
  moqKg: null,
  leadTimeDays: null,
  exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"),
  updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
