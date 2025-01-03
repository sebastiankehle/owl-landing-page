"use client";

import { InView } from "@/components/ui/in-view";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import automotive from "../../../public/images/industries/automotive.webp";
import space from "../../../public/images/industries/space.webp";
import biotech from "../../../public/images/industries/biotech.webp";
import medical from "../../../public/images/industries/medical.webp";
import researchDevelopment from "../../../public/images/industries/research-development.webp";
import semiconductor from "../../../public/images/industries/semiconductor.webp";

const INDUSTRY_CONFIG = [
  {
    key: "biotech",
    category: "Life Sciences",
    image: biotech,
  },
  {
    key: "healthcare",
    category: "Medical Tech",
    image: medical,
  },
  {
    key: "semiconductor",
    category: "Microelectronics",
    image: semiconductor,
  },
  {
    key: "aerospace",
    category: "Space & Defense",
    image: space,
  },
  {
    key: "automotive",
    category: "Mobility",
    image: automotive,
  },
  {
    key: "research",
    category: "Innovation Lab",
    image: researchDevelopment,
  },
] as const;

interface IndustriesProps {
  dictionary: {
    industries: {
      title: string;
      items: Record<
        string,
        {
          title: string;
          description: string;
        }
      >;
      cta: Record<string, string>;
    };
  };
}

export function Industries({ dictionary }: IndustriesProps) {
  const cards = INDUSTRY_CONFIG.map((config) => ({
    src: config.image.src,
    title: dictionary.industries.items[config.key].title,
    category: config.category,
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          {dictionary.industries.items[config.key].description}
        </p>
        <button className="text-sm text-[#7c3aed] hover:text-[#9f75ff]">
          {dictionary.industries.cta[config.key]}
        </button>
      </div>
    ),
  }));

  return (
    <div className="relative overflow-hidden py-16">
      <div className="container relative">
        <InView
          className="text-center"
          variants={{
            hidden: { opacity: 0, filter: "blur(4px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            {dictionary.industries.title}
          </h2>
        </InView>

        <InView
          className="mx-auto mt-16 max-w-[1400px]"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel
            items={cards.map((card, index) => (
              <Card key={card.title} card={card} index={index} layout />
            ))}
          />
        </InView>
      </div>
    </div>
  );
}
