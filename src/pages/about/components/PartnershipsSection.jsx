import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnershipsSection = () => {
  const partners = [
  {
    name: "TechCorp Solutions",
    type: "Corporate Partner",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_154f20177-1764661576649.png",
    logoAlt: "Modern tech company logo with blue and white geometric design representing innovation and technology",
    description: "Providing reliable transportation for 500+ employees with dedicated corporate accounts and priority booking.",
    since: "2021"
  },
  {
    name: "Grand Plaza Hotel",
    type: "Hospitality Partner",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7538bf3-1764733754738.png",
    logoAlt: "Luxury hotel logo featuring elegant gold and black design with classic architectural elements",
    description: "Exclusive airport transfer service for hotel guests with seamless booking integration and premium vehicles.",
    since: "2020"
  },
  {
    name: "City Medical Center",
    type: "Healthcare Partner",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1aaa7878f-1764674639799.png",
    logoAlt: "Healthcare facility logo with medical cross symbol in calming blue and white color scheme",
    description: "Reliable patient transportation services with trained drivers and accessible vehicles for medical appointments.",
    since: "2022"
  },
  {
    name: "Metro Business Park",
    type: "Commercial Partner",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17c0a1322-1764880280688.png",
    logoAlt: "Modern business park logo featuring sleek glass building design in professional gray and silver tones",
    description: "Daily shuttle services for business park tenants with flexible scheduling and corporate billing options.",
    since: "2023"
  }];


  const communityInitiatives = [
  {
    icon: "GraduationCap",
    title: "Student Discount Program",
    description: "20% off rides for verified students supporting education and affordable transportation."
  },
  {
    icon: "Heart",
    title: "Senior Citizen Support",
    description: "Special assistance and priority booking for elderly passengers with mobility needs."
  },
  {
    icon: "Users",
    title: "Community Events",
    description: "Free transportation services for local charity events and community gatherings."
  },
  {
    icon: "Briefcase",
    title: "Job Creation",
    description: "Providing employment opportunities for local drivers with comprehensive training programs."
  }];


  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Partnerships & Community
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Building strong relationships with local businesses and giving back to the community that supports us.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Our Trusted Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partners?.map((partner, index) =>
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300">

                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-border">
                    <Image
                    src={partner?.logo}
                    alt={partner?.logoAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {partner?.name}
                      </h4>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        Since {partner?.since}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {partner?.type}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {partner?.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Community Initiatives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {communityInitiatives?.map((initiative, index) =>
            <div
              key={index}
              className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">

                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={initiative?.icon} size={28} color="var(--color-primary)" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {initiative?.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {initiative?.description}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
          <Icon name="Handshake" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Interested in Partnership?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking to collaborate with businesses and organizations that share our values of transparency, quality, and community service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:partnerships@taxiflow.com"
              className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">

              <Icon name="Mail" size={20} />
              <span>partnerships@taxiflow.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center space-x-2 bg-background border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors">

              <Icon name="Phone" size={20} />
              <span>+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default PartnershipsSection;