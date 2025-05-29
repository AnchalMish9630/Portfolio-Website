/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes:{
        blob:{
          '0%': {transform: 'scale(1)'},
          '33%': {transform: 'scale(1.2)'},
          '66%': {transform: 'scale(0.8)'},
          '0%': {transform: 'scale(1)'},
        },
      },
    },
    animation:{
      blob: 'blob 10s infinite'
    },

  backgroundImage: {
  'skills-gradient': 'linear-gradient(to bottom, #0b0118, #1a0b2e 50%, #10011e 100%)',
}
  },
  plugins: [],
}