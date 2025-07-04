/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 important: scans all JSX/TSX files in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
