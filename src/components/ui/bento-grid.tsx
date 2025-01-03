import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

type BentoCardProps = {
  name: string;
  description: string;
  className?: string;
  topContent?: React.ReactNode;
  children?: React.ReactNode;
};

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
  topContent,
  children,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-background",
        className,
      )}
    >
      <div className="flex h-full flex-col">
        <div className="relative h-1/2 overflow-hidden">{topContent}</div>
        <div className="flex h-1/2 flex-col justify-center p-6">
          {children || (
            <>
              <h3 className="mb-2 text-lg font-semibold">{name}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
