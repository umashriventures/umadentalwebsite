import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <section id="doctor" className="relative py-32 overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0 h-[120%]">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop')] bg-cover bg-center opacity-10 dark:opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white dark:from-[#0A0E17] dark:to-[#0A0E17]" />
            </div>

            <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-3 opacity-20 blur-lg"></div>
                    <img
                        src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1770&auto=format&fit=crop"
                        alt="Dr. Ravindra Singh"
                        className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>

                <div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet <span className="text-blue-500">Dr. Ravindra Singh</span></h2>

                        <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                            <p>
                                With over 15 years of experience at <strong>Munne Minya Choraha</strong>, Dr. Singh combines local trust with modern surgical precision.
                            </p>
                            <p>
                                Specializing in both restorative and cosmetic procedures, he believes that every patient deserves a smile they can be proud of.
                            </p>

                            <blockquote className="border-l-4 border-blue-500 pl-6 italic text-xl text-gray-800 dark:text-gray-100 font-medium">
                                "Our mission is to provide world-class dental care that is accessible, painless, and transformative."
                            </blockquote>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {[
                                { label: "Experience", value: "15+ Years" },
                                { label: "Surgeries", value: "5000+" },
                                { label: "Awards", value: "Best in Hardoi" },
                                { label: "Patients", value: "10k+" }
                            ].map((stat, i) => (
                                <div key={i} className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                                    <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
