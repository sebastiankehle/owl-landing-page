"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import advancedAdditiveSolutions from "../../../public/images/hero/advanced-additive-solutions-hero.webp";
import robotics from "../../../public/images/hero/robotics-hero.webp";
import unrealDevelopment from "../../../public/images/hero/unreal-development-hero.webp";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

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
      slides: {
        first: {
          title: string;
          subtitle: string;
        };
        second: {
          title: string;
          subtitle: string;
        };
        third: {
          title: string;
          subtitle: string;
        };
      };
    };
  };
}

export function Hero({ dictionary }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: advancedAdditiveSolutions,
      title: dictionary.hero.slides.first.title,
      subtitle: dictionary.hero.slides.first.subtitle,
    },
    {
      image: robotics,
      title: dictionary.hero.slides.second.title,
      subtitle: dictionary.hero.slides.second.subtitle,
    },
    {
      image: unrealDevelopment,
      title: dictionary.hero.slides.third.title,
      subtitle: dictionary.hero.slides.third.subtitle,
    },
  ];

  return (
    <section className="min-h[60vh] relative pt-20 lg:min-h-[80vh]">
      <div className="container pb-4 lg:pb-0">
        <div className="relative flex min-h-[calc(60vh-5rem)] flex-col-reverse rounded-3xl bg-background shadow-[2px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[2px_4px_12px_rgba(0,0,0,0.3)] lg:min-h-[calc(80vh-5rem)] lg:flex-row">
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
                  <span className="flex flex-col">
                    <span className="text-foreground">
                      {slides[activeSlide].title}
                    </span>
                    <span className="text-muted-foreground">
                      {slides[activeSlide].subtitle}
                    </span>
                  </span>
                </h1>

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
                {slides.map(
                  (slide, index) =>
                    activeSlide === index && (
                      <motion.div
                        key={slide.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute inset-0 h-full w-full overflow-hidden rounded-t-3xl lg:rounded-none lg:rounded-r-3xl"
                      >
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                          priority
                          sizes="(max-width: 768px) 100vw, 55vw"
                        />
                      </motion.div>
                    ),
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Navigation */}
            <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4 lg:hidden">
              <button
                onClick={() =>
                  setActiveSlide((prev) =>
                    prev > 0 ? prev - 1 : slides.length - 1,
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm"
              >
                <IconArrowNarrowLeft className="h-6 w-6" />
              </button>

              {/* Mobile Thumbnails */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={cn(
                      "h-2 w-2 rounded-full transition-all",
                      activeSlide === index
                        ? "bg-foreground"
                        : "bg-foreground/30",
                    )}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setActiveSlide((prev) =>
                    prev < slides.length - 1 ? prev + 1 : 0,
                  )
                }
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm"
              >
                <IconArrowNarrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Thumbnails */}
        <div className="absolute -bottom-4 left-1/2 hidden w-[calc(100%-4rem)] -translate-x-1/2 gap-2 lg:flex lg:w-auto lg:gap-4">
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
