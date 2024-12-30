"use client";

import { Button } from "@/components/ui/button";
import { ImageSlider, type Slide } from "@/components/ui/image-slider";
import { SectionContainer } from "@/components/ui/section-container";
import robotics from "./../../../public/images/robotics.webp";
import unreal from "./../../../public/images/unreal.webp";
import threed from "./../../../public/images/3d.webp";

interface HeroProps {
  dictionary: {
    hero: {
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
    };
    solutions: {
      slides: {
        robotics: { image: string };
        unreal: { image: string };
        additive: { image: string };
      };
    };
  };
}

export function Hero({ dictionary }: HeroProps) {
  const slides: Slide[] = [
    {
      image: threed,
    },
    {
      image: robotics,
    },
    {
      image: unreal,
    },
  ];

  return (
    <SectionContainer className="relative flex min-h-screen w-full items-center justify-center pt-20">
      <div className="flex flex-col justify-center p-8 lg:p-16">
        <h1 className="mb-4 text-3xl font-medium sm:text-3xl md:text-4xl lg:text-4xl">
          <span className="block">{dictionary.hero.title.main}</span>
          <span className="text-foreground">{dictionary.hero.title.sub}</span>
        </h1>

        <p className="mb-8 max-w-2xl text-base text-muted-foreground">
          {dictionary.hero.subtitle}
        </p>

        <div className="mb-12 flex flex-wrap items-center gap-4">
          <Button variant="gradient">{dictionary.hero.cta.primary}</Button>
          <Button variant="gradientAlternative">
            {dictionary.hero.cta.secondary}
          </Button>
        </div>
      </div>
      <ImageSlider slides={slides} />
    </SectionContainer>
  );
}
