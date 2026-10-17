import { GalleryView } from "@/components/GalleryView";
import type { Metadata } from "next";

export function generateStaticParams() {
  const categories = [
    "all",
    "draw-cord",
    "elastic",
    "jacquard-elastic",
    "twill-tape",
    "printed-and-woven-item",
    "carton-box",
  ];
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const formattedCategory = category.replace(/-/g, " ");
  const title = `${formattedCategory.toUpperCase()} | Product Gallery | Sarker Trims`;
  const description = `Explore custom ${formattedCategory} manufactured by Sarker Trims in Dhaka, Bangladesh. Fast sampling and reliable bulk production for garment factories and brands.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/gallery/${category}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.sarkertrims.com/gallery/${category}`,
    },
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
