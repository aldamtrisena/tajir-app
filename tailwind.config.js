/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        home_page: "url('/image/imagebg.png')",
      },
      backgroundColor: {
        primary: "#840A8B",
        secondary: "#B9D02F",
      },
      colors: {
        primary: "#840A8B",
        standart: "#2A3242",
      },
    },
  },
  plugins: [],
};
