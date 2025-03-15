
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import GalleryFilters, { FilterCategory } from '@/components/GalleryFilters';
import GalleryItem from '@/components/GalleryItem';
import CallToAction from '@/components/CallToAction';

const Gallery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const filterParam = queryParams.get('filter') as FilterCategory | null;
  
  const [activeFilter, setActiveFilter] = useState<FilterCategory>(filterParam || 'all');
  
  useEffect(() => {
    if (filterParam && (filterParam === 'all' || 
                         filterParam === 'stainless-steel' || 
                         filterParam === 'plastic-signage' || 
                         filterParam === 'sticker-works' || 
                         filterParam === 'gems')) {
      setActiveFilter(filterParam);
    }
  }, [filterParam]);
  
  const handleFilterChange = (filter: FilterCategory) => {
    setActiveFilter(filter);
    
    // Update URL without reloading page
    const newUrl = filter === 'all' 
      ? '/gallery' 
      : `/gallery?filter=${filter}`;
    
    navigate(newUrl, { replace: true });
  };
  
  const galleryItems = [
    // Stainless Steel
    {
      id: "ss001",
      title: "Corporate Headquarters Sign",
      category: "stainless-steel",
      imageSrc: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=2070",
      description: "Premium stainless steel signage for a corporate headquarters, featuring brushed finish with illuminated lettering."
    },
    {
      id: "ss002",
      title: "Retail Storefront Sign",
      category: "stainless-steel",
      imageSrc: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=2070",
      description: "Elegant stainless steel sign for a luxury retail brand, with polished finish and precision-cut lettering."
    },
    {
      id: "ss003",
      title: "Restaurant Name Board",
      category: "stainless-steel",
      imageSrc: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=2070",
      description: "Custom stainless steel name board for a high-end restaurant, featuring backlit effects and mirror-polished finish."
    },
    
    // Plastic Signage
    {
      id: "ps001",
      title: "Office Directory Board",
      category: "plastic-signage",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=2070",
      description: "Modern office directory using premium acrylic with digital printing and modular design for easy updates."
    },
    {
      id: "ps002",
      title: "Retail Display Sign",
      category: "plastic-signage",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=2070",
      description: "Vibrant retail display signage using UV-printed acrylic with custom shapes and standoffs."
    },
    {
      id: "ps003",
      title: "Event Directional Signs",
      category: "plastic-signage",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=2070",
      description: "Set of directional signs for corporate events, using lightweight yet durable PVC with full-color graphics."
    },
    
    // Sticker Works
    {
      id: "sw001",
      title: "Vehicle Graphics",
      category: "sticker-works",
      imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070",
      description: "Premium vinyl vehicle graphics for a corporate fleet, featuring weather-resistant materials and precision cut design."
    },
    {
      id: "sw002",
      title: "Window Display",
      category: "sticker-works",
      imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070",
      description: "Seasonal retail window display using static cling vinyl with vibrant, full-color printing."
    },
    {
      id: "sw003",
      title: "Product Labels",
      category: "sticker-works",
      imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070",
      description: "Custom product labels for a cosmetics brand, featuring metallic effects and water-resistant finish."
    },
    
    // Gems
    {
      id: "gem001",
      title: "Ceylon Blue Sapphire",
      category: "gems",
      imageSrc: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=1756",
      description: "Exquisite 2.5 carat blue sapphire from Sri Lanka, known for its vivid blue color and exceptional clarity."
    },
    {
      id: "gem002",
      title: "Colombian Emerald",
      category: "gems",
      imageSrc: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=1756",
      description: "Stunning 1.8 carat emerald from Colombia with a rich green color and excellent transparency."
    },
    {
      id: "gem003",
      title: "Burmese Ruby",
      category: "gems",
      imageSrc: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=1756",
      description: "Magnificent 1.5 carat ruby from Burma with a rich 'pigeon blood' red color that's highly valued."
    },
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader
        title="Our Gallery"
        subtitle="Explore our portfolio of premium stainless steel advertising, signage solutions, and exquisite gem collection."
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070"
      />
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <GalleryFilters 
            activeFilter={activeFilter}
            setActiveFilter={handleFilterChange}
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                {...item}
                className="animate-slide-up opacity-0"
                style={{ animationDelay: `${0.1 * (index % 3)}s` }}
              />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium mb-2">No items found</h3>
              <p className="text-muted-foreground">Try changing your filter selection</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Craftsmanship Process</h2>
            <p className="text-lg text-muted-foreground mb-12">
              From initial concept to final execution, our work process ensures the highest quality and attention to detail in every project.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation & Design",
                  description: "We work closely with you to understand your needs and create detailed designs."
                },
                {
                  step: "02",
                  title: "Precision Manufacturing",
                  description: "Using premium materials and state-of-the-art technology to create your product."
                },
                {
                  step: "03",
                  title: "Installation & Support",
                  description: "Professional installation and ongoing support to ensure lasting quality."
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Start Your Project?"
        description="Contact us today to discuss your stainless steel advertising or signage needs. Our team is ready to bring your vision to life."
        primaryActionLabel="Get in Touch"
        primaryActionTo="https://wa.me/12345678901?text=Hello%2C%20I'm%20interested%20in%20discussing%20a%20project."
        backgroundImage="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2070"
      />
      
      <Footer />
    </div>
  );
};

export default Gallery;
