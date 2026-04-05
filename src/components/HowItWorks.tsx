import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const steps = [
  { title: 'User joins', description: 'Onboard with a discipline-first profile and goal framework.' },
  { title: 'Tracks activity', description: 'Log workouts, habits, recovery, and cognitive sessions in one place.' },
  { title: 'Builds discipline', description: 'Follow streaks, reminders, routines, and behavior feedback.' },
  { title: 'Gets AI insights', description: 'Receive personalized recommendations and adaptive coaching.' },
  { title: 'Levels up', description: 'Unlock advanced training, milestones, and measurable transformation.' },
];

const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          VoStrive makes discipline simple by turning every action into progress. Follow the flow, stay consistent, and keep leveling up.
        </p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-5">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            className="rounded-[2rem] border border-surface bg-surface p-8 text-center shadow-xl shadow-black/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-black">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
            <p className="text-gray-300 leading-7">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorks;