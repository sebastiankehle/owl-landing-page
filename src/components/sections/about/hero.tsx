"use client";

import Image from "next/image";
import { SectionContainer } from "@/components/ui/section-container";
import aboutHero from "../../../../public/images/hero/about-hero.webp";

interface AboutHeroProps {
  dictionary: {
    hero: {
      title: string;
      subtitle: string;
    };
  };
}

export function AboutHero({ dictionary }: AboutHeroProps) {
  return (
    <SectionContainer className="relative flex min-h-screen w-full items-center justify-center pt-20">
      <div className="flex flex-col justify-center p-8 lg:p-16">
        <h1 className="mb-4 text-3xl font-medium sm:text-3xl md:text-4xl lg:text-4xl">
          {dictionary.hero.title}
        </h1>
        <p className="mb-8 max-w-2xl text-base text-muted-foreground">
          {dictionary.hero.subtitle}
        </p>
      </div>

      <div className="relative aspect-square">
        <Image
          src={aboutHero}
          alt="About Hero"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </SectionContainer>
  );
}
