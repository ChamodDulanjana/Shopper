/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        '-22': '22px',
      },
    },
  },
  plugins: [],
}