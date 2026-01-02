"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const machinerySections = [
    {
        title: "Needle Loom/Twill Tape & Drawstring/Draw Cord Section",
        images: [
            "/media/machineries/needle-loom/1.png",
            "/media/machineries/needle-loom/2.png",
            "/media/machineries/needle-loom/3.png",
            "/media/machineries/needle-loom/4.png",
            "/media/machineries/needle-loom/5.png",
        ]
    },
    {
        title: "Crochet/Elastic Section",
        images: [
            "/media/machineries/crochet-elastic/1.png",
            "/media/machineries/crochet-elastic/2.png",
            "/media/machineries/crochet-elastic/3.png",
            "/media/machineries/crochet-elastic/4.png",
            "/media/machineries/crochet-elastic/5.png",
            "/media/machineries/crochet-elastic/6.png",
        ]
    },
    {
        title: "Jacquard Elastic Section",
        images: [
            "/media/machineries/jacquard-elastic/1.png",
            "/media/machineries/jacquard-elastic/2.png",
            "/media/machineries/jacquard-elastic/3.png",
            "/media/machineries/jacquard-elastic/4.png",
        ]
    },
    {
        title: "Woven Label Section",
        images: [
            "/media/machineries/woven-label/1.png",
            "/media/machineries/woven-label/2.png",
            "/media/machineries/woven-label/3.png",
            "/media/machineries/woven-label/4.png",
        ]
    },
    {
        title: "Printed Label Section",
        images: [
            "/media/machineries/printed-label/1.png",
            "/media/machineries/printed-label/2.png",
        ]
    },
    {
        title: "Poly Machine",
        images: [
            "/media/machineries/poly-machine/1.png",
            "/media/machineries/poly-machine/2.png",
        ]
    },
    {
        title: "Packaging (Carton) Section",
        images: [
            "/media/machineries/packaging/1.png",
            "/media/machineries/packaging/2.png",
        ]
    },
    {
        title: "Printing & Die Cutting Section",
        images: [
            "/media/machineries/printing-die-cutting/1.png",
            "/media/machineries/printing-die-cutting/2.png",
            "/media/machineries/printing-die-cutting/3.png",
            "/media/machineries/printing-die-cutting/4.png",
        ]
    }
];

export function PageComponent() {
    return (
        <section id="machineries" className="py-0">
            {/* Header Banner */}
            <div className="bg-[#003366] py-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-bold text-white text-3xl lg:text-5xl tracking-tight"
                >
                    Machineries Details
                </motion.h2>
            </div>

            <div className="bg-white dark:bg-slate-950 mx-auto px-4 py-20 container">
                <div className="space-y-24">
                    {machinerySections.map((section, sIdx) => (
                        <div key={section.title}>
                            <div className="mb-10 text-center">
                                <motion.h3
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="mb-4 font-bold text-[#337ab7] dark:text-[#5bc0de] text-xl md:text-2xl"
                                >
                                    {section.title}:
                                </motion.h3>
                                <div className="bg-[#337ab7] opacity-50 mx-auto rounded-full w-16 h-0.5" />
                            </div>

                            <div className="gap-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {section.images.map((img, iIdx) => (
                                    <motion.div
                                        key={iIdx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.03 }}
                                        transition={{ delay: iIdx * 0.05 }}
                                        className="group relative shadow-md border border-slate-100 dark:border-slate-800 rounded-xl aspect-500/333 md:aspect-video overflow-hidden"
                                    >
                                        <Image
                                            fill
                                            loading='lazy'
                                            src={img}
                                            alt={`${section.title} ${iIdx}`}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 flex justify-center items-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="bg-white/10 backdrop-blur-sm p-2 border border-white/20 rounded-full">
                                                <div className="bg-white rounded-full w-2 h-2 animate-ping" />
                                            </div>
                                        </div>
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
