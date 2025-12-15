import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = ({ selectedRoute, onRouteHover }) => {
  const [mapView, setMapView] = useState('standard');

  const mapViewOptions = [
    { value: 'standard', label: 'Standard', icon: 'Map' },
    { value: 'satellite', label: 'Satellite', icon: 'Satellite' },
    { value: 'traffic', label: 'Traffic', icon: 'TrendingUp' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden h-full">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Map" size={20} color="var(--color-primary)" />
          <h3 className="font-semibold text-foreground">Interactive Route Map</h3>
        </div>
        <div className="flex space-x-2">
          {mapViewOptions?.map((option) => (
            <button
              key={option?.value}
              onClick={() => setMapView(option?.value)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 flex items-center space-x-1 ${
                mapView === option?.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              <Icon name={option?.icon} size={14} />
              <span>{option?.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="relative h-[500px] bg-muted/30">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Shivru Cabs Route Network Map"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=40.7128,-74.0060&z=12&output=embed"
          className="w-full h-full"
        />

        {selectedRoute && (
          <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg animate-slide-up">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">{selectedRoute?.name}</h4>
                <p className="text-sm text-muted-foreground">{selectedRoute?.description}</p>
              </div>
              <button
                onClick={() => onRouteHover(null)}
                className="p-1 hover:bg-muted rounded-lg transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex items-center space-x-2">
                <Icon name="Navigation" size={16} color="var(--color-primary)" />
                <div>
                  <p className="text-xs text-muted-foreground">Distance</p>
                  <p className="text-sm font-semibold text-foreground">{selectedRoute?.distance}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} color="var(--color-primary)" />
                <div>
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-sm font-semibold text-foreground">{selectedRoute?.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="DollarSign" size={16} color="var(--color-primary)" />
                <div>
                  <p className="text-xs text-muted-foreground">Est. Fare</p>
                  <p className="text-sm font-semibold text-primary">{selectedRoute?.estimatedFare}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <Button
            variant="default"
            size="icon"
            iconName="Plus"
            onClick={() => {}}
            className="shadow-lg"
          />
          <Button
            variant="default"
            size="icon"
            iconName="Minus"
            onClick={() => {}}
            className="shadow-lg"
          />
          <Button
            variant="default"
            size="icon"
            iconName="Maximize"
            onClick={() => {}}
            className="shadow-lg"
          />
        </div>
      </div>
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-success"></div>
              <span className="text-muted-foreground">Light Traffic</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-warning"></div>
              <span className="text-muted-foreground">Moderate Traffic</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <span className="text-muted-foreground">Heavy Traffic</span>
            </div>
          </div>
          <Button variant="ghost" size="sm" iconName="Info" iconPosition="left">
            Map Legend
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;