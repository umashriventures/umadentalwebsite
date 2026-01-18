import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Stethoscope } from 'lucide-react';

export default function PharmaLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [lang, setLang] = useState(localStorage.getItem('pharma_lang') || 'en');
    const navigate = useNavigate();

    const t = {
        en: {
            title: "Pharmacist Portal",
            subtitle: "Uma Dental Clinic Management",
            label: "Access Password",
            placeholder: "••••••••",
            login: "Log In",
            back: "← Back to Website",
            invalid: "Invalid credentials. Please try again."
        },
        hi: {
            title: "फार्मासिस्ट पोर्टल",
            subtitle: "उमा डेंटल क्लिनिक प्रबंधन",
            label: "एक्सेस पासवर्ड",
            placeholder: "••••••••",
            login: "लॉग इन करें",
            back: "← वेबसाइट पर वापस जाएं",
            invalid: "अमान्य क्रेडेंशियल। कृपया पुनः प्रयास करें।"
        }
    };

    const toggleLang = () => {
        const newLang = lang === 'en' ? 'hi' : 'en';
        setLang(newLang);
        localStorage.setItem('pharma_lang', newLang);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const correctPassword = import.meta.env.VITE_PHARMA_PASSWORD;

        if (password === correctPassword) {
            localStorage.setItem('pharma_auth', 'true');
            navigate('/pharma/dashboard');
        } else {
            setError(t[lang].invalid);
            setPassword('');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#051124] px-4">
            {/* Lang Toggle */}
            <div className="absolute top-8 right-8">
                <button
                    onClick={toggleLang}
                    className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-primary shadow-sm hover:scale-105 transition-all"
                >
                    {lang === 'en' ? 'हिन्दी' : 'English'}
                </button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full"
            >
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                        <Stethoscope className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">{t[lang].title}</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">{t[lang].subtitle}</p>
                </div>

                <div className="bg-white dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                {t[lang].label}
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none dark:text-white"
                                    placeholder={t[lang].placeholder}
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-500 text-sm font-medium text-center"
                            >
                                {error}
                            </motion.p>
                        )}

                        <button
                            type="submit"
                            className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            {t[lang].login}
                        </button>
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-slate-500 hover:text-primary text-sm transition-colors"
                    >
                        {t[lang].back}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
