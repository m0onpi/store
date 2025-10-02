// tailwind.config.js

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        chess: ["'Times New Roman'", "serif"], // Add a classic serif font
      },
      colors: {
        'sigma-blue': '#1BABA5',
        'chess-black': '#333333',
        'chess-white': '#FFFFFF',
        'chess-brown': '#8B4513',
        'chess-green': '#228B22',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};