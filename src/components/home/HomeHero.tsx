import { Button } from "@/components/ui/button";
import { ArrowDown, Leaf, TreePine, Waves, Zap } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";

const HomeHero = () => {
  const scrollToTopics = () => {
    const topics = document.getElementById("topics-section");
    topics?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroMain}
          alt="Planet Earth"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-4 pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6 animate-fade-in">
          <Leaf className="h-4 w-4" />
          <span className="text-sm font-medium">Your Guide to Environmental Awareness</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-slide-up">
          Protect Our Planet,
          <br />
          <span className="text-primary">One Action at a Time</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in">
          Explore environmental topics, understand the challenges we face, and discover how small changes can create a big impact.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in">
          <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-soft">
            <TreePine className="h-4 w-4 text-primary" />
            <span className="text-sm">Forests</span>
          </div>
          <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-soft">
            <Waves className="h-4 w-4 text-ocean" />
            <span className="text-sm">Oceans</span>
          </div>
          <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-soft">
            <Zap className="h-4 w-4 text-earth" />
            <span className="text-sm">Energy</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <Button size="lg" onClick={scrollToTopics}>
            Explore Topics
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Take Action
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
