/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    
    themes: [
      false,
      {
        mytheme: {

          "primary": "#1C2833",

          "secondary": "#D35400",

          "accent": "#1FB2A6",

          "neutral": "#191D24",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}
