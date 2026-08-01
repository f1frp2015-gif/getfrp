import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import { alternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Global FRP Sourcing",
  description:
    "Find verified composite-material suppliers, compare capabilities, and prepare an RFQ on GetFRP.",
  alternates: alternates("/"),
};

export default function OverseasPage() {
  permanentRedirect("/");
}
