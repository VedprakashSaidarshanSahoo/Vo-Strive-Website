import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const steps = [
  { title: 'Join VoStrive', description: 'Sign up and set your goals' },
  { title: 'Track Progress', description: 'Monitor your journey with AI insights' },
  { title: 'Improve Daily', description: 'Follow personalized routines and challenges' },
  { title: 'Level Up', description: 'Achieve milestones and unlock new features' },
];

const HowItWorks: React.FC = () => {
  return (
    <Section id="how-it-works" className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-xl text-gray-300">Your path to transformation</p>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
            <p className="text-gray-300">{step.description}</p>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute right-0 top-8 w-8 h-0.5 bg-primary transform translate-x-4"></div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorks;