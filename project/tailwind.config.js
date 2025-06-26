/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    
  ],
  theme: {
    extend: {
      backgroundlmage: {
"gradient—radial": " radial—g radient(var(——tw—g radient—stops) ) ",
"gradient—conic" : "conic—gradient (from 18Ødeg at 50% 50%, var(——tw—g radient—stops))"},
  },
  plugins: [],
}
}