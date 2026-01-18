import React from 'react';
import { motion } from 'framer-motion';

export default function StorySection({ id, title, children, reversed = false }) {
    // Evolutionarily grounded visuals based on section theme
    const renderVisual = () => {
        return (
            <div className="w-full h-full p-8">
                <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center overflow-hidden border border-dashed border-slate-300 dark:border-slate-600">
                    <img
                        src={`https://images.unsplash.com/photo-1629909605125-58da31ffb42f?q=80&w=800&auto=format&fit=crop`}
                        alt="Clinical Placeholder"
                        className="w-full h-full object-cover opacity-50 contrast-125 mix-blend-multiply dark:mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-slate-400 font-bold uppercase tracking-widest text-sm bg-white/80 dark:bg-slate-900/80 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                            3D Frame: {id}
                        </span>
                    </div>
                </div>
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
