import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.25 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-primary p-4 text-white shadow-2xl shadow-primary/30 ring-1 ring-white/10 transition-all hover:-translate-y-1"
      style={{ display: visible ? 'flex' : 'none' }}
      aria-label="Scroll to top"
    >
      ↑
    </motion.button>
  );
};

export default ScrollTop;
