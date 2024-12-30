"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface Slide {
  image: { src: string };
}

interface ImageSliderProps {
  slides: Slide[];
  interval?: number;
}

function useSlideTimer(slides: Slide[], interval: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const startTimer = useCallback(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return timer;
  }, [interval, slides.length]);

  useEffect(() => {
    const timer = startTimer();
    return () => clearInterval(timer);
  }, [startTimer]);

  const setSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return { currentIndex, setSlide };
}

export function ImageSlider({ slides, interval = 10000 }: ImageSliderProps) {
  const { currentIndex, setSlide } = useSlideTimer(slides, interval);

  return (
    <div className="relative aspect-square">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          <Image
            src={slides[currentIndex].image.src}
            alt="Work Showcase"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-x-0 bottom-0 h-48" />

      <div className="absolute bottom-6 right-6 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
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
            setSlide((currentIndex - 1 + slides.length) % slides.length)
          }
          className="group rounded-full bg-background/20 p-2 backdrop-blur hover:bg-background/40"
        >
          <ChevronLeft className="h-6 w-6 text-foreground transition-transform group-hover:-translate-x-0.5" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <button
          onClick={() => setSlide((currentIndex + 1) % slides.length)}
          className="group rounded-full bg-background/20 p-2 backdrop-blur hover:bg-background/40"
        >
          <ChevronRight className="h-6 w-6 text-foreground transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
