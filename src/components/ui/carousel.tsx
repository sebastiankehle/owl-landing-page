"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CarouselContext = React.createContext<{
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  slideCount: number;
}>({
  selectedIndex: 0,
  setSelectedIndex: () => null,
  slideCount: 0,
});

export function Carousel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const slideCount = React.Children.count(children);

  return (
    <CarouselContext.Provider
      value={{ selectedIndex, setSelectedIndex, slideCount }}
    >
      <div className={cn("relative h-full w-full overflow-hidden", className)}>
        <div className="relative h-full w-full">{children}</div>
        <div className="absolute inset-x-4 top-1/2 z-10 flex -translate-y-1/2 justify-between">
          <button
            onClick={() =>
              setSelectedIndex((selectedIndex - 1 + slideCount) % slideCount)
            }
            className="rounded-full bg-black/20 p-2 text-white backdrop-blur hover:bg-black/40"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => setSelectedIndex((selectedIndex + 1) % slideCount)}
            className="rounded-full bg-black/20 p-2 text-white backdrop-blur hover:bg-black/40"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setSelectedIndex(i)}
              className={cn(
                "h-1.5 w-8 rounded-full transition-all",
                selectedIndex === i
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/40",
              )}
            />
          ))}
        </div>
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselItem({
  children,
  className,
  index,
}: {
  children: React.ReactNode;
  className?: string;
  index: number;
}) {
  const { selectedIndex } = React.useContext(CarouselContext);

  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full transform transition-transform duration-300 ease-in-out",
        className,
      )}
      style={{
        transform: `translateX(${(index - selectedIndex) * 100}%)`,
      }}
    >
      {children}
    </div>
  );
}
