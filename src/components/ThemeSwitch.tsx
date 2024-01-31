"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  // TODO: add animation for loading/switching theme icons also on reload
  if (!mounted) return <SunIcon handleClick={() => setTheme("light")} />;

  if (resolvedTheme === "dark") {
    return <SunIcon handleClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <MoonIcon handleClick={() => setTheme("dark")} />;
  }
}
