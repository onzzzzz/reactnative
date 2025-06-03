/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}" , "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        accent: "#AB8BFF", // Purple 500
        secondary: "#151312", // Amber 500
        light: {
          100: "#D6C6FF", // Purple 100
          200: "#A8B5DB", // Blue 200
          300: "#9CA4AB", // Gray 300
        },
        dark: {
          100: "#22af3d", 
          200: "#0f0d23", 
        },
        background: "#F3F4F6", // Gray 200
        text: "#1F2937", // Gray 800
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
}