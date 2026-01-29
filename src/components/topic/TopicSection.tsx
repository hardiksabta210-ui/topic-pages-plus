import { TopicSection as TopicSectionType } from "@/data/topics";

interface TopicSectionProps {
  section: TopicSectionType;
  index: number;
  color: "forest" | "ocean" | "earth" | "leaf";
}

const colorClasses = {
  forest: "bg-primary/5",
  ocean: "bg-ocean/5",
  earth: "bg-earth/5",
  leaf: "bg-leaf/5",
};

const TopicSection = ({ section, index, color }: TopicSectionProps) => {
  const isEven = index % 2 === 0;
  const bgClass = isEven ? "bg-background" : colorClasses[color];

  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <div className="container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            section.imagePosition === "left" ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <div
            className={`space-y-6 ${
              section.imagePosition === "left" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold">{section.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {section.content}
            </p>
          </div>

          {/* Visual Element */}
          <div
            className={`${
              section.imagePosition === "left" ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-muted to-secondary overflow-hidden shadow-card">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Section {index + 1}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicSection;
