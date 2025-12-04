import React from 'react';

import Icon from '../../../components/AppIcon';

const StorySection = () => {
  const timeline = [
    {
      year: "2020",
      title: "The Beginning",
      description: "Founded with a vision to transform urban mobility through transparency and personal connection. Started with 5 vehicles and a commitment to excellence."
    },
    {
      year: "2021",
      title: "Growth & Trust",
      description: "Expanded fleet to 20 vehicles and introduced direct driver communication. Built strong relationships with local businesses and regular commuters."
    },
    {
      year: "2022",
      title: "Innovation",
      description: "Launched interactive route planner and transparent pricing calculator. Achieved 5-star average rating across all service categories."
    },
    {
      year: "2023",
      title: "Community Impact",
      description: "Reached 10,000+ satisfied passengers and 50+ premium vehicles. Established partnerships with major corporations and local organizations."
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Continuing to innovate with enhanced booking technology while maintaining our core values of transparency and personal service."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From a small fleet with big dreams to a trusted name in urban transportation, TaxiFlow has always prioritized people over profits and relationships over transactions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>

            {timeline?.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'
                }`}
              >
                <div className={`flex items-center mb-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 border-4 border-card"></div>
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                    <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Icon name="Calendar" size={16} color="var(--color-primary)" />
                      <span className="text-sm font-semibold text-primary">{item?.year}</span>
                    </div>
                  </div>
                </div>

                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                  <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item?.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;