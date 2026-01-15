import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import StorySection from './components/StorySection';
import Gallery from './components/Gallery';
import DoctorList from './components/DoctorList';
import Footer from './components/Footer';
import CTAButton from './components/CTAButton';

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check for saved preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        // Apply class to HTML for Tailwind dark: support
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.setAttribute('data-theme', 'light');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            <main>
                <Hero3D />

                <StorySection id="about" title="The Biology of Care">
                    <p>
                        At Uma Dental Clinic, we view dentistry as a bridge between human biology and modern art.
                        For thousands of years, humans have evolved to communicate through smiles – we are here
                        to ensure yours is as resilient as it is beautiful.
                    </p>
                    <p>
                        Located in the heart of Hardoi, our facility is designed to dismantle the fear of clinical
                        environments, replacing it with a sense of wonder and **absolute safety**.
                    </p>
                </StorySection>

                <StorySection id="services" title="Controlled Precision" reversed>
                    <p>
                        Mastery is the intersection of high-end engineering and deep human empathy.
                        We handle precision components so you can experience effortless health.
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-slate-700 font-medium">
                        <li><span className="text-primary font-bold">Bite Arc Alignment</span>: Invisible Systems</li>
                        <li><span className="text-primary font-bold">Biocompatible Integration</span>: Titanium Implants</li>
                        <li><span className="text-primary font-bold">Structural Symmetry</span>: 3D Mapping</li>
                        <li><span className="text-primary font-bold">Nerve-First Care</span>: Laser Precision</li>
                    </ul>
                </StorySection>

                <Gallery />
                <DoctorList />
            </main>

            <Footer />
            <CTAButton />
        </div>
    );
}

export default App;
