/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2CD9CE',
        'ui-00': '#141C1C'
      },
      fontFamily: {
        'dm': ["DM Mono", 'monospace'],
      }
    },
  },
  plugins: [],
}
