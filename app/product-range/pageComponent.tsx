"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const leadTimes = [
    { id: '01', item: 'Needle Loom/Twill tape', leadTime: 'Sample 1(One) Day, Bulk 3 (Three) Days after approval' },
    { id: '02', item: 'Drawstring/Draw Cord', leadTime: 'Sample 1(One) Day, Bulk 3 (Three) Days after approval' },
    { id: '03', item: 'Jacquard elastic', leadTime: 'Sample 1(One) Day, Bulk 3 (Three) Days after approval' },
    { id: '04', item: 'Plain elastic', leadTime: 'Sample 1(One) Day, Bulk 3 (Three) Days after approval' },
    { id: '05', item: 'Woven Label', leadTime: 'Sample 3 (Three) Day, Bulk 7 (Seven) Days after approval' },
    { id: '06', item: 'Printing Label', leadTime: 'Sample 3 (Three) Day, Bulk 7 (Seven) Days after approval' },
    { id: '07', item: 'Carton', leadTime: 'Sample 12 (Twelve) Hours, Bulk depends on qty.' },
    { id: '08', item: 'Printing Item', leadTime: 'Sample 3 (Three) Day, Bulk 7 (Seven) Days after approval' },
    { id: '09', item: 'Poly', leadTime: 'Sample 3 (Three) Day, Bulk 5 (Five) Days after approval' },
    { id: '10', item: 'Master Carton', leadTime: 'Sample 2 (Two) Day, Bulk 3 (Three) Days after approval' },
];

const specs = [
    { id: '01', item: 'Needle Loom/Twill tape', spec: 'Yarn : Polyester/Bright PP, Cotton, Spun Polyester, Nylon' },
    { id: '02', item: 'Drawstring/Draw Cord', spec: 'Yarn : Cotton, Polyester, Spun Polyester' },
    { id: '03', item: 'Jacquard elastic', spec: 'Yarn : Polyester, nylon UP TO 5.5 CM' },
    { id: '04', item: 'Plain elastic', spec: 'Yarn : Polyester, nylon UP TO 15 CM' },
    { id: '05', item: 'Carton', spec: 'Paper: (Virgin & Local Liner 125-170 gsm) Ply : 3, 5 & 7' },
];

const categories = [
    {
        name: 'Draw Cord',
        images: [
            '/media/products/draw-cord/p1.png',
            '/media/products/draw-cord/p2.png',
            '/media/products/draw-cord/p3.png',
            '/media/products/draw-cord/p4.png',
            '/media/products/draw-cord/p5.png',
            '/media/products/draw-cord/p6.png',
            '/media/products/draw-cord/p7.png'
        ]
    },
    {
        name: 'Elastic',
        images: [
            '/media/products/elastic/p1.png',
            '/media/products/elastic/p2.png',
            '/media/products/elastic/p3.png',
            '/media/products/elastic/p4.png',
            '/media/products/elastic/p5.png',
            '/media/products/elastic/p6.png',
            '/media/products/elastic/p7.png',
            '/media/products/elastic/p8.png'
        ]
    },
    {
        name: 'Jacquard Elastic',
        images: [
            '/media/products/jacquard-elastic/p1.png',
            '/media/products/jacquard-elastic/p2.png',
            '/media/products/jacquard-elastic/p3.png',
            '/media/products/jacquard-elastic/p4.png',
            '/media/products/jacquard-elastic/p5.png',
            '/media/products/jacquard-elastic/p6.png',
            '/media/products/jacquard-elastic/p7.png',
            '/media/products/jacquard-elastic/p8.png'
        ]
    },
    {
        name: 'Twill Tape',
        images: [
            '/media/products/twill-tape/p1.png',
            '/media/products/twill-tape/p2.png',
            '/media/products/twill-tape/p3.png',
        ]
    },
    {
        name: 'Printed and Woven Item',
        images: [
            '/media/products/printed-woven-item/p1.png',
            '/media/products/printed-woven-item/p2.png',
            '/media/products/printed-woven-item/p3.png',
            '/media/products/printed-woven-item/p4.png',
            '/media/products/printed-woven-item/p5.png',
            '/media/products/printed-woven-item/p6.png',
        ]
    },
    {
        name: 'Carton Box',
        images: [
            '/media/products/carton-box/p1.png',
            '/media/products/carton-box/p2.png',
            '/media/products/carton-box/p3.png',
        ]
    }
];

export function PageComponent() {
    return (
        <section id="product-range" className="py-0">
            {/* Header Banner */}
            <div className="bg-[#003366] py-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="font-black text-white text-3xl lg:text-6xl uppercase tracking-tight"
                >
                    Product Range
                </motion.h2>
            </div>

            <div className="mx-auto px-4 py-16 container">
                {/* Tables Container */}
                <div className="flex xl:flex-row flex-col items-start gap-12 mb-24">
                    {/* Lead Time Table */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1 w-full"
                    >
                        <div className="bg-[#5cb85c] px-6 py-3 rounded-t-xl font-bold text-white text-center">
                            Sample & Bulk Production Delivery Lead time
                        </div>
                        <div className="bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 rounded-b-xl overflow-hidden">
                            <table className="w-full text-xs md:text-sm text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-800">
                                        <th className="p-3 border-slate-200 dark:border-slate-700 border-b w-12 text-center">#</th>
                                        <th className="p-3 border-slate-200 dark:border-slate-700 border-b">Item Name</th>
                                        <th className="p-3 border-slate-200 dark:border-slate-700 border-b">Lead Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leadTimes.map((row) => (
                                        <tr key={row.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                            <td className="p-3 border-slate-100 dark:border-slate-800 border-b font-bold text-slate-400 text-center">{row.id}.</td>
                                            <td className="p-3 border-slate-100 dark:border-slate-800 border-b font-semibold">{row.item}</td>
                                            <td className="p-3 border-slate-100 dark:border-slate-800 border-b text-slate-600 dark:text-slate-400">{row.leadTime}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>

                    {/* Specs Table */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex-1 w-full"
                    >
                        <div className="bg-[#5cb85c] px-6 py-3 rounded-t-xl font-bold text-white text-center">
                            Product Range (Material Specifications)
                        </div>
                        <div className="bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 rounded-b-xl overflow-hidden">
                            <table className="w-full text-xs md:text-sm text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-800">
                                        <th className="p-3 border-slate-200 dark:border-slate-700 border-b w-12 text-center">#</th>
                                        <th className="p-3 border-slate-200 dark:border-slate-700 border-b">Item Name</th>
                                        <th className="p-3 border-slate-200 dark:border-slate-700 border-b">Specifications</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {specs.map((row) => (
                                        <tr key={row.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                            <td className="p-3 border-slate-100 dark:border-slate-800 border-b font-bold text-slate-400 text-center">{row.id}.</td>
                                            <td className="p-3 border-slate-100 dark:border-slate-800 border-b font-semibold">{row.item}</td>
                                            <td className="p-3 border-slate-100 dark:border-slate-800 border-b text-slate-600 dark:text-slate-400">{row.spec}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4 text-[10px] text-slate-500 italic">
                            (Note: For Large Qty. order, bulk production lead time will differ from above information)
                        </p>
                    </motion.div>
                </div>

                {/* Categories Gallery */}
                <div className="space-y-24">
                    {categories.map((cat, catIdx) => (
                        <div key={cat.name}>
                            <div className="mb-10 text-center">
                                <h3 className="mb-4 font-bold text-[#337ab7] dark:text-[#5bc0de] text-3xl">
                                    {cat.name}
                                </h3>
                                <div className="bg-[#337ab7] mx-auto rounded-full w-24 h-1" />
                            </div>

                            <div className="gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {cat.images.map((img, imgIdx) => (
                                    <motion.div
                                        key={imgIdx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ delay: imgIdx * 0.1 }}
                                        className="group relative shadow-lg border border-slate-200 dark:border-slate-800 rounded-2xl aspect-500/333 overflow-hidden cursor-pointer"
                                    >
                                        <Image loading='lazy' fill src={img} alt={`${cat.name} ${imgIdx}`} className="group-hover:opacity-80 w-full h-full object-cover transition-all duration-500" />
                                        <div className="absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
