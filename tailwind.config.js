/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-inter)"],
        heading: ["var(--font-orbitron)"],
        text: ["var(--font-quicksand)"],
      },
      colors: {
        primary: {
          50: "#E9EFFC",
          100: "#C1D2F6",
          200: "#99B4EF",
          300: "#7197E9",
          400: "#4A7AE3",
          500: "#225DDD",
          600: "#1B4AB1",
          700: "#143885",
          800: "#0D2559",
          900: "#07132C",
        },
      },
    },
  },
  plugins: [],
};
