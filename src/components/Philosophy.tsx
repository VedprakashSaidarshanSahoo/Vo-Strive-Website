import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const Philosophy: React.FC = () => {
  return (
    <Section id="philosophy" className="bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Philosophy</h2>
          <p className="text-lg text-gray-300 mb-6">
            VoStrive combines "Vow" and "Strive" to represent our commitment to helping you build unbreakable discipline. 
            We believe that true growth comes from consistent action, intelligent planning, and unwavering dedication.
          </p>
          <p className="text-lg text-gray-300">
            Our discipline-driven system transforms fitness from a chore into a rewarding journey of self-improvement, 
            where every step forward levels up your capabilities and confidence.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background p-8 rounded-xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Key Principles</h3>
          <ul className="space-y-3 text-gray-300">
            <li>• <strong className="text-primary">Consistency over Intensity:</strong> Small daily actions compound into massive results</li>
            <li>• <strong className="text-secondary">AI-Powered Personalization:</strong> Tailored experiences that adapt to you</li>
            <li>• <strong className="text-highlight">Community & Accountability:</strong> Grow together with like-minded individuals</li>
            <li>• <strong className="text-primary">Data-Driven Insights:</strong> Understand your progress with advanced analytics</li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};

export default Philosophy;