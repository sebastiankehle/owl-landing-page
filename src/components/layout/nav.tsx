interface NavProps {
  dict: {
    features: string;
    pricing: string;
    about: string;
  };
}

export function Nav({ dict }: NavProps) {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      <a
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {dict.features}
      </a>
      <a
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {dict.pricing}
      </a>
      <a
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        {dict.about}
      </a>
    </nav>
  );
}
