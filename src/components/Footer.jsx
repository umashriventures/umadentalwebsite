import React from 'react';

export default function Footer() {
    return (
        <footer className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                                U
                            </div>
                            <span className="text-xl font-bold text-slate-900 dark:text-white">
                                Uma<span className="text-primary">Dental</span>
                            </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xs text-center md:text-left">
                            Elevating dental standards in Hardoi through craft, tech, and empathy.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end text-center md:text-right">
                        <p className="text-slate-600 dark:text-slate-400 mb-2">Hardoi, Uttar Pradesh, India</p>
                        <p className="text-slate-600 dark:text-slate-400 mb-2">+91 94503 85590</p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 dark:text-slate-500 text-sm">
                    © {new Date().getFullYear()} Made with ❤️ by Umashree Ventures
                </div>
            </div>
        </footer>
    );
}
