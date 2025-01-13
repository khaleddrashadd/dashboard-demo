/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        99: '99',
        999: '999',
        9999: '9999',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },

      screens: {
        xs: '480px', // Matches Bootstrap's xs
        sm: '576px', // Matches Bootstrap's sm breakpoint
        md: '768px', // Matches Bootstrap's md breakpoint
        lg: '992px', // Matches Bootstrap's lg breakpoint
        xl: '1200px', // Matches Bootstrap's xl breakpoint
        '2xl': '1400px', // Matches Bootstrap's xxl breakpoint
      },
      colors: {
        primary: {
          50: '#DEEAF2',
          100: '#CCDFEB',
          200: '#ACDCFF',
          300: '#7D99B3',
          400: '#0095FF',
          500: '#00609D',
          600: '#01376A',
          700: '#25215D',
        },
        secondary: {
          50: '#CEEFDB',
          100: '#DFF4F1',
          150: '#CCE9E4',
          200: '#6FD195',
          250: '#F2FAF8',
          300: '#55D236',
          400: '#00A98F',
          500: '#1B8354',
        },
        extended: {
          50: '#FFE6CC',
          100: '#FFF3B8',
          150: '#FFEBD7',
          200: '#FFD400',
          300: '#EF8B22',
          350: '#DE8944',
          400: '#D1803F',
        },
        danger: {
          50: '#F8E2E2',
          100: '#C40C0C',
          200: '#F1D2D4',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#EBEBEB',
          300: '#E0E0E4',
          400: '#C3C6CB',
          500: '#9DA4AE',
          600: '#959595',
          700: '#858793',
          800: '#767676',
          850: '#313131',
          900: '#565656',
          950: '#121212',
        },
      },
    },
  },
  plugins: [],
};
