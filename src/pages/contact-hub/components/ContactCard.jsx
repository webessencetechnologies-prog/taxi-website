import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactCard = ({ icon, title, description, action, actionLabel, variant = 'default' }) => {
  return (
    <div className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 group">
      <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
        variant === 'primary' ? 'bg-primary/20 group-hover:bg-primary/30' :
        variant === 'success'? 'bg-success/20 group-hover:bg-success/30' : 'bg-muted group-hover:bg-muted/80'
      }`}>
        <Icon 
          name={icon} 
          size={28} 
          color={variant === 'primary' ? 'var(--color-primary)' : variant === 'success' ? 'var(--color-success)' : 'var(--color-foreground)'} 
        />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
      <Button
        variant={variant === 'primary' ? 'default' : 'outline'}
        size="default"
        fullWidth
        onClick={action}
        iconName="ArrowRight"
        iconPosition="right"
      >
        {actionLabel}
      </Button>
    </div>
  );
};

export default ContactCard;