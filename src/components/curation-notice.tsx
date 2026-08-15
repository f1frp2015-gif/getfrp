import { Link } from "@/i18n/navigation";

// Locale-aware: getfrp.com (en) must never render the Chinese disclaimer.
export function CurationNotice({ scope }: { scope?: string }) {
  const label = scope ?? "This section";

  return (
    <aside className="mt-10 rounded-md border border-dashed bg-muted/30 p-4 text-xs leading-relaxed text-muted-foreground">
      <div className="flex items-start gap-2">
        <span className="mt-0.5 shrink-0 font-semibold text-foreground">
          Notice:
        </span>
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
      </div>
    </aside>
  );
}
