import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { FIBERS } from "@/lib/data/matrix";
import { alternates } from "@/lib/seo";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  await params;
  return {
    title: "Composite Fibers Index — Glass / Carbon / Basalt / Aramid / Bio | getfrp",
    description: "Index of composite reinforcement fiber families with grades, applications, process compatibility, products, and suppliers per fiber type.",
    alternates: alternates("/fibers"),
  };
}

export default async function FibersHubPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Fibers" });

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-12 sm:mb-16">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {t("breadcrumbFibers")}
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Composite reinforcement fibers
        </h1>
        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
          Pick a fiber family to drill into grade ranges, suppliers, products, and process compatibility — all linked into the rest of the GetFRP sourcing platform.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FIBERS.map((f) => {
          const name = f.nameEn;
          const altName = null;
          const grades = f.gradesEn ?? f.grades;
          const keywords = f.keywords.filter((k) => !/[\p{Script=Han}]/u.test(k));
          return (
            <Link
              key={f.slug}
              href={`/fibers/${f.slug}` as never}
              className="group flex flex-col rounded-lg border border-border/70 bg-background p-6 transition-colors hover:border-foreground/60"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {f.mono}
              </div>
              <h2 className="mt-3 text-xl font-semibold tracking-tight">
                {name}
              </h2>
              {altName && (
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {altName}
                </p>
              )}
              <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
                <span className="text-muted-foreground/70">
                  Grade families:
                </span>{" "}
                <span className="font-medium text-foreground/90">
                  {grades}
                </span>
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {keywords.slice(0, 4).map((k) => (
                  <Badge
                    key={k}
                    variant="outline"
                    className="text-[10px] font-normal"
                  >
                    {k}
                  </Badge>
                ))}
              </div>
              <div className="mt-5 inline-flex items-center gap-1 text-[13px] font-medium text-foreground/80 transition-colors group-hover:text-foreground">
                Open dossier
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
