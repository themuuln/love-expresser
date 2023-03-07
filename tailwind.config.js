/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-purple": "#6c5b7b",
        "soft-violet": "#a37da5",
        "lavender-pink": "#d4bbed",
        "coral-pink": "#ffa5ab",
        "bright-pink": "#ff70a6",
      },
    },
  },
  plugins: [require("daisyui")],
};
