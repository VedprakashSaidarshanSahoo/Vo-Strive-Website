import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeatureEcosystem from './components/FeatureEcosystem';
import Architecture from './components/Architecture';
import HowItWorks from './components/HowItWorks';
import DisciplineEngine from './components/DisciplineEngine';
import AILayer from './components/AILayer';
import ARExperience from './components/ARExperience';
import ProgressTransformation from './components/ProgressTransformation';
import Pricing from './components/Pricing';
import FutureVision from './components/FutureVision';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import MainLayout from './components/MainLayout';

function App() {
  useEffect(() => {
    // Set canonical URL for SEO
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = 'https://vostrive.com';
    document.head.appendChild(link);
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen bg-background text-white">
        <Navbar />
        <Hero />
        <About />
        <FeatureEcosystem />
        <Architecture />
        <HowItWorks />
        <DisciplineEngine />
        <AILayer />
        <ARExperience />
        <ProgressTransformation />
        <Pricing />
        <FutureVision />
        <CTA />
        <Footer />
        <ScrollTop />
      </div>
    </MainLayout>
  );
}

export default App;