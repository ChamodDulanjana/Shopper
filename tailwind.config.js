/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      margin: {
        '-22': '22px',
      },
      fontFamily: {
        'poppins' : ["Poppins", 'sans-serif'],
      },
      backgroundImage:{
        'hero-Gradiant': 'liner-gradiant(180deg, #fde1ff, #e1ffea22 60%)',
      },
      scale:{
        '105': '1.05',
      },
      transitionDuration: {
        '6': '6s'
      }
    },
  },
  plugins: [],
}