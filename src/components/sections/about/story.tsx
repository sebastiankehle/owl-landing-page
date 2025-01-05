"use client";

import { InView } from "@/components/ui/in-view";
import { motion } from "framer-motion";
import Image from "next/image";
import innovation from "../../../../public/images/about/innovation.webp";

interface StoryProps {
  dictionary: {
    story: {
      title: {
        main: string;
        sub: string;
      };
      quote: string;
      early: {
        title: string;
        description: string;
      };
      journey: {
        description: string;
        title: string;
      };
      middle?: {
        title: string;
        description: string;
      };
    };
  };
}

export function Story({ dictionary }: StoryProps) {
  return (
    <div className="container py-24">
      {/* Section Title */}
      <InView className="mb-16">
        <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
          <span className="flex flex-col">
            <span className="text-foreground">
              {dictionary.story.title.main}
            </span>
            <span className="text-muted-foreground">
              {dictionary.story.title.sub}
            </span>
          </span>
        </h2>
      </InView>

      {/* Quote Card */}
      <InView className="mb-16">
        <div className="overflow-hidden rounded-3xl bg-background p-8 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[2px_4px_12px_rgba(0,0,0,0.3)] sm:p-12">
          <blockquote className="relative mx-auto max-w-3xl text-center">
            <motion.div
              className="pointer-events-none absolute -left-4 -top-4 select-none text-5xl text-foreground/20 sm:text-6xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              &ldquo;
            </motion.div>
            <motion.p
              className="text-lg font-medium leading-relaxed text-foreground sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {dictionary.story.quote}
            </motion.p>
            <motion.div
              className="pointer-events-none absolute -bottom-8 -right-4 select-none text-5xl text-foreground/20 sm:text-6xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              &rdquo;
            </motion.div>
          </blockquote>
        </div>
      </InView>

      {/* Story Cards */}
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        {/* Early Stages */}
        <InView>
          <div className="h-full overflow-hidden rounded-3xl bg-background p-8 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[2px_4px_12px_rgba(0,0,0,0.3)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex h-full flex-col"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {dictionary.story.early.title}
              </h3>
              <p className="mt-4 flex-grow text-pretty text-muted-foreground">
                {dictionary.story.early.description}
              </p>
            </motion.div>
          </div>
        </InView>

        {/* Middle Card - Image */}
        <InView>
          <div className="h-full overflow-hidden rounded-3xl bg-background shadow-[2px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[2px_4px_12px_rgba(0,0,0,0.3)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] h-full w-full"
            >
              <Image
                src={innovation}
                alt="Innovation at Old World Labs"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </InView>

        {/* Journey */}
        <InView>
          <div className="h-full overflow-hidden rounded-3xl bg-background p-8 shadow-[2px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[2px_4px_12px_rgba(0,0,0,0.3)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex h-full flex-col"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {dictionary.story.journey.title}
              </h3>
              <p className="mt-4 flex-grow text-pretty text-muted-foreground">
                {dictionary.story.journey.description}
              </p>
            </motion.div>
          </div>
        </InView>
      </div>
    </div>
  );
}
