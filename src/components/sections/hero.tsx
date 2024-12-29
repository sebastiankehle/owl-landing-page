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
      title: {
        main: string;
        sub: string;
      };
      subtitle: string;
      cta: {
        primary: string;
        secondary: string;
      };
      network: {
        title: string;
        subtitle: string;
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
            <div className="mb-8 inline-flex gap-3">
              <div className="w-fit">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-background/50 px-3 py-1 text-xs backdrop-blur transition-colors hover:border-violet-500/40">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500" />
                  <span className="text-foreground">
                    {dictionary.hero.badges.engineering}
                  </span>
                </span>
              </div>
              <div className="w-fit">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-background/50 px-3 py-1 text-xs backdrop-blur transition-colors hover:border-cyan-500/40">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-500" />
                  <span className="text-foreground">
                    {dictionary.hero.badges.digital}
                  </span>
                </span>
              </div>
            </div>

            <h1 className="mb-4 text-3xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="block">{dictionary.hero.title.main}</span>
              <span className="text-foreground">
                {dictionary.hero.title.sub}
              </span>
            </h1>

            <p className="mb-8 max-w-2xl text-base text-muted-foreground md:text-lg">
              {dictionary.hero.subtitle}
            </p>

            <div className="mb-12 flex flex-wrap items-center gap-4">
              <Button size="lg" variant="gradient">
                {dictionary.hero.cta.primary}
              </Button>
              <Button size="lg" variant="gradientAlternative">
                {dictionary.hero.cta.secondary}
              </Button>
            </div>

            <div className="border-t border-muted pt-8">
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                {dictionary.hero.trust.title}
              </p>
            </div>
          </FadeIn>

          <div className="hidden lg:block">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border bg-background/50 p-1 backdrop-blur supports-[backdrop-filter]:bg-background/50">
              <div className="absolute inset-6 z-10 flex flex-col justify-end">
                <div className="space-y-2 rounded-lg border border-foreground/5 bg-background/30 p-4 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-background/30">
                  <p className="text-sm font-medium text-foreground">
                    {dictionary.hero.network.title}
                  </p>
                  <p className="text-xs text-muted-foreground/80">
                    {dictionary.hero.network.subtitle}
                  </p>
                </div>
              </div>
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
