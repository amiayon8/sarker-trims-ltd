import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface GalleryItem {
  alt: string;
  src: string;
  title: string;
}

export function GalleryView({ currentCategory = "all" }: { currentCategory?: string }) {
  const categories = [
    { id: "all", label: "all", href: "/gallery/all" },
    { id: "belt", label: "belt", href: "/gallery/belt" },
    { id: "button", label: "button", href: "/gallery/button" },
    { id: "cross_belt", label: "cross_belt", href: "/gallery/cross_belt" },
    { id: "drawstring", label: "drawstring", href: "/gallery/drawstring" },
    { id: "elastic", label: "elastic", href: "/gallery/elastic" },
    { id: "heat_seal", label: "heat_seal", href: "/gallery/heat_seal" },
    { id: "ilet", label: "ilet", href: "/gallery/ilet" },
    { id: "key_ring", label: "key_ring", href: "/gallery/key_ring" },
    { id: "label", label: "label", href: "/gallery/label" },
    { id: "metal_buckle", label: "metal_buckle", href: "/gallery/metal_buckle" },
    { id: "patch", label: "patch", href: "/gallery/patch" },
    { id: "stopper", label: "stopper", href: "/gallery/stopper" },
    { id: "tag", label: "tag", href: "/gallery/tag" },
    { id: "tap", label: "tap", href: "/gallery/tap" },
    { id: "woven_belt", label: "woven_belt", href: "/gallery/woven_belt" },
    { id: "zipper_puller", label: "zipper_puller", href: "/gallery/zipper_puller" },
  ];

  const galleryItems: GalleryItem[] = [
    {
      title: "Women's Formal Belt",
      alt: "Women's Formal Belt",
      src: "/women/women_belt_1.jpg",
    },
    {
      title: "Women's Casual Belt",
      alt: "Women's Casual Belt",
      src: "/women/women_belt_2.jpg",
    },
    {
      title: "Women's Designer Belt",
      alt: "Women's Designer Belt",
      src: "/women/women_belt_3.jpg",
    },
    {
      title: "Women's Embossed Belt",
      alt: "Women's Embossed Belt",
      src: "/women/women_belt_4.jpg",
    },
    {
      title: "Double Stitched Belt",
      alt: "Double Stitched Belt",
      src: "/men/belt_5.jpg",
    },
    {
      title: "Women's Slim Belt",
      alt: "Women's Slim Belt",
      src: "/women/women_belt_5.jpg",
    },
    {
      title: "Reversible Belt",
      alt: "Reversible Belt",
      src: "/men/belt_6.jpg",
    },
    {
      title: "Women's Premium Belt",
      alt: "Women's Premium Belt",
      src: "/women/women_belt_6.webp",
    },
    {
      title: "Textured Leather Belt",
      alt: "Textured Leather Belt",
      src: "/men/belt_7.jpg",
    },
    {
      title: "Women's Everyday Belt",
      alt: "Women's Everyday Belt",
      src: "/women/women_belt_7.webp",
    },
    {
      title: "Women's Stylish Belt",
      alt: "Women's Stylish Belt",
      src: "/women/women_belt_8.jpg",
    },
    {
      title: "Women's Party Belt",
      alt: "Women's Party Belt",
      src: "/women/women_belt_9.png",
    },
  ];

  return (
    <main className="py-16 md:py-24 min-h-screen pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4 md:space-y-6">
        <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#b56b3d]">
          Product Gallery
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Garment Trims &amp; Accessories
          <span className="block text-[var(--leather)]">
            Made in Bangladesh
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-muted-foreground">
          Explore our range of custom garment trims and accessories — each
          manufactured with attention to material, finish and construction
          quality.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <section className="mb-6 lg:mb-12 flex gap-3 flex-wrap items-center border-y border-muted py-4 scrollbar-hidden overflow-auto">
            {categories.map((category) => {
              const isActive =
                category.id === currentCategory ||
                (currentCategory === "" && category.id === "all");
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  className={`inline-block text-center border px-4 py-2 rounded-full capitalize transition-colors ${
                    isActive
                      ? "border-primary bg-primary text-white"
                      : "border-muted text-muted-foreground hover:text-primary hover:border-primary"
                  }`}
                >
                  {category.label}
                </Link>
              );
            })}
          </section>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
            {galleryItems.map((item) => (
              <div key={item.title} className="group">
                <div className="aspect-square overflow-hidden bg-white/90 rounded-3xl border border-muted transition-all duration-300">
                  <Image
                    alt={item.alt}
                    width={300}
                    height={300}
                    src={item.src}
                    className="size-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="h-full py-4 px-1">
                  <h3 className="text-lg font-medium mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center space-x-2">
            <button
              disabled
              className="rounded-full bg-white p-2 text-[#3C2A21] transition-colors hover:bg-[#3C2A21]/10 disabled:opacity-50"
              aria-label="Previous page"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button className="h-10 w-10 rounded-full text-sm font-medium transition-colors bg-secondary text-white">
              1
            </button>
            <button
              disabled
              className="rounded-full bg-white p-2 text-[#3C2A21] transition-colors hover:bg-[#3C2A21]/10 disabled:opacity-50"
              aria-label="Next page"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <section className="py-16 md:py-24 bg-background" id="cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="cta relative overflow-hidden bg-primary rounded-[34px] text-white p-6 md:p-16 grid-cols-1 grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
              <div>
                <div className="eyebrow">Custom development</div>
                <h2 className="mt-3 leading-[0.98] tracking-[-0.045em] font-semibold">
                  Looking for something specific?
                </h2>
                <p className="text-base text-[#c9d8d2] leading-7 max-w-xl mt-4">
                  Send a reference image, artwork or sample specification. Tuba
                  Trims can review the requirement and develop a
                  production-ready version around your material, size, branding
                  and finish.
                </p>
              </div>
              <div className="flex justify-start md:justify-end gap-3 flex-wrap">
                <Link
                  className="inline-flex items-center justify-center gap-2 p-4 bg-white text-primary border-white rounded-full text-sm font-bold shadow-md hover:bg-slate-100 transition-colors"
                  href="/contact"
                >
                  Start a development ↗
                </Link>
                <a
                  className="inline-flex items-center justify-center gap-2 p-4 border border-slate-400 text-white rounded-full text-sm font-bold hover:bg-white/10 transition-colors"
                  href="tel:+8801302250001"
                >
                  Talk to the team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
