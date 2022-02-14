module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  important: false,
  darkMode: "class",
  separator: ":",
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        print: { raw: "print" },
      },
      colors: {
        transparent: "transparent",
        primary: "#091f5d",
        bluePrimary: "#484DFF",
        // secondary: "#e3e0e3",
        secondary: "#546681",
        lightBg1: "#f5f5f7",
        // darkPrimary: "#1e242a",
        darkTextPrimary: "#e1e1e1",
        darkTextSecondary: "#a2a2a2",
        darkPrimary: "#131415",
        darkBluePrimary: "#0092CC",
        darkBg1: "#131415",
        darkBg2: "#292929",
        black: "#1e1e1e",
        darkGray: "#22292F",
        white: "#FFF",
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
