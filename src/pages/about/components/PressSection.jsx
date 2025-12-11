import React from 'react';
import Icon from '../../../components/AppIcon';

const PressSection = () => {
  const pressReleases = [
    {
      date: "December 2024",
      title: "ShivSakti Travels Expands Fleet with 20 New Eco-Friendly Vehicles",
      excerpt: "Leading the way in sustainable urban transportation with significant investment in hybrid and electric vehicles.",
      source: "Business Wire",
      link: "#"
    },
    {
      date: "November 2024",
      title: "Partnership Announcement: TechCorp Solutions Chooses ShivSakti Travels",
      excerpt: "Major technology company selects ShivSakti Travels as exclusive corporate transportation partner for 500+ employees.",
      source: "Tech News Daily",
      link: "#"
    },
    {
      date: "October 2024",
      title: "ShivSakti Travels Achieves 10,000 Satisfied Passengers Milestone",
      excerpt: "Celebrating exceptional growth while maintaining 5-star service ratings and customer satisfaction.",
      source: "City Business Journal",
      link: "#"
    },
    {
      date: "September 2024",
      title: "Innovation in Customer Experience: Direct Driver Communication",
      excerpt: "ShivSakti Travels introduces revolutionary transparent pricing and direct driver contact features.",
      source: "Transportation Today",
      link: "#"
    }
  ];

  const mediaKit = [
    {
      icon: "FileText",
      title: "Company Fact Sheet",
      description: "Comprehensive overview of ShivSakti Travels services, fleet, and achievements.",
      format: "PDF"
    },
    {
      icon: "Image",
      title: "Brand Assets",
      description: "Logos, color palettes, and brand guidelines for media use.",
      format: "ZIP"
    },
    {
      icon: "Users",
      title: "Leadership Bios",
      description: "Executive team profiles and high-resolution photos.",
      format: "PDF"
    },
    {
      icon: "BarChart",
      title: "Company Statistics",
      description: "Key metrics, growth data, and service statistics.",
      format: "PDF"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Press & Media
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Stay updated with the latest news, announcements, and media coverage about ShivSakti Travels.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Recent Press Releases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pressReleases?.map((release, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded">
                    {release?.date}
                  </span>
                  <Icon name="ExternalLink" size={16} color="var(--color-muted-foreground)" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                  {release?.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {release?.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Source: {release?.source}
                  </span>
                  <a
                    href={release?.link}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Media Kit
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mediaKit?.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item?.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {item?.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item?.description}
                </p>
                <div className="inline-flex items-center space-x-2 text-primary">
                  <Icon name="Download" size={16} />
                  <span className="text-sm font-medium">{item?.format}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
          <Icon name="Mail" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Media Inquiries
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            For press inquiries, interview requests, or additional information, please contact our media relations team.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-foreground">
              <Icon name="Mail" size={20} color="var(--color-primary)" />
              <a
                href="mailto:press@taxiflow.com"
                className="text-lg hover:text-primary transition-colors"
              >
                press@taxiflow.com
              </a>
            </div>
            <div className="flex items-center justify-center space-x-2 text-foreground">
              <Icon name="Phone" size={20} color="var(--color-primary)" />
              <a
                href="tel:+1234567891"
                className="text-lg hover:text-primary transition-colors"
              >
                +1 (234) 567-891
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressSection;