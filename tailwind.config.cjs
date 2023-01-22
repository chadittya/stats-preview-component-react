/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
      },
      colors: {
        "p-veryDarkBlue": "hsl(233, 47%, 7%)",
        "p-darkDesaturatedBlue": "hsl(244, 38%, 16%)",
        "p-softViolet": "hsl(277, 64%, 61%)",
        "n-white": "hsl(0, 0%, 100%)",
        "n-sligtlyTransparentWhiteMainP": "hsla(0, 0%, 100%, 0.75)",
        "n-sligtlyTransparentWhiteStatH": "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        "lexend-deca": "'Lexend Deca', sans-serif",
      },
    },
  },
  plugins: [],
};
