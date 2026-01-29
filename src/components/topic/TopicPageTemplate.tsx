import { Topic } from "@/data/topics";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TopicHero from "./TopicHero";
import TopicSection from "./TopicSection";
import TopicCardsGrid from "./TopicCardsGrid";
import TopicCTA from "./TopicCTA";

interface TopicPageTemplateProps {
  topic: Topic;
}

const TopicPageTemplate = ({ topic }: TopicPageTemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <TopicHero
          title={topic.title}
          tagline={topic.tagline}
          description={topic.description}
          heroImage={topic.heroImage}
        />

        <div id="topic-content">
          {topic.sections.map((section, index) => (
            <TopicSection
              key={section.id}
              section={section}
              index={index}
              color={topic.color}
            />
          ))}

          <TopicCardsGrid cards={topic.cards} color={topic.color} />

          <TopicCTA
            title={topic.callToAction.title}
            description={topic.callToAction.description}
            buttonText={topic.callToAction.buttonText}
            buttonLink={topic.callToAction.buttonLink}
            color={topic.color}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TopicPageTemplate;
