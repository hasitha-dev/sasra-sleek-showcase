
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GemCard from "@/components/GemCard";
import CallToAction from "@/components/CallToAction";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import gems from "../../gem_details.json";

const Gems = () => {
  const [selectedGem, setSelectedGem] = useState<(typeof gems.gems)[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Sample stainless steel images for demonstration
  const stainlessImages = [
    "/src/images/stainless_etching/steel_etching_1.jpg",
    "/src/images/stainless_etching/steel_etching_2.jpg",
    "/src/images/stainless_etching/steel_etching_3.jpg",
    "/src/images/stainless_etching/steel_etching_4.jpg",
  ];

  const stainlessNameImages = [
    "/src/images/stainless_name/name_board_1.jpg",
    "/src/images/stainless_name/name_board_2.jpg",
    "/src/images/stainless_name/name_board_3.jpg",
    "/src/images/stainless_name/name_board_4.jpg",
  ];

  const handleGemClick = (gem: (typeof gems.gems)[0]) => {
    setSelectedGem(gem);
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        title="Exquisite Gem Collection"
        subtitle="Discover our handpicked selection of rare and precious gemstones from around the world."
        backgroundImage="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=2070"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium Quality Gems
            </h2>
            <p className="text-lg text-muted-foreground">
              Each gem in our collection is carefully selected for its color,
              clarity, cut, and overall quality. We work directly with trusted
              sources to ensure authenticity and value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gems.gems.map((gem, index) => (
              <GemCard
                key={gem.id}
                {...gem}
                className="animate-slide-up opacity-0"
                style={{ animationDelay: `${0.1 * (index % 3)}s` }}
                onClick={() => handleGemClick(gem)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stainless steel examples dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedGem?.name} - Stainless Steel Examples</DialogTitle>
            <DialogDescription>
              View examples of stainless steel work that can be customized with this gem.
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="etching" className="w-full">
            <TabsList className="w-full justify-start mb-4">
              <TabsTrigger value="etching">Stainless Steel Etching</TabsTrigger>
              <TabsTrigger value="nameboards">Name Boards</TabsTrigger>
            </TabsList>
            
            <TabsContent value="etching" className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stainlessImages.map((img, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <img 
                      src={img} 
                      alt={`Stainless steel etching example ${index + 1}`} 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="nameboards" className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stainlessNameImages.map((img, index) => (
                  <div key={index} className="overflow-hidden rounded-lg">
                    <img 
                      src={img} 
                      alt={`Stainless steel name board example ${index + 1}`} 
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Gem Selection Process
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Sasra Hanaro, we go to great lengths to ensure the quality
                and authenticity of every gem in our collection. Our selection
                process includes:
              </p>

              <ul className="space-y-6">
                {[
                  {
                    title: "Sourcing",
                    description:
                      "We work directly with mines and trusted suppliers to source the finest gems.",
                  },
                  {
                    title: "Expert Evaluation",
                    description:
                      "Each gem undergoes rigorous assessment by our gemologists for color, clarity, cut, and carat weight.",
                  },
                  {
                    title: "Authentication",
                    description:
                      "We provide certification and detailed analysis for each significant gem.",
                  },
                  {
                    title: "Ethically Sourced",
                    description:
                      "We ensure our gems are ethically sourced and traded, supporting sustainable practices.",
                  },
                ].map((step, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80&w=1756"
                  alt="Gem selection process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-5 -right-5 bg-white rounded-lg shadow-card py-3 px-5">
                <span className="text-lg font-medium text-primary">
                  100% Authentic
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Looking for Something Special?"
        description="Can't find what you're looking for? Contact us for custom gem sourcing and special requests."
        primaryActionLabel="Contact via WhatsApp"
        primaryActionTo="https://wa.me/12345678901?text=Hello%2C%20I'm%20interested%20in%20your%20gem%20collection."
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2070"
      />

      <Footer />
    </div>
  );
};

export default Gems;
