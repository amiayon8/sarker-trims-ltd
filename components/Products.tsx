"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const productList = [
  { name: 'Draw Cord', image: '/media/products1.png', category: 'Accessories' },
  { name: 'Elastic', image: '/media/products2.png', category: 'Elasticity' },
  { name: 'Jacquard Elastic', image: '/media/products3.png', category: 'Premium' },
  { name: 'Twill Tape', image: '/media/products4.png', category: 'Taping' },
];

export function Products() {
  return (
    <section id="products" className="bg-white dark:bg-slate-950 py-24">
      <div className="mx-auto px-4 container">
        <div className="flex md:flex-row flex-col justify-between items-end mb-16">
          <div>
            <h2 className="font-bold dark:text-white text-4xl">Our Products</h2>
            <p className="mt-2 text-slate-500">Precision manufactured high-grade RMG essentials.</p>
          </div>
          <Link href="/product-range" className="hidden md:block font-bold text-red-600 hover:underline">View All Collection &rarr;</Link>
        </div>

        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-4">
          {productList.map((product, idx) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden"
            >
              <div className="aspect-500/333 overflow-hidden">
                <Image
                  fill
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 p-6 transition-opacity duration-300">
                <span className="mb-1 font-bold text-red-400 text-xs uppercase tracking-widest">{product.category}</span>
                <h3 className="font-bold text-white text-xl">{product.name}</h3>
              </div>
              <div className="top-4 left-4 absolute bg-red-600 p-2 rounded font-bold text-[10px] text-white uppercase tracking-tighter">
                {product.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
