import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { FaqGrid } from "@/components/faq-grid";
import { JsonLd } from "@/components/json-ld";
import { SupplierList } from "@/components/supplier-list";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { buyerReference, type LongformPage } from "@/lib/data/longform-pages";
import { BUYER_REFERENCE_UPDATED } from "@/lib/data/buyer-reference-content";
import { getPublicSupplierDirectory } from "@/lib/public-supplier-directory";
import { CURRENT_SITE_URL } from "@/lib/sites";

export async function LongformMarketplacePage({ page }: { page: LongformPage }) {
  const reference = buyerReference(page);
  const all = await getPublicSupplierDirectory("en");
  const terms = page.supplierTerms.map((term) => term.toLowerCase());
  const suppliers = all.filter((supplier) => {
    const text = [...supplier.products, ...supplier.processList].join(" ").toLowerCase();
    return supplier.profilePublished && terms.some((term) => text.includes(term));
  }).slice(0, 3);
  const url = `${CURRENT_SITE_URL}/${page.group}/${page.slug}`;
  return <main>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", "@id": `${url}#article`, headline: page.h1, description: page.description, url, mainEntityOfPage: url, inLanguage: "en", author: { "@id": `${CURRENT_SITE_URL}/#organization` }, publisher: { "@id": `${CURRENT_SITE_URL}/#organization` }, dateModified: BUYER_REFERENCE_UPDATED, citation: reference.sources.map((source) => source.url) }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: reference.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) }} />
    <BreadcrumbJsonLd items={[{ name: "Home", url: `${CURRENT_SITE_URL}/` }, { name: page.group === "insights" ? "Insights" : "Source from China", url: `${CURRENT_SITE_URL}/${page.group}` }, { name: page.h1, url }]} />
    <section className="border-b"><div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground"><Link href="/">Home</Link><span className="mx-2">›</span><Link href={`/${page.group}` as never}>{page.group === "insights" ? "Insights" : "Source from China"}</Link><span className="mx-2">›</span><span>{page.h1}</span></nav>
      <p className="mt-8 text-xs uppercase tracking-wider text-primary">Buyer reference</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">{page.h1}</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">{page.description}</p>
      <p className="mt-5 text-sm text-muted-foreground">By <Link href="/about" className="underline">GetFRP team</Link> · Updated <time dateTime={BUYER_REFERENCE_UPDATED}>12 September 2026</time> · <Link href="/methodology" className="underline">Editorial policy</Link></p>
      <div className="mt-8 rounded-xl border bg-muted/20 p-6"><h2 className="text-lg font-semibold">At a glance</h2><p className="mt-3 leading-7">{reference.answer}</p></div>
    </div></section>
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-10 overflow-x-auto rounded-xl border" tabIndex={0} role="region" aria-label={reference.table.caption}><table className="w-full min-w-[620px] text-left text-sm">
        <caption className="p-5 text-left text-lg font-semibold">{reference.table.caption}</caption>
        <thead className="bg-muted/30"><tr>{reference.table.headers.map((header) => <th scope="col" key={header} className="p-4">{header}</th>)}</tr></thead>
        <tbody>{reference.table.rows.map((row) => <tr key={row[0]} className="border-t">{row.map((cell, index) => index === 0 ? <th scope="row" key={index} className="p-4 font-medium">{cell}</th> : <td key={index} className="p-4 leading-6">{cell}</td>)}</tr>)}</tbody>
      </table></div>
      {reference.sections.map((section) => <section key={section.heading} className="mb-10 max-w-4xl"><h2 className="text-2xl font-semibold">{section.heading}</h2><p className="mt-4 leading-8 text-muted-foreground">{section.body}</p></section>)}
      <section id="sources" className="rounded-xl border bg-muted/15 p-6"><h2 className="text-xl font-semibold">Sources and scope</h2>
        <p className="mt-3 text-sm leading-6">These references support the stated technical context. The purchasing checklists are GetFRP recommendations. Manufacturer documents do not certify other suppliers&apos; products.</p>
        <ul className="mt-5 space-y-4">{reference.sources.map((source) => <li key={source.url}><a href={source.url} className="font-medium underline underline-offset-4">{source.title}</a><p className="mt-1 text-sm leading-6 text-muted-foreground">{source.scope}</p></li>)}</ul>
        <Link href="/rfq" className="mt-5 inline-block text-sm underline">Submit a source correction</Link>
      </section>
    </article>
    <section className="border-y bg-muted/15"><div className="mx-auto max-w-6xl px-4 py-12 sm:px-6"><h2 className="text-2xl font-semibold">Continue your supplier research</h2>{suppliers.length > 0 && <SupplierList suppliers={suppliers} className="mt-6" />}<div className="mt-7 flex flex-wrap gap-3">{page.related.map((item) => <Link key={item.href} href={item.href as never} className="rounded-full border bg-background px-4 py-2 text-sm">{item.label}</Link>)}</div></div></section>
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6"><h2 className="text-2xl font-semibold">Frequently asked questions</h2><FaqGrid items={reference.faqs} className="mt-6" /></section>
    <section className="bg-foreground py-12 text-background"><div className="mx-auto max-w-3xl px-4 text-center sm:px-6"><h2 className="text-3xl font-semibold">Request comparable supplier responses</h2><p className="mt-4 text-sm text-background/75">Send the specification, quantity and destination with the evidence you need.</p><Link href="/rfq" className={`${buttonVariants({ size: "lg", variant: "secondary" })} mt-7`}>Submit RFQ <ArrowRight size={15} /></Link></div></section>
  </main>;
}
