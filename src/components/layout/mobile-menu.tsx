"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useMobileMenu } from "@/stores/mobile-menu";

interface MobileMenuProps {
  dict: {
    features: string;
    pricing: string;
    about: string;
  };
}

export function MobileMenu({ dict }: MobileMenuProps) {
  const { isOpen } = useMobileMenu();
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <div
      className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-lg transition-opacity duration-200 ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="h-full pt-[calc(0.5rem+2.75rem)]">
        <div className="flex h-full flex-col items-center justify-center gap-12 p-8">
          <nav className="flex flex-col items-center gap-8 text-xl">
            <a href="#features" className="text-foreground hover:text-primary">
              {dict.features}
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary">
              {dict.pricing}
            </a>
            <a href="#about" className="text-foreground hover:text-primary">
              {dict.about}
            </a>
          </nav>

          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-4">
              <button
                onClick={() => switchLanguage("en")}
                className="text-lg text-foreground hover:text-primary"
              >
                English
              </button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
