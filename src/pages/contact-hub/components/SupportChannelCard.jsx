import React from 'react';
import Icon from '../../../components/AppIcon';

const SupportChannelCard = ({ icon, title, availability, description, action }) => {
  return (
    <div 
      onClick={action}
      className="bg-card rounded-xl p-6 border border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
          <Icon name={icon} size={24} color="var(--color-primary)" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded-full">
              {availability}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SupportChannelCard;