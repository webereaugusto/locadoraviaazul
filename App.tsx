import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MarketOpportunity from './components/MarketOpportunity';
import Benefits from './components/Benefits';
import StepsSection from './components/StepsSection';
import Comparison from './components/Comparison';
import Fleet from './components/Fleet';
import CitySection from './components/CitySection';
import RmcSection from './components/RmcSection';
import AirportSection from './components/AirportSection';
import LifestyleSection from './components/LifestyleSection';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <StepsSection />
        <LifestyleSection />
        <Comparison />
        <MarketOpportunity />
        <CitySection />
        <AirportSection />   
        <RmcSection />
        <Fleet />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
};

export default App;