import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  const quotes = useMemo(
    () => [
      'Train like a shinobi, conquer every challenge.',
      'Rise stronger than yesterday — your next level awaits.',
      'Every session is a step toward your legend.',
      'Unleash your dormant power and break your limits.',
      'From zero to awakening: grow beyond your current form.',
    ],
    []
  );

  const selectedQuote = useMemo(
    () => quotes[Math.floor(Math.random() * quotes.length)],
    [quotes]
  );

  useEffect(() => {
    const timeline = gsap.timeline();

    // Ring light flickering effect (like tubelight)
    timeline.to('.border-ring', {
      duration: 0.3,
      opacity: 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'none',
    });

    // Subtle glow pulsing (lighting effect)
    timeline.to(
      '.glow-circle',
      {
        duration: 1.5,
        boxShadow: '0 0 50px rgba(139, 92, 246, 0.5)',
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      },
      0
    );

    // Start exit animation after 4 seconds
    const timer = window.setTimeout(() => {
      setIsExiting(true);
      onAnimationComplete();
    }, 4000);

    return () => {
      clearTimeout(timer);
      timeline.kill();
    };
  }, [onAnimationComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0.15 : 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      style={{ pointerEvents: isExiting ? 'none' : 'auto' }}
    >
      {/* Main splash content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Circular container with glowing border */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Logo container - Static with circular mask */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
              zIndex: 30,
              clipPath: 'circle(48%)',
              backgroundColor: 'transparent',
            }}
          >
            <img
              src="/favicon.png"
              alt="VoStrive Logo"
              className="w-full h-full object-cover object-center"
              style={{
                borderRadius: '50%',
                boxShadow: '0 0 12px rgba(59, 130, 246, 0.4)',
              }}
            />
          </motion.div>

          {/* Outer glowing ring */}
          <motion.div
            className="border-ring absolute inset-0 rounded-full"
            style={{
              border: '3px solid rgba(59, 130, 246, 0.9)',
              boxShadow: '0 0 35px rgba(59, 130, 246, 0.35)',
              background: 'transparent',
              zIndex: 20,
            }}
          />

          {/* Subtle glow effect behind ring */}
          <div
            className="glow-circle absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 65%)',
              zIndex: 10,
            }}
          />

          {/* Inner ring for depth */}
          <div
            className="absolute inset-8 rounded-full border-2 border-primary/40"
            style={{
              pointerEvents: 'none',
              zIndex: 25,
            }}
          />
        </div>

        {/* Text below logo */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl font-bold text-white mb-3">VoStrive</h1>
          <p className="text-xl text-gray-300">{selectedQuote}</p>
          <motion.div
            className="mt-6 flex justify-center gap-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
