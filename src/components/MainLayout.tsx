import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SplashScreen from './SplashScreen';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [splashComplete, setSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    setSplashComplete(true);
    // Keep splash visible but start fading content in
    setTimeout(() => {
      setShowSplash(false);
    }, 1500); // Wait for content animation to start
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background logo watermark after splash - positioned corner */}
      {splashComplete && (
        <motion.div
          className="fixed top-8 right-8 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/favicon.png"
            alt=""
            className="w-64 h-64 object-contain"
          />
        </motion.div>
      )}

      {/* Splash Screen */}
      {showSplash && <SplashScreen onAnimationComplete={handleSplashComplete} />}

      {/* Main Content - slides up from bottom */}
      <motion.div
        className="relative z-10 bg-background"
        initial={{ opacity: 0, y: 100 }}
        animate={splashComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{
          duration: 1.2,
          ease: 'easeOut',
          delay: splashComplete ? 0 : 0.5,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MainLayout;
