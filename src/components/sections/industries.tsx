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
    image: biotech,
  },
  {
    key: "healthcare",
    image: medical,
  },
  {
    key: "semiconductor",
    image: semiconductor,
  },
  {
    key: "aerospace",
    image: space,
  },
  {
    key: "automotive",
    image: automotive,
  },
  {
    key: "research",
    image: researchDevelopment,
  },
] as const;

interface IndustriesProps {
  dictionary: {
    industries: {
      title: {
        main: string;
        sub: string;
      };
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
    description: dictionary.industries.items[config.key].description,
  }));

  return (
    <div className="relative">
      <div className="container">
        <InView
          className="text-left"
          variants={{
            hidden: { opacity: 0, filter: "blur(4px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
        >
          <h2 className="text-xl font-semibold sm:text-2xl">
            <span className="flex flex-col">
              <span className="text-foreground">
                {dictionary.industries.title.main}
              </span>
              <span className="text-muted-foreground">
                {dictionary.industries.title.sub}
              </span>
            </span>
          </h2>
        </InView>

        <InView
          className="mx-auto max-w-[1400px]"
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Carousel
            items={cards.map((card) => (
              <Card key={card.title} card={card} />
            ))}
          />
        </InView>
      </div>
    </div>
  );
}
