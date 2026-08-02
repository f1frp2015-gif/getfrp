import { permanentRedirect } from "next/navigation";

// The former pultrusion library mixed supplier-intent metadata with a
// papers/patents collection. Consolidate that authority into the canonical
// product page, where buyers can compare specifications and manufacturers.
export default function PultrusionPage() {
  permanentRedirect("/products/pultruded-profiles");
}
