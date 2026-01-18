import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Heart } from 'lucide-react';

const team = [
    {
        id: 1,
        name: 'Dr. Priya Singh',
        role: 'Prosthodontist',
        specialty: 'Aesthetic Dentistry',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Dr. Amit Pathak',
        role: 'Endodontist',
        specialty: 'Root Canal Specialist',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Rohan Sharma',
        role: 'Clinic Coordinator',
        specialty: 'Patient Experience',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop'
    }
];

export default function TeamSection() {
    return (
        <section id="team" className="py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-500 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-6">
                            Guarding Your Smile
                        </h2>
                        <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl mx-auto">
                            A dedicated team of professionals committed to technical excellence and compassionate care.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="relative aspect-square rounded-2xl overflow-hidden mb-8 bg-slate-100 dark:bg-slate-700 border border-dashed border-slate-300 dark:border-slate-600">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-xs bg-white/80 dark:bg-slate-900/80 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700">
                                        Frame: {member.name}
                                    </span>
                                </div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-semibold mb-4 tracking-wide">
                                    {member.role}
                                </p>
                                <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                                    {member.specialty}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
