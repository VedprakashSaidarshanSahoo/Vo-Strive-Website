import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import Hero3D from './Hero3D';

const Hero: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <Hero3D />
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Commit. <span className="text-primary">Strive.</span> Become.
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          VoStrive is your discipline engine for fitness, focus, and growth.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Explore Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;