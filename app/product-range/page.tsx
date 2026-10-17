import type { Metadata } from "next";
import { PageComponent } from "./pageComponent";

export const metadata: Metadata = {
  title: "Product Range & Technical Specifications | Sarker Trims",
  description:
    "Explore Sarker Trims' complete product range: draw cords, plain and jacquard elastics, needle loom twill tapes, woven labels, and corrugated export carton boxes with technical yarn and ply specifications.",
  alternates: {
    canonical: "/product-range",
  },
  openGraph: {
    title: "Product Range & Technical Specs | Sarker Trims Bangladesh",
    description:
      "Detailed specifications, yarn compositions, widths, and lead times for narrow fabrics, elastics, draw cords, and export cartons manufactured in Dhaka.",
    url: "https://www.sarkertrims.com/product-range",
  },
};

export default function Page() {
  return <PageComponent />;
}