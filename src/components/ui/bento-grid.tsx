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
  href: string;
  cta: string;
  color?: "violet" | "cyan" | "emerald";
};

const COLORS = {
  violet: {
    border: "border-zinc-200/50 dark:border-zinc-800/50",
    text: "text-violet-500/80 dark:text-violet-400/80",
    hover: "group-hover:text-violet-500 dark:group-hover:text-violet-400",
  },
  cyan: {
    border: "border-zinc-200/50 dark:border-zinc-800/50",
    text: "text-cyan-500/80 dark:text-cyan-400/80",
    hover: "group-hover:text-cyan-500 dark:group-hover:text-cyan-400",
  },
  emerald: {
    border: "border-zinc-200/50 dark:border-zinc-800/50",
    text: "text-emerald-500/80 dark:text-emerald-400/80",
    hover: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400",
  },
} as const;

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full gap-4",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 [&>a]:max-sm:col-span-full",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  description,
  href,
  cta,
  color = "violet",
}: BentoCardProps) => (
  <a
    href={href}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-xl p-6",
      "bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50",
      "border border-zinc-200 dark:border-zinc-800",
      "transition-all duration-500",
      className,
    )}
  >
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-medium text-foreground/90">{name}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground/80">
        {description}
      </p>
    </div>

    <div className="mt-4 flex items-center text-sm text-muted-foreground/70">
      <span
        className={cn(
          "transition-all duration-500 ease-out group-hover:translate-x-1",
          COLORS[color].hover,
        )}
      >
        {cta}
        <ArrowRightIcon className="ml-1 inline-block h-4 w-4 transition-all duration-500 ease-out group-hover:translate-x-1" />
      </span>
    </div>
  </a>
);

export { BentoCard, BentoGrid };
