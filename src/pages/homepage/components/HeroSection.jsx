import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const HeroSection = ({ onRouteSelect, onBookNow }) => {
  const [selectedPickup, setSelectedPickup] = useState('');
  const [selectedDropoff, setSelectedDropoff] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [luggage, setLuggage] = useState('0');
  const [animatedCount, setAnimatedCount] = useState(0);

  const popularLocations = [
    { value: 'airport', label: 'International Airport', description: '15 km from city center' },
    { value: 'downtown', label: 'Downtown Business District', description: 'Central location' },
    { value: 'mall', label: 'Grand Shopping Mall', description: '8 km from airport' },
    { value: 'hotel-zone', label: 'Hotel Zone', description: 'Tourist area' },
    { value: 'train-station', label: 'Central Train Station', description: 'Main railway hub' },
    { value: 'convention', label: 'Convention Center', description: 'Event venue' }
  ];

  const passengerOptions = [
    { value: '1', label: '1 Passenger' },
    { value: '2', label: '2 Passengers' },
    { value: '3', label: '3 Passengers' },
    { value: '4', label: '4 Passengers' },
    { value: '5', label: '5+ Passengers' }
  ];

  const luggageOptions = [
    { value: '0', label: 'No Luggage' },
    { value: '1', label: '1 Bag' },
    { value: '2', label: '2 Bags' },
    { value: '3', label: '3 Bags' },
    { value: '4', label: '4+ Bags' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedCount(prev => (prev >= 47 ? 12 : prev + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleBooking = () => {
    if (selectedPickup && selectedDropoff) {
      onBookNow({ pickup: selectedPickup, dropoff: selectedDropoff, passengers, luggage });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-background via-card to-muted overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
              <Icon name="Zap" size={20} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary">Available 24/7</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Transparent Journeys,
              <span className="text-primary"> Trusted Connections</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Know your route, know your price, know your driver. Experience ride-hailing with complete pricing clarity and direct driver communication.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-3 bg-card px-6 py-3 rounded-lg border border-border">
                <Icon name="Car" size={24} color="var(--color-primary)" />
                <div>
                  <div className="text-2xl font-bold text-foreground animate-count-up">{animatedCount}</div>
                  <div className="text-xs text-muted-foreground">Cars Available</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-card px-6 py-3 rounded-lg border border-border">
                <Icon name="Users" size={24} color="var(--color-primary)" />
                <div>
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">Happy Passengers</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-card px-6 py-3 rounded-lg border border-border">
                <Icon name="Star" size={24} color="var(--color-primary)" />
                <div>
                  <div className="text-2xl font-bold text-foreground">4.9</div>
                  <div className="text-xs text-muted-foreground">Average Rating</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-foreground">Book Your Ride</h2>
              <div className="flex items-center space-x-2 text-success">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Live Availability</span>
              </div>
            </div>

            <div className="space-y-4">
              <Select
                label="Pickup Location"
                placeholder="Select pickup point"
                options={popularLocations}
                value={selectedPickup}
                onChange={setSelectedPickup}
                searchable
                required
              />

              <Select
                label="Drop-off Location"
                placeholder="Select destination"
                options={popularLocations}
                value={selectedDropoff}
                onChange={setSelectedDropoff}
                searchable
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <Select
                  label="Passengers"
                  options={passengerOptions}
                  value={passengers}
                  onChange={setPassengers}
                />

                <Select
                  label="Luggage"
                  options={luggageOptions}
                  value={luggage}
                  onChange={setLuggage}
                />
              </div>

              <Button
                variant="default"
                size="lg"
                fullWidth
                iconName="Search"
                iconPosition="right"
                onClick={handleBooking}
                disabled={!selectedPickup || !selectedDropoff}
              >
                Find Available Cars
              </Button>

              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.location.href = 'tel:+1234567890'}
                >
                  Call Now
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;