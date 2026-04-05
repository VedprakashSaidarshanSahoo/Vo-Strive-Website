import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const boxClass = 'rounded-3xl border border-surface bg-background/80 p-6 shadow-xl shadow-black/20 text-white';
const arrowClass = 'text-primary text-3xl font-bold';

const Architecture: React.FC = () => {
  return (
    <Section id="architecture" className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">System Architecture</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          A layered architecture connecting user, gym, AI, and communications into a seamless discipline ecosystem.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_auto_1fr] items-center">
        <div className="space-y-6">
          <motion.div whileHover={{ y: -6 }} className={boxClass}>
            <h3 className="text-xl font-semibold mb-2">User App</h3>
            <p className="text-gray-300 leading-7">Workout logging, habit tracking, progress video, AR guidance, and daily discipline prompts.</p>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} className={boxClass}>
            <h3 className="text-xl font-semibold mb-2">Gym Admin Panel</h3>
            <p className="text-gray-300 leading-7">Membership, scheduling, trainer management, payments, and analytics for modern fitness centers.</p>
          </motion.div>
        </div>

        <div className="hidden lg:flex flex-col items-center justify-center h-full">
          <div className="text-primary text-5xl">→</div>
          <div className="text-gray-500 text-sm uppercase tracking-[0.3em] mt-4">Flow</div>
        </div>

        <div className="space-y-6">
          <motion.div whileHover={{ y: -6 }} className={boxClass}>
            <h3 className="text-xl font-semibold mb-2">AI Layer</h3>
            <p className="text-gray-300 leading-7">Personalized recommendations, workout generation, nutrition adjustments, and real-time insights.</p>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} className={boxClass}>
            <h3 className="text-xl font-semibold mb-2">Communication Layer</h3>
            <p className="text-gray-300 leading-7">WhatsApp automation, call reminders, email campaigns, and intelligent message orchestration.</p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Architecture;
