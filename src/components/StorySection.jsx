import React from 'react';
import { motion } from 'framer-motion';

export default function StorySection({ id, title, children, reversed = false }) {
    // Evolutionarily grounded visuals based on section theme
    const renderVisual = () => {
        if (id === 'about') {
            // Chaos -> Order / Biology -> Art
            return (
                <div className="relative w-full h-full flex items-center justify-center">
                    {/* Soft, organic chaos on one side */}
                    <div className="absolute left-0 w-1/2 h-full opacity-20 bg-gradient-to-r from-primary/40 to-transparent blur-2xl rounded-full animate-pulse"></div>
                    {/* Organized, geometric structure in center */}
                    <div className="relative w-48 h-48 border-2 border-primary/30 rounded-full flex items-center justify-center">
                        <div className="w-32 h-32 border-2 border-primary/50 rounded-full animate-spin-slow"></div>
                        <div className="absolute w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_rgba(74,144,226,0.5)]"></div>
                    </div>
                    <div className="absolute right-0 w-1/2 h-full opacity-10 flex flex-col gap-2 p-12">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-1 bg-primary rounded-full" style={{ width: `${100 - i * 15}%` }}></div>
                        ))}
                    </div>
                </div>
            );
        }
        if (id === 'services') {
            // Alignment / Predictability / Protective Mechanics
            return (
                <div className="relative w-full h-full flex items-center justify-center gap-4">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-16 h-48 bg-slate-100 rounded-2xl border border-slate-200 relative overflow-hidden"
                            initial={{ y: i % 2 === 0 ? -20 : 20 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                        >
                            <div className="absolute top-0 left-0 w-full h-1/3 bg-primary/10"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-primary/20 font-bold text-4xl">
                                {i + 1}
                            </div>
                        </motion.div>
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white pointer-events-none"></div>
                </div>
            );
        }
        return (
            <div className="text-primary font-heading text-6xl opacity-20 group-hover:opacity-40 transition-opacity">
                UDC
            </div>
        );
    };

    return (
        <section id={id} className={`py-32 ${reversed ? 'bg-slate-50 dark:bg-slate-900' : 'bg-white dark:bg-slate-950'} transition-colors duration-500`}>
            <div className="container mx-auto px-6">
                <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-20`}>
                    {/* Visual Metaphor Panel */}
                    <motion.div
                        className="w-full md:w-1/2 aspect-video bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex items-center justify-center relative overflow-hidden group"
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 dark:bg-slate-900/40"></div>
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            {renderVisual()}
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        className="w-full md:w-1/2"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: reversed ? -50 : 50 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                            {title}
                        </h2>
                        <div className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed space-y-6">
                            {children}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
