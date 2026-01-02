"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';

export function CTA() {
    return (
        <section className="bg-red-700 dark:bg-red-900 py-16 overflow-hidden" >
            <div className="mx-auto px-4 container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex md:flex-row flex-col justify-between items-center gap-8 text-white"
                >
                    <div className="md:text-left text-center">
                        <h2 className="mb-4 font-bold text-3xl">Sarker Trims Limited</h2>
                        <p className="max-w-2xl text-red-100 text-xl">
                            Focusing on the fastest growing garments trades and providing the best efforts to cope with international market trends.
                        </p>
                    </div>
                    <Link href='/contact-us' className="hover:bg-white px-8 py-3 border-2 border-white rounded-full font-semibold hover:text-red-700 transition-all duration-300">
                        Get In Touch
                    </Link>
                </motion.div>
            </div>
        </section >
    )
}