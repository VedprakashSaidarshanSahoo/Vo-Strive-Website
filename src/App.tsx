import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Philosophy from './components/Philosophy';
import Pricing from './components/Pricing';
import Demo from './components/Demo';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Philosophy />
      <Pricing />
      <Demo />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;