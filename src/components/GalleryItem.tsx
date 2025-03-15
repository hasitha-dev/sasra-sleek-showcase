
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { FilterCategory } from './GalleryFilters';
import { X } from 'lucide-react';

export interface GalleryItemProps {
  id: string;
  title: string;
  category: FilterCategory;
  imageSrc: string;
  description?: string;
  className?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  title,
  category,
  imageSrc,
  description,
  className,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div 
        className={cn(
          "group cursor-pointer overflow-hidden rounded-lg",
          className
        )}
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="aspect-square md:aspect-[4/3] overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="p-4 text-center text-white">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm opacity-80 mt-1 capitalize">
              {category.replace(/-/g, ' ')}
            </p>
          </div>
        </div>
      </div>
      
      {/* Modal/Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col animate-scale-in">
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="text-xl font-medium">{title}</h3>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="p-1 rounded-full hover:bg-muted transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="overflow-auto flex-1">
              <div className="max-h-[60vh] overflow-hidden">
                <img 
                  src={imageSrc} 
                  alt={title} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {description && (
                <div className="p-6">
                  <p className="text-muted-foreground">{description}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Category:</span>{' '}
                    <span className="capitalize">{category.replace(/-/g, ' ')}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryItem;
