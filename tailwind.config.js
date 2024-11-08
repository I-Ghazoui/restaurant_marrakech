/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary-color)',
          10: 'rgba(212, 175, 55, 0.1)', // 10% opacity of primary color
        },
        secondary: 'var(--secondary-color)',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      display: ['Playfair Display', 'serif'],
    },
  },
  plugins: [],
}