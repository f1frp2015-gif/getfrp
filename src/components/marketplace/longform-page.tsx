import { ArrowRight } from "lucide-react";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { JsonLd } from "@/components/json-ld";
import { SupplierList } from "@/components/supplier-list";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { longformSections, type LongformPage } from "@/lib/data/longform-pages";
import { getPublicSupplierDirectory } from "@/lib/public-supplier-directory";
import { CURRENT_SITE_URL } from "@/lib/sites";

const FAQS = [
  { question: "Does GetFRP verify every product claim?", answer: "GetFRP reviews public profiles and product submissions before indexing, but buyers must validate current order-specific evidence, scope and validity before purchase." },
  { question: "Why are some category pages empty?", answer: "The platform does not generate fake suppliers or products. A combination with fewer than three reviewed matches shows related categories and an RFQ route instead." },
  { question: "What should be included in a China FRP RFQ?", answer: "Include drawings, material and process, performance requirements, standards, quantities, delivery destination, inspection criteria, documentation and packing." },
  { question: "Can GetFRP coordinate a supplier comparison?", answer: "Yes. One controlled RFQ can be used to compare matched suppliers against the same technical and commercial scope." },
  { question: "Is a verified company automatically approved for my project?", answer: "No. Company identity, management-system certification and product compliance are separate checks. Project approval requires current product-level evidence." },
];

export async function LongformMarketplacePage({ page }: { page: LongformPage }) {
  const all = await getPublicSupplierDirectory("en");
  const terms = page.supplierTerms.map((term) => term.toLowerCase());
  const matches = all.filter((supplier) => {
    const text = [supplier.description, ...supplier.products, ...supplier.processList].join(" ").toLowerCase();
    return terms.some((term) => text.includes(term));
  });
  const suppliers = matches.length >= 3 ? matches.slice(0, 3) : [];
  const path = `/${page.group}/${page.slug}`;
  const url = `${CURRENT_SITE_URL}${path}`;
  return <main>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: page.h1, description: page.description, url, inLanguage: "en", author: { "@id": `${CURRENT_SITE_URL}/#organization` }, publisher: { "@id": `${CURRENT_SITE_URL}/#organization` }, dateModified: "2026-08-13" }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }} />
    <BreadcrumbJsonLd items={[{ name: "Home", url: `${CURRENT_SITE_URL}/` }, { name: page.group === "insights" ? "Insights" : "Source from China", url: `${CURRENT_SITE_URL}/${page.group}` }, { name: page.h1, url }]} />
    <section className="border-b"><div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16"><nav className="text-xs text-muted-foreground"><Link href="/">Home</Link><span className="mx-2">›</span><Link href={`/${page.group}` as never}>{page.group === "insights" ? "Insights" : "Source from China"}</Link><span className="mx-2">›</span><span>{page.h1}</span></nav><div className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">BUYER REFERENCE</div><h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">{page.h1}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{page.description}</p></div></section>
    <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6">{longformSections(page).map((section) => <section key={section.heading} className="mb-10"><h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2><p className="mt-4 text-[15px] leading-8 text-muted-foreground">{section.body}</p></section>)}</article>
    <section className="border-y bg-muted/15"><div className="mx-auto max-w-6xl px-4 py-14 sm:px-6"><h2 className="text-2xl font-semibold">Related suppliers</h2>{suppliers.length ? <SupplierList suppliers={suppliers} className="mt-6" /> : <p className="mt-5 rounded-xl border border-dashed bg-background p-6 text-sm text-muted-foreground">Fewer than three reviewed supplier records match this topic. Use the related category links or submit an RFQ; no synthetic listings are shown.</p>}<div className="mt-7 flex flex-wrap gap-2">{page.related.map((item) => <Link key={item.href} href={item.href as never} className="rounded-full border bg-background px-4 py-2 text-sm">{item.label}</Link>)}</div></div></section>
    <section className="border-b"><div className="mx-auto max-w-4xl px-4 py-14 sm:px-6"><h2 className="text-2xl font-semibold">Frequently asked questions</h2><div className="mt-6 divide-y border-y">{FAQS.map((faq) => <article key={faq.question} className="py-6"><h3 className="font-semibold">{faq.question}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{faq.answer}</p></article>)}</div></div></section>
    <section className="bg-foreground py-14 text-background"><div className="mx-auto max-w-3xl px-4 text-center sm:px-6"><h2 className="text-3xl font-semibold">Turn the research into one controlled RFQ</h2><p className="mt-4 text-sm text-background/75">Compare real suppliers against the same drawings, standards, quantity and evidence requirements.</p><Link href="/rfq" className={`${buttonVariants({ size: "lg", variant: "secondary" })} mt-7`}>Submit RFQ <ArrowRight size={15} /></Link></div></section>
  </main>;
}
