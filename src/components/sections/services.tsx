"use client";

import { InView } from "@/components/ui/in-view";
import Image from "next/image";
import advancedAdditiveSolutions from "../../../public/images/hero/advanced-additive-solutions-hero.webp";
import robotics from "../../../public/images/hero/robotics-hero.webp";
import unrealDevelopment from "../../../public/images/hero/unreal-development-hero.webp";

interface ServicesProps {
  dictionary: {
    services: {
      title: string;
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
          className="text-center"
          variants={{
            hidden: { opacity: 0, filter: "blur(4px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
        >
          <h2 className="text-2xl font-semibold sm:text-3xl">
            {dictionary.services.title}
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
                <div className="group h-full space-y-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={item.title}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/90">
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
