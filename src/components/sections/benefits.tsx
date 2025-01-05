"use client";

import { InView } from "@/components/ui/in-view";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { AnimatedBeamMultipleInputs } from "@/components/animations/animated-beam-multiple.inputs";
import { AnimatedNetworkBackground } from "@/components/animations/animated-network-background";
import { AnimatedIconCloud } from "@/components/animations/animated-icon-cloud";
const BENEFIT_CONFIG = [
  {
    key: "innovation",
    className: "col-span-2",
    color: "violet",
    animation: "first",
  },
  {
    key: "integration",
    className: undefined,
    color: "cyan",
    animation: "second",
  },
  {
    key: "precision",
    className: undefined,
    color: "emerald",
    animation: "third",
  },
] as const;

interface BenefitsProps {
  dictionary: {
    benefits: {
      title: {
        main: string;
        sub: string;
      };
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
  const getTopContent = (animation: string) => {
    switch (animation) {
      case "first":
        return <AnimatedIconCloud />;
      case "second":
        return <AnimatedBeamMultipleInputs className="h-full" />;
      case "third":
        return <AnimatedNetworkBackground />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <InView
        className="text-left"
        variants={{
          hidden: { opacity: 0, filter: "blur(4px)" },
          visible: { opacity: 1, filter: "blur(0px)" },
        }}
      >
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
          <span className="flex flex-col">
            <span className="text-foreground">
              {dictionary.benefits.title.main}
            </span>
            <span className="text-muted-foreground">
              {dictionary.benefits.title.sub}
            </span>
          </span>
        </h2>
      </InView>

      <div className="mb-24 mt-8">
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
                  className="h-[600px] shadow-[2px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[2px_4px_12px_rgba(0,0,0,0.3)]"
                  topContent={getTopContent(config.animation)}
                />
              </InView>
            );
          })}
        </BentoGrid>
      </div>
    </div>
  );
}
