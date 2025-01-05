"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { locales } from "@/middleware";

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: "en", name: "English" },
  { code: "de", name: "Deutsch" },
  { code: "es", name: "Español" },
  { code: "ru", name: "Русский" },
  // Easy to add new languages:
  // { code: "fr", name: "Français" },
  // { code: "it", name: "Italiano" },
  // etc.
];

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    // Ensure the locale is supported
    if (!locales.includes(locale)) return;

    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`);
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-4 w-4 text-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="group">
        {languages.map(({ code, name }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => switchLanguage(code)}
            className="cursor-pointer hover:text-[#7c3aed] focus:text-[#7c3aed]"
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
