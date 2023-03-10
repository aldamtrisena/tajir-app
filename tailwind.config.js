/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home_page: "url('/image/imagebg.png')",
        green_third: "url('/image/bg-green.png')",
        curve_purple: "url('/image/curve-purple.png')",
        linearGreen: "linear-gradient(270deg, #C5DB41 0%, #B4C73C 100%);",
        woHead: "url('/image/bg-wo-headers.png')",
      },
      backgroundColor: {
        primary: "#840A8B",
        secondary: "#B9D02F",
      },
      colors: {
        primary: "#840A8B",
        standart: "#2A3242",
        greenCard: "#EAF1C1",
      },

      maxWidth: {
        xl: "1344px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
