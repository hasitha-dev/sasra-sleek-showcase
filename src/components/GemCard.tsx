import React from "react";
import { cn } from "@/lib/utils";
import ContactWhatsApp from "./ContactWhatsApp";
import { Separator } from "./ui/separator";

interface GemCardProps {
  id: number;
  name: string;
  image: string;
  hardness?: number;
  specific_gravity_low?: number;
  specific_gravity_high?: number;
  chemical_formula?: string;
  phone?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const GemCard: React.FC<GemCardProps> = ({
  name,
  image,
  hardness,
  specific_gravity_low,
  specific_gravity_high,
  chemical_formula,
  phone = "+94771666215",
  className,
  style,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "group bg-white rounded-xl overflow-hidden card-hover cursor-pointer",
        className
      )}
      style={style}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-display font-semibold">{name}</h3>

        {(hardness || specific_gravity_low || chemical_formula) && (
          <>
            <Separator className="my-3" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {hardness && (
                <div>
                  <span className="font-medium text-foreground">
                    Hardness:{" "}
                  </span>{" "}
                  {hardness}
                </div>
              )}

              {specific_gravity_low && specific_gravity_high && (
                <div>
                  <span className="font-medium text-foreground">
                    Sp. Gravity:
                  </span>{" "}
                  {specific_gravity_low} - {specific_gravity_high}
                </div>
              )}

              {chemical_formula && (
                <div className="col-span-2">
                  <span className="font-medium text-foreground">Formula:</span>{" "}
                  {chemical_formula}
                </div>
              )}
            </div>
          </>
        )}

        <div className="mt-4">
          <ContactWhatsApp
            phone={phone}
            message={`Hello, I'm interested in the ${name} . Can you provide more information?`}
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
