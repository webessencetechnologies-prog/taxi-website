import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RouteCard = ({ route, onSelectRoute, onCalculateFare }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-success bg-success/10';
      case 'Moderate':
        return 'text-warning bg-warning/10';
      case 'Challenging':
        return 'text-error bg-error/10';
      default:
        return 'text-muted bg-muted';
    }
  };

  const getTrafficColor = (traffic) => {
    switch (traffic) {
      case 'Light':
        return 'text-success';
      case 'Moderate':
        return 'text-warning';
      case 'Heavy':
        return 'text-error';
      default:
        return 'text-muted';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="MapPin" size={20} color="var(--color-primary)" />
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {route?.name}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">{route?.description}</p>
        </div>
        <div className={`px-3 py-1 rounded-lg text-xs font-medium ${getDifficultyColor(route?.difficulty)}`}>
          {route?.difficulty}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Icon name="Navigation" size={16} color="var(--color-muted-foreground)" />
          <div>
            <p className="text-xs text-muted-foreground">Distance</p>
            <p className="text-sm font-semibold text-foreground">{route?.distance}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Clock" size={16} color="var(--color-muted-foreground)" />
          <div>
            <p className="text-xs text-muted-foreground">Duration</p>
            <p className="text-sm font-semibold text-foreground">{route?.duration}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="DollarSign" size={16} color="var(--color-muted-foreground)" />
          <div>
            <p className="text-xs text-muted-foreground">Est. Fare</p>
            <p className="text-sm font-semibold text-primary">{route?.estimatedFare}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="TrendingUp" size={16} className={getTrafficColor(route?.traffic)} />
          <div>
            <p className="text-xs text-muted-foreground">Traffic</p>
            <p className={`text-sm font-semibold ${getTrafficColor(route?.traffic)}`}>
              {route?.traffic}
            </p>
          </div>
        </div>
      </div>
      {route?.landmarks && route?.landmarks?.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2">Key Landmarks:</p>
          <div className="flex flex-wrap gap-2">
            {route?.landmarks?.map((landmark, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted rounded-md text-xs text-foreground"
              >
                {landmark}
              </span>
            ))}
          </div>
        </div>
      )}
      {route?.alternativeRoutes && route?.alternativeRoutes?.length > 0 && (
        <div className="mb-4 p-3 bg-muted/50 rounded-lg">
          <p className="text-xs font-medium text-foreground mb-2 flex items-center">
            <Icon name="GitBranch" size={14} className="mr-1" />
            Alternative Routes Available: {route?.alternativeRoutes?.length}
          </p>
        </div>
      )}
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          fullWidth
          iconName="Calculator"
          iconPosition="left"
          onClick={() => onCalculateFare(route)}
        >
          Calculate Fare
        </Button>
        <Button
          variant="default"
          size="sm"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => onSelectRoute(route)}
        >
          Select Route
        </Button>
      </div>
    </div>
  );
};

export default RouteCard;