import type { Metadata } from "next";
import { alternates } from "@/lib/seo";
import { MessageCircle } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Community" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: alternates("/community"),
  };
}

const questions: Array<{
  id: string;
  title: string;
  author: string;
  answers: number;
  views: number;
  category: string;
  date: string;
  hot: boolean;
}> = [
  {
    id: "q1",
    title: "Vacuum infusion resin flows too slowly — how to optimize the flow-media layout?",
    author: "Old Wang FRP",
    answers: 12,
    views: 356,
    category: "Process",
    date: "2026-04-16",
    hot: true,
  },
  {
    id: "q2",
    title: "Hand layup with #196 resin — sticky, won't cure. What's wrong?",
    author: "Newcomer Li",
    answers: 8,
    views: 245,
    category: "Process",
    date: "2026-04-15",
    hot: true,
  },
  {
    id: "q3",
    title: "Carbon fiber tubes — filament winding vs roll wrapping: trade-offs?",
    author: "Carbon Fiber Engineer",
    answers: 15,
    views: 423,
    category: "Material selection",
    date: "2026-04-15",
    hot: false,
  },
  {
    id: "q4",
    title: "FRP vs steel grating load capacity — any real test data?",
    author: "Structural Designer",
    answers: 6,
    views: 189,
    category: "Material selection",
    date: "2026-04-14",
    hot: false,
  },
  {
    id: "q5",
    title: "Pultrusion die inlet keeps clogging — how to fix?",
    author: "Pultrusion Veteran",
    answers: 9,
    views: 312,
    category: "Equipment & tooling",
    date: "2026-04-13",
    hot: false,
  },
  {
    id: "q6",
    title: "Vinyl ester vs UPR — how big is the corrosion-resistance gap?",
    author: "Corrosion Engineer",
    answers: 11,
    views: 398,
    category: "Material selection",
    date: "2026-04-12",
    hot: true,
  },
];

const experts: Array<{ name: string; title: string; org: string; answers: number }> = [
  {
    name: "Prof. Zhang",
    title: "Composites mechanics expert",
    org: "Harbin Institute of Technology",
    answers: 156,
  },
  {
    name: "Engineer Li",
    title: "Wind blade process engineer",
    org: "Major wind energy OEM",
    answers: 243,
  },
  {
    name: "Chief Engineer Wang",
    title: "FRP anti-corrosion design expert",
    org: "Chemical engineering institute",
    answers: 198,
  },
  {
    name: "Master Chen",
    title: "Senior filament-winding technician",
    org: "30 years industry experience",
    answers: 312,
  },
];

const jobs: Array<{ title: string; company: string; location: string; salary: string }> = [
  {
    title: "Composites Process Engineer",
    company: "EV manufacturer",
    location: "Shanghai",
    salary: "20-35K",
  },
  {
    title: "FRP Structural Designer",
    company: "Offshore equipment company",
    location: "Qingdao",
    salary: "15-25K",
  },
  {
    title: "Pultrusion Shop Manager",
    company: "Profile manufacturer",
    location: "Nantong",
    salary: "12-18K",
  },
];

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Community" });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "en",
    url: "https://getfrp.com/community",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: `Discussed in the getfrp community — ${q.answers} answers, ${q.views} views. Open the platform for the full thread.`,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <JsonLd data={faqJsonLd} />
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">{t("h1")}</h1>
          <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
        </div>
        <Button>{t("postQuestion")}</Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="hot">
            <TabsList>
              <TabsTrigger value="hot">{t("tabHot")}</TabsTrigger>
              <TabsTrigger value="latest">{t("tabLatest")}</TabsTrigger>
              <TabsTrigger value="unanswered">{t("tabUnanswered")}</TabsTrigger>
            </TabsList>

            <TabsContent value="hot" className="mt-4 space-y-3">
              {questions.map((q) => (
                <Card key={q.id} className="transition-colors hover:border-primary/50">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px]">
                        {q.category}
                      </Badge>
                      {q.hot && (
                        <Badge
                          variant="destructive"
                          className="text-[10px]"
                        >
                          {t("hot")}
                        </Badge>
                      )}
                    </div>
                    <h3 className="mt-2 font-medium leading-snug">
                      {q.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{q.author}</span>
                      <span>{t("answers", { count: q.answers })}</span>
                      <span>{t("views", { count: q.views })}</span>
                      <span>{q.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="latest" className="mt-4">
              <div className="py-10 text-center text-muted-foreground">
                {t("loading")}
              </div>
            </TabsContent>

            <TabsContent value="unanswered" className="mt-4">
              <div className="py-10 text-center text-muted-foreground">
                {t("loading")}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Experts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t("expertsTitle")}</CardTitle>
              <CardDescription>{t("expertsSub")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {experts.map((expert) => (
                <div
                  key={expert.name}
                  className="flex items-center justify-between"
                >
                  <div>
                    <div className="text-sm font-medium">
                      {expert.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {expert.title} · {expert.org}
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-[10px]">
                    {t("expertAnswers", { count: expert.answers })}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Jobs */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t("jobsTitle")}</CardTitle>
              <CardDescription>{t("jobsSub")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {jobs.map((job) => (
                <div
                  key={job.title}
                  className="rounded-md border p-3"
                >
                  <div className="text-sm font-medium">
                    {job.title}
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{job.company}</span>
                    <span>·</span>
                    <span>{job.location}</span>
                  </div>
                  <div className="mt-1 text-sm font-semibold text-primary">
                    {job.salary}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* WeChat */}
          <Card className="bg-muted/30">
            <CardContent className="p-6 text-center">
              <MessageCircle size={28} strokeWidth={1.25} className="mx-auto text-foreground" />
              <h3 className="mt-3 font-semibold">{t("wechatTitle")}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {t("wechatSub")}
              </p>
              <Button variant="outline" className="mt-3" size="sm">
                {t("wechatBtn")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
