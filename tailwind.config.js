/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        sky: {
          primary: "#0ea5e9",

          secondary: "#fb7185",

          accent: "#d1d5db",

          neutral: "#141724",

          "base-100": "#fff",

          info: "#a5b4fc",

          success: "#1B6F4C",

          warning: "#CF9307",

          error: "#E46276",
        },
      },
      {
        red: {
          primary: "#f43f5e",

          secondary: "#93c5fd",

          accent: "#d1d5db",

          neutral: "#141724",

          "base-100": "#fff",

          info: "#a5b4fc",

          success: "#1B6F4C",

          warning: "#CF9307",

          error: "#E46276",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
