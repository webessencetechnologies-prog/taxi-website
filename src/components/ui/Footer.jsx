import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import Input from './Input';

const Footer = () => {
  const [email, setEmail] = React.useState('');
  const [subscribed, setSubscribed] = React.useState(false);

  const handleSubscribe = (e) => {
    e?.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const quickLinks = [
    { path: '/homepage', label: 'Home' },
    { path: '/fleet-gallery', label: 'Fleet Gallery' },
    { path: '/route-planner', label: 'Route Planner' },
    { path: '/pricing-dashboard', label: 'Pricing' },
    { path: '/contact-hub', label: 'Contact' },
    { path: '/about', label: 'About Us' }
  ];

  const services = [
    'Airport Transfers',
    'City Tours',
    'Corporate Travel',
    'Long Distance',
    'Hourly Rentals',
    'Special Events'
  ];

  const socialLinks = [
    { icon: 'Facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'Twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'Instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'Linkedin', url: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} color="var(--color-primary)" />
              </div>
              <span className="text-xl font-semibold font-accent text-foreground">
                Shivru Cabs
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transparent journeys, trusted connections. Experience ride-hailing with human touch and complete pricing clarity.
            </p>
            <div className="flex space-x-3">
              {socialLinks?.map((social) => (
                <a
                  key={social?.label}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                  aria-label={social?.label}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks?.map((link) => (
                <li key={link?.path}>
                  <Link
                    to={link?.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services?.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Informed</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get route updates and fare alerts delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
                required
                disabled={subscribed}
              />
              <Button
                type="submit"
                variant="default"
                size="default"
                fullWidth
                disabled={subscribed}
                iconName={subscribed ? 'Check' : 'Send'}
                iconPosition="right"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Shivru Cabs. All rights reserved.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={18} color="var(--color-primary)" />
                <a
                  href="tel:++919409713448"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  +919409713448
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={18} color="var(--color-primary)" />
                <a
                  href="mailto:rajputprabhunath@gmail.com"
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  rajputprabhunath@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.location.href = 'tel:++919409713448'}
              >
                Call Now
              </Button>
              <Button
                variant="default"
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => window.open('https://wa.me/+919409713448', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;