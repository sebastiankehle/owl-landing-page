"use client";

import { InView } from "@/components/ui/in-view";
import { Boxes, Microscope, MonitorPlay } from "lucide-react";
import { cn } from "@/lib/utils";

const BENEFIT_ITEMS = {
  speed: {
    Icon: Boxes,
    colorClass: "text-violet-500",
    dotColorClass: "bg-violet-500",
  },
  scalability: {
    Icon: Microscope,
    colorClass: "text-cyan-500",
    dotColorClass: "bg-cyan-500",
  },
  precision: {
    Icon: MonitorPlay,
    colorClass: "text-emerald-500",
    dotColorClass: "bg-emerald-500",
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
            {dictionary.benefits.title}
          </h2>
        </InView>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {(
            Object.entries(dictionary.benefits.items) as [
              keyof typeof BENEFIT_ITEMS,
              BenefitItem,
            ][]
          ).map(([key, item], index) => {
            const { Icon, colorClass, dotColorClass } = BENEFIT_ITEMS[key];
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
                <div className="h-full rounded-2xl bg-background p-8">
                  <div className="flex items-start justify-between">
                    <Icon className={cn("h-8 w-8 stroke-[1.5]", colorClass)} />
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
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            dotColorClass,
                          )}
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
