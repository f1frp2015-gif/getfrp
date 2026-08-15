"use client";

import { useState } from "react";
import { useRouter, Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleBody } from "@/components/article-body";

type Draft = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  readTime: string;
  forZh: boolean;
  forEn: boolean;
  hot: boolean;
  isPublished: boolean;
  publishedAt: string | null;
};

const CATEGORIES = [
  { id: "industry", name: "Industry" },
  { id: "policy", name: "Policy & Regulation" },
  { id: "tech", name: "Technology" },
  { id: "company", name: "Company News" },
  { id: "expo", name: "Trade Shows" },
];

export function EditDraftClient({ article }: { article: Draft }) {
  const router = useRouter();
  const [title, setTitle] = useState(article.title);
  const [excerpt, setExcerpt] = useState(article.excerpt);
  const [body, setBody] = useState(article.body);
  const [category, setCategory] = useState(article.category);
  const [readTime, setReadTime] = useState(article.readTime);
  const [forEn, setForEn] = useState(article.forEn);
  const [hot, setHot] = useState(article.hot);
  const [published, setPublished] = useState(article.isPublished);

  const [busy, setBusy] = useState<null | string>(null);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);

  async function save() {
    setBusy("save");
    setMsg(null);
    try {
      const res = await fetch(`/api/admin/articles/${article.id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, excerpt, body, category, readTime, forZh: false, forEn, hot }),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j?.error ?? "Save failed");
      setMsg({ kind: "ok", text: "Draft saved" });
      router.refresh();
    } catch (e) {
      setMsg({ kind: "err", text: e instanceof Error ? e.message : "Save failed" });
    } finally {
      setBusy(null);
    }
  }

  async function togglePublish(unpublish: boolean) {
    // Save edits first so the published version matches what's on screen.
    if (!unpublish) await save();
    setBusy("publish");
    setMsg(null);
    try {
      const res = await fetch(`/api/admin/articles/${article.id}/publish`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ unpublish }),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j?.error ?? "Action failed");
      setPublished(!unpublish);
      setMsg({
        kind: "ok",
        text: unpublish ? "Unpublished and returned to drafts" : "Published and publicly visible",
      });
      router.refresh();
    } catch (e) {
      setMsg({ kind: "err", text: e instanceof Error ? e.message : "Action failed" });
    } finally {
      setBusy(null);
    }
  }

  async function remove() {
    if (!confirm("Delete this article permanently? This cannot be undone.")) return;
    setBusy("delete");
    setMsg(null);
    try {
      const res = await fetch(`/api/admin/articles/${article.id}`, { method: "DELETE" });
      const j = await res.json();
      if (!res.ok) throw new Error(j?.error ?? "Delete failed");
      router.push("/dashboard/admin/articles");
    } catch (e) {
      setMsg({ kind: "err", text: e instanceof Error ? e.message : "Delete failed" });
      setBusy(null);
    }
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Link
            href="/dashboard/admin/articles"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            ← Drafts
          </Link>
          <Badge variant={published ? "default" : "secondary"}>
            {published ? "Published" : "Draft"}
          </Badge>
          <span className="text-xs text-muted-foreground">Internal content record</span>
        </div>
      </div>

      {msg && (
        <div
          className={`rounded-md border px-3 py-2 text-sm ${
            msg.kind === "ok"
              ? "border-green-500/40 bg-green-500/10 text-green-700 dark:text-green-400"
              : "border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-400"
          }`}
        >
          {msg.text}
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Editor */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground">Title</label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1" />
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs font-medium text-muted-foreground">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm"
              >
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="w-32">
              <label className="text-xs font-medium text-muted-foreground">Read time</label>
              <Input value={readTime} onChange={(e) => setReadTime(e.target.value)} placeholder="6 min" className="mt-1" />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-muted-foreground">Excerpt</label>
            <Textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3} className="mt-1" />
          </div>

          <div>
            <label className="text-xs font-medium text-muted-foreground">Body (Markdown)</label>
            <Textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={22}
              className="mt-1 font-mono text-xs leading-relaxed"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={forEn} onChange={(e) => setForEn(e.target.checked)} />
              Publish on GetFRP
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={hot} onChange={(e) => setHot(e.target.checked)} />
              Featured
            </label>
          </div>

          <div className="flex flex-wrap gap-2 border-t pt-4">
            <Button onClick={save} disabled={busy !== null}>
              {busy === "save" ? "Saving…" : "Save draft"}
            </Button>
            {!published ? (
              <Button onClick={() => togglePublish(false)} disabled={busy !== null} variant="default">
                {busy === "publish" ? "Publishing…" : "Publish"}
              </Button>
            ) : (
              <Button onClick={() => togglePublish(true)} disabled={busy !== null} variant="outline">
                {busy === "publish" ? "Working…" : "Unpublish"}
              </Button>
            )}
            <Button onClick={remove} disabled={busy !== null} variant="destructive" className="ml-auto">
              Delete
            </Button>
          </div>
        </div>

        {/* Live preview */}
        <div className="space-y-2">
          <div className="text-xs font-medium text-muted-foreground">Preview</div>
          <Card>
            <CardContent className="py-5">
              <h1 className="text-xl font-bold leading-snug">{title || "Untitled"}</h1>
              {excerpt && <p className="mt-2 text-sm text-muted-foreground">{excerpt}</p>}
              <div className="mt-4">
                <ArticleBody content={body} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
