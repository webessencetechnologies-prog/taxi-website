import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/homepage', label: 'Home', icon: 'Home' },
    { path: '/fleet-gallery', label: 'Fleet', icon: 'Car' },
    { path: '/route-planner', label: 'Routes', icon: 'Map' },
    { path: '/pricing-dashboard', label: 'Pricing', icon: 'DollarSign' },
    { path: '/contact-hub', label: 'Contact', icon: 'Phone' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/homepage" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-primary/30">
              <Icon name="Zap" size={24} color="var(--color-primary)" />
            </div>
            <span className="text-xl font-semibold font-accent text-foreground">
              ShivSakti Travels
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span className="font-medium">{item?.label}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              size="default"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.location.href = 'tel:++919409713448'}
            >
              Call Now
            </Button>
            <Button
              variant="default"
              size="default"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.open('https://wa.me/+919409713448', '_blank')}
            >
              WhatsApp
            </Button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={toggleMobileMenu}
          />
          <div className="fixed top-16 left-0 right-0 bg-background border-b border-border shadow-lg z-40 lg:hidden animate-slide-up">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={toggleMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-medium">{item?.label}</span>
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  size="default"
                  fullWidth
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => {
                    window.location.href = 'tel:++919409713448';
                    toggleMobileMenu();
                  }}
                >
                  Call Now
                </Button>
                <Button
                  variant="default"
                  size="default"
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={() => {
                    window.open('https://wa.me/+919409713448', '_blank');
                    toggleMobileMenu();
                  }}
                >
                  WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;