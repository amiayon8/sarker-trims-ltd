"use client"

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function CompanyInfo() {
  return (
    <section id="about" className="bg-white dark:bg-slate-950 py-24">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-4 font-bold text-red-600 uppercase tracking-[0.2em]"
          >
            Since 2016
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bold dark:text-white text-4xl lg:text-5xl"
          >
            Our Company
          </motion.h2>
          <div className="bg-red-600 mx-auto mt-6 w-20 h-1" />
        </div>

        <div className="items-center gap-16 grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-8 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Sarker Trims Limited started its journey in 2016 as a quality manufacturer of RMG Accessories (Elastic, Plain/Jacquard, Carton, Woven Label, Printed Item) in Bangladesh.
              Our state-of-the-art facility in Manikganj serves premium RMG buyers globally.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-8 border border-slate-100 dark:border-slate-800 rounded-2xl">
              <h3 className="mb-4 font-bold text-red-600 text-2xl">Our Mission</h3>
              <p className="mb-6 pl-4 border-red-500 border-l-4 text-slate-700 dark:text-slate-300 italic">
                "To become the most reliable, competent and quality accessories manufacturer and trustworthy sourcing business partner for local and international garments industry."
              </p>

              <h4 className="mb-4 font-bold">Core Principles:</h4>
              <ul className="gap-4 grid grid-cols-2">
                {['Team Work', 'Professionalism', 'Commitment', 'Punctuality', 'Quality', 'Innovation'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 size={18} className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="gap-4 grid grid-cols-2"
          >
            <img
              src="/media/company1.png"
              className="shadow-xl rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              alt="Office"
              loading='lazy'
            />
            <img
              src="/media/company2.png"
              className="shadow-xl mt-8 rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              alt="Factory"
              loading='lazy'
            />
            <img
              src="/media/company3.png"
              className="shadow-xl rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              alt="Packaging"
              loading='lazy'
            />
            <img
              src="/media/company4.png"
              className="shadow-xl mt-8 rounded-2xl w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              alt="Machine"
              loading='lazy'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
