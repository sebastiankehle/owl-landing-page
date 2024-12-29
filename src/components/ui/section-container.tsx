interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <div className={className}>
      <div className="container">
        <div className="grid gap-8 overflow-hidden rounded-3xl bg-background/50 backdrop-blur lg:grid-cols-2">
          {children}
        </div>
      </div>
    </div>
  );
}
