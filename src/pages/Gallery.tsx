
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import GalleryFilters, { FilterCategory } from '@/components/GalleryFilters';
import GalleryItem from '@/components/GalleryItem';
import CallToAction from '@/components/CallToAction';
import { motion } from "framer-motion";

const CounterAnimation = ({ end, label, duration = 2 }: { end: number, label: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateCount);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);
  
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{count}+</div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </div>
  );
};

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
    // Stainless Steel - House Number Plates
    {
      id: "ss001",
      title: "House Number Plate",
      category: "stainless-steel",
      subcategory: "house-number",
      imageSrc: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=2070",
      description: "Premium stainless steel house number plate, featuring brushed finish with illuminated numbering."
    },
    // Stainless Steel - Etching Name Plates
    {
      id: "ss002",
      title: "Etched Name Plate",
      category: "stainless-steel",
      subcategory: "etching-name",
      imageSrc: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=2070",
      description: "Elegant stainless steel etched name plate with polished finish and precision-cut lettering."
    },
    // Stainless Steel - Name Boards
    {
      id: "ss003",
      title: "Stainless Steel Name Board",
      category: "stainless-steel",
      subcategory: "name-board",
      imageSrc: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=2070",
      description: "Custom stainless steel name board featuring backlit effects and mirror-polished finish."
    },
    // Stainless Steel - Name Tag/Badges
    {
      id: "ss004",
      title: "Steel Name Badge",
      category: "stainless-steel",
      subcategory: "name-tag",
      imageSrc: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=2070",
      description: "Professional stainless steel name badge with magnetic backing and etched details."
    },
    // Brass - Etching Name Plates
    {
      id: "br001",
      title: "Brass Etched Nameplate",
      category: "stainless-steel",
      subcategory: "brass-etching",
      imageSrc: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=2070",
      description: "Luxurious brass etched nameplate for executive offices with deep etching and polished finish."
    },
    // Brass - Name Boards and Badges
    {
      id: "br002",
      title: "Brass Name Board",
      category: "stainless-steel",
      subcategory: "brass-board",
      imageSrc: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80&w=2070",
      description: "Elegant brass name board for professional establishments with antique finish options."
    },
    
    // Plastic Signage - Acrylic Name Boards
    {
      id: "ps001",
      title: "Acrylic Name Board",
      category: "plastic-signage",
      subcategory: "acrylic-board",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=2070",
      description: "Modern acrylic name board using premium materials with digital printing and sleek design."
    },
    // Plastic Signage - Common Signage Boards
    {
      id: "ps002",
      title: "Common Signage Board",
      category: "plastic-signage",
      subcategory: "common-signage",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=2070",
      description: "Versatile common signage boards for commercial spaces using durable plastic materials."
    },
    // Plastic Signage - Company Logo Boards
    {
      id: "ps003",
      title: "Company Logo Board",
      category: "plastic-signage",
      subcategory: "company-logo",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=2070",
      description: "Eye-catching company logo boards using high-quality plastic with full-color printing."
    },
    // Plastic Signage - Company Name Boards
    {
      id: "ps004",
      title: "Company Name Board",
      category: "plastic-signage",
      subcategory: "company-name",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=2070",
      description: "Professional company name boards with custom sizing and mounting options."
    },
    // Plastic Signage - Plastic Badges
    {
      id: "ps005",
      title: "Plastic Badge",
      category: "plastic-signage",
      subcategory: "plastic-badge",
      imageSrc: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=2070",
      description: "Lightweight and durable plastic badges for conferences, events, and corporate use."
    },
    
    // Sticker Works - Digital Printing
    {
      id: "sw001",
      title: "Digital Printed Sticker",
      category: "sticker-works",
      subcategory: "digital-printing",
      imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070",
      description: "High-resolution digitally printed stickers with vibrant colors and detailed graphics."
    },
    // Sticker Works - Sandblast & Tinted Glass Stickers
    {
      id: "sw002",
      title: "Sandblast Glass Sticker",
      category: "sticker-works",
      subcategory: "sandblast-tinted",
      imageSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070",
      description: "Elegant sandblast and tinted glass stickers for office partitions and decorative purposes."
    },
    
    // Gems
    {
      id: "gem001",
      title: "Ceylon Blue Sapphire",
      category: "gems",
      subcategory: "sapphire",
      imageSrc: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=1756",
      description: "Exquisite 2.5 carat blue sapphire from Sri Lanka, known for its vivid blue color and exceptional clarity."
    },
    {
      id: "gem002",
      title: "Colombian Emerald",
      category: "gems",
      subcategory: "emerald",
      imageSrc: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=1756",
      description: "Stunning 1.8 carat emerald from Colombia with a rich green color and excellent transparency."
    },
    {
      id: "gem003",
      title: "Burmese Ruby",
      category: "gems",
      subcategory: "ruby",
      imageSrc: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=1756",
      description: "Magnificent 1.5 carat ruby from Burma with a rich 'pigeon blood' red color that's highly valued."
    },
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  // Group items by subcategory when a specific category is selected
  const groupedItems = filteredItems.reduce((acc, item) => {
    if (!acc[item.subcategory]) {
      acc[item.subcategory] = [];
    }
    acc[item.subcategory].push(item);
    return acc;
  }, {} as Record<string, typeof galleryItems>);

  // Create formatted subcategory names for display
  const formatSubcategory = (subcategory: string) => {
    return subcategory
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader
        title="Our Gallery"
        subtitle="Explore our portfolio of premium stainless steel advertising, signage solutions, and exquisite gem collection."
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070"
      />

      {/* Counter statistics section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 md:gap-10">
            <CounterAnimation end={241} label="Clients" />
            <CounterAnimation end={643} label="Projects" />
            <CounterAnimation end={630} label="Done Projects" />
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <GalleryFilters 
            activeFilter={activeFilter}
            setActiveFilter={handleFilterChange}
            className="mb-12"
          />
          
          {activeFilter === 'all' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <GalleryItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  category={item.category}
                  imageSrc={item.imageSrc}
                  description={item.description}
                  className="animate-slide-up opacity-0"
                />
              ))}
            </div>
          ) : (
            Object.entries(groupedItems).map(([subcategory, items]) => (
              <div key={subcategory} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 pb-2 border-b border-muted">
                  {formatSubcategory(subcategory)}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item) => (
                    <GalleryItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      category={item.category}
                      imageSrc={item.imageSrc}
                      description={item.description}
                      className="animate-slide-up opacity-0"
                    />
                  ))}
                </div>
              </div>
            ))
          )}
          
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
