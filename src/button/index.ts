import {getColors} from "../utils";

module.exports = function () {
  return ({e, addUtilities, theme, variants}) => {
    const colors = getColors(theme)
    const btn = generateColors(e, colors);
    addUtilities(btn, variants('btn'));
  }
}

const generateColors = (e, colors) => {
  const classes = {
    '.btn': {
      ['@apply py-2 px-4 inline-flex items-center leading-none justify-center transition ease-in duration-200 font-semibold shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed']: {}
    },
    '.btn.rounded': {
      ['@apply rounded-full']: {}
    },
    '.btn.square': {
      ['@apply rounded-none']: {}
    },
    '.btn.flat': {
      ['@apply px-3 py-5']: {}
    }
  }

  Object.keys(colors).forEach(color => {
    classes[`.btn.btn-${color}:not(.outlined)`] = {
      [`@apply text-white bg-${color}-500 hover:bg-${color}-700 focus:ring-${color}-500 focus:ring-offset-${color}-200`]: {}
    }
    classes[`.btn.btn-${color}.outlined`] = {
      [`@apply border-2 text-${color}-500 border-${color}-500 hover:bg-${color}-500 hover:text-white focus:outline-none`]: {}
    }
  })

  return classes
}
