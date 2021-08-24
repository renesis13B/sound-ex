module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/atoms/*.{js,ts,jsx,tsx}',
    './src/components/organisms/*.{js,ts,jsx,tsx}',
    './src/components/molecules/*.{js,ts,jsx,tsx}',
    './src/components/templates/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'deep-purple': {
          900: '#311b92',
          'accent-700': '#6200ea',
        },
        teal: {
          'accent-400': '#1de9b6',
        },
        green: {
          'accent-spotify': '#1AB26B',
        },
      },
      spacing: {
        'ratio': '56.4%',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(101, 31, 255, 0.4)',
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'before'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
