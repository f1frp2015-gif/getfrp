"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type NewsItem = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
  hot?: boolean;
};

type Opt = { id: string; name: string };

const LABELS: Record<string, string> = {
  industry: "Industry",
  policy: "Policy",
  tech: "Technology",
  company: "Company news",
  expo: "Expos & events",
};

export function NewsClient({
  newsList,
  categories,
}: {
  newsList: NewsItem[];
  categories: Opt[];
}) {
  const [cat, setCat] = useState("all");

  const filtered = useMemo(
    () => (cat === "all" ? newsList : newsList.filter((n) => n.category === cat)),
    [newsList, cat]
  );

  const catStats = useMemo(() => {
    const m: Record<string, number> = {};
    newsList.forEach((n) => {
      m[n.category] = (m[n.category] || 0) + 1;
    });
    return m;
  }, [newsList]);

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <Badge
            key={c.id}
            variant={cat === c.id ? "default" : "outline"}
            className="cursor-pointer px-3 py-1"
            onClick={() => setCat(c.id)}
          >
            {c.name}
            {c.id !== "all" && catStats[c.id] ? ` (${catStats[c.id]})` : ""}
          </Badge>
        ))}
      </div>

      <div className="mb-4 text-sm text-muted-foreground">
        <span className="font-bold text-foreground">{filtered.length}</span>{" "}
        items
      </div>

      {filtered.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center text-muted-foreground">
            No news in this category yet.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((news) => (
            <Card
              key={news.id}
              className="flex flex-col transition-colors hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {LABELS[news.category] ?? news.category}
                  </Badge>
                  {news.hot && (
                    <Badge variant="destructive" className="text-xs">
                      Hot
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-base leading-snug line-clamp-2">
                  {news.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {news.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{news.date}</span>
                  <span>{news.readTime} read</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
