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
        large: { min: '1023px' }, // custom min for hamburger menu
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
        rainbow: 'rainbow 1s linear infinite',
      },
      keyframes: {
        rainbow: {
          '0%, 100%': { backgroundColor: '#121212' },
          '25%': { backgroundColor: 'rgba(131,58,180,1)' },
          '50%': { backgroundColor: 'rgba(253,29,29,1)' },
          '75%': { backgroundColor: 'rgba(252,176,69,1)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
