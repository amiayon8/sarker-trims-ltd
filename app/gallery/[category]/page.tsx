import { GalleryView } from "@/components/GalleryView";
import type { Metadata } from "next";

export function generateStaticParams() {
  const categories = [
    "all",
    "belt",
    "button",
    "cross_belt",
    "drawstring",
    "elastic",
    "heat_seal",
    "ilet",
    "key_ring",
    "label",
    "metal_buckle",
    "patch",
    "stopper",
    "tag",
    "tap",
    "woven_belt",
    "zipper_puller",
  ];
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const formattedCategory = category.replace(/_/g, " ");
  return {
    title: `${formattedCategory.toUpperCase()} | Product Gallery | Tuba Trims`,
    description: `Explore custom ${formattedCategory} and garment accessories manufactured in Dhaka, Bangladesh.`,
  };
}

export default async function CategoryGalleryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  return <GalleryView currentCategory={category} />;
}
