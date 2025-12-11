import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const certifications = [
  {
    id: 1,
    icon: "ShieldCheck",
    title: "Verified Drivers",
    description: "All drivers undergo background checks and professional training"
  },
  {
    id: 2,
    icon: "Award",
    title: "Licensed Vehicles",
    description: "Fleet maintained to highest safety and comfort standards"
  },
  {
    id: 3,
    icon: "Lock",
    title: "Secure Payments",
    description: "Multiple payment options with encrypted transactions"
  },
  {
    id: 4,
    icon: "Headphones",
    title: "24/7 Support",
    description: "Round-the-clock customer service for your peace of mind"
  }];


  const testimonials = [
  {
    id: 1,
    name: "Emily Thompson",
    role: "Business Traveler",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e09d48a8-1764679477791.png",
    imageAlt: "Professional Caucasian woman with blonde hair wearing gray business suit smiling confidently in office setting",
    rating: 5,
    comment: "The transparency in pricing and direct driver communication made my airport transfer stress-free. Knew exactly what I was paying before booking!",
    route: "Airport Express"
  },
  {
    id: 2,
    name: "Robert Martinez",
    role: "Regular Commuter",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_161f5d4cc-1763293647113.png",
    imageAlt: "Professional Hispanic man with short dark hair wearing navy suit and red tie with friendly expression",
    rating: 5,
    comment: "I use ShivSakti Travels daily for my office commute. The same driver, same route, same price - no surprises. It's like having a personal chauffeur!",
    route: "Business District"
  },
  {
    id: 3,
    name: "Lisa Anderson",
    role: "Tourist",
    image: "https://images.unsplash.com/photo-1719174087455-9fe71ca67a7e",
    imageAlt: "Young Caucasian woman with brown hair wearing casual summer dress smiling outdoors with sunglasses",
    rating: 5,
    comment: "Traveling with 4 suitcases was a concern, but the luggage capacity filter helped me find the perfect car. Driver even helped with loading!",
    route: "Shopping Tour"
  }];


  const stats = [
  { label: "Happy Passengers", value: "10,000+", icon: "Users" },
  { label: "Completed Trips", value: "50,000+", icon: "MapPin" },
  { label: "Verified Drivers", value: "200+", icon: "UserCheck" },
  { label: "Cities Covered", value: "15+", icon: "Globe" }];


  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Icon name="Shield" size={20} color="var(--color-primary)" />
            <span className="text-sm font-medium text-primary">Trusted Service</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Passengers Choose ShivSakti Travels
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Safety, transparency, and reliability backed by certifications and real passenger experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications?.map((cert) =>
          <div
            key={cert?.id}
            className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 text-center group">

              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={cert?.icon} size={32} color="var(--color-primary)" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{cert?.title}</h3>
              <p className="text-sm text-muted-foreground">{cert?.description}</p>
            </div>
          )}
        </div>

        <div className="bg-muted rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Real Stories from Real Passengers
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials?.map((testimonial) =>
            <div
              key={testimonial?.id}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">

                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                    <Image
                    src={testimonial?.image}
                    alt={testimonial?.imageAlt}
                    className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial?.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial?.role}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial?.rating)]?.map((_, i) =>
                <Icon key={i} name="Star" size={16} color="var(--color-primary)" />
                )}
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial?.comment}"
                </p>

                <div className="flex items-center space-x-2 text-xs text-primary">
                  <Icon name="MapPin" size={14} />
                  <span>{testimonial?.route}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats?.map((stat, index) =>
          <div
            key={index}
            className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg transition-all duration-300">

              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={24} color="var(--color-primary)" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm text-muted-foreground">{stat?.label}</div>
            </div>
          )}
        </div>
      </div>
    </div>);

};

export default TrustSignals;