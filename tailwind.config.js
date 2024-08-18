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
      },
      boxShadow: {
        'all': '0 0 10px 1000px rgba(0, 0, 0, 0.5)',
        'custom': '-300px 300px 0 300px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}