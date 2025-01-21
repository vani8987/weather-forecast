/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
            "blockColor": 'var(--block-color)',
            "highlightColor": 'var(--highlight--color)',
            "textColor": 'var(--text--color)',
            "activeColor": 'var(--active--color)',
            "hoverColor": 'var(--hover--color)'
        },
        boxShadow: {
            castomShadom: '7px 7px 8px 0px rgba(0, 0, 0, 0.712)',
        },
        keyframes: {
            "fade-in-left": {
              "0%": {
                  opacity: 0,
                  transform: "translate3d(-100%, 0, 0)",
              },
              "100%": {
                  opacity: 1,
                  transform: "translate3d(0, 0, 0)",
              },
            },
        },
        animation: {
            fadeinleft: 'fade-in-left 0.4s ease-in-out',
        }
      },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}

