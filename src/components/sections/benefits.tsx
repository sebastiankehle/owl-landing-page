"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Boxes, Microscope, MonitorPlay } from "lucide-react";

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
        <FadeIn className="text-center">
          <div className="inline-flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-background/50 px-3 py-1 text-xs backdrop-blur transition-colors hover:border-violet-500/40">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500" />
              <span className="text-foreground">
                {dictionary.benefits.title}
              </span>
            </span>
          </div>
          <p className="mt-4 text-2xl font-medium sm:text-3xl md:text-4xl">
            {dictionary.benefits.subtitle}
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Speed Card */}
          <FadeIn className="rounded-2xl border bg-background/50 p-8 backdrop-blur">
            <div className="flex items-start justify-between">
              <Boxes className="h-8 w-8 stroke-[1.5] text-violet-500" />
              <div className="text-xs text-muted-foreground">
                {dictionary.benefits.items.speed.label} •{" "}
                {dictionary.benefits.items.speed.metric}
              </div>
            </div>
            <h3 className="mt-6 text-lg font-medium">
              {dictionary.benefits.items.speed.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {dictionary.benefits.items.speed.description}
            </p>
            <ul className="mt-6 space-y-4">
              {dictionary.benefits.items.speed.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Scalability Card */}
          <FadeIn className="rounded-2xl border bg-background/50 p-8 backdrop-blur">
            <div className="flex items-start justify-between">
              <Microscope className="h-8 w-8 stroke-[1.5] text-cyan-500" />
              <div className="text-xs text-muted-foreground">
                {dictionary.benefits.items.scalability.label} •{" "}
                {dictionary.benefits.items.scalability.metric}
              </div>
            </div>
            <h3 className="mt-6 text-xl font-medium">
              {dictionary.benefits.items.scalability.title}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {dictionary.benefits.items.scalability.description}
            </p>
            <ul className="mt-6 space-y-4">
              {dictionary.benefits.items.scalability.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Precision Card */}
          <FadeIn className="rounded-2xl border bg-background/50 p-8 backdrop-blur">
            <div className="flex items-start justify-between">
              <MonitorPlay className="h-8 w-8 stroke-[1.5] text-emerald-500" />
              <div className="text-xs text-muted-foreground">
                {dictionary.benefits.items.precision.label} •{" "}
                {dictionary.benefits.items.precision.metric}
              </div>
            </div>
            <h3 className="mt-6 text-xl font-medium">
              {dictionary.benefits.items.precision.title}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {dictionary.benefits.items.precision.description}
            </p>
            <ul className="mt-6 space-y-4">
              {dictionary.benefits.items.precision.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
