import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionSection = () => {
  const values = [
    {
      icon: "Shield",
      title: "Trust & Transparency",
      description: "Every fare is clear, every route is predetermined, and every driver is verified. No hidden charges, no surprises—just honest service."
    },
    {
      icon: "Heart",
      title: "Human Connection",
      description: "We believe in relationships over transactions. Direct communication with your driver creates a personal, comfortable travel experience."
    },
    {
      icon: "Target",
      title: "Personalized Service",
      description: "Every ride is crafted around your specific needs—from luggage requirements to route preferences and communication style."
    },
    {
      icon: "Zap",
      title: "Efficiency & Reliability",
      description: "Professional service that respects your time. Punctual pickups, optimal routes, and consistent quality on every journey."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Mission & Values
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're on a mission to eliminate the uncertainty and impersonal nature of ride-booking by creating direct relationships between passengers and drivers. ShivSakti Travels is the artisanal approach to taxi services—where every ride matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values?.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name={value?.icon} size={28} color="var(--color-primary)" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value?.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;