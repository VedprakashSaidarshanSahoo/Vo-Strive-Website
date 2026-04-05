import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const AILayer: React.FC = () => {
  return (
    <Section id="ai" className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">AI + Intelligence Layer</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          VoStrive’s AI layer powers every recommendation, personalization, and insight. It turns your data into proactive guidance and lasting discipline.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">
        <motion.div whileHover={{ y: -8 }} className="rounded-3xl border border-surface bg-surface p-8 shadow-lg shadow-black/20">
          <h3 className="text-xl font-semibold text-white mb-3">AI Trainer</h3>
          <p className="text-gray-300 leading-7">Dynamic workout and nutrition plans built around your goals, recovery, and progress.</p>
        </motion.div>
        <motion.div whileHover={{ y: -8 }} className="rounded-3xl border border-surface bg-surface p-8 shadow-lg shadow-black/20">
          <h3 className="text-xl font-semibold text-white mb-3">Personalized Insights</h3>
          <p className="text-gray-300 leading-7">Understand your trends, strengths, and where discipline is gaining momentum.</p>
        </motion.div>
        <motion.div whileHover={{ y: -8 }} className="rounded-3xl border border-surface bg-surface p-8 shadow-lg shadow-black/20">
          <h3 className="text-xl font-semibold text-white mb-3">Data-Driven Recommendations</h3>
          <p className="text-gray-300 leading-7">Nutrition adjustments, rest guidance, and optimization based on real behavior signals.</p>
        </motion.div>
      </div>
    </Section>
  );
};

export default AILayer;
