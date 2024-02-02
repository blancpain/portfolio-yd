import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      screens: {
        '8xl': { min: '3072px' },
        '7xl': { max: '2816px' },
        '6xl': { max: '2560px' },
        '5xl': { max: '2304px' },
        '4xl': { max: '2048px' },
        '3xl': { max: '1792px' },
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        // TODO: not sure about below...
        large: { min: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
        xs: { max: '479px' },
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96',
        primaryDark: '#58E6D9',
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
      backgroundImage: {
        circularLight:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 4px,#f5f5f5 12px,#f5f5f5 140px)',
        circularDark:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 7px,#1b1b1b 15px,#1b1b1b 140px)',
        circularLightXl:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 7px,#f5f5f5 120px)',
        circularDarkXl:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 12px,#1b1b1b 120px)',
        circularLightLg:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)',
        circularDarkLg:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)',
        circularLightMd:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 4px,#f5f5f5 50px)',
        circularDarkMd:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 50px)',
        circularLightSm:
          'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 4px,#f5f5f5 40px)',
        circularDarkSm:
          'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 6px,#1b1b1b 40px)',
      },
    },
  },
  plugins: [],
};
export default config;
