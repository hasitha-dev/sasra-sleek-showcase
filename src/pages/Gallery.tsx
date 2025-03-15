import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GalleryFilters, { FilterCategory } from "@/components/GalleryFilters";
import GalleryItem from "@/components/GalleryItem";
import CallToAction from "@/components/CallToAction";
import name_board_1 from "../images/stainless_name/name_board_1.jpg";
import name_board_2 from "../images/stainless_name/name_board_2.jpg";
import name_board_3 from "../images/stainless_name/name_board_3.jpg";
import name_board_4 from "../images/stainless_name/name_board_4.jpg";
import name_board_5 from "../images/stainless_name/name_board_5.jpg";
import name_board_6 from "../images/stainless_name/name_board_6.jpg";
import name_board_7 from "../images/stainless_name/name_board_7.jpg";
import name_board_8 from "../images/stainless_name/name_board_8.jpg";
import name_board_9 from "../images/stainless_name/name_board_9.jpg";
import steel_etching_1 from "../images/stainless_etching/steel_etching_1.jpg";
import steel_etching_2 from "../images/stainless_etching/steel_etching_2.jpg";
import steel_etching_3 from "../images/stainless_etching/steel_etching_3.jpg";
import steel_etching_4 from "../images/stainless_etching/steel_etching_4.jpg";
import steel_etching_5 from "../images/stainless_etching/steel_etching_5.jpg";
import steel_etching_6 from "../images/stainless_etching/steel_etching_6.jpg";
import steel_etching_7 from "../images/stainless_etching/steel_etching_7.jpg";
import steel_etching_8 from "../images/stainless_etching/steel_etching_8.jpg";
import arcylic_1 from "../images/arcylic/arcylic_1.jpg";
import arcylic_2 from "../images/arcylic/arcylic_2.jpg";
import arcylic_3 from "../images/arcylic/arcylic_3.jpg";
import arcylic_4 from "../images/arcylic/arcylic_4.jpg";
import badges_1 from "../images/badges/badge_1.jpg";
import badges_2 from "../images/badges/badge_2.jpg";
import badges_3 from "../images/badges/badge_3.jpg";
import badges_4 from "../images/badges/badge_4.jpg";
import badges_5 from "../images/badges/badge_5.jpg";
import badges_6 from "../images/badges/badge_6.jpg";
import badges_7 from "../images/badges/badge_7.jpg";
import brass_etching_1 from "../images/brass_etching/brass_etching_1.jpg";
import brass_etching_2 from "../images/brass_etching/brass_etching_2.jpg";
import brass_etching_3 from "../images/brass_etching/brass_etching_3.jpg";
import brass_etching_4 from "../images/brass_etching/brass_etching_4.jpg";
import brass_etching_5 from "../images/brass_etching/brass_etching_5.jpg";
import brass_etching_6 from "../images/brass_etching/brass_etching_6.jpg";
import company_name_1 from "../images/company_name/company_name_1.jpg";
import company_name_2 from "../images/company_name/company_name_2.jpg";
import company_name_3 from "../images/company_name/company_name_3.jpg";
import company_name_4 from "../images/company_name/company_name_4.jpg";
import company_name_5 from "../images/company_name/company_name_5.jpg";
import company_name_6 from "../images/company_name/company_name_6.jpg";
import company_name_7 from "../images/company_name/company_name_7.jpg";
import carpet_1 from "../images/carpet/carpet_1.jpg";
import carpet_2 from "../images/carpet/carpet_2.jpg";
import tinted_1 from "../images/tinted/tinted_1.jpg";
import tinted_2 from "../images/tinted/tinted_2.jpg";
import tinted_3 from "../images/tinted/tinted_3.jpg";

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
        filterParam === "brass-etching")
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
      imageSrc: name_board_1,
    },
    {
      id: "ss002",
      title: "House Name Plate",
      category: "stainless-name",
      imageSrc: name_board_2,
    },
    {
      id: "ss003",
      title: "House Name Plate",
      category: "stainless-name",
      imageSrc: name_board_3,
    },
    {
      id: "ss004",
      title: "House Name Plate",
      category: "stainless-name",
      imageSrc: name_board_4,
    },
    {
      id: "ss005",
      title: "House Name Plate",
      category: "stainless-name",
      imageSrc: name_board_5,
    },
    {
      id: "ss006",
      title: "House Name Plate",
      category: "stainless-name",
      imageSrc: name_board_6,
    },
    {
      id: "ss007",
      title: "House Name Plate",
      category: "stainless-name",
      imageSrc: name_board_7,
    },
    {
      id: "ss008",
      title: "House Name Plate",
      category: "stainless-name",
      imageSrc: name_board_8,
    },
    {
      id: "ss009",
      title: "House Name Plate",
      category: "stainless-name",
      imageSrc: name_board_9,
    },
    {
      id: "ss010",
      title: "Steel Etching",
      category: "stainless-etching",
      imageSrc: steel_etching_1,
    },
    {
      id: "ss011",
      title: "Steel Etching",
      category: "stainless-etching",
      imageSrc: steel_etching_2,
    },
    {
      id: "ss012",
      title: "Steel Etching",
      category: "stainless-etching",
      imageSrc: steel_etching_3,
    },
    {
      id: "ss013",
      title: "Steel Etching",
      category: "stainless-etching",
      imageSrc: steel_etching_4,
    },
    {
      id: "ss014",
      title: "Steel Etching",
      category: "stainless-etching",
      imageSrc: steel_etching_5,
    },
    {
      id: "ss015",
      title: "Steel Etching",
      category: "stainless-etching",
      imageSrc: steel_etching_6,
    },
    {
      id: "ss016",
      title: "Steel Etching",
      category: "stainless-etching",
      imageSrc: steel_etching_7,
    },
    {
      id: "ss017",
      title: "Steel Etching",
      category: "stainless-etching",
      imageSrc: steel_etching_8,
    },
    {
      id: "ss018",
      title: "Arcylic Signage",
      category: "arcylic",
      imageSrc: arcylic_1,
    },
    {
      id: "ss019",
      title: "Arcylic Signage",
      category: "arcylic",
      imageSrc: arcylic_2,
    },
    {
      id: "ss020",
      title: "Arcylic Signage",
      category: "arcylic",
      imageSrc: arcylic_3,
    },
    {
      id: "ss021",
      title: "Arcylic Signage",
      category: "arcylic",
      imageSrc: arcylic_4,
    },
    {
      id: "ss022",
      title: "Badges",
      category: "badges",
      imageSrc: badges_1,
    },
    {
      id: "ss023",
      title: "Badges",
      category: "badges",
      imageSrc: badges_2,
    },
    {
      id: "ss024",
      title: "Badges",
      category: "badges",
      imageSrc: badges_3,
    },
    {
      id: "ss025",
      title: "Badges",
      category: "badges",
      imageSrc: badges_4,
    },
    {
      id: "ss026",
      title: "Badges",
      category: "badges",
      imageSrc: badges_5,
    },
    {
      id: "ss027",
      title: "Badges",
      category: "badges",
      imageSrc: badges_6,
    },
    {
      id: "ss028",
      title: "Badges",
      category: "badges",
      imageSrc: badges_7,
    },
    {
      id: "ss029",
      title: "Brass Etching",
      category: "brass-etching",
      imageSrc: brass_etching_1,
    },
    {
      id: "ss030",
      title: "Brass Etching",
      category: "brass-etching",
      imageSrc: brass_etching_2,
    },
    {
      id: "ss031",
      title: "Brass Etching",
      category: "brass-etching",
      imageSrc: brass_etching_3,
    },
    {
      id: "ss032",
      title: "Brass Etching",
      category: "brass-etching",
      imageSrc: brass_etching_4,
    },
    {
      id: "ss033",
      title: "Brass Etching",
      category: "brass-etching",
      imageSrc: brass_etching_5,
    },
    {
      id: "ss034",
      title: "Brass Etching",
      category: "brass-etching",
      imageSrc: brass_etching_6,
    },
    {
      id: "ss035",
      title: "Company Name Plate",
      category: "company-names",
      imageSrc: company_name_1,
    },
    {
      id: "ss036",
      title: "Company Name Plate",
      category: "company-names",
      imageSrc: company_name_2,
    },
    {
      id: "ss037",
      title: "Company Name Plate",
      category: "company-names",
      imageSrc: company_name_3,
    },
    {
      id: "ss038",
      title: "Company Name Plate",
      category: "company-names",
      imageSrc: company_name_4,
    },
    {
      id: "ss039",
      title: "Company Name Plate",
      category: "company-names",
      imageSrc: company_name_5,
    },
    {
      id: "ss040",
      title: "Company Name Plate",
      category: "company-names",
      imageSrc: company_name_6,
    },
    {
      id: "ss041",
      title: "Company Name Plate",
      category: "company-names",
      imageSrc: company_name_7,
    },
    {
      id: "ss042",
      title: "Carpet Signage",
      category: "carpet",
      imageSrc: carpet_1,
    },
    {
      id: "ss043",
      title: "Carpet Signage",
      category: "carpet",
      imageSrc: carpet_2,
    },
    {
      id: "ss044",
      title: "Tinted Signage",
      category: "tinted",
      imageSrc: tinted_1,
    },
    {
      id: "ss045",
      title: "Tinted Signage",
      category: "tinted",
      imageSrc: tinted_2,
    },
    {
      id: "ss046",
      title: "Tinted Signage",
      category: "tinted",
      imageSrc: tinted_3,
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const categoryCounts = galleryItems.reduce<Record<FilterCategory, number>>(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = 0;
      }
      acc[item.category]++;
      return acc;
    },
    {} as Record<FilterCategory, number>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        title="Our Gallery"
        subtitle="Explore our portfolio of premium stainless steel advertising, signage solutions, and exquisite gem collection."
        backgroundImage={brass_etching_2}
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

          {activeFilter === "all" && (
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-6">All Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {Object.entries(categoryCounts).map(([category, count]) => (
                  <div
                    key={category}
                    onClick={() =>
                      handleFilterChange(category as FilterCategory)
                    }
                    className="bg-muted p-4 rounded-lg text-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <div className="font-medium capitalize">
                      {category.replace(/-/g, " ")}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {count} items
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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
