import React from 'react';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  to: string;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  to,
  className,
  style,
}) => {
  return (
    <div 
      className={cn(
        "group relative bg-white rounded-lg overflow-hidden card-hover border border-border/40",
        className
      )}
      style={style}
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <NavLink 
          to={to}
          className="inline-flex items-center text-primary font-medium transition-colors hover:text-primary/80"
        >
          Learn more
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </NavLink>
      </div>
    </div>
  );
};

export default ServiceCard;
