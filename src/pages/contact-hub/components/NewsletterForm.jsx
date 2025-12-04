import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState({
    routeUpdates: false,
    fareAlerts: false,
    driverAvailability: false,
    promotions: false
  });
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (email && Object.values(preferences)?.some(v => v)) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setPreferences({
          routeUpdates: false,
          fareAlerts: false,
          driverAvailability: false,
          promotions: false
        });
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-semibold text-foreground mb-2">Stay Informed</h3>
        <p className="text-muted-foreground">Get personalized updates delivered to your inbox</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          required
          disabled={subscribed}
        />

        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">Notification Preferences</p>
          <Checkbox
            label="Route Updates"
            description="New routes and schedule changes"
            checked={preferences?.routeUpdates}
            onChange={(e) => setPreferences({...preferences, routeUpdates: e?.target?.checked})}
            disabled={subscribed}
          />
          <Checkbox
            label="Fare Alerts"
            description="Price changes and special offers"
            checked={preferences?.fareAlerts}
            onChange={(e) => setPreferences({...preferences, fareAlerts: e?.target?.checked})}
            disabled={subscribed}
          />
          <Checkbox
            label="Driver Availability"
            description="Preferred driver status updates"
            checked={preferences?.driverAvailability}
            onChange={(e) => setPreferences({...preferences, driverAvailability: e?.target?.checked})}
            disabled={subscribed}
          />
          <Checkbox
            label="Promotions"
            description="Exclusive deals and discounts"
            checked={preferences?.promotions}
            onChange={(e) => setPreferences({...preferences, promotions: e?.target?.checked})}
            disabled={subscribed}
          />
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          disabled={subscribed}
          iconName={subscribed ? 'Check' : 'Send'}
          iconPosition="right"
        >
          {subscribed ? 'Subscribed Successfully!' : 'Subscribe Now'}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterForm;