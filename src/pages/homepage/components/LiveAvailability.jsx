import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LiveAvailability = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [liveCount, setLiveCount] = useState(47);

  const categories = [
  { id: 'all', label: 'All Cars', icon: 'Car' },
  { id: 'sedan', label: 'Sedan', icon: 'Car' },
  { id: 'suv', label: 'SUV', icon: 'Truck' },
  { id: 'luxury', label: 'Luxury', icon: 'Crown' }];


  const availableCars = [
  {
    id: 1,
    name: "Toyota Camry",
    category: "sedan",
    driver: "Michael Rodriguez",
    driverImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1ce7e2d88-1763293689637.png",
    driverImageAlt: "Professional Hispanic male driver with warm smile wearing formal black suit and white shirt",
    rating: 4.9,
    trips: 342,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15d038400-1764831418921.png",
    imageAlt: "Silver Toyota Camry sedan parked in urban setting with modern buildings and clear sky in background",
    passengers: 4,
    luggage: 3,
    pricePerKm: "₹15",
    available: true,
    features: ["AC", "GPS", "Music System"]
  },
  {
    id: 2,
    name: "Honda Accord",
    category: "sedan",
    driver: "Sarah Johnson",
    driverImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1bd12627e-1763299084676.png",
    driverImageAlt: "Professional Caucasian female driver with friendly expression wearing navy blue blazer and white blouse",
    rating: 4.8,
    trips: 289,
    image: "https://images.unsplash.com/photo-1734205496756-4784ca64a194",
    imageAlt: "Black Honda Accord sedan on city street with sleek design and modern headlights during evening",
    passengers: 4,
    luggage: 3,
    pricePerKm: "₹17",
    available: true,
    features: ["AC", "WiFi", "USB Charging"]
  },
  {
    id: 3,
    name: "Ford Explorer",
    category: "suv",
    driver: "James Wilson",
    driverImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18d854688-1763295573707.png",
    driverImageAlt: "Professional African American male driver with confident smile wearing gray suit and blue tie",
    rating: 4.9,
    trips: 412,
    image: "https://images.unsplash.com/photo-1681580481786-475fc6e7dc5c",
    imageAlt: "White Ford Explorer SUV parked on mountain road with scenic landscape and pine trees in background",
    passengers: 7,
    luggage: 5,
    pricePerKm: "₹22",
    available: true,
    features: ["AC", "GPS", "Child Seats", "Extra Space"]
  },
  {
    id: 4,
    name: "Mercedes S-Class",
    category: "luxury",
    driver: "David Chen",
    driverImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1448d8a2b-1763299084005.png",
    driverImageAlt: "Professional Asian male driver with polished appearance wearing black tuxedo and bow tie",
    rating: 5.0,
    trips: 156,
    image: "https://images.unsplash.com/photo-1729831607236-f4187bf35632",
    imageAlt: "Black Mercedes S-Class luxury sedan with chrome accents parked in front of upscale hotel entrance",
    passengers: 4,
    luggage: 3,
    pricePerKm: "₹32",
    available: true,
    features: ["Premium AC", "Leather Seats", "Champagne Bar", "Privacy Glass"]
  }];


  const filteredCars = activeTab === 'all' ?
  availableCars :
  availableCars?.filter((car) => car?.category === activeTab);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveCount((prev) => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-success">Live Now</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Available Cars Right Now
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
            Real-time availability with verified drivers. Contact directly via WhatsApp or phone.
          </p>
          <div className="text-2xl font-bold text-primary animate-count-up">
            {liveCount} cars available in your area
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories?.map((category) =>
          <button
            key={category?.id}
            onClick={() => setActiveTab(category?.id)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
            activeTab === category?.id ?
            'bg-primary text-primary-foreground shadow-lg' :
            'bg-card text-foreground hover:bg-card/80 border border-border'}`
            }>

              <Icon name={category?.icon} size={20} />
              <span>{category?.label}</span>
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCars?.map((car) =>
          <div
            key={car?.id}
            className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 group">

              <div className="relative h-48 overflow-hidden">
                <Image
                src={car?.image}
                alt={car?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute top-3 right-3 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                  <div className="w-2 h-2 bg-success-foreground rounded-full animate-pulse"></div>
                  <span>Available</span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{car?.name}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} color="var(--color-primary)" />
                      <span className="text-sm font-medium text-foreground">{car?.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({car?.trips} trips)</span>
                  </div>
                </div>

                {/* <div className="flex items-center space-x-3 pb-3 border-b border-border">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                    <Image
                    src={car?.driverImage}
                    alt={car?.driverImageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{car?.driver}</div>
                    <div className="text-xs text-muted-foreground">Professional Driver</div>
                  </div>
                </div> */}

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Icon name="Users" size={16} />
                    <span>{car?.passengers} seats</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Icon name="Briefcase" size={16} />
                    <span>{car?.luggage} bags</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {car?.features?.slice(0, 2)?.map((feature, index) =>
                <span
                  key={index}
                  className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">

                      {feature}
                    </span>
                )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground">Per km</div>
                    <div className="text-xl font-bold text-primary">{car?.pricePerKm}</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.location.href = 'tel:+1234567890'}>

                      <Icon name="Phone" size={18} />
                    </Button>
                    <Button
                    variant="default"
                    size="icon"
                    onClick={() => window.open('https://wa.me/1234567890', '_blank')}>

                      <Icon name="MessageCircle" size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Link to="/fleet-gallery">
            <Button
              variant="outline"
              size="lg"
              iconName="Car"
              iconPosition="left">

              View Complete Fleet
            </Button>
          </Link>
        </div>
      </div>
    </div>);

};

export default LiveAvailability;