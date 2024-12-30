"use client";

import { useMobileMenu } from "@/stores/mobile-menu";
import { ThemeToggle } from "./actions/theme-toggle";
import { LanguageSwitcher } from "./actions/language-switcher";
import { Nav } from "./nav";
import { SiGithub, SiX, SiLinkedin } from "@icons-pack/react-simple-icons";

interface MobileMenuProps {
  dictionary: {
    header: {
      logo: string;
      nav: {
        about: string;
        blog: string;
        contact: string;
      };
      actions: {
        getQuote: string;
      };
    };
    mobile: {
      getInTouch: {
        title: string;
        description: string;
      };
    };
  };
}

export function MobileMenu({ dictionary }: MobileMenuProps) {
  const { isOpen } = useMobileMenu();

  return (
    <div
      className={`fixed inset-0 z-30 bg-background/95 backdrop-blur-lg transition-opacity duration-200 ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="h-full pt-[calc(0.5rem+2.75rem)]">
        <div className="container flex h-full flex-col p-8">
          {/* Get in Touch Section */}
          <div className="mb-16 space-y-3">
            <h3 className="text-lg">{dictionary.mobile.getInTouch.title}</h3>
            <p className="text-sm text-muted-foreground">
              {dictionary.mobile.getInTouch.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex-1">
            <Nav dictionary={dictionary.header.nav} variant="mobile" />

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <SiGithub size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <SiX size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <SiLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-start pt-8">
            {/* Controls */}
            <div className="flex items-center gap-6">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
