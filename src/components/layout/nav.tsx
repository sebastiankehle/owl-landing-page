"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavProps {
  dictionary: {
    about: string;
    blog: string;
    contact: string;
    home: string;
  };
  variant?: "desktop" | "mobile" | "footer";
  onNavigate?: () => void;
}

const navItems = [
  { href: "/about", key: "about" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
] as const;

export function Nav({ dictionary, variant = "desktop", onNavigate }: NavProps) {
  const params = useParams();
  const pathname = usePathname();
  const lang = params.lang as string;

  const baseStyles =
    "relative transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-violet-500/50 after:transition-[width] hover:after:w-full";
  const styles = {
    desktop: "hidden md:flex items-center gap-6",
    mobile: "flex flex-col items-start gap-8 text-2xl",
    footer: "flex items-center gap-6",
  };

  const itemStyles = {
    desktop: "text-sm font-base text-muted-foreground hover:text-foreground",
    mobile: "text-sm font-base text-foreground",
    footer: "text-sm text-muted-foreground hover:text-foreground",
  };

  return (
    <nav className={styles[variant]}>
      <Link
        href={`/${lang}`}
        className={cn(
          baseStyles,
          itemStyles[variant],
          pathname === `/${lang}` && "text-foreground after:w-full",
        )}
        onClick={onNavigate}
      >
        {dictionary.home}
      </Link>
      {navItems.map((item) => (
        <Link
          key={item.key}
          href={`/${lang}${item.href}`}
          className={cn(
            baseStyles,
            itemStyles[variant],
            pathname === `/${lang}${item.href}` &&
              "text-foreground after:w-full",
          )}
          onClick={onNavigate}
        >
          {dictionary[item.key]}
        </Link>
      ))}
    </nav>
  );
}
