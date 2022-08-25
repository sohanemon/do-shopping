/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    theme: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "red",
          "primary-focus": "mediumblue",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
