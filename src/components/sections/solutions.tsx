"use client";

import { ImageSlider, type Slide } from "@/components/ui/image-slider";
import { SectionContainer } from "@/components/ui/section-container";
import { ArrowUpRight } from "lucide-react";
import robotics from "./../../../public/images/robotics.webp";
import unreal from "./../../../public/images/unreal.webp";
import threed from "./../../../public/images/3d.webp";

interface SolutionsProps {
  dictionary: {
    solutions: {
      slides: {
        robotics: { title: string; subtitle: string };
        unreal: { title: string; subtitle: string };
        additive: { title: string; subtitle: string };
      };
      description: string;
      established: string;
    };
  };
}

export function Solutions({ dictionary }: SolutionsProps) {
  const slides: Slide[] = [
    {
      image: robotics,
      info: dictionary.solutions.slides.robotics,
    },
    {
      image: unreal,
      info: dictionary.solutions.slides.unreal,
    },
    {
      image: threed,
      info: dictionary.solutions.slides.additive,
    },
  ];

  return (
    <SectionContainer className="relative py-32">
      <ImageSlider slides={slides} />
      <div className="flex flex-col justify-center p-8 lg:p-16">
        <p className="text-2xl font-medium sm:text-3xl">
          {dictionary.solutions.description}
        </p>
        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <ArrowUpRight className="h-4 w-4" />
          <span>{dictionary.solutions.established}</span>
        </div>
      </div>
    </SectionContainer>
  );
}
