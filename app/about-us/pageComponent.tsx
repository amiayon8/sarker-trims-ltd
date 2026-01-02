"use client"

import { motion } from 'framer-motion';
import { MapPin, Users, Calendar, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const stats = [
    {
        title: "Registered Office Address",
        content: "Sarker Trims Limited\nHouse # 9, Road # 12, Sector#11, Uttara Dhaka-1230, Bangladesh",
        icon: MapPin,
        color: "bg-emerald-500"
    },
    {
        title: "Factory Address",
        content: "Dakshin Jamsha, Singair Manikganj, Bangladesh\nFactory Area: 1 Bigha\nFactory Building: 9,600 Sft.",
        icon: MapPin,
        color: "bg-emerald-500"
    },
    {
        title: "Man Power",
        content: "Office Staff: 20\nWorker: 120",
        icon: Users,
        color: "bg-emerald-500"
    },
    {
        title: "Established",
        content: "2016",
        icon: Calendar,
        color: "bg-emerald-500"
    }
];

const productionData = [
    { item: "Needle Loom (Twill Tape)", capacity: "30,000 Yds (Per day)" },
    { item: "Drawstring/Draw Cord", capacity: "20,000 Yds (Per day)" },
    { item: "Jacquard elastic", capacity: "10,000 Yds (Per day)" },
    { item: "Plain elastic", capacity: "25,000 Yds (Per day)" },
    { item: "Master Carton", capacity: "8,000 Pcs (Per day)" },
    { item: "Woven Label", capacity: "2,50,000 Pcs (Per day)" },
    { item: "Printing Label", capacity: "5,00,000 Pcs (Per day)" },
    { item: "Printing Item (Hang tag & Stickers)", capacity: "5,00,000 Pcs (Per day)" },
    { item: "Carton", capacity: "3,500 Pcs (Per day)" },
    { item: "Poly", capacity: "2,50,000 Pcs (Per day)" }
];

const galleryImages = [
    "/media/factory-visit/f1.png",
    "/media/factory-visit/f2.png",
    "/media/factory-visit/f3.png",
    "/media/factory-visit/f4.png",
    "/media/factory-visit/f5.png",
    "/media/factory-visit/f6.png",
];

export function PageComponent() {
    return (
        <section id="at-a-glance" className="py-0">
            {/* Header Banner */}
            <div className="bg-[#003366] py-12 text-center">
                <h2 className="font-bold text-white text-3xl lg:text-5xl tracking-tight">About Us</h2>
            </div>

            <div className="mx-auto px-4 py-16 container">
                {/* Stats Grid */}
                <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-4 mb-24">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col items-center text-center"
                        >
                            <div className="relative mb-6">
                                <div className={`w-16 h-16 rounded-full ${stat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                                    <CheckCircle2 size={32} />
                                </div>
                            </div>
                            <h3 className="mb-3 font-bold dark:text-white text-lg">{stat.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                                {stat.content}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Production Capacity Section */}
                <div className="items-start gap-12 grid lg:grid-cols-2 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="shadow-2xl border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden"
                    >
                        <img
                            src="/media/factory.png"
                            alt="Factory Gate"
                            className="w-full h-auto object-cover"
                        />
                        <div className="bg-white dark:bg-slate-900 p-6">
                            <p className="font-bold text-slate-800 dark:text-slate-200 text-center">Sarker Trims Limited - Factory</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h3 className="inline-block mb-8 pb-2 border-red-600 border-b-4 font-black dark:text-white text-3xl uppercase tracking-tighter">
                            Production Capacity
                        </h3>
                        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <tbody>
                                    {productionData.map((row, idx) => (
                                        <tr
                                            key={idx}
                                            className={`hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-800/30'}`}
                                        >
                                            <td className="p-4 dark:border-slate-800 border-b font-medium text-slate-700 dark:text-slate-300">{row.item}</td>
                                            <td className="p-4 dark:border-slate-800 border-b text-slate-600 dark:text-slate-400 text-right">{row.capacity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>

                {/* Factory Visit Section */}
                <div className="mb-12 text-center">
                    <h2 className="mb-4 font-bold text-[#007bff] dark:text-[#4dabff] text-4xl">Factory Visit</h2>
                    <div className="bg-[#007bff] mx-auto rounded-full w-24 h-1" />
                </div>

                <div className="gap-6 grid grid-cols-2 md:grid-cols-3">
                    {galleryImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group relative shadow-lg rounded-2xl aspect-500/333 overflow-hidden cursor-pointer"
                        >
                            <Image loading='lazy' fill src={img} alt={`Gallery ${idx}`} className="group-hover:opacity-80 w-full h-full object-cover transition-opacity" />
                            <div className="absolute inset-0 flex justify-center items-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
