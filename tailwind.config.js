/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-white',
    'text-white',
    'text-neutral-800',
    'font-sans',
    'font-serif',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3b82f6',
        'primary-blue-dark': '#2563eb',
        'primary-blue-light': '#93c5fd',
        'accent-gold': '#f59e0b',
        'accent-gold-light': '#fcd34d',
        'neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        'white': '#ffffff',
        'black': '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

// We'll handle the forms plugin in the Next.js config
export default config;
