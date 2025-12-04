import React from 'react';
import Icon from '../../../components/AppIcon';

const PricingTrends = () => {
  const trendData = [
    {
      period: 'Morning Rush (6-9 AM)',
      icon: 'Sunrise',
      demand: 'High',
      multiplier: '1.2x',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      description: 'Airport and business district routes see increased demand'
    },
    {
      period: 'Midday (9 AM-4 PM)',
      icon: 'Sun',
      demand: 'Normal',
      multiplier: '1.0x',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      description: 'Standard pricing across all routes'
    },
    {
      period: 'Evening Rush (4-7 PM)',
      icon: 'Sunset',
      demand: 'High',
      multiplier: '1.3x',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      description: 'Peak pricing for return commutes and airport transfers'
    },
    {
      period: 'Night (7 PM-6 AM)',
      icon: 'Moon',
      demand: 'Low',
      multiplier: '0.9x',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      description: 'Reduced rates for late-night travel'
    }
  ];

  const weeklyTrends = [
    { day: 'Mon', demand: 85, color: 'bg-primary' },
    { day: 'Tue', demand: 90, color: 'bg-primary' },
    { day: 'Wed', demand: 88, color: 'bg-primary' },
    { day: 'Thu', demand: 92, color: 'bg-primary' },
    { day: 'Fri', demand: 95, color: 'bg-accent' },
    { day: 'Sat', demand: 70, color: 'bg-green-500' },
    { day: 'Sun', demand: 65, color: 'bg-green-500' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
            <Icon name="TrendingUp" size={20} color="var(--color-primary)" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Daily Pricing Trends</h2>
        </div>

        <div className="space-y-4">
          {trendData?.map((trend, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-300"
            >
              <div className={`w-12 h-12 ${trend?.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon name={trend?.icon} size={24} className={trend?.color} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-foreground">{trend?.period}</h3>
                  <span className={`text-lg font-bold ${trend?.color}`}>
                    {trend?.multiplier}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-xs font-medium text-muted-foreground">Demand:</span>
                  <span className={`text-xs font-semibold ${trend?.color}`}>
                    {trend?.demand}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{trend?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Weekly Demand Pattern</h3>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Calendar" size={16} />
            <span>Last 7 Days</span>
          </div>
        </div>

        <div className="flex items-end justify-between space-x-2 h-48">
          {weeklyTrends?.map((day, index) => (
            <div key={index} className="flex-1 flex flex-col items-center space-y-2">
              <div className="w-full flex flex-col items-center justify-end h-40">
                <div
                  className={`w-full ${day?.color} rounded-t-lg transition-all duration-500`}
                  style={{ height: `${day?.demand}%` }}
                />
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-foreground">{day?.day}</p>
                <p className="text-xs text-muted-foreground">{day?.demand}%</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center space-x-6 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded" />
            <span className="text-muted-foreground">Weekday</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-accent rounded" />
            <span className="text-muted-foreground">Friday</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded" />
            <span className="text-muted-foreground">Weekend</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTrends;