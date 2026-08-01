import type { Metadata } from "next";
import { alternates } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { priceData } from "@/lib/data/materials";
import { getLatestPublishedReport } from "@/lib/prices/queries";
import { JsonLd } from "@/components/json-ld";
import { CURRENT_SITE_URL } from "@/lib/sites";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Trade" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates("/trade"),
  };
}

export const revalidate = 60;

// Legacy reports store source-language names. The English site maps the known
// product labels and never falls back to those source-language fields.
const PRICE_NAME_EN: Record<string, string> = {
  "196# \u6811\u8102": "#196 UPR",
  "191# \u6811\u8102": "#191 UPR",
  "\u4e59\u70ef\u57fa\u916f\u6811\u8102": "Vinyl ester resin",
  "E-51 \u73af\u6c27\u6811\u8102": "E-51 epoxy",
  "\u915a\u919b\u6811\u8102 PF": "Phenolic (PF) resin",
  "\u98ce\u7535\u53f6\u7247\u704c\u6ce8\u73af\u6c27": "Wind blade infusion epoxy",
  "\u53cc\u9a6c\u6765\u9170\u4e9a\u80fa BMI": "BMI (bismaleimide)",
  "ECR \u65e0\u78b1\u7c97\u7eb1": "ECR boron-free roving",
  "E \u73bb\u7ea4\u77ed\u5207\u6be1": "E-glass chopped strand mat",
  "E \u73bb\u7ea4\u65b9\u683c\u5e03": "E-glass woven roving",
  "T300 \u78b3\u7ea4\u7ef4 (3K)": "T300-grade 3K carbon fiber",
  "T700 \u78b3\u7ea4\u7ef4 (12K)": "T700-grade 12K carbon fiber",
  "\u7384\u6b66\u5ca9\u7ea4\u7ef4\u7c97\u7eb1": "Basalt fiber roving",
  "PVC \u6ce1\u6cab (H80)": "PVC foam core H80",
  "\u6a21\u5851\u683c\u6805 (38 \u578b)": "Molded FRP grating (38)",
};

const REGION_EN: Record<string, string> = {
  "\u534e\u4e1c": "East China",
  "\u534e\u5357": "South China",
  "\u534e\u5317": "North China",
  "\u534e\u4e2d": "Central China",
  "\u897f\u5357": "Southwest China",
  "\u897f\u5317": "Northwest China",
  "\u4e1c\u5317": "Northeast China",
  "\u5168\u56fd": "Nationwide",
};

const JUNE_29_CITATIONS = [
  "National Bureau of Statistics of China — mid-June 2026 market prices for key production materials; soda ash and 32% liquid caustic soda at CNY 704.8/MT, up 4.6%, and benzene at CNY 7,317.1/MT, down 4.5%.",
  "OilChem and Mysteel — East China unsaturated polyester resin market assessment, June 2, 2026.",
  "SunSirs and OilChem — June 2026 styrene market; Jiangsu spot material was about CNY 7,325/MT on June 26, down more than 6% during the week.",
  "Glass-fiber industry data — national average for 2400 tex E-glass direct roving at about CNY 3,729/MT on March 12, 2026; leading offers at CNY 3,800–3,900/MT with a CNY 4,000/MT target.",
  "Eastmoney and Sina Finance — second round of 2026 glass-fiber price increases, beginning in late February with monthly adjustments.",
  "Sina Finance — three world-scale carbon-fiber lines commissioned in Lianyungang on June 29, 2026; Toray raised prices by 10%–20% from January 2026.",
  "Tianjin Xinyang Unsaturated Resin — mid-May 2026 ex-works offers including tax and packaging: grade 196 at CNY 11,600/MT and grade 191 at CNY 11,000/MT.",
  "Zhongfu Shenying, Jilin Chemical Fiber and Guangwei Composites — company disclosures and industry reporting covering two carbon-fiber price increases from Q4 2025 to Q1 2026.",
];

const JUNE_22_CITATIONS = [
  "SunSirs 100ppi.com — current-price tables and chemicals channel.",
  "Baiinfo — unsaturated polyester resin, phenolic resin, glass fiber and carbon fiber assessments.",
  "SCI99 — glass-fiber and ethylene market assessments.",
  "Chemall — E-51 epoxy resin assessment, March 2026.",
  "NetEase and Shanghai Securities News — second glass-fiber price increase and monthly electronic-fabric adjustments.",
  "Sina Finance and OFweek — glass-fiber increases and Taishan Fiberglass 2400 tex offers near CNY 4,000/MT.",
  "21st Century Business Herald, research-industry summaries and Shanxi Securities — T700 and T300 carbon-fiber prices; domestic T300-grade 12K at about CNY 85–95/kg.",
  "Huajing Industry Research Institute and Sihan Research — wind-blade infusion epoxy at about CNY 20–24/kg.",
  "Zhiyan Consulting — 2023 basalt-fiber average near CNY 15,900/MT, with a declining trend.",
];

const JULY_CITATIONS = [
  "SunSirs — dense soda ash reference price near CNY 1,164/MT on July 3, 2026, about 5.1% below June.",
  "SunSirs — epoxy resin benchmark at CNY 13,550/MT on July 10, 2026; East China spot grade 128 near CNY 15,200/MT and E-12 near CNY 13,600/MT.",
  "OilChem and SCI99 — Jiangsu styrene spot price near CNY 7,325/MT on June 26, 2026, down about 6.6% period over period.",
  "OilChem and Tianjin Xinyang Unsaturated Resin — grade 196 at CNY 11,600/MT, grade 191 at CNY 11,000/MT including tax and packaging, and a late-June UPR market average near CNY 8,700/MT.",
  "Sina Finance and Securities Times — July 2026 electronic-fabric price increase; Fulltech Fiber Glass raised offers 15%–30%, with grade 7628 at CNY 9/m or above.",
  "Jilin Chemical Fiber — 2026 carbon-fiber offers around CNY 115/kg for T700 12K and CNY 75–92/kg for the T300 series after early-year increases.",
];

const PRICE_REPORT_CITATIONS_EN: Record<string, string[]> = {
  "30c3a07f-f15e-4e07-880f-c0fa0c7336ae": JUNE_29_CITATIONS,
  "5995978c-d594-4806-ac19-57b134bb25de": JUNE_22_CITATIONS,
  "d64e52b0-f8c7-476d-81e9-583fe800c375": JUNE_22_CITATIONS,
  "d42af638-89f4-4ad2-816f-cb35ec216aa9": JULY_CITATIONS,
  "8fe02ef7-a55d-4387-aa65-081e647a3797": JULY_CITATIONS,
  "01c632b5-b44c-42a1-9543-9b7a6b36da4a": JULY_CITATIONS,
};

const demandList: Array<{
  id: string;
  type: "buy";
  title: string;
  company: string;
  location: string;
  date: string;
  urgent: boolean;
}> = [
  {
    id: "d1",
    type: "buy",
    title: "Buying #196 UPR — 20 tons",
    company: "Environmental equipment company",
    location: "Yancheng, Jiangsu",
    date: "2026-04-17",
    urgent: true,
  },
  {
    id: "d2",
    type: "buy",
    title: "Buying ECR glass woven roving — 5000 m²",
    company: "Yacht manufacturer",
    location: "Zhuhai, Guangdong",
    date: "2026-04-16",
    urgent: false,
  },
  {
    id: "d3",
    type: "buy",
    title: "Buying FRP pultruded profiles (I/U sections) — long-term volume",
    company: "Construction & installation company",
    location: "Hangzhou, Zhejiang",
    date: "2026-04-16",
    urgent: false,
  },
  {
    id: "d4",
    type: "buy",
    title: "Buying vinyl ester resin — 10 tons, anti-corrosion project",
    company: "Chemical engineering firm",
    location: "Zibo, Shandong",
    date: "2026-04-15",
    urgent: true,
  },
];

const supplyList: Array<{
  id: string;
  type: "sell";
  title: string;
  company: string;
  location: string;
  date: string;
  featured: boolean;
}> = [
  {
    id: "s1",
    type: "sell",
    title: "Long-term supply of #191/#196 UPR",
    company: "Huachang Polymer Co., Ltd.",
    location: "Changzhou, Jiangsu",
    date: "2026-04-17",
    featured: true,
  },
  {
    id: "s2",
    type: "sell",
    title: "Molded FRP grating — multiple specs in stock",
    company: "Nantong Hengxin Composites",
    location: "Nantong, Jiangsu",
    date: "2026-04-16",
    featured: true,
  },
  {
    id: "s3",
    type: "sell",
    title: "FRP cable trays / boxes — custom to drawing",
    company: "Hebei Zaoqiang Huarui Co.",
    location: "Hengshui, Hebei",
    date: "2026-04-16",
    featured: false,
  },
  {
    id: "s4",
    type: "sell",
    title: "Carbon fiber prepreg — T300/T700 multiple specs",
    company: "Guangwei Composites Co., Ltd.",
    location: "Weihai, Shandong",
    date: "2026-04-15",
    featured: false,
  },
];

export default async function TradePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Trade" });

  const latestPriceReport = await getLatestPublishedReport();
  const sourcePrices =
    latestPriceReport?.quotes && latestPriceReport.quotes.length
      ? latestPriceReport.quotes
      : priceData;
  const prices = sourcePrices.map((item, index) => ({
    id: `price-${index}`,
    name:
      (item as { nameEn?: string }).nameEn ??
      PRICE_NAME_EN[item.name] ??
      "Composite material",
    region: REGION_EN[item.region] ?? "China",
    price: item.price,
    change: item.change,
    unit: item.unit
      .replace("\u5143/\u5428", "CNY/MT")
      .replace("\u5143/\u33a1", "CNY/m²")
      .replace("\u5143/kg", "CNY/kg")
      .replace("\u5143/\u7c73", "CNY/m"),
  }));
  const priceCitations = latestPriceReport
    ? PRICE_REPORT_CITATIONS_EN[latestPriceReport.id] ?? []
    : [];
  const priceSourceNames = priceCitations
    .slice(0, 3)
    .map((source) => source.split(" — ")[0])
    .filter(Boolean)
    .join(" / ");

  // Publish structured price data only when a real report is available.
  const priceDataset =
    latestPriceReport && prices.length
      ? {
          "@context": "https://schema.org",
          "@type": "Dataset",
          name: "China composites raw-material price index",
          description:
            "Weekly China price index for fiberglass, resin, carbon fiber and FRP products, with week-over-week change and cited authoritative sources.",
          inLanguage: "en",
          url: `${CURRENT_SITE_URL}/trade`,
          isAccessibleForFree: true,
          datePublished: latestPriceReport.publishedAt?.toISOString(),
          dateModified: (
            latestPriceReport.updatedAt ?? latestPriceReport.publishedAt
          )?.toISOString(),
          temporalCoverage: latestPriceReport.weekOf,
          creator: {
            "@type": "Organization",
            name: "getfrp",
            url: CURRENT_SITE_URL,
          },
          ...(priceCitations.length
            ? { citation: priceCitations }
            : {}),
          variableMeasured: prices.map((q) => ({
            "@type": "PropertyValue",
            name: q.name,
            value: q.price,
            unitText: q.unit,
          })),
        }
      : null;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      {priceDataset && <JsonLd data={priceDataset} />}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">{t("h1")}</h1>
          <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
        </div>
        <div className="flex gap-2">
          <Button>{t("postBuy")}</Button>
          <Button variant="outline">{t("postSell")}</Button>
        </div>
      </div>

      {/* Price Center */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{t("priceTitle")}</CardTitle>
          <CardDescription>{t("priceSub")}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {prices.map((item) => {
              return (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.region}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-mono font-bold">
                    CNY {item.price.toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.unit}
                  </div>
                  <div
                    className={`text-xs font-mono font-semibold ${
                      item.change > 0
                        ? "text-red-500"
                        : item.change < 0
                          ? "text-green-500"
                          : "text-muted-foreground"
                    }`}
                  >
                    {item.change > 0 ? "↑" : item.change < 0 ? "↓" : "—"}{" "}
                    {item.change !== 0
                      ? `${Math.abs(item.change)}%`
                      : t("priceFlat")}
                  </div>
                </div>
              </div>
              );
            })}
          </div>
          {latestPriceReport && (
            <p className="mt-4 text-xs text-muted-foreground">
              {t("priceUpdated", { date: latestPriceReport.weekOf })}
              {priceSourceNames && (
                <> · {t("priceSources", { names: priceSourceNames })}</>
              )}
            </p>
          )}
          <p className="mt-1 text-xs text-muted-foreground">
            {t("priceDisclaimer")}
          </p>
        </CardContent>
      </Card>

      {/* Supply & Demand */}
      <Tabs defaultValue="demand">
        <TabsList>
          <TabsTrigger value="demand">{t("tabDemand")}</TabsTrigger>
          <TabsTrigger value="supply">{t("tabSupply")}</TabsTrigger>
        </TabsList>

        <TabsContent value="demand" className="mt-4">
          <div className="space-y-3">
            {demandList.map((item) => (
              <Card key={item.id} className="transition-colors hover:border-primary/50">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="default" className="text-xs">
                        {t("buy")}
                      </Badge>
                      {item.urgent && (
                        <Badge variant="destructive" className="text-xs">
                          {t("urgent")}
                        </Badge>
                      )}
                    </div>
                    <h3 className="mt-1 font-medium">{item.title}</h3>
                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{item.company}</span>
                      <span>{item.location}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {t("contactBuyer")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="supply" className="mt-4">
          <div className="space-y-3">
            {supplyList.map((item) => (
              <Card key={item.id} className="transition-colors hover:border-primary/50">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {t("sell")}
                      </Badge>
                      {item.featured && (
                        <Badge
                          variant="outline"
                          className="border-amber-500 text-xs text-amber-600"
                        >
                          {t("featured")}
                        </Badge>
                      )}
                    </div>
                    <h3 className="mt-1 font-medium">{item.title}</h3>
                    <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{item.company}</span>
                      <span>{item.location}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {t("contactSupplier")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Separator className="my-10" />

      {/* CTA */}
      <div className="rounded-lg border bg-muted/30 p-8 text-center">
        <h3 className="text-xl font-bold">{t("ctaTitle")}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{t("ctaSub")}</p>
        <Button className="mt-4" size="lg">
          {t("ctaBtn")}
        </Button>
      </div>
    </div>
  );
}
