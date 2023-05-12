/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1E1E1E",
        yellow: "#F7EDBD",
        green: "#16615D",
        coral: "#FF3B65",
      },
    },
  },
  plugins: [],
};
