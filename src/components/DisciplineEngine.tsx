import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const stats = [
  { label: 'Discipline Score', value: 92 },
  { label: 'Streak Stability', value: 84 },
  { label: 'Consistency', value: 96 },
];

const DisciplineEngine: React.FC = () => {
  return (
    <Section id="discipline" className="bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Discipline Engine</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          The VoStrive discipline engine evaluates your behavior, rewards consistent actions, and drives measurable improvement beyond basic fitness tracking.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2 items-start">
        <div className="space-y-6">
          <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-background/90 border border-surface p-8 shadow-[0_24px_80px_-44px_rgba(34,211,238,0.9)]">
            <h3 className="text-2xl font-semibold text-white mb-4">What is Discipline Score?</h3>
            <p className="text-gray-300 leading-7 mb-4">
              Discipline Score is an aggregate measure of consistency, recovery, effort, and routine adherence. It surfaces when you are building habit momentum instead of just logging sessions.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li>• Weighted habit performance and goal consistency</li>
              <li>• Adaptive scoring that evolves with your plan</li>
              <li>• Insightful feedback on behavior patterns</li>
            </ul>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="rounded-3xl bg-background/90 border border-surface p-8 shadow-[0_24px_80px_-44px_rgba(139,92,246,0.8)]">
            <h3 className="text-2xl font-semibold text-white mb-4">Why it matters</h3>
            <p className="text-gray-300 leading-7">
              Most fitness apps track workouts. VoStrive tracks how reliably you follow your ritual, how your schedule adapts, and how the system keeps you progressing.
            </p>
          </motion.div>
        </div>

        <div className="rounded-3xl bg-background/90 border border-surface p-8 shadow-xl shadow-black/20">
          <div className="grid gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className="flex justify-between text-gray-300">
                  <span>{stat.label}</span>
                  <span className="text-white font-semibold">{stat.value}%</span>
                </div>
                <div className="w-full bg-surface rounded-full h-3 overflow-hidden">
                  <div className="h-3 bg-highlight rounded-full" style={{ width: `${stat.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DisciplineEngine;
