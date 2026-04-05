import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Ecosystem' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'how-it-works', label: 'Flow' },
  { id: 'discipline', label: 'Discipline' },
  { id: 'pricing', label: 'Pricing' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-surface/95 backdrop-blur-xl shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <motion.div className="text-2xl font-bold tracking-tight text-white" whileHover={{ scale: 1.05 }}>
            VoStrive
          </motion.div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="transition-colors duration-200 hover:text-primary"
              >
                {section.label}
              </button>
            ))}
          </div>

          <Button variant="secondary" size="sm" onClick={() => scrollToSection('cta')}>
            Join Waitlist
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;