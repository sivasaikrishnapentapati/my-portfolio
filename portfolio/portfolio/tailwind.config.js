/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e6edff',
          200: '#cde1ff',
          300: '#a4c7ff',
          400: '#5b9bff',
          500: '#1e6fff',
          600: '#0050e5',
          700: '#0040c6',
          800: '#002fa3',
          900: '#002580',
        },
        accent: {
          50: '#fef5f0',
          100: '#fce8de',
          200: '#f9d4bc',
          300: '#f4aa7f',
          400: '#ed7d4f',
          500: '#e65834',
          600: '#d1411f',
          700: '#a83419',
          800: '#842b16',
          900: '#6d2413',
        },
      },
      backgroundImage: {
        'gradient-subtle': 'linear-gradient(135deg, #f5f7fa 0%, #f9fbfd 100%)',
        'gradient-subtle-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      },
    },
  },
  plugins: [],
}
