import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { JsonLd } from "@/components/json-ld";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import { alternates } from "@/lib/seo";
import { CURRENT_SITE_URL } from "@/lib/sites";

export const revalidate = 600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HpRtm" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates("/hp-rtm"),
  };
}

export default async function HpRtmPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HpRtm");

  const inLanguage = locale === "en" ? "en" : "zh-CN";
  const url = `${CURRENT_SITE_URL}/hp-rtm`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          url,
          inLanguage,
          name: t("h1"),
          description: t("metaDescription"),
        }}
      />

      <PageBreadcrumbs
        homeLabel={t("breadcrumbHome")}
        trail={[{ label: t("h1"), href: "/hp-rtm" }]}
      />

      <header className="mb-10">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {t("label")}
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {t("h1")}
        </h1>
        <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
          {t("lead")}
        </p>
      </header>

      <div className="mb-10 grid gap-3 sm:grid-cols-2">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-sm font-semibold">Molded FRP products</div>
            <Link href="/products/smc-bmc" className="mt-2 inline-block text-xs text-primary hover:underline">
              Compare specifications →
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-sm font-semibold">
              Supplier network
            </div>
            <Link href="/suppliers" className="mt-2 inline-block text-xs text-primary hover:underline">
              Find manufacturers →
            </Link>
          </CardContent>
        </Card>
      </div>

      <section className="rounded-lg border bg-muted/30 p-8 text-center">
        <h3 className="text-lg font-semibold">{t("aiCtaTitle")}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {t("aiCtaBody")}
        </p>
        <Link
          href={`/ai?q=${encodeURIComponent(t("aiSuggestQuery"))}` as never}
          className={buttonVariants({ size: "lg" })}
        >
          {t("aiCtaBtn")}
        </Link>
      </section>
    </div>
  );
}
