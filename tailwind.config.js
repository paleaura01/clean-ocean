module.exports = {

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custombg': '#356CA7',
      },
      width: {
        '85.33': '21.3rem',
        '128': '32rem',
        'face': '55rem',
        '256': '64rem',
      }
    },
  },
  plugins: [],
}
