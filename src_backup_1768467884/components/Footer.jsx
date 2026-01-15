import React from 'react';
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-white dark:bg-[#05080f] text-gray-800 dark:text-gray-200 pt-20 pb-10 border-t border-gray-100 dark:border-gray-800">
            <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand Info */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">U</div>
                        <span className="text-xl font-bold tracking-tight">Uma<span className="text-blue-500">Dental</span></span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">
                        Redefining dental care in Hardoi with advanced technology and a patient-first approach.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors"><Facebook size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors"><Instagram size={18} /></a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors"><Twitter size={18} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-gray-500 dark:text-gray-400">
                        <li><a href="#home" className="hover:text-blue-500 transition-colors">Home</a></li>
                        <li><a href="#services" className="hover:text-blue-500 transition-colors">Services</a></li>
                        <li><a href="#doctor" className="hover:text-blue-500 transition-colors">About Dr. Singh</a></li>
                        <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-bold mb-6">Contact</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-blue-500 shrink-0 mt-1" size={20} />
                            <span className="text-gray-500 dark:text-gray-400">94QF+656, Janpath Market, Munne Minya Choraha, Hardoi, UP 241001</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-blue-500 shrink-0" size={20} />
                            <span className="text-gray-500 dark:text-gray-400">+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-blue-500 shrink-0" size={20} />
                            <span className="text-gray-500 dark:text-gray-400">contact@umadental.com</span>
                        </li>
                    </ul>
                </div>

                {/* Hours */}
                <div>
                    <h4 className="text-lg font-bold mb-6">Opening Hours</h4>
                    <ul className="space-y-3">
                        <li className="flex justify-between text-gray-500 dark:text-gray-400">
                            <span>Mon - Sun</span>
                            <span>10:00 AM - 08:00 PM</span>
                        </li>
                        <li className="flex justify-between text-red-500 font-medium">
                            <span>Tuesday</span>
                            <span>Closed</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Map */}
            <div className="container mb-20">
                <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] border border-gray-200 dark:border-gray-800 relative group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.6!2d80.1!3d27.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDA2JzAwLjAiTiA4MMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(0%)' }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Clinic Location"
                        className="group-hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                    <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-900 px-4 py-2 rounded-lg shadow-lg text-xs font-bold z-10">
                        0.9km from Hardoi Station
                    </div>
                </div>
            </div>

            <div className="container text-center border-t border-gray-100 dark:border-gray-800 pt-8">
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Uma Dental Clinic. All rights reserved. Designed with <span className="text-red-500">&hearts;</span> by AI.
                </p>
            </div>
        </footer>
    );
}
