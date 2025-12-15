import React from 'react';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-background py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Zap" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Redefining Urban Mobility</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Your Reliable Travel Partner Who Knows{' '}
            <span className="text-primary">Exactly What You Need</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Shivru Cabs, we believe every journey should be transparent, personal, and stress-free. We're transforming traditional ride-hailing into a relationship-driven service where you know your route, your price, and your driver.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <div className="flex items-center space-x-2 bg-card px-6 py-3 rounded-lg border border-border">
              <Icon name="Users" size={20} color="var(--color-primary)" />
              <span className="text-sm font-medium text-foreground">10,000+ Happy Passengers</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-6 py-3 rounded-lg border border-border">
              <Icon name="Car" size={20} color="var(--color-primary)" />
              <span className="text-sm font-medium text-foreground">50+ Premium Vehicles</span>
            </div>
            <div className="flex items-center space-x-2 bg-card px-6 py-3 rounded-lg border border-border">
              <Icon name="Award" size={20} color="var(--color-primary)" />
              <span className="text-sm font-medium text-foreground">5-Star Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;