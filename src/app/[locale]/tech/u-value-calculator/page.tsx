import type { Metadata } from "next";
import { alternates } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import UValueCalculatorIntl from "./u-value-calculator-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Tech" });
  return {
    title: t("uvalueIntl.metaTitle"),
    description: t("uvalueIntl.metaDescription"),
    alternates: alternates("/tech/u-value-calculator"),
  };
}

export default async function UValueCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Tech" });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t("uvalueIntl.h1")}</h1>
        <p className="mt-2 text-muted-foreground">
          {t("uvalueIntl.subtitle")}
        </p>
      </div>
      <UValueCalculatorIntl />
    </div>
  );
}
