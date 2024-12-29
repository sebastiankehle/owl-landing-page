"use client";

import { InView } from "@/components/ui/in-view";
import { Boxes, Microscope, MonitorPlay } from "lucide-react";

const BENEFIT_ITEMS = {
  speed: {
    Icon: Boxes,
    color: "violet",
  },
  scalability: {
    Icon: Microscope,
    color: "cyan",
  },
  precision: {
    Icon: MonitorPlay,
    color: "emerald",
  },
} as const;

type BenefitItem = {
  metric: string;
  label: string;
  title: string;
  description: string;
  features: string[];
};

interface BenefitsProps {
  dictionary: {
    benefits: {
      title: string;
      subtitle: string;
      items: {
        speed: {
          metric: string;
          label: string;
          title: string;
          description: string;
          features: string[];
        };
        scalability: {
          metric: string;
          label: string;
          title: string;
          description: string;
          features: string[];
        };
        precision: {
          metric: string;
          label: string;
          title: string;
          description: string;
          features: string[];
        };
      };
    };
  };
}

export function Benefits({ dictionary }: BenefitsProps) {
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
                {dictionary.benefits.title}
              </span>
            </span>
          </div>
          <p className="mt-4 text-2xl font-medium sm:text-3xl">
            {dictionary.benefits.subtitle}
          </p>
        </InView>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {(
            Object.entries(dictionary.benefits.items) as [
              keyof typeof BENEFIT_ITEMS,
              BenefitItem,
            ][]
          ).map(([key, item], index) => {
            const { Icon, color } = BENEFIT_ITEMS[key];
            return (
              <InView
                key={key}
                className="h-full"
                variants={{
                  hidden: { opacity: 0, filter: "blur(4px)" },
                  visible: { opacity: 1, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                <div className="h-full rounded-2xl border bg-background/50 p-8 backdrop-blur">
                  <div className="flex items-start justify-between">
                    <Icon
                      className={`h-8 w-8 stroke-[1.5] text-${color}-500`}
                    />
                    <div className="text-xs text-muted-foreground">
                      {item.label} • {item.metric}
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-medium">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <ul className="mt-6 space-y-4">
                    {item.features.map((feature: string) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div
                          className={`h-1.5 w-1.5 rounded-full bg-${color}-500`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </InView>
            );
          })}
        </div>
      </div>
    </div>
  );
}
