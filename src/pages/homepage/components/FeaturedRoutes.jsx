import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedRoutes = () => {
  const featuredRoutes = [
  {
    id: 1,
    name: "Airport Express",
    from: "Ahmedabad City",
    to: "Ahmedabad Airport",
    distance: "50km/Day",
    duration: "3hr/Day",
    price: "INR 550",
    image: "https://images.unsplash.com/photo-1621331235693-c5662b96698e",
    imageAlt: "Modern international airport terminal with glass facade and departure area during daytime with clear blue sky",
    popular: true,
    savings: "Save INR 150",
    features: ["Fast Track", "Luggage Assistance", "Flight Monitoring"]
  },
  {
    id: 2,
    name: "Intercity Trips",
    from: "Any City",
    to: "Any City",
    distance: "300km/Day",
    duration: "6Hr/Day",
    price: "INR 3500*",
    image: "https://images.unsplash.com/photo-1470606390217-9576f92853cd",
    imageAlt: "Modern downtown business district with tall glass skyscrapers and corporate office buildings reflecting sunlight",
    popular: true,
    savings: null,
    features: ["WiFi Available", "Professional Drivers", "Express Route"]
  },
  {
    id: 3,
    name: "Ahmedabad City Tour",
    from: "Any Place",
    to: "Any Place",
    distance: "60km/Day",
    duration: "4hr/Day",
    price: "INR 1500",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_115f75d78-1764715712431.png",
    imageAlt: "Large modern shopping mall exterior with multiple floors glass windows and busy parking area with shoppers",
    popular: false,
    savings: null,
    features: ["Shopping Assistance", "Multiple Stops", "Spacious Vehicles"]
  },
  {
    id: 4,
    name: "Railway Station",
    from: "Any Place",
    to: "Ahm Railway Station",
    distance: "50km/day",
    duration: "3hr/day",
    price: "INR 450",
    image: "https://images.unsplash.com/photo-1627220523602-143c92e35a74",
    imageAlt: "Historic central train station building with classic architecture red brick facade and main entrance with travelers",
    popular: true,
    savings: "Save INR 100",
    features: ["Luggage Support", "Schedule Coordination", "Direct Route"]
  }];


  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="TrendingUp" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Most Popular</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Routes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pre-planned routes with transparent pricing and verified drivers. Book instantly with complete route visibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRoutes?.map((route) =>
          <div
            key={route?.id}
            className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group">

              <div className="relative h-48 overflow-hidden">
                <Image
                src={route?.image}
                alt={route?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                {route?.popular &&
              <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <Icon name="Star" size={14} />
                    <span>Popular</span>
                  </div>
              }
                {route?.savings &&
              <div className="absolute top-3 right-3 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {route?.savings}
                  </div>
              }
              </div>

              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{route?.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} color="var(--color-primary)" />
                    <span>{route?.from}</span>
                    <Icon name="ArrowRight" size={14} />
                    <span>{route?.to}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Icon name="Navigation" size={16} />
                    <span>{route?.distance}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span>{route?.duration}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {route?.features?.slice(0, 2)?.map((feature, index) =>
                <span
                  key={index}
                  className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">

                      {feature}
                    </span>
                )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground">Starting from</div>
                    <div className="text-2xl font-bold text-primary">{route?.price}</div>
                  </div>
                  <Button
                  variant="default"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => window.location.href = `/route-planner?route=${route?.id}`}>

                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Link to="/route-planner">
            <Button
              variant="outline"
              size="lg"
              iconName="Map"
              iconPosition="left">

              View All Routes
            </Button>
          </Link>
        </div>
      </div>
    </div>);

};

export default FeaturedRoutes;