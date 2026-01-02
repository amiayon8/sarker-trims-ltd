"use client"

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, User, ShieldCheck } from 'lucide-react';

const contactPersons = [
    {
        name: "Mr. Nitya Gopal Sarker",
        role: "Managing Director",
        phones: ["+8801xxxxxxxxx", "+8801xxxxxxxxxx"],
        emails: ["gopal8824@gmail.com"],
        icon: <User className="text-red-600" size={24} />
    },
    {
        name: "Mr. Nirmal K. Biswas",
        role: "General Manager",
        phones: ["+8801xxxxxxxxx", "+8801xxxxxxxxxx"],
        emails: ["nkbiswas2102@gmail.com"],
        icon: <ShieldCheck className="text-blue-600" size={24} />
    }
];

export function PageComponent() {
    return (
        <section id="contact" className="bg-white dark:bg-slate-950 py-0">
            {/* Header Banner */}
            <div className="bg-[#003366] py-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="font-bold text-white text-3xl lg:text-5xl tracking-tight"
                >
                    Contact Us
                </motion.h2>
            </div>

            <div className="mx-auto px-4 py-20 container">
                <div className="items-start gap-16 grid lg:grid-cols-2 mb-24">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-10"
                    >
                        <div>
                            <h3 className="mb-4 font-bold text-red-600 text-sm uppercase tracking-[0.2em]">Contact Info</h3>
                            <div className="space-y-8">
                                {/* Corporate Office */}
                                <div className="flex gap-5">
                                    <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-12 h-12 text-red-600 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-bold text-slate-900 dark:text-white">Corporate Office</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                            House # 9, Road # 12, Sector # 11, Uttara,<br />
                                            Dhaka-1230, Bangladesh.
                                        </p>
                                    </div>
                                </div>

                                {/* Communication */}
                                <div className="gap-8 grid sm:grid-cols-2">
                                    <div className="flex gap-5">
                                        <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-12 h-12 text-red-600 shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="mb-1 font-bold text-slate-900 dark:text-white">Phone</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">+8801xxxxxxxxx</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-12 h-12 text-red-600 shrink-0">
                                            <Globe size={24} />
                                        </div>
                                        <div>
                                            <h4 className="mb-1 font-bold text-slate-900 dark:text-white">Website</h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">www.sarkertrims.com</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-5">
                                    <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-12 h-12 text-red-600 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-bold text-slate-900 dark:text-white">Email</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">info@sarkertrims.com</p>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">sarkertrims@gmail.com</p>
                                    </div>
                                </div>

                                {/* Factory */}
                                <div className="flex gap-5 pt-6 border-slate-100 dark:border-slate-800 border-t">
                                    <div className="flex justify-center items-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-12 h-12 text-red-600 shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-bold text-slate-900 dark:text-white">Factory</h4>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                            Village & Post : Dakshin Jamsha, P.S.- Singair,<br />
                                            District : Manikganj, Bangladesh.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="group relative shadow-2xl rounded-[2.5rem] w-full overflow-hidden"
                    >
                        <img
                            src="/media/contact.png"
                            alt="Factory Operation"
                            className="w-full h-auto object-cover aspect-500/333 group-hover:scale-110 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                    </motion.div>
                </div>

                {/* Contact Personnel Section */}
                <div className="mb-24">
                    <div className="mb-12 text-center">
                        <h3 className="mb-4 font-bold text-slate-900 dark:text-white text-2xl">Key Personnel</h3>
                        <div className="bg-red-600 mx-auto rounded-full w-16 h-1" />
                    </div>
                    <div className="gap-8 grid md:grid-cols-2 mx-auto max-w-5xl">
                        {contactPersons.map((person, idx) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-xl p-8 border border-slate-100 dark:border-slate-800 rounded-3xl transition-shadow"
                            >
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="bg-white dark:bg-slate-800 shadow-sm p-4 rounded-2xl group-hover:scale-110 transition-transform">
                                        {person.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-xl leading-tight">{person.name}</h4>
                                        <p className="font-bold text-red-600 text-xs uppercase tracking-widest">{person.role}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Phone size={16} className="mt-1 text-slate-400" />
                                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                                            {person.phones.map(p => <p key={p}>{p}</p>)}
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Mail size={16} className="mt-1 text-slate-400" />
                                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                                            {person.emails.map(e => <p key={e}>{e}</p>)}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Map Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative shadow-2xl border border-slate-100 dark:border-slate-800 rounded-[2.5rem] h-[450px] overflow-hidden"
                >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3241471942924!2d90.3869809145271!3d23.87812178452652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c41479e9ff25%3A0x8c5bb39c60545eac!2s9+Rd+No+12%2C+Dhaka+1230!5e0!3m2!1sen!2sbd!4v1558517061969!5m2!1sen!2sbd" width="100%" height="450" frameBorder="0" allowFullScreen className='border-none'></iframe>
                </motion.div>
            </div>
        </section>
    );
};
