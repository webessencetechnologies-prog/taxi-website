import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const quickActions = [
    {
      icon: "Phone",
      title: "Call Now",
      description: "Speak directly with our dispatch team",
      action: () => window.location.href = 'tel:+1234567890',
      buttonText: "Call +1 (234) 567-890",
      variant: "outline"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      description: "Quick booking via instant messaging",
      action: () => window.open('https://wa.me/1234567890', '_blank'),
      buttonText: "Open WhatsApp",
      variant: "default"
    },
    {
      icon: "Mail",
      title: "Email Us",
      description: "For inquiries and special requests",
      action: () => window.location.href = 'mailto:info@taxiflow.com',
      buttonText: "Send Email",
      variant: "outline"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 text-primary-foreground">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={24} color="currentColor" />
                  </div>
                  <span className="text-2xl font-bold font-accent">ShivSakti Travels</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Experience Transparent Travel?
                </h2>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  Join thousands of satisfied passengers who choose clarity over confusion. Book your ride with complete price transparency and direct driver communication.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} color="currentColor" />
                    <span className="text-sm">Know your exact fare before booking</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} color="currentColor" />
                    <span className="text-sm">Direct communication with verified drivers</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} color="currentColor" />
                    <span className="text-sm">Pre-planned routes with distance clarity</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} color="currentColor" />
                    <span className="text-sm">No surge pricing, no hidden fees</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <Icon name="Star" size={24} color="currentColor" />
                    <div>
                      <div className="text-2xl font-bold">4.9/5.0</div>
                      <div className="text-sm text-primary-foreground/80">Average Rating from 500+ Passengers</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get Started in Seconds
                </h3>

                <div className="space-y-4 mb-8">
                  {quickActions?.map((action, index) => (
                    <div
                      key={index}
                      className="bg-muted rounded-xl p-4 border border-border hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={action?.icon} size={24} color="var(--color-primary)" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{action?.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{action?.description}</p>
                          <Button
                            variant={action?.variant}
                            size="sm"
                            fullWidth
                            onClick={action?.action}
                          >
                            {action?.buttonText}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    Or explore our services
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/fleet-gallery">
                      <Button variant="outline" size="sm" fullWidth iconName="Car" iconPosition="left">
                        View Fleet
                      </Button>
                    </Link>
                    <Link to="/route-planner">
                      <Button variant="outline" size="sm" fullWidth iconName="Map" iconPosition="left">
                        Plan Route
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Available 24/7 for your convenience
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} color="var(--color-primary)" />
                <span className="text-sm text-foreground">Round-the-clock service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={20} color="var(--color-primary)" />
                <span className="text-sm text-foreground">15+ cities covered</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={20} color="var(--color-primary)" />
                <span className="text-sm text-foreground">Fully insured rides</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;