import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

type BentoCardProps = {
  name: string;
  className: string;
  description: string;
  color?: "violet" | "cyan" | "emerald";
};

const COLORS = {
  violet: {
    hover: "group-hover:text-violet-500 dark:group-hover:text-violet-400",
  },
  cyan: {
    hover: "group-hover:text-cyan-500 dark:group-hover:text-cyan-400",
  },
  emerald: {
    hover: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400",
  },
} as const;

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        className,
        "grid w-full gap-4",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 [&>*]:max-sm:!col-span-1",
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  description,
  className,
  color = "violet",
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl bg-background/50 p-6 backdrop-blur transition-colors hover:bg-background/80",
        className,
      )}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="mt-4 flex justify-end">
          <ArrowRightIcon
            className={cn(
              "h-5 w-5 transition-transform group-hover:translate-x-1",
              COLORS[color].hover,
            )}
          />
        </div>
      </div>
    </div>
  );
}
