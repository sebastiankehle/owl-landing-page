"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface TimelineProps {
  dictionary: {
    timeline: {
      title: string;
      events: Array<{
        year: string;
        title: string;
        details: string[];
      }>;
    };
  };
}

export function Timeline({ dictionary }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 60%"],
  });

  return (
    <div ref={containerRef} className="relative py-32">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <h2 className="text-2xl font-medium sm:text-3xl">
            {dictionary.timeline.title}
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          {dictionary.timeline.events.map((event, index) => (
            <motion.div
              key={event.year}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div
                className={`group relative flex flex-col gap-8 pb-16 pt-8 sm:flex-row sm:items-center sm:pb-24 sm:pt-12 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Content Card - Matching BentoCard styling */}
                <div className="relative ml-12 w-full overflow-hidden rounded-xl bg-background/50 p-6 backdrop-blur transition-colors hover:bg-background/80 sm:ml-0 sm:w-[calc(50%-3rem)]">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      {/* Year Badge */}
                      <div
                        className={`mb-6 flex ${
                          index % 2 === 0
                            ? "sm:absolute sm:left-6 sm:top-6 sm:justify-start"
                            : "sm:absolute sm:right-6 sm:top-6 sm:justify-end"
                        }`}
                      >
                        <span className="text-base font-medium text-foreground/80 transition-colors group-hover:text-violet-500 dark:group-hover:text-violet-400">
                          {event.year}
                        </span>
                      </div>

                      {/* Title */}
                      <div
                        className={`flex items-baseline ${
                          index % 2 === 0
                            ? "sm:justify-end"
                            : "sm:justify-start"
                        }`}
                      >
                        <h3 className="text-lg font-medium tracking-tight">
                          {event.title}
                        </h3>
                      </div>

                      {/* Details */}
                      <div
                        className={`mt-3 space-y-2 text-sm text-muted-foreground ${
                          index % 2 === 0 ? "sm:text-right" : "sm:text-left"
                        }`}
                      >
                        {event.details.map((detail, i) => (
                          <p key={i} className="leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Optional: Visual indicator for hover */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                        index % 2 === 0 ? "rotate-0" : "rotate-180"
                      }`}
                    />
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-4 top-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2">
                  <div className="absolute h-4 w-4 rounded-full bg-background shadow-[0_0_0_4px_hsl(var(--background)),0_0_0_6px_hsl(var(--violet-500))] transition-transform duration-200 group-hover:scale-125" />
                  <div
                    className="absolute h-2 w-2 rounded-full bg-violet-500 transition-all duration-200 group-hover:scale-125"
                    style={{
                      boxShadow: `0 0 12px 4px hsl(var(--violet-500))`,
                    }}
                  />
                </div>

                {/* Spacer for desktop - Matching new card width */}
                <div className="hidden w-[calc(50%-3rem)] sm:block" />
              </div>
            </motion.div>
          ))}

          {/* Timeline Line */}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute left-4 top-0 w-px overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-violet-500/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] sm:left-1/2 sm:-translate-x-1/2"
          >
            <motion.div
              style={{
                height: useTransform(scrollYProgress, [0, 1], [0, height]),
                opacity: useTransform(scrollYProgress, [0, 0.1], [0, 1]),
              }}
              className="absolute inset-x-0 top-0 w-px rounded-full bg-gradient-to-t from-violet-500 from-[0%] via-violet-500 via-[10%] to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
