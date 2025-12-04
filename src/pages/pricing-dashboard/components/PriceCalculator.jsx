import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const PriceCalculator = ({ onCalculate }) => {
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [luggage, setLuggage] = useState('0');
  const [calculating, setCalculating] = useState(false);

  const routes = [
    { value: 'airport-downtown', label: 'Airport to Downtown (15 miles)', distance: 15 },
    { value: 'downtown-suburbs', label: 'Downtown to Suburbs (22 miles)', distance: 22 },
    { value: 'airport-hotel', label: 'Airport to Hotel District (12 miles)', distance: 12 },
    { value: 'city-tour', label: 'City Tour Route (35 miles)', distance: 35 },
    { value: 'business-district', label: 'Business District Loop (8 miles)', distance: 8 },
    { value: 'coastal-route', label: 'Coastal Scenic Route (45 miles)', distance: 45 }
  ];

  const vehicles = [
    { value: 'sedan', label: 'Sedan - Economy', baseRate: 2.5, perMile: 1.8 },
    { value: 'suv', label: 'SUV - Comfort', baseRate: 3.5, perMile: 2.3 },
    { value: 'luxury', label: 'Luxury Sedan', baseRate: 5.0, perMile: 3.5 },
    { value: 'van', label: 'Van - Group Travel', baseRate: 4.0, perMile: 2.8 }
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
    { value: '3', label: '3+ Bags' }
  ];

  const handleCalculate = () => {
    if (!selectedRoute || !selectedVehicle) return;

    setCalculating(true);
    setTimeout(() => {
      const route = routes?.find(r => r?.value === selectedRoute);
      const vehicle = vehicles?.find(v => v?.value === selectedVehicle);
      
      const baseFare = vehicle?.baseRate;
      const distanceFare = route?.distance * vehicle?.perMile;
      const luggageFee = parseInt(luggage) * 2;
      const total = baseFare + distanceFare + luggageFee;

      onCalculate({
        route: route?.label,
        vehicle: vehicle?.label,
        distance: route?.distance,
        baseFare,
        distanceFare,
        luggageFee,
        total,
        passengers: parseInt(passengers),
        luggage: parseInt(luggage)
      });

      setCalculating(false);
    }, 1000);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
          <Icon name="Calculator" size={20} color="var(--color-primary)" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">Calculate Your Fare</h2>
      </div>

      <div className="space-y-4">
        <Select
          label="Select Route"
          placeholder="Choose your destination"
          options={routes}
          value={selectedRoute}
          onChange={setSelectedRoute}
          required
          searchable
        />

        <Select
          label="Vehicle Type"
          placeholder="Choose vehicle category"
          options={vehicles}
          value={selectedVehicle}
          onChange={setSelectedVehicle}
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
          iconName="ArrowRight"
          iconPosition="right"
          loading={calculating}
          onClick={handleCalculate}
          disabled={!selectedRoute || !selectedVehicle}
        >
          {calculating ? 'Calculating...' : 'Calculate Fare'}
        </Button>
      </div>
    </div>
  );
};

export default PriceCalculator;