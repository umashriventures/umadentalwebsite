import React from 'react';
import { motion } from 'framer-motion';

export default function DoctorList() {
    return (
        <section id="doctor" className="py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
            {/* Soft background grounding - Jaw arc hint */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-l-[50%] blur-3xl -z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-20">
                    <motion.div
                        className="w-full md:w-2/5"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative group">
                            {/* Simple, clean boundary for the 'Healer' */}
                            <div className="absolute -inset-2 bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl group-hover:inset-0 transition-all duration-500"></div>
                            <img
                                src="/assets/doctor_portrait.png"
                                alt="Dr. Ravindra Singh"
                                className="relative w-full aspect-[4/5] object-cover rounded-[2.5rem] border border-slate-100 dark:border-slate-700 grayscale hover:grayscale-0 transition-all duration-700 shadow-inner"
                            />
                            {/* Status callout */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/50 dark:border-slate-700/50">
                                <p className="text-primary font-bold text-lg mb-1">Chief Surgeon</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm italic">"Precision is secondary to empathy."</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-3/5"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-heading font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                            Dr. Ravindra Singh
                        </h2>
                        <p className="text-primary text-3xl font-semibold mb-8">BDS, Master of Clinical Comfort</p>

                        <div className="space-y-6 text-slate-600 dark:text-slate-400 text-xl leading-relaxed mb-12 max-w-2xl">
                            <p>
                                With a career dedicated to the intersection of **human biology and mechanical precision**,
                                Dr. Ravindra Singh has redefined what it means to visit the dentist in Hardoi.
                            </p>
                            <p>
                                His approach filters high-tech engineering through a lens of extreme empathy,
                                ensuring that the primal fear of dentistry is replaced by a calm, controlled experience of care.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-primary font-bold text-4xl mb-2">15+</p>
                                <p className="text-slate-400 font-medium uppercase tracking-widest text-xs">Years of Mastery</p>
                            </div>
                            <div className="p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                                <p className="text-primary font-bold text-4xl mb-2">10k+</p>
                                <p className="text-slate-400 font-medium uppercase tracking-widest text-xs">Smiles Restored</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
