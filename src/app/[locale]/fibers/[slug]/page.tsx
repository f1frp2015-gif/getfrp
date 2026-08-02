import type { Metadata } from "next";
import { alternates } from "@/lib/seo";
import { notFound } from "next/navigation";
import { ilike, or, sql, desc } from "drizzle-orm";
import {
  Atom,
  Factory,
  Layers,
  Globe,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { db } from "@/lib/db";
import { papers as papersTable } from "@/lib/db/schema";
import {
  PlatformHero,
  PlatformCard,
  PlatformCardGrid,
  PlatformSectionHeading,
} from "@/components/platform-card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { FIBERS, RESINS, PROCESSES, findFiber } from "@/lib/data/matrix";
import { FIBER_DETAIL } from "@/lib/data/fibers-detail";

export const revalidate = 600;

export async function generateStaticParams() {
  return FIBERS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const fiber = findFiber(slug);
  if (!fiber) return { title: "Not found" };
  const t = await getTranslations({ locale, namespace: "Fibers" });
  return {
    title: t("metaTitle", { name: fiber.nameEn }),
    description: t("metaDescription", { name: fiber.nameEn }),
    alternates: alternates(`/fibers/${slug}`),
  };
}

async function countPapers(keywords: string[]): Promise<number> {
  try {
    const ors = keywords
      .slice(0, 4)
      .flatMap((k) => [
        ilike(papersTable.title, `%${k}%`),
        ilike(papersTable.titleEn, `%${k}%`),
      ]);
    const [r] = await db
      .select({ c: sql<number>`count(*)::int` })
      .from(papersTable)
      .where(or(...ors));
    return r.c ?? 0;
  } catch {
    return 0;
  }
}

async function topPapers(keywords: string[], limit = 6) {
  const ors = keywords
    .slice(0, 4)
    .flatMap((k) => [
      ilike(papersTable.title, `%${k}%`),
      ilike(papersTable.titleEn, `%${k}%`),
    ]);
  return db
    .select({
      id: papersTable.id,
      slug: papersTable.slug,
      title: papersTable.titleEn,
      year: papersTable.year,
      hasCommentary: sql<boolean>`${papersTable.commentary} IS NOT NULL`,
    })
    .from(papersTable)
    .where(or(...ors))
    .orderBy(desc(papersTable.createdAt))
    .limit(limit);
}

export default async function FiberDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const fiber = findFiber(slug);
  const detail = FIBER_DETAIL[slug];
  if (!fiber || !detail) notFound();

  const t = await getTranslations("Fibers");
  const tf = await getTranslations(`Fibers.${slug}`);
  const tp = await getTranslations("Fibers.props");

  const [pCount, papers] = await Promise.all([
    countPapers(fiber.keywords),
    topPapers(fiber.keywords),
  ]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <nav className="mb-6 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          {t("breadcrumbHome")}
        </Link>
        <span className="mx-1.5">/</span>
        <Link href={"/fibers" as never} className="hover:text-foreground">
          {t("breadcrumbFibers")}
        </Link>
        <span className="mx-1.5">/</span>
        <span>{fiber.nameEn}</span>
      </nav>

      <PlatformHero
        eyebrow={`${fiber.mono} · ${fiber.gradesEn ?? fiber.grades}`}
        title={fiber.nameEn}
        description={tf("lead")}
      />

      {/* Live stats */}
      <div className="mb-12 grid gap-3 sm:grid-cols-3">
        <Link
          href="/papers"
          className="group rounded-lg border bg-background p-4 text-center transition-colors hover:border-primary/40"
        >
          <div className="text-2xl font-bold tabular-nums">{pCount.toLocaleString()}</div>
          <div className="mt-1 text-xs text-muted-foreground">{t("statPapers")}</div>
        </Link>
        <Link
          href={`/products?q=${encodeURIComponent(fiber.nameEn)}` as never}
          className="group rounded-lg border bg-background p-4 text-center transition-colors hover:border-primary/40"
        >
          <div className="text-sm font-semibold">FRP products</div>
          <div className="mt-1 text-xs text-muted-foreground">Compare specifications</div>
        </Link>
        <Link
          href={`/suppliers?q=${encodeURIComponent(fiber.nameEn)}` as never}
          className="group rounded-lg border bg-background p-4 text-center transition-colors hover:border-primary/40"
        >
          <div className="text-sm font-semibold">FRP suppliers</div>
          <div className="mt-1 text-xs text-muted-foreground">Search capabilities</div>
        </Link>
      </div>

      {/* Properties */}
      <PlatformSectionHeading eyebrow="PROPERTIES" title={t("s1Title")} />
      <div className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border/70 bg-border/70 sm:grid-cols-3">
        {detail.properties.map((p) => (
          <div key={p.key} className="bg-background p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {tp(p.key)}
            </div>
            <div className="mt-2 text-base font-semibold tabular-nums">{p.value}</div>
          </div>
        ))}
      </div>

      {/* Brands */}
      <section className="mb-12">
        <PlatformSectionHeading eyebrow="BRANDS" title={t("s2Title")} />
        <PlatformCardGrid columns={3}>
          {detail.brands.map((b, i) => (
            <PlatformCard
              key={b.name}
              Icon={i === 0 ? Factory : Globe}
              monoLabel={b.region === "CN" ? "CN" : "INTL"}
              title={b.name}
              accent={i === 0}
            >
              <p className="font-mono text-[11px] leading-relaxed">{b.products}</p>
            </PlatformCard>
          ))}
        </PlatformCardGrid>
      </section>

      {/* Recommended resins — link to /matrix/[fiber]-[resin] */}
      <section className="mb-12">
        <PlatformSectionHeading eyebrow="MATRIX · RESINS" title={t("s3Title")} />
        <p className="mb-4 text-sm text-muted-foreground">{t("s3Lead")}</p>
        <div className="flex flex-wrap gap-2">
          {detail.recommendedResins.map((resinSlug) => {
            const r = RESINS.find((x) => x.slug === resinSlug);
            if (!r) return null;
            return (
              <Link
                key={resinSlug}
                href={`/matrix/${fiber.slug}-${resinSlug}` as never}
                className="group inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm transition-colors hover:border-primary/40 hover:bg-muted/30"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {r.acronym}
                </span>
                <span>{r.nameEn}</span>
                <span className="text-muted-foreground/40 transition-all group-hover:translate-x-0.5 group-hover:text-foreground">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recommended processes */}
      <section className="mb-12">
        <PlatformSectionHeading eyebrow="PROCESSES" title={t("s4Title")} />
        <p className="mb-4 text-sm text-muted-foreground">{t("s4Lead")}</p>
        <div className="flex flex-wrap gap-2">
          {detail.recommendedProcesses.map((processSlug) => {
            const pr = PROCESSES.find((x) => x.slug === processSlug);
            if (!pr) return null;
            return (
              <Badge
                key={processSlug}
                variant="outline"
                className="px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em]"
              >
                {pr.mono}
              </Badge>
            );
          })}
        </div>
      </section>

      {/* Applications narrative */}
      <section className="mb-12">
        <PlatformSectionHeading eyebrow="APPLICATIONS" title={t("s5Title")} />
        <PlatformCardGrid columns={2}>
          <PlatformCard Icon={Atom} monoLabel="WHERE" title={tf("appTitle1")}>
            <p>{tf("appBody1")}</p>
          </PlatformCard>
          <PlatformCard Icon={Layers} monoLabel="WHY" title={tf("appTitle2")}>
            <p>{tf("appBody2")}</p>
          </PlatformCard>
        </PlatformCardGrid>
      </section>

      {/* Live papers */}
      {papers.length > 0 && (
        <section className="mb-12">
          <PlatformSectionHeading eyebrow="LIVE · PAPERS" title={t("papersTitle")} />
          <div className="grid gap-2 md:grid-cols-2">
            {papers.map((p) => (
              <Link
                key={p.id}
                href={`/papers/${encodeURIComponent(p.slug ?? p.id)}` as never}
                className="block rounded-md border bg-background p-3 text-sm transition-colors hover:border-primary/40 hover:bg-muted/30"
              >
                <div className="mb-1 flex flex-wrap items-center gap-1.5">
                  {p.year && (
                    <Badge variant="outline" className="text-[10px]">
                      {p.year}
                    </Badge>
                  )}
                  {p.hasCommentary && (
                    <Badge variant="signal" className="text-[10px]">
                      {t("badgeCommentary")}
                    </Badge>
                  )}
                </div>
                <div className="line-clamp-2 font-medium">
                  {p.title}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link
              href="/papers"
              className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground hover:text-foreground"
            >
              {t("viewAll")} →
            </Link>
          </div>
        </section>
      )}

      {/* AI CTA */}
      <section className="mt-12 rounded-lg border bg-muted/30 p-8 text-center">
        <h3 className="text-lg font-semibold">{tf("aiCtaTitle")}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {tf("aiCtaBody")}
        </p>
        <div className="mt-4">
          <Link
            href={`/ai?q=${encodeURIComponent(tf("aiSuggestQuery"))}` as never}
            className={buttonVariants({ size: "lg" })}
          >
            {t("aiCtaBtn")}
          </Link>
        </div>
      </section>
    </div>
  );
}
