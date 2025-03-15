import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import GemCard from "@/components/GemCard";
import CallToAction from "@/components/CallToAction";
import Ruby from "../images/gems/ruby.png";
import Alexandrite from "../images/gems/alexandrite.jpg";
import ChrysoberylCatseye from "../images/gems/chrysoberyl_catseye.png";
import Chrysoberyl from "../images/gems/chrysoberyl.jpg";
import BlueSapphire from "../images/gems/blue_sapphire_2.jpg";
import WhiteSapphire from "../images/gems/white_sapphire.webp";
import YellowSapphire from "../images/gems/yellow_sapphire.webp";
import Padparadscha from "../images/gems/padparadscha.jpg";
import Spessartine from "../images/gems/spessartine.jpg";
import Almandine from "../images/gems/almandine.jpg";
import Pyrope from "../images/gems/pyrope.jpg";
import Spinel from "../images/gems/spinel.jpg";
import CobaltSpinel from "../images/gems/cobalt_spinel.jpg";
import Schorl from "../images/gems/schorl.jpg";
import Topaz from "../images/gems/topaz.jpg";
import Zircon from "../images/gems/zircon.jpg";
import Quartz from "../images/gems/quartz.png";
import Amethyst from "../images/gems/amethyst.png";
import Citrine from "../images/gems/citrine.jpg";
import RoseQuartz from "../images/gems/rose_quartz.webp";
import JediSpinel from "../images/gems/jedi_spinel.jpg";
import Tourmaline from "../images/gems/tourmaline.jpg";
import Moonstone from "../images/gems/moonstone.jpg";
import gem_collection from "@/images/gem_collection.jpg";

export const GEMS = [
  {
    id: 1,
    name: "Ruby",
    hardness: 9,
    specificGravity: [3.98, 4.05],
    chemicalFormula: "Al2O3",
    image: Ruby,
  },
  {
    id: 2,
    name: "Alexandrite",
    hardness: 8.5,
    specificGravity: [3.7, 3.78],
    chemicalFormula: "BeAl2O4",
    image: Alexandrite,
  },
  {
    id: 3,
    name: "Chrysoberyl Cat's Eye",
    hardness: 8.5,
    specificGravity: [3.7, 3.78],
    chemicalFormula: "BeAl2O4",
    image: ChrysoberylCatseye,
  },
  {
    id: 4,
    name: "Chrysoberyl",
    hardness: 8.5,
    specificGravity: [3.7, 3.78],
    chemicalFormula: "BeAl2O4",
    image: Chrysoberyl,
  },
  {
    id: 5,
    name: "Blue Sapphire",
    hardness: 9,
    specificGravity: [3.98, 4.05],
    chemicalFormula: "Al2O3",
    image: BlueSapphire,
  },
  {
    id: 6,
    name: "White Sapphire",
    hardness: 9,
    specificGravity: [3.98, 4.05],
    chemicalFormula: "Al2O3",
    image: WhiteSapphire,
  },
  {
    id: 7,
    name: "Yellow Sapphire",
    hardness: 9,
    specificGravity: [3.98, 4.05],
    chemicalFormula: "Al2O3",
    image: YellowSapphire,
  },
  {
    id: 8,
    name: "Padparadscha Sapphire",
    hardness: 9,
    specificGravity: [3.98, 4.05],
    chemicalFormula: "Al2O3",
    image: Padparadscha,
  },
  {
    id: 9,
    name: "Spessartite Garnet",
    hardness: 7.5,
    specificGravity: [3.15, 4.3],
    chemicalFormula: "Mn3Al2(SiO4)3",
    image: Spessartine,
  },
  {
    id: 10,
    name: "Almandine Garnet",
    hardness: 7.5,
    specificGravity: [3.1, 4.3],
    chemicalFormula: "Fe3Al2(SiO4)3",
    image: Almandine,
  },
  {
    id: 11,
    name: "Pyrope Garnet",
    hardness: 7.5,
    specificGravity: [3.1, 4.3],
    chemicalFormula: "Mg3Al2(SiO4)3",
    image: Pyrope,
  },
  {
    id: 12,
    name: "Spinel",
    hardness: 7.5,
    specificGravity: [3.54, 4.62],
    chemicalFormula: "MgAl2O4",
    image: Spinel,
  },
  {
    id: 13,
    name: "Cobalt Spinel",
    hardness: 7.5,
    specificGravity: [3.34, 3.62],
    chemicalFormula: "MgAl2O4",
    image: CobaltSpinel,
  },
  {
    id: 14,
    name: "Schorl",
    hardness: 7,
    specificGravity: [3.06, 3.08],
    chemicalFormula: "NaFe3Al6(Si6O18)(BO3)3(OH)3OH",
    image: Schorl,
  },
  {
    id: 15,
    name: "Topaz",
    hardness: 8,
    specificGravity: [3.49, 3.57],
    chemicalFormula: "Be3Al2(SiO3)6",
    image: Topaz,
  },
  {
    id: 16,
    name: "Zircon",
    hardness: 7.5,
    specificGravity: [4.6, 4.7],
    chemicalFormula: "ZrSiO4",
    image: Zircon,
  },
  {
    id: 17,
    name: "Quartz",
    hardness: 7,
    specificGravity: [2.59, 2.63],
    chemicalFormula: "SiO2",
    image: Quartz,
  },
  {
    id: 18,
    name: "Amethyst",
    hardness: 7,
    specificGravity: [2.59, 2.63],
    chemicalFormula: "SiO2",
    image: Amethyst,
  },
  {
    id: 19,
    name: "Citrine",
    hardness: 7,
    specificGravity: [2.59, 2.63],
    chemicalFormula: "SiO2",
    image: Citrine,
  },
  {
    id: 20,
    name: "Rose Quartz",
    hardness: 7,
    specificGravity: [2.59, 2.63],
    chemicalFormula: "SiO2",
    image: RoseQuartz,
  },
  {
    id: 21,
    name: "Jedi Spinel",
    hardness: 7.5,
    specificGravity: [3.54, 3.62],
    chemicalFormula: "MgAl2O4",
    image: JediSpinel,
  },
  {
    id: 22,
    name: "Tourmaline",
    hardness: 7,
    specificGravity: [3.06, 3.08],
    chemicalFormula: "Na(Li,Al)3Al6(BO3)3Si6O18(OH)4",
    image: Tourmaline,
  },
  {
    id: 23,
    name: "Moonstone",
    hardness: 6,
    specificGravity: [2.54, 2.66],
    chemicalFormula: "KAlSi3O8",
    image: Moonstone,
  },
];

const Gems = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <PageHeader
        title="Exquisite Gem Collection"
        subtitle="Discover our handpicked selection of rare and precious gemstones from around the world."
        backgroundImage={gem_collection}
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
            {GEMS.map((gem, index) => (
              <GemCard
                key={gem.id}
                {...gem}
                className="animate-slide-up opacity-0"
                style={{ animationDelay: `${0.1 * (index % 3)}s` }}
              />
            ))}
          </div>
        </div>
      </section>

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
