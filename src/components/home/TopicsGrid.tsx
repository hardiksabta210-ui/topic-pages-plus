import { Link } from "react-router-dom";
import { topics } from "@/data/topics";
import { ArrowRight } from "lucide-react";

const TopicPreviewCard = ({ topic }: { topic: typeof topics[0] }) => {
  const colorClasses = {
    forest: "hover:border-primary/50",
    ocean: "hover:border-ocean/50",
    earth: "hover:border-earth/50",
    leaf: "hover:border-leaf/50",
  };

  return (
    <Link
      to={`/topic/${topic.slug}`}
      className={`group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 border border-transparent ${colorClasses[topic.color]}`}
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={topic.heroImage}
          alt={topic.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
          {topic.tagline}
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {topic.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
          {topic.description}
        </p>
        <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
          <span>Explore Topic</span>
          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

const TopicsGrid = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">
            Explore Our Topics
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Environmental Issues That Matter
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover the pressing environmental challenges facing our planet and learn how you can make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {topics.map((topic) => (
            <TopicPreviewCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsGrid;
