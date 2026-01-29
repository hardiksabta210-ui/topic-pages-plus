import { TopicCard as TopicCardType } from "@/data/topics";
import {
  TreePine,
  Bird,
  Wind,
  Droplets,
  Waves,
  CloudRain,
  Fish,
  Anchor,
  Sun,
  Users,
  Zap,
  AlertTriangle,
  TrendingDown,
  Shield,
  Heart,
  Leaf,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  TreePine,
  Bird,
  Wind,
  Droplets,
  Waves,
  CloudRain,
  Fish,
  Anchor,
  Sun,
  Users,
  Zap,
  AlertTriangle,
  TrendingDown,
  Shield,
  Heart,
  Leaf,
};

interface TopicCardProps {
  card: TopicCardType;
  color: "forest" | "ocean" | "earth" | "leaf";
}

const colorClasses = {
  forest: {
    bg: "bg-primary/10",
    text: "text-primary",
    stat: "text-primary",
  },
  ocean: {
    bg: "bg-ocean/10",
    text: "text-ocean",
    stat: "text-ocean",
  },
  earth: {
    bg: "bg-earth/10",
    text: "text-earth",
    stat: "text-earth",
  },
  leaf: {
    bg: "bg-leaf/10",
    text: "text-leaf",
    stat: "text-leaf",
  },
};

const TopicCard = ({ card, color }: TopicCardProps) => {
  const IconComponent = iconMap[card.icon] || Leaf;
  const colors = colorClasses[color];

  return (
    <div className="group bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
      >
        <IconComponent className={`h-6 w-6 ${colors.text}`} />
      </div>

      {/* Stat */}
      {card.stat && (
        <div className="mb-4">
          <span className={`text-3xl md:text-4xl font-bold ${colors.stat}`}>
            {card.stat}
          </span>
          {card.statLabel && (
            <p className="text-xs text-muted-foreground mt-1">{card.statLabel}</p>
          )}
        </div>
      )}

      {/* Content */}
      <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {card.description}
      </p>
    </div>
  );
};

export default TopicCard;
