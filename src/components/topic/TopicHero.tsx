import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TopicHeroProps {
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
}

const TopicHero = ({ title, tagline, description, heroImage }: TopicHeroProps) => {
  const scrollToContent = () => {
    const content = document.getElementById("topic-content");
    content?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-primary-foreground px-4">
        <p className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 opacity-90 animate-fade-in">
          {tagline}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-slide-up text-primary-foreground">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90 leading-relaxed animate-fade-in text-primary-foreground/90">
          {description}
        </p>
        
        <Button
          onClick={scrollToContent}
          variant="ghost"
          size="lg"
          className="mt-12 text-primary-foreground hover:bg-primary-foreground/10 animate-fade-in"
        >
          <span className="mr-2">Explore</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </Button>
      </div>
    </section>
  );
};

export default TopicHero;
