/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      colors: {
        ink: '#1B1712',
        inkmuted: '#6B645C',
        paper: '#FFFFFF',
        stone: '#F8F6F1',
        line: '#E9E4DB',
        clay: {
          50: '#F7EEE6',
          400: '#B87A4C',
          500: '#A15C33',
          600: '#8B4B29',
          700: '#6E3A20',
        },
        olive: {
          400: '#78876A',
          500: '#5C6B4E',
          600: '#4A5740',
        },
        gold: '#C9A46A',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Work Sans"', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(27,23,18,0.06)',
      },
      borderRadius: {
        sm: '4px',
      },
    },
  },
  plugins: [],
};
