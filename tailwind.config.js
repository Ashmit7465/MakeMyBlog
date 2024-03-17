/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cream: "#fed7aa",
      flexblue: "#38bdf8",
      peckblue: "#bae6fd",
      submitClr: "#38bdf8",
      formClr: "#0ea5e9",
      mainClr: "#93c5fd",
    },
    extend: {
      // 'bgimg': "url('../public/dominic-schroder-FIKD9t5_5zQ-unsplash.jpg')",
    },
  },
  plugins: [],
};
