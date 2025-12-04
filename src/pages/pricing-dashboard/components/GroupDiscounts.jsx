import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GroupDiscounts = () => {
  const discountTiers = [
    {
      passengers: '2-3',
      discount: '5%',
      icon: 'Users',
      color: 'bg-blue-500',
      description: 'Small group discount for couples and friends',
      savings: 'Save $2-5 per trip'
    },
    {
      passengers: '4-5',
      discount: '10%',
      icon: 'Users2',
      color: 'bg-primary',
      description: 'Family discount for larger groups',
      savings: 'Save $5-10 per trip',
      popular: true
    },
    {
      passengers: '6+',
      discount: '15%',
      icon: 'UsersRound',
      color: 'bg-green-500',
      description: 'Group travel discount for events and tours',
      savings: 'Save $10-20 per trip'
    }
  ];

  const corporatePackages = [
    {
      name: 'Business Starter',
      trips: '10 trips/month',
      discount: '12%',
      features: ['Priority booking', 'Monthly invoice', 'Dedicated support']
    },
    {
      name: 'Corporate Plus',
      trips: '25 trips/month',
      discount: '18%',
      features: ['All Starter features', 'Account manager', 'Custom routes']
    },
    {
      name: 'Enterprise',
      trips: '50+ trips/month',
      discount: '25%',
      features: ['All Plus features', 'Volume pricing', 'API integration']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
            <Icon name="Percent" size={20} color="var(--color-primary)" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Group Booking Discounts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {discountTiers?.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-muted/50 rounded-lg p-5 border ${
                tier?.popular ? 'border-primary' : 'border-border'
              } hover:border-primary/50 transition-all duration-300`}
            >
              {tier?.popular && (
                <div className="absolute -top-3 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`w-14 h-14 ${tier?.color} rounded-lg flex items-center justify-center mb-4`}>
                <Icon name={tier?.icon} size={28} color="#FFFFFF" />
              </div>

              <div className="mb-4">
                <div className="flex items-baseline space-x-2 mb-1">
                  <span className="text-3xl font-bold text-primary">{tier?.discount}</span>
                  <span className="text-sm text-muted-foreground">OFF</span>
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  {tier?.passengers} Passengers
                </p>
                <p className="text-xs text-muted-foreground">{tier?.description}</p>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-success">
                  <Icon name="TrendingDown" size={16} />
                  <span className="font-medium">{tier?.savings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={18} color="var(--color-primary)" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground mb-1">
                Automatic Discount Application
              </p>
              <p className="text-xs text-muted-foreground">
                Group discounts are automatically applied when you select the number of passengers during booking. No promo code needed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon name="Briefcase" size={20} color="var(--color-primary)" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Corporate Packages</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {corporatePackages?.map((pkg, index) => (
            <div
              key={index}
              className="bg-muted/50 rounded-lg p-5 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">{pkg?.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{pkg?.trips}</p>

              <div className="flex items-baseline space-x-2 mb-4">
                <span className="text-2xl font-bold text-primary">{pkg?.discount}</span>
                <span className="text-sm text-muted-foreground">Discount</span>
              </div>

              <ul className="space-y-2 mb-4">
                {pkg?.features?.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupDiscounts;