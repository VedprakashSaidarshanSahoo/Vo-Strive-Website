import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Button from './Button';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission (UI only)
    alert(`Thank you for your interest! We'll be in touch at ${email}`);
  };

  return (
    <Section id="cta" className="bg-primary text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Transformation</h2>
        <p className="text-xl text-white/80 mb-8">
          Join thousands who have unlocked their potential with VoStrive.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-6 py-3 rounded-lg text-black flex-1 max-w-md"
            required
          />
          <Button type="submit" variant="secondary" size="lg">
            Get Started
          </Button>
        </form>
      </motion.div>
    </Section>
  );
};

export default CTA;