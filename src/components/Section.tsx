import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  return (
    <motion.section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;