"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import advancedAdditiveSolutions from "../../../public/images/hero/advanced-additive-solutions-hero.webp";
import robotics from "../../../public/images/hero/robotics-hero.webp";
import unrealDevelopment from "../../../public/images/hero/unreal-development-hero.webp";
import { Card } from "@/components/ui/apple-cards-carousel";

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
    };
  };
}

export function Hero({ dictionary }: HeroProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
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
    <section className="relative min-h-screen pb-24">
      {/* Desktop Version */}
      <div className="container hidden h-[90vh] items-center md:flex">
        <div className="mt-8 h-[75vh] w-full flex-col overflow-hidden rounded-3xl shadow-[2px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[2px_4px_12px_rgba(0,0,0,0.3)] md:flex md:flex-row">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative flex-1 cursor-pointer overflow-hidden"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
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
      <div className="relative pt-20 md:hidden">
        <div className="container">
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
            <span className="flex flex-col">
              <span className="text-foreground">
                {dictionary.hero.title.main}
              </span>
              <span className="text-muted-foreground">
                {dictionary.hero.title.sub}
              </span>
            </span>
          </h2>

          <Carousel
            items={services.map((service) => (
              <Card
                key={service.title}
                card={{
                  src: service.image.src,
                  title: service.title,
                  description: service.subtitle,
                }}
              />
            ))}
          />
        </div>
      </div>

      {/* Scroll indicator - only show on desktop */}
      <div className="hidden md:block">
        <motion.div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs font-light uppercase tracking-widest text-foreground/50">
            Scroll
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
