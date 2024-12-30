"use client";

import { InView } from "@/components/ui/in-view";

interface StoryProps {
  dictionary: {
    story: {
      quote: string;
      early: {
        title: string;
        description: string;
      };
      journey: {
        description: string;
      };
    };
  };
}

export function Story({ dictionary }: StoryProps) {
  return (
    <div className="relative py-32">
      <div className="container">
        {/* Quote Section */}
        <InView className="mb-24">
          <blockquote className="relative mx-auto max-w-3xl text-center">
            <div className="pointer-events-none absolute -left-4 -top-4 select-none text-6xl text-muted-foreground/20">
              &ldquo;
            </div>
            <p className="text-2xl font-medium leading-relaxed text-muted-foreground">
              {dictionary.story.quote}
            </p>
            <div className="pointer-events-none absolute -bottom-8 -right-4 select-none text-6xl text-muted-foreground/20">
              &rdquo;
            </div>
          </blockquote>
        </InView>

        {/* Story Section */}
        <div className="mx-auto max-w-4xl space-y-12">
          <InView>
            <h3 className="mb-4 text-xl font-medium">
              {dictionary.story.early.title}
            </h3>
            <p className="text-pretty text-muted-foreground">
              {dictionary.story.early.description}
            </p>
          </InView>

          <InView>
            <p className="text-pretty text-muted-foreground">
              {dictionary.story.journey.description}
            </p>
          </InView>
        </div>
      </div>
    </div>
  );
}
