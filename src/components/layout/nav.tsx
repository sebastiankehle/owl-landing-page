interface NavProps {
  dictionary: {
    features: string;
    pricing: string;
    about: string;
  };
  variant?: "desktop" | "mobile";
}

export function Nav({ dictionary, variant = "desktop" }: NavProps) {
  const baseStyles = "text-sm font-medium transition-colors hover:text-primary";
  const styles = {
    desktop: `${baseStyles} text-muted-foreground hidden md:flex items-center gap-6`,
    mobile: `${baseStyles} text-foreground flex flex-col items-start gap-8 text-2xl`,
  };

  return (
    <nav className={styles[variant]}>
      <a href="#features">{dictionary.features}</a>
      <a href="#pricing">{dictionary.pricing}</a>
      <a href="#about">{dictionary.about}</a>
    </nav>
  );
}
