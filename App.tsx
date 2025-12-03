import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AiDemo from './components/AiDemo';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SectionId } from './types';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.Hero);
  const [loading, setLoading] = useState(true);

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SectionId);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top < window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white font-sans selection:bg-secondary selection:text-white">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-primary"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-secondary/10 absolute inset-0 animate-ping blur-xl" />
              <img src="ysc-logo.png" alt="Loading..." className="w-24 h-24 object-contain relative z-10" />
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="h-1 bg-secondary mt-8 rounded-full"
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar activeSection={activeSection} />
            
            <main className="flex flex-col gap-0">
              <Hero id={SectionId.Hero} />
              <Services id={SectionId.Services} />
              <AiDemo id={SectionId.Demo} />
              <Portfolio id={SectionId.Portfolio} />
              <Testimonials id={SectionId.Testimonials} />
              <Contact id={SectionId.Contact} />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;