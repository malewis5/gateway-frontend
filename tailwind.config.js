/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url(https://res.cloudinary.com/dn4bh5hdx/image/upload/e_colorize:0,co_rgb:2463EB/v1668399943/Gateway%20Subs/hero_znsios.png)',
      },
      colors: {
        primary: '#2463ebff',
        darkBlue: '#1d4ed8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
