import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const PriceAlerts = () => {
  const [email, setEmail] = useState('');
  const [selectedRoute, setSelectedRoute] = useState('');
  const [alertTypes, setAlertTypes] = useState({
    priceDrops: true,
    specialOffers: true,
    weekendDeals: false
  });
  const [subscribed, setSubscribed] = useState(false);

  const routes = [
    { value: 'airport-downtown', label: 'Airport to Downtown' },
    { value: 'downtown-suburbs', label: 'Downtown to Suburbs' },
    { value: 'airport-hotel', label: 'Airport to Hotel District' },
    { value: 'city-tour', label: 'City Tour Route' },
    { value: 'business-district', label: 'Business District Loop' },
    { value: 'coastal-route', label: 'Coastal Scenic Route' }
  ];

  const handleSubscribe = (e) => {
    e?.preventDefault();
    if (email && selectedRoute) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSelectedRoute('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const activeAlerts = [
    {
      route: 'Airport to Downtown',
      type: 'Price Drop',
      icon: 'TrendingDown',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      message: 'Price dropped by 15% for morning trips',
      timestamp: '2 hours ago'
    },
    {
      route: 'City Tour Route',
      type: 'Special Offer',
      icon: 'Tag',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      message: 'Weekend special: 20% off all-day tours',
      timestamp: '5 hours ago'
    },
    {
      route: 'Coastal Scenic Route',
      type: 'Low Demand',
      icon: 'Clock',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      message: 'Best time to book - reduced rates available',
      timestamp: '1 day ago'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
            <Icon name="Bell" size={20} color="var(--color-primary)" />
          </div>
          <h2 className="text-xl font-semibold text-foreground">Set Price Alerts</h2>
        </div>

        <form onSubmit={handleSubscribe} className="space-y-4">
          <Input
            type="email"
            label="Email Address"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            required
            disabled={subscribed}
          />

          <Select
            label="Select Route"
            placeholder="Choose route to monitor"
            options={routes}
            value={selectedRoute}
            onChange={setSelectedRoute}
            required
            searchable
            disabled={subscribed}
          />

          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Alert Preferences</label>
            <Checkbox
              label="Price Drops"
              description="Get notified when prices decrease"
              checked={alertTypes?.priceDrops}
              onChange={(e) => setAlertTypes({ ...alertTypes, priceDrops: e?.target?.checked })}
              disabled={subscribed}
            />
            <Checkbox
              label="Special Offers"
              description="Receive exclusive deals and promotions"
              checked={alertTypes?.specialOffers}
              onChange={(e) => setAlertTypes({ ...alertTypes, specialOffers: e?.target?.checked })}
              disabled={subscribed}
            />
            <Checkbox
              label="Weekend Deals"
              description="Weekend-specific pricing alerts"
              checked={alertTypes?.weekendDeals}
              onChange={(e) => setAlertTypes({ ...alertTypes, weekendDeals: e?.target?.checked })}
              disabled={subscribed}
            />
          </div>

          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            iconName={subscribed ? 'Check' : 'Bell'}
            iconPosition="right"
            disabled={subscribed}
          >
            {subscribed ? 'Alert Set Successfully!' : 'Set Price Alert'}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={18} className="text-muted-foreground mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                You'll receive email notifications when prices drop or special offers become available for your selected route. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Recent Price Alerts</h3>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Clock" size={16} />
            <span>Last 24 Hours</span>
          </div>
        </div>

        <div className="space-y-3">
          {activeAlerts?.map((alert, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors duration-300"
            >
              <div className={`w-12 h-12 ${alert?.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Icon name={alert?.icon} size={24} className={alert?.color} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground">{alert?.route}</h4>
                  <span className={`text-xs font-semibold ${alert?.color}`}>
                    {alert?.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{alert?.message}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{alert?.timestamp}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceAlerts;