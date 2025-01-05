"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { MobileToggle } from "./mobile-toggle";
import { useMobileMenu } from "@/stores/mobile-menu";

interface ActionsProps {
  dictionary: {
    getQuote: string;
    nav: {
      about: string;
      blog: string;
      contact: string;
    };
  };
}

export function Actions({ dictionary }: ActionsProps) {
  const { toggle, isOpen } = useMobileMenu();
  const params = useParams();
  const lang = params.lang as string;

  return (
    <div className="flex items-center gap-4">
      <MobileToggle isOpen={isOpen} onToggle={toggle} />
      <div className="hidden md:flex md:items-center md:gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
        <Link href={`/${lang}/contact`}>
          <Button variant="outline" showArrow>
            {dictionary.getQuote}
          </Button>
        </Link>
      </div>
    </div>
  );
}
