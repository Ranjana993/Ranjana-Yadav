/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html', './src/**/*.jsx'],
  theme: {
    extend: {
      animation: {
        heartbeat: 'heartbeat 1.5s infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 20%, 40%, 60%, 80%, 100%': {
            transform: 'scale(1)',
          },
          '10%, 30%, 50%, 70%, 90%': {
            transform: 'scale(1.3)',
          },
        },
      },
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
