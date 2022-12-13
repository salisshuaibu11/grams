/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'feature-img': "url('/images/feature.png')",
      },
      colors: {
        primary: '#07352E',
        primaryLight: '#076B5C',
        secondary: '#17BF5F',
      }
    },
    fontFamily  : {
      body: [
        'IBM Plex Sans',
        'Manrope',
        'sans-serif',
      ],
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'),],
}