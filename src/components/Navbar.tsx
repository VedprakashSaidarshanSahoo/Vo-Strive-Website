import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        isScrolled ? 'bg-surface/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            VoStrive
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['features', 'how-it-works', 'philosophy', 'pricing', 'demo'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-primary transition-colors capitalize"
              >
                {item.replace('-', ' ')}
              </button>
            ))}
          </div>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;