/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    screens: {
      sm: "320px", // => @media (min-width: 320px) { Movil }
      md: "768px", // => @media (min-width: 768px) { Tablet }
      lg: "1024px", // => @media (min-width: 1024px) { Pant-Pequeña }
      xl: "1280px", // => @media (min-width: 1280px) { Pant-Mediana }
      "2xl": "1536px", // => @media (min-width: 1536px) { Pant-Grande }
    },
    colors: {
      black: "#030001",
      blue: "#3857BF",
      blueOpacity: "#3857BF80",
      grey: "#919191",
      greyText: "#91919180",
      greyOpacity: "#91919170",
      white: "#FFFFFF",
      transparent: "transparent",
    },
  },
  plugins: [],
};
