import React from "react";
import { cn } from "@/lib/utils";

export type FilterCategory =
  | "all"
  | "stainless-etching"
  | "company-names"
  | "stainless-name"
  | "arcylic"
  | "badges"
  | "brass-etching"
  | "carpet"
  | "tinted";

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
    { value: "all", label: "All Works" },
    { value: "stainless-etching", label: "Stainless Etching" },
    { value: "company-names", label: "Company Names" },
    { value: "stainless-name", label: "Stainless Name" },
    { value: "arcylic", label: "Arcylic" },
    { value: "badges", label: "Badges" },
    { value: "brass-etching", label: "Brass Etching" },
    { value: "carpet", label: "Carpet" },
    { value: "tinted", label: "Tinted" },
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
