import React from 'react';
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-white dark:bg-[#0A0E17] transition-colors duration-300">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[100px]" />
            </div>

            <div className="container grid md:grid-cols-2 gap-10 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Accepting New Patients
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Redefining Smiles in <span className="text-gradient">Hardoi</span>.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                        Expert dental care by Dr. Ravindra Singh. Advanced technology meets compassionate treatment in a spa-like environment.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-blue-500/25">
                            Book Appointment
                            <ArrowRight size={20} />
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white dark:bg-white/10 text-gray-800 dark:text-white border border-gray-200 dark:border-white/10 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-50 dark:hover:bg-white/20 transition-all">
                            Our Services
                        </button>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-12 flex items-center gap-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white dark:border-gray-900 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1 text-yellow-400">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                            </div>
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">4.5 Rating | 11+ Reviews</span>
                        </div>
                    </div>
                </motion.div>

                {/* 3D Scene */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] md:h-[600px] w-full"
                >
                    <ThreeScene />
                </motion.div>

            </div>
        </section>
    );
}
