// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src//.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};