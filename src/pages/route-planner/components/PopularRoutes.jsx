import React from 'react';
import Icon from '../../../components/AppIcon';

const PopularRoutes = ({ routes, onSelectRoute }) => {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="TrendingUp" size={20} color="var(--color-primary)" />
        <h3 className="font-semibold text-foreground">Popular Routes</h3>
      </div>
      <div className="space-y-3">
        {routes?.map((route, index) => (
          <button
            key={route?.id}
            onClick={() => onSelectRoute(route)}
            className="w-full text-left p-4 bg-muted/50 hover:bg-muted rounded-lg transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {route?.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{route?.distance} • {route?.duration}</p>
                </div>
              </div>
              <Icon name="ChevronRight" size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Est. Fare</span>
              <span className="font-semibold text-primary">{route?.estimatedFare}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;   