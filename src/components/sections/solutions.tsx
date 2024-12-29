"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative py-32">
      <div className="container">
        <div className="grid gap-8 overflow-hidden rounded-3xl border border-foreground/5 bg-background/50 backdrop-blur lg:grid-cols-2">
          {/* Left side - Image Slider */}
          <div className="relative aspect-square">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={slides[currentIndex].image.src}
                alt="AI Generated Visualization"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            {/* Gradient overlay - make it darker and taller */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

            {/* Info Box - adjusted background and text */}
            <div className="absolute bottom-6 left-6 max-w-[480px]">
              <div className="space-y-2 rounded-lg border border-foreground/5 bg-black/30 p-4 backdrop-blur-md backdrop-saturate-150">
                <p className="text-sm font-medium text-white">
                  {slides[currentIndex].info.title}
                </p>
                <p className="text-xs text-white/90">
                  {slides[currentIndex].info.subtitle}
                </p>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-1.5 w-8 rounded-full transition-all",
                    currentIndex === index
                      ? "bg-white"
                      : "bg-white/20 hover:bg-white/40",
                  )}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-4 flex items-center">
              <button
                onClick={prevSlide}
                className="group rounded-full bg-black/20 p-2 backdrop-blur hover:bg-black/40"
              >
                <ChevronLeft className="h-6 w-6 text-white transition-transform group-hover:-translate-x-0.5" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                onClick={nextSlide}
                className="group rounded-full bg-black/20 p-2 backdrop-blur hover:bg-black/40"
              >
                <ChevronRight className="h-6 w-6 text-white transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right side - Text */}
          <div className="flex flex-col justify-center p-8 lg:p-16">
            <p className="text-2xl font-medium sm:text-3xl">
              {dictionary.solutions.description}
            </p>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowUpRight className="h-4 w-4" />
              <span>{dictionary.solutions.established}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
