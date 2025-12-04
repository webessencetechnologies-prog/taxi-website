import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonPanel = ({ vehicles, onRemove, onClear }) => {
  if (vehicles?.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-2xl z-40 animate-slide-up">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Icon name="GitCompare" size={20} color="var(--color-primary)" />
            <h3 className="font-semibold text-foreground">
              Compare Vehicles ({vehicles?.length}/3)
            </h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClear}
          >
            Clear All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {vehicles?.map((vehicle) => (
            <div key={vehicle?.id} className="bg-background rounded-lg p-4 border border-border relative">
              <button
                onClick={() => onRemove(vehicle?.id)}
                className="absolute top-2 right-2 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:bg-destructive/90 transition-colors"
                aria-label="Remove from comparison"
              >
                <Icon name="X" size={16} />
              </button>

              <div className="flex items-start gap-3">
                <Image
                  src={vehicle?.image}
                  alt={vehicle?.imageAlt}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1 space-y-2">
                  <div>
                    <h4 className="font-semibold text-foreground">{vehicle?.name}</h4>
                    <p className="text-sm text-muted-foreground">{vehicle?.category}</p>
                  </div>
                  <div className="text-lg font-bold text-primary">${vehicle?.pricePerKm}/km</div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={14} />
                      <span>{vehicle?.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Briefcase" size={14} />
                      <span>{vehicle?.luggage}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {vehicles?.length < 3 && (
            <div className="bg-muted rounded-lg p-4 border-2 border-dashed border-border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Icon name="Plus" size={32} className="mx-auto mb-2 opacity-50" />
                <p className="text-sm">Add up to {3 - vehicles?.length} more vehicle{vehicles?.length < 2 ? 's' : ''}</p>
              </div>
            </div>
          )}
        </div>

        {vehicles?.length >= 2 && (
          <div className="mt-4 flex justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="GitCompare"
              iconPosition="left"
            >
              View Detailed Comparison
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparisonPanel;