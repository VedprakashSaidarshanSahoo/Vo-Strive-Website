import React from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Section from './Section';

const features = [
  {
    title: 'Discipline Engine',
    description: 'AI-powered system that builds unbreakable habits through smart routines and accountability.',
    icon: <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">⚡</div>,
  },
  {
    title: 'AI Trainer',
    description: 'Personalized AI coaching that adapts to your progress and provides real-time feedback.',
    icon: <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">🤖</div>,
  },
  {
    title: 'Gym Integration',
    description: 'Seamless B2B and D2C integration with gyms for enhanced fitness experiences.',
    icon: <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center">🏋️</div>,
  },
  {
    title: 'Progress Tracking & Video Generation',
    description: 'Advanced tracking with AI-generated progress videos to visualize your journey.',
    icon: <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">📹</div>,
  },
  {
    title: 'AR Fitness Experience',
    description: 'Augmented reality features for immersive and interactive workouts.',
    icon: <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">🕶️</div>,
  },
  {
    title: 'Smart Routine & No-Excuse System',
    description: 'Intelligent routine planning with built-in motivation to eliminate excuses.',
    icon: <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center">🎯</div>,
  },
];

const Features: React.FC = () => {
  return (
    <Section id="features" className="bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Features</h2>
        <p className="text-xl text-gray-300">Powerful tools to transform your fitness journey</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card {...feature} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Features;