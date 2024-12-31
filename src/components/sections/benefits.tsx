"use client";

import { InView } from "@/components/ui/in-view";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

const BENEFIT_CONFIG = [
  {
    key: "innovation",
    className: "col-span-2",
    color: "violet",
  },
  {
    key: "integration",
    className: undefined,
    color: "cyan",
  },
  {
    key: "precision",
    className: undefined,
    color: "emerald",
  },
] as const;

interface BenefitsProps {
  dictionary: {
    benefits: {
      title: string;
      items: {
        innovation: {
          title: string;
          description: string;
        };
        integration: {
          title: string;
          description: string;
        };
        precision: {
          title: string;
          description: string;
        };
      };
    };
  };
}

export function Benefits({ dictionary }: BenefitsProps) {
  return (
    <div className="relative py-32">
      <div className="container">
        <InView
          className="text-center"
          variants={{
            hidden: { opacity: 0, filter: "blur(4px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            {dictionary.benefits.title}
          </h2>
        </InView>

        <div className="mt-16">
          <BentoGrid>
            {BENEFIT_CONFIG.map((config, index) => {
              const item = dictionary.benefits.items[config.key];
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
