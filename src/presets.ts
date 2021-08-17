const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        'default': colorsWithDefault(colors.gray),
        'primary': colorsWithDefault(colors.blueGray),
        'secondary': colorsWithDefault(colors.violet),
        'success': colorsWithDefault(colors.green),
        'info': colorsWithDefault(colors.blue),
        'warn': colorsWithDefault(colors.orange),
        'danger': colorsWithDefault(colors.red),
      },
    }
  },

  plugins: [
    require('./button')()
  ]
}

function colorsWithDefault(colors) {
  return {...colors, DEFAULT: colors['500']}
}
