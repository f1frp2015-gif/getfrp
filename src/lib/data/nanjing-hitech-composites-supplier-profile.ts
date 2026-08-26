import type { SupplierListing } from "@/lib/db/schema";

export const NANJING_HITECH_COMPOSITES_SUPPLIER_ID = "sup-nanjing-hitech-composites";
export const NANJING_HITECH_COMPOSITES_SUPPLIER_SLUG = "nanjing-hitech-pultruded-composites";

// Curated from HICOMA's current official company, product and contact pages and
// the CCE N directory. The complete official HICOMA logo was downloaded from
// hitechfrp.com on 2026-08-25 without cropping the mark or wordmark.
export const NANJING_HITECH_COMPOSITES_SUPPLIER_PROFILE: SupplierListing = {
  id: NANJING_HITECH_COMPOSITES_SUPPLIER_ID,
  name: "南京海拓复合材料有限责任公司",
  nameEn: "Nanjing Hitech Composites Co., Ltd.",
  slug: NANJING_HITECH_COMPOSITES_SUPPLIER_SLUG,
  location: "江苏南京",
  locationEn: "Nanjing, Jiangsu, China",
  province: "江苏",
  category: "manufacturer",
  products: ["拉挤碳纤维板", "拉挤碳纤维棒", "拉挤碳纤维管", "拉挤碳纤维槽材和异型材", "碳纤维筋与预应力板加固系统", "拉挤玻璃纤维梁、槽钢、角钢和管材", "玻璃纤维筋、板材和格栅", "高性能碳纤维织物", "高性能玻璃纤维织物", "风电叶片结构胶", "碳板胶和工程结构胶", "高性能聚氨酯复合支架系统"],
  productsEn: ["Pultruded carbon-fiber plates", "Pultruded carbon-fiber rods", "Pultruded carbon-fiber tubes", "Pultruded carbon-fiber channels and custom profiles", "Carbon-fiber rebar and prestressed plate reinforcement systems", "Pultruded fiberglass beams, channels, angles and tubes", "Fiberglass rebar, plates and grating", "High-performance carbon-fiber fabrics", "High-performance glass-fiber fabrics", "Wind-blade structural bonding adhesives", "Carbon-plate and engineering structural adhesives", "High-performance polyurethane composite support systems"],
  processList: ["碳纤维和玻纤复材连续拉挤", "板、棒、管、槽及异型截面制造", "数控切割和机加工", "结构胶研发与生产", "碳纤维与玻纤织物生产", "树脂体系和阻燃等级选型", "型材截面与连接深化", "风电和土木结构粘接配套", "定制型材打样与首件确认", "批次追溯和项目文件配套"],
  processListEn: ["Continuous carbon- and glass-fiber composite pultrusion", "Plate, rod, tube, channel and custom-section production", "CNC cutting and profile machining", "Structural-adhesive development and production", "Carbon- and glass-fiber fabric production", "Resin-system and flame-performance selection", "Profile-section and connection detailing", "Wind-energy and civil-structure bonding support", "Custom-profile sampling and first-article confirmation", "Batch traceability and project-document support"],
  established: 2003,
  verified: false,
  description: "南京海拓复合材料有限责任公司以 HICOMA/海拓和 Lica/力卡系列提供拉挤碳纤维与玻璃纤维型材、高性能纤维织物和结构胶。官网明确列出碳纤维板、棒、管、槽材、筋材，玻纤梁、槽钢、角钢、管、板、格栅，以及风电叶片、碳板和工程结构粘接产品。中国国际复材展目录进一步确认了南京海拓展商主体及拉挤复材、环氧结构胶范围。本页只映射官网实际供应的碳纤维制品、碳板/棒/管、织物、玻纤拉挤型材和格栅词；应用或加固系统名称不能替代工程设计与牌号文件。",
  descriptionEn: "Nanjing Hitech Composites Co., Ltd. publishes an integrated HICOMA and Lica offer spanning pultruded carbon- and glass-fiber profiles, high-performance reinforcement fabrics and structural adhesives. Its current official catalog explicitly lists carbon-fiber plate, rod, tube, channel, rebar and prestressed plate systems; fiberglass beams, channels, angles, tubes, plates, rebar and grating; carbon- and glass-fiber fabrics; and bonding products for wind blades, carbon plate and civil structures. The China Composites Expo directory independently supports the Nanjing exhibitor identity and its pultruded-composite and epoxy-adhesive scope. GetFRP therefore assigns only demand phrases supported by those actual products, including carbon-fiber products, plates, rods, tubes and fabrics, pultruded fiberglass profiles and fiberglass grating. An application, system or performance label is not treated as a substitute for the offered grade, section drawing, laminate architecture, adhesive TDS or project engineering.",
  certifications: [],
  certificationsEn: [],
  productsServicesSummary: "海拓询价应先区分碳纤拉挤件、玻纤拉挤件、增强织物、结构胶或由多类产品组成的系统。型材项目需提交截面图、纤维种类和方向、树脂体系、纤维含量、表面毡、尺寸与直线度公差、长度、孔槽和端部加工、连接件、载荷、环境、阻燃或绝缘要求及包装方式。碳板、棒、管和筋材还应约定拉伸/弯曲模量与强度方向、玻璃化温度、层间和表面质量、批次追溯及抽样测试。织物需明确纤维牌号、克重、幅宽、组织、经纬密度、上浆/表面处理和卷装。结构胶需给出基材、间隙、施工温度、混合比、适用期、触变、固化和后固化、Tg、剪切/剥离/疲劳、湿热与耐久工况。官网所列 DNV GL、ISO 或标准参与是企业发布信息；在未取得与现行法人、工厂、产品和有效期匹配的证书前，本页不把它们写入已核验证书字段。",
  productsServicesSummaryEn: "An inquiry should first separate a pultruded carbon-fiber part, pultruded fiberglass part, reinforcement fabric, structural adhesive or a qualified system combining several of these products. For a profile, provide a controlled section drawing, carbon or glass reinforcement and longitudinal/transverse architecture, resin chemistry, nominal fiber content, surface veil or finish, color, section dimensions and tolerances, straightness and twist, cut length, holes, slots, end machining, inserts and connections. Define load cases, span and support, buckling or stability requirements, service temperature, UV, moisture, chemicals, fatigue, electrical or flame duty, design life, inspection and packing support. Carbon plate, rod, tube and rebar programs should additionally state tensile and flexural modulus and strength by direction, compression or shear needs, glass-transition temperature, surface and internal quality, bond preparation, allowable defects, lot definition, traceability and witness or third-party testing. Do not assume that a generic carbon profile is suitable for prestressing or structural strengthening without a complete system design and the corresponding adhesive, anchor, installation and acceptance evidence. A fabric RFQ should identify fiber grade, areal weight, weave or unidirectional architecture, warp and fill count, width, length, selvage, sizing or finish, roll joints, defects and packaging. Adhesive qualification should define every substrate and preparation, bond-line thickness, mix ratio, viscosity and thixotropy, application and cure temperatures, working and fixture time, post-cure, Tg, shear, peel, cleavage, fatigue, creep, moisture, salt, chemical and thermal cycling, plus application tooling and inspection. Request current grade TDS and SDS, drawing or controlled specification, typical and guaranteed properties, test methods, certificate-of-analysis example, change control, shelf life and storage, first-article and batch records. The official site publishes management-system, DNV GL and standard-participation statements, but GetFRP leaves certification arrays empty until current documents are matched to the legal entity, production site, product scope and validity. Buyers should also confirm which HICOMA or Lica entity will quote, manufacture, invoice and receive payment, and separate engineering, machining, site installation and test responsibilities in the purchase order.",
  ecatalogs: [
    { title: "海拓官网", titleEn: "Official HICOMA Website", description: "企业与产品入口。", descriptionEn: "Official company and product entry.", url: "https://www.hitechfrp.com/", format: "Official website" },
    { title: "海拓公司简介", titleEn: "HICOMA About Us", description: "主体、成立年份和业务范围。", descriptionEn: "Official entity, founding year and scope.", url: "https://www.hitechfrp.com/aboutus.html", format: "Company page" },
    { title: "拉挤碳纤维型材", titleEn: "Pultruded Carbon-Fiber Profiles", description: "碳板、棒、管、槽材和筋材目录。", descriptionEn: "Official carbon plate, rod, tube, channel and rebar directory.", url: "https://www.hitechfrp.com/product_category/36419.html", format: "Product category" },
    { title: "拉挤玻纤型材", titleEn: "Pultruded Fiberglass Profiles", description: "梁、槽钢、角钢、管、板和筋材目录。", descriptionEn: "Official beam, channel, angle, tube, plate and rebar directory.", url: "https://www.hitechfrp.com/product_category/36415.html", format: "Product category" },
    { title: "高性能织物", titleEn: "High-Performance Fabrics", description: "碳纤维和玻纤织物入口。", descriptionEn: "Official carbon- and glass-fiber fabric entry.", url: "https://www.hitechfrp.com/product_category/Fabric.html", format: "Product category" },
    { title: "海拓联系方式", titleEn: "HICOMA Contact", description: "南京地址、电话和邮箱。", descriptionEn: "Official Nanjing address, phone and email.", url: "https://www.hitechfrp.com/contactus.html", format: "Contact page" },
    { title: "中国国际复材展 N 字母页", titleEn: "China Composites Expo — N Directory", description: "展商主体和产品范围。", descriptionEn: "Organizer source for exhibitor identity and scope.", url: "https://www.chinacompositesexpo.com/cn/netshow.php?head=N", format: "Exhibitor directory" },
  ],
  profilePublished: true, profileReviewedAt: new Date("2026-08-25T00:00:00.000Z"),
  logo: "/supplier-assets/nanjing-hitech-logo.png",
  contactEmail: "market@hitechfrp.com", contactPhone: "+86 25 5806 6912",
  address: "No. 26 Chaoyang Road, Dongping Industrial Park, Lishui District, Nanjing, Jiangsu, China",
  website: "https://www.hitechfrp.com/", enterpriseId: null, scaleTier: null, brandPriority: 29, viewCount: 0,
  capabilities: ["carbon-fiber pultrusion", "fiberglass pultrusion", "carbon plates rods and tubes", "fiberglass structural profiles", "carbon and glass fabrics", "structural adhesives", "profile machining", "engineered composite systems"],
  standardsSupported: [], moqKg: null, leadTimeDays: null, exportReady: true,
  createdAt: new Date("2026-08-25T00:00:00.000Z"), updatedAt: new Date("2026-08-25T00:00:00.000Z"),
};
