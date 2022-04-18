module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans TC", "sans-serif"],
      paytone: ["Paytone One", "serif"],
      azeret: ["Azeret Mono", " monospace"],
      baloo: ["Baloo Da 2", "cursive"],
    },
    extend: {
      colors: {
        primary: "#03438D",
        secondary: "#EFECE7",
        warning: "#EEC32A",
        black: "#000400",
        subtitle: "#9B9893",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
