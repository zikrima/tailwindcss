/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: { 
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#0e7490',
        'dark': '#111827'
      }
    },
  },
  plugins: [],
}

