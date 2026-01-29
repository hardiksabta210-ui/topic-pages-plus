import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowDown, Droplets, Zap, Sun, Wind, ThermometerSun, Lightbulb, ShowerHead, Gauge, Calculator, CheckCircle2, DollarSign, Leaf } from "lucide-react";
import heroEnergyWater from "@/assets/hero-energy-water.jpg";
import EcoChatWidget from "@/components/chat/EcoChatWidget";
import { useState } from "react";

const EnergyWaterPage = () => {
  const [monthlyBill, setMonthlyBill] = useState(100);
  const estimatedSavings = Math.round(monthlyBill * 0.3);

  const scrollToContent = () => {
    document.getElementById("energy-content")?.scrollIntoView({ behavior: "smooth" });
  };

  const energyTips = [
    { icon: Lightbulb, title: "Switch to LED Bulbs", description: "LED bulbs use 75% less energy and last 25x longer than incandescent bulbs", savings: "Save $75/year" },
    { icon: ThermometerSun, title: "Optimize Thermostat", description: "Set AC to 24-26°C in summer, heating to 18-20°C in winter", savings: "Save 10-15%" },
    { icon: Sun, title: "Use Natural Light", description: "Open curtains during day, use light-colored walls to reflect light", savings: "Save $50/year" },
    { icon: Zap, title: "Unplug Standby Devices", description: "Electronics on standby can account for 10% of your electricity bill", savings: "Save $100/year" },
  ];

  const waterTips = [
    { icon: ShowerHead, title: "Shorter Showers", description: "Reduce shower time by 2 minutes to save 40 liters per shower", savings: "Save 14,600L/year" },
    { icon: Droplets, title: "Fix Leaky Faucets", description: "A dripping faucet can waste 20,000 liters per year", savings: "Save 20,000L/year" },
    { icon: Gauge, title: "Use Full Loads", description: "Run washing machines and dishwashers only when full", savings: "Save 15,000L/year" },
    { icon: Leaf, title: "Smart Irrigation", description: "Water plants early morning or evening to reduce evaporation", savings: "Save 50% water" },
  ];

  const dailyChecklist = [
    "Turn off lights when leaving a room",
    "Unplug chargers not in use",
    "Run appliances during off-peak hours",
    "Use cold water for laundry",
    "Turn off the tap while brushing",
    "Check for dripping faucets",
  ];

  const weeklyChecklist = [
    "Clean AC/heater filters",
    "Check for leaking pipes",
    "Review energy usage patterns",
    "Batch similar tasks together",
    "Inspect window seals",
    "Plan energy-efficient meals",
  ];

  const benefitStats = [
    { value: "30%", label: "Average Bill Reduction", icon: DollarSign, color: "text-primary" },
    { value: "2.5T", label: "CO₂ Reduced Annually", icon: Leaf, color: "text-leaf" },
    { value: "50K+", label: "Liters Water Saved/Year", icon: Droplets, color: "text-ocean" },
    { value: "8yrs", label: "Payback on Solar Panels", icon: Sun, color: "text-earth" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroEnergyWater} alt="Energy and Water Conservation" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container text-center text-primary-foreground px-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4" />
              <span className="text-sm font-medium">Household Sustainability</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-primary-foreground">
              Energy & Water Conservation
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 leading-relaxed text-primary-foreground/90">
              Practical tips to reduce your household's energy and water consumption while saving money.
            </p>
            <Button onClick={scrollToContent} variant="ghost" size="lg" className="mt-12 text-primary-foreground hover:bg-primary-foreground/10">
              <span className="mr-2">Start Saving</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </section>

        <div id="energy-content">
          {/* Benefits Stats */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Conserve?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Conservation benefits your wallet, your community, and the planet.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefitStats.map((stat) => (
                  <div key={stat.label} className="bg-card rounded-2xl p-6 text-center shadow-card">
                    <stat.icon className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />
                    <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Energy Tips */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container">
              <div className="text-center mb-12">
                <Zap className="h-12 w-12 mx-auto mb-4 text-earth" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Energy Saving Tips</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Simple changes that make a big difference in your electricity usage.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {energyTips.map((tip) => (
                  <div key={tip.title} className="bg-card rounded-2xl p-6 shadow-card flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-earth/10 flex items-center justify-center flex-shrink-0">
                      <tip.icon className="h-6 w-6 text-earth" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{tip.title}</h3>
                        <span className="text-xs font-medium text-earth bg-earth/10 px-2 py-1 rounded-full">{tip.savings}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Water Tips */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="text-center mb-12">
                <Droplets className="h-12 w-12 mx-auto mb-4 text-ocean" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Water Saving Tips</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Every drop counts. Here's how to reduce your water footprint.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {waterTips.map((tip) => (
                  <div key={tip.title} className="bg-card rounded-2xl p-6 shadow-card flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-ocean/10 flex items-center justify-center flex-shrink-0">
                      <tip.icon className="h-6 w-6 text-ocean" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{tip.title}</h3>
                        <span className="text-xs font-medium text-ocean bg-ocean/10 px-2 py-1 rounded-full">{tip.savings}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Savings Calculator */}
          <section className="py-16 md:py-24 bg-primary/5">
            <div className="container">
              <div className="max-w-2xl mx-auto text-center">
                <Calculator className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Estimate Your Savings</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  See how much you could save by implementing conservation practices.
                </p>

                <div className="bg-card rounded-2xl p-8 shadow-card">
                  <label className="block text-left mb-4">
                    <span className="text-sm font-medium">Your Current Monthly Bill ($)</span>
                    <input
                      type="range"
                      min="50"
                      max="500"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number(e.target.value))}
                      className="w-full mt-2 accent-primary"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>$50</span>
                      <span className="font-bold text-foreground">${monthlyBill}</span>
                      <span>$500</span>
                    </div>
                  </label>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-primary/10 rounded-xl p-4">
                      <p className="text-sm text-muted-foreground mb-1">Monthly Savings</p>
                      <p className="text-3xl font-bold text-primary">${estimatedSavings}</p>
                    </div>
                    <div className="bg-leaf/10 rounded-xl p-4">
                      <p className="text-sm text-muted-foreground mb-1">Annual Savings</p>
                      <p className="text-3xl font-bold text-leaf">${estimatedSavings * 12}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    *Estimated savings based on 30% reduction with conservation practices
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Checklists */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container">
              <div className="text-center mb-12">
                <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-leaf" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Conservation Checklists</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Build sustainable habits with these easy-to-follow checklists.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Sun className="h-5 w-5 text-earth" />
                    Daily Habits
                  </h3>
                  <ul className="space-y-3">
                    {dailyChecklist.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded border-2 border-primary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-card">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Wind className="h-5 w-5 text-ocean" />
                    Weekly Tasks
                  </h3>
                  <ul className="space-y-3">
                    {weeklyChecklist.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded border-2 border-ocean flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* AI Chat Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Personalized Guidance</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Ask EcoBuddy for customized tips based on your home and lifestyle.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-earth" />
                      <span>Analyze your energy usage patterns</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Droplets className="h-5 w-5 text-ocean" />
                      <span>Get water-saving recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-primary" />
                      <span>Calculate potential savings</span>
                    </li>
                  </ul>
                </div>
                <EcoChatWidget topic="energy-water" inline placeholder="Ask about energy & water savings..." />
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

export default EnergyWaterPage;
