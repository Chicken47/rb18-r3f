/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rbred: "#EC1845",
        rbyellow: "#FED502",
        whiteish: "#f4ebee",
        rbblue: "#000B8D"
      },
      keyframes: {
        "slow-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "slow-spin": "slow-spin 5s linear infinite",
      },
    },
  },
  plugins: [],
}

