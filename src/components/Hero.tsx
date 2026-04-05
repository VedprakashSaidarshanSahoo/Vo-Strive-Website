import React, { useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import anime from 'animejs';
import Button from './Button';

const Hero3D = lazy(() => import('./Hero3D'));

const Hero: React.FC = () => {
  useEffect(() => {
    anime({
      targets: '.hero-pulse',
      scale: [1, 1.05],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad',
      duration: 2200,
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background text-white">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.15),_transparent_25%),linear-gradient(180deg,_rgba(11,15,20,1),_rgba(8,10,14,0.95))]" />
      <Suspense fallback={<div className="absolute inset-0 bg-background/95" />}>
        <Hero3D />
      </Suspense>
      <div className="relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 py-24 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-200 shadow-2xl shadow-primary/10 mb-6">
            <span className="mr-3 inline-flex h-3 w-3 rounded-full bg-primary hero-pulse" />
            Discipline ecosystem built for fitness, focus, and performance.
          </div>
          <h1 className="mx-auto text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Commit. <span className="text-primary">Strive.</span> Become.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-300 sm:text-2xl">
            VoStrive is a discipline-driven ecosystem for fitness, focus, and performance. Build habits, optimize training, and track growth in one powerful platform.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="primary" size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Ecosystem
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}>
              View Architecture
            </Button>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3 sm:justify-center">
            {[
              { title: 'Behavior + Fitness', value: 'All in one' },
              { title: 'AI insights', value: 'Adaptive plan' },
              { title: 'Gym-ready', value: 'B2B + D2C' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-surface/90 p-6 shadow-2xl shadow-primary/20 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.26em] text-gray-400">{item.title}</p>
                <p className="mt-4 text-2xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;