"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Slide {
  image: { src: string };
  info: {
    title: string;
    subtitle: string;
  };
}

interface ImageSliderProps {
  slides: Slide[];
  interval?: number;
}

export function ImageSlider({ slides, interval = 10000 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative aspect-square">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img
            src={slides[currentIndex].image.src}
            alt="Work Showcase"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 h-48" />

      <div className="absolute bottom-6 left-6 max-w-[480px]">
        <div className="space-y-2 rounded-lg bg-background/30 p-4 backdrop-blur-md backdrop-saturate-150">
          <p className="text-sm font-medium text-foreground">
            {slides[currentIndex].info.title}
          </p>
          <p className="text-xs text-muted-foreground">
            {slides[currentIndex].info.subtitle}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-1.5 w-8 rounded-full transition-all",
              currentIndex === index
                ? "bg-foreground"
                : "bg-foreground/20 hover:bg-foreground/40",
            )}
          />
        ))}
      </div>

      <div className="absolute inset-y-0 left-4 flex items-center">
        <button
          onClick={() =>
            setCurrentIndex(
              (prev) => (prev - 1 + slides.length) % slides.length,
            )
          }
          className="group rounded-full bg-background/20 p-2 backdrop-blur hover:bg-background/40"
        >
          <ChevronLeft className="h-6 w-6 text-foreground transition-transform group-hover:-translate-x-0.5" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
          className="group rounded-full bg-background/20 p-2 backdrop-blur hover:bg-background/40"
        >
          <ChevronRight className="h-6 w-6 text-foreground transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
