import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowDown, Trash2, Recycle, Leaf, AlertCircle, CheckCircle, XCircle, Package, Apple, Cpu, Droplets, HelpCircle } from "lucide-react";
import heroWaste from "@/assets/hero-waste.jpg";
import EcoChatWidget from "@/components/chat/EcoChatWidget";
import { useState } from "react";

const WasteSegregationPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const scrollToContent = () => {
    document.getElementById("waste-content")?.scrollIntoView({ behavior: "smooth" });
  };

  const wasteBins = [
    {
      name: "Dry Waste",
      color: "bg-blue-500",
      icon: Package,
      description: "Recyclable materials that are clean and dry",
      items: ["Paper & cardboard", "Plastic bottles & containers", "Glass bottles & jars", "Metal cans", "Clean packaging"],
      notItems: ["Food-stained items", "Wet paper", "Broken glass"],
    },
    {
      name: "Wet Waste",
      color: "bg-leaf",
      icon: Apple,
      description: "Organic, biodegradable materials that decompose",
      items: ["Food scraps", "Fruit & vegetable peels", "Coffee grounds", "Garden waste", "Soiled paper napkins"],
      notItems: ["Plastic", "Meat bones", "Dairy products"],
    },
    {
      name: "E-Waste",
      color: "bg-amber-500",
      icon: Cpu,
      description: "Electronic items requiring special disposal",
      items: ["Old phones & tablets", "Batteries", "Cables & chargers", "Light bulbs", "Small appliances"],
      notItems: ["Large appliances", "Medical devices", "Items with data"],
    },
    {
      name: "Hazardous",
      color: "bg-red-500",
      icon: AlertCircle,
      description: "Materials that pose health or environmental risks",
      items: ["Paints & chemicals", "Medicines", "Aerosol cans", "Pesticides", "Motor oil"],
      notItems: ["Empty containers", "Expired food", "Normal trash"],
    },
  ];

  const wasteGuide = [
    { item: "Plastic bottle", category: "Dry Waste", tip: "Rinse and crush before disposal" },
    { item: "Banana peel", category: "Wet Waste", tip: "Great for composting" },
    { item: "Old smartphone", category: "E-Waste", tip: "Wipe data before recycling" },
    { item: "Pizza box", category: "Dry Waste", tip: "Remove food residue first" },
    { item: "Coffee grounds", category: "Wet Waste", tip: "Use as plant fertilizer" },
    { item: "Battery", category: "E-Waste", tip: "Never throw in regular trash" },
    { item: "Glass jar", category: "Dry Waste", tip: "Clean and remove labels" },
    { item: "Vegetable peels", category: "Wet Waste", tip: "Start a compost bin" },
    { item: "Light bulb", category: "E-Waste", tip: "LED bulbs can be recycled" },
    { item: "Medicine", category: "Hazardous", tip: "Return to pharmacy" },
    { item: "Paint can", category: "Hazardous", tip: "Dry out before disposal" },
    { item: "Newspaper", category: "Dry Waste", tip: "Bundle together for recycling" },
  ];

  const filteredGuide = wasteGuide.filter((item) =>
    item.item.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const commonMistakes = [
    { mistake: "Throwing batteries in regular trash", correction: "Take to e-waste collection center" },
    { mistake: "Mixing food waste with recyclables", correction: "Always separate wet and dry waste" },
    { mistake: "Not cleaning containers before recycling", correction: "Rinse containers to avoid contamination" },
    { mistake: "Disposing medicines in sink/toilet", correction: "Return unused medicines to pharmacy" },
    { mistake: "Putting plastic bags in recycling", correction: "Most facilities can't process plastic bags" },
    { mistake: "Recycling broken glass with bottles", correction: "Wrap broken glass separately" },
  ];

  const impactStats = [
    { value: "70%", label: "Waste can be recycled or composted", description: "With proper segregation" },
    { value: "30%", label: "Landfill space saved", description: "Through recycling" },
    { value: "50%", label: "Methane reduction", description: "By composting organics" },
    { value: "90%", label: "E-waste components recyclable", description: "When properly handled" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroWaste} alt="Waste Segregation" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container text-center text-primary-foreground px-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Recycle className="h-4 w-4" />
              <span className="text-sm font-medium">Reduce, Reuse, Recycle</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-primary-foreground">
              Waste Segregation
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 leading-relaxed text-primary-foreground/90">
              Learn how to properly sort your waste for a cleaner community and healthier planet.
            </p>
            <Button onClick={scrollToContent} variant="ghost" size="lg" className="mt-12 text-primary-foreground hover:bg-primary-foreground/10">
              <span className="mr-2">Learn to Sort</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </section>

        <div id="waste-content">
          {/* Waste Categories */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="text-center mb-12">
                <Trash2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Know Your Bins</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Understanding waste categories is the first step to proper segregation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {wasteBins.map((bin) => (
                  <div key={bin.name} className="bg-card rounded-2xl overflow-hidden shadow-card">
                    <div className={`${bin.color} h-3`} />
                    <div className="p-6">
                      <div className={`w-12 h-12 rounded-xl ${bin.color}/20 flex items-center justify-center mb-4`}>
                        <bin.icon className={`h-6 w-6`} style={{ color: bin.color === "bg-leaf" ? "hsl(var(--leaf))" : undefined }} />
                      </div>
                      <h3 className="font-bold text-xl mb-2">{bin.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{bin.description}</p>

                      <div className="mb-4">
                        <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 text-green-500" /> Include:
                        </p>
                        <ul className="text-sm space-y-1">
                          {bin.items.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-green-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
                          <XCircle className="h-3 w-3 text-red-500" /> Avoid:
                        </p>
                        <ul className="text-sm space-y-1">
                          {bin.notItems.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-muted-foreground">
                              <span className="w-1 h-1 rounded-full bg-red-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Waste Guide Search */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container">
              <div className="text-center mb-12">
                <HelpCircle className="h-12 w-12 mx-auto mb-4 text-ocean" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Where Does This Go?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Search for an item to find out which bin it belongs in.
                </p>
              </div>

              <div className="max-w-2xl mx-auto mb-8">
                <input
                  type="text"
                  placeholder="Search for an item (e.g., plastic bottle, banana peel)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {filteredGuide.map((item) => (
                  <div key={item.item} className="bg-card rounded-xl p-4 shadow-soft flex items-center gap-4">
                    <div className={`w-3 h-12 rounded-full ${
                      item.category === "Dry Waste" ? "bg-blue-500" :
                      item.category === "Wet Waste" ? "bg-leaf" :
                      item.category === "E-Waste" ? "bg-amber-500" : "bg-red-500"
                    }`} />
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.item}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{item.category}</p>
                      <p className="text-xs text-primary">{item.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="text-center mb-12">
                <AlertCircle className="h-12 w-12 mx-auto mb-4 text-destructive" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Mistakes to Avoid</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Learn from the most frequent segregation errors households make.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {commonMistakes.map((item) => (
                  <div key={item.mistake} className="bg-card rounded-2xl p-6 shadow-card">
                    <div className="flex items-center gap-2 mb-3">
                      <XCircle className="h-5 w-5 text-destructive" />
                      <h3 className="font-medium text-destructive">Don't</h3>
                    </div>
                    <p className="text-sm mb-4">{item.mistake}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-leaf" />
                      <h3 className="font-medium text-leaf">Do This Instead</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.correction}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Environmental Impact */}
          <section className="py-16 md:py-24 bg-primary/5">
            <div className="container">
              <div className="text-center mb-12">
                <Leaf className="h-12 w-12 mx-auto mb-4 text-leaf" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Environmental Impact</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See how proper waste segregation makes a real difference.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="bg-card rounded-2xl p-6 text-center shadow-card">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <h3 className="font-semibold mb-1">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Chat Section */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ask EcoBuddy About Waste</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Not sure where something goes? Ask our AI assistant for guidance.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Recycle className="h-5 w-5 text-primary" />
                      <span>Get recycling tips for any item</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-leaf" />
                      <span>Learn composting techniques</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Droplets className="h-5 w-5 text-ocean" />
                      <span>Find local recycling centers</span>
                    </li>
                  </ul>
                </div>
                <EcoChatWidget topic="waste" inline placeholder="Ask about waste segregation..." />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <EcoChatWidget />
    </div>
  );
};

export default WasteSegregationPage;
