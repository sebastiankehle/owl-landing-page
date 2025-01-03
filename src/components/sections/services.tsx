"use client";

import { InView } from "@/components/ui/in-view";
import Image from "next/image";
import advancedAdditiveSolutions from "../../../public/images/hero/advanced-additive-solutions-hero.webp";
import robotics from "../../../public/images/hero/robotics-hero.webp";
import unrealDevelopment from "../../../public/images/hero/unreal-development-hero.webp";

interface ServicesProps {
  dictionary: {
    services: {
      title: {
        main: string;
        sub: string;
      };
      items: {
        robotics: { title: string; description: string };
        unreal: { title: string; description: string };
        additive: { title: string; description: string };
      };
    };
  };
}

export function Services({ dictionary }: ServicesProps) {
  return (
    <div className="relative py-32">
      <div className="container">
        <InView
          className="text-left"
          variants={{
            hidden: { opacity: 0, filter: "blur(4px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
        >
          <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
            <span className="flex flex-col">
              <span className="text-foreground">
                {dictionary.services.title.main}
              </span>
              <span className="text-muted-foreground">
                {dictionary.services.title.sub}
              </span>
            </span>
          </h2>
        </InView>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { key: "additive", image: advancedAdditiveSolutions },
            { key: "robotics", image: robotics },
            { key: "unreal", image: unrealDevelopment },
          ].map((service, index) => {
            const item =
              dictionary.services.items[
                service.key as keyof typeof dictionary.services.items
              ];
            return (
              <InView
                key={service.key}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-[500px] overflow-hidden rounded-xl bg-background">
                  <div className="flex h-full flex-col">
                    <div className="relative h-[65%] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={item.title}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="flex h-[35%] flex-col p-6 pt-8">
                      <h3 className="mb-2 text-lg font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </InView>
            );
          })}
        </div>
      </div>
    </div>
  );
}
