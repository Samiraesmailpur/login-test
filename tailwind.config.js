/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { min: "768px", max: "1161px" },
    },
    extend: {},
  },
  plugins: [],
};
