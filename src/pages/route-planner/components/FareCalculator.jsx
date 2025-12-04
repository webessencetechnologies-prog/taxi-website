import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const FareCalculator = ({ route, onClose }) => {
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');
  const [passengers, setPassengers] = useState('1');
  const [luggage, setLuggage] = useState('0');

  const vehicleOptions = [
    { value: 'sedan', label: 'Sedan - $0.80/km' },
    { value: 'suv', label: 'SUV - $1.20/km' },
    { value: 'luxury', label: 'Luxury - $1.80/km' },
    { value: 'van', label: 'Van - $1.50/km' }
  ];

  const passengerOptions = [
    { value: '1', label: '1 Passenger' },
    { value: '2', label: '2 Passengers' },
    { value: '3', label: '3 Passengers' },
    { value: '4', label: '4 Passengers' },
    { value: '5+', label: '5+ Passengers' }
  ];

  const luggageOptions = [
    { value: '0', label: 'No Luggage' },
    { value: '1', label: '1 Bag' },
    { value: '2', label: '2 Bags' },
    { value: '3', label: '3 Bags' },
    { value: '4+', label: '4+ Bags' }
  ];

  const calculateFare = () => {
    const baseRates = {
      sedan: 0.80,
      suv: 1.20,
      luxury: 1.80,
      van: 1.50
    };

    const distanceValue = parseFloat(route?.distance?.replace(' km', ''));
    const baseFare = distanceValue * baseRates?.[selectedVehicle];
    const luggageFee = parseInt(luggage) * 5;
    const totalFare = baseFare + luggageFee;

    return {
      baseFare: baseFare?.toFixed(2),
      luggageFee: luggageFee?.toFixed(2),
      totalFare: totalFare?.toFixed(2)
    };
  };

  const fareBreakdown = calculateFare();

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up">
        <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon name="Calculator" size={20} color="var(--color-primary)" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Fare Calculator</h2>
              <p className="text-sm text-muted-foreground">{route?.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-semibold text-foreground mb-3">Route Details</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Icon name="Navigation" size={16} color="var(--color-primary)" />
                <div>
                  <p className="text-xs text-muted-foreground">Distance</p>
                  <p className="text-sm font-semibold text-foreground">{route?.distance}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} color="var(--color-primary)" />
                <div>
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-sm font-semibold text-foreground">{route?.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} color="var(--color-primary)" />
                <div>
                  <p className="text-xs text-muted-foreground">Traffic</p>
                  <p className="text-sm font-semibold text-foreground">{route?.traffic}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Select
              label="Select Vehicle Type"
              description="Different vehicles have different rates per kilometer"
              options={vehicleOptions}
              value={selectedVehicle}
              onChange={setSelectedVehicle}
            />

            <Select
              label="Number of Passengers"
              options={passengerOptions}
              value={passengers}
              onChange={setPassengers}
            />

            <Select
              label="Luggage Count"
              description="Additional $5 per bag"
              options={luggageOptions}
              value={luggage}
              onChange={setLuggage}
            />
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center">
              <Icon name="Receipt" size={18} className="mr-2" />
              Fare Breakdown
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Base Fare</span>
                <span className="font-semibold text-foreground">${fareBreakdown?.baseFare}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Luggage Fee</span>
                <span className="font-semibold text-foreground">${fareBreakdown?.luggageFee}</span>
              </div>
              <div className="h-px bg-border"></div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-foreground">Total Estimated Fare</span>
                <span className="text-2xl font-bold text-primary">${fareBreakdown?.totalFare}</span>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <Icon name="Info" size={16} color="var(--color-primary)" className="mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Pricing Notes:</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Fares are estimates based on current traffic conditions</li>
                  <li>Actual fare may vary based on real-time traffic and route changes</li>
                  <li>Additional charges may apply for tolls and parking</li>
                  <li>Peak hour surcharges may be applicable</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="default"
              fullWidth
              iconName="X"
              iconPosition="left"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              size="default"
              fullWidth
              iconName="Car"
              iconPosition="right"
              onClick={() => {}}
            >
              Book This Route
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareCalculator;