/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      letterSpacing: {
        '1': '5px'
      },
      colors:{
        /* PRIMARY */
        'bg-dashboard': '#171920',
        'app-item': '#262933',
        /* Dash */
        'dash-menu': '#0B0E11',
        'dash-nav-text': '#7D7D7D',
        'dash-text': '#C5C9DB',
        'dash-text2': '#B6B6B6',
        'dash-bg': '#0b0e11',
        'dash-item': '#15171E',
        'nav-text': '#C5C9DB',
        'nav-text2': '#dcdfeb',
        /* gradient */
        'blue': '#058490',
        'green': '#078466',
        /* Gradient opacity */
        'blue2': 'rgba(5,132,144,0.30015756302521013)',
        'green2': 'rgba(7,132,102,0.31416316526610644)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'custom': '#2626265c',
        'custom-btn': '#262626ab',
        'custom-bg': '#0b0e11',
        'custom-menu-bg': '#191919',
        'custom-modal': 'rgba(0, 0, 0, 0.764)'
      },
      width: {
        'calc-100-minus-12rem': 'calc(100% - 13rem)',
        'calc-submenu': 'calc(100% - 3rem)'
      },
      height: {
        'h-culti': 'calc(100vh - 1rem)'
      },
      textColor: {
        'custom-blue': '#38a3ca'
      },
      rotate: {
        '180': '-180deg'
      },
      boxShadow: {
        'custom': '0 5px 30px -16px #06b6d4',
        'custom2': '0 10px 50px -10px #02b6d4',
        'custom3': '0 5px 20px -2px #02b6d4',
      },
      boxShadow: {
        'custom': '0 5px 25px 1px #078466',
        'custom2': '0 0px 40px -10px #078466',
        'custom3': '0 0px 20px -10px #078466',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.vertical-lr': {
          writingMode: 'vertical-lr',
        },
      }

      addUtilities(newUtilities)
    }
  ],
}
