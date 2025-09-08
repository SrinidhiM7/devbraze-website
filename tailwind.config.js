/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'devbraze-blue': '#3FA9F5',
        'devbraze-purple': '#9B51E0',
      },
      backgroundImage: {
        'devbraze-gradient': 'linear-gradient(90deg, #3FA9F5, #9B51E0)',
        'devbraze-gradient-vertical': 'linear-gradient(180deg, #3FA9F5, #9B51E0)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slower': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #3FA9F5, 0 0 10px #3FA9F5, 0 0 15px #3FA9F5' },
          '100%': { boxShadow: '0 0 10px #9B51E0, 0 0 20px #9B51E0, 0 0 30px #9B51E0' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      // Performance optimizations
      willChange: {
        'transform': 'transform',
        'opacity': 'opacity',
        'filter': 'filter',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
  // Performance optimizations
  corePlugins: {
    preflight: true,
  },
}

