import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Scale AI & Palantir Editorial Palette
        canvas: {
          DEFAULT: '#F4F3EF',
          white: '#FAFAF8',
          subtle: '#ECEBE4',
        },
        dark: {
          DEFAULT: '#111111',
          primary: '#111111',
          secondary: '#1A1A1A',
          card: '#161616',
          border: 'rgba(255, 255, 255, 0.12)',
        },
        ink: {
          DEFAULT: '#161616',
          primary: '#161616',
          muted: '#757575',
          faint: '#A0A0A0',
        },
        signal: {
          DEFAULT: '#B6FF39',
          hover: '#A3F51E',
          subtle: 'rgba(182, 255, 57, 0.12)',
          contrast: '#111111',
        },
        border: {
          light: 'rgba(20, 20, 20, 0.14)',
          dark: 'rgba(255, 255, 255, 0.12)',
        },
        // Backward-compatible aliases for existing tests & legacy components
        brand: {
          DEFAULT: '#111111',
          crimson: '#DC2626',
          'crimson-hover': '#B91C1C',
          'crimson-subtle': 'rgba(220, 38, 38, 0.15)',
          cobalt: '#2563EB',
          'cobalt-hover': '#1D4ED8',
          'cobalt-subtle': 'rgba(37, 99, 235, 0.15)',
        },
        titanium: {
          100: '#F8FAFC',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
        },
        surface: {
          card: '#161616',
          border: 'rgba(20, 20, 20, 0.14)',
          hover: '#1F1F1F',
          highlight: '#2D2D2D',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '2px',
        md: '4px',
        lg: '4px',
        xl: '4px',
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        tight: '-0.015em',
        widest: '0.15em',
      },
    },
  },
  plugins: [],
};

export default config;
