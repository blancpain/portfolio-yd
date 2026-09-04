'use client';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from './Icons';

// Both icons are rendered and the active one is chosen with the `dark` class
// that next-themes sets on <html>, so the markup is identical on the server
// and the client and no mounted-state effect is needed.
export default function ThemeSwitch() {
  const { setTheme } = useTheme();

  return (
    <>
      <SunIcon
        className="hidden dark:block"
        handleClick={() => setTheme('light')}
      />
      <MoonIcon
        className="block dark:hidden"
        handleClick={() => setTheme('dark')}
      />
    </>
  );
}
