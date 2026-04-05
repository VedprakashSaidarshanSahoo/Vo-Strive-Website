import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const FutureVision: React.FC = () => {
  return (
    <Section id="vision" className="bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Future Vision</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          VoStrive is a SaaS and PaaS ecosystem that grows with every user, gym, and communication channel it powers.
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div whileHover={{ y: -8 }} className="rounded-3xl border border-surface bg-background/90 p-8 shadow-xl shadow-black/20">
          <h3 className="text-xl font-semibold text-white mb-4">Platform Expansion</h3>
          <p className="text-gray-300 leading-7">Extend VoStrive across lifestyle services, recovery studios, and behaviour-driven enterprise experiences.</p>
        </motion.div>
        <motion.div whileHover={{ y: -8 }} className="rounded-3xl border border-surface bg-background/90 p-8 shadow-xl shadow-black/20">
          <h3 className="text-xl font-semibold text-white mb-4">SaaS + PaaS Growth</h3>
          <p className="text-gray-300 leading-7">Build partner integrations, developer tools, and white-label experiences for the next generation of fitness businesses.</p>
        </motion.div>
        <motion.div whileHover={{ y: -8 }} className="rounded-3xl border border-surface bg-background/90 p-8 shadow-xl shadow-black/20">
          <h3 className="text-xl font-semibold text-white mb-4">Ecosystem Momentum</h3>
          <p className="text-gray-300 leading-7">Create a connected discipline network that rewards clients, gyms, and coaches for real-world progress.</p>
        </motion.div>
      </div>
    </Section>
  );
};

export default FutureVision;
