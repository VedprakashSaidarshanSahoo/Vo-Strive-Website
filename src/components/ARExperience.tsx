import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const ARExperience: React.FC = () => {
  return (
    <Section id="ar" className="bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">AR Experience</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Bring fitness into the real world with augmented training overlays that guide form, motivate movement, and help you stay safe.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2 items-start">
        <motion.div whileHover={{ y: -6 }} className="rounded-3xl border border-surface bg-background/90 p-8 shadow-xl shadow-black/20">
          <h3 className="text-2xl font-semibold text-white mb-4">AR Trainer</h3>
          <p className="text-gray-300 leading-7 mb-4">
            Visual overlays and motion tracking ensure your form is correct. Receive live cues while training and avoid common injuries.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>• Posture correction in real time</li>
            <li>• Interactive rep and set guidance</li>
            <li>• Immersive coaching with augmented visuals</li>
          </ul>
        </motion.div>
        <motion.div whileHover={{ y: -6 }} className="rounded-3xl border border-surface bg-background/90 p-8 shadow-xl shadow-black/20">
          <h3 className="text-2xl font-semibold text-white mb-4">Real-World Overlay</h3>
          <p className="text-gray-300 leading-7 mb-4">
            Overlay training prompts on your environment, offer guided stretching routines, and keep your workouts anchored in the moment.
          </p>
          <div className="rounded-3xl bg-surface/80 p-4 border border-surface">
            <p className="text-white font-semibold">Live form correction</p>
            <p className="text-gray-300 text-sm">A digital trainer that adapts to your movement, not your schedule.</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ARExperience;
