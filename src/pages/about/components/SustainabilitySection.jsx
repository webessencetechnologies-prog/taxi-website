import React from 'react';
import Icon from '../../../components/AppIcon';

const SustainabilitySection = () => {
  const initiatives = [
    {
      icon: "Leaf",
      title: "Eco-Friendly Fleet",
      description: "Transitioning to hybrid and electric vehicles to reduce carbon footprint. 30% of our fleet now consists of environmentally conscious vehicles.",
      impact: "40% reduction in emissions"
    },
    {
      icon: "Recycle",
      title: "Green Operations",
      description: "Implementing paperless booking systems, digital receipts, and eco-friendly vehicle maintenance practices across all operations.",
      impact: "Zero paper waste"
    },
    {
      icon: "TreePine",
      title: "Carbon Offset Program",
      description: "Partnering with environmental organizations to plant trees and offset carbon emissions from every journey taken.",
      impact: "5,000+ trees planted"
    },
    {
      icon: "Droplet",
      title: "Water Conservation",
      description: "Using water-efficient vehicle cleaning systems and eco-friendly cleaning products at all maintenance facilities.",
      impact: "60% water savings"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Leaf" size={20} color="var(--color-success)" />
            <span className="text-sm font-medium text-success">Sustainability Commitment</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Driving Towards a Greener Future
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe in responsible transportation that cares for our planet. Our sustainability initiatives ensure every journey contributes to a cleaner, healthier environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {initiatives?.map((initiative, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={initiative?.icon} size={28} color="var(--color-success)" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {initiative?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {initiative?.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 bg-success/10 px-3 py-1.5 rounded-lg">
                    <Icon name="TrendingUp" size={16} color="var(--color-success)" />
                    <span className="text-sm font-medium text-success">{initiative?.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-success/5 to-success/10 border border-success/20 rounded-2xl p-8 md:p-12">
          <div className="text-center space-y-6">
            <Icon name="Target" size={48} color="var(--color-success)" className="mx-auto" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Our 2025 Sustainability Goals
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-success">50%</p>
                <p className="text-sm text-muted-foreground">Eco-friendly fleet by end of 2025</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-success">10,000</p>
                <p className="text-sm text-muted-foreground">Trees planted through partnerships</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-success">100%</p>
                <p className="text-sm text-muted-foreground">Carbon-neutral operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;