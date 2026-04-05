import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const items = [
  { label: 'Before', copy: 'Scattered tools, inconsistent routines, and low visibility into progress.' },
  { label: 'During', copy: 'A unified discipline workflow with AI coaching, habit automation, and accountability.' },
  { label: 'After', copy: 'A data-powered transformation path with momentum, confidence, and shareable wins.' },
];

const ProgressTransformation: React.FC = () => {
  return (
    <Section id="progress" className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Progress & Transformation</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          See the evolution from start to peak performance, complete with snapshots, auto-generated videos, and social share prompts.
        </p>
      </motion.div>
      <div className="grid gap-6 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-surface bg-surface p-8 shadow-xl shadow-black/20"
            transition={{ duration: 0.25, delay: index * 0.1 }}
          >
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary font-bold text-xl mb-5">{index + 1}</span>
            <h3 className="text-2xl font-semibold text-white mb-4">{item.label}</h3>
            <p className="text-gray-300 leading-7">{item.copy}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ProgressTransformation;
