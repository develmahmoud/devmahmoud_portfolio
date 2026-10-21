/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Outfit', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#070b1e',
          900: '#0b1228',
          800: '#121a36',
          700: '#1a2448',
          600: '#243056',
        },
        gold: {
          300: '#f6d36b',
          DEFAULT: '#f0c14b',
          500: '#e8b923',
          600: '#c99a14',
        },
        cream: '#f7f4ec',
      },
      boxShadow: {
        gold: '0 10px 40px -12px rgba(240, 193, 75, 0.45)',
      },
    },
  },
  plugins: [],
};
