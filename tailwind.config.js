/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
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
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
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
          DEFAULT: '#00609D',
          foreground: 'hsl(var(--primary-foreground))',
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
          600: '#209842',
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        extended: {
          50: '#FFE6CC',
          100: '#FFF3B8',
          150: '#FFEBD7',
          200: '#FFD400',
          300: '#FFAE4C',
          400: '#EF8B22',
          500: '#DE8944',
          600: '#D1803F',
          700: '#E6AB2C',
        },
        danger: {
          50: '#F8E2E2',
          100: '#FFE0E0',
          200: '#D60000',
          300: '#C40C0C',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#EBEBEB',
          300: '#E0E0E4',
          400: '#C3C6CB',
          500: '#9DA4AE',
          600: '#959595',
          700: '#7F7F7F',
          800: '#767676',
          850: '#313131',
          900: '#565656',
          950: '#121212',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
