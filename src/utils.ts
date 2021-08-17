export const getColors = (theme) => {
  const colors = theme('colors')

  delete colors['transparent']
  delete colors['current']
  delete colors['white']
  delete colors['black']

  return colors
}
