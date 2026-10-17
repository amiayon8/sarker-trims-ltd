import { GalleryView } from "@/components/GalleryView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Gallery | Garment Trims, Narrow Fabrics & Packaging | Sarker Trims",
  description:
    "Explore our range of draw cords, plain and jacquard elastics, twill tapes, printed and woven items, and corrugated export carton boxes manufactured in Dhaka, Bangladesh.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Product Gallery | Sarker Trims Bangladesh",
    description:
      "Explore draw cords, plain and jacquard elastics, twill tapes, garment brand labels, and corrugated export carton boxes manufactured in Dhaka.",
    url: "https://www.sarkertrims.com/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryView currentCategory="all" />;
}
