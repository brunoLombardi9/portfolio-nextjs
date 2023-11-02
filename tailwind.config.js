/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./utils/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "md": "900px",
    },
    extend: {
      colors: {
        primary: "#040508",
        hoverPrimary: "#181b1e",
        grey: "#64748b",
        lightGrey: "#d5ddee",
        lightGreen: "#54d3ce",
      },
    },
  },
  plugins: [],
};
