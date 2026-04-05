import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, icon, className = '' }) => {
  return (
    <motion.div
      className={`bg-surface p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-surface/50 ${className}`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {icon && (
        <div className="mb-4 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default Card;