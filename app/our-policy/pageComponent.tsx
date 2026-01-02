"use client"

import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Truck } from 'lucide-react';

export function PageComponent() {
    return (
        <section id="policy" className="bg-white dark:bg-slate-950 py-0 overflow-hidden">
            {/* Header Banner */}
            <div className="bg-[#003366] py-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="font-bold text-white text-3xl lg:text-5xl tracking-tight"
                >
                    Our Policy
                </motion.h2>
            </div>

            <div className="space-y-32 mx-auto px-4 py-24 container">
                {/* Environment Policy */}
                <div className="items-center gap-16 grid lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-2xl text-green-600 dark:text-green-400">
                                <Leaf size={32} />
                            </div>
                            <h3 className="font-black dark:text-white text-3xl uppercase tracking-tighter">
                                Environment Policy
                            </h3>
                        </div>
                        <p className="mb-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            All of our products and devoted to produce are without hampering the environment and considering to the health and safety of our employees.
                        </p>
                        <div className="space-y-4 bg-slate-50 dark:bg-slate-900 p-6 border border-slate-100 dark:border-slate-800 rounded-2xl">
                            <p className="text-slate-700 dark:text-slate-300 text-sm">
                                We accomplish this strictly by complying with the environmental laws and regulation of the governments of Bangladesh ensuring hygienic and safe working conditions.
                            </p>
                            <p className="text-slate-700 dark:text-slate-300 text-sm">
                                All the chemicals/Inks are imported from Italy/Taiwan/China accordance with compliance. We implemented our environment policy throughout the organization and check the impact by internal audit.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="relative">
                            <img
                                src="/media/policy1.png"
                                alt="Environment Compliance"
                                className="shadow-2xl rounded-[2.5rem] w-full h-auto object-cover aspect-500/333"
                            />
                            <div className="-top-4 -right-4 absolute bg-green-500 opacity-20 blur-3xl rounded-full w-24 h-24 animate-pulse" />
                        </div>
                    </motion.div>
                </div>

                {/* Quality Policy */}
                <div className="items-center gap-16 grid lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="group relative shadow-2xl rounded-[2.5rem] overflow-hidden">
                            <img
                                loading='lazy'
                                src="/media/policy2.png"
                                alt="Quality Assurance"
                                className="w-full h-auto object-cover aspect-500/333 group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-2xl text-red-600 dark:text-red-400">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="font-black dark:text-white text-3xl uppercase tracking-tighter">
                                Quality Policy
                            </h3>
                        </div>
                        <p className="mb-6 font-bold text-slate-700 dark:text-slate-300 text-xl">
                            The aim is to become one of the leading companies in producing garments accessories and focus on continuous improvement.
                        </p>
                        <div className="space-y-4">
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                We seek to prevent errors and eliminate the root cause of problems, educate, train and increase the quality of our employees so that they can perform their tasks in accordance with the established quality standards and contribute to improvement efforts.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full font-bold dark:text-slate-300 text-xs uppercase tracking-widest">Zero Defect</div>
                                <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full font-bold dark:text-slate-300 text-xs uppercase tracking-widest">Global Standards</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Delivery System */}
                <div className="items-center gap-16 grid lg:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-2xl text-blue-600 dark:text-blue-400">
                                <Truck size={32} />
                            </div>
                            <h3 className="font-black dark:text-white text-3xl uppercase tracking-tighter">
                                Delivery System
                            </h3>
                        </div>
                        <p className="mb-8 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                            Reliability is our hallmark. We ensure that our high-quality RMG accessories reach your doorstep exactly when you need them.
                        </p>
                        <div className="bg-blue-600 shadow-blue-500/20 shadow-xl p-8 rounded-[2rem] text-white">
                            <p className="mb-4 font-medium text-lg">
                                "We deliver the ordered goods to our customer's mentioned address by our own Covered Van and own delivery person with proper segmentation and with all documents."
                            </p>
                            <div className="bg-white/30 mb-4 rounded-full w-20 h-1" />
                            <p className="text-blue-100 text-sm">
                                Streamlined logistics for seamless garment production cycles.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative shadow-2xl border-8 border-slate-50 dark:border-slate-900 rounded-[2.5rem] overflow-hidden">
                            <img
                                loading='lazy'
                                src="/media/policy3.png"
                                alt="Delivery Logistics"
                                className="w-full h-auto object-cover aspect-500/333"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
