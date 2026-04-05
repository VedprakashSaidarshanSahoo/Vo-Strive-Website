import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Section from './Section';

const categories = [
  {
    key: 'd2c',
    label: 'D2C User Features',
    features: [
      { title: 'Fitness Tracking', description: 'Track workouts, health signals, recovery, and long-term progression in one unified dashboard.', icon: '📊' },
      { title: 'Discipline Engine', description: 'Behavior tracking, streaks, and habit scaffolding to keep you accountable every day.', icon: '🔥' },
      { title: 'AI Trainer', description: 'Personalized workout and nutrition plans that adapt as you improve.', icon: '🤖' },
      { title: 'AR Trainer', description: 'Form correction and live overlays to make every rep safer and more effective.', icon: '📱' },
      { title: 'Progress Visualization', description: 'Auto-generated snapshots, timeline reviews, and progress videos for every milestone.', icon: '🎥' },
      { title: 'Routine System', description: 'No-excuse alarms, reminders, and adaptive routines that respond to your schedule.', icon: '⏱️' },
      { title: 'Cognitive System', description: 'Brain training, reading prompts, and intelligence boosters to improve focus and mental resilience.', icon: '🧠' },
      { title: 'Music + Focus', description: 'Curated soundscapes and focus tools designed to support workouts and deep work.', icon: '🎧' },
    ],
  },
  {
    key: 'b2b',
    label: 'B2B Gym Platform',
    features: [
      { title: 'Membership Management', description: 'Seamless onboarding, tiered access, and member lifecycle tools for modern gyms.', icon: '🧾' },
      { title: 'Schedule Management', description: 'Manage classes, sessions, and facility availability with intuitive controls.', icon: '📅' },
      { title: 'Attendance Tracking', description: 'Capture member attendance, check-ins, and workout engagement automatically.', icon: '✅' },
      { title: 'Nutrition Planning', description: 'Create meal plans, macros, and nutrition guidance for clients and members.', icon: '🥗' },
      { title: 'Inventory Management', description: 'Track equipment, supplies, and gym assets to keep operations running smoothly.', icon: '🛠️' },
      { title: 'Trainer System', description: 'Assign coaches, manage programs, and review trainer performance in one place.', icon: '🏋️' },
      { title: 'Payment Management', description: 'Automate billing, memberships, and credit-based purchases with flexible payment flows.', icon: '💳' },
      { title: 'Analytics Dashboard', description: 'Dashboards for retention, revenue, and performance across member segments.', icon: '📈' },
    ],
  },
  {
    key: 'comm',
    label: 'Communication System',
    features: [
      { title: 'WhatsApp Automation', description: 'Automate reminders, upsells, and check-ins through WhatsApp workflows.', icon: '💬' },
      { title: 'Call Reminders', description: 'Schedule voice and SMS reminders with Twilio-powered automation.', icon: '📞' },
      { title: 'Email Notifications', description: 'Trigger smart email campaigns for onboarding, retention, and rewards.', icon: '✉️' },
      { title: 'Campaign Management', description: 'Design outreach campaigns that align with milestones and member journeys.', icon: '🚀' },
    ],
  },
];

const FeatureEcosystem: React.FC = () => {
  const [active, setActive] = useState('d2c');
  const selected = categories.find((category) => category.key === active) || categories[0];

  return (
    <Section id="features" className="bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Complete Feature Ecosystem</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            VoStrive is built for users, gyms, and communication workflows. Explore each ecosystem layer and see how the platform connects every discipline touchpoint.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActive(category.key)}
              className={`rounded-3xl px-5 py-4 text-left transition-all duration-300 border ${
                active === category.key ? 'border-primary bg-primary/10 text-white shadow-xl' : 'border-surface text-gray-300 hover:border-primary/70 hover:bg-white/5'
              }`}
            >
              <div className="text-sm uppercase tracking-[0.24em] mb-2 text-gray-400">{category.label}</div>
              <div className="text-lg font-semibold">{category.features.length} modules</div>
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {selected.features.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-background/90 border border-surface p-6 shadow-[0_20px_60px_-40px_rgba(56,103,214,0.6)]"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeatureEcosystem;
