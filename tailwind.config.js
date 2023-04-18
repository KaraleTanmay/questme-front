/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pri: "#0099ff",
        secbl: "#00b2ca",
        or: "#f79256",
        new: "#7dcfb6",
        orli: "#fbd1a2",
      }
    },
  },
  plugins: [],
}
