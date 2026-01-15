import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X, CheckCircle2 } from 'lucide-react';
import { bookAppointment } from '../utils/api';

export default function CTAButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState('idle'); // idle, loading, success
    const [form, setForm] = useState({ name: '', phone: '', date: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        const res = await bookAppointment(form);
        if (res.success) {
            setStatus('success');
            setTimeout(() => {
                setIsOpen(false);
                setStatus('idle');
                setForm({ name: '', phone: '', date: '' });
            }, 2000);
        }
    };

    return (
        <>
            <motion.button
                className="fixed bottom-8 right-8 z-40 bg-accent text-white p-4 rounded-full shadow-[0_0_30px_rgba(242,153,74,0.4)] flex items-center justify-center group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
            >
                <Calendar size={28} />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-semibold whitespace-nowrap">
                    Book Appointment
                </span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => status !== 'loading' && setIsOpen(false)}
                        />

                        <motion.div
                            className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        >
                            <button
                                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <X size={24} />
                            </button>

                            {status === 'success' ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    >
                                        <CheckCircle2 size={80} className="text-green-500 mb-6" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Booking Confirmed!</h3>
                                    <p className="text-slate-500 dark:text-slate-400">Dr. Singh's team will call you shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">Reserve Your Spot</h2>
                                    <p className="text-slate-500 dark:text-slate-400 mb-8">Begin your smile evolution journey today.</p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-slate-500 dark:text-slate-400 text-sm mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-500 dark:text-slate-400 text-sm mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-500 dark:text-slate-400 text-sm mb-2">Preferred Date</label>
                                            <input
                                                type="date"
                                                required
                                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
                                                value={form.date}
                                                onChange={(e) => setForm({ ...form, date: e.target.value })}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(242,153,74,0.2)]"
                                        >
                                            {status === 'loading' ? 'Processing...' : 'Secure Appointment'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
