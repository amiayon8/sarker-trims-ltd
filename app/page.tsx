import Link from "next/link";
import Image from "next/image";
import { Download, Check, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  const productCategories = [
    {
      title: "Draw Cord",
      subtitle: "Braided cotton & polyester cords with custom aglets",
      image: "/media/products/featured/draw-cord.jpg",
      href: "/gallery/draw-cord",
      badge: "Sample: 1 Day",
    },
    {
      title: "Elastic",
      subtitle: "Knitted & braided plain elastics up to 15cm",
      image: "/media/products/featured/elastic.jpg",
      href: "/gallery/elastic",
      badge: "Sample: 1 Day",
    },
    {
      title: "Jacquard Elastic",
      subtitle: "Woven branding & athletic waistbands up to 5.5cm",
      image: "/media/products/featured/jacquard-elastic.jpg",
      href: "/gallery/jacquard-elastic",
      badge: "Sample: 1 Day",
    },
    {
      title: "Twill Tape",
      subtitle: "Needle loom herringbone cotton & polyester tapes",
      image: "/media/products/featured/twill-tape.jpg",
      href: "/gallery/twill-tape",
      badge: "Sample: 1 Day",
    },
    {
      title: "Printed and Woven Item",
      subtitle: "High-density woven labels, printed care tags & patches",
      image: "/media/products/featured/printed-woven-item.jpg",
      href: "/gallery/printed-and-woven-item",
      badge: "Sample: 3 Days",
    },
    {
      title: "Carton Box",
      subtitle: "3-ply, 5-ply & 7-ply corrugated master cartons",
      image: "/media/products/featured/carton-box.jpg",
      href: "/gallery/carton-box",
      badge: "Sample: 12 Hours",
    },
  ];

  const clientLogos = [
    { name: "Vintage VTG", src: "/clients/vintage-vtg-logo.png" },
    { name: "Pinewood", src: "/clients/pinewood-logo.png" },
    { name: "Yagi", src: "/clients/yagi.svg" },
    { name: "Hameem Group", src: "/clients/hameem-group-logo.png" },
    { name: "Koaj", src: "/clients/koaj-logo.png" },
    { name: "Albert", src: "/clients/albert-logo.png" },
  ];

  const selectedWorks = [
    {
      title: "Draw Cord with Custom Aglets",
      category: "Draw Cord",
      image: "/media/products/featured/draw-cord.jpg",
    },
    {
      title: "Knitted & Braided Plain Elastic",
      category: "Elastic",
      image: "/media/products/featured/elastic.jpg",
    },
    {
      title: "Athletic Jacquard Elastic Band",
      category: "Jacquard Elastic",
      image: "/media/products/featured/jacquard-elastic.jpg",
    },
    {
      title: "Herringbone Twill Tape Ribbon",
      category: "Twill Tape",
      image: "/media/products/featured/twill-tape.jpg",
    },
    {
      title: "Woven Labels & Care Tags",
      category: "Printed & Woven Item",
      image: "/media/products/featured/printed-woven-item.jpg",
    },
    {
      title: "Corrugated Export Master Carton",
      category: "Carton Box",
      image: "/media/products/featured/carton-box.jpg",
    },
  ];

  const timelineSteps = [
    {
      num: "01 / BRIEF",
      title: "Share your spec",
      desc: "Artwork, dimensions, yarn composition, elasticity, tipping style or carton size.",
    },
    {
      num: "02 / SAMPLING",
      title: "1-day sampling",
      desc: "Physical samples developed in 12–24 hours for fast buyer approval.",
    },
    {
      num: "03 / APPROVAL",
      title: "Lab dip & check",
      desc: "Sample tested for tensile strength, elongation, wash-fastness and color match.",
    },
    {
      num: "04 / PRODUCTION",
      title: "Bulk manufacturing",
      desc: "Needle looms, jacquard machines and corrugation lines produce approved specs.",
    },
    {
      num: "05 / DISPATCH",
      title: "Inspect & deliver",
      desc: "Inspected by QC, packed into master cartons and dispatched directly to your factory.",
    },
  ];

  const materialChips = [
    "Cotton Yarn",
    "Polyester",
    "Spun Polyester",
    "Nylon",
    "Latex & Spandex",
    "Herringbone Weave",
    "Jacquard Weave",
    "Silicone Aglet",
    "Metal Tipping",
    "Damask Woven",
    "Virgin Kraft Paper",
    "3/5/7-Ply Corrugated",
  ];

  const customFeatures = [
    "Sample in 1 day for tapes, cords & plain elastics",
    "Custom width, stretch elongation & Pantone matching",
    "Silicone-dipped, heat-shrink and embossed metal aglets",
    "High-bursting strength 3, 5 and 7-ply corrugated cartons",
  ];

  return (
    <div>
      <section id="top" className="relative overflow-hidden bg-grain">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 left-0 top-0 h-full w-full z-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 75%, rgba(255,255,255,0) 100%), url('/trims_background.jpg') left center/cover no-repeat",
            opacity: 0.45,
            mixBlendMode: "multiply",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 grid grid-cols-1 pb-12 lg:grid-cols-[1.4fr_1fr] lg:pb-20">
          <div className="flex flex-col justify-center relative z-10">
            <p className="eyebrow">Made in Dhaka · Garment Trims &amp; Packaging</p>
            <h1 className="mt-6 text-balance text-[clamp(38px,4.8vw,62px)] leading-none font-bold tracking-[-0.055em]">
              Draw Cords, Elastics, Twill Tapes &amp; Packaging
              <span className="text-[var(--leather)]">
                <br />
                Manufactured to Your Exact Spec.
              </span>
            </h1>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              From draw cords and plain &amp; jacquard elastics to needle loom twill tapes, woven/printed labels, and corrugated export carton boxes — Sarker Trims delivers dependable quality and 1-day sampling for garment manufacturers.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 justify-center sm:justify-start">
              <a
                href="https://wa.me/8801918920092?text=Hello%20Sarker%20Trims%20%E2%80%94%20I%20want%20to%20develop%20samples%20for%20..."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-warm)] transition-all hover:-translate-y-0.5 hover:bg-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Tech Pack
              </a>
              <a
                href="/Sarker-Trims-Company-Profile-2026.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-secondary/10"
              >
                <Download className="h-4 w-4" />
                Download Company Profile PDF
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 items-center gap-6 border-t border-muted pt-6">
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-secondary">
                <span>
                  1-Day
                  <br />
                  Sampling
                </span>
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-secondary">
                <span>
                  Bulk In
                  <br />
                  3 Days
                </span>
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-secondary">
                <span>
                  Custom
                  <br />
                  Developments
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white" id="products">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-5 md:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">Product lines</div>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
                Six dedicated manufacturing categories.
              </h2>
            </div>
            <p className="text-muted-foreground">
              Every production category is configured for speed, technical consistency, and compliance with buyer tech packs. Select a category to inspect gallery specifications.
            </p>
          </div>
          <div className="category-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <Link key={category.title} href={category.href}>
                <article className="flex flex-col h-full rounded-3xl overflow-hidden bg-[#faf8f5] border border-muted hover:-translate-y-1 transition-all duration-300 group hover:shadow-lg">
                  <div className="aspect-4/3 relative overflow-hidden bg-slate-100">
                    <Image
                      alt={`${category.title} — Sarker Trims`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      src={category.image}
                      className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 right-4 bg-black/75 backdrop-blur text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                      {category.badge}
                    </span>
                  </div>
                  <div className="p-6 flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {category.subtitle}
                      </p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-primary">
                      <span>View Gallery &amp; Specs</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" id="custom">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div className="dev-board">
            <div className="board-sheet">
              <div className="sheet-title">
                Technical Development
                <br />
                Sarker Trims Ltd.
              </div>
              <div className="sheet-line" />
              <div className="sheet-line" />
              <div className="sheet-line s" />
            </div>
            <div className="swatches">
              <div className="swatch" />
              <div className="swatch" />
              <div className="swatch" />
              <div className="swatch" />
            </div>
          </div>
          <div className="split-copy">
            <div className="eyebrow">Custom manufacturing</div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Your design brief. Our production line.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Send a tech pack, Pantone reference, sample cord, or carton dimension requirement. Sarker Trims develops exact yarn compositions, elongation tolerances, tipping, and printing in our factory.
            </p>
            <div className="material-chips flex gap-2 flex-wrap my-6">
              {materialChips.map((chip) => (
                <span
                  key={chip}
                  className="chip py-1.5 px-3 rounded-full bg-[#e6ece7] border border-[#d2ded7] text-[#305246] text-xs font-semibold"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="feature-list grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
              {customFeatures.map((feat) => (
                <div
                  key={feat}
                  className="feature flex items-start gap-2.5 text-xs sm:text-sm font-semibold"
                >
                  <span className="size-5 rounded-full bg-primary text-white grid place-items-center font-normal text-xs flex-none p-1 mt-0.5">
                    <Check className="size-3" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <Link className="btn btn-primary" href="/contact">
              Request counter sample <span className="arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-24 capability"
        id="manufacturing"
        aria-labelledby="manufacturing-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 items-stretch">
            <div className="cap-copy flex flex-col justify-center py-6 px-1 sm:pe-3 sm:pb-4 sm:pt-10 sm:ps-[18px]">
              <div className="eyebrow">Factory infrastructure</div>
              <h2 id="manufacturing-heading" className="text-3xl md:text-4xl font-semibold mb-4">
                Engineered for rapid turnarounds and bulk consistency.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Operating needle looms, computerized jacquard weaving machines, high-speed cord braiders, tipping units, rotary label printers, and corrugated converting machinery under one roof in Dhaka.
              </p>
              <div className="cap-stats grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <div className="cap-stat">
                  <strong>3,000 sq ft</strong>
                  <span>Facility</span>
                </div>
                <div className="cap-stat">
                  <strong>25+</strong>
                  <span>Production staff</span>
                </div>
                <div className="cap-stat">
                  <strong>1 Day</strong>
                  <span>Sample lead time</span>
                </div>
                <div className="cap-stat">
                  <strong>3 Days</strong>
                  <span>Bulk turnaround</span>
                </div>
              </div>
            </div>
            <div className="relative min-h-96 rounded-[28px] overflow-hidden bg-[#d5d4ca]">
              <Image
                alt="Sarker Trims modern weaving and production floor — Dhaka, Bangladesh"
                fill
                src="/images/sarkertrims_factory_floor.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="process-head max-w-2xl mb-12">
            <div className="eyebrow">Workflow</div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">From tech pack to bulk delivery — in five steps</h2>
            <p className="text-muted-foreground">
              A structured sample-to-bulk manufacturing process designed around the deadlines of apparel merchandising teams.
            </p>
          </div>
          <div className="timeline grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-4 md:gap-y-8 md:border-t border-muted">
            {timelineSteps.map((step) => (
              <div
                key={step.num}
                className="step border-l border-muted-foreground sm:border-l-0"
              >
                <div className="num">{step.num}</div>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:gap-12 items-end mb-12">
            <div>
              <div className="eyebrow">Production showcase</div>
              <h2 className="text-3xl md:text-4xl font-semibold">Selected work from our production floor.</h2>
            </div>
            <p className="text-muted-foreground">
              Recent developments in apparel draw cords, plain and jacquard elastics, twill tapes, garment brand labels, and corrugated export packaging.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedWorks.map((work) => (
              <article
                key={work.title}
                className="group relative rounded-3xl overflow-hidden bg-white border border-muted shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-4/3 relative overflow-hidden">
                  <Image
                    alt={work.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    src={work.image}
                    className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#b56b3d] block mb-1">
                    {work.category}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">
                    {work.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-5 md:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">Why Sarker Trims</div>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-4">
                A dependable trims and packaging partner in Dhaka.
              </h2>
            </div>
            <p className="text-muted-foreground text-base max-w-xl">
              We operate an in-house manufacturing setup with dedicated lines for draw cords, elastic tapes, twill tapes, woven labels, and corrugated cartons. Merchandisers get fast sample approvals and predictable bulk deliveries.
            </p>
          </div>
          <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-muted p-6 rounded-2xl bg-[#fffdfa]">
              <div className="grid place-items-center size-12 rounded-xl bg-[#e5ede8] text-primary text-2xl font-extrabold mb-6">
                ↗
              </div>
              <h3 className="text-base font-semibold mb-2 tracking-tight">
                1-Day Sample Turnaround
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Counter-samples for draw cords, twill tapes, and elastics delivered within 24 hours.
              </p>
            </div>
            <div className="border border-muted p-6 rounded-2xl bg-[#fffdfa]">
              <div className="grid place-items-center size-12 rounded-xl bg-[#e5ede8] text-primary text-2xl font-extrabold mb-6">
                ◎
              </div>
              <h3 className="text-base font-semibold mb-2 tracking-tight">
                Bulk Consistency
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Approved elongation, yarn density, tensile strength, and color matching carried through full production.
              </p>
            </div>
            <div className="border border-muted p-6 rounded-2xl bg-[#fffdfa]">
              <div className="grid place-items-center size-12 rounded-xl bg-[#e5ede8] text-primary text-2xl font-extrabold mb-6">
                ▦
              </div>
              <h3 className="text-base font-semibold mb-2 tracking-tight">
                Complete Trims &amp; Packaging
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Source both narrow fabric trims and corrugated export shipping cartons from a single Dhaka supplier.
              </p>
            </div>
            <div className="border border-muted p-6 rounded-2xl bg-[#fffdfa]">
              <div className="grid place-items-center size-12 rounded-xl bg-[#e5ede8] text-primary text-2xl font-extrabold mb-6">
                ✦
              </div>
              <h3 className="text-base font-semibold mb-2 tracking-tight">
                Direct Communication
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Immediate responses via WhatsApp and phone to keep merchandising approvals moving forward without delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-14 md:py-20 border-y border-muted bg-white"
        aria-label="Our Clients"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs uppercase tracking-[0.17em] text-muted-foreground font-bold mb-8">
            Trusted by Garment Manufacturers &amp; Exporters Across Bangladesh
          </div>
          <div
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 p-4"
            role="list"
            aria-label="Client logos"
          >
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 p-2 h-20 md:h-20 md:w-36 flex items-center justify-center group hover:shadow-lg transition-all duration-300"
                role="listitem"
              >
                <Image
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  src={client.src}
                  className="size-full object-contain filter rounded-lg overflow-hidden transition-all duration-300"
                />
                <span className="sr-only">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background" id="cta">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cta relative overflow-hidden bg-primary rounded-[34px] text-white p-6 md:p-16 grid-cols-1 grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="eyebrow">Start sample development</div>
              <h2 className="mt-3 leading-[1.05] tracking-[-0.045em] font-semibold text-2xl md:text-4xl">
                Have a draw cord, elastic, twill tape or carton project?
              </h2>
              <p className="text-base text-[#c9d8d2] leading-7 max-w-xl mt-4">
                Share your specification, tech pack or reference sample — we confirm timeline and pricing within one working day.
              </p>
              <div className="mt-4 flex gap-4 flex-wrap text-xs text-[#bfd1ca] font-[600]">
                <span>
                  <a href="mailto:info@sarkertrims.com">info@sarkertrims.com</a>
                </span>
                <span>+880 1302-250001</span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
            <div className="relative z-10 bg-white rounded-full p-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full rounded-full shadow-lg transition-colors"
              >
                Request sample / RFQ
                <ArrowUpRight className="size-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
