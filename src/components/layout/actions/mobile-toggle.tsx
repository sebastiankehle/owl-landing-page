"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface MobileToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileToggle({ isOpen, onToggle }: MobileToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden"
      onClick={onToggle}
    >
      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
  );
}
