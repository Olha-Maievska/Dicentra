/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      screens: {
        '2xl': '1290px',
      },
      padding: '15px',
      center: true,
    },
    extend: {
      fontFamily: {
        roboto: 'Roboto, sans-serif',
        ubuntu: 'Ubuntu, sans-serif',
      },
      colors: {
        dark: '#292933',
        link: '#173835',
        bordo: '#471f27',
        light: '#f6f3f1',
        sale: '#f873af',
        gold: '#b69b89',
        rose: '#f8e1de',
        textGrey: '#4f4f65',
        brGrey: '#cfcfd7',
        grey: '#666',
        green: '#365150',
        btnHoveredDark: '#424251',
        btnHoveredGold: '#c4b3a7',
        btnPressedGold: '#9d816e',
        btnDisabledGold: '#c4bab4',
        btnPressedDark: '#11111b',
        btnDisabledDark: '#696970',
      },
      borderRadius: {
        '26': '26px',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fade: 'fade 2s easy-out',
      },
      backgroundImage: {
        'selection-form': 'url(/images/selection-form-bg.jpg)',
      },
    },
  },
}
