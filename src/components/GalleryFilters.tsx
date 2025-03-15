
import React from 'react';
import { cn } from '@/lib/utils';

export type FilterCategory = 'all' | 'stainless-steel' | 'plastic-signage' | 'sticker-works' | 'gems';

interface GalleryFiltersProps {
  activeFilter: FilterCategory;
  setActiveFilter: (filter: FilterCategory) => void;
  className?: string;
}

const GalleryFilters: React.FC<GalleryFiltersProps> = ({
  activeFilter,
  setActiveFilter,
  className,
}) => {
  const filters: { value: FilterCategory; label: string }[] = [
    { value: 'all', label: 'All Works' },
    { value: 'stainless-steel', label: 'Stainless Steel' },
    { value: 'plastic-signage', label: 'Plastic Signage' },
    { value: 'sticker-works', label: 'Sticker Works' },
    { value: 'gems', label: 'Gem Collection' },
  ];

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => setActiveFilter(filter.value)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all focus-ring",
            activeFilter === filter.value
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80 text-muted-foreground"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilters;
