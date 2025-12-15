import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CallbackRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: '',
    topic: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const topicOptions = [
    { value: 'booking', label: 'Booking Assistance' },
    { value: 'pricing', label: 'Pricing Inquiry' },
    { value: 'route', label: 'Route Information' },
    { value: 'driver', label: 'Driver Availability' },
    { value: 'complaint', label: 'Complaint or Feedback' },
    { value: 'other', label: 'Other' }
  ];

  const timeOptions = [
    { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 4 PM)' },
    { value: 'evening', label: 'Evening (4 PM - 8 PM)' }
  ];

  const handleSubmit = (e) => {
    e?.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', preferredTime: '', topic: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
          <Icon name="PhoneCall" size={24} color="var(--color-primary)" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">Request a Callback</h3>
          <p className="text-sm text-muted-foreground">We'll call you at your preferred time</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          label="Full Name"
          placeholder="Enter your name"
          value={formData?.name}
          onChange={(e) => setFormData({...formData, name: e?.target?.value})}
          required
          disabled={submitted}
        />

        <Input
          type="tel"
          label="Phone Number"
          placeholder="+919409713448"
          value={formData?.phone}
          onChange={(e) => setFormData({...formData, phone: e?.target?.value})}
          required
          disabled={submitted}
        />

        <Select
          label="Topic"
          placeholder="Select a topic"
          options={topicOptions}
          value={formData?.topic}
          onChange={(value) => setFormData({...formData, topic: value})}
          required
          disabled={submitted}
        />

        <Select
          label="Preferred Time"
          placeholder="Select preferred time"
          options={timeOptions}
          value={formData?.preferredTime}
          onChange={(value) => setFormData({...formData, preferredTime: value})}
          required
          disabled={submitted}
        />

        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          disabled={submitted}
          iconName={submitted ? 'Check' : 'Phone'}
          iconPosition="left"
        >
          {submitted ? 'Request Submitted!' : 'Request Callback'}
        </Button>
      </form>
    </div>
  );
};

export default CallbackRequestForm;