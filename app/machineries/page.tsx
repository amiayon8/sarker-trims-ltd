import type { Metadata } from "next";
import { PageComponent } from "./pageComponent";

export const metadata: Metadata = {
  title: "Manufacturing Machinery & Plant Setup | Sarker Trims",
  description:
    "Discover the machinery powering Sarker Trims in Dhaka: computerized jacquard looms, narrow fabric needle looms, high-speed cord braiders, and corrugated box converting equipment.",
  alternates: {
    canonical: "/machineries",
  },
  openGraph: {
    title: "Machinery & Production Setup | Sarker Trims Bangladesh",
    description:
      "Modern industrial needle looms, jacquard equipment, multi-spindle braiders, and packaging converting machinery at Sarker Trims.",
    url: "https://www.sarkertrims.com/machineries",
  },
};

export default function Page() {
  return <PageComponent />;
}