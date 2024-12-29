"use client";
import { ReactNode, useRef, useState } from "react";
import {
  motion,
  useInView,
  Variant,
  Transition,
  UseInViewOptions,
} from "motion/react";

interface InViewProps {
  children: ReactNode;
  className?: string;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  as?: React.ElementType;
}

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function InView({
  children,
  className,
  variants = defaultVariants,
  transition,
  viewOptions,
  as = "div",
}: InViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);
  const [hasBeenSeen, setHasBeenSeen] = useState(false);

  // Update hasBeenSeen when element comes into view
  if (isInView && !hasBeenSeen) {
    setHasBeenSeen(true);
  }

  const MotionComponent = motion[as as keyof typeof motion] as typeof as;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={hasBeenSeen ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
