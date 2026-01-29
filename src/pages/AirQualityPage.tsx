import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowDown, Wind, Activity, MapPin, Heart, Shield, AlertTriangle, ThermometerSun, Leaf, Factory, Car, Home } from "lucide-react";
import heroAirQuality from "@/assets/hero-air-quality.jpg";
import EcoChatWidget from "@/components/chat/EcoChatWidget";

const AirQualityPage = () => {
  const scrollToContent = () => {
    document.getElementById("air-content")?.scrollIntoView({ behavior: "smooth" });
  };

  const aqiLevels = [
    { range: "0-50", label: "Good", color: "bg-green-500", description: "Air quality is satisfactory with little to no risk." },
    { range: "51-100", label: "Moderate", color: "bg-yellow-500", description: "Acceptable but may concern sensitive individuals." },
    { range: "101-150", label: "Unhealthy for Sensitive", color: "bg-orange-500", description: "Sensitive groups may experience effects." },
    { range: "151-200", label: "Unhealthy", color: "bg-red-500", description: "Everyone may begin to experience effects." },
    { range: "201-300", label: "Very Unhealthy", color: "bg-purple-600", description: "Health warnings; serious effects." },
    { range: "300+", label: "Hazardous", color: "bg-rose-900", description: "Emergency conditions for entire population." },
  ];

  const pollutionSources = [
    { icon: Factory, title: "Industrial Emissions", description: "Factories and power plants release SO2, NOx, and particulate matter" },
    { icon: Car, title: "Vehicle Exhaust", description: "Cars and trucks emit CO, NOx, and fine particles (PM2.5)" },
    { icon: Home, title: "Household Burning", description: "Wood stoves, fireplaces, and cooking contribute to indoor pollution" },
    { icon: Leaf, title: "Agricultural Activities", description: "Crop burning and fertilizers release ammonia and particulates" },
  ];

  const healthImpacts = [
    { icon: Heart, title: "Cardiovascular", description: "Increased risk of heart attacks, strokes, and irregular heartbeat", stat: "4.2M", statLabel: "deaths/year globally" },
    { icon: Wind, title: "Respiratory", description: "Asthma attacks, reduced lung function, chronic bronchitis", stat: "90%", statLabel: "of people breathe polluted air" },
    { icon: Shield, title: "Immune System", description: "Weakened defenses against infections and diseases", stat: "7M", statLabel: "premature deaths annually" },
    { icon: AlertTriangle, title: "Vulnerable Groups", description: "Children, elderly, and pregnant women at higher risk", stat: "93%", statLabel: "of children exposed" },
  ];

  const actionTips = [
    "Check your local AQI before outdoor activities",
    "Use N95 masks on high pollution days",
    "Keep windows closed during rush hours",
    "Add air-purifying plants to your home",
    "Use exhaust fans while cooking",
    "Avoid burning waste or leaves",
    "Walk or cycle on cleaner routes",
    "Support local clean air initiatives",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroAirQuality} alt="Air Quality" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="relative z-10 container text-center text-primary-foreground px-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Wind className="h-4 w-4" />
              <span className="text-sm font-medium">Hyperlocal Environmental Awareness</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-primary-foreground">
              Air Quality & Pollution
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 leading-relaxed text-primary-foreground/90">
              Understand your local air quality, identify pollution sources, and take action to protect your health and environment.
            </p>
            <Button onClick={scrollToContent} variant="ghost" size="lg" className="mt-12 text-primary-foreground hover:bg-primary-foreground/10">
              <span className="mr-2">Learn More</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </section>

        <div id="air-content">
          {/* AQI Indicator Section */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="text-center mb-12">
                <Activity className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding Air Quality Index</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The AQI tells you how clean or polluted your air is, and what health effects might be a concern.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {aqiLevels.map((level) => (
                  <div key={level.label} className="bg-card rounded-2xl p-4 shadow-card text-center">
                    <div className={`w-12 h-12 mx-auto rounded-full ${level.color} mb-3`} />
                    <div className="font-bold text-lg">{level.range}</div>
                    <div className="font-medium text-sm mb-2">{level.label}</div>
                    <p className="text-xs text-muted-foreground">{level.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pollution Sources */}
          <section className="py-16 md:py-24 bg-muted">
            <div className="container">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <MapPin className="h-10 w-10 text-earth mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Local Pollution Sources</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Understanding where pollution comes from helps you take targeted action to reduce exposure.
                  </p>
                  <div className="space-y-4">
                    {pollutionSources.map((source) => (
                      <div key={source.title} className="flex gap-4 items-start bg-card rounded-xl p-4 shadow-soft">
                        <div className="w-10 h-10 rounded-lg bg-earth/10 flex items-center justify-center flex-shrink-0">
                          <source.icon className="h-5 w-5 text-earth" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{source.title}</h3>
                          <p className="text-sm text-muted-foreground">{source.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-earth/20 to-leaf/20 rounded-3xl p-8 md:p-12">
                  <ThermometerSun className="h-16 w-16 text-earth mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-earth font-bold">•</span>
                      Indoor air can be 2-5x more polluted than outdoor air
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-earth font-bold">•</span>
                      Rush hour pollution levels can be 10x higher than midday
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-earth font-bold">•</span>
                      Air pollution particles can travel over 1,000 kilometers
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-earth font-bold">•</span>
                      Cooking without ventilation equals smoking 400 cigarettes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Health Impact Cards */}
          <section className="py-16 md:py-24 bg-background">
            <div className="container">
              <div className="text-center mb-12">
                <Heart className="h-12 w-12 mx-auto mb-4 text-destructive" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Health & Environmental Impact</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Air pollution affects every organ in your body and contributes to climate change.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {healthImpacts.map((impact) => (
                  <div key={impact.title} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                      <impact.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <div className="text-3xl font-bold text-destructive mb-1">{impact.stat}</div>
                    <div className="text-xs text-muted-foreground mb-3">{impact.statLabel}</div>
                    <h3 className="font-semibold mb-2">{impact.title}</h3>
                    <p className="text-sm text-muted-foreground">{impact.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Practical Actions */}
          <section className="py-16 md:py-24 bg-primary/5">
            <div className="container">
              <div className="text-center mb-12">
                <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Practical Actions You Can Take</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Simple steps to reduce your exposure and improve local air quality.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {actionTips.map((tip, i) => (
                  <div key={i} className="bg-card rounded-xl p-4 shadow-soft flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{i + 1}</span>
                    </div>
                    <p className="text-sm font-medium">{tip}</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ask EcoBuddy About Air Quality</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Get personalized advice about air quality, pollution protection, and healthy living from our AI assistant.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Wind className="h-5 w-5 text-primary" />
                      <span>Learn about local air quality conditions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <span>Get tips for protecting your family</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Leaf className="h-5 w-5 text-primary" />
                      <span>Discover air-purifying solutions</span>
                    </li>
                  </ul>
                </div>
                <EcoChatWidget topic="air-quality" inline placeholder="Ask about air quality..." />
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

export default AirQualityPage;
