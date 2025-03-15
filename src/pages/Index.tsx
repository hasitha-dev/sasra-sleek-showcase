import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import ServiceCard from "@/components/ServiceCard";
import CallToAction from "@/components/CallToAction";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import name_board_5 from "@/images/stainless_name/name_board_5.jpg";
import company_name_7 from "@/images/company_name/company_name_7.jpg";
import company_name_4 from "@/images/company_name/company_name_4.jpg";
import name_board_7 from "@/images/stainless_name/name_board_7.jpg";
import gem_1 from "@/images/gems/blue_sapphier.jpg";
import company_name_3 from "@/images/company_name/company_name_3.jpg";
const Index = () => {
  const heroSlides = [
    {
      src: name_board_5,
      alt: "Luxurious metal craftsmanship",
    },
    {
      src: company_name_7,
      alt: "Premium advertising solutions",
    },
    {
      src: company_name_4,
      alt: "Elegant gem collection",
    },
  ];

  const services = [
    {
      title: "Stainless Name Boards",
      description:
        "Premium signage and advertising solutions crafted from high-quality stainless steel. Durable, elegant, and designed to make your brand stand out.",
      imageSrc: name_board_7,
      to: "/gallery?filter=stainless-name",
    },
    {
      title: "Gem Collection",
      description:
        "Discover our exquisite collection of rare and precious gems. Each stone is carefully selected and authenticated to ensure the highest quality.",
      imageSrc: gem_1,
      to: "/gems",
    },
    {
      title: "Signage Solutions",
      description:
        "Comprehensive signage solutions including plastic signage boards and sticker works. Eye-catching designs that perfectly communicate your message.",
      imageSrc: company_name_7,
      to: "/gallery?filter=company-names",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full">
        <ImageSlider
          images={heroSlides}
          className="h-full"
          overlayContent={
            <div className="container mx-auto px-4 md:px-6 text-center text-white">
              <div className="max-w-3xl mx-auto space-y-6">
                <h1
                  className="text-4xl md:text-6xl font-bold font-display animate-slide-down opacity-0"
                  style={{ animationDelay: "0.3s" }}
                >
                  Elegance in Every Detail
                </h1>
                <p
                  className="text-xl md:text-2xl text-white/80 max-w-xl mx-auto animate-slide-down opacity-0"
                  style={{ animationDelay: "0.5s" }}
                >
                  Premium stainless steel advertising and rare gems. Where
                  craftsmanship meets excellence.
                </p>
                <div
                  className="animate-slide-down opacity-0"
                  style={{ animationDelay: "0.7s" }}
                >
                  <NavLink
                    to="/gallery"
                    className="inline-flex items-center rounded-md bg-white text-primary px-6 py-3 font-medium transition-colors hover:bg-white/90 focus-ring"
                  >
                    Explore Our Work
                    <ArrowRight size={16} className="ml-2" />
                  </NavLink>
                </div>
              </div>
            </div>
          }
        />
      </section>

      {/* About Section */}
      <section className="py-20 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Welcome to Sasra Hanaro
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Sasra Hanaro, we blend artistry and precision to create
              exceptional stainless steel advertising solutions and curate rare,
              exquisite gems. Our commitment to quality and attention to detail
              sets us apart, ensuring that each piece we craft or gem we offer
              exceeds expectations.
            </p>
            <div className="flex justify-center">
              <NavLink
                to="/gallery"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Discover our craftsmanship
                <ArrowRight size={16} className="ml-1" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              From premium advertising solutions to exquisite gems, we offer a
              range of services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                className="animate-slide-up opacity-0"
                style={{ animationDelay: `${0.2 * index}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-secondary/50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Sasra Hanaro
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience and a passion for excellence, we've
                established ourselves as leaders in stainless steel advertising
                and gem curation. Our commitment to quality, attention to
                detail, and customer satisfaction defines everything we do.
              </p>

              <ul className="space-y-4">
                {[
                  "Premium quality materials and craftsmanship",
                  "Customized solutions tailored to your needs",
                  "Experienced team of professionals",
                  "Attention to detail in every project",
                  "Competitive pricing without compromising quality",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={company_name_3}
                  alt="Sasra Hanaro craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stat card */}
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-card p-6 max-w-xs animate-slide-up opacity-0"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  10+ Years
                </div>
                <p className="text-muted-foreground">
                  Of excellence in craftsmanship and service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Ready to Elevate Your Brand?"
        description="Whether you're looking for premium advertising solutions or exquisite gems, we're here to help you stand out."
        primaryActionLabel="Contact Us"
        primaryActionTo="/gems"
        secondaryActionLabel="Explore Gallery"
        secondaryActionTo="/gallery"
        backgroundImage="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2070"
      />

      <Footer />
    </div>
  );
};

export default Index;
