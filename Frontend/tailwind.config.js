/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#646cff',
          hover: '#535bf2',
        },
        secondary: {
          DEFAULT: '#61dafb',
          hover: '#58c7e3',
        },
      },
    },
  },
  plugins: [],
}