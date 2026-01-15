import React from 'react';
import { Menu, Moon, Sun, Phone } from 'lucide-react';

export default function Navbar({ isDarkMode, toggleTheme }) {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b-0 rounded-none bg-opacity-80 backdrop-blur-md">
            <div className="container flex items-center justify-between py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">U</div>
                    <a href="#" className="text-xl font-bold tracking-tight">
                        Uma<span className="text-blue-500">Dental</span>
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
                    <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
                    <a href="#doctor" className="hover:text-blue-500 transition-colors">About</a>
                    <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
                        <Phone size={18} />
                        <span>Book Now</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2">
                        <Menu size={24} />
                    </button>
                </div>
            </div>
        </nav>
    );
}
