import Link from "next/link";
import Image from "next/image";

export interface GalleryItem {
  category: string;
  title: string;
  alt: string;
  src: string;
}

export function GalleryView({ currentCategory = "all" }: { currentCategory?: string }) {
  const categories = [
    { id: "all", label: "All Products", href: "/gallery/all" },
    { id: "draw-cord", label: "Draw Cord", href: "/gallery/draw-cord" },
    { id: "elastic", label: "Elastic", href: "/gallery/elastic" },
    { id: "jacquard-elastic", label: "Jacquard Elastic", href: "/gallery/jacquard-elastic" },
    { id: "twill-tape", label: "Twill Tape", href: "/gallery/twill-tape" },
    { id: "printed-and-woven-item", label: "Printed and Woven Item", href: "/gallery/printed-and-woven-item" },
    { id: "carton-box", label: "Carton Box", href: "/gallery/carton-box" },
  ];

  const galleryItems: GalleryItem[] = [
    {
      category: "draw-cord",
      title: "Braided Cotton & Polyester Draw Cord with Custom Aglets",
      alt: "Braided cotton and polyester draw cord with custom aglets — Sarker Trims",
      src: "/media/products/featured/draw-cord.jpg",
    },
    {
      category: "draw-cord",
      title: "Coiled Apparel Cords with Brushed Metal Tips",
      alt: "Coiled apparel draw cords with brushed metal tips — Sarker Trims",
      src: "/media/products/featured/draw-cord-2.jpg",
    },
    {
      category: "draw-cord",
      title: "Flat Braided Hoodie Cords with Silicone Dipped Tips",
      alt: "Flat braided hoodie cords with silicone dipped tips — Sarker Trims",
      src: "/media/products/featured/draw-cord-3.jpg",
    },

    {
      category: "elastic",
      title: "Knitted & Braided Plain Elastic Bands (Up to 15cm)",
      alt: "Knitted and braided plain elastic bands — Sarker Trims",
      src: "/media/products/featured/elastic.jpg",
    },
    {
      category: "elastic",
      title: "Multi-Width Plain Apparel Elastic Spool Stack",
      alt: "Multi-width plain apparel elastic spool stack — Sarker Trims",
      src: "/media/products/featured/elastic-2.jpg",
    },
    {
      category: "elastic",
      title: "High-Recovery Stretch Elastic Tape Performance",
      alt: "High-recovery stretch elastic tape performance — Sarker Trims",
      src: "/media/products/featured/elastic-3.jpg",
    },

    {
      category: "jacquard-elastic",
      title: "Custom Woven Jacquard Waistband Webbing (Up to 5.5cm)",
      alt: "Custom woven jacquard elastic waistband webbing — Sarker Trims",
      src: "/media/products/featured/jacquard-elastic.jpg",
    },
    {
      category: "jacquard-elastic",
      title: "Monochrome Raised Weave Jacquard Sportswear Band",
      alt: "Monochrome raised weave jacquard sportswear band — Sarker Trims",
      src: "/media/products/featured/jacquard-elastic-2.jpg",
    },

    {
      category: "twill-tape",
      title: "Needle Loom Herringbone Twill Tape (Cotton & Polyester)",
      alt: "Needle loom herringbone twill tape in multiple colors — Sarker Trims",
      src: "/media/products/featured/twill-tape.jpg",
    },

    {
      category: "printed-and-woven-item",
      title: "Damask Woven Brand Labels, Printed Care Tags & Badges",
      alt: "Damask woven brand labels, printed care tags and badges — Sarker Trims",
      src: "/media/products/featured/printed-woven-item.jpg",
    },

    {
      category: "carton-box",
      title: "3-Ply, 5-Ply & 7-Ply Corrugated Master Export Cartons",
      alt: "Corrugated master export cartons for apparel shipping — Sarker Trims",
      src: "/media/products/featured/carton-box.jpg",
    },
  ];

  const displayedItems =
    currentCategory === "all" || !currentCategory
      ? galleryItems
      : galleryItems.filter((item) => item.category === currentCategory);

  return (
    <main className="py-16 md:py-24 min-h-screen pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-4 md:space-y-6">
        <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#b56b3d]">
          Product Gallery
        </div>
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
          Garment Trims, Narrow Fabrics &amp; Packaging
          <span className="block text-[var(--leather)]">
            Manufactured in Dhaka
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl leading-relaxed text-muted-foreground">
          Explore our production lines: draw cords, plain and jacquard elastics, twill tapes, printed and woven items, and corrugated export carton boxes.
        </p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <section className="mb-8 lg:mb-12 flex gap-2 sm:gap-3 flex-wrap items-center border-y border-muted py-4 scrollbar-hidden overflow-auto">
            {categories.map((category) => {
              const isActive =
                category.id === currentCategory ||
                (currentCategory === "" && category.id === "all");
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  className={`inline-block text-center border px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
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

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {displayedItems.map((item) => (
              <div key={item.title} className="group flex flex-col rounded-3xl overflow-hidden border border-muted bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="aspect-4/3 relative overflow-hidden bg-slate-50">
                  <Image
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={item.src}
                    className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-1 flex-col justify-between">
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#b56b3d] mb-1.5">
                      {item.category.replace(/-/g, " ")}
                    </span>
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-muted-foreground">
                    <span>1-Day Sample Available</span>
                    <Link
                      href="/contact"
                      className="font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      Request Sample ↗
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <section className="py-16 md:py-24 bg-background" id="cta">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="cta relative overflow-hidden bg-primary rounded-[34px] text-white p-6 md:p-16 grid-cols-1 grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
              <div>
                <div className="eyebrow">Custom manufacturing</div>
                <h2 className="mt-3 leading-[0.98] tracking-[-0.045em] font-semibold text-2xl md:text-4xl">
                  Looking for custom development?
                </h2>
                <p className="text-base text-[#c9d8d2] leading-7 max-w-xl mt-4">
                  Send artwork, reference cord, elastic sample, woven ribbon design or carton specs. We provide physical counter-samples within 1 working day.
                </p>
              </div>
              <div className="flex justify-start md:justify-end gap-3 flex-wrap">
                <Link
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-primary border-white rounded-full text-sm font-bold shadow-md hover:bg-slate-100 transition-colors"
                  href="/contact"
                >
                  Request counter sample ↗
                </Link>
                <a
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-400 text-white rounded-full text-sm font-bold hover:bg-white/10 transition-colors"
                  href="tel:+8801302250001"
                >
                  +880 1302-250001
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
