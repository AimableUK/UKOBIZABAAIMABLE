import scrollbarHide from 'tailwind-scrollbar-hide';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBody: '#fef6dd',
        primaryCard: '##ffffff',
        primaryBorder: '#9d8640',
        primaryDetail: '#f9f6ea',
        primaryBg: '#e0ce93',
        primaryText: '#403d22'
      }
    },
  },
  plugins: [scrollbarHide],
}

