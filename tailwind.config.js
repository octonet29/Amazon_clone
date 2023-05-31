/** @type {import('tailwindcss').Config} */
const twColors = require("tailwindcss/colors");
const colors = {
  transparent: twColors.transparent,
  black: "#3B404A",
  white: twColors.white,
  primary: "#ff9902",
  secondary: "#161D25",
  "bg-color": "#f2f2f5",
  aqua: "#268697",
};
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    keyframes: {
      animationOpacity: {
        from: { opacity: 0.2 },
        to: { opacity: 1 },
      },
      scaleIn: {
        "0%": {
          opacity: 0,
          transform: "scale(0.9)",
        },
        "50%": {
          opacity: 0.3,
        },
        "100%": {
          opacity: 1,
          transform: "scale(1)",
        },
      },
    },
    animation: {
      opacity: "animationOpacity .5s ease-in-out",
      scaleIn: "scaleIn .35s ease-in-out",
    },
  },
  plugins: [],
};
