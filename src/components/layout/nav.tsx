interface NavProps {
  dictionary: {
    about: string;
    blog: string;
    contact: string;
  };
  variant?: "desktop" | "mobile";
}

const navItems = [
  { href: "#about", key: "about" },
  { href: "#blog", key: "blog" },
  { href: "#contact", key: "contact" },
] as const;

export function Nav({ dictionary, variant = "desktop" }: NavProps) {
  const baseStyles =
    "relative transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-violet-500/50 after:transition-[width] hover:after:w-full";
  const styles = {
    desktop: "hidden md:flex items-center gap-6",
    mobile: "flex flex-col items-start gap-8 text-2xl",
  };

  const itemStyles = {
    desktop: "text-sm font-base text-muted-foreground hover:text-foreground",
    mobile: "text-sm font-base text-foreground",
  };

  return (
    <nav className={styles[variant]}>
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          className={`${baseStyles} ${itemStyles[variant]}`}
        >
          {dictionary[item.key]}
        </a>
      ))}
    </nav>
  );
}
