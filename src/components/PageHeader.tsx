import React from "react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage,
  className,
  children,
}) => {
  return (
    <header
      className={cn(
        "relative py-24 md:py-32 overflow-hidden",
        backgroundImage ? "text-white" : "bg-muted/40",
        className
      )}
    >
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-balance animate-slide-up opacity-0"
            style={{ animationDelay: "0.1s" }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="mt-4 text-lg md:text-xl text-balance opacity-80 animate-slide-up "
              style={{ animationDelay: "0.3s" }}
            >
              {subtitle}
            </p>
          )}

          {children && (
            <div
              className="mt-8 animate-slide-up opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
