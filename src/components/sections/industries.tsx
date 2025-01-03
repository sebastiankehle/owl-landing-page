"use client";

import { InView } from "@/components/ui/in-view";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const INDUSTRY_CONFIG = [
  {
    key: "biotech",
    category: "Biotech & Pharma",
    image: "/images/industries/biotech.webp",
  },
  {
    key: "healthcare",
    category: "Healthcare",
    image: "/images/industries/healthcare.webp",
  },
  {
    key: "semiconductor",
    category: "Semiconductor",
    image: "/images/industries/semiconductor.webp",
  },
  {
    key: "aerospace",
    category: "Aerospace",
    image: "/images/industries/aerospace.webp",
  },
  {
    key: "automotive",
    category: "Automotive",
    image: "/images/industries/automotive.webp",
  },
  {
    key: "research",
    category: "Research",
    image: "/images/industries/research.webp",
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
    src: config.image,
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
    <div className="relative overflow-hidden py-24">
      <div className="container relative">
        <InView
          className="text-center"
          variants={{
            hidden: { opacity: 0, filter: "blur(4px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
        >
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
            {dictionary.industries.title}
          </h2>
        </InView>

        <div className="mx-auto mt-16 max-w-[1400px]">
          <Carousel
            items={cards.map((card, index) => (
              <Card key={card.title} card={card} index={index} layout />
            ))}
          />
        </div>
      </div>
    </div>
  );
}
