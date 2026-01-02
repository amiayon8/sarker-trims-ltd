"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

const directors = [
    {
        name: "Mrs. Rekha Sarker",
        role: "Chairman",
        details: [
            "Chairman, Sarker Trims Limited",
            "Managing Partner",
            "Hemawari Japanese Gym & Yoga Center"
        ],
        image: "/media/directors/rekha.png"
    },
    {
        name: "Mr. Nitya Gopal Sarker",
        role: "Managing Director",
        details: [
            "Managing Director, Sarker Trims Limited",
            "Proprietor, Aditi International",
            "OVI Electronics (Distributor of SAMSUNG Mobile Phone)",
            "Managing Partner, SmileUp Dental Clinic"
        ],
        image: "/media/directors/nitya.png"
    },
    {
        name: "Mr. Anonto Kumer Sarker",
        role: "Director",
        details: [
            "Director, Sarker Trims Limited",
            "Proprietor",
            "Ayon Enterprise"
        ],
        image: "/media/directors/anonto.png"
    },
    {
        name: "Mr. Prohlad Kumer Sarker",
        role: "Director",
        details: [
            "Director",
            "Proprietor, Sarker Electronics (Distributor of SAMSUNG Mobile Phone)"
        ],
        image: "/media/directors/prohlad.png"
    }
];

export function PageComponent() {
    return (
        <section id="board-of-directors" className="py-0">
            {/* Header Banner */}
            <div className="bg-[#003366] py-12 text-center">
                <h2 className="font-bold text-white text-3xl lg:text-5xl tracking-tight">Board of Directors</h2>
            </div>

            <div className="mx-auto px-4 py-20 container">
                <div className="gap-10 grid sm:grid-cols-2 lg:grid-cols-4">
                    {directors.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col"
                        >
                            <div className="relative shadow-md mb-6 border border-slate-100 dark:border-slate-800 rounded-2xl aspect-square overflow-hidden">
                                <Image
                                    fill
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 p-4 transition-opacity">
                                    <p className="font-medium text-white text-xs uppercase tracking-widest">{member.name}</p>
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="mb-1 font-bold text-slate-900 dark:text-white group-hover:text-red-600 text-lg transition-colors">
                                    {member.name}
                                </h3>
                                <p className="mb-4 font-bold text-red-600 dark:text-red-400 text-sm uppercase tracking-tighter">
                                    {member.role}
                                </p>

                                <ul className="space-y-2">
                                    {member.details.map((detail, dIdx) => (
                                        <li key={dIdx} className="pl-3 border-slate-200 dark:border-slate-700 border-l-2 text-slate-600 dark:text-slate-400 text-sm leading-snug">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
