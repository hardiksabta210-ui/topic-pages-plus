import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TopicCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  color: "forest" | "ocean" | "earth" | "leaf";
}

const colorClasses = {
  forest: "gradient-forest",
  ocean: "gradient-ocean",
  earth: "gradient-sunrise",
  leaf: "bg-leaf",
};

const TopicCTA = ({ title, description, buttonText, color }: TopicCTAProps) => {
  return (
    <section className={`py-16 md:py-24 ${colorClasses[color]}`}>
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
          {description}
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="group"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default TopicCTA;
