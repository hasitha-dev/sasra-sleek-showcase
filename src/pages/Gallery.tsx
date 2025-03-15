
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GalleryFilters, { FilterCategory } from "@/components/GalleryFilters";
import GalleryItem from "@/components/GalleryItem";
import CallToAction from "@/components/CallToAction";
import { motion } from "framer-motion";

const CounterAnimation = ({
  end,
  label,
  duration = 2,
}: {
  end: number;
  label: string;
  duration?: number;
}) => {
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
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}+
      </div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </div>
  );
};

const Gallery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const filterParam = queryParams.get("filter") as FilterCategory | null;

  const [activeFilter, setActiveFilter] = useState<FilterCategory>(
    filterParam || "all"
  );

  useEffect(() => {
    if (
      filterParam &&
      (filterParam === "all" ||
        filterParam === "stainless-etching" ||
        filterParam === "company-names" ||
        filterParam === "stainless-name" ||
        filterParam === "arcylic" ||
        filterParam === "badges" ||
        filterParam === "brass-etching" ||
        filterParam === "gems")
    ) {
      setActiveFilter(filterParam);
    }
  }, [filterParam]);

  const handleFilterChange = (filter: FilterCategory) => {
    setActiveFilter(filter);

    const newUrl = filter === "all" ? "/gallery" : `/gallery?filter=${filter}`;

    navigate(newUrl, { replace: true });
  };

  type GalleryItemType = {
    id: string;
    title: string;
    category: FilterCategory;
    imageSrc: string;
  };

  const galleryItems: GalleryItemType[] = [
    {
      id: "ss001",
      title: "House Number Plate",
      category: "stainless-name",
      imageSrc:
        "https://images.unsplash.com/photo-1527767013444-3551422e5eec?auto=format&fit=crop&q=80&w=2070",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        title="Our Gallery"
        subtitle="Explore our portfolio of premium stainless steel advertising, signage solutions, and exquisite gem collection."
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070"
      />

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <GalleryItem
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                imageSrc={item.imageSrc}
                className="animate-slide-up opacity-0"
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium mb-2">No items found</h3>
              <p className="text-muted-foreground">
                Try changing your filter selection
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Craftsmanship Process
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              From initial concept to final execution, our work process ensures
              the highest quality and attention to detail in every project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation & Design",
                  description:
                    "We work closely with you to understand your needs and create detailed designs.",
                },
                {
                  step: "02",
                  title: "Precision Manufacturing",
                  description:
                    "Using premium materials and state-of-the-art technology to create your product.",
                },
                {
                  step: "03",
                  title: "Installation & Support",
                  description:
                    "Professional installation and ongoing support to ensure lasting quality.",
                },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {process.title}
                  </h3>
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
