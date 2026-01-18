import React from 'react';
import { Menu, Moon, Sun, Phone } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
    return (
        <nav className="fixed top-0 left-0 w-full z-[100] bg-white dark:bg-slate-900/90 border-b border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-md transition-colors">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                        U
                    </div>
                    <a href="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Uma<span className="text-primary">Dental</span>
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#home" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        Home
                    </a>
                    <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        About
                    </a>
                    <a href="#services" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        Services
                    </a>
                    <a href="#team" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        Team
                    </a>
                    <a href="#doctor" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        Doctor
                    </a>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {/* Discrete Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all focus:outline-none"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>

                    <a
                        href="tel:+919450385590"
                        className="hidden md:flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition-colors font-medium shadow-md"
                    >
                        <Phone size={18} />
                        <span>Call Now</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-slate-900 dark:text-white">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
