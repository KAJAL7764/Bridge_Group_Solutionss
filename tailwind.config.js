/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  theme: {
    extend: {
      colors: {
        "soft-gold": "#FFD700",
        "deep-purple": "#4B0082",
      },
    },
  },
  plugins: [],
}

