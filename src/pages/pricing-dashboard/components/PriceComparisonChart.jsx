import React from 'react';
import Icon from '../../../components/AppIcon';

const PriceComparisonChart = () => {
  const vehicleComparison = [
    {
      type: 'Sedan',
      icon: 'Car',
      baseRate: 2.5,
      perMile: 1.8,
      capacity: '4 passengers',
      luggage: '2 bags',
      popular: false,
      color: 'bg-blue-500'
    },
    {
      type: 'SUV',
      icon: 'Truck',
      baseRate: 3.5,
      perMile: 2.3,
      capacity: '6 passengers',
      luggage: '4 bags',
      popular: true,
      color: 'bg-primary'
    },
    {
      type: 'Luxury',
      icon: 'Crown',
      baseRate: 5.0,
      perMile: 3.5,
      capacity: '4 passengers',
      luggage: '3 bags',
      popular: false,
      color: 'bg-purple-500'
    },
    {
      type: 'Van',
      icon: 'Bus',
      baseRate: 4.0,
      perMile: 2.8,
      capacity: '8 passengers',
      luggage: '6 bags',
      popular: false,
      color: 'bg-green-500'
    }
  ];

  const sampleDistances = [10, 20, 30, 40];

  const calculatePrice = (baseRate, perMile, distance) => {
    return (baseRate + (perMile * distance))?.toFixed(2);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
            <Icon name="BarChart3" size={20} color="var(--color-primary)" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Vehicle Price Comparison</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {vehicleComparison?.map((vehicle, index) => (
          <div
            key={index}
            className="relative bg-muted/50 rounded-lg p-5 border border-border hover:border-primary/50 transition-all duration-300"
          >
            {vehicle?.popular && (
              <div className="absolute -top-3 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </div>
            )}

            <div className="flex items-center space-x-3 mb-4">
              <div className={`w-12 h-12 ${vehicle?.color} rounded-lg flex items-center justify-center`}>
                <Icon name={vehicle?.icon} size={24} color="#FFFFFF" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{vehicle?.type}</h3>
                <p className="text-xs text-muted-foreground">{vehicle?.capacity}</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Base Rate:</span>
                <span className="font-semibold text-foreground">${vehicle?.baseRate?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Per Mile:</span>
                <span className="font-semibold text-foreground">${vehicle?.perMile?.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Luggage:</span>
                <span className="font-semibold text-foreground">{vehicle?.luggage}</span>
              </div>
            </div>

            <div className="border-t border-border pt-3">
              <p className="text-xs text-muted-foreground mb-2">Sample Fares:</p>
              <div className="grid grid-cols-2 gap-2">
                {sampleDistances?.map((distance, idx) => (
                  <div key={idx} className="text-xs">
                    <span className="text-muted-foreground">{distance}mi:</span>
                    <span className="ml-1 font-semibold text-foreground">
                      ${calculatePrice(vehicle?.baseRate, vehicle?.perMile, distance)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceComparisonChart;