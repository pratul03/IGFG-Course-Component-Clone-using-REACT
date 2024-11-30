/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Define your custom color here
        greenGFG: "#22a779",
        oneDark: "#282C34",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
