
import React from 'react';
import { cn } from '@/lib/utils';
import ContactWhatsApp from './ContactWhatsApp';

interface GemCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  carat?: string;
  origin?: string;
  phone?: string;
  className?: string;
}

const GemCard: React.FC<GemCardProps> = ({
  id,
  name,
  description,
  price,
  imageSrc,
  carat,
  origin,
  phone = "+12345678901",
  className,
}) => {
  return (
    <div className={cn(
      "group bg-white rounded-xl overflow-hidden card-hover",
      className
    )}>
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
          {price}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-display font-semibold">{name}</h3>
        
        {/* Properties */}
        <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          {carat && (
            <div>
              <span className="font-medium text-foreground">Carat:</span> {carat}
            </div>
          )}
          
          {origin && (
            <div>
              <span className="font-medium text-foreground">Origin:</span> {origin}
            </div>
          )}
        </div>
        
        <p className="mt-3 text-muted-foreground line-clamp-2">
          {description}
        </p>
        
        <div className="mt-4">
          <ContactWhatsApp 
            phone={phone}
            message={`Hello, I'm interested in the ${name} (ID: ${id}) priced at ${price}. Can you provide more information?`}
            size="sm"
            className="w-full"
          >
            Inquire via WhatsApp
          </ContactWhatsApp>
        </div>
      </div>
    </div>
  );
};

export default GemCard;
