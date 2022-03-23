module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        dark: '#121212',
        'dark-2': '#323232',
        'dark-3': '#131313',
        'dark-4': '#090909',
        'dark-5': '#0e0e0e',
        hero: '#FF542D',
        'hero-light': '#ff6745',
        'hero-dark': '#d74726',
      },
      fontFamily: {
        display: ['Dongle', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
