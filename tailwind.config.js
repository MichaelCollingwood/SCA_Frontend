/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      'sans': 'Helvetica, Arial, sans-serif',
    },
    extend: {
      backgroundImage: {
        'turner': "url('../../public/burning_commons_turner.jpg')",
        'bg-header': "url('../../public/Logo.PNG')",
      }
    }
  },
  plugins: [],
}