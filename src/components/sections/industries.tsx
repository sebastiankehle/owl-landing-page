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
      subtitle: string;
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
    <div className="relative overflow-hidden bg-zinc-100/80 py-24 dark:bg-zinc-950/90">
      <div className="container relative">
        <InView
          className="text-center"
          variants={{
            hidden: { opacity: 0, filter: "blur(4px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
        >
          <div className="inline-flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-background/50 px-3 py-1 text-xs backdrop-blur transition-colors hover:border-violet-500/40">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500" />
              <span className="text-foreground">
                {dictionary.industries.title}
              </span>
            </span>
          </div>
          <p className="mt-4 text-2xl font-medium sm:text-3xl">
            {dictionary.industries.subtitle}
          </p>
        </InView>

        <InView className="mt-16">
          <BentoGrid>
            {INDUSTRY_CONFIG.map((config) => {
              const item = dictionary.industries.items[config.key];
              return (
                <BentoCard
                  key={config.key}
                  name={item.title}
                  description={item.description}
                  href={config.href}
                  className={config.className || ""}
                  cta={dictionary.industries.cta?.[config.key] || "Learn More"}
                  color={config.color}
                />
              );
            })}
          </BentoGrid>
        </InView>
      </div>
    </div>
  );
}
