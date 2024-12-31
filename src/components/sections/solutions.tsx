"use client";

import { ImageSlider, type Slide } from "@/components/ui/image-slider";
import { SectionContainer } from "@/components/ui/section-container";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import printingAsService from "../../../public/images/solutions/printing-as-service-solutions.webp";
import microfluidics from "../../../public/images/solutions/microfluidics-solutions.webp";
import modelingSimulation from "../../../public/images/solutions/modeling-simulation-solutions.webp";

interface SolutionsProps {
  dictionary: {
    solutions: {
      slides: Record<
        "first" | "second" | "third",
        {
          title: string;
          description: string;
        }
      >;
      description: string;
      established: string;
    };
  };
}

export function Solutions({ dictionary }: SolutionsProps) {
  const params = useParams();
  const lang = params.lang as string;

  const slides: Slide[] = [
    {
      image: printingAsService,
      info: dictionary.solutions.slides.first,
    },
    {
      image: microfluidics,
      info: dictionary.solutions.slides.second,
    },
    {
      image: modelingSimulation,
      info: dictionary.solutions.slides.third,
    },
  ];

  return (
    <SectionContainer className="relative py-32">
      <ImageSlider slides={slides} />
      <div className="flex flex-col justify-center p-8 lg:p-16">
        <p className="text-2xl font-semibold sm:text-3xl">
          {dictionary.solutions.description}
        </p>
        <Link
          href={`/${lang}/about`}
          className="mt-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowUpRight className="h-4 w-4" />
          <span>{dictionary.solutions.established}</span>
        </Link>
      </div>
    </SectionContainer>
  );
}
