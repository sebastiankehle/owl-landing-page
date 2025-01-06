"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState, TouchEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import advancedAdditiveSolutions from "../../../public/images/hero/advanced-additive-solutions-hero.webp";
import robotics from "../../../public/images/hero/robotics-hero.webp";
import unrealDevelopment from "../../../public/images/hero/unreal-development-hero.webp";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface HeroProps {
  dictionary: {
    hero: {
      title: {
        main: string;
        sub: string;
      };
      slides: {
        first: { title: string; subtitle: string };
        second: { title: string; subtitle: string };
        third: { title: string; subtitle: string };
      };
      cta: {
        primary: string;
        secondary: string;
      };
      scroll: string;
      swipe: string;
    };
  };
  lang: string;
}

export function Hero({ dictionary, lang }: HeroProps) {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const services = [
    {
      image: advancedAdditiveSolutions,
      title: dictionary.hero.slides.first.title,
      subtitle: dictionary.hero.slides.first.subtitle,
      id: "additive-solutions",
    },
    {
      image: robotics,
      title: dictionary.hero.slides.second.title,
      subtitle: dictionary.hero.slides.second.subtitle,
      id: "robotics-automation",
    },
    {
      image: unrealDevelopment,
      title: dictionary.hero.slides.third.title,
      subtitle: dictionary.hero.slides.third.subtitle,
      id: "unreal-development",
    },
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, services.length]);

  const navigateToService = (id: string) => {
    router.push(`/${lang}/services#${id}`);
  };

  const handleTouchStart = (e: TouchEvent) => {
    setIsAutoScrolling(false);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left - reduced threshold for better responsiveness
      setActiveSlide((prev) => (prev + 1) % services.length);
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right - reduced threshold for better responsiveness
      setActiveSlide((prev) => (prev - 1 + services.length) % services.length);
    }

    // Resume auto-scrolling after 5 seconds of inactivity
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  return (
    <section className="relative min-h-screen pb-24">
      {/* Desktop Version */}
      <div className="container hidden h-[90vh] items-center md:flex">
        <div className="mt-24 h-[75vh] w-full flex-col overflow-hidden rounded-3xl shadow-[2px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[2px_4px_12px_rgba(0,0,0,0.3)] md:flex md:flex-row">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative flex-1 cursor-pointer overflow-hidden"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => navigateToService(service.id)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={cn(
                    "object-cover transition-all duration-500",
                    hoveredIndex === index && "scale-[1.015]",
                  )}
                />
                {/* Dark Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 bg-black/60 transition-opacity duration-500",
                    hoveredIndex === index ? "opacity-20" : "opacity-60",
                  )}
                />
              </div>

              {/* Content */}
              <div className="relative flex h-full items-center justify-center px-4 text-center">
                <div className="max-w-[300px]">
                  <motion.h2
                    className="text-2xl font-bold text-white sm:text-3xl"
                    animate={{
                      y: hoveredIndex === index ? -10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h2>
                  <motion.p
                    className="mx-auto mt-2 text-sm text-white sm:text-base"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.subtitle}
                  </motion.p>
                  <motion.div
                    className="mx-auto mt-4 h-[2px] w-0 bg-white"
                    animate={{
                      width: hoveredIndex === index ? "100px" : "0px",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="relative md:hidden">
        <div className="container py-20">
          <div className="relative h-[80vh]">
            <div
              className="relative h-full w-full overflow-hidden rounded-3xl shadow-[2px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[2px_4px_12px_rgba(0,0,0,0.3)]"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <AnimatePresence mode="sync">
                {services.map(
                  (service, index) =>
                    index === activeSlide && (
                      <motion.div
                        key={service.title}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        {/* Background Image */}
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-black/60 transition-opacity duration-500" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex max-w-[300px] flex-col items-center"
                          >
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                              {service.title}
                            </h2>
                            <p className="mx-auto mt-2 text-sm text-white sm:text-base">
                              {service.subtitle}
                            </p>
                            <motion.div
                              className="mx-auto mt-4 h-[2px] w-24 bg-white"
                              initial={{ width: 0 }}
                              animate={{ width: "6rem" }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.div>
                          <button
                            onClick={() => navigateToService(service.id)}
                            className="mt-8 flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                          >
                            {dictionary.hero.cta.primary}
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    ),
                )}
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-4">
                <button
                  onClick={() => {
                    setActiveSlide(
                      (prev) => (prev - 1 + services.length) % services.length,
                    );
                    setIsAutoScrolling(false);
                    setTimeout(() => setIsAutoScrolling(true), 5000);
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => {
                    setActiveSlide((prev) => (prev + 1) % services.length);
                    setIsAutoScrolling(false);
                    setTimeout(() => setIsAutoScrolling(true), 5000);
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {/* Swipe Indicator */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <span className="text-xs font-light uppercase tracking-widest text-white/80">
                  {dictionary.hero.swipe}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - only show on desktop */}
      <div className="hidden md:block">
        <motion.div
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs font-light uppercase tracking-widest text-foreground/50">
            {dictionary.hero.scroll}
          </span>
          <motion.div
            className="h-12 w-[1px] bg-foreground/20"
            animate={{
              scaleY: [0, 1],
              originY: 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
