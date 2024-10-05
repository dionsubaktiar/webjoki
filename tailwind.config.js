/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      //   fontFamily: {
      //     burtons: "burtons",
      //     poppins: ["Poppins", "sans-serif"],
      //     productSans: ["Product Sans", "sans-serif"],
      //   },
      colors: {
        redCustom: "#E47572",
        blueCustom: "#95C8E0",
      },
    },
  },
  plugins: [],
};
