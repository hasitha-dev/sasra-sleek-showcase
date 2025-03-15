import React from "react";
import { cn } from "@/lib/utils";
import { FilterCategory } from "./GalleryFilters";
import gem_collection from "@/images/gem_collection.jpg";

export interface GalleryItemProps {
  id: string;
  title: string;
  category: FilterCategory;
  imageSrc: string;
  className?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  title,
  category,
  imageSrc,
  className,
}) => {
  return (
    <div
      className={cn(
        "group cursor-pointer overflow-hidden rounded-lg relative",
        className
      )}
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
            {category.replace(/-/g, " ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
