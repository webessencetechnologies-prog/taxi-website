import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import PriceCalculator from './components/PriceCalculator';
import PriceBreakdown from './components/PriceBreakdown';
import PriceComparisonChart from './components/PriceComparisonChart';
import PricingTrends from './components/PricingTrends';
import GroupDiscounts from './components/GroupDiscounts';
import PriceAlerts from './components/PriceAlerts';

const PricingDashboard = () => {
  const [calculation, setCalculation] = useState(null);
  const [activeTab, setActiveTab] = useState('calculator');

  const tabs = [
    { id: 'calculator', label: 'Fare Calculator', icon: 'Calculator' },
    { id: 'comparison', label: 'Compare Vehicles', icon: 'BarChart3' },
    { id: 'trends', label: 'Pricing Trends', icon: 'TrendingUp' },
    { id: 'discounts', label: 'Discounts', icon: 'Percent' },
    { id: 'alerts', label: 'Price Alerts', icon: 'Bell' }
  ];

  const features = [
    {
      icon: 'Shield',
      title: 'No Hidden Fees',
      description: 'What you see is what you pay - guaranteed transparent pricing'
    },
    {
      icon: 'Clock',
      title: 'Real-Time Rates',
      description: 'Live pricing updates based on current demand and availability'
    },
    {
      icon: 'TrendingDown',
      title: 'Best Price Promise',
      description: 'Competitive rates with automatic group and loyalty discounts'
    },
    {
      icon: 'Calculator',
      title: 'Instant Estimates',
      description: 'Calculate exact fares before booking with our smart calculator'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Icon name="DollarSign" size={16} />
                <span>Transparent Pricing Dashboard</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Know Your Price,
                <span className="text-primary"> Know Your Route</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Calculate exact fares, compare vehicle options, and discover the best deals for your journey. Complete transparency, no surprises.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features?.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name={feature?.icon} size={20} color="var(--color-primary)" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {feature?.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{feature?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-xl border border-border p-2 mb-8 overflow-x-auto">
              <div className="flex space-x-2 min-w-max">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                      activeTab === tab?.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-muted'
                    }`}
                  >
                    <Icon name={tab?.icon} size={18} />
                    <span className="font-medium">{tab?.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'calculator' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PriceCalculator onCalculate={setCalculation} />
                <PriceBreakdown calculation={calculation} />
              </div>
            )}

            {activeTab === 'comparison' && <PriceComparisonChart />}

            {activeTab === 'trends' && <PricingTrends />}

            {activeTab === 'discounts' && <GroupDiscounts />}

            {activeTab === 'alerts' && <PriceAlerts />}
          </div>
        </section> */}

        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-lg">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" size={32} color="var(--color-primary)" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Questions About Pricing?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Our team is here to help you understand our transparent pricing structure and find the best rates for your journey.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 rounded-lg p-6 border border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Icon name="Phone" size={20} color="var(--color-primary)" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Call Us</h3>
                        <p className="text-sm text-muted-foreground">Available 24/7</p>
                      </div>
                    </div>
                    <a
                      href="tel:++919409713448"
                      className="text-primary hover:text-primary/80 font-semibold"
                    >
                      +919409713448
                    </a>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-6 border border-border">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Icon name="MessageCircle" size={20} color="var(--color-primary)" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">WhatsApp</h3>
                        <p className="text-sm text-muted-foreground">Instant response</p>
                      </div>
                    </div>
                    <button
                      onClick={() => window.open('https://wa.me/+919409713448', '_blank')}
                      className="text-primary hover:text-primary/80 font-semibold"
                    >
                      Chat Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingDashboard;