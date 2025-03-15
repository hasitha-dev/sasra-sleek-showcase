import React from "react";
import { cn } from "@/lib/utils";

interface ContactWhatsAppProps {
  phone?: string;
  message?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
}

const ContactWhatsApp: React.FC<ContactWhatsAppProps> = ({
  phone = "+94771666215",
  message = "Hello, I am interested in your product.",
  className,
  variant = "default",
  size = "md",
  children,
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodedMessage}`;

  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variantClasses = {
    default: "bg-[#25D366] text-white hover:bg-[#22c15e]",
    outline:
      "border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white",
    ghost: "text-[#25D366] hover:bg-[#25D366]/10",
  };

  const sizeClasses = {
    sm: "h-9 px-3 text-xs",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-base",
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
      {children || "Contact on WhatsApp"}
    </a>
  );
};

export default ContactWhatsApp;
