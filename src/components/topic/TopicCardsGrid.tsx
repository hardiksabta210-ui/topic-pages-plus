import { TopicCard as TopicCardType } from "@/data/topics";
import TopicCard from "./TopicCard";

interface TopicCardsGridProps {
  cards: TopicCardType[];
  color: "forest" | "ocean" | "earth" | "leaf";
  title?: string;
}

const TopicCardsGrid = ({ cards, color, title = "Key Facts & Figures" }: TopicCardsGridProps) => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <TopicCard key={card.id} card={card} color={color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicCardsGrid;
