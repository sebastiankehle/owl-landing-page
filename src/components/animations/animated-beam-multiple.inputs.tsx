"use client";

import React, { forwardRef, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import logoDark from "../../../public/logo_dark.svg";
import { Cpu, User2, Boxes, Wrench, Microscope, Radar } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; color?: string }
>(({ className, children, color = "violet" }, ref) => {
  const colors = {
    violet: "text-violet-500 bg-white dark:bg-zinc-900",
    cyan: "text-cyan-500 bg-white dark:bg-zinc-900",
    emerald: "text-emerald-500 bg-white dark:bg-zinc-900",
    amber: "text-amber-500 bg-white dark:bg-zinc-900",
    rose: "text-rose-500 bg-white dark:bg-zinc-900",
    indigo: "text-indigo-500 bg-white dark:bg-zinc-900",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-10 items-center justify-center rounded-full p-2",
        colors[color as keyof typeof colors],
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
          <Circle ref={div1Ref} color="violet">
            <Microscope className="h-full w-full" />
          </Circle>
          <Circle ref={div2Ref} color="cyan">
            <Boxes className="h-full w-full" />
          </Circle>
          <Circle ref={div3Ref} color="emerald">
            <Wrench className="h-full w-full" />
          </Circle>
          <Circle ref={div4Ref} color="amber">
            <Cpu className="h-full w-full" />
          </Circle>
          <Circle ref={div5Ref} color="rose">
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
          <Circle ref={div7Ref} color="indigo">
            <User2 className="h-full w-full" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        gradientStartColor="#8b5cf6"
        gradientStopColor="#6366f1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        gradientStartColor="#06b6d4"
        gradientStopColor="#3b82f6"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        gradientStartColor="#10b981"
        gradientStopColor="#6366f1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        gradientStartColor="#f59e0b"
        gradientStopColor="#6366f1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        gradientStartColor="#f43f5e"
        gradientStopColor="#6366f1"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        gradientStartColor="#6366f1"
        gradientStopColor="#4f46e5"
      />
    </div>
  );
}
