import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const founders = [
  {
    name: "Michael Rodriguez",
    role: "Founder & CEO",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f383ff29-1763295330729.png",
    imageAlt: "Professional headshot of Hispanic male founder with short dark hair wearing navy blue suit and white shirt with confident smile",
    bio: "Former transportation industry executive with 15 years of experience. Michael founded TaxiFlow with a vision to bring transparency and personal connection back to urban mobility.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sarah Chen",
    role: "Co-Founder & COO",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10d60e496-1763295319842.png",
    imageAlt: "Professional headshot of Asian female co-founder with long dark hair wearing black blazer with warm professional smile",
    bio: "Technology strategist and operations expert. Sarah brings innovative solutions to fleet management and customer experience, ensuring every journey exceeds expectations.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "David Thompson",
    role: "Head of Fleet Operations",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_197f1fa7d-1763300617923.png",
    imageAlt: "Professional headshot of Caucasian male operations head with short blonde hair wearing gray suit with friendly approachable expression",
    bio: "Automotive industry veteran with expertise in vehicle maintenance and driver training. David ensures our fleet maintains the highest standards of safety and comfort.",
    linkedin: "https://linkedin.com"
  }];


  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Passionate professionals dedicated to transforming your travel experience through innovation, transparency, and genuine care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {founders?.map((founder, index) =>
          <div
            key={index}
            className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

              <div className="relative h-80 overflow-hidden">
                <Image
                src={founder?.image}
                alt={founder?.imageAlt}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {founder?.name}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {founder?.role}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {founder?.bio}
                </p>

                <a
                href={founder?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">

                  <Icon name="Linkedin" size={18} />
                  <span className="text-sm font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default TeamSection;