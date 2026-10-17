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
      title: "Round Braided Drawstring Cord",
      alt: "Round braided drawstring cord — Sarker Trims",
      src: "/media/products/draw-cord/p1.png",
    },
    {
      category: "draw-cord",
      title: "Two-Tone Hooded Sweatshirt Cord",
      alt: "Two-tone hooded sweatshirt cord — Sarker Trims",
      src: "/media/products/draw-cord/p2.png",
    },
    {
      category: "draw-cord",
      title: "Silicone-Dipped Tip Draw Cord",
      alt: "Silicone-dipped tip draw cord — Sarker Trims",
      src: "/media/products/draw-cord/p3.png",
    },
    {
      category: "draw-cord",
      title: "Sportswear Flat Braided Cord",
      alt: "Sportswear flat braided cord — Sarker Trims",
      src: "/media/products/draw-cord/p4.png",
    },
    {
      category: "draw-cord",
      title: "Engraved Metal Tip Drawstring",
      alt: "Engraved metal tip drawstring — Sarker Trims",
      src: "/media/products/draw-cord/p5.png",
    },
    {
      category: "draw-cord",
      title: "Heavy-Duty Spun Polyester Cord",
      alt: "Heavy-duty spun polyester cord — Sarker Trims",
      src: "/media/products/draw-cord/p6.png",
    },
    {
      category: "draw-cord",
      title: "Custom Dyed Drawstring Cord",
      alt: "Custom dyed drawstring cord — Sarker Trims",
      src: "/media/products/draw-cord/p7.png",
    },

    {
      category: "elastic",
      title: "Knitted & Braided Plain Elastic Bands (Up to 15cm)",
      alt: "Knitted and braided plain elastic bands — Sarker Trims",
      src: "/media/products/featured/elastic.jpg",
    },
    {
      category: "elastic",
      title: "White Knitted Waistband Elastic",
      alt: "White knitted waistband elastic — Sarker Trims",
      src: "/media/products/elastic/p1.png",
    },
    {
      category: "elastic",
      title: "Black High-Recovery Elastic Tape",
      alt: "Black high-recovery elastic tape — Sarker Trims",
      src: "/media/products/elastic/p2.png",
    },
    {
      category: "elastic",
      title: "Braided Apparel Elastic Tape",
      alt: "Braided apparel elastic tape — Sarker Trims",
      src: "/media/products/elastic/p3.png",
    },
    {
      category: "elastic",
      title: "Wide Knitted Underwear Elastic",
      alt: "Wide knitted underwear elastic — Sarker Trims",
      src: "/media/products/elastic/p4.png",
    },
    {
      category: "elastic",
      title: "Ribbed Plain Elastic Ribbon",
      alt: "Ribbed plain elastic ribbon — Sarker Trims",
      src: "/media/products/elastic/p5.png",
    },
    {
      category: "elastic",
      title: "Multi-Width Plain Elastic Rolls",
      alt: "Multi-width plain elastic rolls — Sarker Trims",
      src: "/media/products/elastic/p6.png",
    },
    {
      category: "elastic",
      title: "Soft Stretch Apparel Elastic",
      alt: "Soft stretch apparel elastic — Sarker Trims",
      src: "/media/products/elastic/p7.png",
    },
    {
      category: "elastic",
      title: "Industrial Garment Elastic Spool",
      alt: "Industrial garment elastic spool — Sarker Trims",
      src: "/media/products/elastic/p8.png",
    },

    {
      category: "jacquard-elastic",
      title: "Custom Woven Jacquard Elastic Waistband Webbing (Up to 5.5cm)",
      alt: "Custom woven jacquard elastic waistband webbing — Sarker Trims",
      src: "/media/products/featured/jacquard-elastic.jpg",
    },
    {
      category: "jacquard-elastic",
      title: "Athletic Performance Jacquard Elastic",
      alt: "Athletic performance jacquard elastic — Sarker Trims",
      src: "/media/products/jacquard-elastic/p1.png",
    },
    {
      category: "jacquard-elastic",
      title: "Embossed Weave Brand Logo Elastic",
      alt: "Embossed weave brand logo elastic — Sarker Trims",
      src: "/media/products/jacquard-elastic/p2.png",
    },
    {
      category: "jacquard-elastic",
      title: "Two-Tone Jacquard Underwear Band",
      alt: "Two-tone jacquard underwear band — Sarker Trims",
      src: "/media/products/jacquard-elastic/p3.png",
    },
    {
      category: "jacquard-elastic",
      title: "Patterned Jacquard Sportswear Tape",
      alt: "Patterned jacquard sportswear tape — Sarker Trims",
      src: "/media/products/jacquard-elastic/p4.png",
    },
    {
      category: "jacquard-elastic",
      title: "High-Density Jacquard Lettering Band",
      alt: "High-density jacquard lettering band — Sarker Trims",
      src: "/media/products/jacquard-elastic/p5.png",
    },
    {
      category: "jacquard-elastic",
      title: "Contrast Edge Jacquard Elastic",
      alt: "Contrast edge jacquard elastic — Sarker Trims",
      src: "/media/products/jacquard-elastic/p6.png",
    },
    {
      category: "jacquard-elastic",
      title: "Geometric Jacquard Waistband Webbing",
      alt: "Geometric jacquard waistband webbing — Sarker Trims",
      src: "/media/products/jacquard-elastic/p7.png",
    },
    {
      category: "jacquard-elastic",
      title: "Custom Typography Jacquard Elastic",
      alt: "Custom typography jacquard elastic — Sarker Trims",
      src: "/media/products/jacquard-elastic/p8.png",
    },

    {
      category: "twill-tape",
      title: "Needle Loom Herringbone Twill Tape (Cotton & Polyester)",
      alt: "Needle loom herringbone twill tape — Sarker Trims",
      src: "/media/products/featured/twill-tape.jpg",
    },
    {
      category: "twill-tape",
      title: "Natural Cotton Herringbone Twill Tape",
      alt: "Natural cotton herringbone twill tape — Sarker Trims",
      src: "/media/products/twill-tape/p1.png",
    },
    {
      category: "twill-tape",
      title: "Bright Polyester Binding Twill Tape",
      alt: "Bright polyester binding twill tape — Sarker Trims",
      src: "/media/products/twill-tape/p2.png",
    },
    {
      category: "twill-tape",
      title: "Heavy Needle Loom Seam Tape",
      alt: "Heavy needle loom seam tape — Sarker Trims",
      src: "/media/products/twill-tape/p3.png",
    },

    {
      category: "printed-and-woven-item",
      title: "Woven Brand Labels, Printed Care Tags & Badges",
      alt: "Woven brand labels, printed care tags and badges — Sarker Trims",
      src: "/media/products/featured/printed-woven-item.jpg",
    },
    {
      category: "printed-and-woven-item",
      title: "High-Density Damask Woven Label",
      alt: "High-density damask woven label — Sarker Trims",
      src: "/media/products/printed-woven-item/p1.png",
    },
    {
      category: "printed-and-woven-item",
      title: "Rotary Printed Satin Care Label",
      alt: "Rotary printed satin care label — Sarker Trims",
      src: "/media/products/printed-woven-item/p2.png",
    },
    {
      category: "printed-and-woven-item",
      title: "Embroidered Garment Patch",
      alt: "Embroidered garment patch — Sarker Trims",
      src: "/media/products/printed-woven-item/p3.png",
    },
    {
      category: "printed-and-woven-item",
      title: "Heat-Cut Custom Woven Ribbon",
      alt: "Heat-cut custom woven ribbon — Sarker Trims",
      src: "/media/products/printed-woven-item/p4.png",
    },
    {
      category: "printed-and-woven-item",
      title: "Cotton Printed Neck Tape",
      alt: "Cotton printed neck tape — Sarker Trims",
      src: "/media/products/printed-woven-item/p5.png",
    },
    {
      category: "printed-and-woven-item",
      title: "Apparel Hang Tag & Woven Badge",
      alt: "Apparel hang tag and woven badge — Sarker Trims",
      src: "/media/products/printed-woven-item/p6.png",
    },

    {
      category: "carton-box",
      title: "3-Ply, 5-Ply & 7-Ply Corrugated Master Export Cartons",
      alt: "Corrugated master export cartons — Sarker Trims",
      src: "/media/products/featured/carton-box.jpg",
    },
    {
      category: "carton-box",
      title: "Heavy-Duty Corrugated Master Carton",
      alt: "Heavy-duty corrugated master carton — Sarker Trims",
      src: "/media/products/carton-box/p1.png",
    },
    {
      category: "carton-box",
      title: "Custom Printed Garment Shipping Box",
      alt: "Custom printed garment shipping box — Sarker Trims",
      src: "/media/products/carton-box/p2.png",
    },
    {
      category: "carton-box",
      title: "Export Grade Corrugated Kraft Box",
      alt: "Export grade corrugated kraft box — Sarker Trims",
      src: "/media/products/carton-box/p3.png",
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

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
            {displayedItems.map((item) => (
              <div key={item.title} className="group flex flex-col rounded-3xl overflow-hidden border border-muted bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-4/3 relative overflow-hidden bg-slate-50">
                  <Image
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    src={item.src}
                    className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-1 flex-col justify-between">
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#b56b3d] mb-1">
                      {item.category.replace(/-/g, " ")}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-muted-foreground">
                    <span>In-house manufacturing</span>
                    <Link
                      href="/contact"
                      className="font-semibold text-primary hover:underline"
                    >
                      Sample ↗
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
