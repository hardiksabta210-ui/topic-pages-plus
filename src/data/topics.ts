import heroForest from "@/assets/hero-forest.jpg";
import heroOcean from "@/assets/hero-ocean.jpg";
import heroEnergy from "@/assets/hero-energy.jpg";
import heroWildlife from "@/assets/hero-wildlife.jpg";

export interface TopicSection {
  id: string;
  title: string;
  content: string;
  imagePosition?: "left" | "right";
  image?: string;
}

export interface TopicCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  stat?: string;
  statLabel?: string;
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  color: "forest" | "ocean" | "earth" | "leaf";
  sections: TopicSection[];
  cards: TopicCard[];
  callToAction: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const topics: Topic[] = [
  {
    id: "forests",
    slug: "forests",
    title: "Forest Conservation",
    tagline: "Protecting the Lungs of Our Planet",
    description:
      "Forests cover about 31% of the global land area and are home to more than 80% of all terrestrial species. They play a crucial role in regulating our climate, purifying our air, and protecting biodiversity.",
    heroImage: heroForest,
    color: "forest",
    sections: [
      {
        id: "importance",
        title: "Why Forests Matter",
        content:
          "Forests are vital ecosystems that support life on Earth. They absorb carbon dioxide, produce oxygen, and provide habitat for countless species. Beyond environmental benefits, forests support the livelihoods of 1.6 billion people worldwide and contribute to food security, water purification, and climate regulation.",
        imagePosition: "right",
      },
      {
        id: "threats",
        title: "Threats to Our Forests",
        content:
          "Every year, we lose approximately 10 million hectares of forest—an area the size of Iceland. Deforestation is driven by agriculture expansion, logging, urbanization, and forest fires. This loss accelerates climate change and pushes countless species toward extinction.",
        imagePosition: "left",
      },
      {
        id: "action",
        title: "Taking Action Together",
        content:
          "Protecting forests requires a global effort. From supporting reforestation projects to choosing sustainable products, every action counts. Indigenous communities are at the forefront of forest conservation, protecting 80% of the world's remaining biodiversity.",
        imagePosition: "right",
      },
    ],
    cards: [
      {
        id: "carbon",
        title: "Carbon Storage",
        description: "Forests absorb 2.6 billion tonnes of carbon dioxide annually",
        icon: "TreePine",
        stat: "2.6B",
        statLabel: "tonnes CO₂/year",
      },
      {
        id: "biodiversity",
        title: "Biodiversity Haven",
        description: "Home to 80% of all terrestrial species on Earth",
        icon: "Bird",
        stat: "80%",
        statLabel: "of land species",
      },
      {
        id: "oxygen",
        title: "Oxygen Production",
        description: "Amazon rainforest alone produces 20% of world's oxygen",
        icon: "Wind",
        stat: "20%",
        statLabel: "world's oxygen",
      },
      {
        id: "water",
        title: "Water Cycle",
        description: "Forests help regulate water cycles and prevent flooding",
        icon: "Droplets",
        stat: "75%",
        statLabel: "freshwater depends on forests",
      },
    ],
    callToAction: {
      title: "Join the Forest Movement",
      description: "Plant trees, support conservation, make a difference.",
      buttonText: "Get Involved",
      buttonLink: "#",
    },
  },
  {
    id: "oceans",
    slug: "oceans",
    title: "Ocean Conservation",
    tagline: "Safeguarding Our Blue Planet",
    description:
      "Oceans cover 71% of Earth's surface and contain 97% of the planet's water. They regulate our climate, produce over half of the world's oxygen, and support incredible marine biodiversity.",
    heroImage: heroOcean,
    color: "ocean",
    sections: [
      {
        id: "importance",
        title: "The Ocean's Vital Role",
        content:
          "Our oceans are the lifeblood of Earth. They absorb about 30% of the carbon dioxide produced by humans, buffering the impacts of global warming. Phytoplankton in the ocean produce 50-80% of the oxygen we breathe. Oceans also provide protein for over 3 billion people worldwide.",
        imagePosition: "right",
      },
      {
        id: "threats",
        title: "Oceans Under Pressure",
        content:
          "Plastic pollution, overfishing, ocean acidification, and warming waters threaten marine ecosystems. Every year, 8 million metric tons of plastic enter our oceans. Coral reefs, which support 25% of marine life, are dying at unprecedented rates due to rising temperatures.",
        imagePosition: "left",
      },
      {
        id: "action",
        title: "Waves of Change",
        content:
          "Ocean conservation starts with individual choices—reducing plastic use, choosing sustainable seafood, and supporting marine protected areas. Together, we can create a wave of change that restores our oceans to health.",
        imagePosition: "right",
      },
    ],
    cards: [
      {
        id: "oxygen",
        title: "Oxygen Source",
        description: "Phytoplankton produce most of Earth's oxygen",
        icon: "Waves",
        stat: "50-80%",
        statLabel: "of oxygen",
      },
      {
        id: "carbon",
        title: "Carbon Sink",
        description: "Oceans absorb 30% of human-produced CO₂",
        icon: "CloudRain",
        stat: "30%",
        statLabel: "CO₂ absorbed",
      },
      {
        id: "species",
        title: "Marine Life",
        description: "Over 230,000 known species call the ocean home",
        icon: "Fish",
        stat: "230K+",
        statLabel: "known species",
      },
      {
        id: "economy",
        title: "Blue Economy",
        description: "Ocean industries support millions of jobs globally",
        icon: "Anchor",
        stat: "$3T",
        statLabel: "annual value",
      },
    ],
    callToAction: {
      title: "Dive Into Action",
      description: "Help protect our oceans for future generations.",
      buttonText: "Make Waves",
      buttonLink: "#",
    },
  },
  {
    id: "energy",
    slug: "renewable-energy",
    title: "Renewable Energy",
    tagline: "Powering a Sustainable Future",
    description:
      "Transitioning to renewable energy is essential for combating climate change. Solar, wind, hydro, and other clean energy sources offer a path to a sustainable future while creating jobs and driving innovation.",
    heroImage: heroEnergy,
    color: "earth",
    sections: [
      {
        id: "importance",
        title: "The Clean Energy Revolution",
        content:
          "Renewable energy is the fastest-growing energy source in the world. Solar and wind power costs have dropped by 89% and 70% respectively over the past decade. This revolution is creating millions of green jobs and reducing our dependence on fossil fuels.",
        imagePosition: "right",
      },
      {
        id: "benefits",
        title: "Benefits Beyond Climate",
        content:
          "Clean energy improves air quality, reduces health costs, and creates local jobs. Communities with renewable energy installations see economic benefits through new jobs, lower energy costs, and reduced pollution. Energy independence also strengthens national security.",
        imagePosition: "left",
      },
      {
        id: "future",
        title: "The Path Forward",
        content:
          "Achieving net-zero emissions by 2050 is possible with current technologies. This requires unprecedented investment in clean energy infrastructure, smart grids, and energy storage. Every household and business can contribute to this transition.",
        imagePosition: "right",
      },
    ],
    cards: [
      {
        id: "solar",
        title: "Solar Power",
        description: "The sun provides more energy in one hour than humanity uses in a year",
        icon: "Sun",
        stat: "89%",
        statLabel: "cost reduction since 2010",
      },
      {
        id: "wind",
        title: "Wind Energy",
        description: "Wind turbines now power millions of homes globally",
        icon: "Wind",
        stat: "70%",
        statLabel: "cost reduction since 2010",
      },
      {
        id: "jobs",
        title: "Green Jobs",
        description: "Renewable energy creates more jobs than fossil fuels",
        icon: "Users",
        stat: "12M+",
        statLabel: "jobs worldwide",
      },
      {
        id: "capacity",
        title: "Growing Capacity",
        description: "Renewable capacity doubled in the last decade",
        icon: "Zap",
        stat: "3,000+",
        statLabel: "GW installed globally",
      },
    ],
    callToAction: {
      title: "Power the Change",
      description: "Switch to clean energy and reduce your carbon footprint.",
      buttonText: "Go Renewable",
      buttonLink: "#",
    },
  },
  {
    id: "wildlife",
    slug: "wildlife",
    title: "Wildlife Protection",
    tagline: "Preserving Earth's Incredible Biodiversity",
    description:
      "Wildlife is facing its biggest crisis in human history. From iconic elephants to tiny pollinators, species around the world need our protection now more than ever.",
    heroImage: heroWildlife,
    color: "leaf",
    sections: [
      {
        id: "crisis",
        title: "The Biodiversity Crisis",
        content:
          "We are experiencing the sixth mass extinction, with species disappearing 1,000 times faster than natural rates. One million species are currently threatened with extinction. This loss affects ecosystem stability, food security, and even human health.",
        imagePosition: "right",
      },
      {
        id: "importance",
        title: "Why Wildlife Matters",
        content:
          "Every species plays a role in its ecosystem. Bees pollinate our crops, wolves regulate prey populations, and fungi break down organic matter. Losing species disrupts these delicate balances, with cascading effects throughout ecosystems.",
        imagePosition: "left",
      },
      {
        id: "hope",
        title: "Conservation Success Stories",
        content:
          "There is hope. Species like the bald eagle, humpback whale, and giant panda have recovered thanks to conservation efforts. Protected areas now cover 17% of land and 8% of oceans. Community-based conservation is proving effective worldwide.",
        imagePosition: "right",
      },
    ],
    cards: [
      {
        id: "threatened",
        title: "Species at Risk",
        description: "Over 40,000 species are threatened with extinction",
        icon: "AlertTriangle",
        stat: "40K+",
        statLabel: "threatened species",
      },
      {
        id: "extinction",
        title: "Extinction Rate",
        description: "Species are disappearing at an alarming rate",
        icon: "TrendingDown",
        stat: "1000x",
        statLabel: "faster than natural",
      },
      {
        id: "protected",
        title: "Protected Areas",
        description: "Conservation areas are expanding globally",
        icon: "Shield",
        stat: "17%",
        statLabel: "of land protected",
      },
      {
        id: "success",
        title: "Recovery Stories",
        description: "Many species are bouncing back with help",
        icon: "Heart",
        stat: "48",
        statLabel: "species saved from extinction",
      },
    ],
    callToAction: {
      title: "Protect Wildlife Today",
      description: "Support conservation efforts and give wildlife a fighting chance.",
      buttonText: "Take Action",
      buttonLink: "#",
    },
  },
];

export const getTopicBySlug = (slug: string): Topic | undefined => {
  return topics.find((topic) => topic.slug === slug);
};
