/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: { colors: { brand: { DEFAULT: "#0f172a", accent: "#7c3aed" } } } },
  plugins: []
};
