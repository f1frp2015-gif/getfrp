/**
 * AI 技能目录 —— 复材 AI 助手的 slash / 技能选项。
 *
 * GetFRP skills for materials, formulations, standards, papers, patents,
 * suppliers, and engineering calculations.
 * 工具 + 供应商询盘闭环构建。每个技能 = 一段结构化提示词模板:用户在空状态技能卡
 * 或输入框 "/" slash 菜单选中后,模板填入输入框,补全 【____】 占位再发送。后端
 * chat 路由不变(RAG + 行内 [#N] 引用 + window_u_value 等工具已现成)。
 *
 * 纯数据模块(无 React),供服务端与客户端共用。
 */

export type SkillCategory = "materials" | "engineering";

export type Bilingual = { en: string };

export type AiSkill = {
  id: string;
  category: SkillCategory;
  /** lucide 图标名(在 ai-client 里映射为组件) */
  icon: "flask" | "search" | "scale" | "wrench" | "layers" | "lightbulb" | "telescope" | "shield" | "pen";
  label: Bilingual;
  desc: Bilingual;
  /** 选中后填入输入框的结构化模板,含 【____】 占位 */
  template: Bilingual;
  /** slash 模糊匹配用的关键词(中英混合,空格分隔) */
  keywords: string;
};

export const SKILL_CATEGORIES: { id: SkillCategory; label: Bilingual }[] = [
  { id: "materials", label: { en: "Selection & Formulation" } },
  { id: "engineering", label: { en: "Engineering & Sourcing" } },
];

export const AI_SKILLS: readonly AiSkill[] = [
  // ───────────── 选材与配方 ─────────────
  {
    id: "formulation",
    category: "materials",
    icon: "flask",
    label: { en: "Formulation" },
    desc: { en: "Recommend resin + reinforcement + additives for a service case" },
    keywords: "formulation material selection resin reinforcement additive",
    template: {
      en: "[Formulation] Recommend an FRP formulation for:\n- Service medium / concentration: 【____】\n- Temperature: 【____】\n- Load / stress: 【____】\n- Process (pultrusion / winding / RTM / hand layup / infusion): 【____】\n\nGive resin system + reinforcement + key additives with rationale for each, and cite the formula / material library.",
    },
  },
  {
    id: "spec-match",
    category: "materials",
    icon: "search",
    label: { en: "Spec-to-Material" },
    desc: { en: "Find and rank materials matching target properties" },
    keywords: "spec property material selection tensile modulus temperature corrosion",
    template: {
      en: "[Spec-to-Material] Find and rank materials / profiles meeting these targets:\n- Tensile strength / modulus: 【____】\n- Temperature rating: 【____】\n- Corrosion resistance (medium): 【____】\n- Flame rating: 【____】\n- Other (density / insulation / fatigue…): 【____】\n\nNote the source and uncertainty for each, cite the material library.",
    },
  },
  {
    id: "standards",
    category: "materials",
    icon: "scale",
    label: { en: "Standards Mapping" },
    desc: { en: "Map GB↔ASTM↔ISO↔EN and interpret clauses" },
    keywords: "standard mapping gb astm iso en interpretation testing",
    template: {
      en: "[Standards Mapping] Interpret and cross-map standard: 【____】 (e.g. ASTM D3039).\n- Give equivalent GB / ISO / EN standards\n- Key test-method and parameter differences\n- Scope and caveats\n\nCite standard numbers and clauses; flag anything to verify in the original.",
    },
  },
  {
    id: "process-debug",
    category: "materials",
    icon: "wrench",
    label: { en: "Process & Defect" },
    desc: { en: "Diagnose voids / delamination / wet-out defects" },
    keywords: "process defect void delamination wet-out pultrusion rtm infusion troubleshooting",
    template: {
      en: "[Process & Defect] Diagnose a manufacturing problem:\n- Process: 【____】 (pultrusion / winding / RTM / infusion…)\n- Symptom / defect: 【____】 (voids / delamination / dry spots / warpage…)\n- Current parameters (temp / speed / resin viscosity / cure): 【____】\n\nGive likely causes (ranked) + diagnostic steps + parameter fixes, cite papers / formula library.",
    },
  },
  {
    id: "application",
    category: "materials",
    icon: "layers",
    label: { en: "Application Selection" },
    desc: { en: "Material + profile + case picks for an industry use case" },
    keywords: "application selection industry wind corrosion bridge rail case study",
    template: {
      en: "[Application Selection] Select FRP for this use case:\n- Industry / scenario: 【____】 (wind / chemical anti-corrosion / bridge / rail / construction…)\n- Key needs: 【____】 (corrosion / light weight / insulation / flame / cost…)\n- Constraints (size / volume / regulation): 【____】\n\nRecommend material + profile form + typical process + reference cases, with citations.",
    },
  },
  // ───────────── 工程与供应 ─────────────
  {
    id: "eng-calc",
    category: "engineering",
    icon: "scale",
    label: { en: "Engineering Calc" },
    desc: { en: "Profile sizing / deflection / steel-alu replacement / window U-value" },
    keywords: "calculation deflection sizing steel aluminium replacement u-value thermal window",
    template: {
      en: "[Engineering Calc] Run a composites engineering calculation:\n- Type: 【____】 (profile sizing / beam deflection check / equal-strength replacement of steel or aluminium / whole-window U-value…)\n- Inputs: 【____】 (section / span / load / allowable deflection, or window series / glass build / opening type…)\n\nShow the working and the result, cite the governing standard (e.g. EN 13706, GB/T 31539, JG/T 571 App. C), and point to the on-site calculator for verification.",
    },
  },
  {
    id: "supplier-rfq",
    category: "engineering",
    icon: "search",
    label: { en: "Supplier Match & RFQ" },
    desc: { en: "Match suppliers from the directory + draft an RFQ" },
    keywords: "supplier match manufacturer rfq procurement quote sourcing",
    template: {
      en: "[Supplier Match] Match composites suppliers and prep an RFQ:\n- Product / process: 【____】 (e.g. pultruded profile / grating / wound pipe…)\n- Spec / quantity: 【____】\n- Target market / certifications: 【____】\n\nFilter the supplier directory by category / scale / certification, give the match rationale per supplier, and compile a ready-to-send RFQ checklist.",
    },
  },
  {
    id: "research",
    category: "engineering",
    icon: "telescope",
    label: { en: "Research Digest" },
    desc: { en: "Multi-source synthesis with a cited digest" },
    keywords: "research review synthesis trends literature report",
    template: {
      en: "[Research Digest] Synthesize multi-source material on: 【____】\n\nIntegrate the paper / standard libraries and industry sources (web if needed), output: state of the art → mainstream technical routes → representative data or cases → trends & open questions. Cite [#N] per claim; separate 'grounded in library' from 'general knowledge'.",
    },
  },
  {
    id: "patent-paper",
    category: "engineering",
    icon: "shield",
    label: { en: "Patent & Paper Lookup" },
    desc: { en: "Search the patent / paper libraries + extract takeaways" },
    keywords: "patent paper literature search doi technical takeaways",
    template: {
      en: "[Patent & Paper] Search and interpret the patent / paper libraries on: 【____】 (topic / keywords)\n\nOutput: relevant patents & papers → technical evolution → key sources / assignees → takeaways worth adopting. Cite patent numbers / DOIs, no fabrication.",
    },
  },
] as const;

/** slash 菜单按关键词过滤(匹配 label/desc/keywords,大小写不敏感) */
export function filterSkills(rawQuery: string): AiSkill[] {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return [...AI_SKILLS];
  return AI_SKILLS.filter((s) =>
    `${s.label.en} ${s.desc.en} ${s.keywords} ${s.id}`
      .toLowerCase()
      .includes(q),
  );
}
