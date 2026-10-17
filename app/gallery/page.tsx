import { GalleryView } from "@/components/GalleryView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Gallery | Garment Trims & Accessories | Tuba Trims",
  description:
    "Explore our range of custom garment trims and accessories — belts, patches, badges, zipper pullers, and custom hardware made in Bangladesh.",
};

export default function GalleryPage() {
  return <GalleryView currentCategory="all" />;
}
