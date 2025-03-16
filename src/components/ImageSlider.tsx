
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageSliderProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  overlayContent?: React.ReactNode;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  autoPlay = true,
  interval = 5000,
  className,
  overlayContent,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(new Array(images.length).fill(false));

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(goToNext, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, goToNext]);

  useEffect(() => {
    // Preload images
    images.forEach((image, index) => {
      const img = new Image();
      img.src = image.src;
      img.onload = () => {
        setLoadedImages((prev) => {
          const newState = [...prev];
          newState[index] = true;
          setIsLoading(!newState.every(Boolean));
          return newState;
        });
      };
    });
  }, [images]);

  return (
    <div className={cn("relative overflow-hidden w-full", className)}>
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-background">
          <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Image container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 w-full h-full",
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
              style={{ opacity: loadedImages[index] ? 1 : 0, transition: 'opacity 0.5s' }}
            />
          </div>
        ))}
        
        {/* Darker gradient overlay - updated with stronger opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 z-20"></div>
        
        {/* Content overlay */}
        {overlayContent && (
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            {overlayContent}
          </div>
        )}
      </div>
      
      {/* Navigation arrows - updated for better visibility */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-2.5 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-2.5 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={24} />
      </button>
      
      {/* Indicators - updated for better visibility */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentIndex === index
                ? "bg-white w-6"
                : "bg-white/40 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
