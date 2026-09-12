import { Link } from "@/i18n/navigation";
import type { ProductSupplier } from "@/lib/products/queries";

export function ProductEvidenceTable({ suppliers, productName }: { suppliers: ProductSupplier[]; productName: string }) {
  if (!suppliers.length) return null;
  return <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6" id="supplier-evidence">
    <h2 className="text-2xl font-semibold">Compare {productName} sourcing evidence</h2>
    <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">Product-linked records and company-catalog candidates are labeled separately. Catalog matches are discovery leads, not confirmed offers. Check the linked profile for company roles, sources and review history. Sponsored records are identified below.</p>
    <div className="mt-6 max-h-[32rem] overflow-auto rounded-xl border" tabIndex={0} role="region" aria-label={`${productName} supplier evidence`}>
      <table className="w-full min-w-[850px] text-left text-sm">
        <caption className="sr-only">Supplier scope, evidence basis and product-specific commercial information</caption>
        <thead className="sticky top-0 bg-background"><tr>{["Supplier / location", "Recorded product scope", "Evidence basis", "Product MOQ / lead time", "Source"].map((label) => <th key={label} scope="col" className="p-4">{label}</th>)}</tr></thead>
        <tbody>{suppliers.map((supplier) => <tr key={supplier.id} className="border-t align-top">
          <th scope="row" className="p-4 font-medium"><Link href={`/suppliers/${supplier.slug}` as never} className="underline">{supplier.name}</Link><p className="mt-2 font-normal text-muted-foreground">{supplier.location}</p>{supplier.sponsored && <p className="mt-1 text-xs">Sponsored</p>}</th>
          <td className="max-w-xs p-4 leading-6">{supplier.supplierProductName ?? "Confirm the offered model and construction with this supplier."}</td>
          <td className="p-4 leading-6">{supplier.evidenceBasis === "product-relationship" ? "Product-linked directory record" : "Company-catalog candidate"}<p className="mt-2 text-xs text-muted-foreground">Order-specific documents required.</p>{supplier.reviewedAt && <p className="mt-2 text-xs">Profile reviewed: <time dateTime={supplier.reviewedAt}>{supplier.reviewedAt}</time></p>}</td>
          <td className="p-4 leading-6">{supplier.moq != null && supplier.moqUnit ? `${supplier.moq} ${supplier.moqUnit}` : "MOQ: request quotation"}<p className="mt-2">{supplier.leadTimeDays != null ? `${supplier.leadTimeDays} days; reconfirm for this order` : "Lead time: request quotation"}</p></td>
          <td className="p-4">{supplier.website && /^https?:\/\//i.test(supplier.website) ? <a href={supplier.website} className="underline" rel={supplier.sponsored ? "sponsored" : undefined}>Company website</a> : <Link href={`/suppliers/${supplier.slug}` as never} className="underline">Profile sources</Link>}</td>
        </tr>)}</tbody>
      </table>
    </div>
  </section>;
}
