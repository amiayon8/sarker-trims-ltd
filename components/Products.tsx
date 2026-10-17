"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const productList = [
  {
    name: "Draw Cord",
    image: "/media/products/featured/draw-cord.jpg",
    category: "Drawstrings & Cords",
    href: "/gallery/draw-cord",
  },
  {
    name: "Elastic",
    image: "/media/products/featured/elastic.jpg",
    category: "Knitted & Braided",
    href: "/gallery/elastic",
  },
  {
    name: "Jacquard Elastic",
    image: "/media/products/featured/jacquard-elastic.jpg",
    category: "Custom Woven",
    href: "/gallery/jacquard-elastic",
  },
  {
    name: "Twill Tape",
    image: "/media/products/featured/twill-tape.jpg",
    category: "Herringbone Weave",
    href: "/gallery/twill-tape",
  },
  {
    name: "Printed & Woven Item",
    image: "/media/products/featured/printed-woven-item.jpg",
    category: "Labels & Tags",
    href: "/gallery/printed-and-woven-item",
  },
  {
    name: "Carton Box",
    image: "/media/products/featured/carton-box.jpg",
    category: "Corrugated Master Cartons",
    href: "/gallery/carton-box",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-white dark:bg-slate-950 py-24">
      <div className="mx-auto px-4 container">
        <div className="flex md:flex-row flex-col justify-between items-end mb-16">
          <div>
            <h2 className="font-bold dark:text-white text-4xl">Our Products</h2>
            <p className="mt-2 text-slate-500">Precision manufactured garment trims, narrow fabrics &amp; export packaging.</p>
          </div>
          <Link href="/gallery" className="hidden md:block font-bold text-primary hover:underline">
            View All Gallery &rarr;
          </Link>
        </div>

        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
          {productList.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden aspect-4/3"
            >
              <Link href={product.href} className="block size-full relative">
                <Image
                  fill
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 transition-opacity duration-300">
                  <span className="mb-1 font-bold text-amber-400 text-xs uppercase tracking-widest">{product.category}</span>
                  <h3 className="font-bold text-white text-xl">{product.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
