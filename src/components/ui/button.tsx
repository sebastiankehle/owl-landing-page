import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow hover:opacity-90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-primary/20 bg-background shadow-sm hover:border-primary/40 hover:bg-accent/50 hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent/50 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient:
          "relative border-violet-500/50 bg-background text-foreground backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_rgba(124,58,237,0.15)] hover:border-violet-500/70 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_25px_rgba(124,58,237,0.2)] transition-all duration-300",
        gradientAlternative:
          "relative border-cyan-500/50 bg-background text-foreground backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/70 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
