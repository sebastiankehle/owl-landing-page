"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import logoDark from "../../../public/logo_dark.svg";
import logoLight from "../../../public/logo_light.svg";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    }, 2500);

    document.body.style.overflow = "hidden";
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background dark:bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.9, ease: "easeInOut" }}
      onAnimationComplete={() => setIsLoading(false)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={
            mounted
              ? resolvedTheme === "dark"
                ? logoLight
                : logoDark
              : logoDark
          }
          alt="OWL Logo"
          width={128}
          height={128}
          className="h-32 w-32"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
