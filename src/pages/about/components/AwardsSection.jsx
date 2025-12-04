import React from 'react';
import Icon from '../../../components/AppIcon';

const AwardsSection = () => {
  const awards = [
    {
      icon: "Award",
      year: "2024",
      title: "Best Urban Transportation Service",
      organization: "City Business Excellence Awards",
      description: "Recognized for outstanding customer service and innovative approach to ride-hailing."
    },
    {
      icon: "Star",
      year: "2023",
      title: "5-Star Service Excellence",
      organization: "National Transportation Association",
      description: "Achieved highest customer satisfaction ratings across all service categories."
    },
    {
      icon: "TrendingUp",
      year: "2023",
      title: "Fastest Growing Transportation Company",
      organization: "Business Growth Magazine",
      description: "Honored for exceptional growth while maintaining service quality and customer relationships."
    },
    {
      icon: "Shield",
      year: "2022",
      title: "Safety & Reliability Award",
      organization: "Transportation Safety Council",
      description: "Recognized for comprehensive driver training and vehicle maintenance programs."
    },
    {
      icon: "Users",
      year: "2022",
      title: "Community Impact Award",
      organization: "Local Business Chamber",
      description: "Acknowledged for positive contributions to local economy and community partnerships."
    },
    {
      icon: "Sparkles",
      year: "2021",
      title: "Innovation in Customer Experience",
      organization: "Tech & Service Innovation Forum",
      description: "Awarded for pioneering transparent pricing and direct driver communication features."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Awards & Recognition
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our commitment to excellence has been recognized by industry leaders and community organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards?.map((award, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={award?.icon} size={24} color="var(--color-primary)" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                      {award?.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 leading-tight">
                    {award?.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {award?.organization}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;