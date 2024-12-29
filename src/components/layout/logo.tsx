"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import logoDark from "../../../public/logo_dark.svg";
import logoLight from "../../../public/logo_light.svg";

interface LogoProps {
  text: string;
}

export function Logo({ text }: LogoProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Image
        src={
          mounted ? (resolvedTheme === "dark" ? logoLight : logoDark) : logoDark
        }
        alt="OWL Logo"
        width={24}
        height={24}
        className="h-6 w-6"
      />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
