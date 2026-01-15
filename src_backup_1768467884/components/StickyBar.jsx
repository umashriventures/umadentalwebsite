import React, { useState, useEffect } from 'react';
import { Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 w-full z-40 bg-white dark:bg-[#0A0E17] border-t border-gray-200 dark:border-gray-800 p-4 md:hidden shadow-lg"
                >
                    <div className="grid grid-cols-2 gap-4">
                        <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg font-bold shadow-blue-500/20 shadow-lg">
                            <Phone size={20} />
                            Call Now
                        </a>
                        <a href="#contact" className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-3 rounded-lg font-bold">
                            <MapPin size={20} />
                            Directions
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
