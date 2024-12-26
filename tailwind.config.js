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
            castomShadom: '4px 4px 8px 0px rgba(3, 3, 3, 0.5)',
        }
      },
    },
    plugins: [],
}

