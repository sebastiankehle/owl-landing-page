"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import advancedAdditiveSolutions from "../../../public/images/hero/advanced-additive-solutions-hero.webp";
import robotics from "../../../public/images/hero/robotics-hero.webp";
import unrealDevelopment from "../../../public/images/hero/unreal-development-hero.webp";

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
      slides: Record<
        "first" | "second" | "third",
        {
          title: string;
          description: {
            highlight: string;
            detail: string;
          };
        }
      >;
    };
  };
}

export function Hero({ dictionary }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: advancedAdditiveSolutions,
      info: dictionary.hero.slides.first,
      title: dictionary.hero.slides.first.title,
      description: dictionary.hero.slides.first.description,
    },
    {
      image: robotics,
      info: dictionary.hero.slides.second,
      title: dictionary.hero.slides.second.title,
      description: dictionary.hero.slides.second.description,
    },
    {
      image: unrealDevelopment,
      info: dictionary.hero.slides.third,
      title: dictionary.hero.slides.third.title,
      description: dictionary.hero.slides.third.description,
    },
  ];

  return (
    <section className="relative min-h-[80vh] pt-20">
      <div className="container pb-20 lg:pb-0">
        <div className="relative flex min-h-[calc(60vh-5rem)] flex-col-reverse rounded-3xl bg-background lg:min-h-[calc(80vh-5rem)] lg:flex-row">
          {/* Left Content */}
          <div className="flex w-full flex-col justify-center p-8 lg:w-1/2">
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, position: "absolute" }}
                animate={{ opacity: 1, position: "relative" }}
                exit={{ opacity: 0, position: "absolute" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="space-y-8"
              >
                <h1 className="text-3xl font-semibold sm:text-3xl md:text-4xl lg:text-4xl">
                  <span className="block">{slides[activeSlide].title}</span>
                </h1>

                <p className="max-w-xl text-base">
                  <span className="text-foreground">
                    {slides[activeSlide].description.highlight}
                  </span>{" "}
                  <span className="text-muted-foreground">
                    {slides[activeSlide].description.detail}
                  </span>
                </p>

                <div className="flex items-center gap-4">
                  <Button variant="default" showArrow>
                    {dictionary.hero.cta.primary}
                  </Button>
                  <Button variant="outline" showArrow>
                    {dictionary.hero.cta.secondary}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Slider */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-3xl lg:aspect-auto lg:w-1/2 lg:rounded-none lg:rounded-r-3xl">
            <div className="absolute inset-0">
              <AnimatePresence mode="sync" initial={false}>
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, position: "absolute" }}
                  animate={{ opacity: 1, position: "relative" }}
                  exit={{ opacity: 0, position: "absolute" }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={slides[activeSlide].image}
                    alt={slides[activeSlide].title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnails */}
        <div className="absolute -bottom-4 left-1/2 flex w-[calc(100%-4rem)] -translate-x-1/2 gap-2 lg:w-auto lg:gap-4">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={cn(
                "duration-250 group relative h-16 overflow-hidden rounded-lg transition-all ease-out lg:h-20",
                "w-full lg:w-32",
                activeSlide === index
                  ? "ring-2 ring-[#7c3aed]"
                  : "hover:ring-2 hover:ring-[#7c3aed]/30",
              )}
              data-active={activeSlide === index}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={cn(
                  "duration-250 object-cover transition-all ease-out",
                  activeSlide === index
                    ? "blur-0 brightness-100"
                    : "blur-[1px] group-hover:blur-0",
                )}
                sizes="(max-width: 768px) 100vw, 128px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
