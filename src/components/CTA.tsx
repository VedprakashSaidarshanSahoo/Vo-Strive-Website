import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import Button from './Button';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your interest! We'll be in touch at ${email}`);
  };

  return (
    <Section id="cta" className="bg-primary text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start Your Discipline Journey</h2>
        <p className="text-xl text-white/85 mb-8 leading-8">
          Lock in your place in a fitness ecosystem built for long-term growth. Discipline, data, and AI come together to drive your next level.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-black outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            required
          />
          <Button type="submit" variant="secondary" size="lg">
            Join Waitlist
          </Button>
        </form>
      </motion.div>
    </Section>
  );
};

export default CTA;