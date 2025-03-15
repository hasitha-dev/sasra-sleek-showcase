import React from "react";
import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">Sasra Hanaro</h3>
            <p className="text-primary-foreground/80 max-w-xs">
              Premium stainless steel advertising and rare gems. Craftsmanship
              meets elegance in every detail.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <NavLink
                to="/"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </NavLink>
              <NavLink
                to="/gems"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Gem Collection
              </NavLink>
              <NavLink
                to="/gallery"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Gallery
              </NavLink>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-display font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80">+94771666215</p>
              </div>
              <div className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80">
                  contact@sasrahanaro.com
                </p>
              </div>
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-primary-foreground/80">
                  {" "}
                  No:473/5, <br />
                  Rajasingha mawatha, <br />
                  Udumulla, <br />
                  Mulleriyawa new town{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center text-primary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Sasra Hanaro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
