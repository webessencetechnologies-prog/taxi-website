import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import ContactCard from './components/ContactCard';
import FAQItem from './components/FAQItem';
import SupportChannelCard from './components/SupportChannelCard';
import NewsletterForm from './components/NewsletterForm';
import LiveChatWidget from './components/LiveChatWidget';
import CallbackRequestForm from './components/CallbackRequestForm';
import SocialMediaLinks from './components/SocialMediaLinks';

const ContactHub = () => {
  const primaryContacts = [
    {
      icon: 'MessageCircle',
      title: 'WhatsApp Support',
      description: 'Instant messaging with our support team. Get quick responses to your booking questions and route inquiries.',
      action: () => window.open('https://wa.me/+919409713448', '_blank'),
      actionLabel: 'Open WhatsApp',
      variant: 'primary'
    },
    {
      icon: 'Phone',
      title: 'Call Us Directly',
      description: 'Speak with our customer service team. Available 24/7 for urgent booking assistance and support.',
      action: () => window.location.href = 'tel:++919409713448',
      actionLabel: 'Call Now',
      variant: 'success'
    },
    {
      icon: 'Mail',
      title: 'Email Support',
      description: 'Send us detailed inquiries. We respond within 24 hours to all email communications.',
      action: () => window.location.href = 'mailto:support@taxiflow.com',
      actionLabel: 'Send Email',
      variant: 'default'
    }
  ];

  const supportChannels = [
    {
      icon: 'MessageSquare',
      title: 'Live Chat',
      availability: 'Online Now',
      description: 'Chat with our support team in real-time for immediate assistance',
      action: () => {}
    },
    {
      icon: 'Ticket',
      title: 'Support Tickets',
      availability: '24/7',
      description: 'Submit a detailed support ticket for complex issues',
      action: () => {}
    },
    {
      icon: 'Video',
      title: 'Video Call Support',
      availability: 'By Appointment',
      description: 'Schedule a video call for personalized assistance',
      action: () => {}
    },
    {
      icon: 'FileText',
      title: 'Help Center',
      availability: 'Always Available',
      description: 'Browse our comprehensive knowledge base and guides',
      action: () => {}
    }
  ];

  const faqData = [
    {
      question: 'How do I book a taxi through Shivru Cabs?',
      answer: 'Booking is simple! Select your route from our Route Planner, browse available vehicles in our Fleet Gallery, compare pricing, and contact your preferred driver directly via WhatsApp or phone. You can also use our quick booking feature on the homepage for instant reservations.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, all major credit cards (Visa, Mastercard, American Express), debit cards, and digital payment methods including Apple Pay and Google Pay. Payment can be made directly to the driver or through our secure online payment system.'
    },
    {
      question: 'Can I cancel or modify my booking?',
      answer: 'Yes, you can cancel or modify your booking up to 2 hours before the scheduled pickup time without any charges. For cancellations within 2 hours, a small cancellation fee may apply. Contact your driver directly or reach out to our support team for assistance.'
    },
    {
      question: 'How is the fare calculated?',
      answer: 'Our fares are transparent and route-based. The price depends on the distance, vehicle type, and any additional services like luggage handling. Use our Pricing Dashboard to get an instant fare estimate for your specific route and vehicle choice.'
    },
    {
      question: 'What if I have special luggage requirements?',
      answer: 'Each vehicle in our fleet has detailed luggage capacity information. When browsing our Fleet Gallery, you can filter vehicles by luggage space. For oversized items or special requirements, contact the driver directly before booking to ensure accommodation.'
    },
    {
      question: 'Are your drivers verified and licensed?',
      answer: 'Absolutely! All Shivru Cabs drivers undergo thorough background checks, hold valid commercial driving licenses, and complete our safety training program. You can view driver profiles, ratings, and certifications in our Fleet Gallery.'
    },
    {
      question: 'Do you offer airport transfer services?',
      answer: 'Yes, we specialize in airport transfers! Our Route Planner includes all major airport routes with transparent pricing. We recommend booking at least 24 hours in advance for airport pickups to ensure availability and timely service.'
    },
    {
      question: 'What happens if my driver is late?',
      answer: 'We prioritize punctuality. If your driver is running late, you\'ll receive a notification with updated arrival time. In rare cases of significant delays, contact our support team immediately, and we\'ll arrange an alternative vehicle at no extra cost.'
    },
    {
      question: 'Can I request a specific driver?',
      answer: 'Yes! Once you\'ve had a positive experience with a driver, you can save them as a preferred driver in your account. When booking, you can request your preferred driver if they\'re available for your route and time.'
    },
    {
      question: 'Is there a loyalty program or discount for frequent riders?',
      answer: 'Yes, we offer a loyalty program for regular customers. Earn points with each ride that can be redeemed for discounts on future bookings. Subscribe to our newsletter to receive exclusive fare alerts and promotional offers.'
    }
  ];

  const officeLocations = [
    {
      name: 'Main Office',
      address: '123 Transit Avenue, Downtown District, New York, NY 10001',
      phone: '+919409713448',
      email: 'main@taxiflow.com',
      hours: 'Mon-Fri: 8 AM - 8 PM, Sat-Sun: 9 AM - 6 PM'
    },
    {
      name: 'Airport Hub',
      address: '456 Airport Road, Terminal 2, New York, NY 10002',
      phone: '+1 (234) 567-891',
      email: 'airport@taxiflow.com',
      hours: '24/7 Operations'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-2xl mb-6">
              <Icon name="Headphones" size={40} color="var(--color-primary)" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-accent">
              We're Here to Help
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your trusted communication center for all booking assistance, route inquiries, and customer support needs. Connect with us through your preferred channel.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Quick Contact Options</h2>
              <p className="text-muted-foreground">Choose your preferred way to reach us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {primaryContacts.map((contact, index) => (
                <ContactCard key={index} {...contact} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Support Channels</h2>
              <p className="text-muted-foreground">Multiple ways to get the help you need</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {supportChannels.map((channel, index) => (
                <SupportChannelCard key={index} {...channel} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Find quick answers to common questions</p>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CallbackRequestForm />
              <NewsletterForm />
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <SocialMediaLinks />
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Visit Our Offices</h2>
              <p className="text-muted-foreground">Stop by for in-person assistance</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {officeLocations.map((location, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Icon name="MapPin" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm">{location.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={20} color="var(--color-primary)" className="flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-foreground hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={20} color="var(--color-primary)" className="flex-shrink-0" />
                      <a href={`mailto:${location.email}`} className="text-foreground hover:text-primary transition-colors">
                        {location.email}
                      </a>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Clock" size={20} color="var(--color-primary)" className="flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground text-sm">{location.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center border border-primary/30">
              <Icon name="Shield" size={48} color="var(--color-primary)" className="mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Your Safety is Our Priority</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                All communications are secure and confidential. Our support team follows strict privacy protocols to protect your personal information and booking details.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 bg-background/50 px-4 py-2 rounded-lg">
                  <Icon name="Lock" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Encrypted Communication</span>
                </div>
                <div className="flex items-center space-x-2 bg-background/50 px-4 py-2 rounded-lg">
                  <Icon name="CheckCircle" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">Verified Support Team</span>
                </div>
                <div className="flex items-center space-x-2 bg-background/50 px-4 py-2 rounded-lg">
                  <Icon name="Clock" size={20} color="var(--color-success)" />
                  <span className="text-sm font-medium text-foreground">24/7 Availability</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <LiveChatWidget />
      <Footer />
    </div>
  );
};

export default ContactHub;