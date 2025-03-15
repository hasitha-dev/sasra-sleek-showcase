
import React from 'react';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

interface CallToActionProps {
  title: string;
  description: string;
  primaryActionLabel: string;
  primaryActionTo: string;
  secondaryActionLabel?: string;
  secondaryActionTo?: string;
  backgroundImage?: string;
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryActionLabel,
  primaryActionTo,
  secondaryActionLabel,
  secondaryActionTo,
  backgroundImage,
  className,
}) => {
  return (
    <section className={cn(
      "relative py-16 md:py-24 overflow-hidden",
      backgroundImage ? "text-white" : "bg-muted",
      className
    )}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg opacity-90 mb-8">{description}</p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <NavLink
              to={primaryActionTo}
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-ring"
            >
              {primaryActionLabel}
            </NavLink>
            
            {secondaryActionLabel && secondaryActionTo && (
              <NavLink
                to={secondaryActionTo}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary/10 text-primary font-medium transition-colors hover:bg-primary/20 focus-ring"
              >
                {secondaryActionLabel}
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
