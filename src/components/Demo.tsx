import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const ProgressBar: React.FC<{ label: string; value: number }> = ({ label, value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="mb-4">
      <div className="flex justify-between text-white mb-1">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-surface rounded-full h-2">
        <motion.div
          className="bg-primary h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </div>
  );
};

const Demo: React.FC = () => {
  return (
    <Section id="demo" className="bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">See It In Action</h2>
        <p className="text-xl text-gray-300">Experience the power of VoStrive</p>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-background p-8 rounded-xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">Your Progress Dashboard</h3>
          <ProgressBar label="Strength" value={85} />
          <ProgressBar label="Endurance" value={72} />
          <ProgressBar label="Flexibility" value={90} />
          <ProgressBar label="Consistency" value={95} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background p-8 rounded-xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">AI Insights</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <p className="text-gray-300">Great job on your consistency! You're 15% above average this week.</p>
            </div>
            <div className="border-l-4 border-secondary pl-4">
              <p className="text-gray-300">Try adding 5 minutes of stretching to improve flexibility by 20%.</p>
            </div>
            <div className="border-l-4 border-highlight pl-4">
              <p className="text-gray-300">Level up unlocked! You've earned the "Iron Will" achievement.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Demo;