module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D2D53',
        secondary: '#86C426',
        warning: '#e6a23c',
        'gray-1': '#E5E5E5',
        'gray-4': '#BDBDBD',
        'blue-2': '#005D96',
        'blue-3': '#005184',
        'blue-4': '#003556',
        'light-blue-1': '#EEF8FF',
        'light-blue-2': '#EBF2FF',
        'gray-2': '#f3f3f3',
        'light-green-1': '#F9FFF0',
        'light-green-2': '#DEF0C2',
        'gray-3': '#707070',
        yellow: '#FDCC3A'
      }
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1025px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '768px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' }
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}