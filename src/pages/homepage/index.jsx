import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import FeaturedRoutes from './components/FeaturedRoutes';
import LiveAvailability from './components/LiveAvailability';
import TrustSignals from './components/TrustSignals';
import FareCalculator from './components/FareCalculator';
import CTASection from './components/CTASection';

const Homepage = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRouteSelect = (route) => {
    setSelectedRoute(route);
  };

  const handleBookNow = (bookingData) => {
    console.log('Booking initiated:', bookingData);
    const availabilitySection = document.getElementById('live-availability');
    if (availabilitySection) {
      availabilitySection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Shivru Cabs - Transparent Journeys, Trusted Connections | Premium Taxi Booking</title>
        <meta 
          name="description" 
          content="Book your ride with complete transparency. Know your route, know your price, know your driver. Premium taxi service with verified drivers and no hidden fees." 
        />
        <meta 
          name="keywords" 
          content="taxi booking, transparent pricing, verified drivers, airport transfer, city taxi, ride booking, professional drivers" 
        />
        <meta property="og:title" content="Shivru Cabs - Transparent Taxi Booking Service" />
        <meta 
          property="og:description" 
          content="Experience ride-hailing with human touch and complete pricing clarity. Book instantly with real-time availability." 
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection 
            onRouteSelect={handleRouteSelect}
            onBookNow={handleBookNow}
          />
          
          <FeaturedRoutes />
          
          <div id="live-availability">
            <LiveAvailability />
          </div>
          
          <TrustSignals />
          
          <FareCalculator />
          
          <CTASection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Homepage;