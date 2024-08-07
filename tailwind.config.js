/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "767px" },
      md: { max: "1161px" },
    },
    extend: {
      colors: {
        "primary": "#f07e27",
        "primary-dark": "#de6b0e",
        "secondary": "#e6513e",
        "secondary-dark": "#c23c2a",
        "aqua": "#17a2b8",
        "aqua-dark": "#0891b2",
        "red": "#ff0000",
        "green": "#28a745",
        "status-badge-brown": "#d6a779",
        "status-badge-aqua": "#3195a5",
        "status-badge-lime": "#1abc9c",
        "burgundy": "#ef4444",
        "light-green": "#d3e2d6"
  
      },
      boxShadow: {
        'round': '0px 0px 7px 0px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        'xxs': '.6rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};
