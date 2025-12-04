import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const PriceBreakdown = ({ calculation }) => {
  const [animatedTotal, setAnimatedTotal] = useState(0);

  useEffect(() => {
    if (calculation) {
      let start = 0;
      const end = calculation?.total;
      const duration = 1000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setAnimatedTotal(end);
          clearInterval(timer);
        } else {
          setAnimatedTotal(start);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [calculation]);

  if (!calculation) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="DollarSign" size={32} className="text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">
            Select route and vehicle to see pricing breakdown
          </p>
        </div>
      </div>
    );
  }

  const breakdownItems = [
    {
      icon: 'MapPin',
      label: 'Base Fare',
      value: calculation?.baseFare,
      description: 'Starting rate for your trip'
    },
    {
      icon: 'Route',
      label: 'Distance Charge',
      value: calculation?.distanceFare,
      description: `${calculation?.distance} miles traveled`
    },
    {
      icon: 'Briefcase',
      label: 'Luggage Fee',
      value: calculation?.luggageFee,
      description: `${calculation?.luggage} bag(s)`
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Price Breakdown</h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="Info" size={16} />
          <span>Transparent Pricing</span>
        </div>
      </div>
      <div className="space-y-4 mb-6">
        {breakdownItems?.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                <Icon name={item?.icon} size={18} color="var(--color-primary)" />
              </div>
              <div>
                <p className="font-medium text-foreground">{item?.label}</p>
                <p className="text-xs text-muted-foreground">{item?.description}</p>
              </div>
            </div>
            <span className="text-lg font-semibold text-foreground">
              ${item?.value?.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold text-foreground">Total Fare</span>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">
              ${animatedTotal?.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {calculation?.passengers} passenger(s)
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={18} color="var(--color-primary)" />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground mb-1">
              No Hidden Fees
            </p>
            <p className="text-xs text-muted-foreground">
              This is your final price. No surge charges or surprise fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceBreakdown;