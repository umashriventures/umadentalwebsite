import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Journey from './components/Journey';
import About from './components/About';
import Footer from './components/Footer';
import StickyBar from './components/StickyBar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on mount
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0A0E17] text-slate-900 dark:text-gray-100 transition-colors duration-300 font-body">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Services />
        <Journey />
        <About />
      </main>

      <Footer />
      <StickyBar />
    </div>
  );
}

export default App;
