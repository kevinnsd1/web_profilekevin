/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          yellow: '#FFE600',
          pink: '#FF2E93',
          cyan: '#00E5FF',
          green: '#A3E635',
          orange: '#FF6B00',
          purple: '#9D4EDD',
          red: '#FF4757',
          blue: '#3B82F6',
          bg: '#FFFBEB',
          card: '#FFFFFF',
          dark: '#121212',
          black: '#000000',
        }
      },
      boxShadow: {
        'neo-sm': '3px 3px 0px 0px #000000',
        'neo': '5px 5px 0px 0px #000000',
        'neo-lg': '8px 8px 0px 0px #000000',
        'neo-xl': '12px 12px 0px 0px #000000',
        'neo-white': '5px 5px 0px 0px #FFFFFF',
        'neo-white-lg': '8px 8px 0px 0px #FFFFFF',
        'neo-pink': '5px 5px 0px 0px #FF2E93',
        'neo-cyan': '5px 5px 0px 0px #00E5FF',
        'neo-yellow': '5px 5px 0px 0px #FFE600',
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        heading: ['Space Grotesk', 'Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
