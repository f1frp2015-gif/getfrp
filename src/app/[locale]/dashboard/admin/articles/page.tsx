import type { Metadata } from "next";
import { desc, isNull, isNotNull } from "drizzle-orm";
import { setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { db } from "@/lib/db";
import { articles } from "@/lib/db/schema";
import { gateAdmin } from "@/lib/admin";

export const dynamic = "force-dynamic";

export const metadata: Metadata = { title: "Editorial Drafts" };

function fmt(d: Date | null | undefined): string {
  return d ? d.toISOString().slice(0, 16).replace("T", " ") : "—";
}

export default async function AdminArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const gate = await gateAdmin();
  if (!gate.ok) {
    if (gate.status === 401)
      redirect("/sign-in?redirect_url=/dashboard/admin/articles");
    return (
      <Card>
        <CardContent className="py-12 text-center">
          <div className="text-lg font-semibold">Administrator access required</div>
          <p className="mt-2 text-sm text-muted-foreground">
            This page is available only to administrators.
          </p>
        </CardContent>
      </Card>
    );
  }

  const drafts = await db
    .select({
      id: articles.id,
      title: articles.title,
      excerpt: articles.excerpt,
      category: articles.category,
      createdAt: articles.createdAt,
      updatedAt: articles.updatedAt,
    })
    .from(articles)
    .where(isNull(articles.publishedAt))
    .orderBy(desc(articles.createdAt))
    .limit(100);

  const published = await db
    .select({
      id: articles.id,
      title: articles.title,
      slug: articles.slug,
      publishedAt: articles.publishedAt,
    })
    .from(articles)
    .where(isNotNull(articles.publishedAt))
    .orderBy(desc(articles.publishedAt))
    .limit(15);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Editorial Drafts</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Review, edit, publish, or delete research drafts before they appear on GetFRP.
        </p>
      </div>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Drafts awaiting review</h2>
          <Badge variant="secondary">{drafts.length}</Badge>
        </div>
        {drafts.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center text-sm text-muted-foreground">
              No drafts are waiting for review.
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {drafts.map((d) => (
              <Link
                key={d.id}
                href={`/dashboard/admin/articles/${d.id}` as "/dashboard/admin/articles/[id]"}
                className="block"
              >
                <Card className="transition-colors hover:border-primary/50">
                  <CardContent className="py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {d.category ?? "—"}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Draft
                          </Badge>
                        </div>
                        <h3 className="mt-1 font-medium leading-snug">{d.title}</h3>
                        {d.excerpt && (
                          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                            {d.excerpt}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0 text-right text-xs text-muted-foreground">
                        <div>Created {fmt(d.createdAt)}</div>
                        <div>Updated {fmt(d.updatedAt)}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Recently published</h2>
        {published.length === 0 ? (
          <p className="text-sm text-muted-foreground">No published articles yet.</p>
        ) : (
          <Card>
            <CardContent className="divide-y py-0">
              {published.map((p) => (
                <Link
                  key={p.id}
                  href={`/dashboard/admin/articles/${p.id}` as "/dashboard/admin/articles/[id]"}
                  className="flex items-center justify-between gap-3 py-3 text-sm hover:text-primary"
                >
                  <span className="min-w-0 truncate">{p.title}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {fmt(p.publishedAt)}
                  </span>
                </Link>
              ))}
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
