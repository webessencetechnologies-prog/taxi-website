import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import StorySection from './components/StorySection';
import TeamSection from './components/TeamSection';
import AwardsSection from './components/AwardsSection';
import SustainabilitySection from './components/SustainabilitySection';
import PartnershipsSection from './components/PartnershipsSection';
import PressSection from './components/PressSection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - ShivSakti Travels | Transparent Journeys, Trusted Connections</title>
        <meta
          name="description"
          content="Learn about ShivSakti Travels's mission to transform urban mobility through transparency and personal connection. Discover our story, values, team, and commitment to excellence."
        />
        <meta
          name="keywords"
          content="about taxiflow, company story, mission values, leadership team, awards recognition, sustainability, community partnerships"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <MissionSection />
          <StorySection />
          <TeamSection />
          <AwardsSection />
          <SustainabilitySection />
          <PartnershipsSection />
          <PressSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;