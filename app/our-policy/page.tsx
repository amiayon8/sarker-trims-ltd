import type { Metadata } from "next";
import { PageComponent } from "./pageComponent";

export const metadata: Metadata = {
  title: "Quality Policy & Environmental Compliance | Sarker Trims",
  description:
    "Learn about Sarker Trims' quality assurance protocols, zero-tolerance deviation standards, eco-friendly yarn sourcing, and worker safety commitments in Dhaka, Bangladesh.",
  alternates: {
    canonical: "/our-policy",
  },
  openGraph: {
    title: "Quality Policy & Compliance | Sarker Trims Bangladesh",
    description:
      "Strict tensile, wash-fastness, and eco-friendly standards ensuring all trims meet global apparel export benchmarks.",
    url: "https://www.sarkertrims.com/our-policy",
  },
};

export default function Page() {
  return <PageComponent />;
}