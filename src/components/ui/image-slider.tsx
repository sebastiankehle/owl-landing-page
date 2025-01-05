"use client";

import Image, { StaticImageData } from "next/image";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
interface ImageSliderProps {
  images: Array<{
    src: string | StaticImageData;
    alt: string;
    caption: string;
  }>;
}

export function ImageSlider({ images }: ImageSliderProps) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-background shadow-[2px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[2px_4px_12px_rgba(0,0,0,0.3)]">
      <div className="h-full w-full">
        <Carousel>
          {images.map((image, index) => (
            <CarouselItem key={index} index={index}>
              <div className="relative h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
