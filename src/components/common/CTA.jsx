import React from 'react';
import Button from './Button';

const CTA = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'default',
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-100';
      case 'dark':
        return 'bg-gray-900 text-white border-gray-800';
      case 'primary':
        return 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-600';
      default:
        return 'bg-white border-gray-200';
    }
  };

  return (
    <div className={`text-center px-4 ${className}`}>
      <div className={`rounded-2xl lg:rounded-3xl p-6 lg:p-12 border max-w-4xl mx-auto ${getVariantStyles()}`}>
        {title && (
          <h3 className="text-xl lg:text-3xl font-bold mb-3 lg:mb-4">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-sm lg:text-base opacity-90 mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center items-center">
          {primaryButton && (
            <Button 
              variant={primaryButton.variant || 'primary'}
              size={primaryButton.size || 'large'}
              icon={primaryButton.icon}
              iconPosition={primaryButton.iconPosition || 'left'}
              onClick={primaryButton.onClick}
            >
              {primaryButton.text}
            </Button>
          )}
          
          {secondaryButton && (
            <Button 
              variant={secondaryButton.variant || 'outline'}
              size={secondaryButton.size || 'large'}
              icon={secondaryButton.icon}
              iconPosition={secondaryButton.iconPosition || 'left'}
              onClick={secondaryButton.onClick}
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CTA;