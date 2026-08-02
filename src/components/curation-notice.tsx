import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";

// Locale-aware: getfrp.com (en) must never render the Chinese disclaimer.
export function CurationNotice({ scope }: { scope?: string }) {
  const isEn = useLocale() === "en";
  const label = scope ?? (isEn ? "This section" : "本栏目");

  return (
    <aside className="mt-10 rounded-md border border-dashed bg-muted/30 p-4 text-xs leading-relaxed text-muted-foreground">
      <div className="flex items-start gap-2">
        <span className="mt-0.5 shrink-0 font-semibold text-foreground">
          {isEn ? "Notice:" : "声明："}
        </span>
        {isEn ? (
          <div>
            {label} content is compiled by the getfrp editorial team from public
            retrieval databases and openly published academic / patent sources,
            for industry research reference only — it does not constitute an
            authoritative legal or academic source. If any content involves
            copyright, attribution, or other legitimate rights, please contact us
            through the{" "}
            <Link
              href="/rfq"
              className="text-primary hover:underline"
            >
              GetFRP contact form
            </Link>{" "}
            and we will verify and promptly remove or correct it.
          </div>
        ) : (
          <div>
            {label}内容由复材站编辑部整理自公开检索数据库与学术/专利公开渠道，仅供行业从业者研究参考，不构成权威法律或学术出处。
            如内容涉及版权、来源归属或其他合法权益问题，请通过
            <Link
              href="/rfq"
              className="text-primary hover:underline"
            >
              站内联系表单
            </Link>
            联系我们，我们将在核实后及时删除或更正。
          </div>
        )}
      </div>
    </aside>
  );
}
