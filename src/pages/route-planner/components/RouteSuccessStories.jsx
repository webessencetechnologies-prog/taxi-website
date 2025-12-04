import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RouteSuccessStories = ({ stories }) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="Star" size={20} color="var(--color-primary)" />
        <h3 className="font-semibold text-foreground">Success Stories</h3>
      </div>
      <div className="space-y-4">
        {stories?.map((story) => (
          <div key={story?.id} className="p-4 bg-muted/50 rounded-lg">
            <div className="flex items-start space-x-3 mb-3">
              <Image
                src={story?.customerImage}
                alt={story?.customerImageAlt}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground">{story?.customerName}</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        color={i < story?.rating ? 'var(--color-primary)' : 'var(--color-muted)'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{story?.routeName}</p>
              </div>
            </div>
            <p className="text-sm text-foreground mb-2">{story?.review}</p>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <span className="flex items-center space-x-1">
                <Icon name="Calendar" size={12} />
                <span>{story?.date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="CheckCircle" size={12} color="var(--color-success)" />
                <span>Verified Trip</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteSuccessStories;