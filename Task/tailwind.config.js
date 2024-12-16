/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Screen2CLR: "#101826",
        topScreen: "#37415180",
        Rec: "#4B556380",
      },
    },
  },
  plugins: [],
};
