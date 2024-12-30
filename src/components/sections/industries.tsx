"use client";

import { InView } from "@/components/ui/in-view";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

const INDUSTRY_CONFIG = [
  {
    key: "biotech",
    href: "#biotech",
    className: "col-span-2",
    color: "violet",
  },
  {
    key: "healthcare",
    href: "#healthcare",
    className: undefined,
    color: "violet",
  },
  {
    key: "semiconductor",
    href: "#semiconductor",
    className: undefined,
    color: "cyan",
  },
  {
    key: "aerospace",
    href: "#aerospace",
    className: undefined,
    color: "cyan",
  },
  {
    key: "automotive",
    href: "#automotive",
    className: undefined,
    color: "emerald",
  },
  {
    key: "research",
    href: "#research",
    className: "col-span-2",
    color: "emerald",
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
          <h2 className="mt-4 text-2xl font-medium sm:text-3xl">
            {dictionary.industries.title}
          </h2>
        </InView>

        <div className="mt-16">
          <BentoGrid>
            {INDUSTRY_CONFIG.map((config, index) => {
              const item = dictionary.industries.items[config.key];
              return (
                <InView
                  key={config.key}
                  className={config.className}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewOptions={{ margin: "-100px" }}
                >
                  <BentoCard
                    name={item.title}
                    description={item.description}
                    className="h-full"
                    color={config.color}
                  />
                </InView>
              );
            })}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}
