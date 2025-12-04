import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const FareCalculator = () => {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [calculatedFare, setCalculatedFare] = useState(null);

  const routes = [
    { value: 'airport-downtown', label: 'Airport to Downtown', distance: '15 km' },
    { value: 'hotel-business', label: 'Hotel Zone to Business District', distance: '8 km' },
    { value: 'city-mall', label: 'City Center to Shopping Mall', distance: '12 km' },
    { value: 'airport-station', label: 'Airport to Train Station', distance: '22 km' }
  ];

  const carTypes = [
    { value: 'sedan', label: 'Sedan', rate: 17, description: 'Comfortable 4-seater' },
    { value: 'suv', label: 'SUV', rate: 27, description: 'Spacious 7-seater' },
    { value: 'luxury', label: 'Luxury', rate: 30, description: 'Premium experience' }
  ];

  const calculateFare = () => {
    if (!selectedRoute || !selectedCar) return;

    const route = routes?.find(r => r?.value === selectedRoute);
    const car = carTypes?.find(c => c?.value === selectedCar);
    
    const distance = parseInt(route?.distance);
    const baseFare = 5;
    const fare = baseFare + (distance * car?.rate);

    setCalculatedFare({
      baseFare,
      distanceFare: distance * car?.rate,
      total: fare,
      distance: route?.distance,
      carType: car?.label
    });
  };

  return (
    <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Icon name="Calculator" size={20} color="var(--color-primary)" />
              <span className="text-sm font-medium text-primary">Instant Pricing</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Calculate Your Fare
            </h2>
            <p className="text-muted-foreground">
              Know your exact price before booking. No hidden charges, no surprises.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Select
                label="Select Route"
                placeholder="Choose your route"
                options={routes}
                value={selectedRoute}
                onChange={setSelectedRoute}
                searchable
              />

              <Select
                label="Select Car Type"
                placeholder="Choose vehicle"
                options={carTypes}
                value={selectedCar}
                onChange={setSelectedCar}
              />
            </div>

            <Button
              variant="default"
              size="lg"
              fullWidth
              iconName="Calculator"
              iconPosition="right"
              onClick={calculateFare}
              disabled={!selectedRoute || !selectedCar}
            >
              Calculate Fare
            </Button>

            {calculatedFare && (
              <div className="mt-8 p-6 bg-muted rounded-xl border border-border animate-slide-up">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground">Fare Breakdown</h3>
                  <div className="flex items-center space-x-2 text-success">
                    <Icon name="CheckCircle" size={20} />
                    <span className="text-sm font-medium">Transparent Pricing</span>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Base Fare</span>
                    <span className="font-medium text-foreground">INR {calculatedFare?.baseFare?.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Distance ({calculatedFare?.distance})</span>
                    <span className="font-medium text-foreground">INR {calculatedFare?.distanceFare?.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Vehicle Type</span>
                    <span className="font-medium text-foreground">{calculatedFare?.carType}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-lg font-semibold text-foreground">Total Fare</span>
                  <span className="text-3xl font-bold text-primary">INR  {calculatedFare?.total?.toFixed(2)}</span>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name="Info" size={20} color="var(--color-primary)" />
                    <div className="text-sm text-foreground">
                      <p className="font-medium mb-1">Price Guarantee</p>
                      <p className="text-muted-foreground">This is your final price. No surge pricing, no hidden fees, no surprises at the end of your journey.</p>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 mt-6">
                  <Button
                    variant="default"
                    size="default"
                    fullWidth
                    iconName="Car"
                    iconPosition="left"
                    onClick={() => window.location.href = '/fleet-gallery'}
                  >
                    Book This Ride
                  </Button>
                  <Button
                    variant="outline"
                    size="default"
                    iconName="Phone"
                    onClick={() => window.location.href = 'tel:+1234567890'}
                  >
                    Call
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Icon name="DollarSign" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">No Hidden Fees</h4>
              <p className="text-sm text-muted-foreground">What you see is what you pay. Always.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Icon name="TrendingDown" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">No Surge Pricing</h4>
              <p className="text-sm text-muted-foreground">Same price, peak or off-peak hours.</p>
            </div>
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <Icon name="Shield" size={32} color="var(--color-primary)" className="mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Price Lock</h4>
              <p className="text-sm text-muted-foreground">Your quoted price is guaranteed.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareCalculator;