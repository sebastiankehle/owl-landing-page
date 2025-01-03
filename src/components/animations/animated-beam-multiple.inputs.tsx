"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import logoDark from "../../../public/logo_dark.svg";
import { Cpu, User2, Boxes, Wrench, Microscope, Radar } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-background p-3 text-foreground",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleInputs({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-8",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10 px-4">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Microscope className="h-full w-full" />
          </Circle>
          <Circle ref={div2Ref}>
            <Boxes className="h-full w-full" />
          </Circle>
          <Circle ref={div3Ref}>
            <Wrench className="h-full w-full" />
          </Circle>
          <Circle ref={div4Ref}>
            <Cpu className="h-full w-full" />
          </Circle>
          <Circle ref={div5Ref}>
            <Radar className="h-full w-full" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-20 border-0 p-2">
            <div className="relative size-full overflow-hidden rounded-full">
              <Image
                src={logoDark}
                alt="Logo"
                width={64}
                height={64}
                className="dark:invert"
              />
            </div>
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <User2 className="h-full w-full" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}
