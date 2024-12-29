"use client";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { NetworkBackground } from "@/components/animations/network-background";

interface HeroProps {
  dictionary: {
    hero: {
      badges: {
        engineering: string;
        digital: string;
      };
      title: string;
      subtitle: string;
      cta: {
        primary: string;
        secondary: string;
      };
      trust: {
        title: string;
      };
    };
  };
}

export function Hero({ dictionary }: HeroProps) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center px-4 pt-20 sm:px-6 lg:px-8">
      <div className="container relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <FadeIn className="flex flex-col justify-center">
            <div className="mb-6 inline-flex gap-3">
              <div className="w-fit">
                <span className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1 text-xs backdrop-blur">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500" />
                  <span className="text-muted-foreground">
                    {dictionary.hero.badges.engineering}
                  </span>
                </span>
              </div>
              <div className="w-fit">
                <span className="inline-flex items-center gap-2 rounded-full border bg-background/50 px-3 py-1 text-xs backdrop-blur">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  <span className="text-muted-foreground">
                    {dictionary.hero.badges.digital}
                  </span>
                </span>
              </div>
            </div>

            <h1 className="mb-6 text-2xl font-medium sm:text-3xl md:text-4xl">
              {dictionary.hero.title}
            </h1>

            <p className="mb-8 max-w-2xl text-sm text-muted-foreground md:text-sm">
              {dictionary.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button variant="gradient">{dictionary.hero.cta.primary}</Button>
              <Button variant="gradientAlternative">
                {dictionary.hero.cta.secondary}
              </Button>
            </div>

            <div className="mt-12 border-t pt-8">
              <p className="mb-4 text-sm text-muted-foreground">
                {dictionary.hero.trust.title}
              </p>
            </div>
          </FadeIn>

          <div className="hidden lg:block">
            <div className="aspect-square w-full overflow-hidden rounded-xl border bg-background/50 p-1 backdrop-blur supports-[backdrop-filter]:bg-background/50">
              <div className="relative h-full w-full">
                <NetworkBackground />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
