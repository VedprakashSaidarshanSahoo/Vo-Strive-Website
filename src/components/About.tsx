import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-background text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About VoStrive</h2>
            <p className="text-lg leading-8 text-gray-300 mb-6">
              VoStrive is a discipline-driven ecosystem designed for fitness, focus, and performance. We blend the power of a vow with the momentum of a strive, making every workout, habit, and decision a deliberate step toward mastery.
            </p>
            <p className="text-lg leading-8 text-gray-300 mb-6">
              Motivation fades. Discipline scales. VoStrive solves the biggest gaps in modern wellness: fragmented tools, inconsistent routines, and data that lives in silos. Our platform gives individuals and gyms one place to track habits, optimize training, and accelerate results.
            </p>
          </div>
          <div className="space-y-6 bg-surface/80 border border-surface p-8 rounded-3xl shadow-2xl shadow-black/30">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Vow + Strive Meaning</h3>
              <p className="text-gray-300 leading-7">
                "Vow" is the commitment you make. "Strive" is the repeated action you take. VoStrive is the system that converts promises into measurable progress through structure, accountability, and smart feedback.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Why Discipline Wins</h3>
              <p className="text-gray-300 leading-7">
                Fitness isn’t a flash of inspiration. It is daily consistency, adaptive systems, and small wins stacked over time. VoStrive gives you the architecture to stay disciplined, even when motivation wanes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">The Problem We Solve</h3>
              <p className="text-gray-300 leading-7">
                Users struggle with disconnected apps, scattered coaching, and no unified insight into progress. VoStrive solves this with a complete ecosystem built for habit formation, performance tracking, and intelligent guidance.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
