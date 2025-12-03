import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

interface NavbarProps {
  activeSection: SectionId;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: SectionId.Services, label: 'Services' },
    { id: SectionId.Demo, label: 'AI Demo' },
    { id: SectionId.Portfolio, label: 'Work' },
    { id: SectionId.Contact, label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-primary/80 backdrop-blur-md border-white/5 py-3'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollTo(SectionId.Hero)}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            src="ysc-logo.png" 
            alt="YSC Monogram" 
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
          />
          <div>
            <span className="font-display font-bold text-xl tracking-tight text-white">YouSaidCopy</span>
            <span className="text-secondary font-bold text-xl">.</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                activeSection === link.id ? 'text-secondary' : 'text-gray-300'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo(SectionId.Contact)}
            className="px-5 py-2 rounded-full bg-white/5 hover:bg-secondary/10 border border-secondary text-secondary font-semibold text-sm transition-all hover:shadow-[0_0_15px_rgba(59,162,255,0.4)]"
          >
            Start Growth
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-300 hover:text-white"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-lg font-medium text-gray-300 hover:text-secondary py-2"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo(SectionId.Contact)}
            className="w-full py-3 mt-2 rounded-lg bg-secondary text-white font-bold"
          >
            Start Growth
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;