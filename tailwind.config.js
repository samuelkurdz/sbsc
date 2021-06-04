
module.exports = {
  prefix: '',
  purge: {
    // enabled: true,
    enabled: process.env.WEBPACK_DEV_SERVER === 'true' && process.argv.join(' ').indexOf('build') !== -1,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
       '8': 'repeat(8, minmax(0, 1fr))',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
       }
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
  // plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
