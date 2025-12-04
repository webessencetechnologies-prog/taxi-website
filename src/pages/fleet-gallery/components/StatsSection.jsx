import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = ({ totalVehicles, availableVehicles, categories }) => {
  const stats = [
    {
      icon: 'Car',
      label: 'Total Vehicles',
      value: totalVehicles,
      color: 'var(--color-primary)'
    },
    {
      icon: 'CheckCircle',
      label: 'Available Now',
      value: availableVehicles,
      color: 'var(--color-success)'
    },
    {
      icon: 'Grid',
      label: 'Categories',
      value: categories,
      color: 'var(--color-secondary)'
    },
    {
      icon: 'Star',
      label: 'Avg Rating',
      value: '4.8',
      color: 'var(--color-primary)'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats?.map((stat, index) => (
        <div
          key={index}
          className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon name={stat?.icon} size={24} color={stat?.color} />
            </div>
            <div className="text-3xl font-bold text-foreground">{stat?.value}</div>
          </div>
          <div className="text-sm text-muted-foreground">{stat?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;