interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return <section className={className}>{children}</section>;
}
