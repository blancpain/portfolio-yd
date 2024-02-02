'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './Icons';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <SunIcon handleClick={() => setTheme('light')} />;

  if (resolvedTheme === 'dark') {
    return <SunIcon handleClick={() => setTheme('light')} />;
  }

  if (resolvedTheme === 'light') {
    return <MoonIcon handleClick={() => setTheme('dark')} />;
  }
}
