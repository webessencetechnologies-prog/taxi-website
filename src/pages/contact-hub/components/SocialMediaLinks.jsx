import React from 'react';
import Icon from '../../../components/AppIcon';

const SocialMediaLinks = () => {
  const socialChannels = [
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: 'https://facebook.com/taxiflow',
      description: 'Follow for updates and promotions',
      color: '#1877F2'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: 'https://twitter.com/taxiflow',
      description: 'Real-time service updates',
      color: '#1DA1F2'
    },
    {
      name: 'Instagram',
      icon: 'Instagram',
      url: 'https://instagram.com/taxiflow',
      description: 'Behind the scenes content',
      color: '#E4405F'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://linkedin.com/company/taxiflow',
      description: 'Professional network',
      color: '#0A66C2'
    }
  ];

  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <h3 className="text-xl font-semibold text-foreground mb-4">Connect on Social Media</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Follow us for the latest updates, promotions, and customer service support
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialChannels?.map((channel) => (
          <a
            key={channel?.name}
            href={channel?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-lg bg-muted group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
              <Icon name={channel?.icon} size={24} color={channel?.color} />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-foreground">{channel?.name}</h4>
              <p className="text-xs text-muted-foreground">{channel?.description}</p>
            </div>
            <Icon name="ExternalLink" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaLinks;