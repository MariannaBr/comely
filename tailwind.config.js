module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'flower1': "url('/pics/plant6.jpg')",
      }),
    },
    colors: {
      antracit: {
        lighter: '#e3fdfd',
        default: '#a6e3e9',
        darker: '#71c9ce',
      },
      pinky: {
        lighter: '#fcf5ee',
        default: '#fbe8e7',
        darker: '#ffc4d0',
        sweet: '#e14594',
      },
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '10xl': '8rem',
    },
    fontFamily: {
      'lemonada': ['Lemonada'],
      'chilanka': ['Chilanka']
    },
  },
  variants: {
    backgroundImage: ['responsive'],
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
