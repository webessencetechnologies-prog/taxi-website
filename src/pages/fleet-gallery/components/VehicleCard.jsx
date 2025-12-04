import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VehicleCard = ({ vehicle, onViewDetails, onCompare, isComparing }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${vehicle?.driver?.whatsapp}?text=Hi, I'm interested in booking ${vehicle?.name}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${vehicle?.driver?.phone}`;
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-500 group">
      <div className="relative h-64 overflow-hidden bg-muted">
        <Image
          src={vehicle?.image}
          alt={vehicle?.imageAlt}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute top-4 right-4 flex gap-2">
          {vehicle?.isPopular && (
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full flex items-center gap-1">
              <Icon name="Star" size={14} />
              Popular
            </span>
          )}
          {vehicle?.isAvailable && (
            <span className="px-3 py-1 bg-success text-success-foreground text-xs font-semibold rounded-full flex items-center gap-1">
              <Icon name="CheckCircle" size={14} />
              Available
            </span>
          )}
        </div>
        <button
          onClick={() => onCompare(vehicle?.id)}
          className={`absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            isComparing ? 'bg-primary text-primary-foreground' : 'bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-primary-foreground'
          }`}
          aria-label="Add to comparison"
        >
          <Icon name={isComparing ? "CheckSquare" : "Square"} size={20} />
        </button>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">{vehicle?.name}</h3>
            <p className="text-sm text-muted-foreground">{vehicle?.category}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">${vehicle?.pricePerKm}</div>
            <div className="text-xs text-muted-foreground">per km</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Icon name="Users" size={18} color="var(--color-primary)" />
            <span className="text-foreground">{vehicle?.capacity}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="Briefcase" size={18} color="var(--color-primary)" />
            <span className="text-foreground">{vehicle?.luggage}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Icon name="Fuel" size={18} color="var(--color-primary)" />
            <span className="text-foreground">{vehicle?.fuelType}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-3 border-t border-border">
          <Image
            src={vehicle?.driver?.avatar}
            alt={vehicle?.driver?.avatarAlt}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="font-medium text-foreground">{vehicle?.driver?.name}</div>
            <div className="flex items-center gap-1 text-sm">
              <Icon name="Star" size={14} color="var(--color-primary)" />
              <span className="text-foreground font-medium">{vehicle?.driver?.rating}</span>
              <span className="text-muted-foreground">({vehicle?.driver?.trips} trips)</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            size="default"
            iconName="Phone"
            iconPosition="left"
            onClick={handleCall}
            className="flex-1"
          >
            Call
          </Button>
          <Button
            variant="default"
            size="default"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={handleWhatsApp}
            className="flex-1"
          >
            WhatsApp
          </Button>
        </div>

        <Button
          variant="outline"
          size="default"
          fullWidth
          iconName="Info"
          iconPosition="right"
          onClick={() => onViewDetails(vehicle)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default VehicleCard;