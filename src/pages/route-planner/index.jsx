import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import RouteCard from './components/RouteCard';
import InteractiveMap from './components/InteractiveMap';
import RouteFilters from './components/RouteFilters';
import FareCalculator from './components/FareCalculator';
import PopularRoutes from './components/PopularRoutes';
import RouteSuccessStories from './components/RouteSuccessStories';

const RoutePlanner = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [showFareCalculator, setShowFareCalculator] = useState(false);
  const [calculatorRoute, setCalculatorRoute] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    difficulty: 'all',
    traffic: 'all',
    sortBy: 'distance',
    minDistance: '',
    maxDistance: '',
    minFare: '',
    maxFare: ''
  });

  const routes = [
  {
    id: 1,
    name: "Ahmedabad to Dwarka",
    description: "Direct routes with minimal stops and saving tolls",
    distance: "449 KM",
    duration: "9-10 hrs",
    estimatedFare: "7500 - 12500 INR",
    difficulty: "Easy",
    traffic: "Moderate",
    landmarks: ["City Center", "Business District", "Airport Terminal"],
    alternativeRoutes: []
  },
  {
    id: 2,
    name: "Ahmedabad to Somnath",
    description: "Scenic coastal drive with ocean views",
    distance: "425 KM",
    duration: "9-10 hrs",
    estimatedFare: "7500 - 12500 INR",
    difficulty: "Easy",
    traffic: "Light",
    landmarks: ["Marina Bay", "Coastal Park", "Beach Pier"],
    alternativeRoutes: []

  },
  {
    id: 3,
    name: "Ahmedabad to Diu",
    description: "Route through innovation district with multiple tech hubs",
    distance: "360 KM",
    duration: "8-10 hrs",
    estimatedFare: "6500 to 12000 INR",
    difficulty: "Easy",
    traffic: "Light",
    landmarks: ["University Gate", "Innovation Center", "Tech Hub Plaza"],
    alternativeRoutes: []
  },
  {
    id: 4,
    name: "Historic District to Convention Center",
    description: "Downtown route passing major landmarks and hotels",
    distance: "12.3 km",
    duration: "18-22 mins",
    estimatedFare: "$22-28",
    difficulty: "Moderate",
    traffic: "Moderate",
    landmarks: ["Old Town Square", "Museum Row", "Convention Plaza"],
    alternativeRoutes: []

  },
  {
    id: 5,
    name: "Suburban Mall to Downtown Shopping",
    description: "Cross-city route connecting major shopping districts",
    distance: "22.7 km",
    duration: "30-38 mins",
    estimatedFare: "$38-48",
    difficulty: "Moderate",
    traffic: "Heavy",
    landmarks: ["Westfield Mall", "Central Market", "Fashion District"],
    alternativeRoutes: []

  },
  {
    id: 6,
    name: "Hospital District to Medical Center",
    description: "Priority route for medical appointments and emergencies",
    distance: "8.5 km",
    duration: "12-15 mins",
    estimatedFare: "$18-22",
    difficulty: "Easy",
    traffic: "Light",
    landmarks: ["General Hospital", "Medical Plaza", "Health Center"],
    alternativeRoutes: []
  },
  {
    id: 7,
    name: "Train Station to Business Park",
    description: "Commuter route connecting transit hub to corporate offices",
    distance: "19.4 km",
    duration: "25-32 mins",
    estimatedFare: "$32-40",
    difficulty: "Moderate",
    traffic: "Heavy",
    landmarks: ["Central Station", "Corporate Plaza", "Business Tower"],
    alternativeRoutes: []

  },
  {
    id: 8,
    name: "Mountain View to Valley Center",
    description: "Scenic route through hills with panoramic city views",
    distance: "32.1 km",
    duration: "45-55 mins",
    estimatedFare: "$55-68",
    difficulty: "Challenging",
    traffic: "Light",
    landmarks: ["Hilltop Viewpoint", "Valley Overlook", "City Vista"],
    alternativeRoutes: []

  }];


  const popularRoutes = routes?.slice(0, 5);

  const successStories = [
  {
    id: 1,
    customerName: "Sarah Mitchell",
    customerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1954059e7-1763296723627.png",
    customerImageAlt: "Professional woman with blonde hair in business attire smiling warmly at camera",
    routeName: "Downtown to Airport Express",
    rating: 5,
    review: "Perfect route for my business trips! Driver knew all the shortcuts and got me to the airport with time to spare. The fare was exactly as estimated.",
    date: "Nov 28, 2024"
  },
  {
    id: 2,
    customerName: "James Rodriguez",
    customerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1aee345c1-1763293960594.png",
    customerImageAlt: "Hispanic man with short dark hair wearing casual blue shirt with friendly expression",
    routeName: "City Center to Beach Boulevard",
    rating: 5,
    review: "Beautiful scenic route! Driver was professional and the car was spotless. Had plenty of space for our beach gear and surfboards.",
    date: "Nov 25, 2024"
  },
  {
    id: 3,
    customerName: "Emily Chen",
    customerImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1124a4601-1763295240952.png",
    customerImageAlt: "Asian woman with long black hair in professional attire with confident smile",
    routeName: "University Campus to Tech Park",
    rating: 5,
    review: "As a daily commuter, this route saves me so much time. The driver is always punctual and the pricing is transparent. Highly recommend!",
    date: "Nov 22, 2024"
  }];


  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      search: '',
      difficulty: 'all',
      traffic: 'all',
      sortBy: 'distance',
      minDistance: '',
      maxDistance: '',
      minFare: '',
      maxFare: ''
    });
  };

  const handleSelectRoute = (route) => {
    setSelectedRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCalculateFare = (route) => {
    setCalculatorRoute(route);
    setShowFareCalculator(true);
  };

  const filterRoutes = () => {
    let filtered = [...routes];

    if (filters?.search) {
      filtered = filtered?.filter((route) =>
      route?.name?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
      route?.description?.toLowerCase()?.includes(filters?.search?.toLowerCase()) ||
      route?.landmarks?.some((landmark) => landmark?.toLowerCase()?.includes(filters?.search?.toLowerCase()))
      );
    }

    if (filters?.difficulty !== 'all') {
      filtered = filtered?.filter((route) =>
      route?.difficulty?.toLowerCase() === filters?.difficulty?.toLowerCase()
      );
    }

    if (filters?.traffic !== 'all') {
      filtered = filtered?.filter((route) =>
      route?.traffic?.toLowerCase() === filters?.traffic?.toLowerCase()
      );
    }

    if (filters?.minDistance) {
      filtered = filtered?.filter((route) =>
      parseFloat(route?.distance?.replace(' km', '')) >= parseFloat(filters?.minDistance)
      );
    }

    if (filters?.maxDistance) {
      filtered = filtered?.filter((route) =>
      parseFloat(route?.distance?.replace(' km', '')) <= parseFloat(filters?.maxDistance)
      );
    }

    if (filters?.minFare) {
      filtered = filtered?.filter((route) => {
        const minFare = parseFloat(route?.estimatedFare?.split('-')?.[0]?.replace('$', ''));
        return minFare >= parseFloat(filters?.minFare);
      });
    }

    if (filters?.maxFare) {
      filtered = filtered?.filter((route) => {
        const maxFare = parseFloat(route?.estimatedFare?.split('-')?.[1]?.replace('$', ''));
        return maxFare <= parseFloat(filters?.maxFare);
      });
    }

    filtered?.sort((a, b) => {
      switch (filters?.sortBy) {
        case 'distance':
          return parseFloat(a?.distance?.replace(' km', '')) - parseFloat(b?.distance?.replace(' km', ''));
        case 'duration':
          return parseFloat(a?.duration?.split('-')?.[0]) - parseFloat(b?.duration?.split('-')?.[0]);
        case 'fare':
          return parseFloat(a?.estimatedFare?.split('-')?.[0]?.replace('$', '')) - parseFloat(b?.estimatedFare?.split('-')?.[0]?.replace('$', ''));
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredRoutes = filterRoutes();

  return (
    <>
      <Helmet>
        <title>Route Planner - ShivSakti Travels | Plan Your Journey</title>
        <meta name="description" content="Explore ShivSakti Travels's comprehensive route network with interactive maps, distance calculations, and transparent fare estimates. Plan your perfect journey today." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-full mb-6">
                  <Icon name="Map" size={18} color="var(--color-primary)" />
                  <span className="text-sm font-medium text-primary">Interactive Route Planning</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Know Your Route, Know Your Price
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Explore our transparent route network with real-time traffic updates, distance calculations, and instant fare estimates. Every journey planned with complete clarity.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Navigation"
                    iconPosition="left"
                    onClick={() => document.getElementById('route-map')?.scrollIntoView({ behavior: 'smooth' })}>

                    View Interactive Map
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="Calculator"
                    iconPosition="left"
                    onClick={() => document.getElementById('routes-grid')?.scrollIntoView({ behavior: 'smooth' })}>

                    Calculate Fare
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 border-b border-border">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="MapPin" size={28} color="var(--color-primary)" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">50+</h3>
                  <p className="text-sm text-muted-foreground">Predefined Routes</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="TrendingUp" size={28} color="var(--color-success)" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">98%</h3>
                  <p className="text-sm text-muted-foreground">On-Time Arrivals</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="DollarSign" size={28} color="var(--color-secondary)" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">100%</h3>
                  <p className="text-sm text-muted-foreground">Transparent Pricing</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="Star" size={28} color="var(--color-accent)" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">4.9</h3>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </div>
          </section>

          <section id="route-map" className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Interactive Route Network
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Visualize your journey with our real-time route mapping system. See traffic conditions, landmarks, and alternative routes at a glance.
                </p>
              </div>

              <InteractiveMap
                selectedRoute={selectedRoute}
                onRouteHover={setSelectedRoute} />

            </div>
          </section>

          <section id="routes-grid" className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Explore All Routes
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Browse our comprehensive route network with detailed information, fare estimates, and real-time traffic updates.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    <RouteFilters
                      filters={filters}
                      onFilterChange={handleFilterChange}
                      onResetFilters={handleResetFilters} />

                    <PopularRoutes
                      routes={popularRoutes}
                      onSelectRoute={handleSelectRoute} />

                  </div>
                </div>

                <div className="lg:col-span-3">
                  {filteredRoutes?.length > 0 ?
                  <>
                      <div className="flex items-center justify-between mb-6">
                        <p className="text-muted-foreground">
                          Showing <span className="font-semibold text-foreground">{filteredRoutes?.length}</span> routes
                        </p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredRoutes?.map((route) =>
                      <RouteCard
                        key={route?.id}
                        route={route}
                        onSelectRoute={handleSelectRoute}
                        onCalculateFare={handleCalculateFare} />

                      )}
                      </div>
                    </> :

                  <div className="text-center py-16">
                      <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Search" size={32} color="var(--color-muted-foreground)" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">No Routes Found</h3>
                      <p className="text-muted-foreground mb-6">
                        Try adjusting your filters to see more results
                      </p>
                      <Button
                      variant="outline"
                      size="default"
                      iconName="RotateCcw"
                      iconPosition="left"
                      onClick={handleResetFilters}>

                        Reset Filters
                      </Button>
                    </div>
                  }
                </div>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Success Stories
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Real experiences from passengers who trusted ShivSakti Travels for their journeys
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <RouteSuccessStories stories={successStories} />
              </div>
            </div>
          </section>

          <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" size={32} color="var(--color-primary)" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Need Help Planning Your Route?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Our team is ready to assist you with route selection, fare estimates, and booking assistance
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Phone"
                    iconPosition="left"
                    onClick={() => window.location.href = 'tel:++919409713448'}>

                    Call Now: +919409713448
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="MessageCircle"
                    iconPosition="left"
                    onClick={() => window.open('https://wa.me/+919409713448', '_blank')}>

                    WhatsApp Support
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {showFareCalculator && calculatorRoute &&
        <FareCalculator
          route={calculatorRoute}
          onClose={() => {
            setShowFareCalculator(false);
            setCalculatorRoute(null);
          }} />

        }
      </div>
    </>);

};

export default RoutePlanner;