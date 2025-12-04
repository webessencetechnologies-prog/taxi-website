import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VehicleDetailsModal = ({ vehicle, onClose }) => {
  const [activeTab, setActiveTab] = useState('specifications');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!vehicle) return null;

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${vehicle?.driver?.whatsapp}?text=Hi, I'm interested in booking ${vehicle?.name}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${vehicle?.driver?.phone}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle?.gallery?.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle?.gallery?.length) % vehicle?.gallery?.length);
  };

  const tabs = [
    { id: 'specifications', label: 'Specifications', icon: 'FileText' },
    { id: 'features', label: 'Features', icon: 'Star' },
    { id: 'driver', label: 'Driver Info', icon: 'User' },
    { id: 'reviews', label: 'Reviews', icon: 'MessageSquare' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="text-2xl font-semibold text-foreground">{vehicle?.name}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-muted transition-colors flex items-center justify-center"
            aria-label="Close modal"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="relative h-96 bg-muted rounded-xl overflow-hidden">
            <Image
              src={vehicle?.gallery?.[currentImageIndex]?.image}
              alt={vehicle?.gallery?.[currentImageIndex]?.imageAlt}
              className="w-full h-full object-cover"
            />
            {vehicle?.gallery?.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Previous image"
                >
                  <Icon name="ChevronLeft" size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Next image"
                >
                  <Icon name="ChevronRight" size={24} />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {vehicle?.gallery?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-primary w-8' : 'bg-background/60'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeTab === tab?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span className="font-medium">{tab?.label}</span>
              </button>
            ))}
          </div>

          {activeTab === 'specifications' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {vehicle?.specifications?.map((spec, index) => (
                  <div key={index} className="bg-muted rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2 text-primary">
                      <Icon name={spec?.icon} size={20} />
                      <span className="text-sm font-medium text-muted-foreground">{spec?.label}</span>
                    </div>
                    <div className="text-lg font-semibold text-foreground">{spec?.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {vehicle?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={20} color="var(--color-primary)" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'driver' && (
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-muted rounded-xl">
                <Image
                  src={vehicle?.driver?.avatar}
                  alt={vehicle?.driver?.avatarAlt}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{vehicle?.driver?.name}</h3>
                    <p className="text-muted-foreground">{vehicle?.driver?.experience}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={18} color="var(--color-primary)" />
                      <span className="font-semibold text-foreground">{vehicle?.driver?.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Icon name="MapPin" size={18} />
                      <span>{vehicle?.driver?.trips} trips</span>
                    </div>
                  </div>
                  <p className="text-foreground">{vehicle?.driver?.bio}</p>
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="default"
                      iconName="Phone"
                      iconPosition="left"
                      onClick={handleCall}
                    >
                      Call Driver
                    </Button>
                    <Button
                      variant="default"
                      size="default"
                      iconName="MessageCircle"
                      iconPosition="left"
                      onClick={handleWhatsApp}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {vehicle?.driver?.specialties?.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-4">
              {vehicle?.reviews?.map((review) => (
                <div key={review?.id} className="p-4 bg-muted rounded-xl space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src={review?.avatar}
                        alt={review?.avatarAlt}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{review?.name}</div>
                        <div className="text-sm text-muted-foreground">{review?.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} color="var(--color-primary)" />
                      <span className="font-semibold text-foreground">{review?.rating}</span>
                    </div>
                  </div>
                  <p className="text-foreground">{review?.comment}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={14} />
                    <span>{review?.route}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-3 pt-4 border-t border-border">
            <Button
              variant="outline"
              size="lg"
              fullWidth
              iconName="Phone"
              iconPosition="left"
              onClick={handleCall}
            >
              Call Now
            </Button>
            <Button
              variant="default"
              size="lg"
              fullWidth
              iconName="MessageCircle"
              iconPosition="left"
              onClick={handleWhatsApp}
            >
              Book via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsModal;