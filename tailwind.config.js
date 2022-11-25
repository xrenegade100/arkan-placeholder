/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'logo': 'Rajdhani',
      },

      colors: {
        'logo': '#F9A825',
      },

      keyframes: {
        fadein: {
          '0%': { opacity: '0%' },
          '90%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        },
        cover: {
          '0%': { 'background-color': 'black' },
          '90%': { 'background-color': 'black' },
          '100%': { 'background-color': 'transparent' },
        }
      },

      animation: {
        'fade-in': 'fadein 8s linear',
        'cover': 'cover 8s linear',
      }
    },
  },
  plugins: [],
}
