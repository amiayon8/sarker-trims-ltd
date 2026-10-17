import type { Metadata } from "next";
import { PageComponent } from "./pageComponent";

export const metadata: Metadata = {
  title: "Manufacturing Services & Rapid Sampling | Sarker Trims",
  description:
    "Comprehensive trims manufacturing services by Sarker Trims: 1-day rapid sampling, Pantone lab dip color matching, custom tipping and aglets, and on-time bulk delivery across Bangladesh.",
  alternates: {
    canonical: "/our-service",
  },
  openGraph: {
    title: "Trims Manufacturing Services | Sarker Trims Bangladesh",
    description:
      "Rapid prototyping, custom tipping, computerized weaving, and agile logistics for apparel exporters and fashion brands.",
    url: "https://www.sarkertrims.com/our-service",
  },
};

export default function Page() {
  return <PageComponent />;
}