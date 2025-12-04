import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted transition-colors duration-300 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <Icon 
          name={isOpen ? 'ChevronUp' : 'ChevronDown'} 
          size={20} 
          className="flex-shrink-0 transition-transform duration-300"
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-background border-t border-border animate-slide-down">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;