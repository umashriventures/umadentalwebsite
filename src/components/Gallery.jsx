import React from 'react';
import { motion } from 'framer-motion';

const items = [
    {
        id: 1,
        title: 'Operatory',
        subtitle: 'Focus & Brightness',
        color: 'bg-blue-50',
        borderColor: 'border-blue-100',
        textColor: 'text-blue-900',
        signal: 'Precision & Clarity'
    },
    {
        id: 2,
        title: 'Patient Lounge',
        subtitle: 'Softness & Enclosure',
        color: 'bg-orange-50',
        borderColor: 'border-orange-100',
        textColor: 'text-orange-900',
        signal: 'Warmth & Safety'
    },
    {
        id: 3,
        title: 'Dental Lab',
        subtitle: 'Craft & Detail',
        color: 'bg-slate-50',
        borderColor: 'border-slate-200',
        textColor: 'text-slate-900',
        signal: 'Material Mastery'
    },
    {
        id: 4,
        title: 'Sterilization',
        subtitle: 'Purity & Order',
        color: 'bg-cyan-50',
        borderColor: 'border-cyan-100',
        textColor: 'text-cyan-900',
        signal: 'Absolute Hygiene'
    },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-32 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                        The Sanctuary of Mastery
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl mx-auto">
                        Explore our spaces designed to balance biological comfort with clinical excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            className={`aspect-[4/5] ${item.color} dark:bg-slate-900 rounded-[2rem] border ${item.borderColor} dark:border-slate-800 flex flex-col items-center justify-end p-8 relative group cursor-pointer overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500`}
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 w-full h-full p-4 pb-48">
                                <div className="w-full h-full bg-slate-200/50 dark:bg-slate-800/50 rounded-2xl overflow-hidden border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center">
                                    <img
                                        src={`https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=400&auto=format&fit=crop`}
                                        alt={item.title}
                                        className="w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700 scale-110 group-hover:scale-100"
                                    />
                                    <span className="absolute text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">
                                        Frame: {item.title}
                                    </span>
                                </div>
                            </div>

                            <div className="relative z-10 w-full">
                                <span className={`text-xs font-bold uppercase tracking-widest ${item.textColor} dark:text-primary opacity-60 mb-2 block`}>
                                    {item.signal}
                                </span>
                                <h3 className={`text-2xl font-bold ${item.textColor} dark:text-white mb-1 transition-colors`}>
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {item.subtitle}
                                </p>
                                <div className="h-1 w-12 bg-primary/30 rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>

                            {/* Decorative Corner */}
                            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/10 rounded-tr-2xl group-hover:border-primary/40 transition-colors"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
