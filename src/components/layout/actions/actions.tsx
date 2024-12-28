"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { MobileToggle } from "./mobile-toggle";
import { useMobileMenu } from "@/stores/mobile-menu";

interface ActionsProps {
  dict: {
    getQuote: string;
    nav: {
      features: string;
      pricing: string;
      about: string;
    };
  };
}

export function Actions({ dict }: ActionsProps) {
  const { toggle, isOpen } = useMobileMenu();

  return (
    <div className="flex items-center gap-4">
      <MobileToggle isOpen={isOpen} onToggle={toggle} />
      <div className="hidden md:flex md:items-center md:gap-4">
        <LanguageSwitcher />
        <ThemeToggle />
        <Button variant="default" size="sm">
          {dict.getQuote}
        </Button>
      </div>
    </div>
  );
}
