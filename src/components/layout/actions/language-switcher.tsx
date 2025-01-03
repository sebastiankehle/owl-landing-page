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

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
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
        <DropdownMenuItem
          onClick={() => switchLanguage("en")}
          className="hover:text-[#7c3aed] focus:text-[#7c3aed] focus:ring-[#7c3aed]"
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => switchLanguage("de")}
          className="hover:text-[#7c3aed] focus:text-[#7c3aed] focus:ring-[#7c3aed]"
        >
          Deutsch
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
