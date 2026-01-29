import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowDown, Wind, Zap, Trash2, Leaf, Users, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroMain from "@/assets/hero-main.jpg";
import heroAirQuality from "@/assets/hero-air-quality.jpg";
import heroEnergyWater from "@/assets/hero-energy-water.jpg";
import heroWaste from "@/assets/hero-waste.jpg";
import EcoChatWidget from "@/components/chat/EcoChatWidget";

const ProblemCard = ({
  title,
  tagline,
  description,
  image,
  link,
  icon: Icon,
  color,
}: {
  title: string;
  tagline: string;
  description: string;
  image: string;
  link: string;
  icon: React.ElementType;
  color: string;
}) => (
  <Link
    to={link}
    className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
  >
    <div className="aspect-[16/9] overflow-hidden relative">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${color} flex items-center justify-center`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
    <div className="p-6 md:p-8">
      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{tagline}</p>
      <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
        {description}
      </p>
      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        Explore Solutions
      </Button>
    </div>
  </Link>
);

const Index = () => {
  const scrollToProblems = () => {
    document.getElementById("problems-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const problemAreas = [
    {
      title: "Air Quality & Pollution",
      tagline: "Hyperlocal Environmental Awareness",
      description: "Understand your local air quality, identify pollution sources, and take action to protect your health and community.",
      image: heroAirQuality,
      link: "/air-quality",
      icon: Wind,
      color: "bg-ocean",
    },
    {
      title: "Energy & Water Conservation",
      tagline: "Household Sustainability",
      description: "Practical tips and tools to reduce your household's energy and water consumption while saving money.",
      image: heroEnergyWater,
      link: "/energy-water",
      icon: Zap,
      color: "bg-earth",
    },
    {
      title: "Waste Segregation",
      tagline: "Reduce, Reuse, Recycle",
      description: "Learn proper waste sorting to keep your community clean and reduce environmental impact.",
      image: heroWaste,
      link: "/waste",
      icon: Trash2,
      color: "bg-leaf",
    },
  ];

  const stats = [
    { value: "9/10", label: "People breathe polluted air globally", icon: Wind },
    { value: "30%", label: "Energy wasted in average homes", icon: Zap },
    { value: "70%", label: "Waste that can be recycled", icon: Trash2 },
    { value: "1M+", label: "Species at risk from pollution", icon: Leaf },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroMain} alt="Planet Earth" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
          </div>

          <div className="relative z-10 container text-center px-4 pt-20">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Leaf className="h-4 w-4" />
              <span className="text-sm font-medium">Your Community Sustainability Guide</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-slide-up">
              Understand, Track, and
              <br />
              <span className="text-primary">Reduce Your Impact</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in">
              Empowering communities and households with localized insights, practical tools, and AI guidance for a sustainable future.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in">
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-soft">
                <Wind className="h-4 w-4 text-ocean" />
                <span className="text-sm">Air Quality</span>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-soft">
                <Zap className="h-4 w-4 text-earth" />
                <span className="text-sm">Energy & Water</span>
              </div>
              <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-soft">
                <Trash2 className="h-4 w-4 text-leaf" />
                <span className="text-sm">Waste Sorting</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
              <Button size="lg" onClick={scrollToProblems}>
                Explore Solutions
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/air-quality">Check Air Quality</Link>
              </Button>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
            </div>
          </div>
        </section>

        {/* Problem Areas Section */}
        <section id="problems-section" className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Core Problem Areas</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Sustainability Challenges We Address
              </h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Explore our comprehensive guides on the most pressing environmental issues affecting your community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {problemAreas.map((problem) => (
                <ProblemCard key={problem.title} {...problem} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Reality We Face</h2>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                Understanding the scale of environmental challenges is the first step to making a difference.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-70" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <p className="text-primary-foreground/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  AI-Powered Guidance for
                  <br />
                  <span className="text-primary">Sustainable Living</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  EcoBuddy, our intelligent assistant, provides personalized advice on environmental topics. Ask questions about air quality, energy conservation, or waste management and get actionable guidance.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Hyperlocal Insights</h3>
                      <p className="text-sm text-muted-foreground">Get advice specific to your area</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-leaf/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-leaf" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Community Focus</h3>
                      <p className="text-sm text-muted-foreground">Solutions for households & communities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-ocean/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-ocean" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Track Progress</h3>
                      <p className="text-sm text-muted-foreground">Monitor your environmental impact</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-earth/10 flex items-center justify-center flex-shrink-0">
                      <Leaf className="h-5 w-5 text-earth" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Practical Actions</h3>
                      <p className="text-sm text-muted-foreground">Step-by-step sustainability guides</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <EcoChatWidget inline placeholder="Ask EcoBuddy anything about sustainability..." />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                EcoBuddy empowers communities and households to understand, track, and reduce their environmental impact. We believe that awareness leads to action, and small changes create big impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-card rounded-full px-6 py-3 text-sm font-medium shadow-soft">
                  🌍 Hyperlocal Awareness
                </div>
                <div className="bg-card rounded-full px-6 py-3 text-sm font-medium shadow-soft">
                  🤖 AI-Powered Guidance
                </div>
                <div className="bg-card rounded-full px-6 py-3 text-sm font-medium shadow-soft">
                  🏠 Household Solutions
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EcoChatWidget />
    </div>
  );
};

export default Index;
