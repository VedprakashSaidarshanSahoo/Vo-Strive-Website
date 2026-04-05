import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Button from './Button';

const plans = [
  {
    name: 'Free',
    price: '$0',
    features: ['Basic tracking', 'Community access', 'Limited AI insights'],
  },
  {
    name: 'Pay-as-you-go',
    price: 'Credits',
    features: ['Unlimited tracking', 'Full AI trainer', 'AR experiences', 'Video generation'],
  },
  {
    name: 'B2B Gym',
    price: 'Custom',
    features: ['Gym integration', 'Team management', 'Advanced analytics', 'White-label options'],
  },
];

const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pricing</h2>
        <p className="text-xl text-gray-300">Choose the plan that fits your journey</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-surface p-8 rounded-xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
            <div className="text-4xl font-bold text-primary mb-6">{plan.price}</div>
            <ul className="text-gray-300 mb-8 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
            <Button variant={index === 1 ? 'primary' : 'outline'}>Get Started</Button>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Pricing;