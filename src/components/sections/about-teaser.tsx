"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { InView } from "@/components/ui/in-view";

interface AboutTeaserProps {
  dictionary: {
    about: {
      story: {
        title: {
          main: string;
          sub: string;
        };
        quote: string;
      };
      teaser: {
        learnMore: string;
        subtitle: string;
        readMore: string;
      };
    };
    blog: {
      latest: {
        title: string;
        excerpt: string;
        link: string;
        date: string;
      };
      readMore: string;
      posts: {
        [key: string]: {
          title: string;
          excerpt: string;
          content: string;
          date: string;
        };
      };
    };
  };
  lang: string;
}

export function AboutTeaser({ dictionary, lang }: AboutTeaserProps) {
  return (
    <section className="container py-24 md:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* About Section */}
        <div>
          <InView className="space-y-8">
            <h2 className="text-xl font-semibold sm:text-2xl">
              <span className="flex flex-col">
                <span className="text-foreground">
                  {dictionary.about.story.title.main}
                </span>
                <span className="text-muted-foreground">
                  {dictionary.about.story.title.sub}
                </span>
              </span>
            </h2>
            <p className="text-pretty text-base text-muted-foreground">
              {dictionary.about.story.quote}
            </p>
            <Link
              href={`/${lang}/about`}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {dictionary.about.teaser.learnMore}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </InView>
        </div>

        {/* Blog Section */}
        <div>
          <InView className="space-y-8">
            <h2 className="text-xl font-semibold sm:text-2xl">
              <span className="flex flex-col">
                <span className="text-foreground">
                  {dictionary.blog.latest.title}
                </span>
                <span className="text-muted-foreground">
                  {dictionary.about.teaser.subtitle}
                </span>
              </span>
            </h2>
            <p className="text-pretty text-base text-muted-foreground">
              <span className="text-sm text-muted-foreground">
                {new Date(dictionary.blog.latest.date).toLocaleDateString(
                  lang,
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  },
                )}
                {" — "}
              </span>
              {dictionary.blog.latest.excerpt}
            </p>
            <Link
              href={`/${lang}/blog/${dictionary.blog.latest.date.split("-").slice(0, 2).join("/")}/${dictionary.blog.latest.link}`}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {dictionary.about.teaser.readMore}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </InView>
        </div>
      </div>
    </section>
  );
}
