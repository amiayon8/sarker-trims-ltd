"use client"

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const manufacturingItems = [
    "All kinds of paper printed garments accessories like Hang Tag, West Tag, Price Tag, Box, Photo Inlay, Photo Card, Barcode Sticker, etc.",
    "All kinds of Woven Main, Size Label, Loop Label, etc.",
    "All kinds of Label (Ribbon & Paper) Printed garment accessories.",
    "Collar Insert, Butterfly, Collar Bone.",
    "Back board and neck board.",
    "Poly Bag.",
    "Master carton & inner Box Carton.",
    "Plain & Jacquard Elastic.",
    "Twill Tape.",
    "Drawstring and Draw cord.",
    "Gum Tape."
];

export function PageComponent() {
    return (
        <section id="service" className="bg-white dark:bg-slate-950 py-0 overflow-hidden">
            {/* Header Banner */}
            <div className="bg-[#003366] py-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="font-bold text-white text-3xl lg:text-5xl tracking-tight"
                >
                    Our Service
                </motion.h2>
            </div>

            <div className="space-y-32 mx-auto px-4 py-20 container">
                {/* Manufacturing Items Section */}
                <div className="items-center gap-16 grid lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="group relative">
                            <img
                                src="/media/services1.png"
                                alt="Manufacturing"
                                className="shadow-2xl rounded-3xl w-full h-auto object-cover aspect-500/333 group-hover:scale-[1.02] transition-transform duration-500"
                            />
                            <div className="-right-6 -bottom-6 -z-10 absolute flex justify-center items-center bg-red-600 rounded-2xl w-32 h-32 font-black text-white text-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2">
                                STL
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="order-1 lg:order-2"
                    >
                        <h3 className="mb-4 font-black dark:text-white text-3xl uppercase tracking-tighter">
                            Manufacturing Items
                        </h3>
                        <p className="mb-8 font-medium text-slate-600 dark:text-slate-400">
                            We are manufacturing below items in our own factory:
                        </p>
                        <ul className="space-y-3">
                            {manufacturingItems.map((item, idx) => (
                                <li key={idx} className="group flex items-start gap-3">
                                    <div className="bg-green-100 dark:bg-green-900/30 mt-1 p-1 rounded-full text-green-600 dark:text-green-400">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-700 dark:group-hover:text-red-400 dark:text-slate-300 group-hover:text-red-600 text-sm transition-colors">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Local & Imported Sourcing Section */}
                <div className="items-center gap-16 grid lg:grid-cols-2 bg-slate-50 dark:bg-slate-900/50 p-8 lg:p-16 rounded-[3rem]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="space-y-12"
                    >
                        <div>
                            <h3 className="mb-4 font-black dark:text-white text-3xl uppercase tracking-tighter">
                                Local Accessories Sourcing
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                We can also provide you the below items at a market competitive price:
                            </p>
                            <p className="mt-4 font-medium text-slate-500 dark:text-slate-400 text-sm italic">
                                All kinds of Pocketing fabrics, PVC bag, Interline, Hanger, Silica Gel, Tag Pin, Zip Lock, Button (Wooden, Plastic & Metal), Lace, Leather Badge, Rubber Patch, Toggle, Plastic Clip, Tissue, Printed Tissue, Local Fabrics (Knit & Woven) Buckle, etc.
                            </p>
                        </div>

                        <div className="pt-8 border-slate-200 dark:border-slate-800 border-t">
                            <h3 className="mb-4 font-black dark:text-white text-3xl uppercase tracking-tighter">
                                Imported Items
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                We also import below items for our customer regularly:
                            </p>
                            <p className="mt-4 font-medium text-slate-500 dark:text-slate-400 text-sm italic">
                                Interlining, Mobilon Tape, Lace, Velbert Tape, Velcro Tape, PVC Film, All types of Paper and Satin Ribbon.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <img
                            loading='lazy'
                            src="/media/services2.png"
                            alt="Accessories"
                            className="shadow-xl rounded-3xl w-full h-auto object-cover aspect-500/333"
                        />
                        <div className="top-4 left-4 absolute px-4 py-2 rounded-full font-bold text-red-600 text-xs uppercase tracking-widest glass-card">
                            Global Sourcing
                        </div>
                    </motion.div>
                </div>

                {/* Source of Raw Material Section */}
                <div className="items-center gap-16 grid lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <div className="group relative rounded-3xl overflow-hidden">
                            <img
                                loading='lazy'
                                src="/media/services3.png"
                                alt="Raw Materials"
                                className="w-full h-auto object-cover aspect-500/417 group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h3 className="inline-block mb-6 pb-2 border-red-600 border-b-4 font-black dark:text-white text-3xl uppercase tracking-tighter">
                            Source of Raw Material
                        </h3>
                        <p className="space-y-4 text-slate-700 dark:text-slate-300 text-sm lg:text-base leading-relaxed">
                            <span className="block">
                                Quality of the products is the most important factor. The products made with above-mentioned machine are for higher quality and better valued garments.
                            </span>
                            <span className="block mt-4">
                                To match the highest level of quality, our machines are imported from <strong>Taiwan, Switzerland, China, Germany and Italy</strong>. All raw materials such as yarn, rubber, ribbon, paper and board are imported from <strong>Thailand, Indonesia, China, India, Pakistan and Taiwan</strong> to maintain the consistent quality even for betterment of the quality of products.
                            </span>
                            <span className="block mt-4 font-bold text-red-600 dark:text-red-400">
                                We are introducing much more sophisticated and advanced technology.
                            </span>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
