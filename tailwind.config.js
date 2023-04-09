/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ["Noto Sans JP", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        back: "#111827",
        backHover: "#374151",
        str: "#E5E7EB",
        accent: "#0ED3CF",
        accentHover: "#0E9B9D",
      },
    },
  },
  plugins: [],
};
