import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Button from './Button';

const plans = [
  {
    name: 'Free',
    tagline: 'Start with core tracking and community support.',
    price: '$0',
    items: ['Basic fitness logging', 'Habit streak tracking', 'Foundational AI insights', 'Community challenges'],
    button: 'Use Free',
  },
  {
    name: 'Pay-as-you-go',
    tagline: 'Purchase credits for premium AI, video, and advanced reports.',
    price: 'Credits',
    items: ['AI Trainer sessions', 'AR workout guidance', 'Auto-generated progress videos', 'Premium analytics reports'],
    button: 'Use Credits',
  },
  {
    name: 'B2B Gym',
    tagline: 'Enterprise platform for gyms and fitness brands.',
    price: 'Custom',
    items: ['Membership automation', 'Trainer management', 'Nutrition planning', 'Revenue analytics'],
    button: 'Contact Sales',
  },
];

const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing Model</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Transparent, modular pricing built around free usage, credit-based premium features, and enterprise gym licensing.
        </p>
      </motion.div>
      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className="rounded-[2rem] border border-surface bg-surface p-8 shadow-[0_24px_80px_-44px_rgba(56,130,246,0.85)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
          >
            <div className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">{plan.name}</div>
            <div className="text-5xl font-semibold text-white mb-3">{plan.price}</div>
            <p className="text-gray-300 mb-8 leading-7">{plan.tagline}</p>
            <ul className="space-y-3 text-gray-300 mb-10">
              {plan.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button variant={index === 1 ? 'primary' : 'outline'} size="md">
              {plan.button}
            </Button>
          </motion.div>
        ))}
      </div>
      <div className="mt-14 max-w-3xl mx-auto rounded-3xl border border-white/10 bg-surface/70 p-8 text-gray-300">
        <p className="leading-7">
          Pay-as-you-go credits let users unlock premium AI and media features without a subscription. Gyms can use custom pricing to scale staff, services, and membership intelligence.
        </p>
      </div>
    </Section>
  );
};

export default Pricing;