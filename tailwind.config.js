/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html', './src/**/*.jsx'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'bona-nova-sc': ['"Bona Nova SC"', 'serif'],
      },
      fontWeight: {
        'playfair-400': 400,
        'playfair-700': 700,
      }
    },
    screens: {
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}
