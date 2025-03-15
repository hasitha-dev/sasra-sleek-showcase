
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-md text-center px-4 py-16">
          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <NavLink
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus-ring"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Home
          </NavLink>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
