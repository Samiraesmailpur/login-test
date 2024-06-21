/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { max: "1161px" },
    },
    extend: {},
  },
  plugins: [],
};
