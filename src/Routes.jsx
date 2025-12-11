import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import NavigationLoader from "./components/NavigationLoader";
import Animations1 from "./pages/about/components/Animations1";
import ContactHub from './pages/contact-hub';
import PricingDashboard from './pages/pricing-dashboard';
import RoutePlanner from './pages/route-planner';
import FleetGallery from './pages/fleet-gallery';
import About from './pages/about';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <NavigationLoader Animation={Animations1} duration={900} />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-hub" element={<ContactHub />} />
        <Route path="/pricing-dashboard" element={<PricingDashboard />} />
        <Route path="/route-planner" element={<RoutePlanner />} />
        <Route path="/fleet-gallery" element={<FleetGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
