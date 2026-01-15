import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, UserRound, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: Calendar,
        title: "Consultation",
        description: "Book an appointment and meet Dr. Singh for a comprehensive oral exam."
    },
    {
        icon: UserRound,
        title: "Treatment Plan",
        description: "Receive a customized treatment plan tailored to your specific needs."
    },
    {
        icon: CheckCircle,
        title: "Aftercare",
        description: "Enjoy your new smile with our dedicated follow-up and maintenance support."
    }
];

export default function Journey() {
    return (
        <section className="py-24 bg-blue-50/50 dark:bg-gray-900/50">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Journey to a <span className="text-gradient">Perfect Smile</span></h2>
                    <p className="text-gray-600 dark:text-gray-400">Three simple steps to better oral health.</p>
                </div>

                <div className="relative grid md:grid-cols-3 gap-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-gray-700 dashed-line -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center mb-6 relative z-10 border-4 border-white dark:border-gray-800">
                                <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-pulse"></div>
                                <step.icon size={32} className="text-blue-500" />
                                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                                    {index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
