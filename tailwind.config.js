/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          1: "#00000090",
          2: "#00000085",
          3: "#00000070",
        },
        myWhite: {
          1: "#ffffff99",
          2: "#ffffff90",
          3: "#ffffff70",
        },
      },
    },
  },
  plugins: [],
};
