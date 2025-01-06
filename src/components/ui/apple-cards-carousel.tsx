"use client";
import React, { useEffect, useState, createContext, TouchEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  description: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
}>({
  onCardClose: () => {},
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = React.useState(400);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const [slides] = useState(() => {
    const itemsArray = React.Children.toArray(items);
    return [
      ...itemsArray.map((item, i) =>
        React.cloneElement(item as React.ReactElement, {
          key: `prev-${i}`,
        }),
      ),
      ...itemsArray.map((item, i) =>
        React.cloneElement(item as React.ReactElement, {
          key: `current-${i}`,
        }),
      ),
      ...itemsArray.map((item, i) =>
        React.cloneElement(item as React.ReactElement, {
          key: `next-${i}`,
        }),
      ),
    ];
  });

  const checkScrollability = React.useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const scrollEnd = scrollWidth - clientWidth;

      // If we're near the end, jump to the middle set
      if (scrollLeft >= scrollEnd - 100) {
        carouselRef.current.scrollLeft = scrollEnd / 3;
      }
      // If we're near the start, jump to the middle set
      if (scrollLeft <= 100) {
        carouselRef.current.scrollLeft = scrollEnd / 3;
      }
    }
  }, []);

  const calculateScrollAmount = () => {
    if (typeof window === "undefined") return 400;
    return window.innerWidth < 768 ? window.innerWidth - 32 + 16 : 384 + 16;
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeThreshold = 75;
    if (touchStart - touchEnd > swipeThreshold) {
      // Swipe left
      scrollRight();
    }
    if (touchStart - touchEnd < -swipeThreshold) {
      // Swipe right
      scrollLeft();
    }

    // Add infinite scroll check after swipe
    setTimeout(handleInfiniteScroll, 300);
  };

  useEffect(() => {
    const handleResize = () => {
      setScrollAmount(calculateScrollAmount());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll, checkScrollability]);

  const handleInfiniteScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const scrollEnd = scrollWidth - clientWidth;

      // If we're near the end, jump to the middle set
      if (scrollLeft >= scrollEnd - 100) {
        carouselRef.current.scrollLeft = scrollEnd / 3;
      }
      // If we're near the start, jump to the middle set
      if (scrollLeft <= 100) {
        carouselRef.current.scrollLeft = scrollEnd / 3;
      }
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      // Set initial scroll to middle set of items
      carousel.scrollLeft = (carousel.scrollWidth - carousel.clientWidth) / 3;
    }
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
      setTimeout(() => {
        checkScrollability();
        handleInfiniteScroll();
      }, 300);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      setTimeout(() => {
        checkScrollability();
        handleInfiniteScroll();
      }, 300);
    }
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: () => {} }}>
      <div className="relative w-full py-4">
        <div
          ref={carouselRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
          onScroll={checkScrollability}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides}
        </div>

        {/* Navigation Arrows - Shown on both mobile and desktop */}
        <div className="absolute left-6 top-1/3 z-50 mt-4 block -translate-y-1/2">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 shadow-lg backdrop-blur-sm transition-all hover:bg-white/20"
            onClick={scrollLeft}
          >
            <ArrowLeft className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="absolute right-6 top-1/3 z-50 mt-4 block -translate-y-1/2">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 shadow-lg backdrop-blur-sm transition-all hover:bg-white/20"
            onClick={scrollRight}
          >
            <ArrowRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card }: { card: Card }) => {
  return (
    <div className="relative z-10 flex h-[500px] w-[calc(100vw-2rem)] flex-none snap-center flex-col overflow-hidden rounded-3xl bg-background shadow-[2px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[2px_4px_12px_rgba(0,0,0,0.3)] sm:w-[calc(100vw-4rem)] md:w-96">
      <div className="relative h-[65%] w-full overflow-hidden">
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 object-cover"
        />
      </div>
      <div className="flex h-[35%] flex-col justify-start p-6 pt-8">
        <p className="text-left text-lg font-semibold">{card.title}</p>
        <p className="mt-2 line-clamp-2 text-left text-sm text-muted-foreground">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
