import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2fbf7',
          100: '#dcf7e8',
          200: '#bbefd4',
          300: '#8adfb5',
          400: '#55c88f',
          500: '#2fab72',
          600: '#22885b',
          700: '#1d6c49',
          800: '#1b563c',
          900: '#174734',
        },
        sand: '#f8f5ef',
        ink: '#163126',
      },
      boxShadow: {
        soft: '0 12px 40px rgba(17, 24, 39, 0.08)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(47,171,114,0.18), transparent 42%)',
      },
    },
  },
  plugins: [],
};

export default config;
