"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import logoDark from "../../../public/owl_dark.png";
import logoLight from "../../../public/owl_light.png";

interface LogoProps {
  text: string;
}

export function Logo({ text }: LogoProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const params = useParams();
  const lang = params.lang as string;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href={`/${lang}`} className="flex items-center gap-2">
      <Image
        src={
          mounted ? (resolvedTheme === "dark" ? logoLight : logoDark) : logoDark
        }
        alt="OWL Logo"
        height={24}
        className="h-6"
      />
      <span className="hidden text-sm font-semibold lg:block">{text}</span>
    </Link>
  );
}
